#pragma once
#include <QJsonArray>
#include "include/configs/common/Outbound.h"

namespace Configs
{
    class Custom : public outbound
    {
    public:
        static constexpr auto CustomOutbound = "outbound";
        static constexpr auto CustomFullConfig = "fullconfig";
        static constexpr auto CustomXrayOutbound = "xrayoutbound";
        static constexpr auto CustomXrayFullConfig = "xrayfullconfig";

        QString config;
        QString type;

        // Transient bridge fields: Build() emits a socks outbound on this port; Xray gets the matching inbound.
        int bridgePort = 0;
        QString bridgeAuth;
        QString bridgeHost = "127.0.0.1";

        bool ParseFromJson(const QJsonObject &object) override {
            if (object.isEmpty()) return false;
            if (object.contains("name")) name = object["name"].toString();
            if (object.contains("subtype")) type = object["subtype"].toString();
            if (object.contains("config")) config = object["config"].toString();
            return true;
        }

        QJsonObject ExportToJson() override {
            QJsonObject object;
            object["name"] = name;
            object["type"] = "custom";
            object["subtype"] = type;
            object["config"] = config;
            return object;
        }

        QString GetAddress() override
        {
            if (type == CustomOutbound) {
                auto obj = QString2QJsonObject(config);
                return obj["server"].toString();
            }
            if (type == CustomXrayOutbound) {
                auto settings = QString2QJsonObject(config)["settings"].toObject();
                if (settings.contains("vnext")) return settings["vnext"].toArray().first().toObject()["address"].toString();
                if (settings.contains("servers")) return settings["servers"].toArray().first().toObject()["address"].toString();
            }
            return {};
        }

        QString DisplayAddress() override
        {
            if (type == CustomOutbound) {
                auto obj = QString2QJsonObject(config);
                return ::DisplayAddress(obj["server"].toString(), obj["server_port"].toInt());
            }
            if (type == CustomXrayOutbound) {
                auto settings = QString2QJsonObject(config)["settings"].toObject();
                QJsonObject server;
                if (settings.contains("vnext")) server = settings["vnext"].toArray().first().toObject();
                else if (settings.contains("servers")) server = settings["servers"].toArray().first().toObject();
                if (!server.isEmpty()) return ::DisplayAddress(server["address"].toString(), server["port"].toInt());
            }
            return {};
        }

        QString DisplayType() override
        {
            if (type == CustomOutbound) {
                auto outboundType = QString2QJsonObject(config)["type"].toString();
                if (!outboundType.isEmpty()) outboundType[0] = outboundType[0].toUpper();
                return outboundType.isEmpty() ? "Custom Outbound" : "Custom " + outboundType + " Outbound";
            } else if (type == CustomFullConfig) {
                return "Custom Config";
            } else if (type == CustomXrayOutbound) {
                auto protocol = QString2QJsonObject(config)["protocol"].toString();
                if (!protocol.isEmpty()) protocol[0] = protocol[0].toUpper();
                return protocol.isEmpty() ? "Custom Xray Outbound" : "Custom Xray " + protocol + " Outbound";
            } else if (type == CustomXrayFullConfig) {
                return "Custom Xray Config";
            }
            return type;
        };

        SecurityInfo GetSecurity() override;

        QJsonObject ExportIdentity() override;

        bool IsEndpoint() override
        {
            // Only raw sing-box outbound JSON can describe an endpoint.
            if (type != CustomOutbound) return false;
            const auto t = QString2QJsonObject(config)["type"].toString();
            return t == "wireguard" || t == "tailscale" || t == "masque";
        }

        bool IsXray() override { return type == CustomXrayOutbound; }

        bool IsXrayFullConfig() override { return type == CustomXrayFullConfig; }

        // Raw addresses (callers filter literal IPs) for sing-box's direct-DNS carve-out.
        QStringList GetXrayFullConfigServerDomains() {
            QStringList domains;
            if (type != CustomXrayFullConfig) return domains;
            const auto outbounds = QString2QJsonObject(config)["outbounds"].toArray();
            for (const auto &v : outbounds) {
                auto settings = v.toObject()["settings"].toObject();
                auto collect = [&](const QString &key) {
                    for (const auto &s : settings[key].toArray()) {
                        auto addr = s.toObject()["address"].toString();
                        if (!addr.isEmpty()) domains << addr;
                    }
                };
                if (settings.contains("vnext")) collect("vnext");
                if (settings.contains("servers")) collect("servers");
                if (settings.contains("address")) {
                    auto addr = settings["address"].toString();
                    if (!addr.isEmpty()) domains << addr;
                }
            }
            return domains;
        }

        BuildResult Build() override
        {
            if (type == CustomXrayFullConfig) {
                return {QJsonObject{
                            {"type", "socks"},
                            {"server", bridgeHost},
                            {"server_port", bridgePort},
                            {"username", bridgeAuth},
                            {"password", bridgeAuth},
                        }, ""};
            }
            if (type == CustomXrayOutbound) {
                // Dummy outbound so sing-box CheckConfig passes; the real one is in BuildXray().
                return {QJsonObject{
                            {"type", "socks"},
                            {"server", "127.0.0.1"},
                        }, ""};
            }
            return {QString2QJsonObject(config), ""};
        }

        BuildResult BuildXray() override
        {
            if (type == CustomXrayOutbound) {
                // Domain resolution is wired on at instance creation (ThroneWiring), not as sockopt.domainStrategy.
                return {QString2QJsonObject(config), ""};
            }
            return {};
        }
    };
}
