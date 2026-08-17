#pragma once

#include <QDialog>
#include <QList>
#include <QTimer>
#include <memory>

#include "include/database/entities/OtpProfile.h"
#include "ui_dialog_otp_manager.h"

QT_BEGIN_NAMESPACE
namespace Ui {
    class DialogOtpManager;
}
QT_END_NAMESPACE

class DialogOtpManager : public QDialog {
    Q_OBJECT

public:
    explicit DialogOtpManager(QWidget *parent = nullptr);

    ~DialogOtpManager() override;

private:
    Ui::DialogOtpManager *ui;

    QTimer *otpTimer;

    QList<std::shared_ptr<Configs::OtpProfile>> otpProfiles;

    void setupOtpList();

    void reloadOtpProfiles();

    // In place, so hover state and scrolling survive the once-a-second refresh.
    void refreshOtpCodes() const;

    void addOtpProfile();

    void editOtpProfile(const std::shared_ptr<Configs::OtpProfile> &profile);

    void showOtpExportMenu(const std::shared_ptr<Configs::OtpProfile> &profile, QWidget *anchor);

    void deleteOtpProfile(const std::shared_ptr<Configs::OtpProfile> &profile);

    void copyOtpCode(const std::shared_ptr<Configs::OtpProfile> &profile) const;

    void moveOtpProfile(int from, int to);

    void importOtpEntries(const QList<OTP::Entry> &entries, const QStringList &problems);

    void importOtpFromText(const QString &text);

    void importOtpFromFiles();

    void importOtpFromClipboard();

    void importOtpFromScreen();

    void exportOtpAsLink(const std::shared_ptr<Configs::OtpProfile> &profile);

    void exportOtpAsMigration(const QList<std::shared_ptr<Configs::OtpProfile>> &profiles);

    void exportOtpAsJson(const QList<std::shared_ptr<Configs::OtpProfile>> &profiles);

private slots:
    void on_otp_import_clicked();
    void on_otp_scan_clicked();
};
