# 📘 Documentação Completa - Amazon LP Prep Application

## 🎯 Visão Geral da Aplicação

**Nome**: Amazon Leadership Principles - Interview Preparation App  
**Tipo**: Single Page Application (SPA) - React  
**Propósito**: Ferramenta de preparação para entrevistas comportamentais da Amazon usando os 16 Leadership Principles

### Objetivo Principal
Ajudar candidatos a se prepararem para entrevistas na Amazon, fornecendo:
- 64 cases STARL (Situação, Tarefa, Ação, Resultado, Aprendizado)
- 10 follow-up questions por case (~640 FUPs no total)
- Interface bilíngue (Português/Inglês)
- Sistema de busca e filtros inteligentes
- Icebreaker personalizado
- Banco de perguntas típicas por princípio

---

## 🏗️ Arquitetura da Aplicação

### Stack Tecnológico
- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.20
- **Styling**: Tailwind CSS 3.x
- **Icons**: Lucide React
- **Testing**: Vitest 3.2.4 + Testing Library
- **Deploy**: GitHub Pages (gh-pages)
- **Package Manager**: npm

### Estrutura de Pastas

```
amazon-lp-prep/
├── src/                          # Código fonte da aplicação
│   ├── components/               # Componentes React reutilizáveis
│   │   ├── HighlightableText.jsx # Componente para highlight de texto
│   │   └── __tests__/            # Testes de componentes
│   │       └── HighlightableText.test.jsx
│   │
│   ├── data/                     # Toda a base de dados da aplicação
│   │   ├── [16 pastas de LPs]/  # Uma pasta por Leadership Principle
│   │   │   ├── {lp}_config.js   # Configuração do LP (título, descrição, ícone)
│   │   │   ├── {lp}_case1.js    # Case 1 completo (STARL + 10 FUPs)
│   │   │   ├── {lp}_case2.js    # Case 2 completo (STARL + 10 FUPs)
│   │   │   └── ...              # Mais cases (3-6 por LP)
│   │   │
│   │   ├── consolidatedPrinciples.js  # Importa e consolida todos os LPs
│   │   ├── icebreaker.js        # Perguntas iniciais de rapport
│   │   ├── myQuestions.js       # Perguntas para fazer ao entrevistador
│   │   ├── typicalQuestions.js  # Perguntas típicas por princípio
│   │   ├── dataStructure.js     # Definições de estrutura de dados
│   │   └── principlesData.js    # (Deprecated) Mantido por compatibilidade
│   │
│   ├── hooks/                    # Custom React Hooks
│   │   ├── useDebounce.js       # Hook para debounce de inputs
│   │   ├── useHighlight.js      # Hook para gerenciar highlights
│   │   ├── usePrinciplesData.js # Hook para processar dados dos LPs
│   │   ├── useAccessibility.js  # Hook para funcionalidades a11y
│   │   └── __tests__/           # Testes dos hooks
│   │       ├── useDebounce.test.js
│   │       └── usePrinciplesData.test.js
│   │
│   ├── utils/                    # Funções utilitárias
│   │   ├── caseUtils.js         # Utilitários para manipular cases
│   │   ├── textUtils.js         # Utilitários para texto (slugify, norm)
│   │   ├── performanceUtils.js  # Monitoramento de performance
│   │   ├── securityUtils.js     # Utilitários de segurança
│   │   └── __tests__/           # Testes dos utilitários
│   │       └── textUtils.test.js
│   │
│   ├── test/                     # Configurações de teste
│   │   └── setup.js             # Setup global para testes
│   │
│   ├── App.jsx                   # Componente principal da aplicação
│   ├── App.lazy.jsx              # Versão lazy do App (code splitting)
│   ├── App.css                   # Estilos do App
│   ├── main.jsx                  # Entry point da aplicação
│   ├── index.css                 # Estilos globais
│   ├── constants.js              # Constantes da aplicação
│   └── data_principles.js        # Importa consolidatedPrinciples
│
├── public/                       # Assets estáticos
│   ├── favicon.ico              # Ícone da aplicação
│   ├── version.txt              # Versão atual
│   ├── _headers                 # Headers de segurança (Netlify)
│   └── robots.txt               # Configuração para crawlers
│
├── dist/                         # Build de produção (gerado)
│   └── [arquivos buildados]
│
├── case-validation/              # Scripts de validação (opcional)
│   └── deep_case_processor.js
│
├── .github/                      # Configurações GitHub
│   └── workflows/               # GitHub Actions (CI/CD)
│
├── node_modules/                 # Dependências (não versionado)
│
├── Configuration Files (raiz):
├── package.json                  # Dependências e scripts npm
├── package-lock.json            # Lock de dependências
├── vite.config.js               # Configuração do Vite
├── vite.config.test.js          # Config Vite para testes
├── tailwind.config.js           # Configuração do Tailwind
├── postcss.config.js            # Configuração PostCSS
├── .eslintrc.cjs                # Configuração ESLint
├── lighthouse.config.js         # Config para Lighthouse CI
├── index.html                   # HTML base
│
└── Documentation:
    ├── README.md                # Documentação principal
    ├── CHANGELOG.md             # Histórico de mudanças
    ├── GETTING_STARTED_v2.md    # Guia de início
    ├── TECHNICAL_DOCUMENTATION.md # Docs técnicas
    ├── REFACTORING_SUMMARY.md   # Resumo de refatorações
    ├── SECURITY.md              # Política de segurança
    ├── SECURITY_AUDIT_v2.1.md   # Relatório de auditoria
    ├── RELEASE_NOTES_v2.1.md    # Notas da release
    └── FINAL_REPORT_v2.1.md     # Relatório final
```

---

## 📊 Estrutura de Dados Detalhada

### 1. Leadership Principles (LPs)

**16 Princípios de Liderança da Amazon:**

1. **Customer Obsession** (`customer_obsession/`) - 3 cases
2. **Ownership** (`ownership/`) - 6 cases
3. **Invent and Simplify** (`invent_and_simplify/`) - 6 cases
4. **Are Right, A Lot** (`are_right_a_lot/`) - 3 cases
5. **Learn and Be Curious** (`learn_and_be_curious/`) - 5 cases
6. **Hire and Develop the Best** (`hire_and_develop_the_best/`) - 3 cases
7. **Insist on the Highest Standards** (`insist_on_highest_standards/`) - 4 cases
8. **Think Big** (`think_big/`) - 4 cases
9. **Bias for Action** (`bias_for_action/`) - 4 cases
10. **Frugality** (`frugality/`) - 3 cases
11. **Earn Trust** (`earn_trust/`) - 5 cases
12. **Dive Deep** (`dive_deep/`) - 4 cases
13. **Have Backbone; Disagree and Commit** (`disagree_and_commit/`) - 4 cases
14. **Deliver Results** (`deliver_results/`) - 4 cases
15. **Strive to be Earth's Best Employer** (`best_employer/`) - 3 cases
16. **Success and Scale Bring Broad Responsibility** (`broad_responsibility/`) - 3 cases

**Total: 64 cases distribuídos em 16 LPs**

### 2. Estrutura de um LP Config File

```javascript
// Exemplo: customer_obsession_config.js
const customer_obsession_config = {
  principle: {
    title: "Obsessão pelo Cliente",        // Nome PT
    title_en: "Customer Obsession",        // Nome EN
    description: "Descrição completa...",  // Descrição PT
    description_en: "Full description...", // Descrição EN
    icon: "👥"                             // Emoji do princípio
  },
  id: "customer_obsession",                // ID único
  name: "Obsessão pelo Cliente"            // Nome display
};

export default customer_obsession_config;
```

### 3. Estrutura de um Case File

```javascript
// Exemplo: customer_obsession_case1.js
const case_1 = {
  id: "unique-case-id",                    // ID único do case
  title: "Título do Case",                 // Título principal
  title_pt: "Título em Português",         // Título PT
  title_en: "Title in English",            // Título EN
  company: "Nome da Empresa",              // Empresa onde ocorreu
  period: "MM/YYYY-MM/YYYY",               // Período
  isTopCase: true/false,                   // Se é case destacado
  
  pt: {                                    // Versão Português
    s: "Situação...",                      // Situação
    t: "Tarefa...",                        // Tarefa
    a: "Ação...",                          // Ação
    r: "Resultado...",                     // Resultado
    l: "Aprendizado..."                    // Aprendizado (Learning)
  },
  
  en: {                                    // Versão Inglês
    s: "Situation...",
    t: "Task...",
    a: "Action...",
    r: "Result...",
    l: "Learning..."
  },
  
  fups: [                                  // Follow-Up Questions
    {
      q: "Pergunta em PT?",
      a: "Resposta em PT",
      q_en: "Question in EN?",
      a_en: "Answer in EN"
    },
    // ... 10 FUPs por case
  ]
};

export default case_1;
```

### 4. Sistema de Consolidação

O arquivo `consolidatedPrinciples.js` importa:
- Todos os 16 configs de LPs
- Todos os 64 cases individuais
- Consolida tudo em um array de objetos LP

```javascript
// Estrutura final consolidada:
[
  {
    principle: { title, title_en, description, description_en, icon },
    id: "lp_id",
    name: "Nome do LP",
    cases: [case1, case2, case3, ...]
  },
  // ... 16 LPs
]
```

---

## 🎨 Componentes da Interface

### App.jsx (Componente Principal)

**Funcionalidades:**
1. **Header**
   - Timer de entrevista (45 min padrão)
   - Seletor de idioma (PT/EN)
   - Botões especiais:
     - 🎯 Top Cases - Filtra cases destacados
     - 💬 Icebreaker - Modal com perguntas de rapport
     - ❓ My Questions - Modal com perguntas para o entrevistador

2. **Sidebar (Filtros)**
   - Busca por texto (debounced)
   - Filtro por princípio
   - Contadores dinâmicos por LP
   - Cores identificadoras por LP

3. **Área de Conteúdo Principal**
   - Cards expansíveis por LP
   - Cases com STARL colorido:
     - 🔵 Situação (azul)
     - 🟢 Tarefa (verde)
     - 🟠 Ação (laranja)
     - 🟣 Resultado (roxo)
     - 🔵 Aprendizado (índigo)
   - Follow-up questions expansíveis
   - Highlight de termos buscados

4. **Modais**
   - IcebreakerModal - Perguntas iniciais
   - MyQuestionsModal - Perguntas para fazer

### HighlightableText.jsx

**Propósito**: Destacar termos de busca no texto
**Props**: 
- `text`: Texto a ser renderizado
- `searchTerm`: Termo a destacar
- `className`: Classes CSS adicionais

---

## 🔧 Hooks Personalizados

### 1. useDebounce.js
**Função**: Atrasar execução de função (busca)
**Delay**: 300ms
**Uso**: Evitar re-renders excessivos durante digitação

### 2. useHighlight.js
**Função**: Gerenciar highlights de texto
**Estado**: Termos destacados, funções de add/remove/clear

### 3. usePrinciplesData.js
**Função**: Processar e validar dados dos LPs
**Features**:
- Filtragem de dados inválidos
- Fallbacks para campos faltantes
- Memoização para performance
- Injeção de dados (para testes)

### 4. useAccessibility.js
**Função**: Melhorias de acessibilidade
**Features**:
- Navegação por teclado
- Focus management
- ARIA labels
- Screen reader support

---

## 🛠️ Utilitários

### textUtils.js
```javascript
// Normalizar texto (remover acentos, lowercase)
norm(text) => string

// Criar slug (URL-friendly)
slugify(text) => string

// Remover stopwords
removeStopwords(text) => string
```

### caseUtils.js
```javascript
// Verificar se é top case
isTopCase(caseData) => boolean

// Obter título base do case
getCaseBaseTitle(caseData, language) => string

// Obter título para display
getDisplayCaseTitle(caseData, language) => string

// Obter FUPs do case
getCaseFups(caseData) => array

// Obter nome de display do LP
getDisplayName(principle, language) => string

// Ordenar princípios
sortPrinciples(principles) => array
```

### performanceUtils.js
```javascript
// Monitorar performance de operações
class PerformanceMonitor {
  mark(name)              // Marcar início
  measure(name)           // Medir duração
  getAllMeasures()        // Obter todas medições
  clear()                 // Limpar marcações
  logPerformance(op, fn)  // Log automático
}
```

---

## 🧪 Testes

### Estrutura de Testes

**4 Suítes Implementadas:**

1. **textUtils.test.js**
   - Testa funções de normalização
   - Testa slugify
   - Testa removeStopwords

2. **useDebounce.test.js**
   - Testa delay de 300ms
   - Testa cancelamento
   - Testa mudanças de valor

3. **usePrinciplesData.test.js**
   - Testa processamento de dados
   - Testa validação
   - Testa fallbacks
   - Testa filtros
   - Testa memoização

4. **HighlightableText.test.jsx**
   - Testa renderização
   - Testa highlight de termos
   - Testa múltiplos termos

**Cobertura**: 100% das suítes passando

---

## ⚙️ Configurações

### package.json - Scripts Disponíveis

```json
{
  "scripts": {
    "dev": "vite",                    // Servidor desenvolvimento
    "build": "vite build",            // Build produção
    "preview": "vite preview",        // Preview do build
    "lint": "eslint . --ext js,jsx",  // Linting
    "test": "vitest",                 // Testes (watch mode)
    "test:ui": "vitest --ui",         // Testes com UI
    "test:coverage": "vitest --coverage", // Cobertura
    "deploy": "npm run build && gh-pages -d dist" // Deploy
  }
}
```

### vite.config.js - Code Splitting

```javascript
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'data-core': ['./src/data/consolidatedPrinciples.js'],
        'data-utils': ['icebreaker.js', 'myQuestions.js', 'typicalQuestions.js'],
        'utils': ['textUtils.js', 'caseUtils.js'],
        'hooks': ['useDebounce.js', 'useHighlight.js'],
        'icons': ['lucide-react']
      }
    }
  }
}
```

### tailwind.config.js - Tema

```javascript
theme: {
  extend: {
    colors: { /* cores customizadas */ },
    spacing: { /* espaçamentos */ },
    animation: { /* animações */ }
  }
}
```

---

## 🔒 Segurança

### Headers Implementados

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Content-Security-Policy: [configurado]
```

### Proteções

- ✅ Sem `dangerouslySetInnerHTML`
- ✅ Sem `eval()`
- ✅ Sem manipulação de `innerHTML`
- ✅ React sanitiza inputs automaticamente
- ✅ Code splitting reduz superfície de ataque
- ✅ Console.log removido em produção

### Vulnerabilidades Conhecidas

- **esbuild <=0.24.2**: Moderate (desenvolvimento apenas)
- **Impacto em Produção**: ZERO

---

## 🚀 Build e Deploy

### Processo de Build

1. **Vite Build**:
   - Transpila React/JSX
   - Aplica Tailwind CSS
   - Minifica com Terser
   - Code splitting em 8 chunks
   - Remove console.log
   - Gera sourcemaps

2. **Output**:
   ```
   dist/
   ├── index.html (1.30 KB)
   ├── assets/
   │   ├── index-[hash].css (25.86 KB / 5.01 KB gzip)
   │   ├── data-core-[hash].js (1,072 KB / 359 KB gzip)
   │   ├── react-[hash].js (139 KB / 44 KB gzip)
   │   ├── data-utils-[hash].js (41 KB / 13 KB gzip)
   │   ├── index-[hash].js (28 KB / 8 KB gzip)
   │   ├── hooks-[hash].js (1.35 KB / 0.46 KB gzip)
   │   ├── utils-[hash].js (1.13 KB / 0.59 KB gzip)
   │   └── icons-[hash].js (0.78 KB / 0.53 KB gzip)
   ├── _headers
   └── robots.txt
   ```

3. **Total Bundle**: ~431 KB (gzip)

### Deploy (GitHub Pages)

```bash
npm run deploy
# 1. Executa build
# 2. Publica pasta dist/ no branch gh-pages
# 3. GitHub Pages serve automaticamente
```

**URL Deploy**: https://hubdogestor.github.io/amazon-lp-prep/

---

## 📱 Features da Aplicação

### Principais Funcionalidades

1. **Busca Inteligente**
   - Busca em títulos, empresas, conteúdo STARL
   - Debounce de 300ms
   - Highlight de termos encontrados
   - Case-insensitive, sem acentos

2. **Filtros**
   - Por Leadership Principle
   - Por Top Cases
   - Combinação de busca + filtro

3. **Visualização**
   - Cards expansíveis
   - STARL com cores identificadoras
   - Follow-ups colapsáveis
   - Informações de empresa e período

4. **Bilíngue**
   - Troca instantânea PT ↔ EN
   - Conteúdo completo em ambos idiomas
   - Persistência de estado

5. **Timer de Entrevista**
   - Padrão: 45 minutos
   - Contagem regressiva
   - Alerta visual ao finalizar

6. **Icebreaker**
   - Perguntas iniciais de rapport
   - "Me fale sobre você"
   - "Por que Amazon?"
   - "Hobbies e interesses"

7. **My Questions**
   - Perguntas para fazer ao entrevistador
   - Categorias organizadas
   - Dicas de uso

8. **Typical Questions**
   - Perguntas típicas por LP
   - Exemplos reais de entrevistas
   - PT e EN

---

## 🎯 Fluxo de Uso

### Jornada do Usuário

1. **Entrada na App**
   - Vê todos os 16 LPs
   - 64 cases disponíveis
   - Interface limpa

2. **Busca/Filtro**
   - Digita termo (ex: "pagamento")
   - Sistema filtra cases relevantes
   - Destaca termos encontrados

3. **Exploração de Case**
   - Clica para expandir
   - Lê STARL completo
   - Expande follow-ups
   - Pratica respostas

4. **Preparação Completa**
   - Revisa top cases
   - Pratica icebreaker
   - Prepara perguntas
   - Usa timer para simular

---

## 📊 Métricas e Performance

### Bundle Analysis

```
Total: 1.31 MB (uncompressed)
Gzip: 431 KB (67% redução)

Breakdown:
- data-core: 83% (dados dos cases)
- react: 11% (framework)
- data-utils: 3% (icebreaker, questions)
- app: 2% (lógica principal)
- outros: 1%
```

### Performance Targets

- ✅ First Contentful Paint: < 1.5s
- ✅ Time to Interactive: < 3s
- ✅ Lighthouse Score: > 90
- ✅ Bundle Size: < 500 KB (gzip)

### Otimizações Implementadas

1. **Code Splitting**: 8 chunks separados
2. **Lazy Loading**: Componentes sob demanda
3. **Memoization**: useMemo, useCallback
4. **Debouncing**: Inputs com delay
5. **Tree Shaking**: Imports específicos
6. **Minification**: Terser em produção

---

## 🔄 Fluxo de Dados

### Data Flow

```
1. consolidatedPrinciples.js
   ↓ imports
2. [16 LP configs + 64 cases]
   ↓ exports
3. data_principles.js
   ↓ imports
4. App.jsx / usePrinciplesData
   ↓ processa
5. Estado React (filtrado/buscado)
   ↓ renderiza
6. UI Components
```

### State Management

**Estado Global (App.jsx):**
- `principlesData`: Dados processados
- `searchTerm`: Termo de busca
- `selectedPrinciple`: LP filtrado
- `expandedCards`: Cards abertos
- `expandedFups`: FUPs expandidos
- `language`: Idioma atual
- `showTopCases`: Filtro top cases
- `timerSeconds`: Timer

**Estado Local (Componentes):**
- Modais: `showIcebreaker`, `showMyQuestions`
- Highlights: `highlightedTerms`
- Scroll: `scrollPositions`

---

## 🎨 Design System

### Cores por LP

Cada Leadership Principle tem cor identificadora:
```javascript
customer_obsession: blue
ownership: purple
invent_and_simplify: yellow
are_right_a_lot: green
learn_and_be_curious: pink
// ... etc
```

### Componentes UI

- Cards: `rounded-lg border shadow-sm`
- Buttons: `px-4 py-2 rounded hover:bg-*`
- Inputs: `border rounded-lg focus:ring-2`
- Modals: `fixed inset-0 bg-black/50 backdrop-blur`

### Responsividade

- Mobile first
- Breakpoints: sm, md, lg, xl, 2xl
- Grid adaptável
- Sidebar colapsável em mobile

---

## 📚 Casos de Uso Avançados

### Para Desenvolvedores

**Adicionar Novo Case:**
1. Criar arquivo `{lp}_case{N}.js` na pasta do LP
2. Seguir estrutura padrão
3. Adicionar import em `consolidatedPrinciples.js`
4. Adicionar no array do LP correspondente

**Adicionar Novo LP:**
1. Criar pasta `new_lp/`
2. Criar `new_lp_config.js`
3. Criar cases `new_lp_case1.js`, etc
4. Importar e adicionar em `consolidatedPrinciples.js`

**Modificar Case Existente:**
1. Ir para `src/data/{lp}/{lp}_case{N}.js`
2. Editar STARL ou FUPs
3. Salvar (hot reload automático)

---

## 🐛 Troubleshooting Comum

### Build Failures
- Verificar `npm install`
- Limpar cache: `rm -rf node_modules dist`
- Reinstalar: `npm install`

### Testes Falhando
- Verificar imports em `__tests__/`
- Verificar mocks em `test/setup.js`
- Rodar com `--no-coverage` para debug

### Deploy Issues
- Verificar `vite.config.js` base path
- Verificar branch `gh-pages` existe
- Verificar GitHub Pages ativado

---

## 📖 Glossário

**STARL**: Situação, Tarefa, Ação, Resultado, Aprendizado (Learning)  
**FUP**: Follow-Up Question (Pergunta de acompanhamento)  
**LP**: Leadership Principle (Princípio de Liderança)  
**Case**: História/exemplo comportamental estruturado  
**Top Case**: Case destacado/mais forte do candidato  
**Icebreaker**: Perguntas iniciais de rapport  
**Code Splitting**: Dividir bundle em chunks menores  
**Lazy Loading**: Carregar componentes sob demanda  
**Debounce**: Atrasar execução até pausa na digitação  
**Memoization**: Cache de valores computados  

---

## 🎓 Contexto de Negócio

### Por que esta aplicação existe?

**Problema**: Entrevistas comportamentais da Amazon são rigorosas e seguem os 16 Leadership Principles. Candidatos precisam de:
- Múltiplos exemplos prontos por princípio
- Respostas estruturadas no formato STARL
- Preparação para follow-ups profundos
- Prática bilíngue (muitas posições são internacionais)

**Solução**: Esta aplicação centraliza toda a preparação:
- 64 cases reais e detalhados
- ~640 follow-ups preparados
- Busca inteligente por tema
- Simulação de entrevista com timer
- Material de referência (perguntas típicas, icebreaker)

**Usuário-alvo**: Profissionais se preparando para:
- Entrevistas Amazon (qualquer nível)
- Revisão de experiências profissionais
- Prática de storytelling comportamental

---

## 🔮 Roadmap Futuro

### Planejado para v3.0
- [ ] Upgrade Vite 7.x (resolver vulnerabilidade esbuild)
- [ ] Upgrade React 19
- [ ] Modo dark/light
- [ ] Exportar cases em PDF
- [ ] Gravação de áudio para prática
- [ ] Notas por case
- [ ] Histórico de revisão
- [ ] Integração com calendário
- [ ] Mobile app (React Native)

---

## 📞 Informações Adicionais

### Repositório
- **URL**: https://github.com/hubdogestor/amazon-lp-prep
- **Owner**: hubdogestor
- **Branch principal**: main
- **Versão atual**: v2.1

### Deploy
- **Plataforma**: GitHub Pages
- **URL**: https://hubdogestor.github.io/amazon-lp-prep/
- **Auto-deploy**: Sim (via gh-pages)

### Manutenção
- **Última auditoria**: 2025-10-04
- **Última release**: v2.1
- **Status**: ✅ Ativo e mantido

---

## 🤖 Para uma IA Entender

Esta aplicação é uma ferramenta educacional/preparação que:

1. **Armazena conhecimento estruturado**: 64 histórias profissionais formatadas em STARL
2. **Facilita recuperação**: Busca e filtros inteligentes
3. **Simula contexto real**: Timer, idiomas, perguntas típicas
4. **É self-contained**: Toda lógica e dados no frontend
5. **É estática**: Sem backend, sem banco de dados, sem autenticação
6. **É personalizada**: Conteúdo específico do dono (hubdogestor)

**Analogia**: É como um "caderno digital inteligente" de preparação para entrevistas, onde você pode rapidamente encontrar o exemplo perfeito para qualquer pergunta sobre leadership.

**Tecnicamente**: É uma SPA React com dados hardcoded, otimizada para performance e acessibilidade, deployada estaticamente no GitHub Pages.

---

**Documento criado em**: 2025-10-04  
**Versão**: 1.0  
**Para**: Contexto completo de IA
