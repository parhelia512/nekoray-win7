#include "include/database/OtpProfilesRepo.h"

#include <QMutexLocker>

namespace Configs {
    OtpProfilesRepo::OtpProfilesRepo(Database &database) : db(database) {
        createTables();
    }

    void OtpProfilesRepo::createTables() const {
        db.exec(R"(
            CREATE TABLE IF NOT EXISTS otp_profiles (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL DEFAULT '',
                issuer TEXT NOT NULL DEFAULT '',
                secret TEXT NOT NULL DEFAULT '',
                algorithm INTEGER NOT NULL DEFAULT 0,
                type INTEGER NOT NULL DEFAULT 0,
                digits INTEGER NOT NULL DEFAULT 6,
                period INTEGER NOT NULL DEFAULT 30,
                counter INTEGER NOT NULL DEFAULT 0,
                sort_order INTEGER NOT NULL DEFAULT 0,
                created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
                updated_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
            )
        )");
        if (!otpProfilesColumnExists("sort_order"))
            db.exec("ALTER TABLE otp_profiles ADD COLUMN sort_order INTEGER NOT NULL DEFAULT 0");
    }

    bool OtpProfilesRepo::otpProfilesColumnExists(const char *columnName) const {
        auto pragma = db.query("PRAGMA table_info(otp_profiles)");
        if (!pragma) return false;
        while (pragma->executeStep()) {
            if (pragma->getColumn(1).getText() == std::string(columnName)) return true;
        }
        return false;
    }

    void OtpProfilesRepo::saveToDatabase(const OtpProfile *profile, int id) const {
        // sort_order and created_at live on the row, not the entity: preserved on update, set on insert.
        db.exec(
            "INSERT OR REPLACE INTO otp_profiles "
            "(id, name, issuer, secret, algorithm, type, digits, period, counter, sort_order, created_at, updated_at) "
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, "
            "COALESCE((SELECT sort_order FROM otp_profiles WHERE id = ?), "
            "(SELECT COALESCE(MAX(sort_order), 0) + 1 FROM otp_profiles)), "
            "COALESCE((SELECT created_at FROM otp_profiles WHERE id = ?), strftime('%s', 'now')), "
            "strftime('%s', 'now'))",
            id,
            profile->name.toStdString(),
            profile->issuer.toStdString(),
            profile->secret.toStdString(),
            static_cast<int>(profile->algorithm),
            static_cast<int>(profile->type),
            profile->digits,
            profile->period,
            profile->counter,
            id,
            id);
    }

    std::shared_ptr<OtpProfile> OtpProfilesRepo::otpProfileFromRow(SQLite::Statement &stmt) const {
        auto profile = std::make_shared<OtpProfile>();
        profile->id = stmt.getColumn(0).getInt();
        profile->name = QString::fromStdString(stmt.getColumn(1).getString());
        profile->issuer = QString::fromStdString(stmt.getColumn(2).getString());
        profile->secret = QString::fromStdString(stmt.getColumn(3).getString());
        profile->algorithm = static_cast<OTP::Algorithm>(stmt.getColumn(4).getInt());
        profile->type = static_cast<OTP::Type>(stmt.getColumn(5).getInt());
        profile->digits = stmt.getColumn(6).getInt();
        profile->period = stmt.getColumn(7).getInt();
        profile->counter = stmt.getColumn(8).getInt64();
        return profile;
    }

    int OtpProfilesRepo::NewOtpProfileID() const {
        auto query = db.query("UPDATE entity_ids SET otp_profile_last_id = otp_profile_last_id + 1 RETURNING otp_profile_last_id");
        if (query && query->executeStep()) {
            return query->getColumn(0).getInt();
        }
        return 0;
    }

    std::shared_ptr<OtpProfile> OtpProfilesRepo::NewOtpProfile() {
        return std::make_shared<OtpProfile>();
    }

    bool OtpProfilesRepo::AddOtpProfile(std::shared_ptr<OtpProfile> &profile) {
        if (!profile || profile->id >= 0) return false;
        profile->id = NewOtpProfileID();
        QMutexLocker locker(&mutex);
        identityMap[profile->id] = std::weak_ptr<OtpProfile>(profile);
        saveToDatabase(profile.get(), profile->id);
        return true;
    }

    std::shared_ptr<OtpProfile> OtpProfilesRepo::GetOtpProfile(int id) const {
        QMutexLocker locker(&mutex);
        if (auto it = identityMap.find(id); it != identityMap.end()) {
            if (auto shared = it->second.lock()) return shared;
            identityMap.erase(it);
        }

        auto query = db.query("SELECT id, name, issuer, secret, algorithm, type, digits, period, counter FROM otp_profiles WHERE id = ?", id);
        if (!query || !query->executeStep()) return nullptr;

        auto profile = otpProfileFromRow(*query);
        identityMap[id] = std::weak_ptr<OtpProfile>(profile);
        return profile;
    }

    std::shared_ptr<OtpProfile> OtpProfilesRepo::GetOtpProfileByName(const QString &name) const {
        auto query = db.query("SELECT id FROM otp_profiles WHERE name = ? ORDER BY id LIMIT 1", name.toStdString());
        if (!query || !query->executeStep()) return nullptr;
        return GetOtpProfile(query->getColumn(0).getInt());
    }

    void OtpProfilesRepo::DeleteOtpProfile(int id) {
        QMutexLocker locker(&mutex);
        identityMap.erase(id);
        db.exec("DELETE FROM otp_profiles WHERE id = ?", id);
    }

    void OtpProfilesRepo::DeleteOtpProfiles(const QList<int> &ids) {
        if (ids.isEmpty()) return;
        QMutexLocker locker(&mutex);
        std::vector<int> toDelete;
        toDelete.reserve(ids.size());
        for (const int id : ids) {
            identityMap.erase(id);
            toDelete.push_back(id);
        }
        db.execDeleteByIdIn("otp_profiles", "id", toDelete);
    }

    QList<std::shared_ptr<OtpProfile>> OtpProfilesRepo::GetAllOtpProfiles() const {
        QList<std::shared_ptr<OtpProfile>> profiles;
        auto query = db.query("SELECT id, name, issuer, secret, algorithm, type, digits, period, counter FROM otp_profiles ORDER BY sort_order, id");
        if (!query) return profiles;

        QMutexLocker locker(&mutex);
        while (query->executeStep()) {
            const int id = query->getColumn(0).getInt();
            if (auto it = identityMap.find(id); it != identityMap.end()) {
                if (auto shared = it->second.lock()) {
                    profiles.append(shared);
                    continue;
                }
                identityMap.erase(it);
            }
            auto profile = otpProfileFromRow(*query);
            identityMap[id] = std::weak_ptr<OtpProfile>(profile);
            profiles.append(profile);
        }
        return profiles;
    }

    QList<int> OtpProfilesRepo::GetAllOtpProfileIds() const {
        QList<int> ids;
        auto query = db.query("SELECT id FROM otp_profiles ORDER BY sort_order, id");
        if (!query) return ids;
        while (query->executeStep()) ids.append(query->getColumn(0).getInt());
        return ids;
    }

    bool OtpProfilesRepo::Save(const std::shared_ptr<OtpProfile> &profile) {
        if (!profile || profile->id < 0) return false;
        QMutexLocker locker(&mutex);
        identityMap[profile->id] = std::weak_ptr<OtpProfile>(profile);
        saveToDatabase(profile.get(), profile->id);
        return true;
    }

    void OtpProfilesRepo::UpdateOtpProfilesOrder(const QList<int> &idsInOrder) {
        for (int i = 0; i < idsInOrder.size(); ++i) {
            db.exec("UPDATE otp_profiles SET sort_order = ? WHERE id = ?", i + 1, idsInOrder[i]);
        }
    }
} // namespace Configs
