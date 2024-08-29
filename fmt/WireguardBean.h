#pragma once

#include "fmt/AbstractBean.hpp"

namespace NekoGui_fmt {
    class WireguardBean : public AbstractBean {
    public:
        QString privateKey;
        QString publicKey;
        QString preSharedKey;
        QList<int> reserved;
        QStringList localAddress;
        int MTU = 1420;
        bool useSystemInterface = false;
        bool enableGSO = false;

        WireguardBean() : AbstractBean(0) {
            _add(new configItem("private_key", &privateKey, itemType::string));
            _add(new configItem("public_key", &publicKey, itemType::string));
            _add(new configItem("pre_shared_key", &preSharedKey, itemType::string));
            _add(new configItem("reserved", &reserved, itemType::integerList));
            _add(new configItem("local_address", &localAddress, itemType::stringList));
            _add(new configItem("mtu", &MTU, itemType::integer));
            _add(new configItem("use_system_proxy", &useSystemInterface, itemType::boolean));
            _add(new configItem("enable_gso", &enableGSO, itemType::boolean));
        };

        QString FormatReserved() {
            QString res = "";
            for (int i=0;i<reserved.size();i++) {
                res += Int2String(reserved[i]);
                if (i != reserved.size() - 1) {
                    res += "-";
                }
            }
            return res;
        }

        QString DisplayType() override { return "Wireguard"; };

        CoreObjOutboundBuildResult BuildCoreObjSingBox() override;

        bool TryParseLink(const QString &link);

        QString ToShareLink() override;
    };
} // namespace NekoGui_fmt
