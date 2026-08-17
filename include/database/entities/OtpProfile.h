#pragma once

#include <QJsonObject>
#include <QString>

#include "include/global/OTP.hpp"

namespace Configs {
    class OtpProfile : public OTP::Entry {
    public:
        int id = -1;

        OtpProfile() = default;
        explicit OtpProfile(const OTP::Entry &entry) : OTP::Entry(entry) {}

        [[nodiscard]] QString DisplayName() const;

        [[nodiscard]] QString CurrentCode() const { return OTP::GenerateCode(*this); }

        [[nodiscard]] int SecondsRemaining() const { return OTP::SecondsRemaining(*this); }

        [[nodiscard]] QString Validate() const { return OTP::Validate(*this); }

        [[nodiscard]] QString ExportToLink() const { return OTP::ExportToLink(*this); }

        [[nodiscard]] QJsonObject ExportToJson() const;

        bool ParseFromJson(const QJsonObject &object);
    };
} // namespace Configs
