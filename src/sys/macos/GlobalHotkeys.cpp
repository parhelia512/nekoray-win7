#include "include/sys/GlobalHotkeyBackend.hpp"

#include <QHash>

#include <utility>

#include <Carbon/Carbon.h>

namespace {
    constexpr OSType kHotkeySignature = 'THRN';

    UInt32 hotkeyModifiers(Qt::KeyboardModifiers modifiers) {
        // Qt calls Command "Control" and Control "Meta" unless AA_MacDontSwapCtrlAndMeta is set.
        const bool swapped = !QCoreApplication::testAttribute(Qt::AA_MacDontSwapCtrlAndMeta);
        UInt32 result = 0;
        if (modifiers.testFlag(Qt::ShiftModifier)) result |= shiftKey;
        if (modifiers.testFlag(Qt::AltModifier)) result |= optionKey;
        if (modifiers.testFlag(Qt::ControlModifier)) result |= swapped ? cmdKey : controlKey;
        if (modifiers.testFlag(Qt::MetaModifier)) result |= swapped ? controlKey : cmdKey;
        return result;
    }

    int layoutCharacterKey(TISInputSourceRef source, QStringView character, bool &shifted) {
        const auto data = CFDataRef(TISGetInputSourceProperty(source, kTISPropertyUnicodeKeyLayoutData));
        if (!data) return -1;
        const auto layout = reinterpret_cast<const UCKeyboardLayout *>(CFDataGetBytePtr(data));
        const UInt32 keyboardType = LMGetKbdType();
        // Codes below 0x40 are the main block; the keypad and JIS keys above it only count when no main key types the character.
        for (const int first : {0, 0x40}) {
            for (const UInt32 state : {0, (shiftKey >> 8) & 0xFF}) {
                for (int code = first; code < first + 0x40; ++code) {
                    constexpr UniCharCount maxLength = 4;
                    UniChar text[maxLength];
                    UniCharCount length = 0;
                    UInt32 deadKeyState = 0;
                    if (UCKeyTranslate(layout, UInt16(code), kUCKeyActionDisplay, state, keyboardType, kUCKeyTranslateNoDeadKeysMask, &deadKeyState, maxLength, &length, text) != noErr) continue;
                    if (QStringView(text, qsizetype(length)).compare(character, Qt::CaseInsensitive) == 0) {
                        shifted = state != 0;
                        return code;
                    }
                }
            }
        }
        return -1;
    }

    int hotkeyCharacterKey(char32_t ucs4, bool &shifted) {
        const QString character = QString::fromUcs4(&ucs4, 1);
        for (const auto copySource : {TISCopyCurrentKeyboardLayoutInputSource, TISCopyCurrentASCIICapableKeyboardLayoutInputSource}) {
            const TISInputSourceRef source = copySource();
            if (!source) continue;
            const int code = layoutCharacterKey(source, character, shifted);
            CFRelease(source);
            if (code >= 0) return code;
        }

        // The active layout may not be the one the key was recorded with, e.g. right after login.
        const CFArrayRef sources = TISCreateInputSourceList(nullptr, false);
        if (!sources) return -1;
        int code = -1;
        for (CFIndex i = 0; code < 0 && i < CFArrayGetCount(sources); ++i) {
            code = layoutCharacterKey(TISInputSourceRef(CFArrayGetValueAtIndex(sources, i)), character, shifted);
        }
        CFRelease(sources);
        return code;
    }

    int hotkeyVirtualKey(QKeyCombination combination, bool &shifted) {
        const int key = combination.key();
        if (combination.keyboardModifiers().testFlag(Qt::KeypadModifier)) {
            static constexpr int keypadDigits[] = {kVK_ANSI_Keypad0, kVK_ANSI_Keypad1, kVK_ANSI_Keypad2, kVK_ANSI_Keypad3, kVK_ANSI_Keypad4,
                                                   kVK_ANSI_Keypad5, kVK_ANSI_Keypad6, kVK_ANSI_Keypad7, kVK_ANSI_Keypad8, kVK_ANSI_Keypad9};
            if (key >= Qt::Key_0 && key <= Qt::Key_9) return keypadDigits[key - Qt::Key_0];
            switch (key) {
                case Qt::Key_Period:
                case Qt::Key_Comma: return kVK_ANSI_KeypadDecimal;
                case Qt::Key_Asterisk: return kVK_ANSI_KeypadMultiply;
                case Qt::Key_Plus: return kVK_ANSI_KeypadPlus;
                case Qt::Key_Minus: return kVK_ANSI_KeypadMinus;
                case Qt::Key_Slash: return kVK_ANSI_KeypadDivide;
                case Qt::Key_Equal: return kVK_ANSI_KeypadEquals;
            }
        }
        static constexpr int functionKeys[] = {kVK_F1, kVK_F2, kVK_F3, kVK_F4, kVK_F5, kVK_F6, kVK_F7, kVK_F8, kVK_F9, kVK_F10,
                                               kVK_F11, kVK_F12, kVK_F13, kVK_F14, kVK_F15, kVK_F16, kVK_F17, kVK_F18, kVK_F19, kVK_F20};
        if (key >= Qt::Key_F1 && key <= Qt::Key_F20) return functionKeys[key - Qt::Key_F1];
        switch (key) {
            case Qt::Key_Return: return kVK_Return;
            case Qt::Key_Enter: return kVK_ANSI_KeypadEnter;
            case Qt::Key_Tab:
            case Qt::Key_Backtab: return kVK_Tab;
            case Qt::Key_Space: return kVK_Space;
            case Qt::Key_Backspace: return kVK_Delete;
            case Qt::Key_Escape: return kVK_Escape;
            case Qt::Key_Delete: return kVK_ForwardDelete;
            case Qt::Key_Home: return kVK_Home;
            case Qt::Key_End: return kVK_End;
            case Qt::Key_PageUp: return kVK_PageUp;
            case Qt::Key_PageDown: return kVK_PageDown;
            case Qt::Key_Left: return kVK_LeftArrow;
            case Qt::Key_Right: return kVK_RightArrow;
            case Qt::Key_Up: return kVK_UpArrow;
            case Qt::Key_Down: return kVK_DownArrow;
            case Qt::Key_Help: return kVK_Help;
            case Qt::Key_CapsLock: return kVK_CapsLock;
            case Qt::Key_Clear: return kVK_ANSI_KeypadClear;
            case Qt::Key_VolumeUp: return kVK_VolumeUp;
            case Qt::Key_VolumeDown: return kVK_VolumeDown;
            case Qt::Key_VolumeMute: return kVK_Mute;
        }
        if (key < Qt::Key_Space || key > QChar::LastValidCodePoint) return -1;
        return hotkeyCharacterKey(char32_t(key), shifted);
    }

    class MacHotkeyBackend final : public GlobalHotkeyBackend {
    public:
        ~MacHotkeyBackend() override {
            for (const EventHotKeyRef hotkey : std::as_const(hotkeys)) UnregisterEventHotKey(hotkey);
            if (handler) RemoveEventHandler(handler);
        }

        bool install() {
            const EventTypeSpec type{kEventClassKeyboard, kEventHotKeyPressed};
            return InstallApplicationEventHandler(&MacHotkeyBackend::hotkeyPressed, 1, &type, this, &handler) == noErr;
        }

        QString add(int slot, const QString &, const QString &, QKeyCombination key) override {
            bool shifted = false;
            const int code = hotkeyVirtualKey(key, shifted);
            if (code < 0) return GlobalHotkeyBackend_Unmappable();
            UInt32 modifiers = hotkeyModifiers(key.keyboardModifiers());
            // Qt records Shift+1 as "!" without Shift, so a character only the shifted key types brings it back.
            if (shifted) modifiers |= shiftKey;

            const EventHotKeyID id{kHotkeySignature, UInt32(slot)};
            EventHotKeyRef hotkey = nullptr;
            const OSStatus status = RegisterEventHotKey(UInt32(code), modifiers, id, GetApplicationEventTarget(), 0, &hotkey);
            if (status == eventHotKeyExistsErr) return GlobalHotkeyBackend_Taken();
            if (status != noErr) return QCoreApplication::translate("GlobalHotkeys", "Registration failed: %1").arg(status);
            hotkeys.insert(slot, hotkey);
            return {};
        }

        void remove(int slot) override {
            if (const EventHotKeyRef hotkey = hotkeys.take(slot)) UnregisterEventHotKey(hotkey);
        }

    private:
        static OSStatus hotkeyPressed(EventHandlerCallRef, EventRef event, void *userData) {
            EventHotKeyID id{};
            if (GetEventParameter(event, kEventParamDirectObject, typeEventHotKeyID, nullptr, sizeof(id), nullptr, &id) != noErr
                || id.signature != kHotkeySignature)
                return eventNotHandledErr;
            const auto *backend = static_cast<MacHotkeyBackend *>(userData);
            if (backend->activated) backend->activated(int(id.id));
            return noErr;
        }

        EventHandlerRef handler = nullptr;
        QHash<int, EventHotKeyRef> hotkeys;
    };
}

std::unique_ptr<GlobalHotkeyBackend> GlobalHotkeyBackend_Create() {
    auto backend = std::make_unique<MacHotkeyBackend>();
    if (!backend->install()) return nullptr;
    return backend;
}
