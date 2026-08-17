#include "include/ui/widget/TrayOtpCodes.hpp"

#include <QClipboard>
#include <QCursor>
#include <QGuiApplication>
#include <QHBoxLayout>
#include <QKeyEvent>
#include <QLineEdit>
#include <QListWidget>
#include <QPalette>
#include <QPushButton>
#include <QScreen>
#include <QTimer>
#include <QToolTip>
#include <QVBoxLayout>

#include "include/database/DatabaseManager.h"
#include "include/database/OtpProfilesRepo.h"
#include "include/ui/setting/OtpItem.h"

namespace {
    constexpr int TICK_MS = 1000;
    constexpr int LIST_MIN_HEIGHT = 280;
    constexpr int POPUP_MIN_WIDTH = 380;
}

TrayOtpCodes::TrayOtpCodes(QWidget *parent) : QFrame(parent) {
    setWindowFlags(Qt::Tool | Qt::FramelessWindowHint | Qt::WindowStaysOnTopHint);
    setAttribute(Qt::WA_DeleteOnClose);
    setAttribute(Qt::WA_TranslucentBackground);
    setFrameShape(QFrame::NoFrame);
    setMinimumWidth(POPUP_MIN_WIDTH);

    const QString bg = palette().color(QPalette::Window).name();
    const QString base = palette().color(QPalette::Base).name();
    const QString border = palette().color(QPalette::Mid).name();

    auto *outer = new QVBoxLayout(this);
    outer->setContentsMargins(0, 0, 0, 0);

    auto *card = new QFrame(this);
    card->setObjectName(QStringLiteral("trayCard"));
    card->setStyleSheet(QStringLiteral(
        "QFrame#trayCard { background-color:%1; border:1px solid %2; border-radius:10px; }")
        .arg(bg, border));
    outer->addWidget(card);

    auto *root = new QVBoxLayout(card);
    root->setContentsMargins(10, 10, 10, 10);
    root->setSpacing(6);

    auto *searchRow = new QHBoxLayout();
    search = new QLineEdit(card);
    search->setObjectName(QStringLiteral("traySearch"));
    search->setPlaceholderText(tr("Search…"));
    search->setClearButtonEnabled(true);
    search->installEventFilter(this);
    search->setStyleSheet(QStringLiteral(
        "QLineEdit#traySearch { border:1px solid %1; border-radius:8px; padding:5px 9px; background-color:%2; }")
        .arg(border, base));
    auto *closeBtn = new QPushButton(QStringLiteral("✕"), card);
    closeBtn->setFixedWidth(28);
    closeBtn->setToolTip(tr("Close"));
    searchRow->addWidget(search, 1);
    searchRow->addWidget(closeBtn);
    root->addLayout(searchRow);

    list = new QListWidget(card);
    list->setUniformItemSizes(true);
    list->setHorizontalScrollBarPolicy(Qt::ScrollBarAlwaysOff);
    list->setVerticalScrollBarPolicy(Qt::ScrollBarAsNeeded);
    list->setMinimumHeight(LIST_MIN_HEIGHT);
    list->installEventFilter(this);
    root->addWidget(list, 1);

    connect(closeBtn, &QPushButton::clicked, this, [this] { close(); });
    connect(search, &QLineEdit::textChanged, this, [this] { rebuild(); });
    connect(search, &QLineEdit::returnPressed, this, [this] {
        const QListWidgetItem *item = list->currentItem();
        if (!item && list->count() > 0) item = list->item(0);
        copyCurrent(item);
    });
    // Deliberately stays open, so several codes can be taken in a row.
    connect(list, &QListWidget::itemClicked, this, [this](const QListWidgetItem *item) { copyCurrent(item); });

    ticker = new QTimer(this);
    ticker->setInterval(TICK_MS);
    connect(ticker, &QTimer::timeout, this, [this] { refreshCodes(); });
    ticker->start();
}

void TrayOtpCodes::reload() {
    profiles = Configs::dataManager->otpProfilesRepo->GetAllOtpProfiles();
}

void TrayOtpCodes::rebuild() {
    const auto query = search->text().trimmed().toLower();

    list->clear();
    shown.clear();
    for (int i = 0; i < profiles.size(); ++i) {
        const auto &profile = profiles[i];
        if (!query.isEmpty() && !profile->name.toLower().contains(query)
            && !profile->issuer.toLower().contains(query))
            continue;
        shown.append(i);
        auto *item = new QListWidgetItem(list);
        list->setItemWidget(item, new OtpItem(list, profile, item, OtpItem::Mode::ReadOnly));
    }

    if (list->count() == 0) {
        auto *empty = new QListWidgetItem(profiles.isEmpty() ? tr("No OTP profiles yet") : tr("No matches"));
        empty->setFlags(Qt::NoItemFlags);
        list->addItem(empty);
    }
    refreshCodes();
}

void TrayOtpCodes::refreshCodes() const {
    for (int row = 0; row < list->count(); ++row) {
        if (auto *widget = qobject_cast<OtpItem *>(list->itemWidget(list->item(row)))) widget->Refresh();
    }
}

void TrayOtpCodes::copyCurrent(const QListWidgetItem *item) {
    if (item == nullptr) return;
    const int row = list->row(item);
    if (row < 0 || row >= shown.size()) return;

    const auto &profile = profiles[shown[row]];
    const auto code = profile->CurrentCode();
    if (code.isEmpty()) {
        QToolTip::showText(QCursor::pos(), tr("Invalid secret"), list);
        return;
    }
    QGuiApplication::clipboard()->setText(code);
    QToolTip::showText(QCursor::pos(), tr("Copied"), list);
}

void TrayOtpCodes::popupAt(const QPoint &globalPos) {
    search->blockSignals(true);
    search->clear();
    search->blockSignals(false);
    reload();
    rebuild();
    adjustSize();

    QScreen *scr = QGuiApplication::screenAt(globalPos);
    if (!scr) scr = QGuiApplication::primaryScreen();
    const QRect avail = scr ? scr->availableGeometry() : QRect(0, 0, 1024, 768);
    const QSize sz = size();
    int x = globalPos.x();
    int y = globalPos.y();
    if (x + sz.width() > avail.right()) x = avail.right() - sz.width();
    if (y + sz.height() > avail.bottom()) y = avail.bottom() - sz.height();
    if (x < avail.left()) x = avail.left();
    if (y < avail.top()) y = avail.top();
    move(x, y);

    show();
    raise();
    activateWindow();
    search->setFocus();
}

void TrayOtpCodes::keyPressEvent(QKeyEvent *event) {
    if (event->key() == Qt::Key_Escape) {
        close();
        return;
    }
    QFrame::keyPressEvent(event);
}

bool TrayOtpCodes::eventFilter(QObject *watched, QEvent *event) {
    if (event->type() == QEvent::KeyPress) {
        auto *key = static_cast<QKeyEvent *>(event);
        if (key->key() == Qt::Key_Escape) {
            close();
            return true;
        }
        if (watched == list && (key->key() == Qt::Key_Return || key->key() == Qt::Key_Enter)) {
            copyCurrent(list->currentItem());
            return true;
        }
        if (watched == search && key->key() == Qt::Key_Down && list->count() > 0) {
            list->setFocus();
            list->setCurrentRow(0);
            return true;
        }
    }
    return QFrame::eventFilter(watched, event);
}
