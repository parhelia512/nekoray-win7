#include "include/sys/UrlScheme.hpp"

#include "include/global/Configs.hpp"
#include "include/global/Logger.hpp"

static bool &autoRegisterFlag(Association a) {
    auto &settings = *Configs::dataManager->settingsRepo;
    return a == Association::Links ? settings.url_scheme_auto_register : settings.file_assoc_auto_register;
}

static QString &registrationMirror(Association a) {
    auto &settings = *Configs::dataManager->settingsRepo;
    return a == Association::Links ? settings.url_scheme_mirror : settings.file_assoc_mirror;
}

bool UrlScheme_IsSupported(Association a) {
    return !UrlScheme_DesiredState(a).isEmpty();
}

static void registerIfStale(Association a) {
    if (!autoRegisterFlag(a)) return;

    const QString desired = UrlScheme_DesiredState(a);
    if (desired.isEmpty()) return;

    const bool mirrorMatches = registrationMirror(a) == desired;
    if (mirrorMatches && UrlScheme_IsCurrent(a)) return;
    if (mirrorMatches) {
        const QString what = a == Association::Links ? QStringLiteral("url scheme") : QStringLiteral("config file");
        LOG_WARN(what + " registration points elsewhere (another install?), reclaiming it");
    }

    UrlScheme_Apply(a);
    registrationMirror(a) = desired;
    Configs::dataManager->settingsRepo->Save();
}

void UrlScheme_RegisterIfNeeded() {
    registerIfStale(Association::Links);
    registerIfStale(Association::ConfigFiles);
}

bool UrlScheme_Install(Association a) {
    const QString desired = UrlScheme_DesiredState(a);
    if (desired.isEmpty()) return false;

    UrlScheme_Apply(a);
    registrationMirror(a) = desired;
    Configs::dataManager->settingsRepo->Save();
    return UrlScheme_IsCurrent(a);
}

void UrlScheme_Uninstall(Association a) {
    UrlScheme_Remove(a);

    // An empty mirror never matches a desired state, so re-enabling auto registration writes the entries again instead of trusting the removed ones.
    registrationMirror(a).clear();
    autoRegisterFlag(a) = false;
    Configs::dataManager->settingsRepo->Save();
}
