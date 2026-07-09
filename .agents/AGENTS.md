# Notification Rule
# At the very end of EVERY task (both long and short), you MUST run the following command to notify the user that you are finished:
# `powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -File .agents\hooks\notify.ps1 complete`
# Additionally, if you need permissions to run a command or need approval to run a command, and you are waiting for the user to respond, you MUST notify them:
# `powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -File .agents\hooks\notify.ps1 permission`
# Do this as your final tool call in the task or before you wait for user input.
