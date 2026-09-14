#pragma once

#include <QString>

// Portable install: the exe path moves, so registration re-runs at startup and is diffed against the settings mirrors (url_scheme_mirror, file_assoc_mirror).

enum class Association { Links, ConfigFiles };

// Opaque per-platform state, revision-prefixed so that adding entries re-registers installs that never moved; empty when unsupported.
QString UrlScheme_DesiredState(Association a);

// Per-platform: whether the OS registration still points at this install; the mirror cannot see another install taking the shared entries over.
bool UrlScheme_IsCurrent(Association a);

void UrlScheme_Apply(Association a);

// Per-platform inverse of Apply(): drops only what we wrote, leaving associations owned by other apps alone.
void UrlScheme_Remove(Association a);

// Per-platform default of url_scheme_auto_register; false for a portable Windows copy, whose entries would outlive its folder.
bool UrlScheme_AutoRegisterByDefault();

bool UrlScheme_IsSupported(Association a);

// Startup path; an association is skipped entirely while its auto registration is off.
void UrlScheme_RegisterIfNeeded();

// Basic Settings buttons; both move the mirror so startup neither redoes nor undoes them, and Uninstall also turns auto registration off.
bool UrlScheme_Install(Association a);

void UrlScheme_Uninstall(Association a);
