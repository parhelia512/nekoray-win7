#include "include/ui/profile/edit_naive.h"

#include "include/configs/common/utils.h"

EditNaive::EditNaive(QWidget *parent)
    : QWidget(parent),
      ui(new Ui::EditNaive) {

    ui->setupUi(this);
}

EditNaive::~EditNaive() {
    delete ui;
}

void EditNaive::onStart(std::shared_ptr<Configs::Profile> _ent) {
    this->ent = _ent;
    auto outbound = ent->Naive();

    ui->username->setText(outbound->username);
    ui->password->setText(outbound->password);
    ui->extra_headers->setText(Configs::getHeadersString(outbound->extra_headers));
    ui->insecure_concurrency->setValue(outbound->insecure_concurrency);
    ui->uot->setChecked(outbound->uot);
    ui->quic->setChecked(outbound->quic);
    ui->congestion_control->setCurrentText(outbound->congestion_control.isEmpty() ? "bbr" : outbound->congestion_control);
}

bool EditNaive::onEnd() {
    auto outbound = ent->Naive();

    outbound->username = ui->username->text().trimmed();
    outbound->password = ui->password->text();
    outbound->extra_headers = Configs::parseHeaderPairs(ui->extra_headers->text());
    outbound->insecure_concurrency = ui->insecure_concurrency->value();
    outbound->uot = ui->uot->isChecked();
    outbound->quic = ui->quic->isChecked();
    outbound->congestion_control = ui->congestion_control->currentText().trimmed();
    return true;
}
