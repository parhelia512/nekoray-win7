#pragma once

#include <QListWidgetItem>
#include <QWidget>
#include <memory>

#include "include/database/entities/OtpProfile.h"
#include "ui_OtpItem.h"

QT_BEGIN_NAMESPACE
namespace Ui {
    class OtpItem;
}
QT_END_NAMESPACE

class OtpItem : public QWidget {
    Q_OBJECT

public:
    enum class Mode {
        Manage,  // full row with the hover actions
        ReadOnly // compact row for the tray popup: no actions, tighter metrics
    };

    explicit OtpItem(QWidget *parent, std::shared_ptr<Configs::OtpProfile> profile, QListWidgetItem *item,
                     Mode mode = Mode::Manage);

    ~OtpItem() override;

    void Refresh() const;

    [[nodiscard]] const std::shared_ptr<Configs::OtpProfile> &Profile() const { return profile; }

signals:
    void editRequested();

    void exportRequested();

    void deleteRequested();

protected:
    void enterEvent(QEnterEvent *event) override;

    void leaveEvent(QEvent *event) override;

    void changeEvent(QEvent *event) override;

    void resizeEvent(QResizeEvent *event) override;

private:
    Ui::OtpItem *ui;

    std::shared_ptr<Configs::OtpProfile> profile;

    QListWidgetItem *item;

    Mode mode;

    void setActionsVisible(bool visible) const;

    void updateNameLabel() const;

    void applyIconColors() const;
};
