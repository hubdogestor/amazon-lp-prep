#!/bin/bash

echo "========================================"
echo " Amazon Leadership Principles - Setup"
echo "========================================"

# Check Node.js installation
echo "Checking Node.js..."
if ! command -v node &> /dev/null; then
    echo "ERRO: Node.js não encontrado!"
    echo "Por favor, instale Node.js:"
    echo "  Ubuntu/Debian: curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - && sudo apt-get install -y nodejs"
    echo "  CentOS/RHEL: curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash - && sudo yum install -y nodejs"
    echo "  Mac: brew install node"
    echo "  Ou baixe em: https://nodejs.org/"
    exit 1
fi

echo "Node.js encontrado!"
node --version

# Verificar pnpm
echo
echo "Verificando pnpm..."
if ! command -v pnpm &> /dev/null; then
    echo "pnpm não encontrado. Instalando..."
    npm install -g pnpm
    if [ $? -ne 0 ]; then
        echo "ERRO: Falha ao instalar pnpm"
        echo "Usando npm como alternativa..."
        USE_NPM=true
    fi
else
    echo "pnpm encontrado!"
    pnpm --version
    USE_NPM=false
fi

# Instalar dependências
echo
if [ "$USE_NPM" = true ]; then
    echo "Instalando dependências com npm..."
    npm install
    if [ $? -ne 0 ]; then
        echo "ERRO: Falha na instalação"
        exit 1
    fi
    COMMAND="npm run dev"
else
    echo "Instalando dependências com pnpm..."
    pnpm install
    if [ $? -ne 0 ]; then
        echo "ERRO: Falha na instalação com pnpm"
        echo "Tentando com npm..."
        npm install
        if [ $? -ne 0 ]; then
            echo "ERRO: Falha na instalação"
            exit 1
        fi
        COMMAND="npm run dev"
    else
        COMMAND="pnpm dev"
    fi
fi

echo
echo "========================================"
echo " Instalação concluída com sucesso!"
echo "========================================"
echo
echo "Para iniciar a aplicação:"
echo "  $COMMAND"
echo
echo "Depois acesse: http://localhost:5173/"
echo
