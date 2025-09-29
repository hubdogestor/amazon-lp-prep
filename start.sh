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
    #!/bin/bash

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Start development server
echo "Starting development server..."
npm run dev
fi
