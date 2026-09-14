#include "include/sys/UrlScheme.hpp"

#include <QCoreApplication>
#include <QDir>
#include <QProcess>

// Registration is declarative (Info.plist + LaunchServices), but a moved bundle leaves a stale path, hence the forced `lsregister -f`.

static const QString kLsregister =
    "/System/Library/Frameworks/CoreServices.framework/Frameworks/"
    "LaunchServices.framework/Support/lsregister";

// applicationDirPath() is <Bundle>.app/Contents/MacOS; the bundle is two up.
static QString bundlePath() {
    QDir d(QCoreApplication::applicationDirPath());
    if (!d.cdUp() || !d.cdUp()) return {};
    const QString path = d.absolutePath();
    return path.endsWith(".app") ? path : QString();
}

// Config files are Info.plist document types at the Alternate rank, so there is nothing to toggle for them at runtime.
QString UrlScheme_DesiredState(Association a) {
    const QString bundle = bundlePath();
    if (a != Association::Links || bundle.isEmpty()) return {};
    return "v2|" + bundle;
}

bool UrlScheme_AutoRegisterByDefault() {
    return true;
}

// LaunchServices keys handlers by bundle path, not by a shared name, so a second copy cannot take ours over.
bool UrlScheme_IsCurrent(Association) {
    return true;
}

void UrlScheme_Apply(Association) {
    const QString bundle = bundlePath();
    if (bundle.isEmpty()) return;
    QProcess::execute(kLsregister, {"-f", bundle});
}

// The scheme comes from the bundle's Info.plist, so there is nothing of ours to take back; unregistering only lasts until the next launch.
void UrlScheme_Remove(Association) {
}
