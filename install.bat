@echo off
echo ========================================
echo  Amazon Leadership Principles - Setup
echo ========================================
echo.

echo Verificando Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERRO: Node.js nao encontrado!
    echo Por favor, instale Node.js em: https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js encontrado!
node --version

echo.
echo Verificando pnpm...
pnpm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo pnpm nao encontrado. Instalando...
    npm install -g pnpm
    if %errorlevel% neq 0 (
        echo ERRO: Falha ao instalar pnpm
        echo Usando npm como alternativa...
        goto :use_npm
    )
)

echo pnpm encontrado!
pnpm --version

echo.
echo Instalando dependencias com pnpm...
pnpm install
if %errorlevel% neq 0 (
    echo ERRO: Falha na instalacao com pnpm
    echo Tentando com npm...
    goto :use_npm
)

echo.
echo ========================================
echo  Instalacao concluida com sucesso!
echo ========================================
echo.
echo Para iniciar a aplicacao:
echo   pnpm dev
echo.
echo Depois acesse: http://localhost:5173/
echo.
pause
exit /b 0

:use_npm
echo.
echo Instalando dependencias com npm...
npm install
if %errorlevel% neq 0 (
    echo ERRO: Falha na instalacao
    pause
    exit /b 1
)

echo.
echo ========================================
echo  Instalacao concluida com sucesso!
echo ========================================
echo.
echo Para iniciar a aplicacao:
echo   npm run dev
echo.
echo Depois acesse: http://localhost:5173/
echo.
pause
