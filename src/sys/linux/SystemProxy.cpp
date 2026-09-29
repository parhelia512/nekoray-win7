#include "include/sys/SystemProxy.hpp"

#include <QMutex>
#include <QProcess>
#include <QStandardPaths>
#include <QStringList>

namespace {
    QMutex proxyMutex;
    bool proxyApplied = false;

    const QStringList kReparseKio = {"--type=signal", "/KIO/Scheduler", "org.kde.KIO.Scheduler.reparseSlaveConfiguration", "string:''"};

    // GNOME's settings are written on every desktop, since GTK apps and Firefox read them under KDE too; KDE's only in KDE sessions.
    struct SettingsTools {
        QString gsettings = QStandardPaths::findExecutable("gsettings");
        QString kwriteconfig;

        SettingsTools() {
            const auto desktops = qEnvironmentVariable("XDG_CURRENT_DESKTOP").split(':');
            if (!desktops.contains("KDE") && !desktops.contains("Trinity")) return;
            for (const auto *name : {"kwriteconfig6", "kwriteconfig5", "kwriteconfig"}) {
                kwriteconfig = QStandardPaths::findExecutable(name);
                if (!kwriteconfig.isEmpty()) break;
            }
        }
    };

    void runSettingsTool(QStringList &errors, const QString &program, const QStringList &args) {
        QProcess process;
        process.start(program, args);
        if (!process.waitForFinished(10000)) {
            errors << program + ": " + process.errorString();
            return;
        }
        if (process.exitStatus() == QProcess::NormalExit && process.exitCode() == 0) return;
        const auto output = QString::fromLocal8Bit(process.readAllStandardError()).trimmed();
        errors << program + " " + args.join(' ') + ": " + (output.isEmpty() ? QString("exit code %1").arg(process.exitCode()) : output);
    }

    QStringList kioslavercArgs(const QString &key, const QString &value) {
        return {"--file", QStandardPaths::writableLocation(QStandardPaths::GenericConfigLocation) + "/kioslaverc",
                "--group", "Proxy Settings", "--key", key, value};
    }
}

QString SystemProxy_Apply(const QString &host, int port, const QString &) {
    QMutexLocker lock(&proxyMutex);
    const SettingsTools tools;
    if (tools.gsettings.isEmpty() && tools.kwriteconfig.isEmpty()) return "no proxy settings tool was found (gsettings, or kwriteconfig under KDE)";
    proxyApplied = true;

    QStringList errors;
    const auto portText = QString::number(port);
    if (!tools.gsettings.isEmpty()) {
        for (const QString protocol : {"http", "https", "ftp", "socks"}) {
            runSettingsTool(errors, tools.gsettings, {"set", "org.gnome.system.proxy." + protocol, "host", host});
            runSettingsTool(errors, tools.gsettings, {"set", "org.gnome.system.proxy." + protocol, "port", portText});
        }
        runSettingsTool(errors, tools.gsettings, {"set", "org.gnome.system.proxy", "mode", "manual"});
    }
    if (!tools.kwriteconfig.isEmpty()) {
        const auto address = (host.contains(':') ? QString("[%1]").arg(host) : host) + " " + portText;
        for (const QString protocol : {"http", "https", "ftp"}) {
            runSettingsTool(errors, tools.kwriteconfig, kioslavercArgs(protocol + "Proxy", "http://" + address));
        }
        runSettingsTool(errors, tools.kwriteconfig, kioslavercArgs("socksProxy", "socks://" + address));
        runSettingsTool(errors, tools.kwriteconfig, kioslavercArgs("ProxyType", "1"));
        runSettingsTool(errors, "dbus-send", kReparseKio);
    }
    return errors.join("; ");
}

QString SystemProxy_Clear() {
    QMutexLocker lock(&proxyMutex);
    if (!proxyApplied) return {};
    const SettingsTools tools;

    QStringList errors;
    if (!tools.gsettings.isEmpty()) {
        runSettingsTool(errors, tools.gsettings, {"set", "org.gnome.system.proxy", "mode", "none"});
    }
    if (!tools.kwriteconfig.isEmpty()) {
        runSettingsTool(errors, tools.kwriteconfig, kioslavercArgs("ProxyType", "0"));
        runSettingsTool(errors, "dbus-send", kReparseKio);
    }
    if (errors.isEmpty()) proxyApplied = false;
    return errors.join("; ");
}
