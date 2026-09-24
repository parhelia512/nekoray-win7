#pragma once
#include <QJsonObject>
#include <QList>
#include <QMutex>
#include <QString>

#include "include/ui/group/GroupSort.hpp"

namespace Configs
{
    enum class testBy : int {
        latency = 0,
        dlSpeed,
        ulSpeed,
        ipOut
    };

    enum class testShowItems : int {
        all = 0,
        none,
        ipOnly,
        speedOnly
    };

    enum class trafficBy : int {
        total = 0,
        dl,
        ul
    };

    enum class typeBy : int {
        byType = 0,
        bySecurity
    };

    // Doubles as the index of the Advanced dialog's send_hwid combo.
    enum class sendHwid : int {
        keepDefault = 0,
        on,
        off
    };

    // Empty strings inherit the global subscription settings.
    struct SubscriptionOptions {
        QString user_agent;
        sendHwid send_hwid = sendHwid::keepDefault;
        QString hwid;
        QString hwid_os;
        QString hwid_os_version;
        QString hwid_model;
        bool keep_working = false;
        bool remove_duplicates = false;
        bool remove_insecure = false;
        bool remove_invalid = false;
        bool url_test = false;
        // Follow-ups of url_test: ignored while it is off.
        bool remove_unavailable = false;
        bool sort_by_latency = false;

        [[nodiscard]] QJsonObject ToJson() const;

        static SubscriptionOptions FromJson(const QJsonObject &json);
    };

    class Group {
    public:
        QMutex mutex;
        int id = -1;
        bool archive = false;
        bool skip_auto_update = false;
        bool auto_clear_unavailable = false;
        QString name = "";
        QString url = "";
        QString info = "";
        qint64 sub_last_update = 0;
        SubscriptionOptions sub_options;
        int front_proxy_id = -1;
        int landing_proxy_id = -1;

        QList<int> column_width;
        QList<int> calculated_column_width; // memory only, no need to save to db
        QList<int> profiles;
        int scroll_last_profile = -1;
        testBy test_sort_by = testBy::latency;
        trafficBy traffic_sort_by = trafficBy::total;
        typeBy type_sort_by = typeBy::byType;
        testShowItems test_items_to_show = testShowItems::all;
        // Memory only. Pairs of (profileID, row as displayed).
        QList<std::pair<int, int>> selectedProfilesIdIdxPairs;

        Group() = default;

        void clearCalculatedColumnWidth();

        [[nodiscard]] QList<int> Profiles() const;

        bool SortProfiles(GroupSortAction method);

        bool RemoveProfile(int ID);

        bool RemoveProfileBatch(const QList<int>& IDs);

        bool AddProfile(int ID);

        bool AddProfileBatch(const QList<int>& IDs);

        bool SwapProfiles(int idx1, int idx2);

        bool EmplaceProfile(int idx, int newIdx);

        [[nodiscard]] bool HasProfile(int ID) const;
    };
}// namespace Configs
