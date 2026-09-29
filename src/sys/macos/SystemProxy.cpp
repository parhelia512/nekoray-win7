#include "include/sys/SystemProxy.hpp"

#include <QMutex>
#include <QProcess>
#include <QStringList>

namespace {
    QMutex proxyMutex;
    bool proxyApplied = false;

    // stderr is only read on failure: without root, networksetup also complains there about a plist backup it cannot make.
    QString networksetup(const QStringList &args, QByteArray *output = nullptr) {
        QProcess process;
        process.start("/usr/sbin/networksetup", args);
        if (!process.waitForFinished(10000)) return "networksetup: " + process.errorString();
        if (process.exitStatus() == QProcess::NormalExit && process.exitCode() == 0) {
            if (output != nullptr) *output = process.readAllStandardOutput();
            return {};
        }
        const auto error = QString::fromLocal8Bit(process.readAllStandardError()).trimmed();
        return "networksetup " + args.join(' ') + ": " + (error.isEmpty() ? QString("exit code %1").arg(process.exitCode()) : error);
    }

    // The first line is a legend; a leading '*' marks a disabled service.
    QStringList enabledServices(QString &error) {
        QByteArray output;
        error = networksetup({"-listallnetworkservices"}, &output);
        const auto lines = QString::fromUtf8(output).split('\n', Qt::SkipEmptyParts);
        QStringList services;
        for (qsizetype i = 1; i < lines.size(); ++i) {
            if (!lines[i].startsWith('*')) services << lines[i];
        }
        return services;
    }
}

QString SystemProxy_Apply(const QString &host, int port, const QString &) {
    QMutexLocker lock(&proxyMutex);
    QString error;
    const auto services = enabledServices(error);
    if (!error.isEmpty()) return error;
    proxyApplied = true;

    QStringList errors;
    const auto portText = QString::number(port);
    for (const auto &service : services) {
        // Each of these also switches its proxy on.
        for (const auto *command : {"-setwebproxy", "-setsecurewebproxy", "-setsocksfirewallproxy"}) {
            if (auto e = networksetup({command, service, host, portText}); !e.isEmpty()) errors << e;
        }
    }
    return errors.join("; ");
}

QString SystemProxy_Clear() {
    QMutexLocker lock(&proxyMutex);
    if (!proxyApplied) return {};
    QString error;
    const auto services = enabledServices(error);
    if (!error.isEmpty()) return error;

    QStringList errors;
    for (const auto &service : services) {
        for (const auto *command : {"-setwebproxystate", "-setsecurewebproxystate", "-setsocksfirewallproxystate"}) {
            if (auto e = networksetup({command, service, "off"}); !e.isEmpty()) errors << e;
        }
    }
    if (errors.isEmpty()) proxyApplied = false;
    return errors.join("; ");
}
