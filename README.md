# 🎯 Amazon Leadership Principles - Interview Prep

Uma aplicação web moderna para preparação de entrevistas baseadas nos 16 Princípios de Liderança da Amazon, com cases STARL personalizados e follow-up questions.

## 🚀 Instalação Rápida

### Windows
1. Extraia o projeto
2. Execute: `install.bat`
3. Execute: `start.bat`

### Linux/Mac
1. Extraia o projeto
2. Execute: `./install.sh`
3. Execute: `./start.sh`

### Manual
```bash
# Instalar dependências
pnpm install  # ou npm install

# Iniciar aplicação
pnpm dev      # ou npm run dev

# Acessar: http://localhost:5173/
```

## 📋 Funcionalidades

- ✅ **16 Princípios de Liderança** da Amazon
- ✅ **32 Cases STARL** personalizados
- ✅ **Follow-up Questions** detalhadas
- ✅ **Icebreaker personalizado**
- ✅ **Interface bilíngue** (PT/EN)
- ✅ **Filtros inteligentes** por princípio
- ✅ **Busca por conteúdo**
- ✅ **Design responsivo** otimizado para widescreen

## 🎨 Interface

### Sidebar de Navegação
- Filtros por princípio com cores identificadoras
- Busca por texto
- Contadores dinâmicos

### Conteúdo Principal
- Cards expansíveis para cada princípio
- Cases STARL com seções coloridas:
  - 🔵 **Situação** (azul)
  - 🟢 **Tarefa** (verde)  
  - 🟠 **Ação** (laranja)
  - 🟣 **Resultado** (roxo)
  - 🔵 **Aprendizado** (índigo)

### Icebreaker
- Histórico profissional personalizado
- Botão discreto no header
- Conteúdo expansível

## 📁 Estrutura dos Dados

### Princípios de Liderança
Cada princípio está em um arquivo separado (`/src/data/`):
- `customer_obsession.js`
- `ownership.js`
- `invent_and_simplify.js`
- ... (16 arquivos total)

### Formato dos Cases
```javascript
{
  "title": "Nome do Case",
  "pt": {
    "s": "Situação em português...",
    "t": "Tarefa em português...",
    "a": "Ação em português...",
    "r": "Resultado em português...",
    "l": "Aprendizado em português..."
  },
  "en": {
    "s": "Situation in English...",
    "t": "Task in English...",
    "a": "Action in English...",
    "r": "Result in English...",
    "l": "Learning in English..."
  },
  "fup": [
    {
      "q": "Follow-up question?",
      "a": "Answer to the question..."
    }
  ]
}
```

## 🔧 Personalização

### Editando Cases
1. Abra o arquivo do princípio em `/src/data/`
2. Modifique o conteúdo dos cases
3. Salve o arquivo
4. A aplicação será atualizada automaticamente

### Editando Icebreaker
1. Abra `/src/data/principlesData.js`
2. Modifique a seção `icebreakerData`
3. Salve o arquivo

### Adicionando Novos Cases
1. Abra o arquivo do princípio desejado
2. Adicione um novo objeto no array `cases`
3. Siga a estrutura existente

## 🌐 Deploy

### Build Local
```bash
pnpm build  # ou npm run build
# Arquivos gerados em: dist/
```

### Opções de Deploy Gratuito
- **Netlify**: Arraste a pasta `dist/` para netlify.com
- **Vercel**: `npx vercel` na pasta do projeto
- **GitHub Pages**: Configure nas settings do repositório

## 🛠️ Tecnologias

- **React 18** - Framework frontend
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de estilos
- **Lucide React** - Ícones
- **JavaScript ES6+** - Linguagem

## 📞 Suporte

### Problemas Comuns

**Erro: "command not found"**
```bash
# Instale Node.js: https://nodejs.org/
# Instale pnpm: npm install -g pnpm
```

**Porta em uso**
```bash
# Mate o processo na porta 5173
# Linux/Mac: lsof -ti:5173 | xargs kill -9
# Windows: netstat -ano | findstr :5173
```

**Dependências corrompidas**
```bash
rm -rf node_modules package-lock.json
pnpm install  # ou npm install
```

## 📚 Documentação Adicional

- `INSTALACAO_LOCAL.md` - Guia detalhado de instalação
- `INSTRUCTIONS.md` - Instruções de uso da aplicação

## 🎉 Começando

1. **Instale** seguindo as instruções acima
2. **Execute** a aplicação
3. **Explore** os 16 princípios de liderança
4. **Pratique** com os cases STARL
5. **Prepare-se** para arrasar na entrevista!

---

**Desenvolvido para preparação de entrevistas Amazon Leadership Principles**

**Boa sorte! 🚀**
