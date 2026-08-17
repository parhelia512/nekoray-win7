#include "include/database/GroupsRepo.h"
#include "include/database/OtpProfilesRepo.h"
#include "include/database/ProfilesRepo.h"
#include "include/database/RoutesRepo.h"
#include "include/database/TrafficStatsRepo.h"

#include "include/global/Configs.hpp"

#include <QDir>
#include <QFileInfo>
#include <QThread>

namespace Configs {
    std::string DatabaseManager::deriveStatsDbPath(const std::string& dbPath) {
        const QFileInfo fi(QString::fromStdString(dbPath));
        return QDir(fi.absolutePath()).filePath("throne_stats.db").toStdString();
    }

    DatabaseManager::DatabaseManager(const std::string& dbPath)
        : db(dbPath), statsDb(deriveStatsDbPath(dbPath), true) {
        // Create entity IDs table first (before repos are initialized)
        createEntityIdsTable(db);
        
        // Initialize repos after entity_ids table is created
        initializeRepos();
    }

    bool DatabaseManager::entityIdsColumnExists(Database& db, const char* columnName) {
        auto pragma = db.query("PRAGMA table_info(entity_ids)");
        if (!pragma) return false;
        while (pragma->executeStep()) {
            if (pragma->getColumn(1).getText() == std::string(columnName)) return true;
        }
        return false;
    }

    void DatabaseManager::createEntityIdsTable(Database& db) {
        // Create table to track last used ID for each entity type
        // Single row with separate columns for each entity type
        db.exec(R"(
            CREATE TABLE IF NOT EXISTS entity_ids (
                profile_last_id INTEGER NOT NULL DEFAULT 0,
                group_last_id INTEGER NOT NULL DEFAULT 0,
                route_profile_last_id INTEGER NOT NULL DEFAULT 0,
                otp_profile_last_id INTEGER NOT NULL DEFAULT 0
            )
        )");

        // CREATE IF NOT EXISTS skips existing databases, so each added counter needs its own ALTER.
        if (!entityIdsColumnExists(db, "otp_profile_last_id"))
            db.exec("ALTER TABLE entity_ids ADD COLUMN otp_profile_last_id INTEGER NOT NULL DEFAULT 0");

        // Initialize entity IDs if table is empty (insert a single row with all zeros)
        auto checkQuery = db.query("SELECT COUNT(*) FROM entity_ids");
        int count = 0;
        if (checkQuery && checkQuery->executeStep()) {
            count = checkQuery->getColumn(0).getInt();
        }
        
        if (count == 0) {
            db.exec(R"(
                INSERT INTO entity_ids (profile_last_id, group_last_id, route_profile_last_id)
                VALUES (0, 0, 0)
            )");
        }
    }
    
    void DatabaseManager::RunDeferredMaintenance() {
        runOnNewThread([this] {
            QThread::msleep(MAINTENANCE_DELAY_MS);
            db.RunMaintenance();
            statsDb.RunMaintenance();
        });
    }

    void DatabaseManager::initializeRepos() {
        profilesRepo = std::make_unique<ProfilesRepo>(db);
        groupsRepo = std::make_unique<GroupsRepo>(db);
        routesRepo = std::make_unique<RoutesRepo>(db);
        otpProfilesRepo = std::make_unique<OtpProfilesRepo>(db);
        settingsRepo = std::make_unique<SettingsRepo>(db);
        trafficStatsRepo = std::make_unique<TrafficStatsRepo>(statsDb);
    }
}
