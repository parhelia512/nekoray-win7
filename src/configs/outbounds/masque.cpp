#include "include/configs/outbounds/masque.h"

#include <QJsonArray>
#include <include/global/Utils.hpp>

#include "include/configs/common/utils.h"

namespace Configs {
    static QString withPrefix(const std::string& address, const char* prefix)
    {
        auto result = QString::fromStdString(address).trimmed();
        if (!result.isEmpty() && !result.contains('/')) result += prefix;
        return result;
    }

    bool masque::ParseFromJson(const QJsonObject& object)
    {
        if (object.isEmpty() || object["type"].toString() != "masque") return false;
        outbound::ParseFromJson(object);
        if (object.contains("private_key")) private_key = object["private_key"].toString();
        if (object.contains("peer_public_key")) peer_public_key = object["peer_public_key"].toString();
        // Listable: the core accepts a bare string as well as an array.
        if (object["address"].isArray()) address = QJsonArray2QListString(object["address"].toArray());
        else if (object.contains("address")) address = {object["address"].toString()};
        if (object.contains("mtu")) mtu = object["mtu"].toInt();
        if (object.contains("http_version")) http_version = object["http_version"].toInt();
        if (object.contains("disable_version_fallback")) disable_version_fallback = object["disable_version_fallback"].toBool();
        if (object.contains("tls")) {
            auto tlsObject = object["tls"].toObject();
            tls->ParseFromJson(tlsObject);
            // An absent SNI means the server address (as in sing-box), not the constructor's WARP default.
            if (!tlsObject.contains("server_name")) tls->server_name.clear();
        }
        tls->enabled = true;
        quic->ParseFromJson(object);
        return true;
    }

    bool masque::ParseFromClash(const clash::Proxies& object)
    {
        if (object.type != "masque") return false;
        outbound::ParseFromClash(object);
        if (server_port == 0) server_port = 443;

        private_key = QString::fromStdString(object.private_key);
        peer_public_key = QString::fromStdString(object.public_key);
        if (auto v4 = withPrefix(object.ip, "/32"); !v4.isEmpty()) address << v4;
        if (auto v6 = withPrefix(object.ipv6, "/128"); !v6.isEmpty()) address << v6;
        if (object.mtu > 0) mtu = object.mtu;

        if (!object.sni.empty()) tls->server_name = QString::fromStdString(object.sni);
        tls->insecure = object.skip_cert_verify;
        tls->enabled = true;

        // mihomo never falls back between carriers.
        if (object.network == "h2") {
            http_version = 2;
            disable_version_fallback = false;
        } else {
            http_version = 3;
            disable_version_fallback = true;
        }
        return !private_key.isEmpty();
    }

    QString masque::ExportToLink()
    {
        return {};
    }

    QJsonObject masque::ExportToJson()
    {
        QJsonObject object;
        object["type"] = "masque";
        mergeJsonObjects(object, outbound::ExportToJson());
        if (!private_key.isEmpty()) object["private_key"] = private_key;
        if (!peer_public_key.isEmpty()) object["peer_public_key"] = peer_public_key;
        if (!address.isEmpty()) object["address"] = QListStr2QJsonArray(address);
        if (mtu > 0) object["mtu"] = mtu;
        if (http_version != 0) object["http_version"] = http_version;
        if (disable_version_fallback) object["disable_version_fallback"] = true;
        object["tls"] = tls->ExportToJson();
        mergeJsonObjects(object, quic->ExportToJson());
        return object;
    }

    QJsonObject masque::ExportIdentity()
    {
        // WARP identities share one server address; the key is what tells them apart.
        auto object = outbound::ExportIdentity();
        object["private_key"] = private_key;
        return object;
    }

    BuildResult masque::Build()
    {
        if (private_key.isEmpty()) return {{}, QObject::tr("%1: the private key is empty").arg(DisplayTypeAndName())};
        if (address.isEmpty()) return {{}, QObject::tr("%1: no address is set").arg(DisplayTypeAndName())};

        tls->enabled = true;
        QJsonObject object;
        object["type"] = "masque";
        if (!name.isEmpty()) object["tag"] = name;
        mergeJsonObjects(object, outbound::Build().object);
        object["private_key"] = private_key;
        if (!peer_public_key.isEmpty()) object["peer_public_key"] = peer_public_key;
        object["address"] = QListStr2QJsonArray(address);
        if (mtu > 0) object["mtu"] = mtu;
        if (http_version != 0) object["http_version"] = http_version;
        if (disable_version_fallback) object["disable_version_fallback"] = true;
        auto tlsObject = tls->Build().object;
        tlsObject.remove("reality");
        object["tls"] = tlsObject;
        mergeJsonObjects(object, quic->Build().object);
        return {object, ""};
    }

    QString masque::DisplayType()
    {
        return "MASQUE";
    }

    SecurityInfo masque::GetSecurity()
    {
        // The peer key pins the server certificate, which the core enforces even when insecure is set.
        if (tls->insecure && peer_public_key.isEmpty()) return {QObject::tr("Insecure TLS"), {}, SecurityLevel::Weak};
        return {QObject::tr("TLS"), {}, SecurityLevel::Secure};
    }

    bool masque::IsEndpoint()
    {
        return true;
    }
}
