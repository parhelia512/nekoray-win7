#include "include/sys/GlobalHotkeys.hpp"

#include "include/sys/GlobalHotkeyBackend.hpp"

#include <QHash>

#ifdef Q_OS_LINUX
std::unique_ptr<GlobalHotkeyBackend> GlobalHotkeyBackend_Create() {
    return GlobalHotkeyBackend_WaylandSession() ? GlobalHotkeyBackend_CreateKde() : GlobalHotkeyBackend_CreateX11();
}
#endif

GlobalHotkeys::GlobalHotkeys(QObject *parent) : QObject(parent), backend(GlobalHotkeyBackend_Create()) {
    if (!backend) return;
    backend->activated = [this](int slot) {
        if (slot < 0 || slot >= slotIds.size() || slotIds[slot].isEmpty()) return;
        QMetaObject::invokeMethod(this, [this, id = slotIds[slot]] { emit activated(id); }, Qt::QueuedConnection);
    };
}

GlobalHotkeys::~GlobalHotkeys() {
    setActions({});
}

bool GlobalHotkeys::isSupported() const {
    return backend != nullptr;
}

QMap<QString, QString> GlobalHotkeys::setActions(const QList<Action> &actions) {
    if (backend) {
        for (int slot = 0; slot < slotIds.size(); ++slot) {
            if (!slotIds[slot].isEmpty()) backend->remove(slot);
        }
    }
    slotIds.clear();

    QMap<QString, QString> failures;
    QHash<int, QString> owners;
    for (const auto &action : actions) {
        if (action.key.isEmpty()) continue;
        if (!backend) {
            failures[action.id] = tr("Global hotkeys are not supported in this desktop session.");
            continue;
        }

        const QKeyCombination key = action.key[0];
        if (!(key.keyboardModifiers() & (Qt::ControlModifier | Qt::AltModifier | Qt::MetaModifier)) && key.key() < Qt::Key_F1) {
            failures[action.id] = tr("It needs Ctrl, Alt or Meta, otherwise it would block typing in other applications.");
            continue;
        }
        if (owners.contains(key.toCombined())) {
            failures[action.id] = tr("\"%1\" already uses it.").arg(owners[key.toCombined()]);
            continue;
        }

        const int slot = slotIds.size();
        slotIds << action.id;
        const QString error = backend->add(slot, action.id, action.text, key);
        if (!error.isEmpty()) {
            slotIds[slot].clear();
            failures[action.id] = error;
            continue;
        }
        owners[key.toCombined()] = action.text;
    }
    return failures;
}
