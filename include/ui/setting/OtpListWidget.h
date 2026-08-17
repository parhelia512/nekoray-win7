#pragma once

#include <QListWidget>
#include <QPoint>

// Drag is driven by hand: Qt's own carries the selection, and these rows are unselectable.
class OtpListWidget : public QListWidget {
    Q_OBJECT

public:
    explicit OtpListWidget(QWidget *parent = nullptr);

signals:
    void reorderRequested(int from, int to);

protected:
    void mousePressEvent(QMouseEvent *event) override;

    void mouseMoveEvent(QMouseEvent *event) override;

    void dragEnterEvent(QDragEnterEvent *event) override;

    void dragMoveEvent(QDragMoveEvent *event) override;

    void dropEvent(QDropEvent *event) override;

private:
    QPoint pressPos;

    int pressedRow = -1;
};
