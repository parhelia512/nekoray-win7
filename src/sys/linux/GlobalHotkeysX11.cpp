#include "include/sys/GlobalHotkeyBackend.hpp"

#include <QAbstractNativeEventFilter>
#include <QDebug>
#include <QGuiApplication>
#include <QKeySequence>
#include <QList>
#include <QMap>
#include <QTimer>

#include <xcb/xcb.h>
#include <X11/keysym.h>
#include <X11/XF86keysym.h>

#include <cstdlib>
#include <string_view>

namespace {
    constexpr uint16_t kModifierMask = XCB_MOD_MASK_SHIFT | XCB_MOD_MASK_CONTROL | XCB_MOD_MASK_1 | XCB_MOD_MASK_4;

    // keysymdef.h order, counted from XK_Cyrillic_yu and XK_Serbian_dje.
    constexpr std::u16string_view kCyrillicLetters = u"юабцдефгхийклмнопярстужвьызшэщчъ";
    constexpr std::u16string_view kCyrillicExtra = u"ђѓёєѕіїјљњћќґўџ";

    uint16_t hotkeyModifiers(Qt::KeyboardModifiers modifiers) {
        uint16_t result = 0;
        if (modifiers.testFlag(Qt::ShiftModifier)) result |= XCB_MOD_MASK_SHIFT;
        if (modifiers.testFlag(Qt::ControlModifier)) result |= XCB_MOD_MASK_CONTROL;
        if (modifiers.testFlag(Qt::AltModifier)) result |= XCB_MOD_MASK_1;
        if (modifiers.testFlag(Qt::MetaModifier)) result |= XCB_MOD_MASK_4;
        return result;
    }

    xcb_keysym_t legacyKeysym(char32_t ucs) {
        if (ucs >= 0x621 && ucs <= 0x63A) return XK_Arabic_hamza + (ucs - 0x621);
        if (ucs >= 0x640 && ucs <= 0x652) return XK_Arabic_tatweel + (ucs - 0x640);
        switch (ucs) {
            case 0x60C: return XK_Arabic_comma;
            case 0x61B: return XK_Arabic_semicolon;
            case 0x61F: return XK_Arabic_question_mark;
            case 0x2116: return XK_numerosign;
        }
        if (ucs > 0xFFFF) return XCB_NO_SYMBOL;
        if (const auto i = kCyrillicLetters.find(char16_t(ucs)); i != std::u16string_view::npos) return XK_Cyrillic_yu + i;
        if (const auto i = kCyrillicExtra.find(char16_t(ucs)); i != std::u16string_view::npos) return XK_Serbian_dje + i;
        return XCB_NO_SYMBOL;
    }

    QList<xcb_keysym_t> hotkeyKeysyms(QKeyCombination combination) {
        const int key = combination.key();
        if (combination.keyboardModifiers().testFlag(Qt::KeypadModifier)) {
            if (key >= Qt::Key_0 && key <= Qt::Key_9) return {xcb_keysym_t(XK_KP_0 + key - Qt::Key_0)};
            switch (key) {
                case Qt::Key_Asterisk: return {XK_KP_Multiply};
                case Qt::Key_Plus: return {XK_KP_Add};
                case Qt::Key_Minus: return {XK_KP_Subtract};
                case Qt::Key_Slash: return {XK_KP_Divide};
                case Qt::Key_Period: return {XK_KP_Decimal};
                case Qt::Key_Comma: return {XK_KP_Separator, XK_KP_Decimal};
                case Qt::Key_Equal: return {XK_KP_Equal};
            }
        }
        if (key >= Qt::Key_F1 && key <= Qt::Key_F35) return {xcb_keysym_t(XK_F1 + key - Qt::Key_F1)};
        switch (key) {
            case Qt::Key_Escape: return {XK_Escape};
            case Qt::Key_Tab: return {XK_Tab};
            case Qt::Key_Backtab: return {XK_ISO_Left_Tab};
            case Qt::Key_Backspace: return {XK_BackSpace};
            case Qt::Key_Return: return {XK_Return};
            case Qt::Key_Enter: return {XK_KP_Enter};
            case Qt::Key_Insert: return {XK_Insert};
            case Qt::Key_Delete: return {XK_Delete};
            case Qt::Key_Pause: return {XK_Pause};
            case Qt::Key_Print: return {XK_Print};
            case Qt::Key_SysReq: return {XK_Sys_Req};
            case Qt::Key_Clear: return {XK_Clear};
            case Qt::Key_Home: return {XK_Home};
            case Qt::Key_End: return {XK_End};
            case Qt::Key_Left: return {XK_Left};
            case Qt::Key_Up: return {XK_Up};
            case Qt::Key_Right: return {XK_Right};
            case Qt::Key_Down: return {XK_Down};
            case Qt::Key_PageUp: return {XK_Prior};
            case Qt::Key_PageDown: return {XK_Next};
            case Qt::Key_CapsLock: return {XK_Caps_Lock};
            case Qt::Key_NumLock: return {XK_Num_Lock};
            case Qt::Key_ScrollLock: return {XK_Scroll_Lock};
            case Qt::Key_Menu: return {XK_Menu};
            case Qt::Key_Help: return {XK_Help};
            case Qt::Key_MediaPrevious:
            case Qt::Key_MediaLast: return {XF86XK_AudioPrev};
            case Qt::Key_MediaNext: return {XF86XK_AudioNext};
            case Qt::Key_MediaPlay:
            case Qt::Key_MediaTogglePlayPause: return {XF86XK_AudioPlay};
            case Qt::Key_MediaPause: return {XF86XK_AudioPause, XF86XK_AudioPlay};
            case Qt::Key_MediaStop: return {XF86XK_AudioStop};
            case Qt::Key_MediaRecord: return {XF86XK_AudioRecord};
            case Qt::Key_VolumeDown: return {XF86XK_AudioLowerVolume};
            case Qt::Key_VolumeMute: return {XF86XK_AudioMute};
            case Qt::Key_VolumeUp: return {XF86XK_AudioRaiseVolume};
        }
        const char32_t ucs = QChar::toLower(char32_t(key));
        if ((ucs >= 0x20 && ucs <= 0x7E) || (ucs >= 0xA0 && ucs <= 0xFF)) return {ucs};
        if (ucs < 0x100 || ucs > 0x10FFFF) return {};
        const xcb_keysym_t unicode = 0x01000000 | ucs;
        if (const xcb_keysym_t legacy = legacyKeysym(ucs)) return {legacy, unicode};
        return {unicode};
    }

    class X11Backend final : public GlobalHotkeyBackend, public QAbstractNativeEventFilter {
    public:
        explicit X11Backend(xcb_connection_t *connection) : conn(connection) {
            for (auto it = xcb_setup_roots_iterator(xcb_get_setup(conn)); it.rem; xcb_screen_next(&it)) roots << it.data->root;
            if (auto *xkb = xcb_query_extension_reply(conn, xcb_query_extension(conn, 9, "XKEYBOARD"), nullptr)) {
                if (xkb->present) xkbFirstEvent = xkb->first_event;
                std::free(xkb);
            }
            loadKeyboard();
            qGuiApp->installNativeEventFilter(this);
        }

        ~X11Backend() override {
            if (!qGuiApp) return;
            qGuiApp->removeNativeEventFilter(this);
            for (const auto &hotkey : std::as_const(hotkeys)) ungrab(hotkey);
            xcb_flush(conn);
        }

        QString add(int slot, const QString &, const QString &, QKeyCombination key) override {
            Hotkey hotkey{key, hotkeyModifiers(key.keyboardModifiers())};
            const QString error = bind(hotkey);
            if (error.isEmpty()) hotkeys.insert(slot, hotkey);
            return error;
        }

        void remove(int slot) override {
            ungrab(hotkeys.take(slot));
            xcb_flush(conn);
        }

        bool nativeEventFilter(const QByteArray &eventType, void *message, qintptr *) override {
            if (eventType != "xcb_generic_event_t") return false;
            const auto *event = static_cast<const xcb_generic_event_t *>(message);
            // Unmasked on purpose: a SendEvent copy (0x80 bit) must not fire a hotkey.
            if (event->response_type == XCB_KEY_PRESS || event->response_type == XCB_KEY_RELEASE) {
                return handleKey(reinterpret_cast<const xcb_key_press_event_t *>(event));
            }
            const uint8_t type = event->response_type & 0x7F;
            if (type == XCB_MAPPING_NOTIFY) {
                if (reinterpret_cast<const xcb_mapping_notify_event_t *>(event)->request != XCB_MAPPING_POINTER) scheduleRegrab();
            } else if (xkbFirstEvent && type == xkbFirstEvent) {
                // XKB subtype is byte 1: 0 NewKeyboardNotify (XKB clients like Qt get no MappingNotify for it), 1 MapNotify.
                if (event->pad0 <= 1) scheduleRegrab();
            }
            return false;
        }

    private:
        struct Hotkey {
            QKeyCombination key;
            uint16_t modifiers = 0;
            xcb_keycode_t keycode = 0;
        };

        void loadKeyboard() {
            const xcb_setup_t *setup = xcb_get_setup(conn);
            const auto keyboardCookie = xcb_get_keyboard_mapping(conn, setup->min_keycode, setup->max_keycode - setup->min_keycode + 1);
            const auto modifierCookie = xcb_get_modifier_mapping(conn);

            minKeycode = setup->min_keycode;
            keysymsPerKeycode = 0;
            keysyms.clear();
            if (auto *reply = xcb_get_keyboard_mapping_reply(conn, keyboardCookie, nullptr)) {
                const xcb_keysym_t *first = xcb_get_keyboard_mapping_keysyms(reply);
                keysyms = QList<xcb_keysym_t>(first, first + xcb_get_keyboard_mapping_keysyms_length(reply));
                keysymsPerKeycode = reply->keysyms_per_keycode;
                std::free(reply);
            }

            uint16_t numLock = 0;
            uint16_t scrollLock = 0;
            if (auto *reply = xcb_get_modifier_mapping_reply(conn, modifierCookie, nullptr)) {
                const xcb_keycode_t *keycodes = xcb_get_modifier_mapping_keycodes(reply);
                for (int i = 0; i < xcb_get_modifier_mapping_keycodes_length(reply); ++i) {
                    const xcb_keysym_t keysym = keysyms.value(qsizetype(keycodes[i] - minKeycode) * keysymsPerKeycode);
                    const uint16_t modifier = 1 << (i / reply->keycodes_per_modifier);
                    if (keysym == XK_Num_Lock) numLock |= modifier;
                    if (keysym == XK_Scroll_Lock) scrollLock |= modifier;
                }
                std::free(reply);
            }

            lockMasks = {0};
            for (const uint16_t lock : {uint16_t(XCB_MOD_MASK_LOCK), numLock, scrollLock}) {
                for (qsizetype i = 0, count = lockMasks.size(); i < count; ++i) {
                    const uint16_t mask = lockMasks[i] | lock;
                    if (!lockMasks.contains(mask)) lockMasks << mask;
                }
            }
        }

        // Columns outermost, like XKeysymToKeycode: a key's base level beats another key's shifted one.
        xcb_keycode_t keycodeFor(QKeyCombination key) const {
            const qsizetype count = keysymsPerKeycode ? keysyms.size() / keysymsPerKeycode : 0;
            const auto candidates = hotkeyKeysyms(key);
            for (const xcb_keysym_t keysym : candidates) {
                for (int column = 0; column < keysymsPerKeycode; ++column) {
                    for (qsizetype i = 0; i < count; ++i) {
                        if (keysyms[i * keysymsPerKeycode + column] == keysym) return xcb_keycode_t(minKeycode + i);
                    }
                }
            }
            return 0;
        }

        QString bind(Hotkey &hotkey) {
            const xcb_keycode_t keycode = keycodeFor(hotkey.key);
            if (!keycode) return GlobalHotkeyBackend_Unmappable();
            for (const auto &other : std::as_const(hotkeys)) {
                if (other.keycode == keycode && other.modifiers == hotkey.modifiers) return GlobalHotkeyBackend_Taken();
            }
            const QString error = grab(keycode, hotkey.modifiers);
            if (error.isEmpty()) hotkey.keycode = keycode;
            return error;
        }

        QString grab(xcb_keycode_t keycode, uint16_t modifiers) {
            struct Request {
                xcb_window_t root;
                uint16_t mask;
                xcb_void_cookie_t cookie;
            };
            QList<Request> requests;
            for (const xcb_window_t root : std::as_const(roots)) {
                for (const uint16_t lock : std::as_const(lockMasks)) {
                    const uint16_t mask = modifiers | lock;
                    requests << Request{root, mask, xcb_grab_key_checked(conn, 1, root, mask, keycode, XCB_GRAB_MODE_ASYNC, XCB_GRAB_MODE_ASYNC)};
                }
            }

            int errorCode = 0;
            QList<Request> granted;
            for (const auto &request : std::as_const(requests)) {
                if (auto *error = xcb_request_check(conn, request.cookie)) {
                    if (!errorCode) errorCode = error->error_code;
                    std::free(error);
                } else {
                    granted << request;
                }
            }
            if (!errorCode) return {};

            for (const auto &request : std::as_const(granted)) xcb_ungrab_key(conn, keycode, request.root, request.mask);
            xcb_flush(conn);
            if (errorCode == XCB_ACCESS) return GlobalHotkeyBackend_Taken();
            return QCoreApplication::translate("GlobalHotkeys", "Registration failed: X error %1").arg(errorCode);
        }

        void ungrab(const Hotkey &hotkey) {
            if (!hotkey.keycode) return;
            for (const xcb_window_t root : std::as_const(roots)) {
                for (const uint16_t lock : std::as_const(lockMasks)) xcb_ungrab_key(conn, hotkey.keycode, root, hotkey.modifiers | lock);
            }
        }

        bool handleKey(const xcb_key_press_event_t *event) {
            const uint16_t modifiers = event->state & kModifierMask;
            for (auto it = hotkeys.cbegin(); it != hotkeys.cend(); ++it) {
                if (it->keycode != event->detail || it->modifiers != modifiers) continue;
                // Qt leaves XKB detectable auto-repeat off, so a repeat is a release and a press sharing one timestamp.
                if (event->response_type == XCB_KEY_RELEASE) {
                    releasedKeycode = event->detail;
                    releasedTime = event->time;
                } else if (event->detail != releasedKeycode || event->time != releasedTime) {
                    if (activated) activated(it.key());
                }
                return true;
            }
            return false;
        }

        void scheduleRegrab() {
            if (regrabPending) return;
            regrabPending = true;
            QTimer::singleShot(0, &regrabContext, [this] { regrab(); });
        }

        void regrab() {
            regrabPending = false;
            // Ungrab first: loadKeyboard() replaces the lock masks these grabs were made with.
            for (auto &hotkey : hotkeys) {
                ungrab(hotkey);
                hotkey.keycode = 0;
            }
            loadKeyboard();
            for (auto &hotkey : hotkeys) {
                const QString error = bind(hotkey);
                if (!error.isEmpty()) qWarning() << "Global hotkey" << QKeySequence(hotkey.key).toString() << "lost after a keyboard mapping change:" << error;
            }
            xcb_flush(conn);
        }

        xcb_connection_t *conn;
        QList<xcb_window_t> roots;
        uint8_t xkbFirstEvent = 0;
        xcb_keycode_t minKeycode = 0;
        int keysymsPerKeycode = 0;
        QList<xcb_keysym_t> keysyms;
        QList<uint16_t> lockMasks;
        QMap<int, Hotkey> hotkeys;
        xcb_keycode_t releasedKeycode = 0;
        xcb_timestamp_t releasedTime = 0;
        bool regrabPending = false;
        QObject regrabContext;
    };
}

std::unique_ptr<GlobalHotkeyBackend> GlobalHotkeyBackend_CreateX11() {
    auto *x11 = qGuiApp ? qGuiApp->nativeInterface<QNativeInterface::QX11Application>() : nullptr;
    if (!x11 || !x11->connection()) return nullptr;
    return std::make_unique<X11Backend>(x11->connection());
}
