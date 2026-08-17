#include "include/database/entities/OtpProfile.h"

namespace Configs {
    QString OtpProfile::DisplayName() const {
        if (issuer.isEmpty()) return name;
        if (name.isEmpty()) return issuer;
        return issuer + " (" + name + ")";
    }

    QJsonObject OtpProfile::ExportToJson() const {
        QJsonObject object;
        object["id"] = id;
        object["name"] = name;
        object["issuer"] = issuer;
        object["secret"] = secret;
        object["algorithm"] = OTP::AlgorithmToString(algorithm);
        object["type"] = OTP::TypeToString(type);
        object["digits"] = digits;
        object["period"] = period;
        object["counter"] = counter;
        return object;
    }

    bool OtpProfile::ParseFromJson(const QJsonObject &object) {
        if (object.isEmpty()) return false;
        if (object.contains("id")) id = object["id"].toInt(-1);
        name = object["name"].toString();
        issuer = object["issuer"].toString();
        secret = OTP::NormalizeSecret(object["secret"].toString());
        algorithm = OTP::AlgorithmFromString(object["algorithm"].toString());
        type = OTP::TypeFromString(object["type"].toString());
        digits = object.contains("digits") ? object["digits"].toInt(OTP::DEFAULT_DIGITS) : OTP::DEFAULT_DIGITS;
        period = object.contains("period") ? object["period"].toInt(OTP::DEFAULT_PERIOD) : OTP::DEFAULT_PERIOD;
        counter = object["counter"].toVariant().toLongLong();
        return !secret.isEmpty();
    }
} // namespace Configs
