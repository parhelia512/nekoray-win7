#pragma once

#include <QFrame>
#include <QList>
#include <QString>
#include <memory>

#include "include/database/entities/OtpProfile.h"

class QLineEdit;
class QListWidget;
class QListWidgetItem;
class QTimer;

// A real window, not a tray submenu, for the reason given on TrayProfileSelector.
class TrayOtpCodes : public QFrame {
    Q_OBJECT

public:
    explicit TrayOtpCodes(QWidget *parent = nullptr);

    void popupAt(const QPoint &globalPos);

protected:
    void keyPressEvent(QKeyEvent *event) override;

    bool eventFilter(QObject *watched, QEvent *event) override;

private:
    void reload();

    void rebuild();

    // Without rebuilding, so the scroll position survives the once-a-second refresh.
    void refreshCodes() const;

    void copyCurrent(const QListWidgetItem *item);

    QLineEdit *search = nullptr;

    QListWidget *list = nullptr;

    QTimer *ticker = nullptr;

    QList<std::shared_ptr<Configs::OtpProfile>> profiles;

    // Row index -> index into `profiles`, since the filter hides entries.
    QList<int> shown;
};
