# ✅ ESTRUTURA ORGANIZADA - Perguntas → Cases

## 📁 Estrutura de Pastas

```
perguntas-cases/
│
├── 📖 README.md                                  ← Índice principal (START HERE)
├── 📚 INDICE_MAPEAMENTO.md                       ← Navegação detalhada
├── 📄 README_MAPEAMENTO_PERGUNTAS_CASES.md       ← Documentação completa
├── ✅ ENTREGA_COMPLETA_MAPEAMENTO.md             ← Resumo da entrega
│
├── 📊 dados/                                     ← DADOS PRINCIPAIS
│   ├── mapeamento-perguntas-cases-COMPLETO.csv  ⭐ ABRIR NO EXCEL (60 KB)
│   └── mapeamento-perguntas-cases-COMPLETO.json (89 KB - formato estruturado)
│
├── 📈 relatorios/                                ← RELATÓRIOS E DASHBOARDS
│   ├── SUMARIO_EXECUTIVO_1PAGINA.md             ⭐ RESUMO (5 min leitura)
│   ├── VISUAL_ASCII_SUMARIO.md                  ⭐ DASHBOARD (10 min leitura)
│   ├── DASHBOARD_MAPEAMENTO_PERGUNTAS.md        (análise estratégica - 20 min)
│   └── gaps-perguntas-sem-cases.md              (86 gaps detalhados - 30 KB)
│
├── 🚀 guias/                                     ← GUIAS PRÁTICOS
│   └── GUIA_RAPIDO_MAPEAMENTO.md                ⭐ COMO USAR (15 min leitura)
│
└── 🔧 scripts/                                   ← SCRIPTS EXECUTÁVEIS
    ├── map_questions_to_cases.cjs               (gera mapeamento completo)
    ├── stats_mapeamento.cjs                     (estatísticas por LP)
    └── top_cases_versateis.cjs                  (cases mais versáteis)
```

---

## 📊 RESUMO DOS ARQUIVOS

### ⭐ **ARQUIVOS MAIS IMPORTANTES** (Uso Diário)

| Arquivo | Tamanho | Propósito |
|:--------|--------:|:----------|
| **dados/mapeamento-perguntas-cases-COMPLETO.csv** | 60 KB | Planilha Excel para treinar |
| **relatorios/SUMARIO_EXECUTIVO_1PAGINA.md** | 5 KB | Resumo rápido |
| **relatorios/VISUAL_ASCII_SUMARIO.md** | 20 KB | Dashboard visual |
| **guias/GUIA_RAPIDO_MAPEAMENTO.md** | 10 KB | Como usar na prática |

---

## 🚀 COMO USAR

### 📖 **Primeira Vez?**
```
1. Leia: README.md (este diretório)
2. Leia: relatorios/SUMARIO_EXECUTIVO_1PAGINA.md
3. Abra: dados/mapeamento-perguntas-cases-COMPLETO.csv (Excel)
4. Leia: guias/GUIA_RAPIDO_MAPEAMENTO.md
5. Comece a treinar!
```

### 🔧 **Executar Scripts**
```bash
# Estatísticas por LP
cd perguntas-cases/scripts
node stats_mapeamento.cjs

# Cases mais versáteis
node top_cases_versateis.cjs

# Regenerar mapeamento (após criar novos cases)
node map_questions_to_cases.cjs
```

---

## 📈 RESULTADO DA ANÁLISE

- ✅ **85 perguntas (49.7%)** com cases adequados
- ⚠️ **86 perguntas (50.3%)** sem cases (gaps)
- 🎯 **10/16 perguntas #1** cobertas (62.5%)
- 📊 **Score médio**: 62.1/100

### 🏆 TOP 3 LPs Fortes
1. Customer Obsession — 100% (12/12)
2. Dive Deep — 80% (8/10)
3. Disagree/Commit — 80% (8/10)

### 🔴 Gaps Críticos
- Best Employer — 0% (10 perguntas)
- Broad Responsibility — 0% (10 perguntas)
- 6 perguntas #1 descobertas

---

## 🎯 CONTEÚDO DE CADA ARQUIVO

### 📊 **dados/**

#### `mapeamento-perguntas-cases-COMPLETO.csv` (60 KB)
- **171 linhas** (1 por pergunta)
- **Colunas**: LP, Prioridade, Pergunta PT/EN, Tem Case?, Case ID, Title, Score, Reasoning
- **Uso**: Abrir no Excel, filtrar por LP ou prioridade
- **Formato**: CSV com encoding UTF-8

#### `mapeamento-perguntas-cases-COMPLETO.json` (89 KB)
- **171 objetos** JSON (mesmos dados do CSV)
- **Uso**: Scripts, análise programática
- **Formato**: JSON array

---

### 📈 **relatorios/**

#### `SUMARIO_EXECUTIVO_1PAGINA.md` (5 KB) ⭐
- **Conteúdo**: Resumo de 1 página imprimível
- **Seções**: Situação atual, forças, gaps críticos, plano de ação
- **Tempo de leitura**: 5 minutos

#### `VISUAL_ASCII_SUMARIO.md` (20 KB) ⭐
- **Conteúdo**: Dashboard visual com ASCII art
- **Seções**: Tabelas, top cases, gaps, plano 3 semanas
- **Tempo de leitura**: 10 minutos

#### `DASHBOARD_MAPEAMENTO_PERGUNTAS.md` (10 KB)
- **Conteúdo**: Análise estratégica detalhada
- **Seções**: Cobertura por LP, recomendações, métricas
- **Tempo de leitura**: 20 minutos

#### `gaps-perguntas-sem-cases.md` (30 KB)
- **Conteúdo**: Detalhamento dos 86 gaps
- **Organização**: Por LP, com reasoning de cada gap
- **Uso**: Identificar quais cases desenvolver

---

### 🚀 **guias/**

#### `GUIA_RAPIDO_MAPEAMENTO.md` (10 KB) ⭐
- **Conteúdo**: Como usar o mapeamento na prática
- **Seções**: 3 cenários, exemplos reais, workflow
- **Tempo de leitura**: 15 minutos

---

### 🔧 **scripts/**

#### `map_questions_to_cases.cjs`
- **Função**: Gera o mapeamento completo
- **Input**: `../../src/data/typicalQuestions.js` + cases em `../../src/data/<lp>/`
- **Output**: CSV, JSON, gaps.md
- **Execução**: `node map_questions_to_cases.cjs`

#### `stats_mapeamento.cjs` (2.5 KB)
- **Função**: Estatísticas detalhadas por LP
- **Input**: `../dados/mapeamento-perguntas-cases-COMPLETO.json`
- **Output**: Tabela no console
- **Execução**: `node stats_mapeamento.cjs`

#### `top_cases_versateis.cjs` (1.5 KB)
- **Função**: Lista cases mais versáteis
- **Input**: `../dados/mapeamento-perguntas-cases-COMPLETO.json`
- **Output**: Ranking de 31 cases
- **Execução**: `node top_cases_versateis.cjs`

---

## 📚 **Documentação (Raiz)**

#### `README.md`
- **Conteúdo**: Índice principal, quick start
- **Público**: Todos (ponto de entrada)

#### `INDICE_MAPEAMENTO.md` (12 KB)
- **Conteúdo**: Navegação entre todos os arquivos
- **Público**: Referência completa

#### `README_MAPEAMENTO_PERGUNTAS_CASES.md` (10 KB)
- **Conteúdo**: Documentação técnica completa
- **Público**: Usuários avançados

#### `ENTREGA_COMPLETA_MAPEAMENTO.md` (13 KB)
- **Conteúdo**: Resumo da entrega, metodologia
- **Público**: Revisão do trabalho realizado

---

## 🎯 FLUXO RECOMENDADO

### 👤 **Para Usuário Final** (Você)

```
DIA 1 (Setup - 1 hora)
├─ 1. Leia README.md (5 min)
├─ 2. Leia SUMARIO_EXECUTIVO_1PAGINA.md (5 min)
├─ 3. Explore CSV no Excel (20 min)
└─ 4. Leia GUIA_RAPIDO_MAPEAMENTO.md (15 min)

SEMANA 1 (Treinar - 10-15h)
└─ Treinar os 85 casos já mapeados

SEMANA 2 (Desenvolver - 15-20h)
└─ Desenvolver 9 novos casos para gaps

SEMANA 3 (Refinar - 10-15h)
└─ Mock interviews e refinamento
```

---

## 📞 COMANDOS ÚTEIS

### 🔍 **Ver Estrutura**
```bash
cd perguntas-cases
tree /F /A
```

### 📊 **Executar Análises**
```bash
cd scripts
node stats_mapeamento.cjs
node top_cases_versateis.cjs
```

### 🔄 **Atualizar Após Novos Cases**
```bash
cd scripts
node map_questions_to_cases.cjs
```

---

## ✅ CHECKLIST DE ORGANIZAÇÃO

- [x] Estrutura de pastas criada (dados, relatorios, guias, scripts)
- [x] Arquivos movidos para pastas corretas
- [x] Scripts atualizados com novos caminhos
- [x] Scripts testados e funcionando
- [x] README principal criado
- [x] Documentação atualizada
- [x] Conteúdo antigo removido

---

## 🎯 PRÓXIMOS PASSOS

1. ✅ **Revisar estrutura** (você está fazendo isso agora!)
2. 📖 **Ler SUMARIO_EXECUTIVO_1PAGINA.md** (5 min)
3. 📊 **Abrir CSV no Excel** (explorar dados)
4. 🎓 **Ler GUIA_RAPIDO_MAPEAMENTO.md** (aprender a usar)
5. 💪 **Começar preparação intensiva!**

---

## 📅 INFORMAÇÕES

- **Data da organização**: 2025-10-05
- **Total de arquivos**: 18
- **Total de pastas**: 4 subpastas + raiz
- **Tamanho total**: ~250 KB

---

**✅ Organização concluída! Tudo pronto para uso!** 🚀
