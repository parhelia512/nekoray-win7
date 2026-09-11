#!/bin/bash
set -e

VERSION="$1"
ARCH="$2"
SUFFIX=""
[[ $3 == "systemqt" ]] && SUFFIX="-system-qt"

# Private staging dir so pack_release.sh can build every package concurrently.
PKG=$(mktemp -d)
trap 'rm -rf "$PKG"' EXIT
chmod 0755 "$PKG"

mkdir -p "$PKG/DEBIAN" "$PKG/opt"
cp -r "linux-$ARCH$SUFFIX" "$PKG/opt/Throne"
rm -f "$PKG/opt/Throne/Throne.debug"

# basic
cat >"$PKG/DEBIAN/control" <<-EOF
Package: Throne
Version: $VERSION
Architecture: $ARCH
Maintainer: Mahdi Mahdi.zrei@gmail.com
Depends: desktop-file-utils$([[ $3 == "systemqt" ]] && echo ", libqt6core6, libqt6gui6, libqt6network6, libqt6widgets6, qt6-qpa-plugins, qt6-wayland, qt6-gtk-platformtheme, qt6-xdgdesktopportal-platformtheme, libxcb-cursor0, fonts-noto-color-emoji")
Description: Qt based cross-platform GUI proxy configuration manager (backend: sing-box)
EOF

cat >"$PKG/DEBIAN/postinst" <<-EOF
cat >/usr/share/applications/Throne.desktop<<-END
[Desktop Entry]
Name=Throne
Comment=Qt based cross-platform GUI proxy configuration manager (backend: sing-box)
Exec=sh -c "PATH=/opt/Throne:\$PATH /opt/Throne/Throne -appdata"
Icon=/opt/Throne/Throne.png
Terminal=false
Type=Application
Categories=Network;Application;
END

update-desktop-database
EOF

chmod 0755 "$PKG/DEBIAN/postinst"

# desktop && PATH

dpkg-deb --root-owner-group --build "$PKG" "Throne-$VERSION-debian-$ARCH$SUFFIX.deb"
