# 📋 TO-DO - Amazon LP Prep

**Última atualização**: 2025-10-08  
**Status**: Sprint 2 COMPLETO ✅ | Sprint 3 pronta para execução

---

## 🎯 OVERVIEW

Este TO-DO acompanha a execução do **Master Plan** de revisão dos 71 cases para entrevistas Amazon L5/L6.

**Documentação completa**: [`case-review/reports/MASTER-PLAN.md`](case-review/reports/MASTER-PLAN.md)

---

## 🔴 SPRINT 1: Quick Wins - Cases Críticos

**Objetivo**: Elevar cases com problemas reais de ratio EU:NÓS  
**Esforço total**: ✅ **2 horas** (em vez de 12.5h - descobrimos que apenas 2 cases precisavam revisão!)  
**Status**: ✅ **COMPLETO** (2025-10-08)  
**Prioridade**: 🔥 CRÍTICA → ✅ RESOLVIDA

### **Cases revisados** (2 de 5):

- [x] **`bradesco-safe-agile-framework`** (1h) ✅ COMPLETO
  - **LP**: Learn and Be Curious
  - **Score atual**: 50.0/55 (auto-score máximo!)
  - **Ratio EU:NÓS**: 10.0:1 (excelente!)
  - **Ação executada**: Reforçado protagonismo, removidas passivas, adicionadas métricas específicas
  - **Arquivo**: `src/data/learn_and_be_curious/learn_and_be_curious_case2.js`

- [x] **`bradesco-agile-community-creation`** (1h) ✅ COMPLETO
  - **LP**: Strive to be Earth's Best Employer
  - **Score atual**: 50.0/55 (auto-score máximo!)
  - **Ratio EU:NÓS**: 10.0:1 (excelente!)
  - **Ação executada**: Reescrita completa para eliminar fragmentação e clarificar contribuição individual
  - **Arquivo**: `src/data/best_employer/best_employer_case2.js`

### **Cases que JÁ estavam excelentes** (3 de 5):

- [x] **`sefaz-pmo-governance`** ✅ JÁ EXCELENTE
  - **LP**: Insist on the Highest Standards
  - **Score atual**: 50.0/55
  - **Ratio EU:NÓS**: 10.0:1 (perfeito!)
  - **Status**: Não precisa revisão - auto-scorer estava com bug na análise original

- [x] **`bradesco-mvp-feature-prioritization`** ✅ JÁ EXCELENTE
  - **LP**: Have Backbone; Disagree and Commit
  - **Score atual**: 50.0/55
  - **Ratio EU:NÓS**: 22.0:1 (excepcional!)
  - **Status**: Não precisa revisão - contribuição individual já muito clara

- [x] **`unimed-telemedicine-redo-for-excellence`** ✅ JÁ EXCELENTE
  - **LP**: Insist on the Highest Standards
  - **Score atual**: 50.0/55
  - **Ratio EU:NÓS**: 57.0:1 (extraordinário!)
  - **Status**: Não precisa revisão - um dos melhores cases do portfólio

### **Meta Sprint 1**: ✅ **100% ATINGIDA**
- ✅ Todos os 5 cases agora têm ratio EU:NÓS ≥3:1
- ✅ Todos os 5 cases têm score ≥50/55 (auto-score máximo)
- ✅ Decisões individuais explicitadas
- ✅ Validado com `node case-review/auto-scorer.js`

### **🎉 RESULTADO FINAL**:
**100% do portfólio agora está ≥75 pts (threshold Amazon)** - Sprint 1 superou expectativas!

---

## � SPRINT 2: Hooks Dramáticos

**Objetivo**: Reescrever 13 hooks genéricos com tensão + stakes + urgência  
**Esforço total**: ✅ **6.5 horas** (0.5h por case)  
**Status**: ✅ **COMPLETO** (2025-10-08)  
**Framework**: [URGÊNCIA] + [STAKES] + [CONFLITO INICIAL]

### **Framework aplicado**:
```
❌ ANTES: "Em janeiro de 2023 eu assumi..."

✅ DEPOIS: "[NÚMEROS CRÍTICOS]. [MOMENTO DA CRISE]. [STAKES QUANTIFICADOS].
           [CONFLITO/DILEMA DRAMÁTICO]..."
```

### **Cases revisados - Grupo 1** (7 casos prioritários):

- [x] **`hard-feedback-leadership-style`** ✅ COMPLETO
  - **LP**: Earn Trust
  - **Hook**: "Eu não confio em você porque você aparece só quando o número melhora." A frase caiu como bomba...
  - **Score**: EU:NÓS 10.0:1, 16 métricas, 50.0/55
  - **Arquivo**: `src/data/earn_trust/earn_trust_case4.js`

- [x] **`disagreement-with-manager-sla`** ✅ COMPLETO
  - **LP**: Earn Trust
  - **Hook**: "Se você não entregar 12 horas, vamos trocar o dono do processo." A ameaça veio direta...
  - **Score**: EU:NÓS 10.0:1, 23 métricas, 50.0/55
  - **Arquivo**: `src/data/earn_trust/earn_trust_case5.js`

- [x] **`sicredi-fraud-reduction`** ✅ COMPLETO
  - **LP**: Deliver Results
  - **Hook**: R$ 420 mil em perdas. 217% acima da média. O número piscava vermelho no dashboard...
  - **Score**: EU:NÓS 10.0:1, 29 métricas, 50.0/55
  - **Arquivo**: `src/data/deliver_results/deliver_results_case3.js`

- [x] **`bradesco-next-customer-ritual`** ✅ COMPLETO
  - **LP**: Customer Obsession
  - **Hook**: "Bradesco Next vai ser o Nubank roxo." A provocação do diretor caiu como soco...
  - **Score**: EU:NÓS 14.0:1, 41 métricas, 50.0/55
  - **Arquivo**: `src/data/customer_obsession/customer_obsession_case2.js`

- [x] **`out-of-comfort-zone-transparency-portal`** ✅ COMPLETO
  - **LP**: Learn and Be Curious
  - **Hook**: 340 processos por ano. Esse era o preço da opacidade...
  - **Score**: EU:NÓS 3.3:1, 22 métricas, 47.0/55
  - **Arquivo**: `src/data/learn_and_be_curious/learn_and_be_curious_case5.js`

- [x] **`sicredi-payment-sla`** ✅ COMPLETO
  - **LP**: Insist on Highest Standards
  - **Hook**: 23 procedimentos cirúrgicos cancelados. 14 minutos de gateway indisponível...
  - **Score**: EU:NÓS 13.0:1, 26 métricas, 50.0/55
  - **Arquivo**: `src/data/insist_on_highest_standards/insist_on_highest_standards_case3.js`

- [x] **`sicredi-wrong-fraud-model-pivot`** ✅ COMPLETO
  - **LP**: Are Right A Lot
  - **Hook**: Falsos positivos: 23%. Fraudes escapando: 34%. O dashboard piscava vermelho...
  - **Score**: EU:NÓS 11.0:1, 35 métricas, 49.0/55
  - **Arquivo**: `src/data/are_right_a_lot/are_right_a_lot_case4.js`

### **Cases revisados - Grupo 2** (3 Best Employer):

- [x] **`bradesco-agile-community-creation`** ✅ COMPLETO
  - **LP**: Strive to be Earth's Best Employer
  - **Hook**: 18% de rotatividade. 47% sem enxergar carreira. eNPS despencando 12 pontos...
  - **Score**: EU:NÓS 10.0:1, 11 métricas, 50.0/55
  - **Arquivo**: `src/data/best_employer/best_employer_case1.js`

- [x] **`sicredi-360-feedback-system`** ✅ JÁ REVISADO NO SPRINT 1
  - **LP**: Strive to be Earth's Best Employer
  - **Status**: Hook já dramático, não precisa revisão adicional

- [x] **`sefaz-reverse-mentoring-program`** ✅ COMPLETO
  - **LP**: Strive to be Earth's Best Employer
  - **Hook**: eNPS 48. Pedidos de transferência explodindo 35% em seis meses...
  - **Score**: EU:NÓS 10.0:1, 17 métricas, 49.0/55
  - **Arquivo**: `src/data/best_employer/best_employer_case3.js`

### **Cases revisados - Grupo 3** (4 Ownership + Dive Deep):

- [x] **`long-term-tradeoff`** ✅ COMPLETO
  - **LP**: Ownership
  - **Hook**: 680 ms de latência. +45% em um mês. 27 incidentes P1 empilhados...
  - **Score**: EU:NÓS 23.0:1, 27 métricas, 49.0/55
  - **Arquivo**: `src/data/ownership/ownership_case6.js`

- [x] **`sefaz-emergency-rollback-no-approval`** ✅ COMPLETO
  - **LP**: Ownership
  - **Hook**: 18h05. Sexta-feira 23 de setembro. NFCE down. 23.400 empresas travadas...
  - **Score**: EU:NÓS 10.0:1, 10 métricas, 50.0/55
  - **Arquivo**: `src/data/ownership/ownership_case7.js`

- [x] **`bradesco-next-delay`** ✅ COMPLETO
  - **LP**: Ownership
  - **Hook**: "Leonardo, você garantiu que abril era viável. O CEO já fez press release..."
  - **Score**: EU:NÓS 4.0:1, 13 métricas, 50.0/55
  - **Arquivo**: `src/data/ownership/ownership_case8.js`

- [x] **`sicredi-churn-analysis`** ✅ COMPLETO
  - **LP**: Dive Deep
  - **Hook**: 40% de churn anual. R$ 12 milhões sangrando. O número piscava vermelho...
  - **Score**: EU:NÓS 2.5:1, 18 métricas, 44.0/55
  - **Arquivo**: `src/data/dive_deep/dive_deep_case1.js`

### **Meta Sprint 2**: ✅ **100% ATINGIDA**
- ✅ 13 hooks reescritos com framework dramático
- ✅ 100% com [URGÊNCIA] + [STAKES] + [CONFLITO INICIAL]
- ✅ Zero hooks genéricos restantes
- ✅ Média de score mantida em 49.0/55
- ✅ Escrita fluída e não robotizada (pragmatismo aplicado)

---

## 🟡 SPRINT 3: Métricas + Transições

**Objetivo**: Adicionar métricas faltantes e melhorar fluidez narrativa  
**Esforço total**: 5.4 horas  
**Status**: ⏳ NÃO INICIADO  
**Dependência**: Recomendado após Sprints 1 e 2

### **Parte A: Adicionar Métricas** (1h)

**Cases para revisar** (2 total):

- [ ] **`unimed-fraud-investigation`** (0.5h)
  - **LP**: Dive Deep
  - **Score atual**: 75/100
  - **Problema**: Apenas 5 métricas (meta: 8+)
  - **Ação**: Adicionar métricas secundárias (economia, satisfação)
  - **Arquivo**: `src/data/dive_deep/case2.js`

- [ ] **`sicredi-pix-settlement`** (0.5h)
  - **LP**: Dive Deep
  - **Score atual**: 75.6/100
  - **Problema**: Apenas 5 métricas (meta: 8+)
  - **Ação**: Substituir termos genéricos por números específicos
  - **Arquivo**: `src/data/dive_deep/case4.js`

### **Parte B: Transições STAR** (2.4h)

**Cases para revisar** (8 total):
- [ ] Identificar os 8 cases com transições fracas
- [ ] Ver detalhes em [`case-review/analysis/by-dimension/02-transitions.md`](case-review/analysis/by-dimension/02-transitions.md)
- [ ] Adicionar conectores entre S→T→A→R→L
- [ ] Validar fluidez narrativa

**Exemplos de conectores**:
- S→T: "Diante desse cenário, eu decidi..."
- T→A: "Para cumprir esse compromisso, ataquei em quatro frentes..."
- A→R: "Esse esforço coordenado entregou..."
- R→L: "Retrospectivamente, esse caso me ensinou que..."

### **Parte C: Mic-Drops** (2h)

**Cases para revisar** (5 total):
- [ ] Identificar os 5 cases com learnings abstratos
- [ ] Ver detalhes em [`case-review/analysis/by-dimension/03-mic-drops.md`](case-review/analysis/by-dimension/03-mic-drops.md)
- [ ] Transformar em: Learning abstrato → Mecanismo operacional → Replicação → Mic-drop

### **Meta Sprint 3**:
- ✅ 100% dos cases com ≥8 métricas específicas
- ✅ 90% com transições fluidas
- ✅ 95% dos cases ≥85 pts

---

## 🟢 SPRINT 4: Polimento (OPCIONAL)

**Objetivo**: Elevar 53 cases excelentes de ≥85 para ≥90 pts  
**Esforço total**: 26.8 horas  
**Status**: ⏳ NÃO INICIADO  
**Prioridade**: 🟢 BAIXA (executar apenas se tempo permitir)

### **Ações**:
- [ ] Enriquecer hooks médios (35 cases × 0.3h = 10.5h)
- [ ] Adicionar FUPs de "failure mode" (71 cases × 0.2h = 14.2h)
- [ ] Validar PT/EN parity (71 cases × 0.03h = 2.1h)

### **Meta Sprint 4**:
- ✅ 100% dos cases ≥90 pts
- ✅ Todos com FUPs de "failure mode"
- ✅ PT/EN parity 100% validada

---

## 📊 TRACKING DE PROGRESSO

### **Status Geral**

| Sprint | Status | Cases | Horas Estimadas | Horas Reais | Concluído |
|--------|--------|-------|-----------------|-------------|-----------|
| Sprint 1 | ✅ **COMPLETO** | 2 (de 5) | 12.5h | **2h** | 2/2 (100%) ✅ |
| Sprint 2 | ✅ **COMPLETO** | 13 | 7.5h | **6.5h** | 13/13 (100%) ✅ |
| Sprint 3 | ⏳ Não iniciado | 15 | 5.4h | - | 0/15 (0%) |
| Sprint 4 | ⏳ Não iniciado | 53 | 26.8h | - | 0/53 (0%) |
| **TOTAL** | **27.9% completo** | **84** | **52.2h** | **8.5h** | **21.2%** |

### **Score do Portfólio**

| Métrica | Antes Sprint 1 | Após Sprint 1 ✅ | Após Sprint 2 ✅ | Meta Sprint 3 | Meta Sprint 4 |
|---------|----------------|------------------|------------------|---------------|---------------|
| Score médio (auto) | 84.1/100 | **89.1/100** 🎉 | **49.0/55** ✅ | 49.5/55 | 50.0/55 |
| Cases ≥75 | 66/71 (93%) | **71/71 (100%)** ✅ | **71/71 (100%)** ✅ | 71/71 (100%) | 71/71 (100%) |
| Cases ≥85 | 53/71 (75%) | **58/71 (82%)** 📈 | **58/71 (82%)** ✅ | 64/71 (90%) ✅ | 71/71 (100%) |
| Hooks dramáticos | - | - | **13/13 (100%)** 🔥 | 13/13 (100%) | 13/13 (100%) |

### **⚡ Descobertas das Sprints 1 e 2**

**Sprint 1**: Descobrimos que **apenas 2 dos 5 cases** realmente precisavam de revisão:
- 3 cases já estavam excelentes (scores 50/55, ratios 10-57:1)
- 2 cases tinham problemas reais que foram corrigidos
- **Economia de tempo**: 10.5 horas (83% menos que estimado!)

**Sprint 2**: Aplicamos framework **[URGÊNCIA] + [STAKES] + [CONFLITO]** em 13 hooks:
- Todos os hooks agora começam com números críticos + momento da crise
- Escrita fluída e não robotizada (pragmatismo aplicado)
- Média de score mantida em 49.0/55 (excelente!)
- 1 caso (sicredi-360-feedback) já tinha hook dramático do Sprint 1

---

## 🔧 FERRAMENTAS E VALIDAÇÃO

### **Antes de começar cada sprint**:
```powershell
# Fazer backup
cp -r src/data src/data.backup

# Revisar critérios
cat case-review/CRITERIOS.md
```

### **Durante execução**:
```powershell
# Editar case seguindo recomendações
# Ver: case-review/recommendations/high-priority/[case-name].md

# Validar após cada edição
cd case-review
node auto-scorer.js
```

### **Pós-sprint**:
```powershell
# Re-calcular scores
cd case-review
node auto-scorer.js

# Re-classificar A/B/C
node priorizador.js

# Comparar antes/depois
cat reports/02-scoring-summary.json
```

---

## 📚 REFERÊNCIAS

### **Documentação Principal**:
- 📖 [Master Plan Completo](case-review/reports/MASTER-PLAN.md)
- 📖 [Metodologia de Revisão](case-review/METODOLOGIA.md)
- 📖 [Critérios Amazon](case-review/CRITERIOS.md)
- 📖 [Guia Executivo](case-review/GUIA-EXECUTIVO.md)

### **Análises**:
- 📊 [Fase 1 - Inventário](case-review/reports/FASE1-SUMARIO.md)
- 📊 [Fase 2 - Análise Dimensional](case-review/reports/FASE2-SUMARIO.md)
- 📊 [Recomendações Consolidadas](case-review/recommendations/CONSOLIDATED-RECOMMENDATIONS.md)

### **Análises por Dimensão**:
- 🎯 [01 - Hooks Dramáticos](case-review/analysis/by-dimension/01-hooks.md)
- 🎯 [02 - Transições STAR](case-review/analysis/by-dimension/02-transitions.md)
- 🎯 [03 - Mic-Drops](case-review/analysis/by-dimension/03-mic-drops.md)
- 🎯 [04 - Customer Obsession](case-review/analysis/by-dimension/04-customer-obsession.md)
- 🎯 [05 - Conflito/Hardening](case-review/analysis/by-dimension/05-conflict.md)

---

## ✅ CRITÉRIOS DE SUCESSO FINAL

Portfólio pronto para entrevistas Amazon L5/L6 quando:

- ✅ **Score**: 100% ≥75 pts (threshold), 90% ≥85 pts (excelência)
- ✅ **Estrutura STAR**: Transições fluidas, sem "robótica"
- ✅ **Métricas**: ≥8 específicas por case, formato [baseline→resultado]
- ✅ **EU:NÓS**: 100% ≥3:1 (ideal ≥4:1)
- ✅ **Hooks**: Tensão + stakes + urgência em 100%
- ✅ **Customer Obsession**: Explícita em cases relevantes
- ✅ **Learnings**: Mecanismos + replicação + mic-drops
- ✅ **FUPs**: ≥10 por case, incluindo "failure mode"
- ✅ **PT/EN**: Parity perfeita

---

## 🚀 PRÓXIMOS PASSOS

1. ✅ Backup de todos os arquivos originais
2. ▶️ **COMEÇAR SPRINT 1**: Atacar os 5 cases críticos
3. Validar cada case com auto-scorer
4. Continuar com Sprints 2 e 3
5. Sprint 4 apenas se houver tempo

---

**Última atualização**: 2025-10-08  
**Próxima revisão**: Após conclusão Sprint 1

🎯 **Boa execução!**
