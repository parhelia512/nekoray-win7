#pragma once

#include <QDialog>

#include "ui_dialog_preset_settings.h"

QT_BEGIN_NAMESPACE
namespace Ui {
    class DialogPresetSettings;
}
QT_END_NAMESPACE

class DialogPresetSettings : public QDialog {
    Q_OBJECT

public:
    explicit DialogPresetSettings(QWidget *parent = nullptr);

    ~DialogPresetSettings() override;

private:
    Ui::DialogPresetSettings *ui;
};
