param (
    [string]$EventType = "complete"
)

# Cross-platform check: PowerShell Core (pwsh) can run on Mac/Linux. We'll use $IsWindows, $IsMacOs, $IsLinux if available.
$os = "unknown"
if ($PSVersionTable.PSEdition -eq "Core") {
    if ($IsWindows) { $os = "windows" }
    elseif ($IsMacOS) { $os = "mac" }
    elseif ($IsLinux) { $os = "linux" }
} else {
    # Windows PowerShell 5.1
    $os = "windows"
}

$is_focused = 0

if ($os -eq "mac") {
    # Mac check
    $focusedApp = bash -c "osascript -e 'tell application `"System Events`" to get name of first application process whose frontmost is true' 2>/dev/null"
    if ($focusedApp -match "Code|Cursor|Antigravity") {
        $is_focused = 1
    }
} elseif ($os -eq "windows") {
    # Windows check
    try {
        if (-not ([System.Management.Automation.PSTypeName]'Win32').Type) {
            Add-Type @"
            using System;
            using System.Runtime.InteropServices;
            public class Win32 {
                [DllImport("user32.dll")]
                public static extern IntPtr GetForegroundWindow();
                [DllImport("user32.dll")]
                public static extern uint GetWindowThreadProcessId(IntPtr hWnd, out uint lpdwProcessId);
            }
"@ -ErrorAction SilentlyContinue
        }
    } catch {}
    
    $hWnd = [Win32]::GetForegroundWindow()
    if ($hWnd -ne [IntPtr]::Zero) {
        $processId = 0
        [Win32]::GetWindowThreadProcessId($hWnd, [ref]$processId) | Out-Null
        if ($processId -ne 0) {
            $procName = (Get-Process -Id $processId -ErrorAction SilentlyContinue).ProcessName
            if ($procName -match "Code|Cursor|Antigravity|electron|WindowsTerminal") {
                $is_focused = 1
            }
        }
    }
} elseif ($os -eq "linux") {
    if (Get-Command xdotool -ErrorAction SilentlyContinue) {
        $focusedApp = bash -c "xdotool getactivewindow getwindowname 2>/dev/null"
        if ($focusedApp -match "Code|Cursor|Antigravity") {
            $is_focused = 1
        }
    } else {
        Write-Host "xdotool is not installed. Please install it to detect foreground window."
    }
}

if ($is_focused -eq 1) {
    # Silent exit
    exit 0
}

# Play sound
if ($os -eq "mac") {
    if ($EventType -eq "complete") {
        bash -c "afplay /System/Library/Sounds/Glass.aiff &"
    } else {
        bash -c "afplay /System/Library/Sounds/Basso.aiff &"
    }
} elseif ($os -eq "windows") {
    if ($EventType -eq "complete") {
        [System.Media.SystemSounds]::Asterisk.Play()
    } else {
        [System.Media.SystemSounds]::Exclamation.Play()
    }
} elseif ($os -eq "linux") {
    if (Get-Command paplay -ErrorAction SilentlyContinue) {
        if ($EventType -eq "complete") {
            bash -c "paplay /usr/share/sounds/freedesktop/stereo/complete.oga &"
        } else {
            bash -c "paplay /usr/share/sounds/freedesktop/stereo/dialog-warning.oga &"
        }
    } else {
        [Console]::Beep()
    }
}
