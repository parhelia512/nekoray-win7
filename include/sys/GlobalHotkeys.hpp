#pragma once

#include <QKeySequence>
#include <QList>
#include <QMap>
#include <QObject>
#include <QStringList>

#include <memory>

class GlobalHotkeyBackend;

class GlobalHotkeys : public QObject {
    Q_OBJECT

public:
    struct Action {
        QString id;
        QString text;
        QKeySequence key;
    };

    explicit GlobalHotkeys(QObject *parent = nullptr);

    ~GlobalHotkeys() override;

    bool isSupported() const;

    // Replaces every registration; maps the id of each action that has a key but could not be registered to the reason.
    QMap<QString, QString> setActions(const QList<Action> &actions);

signals:
    // Queued, never emitted from inside the platform's key event handling.
    void activated(const QString &id);

private:
    std::unique_ptr<GlobalHotkeyBackend> backend;
    QStringList slotIds;
};
