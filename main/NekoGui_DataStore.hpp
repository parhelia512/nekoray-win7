// DO NOT INCLUDE THIS

namespace NekoGui {

    class Routing : public JsonStore {
    public:
        int current_route_id = 0;
        QString def_outbound = "proxy";

        // DNS
        QString remote_dns = "8.8.8.8";
        QString remote_dns_strategy = "";
        QString direct_dns = "localhost";
        QString direct_dns_strategy = "";
        bool use_dns_object = false;
        QString dns_object = "";
        QString dns_final_out = "proxy";

        // Misc
        QString domain_strategy = "AsIs";
        QString outbound_domain_strategy = "AsIs";
        int sniffing_mode = SniffingMode::FOR_ROUTING;

        explicit Routing(int preset = 0);

        static QStringList List();
    };

    class ExtraCore : public JsonStore {
    public:
        QString core_map;

        explicit ExtraCore();

        [[nodiscard]] QString Get(const QString &id) const;

        void Set(const QString &id, const QString &path);

        void Delete(const QString &id);
    };

    class InboundAuthorization : public JsonStore {
    public:
        QString username;
        QString password;

        InboundAuthorization();

        [[nodiscard]] bool NeedAuth() const;
    };

    class DataStore : public JsonStore {
    public:
        // Running

        QString core_token;
        int core_port = 19810;
        int started_id = -1919;
        bool core_running = false;
        bool prepare_exit = false;
        bool spmode_vpn = false;
        bool spmode_system_proxy = false;
        bool need_keep_vpn_off = false;
        QString appdataDir = "";
        QStringList ignoreConnTag = {};

        std::unique_ptr<Routing> routing;
        int imported_count = 0;
        bool refreshing_group_list = false;
        bool refreshing_group = false;
        int resolve_count = 0;

        // Flags
        QStringList argv = {};
        bool flag_use_appdata = false;
        bool flag_many = false;
        bool flag_tray = false;
        bool flag_debug = false;
        bool flag_restart_tun_on = false;
        bool flag_reorder = false;

        // Saved

        // Misc
        QString log_level = "warning";
        QString test_latency_url = "http://cp.cloudflare.com/";
        QString test_download_url = "http://cachefly.cachefly.net/10mb.test";
        int test_download_timeout = 30;
        int test_concurrent = 5;
        bool old_share_link_format = true;
        int traffic_loop_interval = 1000;
        bool disable_traffic_stats = false;
        int current_group = 0; // group id
        QString mux_protocol = "";
        bool mux_padding = false;
        int mux_concurrency = 8;
        bool mux_default_on = false;
        QString theme = "0";
        QString v2ray_asset_dir = "";
        int language = 0;
        QString mw_size = "";
        bool check_include_pre = true;
        QString system_proxy_format = "";
        QStringList log_ignore = {};
        bool start_minimal = false;
        int max_log_line = 200;
        QString splitter_state = "";

        // Subscription
        QString user_agent = ""; // set at main.cpp
        bool sub_use_proxy = false;
        bool sub_clear = false;
        bool sub_insecure = false;
        int sub_auto_update = -30;

        // Security
        bool skip_cert = false;
        QString utlsFingerprint = "";

        // Remember
        QStringList remember_spmode = {};
        int remember_id = -1919;
        bool remember_enable = false;

        // Socks & HTTP Inbound
        QString inbound_address = "127.0.0.1";
        int inbound_socks_port = 2080; // or Mixed
        int inbound_http_port = 2081;
        InboundAuthorization *inbound_auth = new InboundAuthorization;
        QString custom_inbound = "{\"inbounds\": []}";

        // Routing
        QString custom_route_global = "{\"rules\": []}";
        QString active_routing = "Default";

        // VPN
        bool fake_dns = false;
        bool enable_gso = false;
        int vpn_implementation = 0;
        int vpn_mtu = 9000;
        bool vpn_ipv6 = false;
        bool vpn_hide_console = true;
        bool vpn_strict_route = false;

        // NTP
        bool enable_ntp = false;
        QString ntp_server_address = "";
        int ntp_server_port = 0;
        QString ntp_interval = "";

        // Hotkey
        QString hotkey_mainwindow = "";
        QString hotkey_group = "";
        QString hotkey_route = "";
        QString hotkey_system_proxy_menu = "";
        QString hotkey_toggle_system_proxy = "";

        // Core
        int core_box_clash_api = -9090;
        QString core_box_clash_listen_addr = "127.0.0.1";
        QString core_box_clash_api_secret = "";
        QString core_box_underlying_dns = "";

        // Other Core
        ExtraCore *extraCore = new ExtraCore;

        // Methods

        DataStore();

        void UpdateStartedId(int id);

        [[nodiscard]] QString GetUserAgent(bool isDefault = false) const;
    };

    extern DataStore *dataStore;

} // namespace NekoGui
