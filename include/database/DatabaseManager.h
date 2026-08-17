#pragma once

#include "Database.h"
#include "include/database/SettingsRepo.h"
#include <string>
#include <memory>

namespace Configs {
    class RoutesRepo;
    class GroupsRepo;
    class ProfilesRepo;
    class OtpProfilesRepo;
    class TrafficStatsRepo;

    void initDB(const std::string& dbPath);

    class DatabaseManager {
    private:
        Database db;
        // Separate database file for the traffic-statistics module, so its
        // write volume never contends with vital profile/group operations.
        Database statsDb;

        static void createEntityIdsTable(Database& db);
        static bool entityIdsColumnExists(Database& db, const char* columnName);
        // Derive the stats database path (throne_stats.db) as a sibling of the
        // main database file.
        static std::string deriveStatsDbPath(const std::string& dbPath);
        void initializeRepos();
    public:
        std::unique_ptr<ProfilesRepo> profilesRepo;
        std::unique_ptr<GroupsRepo> groupsRepo;
        std::unique_ptr<RoutesRepo> routesRepo;
        std::unique_ptr<OtpProfilesRepo> otpProfilesRepo;
        std::unique_ptr<SettingsRepo> settingsRepo;
        std::unique_ptr<TrafficStatsRepo> trafficStatsRepo;

        explicit DatabaseManager(const std::string& dbPath);
        ~DatabaseManager() = default;

        // Call once, after the UI is up.
        void RunDeferredMaintenance();
        
        // Non-copyable
        DatabaseManager(const DatabaseManager&) = delete;
        DatabaseManager& operator=(const DatabaseManager&) = delete;
        
        // Get the underlying Database reference (for repos to access entity_ids table)
        Database& getDatabase() { return db; }
        const Database& getDatabase() const { return db; }
    };

    inline DatabaseManager* dataManager;
}
