@echo off
setlocal
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0serveur.ps1" -Port 5174
if errorlevel 1 (
  echo.
  echo Le serveur n'a pas pu demarrer. Verifie que le ZIP est bien extrait.
)
pause
