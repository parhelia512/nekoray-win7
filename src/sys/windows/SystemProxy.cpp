#include "include/sys/SystemProxy.hpp"

#include <QMutex>
#include <QStringList>

#include <map>
#include <string>
#include <vector>

#include <windows.h>
#include <wininet.h>
#include <ras.h>
#include <raserror.h>

namespace {
    QMutex proxyMutex;

    // Connections switched to our proxy ("" is the LAN settings), each with the auto-detect/PAC flags the user had there.
    std::map<std::wstring, DWORD> proxiedConnections;

    // WinINet keeps separate settings for the LAN and for every dial-up/PPPoE/VPN connectoid, and uses the active one's.
    std::vector<std::wstring> proxyConnectionNames(QStringList &errors) {
        std::vector<std::wstring> names{std::wstring()};
        DWORD bytes = 0;
        DWORD count = 0;
        std::vector<RASENTRYNAMEW> entries;
        DWORD ret = RasEnumEntriesW(nullptr, nullptr, nullptr, &bytes, &count);
        if (ret == ERROR_BUFFER_TOO_SMALL) {
            entries.resize(bytes / sizeof(RASENTRYNAMEW) + 1);
            entries[0].dwSize = sizeof(RASENTRYNAMEW);
            bytes = static_cast<DWORD>(entries.size() * sizeof(RASENTRYNAMEW));
            ret = RasEnumEntriesW(nullptr, nullptr, entries.data(), &bytes, &count);
        }
        if (ret != ERROR_SUCCESS) {
            errors << QString("RasEnumEntries failed (%1), only the LAN settings were changed").arg(ret);
            return names;
        }
        for (DWORD i = 0; i < count; ++i) names.emplace_back(entries[i].szEntryName);
        return names;
    }

    INTERNET_PER_CONN_OPTION_LISTW connectionOptionList(std::wstring &connection, INTERNET_PER_CONN_OPTIONW *options, DWORD count) {
        INTERNET_PER_CONN_OPTION_LISTW list{};
        list.dwSize = sizeof(list);
        list.pszConnection = connection.empty() ? nullptr : connection.data();
        list.dwOptionCount = count;
        list.pOptions = options;
        return list;
    }

    bool setConnectionOptions(std::wstring connection, INTERNET_PER_CONN_OPTIONW *options, DWORD count) {
        auto list = connectionOptionList(connection, options, count);
        return InternetSetOptionW(nullptr, INTERNET_OPTION_PER_CONNECTION_OPTION, &list, sizeof(list));
    }

    // Microsoft's rule: read FLAGS_UI (IE8+) and fall back to FLAGS, but always write FLAGS.
    DWORD userAutoFlags(std::wstring connection) {
        for (const DWORD which : {DWORD(INTERNET_PER_CONN_FLAGS_UI), DWORD(INTERNET_PER_CONN_FLAGS)}) {
            INTERNET_PER_CONN_OPTIONW option{};
            option.dwOption = which;
            auto list = connectionOptionList(connection, &option, 1);
            DWORD size = sizeof(list);
            if (InternetQueryOptionW(nullptr, INTERNET_OPTION_PER_CONNECTION_OPTION, &list, &size)) {
                return option.Value.dwValue & (PROXY_TYPE_AUTO_DETECT | PROXY_TYPE_AUTO_PROXY_URL);
            }
        }
        return 0;
    }

    void announceProxyChange() {
        InternetSetOptionW(nullptr, INTERNET_OPTION_SETTINGS_CHANGED, nullptr, 0);
        InternetSetOptionW(nullptr, INTERNET_OPTION_PROXY_SETTINGS_CHANGED, nullptr, 0);
        InternetSetOptionW(nullptr, INTERNET_OPTION_REFRESH, nullptr, 0);
    }

    QString connectionLabel(const std::wstring &connection) {
        return connection.empty() ? QStringLiteral("LAN") : QString::fromStdWString(connection);
    }

    std::wstring proxyServerString(const QString &host, int port, QString format) {
        // "http" and "socks" are what the setting held before it became a template.
        if (format == "http") format = "http://{ip}:{port}";
        else if (format == "socks") format = "socks={ip}:{port}";
        else if (!format.contains("{port}")) format = "{ip}:{port}";
        const QString ip = host.contains(':') ? QString("[%1]").arg(host) : host;
        return format.replace("{ip}", ip).replace("{port}", QString::number(port)).toStdWString();
    }
}

QString SystemProxy_Apply(const QString &host, int port, const QString &windowsFormat) {
    QMutexLocker lock(&proxyMutex);
    QStringList errors;
    auto server = proxyServerString(host, port, windowsFormat);
    for (const auto &connection : proxyConnectionNames(errors)) {
        // Only the first Apply still sees the user's flags; a later one would record our own.
        if (!proxiedConnections.contains(connection)) proxiedConnections[connection] = userAutoFlags(connection);

        INTERNET_PER_CONN_OPTIONW options[2]{};
        options[0].dwOption = INTERNET_PER_CONN_FLAGS;
        options[0].Value.dwValue = PROXY_TYPE_DIRECT | PROXY_TYPE_PROXY;
        options[1].dwOption = INTERNET_PER_CONN_PROXY_SERVER;
        options[1].Value.pszValue = server.data();
        if (!setConnectionOptions(connection, options, 2)) {
            const auto code = GetLastError();
            errors << QString("%1: InternetSetOption failed (%2)").arg(connectionLabel(connection)).arg(code);
        }
    }
    announceProxyChange();
    return errors.join("; ");
}

QString SystemProxy_Clear() {
    QMutexLocker lock(&proxyMutex);
    if (proxiedConnections.empty()) return {};
    QStringList errors;
    for (auto it = proxiedConnections.begin(); it != proxiedConnections.end();) {
        INTERNET_PER_CONN_OPTIONW option{};
        option.dwOption = INTERNET_PER_CONN_FLAGS;
        option.Value.dwValue = PROXY_TYPE_DIRECT | it->second;
        if (setConnectionOptions(it->first, &option, 1)) {
            it = proxiedConnections.erase(it);
        } else {
            const auto code = GetLastError();
            errors << QString("%1: InternetSetOption failed (%2)").arg(connectionLabel(it->first)).arg(code);
            ++it;
        }
    }
    announceProxyChange();
    return errors.join("; ");
}
