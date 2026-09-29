find_package(X11 REQUIRED)
if (NOT TARGET X11::xcb)
    message(FATAL_ERROR "libxcb development files were not found")
endif ()

set(PLATFORM_SOURCES src/sys/linux/LinuxCap.cpp include/sys/linux/coreDump.h src/sys/linux/coreDump.cpp src/sys/linux/AutoRun.cpp src/sys/linux/UrlScheme.cpp src/sys/linux/SystemProxy.cpp include/sys/linux/systemChecks.h src/sys/linux/systemChecks.cpp src/sys/linux/GlobalHotkeysX11.cpp src/sys/linux/GlobalHotkeysKde.cpp)
set(PLATFORM_LIBRARIES dl X11::xcb)
