# 📊 Mapeamento de Perguntas → Cases

> **Análise completa de 171 perguntas típicas de entrevistas Amazon LP**  
> **Mapeadas para 72 cases STAR(L) validados**  
> **Data**: 2025-10-05 | **Cobertura**: 49.7% (85/171)

---

## 🚀 QUICK START

### 📖 **Primeiro Acesso? Comece aqui:**

1. **Leia o sumário executivo** (5 min)
   ```
   📄 relatorios/SUMARIO_EXECUTIVO_1PAGINA.md
   ```

2. **Abra a planilha no Excel** (uso diário)
   ```
   📊 dados/mapeamento-perguntas-cases-COMPLETO.csv
   ```

3. **Leia o guia prático** (15 min)
   ```
   📖 guias/GUIA_RAPIDO_MAPEAMENTO.md
   ```

---

## 📁 ESTRUTURA DE PASTAS

```
perguntas-cases/
├── README.md                          ← Você está aqui (índice principal)
├── INDICE_MAPEAMENTO.md               ← Navegação detalhada
├── README_MAPEAMENTO_PERGUNTAS_CASES.md ← Documentação completa
├── ENTREGA_COMPLETA_MAPEAMENTO.md     ← Resumo da entrega
│
├── 📊 dados/
│   ├── mapeamento-perguntas-cases-COMPLETO.csv   ⭐ PLANILHA EXCEL
│   └── mapeamento-perguntas-cases-COMPLETO.json  (formato estruturado)
│
├── 📈 relatorios/
│   ├── SUMARIO_EXECUTIVO_1PAGINA.md   ⭐ RESUMO 1 PÁGINA
│   ├── VISUAL_ASCII_SUMARIO.md        ⭐ DASHBOARD VISUAL
│   ├── DASHBOARD_MAPEAMENTO_PERGUNTAS.md (análise estratégica)
│   └── gaps-perguntas-sem-cases.md    (86 gaps detalhados)
│
├── 🚀 guias/
│   └── GUIA_RAPIDO_MAPEAMENTO.md      ⭐ COMO USAR
│
└── 🔧 scripts/
    ├── map_questions_to_cases.cjs     (gera mapeamento)
    ├── stats_mapeamento.cjs           (estatísticas por LP)
    └── top_cases_versateis.cjs        (cases mais versáteis)
```

---

## 📊 RESULTADO DA ANÁLISE

### 🎯 **Métricas Principais**

```
┌────────────────────────────────────────────────────────┐
│  Total de perguntas:           171                     │
│  Total de cases disponíveis:   72                      │
│  Cases únicos usados:          31 (43.1%)              │
│                                                         │
│  ✅ Com case adequado:         85 (49.7%)              │
│  ❌ Sem case adequado:         86 (50.3%)              │
│                                                         │
│  Perguntas #1 cobertas:        10/16 (62.5%)           │
│  Score médio dos matches:      62.1/100                │
└────────────────────────────────────────────────────────┘
```

### 🏆 **TOP 3 LPs Mais Preparados**
1. **Customer Obsession** — 100% (12/12) — Score 86.3
2. **Dive Deep** — 80% (8/10) — Score 74.4
3. **Disagree and Commit** — 80% (8/10) — Score 49.4

### 🔴 **Gaps Críticos**
- ❌ **Best Employer** — 0% (10 perguntas descobertas)
- ❌ **Broad Responsibility** — 0% (10 perguntas descobertas)
- ⚠️ **6 perguntas #1** sem cases (prioridade máxima)

---

## 🎯 USO POR CENÁRIO

### 📖 **Cenário 1: Treinar para LP Específico**

**Objetivo**: Preparar respostas para "Customer Obsession"

**Passos**:
1. Abra `dados/mapeamento-perguntas-cases-COMPLETO.csv`
2. Filtre coluna "LP" por "customer_obsession"
3. Veja: **12 perguntas**, todas com case `bradesco-next-customer-ritual`
4. Abra o case em `../src/data/customer_obsession/bradesco-next-customer-ritual.js`
5. Pratique contar STAR(L) adaptado para cada pergunta

---

### 🔍 **Cenário 2: Identificar Gaps**

**Objetivo**: Saber quais cases FALTAM desenvolver

**Passos**:
1. Abra `relatorios/SUMARIO_EXECUTIVO_1PAGINA.md`
2. Veja seção "🔴 GAPS CRÍTICOS"
3. Priorize: **6 perguntas #1** + **Best Employer** + **Broad Responsibility**
4. Para detalhes, abra `relatorios/gaps-perguntas-sem-cases.md`

---

### 🎓 **Cenário 3: Mock Interview (2 horas)**

**Objetivo**: Preparar para mock interview rápido

**Passos**:
1. Abra `dados/mapeamento-perguntas-cases-COMPLETO.csv`
2. Filtre coluna "Prioridade" = "ALTA"
3. Resultado: **16 perguntas** (as mais prováveis)
4. Você tem cases para **10/16** (62.5%)
5. Treine essas 10 + prepare "plano B" para as 6 descobertas

---

### 📊 **Cenário 4: Análise Estratégica**

**Objetivo**: Entender forças, fraquezas, priorizar

**Passos**:
1. Leia `relatorios/DASHBOARD_MAPEAMENTO_PERGUNTAS.md`
2. Run `scripts/stats_mapeamento.cjs` (estatísticas atualizadas)
3. Run `scripts/top_cases_versateis.cjs` (identificar MVPs)
4. Crie plano de ação baseado nos gaps

---

## 🔧 EXECUTAR SCRIPTS

### 📊 **Ver Estatísticas por LP**
```bash
cd perguntas-cases/scripts
node stats_mapeamento.cjs
```

**Output**: Tabela com cobertura, score médio, gaps por LP

---

### 🏆 **Ver Cases Mais Versáteis**
```bash
cd perguntas-cases/scripts
node top_cases_versateis.cjs
```

**Output**: Ranking dos 31 cases por número de perguntas que respondem

---

### 🔄 **Atualizar Mapeamento** (após criar novos cases)
```bash
cd perguntas-cases/scripts
node map_questions_to_cases.cjs
```

**Output**: Regenera todos os arquivos em `dados/` e `relatorios/`

---

## 🏆 TOP 5 CASES MAIS ÚTEIS (MVPs)

Estes cases respondem **múltiplas perguntas** — seus MVPs:

| # | Case | Perguntas | Score | LP |
|:-:|:-----|:---------:|:-----:|:---|
| 1 | bradesco-next-customer-ritual | 12 | 86.3 | Customer Obsession |
| 2 | unimed-ebitda-growth | 6 | 52.5 | Think Big |
| 3 | earn-trust-pix-bug-transparency | 6 | 54.2 | Earn Trust |
| 4 | hsbc-migration-leadership | 5 | 54.0 | Ownership |
| 5 | sicredi-churn-analysis | 5 | 72.0 | Dive Deep |

💡 **Dica**: Esses 5 cases cobrem **34 perguntas (19.9% do total)**!

---

## 💡 RECOMENDAÇÕES PRIORITÁRIAS

### 🔴 **URGENTE** (Esta Semana)
1. Desenvolver **2 cases para Best Employer** (10 perguntas)
2. Desenvolver **2 cases para Broad Responsibility** (10 perguntas)
3. Preencher **6 gaps nas perguntas #1**

### ⚠️ **ALTA PRIORIDADE** (Próximas 2 Semanas)
4. Fortalecer **Bias for Action** (20% → 70%)
5. Fortalecer **Hire and Develop** (18% → 70%)
6. Fortalecer **Learn and Be Curious** (30% → 70%)

### ✅ **MANUTENÇÃO**
7. Treinar os **85 casos já mapeados**
8. Focar nos **5 cases MVP**
9. Praticar **transições STAR(L)**

---

## 🎯 PLANO DE AÇÃO: 3 SEMANAS

### **SEMANA 1: Treinar Existentes**
- [ ] Revisar e praticar LPs com ≥60% cobertura (8 LPs)
- [ ] Focar nas 10 perguntas #1 já cobertas
- [ ] Treinar variações do mesmo case
- [ ] Meta: Dominar os 85 matches identificados

### **SEMANA 2: Desenvolver Novos**
- [ ] Best Employer: 2 cases
- [ ] Broad Responsibility: 2 cases
- [ ] Earn Trust: 1 case (feedback difícil)
- [ ] Learn/Curious: 1 case (aprendizado)
- [ ] Bias for Action: 2 cases (decisão rápida)
- [ ] Meta: Preencher 6 gaps críticos

### **SEMANA 3: Mock & Refinamento**
- [ ] Mock interview por LP (3-4/dia)
- [ ] Ajustar com feedback
- [ ] Mock completo (16 perguntas #1)
- [ ] Meta: 70%+ em todos os LPs

---

## 📚 DOCUMENTAÇÃO COMPLETA

### 📄 **Arquivos Principais**

| Arquivo | Quando Usar |
|:--------|:------------|
| **dados/mapeamento-perguntas-cases-COMPLETO.csv** | ⭐ Uso diário no Excel |
| **relatorios/SUMARIO_EXECUTIVO_1PAGINA.md** | ⭐ Resumo rápido (5 min) |
| **relatorios/VISUAL_ASCII_SUMARIO.md** | ⭐ Dashboard visual (10 min) |
| **guias/GUIA_RAPIDO_MAPEAMENTO.md** | ⭐ Como usar (15 min) |
| **relatorios/DASHBOARD_MAPEAMENTO_PERGUNTAS.md** | Análise estratégica |
| **relatorios/gaps-perguntas-sem-cases.md** | Gaps detalhados |
| **INDICE_MAPEAMENTO.md** | Navegação entre arquivos |
| **README_MAPEAMENTO_PERGUNTAS_CASES.md** | Referência completa |

---

## 🎓 FLUXO RECOMENDADO (FIRST TIME)

```
1. Leia: relatorios/SUMARIO_EXECUTIVO_1PAGINA.md      (5 min)
   └─→ Entender visão geral

2. Abra: dados/mapeamento-perguntas-cases-COMPLETO.csv (Excel)
   └─→ Explorar dados

3. Leia: guias/GUIA_RAPIDO_MAPEAMENTO.md              (15 min)
   └─→ Aprender a usar

4. Leia: relatorios/DASHBOARD_MAPEAMENTO_PERGUNTAS.md (20 min)
   └─→ Análise estratégica

5. Comece a treinar!                                   (10-20h)
   └─→ Focar nos 85 matches
```

**Tempo total de setup**: ~1 hora  
**Tempo total de preparação**: 2-3 semanas

---

## 📞 SUPORTE

### 🐛 **Problemas Técnicos**
- Scripts não rodam? → Verificar Node.js v14+: `node --version`
- CSV não abre? → Usar Excel ou Google Sheets

### 📖 **Dúvidas de Uso**
- Como filtrar CSV? → `guias/GUIA_RAPIDO_MAPEAMENTO.md`
- Como interpretar scores? → `guias/GUIA_RAPIDO_MAPEAMENTO.md`
- Qual arquivo usar? → `INDICE_MAPEAMENTO.md`

### 🔄 **Atualizar Após Novos Cases**
```bash
cd scripts
node map_questions_to_cases.cjs
node stats_mapeamento.cjs
```

---

## 🎯 MÉTRICAS DE SUCESSO

| Métrica | Atual | Target | Excelência |
|:--------|:------|:-------|:-----------|
| **Cobertura Geral** | 49.7% | 70%+ | 80%+ |
| **Perguntas #1** | 62.5% (10/16) | 90%+ (14+/16) | 100% (16/16) |
| **LPs com ≥60%** | 8/16 | 14+/16 | 16/16 |
| **Portfolio** | 72 cases | 90+ cases | 100+ cases |

---

## 📅 INFORMAÇÕES

- **Data da análise**: 2025-10-05
- **Versão**: 1.0
- **Portfólio**: 72 cases, 171 perguntas
- **Próxima revisão**: Após desenvolver novos cases

---

## 🎯 MENSAGEM FINAL

```
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║  Você tem uma BASE SÓLIDA — 49.7% de cobertura!                      ║
║                                                                       ║
║  Com 2-3 semanas de preparação focada:                               ║
║    ✅ Treinar os 85 casos já mapeados                                ║
║    ✅ Desenvolver 9 novos casos para gaps críticos                   ║
║    ✅ Praticar variações e transições STAR(L)                        ║
║                                                                       ║
║  Você estará PRONTO para a entrevista Amazon!                        ║
║                                                                       ║
║  💪 Focus. Commitment. Delivery.                                      ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

---

**🚀 Start here**: `relatorios/SUMARIO_EXECUTIVO_1PAGINA.md`  
**📚 Full docs**: `README_MAPEAMENTO_PERGUNTAS_CASES.md`  
**🎯 Quick guide**: `guias/GUIA_RAPIDO_MAPEAMENTO.md`

**Última atualização**: 2025-10-05
