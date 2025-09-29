# 🚀 Instalação Local - Amazon Leadership Principles

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

### 1. **Node.js** (versão 18 ou superior)
- **Windows/Mac**: Baixe em https://nodejs.org/
- **Linux**: 
  ```bash
  # Ubuntu/Debian
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
  sudo apt-get install -y nodejs
  
  # CentOS/RHEL
  curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
  sudo yum install -y nodejs
  ```

### 2. **pnpm** (gerenciador de pacotes - recomendado)
```bash
npm install -g pnpm
```

**Ou use npm** (que já vem com Node.js):
```bash
# Se preferir usar npm, substitua 'pnpm' por 'npm' nos comandos
```

## 🛠️ Instalação

### Passo 1: Extrair o projeto
1. Extraia o arquivo ZIP em uma pasta de sua escolha
2. Abra o terminal/prompt de comando na pasta do projeto

### Passo 2: Instalar dependências
```bash
# Com pnpm (recomendado)
pnpm install

# Ou com npm
npm install
```

### Passo 3: Iniciar o servidor de desenvolvimento
```bash
# Com pnpm
pnpm dev

# Ou com npm
npm run dev
```

### Passo 4: Acessar a aplicação
- Abra seu navegador
- Acesse: **http://localhost:5173/**
- A aplicação estará rodando localmente!

## 🎯 Scripts Disponíveis

```bash
# Desenvolvimento (servidor local)
pnpm dev          # ou npm run dev

# Build para produção
pnpm build        # ou npm run build

# Preview do build de produção
pnpm preview      # ou npm run preview

# Linting (verificação de código)
pnpm lint         # ou npm run lint
```

## 📁 Estrutura do Projeto

```
amazon-lp-prep/
├── src/
│   ├── data/                    # Dados dos princípios
│   │   ├── principlesData.js    # Arquivo principal de dados
│   │   ├── customer_obsession.js
│   │   ├── ownership.js
│   │   └── ... (outros princípios)
│   ├── components/              # Componentes React (se houver)
│   ├── App.jsx                  # Componente principal
│   ├── App.css                  # Estilos principais
│   ├── main.jsx                 # Ponto de entrada
│   └── index.css                # Estilos globais
├── public/                      # Arquivos públicos
├── package.json                 # Dependências e scripts
├── vite.config.js              # Configuração do Vite
├── tailwind.config.js          # Configuração do Tailwind
├── README.md                   # Documentação do projeto
├── INSTRUCTIONS.md             # Instruções de uso
└── INSTALACAO_LOCAL.md         # Este arquivo
```

## 🔧 Personalização

### Editando os Dados
Para modificar os cases ou adicionar novos:

1. **Icebreaker**: Edite `/src/data/principlesData.js` na seção `icebreakerData`
2. **Princípios**: Edite os arquivos individuais em `/src/data/` (ex: `customer_obsession.js`)

### Estrutura dos Dados
Cada princípio segue esta estrutura:
```javascript
export default {
  "id": "customer_obsession",
  "name": "Obsessão pelo Cliente",
  "cases": [
    {
      "title": "Título do Case",
      "pt": {
        "s": "Situação...",
        "t": "Tarefa...",
        "a": "Ação...",
        "r": "Resultado...",
        "l": "Aprendizado..."
      },
      "en": {
        "s": "Situation...",
        "t": "Task...",
        "a": "Action...",
        "r": "Result...",
        "l": "Learning..."
      },
      "fup": [
        {
          "q": "Pergunta?",
          "a": "Resposta..."
        }
      ]
    }
  ]
};
```

## 🌐 Deploy para Produção

### Opção 1: Build Local
```bash
pnpm build
# Os arquivos estarão na pasta 'dist/'
# Você pode servir essa pasta com qualquer servidor web
```

### Opção 2: Netlify (Gratuito)
1. Faça build: `pnpm build`
2. Acesse https://netlify.com
3. Arraste a pasta `dist/` para o Netlify
4. Sua aplicação estará online!

### Opção 3: Vercel (Gratuito)
1. Instale Vercel CLI: `npm i -g vercel`
2. Na pasta do projeto: `vercel`
3. Siga as instruções
4. Sua aplicação estará online!

### Opção 4: GitHub Pages
1. Crie um repositório no GitHub
2. Faça push do código
3. Configure GitHub Pages nas configurações do repositório
4. Use a pasta `dist/` como source

## 🐛 Solução de Problemas

### Erro: "command not found: pnpm"
```bash
npm install -g pnpm
```

### Erro: "Port 5173 is already in use"
```bash
# Mate o processo na porta 5173
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID_NUMBER> /F

# Linux/Mac
lsof -ti:5173 | xargs kill -9
```

### Erro de dependências
```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
pnpm install
# ou
npm install
```

### Aplicação não carrega no navegador
1. Verifique se o servidor está rodando (deve mostrar "Local: http://localhost:5173/")
2. Tente acessar http://127.0.0.1:5173/
3. Verifique o console do navegador (F12) para erros

## 📞 Suporte

Se encontrar problemas:
1. Verifique se Node.js está instalado: `node --version`
2. Verifique se pnpm está instalado: `pnpm --version`
3. Verifique os logs no terminal para mensagens de erro
4. Tente limpar cache e reinstalar dependências

## 🎉 Pronto!

Sua aplicação Amazon Leadership Principles está rodando localmente!
- Acesse: http://localhost:5173/
- Edite os dados conforme necessário
- Use para se preparar para sua entrevista na Amazon!

**Boa sorte na preparação! 🚀**
