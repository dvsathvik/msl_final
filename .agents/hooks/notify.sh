#!/bin/bash

# $1 will be "complete" or "permission"
EVENT_TYPE=$1
if [ -z "$EVENT_TYPE" ]; then
    EVENT_TYPE="complete"
fi

OS="unknown"
if [[ "$OSTYPE" == "darwin"* ]]; then
  OS="mac"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
  OS="linux"
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" || "$OSTYPE" == "win32" ]]; then
  OS="windows"
fi

is_focused=0

if [ "$OS" = "mac" ]; then
  FOCUSED_APP=$(osascript -e 'tell application "System Events" to get name of first application process whose frontmost is true' 2>/dev/null)
  if [[ "$FOCUSED_APP" == *"Code"* ]] || [[ "$FOCUSED_APP" == *"Cursor"* ]] || [[ "$FOCUSED_APP" == *"Antigravity"* ]]; then
    is_focused=1
  fi
elif [ "$OS" = "windows" ]; then
  cat << 'EOF' > .agents/hooks/get_foreground.ps1
Add-Type @"
using System;
using System.Runtime.InteropServices;
public class Win32 {
    [DllImport("user32.dll")]
    public static extern IntPtr GetForegroundWindow();
    [DllImport("user32.dll")]
    public static extern uint GetWindowThreadProcessId(IntPtr hWnd, out uint lpdwProcessId);
}
"@
$hWnd = [Win32]::GetForegroundWindow()
if ($hWnd -ne [IntPtr]::Zero) {
    $processId = 0
    [Win32]::GetWindowThreadProcessId($hWnd, [ref]$processId) | Out-Null
    if ($processId -ne 0) {
        (Get-Process -Id $processId -ErrorAction SilentlyContinue).ProcessName
    }
}
EOF
  FOCUSED_APP=$(powershell.exe -NoProfile -ExecutionPolicy Bypass -File .agents/hooks/get_foreground.ps1 | tr -d '\r')
  
  if [[ "$FOCUSED_APP" == *"Code"* ]] || [[ "$FOCUSED_APP" == *"Cursor"* ]] || [[ "$FOCUSED_APP" == *"Antigravity"* ]] || [[ "$FOCUSED_APP" == *"electron"* ]] || [[ "$FOCUSED_APP" == *"WindowsTerminal"* ]]; then
    is_focused=1
  fi
elif [ "$OS" = "linux" ]; then
  if command -v xdotool &> /dev/null; then
    FOCUSED_APP=$(xdotool getactivewindow getwindowname 2>/dev/null)
    if [[ "$FOCUSED_APP" == *"Code"* ]] || [[ "$FOCUSED_APP" == *"Cursor"* ]] || [[ "$FOCUSED_APP" == *"Antigravity"* ]]; then
      is_focused=1
    fi
  else
    echo "xdotool is not installed. Please install it (e.g., sudo apt install xdotool) to detect foreground window."
  fi
fi

if [ $is_focused -eq 1 ]; then
  # IDE is focused, silent exit
  exit 0
fi

if [ "$OS" = "mac" ]; then
  if [ "$EVENT_TYPE" = "complete" ]; then
    afplay /System/Library/Sounds/Glass.aiff &
  else
    afplay /System/Library/Sounds/Basso.aiff &
  fi
elif [ "$OS" = "windows" ]; then
  if [ "$EVENT_TYPE" = "complete" ]; then
    powershell.exe -NoProfile -Command "[System.Media.SystemSounds]::Asterisk.Play()" &
  else
    powershell.exe -NoProfile -Command "[System.Media.SystemSounds]::Exclamation.Play()" &
  fi
elif [ "$OS" = "linux" ]; then
  if command -v paplay &> /dev/null; then
    if [ "$EVENT_TYPE" = "complete" ]; then
      paplay /usr/share/sounds/freedesktop/stereo/complete.oga &
    else
      paplay /usr/share/sounds/freedesktop/stereo/dialog-warning.oga &
    fi
  else
    printf '\a'
  fi
fi
