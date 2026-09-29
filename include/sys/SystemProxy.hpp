#pragma once

#include <QString>

// Per-platform. Both return what failed (empty on success) and may be called from any thread.

// windowsFormat is the Proxy Format setting, e.g. "{ip}:{port}" or "socks={ip}:{port}"; other platforms ignore it.
QString SystemProxy_Apply(const QString &host, int port, const QString &windowsFormat);

// Undoes SystemProxy_Apply(); does nothing unless this process applied a proxy, so proxies set by other apps survive.
QString SystemProxy_Clear();
