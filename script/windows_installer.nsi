Name "Throne"
OutFile "ThroneSetup.exe"

; 1. Tells WINDOWS to NEVER ask for UAC on launch
RequestExecutionLevel user

; 2. Tells NSIS to allow the "All Users / Just Me" page to compile
!define MULTIUSER_EXECUTIONLEVEL Highest
!define MULTIUSER_MUI
!define MULTIUSER_INSTALLMODE_COMMANDLINE
!define MULTIUSER_INSTALLMODE_INSTDIR "Throne"
!define MULTIUSER_INSTALLMODE_DEFAULT_REGISTRY_KEY "Software\Throne"
!define MULTIUSER_INSTALLMODE_DEFAULT_REGISTRY_VALUENAME "InstallMode"

!include MultiUser.nsh
!include MUI2.nsh

!define MUI_ICON "res\Throne.ico"
!define MUI_ABORTWARNING
!define MUI_WELCOMEPAGE_TITLE "Welcome to Throne Installer"
!define MUI_WELCOMEPAGE_TEXT "This wizard will guide you through the installation of Throne."
!define MUI_FINISHPAGE_RUN "$INSTDIR\Throne.exe"
!define MUI_FINISHPAGE_RUN_TEXT "Launch Throne"
!addplugindir .\script\

!insertmacro MUI_PAGE_WELCOME

; --- Custom function to trigger UAC ONLY if they pick "All Users" ---
!define MUI_PAGE_CUSTOMFUNCTION_LEAVE CheckElevation
!insertmacro MULTIUSER_PAGE_INSTALLMODE

; --- Custom function to BLOCK selecting Admin folders if they picked "Just Me" ---
!define MUI_PAGE_CUSTOMFUNCTION_LEAVE VerifyDirAccess
!insertmacro MUI_PAGE_DIRECTORY

!insertmacro MUI_PAGE_INSTFILES
!insertmacro MUI_PAGE_FINISH

; Uninstaller pages
!insertmacro MUI_UNPAGE_CONFIRM
!insertmacro MUI_UNPAGE_INSTFILES

!insertmacro MUI_LANGUAGE "English"

UninstallText "This will uninstall Throne. Do you wish to continue?"
UninstallIcon "res\ThroneDel.ico"

Function .onInit
  !insertmacro MULTIUSER_INIT
FunctionEnd

; --- Function to prompt for UAC if they select All Users ---
Function CheckElevation
  ; Check if the user selected "All Users"
  StrCmp $MultiUser.InstallMode "AllUsers" 0 Done

  ; They selected All Users. Let's check if we currently have Admin rights.
  UserInfo::GetAccountType
  Pop $0
  StrCmp $0 "Admin" Done ; We are already elevated, continue to next page!

  ; We are NOT Admin (because we launched as 'user'). We need to elevate.
  MessageBox MB_YESNO|MB_ICONEXCLAMATION "Installing for all users requires Administrator privileges.$\n$\nDo you want to elevate and continue?" IDNO AbortElevate

  ; Restart the installer elevated.
  ; "runas" forces the UAC prompt. /AllUsers tells the new process what to select.
  ExecShell "runas" "$EXEPATH" "/AllUsers"
  Quit 

AbortElevate:
  ; Keep them on the page so they can change their mind and pick "Just Me"
  Abort 

Done:
FunctionEnd

; --- Function to BLOCK installing into protected folders without Admin rights ---
Function VerifyDirAccess
  ClearErrors
  ; 1. Try to create the directory
  CreateDirectory "$INSTDIR"
  IfErrors AccessDenied
  
  ; 2. Try to write a dummy file
  GetTempFileName $0 "$INSTDIR"
  FileOpen $1 $0 w
  FileWrite $1 "test"
  FileClose $1
  IfErrors AccessDenied
  
  ; Success - we have permission.
  Delete $0
  Return 

AccessDenied:
  MessageBox MB_OK|MB_ICONSTOP "You do not have permission to install to '$INSTDIR'.$\n$\nPlease choose a different folder, or go back and select 'Install for anyone using this computer'."
  Abort ; Forces them to stay on the Directory page
FunctionEnd

!macro AbortOnRunningApp EXEName
  killModule:
  FindProcDLL::FindProc ${EXEName}
  Pop $R0
  IntCmp $R0 1 0 notRunning
    FindProcDLL::KillProc ${EXEName}
    Sleep 1000
    Goto killModule
  notRunning:
!macroend

Section "Install"
  SetOutPath "$INSTDIR"
  SetOverwrite on

  !insertmacro AbortOnRunningApp "$INSTDIR\Throne.exe"

  File /r ".\deployment\windows-amd64\ThroneCore.exe"
  File /r ".\deployment\windows-amd64\Throne.exe"
  File /r ".\deployment\windows-amd64\updater.exe"

  CreateShortcut "$desktop\Throne.lnk" "$instdir\Throne.exe"
  CreateShortcut "$SMPROGRAMS\Throne.lnk" "$INSTDIR\Throne.exe" "" "$INSTDIR\Throne.exe" 0

  ; SHCTX automatically writes to Local Machine (All Users) or Current User (Just Me)
  WriteRegStr SHCTX "Software\Throne" "InstallPath" "$INSTDIR"
  WriteRegStr SHCTX "Software\Microsoft\Windows\CurrentVersion\Uninstall\Throne" "DisplayName" "Throne"
  WriteRegStr SHCTX "Software\Microsoft\Windows\CurrentVersion\Uninstall\Throne" "UninstallString" "$INSTDIR\uninstall.exe"
  WriteRegStr SHCTX "Software\Microsoft\Windows\CurrentVersion\Uninstall\Throne" "InstallLocation" "$INSTDIR"
  WriteRegDWORD SHCTX "Software\Microsoft\Windows\CurrentVersion\Uninstall\Throne" "NoModify" 1
  WriteRegDWORD SHCTX "Software\Microsoft\Windows\CurrentVersion\Uninstall\Throne" "NoRepair" 1
  WriteUninstaller "uninstall.exe"
SectionEnd

; --- UNINSTALLER LOGIC ---
Function un.onInit
  !insertmacro MULTIUSER_UNINIT
  
  ; Check if the uninstaller has permission to delete the files
  ClearErrors
  FileOpen $0 "$INSTDIR\uninstall_test.tmp" w
  FileWrite $0 "test"
  FileClose $0
  IfErrors NeedAdmin
  
  Delete "$INSTDIR\uninstall_test.tmp"
  Return

NeedAdmin:
  MessageBox MB_YESNO|MB_ICONEXCLAMATION "Administrator rights are required to uninstall Throne from this location.$\n$\nDo you want to elevate?" IDNO Stay
  
  ; Trigger UAC and pass the exact path to the elevated uninstaller
  ExecShell "runas" "$EXEPATH" "_?=$INSTDIR"
  Quit

Stay:
  Abort
FunctionEnd

Section "Uninstall"

  !insertmacro AbortOnRunningApp "$INSTDIR\Throne.exe"

  Delete "$SMPROGRAMS\Throne.lnk"
  Delete "$desktop\Throne.lnk"
  RMDir "$SMPROGRAMS\Throne"

  RMDir /r "$INSTDIR"

  Delete "$INSTDIR\uninstall.exe"

  DeleteRegKey SHCTX "Software\Microsoft\Windows\CurrentVersion\Uninstall\Throne"
SectionEnd