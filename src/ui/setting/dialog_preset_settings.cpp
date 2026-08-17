#include "include/ui/setting/dialog_preset_settings.h"

DialogPresetSettings::DialogPresetSettings(QWidget *parent) : QDialog(parent), ui(new Ui::DialogPresetSettings) {
    ui->setupUi(this);
}

DialogPresetSettings::~DialogPresetSettings() {
    delete ui;
}
