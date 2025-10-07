# ✅ Ownership - Checklist de Execução

**Data Início**: 2025-10-06  
**Método**: Processo sistemático (mesmo que Bias for Action)  
**Meta**: Score médio 66.5 → 87 (+20.5 pontos)

---

## 📋 PHASES OVERVIEW

- [ ] **PHASE 1**: Remapeamentos Q0,Q1,Q3,Q6 (2h) — **+145 pontos**
- [ ] **PHASE 2**: FULL Review Q8 (45 min) — **+10 pontos**
- [ ] **PHASE 3**: FULL Review Q9 (30 min) — **+10 pontos**
- [ ] **PHASE 4**: Q7 Novo Case ou FULL (60 min) — **+40 pontos**
- [ ] **PHASE 5**: Final Validation (20 min)

**Ganho Total Projetado**: +205 pontos (média +20.5)  
**Tempo Total**: ~4h15min

---

## 🔥 PHASE 1: REMAPEAMENTOS (2h)

### Q0: "Responsabilidade além do escopo" (55 → 85, +30)

- [ ] **1.1 Analisar candidatos**
  - [ ] sefaz-emergency-rollback-no-approval (case7)
  - [ ] Verificar se já usado excessivamente
  
- [ ] **1.2 Remapear**
  - [ ] Old: hsbc-migration-leadership (55)
  - [ ] New: sefaz-emergency-rollback (85)
  - [ ] Update `questionsToCasesMapping.js`
  
- [ ] **1.3 Justificativa**
  - Tech Lead tomou decisão de NEGÓCIO (além do escopo técnico)
  - Assumiu responsabilidade sem autorização (ownership máximo)
  
- [ ] **1.4 Validar**
  - [ ] npm run build
  - [ ] Verificar score esperado

---

### Q1: "Além da função" (45 → 85, +40)

- [ ] **1.1 Analisar candidatos**
  - [ ] sicredi-ml-credit-analysis (Bias for Action case2)
  - [ ] unimed-ai-authorization
  - [ ] Verificar disponibilidade
  
- [ ] **1.2 Decisão**
  - [ ] Se sicredi-ml disponível: usar (pioneiro ML = além função PM)
  - [ ] Se não: buscar alternativa
  
- [ ] **1.3 Remapear**
  - [ ] Old: hsbc-migration-leadership (45)
  - [ ] New: [case escolhido] (85)
  - [ ] Update `questionsToCasesMapping.js`
  
- [ ] **1.4 Justificativa**
  - PM fazendo ML engineering (além da função tradicional)
  - Primeiro a implementar (pioneirismo)
  
- [ ] **1.5 Validar**
  - [ ] npm run build

---

### Q3: "Não é sua responsabilidade" (45 → 85, +40)

- [ ] **1.1 Analisar**
  - [ ] sefaz-emergency-rollback (case7) — CANDIDATO FORTE
  - [ ] Verificar se FUP pode diferenciar de Q0
  
- [ ] **1.2 Remapear**
  - [ ] Old: hsbc-migration-leadership (45)
  - [ ] New: sefaz-emergency-rollback (85)
  - [ ] Update `questionsToCasesMapping.js`
  
- [ ] **1.3 Justificativa**
  - "Não era minha responsabilidade decidir rollback sem gestor"
  - **Never say "not my job"** — core Ownership
  
- [ ] **1.4 Nota**
  - ⚠️ Mesmo case que Q0, mas FUPs DIFERENTES:
    - Q0: Foco em "além do escopo técnico"
    - Q3: Foco em "not my job / assumiu problema de negócio"
  
- [ ] **1.5 Validar**
  - [ ] npm run build

---

### Q6: "Ineficiência + ownership" (50 → 85, +35)

- [ ] **1.1 Analisar candidatos**
  - [ ] unimed-ai-authorization (Invent & Simplify)
  - [ ] long-term-tradeoff (case6) — já usado 2x (Q2, Q4)
  - [ ] bradesco-international-payments (case3)
  
- [ ] **1.2 Decisão**
  - [ ] Preferência: unimed-ai (AI para resolver ineficiência)
  - [ ] Alternativa: bradesco-international (se disponível)
  
- [ ] **1.3 Remapear**
  - [ ] Old: payment-incidents-prevention-mechanism (50)
  - [ ] New: [case escolhido] (85)
  - [ ] Update `questionsToCasesMapping.js`
  
- [ ] **1.4 Justificativa**
  - Identificou ineficiência (autorização manual lenta)
  - Tomou ownership (criou solução AI)
  - Long-term thinking (mecanismo escalável)
  
- [ ] **1.5 Validar**
  - [ ] npm run build

---

### Checkpoint PHASE 1

- [ ] **Validação Conjunta**
  - [ ] 4 questões remapeadas
  - [ ] Scores: Q0(85), Q1(85), Q3(85), Q6(85)
  - [ ] Ganho: +145 pontos
  - [ ] Build verde
  - [ ] Sem overuse crítico (nenhum case >3x)

---

## ⚠️ PHASE 2: FULL REVIEW Q8 (45 min)

### Q8: "Projeto início ao fim" (80 → 90, +10)

- [ ] **2.1 Ler case atual**
  - [ ] File: `src/data/ownership/ownership_case1.js`
  - [ ] ID: hsbc-migration-leadership
  - [ ] Current score: 80
  
- [ ] **2.2 Analisar gaps**
  - [ ] Falta ênfase em end-to-end ownership
  - [ ] Falta clareza sobre cada fase (planning → delivery → sustain)
  - [ ] Falta métricas por fase
  
- [ ] **2.3 Expandir STAR**
  - [ ] **Situation** (+5 linhas): Contexto de ownership desde RFP até handoff
  - [ ] **Task** (mantém): Responsabilidade end-to-end
  - [ ] **Action** (+10 linhas):
    - [ ] Planning: Como estruturou governança
    - [ ] Execution: Como garantiu entrega por fase
    - [ ] Monitoring: Métricas de acompanhamento
    - [ ] Handoff: Transição para suporte
  - [ ] **Result** (+5 linhas): Métricas de sucesso em cada fase
  - [ ] **Learning** (+5 linhas): Framework de ownership end-to-end
  
- [ ] **2.4 Adicionar FUPs**
  - [ ] **FUP novo 1**: Como garantiu ownership de stakeholders (não só técnico)
  - [ ] **FUP novo 2**: Como lidou com riscos end-to-end
  - [ ] **FUP novo 3**: Como garantiu sustain após delivery
  
- [ ] **2.5 Update mapping**
  - [ ] Score: 80 → 90
  - [ ] Update `questionsToCasesMapping.js`
  
- [ ] **2.6 Validar**
  - [ ] npm run build

---

## ⚠️ PHASE 3: FULL REVIEW Q9 (30 min)

### Q9: "Mecanismo prevenção" (75 → 85, +10)

- [ ] **3.1 Ler case atual**
  - [ ] File: `src/data/ownership/ownership_case4.js`
  - [ ] ID: hsbc-payment-reconciliation
  - [ ] Current score: 75
  
- [ ] **3.2 Analisar gaps**
  - [ ] Mecanismo não é central do case
  - [ ] Falta impacto do mecanismo em problemas futuros
  - [ ] Falta transferibilidade
  
- [ ] **3.3 Expandir STAR**
  - [ ] **Result** (+8 linhas):
    - [ ] Mecanismo reduziu X% incidentes futuros
    - [ ] Métricas: Antes vs. Depois (incidentes, tempo resolução)
    - [ ] Escalabilidade: Replicado em quantos projetos
  - [ ] **Learning** (+5 linhas):
    - [ ] Mecanismo transferível (3 princípios)
    - [ ] Replicação: Usado em projeto Y, Z
  
- [ ] **3.4 Adicionar FUP**
  - [ ] **FUP novo**: "Como o mecanismo preveniu problemas em projetos futuros?"
  
- [ ] **3.5 Update mapping**
  - [ ] Score: 75 → 85
  - [ ] Update `questionsToCasesMapping.js`
  
- [ ] **3.6 Validar**
  - [ ] npm run build

---

## 🔥 PHASE 4: Q7 ESTRATÉGIA (60 min)

### Q7: "Responsabilidade por erros" (45 → 85, +40)

**Decisão Estratégica**:

#### Opção A: Criar Novo Case (60 min)
- [ ] **4A.1 Identificar cenário**
  - [ ] Erro real em projeto (deploy, decisão, estimativa)
  - [ ] Exemplo: Erro em migração Bradesco, assumiu, corrigiu
  
- [ ] **4A.2 Criar case**
  - [ ] File: `src/data/ownership/ownership_case8.js`
  - [ ] ID: [definir]
  - [ ] STAR completo (50+ linhas)
  - [ ] 10 FUPs
  
- [ ] **4A.3 Integrar**
  - [ ] Add import em `index.js`
  - [ ] Add to cases array
  - [ ] Update mapping Q7
  
- [ ] **4A.4 Validar**
  - [ ] npm run build
  - [ ] Score target: 85-90

#### Opção B: FULL Review hsbc-payment (60 min)
- [ ] **4B.1 Ler case**
  - [ ] File: ownership_case4.js
  - [ ] Identificar se há erro implícito
  
- [ ] **4B.2 Reescrever STAR**
  - [ ] Situation: Erro/problema que você causou ou assumiu
  - [ ] Task: Responsabilidade de corrigir
  - [ ] Action: Como assumiu, comunicou, corrigiu
  - [ ] Result: Impacto da correção
  - [ ] Learning: Mecanismo para prevenir
  
- [ ] **4B.3 Adicionar FUPs**
  - [ ] FUP 1: Como comunicou erro para stakeholders
  - [ ] FUP 2: Como garantiu não recorrência
  
- [ ] **4B.4 Update mapping**
  - [ ] Score: 45 → 80-85
  
- [ ] **4B.5 Validar**
  - [ ] npm run build

**DECISÃO**: [ ] Opção A (novo case) [ ] Opção B (FULL review)

---

## ✅ PHASE 5: FINAL VALIDATION (20 min)

### 5.1 Update CSV/JSON
- [ ] **5.1.1 CSV**
  - [ ] Update 7 linhas Ownership em `mapeamento-perguntas-cases-COMPLETO.csv`
  - [ ] Q0, Q1, Q3, Q6, Q7, Q8, Q9
  
- [ ] **5.1.2 JSON**
  - [ ] Update 7 objetos em `mapeamento-perguntas-cases-COMPLETO.json`
  - [ ] has_case, case_id, case_title, score, reasoning

### 5.2 Run Tests
- [ ] **5.2.1 Tests**
  - [ ] `npm test`
  - [ ] Validate 31 tests passing
  
- [ ] **5.2.2 Build**
  - [ ] `npm run build`
  - [ ] Check bundle size stable

### 5.3 Generate Reports
- [ ] **5.3.1 Coverage Report**
  - [ ] Create `OWNERSHIP_COVERAGE_REPORT.md`
  - [ ] Scores detalhados
  - [ ] Frameworks implementados
  - [ ] Comparativo antes/depois
  
- [ ] **5.3.2 Update Trackers**
  - [ ] Update `REVIEW_TRACKER.md` (add Ownership entry)
  - [ ] Update `CHECKLIST_VISUAL_v2.md` (se necessário)

### 5.4 Final Validation
- [ ] **5.4.1 Métricas**
  - [ ] Score médio: 66.5 → 87 ✅
  - [ ] Questões ≥80: 4/10 → 10/10 ✅
  - [ ] Críticos <60: 5 → 0 ✅
  
- [ ] **5.4.2 Quality Gates**
  - [ ] PT/EN parity 100%
  - [ ] Métricas ≥8 em todos cases
  - [ ] Ratio EU:NÓS ≥3:1
  - [ ] Build verde
  - [ ] Tests verde

---

## 📊 TRACKING

### Progress by Phase

| Phase | Status | Questões | Ganho | Tempo |
|-------|--------|----------|-------|-------|
| 1 (Remaps) | ⏳ | Q0,Q1,Q3,Q6 | +145 | 2h |
| 2 (Q8 FULL) | ⏳ | Q8 | +10 | 45 min |
| 3 (Q9 FULL) | ⏳ | Q9 | +10 | 30 min |
| 4 (Q7) | ⏳ | Q7 | +40 | 60 min |
| 5 (Validation) | ⏳ | - | - | 20 min |
| **TOTAL** | **0%** | **7** | **+205** | **~4h15min** |

### Scores Tracking

| Q# | Inicial | Target | Atual | Status |
|----|---------|--------|-------|--------|
| Q0 | 55 | 85 | 55 | ⏳ Pending |
| Q1 | 45 | 85 | 45 | ⏳ Pending |
| Q2 | 85 | 85 | 85 | ✅ OK |
| Q3 | 45 | 85 | 45 | ⏳ Pending |
| Q4 | 90 | 90 | 90 | ✅ OK |
| Q5 | 95 | 95 | 95 | ✅ OK |
| Q6 | 50 | 85 | 50 | ⏳ Pending |
| Q7 | 45 | 85 | 45 | ⏳ Pending |
| Q8 | 80 | 90 | 80 | ⏳ Pending |
| Q9 | 75 | 85 | 75 | ⏳ Pending |
| **Média** | **66.5** | **87** | **66.5** | ⏳ |

---

## 🚨 BLOCKERS / ISSUES

### Identificados
- [ ] Nenhum blocker no momento

### Riscos
- ⚠️ **Overuse sefaz-rollback**: Pode ser usado 3x (Q0, Q3, Q5) — mitigar com FUPs diferentes
- ⚠️ **Criar novo case Q7**: Pode demandar mais tempo se Opção A escolhida

---

## ✅ COMPLETION CRITERIA

- [ ] **Todas as 5 phases executadas**
- [ ] **Score médio ≥87**
- [ ] **Questões ≥80: 10/10**
- [ ] **Críticos <60: 0**
- [ ] **Build verde**
- [ ] **Tests verde (31)**
- [ ] **CSV/JSON atualizados**
- [ ] **Reports gerados**

---

**Status**: ⏳ **PRONTO PARA EXECUÇÃO**  
**Próxima Ação**: Iniciar PHASE 1 — Remapear Q0  
**Responsável**: GitHub Copilot  
**Data**: 2025-10-06
