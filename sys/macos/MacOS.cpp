#include <QString>

int Mac_Run_Command(const QString &command) {
    const auto cmd = QString("osascript -e 'do shell script \"%1\" with administrator privileges'").arg(command);
    return system(cmd.toStdString().c_str());
}