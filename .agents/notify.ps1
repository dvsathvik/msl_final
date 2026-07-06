param(
    [string]$Message = 'Antigravity task completed!',
    [string]$Title = 'Antigravity IDE'
)

# Check if the foreground window belongs to "Antigravity IDE"
$shouldRing = $true
try {
    if (-not ("Win32.Win32ActiveWindow" -as [type])) {
        $Signature = @"
        [DllImport("user32.dll")]
        public static extern IntPtr GetForegroundWindow();
        [DllImport("user32.dll")]
        public static extern uint GetWindowThreadProcessId(IntPtr hWnd, out uint lpdwProcessId);
"@
        Add-Type -MemberDefinition $Signature -Name "Win32ActiveWindow" -Namespace "Win32"
    }

    $hwnd = [Win32.Win32ActiveWindow]::GetForegroundWindow()
    if ($hwnd -ne 0) {
        $processId = 0
        [Win32.Win32ActiveWindow]::GetWindowThreadProcessId($hwnd, [ref]$processId)
        if ($processId -ne 0) {
            $proc = Get-Process -Id $processId -ErrorAction SilentlyContinue
            if ($proc) {
                if (($proc.Name -like "*Antigravity*") -or ($proc.MainWindowTitle -like "*Antigravity*")) {
                    $shouldRing = $false
                }
            }
        }
    }
} catch {
    # If anything fails, default to ringing
    $shouldRing = $true
}

Add-Type -AssemblyName System.Windows.Forms
$balloon = New-Object System.Windows.Forms.NotifyIcon
$balloon.Icon = [System.Drawing.Icon]::ExtractAssociatedIcon('C:\Windows\explorer.exe')
$balloon.BalloonTipIcon = 'Info'
$balloon.BalloonTipText = $Message
$balloon.BalloonTipTitle = $Title
$balloon.Visible = $true
$balloon.ShowBalloonTip(5000)

if ($shouldRing) {
    [System.Media.SystemSounds]::Asterisk.Play()
}

Start-Sleep -Seconds 5
$balloon.Dispose()
