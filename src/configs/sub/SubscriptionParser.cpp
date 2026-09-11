#include "include/configs/sub/SubscriptionParser.hpp"

#include "include/configs/common/utils.h"
#include "include/configs/sub/SubscriptionScan.hpp"
#include "include/configs/sub/clash.hpp"
#include "include/configs/sub/vpnFileImport.hpp"
#include "include/database/ProfilesRepo.h"
#include "include/global/Utils.hpp"

#include <QJsonArray>
#include <QJsonDocument>
#include <QJsonObject>
#include <QRegularExpression>
#include <QUrl>
#include <QtEndian>

#include <string_view>

namespace Subscription {
    namespace {
        using ProfilePtr = std::shared_ptr<Configs::Profile>;

        constexpr int kMaxDepth = 16;
        constexpr auto npos = std::string_view::npos;

        enum class SingBoxSubType {
            outboundInJson,
            outboundJsonArray,
            outboundObject,
            invalid,
        };

        enum class XraySubType {
            outboundInJson,
            outboundJsonArray,
            outboundObject,
            configJsonArray,
            invalid,
        };

        struct Protocol {
            const char *type;
            const char *schemes[4];
            const char *singbox[2];
            const char *clash[2];
        };

        constexpr Protocol kProtocols[] = {
            {"socks", {"socks5://", "socks4://", "socks4a://", "socks://"}, {"socks"}, {"socks5"}},
            {"http", {"http://", "https://"}, {"http"}, {"http"}},
            {"shadowsocks", {"ss://"}, {"shadowsocks"}, {"ss"}},
            {"vmess", {"vmess://"}, {"vmess"}, {"vmess"}},
            {"vless", {"vless://"}, {"vless"}, {"vless"}},
            {"trojan", {"trojan://"}, {"trojan"}, {"trojan"}},
            {"anytls", {"anytls://"}, {"anytls"}, {"anytls"}},
            {"mieru", {"mierus://", "mieru://"}, {"mieru"}, {}},
            {"snell", {"snell://"}, {"snell"}, {"snell"}},
            {"hysteria", {"hysteria://", "hysteria2://", "hy2://"}, {"hysteria", "hysteria2"}, {"hysteria", "hysteria2"}},
            {"tuic", {"tuic://"}, {"tuic"}, {"tuic"}},
            {"juicity", {"juicity://"}, {"juicity"}, {}},
            {"trusttunnel", {"tt://"}, {"trusttunnel"}, {}},
            {"shadowtls", {"shadowtls://"}, {"shadowtls"}, {}},
            {"wireguard", {"wg://", "wireguard://"}, {"wireguard"}, {}},
            {"masque", {}, {"masque"}, {"masque"}},
            {"ssh", {"ssh://"}, {"ssh"}, {"ssh"}},
            {"naive", {"naive+https://", "naive+quic://"}, {"naive"}, {}},
        };

        const char *typeForScheme(std::string_view link) {
            for (const auto &p : kProtocols) {
                for (const char *scheme : p.schemes) {
                    if (scheme != nullptr && link.starts_with(scheme)) return p.type;
                }
            }
            return nullptr;
        }

        const char *typeForSingBox(const QString &type) {
            for (const auto &p : kProtocols) {
                for (const char *name : p.singbox) {
                    if (name != nullptr && type == QLatin1String(name)) return p.type;
                }
            }
            return nullptr;
        }

        const char *typeForClash(const std::string &type) {
            for (const auto &p : kProtocols) {
                for (const char *name : p.clash) {
                    if (name != nullptr && type == name) return p.type;
                }
            }
            return nullptr;
        }

        QString toQString(std::string_view s) {
            return QString::fromUtf8(s.data(), static_cast<qsizetype>(s.size())).trimmed();
        }

        SingBoxSubType getSingBoxSubType(const QJsonDocument &doc) {
            if (doc.isObject()) {
                const auto obj = doc.object();
                if (obj.contains("outbounds") || obj.contains("endpoints")) return SingBoxSubType::outboundInJson;
                if (obj.contains("type")) return SingBoxSubType::outboundObject;
                return SingBoxSubType::invalid;
            }
            if (doc.isArray() && !doc.array().empty()) {
                const auto firstRaw = doc.array().first();
                if (firstRaw.isObject() && firstRaw.toObject().contains("type")) return SingBoxSubType::outboundJsonArray;
            }
            return SingBoxSubType::invalid;
        }

        // Xray tags outbounds with "protocol" where sing-box uses "type".
        XraySubType getXraySubType(const QJsonDocument &doc) {
            if (doc.isObject()) {
                const auto obj = doc.object();
                if (obj.contains("outbounds")) {
                    for (const auto &item : obj["outbounds"].toArray()) {
                        if (item.isObject() && item.toObject().contains("protocol")) return XraySubType::outboundInJson;
                    }
                }
                if (obj.contains("protocol")) return XraySubType::outboundObject;
                return XraySubType::invalid;
            }
            if (doc.isArray() && !doc.array().empty()) {
                const auto first = doc.array().first();
                if (first.isObject()) {
                    const auto obj = first.toObject();
                    if (obj.contains("protocol")) return XraySubType::outboundJsonArray;
                    if (obj.contains("outbounds")) {
                        for (const auto &item : obj["outbounds"].toArray()) {
                            if (item.isObject() && item.toObject().contains("protocol")) return XraySubType::configJsonArray;
                        }
                    }
                }
            }
            return XraySubType::invalid;
        }

        // Real Xray VLESS nests the server under settings.vnext[0]; ParseFromJson wants it flat.
        QJsonObject normalizeXrayVlessForParse(const QJsonObject &out) {
            if (out["protocol"].toString() != "vless") return {};
            const auto settings = out["settings"].toObject();
            if (settings.contains("address") && !settings.contains("vnext")) return out;
            const auto vnext = settings["vnext"].toArray();
            if (vnext.isEmpty()) return {};
            const auto first = vnext.first().toObject();
            if (first.isEmpty()) return {};
            const auto users = first["users"].toArray();
            if (users.isEmpty()) return {};
            const auto user = users.first().toObject();
            QJsonObject simpleSettings;
            simpleSettings["address"] = first["address"];
            simpleSettings["port"] = first["port"];
            simpleSettings["id"] = user["id"];
            simpleSettings["encryption"] = user.contains("encryption") ? user["encryption"] : QJsonValue("none");
            simpleSettings["flow"] = user["flow"];
            QJsonObject normalized = out;
            normalized["settings"] = simpleSettings;
            return normalized;
        }

        ProfilePtr makeProfileForXrayOutbound(const QJsonObject &out) {
            if (out.isEmpty()) return nullptr;
            const auto protocol = out["protocol"].toString();
            if (protocol == "freedom" || protocol == "blackhole" || protocol == "dns" || protocol == "loopback") return nullptr;
            if (protocol == "vless") {
                if (const auto normalized = normalizeXrayVlessForParse(out); !normalized.isEmpty()) {
                    auto ent = Configs::ProfilesRepo::NewProfile("xrayvless");
                    if (ent->XrayVLESS()->ParseFromJson(normalized)) return ent;
                }
            }
            auto ent = Configs::ProfilesRepo::NewProfile("custom");
            ent->Custom()->type = Configs::Custom::CustomXrayOutbound;
            ent->Custom()->config = QJsonObject2QString(out, false);
            if (const auto tag = out["tag"].toString(); !tag.isEmpty()) ent->Custom()->name = tag;
            return ent;
        }

        bool looksLikeOvpnConfig(std::string_view text) {
            bool hasRemote = false;
            bool hasClientMarker = false;
            bool result = false;
            scan::forEachLine(text, [&](std::string_view raw) {
                const auto line = scan::trim(raw);
                if (line.empty() || line.front() == '#' || line.front() == ';') return true;
                if (line.starts_with("remote ") || line == "<ca>" || line == "<tls-auth>" || line == "<tls-crypt>" ||
                    line == "<tls-crypt-v2>" || line == "<secret>") {
                    hasRemote = true;
                }
                if (line == "client" || line == "tls-client" || line.starts_with("dev ") || line.starts_with("dev-type ") ||
                    line.starts_with("proto ")) {
                    hasClientMarker = true;
                }
                result = hasRemote && hasClientMarker;
                return !result;
            });
            return result;
        }

        bool looksLikeOpenConnectProfile(std::string_view text) {
            if (text.find("<AnyConnectProfile") != npos || text.find("<ServerList") != npos) return true;
            static const QRegularExpression cliRe(R"((?:^|\s)--protocol[= ](?:anyconnect|nc|gp|pulse|f5|fortinet)\b)");
            static const QRegularExpression fileRe(R"(^[ \t]*protocol[ \t]*=[ \t]*(?:anyconnect|nc|gp|pulse|f5|fortinet)[ \t]*$)",
                                                   QRegularExpression::MultilineOption);
            bool matched = false;
            if (text.find("protocol") != npos) {
                scan::forEachLine(text, [&](std::string_view raw) {
                    if (raw.find("protocol") == npos) return true;
                    const auto line = QString::fromUtf8(raw.data(), static_cast<qsizetype>(raw.size()));
                    matched = cliRe.match(line).hasMatch() || fileRe.match(line).hasMatch();
                    return !matched;
                });
            }
            if (matched) return true;
            bool result = false;
            scan::forEachLine(text, [&](std::string_view raw) {
                const auto line = scan::trim(raw);
                if (line.empty() || line.front() == '#') return true;
                result = line.starts_with("openconnect ");
                return false;
            });
            return result;
        }

        // qUncompress allocates whatever size the 4-byte header claims before inflating, so validate the zlib header and cap it first.
        QByteArray uncompressVpnPayload(const QByteArray &data) {
            constexpr quint32 maxSize = 16 * 1024 * 1024;
            if (data.size() < 6) return {};
            const auto bytes = reinterpret_cast<const uchar *>(data.constData());
            const quint32 expected = qFromBigEndian<quint32>(bytes);
            const uint cmf = bytes[4], flg = bytes[5];
            if (expected == 0 || expected > maxSize || (cmf & 0x0F) != 8 || ((cmf << 8) | flg) % 31 != 0) return {};
            return qUncompress(data);
        }

        // A NUL in the first four bytes makes fkYAML decode as UTF-16/32 and read out of bounds (#1746).
        std::string sanitizeClashYaml(std::string_view text) {
            QString normalized = QString::fromUtf8(text.data(), static_cast<qsizetype>(text.size()));
            normalized.remove(QChar(QChar::Null));
            if (normalized.startsWith(QChar(QChar::ByteOrderMark))) normalized.remove(0, 1);
            return normalized.toStdString();
        }

        class Parser {
        public:
            explicit Parser(const ParseSink &sink) : sink(sink) {}

            void document(std::string_view raw, bool allowBase64, bool needParse, int depth);

        private:
            const ParseSink &sink;
            int produced = 0;

            void produce(ProfilePtr ent) {
                if (ent == nullptr) return;
                ++produced;
                if (sink.profile) sink.profile(std::move(ent));
            }

            void log(const QString &line) {
                if (sink.log) sink.log(line);
            }

            void warn(const QString &title, const QString &text) {
                if (sink.warn) sink.warn(title, text);
            }

            void json(const QJsonDocument &doc, std::string_view text);
            void singBox(const QJsonDocument &doc, SingBoxSubType type);
            void xray(const QJsonDocument &doc, XraySubType type);
            void sip008(const QJsonDocument &doc);
            void clash(std::string_view text);
            void wireguardFile(std::string_view text);
            void openVpnFile(std::string_view text);
            void openConnectProfile(std::string_view text);
            void link(std::string_view line, int depth);
            void jsonLink(const QString &str, bool throneAdd);
            void vpnLink(const QString &str, int depth);
        };

        void Parser::document(std::string_view raw, bool allowBase64, bool needParse, int depth) {
            if (depth > kMaxDepth) return;
            const auto text = scan::trim(raw);
            if (text.empty()) return;

            if (allowBase64 && scan::looksLikeBase64(text)) {
                if (const auto decoded = scan::decodeBase64(text); !decoded.isEmpty()) {
                    document(scan::view(decoded), false, true, depth + 1);
                    return;
                }
            }

            if (text.front() == '{' || text.front() == '[') {
                QJsonParseError error{};
                const auto doc = QJsonDocument::fromJson(QByteArray::fromRawData(text.data(), static_cast<qsizetype>(text.size())), &error);
                if (error.error == QJsonParseError::NoError) {
                    json(doc, text);
                    return;
                }
            }

            if (text.find("proxies:") != npos) {
                clash(text);
                return;
            }

            if (text.find("[Interface]") != npos && text.find("[Peer]") != npos) {
                wireguardFile(text);
                return;
            }

            if (looksLikeOvpnConfig(text)) {
                openVpnFile(text);
                return;
            }

            if (looksLikeOpenConnectProfile(text)) {
                openConnectProfile(text);
                return;
            }

            if (needParse && text.find('\n') != npos) {
                scan::forEachItem(text, [&](std::string_view item) { document(item, true, false, depth + 1); });
                return;
            }

            link(text, depth);
        }

        void Parser::json(const QJsonDocument &doc, std::string_view text) {
            // Xray first: its configs share the "outbounds" wrapper with sing-box.
            const auto xrayType = getXraySubType(doc);
            if (xrayType == XraySubType::outboundObject) {
                produce(makeProfileForXrayOutbound(doc.object()));
                return;
            }
            if (xrayType != XraySubType::invalid) {
                xray(doc, xrayType);
                return;
            }

            const auto subType = getSingBoxSubType(doc);
            if (subType == SingBoxSubType::outboundObject) {
                auto ent = Configs::ProfilesRepo::NewProfile("custom");
                ent->Custom()->type = Configs::Custom::CustomOutbound;
                ent->Custom()->config = toQString(text);
                produce(ent);
                return;
            }
            if (subType != SingBoxSubType::invalid) {
                singBox(doc, subType);
                return;
            }

            if (text.find("version") != npos && text.find("servers") != npos) sip008(doc);
        }

        void Parser::singBox(const QJsonDocument &doc, SingBoxSubType type) {
            QJsonArray outbounds, endpoints;
            if (type == SingBoxSubType::outboundInJson) {
                const auto json = doc.object();
                outbounds = json["outbounds"].toArray();
                endpoints = json["endpoints"].toArray();
            } else if (type == SingBoxSubType::outboundJsonArray) {
                outbounds = doc.array();
            } else {
                return;
            }

            const auto handle = [&](const QJsonValue &value) {
                if (!value.isObject()) return;
                const auto out = value.toObject();
                if (out.isEmpty()) {
                    log("invalid outbound: empty object");
                    return;
                }
                const char *profileType = typeForSingBox(out["type"].toString());
                if (profileType == nullptr) return;
                auto ent = Configs::ProfilesRepo::NewProfile(profileType);
                if (!ent->outbound->ParseFromJson(out)) return;
                produce(ent);
            };
            for (const auto &outbound : outbounds) handle(outbound);
            for (const auto &endpoint : endpoints) handle(endpoint);
        }

        void Parser::xray(const QJsonDocument &doc, XraySubType type) {
            // Each element is a self-contained config (balancers, dialerProxy chains) that must run verbatim.
            if (type == XraySubType::configJsonArray) {
                for (const auto &c : doc.array()) {
                    if (!c.isObject()) continue;
                    auto cfg = c.toObject();
                    if (!cfg.contains("outbounds")) continue;
                    // Throne injects its own bridge inbound; the bundled ones only risk port-bind conflicts.
                    cfg.remove("inbounds");
                    auto ent = Configs::ProfilesRepo::NewProfile("custom");
                    ent->Custom()->type = Configs::Custom::CustomXrayFullConfig;
                    ent->Custom()->config = QJsonObject2QString(cfg, false);
                    if (const auto remarks = cfg["remarks"].toString(); !remarks.isEmpty()) ent->Custom()->name = remarks;
                    produce(ent);
                }
                return;
            }

            QJsonArray outbounds;
            if (type == XraySubType::outboundInJson) {
                outbounds = doc.object()["outbounds"].toArray();
            } else if (type == XraySubType::outboundJsonArray) {
                outbounds = doc.array();
            } else {
                return;
            }
            for (const auto &o : outbounds) {
                if (!o.isObject()) continue;
                produce(makeProfileForXrayOutbound(o.toObject()));
            }
        }

        void Parser::sip008(const QJsonDocument &doc) {
            for (const auto &o : doc.object()["servers"].toArray()) {
                const auto out = o.toObject();
                if (out.isEmpty()) {
                    log("invalid server object");
                    continue;
                }
                auto ent = Configs::ProfilesRepo::NewProfile("shadowsocks");
                if (!ent->ShadowSocks()->ParseFromSIP008(out)) continue;
                produce(ent);
            }
        }

        void Parser::clash(std::string_view text) {
            try {
                const fkyaml::node root = fkyaml::node::deserialize(sanitizeClashYaml(text));
                if (!root.is_mapping() || !root.contains("proxies")) return;
                const auto &proxies = root["proxies"];
                if (!proxies.is_sequence()) return;

                // One entry at a time: clash::Proxies is several KB even when empty.
                for (const auto &node : proxies) {
                    const auto out = node.get_value<clash::Proxies>();
                    const char *profileType = typeForClash(out.type);
                    if (profileType == nullptr) continue;
                    ProfilePtr ent;
                    if (out.type == "vless" && (out.network == "xhttp" || (!out.encryption.empty() && out.encryption != "none"))) {
                        ent = Configs::ProfilesRepo::NewProfile("xrayvless");
                    } else {
                        ent = Configs::ProfilesRepo::NewProfile(profileType);
                    }
                    if (!ent->outbound->ParseFromClash(out)) continue;
                    produce(ent);
                }
            // fkYAML can throw beyond fkyaml::exception on hostile input (bad_alloc, length_error).
            } catch (const std::exception &ex) {
                warn("YAML Exception", QString::fromUtf8(ex.what()));
            } catch (...) {
                warn("YAML Exception", QObject::tr("Failed to parse the Clash configuration."));
            }
        }

        void Parser::wireguardFile(std::string_view text) {
            auto ent = Configs::ProfilesRepo::NewProfile("wireguard");
            if (!ent->Wireguard()->ParseFromLink(toQString(text))) return;
            produce(ent);
        }

        void Parser::openVpnFile(std::string_view text) {
            QStringList problems;
            auto ent = Configs::ProfilesRepo::NewProfile("openvpn");
            const auto ok = Configs::ParseOvpnConfig(toQString(text), *ent->OpenVPN(), &problems);
            for (const auto &problem : problems) log("OpenVPN: " + problem);
            if (!ok) {
                log(QObject::tr("Failed to import the OpenVPN profile."));
                return;
            }
            produce(ent);
        }

        void Parser::openConnectProfile(std::string_view text) {
            QStringList problems;
            const auto str = toQString(text);
            if (text.find("<AnyConnectProfile") != npos || text.find("<ServerList") != npos) {
                QList<std::shared_ptr<Configs::openconnect>> hosts;
                const auto ok = Configs::ParseAnyConnectXml(str, hosts, &problems);
                for (const auto &problem : problems) log("OpenConnect: " + problem);
                if (!ok) {
                    log(QObject::tr("Failed to import the OpenConnect profile."));
                    return;
                }
                for (const auto &host : hosts) {
                    auto ent = Configs::ProfilesRepo::NewProfile("openconnect");
                    ent->outbound = host;
                    produce(ent);
                }
                return;
            }

            auto ent = Configs::ProfilesRepo::NewProfile("openconnect");
            const auto ok = Configs::ParseOpenConnectProfile(str, *ent->OpenConnect(), &problems);
            for (const auto &problem : problems) log("OpenConnect: " + problem);
            if (!ok) {
                log(QObject::tr("Failed to import the OpenConnect profile."));
                return;
            }
            produce(ent);
        }

        void Parser::link(std::string_view line, int depth) {
            if (line.starts_with("//") || line.starts_with("#") || line.size() < 2) return;

            if (line.starts_with("json://")) {
                jsonLink(toQString(line), false);
                return;
            }
            if (scan::startsWithNoCase(line, "throne://add/")) {
                jsonLink(toQString(line), true);
                return;
            }
            if (scan::startsWithNoCase(line, "vpn://")) {
                vpnLink(toQString(line), depth);
                return;
            }

            const char *profileType = typeForScheme(line);
            if (profileType == nullptr) return;
            const auto str = toQString(line);
            ProfilePtr ent;
            if (line.starts_with("vless://") && Configs::useXrayVless(str)) {
                ent = Configs::ProfilesRepo::NewProfile("xrayvless");
            } else {
                ent = Configs::ProfilesRepo::NewProfile(profileType);
            }
            if (!ent->outbound->ParseFromLink(str)) return;
            produce(ent);
        }

        void Parser::jsonLink(const QString &str, bool throneAdd) {
            const QUrl link(str);
            if (!link.isValid()) return;
            auto dataBytes = throneAdd ? DecodeB64IfValid(link.path().mid(1))
                                       : DecodeB64IfValid(link.fragment().toUtf8(), QByteArray::Base64UrlEncoding);
            // ExportJsonLink emits the url-safe alphabet, which the standard decoder rejects whenever '-' or '_' occurs.
            if (dataBytes.isEmpty() && throneAdd) dataBytes = DecodeB64IfValid(link.path().mid(1), QByteArray::Base64UrlEncoding);
            if (dataBytes.isEmpty()) return;
            const auto data = QJsonDocument::fromJson(dataBytes).object();
            if (data.isEmpty()) return;
            ProfilePtr ent;
            if (data.contains("protocol")) {
                ent = Configs::ProfilesRepo::NewProfile("xray" + data["protocol"].toString());
            } else {
                ent = data["type"].toString() == "hysteria2" ? Configs::ProfilesRepo::NewProfile("hysteria")
                                                              : Configs::ProfilesRepo::NewProfile(data["type"].toString());
            }
            if (ent->outbound->invalid) return;
            ent->outbound->ParseFromJson(data);
            produce(ent);
        }

        void Parser::vpnLink(const QString &str, int depth) {
            auto raw = str.mid(6);
            if (const auto frag = raw.indexOf('#'); frag != -1) raw = raw.left(frag);
            raw = QUrl::fromPercentEncoding(raw.toUtf8());
            auto dataBytes = DecodeB64IfValid(raw);
            if (dataBytes.isEmpty()) dataBytes = DecodeB64IfValid(raw, QByteArray::Base64UrlEncoding | QByteArray::OmitTrailingEquals);
            if (dataBytes.isEmpty()) {
                log(QObject::tr("Failed to decode the vpn:// link."));
                return;
            }
            if (const auto uncompressed = uncompressVpnPayload(dataBytes); !uncompressed.isEmpty()) dataBytes = uncompressed;

            const int before = produced;
            const auto doc = QJsonDocument::fromJson(dataBytes);
            if (doc.isObject() && doc.object().contains("containers")) {
                for (const auto &cVal : doc.object()["containers"].toArray()) {
                    if (!cVal.isObject()) continue;
                    const auto cObj = cVal.toObject();
                    for (const auto &key : cObj.keys()) {
                        if (!cObj[key].isObject()) continue;
                        const auto protoObj = cObj[key].toObject();
                        QString conf;
                        if (protoObj["last_config"].isString()) {
                            const auto lc = protoObj["last_config"].toString();
                            const auto innerDoc = QJsonDocument::fromJson(lc.toUtf8());
                            if (innerDoc.isObject() && innerDoc.object().contains("config")) {
                                conf = innerDoc.object()["config"].toString();
                            } else {
                                conf = lc;
                            }
                        } else if (protoObj["last_config"].isObject()) {
                            conf = protoObj["last_config"].toObject()["config"].toString();
                        }
                        if (conf.isEmpty()) continue;
                        const auto bytes = conf.toUtf8();
                        document(scan::view(bytes), false, true, depth + 1);
                    }
                }
            } else {
                document(scan::view(dataBytes), false, true, depth + 1);
            }
            if (produced == before) log(QObject::tr("No importable profile found in the vpn:// link."));
        }
    }

    void ParseDocument(QByteArray body, const ParseSink &sink) {
        scan::trimInPlace(body);
        if (body.isEmpty()) return;

        if (scan::looksLikeBase64(scan::view(body))) {
            if (auto decoded = scan::decodeBase64(scan::view(body)); !decoded.isEmpty()) body = std::move(decoded);
        } else if (scan::looksLikeWrappedBase64(scan::view(body))) {
            if (auto decoded = QByteArray::fromBase64(body); !decoded.isEmpty()) body = std::move(decoded);
        }

        Parser parser(sink);
        parser.document(scan::view(body), false, true, 0);
    }

    void ParseText(const QString &text, const ParseSink &sink) {
        ParseDocument(text.toUtf8(), sink);
    }
}
