@echo off
echo Iniciando Amazon Leadership Principles...
echo.
echo Abrindo navegador em: http://localhost:5173/
echo.
echo Para parar o servidor, pressione Ctrl+C
echo.

REM Tentar com pnpm primeiro
pnpm --version >nul 2>&1
if %errorlevel% equ 0 (
    start http://localhost:5173/
    pnpm dev
) else (
    start http://localhost:5173/
    npm run dev
)

pause
