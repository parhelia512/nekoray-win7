#pragma once

#include <QPixmap>
#include <QStringList>

class QScreen;
class QWidget;

namespace ScreenQr {
    // On Wayland this goes through the portal, which returns the whole desktop, not one screen.
    QPixmap GrabScreen(QScreen *screen, bool &ok);

    // `captured` separates a failed grab from a screen holding no QR code.
    QStringList ScanScreens(QWidget *hideDuringScan, bool &captured);
} // namespace ScreenQr
