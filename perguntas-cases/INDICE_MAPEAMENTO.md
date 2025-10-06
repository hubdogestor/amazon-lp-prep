# 📚 ÍNDICE: Mapeamento de Perguntas → Cases

> **Análise completa de 171 perguntas típicas de entrevistas Amazon LP**  
> **Mapeadas para 72 cases STAR(L) validados**  
> **Cobertura: 49.7% (85 perguntas com cases adequados)**

---

## 🚀 QUICK START

**Novato? Comece aqui:**
1. 📖 Leia o **VISUAL_ASCII_SUMARIO.md** (visão geral rápida)
2. 📊 Abra o **mapeamento-perguntas-cases-COMPLETO.csv** no Excel
3. 🎯 Siga o **GUIA_RAPIDO_MAPEAMENTO.md** (3 cenários práticos)

**Experiente? Vá direto para:**
- 📈 **DASHBOARD_MAPEAMENTO_PERGUNTAS.md** (análise executiva)
- 🔴 **gaps-perguntas-sem-cases.md** (gaps detalhados)
- 📊 Run `node stats_mapeamento.cjs` (estatísticas atualizadas)

---

## 📁 ESTRUTURA DOS ARQUIVOS

### 📊 **DADOS E PLANILHAS**

| Arquivo | Descrição | Quando Usar |
|:--------|:----------|:------------|
| **mapeamento-perguntas-cases-COMPLETO.csv** | Planilha principal com 171 perguntas mapeadas | ⭐ Uso diário: treinar perguntas por LP |
| **mapeamento-perguntas-cases-COMPLETO.json** | Dados estruturados (JSON) | Para análise programática / scripts |
| **gaps-perguntas-sem-cases.md** | Detalhamento dos 86 gaps (612 linhas) | Identificar quais cases desenvolver |

### 📈 **DASHBOARDS E RELATÓRIOS**

| Arquivo | Descrição | Quando Usar |
|:--------|:----------|:------------|
| **VISUAL_ASCII_SUMARIO.md** | Sumário visual com ASCII art | ⭐ Primeira leitura: visão geral rápida |
| **DASHBOARD_MAPEAMENTO_PERGUNTAS.md** | Dashboard executivo com tabelas e recomendações | Análise estratégica, priorização |
| **README_MAPEAMENTO_PERGUNTAS_CASES.md** | README completo com tudo | Referência completa do projeto |
| **INDICE_MAPEAMENTO.md** | Este índice (você está aqui!) | Navegar entre arquivos |

### 🚀 **GUIAS PRÁTICOS**

| Arquivo | Descrição | Quando Usar |
|:--------|:----------|:------------|
| **GUIA_RAPIDO_MAPEAMENTO.md** | Quick start com 3 cenários práticos | ⭐ Como usar o mapeamento na prática |

### 🔧 **SCRIPTS**

| Script | Descrição | Comando |
|:-------|:----------|:--------|
| **map_questions_to_cases.cjs** | Gera o mapeamento completo (171 perguntas → cases) | `node map_questions_to_cases.cjs` |
| **stats_mapeamento.cjs** | Gera estatísticas detalhadas por LP | `node stats_mapeamento.cjs` |
| **top_cases_versateis.cjs** | Lista cases mais versáteis (respondem mais perguntas) | `node top_cases_versateis.cjs` |

---

## 🎯 CENÁRIOS DE USO

### 📖 **Cenário 1: Treinar para LP Específico**

**Objetivo**: Preparar respostas para "Customer Obsession"

**Arquivos**:
1. `mapeamento-perguntas-cases-COMPLETO.csv` (filtrar por "customer_obsession")
2. `src/data/customer_obsession/bradesco-next-customer-ritual.js` (case recomendado)

**Resultado esperado**: Todas as 12 perguntas mapeadas para 1 case versátil (100% cobertura)

---

### 🔍 **Cenário 2: Identificar Gaps Urgentes**

**Objetivo**: Saber quais cases FALTAM desenvolver

**Arquivos**:
1. `DASHBOARD_MAPEAMENTO_PERGUNTAS.md` → seção "🔴 GAPS CRÍTICOS"
2. `gaps-perguntas-sem-cases.md` → detalhamento completo
3. `VISUAL_ASCII_SUMARIO.md` → visão visual dos gaps

**Gaps críticos identificados**: 6 perguntas #1 + 20 perguntas (Best Employer, Broad Responsibility)

---

### 🎓 **Cenário 3: Mock Interview Preparation**

**Objetivo**: Preparar para mock interview em 2 horas

**Arquivos**:
1. `mapeamento-perguntas-cases-COMPLETO.csv` (filtrar "Prioridade = ALTA")
2. `GUIA_RAPIDO_MAPEAMENTO.md` → seção "Cenário 3"

**Estratégia**: Focar nas 16 perguntas #1 (10 cobertas, 6 gaps) — as mais prováveis

---

### 📊 **Cenário 4: Análise Estratégica**

**Objetivo**: Entender forças, fraquezas e priorizar desenvolvimento

**Arquivos**:
1. `DASHBOARD_MAPEAMENTO_PERGUNTAS.md` (visão executiva)
2. Run `node stats_mapeamento.cjs` (estatísticas atualizadas)
3. Run `node top_cases_versateis.cjs` (identificar cases MVP)

**Métricas-chave**: Cobertura por LP, score médio, gaps críticos

---

### 🛠️ **Cenário 5: Atualizar Após Desenvolver Novos Cases**

**Objetivo**: Recalcular mapeamento após criar cases novos

**Passos**:
1. Adicionar novos cases em `src/data/<lp>/<case_id>.js`
2. Run `node map_questions_to_cases.cjs` (regenerar mapeamento)
3. Run `node stats_mapeamento.cjs` (ver nova cobertura)
4. Revisar `gaps-perguntas-sem-cases.md` (gaps restantes)

---

## 📊 ESTATÍSTICAS RÁPIDAS

```
┌────────────────────────────────────────────────────────┐
│  MÉTRICAS PRINCIPAIS                                   │
├────────────────────────────────────────────────────────┤
│  Total de perguntas:           171                     │
│  Total de cases disponíveis:   72                      │
│  Cases únicos usados:          31 (43.1%)              │
│                                                         │
│  Com case adequado:            85 (49.7%)              │
│  Sem case adequado:            86 (50.3%)              │
│                                                         │
│  Perguntas #1 cobertas:        10/16 (62.5%)           │
│  Score médio dos matches:      62.1/100                │
│                                                         │
│  LPs com 100% cobertura:       1 (Customer Obsession)  │
│  LPs com ≥60% cobertura:       8                       │
│  LPs com 0% cobertura:         2 (Best, Broad)         │
└────────────────────────────────────────────────────────┘
```

---

## 🏆 TOP 5 CASES MAIS ÚTEIS

Estes cases respondem **múltiplas perguntas** — seus MVPs:

1. **bradesco-next-customer-ritual** (12 perguntas, score 86.3)
2. **unimed-ebitda-growth** (6 perguntas, score 52.5)
3. **earn-trust-pix-bug-transparency** (6 perguntas, score 54.2)
4. **hsbc-migration-leadership** (5 perguntas, score 54.0)
5. **sicredi-churn-analysis** (5 perguntas, score 72.0)

💡 **Dica**: Pratique MUITO esses 5 cases — eles cobrem 34 perguntas (19.9% do total)!

---

## 🔴 GAPS MAIS CRÍTICOS

**Perguntas #1 sem case** (prioridade máxima):

1. ❌ **Deliver Results**: "Projeto desafiador superando obstáculos"
2. ❌ **Are Right A Lot**: "Decisão difícil com stakeholders"
3. ❌ **Learn and Be Curious**: "Como se mantém atualizado"
4. ❌ **Bias for Action**: "Risco calculado quando tempo crítico"
5. ❌ **Best Employer**: "Cria ambiente de trabalho melhor"
6. ❌ **Broad Responsibility**: "Considera impacto amplo"

**LPs com 0% cobertura** (urgente):

7. ❌ **Best Employer** — 10 perguntas descobertas
8. ❌ **Broad Responsibility** — 10 perguntas descobertas

---

## 💡 RECOMENDAÇÕES RÁPIDAS

### ✅ **O QUE VOCÊ JÁ TEM DE BOM**

- ✅ Customer Obsession: **100% coberto** (12/12) — excelente!
- ✅ Dive Deep: **80% coberto** (8/10) — muito forte
- ✅ Ownership: **70% coberto** (7/10) — boa base
- ✅ **31 cases únicos** respondendo 85 perguntas

### ⚠️ **O QUE PRECISA MELHORAR**

- ⚠️ Desenvolver **9 novos cases** para gaps críticos (6 perguntas #1 + Best/Broad)
- ⚠️ Fortalecer **Bias for Action** (20% → 70%)
- ⚠️ Fortalecer **Hire and Develop** (18% → 70%)
- ⚠️ Fortalecer **Learn and Be Curious** (30% → 70%)

### 🎯 **META FINAL**

- 🎯 **70%+ cobertura** em TODOS os 16 LPs
- 🎯 **90%+ perguntas #1** cobertas (14+/16)
- 🎯 **Portfolio de 90+ cases** (vs. 72 atual)

**Prazo**: 2-3 semanas de preparação intensiva

---

## 🗺️ ROADMAP DE ESTUDO

```
SEMANA 1: Treinar Casos Existentes
├── Dia 1-2: Customer Obsession, Dive Deep (100%, 80%)
├── Dia 3-4: Ownership, Invent/Simplify (70%, 70%)
└── Dia 5:   Frugality, Think Big (64%, 58%)

SEMANA 2: Desenvolver Casos Novos
├── Dia 1-2: Best Employer (2 cases), Broad Responsibility (2 cases)
├── Dia 3:   Earn Trust (1 case), Learn and Be Curious (1 case)
└── Dia 4-5: Bias for Action (2 cases), Deliver Results (1 case)

SEMANA 3: Mock Interviews & Refinamento
├── Dia 1-2: Mock por LP (3-4 LPs/dia)
├── Dia 3-4: Ajustar com feedback
└── Dia 5:   Mock completo (16 perguntas #1)
```

---

## 📞 AJUDA E SUPORTE

### 🐛 **Problemas Técnicos**

Se algum script não rodar:
```bash
# Verificar instalação Node.js
node --version  # Deve ser v14+

# Executar scripts
node map_questions_to_cases.cjs
node stats_mapeamento.cjs
node top_cases_versateis.cjs
```

### 📖 **Dúvidas Sobre Uso**

- **Como filtrar CSV?** → Ver `GUIA_RAPIDO_MAPEAMENTO.md` seção "LENDO O CSV"
- **Como interpretar scores?** → Ver `GUIA_RAPIDO_MAPEAMENTO.md` seção "INTERPRETANDO OS SCORES"
- **Como treinar variações?** → Ver `GUIA_RAPIDO_MAPEAMENTO.md` seção "EXEMPLOS REAIS"

### 🔄 **Atualizar Mapeamento**

Após adicionar novos cases:
```bash
node map_questions_to_cases.cjs
node stats_mapeamento.cjs
# Revisar: mapeamento-perguntas-cases-COMPLETO.csv
```

---

## 🎓 FLUXO RECOMENDADO (FIRST TIME)

```
1. 📖 Ler VISUAL_ASCII_SUMARIO.md (10 min)
   └─→ Entender visão geral

2. 📊 Abrir mapeamento-perguntas-cases-COMPLETO.csv (2 min)
   └─→ Explorar dados no Excel

3. 🎯 Ler GUIA_RAPIDO_MAPEAMENTO.md (15 min)
   └─→ Aprender a usar na prática

4. 📈 Ler DASHBOARD_MAPEAMENTO_PERGUNTAS.md (20 min)
   └─→ Análise estratégica profunda

5. 🔴 Ler gaps-perguntas-sem-cases.md (15 min)
   └─→ Identificar prioridades de desenvolvimento

6. 🚀 Começar a treinar! (10-20 horas)
   └─→ Focar nos 85 cases já mapeados
```

**Tempo total de setup**: ~1 hora  
**Tempo total de preparação**: 2-3 semanas

---

## 🔗 ARQUIVOS RELACIONADOS

### 📂 **Base de Conhecimento**
- `base-conhecimento/` — Documentos sobre Amazon LPs
- `src/data/` — Cases STAR(L) por LP
- `src/data/typicalQuestions.js` — Fonte das 171 perguntas

### ✅ **Validação e Checklist**
- `docs/CHECKLIST_VISUAL_v2.md` — Checklist de qualidade dos cases
- `docs/REVIEW_TRACKER.md` — Tracker de revisões

### 🔧 **Scripts Auxiliares**
- `timeline_checker_final.cjs` — Validar cronologia dos cases
- `analyze_questions_cases.cjs` — Scanner inicial de cases

---

## 📅 CONTROLE DE VERSÃO

| Versão | Data | Mudanças |
|:-------|:-----|:---------|
| **1.0** | 2025-10-05 | Lançamento inicial — 171 perguntas, 72 cases, 49.7% cobertura |

**Próxima revisão**: Após desenvolver novos cases para gaps críticos

---

## 🎯 MENSAGEM FINAL

```
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║  Você tem todos os dados de que precisa para uma preparação          ║
║  excepcional. Agora é hora de EXECUTAR:                              ║
║                                                                       ║
║  1. Treinar os 85 casos já mapeados                                  ║
║  2. Desenvolver 9 novos casos para gaps críticos                     ║
║  3. Praticar, praticar, praticar                                     ║
║                                                                       ║
║  💪 Você consegue! Boa sorte na entrevista Amazon!                   ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

---

**🚀 Start here**: `VISUAL_ASCII_SUMARIO.md`  
**📚 Full reference**: `README_MAPEAMENTO_PERGUNTAS_CASES.md`  
**🎯 Quick guide**: `GUIA_RAPIDO_MAPEAMENTO.md`  
**📊 Dashboard**: `DASHBOARD_MAPEAMENTO_PERGUNTAS.md`

**Última atualização**: 2025-10-05
