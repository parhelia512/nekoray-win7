#include "include/sys/GlobalHotkeyBackend.hpp"

#include <QDBusArgument>
#include <QDBusConnection>
#include <QDBusConnectionInterface>
#include <QDBusMessage>
#include <QDBusMetaType>
#include <QDBusServiceWatcher>
#include <QDebug>
#include <QHash>
#include <QObject>
#include <QStringList>

#include <algorithm>

namespace {
    const QString kService = "org.kde.kglobalaccel";
    const QString kComponent = "throne";
    const QString kComponentPath = "/component/throne";
    const QString kComponentInterface = "org.kde.kglobalaccel.Component";
    constexpr uint kSetPresent = 2;
    constexpr uint kNoAutoloading = 4;

    struct KGlobalAccelKey {
        int keys[4] = {};
    };

    QDBusArgument &operator<<(QDBusArgument &argument, const KGlobalAccelKey &key) {
        argument.beginStructure();
        argument.beginArray(QMetaType::fromType<int>());
        for (const int code : key.keys) argument << code;
        argument.endArray();
        argument.endStructure();
        return argument;
    }

    const QDBusArgument &operator>>(const QDBusArgument &argument, KGlobalAccelKey &key) {
        argument.beginStructure();
        argument.beginArray();
        for (int &code : key.keys) {
            code = 0;
            if (!argument.atEnd()) argument >> code;
        }
        argument.endArray();
        argument.endStructure();
        return argument;
    }

    QStringList actionId(const QString &name, const QString &text) {
        return {kComponent, name, "Throne", text};
    }

    QDBusMessage callKGlobalAccel(const QString &method, const QVariantList &arguments) {
        auto message = QDBusMessage::createMethodCall(kService, "/kglobalaccel", "org.kde.KGlobalAccel", method);
        message.setArguments(arguments);
        // An activated kglobalaccel accepts registrations but never sees Wayland key events.
        message.setAutoStartService(false);
        return QDBusConnection::sessionBus().call(message, QDBus::Block, 3000);
    }

    void unregisterAction(const QString &name) {
        callKGlobalAccel("unregister", {kComponent, name});
    }

    QString serviceError(const QDBusMessage &reply) {
        return QCoreApplication::translate("GlobalHotkeys", "KDE's shortcut service failed: %1").arg(reply.errorMessage());
    }

    // Leftover actions would make globalShortcutAvailable refuse our own keys: a crashed run leaves them, a restarted daemon reloads them inactive.
    void unregisterComponent() {
        const auto reply = callKGlobalAccel("allActionsForComponent", {actionId({}, {})});
        if (reply.type() != QDBusMessage::ReplyMessage) return;
        for (const auto &stale : qdbus_cast<QList<QStringList>>(reply.arguments().value(0))) unregisterAction(stale.value(1));
    }

    QString registerAction(const QString &name, const QString &text, QKeyCombination key) {
        const KGlobalAccelKey wireKey{{key.toCombined()}};
        // Plasma 6 keeps a key another component holds and Plasma 5 blanks it, so check before and after.
        auto reply = callKGlobalAccel("globalShortcutAvailable", {QVariant::fromValue(wireKey), kComponent});
        if (reply.type() != QDBusMessage::ReplyMessage) return serviceError(reply);
        if (!reply.arguments().value(0).toBool()) return GlobalHotkeyBackend_Taken();

        const auto id = actionId(name, text);
        reply = callKGlobalAccel("doRegister", {id});
        if (reply.type() == QDBusMessage::ReplyMessage) {
            reply = callKGlobalAccel("setShortcutKeys", {id, QVariant::fromValue(QList<KGlobalAccelKey>{wireKey}), kSetPresent | kNoAutoloading});
        }
        if (reply.type() != QDBusMessage::ReplyMessage) {
            unregisterAction(name);
            return serviceError(reply);
        }
        const auto granted = qdbus_cast<QList<KGlobalAccelKey>>(reply.arguments().value(0));
        if (std::none_of(granted.cbegin(), granted.cend(), [](const KGlobalAccelKey &k) { return k.keys[0] != 0; })) {
            unregisterAction(name);
            return GlobalHotkeyBackend_Taken();
        }
        return {};
    }

    class KdeBackend final : public QObject, public GlobalHotkeyBackend {
        Q_OBJECT

    public:
        KdeBackend() : watcher(kService, QDBusConnection::sessionBus(), QDBusServiceWatcher::WatchForRegistration) {
            qDBusRegisterMetaType<KGlobalAccelKey>();
            qDBusRegisterMetaType<QList<KGlobalAccelKey>>();
            QDBusConnection::sessionBus().connect(kService, kComponentPath, kComponentInterface, "globalShortcutPressed", this, SLOT(onPressed(QString,QString)));
            connect(&watcher, &QDBusServiceWatcher::serviceRegistered, this, [this] {
                unregisterComponent();
                for (const auto &action : std::as_const(actions)) {
                    const auto error = registerAction(action.name, action.text, action.key);
                    if (!error.isEmpty()) qWarning() << "global hotkey" << action.name << "not restored:" << error;
                }
            });
            unregisterComponent();
        }

        ~KdeBackend() override {
            QDBusConnection::sessionBus().disconnect(kService, kComponentPath, kComponentInterface, "globalShortcutPressed", this, SLOT(onPressed(QString,QString)));
            for (const auto &action : std::as_const(actions)) unregisterAction(action.name);
        }

        QString add(int slot, const QString &name, const QString &text, QKeyCombination key) override {
            const auto error = registerAction(name, text, key);
            if (error.isEmpty()) actions.insert(slot, {name, text, key});
            return error;
        }

        void remove(int slot) override {
            const auto action = actions.take(slot);
            if (!action.name.isEmpty()) unregisterAction(action.name);
        }

    private slots:
        void onPressed(const QString &component, const QString &name) {
            if (component != kComponent || !activated) return;
            for (auto it = actions.cbegin(); it != actions.cend(); ++it) {
                if (it->name == name) activated(it.key());
            }
        }

    private:
        struct Action {
            QString name;
            QString text;
            QKeyCombination key;
        };

        QHash<int, Action> actions;
        QDBusServiceWatcher watcher;
    };
}

std::unique_ptr<GlobalHotkeyBackend> GlobalHotkeyBackend_CreateKde() {
    if (!qEnvironmentVariable("XDG_CURRENT_DESKTOP").split(':').contains("KDE")) return nullptr;
    const auto *bus = QDBusConnection::sessionBus().interface();
    if (!bus || !bus->isServiceRegistered(kService).value()) return nullptr;
    return std::make_unique<KdeBackend>();
}

#include "GlobalHotkeysKde.moc"
