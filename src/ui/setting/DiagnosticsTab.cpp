#include "include/ui/setting/DiagnosticsTab.h"

#include "include/global/Configs.hpp"
#include "include/sys/CoreDiagnostics.hpp"
#include "include/ui/setting/ThemeManager.hpp"

#include <QColor>
#include <QFileInfo>
#include <QSizePolicy>
#include <QTimer>

#include <algorithm>

namespace {
    QString clockText(qint64 ms) {
        const qint64 secs = (std::max<qint64>(ms, 0) + 999) / 1000;
        return QStringLiteral("%1:%2").arg(secs / 60).arg(secs % 60, 2, 10, QLatin1Char('0'));
    }
}

DiagnosticsTab::DiagnosticsTab(QWidget *parent) : QWidget(parent), ui(new Ui::DiagnosticsTab) {
    ui->setupUi(this);

    // Without this, Start stretches across the row whenever the bar is hidden.
    auto barPolicy = ui->progress->sizePolicy();
    barPolicy.setRetainSizeWhenHidden(true);
    ui->progress->setSizePolicy(barPolicy);

    auto *diagnostics = Sys::CoreDiagnostics::instance();
    const auto options = diagnostics->options();
    ui->contention->setChecked(options.contention);
    ui->trace->setChecked(options.trace);
    ui->includeLogs->setChecked(options.includeLogs);

    connect(ui->startButton, &QPushButton::clicked, this, [this] {
        Sys::CoreDiagnostics::Options chosen;
        chosen.contention = ui->contention->isChecked();
        chosen.trace = ui->trace->isChecked();
        chosen.includeLogs = ui->includeLogs->isChecked();
        Sys::CoreDiagnostics::instance()->start(chosen);
    });
    connect(ui->stopButton, &QPushButton::clicked, diagnostics, &Sys::CoreDiagnostics::stop);
    connect(ui->showInFolder, &QPushButton::clicked, this, [] {
        Sys::CoreDiagnostics::showInFolder(Sys::CoreDiagnostics::instance()->lastPath());
    });
    connect(ui->openFolder, &QPushButton::clicked, this, [] { Sys::CoreDiagnostics::openDirectory(); });

    connect(diagnostics, &Sys::CoreDiagnostics::stateChanged, this, [this] { refresh(); });
    connect(diagnostics, &Sys::CoreDiagnostics::progress, this,
            [this](qint64 elapsedMs) { showProgress(elapsedMs); });
    connect(themeManager(), &ThemeManager::themeChanged, this, [this] { refresh(); });

    coreWatch_ = new QTimer(this);
    coreWatch_->setInterval(1000);
    connect(coreWatch_, &QTimer::timeout, this, [this] { refreshStart(); });

    diagnostics->attachView(this);
    refresh();
}

DiagnosticsTab::~DiagnosticsTab() {
    delete ui;
}

void DiagnosticsTab::showEvent(QShowEvent *event) {
    QWidget::showEvent(event);
    coreWatch_->start();
    refresh();
}

void DiagnosticsTab::hideEvent(QHideEvent *event) {
    QWidget::hideEvent(event);
    coreWatch_->stop();
}

void DiagnosticsTab::refresh() {
    const auto *diagnostics = Sys::CoreDiagnostics::instance();
    const bool busy = diagnostics->isCapturing();

    ui->contention->setEnabled(!busy);
    ui->trace->setEnabled(!busy);
    ui->includeLogs->setEnabled(!busy);
    refreshStart();

    ui->progress->setVisible(busy);
    ui->stopButton->setVisible(busy);
    ui->stopButton->setEnabled(!diagnostics->isStopping());

    const QString last = diagnostics->lastPath();
    ui->showInFolder->setEnabled(!last.isEmpty() && QFileInfo::exists(last));

    const auto &tokens = themeManager()->tokens;
    if (busy) {
        showProgress(diagnostics->elapsedMs());
    } else if (!diagnostics->lastError().isEmpty()) {
        setStatus(diagnostics->lastError(), tokens.danger);
    } else if (!last.isEmpty()) {
        setStatus(tr("Saved %1 (%2)").arg(QFileInfo(last).fileName(), ReadableSize(diagnostics->lastSize())),
                  tokens.success);
    } else {
        setStatus(QString(), tokens.muted);
    }
}

void DiagnosticsTab::refreshStart() {
    const bool coreUp = Configs::dataManager->settingsRepo->core_running;
    ui->startButton->setEnabled(coreUp && !Sys::CoreDiagnostics::instance()->isCapturing());
    ui->startButton->setToolTip(coreUp ? QString() : tr("The core is not running."));
}

void DiagnosticsTab::showProgress(qint64 elapsedMs) {
    constexpr int durationMs = Sys::CoreDiagnostics::kCaptureMs;
    const auto &muted = themeManager()->tokens.muted;
    if (elapsedMs >= durationMs || Sys::CoreDiagnostics::instance()->isStopping()) {
        ui->progress->setRange(0, 0);
        setStatus(tr("Finishing…"), muted);
    } else {
        ui->progress->setRange(0, durationMs);
        ui->progress->setValue(static_cast<int>(elapsedMs));
        setStatus(tr("Recording… %1 left").arg(clockText(durationMs - elapsedMs)), muted);
    }
}

void DiagnosticsTab::setStatus(const QString &text, const QColor &color) {
    ui->status->setText(text);
    const QString sheet = QStringLiteral("color: %1;").arg(color.name());
    // setStyleSheet repolishes even when the sheet is unchanged.
    if (ui->status->styleSheet() != sheet) ui->status->setStyleSheet(sheet);
}
