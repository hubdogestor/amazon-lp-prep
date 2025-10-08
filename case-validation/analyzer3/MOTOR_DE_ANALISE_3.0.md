# Motor de Análise 3.0 — Documentação Completa

**Versão**: 3.1.0  
**Última Atualização**: 07 de Outubro de 2025  
**Status**: ✅ VALIDADO E OPERACIONAL

---

## 📋 ÍNDICE

1. [Visão Geral](#visão-geral)
2. [Pipeline de Execução](#pipeline-de-execução)
3. [Como Usar](#como-usar)
4. [Sistema de Scoring](#sistema-de-scoring)
5. [Saídas e Relatórios](#saídas-e-relatórios)
6. [Troubleshooting](#troubleshooting)
7. [Validação e Testes](#validação-e-testes)

---

## 🎯 VISÃO GERAL

O Motor 3.0 é um sistema automatizado de análise e validação de cases STAR(L) para preparação de entrevistas Amazon. Ele:

✅ **Valida** estrutura, conteúdo e qualidade de 68 cases  
✅ **Detecta** dealbreakers e warnings automaticamente  
✅ **Calcula** score 0-100 baseado em heurísticas Amazon  
✅ **Gera** previews com sugestões de melhoria  
✅ **Produz** relatórios JSON/CSV para análise  

**Status Atual**: ✅ OPERACIONAL (validado em 07/10/2025)

---

## ⚙️ PIPELINE DE EXECUÇÃO

### **1. Loader (`loader.mjs`)**
- **Função**: Carrega todos os cases de `src/data/**/*.js`
- **Processo**:
  - Varre diretórios recursivamente
  - Ignora arquivos de configuração (index.js, config.js, etc.)
  - Executa cada case em sandbox VM seguro
  - Anexa metadados: `lp_id`, `case_id`, `__load_warnings`
- **Output**: Array de cases carregados

### **2. Linter (`linter.mjs`)**
- **Função**: Valida estrutura e shape dos cases
- **Validações**:
  - ✅ Presença de campos obrigatórios (id, title, company, period, pt, en, fups)
  - ✅ STAR(L) completo em PT e EN (s, t, a, r, l)
  - ✅ Exatamente 10 FUPs (q, a, q_en, a_en)
  - ✅ Período válido (formato MM/YYYY-MM/YYYY)
  - ✅ Paridade PT/EN (mesmas seções, tamanhos similares)
- **Output**: `{ ok: boolean, issues: [], warnings: [] }`
  - **Issues**: Bloqueadores (impedem Ready)
  - **Warnings**: Pontos de atenção (reduzem score)

### **3. Heuristics (`heuristics.mjs`)**
- **Função**: Análise profunda de qualidade do conteúdo
- **Análises**:
  - 📊 **Métricas**: Conta métricas quantitativas (financeiras, operacionais, cliente)
  - 👥 **Customer Obsession**: Detecta sinais de foco no cliente
  - 🔢 **Ratio EU:NÓS**: Calcula protagonismo individual
  - ⚙️ **Mecanismos**: Identifica processos/frameworks replicáveis
  - ⚔️ **Conflito**: Detecta tensão dramática e resistência
  - 📅 **Recency**: Calcula antiguidade do case
  - 🌐 **Paridade PT/EN**: Verifica simetria entre versões
- **Output**: Score 0-100 + Status (Ready/Polish/Rewrite/KO)

### **4. Rewriter (`rewriter.mjs`)**
- **Função**: Gera scorecard e sugestões de melhoria
- **Processo**:
  - Converte dealbreakers em ações corretivas
  - Transforma warnings em sugestões específicas
  - Cria plano de ação executável
  - **NÃO ALTERA** o case original (apenas preview)
- **Output**: `__scorecard` com insights + action plan

### **5. FUPs (`fups.mjs`)**
- **Função**: Valida e complementa Follow-Up Questions
- **Processo**:
  - Mantém FUPs existentes (se boas)
  - Sugere FUPs adicionais de biblioteca curada:
    - Core questions (métricas, decisões)
    - Customer-focused questions
    - Mechanism questions
    - LP-specific questions
  - Garante simetria PT/EN
- **Output**: 10 FUPs completas (q, a, q_en, a_en)

### **6. Reporter (`reporter.mjs`)**
- **Função**: Gera relatórios consolidados
- **Arquivos Criados**:
  - `review-status.json`: Análise detalhada de todos os cases
  - `review-status.csv`: Versão tabular para Excel
  - `scan_summary.md`: Agregados e estatísticas
- **Conteúdo**: Status, scores, dealbreakers, warnings, positives

### **7. Preview (`preview/*.preview.json`)**
- **Função**: Gera diff com caso original + sugestões
- **Estrutura**:
  ```json
  {
    "original": { /* case original intacto */ },
    "analysis": {
      "lint": { /* resultados lint */ },
      "heur": { /* heurísticas + scoring */ },
      "score": 100,
      "status": "Ready"
    },
    "suggestions": { /* sugestões de melhoria */ }
  }
  ```

---

## 🚀 COMO USAR

### **Comando 1: Validar Todos os Cases**

```bash
npm run validate:cases
```

**O que faz**:
- Varre todos os 68 cases em `src/data/`
- Executa lint + heuristics em cada um
- Gera `review-status.json` e `.csv`
- **NÃO gera previews** (apenas análise)

**Quando usar**:
- Antes de qualquer refinamento
- Para entender estado global do portfólio
- Para identificar cases KO/blockers

**Output**:
```
[customer_obsession] READY unimed-customer-experience -> Ready (score 100)
[ownership] KO bradesco-next-delay -> KO (score 45)
[analyzer3] Relatórios em case-validation/analyzer3/reports
```

---

### **Comando 2: Refinar LP Específico**

```bash
npm run refine:lp -- --lp=customer_obsession
```

**O que faz**:
- Processa TODOS os 68 cases novamente
- Gera `preview/*.preview.json` para análise
- Atualiza `review-status.json`

**Quando usar**:
- Após identificar cases que precisam melhoria
- Para gerar sugestões de refinamento
- Antes de revisar manualmente cases

**Output**:
```
[customer_obsession] READY unimed-customer-experience -> Ready (score 100)
[analyzer3] Previews prontos em 'case-validation/analyzer3/preview/'
```

---

### **Comando 3: Refinar Case Específico** (opcional)

```bash
npm run refine:one -- --lp=ownership --case=hsbc-migration-leadership
```

**O que faz**:
- Processa apenas 1 case específico
- Gera preview individual
- Útil para testes focados

---

## 📊 SISTEMA DE SCORING

### **Fórmula Base**

```
Score = 50 (base)
  + Métricas (até 12 pontos)
  + Customer Signals (até 6 pontos)
  + Mecanismos (até 8 pontos)
  + Conflito (até 8 pontos)
  + Hook (até 6 pontos)
  + Transições (até 4 pontos)
  + Mic-drop (até 6 pontos)
  - (Warnings × 5 pontos)
  - (Dealbreakers × 40 pontos)
```

**Score Máximo**: 100 pontos

---

### **Dealbreakers (Bloqueadores Críticos)**

| Dealbreaker | Penalidade | Descrição |
|-------------|-----------|-----------|
| **Ausência de Customer Obsession** | -40 pts | Nenhum sinal de foco no cliente |
| **Menos de 8 métricas** | -40 pts | Insuficiência de evidências quantitativas |
| **Ratio EU:NÓS < 2:1** | -40 pts | Protagonismo individual insuficiente |
| **Case muito antigo (>9 anos)** | -40 pts | Relevância questionável |
| **Lint blocker** | Score 0 | Estrutura inválida |

**Efeito**: Qualquer dealbreaker → Status **KO**

---

### **Warnings (Pontos de Atenção)**

| Warning | Penalidade | Descrição |
|---------|-----------|-----------|
| **Transições STAR(L) pouco claras** | -5 pts | Narrativa robótica, sem fluidez |
| **Sem métricas financeiras** | -5 pts | Falta impacto em ROI/receita/custo |
| **Sem métricas operacionais** | -5 pts | Falta SLA/throughput/latency |
| **Sem métricas de cliente** | -5 pts | Falta NPS/churn/satisfação |
| **Sem conflito/resistência** | -5 pts | Ausência de tensão dramática |
| **Sem mecanismos** | -5 pts | Falta processos replicáveis |
| **Hook fraco** | -5 pts | Abertura genérica |
| **Mic-drop fraco** | -5 pts | Learning genérico |
| **Paridade PT/EN desequilibrada** | -5 pts | Diferença >25% entre versões |
| **Case antigo (>7 anos)** | -5 pts | Atenção à relevância |

**Efeito**: Múltiplos warnings → Status **Needs-Polish** ou **Needs-Rewrite**

---

### **Positives (Highlights)**

- ✅ Customer Obsession forte (≥3 sinais)
- ✅ Métricas robustas (≥8)
- ✅ Ratio EU:NÓS saudável (≥3:1)
- ✅ Conflito/endurecimento presente
- ✅ Mecanismos/repeatability destacados
- ✅ Bias for Action robusto (para LP específico)

---

### **Status Atribuídos**

| Status | Condição | Score | Ação |
|--------|----------|-------|------|
| **Ready** | 0 dealbreakers, <3 warnings | 87-100 | ✅ Pronto para uso |
| **Needs-Polish** | 0 dealbreakers, 3-5 warnings | 75-86 | 🟡 Ajustes menores |
| **Needs-Rewrite** | 0 dealbreakers, >5 warnings | 60-74 | 🟠 Revisão substancial |
| **KO** | ≥1 dealbreaker | <60 | 🔴 Bloqueador crítico |
| **Lint-Blocker** | Lint issues críticos | 0 | 🚫 Estrutura inválida |

---

## 📁 SAÍDAS E RELATÓRIOS

### **1. review-status.json**

**Localização**: `case-validation/analyzer3/reports/review-status.json`

**Estrutura**:
```json
{
  "run_at": "2025-10-07T23:58:56.999Z",
  "data_dir": "src/data",
  "total_cases": 80,
  "filtered_cases": 80,
  "results": [
    {
      "lp_id": "customer_obsession",
      "case_id": "unimed-customer-experience",
      "title_pt": "...",
      "title_en": "...",
      "status": "Ready",
      "lint": { "ok": true, "issues": [], "warnings": [] },
      "heur": {
        "score": 100,
        "status": "Ready",
        "dealbreakers": [],
        "warnings": [],
        "positives": ["..."],
        "metricsCount": 55,
        "ratio": { "ratio": 1, "counts": { "eu": 6, "nos": 0 } },
        "customerSignals": 18,
        "conflictSignals": true,
        "mechanismSignals": 3
      }
    }
  ]
}
```

**Uso**: Análise programática, integração com scripts

---

### **2. review-status.csv**

**Localização**: `case-validation/analyzer3/reports/review-status.csv`

**Colunas**:
- `lp_id`, `case_id`, `title_pt`, `title_en`
- `status`, `score`
- `dealbreakers`, `warnings`, `positives`
- `metrics_count`, `eu_nos_ratio`, `recency_months`

**Uso**: Análise em Excel, filtros, gráficos

---

### **3. Previews (.preview.json)**

**Localização**: `case-validation/analyzer3/preview/<case-id>.preview.json`

**Uso**: Revisão humana antes de merge

---

## 🔧 TROUBLESHOOTING

### **Problema: "Lint-Blocker" em arquivos auxiliares**

**Sintoma**:
```
[dataStructure.js] LINT dataStructure -> Lint-Blocker (score 0)
[icebreaker.js] LINT undefined -> Lint-Blocker (score 0)
```

**Causa**: Arquivos não são cases reais (são estruturas auxiliares)

**Solução**: **NORMAL** — Esses arquivos não afetam os 68 cases reais

---

### **Problema: Cases com score baixo**

**Sintoma**: Case com score <80

**Diagnóstico**:
1. Verificar `dealbreakers` no `review-status.json`
2. Verificar `warnings`
3. Ler sugestões no `preview/*.preview.json`

**Ação**:
- Dealbreaker → Correção obrigatória
- Warning → Melhoria recomendada

---

### **Problema: Preview não reflete mudanças**

**Causa**: Previews são gerados apenas com `--refine`

**Solução**: Rodar `npm run refine:lp` novamente

---

## ✅ VALIDAÇÃO E TESTES

### **Status de Validação**

✅ **Testado em**: 07 de Outubro de 2025  
✅ **Cases processados**: 68/68 (100%)  
✅ **Relatórios gerados**: JSON + CSV ✅  
✅ **Previews gerados**: 68 arquivos ✅  
✅ **Performance**: ~2 segundos para 80 arquivos  

**Relatório Completo**: Ver `MOTOR_3.0_VALIDATION_REPORT.md`

---

### **Estatísticas da Última Execução**

| Métrica | Valor |
|---------|-------|
| **Cases Ready** | 61 (90%) |
| **Cases KO** | 3 (4%) |
| **Cases Polish** | 1 (1%) |
| **Score médio** | 94.7 |
| **Cases score 100** | 56 (82%) |

---

## 🎯 BOAS PRÁTICAS

### **✅ DO**

1. ✅ Rodar `validate:cases` antes de qualquer refinamento
2. ✅ Revisar `review-status.csv` para visão geral
3. ✅ Analisar previews antes de aplicar mudanças
4. ✅ Corrigir cases KO antes de polish
5. ✅ Usar `refine:lp` para lotes de LP

### **❌ DON'T**

1. ❌ Aplicar mudanças sem revisar previews
2. ❌ Ignorar dealbreakers
3. ❌ Confiar 100% em scoring automático (revisão humana essencial)
4. ❌ Sobrescrever cases sem backup

---

## 🚀 PRÓXIMAS EXTENSÕES

### **Planejadas**

1. 🔵 **Filtro de arquivos auxiliares**: Excluir dataStructure.js, icebreaker.js, etc.
2. 🔵 **Scoring dimensional**: Breakdown por hook/transições/métricas/conflito/learning
3. 🔵 **Sugestões específicas**: Melhorar qualidade das recomendações
4. 🔵 **Dashboard visual**: HTML com gráficos Chart.js

### **Futuro**

5. 🔵 **Writer automático**: Flag `--write` para sobrescrever cases (com validação dupla)
6. 🔵 **FUPs por LP**: Catálogos específicos para cada Leadership Principle
7. 🔵 **AI-powered suggestions**: GPT-4 para sugestões contextuais

---

**Documentação atualizada em**: 07 de Outubro de 2025  
**Versão**: 3.1.0  
**Status**: ✅ VALIDADO E OPERACIONAL

