#pragma once

#include <QCoreApplication>
#include <QKeyCombination>
#include <QString>

#include <functional>
#include <memory>

// Implemented per platform and only used from the GUI thread.
class GlobalHotkeyBackend {
public:
    virtual ~GlobalHotkeyBackend() = default;

    // Returns why the key was refused, empty on success. name is stable across runs, text is what desktops that list shortcuts show.
    virtual QString add(int slot, const QString &name, const QString &text, QKeyCombination key) = 0;

    virtual void remove(int slot) = 0;

    std::function<void(int slot)> activated;
};

// Null when this session cannot have global hotkeys.
std::unique_ptr<GlobalHotkeyBackend> GlobalHotkeyBackend_Create();

#ifdef Q_OS_LINUX
std::unique_ptr<GlobalHotkeyBackend> GlobalHotkeyBackend_CreateKde();
std::unique_ptr<GlobalHotkeyBackend> GlobalHotkeyBackend_CreateX11();

// The session decides, not Qt's platform plugin: under XWayland, X11 grabs only fire while an X11 window has focus.
inline bool GlobalHotkeyBackend_WaylandSession() {
    const QString type = qEnvironmentVariable("XDG_SESSION_TYPE");
    return type.isEmpty() ? !qEnvironmentVariableIsEmpty("WAYLAND_DISPLAY") : type == "wayland";
}
#endif

inline QString GlobalHotkeyBackend_Unmappable() {
    return QCoreApplication::translate("GlobalHotkeys", "This key can't be used in a global hotkey.");
}

inline QString GlobalHotkeyBackend_Taken() {
    return QCoreApplication::translate("GlobalHotkeys", "Another application or a system shortcut already uses it.");
}
