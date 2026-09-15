#pragma once

#include <QElapsedTimer>
#include <QObject>
#include <QPointer>
#include <QString>

class QMessageBox;
class QTimer;
class QWidget;

namespace Sys {
    // UI thread only; owns the capture because the settings dialog is deleted on close.
    class CoreDiagnostics : public QObject {
        Q_OBJECT

    public:
        static constexpr int kCaptureMs = 30000;

        struct Options {
            bool contention = false;
            bool trace = false;
            bool includeLogs = false;
        };

        static CoreDiagnostics *instance();

        static QString directory();

        static void showInFolder(const QString &path);

        static void openDirectory();

        void start(const Options &options);

        void stop();

        // Completion pops a message box whenever this view is gone or hidden.
        void attachView(QWidget *view);

        [[nodiscard]] bool isCapturing() const { return capturing_; }
        [[nodiscard]] bool isStopping() const { return stopping_; }
        [[nodiscard]] qint64 elapsedMs() const;
        [[nodiscard]] Options options() const { return options_; }
        [[nodiscard]] QString lastPath() const { return lastPath_; }
        [[nodiscard]] qint64 lastSize() const { return lastSize_; }
        [[nodiscard]] QString lastError() const { return lastError_; }

    signals:
        void stateChanged();
        void progress(qint64 elapsedMs);
        void finished(const QString &path, qint64 size);
        void failed(const QString &error);

    private:
        struct Outcome {
            bool rpcOK = false;
            QString coreError;
            bool empty = true;
            QString path;
            qint64 size = 0;
            QString saveError;
        };

        explicit CoreDiagnostics(QObject *parent);

        void complete(const Outcome &outcome);
        void succeed(const QString &path, qint64 size);
        void fail(const QString &error);
        void notify(bool saved, const QString &text, const QString &path);
        [[nodiscard]] bool viewShowing() const;

        QTimer *ticker_ = nullptr;
        QElapsedTimer clock_;
        QPointer<QWidget> view_;
        QPointer<QMessageBox> notice_;
        Options options_;
        bool capturing_ = false;
        bool stopping_ = false;
        QString lastPath_;
        qint64 lastSize_ = 0;
        QString lastError_;
    };
} // namespace Sys
