#include "include/sys/GlobalHotkeyBackend.hpp"

#include <vector>

#ifndef WIN32_LEAN_AND_MEAN
#define WIN32_LEAN_AND_MEAN
#endif
#include <windows.h>

// The SDK hides it below WINVER 0x0601, and the MSVC build targets 0x0600.
#ifndef MOD_NOREPEAT
#define MOD_NOREPEAT 0x4000
#endif

namespace {
    constexpr wchar_t kHotkeyWindowClass[] = L"ThroneGlobalHotkeys";

    UINT hotkeyModifiers(Qt::KeyboardModifiers modifiers) {
        UINT result = MOD_NOREPEAT;
        if (modifiers.testFlag(Qt::ShiftModifier)) result |= MOD_SHIFT;
        if (modifiers.testFlag(Qt::ControlModifier)) result |= MOD_CONTROL;
        if (modifiers.testFlag(Qt::AltModifier)) result |= MOD_ALT;
        if (modifiers.testFlag(Qt::MetaModifier)) result |= MOD_WIN;
        return result;
    }

    UINT hotkeyCharacterKey(wchar_t character) {
        std::vector<HKL> layouts{GetKeyboardLayout(0)};
        if (const int count = GetKeyboardLayoutList(0, nullptr); count > 0) {
            layouts.resize(1 + count);
            layouts.resize(1 + GetKeyboardLayoutList(count, layouts.data() + 1));
        }
        for (const HKL layout : layouts) {
            // Only the key byte counts: Qt reports letters uppercased, so the shift-state byte is not what was pressed.
            const SHORT scan = VkKeyScanExW(character, layout);
            if (LOBYTE(scan) != 0xFF) return LOBYTE(scan);
        }
        return 0;
    }

    UINT hotkeyVirtualKey(QKeyCombination combination) {
        const int key = combination.key();
        if (key >= Qt::Key_A && key <= Qt::Key_Z) return key;
        if (combination.keyboardModifiers().testFlag(Qt::KeypadModifier)) {
            if (key >= Qt::Key_0 && key <= Qt::Key_9) return VK_NUMPAD0 + key - Qt::Key_0;
            switch (key) {
                case Qt::Key_Asterisk: return VK_MULTIPLY;
                case Qt::Key_Plus: return VK_ADD;
                case Qt::Key_Minus: return VK_SUBTRACT;
                case Qt::Key_Slash: return VK_DIVIDE;
                case Qt::Key_Period:
                case Qt::Key_Comma: return VK_DECIMAL;
            }
        }
        if (key >= Qt::Key_0 && key <= Qt::Key_9) return key;
        if (key >= Qt::Key_F1 && key <= Qt::Key_F24) return VK_F1 + key - Qt::Key_F1;
        switch (key) {
            case Qt::Key_Escape: return VK_ESCAPE;
            case Qt::Key_Tab:
            case Qt::Key_Backtab: return VK_TAB;
            case Qt::Key_Backspace: return VK_BACK;
            case Qt::Key_Return:
            case Qt::Key_Enter: return VK_RETURN;
            case Qt::Key_Insert: return VK_INSERT;
            case Qt::Key_Delete: return VK_DELETE;
            case Qt::Key_Pause: return VK_PAUSE;
            case Qt::Key_Print: return VK_SNAPSHOT;
            case Qt::Key_Printer: return VK_PRINT;
            case Qt::Key_Clear: return VK_CLEAR;
            case Qt::Key_Home: return VK_HOME;
            case Qt::Key_End: return VK_END;
            case Qt::Key_Left: return VK_LEFT;
            case Qt::Key_Up: return VK_UP;
            case Qt::Key_Right: return VK_RIGHT;
            case Qt::Key_Down: return VK_DOWN;
            case Qt::Key_PageUp: return VK_PRIOR;
            case Qt::Key_PageDown: return VK_NEXT;
            case Qt::Key_CapsLock: return VK_CAPITAL;
            case Qt::Key_NumLock: return VK_NUMLOCK;
            case Qt::Key_ScrollLock: return VK_SCROLL;
            case Qt::Key_Space: return VK_SPACE;
            case Qt::Key_Menu: return VK_APPS;
            case Qt::Key_Help: return VK_HELP;
            case Qt::Key_Select: return VK_SELECT;
            case Qt::Key_Execute: return VK_EXECUTE;
            case Qt::Key_Sleep: return VK_SLEEP;
            case Qt::Key_Play: return VK_PLAY;
            case Qt::Key_Zoom: return VK_ZOOM;
            case Qt::Key_Cancel: return VK_CANCEL;
            case Qt::Key_Mode_switch: return VK_MODECHANGE;
            case Qt::Key_MediaNext: return VK_MEDIA_NEXT_TRACK;
            case Qt::Key_MediaPrevious: return VK_MEDIA_PREV_TRACK;
            case Qt::Key_MediaPlay:
            case Qt::Key_MediaPause:
            case Qt::Key_MediaTogglePlayPause: return VK_MEDIA_PLAY_PAUSE;
            case Qt::Key_MediaStop: return VK_MEDIA_STOP;
            case Qt::Key_VolumeDown: return VK_VOLUME_DOWN;
            case Qt::Key_VolumeUp: return VK_VOLUME_UP;
            case Qt::Key_VolumeMute: return VK_VOLUME_MUTE;
            case Qt::Key_LaunchMail: return VK_LAUNCH_MAIL;
            case Qt::Key_LaunchMedia: return VK_LAUNCH_MEDIA_SELECT;
            case Qt::Key_Launch0: return VK_LAUNCH_APP1;
            case Qt::Key_Launch1: return VK_LAUNCH_APP2;
            case Qt::Key_Back: return VK_BROWSER_BACK;
            case Qt::Key_Forward: return VK_BROWSER_FORWARD;
            case Qt::Key_Refresh: return VK_BROWSER_REFRESH;
            case Qt::Key_Stop: return VK_BROWSER_STOP;
            case Qt::Key_Search: return VK_BROWSER_SEARCH;
            case Qt::Key_Favorites: return VK_BROWSER_FAVORITES;
            case Qt::Key_HomePage: return VK_BROWSER_HOME;
        }
        if (key < Qt::Key_Space || key > 0xFFFF) return 0;
        return hotkeyCharacterKey(wchar_t(key));
    }

    QString hotkeyErrorText(DWORD error) {
        wchar_t *text = nullptr;
        FormatMessageW(FORMAT_MESSAGE_ALLOCATE_BUFFER | FORMAT_MESSAGE_FROM_SYSTEM | FORMAT_MESSAGE_IGNORE_INSERTS, nullptr, error, 0,
                       reinterpret_cast<LPWSTR>(&text), 0, nullptr);
        const QString message = text ? QString::fromWCharArray(text).trimmed() : QString::number(error);
        LocalFree(text);
        return message;
    }

    class WindowsHotkeyBackend final : public GlobalHotkeyBackend {
    public:
        explicit WindowsHotkeyBackend(HWND window) : hwnd(window) {
            SetWindowLongPtrW(hwnd, GWLP_USERDATA, reinterpret_cast<LONG_PTR>(this));
        }

        ~WindowsHotkeyBackend() override {
            for (const int slot : registeredSlots) UnregisterHotKey(hwnd, slot);
            DestroyWindow(hwnd);
        }

        QString add(int slot, const QString &, const QString &, QKeyCombination key) override {
            const UINT virtualKey = hotkeyVirtualKey(key);
            if (!virtualKey) return GlobalHotkeyBackend_Unmappable();
            if (!RegisterHotKey(hwnd, slot, hotkeyModifiers(key.keyboardModifiers()), virtualKey)) {
                const DWORD error = GetLastError();
                if (error == ERROR_HOTKEY_ALREADY_REGISTERED) return GlobalHotkeyBackend_Taken();
                return QCoreApplication::translate("GlobalHotkeys", "Registration failed: %1").arg(hotkeyErrorText(error));
            }
            registeredSlots.push_back(slot);
            return {};
        }

        void remove(int slot) override {
            UnregisterHotKey(hwnd, slot);
            std::erase(registeredSlots, slot);
        }

    private:
        HWND hwnd;
        std::vector<int> registeredSlots;
    };

    LRESULT CALLBACK hotkeyWindowProc(HWND window, UINT message, WPARAM wParam, LPARAM lParam) {
        if (message != WM_HOTKEY) return DefWindowProcW(window, message, wParam, lParam);
        const auto *backend = reinterpret_cast<WindowsHotkeyBackend *>(GetWindowLongPtrW(window, GWLP_USERDATA));
        if (backend && backend->activated) backend->activated(int(wParam));
        return 0;
    }
}

std::unique_ptr<GlobalHotkeyBackend> GlobalHotkeyBackend_Create() {
    static const bool registered = [] {
        WNDCLASSEXW windowClass{};
        windowClass.cbSize = sizeof(windowClass);
        windowClass.lpfnWndProc = hotkeyWindowProc;
        windowClass.hInstance = GetModuleHandleW(nullptr);
        windowClass.lpszClassName = kHotkeyWindowClass;
        return RegisterClassExW(&windowClass) != 0;
    }();
    if (!registered) return nullptr;

    // A WM_HOTKEY posted to a window survives foreign modal loops (move/size); a thread message is dropped there.
    const HWND window = CreateWindowExW(0, kHotkeyWindowClass, nullptr, 0, 0, 0, 0, 0, HWND_MESSAGE, nullptr, GetModuleHandleW(nullptr), nullptr);
    if (!window) return nullptr;
    return std::make_unique<WindowsHotkeyBackend>(window);
}
