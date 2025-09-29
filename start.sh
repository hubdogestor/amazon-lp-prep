#!/bin/bash

echo "Iniciando Amazon Leadership Principles..."
echo
echo "Abrindo navegador em: http://localhost:5173/"
echo
echo "Para parar o servidor, pressione Ctrl+C"
echo

# Abrir navegador (funciona na maioria dos sistemas)
if command -v xdg-open &> /dev/null; then
    xdg-open http://localhost:5173/ &
elif command -v open &> /dev/null; then
    open http://localhost:5173/ &
fi

# Iniciar servidor
if command -v pnpm &> /dev/null; then
    pnpm dev
else
    npm run dev
fi
