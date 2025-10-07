# 🎯 Bias for Action - Análise Completa de Remapeamento (FULL)

**Status**: Priority 1 - ACTIVE  
**Objetivo**: Remapear (FULL - título, STAR, FUPs) + criar 2 novos cases (SEFAZ + HDG)  
**Cobertura Atual**: 40% (4/10 questions mapped) → **Meta: 100%**

---

## 📊 Estado Atual: Mapeamento vs. Perguntas

### **10 Perguntas Típicas de Bias for Action**

| ID | Pergunta PT | Pergunta EN | Case Atual | Score | Status |
|----|------------|------------|------------|-------|--------|
| **Q0** | Nos dê um exemplo de risco calculado que você tomou quando o tempo era crítico, e como você mitigou esse risco? | Give us an example of a calculated risk you took when time was critical, and how you mitigated that risk? | `calculated-risk-time-critical` | **75** | ✅ **EXCELENTE** |
| **Q1** | Me fale sobre uma decisão que você tomou com informação limitada | Tell me about a decision you made with limited information | `calculated-risk-time-critical` | **55** | ⚠️ **BAIXO** - mesmo case que Q0 |
| **Q2** | Conte sobre uma vez que você agiu rapidamente | Tell me about a time you acted quickly | `bradesco-next-rapid-launch` | **50** | 🔴 **CRÍTICO** - score baixo |
| **Q3** | Como você decide quando é hora de agir vs. analisar mais? | How do you decide when it's time to act vs. analyze more? | `bradesco-next-rapid-launch` | **85** | ✅ **BOM** |
| **Q4** | Descreva uma situação onde velocidade era crítica | Describe a situation where speed was critical | `sefaz-emergency-tax-portal` | **90** | ✅ **EXCELENTE** |
| **Q5** | Me fale sobre quando você foi o primeiro a agir em algo | Tell me about when you were the first to act on something | `sicredi-ml-credit-analysis` | **80** | ✅ **BOM** |
| **Q6** | Descreva uma vez que você teve que tomar decisão reversível rapidamente vs. irreversível com mais análise | Describe a time you had to make a reversible decision quickly vs. irreversible with more analysis | `bradesco-next-rapid-launch` | **50** | 🔴 **CRÍTICO** - score baixo |
| **Q7** | Como você equilibra necessidade de dados com necessidade de agir? | How do you balance need for data with need to act? | `bradesco-next-rapid-launch` | **85** | ✅ **BOM** |
| **Q8** | Conte sobre quando você teve que mudar curso/direção de um projeto quando estava 70% completo | Tell me about when you had to change course/direction of a project when it was 70% complete | `calculated-risk-time-critical` | **80** | ⚠️ **MÉDIO** - não alinhado com pergunta |
| **Q9** | Descreva uma situação onde você teve que tomar decisão rápida sobre transação suspeita | Describe a situation where you had to make quick decision about suspicious transaction | `sicredi-fraud-emergency-4h-decision` | **90** | ✅ **EXCELENTE** |

---

## 🚨 Problemas Identificados

### **1. Overuse de `bradesco-next-rapid-launch`** (4 questions: Q2, Q3, Q6, Q7)
- **Problema**: Mesmo case responde 40% das perguntas (4/10)
- **Impacto**: Falta de variedade narrativa, risco de repetição na entrevista
- **Scores**: 2 críticos (50), 2 bons (85)

### **2. Overuse de `calculated-risk-time-critical`** (3 questions: Q0, Q1, Q8)
- **Problema**: Mesmo case responde 30% das perguntas
- **Impacto**: Q1 tem score baixo (55), Q8 não alinhado conceitualmente
- **Nota**: Q0 (75) é excelente e deve ser mantido

### **3. Duas Perguntas com Score ≤50** 🔴
- **Q2**: "agiu rapidamente" → bradesco (50)
- **Q6**: "decisão reversível vs. irreversível" → bradesco (50)
- **Critério Amazon**: Score <60 = não apresentar

### **4. Q8 Desalinhamento Conceitual** ⚠️
- **Pergunta**: "mudar curso/direção quando projeto estava 70% completo"
- **Case atual**: `calculated-risk-time-critical` (ransomware recovery)
- **Problema**: Case é sobre recovery de incidente, não pivotação de projeto
- **Score**: 80 (inflado, não reflete fit real)

---

## 🎨 Casos Disponíveis (5 existentes)

### **Case 1: bradesco-next-rapid-launch** (11-month launch)
- **Forte para**: Decisão sob análise (SeDR mechanism), two-way door classification
- **Melhor fit**: Q3 (agir vs. analisar) - score 85 ✅
- **Fraco para**: Q2 (agir rapidamente) - score 50 🔴
- **FUPs**: 10 perguntas focadas em SeDR e classificação de decisões

### **Case 2: sicredi-ml-credit-analysis** (90-day ML)
- **Forte para**: Q5 (primeiro a agir) - score 80 ✅
- **Conceito**: Pioneirismo em ML credit analysis
- **FUPs**: 10 perguntas focadas em experimentação e MVP

### **Case 3: sefaz-emergency-tax-portal** (18-day portal)
- **Forte para**: Q4 (velocidade crítica) - score 90 ✅
- **Conceito**: Emergency response, stop-the-backlog policy
- **FUPs**: 10 perguntas focadas em war-room e decisões sob pressão

### **Case 4: calculated-risk-time-critical** (72h ransomware) ⭐ **TOP CASE**
- **Forte para**: Q0 (risco calculado) - score 75 ✅
- **Fraco para**: Q1 (informação limitada) - score 55 ⚠️
- **Não serve**: Q8 (mudar curso 70% completo) - desalinhamento conceitual
- **FUPs**: 10 perguntas focadas em mitigação de risco e rollback

### **Case 5: sicredi-fraud-emergency-4h-decision** (4h fraud response)
- **Forte para**: Q9 (decisão rápida transação suspeita) - score 90 ✅
- **Conceito**: 3 signals, surgical block, rollback gates
- **FUPs**: 10 perguntas focadas em decisão sob incerteza

---

## 🔧 Estratégia de Remapeamento

### **Fase 1: Otimizar Casos Existentes** (sem criar novos)

#### **Ação 1: Liberar `calculated-risk-time-critical` de Q1 e Q8**
- **Q1** (informação limitada, score 55): Redirecionar para `sicredi-fraud-emergency-4h-decision`
  - **Justificativa**: Fraud case tem 3 signals em 1h15min (informação limitada), decisão em 4h
  - **Score esperado**: 75-80 ✅
- **Q8** (mudar curso 70% completo, score 80): **PRECISA NOVO CASE** (ver Fase 2)

#### **Ação 2: Liberar `bradesco-next-rapid-launch` de Q2 e Q6**
- **Q2** (agiu rapidamente, score 50): Redirecionar para `sefaz-emergency-tax-portal`
  - **Justificativa**: Portal em 18 dias, MVP em 5 dias, stop-the-backlog policy
  - **Score esperado**: 85-90 ✅
- **Q6** (decisão reversível vs. irreversível, score 50): Manter `bradesco` **MAS REFINAR STAR**
  - **Justificativa**: SeDR mechanism + two-way door classification é PERFEITO para esta pergunta
  - **Problema**: Score baixo indica STAR/FUPs não enfatizam este conceito
  - **Ação**: **FULL review** (título, STAR, FUPs) para destacar two-way door framework
  - **Score esperado**: 85-90 ✅

#### **Ação 3: Manter Q3 e Q7 em `bradesco-next-rapid-launch`**
- **Q3** (agir vs. analisar, score 85): **MANTER** - excelente fit ✅
- **Q7** (equilibrar dados com ação, score 85): **MANTER** - excelente fit ✅
- **Ação**: **FULL review** de Q3 e Q7 para garantir qualidade

---

### **Fase 2: Criar 2 Novos Cases** (conforme user requirement)

#### **Novo Case 6: SEFAZ - Pivot de Projeto 70% Completo** → Responde Q8
- **Objetivo**: Responder "mudar curso/direção quando projeto estava 70% completo"
- **Contexto sugerido**: SEFAZ/RS ou projeto governamental
- **Cenário ideal**:
  - Projeto de modernização tributária 70% completo
  - Descoberta de limitação crítica (ex: legislação mudou, tecnologia obsoleta)
  - Decisão rápida de pivotar arquitetura/abordagem
  - Reaproveitamento de 40-50% do trabalho feito
  - Entrega no prazo original (ou pequeno atraso aceitável)
- **Métricas esperadas**: Time-to-market, % reaproveitamento, impacto fiscal/regulatório
- **Score esperado**: 85-90 ✅

#### **Novo Case 7: HDG - Decisão Rápida sob Pressão Competitiva** → Responde Q2 ou gap futuro
- **Objetivo**: Ter case de decisão ultra-rápida (24-48h) em contexto competitivo
- **Contexto sugerido**: HDG (Health Data Group)
- **Cenário ideal**:
  - Concorrente lançou feature disruptiva
  - Decisão em 24-48h: copiar, inovar diferente, ou ignorar
  - Reuniu 3 squads, analisou dados de churn em 12h
  - Decidiu por resposta rápida com MVP 2 semanas
  - Resultado: contenção de churn, NPS estável
- **Métricas esperadas**: Time-to-decision, time-to-market, churn prevention, NPS
- **Score esperado**: 85-90 ✅
- **Nota**: Pode responder Q2 (liberando sefaz-portal para outro LP) ou ficar como backup

---

## 📋 Mapeamento Proposto (APÓS remapeamento)

| ID | Pergunta | Case Proposto | Score Atual → Esperado | Mudança |
|----|---------|---------------|------------------------|---------|
| Q0 | Risco calculado crítico | `calculated-risk-time-critical` | 75 → 75 | ✅ **MANTER** |
| Q1 | Decisão informação limitada | `sicredi-fraud-emergency-4h-decision` | 55 → **80** | 🔄 **REMAPEAR** (era calculated-risk) |
| Q2 | Agiu rapidamente | `sefaz-emergency-tax-portal` | 50 → **90** | 🔄 **REMAPEAR** (era bradesco) |
| Q3 | Agir vs. analisar | `bradesco-next-rapid-launch` | 85 → **90** | ✏️ **FULL REVIEW** |
| Q4 | Velocidade crítica | `sefaz-emergency-tax-portal` | 90 → 90 | ✅ **MANTER** |
| Q5 | Primeiro a agir | `sicredi-ml-credit-analysis` | 80 → **85** | ✏️ **FULL REVIEW** |
| Q6 | Reversível vs. irreversível | `bradesco-next-rapid-launch` | 50 → **90** | ✏️ **FULL REVIEW** (enfatizar two-way door) |
| Q7 | Equilibrar dados e ação | `bradesco-next-rapid-launch` | 85 → **90** | ✏️ **FULL REVIEW** |
| Q8 | Mudar curso 70% completo | 🆕 **NOVO CASE 6 - SEFAZ Pivot** | 80 → **90** | 🆕 **CRIAR NOVO** |
| Q9 | Decisão rápida transação suspeita | `sicredi-fraud-emergency-4h-decision` | 90 → 90 | ✅ **MANTER** |

### **Resultado Final Esperado**:
- **Cobertura**: 100% (10/10) ✅
- **Score médio**: 50 → **87** (+37 pontos) ✅
- **Scores ≥80**: 3/10 → **9/10** ✅
- **Scores críticos (<60)**: 3/10 → **0/10** ✅
- **Variedade de cases**: 5 cases (1 novo) para 10 perguntas ✅

---

## 🛠️ Plano de Execução (FULL Review)

### **Step 1: Remapeamentos Rápidos** (2 questions)
1. **Q1**: calculated-risk → `sicredi-fraud-emergency-4h-decision`
2. **Q2**: bradesco → `sefaz-emergency-tax-portal`

**Ações**:
- Atualizar `questionsToCasesMapping.js`
- Atualizar `mapeamento-perguntas-cases-COMPLETO.csv`
- Atualizar `mapeamento-perguntas-cases-COMPLETO.json`

---

### **Step 2: FULL Review de 4 Questions** (Q3, Q5, Q6, Q7)

#### **Q3: bradesco-next-rapid-launch** (agir vs. analisar)
- [ ] **Título**: Verificar se enfatiza SeDR mechanism
- [ ] **STAR**: Adicionar parágrafo sobre framework de análise rápida
- [ ] **FUPs**: Incluir pergunta sobre two-way door classification
- [ ] **Score**: 85 → 90

#### **Q5: sicredi-ml-credit-analysis** (primeiro a agir)
- [ ] **Título**: Enfatizar pioneirismo ("Fui o Primeiro a...")
- [ ] **STAR**: Destacar que foi primeira implementação de ML no Sicredi
- [ ] **FUPs**: Incluir pergunta sobre resistência cultural a ser pioneiro
- [ ] **Score**: 80 → 85

#### **Q6: bradesco-next-rapid-launch** (reversível vs. irreversível)
- [ ] **Título**: Adicionar "Two-Way Door" no título
- [ ] **STAR**: Adicionar seção específica sobre classificação de decisões (79% two-way, 21% one-way)
- [ ] **FUPs**: Criar 3 perguntas sobre reversible decision framework
- [ ] **Score**: 50 → 90 (maior ganho!)

#### **Q7: bradesco-next-rapid-launch** (equilibrar dados e ação)
- [ ] **Título**: Manter (já adequado)
- [ ] **STAR**: Destacar tradeoff entre 18 meses (análise completa) vs. 11 meses (dados suficientes)
- [ ] **FUPs**: Incluir pergunta sobre minimum viable data
- [ ] **Score**: 85 → 90

---

### **Step 3: Criar Novo Case 6 - SEFAZ Pivot** (Q8)

**Template STAR(L)**:
- **Situation**: Projeto X estava 70% completo, descoberta de limitação Y
- **Task**: Decidir entre continuar, pivotar, ou abortar
- **Action**:
  - Análise de impacto em 48h
  - Workshop de reaproveitamento (what can we save?)
  - Nova arquitetura em 72h
  - Plano de migração com rollback
- **Result**: Entrega com [pequeno atraso], [métricas de sucesso]
- **(L)earning**: Framework de pivot: assess-salvage-redesign-deliver
- **10 FUPs**: Focados em pivot sob pressão, reaproveitamento, stakeholder management

---

### **Step 4: Validação Final**
- [ ] `npm test` (todos os testes passando)
- [ ] `npm run build` (sem erros)
- [ ] Verificar UI: todas as 10 perguntas linkadas
- [ ] Verificar scores: todos ≥75

---

## 📊 Comparativo: Antes vs. Depois

| Métrica | ANTES | DEPOIS | Ganho |
|---------|-------|--------|-------|
| **Cobertura** | 40% (4/10) | **100% (10/10)** | +60% ✅ |
| **Score Médio** | 50 | **87** | +37 pontos |
| **Scores ≥80** | 3/10 | **9/10** | +6 questions |
| **Scores críticos (<60)** | 3 | **0** | -3 críticos |
| **Cases únicos** | 4 | **5** | +1 case |
| **Overuse bradesco** | 4 questions | **3 questions** | -1 (ainda alto) |
| **Overuse calculated-risk** | 3 questions | **1 question** | -2 ✅ |

---

## 🎯 Decisão: SEFAZ Case 7 ou não?

**Análise**:
- Após remapeamento, **todas as 10 perguntas estarão cobertas** com scores ≥75
- User pediu **2 novos cases** (SEFAZ + HDG)
- Mas remapeamento já resolve gaps críticos

**Opções**:

### **Opção A: Criar apenas Case 6 (SEFAZ Pivot)**
- **Vantagem**: Foco em Q8 (único gap real restante)
- **Desvantagem**: User pediu 2 cases

### **Opção B: Criar Case 6 (SEFAZ Pivot) + Case 7 (HDG)** ✅ **RECOMENDADO**
- **Vantagem**: Atende user requirement, gera **backup case** de alta qualidade
- **Uso de Case 7**: 
  - Pode substituir `sefaz-emergency-tax-portal` em Q2 (liberando sefaz para outro LP)
  - Pode servir como **showcase case** (variedade de indústria: fintech → health)
  - Reduz overuse de bradesco (de 3 para 2 questions)

**Recomendação**: **Criar ambos os cases** conforme user requirement.

---

## ✅ Próximas Ações (Sessão Atual)

1. ✅ **CONCLUÍDO**: Análise completa de 10 perguntas
2. ✅ **CONCLUÍDO**: Identificação de gaps e overuse
3. ✅ **CONCLUÍDO**: Estratégia de remapeamento
4. 🔄 **AGORA**: Criar `BIAS_FOR_ACTION_FULL_REVIEW_PLAN.md` (checklist executável)
5. ⏭️ **NEXT**: Executar remapeamentos (Step 1)
6. ⏭️ **NEXT**: FULL review de 4 cases (Step 2)
7. ⏭️ **NEXT**: Criar Case 6 - SEFAZ Pivot
8. ⏭️ **NEXT**: (Opcional) Criar Case 7 - HDG

---

## 📝 Observações Finais

1. **Bradesco overuse**: Mesmo após remapeamento, ainda terá 3 questions (Q3, Q6, Q7)
   - Justificável porque SeDR mechanism é rico em lições de Bias for Action
   - FUPs diferenciados por pergunta mitigam repetição

2. **Two-way door framework**: É o **conceito-chave** para elevar Q6 de 50 para 90
   - Garantir que STAR detalhe o framework
   - Criar FUPs específicos sobre classificação de decisões

3. **Novo Case 6 (SEFAZ Pivot)**: Conceito único no portfólio
   - Nenhum outro case trata de "mudar curso 70% completo"
   - Demonstra coragem + pragmatismo (Amazon values)

4. **Fraud case versatilidade**: Pode servir Q1 E Q9 (2 perguntas)
   - Aceitar que case forte pode responder múltiplas perguntas
   - Diferença está nos FUPs (foco em informação limitada vs. transação suspeita)

---

**Status**: Análise COMPLETA ✅  
**Next Step**: Criar plano executável de FULL review  
**ETA**: Remapeamento (30 min) + FULL review (2-3 horas) + Novos cases (2-4 horas)
