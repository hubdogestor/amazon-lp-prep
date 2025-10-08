# 🚀 PROMPT PARA CONTINUAÇÃO — SESSÃO 2 — OPÇÃO A (OPT 1.1 + 1.2)

**Copie e cole este prompt completo na nova janela do Claude Code:**

---

Olá! Estou dando continuidade ao projeto **amazon-lp-prep** — refinamento de casos STAR(L) para entrevista Amazon.

## 📋 **CONTEXTO GERAL**

Estou executando **OPÇÃO A: Completar OPT 1.1 (Hooks) + OPT 1.2 (Transitions)** nos **48 cases restantes** do portfolio.

### **Progresso Atual**
- ✅ **23/68 cases completos** (34%) — incluindo TOP 20 da PHASE 2 + 3 da Sessão 1
- ⏳ **45/68 cases restantes** (66%) — para completar nas próximas sessões
- 🎯 **Próximo: BATCH 7 (cases #24-26)** — sefaz-reverse-mentoring-program, sicredi-ml-credit-analysis, sefaz-emergency-tax-portal

### **Arquivos de Referência**
Por favor, leia primeiro:
1. **`PROGRESS_OPT_A.md`** — Status detalhado do progresso (23 cases completos, 45 restantes)
2. **`AGENTS.md`** — Regras do projeto e critérios de qualidade
3. **`OPORTUNIDADES.md`** — OPT 1.1 (Hooks) e OPT 1.2 (Transitions) definidos

---

## 🎯 **MISSÃO DESTA SESSÃO**

Continuar refinando cases do portfolio, adicionando:

### **OPT 1.1 — Hooks Dramáticos**
Framework: **[URGÊNCIA] + [STAKES] + [CONFLITO] + [QUOTE/NÚMERO]**

Exemplos de hooks aplicados na Sessão 1:
- *"Precisamos de um super app com feed social em 90 dias. Os concorrentes estao viralizando e estamos ficando para tras."*
- *"23% de perda no throughput. Se isso acontecer na Fan Fest com 140 mil torcedores, perdemos US$ 9M em multas."*
- *"Essa tabela fixa vai reduzir receitas em 11%. Os quatro parceiros gigantes representam 63% das chamadas..."*

### **OPT 1.2 — Transições STAR(L)**
Adicionar conectores fluidos entre seções:

- **S→T**: *"O desafio crítico que enfrentei foi..."*
- **T→A**: *"Minha abordagem foi..."*
- **A→R**: *"O impacto mensurável desse esforço coordenado..."*
- **R→L**: *"A lição principal desse caso transformou..."*

---

## 📋 **WORKFLOW POR CASE**

Para cada case, siga este processo rigoroso:

### **1. Localizar o case**
```powershell
grep -r "sefaz-reverse-mentoring-program" src/data/**/*.js
```

### **2. Ler o case completo**
- Ler S/T/A/R/L em PT
- Ler S/T/A/R/L em EN
- Identificar pontos de hook e transições

### **3. Adicionar Hook Dramático (PT/EN)**
- **PT**: Reformular abertura de `s:` com urgência + stakes + conflito
- **EN**: Espelhar o mesmo hook em inglês idiomático

### **4. Adicionar 4 Transições (PT/EN)**
- **S→T**: Conectar situação ao desafio
- **T→A**: Conectar desafio à abordagem
- **A→R**: Conectar ação aos resultados
- **R→L**: Conectar resultados ao aprendizado

### **5. Validar Imediatamente**
```powershell
node case-validation/analyzer3/index.mjs --validate --data=src/data 2>&1 | Select-String "sefaz-reverse-mentoring-program"
```

**Resultado esperado:**
- ✅ `[best_employer] READY sefaz-reverse-mentoring-program -> Ready (score 100)`
- ❌ Se score < 100 ou status KO, ajustar antes de prosseguir

### **6. Confirmar e Prosseguir**
- Reportar: "✅ Case #24 completo (sefaz-reverse-mentoring-program) — score 100"
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

## 📊 **PRÓXIMOS CASES (BATCH 7 — 3 restantes)**

Completar nesta ordem:

### **Case #24**: sefaz-reverse-mentoring-program
- **LP**: best_employer
- **Localização**: `src/data/best_employer/best_employer_case*.js`
- **Status**: ⏳ Pendente

### **Case #25**: sicredi-ml-credit-analysis
- **LP**: bias_for_action
- **Localização**: `src/data/bias_for_action/bias_for_action_case*.js`
- **Status**: ⏳ Pendente

### **Case #26**: sefaz-emergency-tax-portal
- **LP**: bias_for_action
- **Localização**: `src/data/bias_for_action/bias_for_action_case*.js`
- **Status**: ⏳ Pendente

---

## ✅ **VALIDAÇÃO FINAL DO BATCH**

Após completar os 3 cases do BATCH 7, validar portfolio completo:

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

1. Marcar cases #24-26 como ✅ completos
2. Adicionar estatísticas da sessão (tempo, casos, scores)
3. Definir próximo batch (BATCH 8: cases #27-32)
4. Registrar aprendizados e casos exemplares

---

## 🎯 **META DESTA SESSÃO**

- ✅ Completar BATCH 7 (3 cases: #24-26)
- ✅ Manter score 100 em todos
- ✅ Zero regressões no portfolio
- ✅ PT/EN parity 100%
- ✅ Qualidade "capricha viu!" mantida

**Tempo estimado**: ~1h (20 min/case × 3 casos)

---

## 🚀 **COMEÇAR AGORA**

Por favor, comece pelo **Case #24: sefaz-reverse-mentoring-program**.

**Primeiro comando:**
```powershell
grep -r "sefaz-reverse-mentoring-program" src/data/**/*.js
```

Depois de localizar, ler o case completo e aplicar hooks + transitions seguindo o padrão de qualidade da Sessão 1.

**Vamos nessa! 💪**
