#include "dialog_vpn_settings.h"
#include "ui_dialog_vpn_settings.h"

#include "fmt/Preset.hpp"
#include "main/GuiUtils.hpp"
#include "main/NekoGui.hpp"
#include "ui/mainwindow_interface.h"

#include <QMessageBox>
#define ADJUST_SIZE runOnUiThread([=] { adjustSize(); adjustPosition(mainwindow); }, this);
DialogVPNSettings::DialogVPNSettings(QWidget *parent) : QDialog(parent), ui(new Ui::DialogVPNSettings) {
    ui->setupUi(this);
    ADD_ASTERISK(this);

    ui->vpn_implementation->addItems(Preset::SingBox::VpnImplementation);
    ui->vpn_implementation->setCurrentText(NekoGui::dataStore->vpn_implementation);
    ui->vpn_mtu->setCurrentText(Int2String(NekoGui::dataStore->vpn_mtu));
    ui->vpn_ipv6->setChecked(NekoGui::dataStore->vpn_ipv6);
    ui->gso_enable->setChecked(NekoGui::dataStore->enable_gso);
    ui->auto_redir->setChecked(NekoGui::dataStore->auto_redirect);
#ifndef __linux__
    ui->gso_enable->setVisible(false);
    ui->auto_redir->setVisible(false);
#endif
    ui->strict_route->setChecked(NekoGui::dataStore->vpn_strict_route);
    ADJUST_SIZE
}

DialogVPNSettings::~DialogVPNSettings() {
    delete ui;
}

void DialogVPNSettings::accept() {
    //
    auto mtu = ui->vpn_mtu->currentText().toInt();
    if (mtu > 10000 || mtu < 1000) mtu = 9000;
    NekoGui::dataStore->vpn_implementation = ui->vpn_implementation->currentText();
    NekoGui::dataStore->vpn_mtu = mtu;
    NekoGui::dataStore->vpn_ipv6 = ui->vpn_ipv6->isChecked();
    NekoGui::dataStore->vpn_strict_route = ui->strict_route->isChecked();
    NekoGui::dataStore->enable_gso = ui->gso_enable->isChecked();
    NekoGui::dataStore->auto_redirect = ui->auto_redir->isChecked();
    //
    QStringList msg{"UpdateDataStore"};
    msg << "VPNChanged";
    MW_dialog_message("", msg.join(","));
    QDialog::accept();
}

void DialogVPNSettings::on_troubleshooting_clicked() {
    auto r = QMessageBox::information(this, tr("Troubleshooting"),
                                      tr("If you have trouble starting VPN, you can force reset nekobox_core process here.\n\n"
                                         "If still not working, see documentation for more information.\n"
                                         "https://matsuridayo.github.io/n-configuration/#vpn-tun"),
                                      tr("Reset"), tr("Cancel"), "",
                                      1, 1);
    if (r == 0) {
        GetMainWindow()->StopVPNProcess();
    }
}
