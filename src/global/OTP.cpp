#include "include/global/OTP.hpp"

#include <QCryptographicHash>
#include <QDateTime>
#include <QJsonArray>
#include <QJsonDocument>
#include <QJsonObject>
#include <QMessageAuthenticationCode>
#include <QObject>
#include <QRegularExpression>
#include <QStringList>
#include <algorithm>
#include <QUrl>
#include <QUrlQuery>

namespace OTP {
    namespace {
        constexpr char BASE32_ALPHABET[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

        constexpr int MIN_BARE_SECRET_BYTES = 10;

        QCryptographicHash::Algorithm toHash(Algorithm algorithm) {
            switch (algorithm) {
                case Algorithm::SHA256: return QCryptographicHash::Sha256;
                case Algorithm::SHA512: return QCryptographicHash::Sha512;
                default: return QCryptographicHash::Sha1;
            }
        }

        void pbWriteVarint(QByteArray &out, quint64 value) {
            do {
                quint8 byte = value & 0x7F;
                value >>= 7;
                if (value != 0) byte |= 0x80;
                out.append(static_cast<char>(byte));
            } while (value != 0);
        }

        void pbWriteTag(QByteArray &out, int field, int wireType) {
            pbWriteVarint(out, (static_cast<quint64>(field) << 3) | static_cast<quint64>(wireType));
        }

        void pbWriteBytes(QByteArray &out, int field, const QByteArray &value) {
            pbWriteTag(out, field, 2);
            pbWriteVarint(out, static_cast<quint64>(value.size()));
            out.append(value);
        }

        void pbWriteUint(QByteArray &out, int field, quint64 value) {
            pbWriteTag(out, field, 0);
            pbWriteVarint(out, value);
        }

        bool pbReadVarint(const QByteArray &in, int &pos, quint64 &value) {
            value = 0;
            int shift = 0;
            while (pos < in.size()) {
                const auto byte = static_cast<quint8>(in[pos++]);
                value |= static_cast<quint64>(byte & 0x7F) << shift;
                if ((byte & 0x80) == 0) return true;
                shift += 7;
                if (shift > 63) return false;
            }
            return false;
        }

        bool pbReadField(const QByteArray &in, int &pos, int &field, int &wireType, quint64 &varint, QByteArray &bytes) {
            quint64 tag = 0;
            if (!pbReadVarint(in, pos, tag)) return false;
            field = static_cast<int>(tag >> 3);
            wireType = static_cast<int>(tag & 0x07);
            varint = 0;
            bytes.clear();
            switch (wireType) {
                case 0:
                    return pbReadVarint(in, pos, varint);
                case 1:
                    if (pos + 8 > in.size()) return false;
                    pos += 8;
                    return true;
                case 2: {
                    quint64 len = 0;
                    if (!pbReadVarint(in, pos, len)) return false;
                    if (len > static_cast<quint64>(in.size() - pos)) return false;
                    bytes = in.mid(pos, static_cast<int>(len));
                    pos += static_cast<int>(len);
                    return true;
                }
                case 5:
                    if (pos + 4 > in.size()) return false;
                    pos += 4;
                    return true;
                default:
                    return false;
            }
        }

        Algorithm migrationAlgorithm(quint64 value) {
            switch (value) {
                case 2: return Algorithm::SHA256;
                case 3: return Algorithm::SHA512;
                default: return Algorithm::SHA1;
            }
        }

        quint64 migrationAlgorithmValue(Algorithm algorithm) {
            switch (algorithm) {
                case Algorithm::SHA256: return 2;
                case Algorithm::SHA512: return 3;
                default: return 1;
            }
        }

        // Even grouping is what separates a printed secret from prose, which is also all base32 letters.
        bool LooksLikeBareSecret(const QString &line) {
            const auto groups = line.split(QRegularExpression("[\\s-]+"), Qt::SkipEmptyParts);
            if (groups.isEmpty()) return false;
            if (groups.size() == 1) return true;
            const auto width = groups.first().size();
            if (width > 8) return false;
            return std::all_of(groups.begin(), groups.end(),
                               [width](const QString &group) { return group.size() == width; });
        }

        Entry entryFromJsonObject(const QJsonObject &object) {
            Entry entry;
            entry.name = object["name"].toString();
            entry.issuer = object["issuer"].toString();
            entry.secret = NormalizeSecret(object["secret"].toString());
            entry.algorithm = AlgorithmFromString(object["algorithm"].toString());
            entry.type = TypeFromString(object["type"].toString());
            entry.digits = object.contains("digits") ? object["digits"].toInt(DEFAULT_DIGITS) : DEFAULT_DIGITS;
            entry.period = object.contains("period") ? object["period"].toInt(DEFAULT_PERIOD) : DEFAULT_PERIOD;
            entry.counter = object["counter"].toVariant().toLongLong();
            return entry;
        }

        QJsonObject entryToJsonObject(const Entry &entry) {
            QJsonObject object;
            object["name"] = entry.name;
            if (!entry.issuer.isEmpty()) object["issuer"] = entry.issuer;
            object["secret"] = entry.secret;
            object["algorithm"] = AlgorithmToString(entry.algorithm);
            object["type"] = TypeToString(entry.type);
            object["digits"] = entry.digits;
            if (entry.type == Type::TOTP) object["period"] = entry.period;
            else object["counter"] = entry.counter;
            return object;
        }
    } // namespace

    QString AlgorithmToString(Algorithm algorithm) {
        switch (algorithm) {
            case Algorithm::SHA256: return "SHA256";
            case Algorithm::SHA512: return "SHA512";
            default: return "SHA1";
        }
    }

    Algorithm AlgorithmFromString(const QString &name, bool *ok) {
        if (ok) *ok = true;
        const auto normalized = name.trimmed().toUpper();
        if (normalized == "SHA256") return Algorithm::SHA256;
        if (normalized == "SHA512") return Algorithm::SHA512;
        if (normalized == "SHA1" || normalized.isEmpty()) return Algorithm::SHA1;
        if (ok) *ok = false;
        return Algorithm::SHA1;
    }

    QString TypeToString(Type type) {
        return type == Type::HOTP ? "hotp" : "totp";
    }

    Type TypeFromString(const QString &name, bool *ok) {
        if (ok) *ok = true;
        const auto normalized = name.trimmed().toLower();
        if (normalized == "hotp") return Type::HOTP;
        if (normalized == "totp" || normalized.isEmpty()) return Type::TOTP;
        if (ok) *ok = false;
        return Type::TOTP;
    }

    QByteArray Base32Decode(const QString &input, bool *ok) {
        if (ok) *ok = false;
        QByteArray out;
        quint32 buffer = 0;
        int bitsLeft = 0;
        for (const QChar &qc : input) {
            const char c = qc.toLatin1();
            if (c == ' ' || c == '-' || c == '_' || c == '\t' || c == '\r' || c == '\n' || c == '=') continue;
            int value;
            if (c >= 'A' && c <= 'Z') value = c - 'A';
            else if (c >= 'a' && c <= 'z') value = c - 'a';
            else if (c >= '2' && c <= '7') value = c - '2' + 26;
            else return {};
            buffer = (buffer << 5) | static_cast<quint32>(value);
            bitsLeft += 5;
            if (bitsLeft >= 8) {
                bitsLeft -= 8;
                out.append(static_cast<char>((buffer >> bitsLeft) & 0xFF));
            }
        }
        if (ok) *ok = true;
        return out;
    }

    QString Base32Encode(const QByteArray &input) {
        QString out;
        quint32 buffer = 0;
        int bitsLeft = 0;
        for (const char c : input) {
            buffer = (buffer << 8) | static_cast<quint8>(c);
            bitsLeft += 8;
            while (bitsLeft >= 5) {
                bitsLeft -= 5;
                out.append(QLatin1Char(BASE32_ALPHABET[(buffer >> bitsLeft) & 0x1F]));
            }
        }
        if (bitsLeft > 0) out.append(QLatin1Char(BASE32_ALPHABET[(buffer << (5 - bitsLeft)) & 0x1F]));
        return out;
    }

    QString NormalizeSecret(const QString &secret) {
        bool ok = false;
        const auto decoded = Base32Decode(secret, &ok);
        if (!ok || decoded.isEmpty()) return {};
        return Base32Encode(decoded);
    }

    QString Validate(const Entry &entry) {
        if (entry.secret.trimmed().isEmpty()) return QObject::tr("Secret is empty");
        bool ok = false;
        const auto key = Base32Decode(entry.secret, &ok);
        if (!ok) return QObject::tr("Secret is not valid base32");
        if (key.isEmpty()) return QObject::tr("Secret is too short");
        if (entry.digits < MIN_DIGITS || entry.digits > MAX_DIGITS)
            return QObject::tr("Digits must be between %1 and %2").arg(MIN_DIGITS).arg(MAX_DIGITS);
        if (entry.type == Type::TOTP && (entry.period < MIN_PERIOD || entry.period > MAX_PERIOD))
            return QObject::tr("Period must be between %1 and %2 seconds").arg(MIN_PERIOD).arg(MAX_PERIOD);
        return {};
    }

    QString GenerateHOTP(const QByteArray &key, quint64 counter, Algorithm algorithm, int digits) {
        if (key.isEmpty() || digits < MIN_DIGITS || digits > MAX_DIGITS) return {};

        QByteArray message(8, Qt::Uninitialized);
        for (int i = 7; i >= 0; --i) {
            message[i] = static_cast<char>(counter & 0xFF);
            counter >>= 8;
        }

        const auto mac = QMessageAuthenticationCode::hash(message, key, toHash(algorithm));
        if (mac.size() < 20) return {};

        // RFC 4226 dynamic truncation: last nibble picks the window, top bit masked off.
        const int offset = mac[mac.size() - 1] & 0x0F;
        const quint32 binary = (static_cast<quint32>(static_cast<quint8>(mac[offset])) & 0x7F) << 24
                             | static_cast<quint32>(static_cast<quint8>(mac[offset + 1])) << 16
                             | static_cast<quint32>(static_cast<quint8>(mac[offset + 2])) << 8
                             | static_cast<quint32>(static_cast<quint8>(mac[offset + 3]));

        quint64 modulus = 1;
        for (int i = 0; i < digits; ++i) modulus *= 10;
        return QString("%1").arg(binary % modulus, digits, 10, QLatin1Char('0'));
    }

    QString GenerateCode(const Entry &entry, qint64 unixTime) {
        if (!Validate(entry).isEmpty()) return {};
        const auto key = Base32Decode(entry.secret);
        if (entry.type == Type::HOTP) {
            return GenerateHOTP(key, static_cast<quint64>(entry.counter), entry.algorithm, entry.digits);
        }
        const qint64 now = unixTime < 0 ? QDateTime::currentSecsSinceEpoch() : unixTime;
        return GenerateHOTP(key, static_cast<quint64>(now / entry.period), entry.algorithm, entry.digits);
    }

    int SecondsRemaining(const Entry &entry, qint64 unixTime) {
        if (entry.type == Type::HOTP || entry.period < MIN_PERIOD) return 0;
        const qint64 now = unixTime < 0 ? QDateTime::currentSecsSinceEpoch() : unixTime;
        return static_cast<int>(entry.period - now % entry.period);
    }

    QString ExportToLink(const Entry &entry) {
        QUrl url;
        url.setScheme("otpauth");
        url.setHost(TypeToString(entry.type));
        url.setPath("/" + (entry.issuer.isEmpty() ? entry.name : entry.issuer + ":" + entry.name));

        QUrlQuery query;
        query.addQueryItem("secret", entry.secret);
        if (!entry.issuer.isEmpty()) query.addQueryItem("issuer", entry.issuer);
        query.addQueryItem("algorithm", AlgorithmToString(entry.algorithm));
        query.addQueryItem("digits", QString::number(entry.digits));
        if (entry.type == Type::HOTP) query.addQueryItem("counter", QString::number(entry.counter));
        else query.addQueryItem("period", QString::number(entry.period));
        url.setQuery(query);

        return url.toString(QUrl::FullyEncoded);
    }

    bool ParseFromLink(const QString &link, Entry &out) {
        const QUrl url(link.trimmed());
        if (!url.isValid() || url.scheme().compare("otpauth", Qt::CaseInsensitive) != 0) return false;

        Entry entry;
        entry.type = TypeFromString(url.host());

        auto label = url.path();
        if (label.startsWith('/')) label.remove(0, 1);
        if (const int sep = label.indexOf(':'); sep >= 0) {
            entry.issuer = label.left(sep).trimmed();
            entry.name = label.mid(sep + 1).trimmed();
        } else {
            entry.name = label.trimmed();
        }

        const QUrlQuery query(url);
        entry.secret = NormalizeSecret(query.queryItemValue("secret", QUrl::FullyDecoded));
        if (entry.secret.isEmpty()) return false;

        if (const auto issuer = query.queryItemValue("issuer", QUrl::FullyDecoded).trimmed(); !issuer.isEmpty())
            entry.issuer = issuer;
        if (query.hasQueryItem("algorithm"))
            entry.algorithm = AlgorithmFromString(query.queryItemValue("algorithm", QUrl::FullyDecoded));
        if (query.hasQueryItem("digits"))
            entry.digits = query.queryItemValue("digits").toInt();
        if (query.hasQueryItem("period"))
            entry.period = query.queryItemValue("period").toInt();
        if (query.hasQueryItem("counter"))
            entry.counter = query.queryItemValue("counter").toLongLong();

        if (entry.digits < MIN_DIGITS || entry.digits > MAX_DIGITS) entry.digits = DEFAULT_DIGITS;
        if (entry.period < MIN_PERIOD || entry.period > MAX_PERIOD) entry.period = DEFAULT_PERIOD;
        if (entry.name.isEmpty()) entry.name = entry.issuer;

        out = entry;
        return true;
    }

    QString ExportToMigrationLink(const QList<Entry> &entries) {
        QByteArray payload;
        for (const auto &entry : entries) {
            bool ok = false;
            const auto key = Base32Decode(entry.secret, &ok);
            if (!ok || key.isEmpty()) continue;

            QByteArray parameters;
            pbWriteBytes(parameters, 1, key);
            pbWriteBytes(parameters, 2, entry.name.toUtf8());
            if (!entry.issuer.isEmpty()) pbWriteBytes(parameters, 3, entry.issuer.toUtf8());
            pbWriteUint(parameters, 4, migrationAlgorithmValue(entry.algorithm));
            pbWriteUint(parameters, 5, entry.digits == 8 ? 2 : 1);
            pbWriteUint(parameters, 6, entry.type == Type::HOTP ? 1 : 2);
            if (entry.type == Type::HOTP) pbWriteUint(parameters, 7, static_cast<quint64>(entry.counter));

            pbWriteBytes(payload, 1, parameters);
        }
        if (payload.isEmpty()) return {};

        pbWriteUint(payload, 2, 1); // version
        pbWriteUint(payload, 3, 1); // batch_size
        pbWriteUint(payload, 4, 0); // batch_index

        QUrl url;
        url.setScheme("otpauth-migration");
        url.setHost("offline");
        QUrlQuery query;
        query.addQueryItem("data", QString::fromUtf8(payload.toBase64()));
        url.setQuery(query);
        return url.toString(QUrl::FullyEncoded);
    }

    bool ParseFromMigrationLink(const QString &link, QList<Entry> &out) {
        const QUrl url(link.trimmed());
        if (!url.isValid() || url.scheme().compare("otpauth-migration", Qt::CaseInsensitive) != 0) return false;

        const auto data = QUrlQuery(url).queryItemValue("data", QUrl::FullyDecoded);
        if (data.isEmpty()) return false;
        const auto payload = QByteArray::fromBase64(data.toUtf8());
        if (payload.isEmpty()) return false;

        QList<Entry> entries;
        int pos = 0;
        while (pos < payload.size()) {
            int field = 0, wireType = 0;
            quint64 varint = 0;
            QByteArray bytes;
            if (!pbReadField(payload, pos, field, wireType, varint, bytes)) return false;
            if (field != 1 || wireType != 2) continue;

            Entry entry;
            bool haveSecret = false;
            int inner = 0;
            while (inner < bytes.size()) {
                int f = 0, w = 0;
                quint64 v = 0;
                QByteArray b;
                if (!pbReadField(bytes, inner, f, w, v, b)) return false;
                switch (f) {
                    case 1: entry.secret = Base32Encode(b); haveSecret = !b.isEmpty(); break;
                    case 2: entry.name = QString::fromUtf8(b); break;
                    case 3: entry.issuer = QString::fromUtf8(b); break;
                    case 4: entry.algorithm = migrationAlgorithm(v); break;
                    case 5: entry.digits = v == 2 ? 8 : DEFAULT_DIGITS; break;
                    case 6: entry.type = v == 1 ? Type::HOTP : Type::TOTP; break;
                    case 7: entry.counter = static_cast<qint64>(v); break;
                    default: break;
                }
            }
            if (!haveSecret) continue;
            if (entry.name.isEmpty()) entry.name = entry.issuer;
            entries.append(entry);
        }

        if (entries.isEmpty()) return false;
        out = entries;
        return true;
    }

    QByteArray ExportToJson(const QList<Entry> &entries) {
        QJsonArray array;
        for (const auto &entry : entries) array.append(entryToJsonObject(entry));
        QJsonObject root;
        root["version"] = 1;
        root["otp"] = array;
        return QJsonDocument(root).toJson(QJsonDocument::Indented);
    }

    bool ParseFromJson(const QByteArray &json, QList<Entry> &out) {
        QJsonParseError error{};
        const auto document = QJsonDocument::fromJson(json, &error);
        if (error.error != QJsonParseError::NoError) return false;

        QJsonArray array;
        if (document.isArray()) array = document.array();
        else if (document.isObject()) array = document.object()["otp"].toArray();
        if (array.isEmpty()) return false;

        QList<Entry> entries;
        for (const auto &value : array) {
            if (!value.isObject()) continue;
            auto entry = entryFromJsonObject(value.toObject());
            if (entry.secret.isEmpty()) continue;
            entries.append(entry);
        }

        if (entries.isEmpty()) return false;
        out = entries;
        return true;
    }

    QList<Entry> ParseAny(const QString &text, QStringList *problems) {
        QList<Entry> result;
        const auto trimmed = text.trimmed();
        if (trimmed.isEmpty()) return result;

        if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
            if (ParseFromJson(trimmed.toUtf8(), result)) return result;
            if (problems) *problems << QObject::tr("Not a readable OTP export");
            return result;
        }

        const auto lines = trimmed.split(QRegularExpression("[\r\n]+"), Qt::SkipEmptyParts);
        for (const auto &rawLine : lines) {
            const auto line = rawLine.trimmed();
            if (line.isEmpty()) continue;

            if (line.startsWith("otpauth-migration://", Qt::CaseInsensitive)) {
                QList<Entry> batch;
                if (ParseFromMigrationLink(line, batch)) result += batch;
                else if (problems) *problems << QObject::tr("Unreadable migration link");
                continue;
            }

            Entry entry;
            if (ParseFromLink(line, entry)) {
                result.append(entry);
                continue;
            }

            if (const auto secret = LooksLikeBareSecret(line) ? NormalizeSecret(line) : QString();
                !secret.isEmpty() && Base32Decode(secret).size() >= MIN_BARE_SECRET_BYTES) {
                Entry bare;
                bare.secret = secret;
                result.append(bare);
                continue;
            }

            if (problems) *problems << QObject::tr("Not an otpauth link or secret: %1").arg(line.left(40));
        }
        return result;
    }
} // namespace OTP
