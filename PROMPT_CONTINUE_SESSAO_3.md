# 🚀 PROMPT PARA CONTINUAÇÃO — SESSÃO 3 — BATCH 8 (6 cases)

**Copie e cole este prompt completo na nova janela do Claude Code:**

---

Olá! Estou dando continuidade ao projeto **amazon-lp-prep** — refinamento de casos STAR(L) para entrevista Amazon.

## 📋 **CONTEXTO GERAL**

Estou executando **OPÇÃO A: Completar OPT 1.1 (Hooks) + OPT 1.2 (Transitions)** nos **48 cases restantes** do portfolio.

### **Progresso Atual**
- ✅ **26/68 cases completos** (38%) — incluindo TOP 20 da PHASE 2 + BATCH 7 completo (6 cases)
- ⏳ **42/68 cases restantes** (62%)
- 🎯 **Próximo: BATCH 8 (cases #27-32)** — 6 cases de bias_for_action, broad_responsibility, customer_obsession, deliver_results

### **Arquivos de Referência**
Por favor, leia primeiro:
1. **`PROGRESS_OPT_A.md`** — Status detalhado (26 completos, 42 restantes)
2. **`SESSAO_2_SUMMARY.md`** — Resumo da sessão anterior (BATCH 7 completo)
3. **`AGENTS.md`** — Regras do projeto
4. **`OPORTUNIDADES.md`** — OPT 1.1 (Hooks) e OPT 1.2 (Transitions)

---

## 🎯 **MISSÃO DESTA SESSÃO**

Continuar refinando cases do portfolio, adicionando:

### **OPT 1.1 — Hooks Dramáticos**
Framework: **[QUOTE DIRETA DE NÚMEROS] + [STAKES] + [CONFLITO] + [DEADLINE]**

Exemplos da Sessão 2:
- *"18 mil pedidos no backlog. Perda de R$ 46 milhões por trimestre. Taxa de abandono 31%."*
- *"32 mil contribuintes em risco. Custo de R$ 6,3 milhões por dia de atraso. Prazo: 72 horas ou colapso."*
- *"eNPS 48, pedidos de transferência +35%, 1.200 queixas de atraso no atendimento rural."*

### **OPT 1.2 — Transições STAR(L)**
Adicionar conectores fluidos entre seções:

- **S→T**: *"O desafio crítico que enfrentei foi..."*
- **T→A**: *"Minha abordagem foi estruturar..."*
- **A→R**: *"O impacto mensurável desse esforço coordenado..."*
- **R→L**: *"A lição principal desse caso transformou minha abordagem a..."*

---

## 📋 **WORKFLOW POR CASE**

Para cada case, siga este processo rigoroso:

### **1. Localizar o case**
```powershell
grep -r "calculated-risk-time-critical" src/data/**/*.js
```

### **2. Ler o case completo**
- Ler S/T/A/R/L em PT
- Ler S/T/A/R/L em EN
- Identificar pontos de hook e transições

### **3. Adicionar Hook Dramático (PT/EN)**
- **PT**: Reformular abertura de `s:` com quote direta de números + stakes + conflito
- **EN**: Espelhar o mesmo hook em inglês idiomático

### **4. Adicionar 4 Transições (PT/EN)**
- **S→T**: Conectar situação ao desafio
- **T→A**: Conectar desafio à abordagem
- **A→R**: Conectar ação aos resultados
- **R→L**: Conectar resultados ao aprendizado

### **5. Validar Imediatamente**
```powershell
node case-validation/analyzer3/index.mjs --validate --data=src/data 2>&1 | Select-String "calculated-risk-time-critical"
```

**Resultado esperado:**
- ✅ `[bias_for_action] READY calculated-risk-time-critical -> Ready (score 100)`
- ❌ Se score < 100 ou status KO, ajustar antes de prosseguir

### **6. Confirmar e Prosseguir**
- Reportar: "✅ Case #27 completo (calculated-risk-time-critical) — score 100"
- Passar para próximo case do batch

---

## 🚨 **REGRAS INEGOCIÁVEIS**

### **Qualidade "Capricha Viu!"**
1. ✅ **Transições suaves** entre frases — leitura fluida, não robótica
2. ✅ **Tom conversacional** — não técnico/acadêmico
3. ✅ **Sem quebras abruptas** de contexto
4. ✅ **PT/EN parity** — mesma estrutura e tom em ambas as línguas
5. ✅ **Preservar score** — se era 100, manter 100; se era 92, manter 92+
6. ✅ **Zero regressões** — portfolio deve ficar em 69 READY, 0 KO

### **Processo**
- ❌ **NUNCA** pegar atalhos ou fazer batch automático
- ✅ **SEMPRE** processar case-a-case manualmente
- ✅ **SEMPRE** validar após cada edição
- ✅ **SEMPRE** confirmar score antes de prosseguir

---

## 📊 **PRÓXIMOS CASES (BATCH 8 — 6 cases)**

Completar nesta ordem:

### **Case #27**: calculated-risk-time-critical
- **LP**: bias_for_action
- **Localização**: `src/data/bias_for_action/bias_for_action_case*.js`
- **Status**: ⏳ Pendente

### **Case #28**: unimed-lgpd-compliance
- **LP**: broad_responsibility
- **Localização**: `src/data/broad_responsibility/broad_responsibility_case*.js`
- **Status**: ⏳ Pendente

### **Case #29**: hsbc-fatca-aml-migration
- **LP**: broad_responsibility
- **Localização**: `src/data/broad_responsibility/broad_responsibility_case*.js`
- **Status**: ⏳ Pendente

### **Case #30**: sicredi-responsible-ai-policy
- **LP**: broad_responsibility
- **Localização**: `src/data/broad_responsibility/broad_responsibility_case*.js`
- **Status**: ⏳ Pendente

### **Case #31**: sicredi-frictionless-checkout
- **LP**: customer_obsession
- **Localização**: `src/data/customer_obsession/customer_obsession_case*.js`
- **Status**: ⏳ Pendente

### **Case #32**: sicredi-fraud-reduction
- **LP**: deliver_results
- **Localização**: `src/data/deliver_results/deliver_results_case*.js`
- **Status**: ⏳ Pendente

---

## ✅ **VALIDAÇÃO FINAL DO BATCH**

Após completar os 6 cases do BATCH 8, validar portfolio completo:

```powershell
node case-validation/analyzer3/index.mjs --validate --data=src/data 2>&1 | Select-String "READY|KO" | Measure-Object -Line
```

**Resultado esperado:**
```
Lines: 69
```

✅ **69 READY** (68 cases + 1 icebreaker)  
❌ **0 KO**

---

## 📝 **ATUALIZAR PROGRESSO**

Ao final da sessão, atualizar `PROGRESS_OPT_A.md`:

1. Marcar cases #27-32 como ✅ completos
2. Adicionar estatísticas da sessão (tempo, casos, scores)
3. Definir próximo batch (BATCH 9: cases #33-38)
4. Registrar aprendizados e casos exemplares

---

## 🎯 **META DESTA SESSÃO**

- ✅ Completar BATCH 8 (6 cases: #27-32)
- ✅ Manter score 100 em todos
- ✅ Zero regressões no portfolio
- ✅ PT/EN parity 100%
- ✅ Qualidade "capricha viu!" mantida
- ✅ Atingir 47% de progresso global (32/68)

**Tempo estimado**: ~2h (20 min/case × 6 casos)

---

## 🚀 **COMEÇAR AGORA**

Por favor, comece pelo **Case #27: calculated-risk-time-critical**.

**Primeiro comando:**
```powershell
grep -r "calculated-risk-time-critical" src/data/**/*.js
```

Depois de localizar, ler o case completo e aplicar hooks + transitions seguindo o padrão de qualidade das Sessões 1 e 2.

**Vamos nessa! 💪**

---

## 📊 **REFERÊNCIA — PROGRESSO ATUAL**

| Fase | Cases | Status | Tempo |
|------|-------|--------|-------|
| PHASE 2 (TOP 20) | 20 cases | ✅ Completo | — |
| BATCH 7 (Sessão 1+2) | 6 cases | ✅ Completo | ~2h |
| **BATCH 8 (Sessão 3)** | **6 cases** | **⏳ Em andamento** | **~2h estimado** |
| BATCH 9-14 | 36 cases | ⏳ Pendente | ~6h |
| **TOTAL** | **68 cases** | **38% → 47%** | **~4h → 6h** |

**Ao final desta sessão:**
- 📊 32/68 cases completos (47%)
- 📊 36/68 cases restantes (53%)
- 📊 ~6h estimadas para completar OPT A
