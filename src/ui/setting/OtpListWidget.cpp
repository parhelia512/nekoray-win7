#include "include/ui/setting/OtpListWidget.h"

#include <QApplication>
#include <QDrag>
#include <QDragEnterEvent>
#include <QDragMoveEvent>
#include <QDropEvent>
#include <QMimeData>
#include <QMouseEvent>

namespace {
    constexpr auto ROW_MIME_TYPE = "application/otp-row-number";
}

OtpListWidget::OtpListWidget(QWidget *parent) : QListWidget(parent) {
    setSelectionMode(NoSelection);
    setFocusPolicy(Qt::NoFocus);
    setDragEnabled(false);
    setAcceptDrops(true);
    setDropIndicatorShown(true);
    viewport()->setAcceptDrops(true);
}

void OtpListWidget::mousePressEvent(QMouseEvent *event) {
    if (event->button() == Qt::LeftButton) {
        pressPos = event->position().toPoint();
        pressedRow = indexAt(pressPos).row();
    }
    QListWidget::mousePressEvent(event);
}

void OtpListWidget::mouseMoveEvent(QMouseEvent *event) {
    if (!(event->buttons() & Qt::LeftButton) || pressedRow < 0 || count() < 2) {
        QListWidget::mouseMoveEvent(event);
        return;
    }
    if ((event->position().toPoint() - pressPos).manhattanLength() < QApplication::startDragDistance()) {
        QListWidget::mouseMoveEvent(event);
        return;
    }

    auto *mime = new QMimeData;
    mime->setData(ROW_MIME_TYPE, QByteArray::number(pressedRow));

    auto *drag = new QDrag(this);
    drag->setMimeData(mime);
    if (auto *rowWidget = itemWidget(item(pressedRow))) {
        drag->setPixmap(rowWidget->grab());
        drag->setHotSpot(pressPos - rowWidget->pos());
    }
    // Never MoveAction: Qt deletes the source row itself when exec() returns it.
    drag->exec(Qt::CopyAction);
    pressedRow = -1;
}

void OtpListWidget::dragEnterEvent(QDragEnterEvent *event) {
    if (event->source() == this && event->mimeData()->hasFormat(ROW_MIME_TYPE)) event->acceptProposedAction();
    else event->ignore();
}

void OtpListWidget::dragMoveEvent(QDragMoveEvent *event) {
    if (event->source() == this && event->mimeData()->hasFormat(ROW_MIME_TYPE)) event->acceptProposedAction();
    else event->ignore();
}

void OtpListWidget::dropEvent(QDropEvent *event) {
    if (event->source() != this || !event->mimeData()->hasFormat(ROW_MIME_TYPE)) {
        event->ignore();
        return;
    }

    const int from = event->mimeData()->data(ROW_MIME_TYPE).toInt();
    const QPoint pos = event->position().toPoint();

    int to;
    if (const auto target = indexAt(pos); !target.isValid()) {
        to = count() - 1;
    } else {
        to = target.row();
        if (pos.y() > visualRect(target).center().y()) ++to;
        // Lifting the row out shifts everything below it up by one.
        if (from < to) --to;
    }

    event->acceptProposedAction();
    if (from >= 0 && to >= 0 && to < count() && from != to) emit reorderRequested(from, to);
}
