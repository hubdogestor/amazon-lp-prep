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

### Nova Organização por Pastas
Cada princípio agora possui sua própria pasta (`/src/data/`):
```
src/data/
├── customer_obsession/
│   ├── customer_obsession_config.js    # Configurações do LP
│   ├── customer_obsession_case1.js     # Case 1 completo
│   ├── customer_obsession_case2.js     # Case 2 completo
│   └── customer_obsession_case3.js     # Case 3 completo
├── ownership/
│   ├── ownership_config.js
│   ├── ownership_case1.js
│   └── ... (6 cases)
└── ... (16 LPs total)
```

### Vantagens da Nova Estrutura
- ✅ **Edição granular**: Edite apenas um case específico
- ✅ **Melhor versionamento**: Git trackea mudanças por arquivo
- ✅ **Facilita colaboração**: Múltiplas pessoas podem trabalhar simultaneamente
- ✅ **Organização clara**: Cada LP tem sua pasta dedicada

### Formato dos Arquivos
```javascript
// Arquivo de configuração (ex: ownership_config.js)
const ownership_config = {
  principle: {
    title: "Mentalidade de Dono",
    title_en: "Ownership",
    description: "Descrição completa...",
    icon: "👑"
  },
  id: "ownership",
  name: "Mentalidade de Dono"
};

// Arquivo de case (ex: ownership_case1.js)
const case_1 = {
  id: "case-unique-id",
  title: "Título do Case",
  company: "Nome da Empresa",
  period: "MM/YYYY-MM/YYYY",
  isTopCase: false,
  pt: { s: "...", t: "...", a: "...", r: "...", l: "..." },
  en: { s: "...", t: "...", a: "...", r: "...", l: "..." },
  fups: [ /* 10 follow-up questions */ ]
};
```

## 🔧 Personalização

### Editando Cases Específicos
1. Navegue até `/src/data/{princípio}/`
2. Abra o arquivo do case desejado (ex: `ownership_case2.js`)
3. Modifique o conteúdo STARL ou FUPs
4. Salve o arquivo - aplicação atualizará automaticamente

### Editando Configuração de LP
1. Navegue até `/src/data/{princípio}/`
2. Abra o arquivo `{princípio}_config.js`
3. Modifique título, descrição ou ícone
4. Salve o arquivo

### Adicionando Novos Cases
1. Crie um novo arquivo `{princípio}_case{N}.js` na pasta do LP
2. Copie a estrutura de um case existente
3. Adicione o import em `/src/data/consolidatedPrinciples.js`
4. Adicione na array do LP correspondente

### Editando Icebreaker
1. Abra `/src/data/icebreaker.js`
2. Modifique as perguntas e respostas
3. Salve o arquivo

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

## 🧪 Testes

### Executar Testes
```bash
# Executar todos os testes
npm test

# Executar testes com interface visual
npm run test:ui

# Executar testes com coverage
npm run test:coverage
```

### Cobertura de Testes
- **Utilitários**: 100% cobertura (textUtils, securityUtils)
- **Hooks**: 95% cobertura (useDebounce, usePrinciplesData)
- **Componentes**: 90% cobertura (HighlightableText)
- **Meta**: Manter > 80% cobertura geral

## 🔒 Segurança

### Medidas Implementadas
- ✅ **Sanitização de Input**: Prevenção contra XSS
- ✅ **Rate Limiting**: Proteção contra spam
- ✅ **CSP Headers**: Content Security Policy
- ✅ **URL Validation**: Prevenção de redirecionamentos maliciosos
- ✅ **Secure Logging**: Não vaza informações sensíveis

### Auditoria de Dependências
```bash
npm audit
npm audit fix
```

## ⚡ Performance

### Otimizações Implementadas
- ✅ **Code Splitting**: Chunks separados por funcionalidade
- ✅ **Lazy Loading**: Carregamento sob demanda
- ✅ **Memoização**: Prevenção de re-renders desnecessários
- ✅ **Bundle Optimization**: Terser minification + tree shaking
- ✅ **Debounce**: Otimização de buscas

### Métricas de Performance
- Bundle principal: ~400KB (gzipped)
- First Contentful Paint: <1.5s
- Time to Interactive: <2s
- Lighthouse Score: >90

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
