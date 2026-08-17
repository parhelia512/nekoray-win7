#pragma once

#include <QList>
#include <QMutex>
#include <map>
#include <memory>

#include "Database.h"
#include "include/database/entities/OtpProfile.h"

namespace Configs {
    class OtpProfilesRepo {
    private:
        Database &db;
        mutable QMutex mutex;
        mutable std::map<int, std::weak_ptr<OtpProfile>> identityMap;

        void createTables() const;

        [[nodiscard]] bool otpProfilesColumnExists(const char *columnName) const;

        void saveToDatabase(const OtpProfile *profile, int id) const;

        [[nodiscard]] std::shared_ptr<OtpProfile> otpProfileFromRow(SQLite::Statement &stmt) const;

        [[nodiscard]] int NewOtpProfileID() const;

    public:
        explicit OtpProfilesRepo(Database &database);

        [[nodiscard]] static std::shared_ptr<OtpProfile> NewOtpProfile();

        bool AddOtpProfile(std::shared_ptr<OtpProfile> &profile);

        [[nodiscard]] std::shared_ptr<OtpProfile> GetOtpProfile(int id) const;

        [[nodiscard]] std::shared_ptr<OtpProfile> GetOtpProfileByName(const QString &name) const;

        void DeleteOtpProfile(int id);

        void DeleteOtpProfiles(const QList<int> &ids);

        [[nodiscard]] QList<std::shared_ptr<OtpProfile>> GetAllOtpProfiles() const;

        [[nodiscard]] QList<int> GetAllOtpProfileIds() const;

        bool Save(const std::shared_ptr<OtpProfile> &profile);

        void UpdateOtpProfilesOrder(const QList<int> &idsInOrder);
    };
} // namespace Configs
