#pragma once

#include "include/global/Configs.hpp"

#include <QMessageBox>
#include <QPointer>
#include <QTimer>

// UI thread only. Never runs a nested event loop, so a dialog raised while it is up cannot be torn down under it.
class RestartPrompt : public QTimer {
public:
    RestartPrompt(QWidget *parent, const QString &text, int delayMs) : QTimer(parent) {
        box = new QMessageBox(QMessageBox::Question, software_name, text, QMessageBox::Yes | QMessageBox::No, parent);
        restart = connect(box, &QMessageBox::accepted, this, [] { MW_dialog_message(MwMessage::RestartProgram, {}); });
        connect(this, &QTimer::timeout, this, [this] {
            if (box) box->open();
        });
        setSingleShot(true);
        start(delayMs);
    }

    void dismiss() {
        stop();
        disconnect(restart);
        if (box) {
            box->close();
            box->deleteLater();
            box = nullptr;
        }
        deleteLater();
    }

private:
    QPointer<QMessageBox> box;
    QMetaObject::Connection restart;
};
