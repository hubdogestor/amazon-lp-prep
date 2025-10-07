# 📊 Ownership - Análise de Remapeamento Completa

**Data**: 2025-10-06  
**Status**: FASE 1 - ANÁLISE INICIAL  
**Método**: Seguindo processo de sucesso do Bias for Action

---

## 🎯 OBJETIVO

Elevar **Ownership** de cobertura atual para **100% (10/10 questões ≥80)**, aplicando o mesmo processo sistemático usado no Bias for Action.

---

## 📊 STATUS ATUAL (ANTES)

### Scores por Questão

| Q# | Pergunta-chave | Case Atual | Score | Status |
|----|----------------|------------|-------|--------|
| Q0 | Responsabilidade além do escopo | hsbc-migration-leadership | **55** | ❌ CRÍTICO |
| Q1 | Além da função | hsbc-migration-leadership | **45** | ❌ CRÍTICO |
| Q2 | Decisão longo prazo | long-term-tradeoff | **85** | ✅ BOM |
| Q3 | Não é sua responsabilidade | hsbc-migration-leadership | **45** | ❌ CRÍTICO |
| Q4 | Trade-off longo prazo | long-term-tradeoff | **90** | ✅ EXCELENTE |
| Q5 | Decisão sem consultar gestor | sefaz-emergency-rollback | **95** | ✅ EXCELENTE |
| Q6 | Ineficiência + ownership | payment-incidents-prevention | **50** | ❌ CRÍTICO |
| Q7 | Responsabilidade por erros | hsbc-migration-leadership | **45** | ❌ CRÍTICO |
| Q8 | Projeto início ao fim | hsbc-migration-leadership | **80** | ✅ BOM |
| Q9 | Mecanismo prevenção | hsbc-payment-reconciliation | **75** | ✅ BOM |

### Métricas Globais

| Métrica | Valor Atual | Status |
|---------|-------------|--------|
| **Score Médio** | **66.5** | ❌ ABAIXO DO ALVO (80) |
| **Questões ≥80** | 4/10 (40%) | ❌ INSUFICIENTE |
| **Questões ≥90** | 2/10 (20%) | ⚠️ BAIXO |
| **Scores Críticos (<60)** | **5** | ❌ MUITO ALTO |
| **Questões 45-55** | **5** | ❌ ZONA PERIGOSA |

### Distribuição de Scores
```
90-100 ████████                                 20% (2 questões) Q4, Q5
80-89  ████████                                 20% (2 questões) Q2, Q8
60-79  ████                                     10% (1 questão) Q9
45-59  ████████████████████                     50% (5 questões) Q0,Q1,Q3,Q6,Q7 ❌
```

---

## 🔴 PROBLEMAS IDENTIFICADOS

### 1. **OVERUSE CRÍTICO: hsbc-migration-leadership**
- **Uso**: 5 questões (50% das perguntas!) ❌❌❌
- **Scores**: Q0(55), Q1(45), Q3(45), Q7(45), Q8(80)
- **Problema**: Caso sendo forçado para perguntas não alinhadas
- **Impacto**: 4 scores críticos (<60) vêm desse overuse

**Questões afetadas**:
- Q0: "Além do escopo" — Score 55 (marginal)
- Q1: "Além da função" — Score 45 ❌ (quase idêntica a Q0, mas score pior)
- Q3: "Não é sua responsabilidade" — Score 45 ❌
- Q7: "Responsabilidade por erros" — Score 45 ❌
- Q8: "Projeto início ao fim" — Score 80 (único aceitável)

### 2. **Scores Críticos Concentrados**
- **5 questões <60** (metade do portfólio!)
- **4 delas** vêm do hsbc-migration overuse
- **1 adicional**: Q6 (payment-incidents 50)

### 3. **Cases Insuficientes para Ownership**
Ownership requer diversidade de cenários:
- ✅ **Decisão sem aprovação** (Q5: sefaz-rollback 95)
- ✅ **Trade-off longo prazo** (Q2, Q4: long-term-tradeoff 85/90)
- ❌ **Assumir responsabilidade fora do escopo** (Q0, Q1, Q3: todos <60)
- ❌ **Ineficiência identificada** (Q6: 50)
- ❌ **Responsabilidade por erros** (Q7: 45)
- ⚠️ **Projeto end-to-end** (Q8: 80, marginal)
- ⚠️ **Mecanismo prevenção** (Q9: 75, marginal)

### 4. **Falta de Conceitos-Chave Ownership**
Ownership Amazon requer:
- ✅ Think long-term (Q4: 90)
- ✅ Act without approval when needed (Q5: 95)
- ❌ **Never say "that's not my job"** (Q3: 45)
- ❌ **Own mistakes** (Q7: 45)
- ❌ **Go beyond job scope** (Q0, Q1: 55, 45)
- ⚠️ **Create mechanisms** (Q6: 50, Q9: 75)

---

## 🎯 CASOS DISPONÍVEIS (Ownership)

### Casos Existentes
1. **hsbc-migration-leadership** — Overused (5x), scores variáveis (45-80)
2. **long-term-tradeoff** — Forte (85/90), 2 questões
3. **sefaz-emergency-rollback-no-approval** — Excelente (95), 1 questão
4. **payment-incidents-prevention-mechanism** — Fraco (50), 1 questão
5. **hsbc-payment-reconciliation** — Marginal (75), 1 questão

### Gaps Conceituais
- ❌ Nenhum case forte para "além do escopo/função" (Q0, Q1, Q3)
- ❌ Nenhum case para "responsabilidade por erros" (Q7)
- ⚠️ Case fraco para "ineficiência + ownership" (Q6: 50)

---

## 📋 PLANO DE AÇÃO

### **PHASE 1: Remapeamentos Urgentes (30 min)**
**Objetivo**: Eliminar 4-5 scores críticos (<60)

#### Ações:
1. **Q0** (55 → 80+): Remapear de hsbc-migration para case mais forte
   - **Candidato**: Buscar case onde assumiu responsabilidade técnica fora do escopo
   - **Exemplo**: SEFAZ (Tech Lead além de PM), Bradesco (liderança técnica no Next)

2. **Q1** (45 → 80+): Remapear de hsbc-migration
   - **Candidato**: Case onde foi além da função (ex.: Sicredi ML, Unimed AI)
   - **Conceito**: "Primeiro a fazer X" = além da função

3. **Q3** (45 → 80+): Remapear de hsbc-migration
   - **Candidato**: Case "never say not my job" (sefaz-rollback? novo case?)
   - **Conceito**: Assumiu problema de outra área

4. **Q6** (50 → 80+): Remapear de payment-incidents
   - **Candidato**: Case onde criou mecanismo robusto (Unimed AI prevenção fraude?)
   - **Conceito**: Ownership de melhoria sistêmica

5. **Q7** (45 → 80+): Remapear de hsbc-migration
   - **Candidato**: Case onde assumiu erro e corrigiu (novo case necessário?)
   - **Conceito**: Own mistakes transparentemente

### **PHASE 2: FULL Review Q8 (45 min)**
**Objetivo**: Elevar Q8 de 80 → 90

- **Case**: hsbc-migration-leadership
- **Foco**: Projeto início ao fim, end-to-end ownership
- **Ações**:
  - Expandir STAR com ownership end-to-end (não só técnico)
  - Adicionar FUPs sobre ownership de stakeholders, riscos, comunicação
  - Enfatizar "never say not my job" em momentos críticos

### **PHASE 3: FULL Review Q9 (30 min)**
**Objetivo**: Elevar Q9 de 75 → 85

- **Case**: hsbc-payment-reconciliation
- **Foco**: Mecanismo de prevenção, ownership sistêmico
- **Ações**:
  - Expandir Learning com mecanismo transferível
  - Adicionar FUP sobre como mecanismo preveniu problemas futuros
  - Métricas de impacto do mecanismo

### **PHASE 4: Criar Novo Case (opcional, 60 min)**
Se gaps persistirem após remapeamentos:
- **Conceito**: "Own mistakes" (Q7) ou "Ineficiência + ownership" (Q6)
- **Candidato**: Erro em projeto Bradesco/Sicredi, assumiu e corrigiu com mecanismo

### **PHASE 5: Final Validation (20 min)**
- Update CSV/JSON
- Run tests
- Generate coverage report

---

## 🎯 METAS (APÓS EXECUÇÃO)

### Targets por Questão

| Q# | Score Atual | Target | Ganho | Prioridade |
|----|-------------|--------|-------|------------|
| Q0 | 55 | **85** | +30 | 🔥 ALTA |
| Q1 | 45 | **85** | +40 | 🔥 ALTA |
| Q2 | 85 | **85** | - | ✅ Manter |
| Q3 | 45 | **85** | +40 | 🔥 ALTA |
| Q4 | 90 | **90** | - | ✅ Manter |
| Q5 | 95 | **95** | - | ✅ Manter |
| Q6 | 50 | **85** | +35 | 🔥 ALTA |
| Q7 | 45 | **85** | +40 | 🔥 ALTA |
| Q8 | 80 | **90** | +10 | ⚠️ MÉDIA |
| Q9 | 75 | **85** | +10 | ⚠️ MÉDIA |

### Métricas-Alvo

| Métrica | Atual | Target | Melhoria |
|---------|-------|--------|----------|
| **Score Médio** | 66.5 | **87** | **+20.5 pontos (30.8%)** |
| **Questões ≥80** | 4/10 (40%) | **10/10 (100%)** | **+150%** |
| **Questões ≥90** | 2/10 (20%) | **3/10 (30%)** | **+50%** |
| **Scores Críticos (<60)** | 5 | **0** | **ELIMINAR TODOS** ✅ |

---

## 🔍 ANÁLISE POR QUESTÃO (DETALHADA)

### Q0: "Responsabilidade além do escopo" (55 → 85)
**Pergunta**: "Nos conte uma situação onde você assumiu responsabilidade além do seu escopo de trabalho e área de conhecimento"

**Problema Atual**:
- Case: hsbc-migration-leadership
- Score: 55 (marginal, não crítico mas fraco)
- Issue: Case é sobre migração técnica, mas não enfatiza "além do escopo"

**Conceito Amazon**:
- Ownership = assumir responsabilidade além do job description
- "Never say that's not my job"
- Exemplo ideal: PM assumindo liderança técnica, ou técnico assumindo liderança de negócio

**Candidatos Remapeamento**:
1. **sefaz-emergency-rollback** (já usado em Q5):
   - Tech Lead tomou decisão de negócio sem consultar gestor
   - Score potencial: 85-90
   - **Pros**: Claro ownership além do escopo (técnico decidindo negócio)
   - **Cons**: Já usado em Q5 (mas pode ter FUPs diferentes)

2. **Bradesco Next** (disponível?):
   - PM assumindo liderança técnica em arquitetura
   - Score potencial: 80-85
   - **Pros**: PM indo além (two-way door, decisões técnicas)
   - **Cons**: Verificar se já overused

3. **Novo case** (criar se necessário):
   - Exemplo: PM assumindo liderança de dados (fora do escopo)
   - Score potencial: 85-90

**Recomendação**: Remapear para **sefaz-emergency-rollback** com FUP focado em "além do escopo técnico"

---

### Q1: "Além da função" (45 → 85)
**Pergunta**: "Me dê um exemplo de quando você foi além da sua função"

**Problema Atual**:
- Case: hsbc-migration-leadership
- Score: 45 ❌ (crítico)
- Issue: Muito genérico, não enfatiza "além da função"

**Conceito Amazon**:
- Similar a Q0, mas mais específico sobre função/role
- Exemplo: PM fazendo engenharia, engineer fazendo PM, IC fazendo liderança

**Candidatos Remapeamento**:
1. **sicredi-ml-credit-analysis**:
   - Primeiro PM a implementar ML (além da função tradicional de PM)
   - Score potencial: 85
   - **Pros**: Claro pioneirismo, além do PM tradicional
   - **Cons**: Verificar se já overused em Bias for Action

2. **unimed-ai-authorization**:
   - PM liderando inovação com AI (além da função tradicional)
   - Score potencial: 80-85
   - **Pros**: AI ownership, inovação
   - **Cons**: Verificar disponibilidade

**Recomendação**: Remapear para **sicredi-ml-credit-analysis** com FUP "além da função de PM"

---

### Q3: "Não é sua responsabilidade" (45 → 85)
**Pergunta**: "Como você age quando algo não é sua responsabilidade?"

**Problema Atual**:
- Case: hsbc-migration-leadership
- Score: 45 ❌ (crítico)
- Issue: Não demonstra claramente "assumi algo de outra área"

**Conceito Amazon**:
- **"Never say that's not my job"** — princípio core do Ownership
- Exemplo ideal: Assumiu problema de outra squad/área e resolveu

**Candidatos Remapeamento**:
1. **sefaz-emergency-rollback**:
   - Tech Lead tomou decisão de negócio (não era sua responsabilidade técnica)
   - Score potencial: 90
   - **Pros**: Perfeito alinhamento conceitual
   - **Cons**: Já usado em Q5 (e possivelmente Q0)

2. **Novo case** (ideal):
   - Exemplo: Assumiu problema de infraestrutura (não era responsabilidade de produto)
   - Score potencial: 85-90

**Recomendação**: Remapear para **sefaz-emergency-rollback** com FUP específico "not my job"

---

### Q6: "Ineficiência + ownership" (50 → 85)
**Pergunta**: "Me fale sobre quando você identificou uma ineficiência e tomou ownership para melhorar"

**Problema Atual**:
- Case: payment-incidents-prevention-mechanism
- Score: 50 (crítico)
- Issue: Case fraco, pouca ênfase em ownership proativo

**Conceito Amazon**:
- Identificar problema (mesmo fora do escopo)
- Tomar ownership para criar solução sistêmica
- Long-term thinking

**Candidatos Remapeamento**:
1. **unimed-ai-authorization**:
   - Identificou ineficiência em autorização manual, criou AI
   - Score potencial: 85-90
   - **Pros**: Clara ineficiência + solução inovadora
   - **Cons**: Verificar disponibilidade

2. **long-term-tradeoff** (já usado Q2, Q4):
   - Identificou débito técnico, assumiu trade-off
   - Score potencial: 80-85
   - **Pros**: Ownership de problema sistêmico
   - **Cons**: Já usado 2x

**Recomendação**: Remapear para **unimed-ai-authorization**

---

### Q7: "Responsabilidade por erros" (45 → 85)
**Pergunta**: "Como você lida com situações onde precisa assumir responsabilidade por erros?"

**Problema Atual**:
- Case: hsbc-migration-leadership
- Score: 45 ❌ (crítico)
- Issue: Não demonstra ownership de erro específico

**Conceito Amazon**:
- Own mistakes transparentemente
- Learn from failures
- Criar mecanismo para prevenir recorrência

**Candidatos Remapeamento**:
1. **Novo case** (NECESSÁRIO):
   - Exemplo: Erro em deploy, assumiu, corrigiu, criou CI/CD
   - Score potencial: 85-90
   - **Pros**: Perfeito alinhamento conceitual
   - **Cons**: Precisa criar

2. **hsbc-payment-reconciliation**:
   - Assumiu responsabilidade por reconciliação (erro de processo?)
   - Score potencial: 75-80
   - **Pros**: Já existe
   - **Cons**: Marginal, pode não ser erro explícito

**Recomendação**: **Criar novo case** ou FULL review do hsbc-payment com foco em erro

---

### Q8: "Projeto início ao fim" (80 → 90)
**Pergunta**: "Descreva um projeto que você liderou do início ao fim - como garantiu o sucesso?"

**Problema Atual**:
- Case: hsbc-migration-leadership
- Score: 80 (bom, mas pode melhorar)
- Issue: Falta ênfase em end-to-end ownership

**Conceito Amazon**:
- Ownership completo (ideation → delivery → sustain)
- "We complete things" mindset
- Não apenas executar, mas garantir sucesso

**Ações FULL Review**:
- Expandir Situation com contexto de ownership desde início
- Action: Detalhar cada fase (planning, execution, monitoring, handoff)
- Result: Métricas de sucesso em cada fase
- Learning: Framework de ownership end-to-end
- FUPs: +2 sobre ownership de riscos, stakeholders, sustaining

**Target**: 80 → 90 (+10)

---

### Q9: "Mecanismo prevenção" (75 → 85)
**Pergunta**: "Descreva quando você criou um mecanismo para prevenir problemas recorrentes em pagamentos"

**Problema Atual**:
- Case: hsbc-payment-reconciliation
- Score: 75 (marginal)
- Issue: Mecanismo não é central do case

**Conceito Amazon**:
- Ownership = criar mecanismos, não só resolver problemas
- Think long-term
- Scalable solutions

**Ações FULL Review**:
- Expandir Result com impacto do mecanismo (reduziu X% incidentes)
- Learning: Mecanismo transferível para outros projetos
- FUP: Como mecanismo foi replicado

**Target**: 75 → 85 (+10)

---

## 🚦 PRIORIZAÇÃO

### 🔥 **PRIORIDADE MÁXIMA** (5 questões críticas <60)
1. **Q1** (45 → 85, +40): Remapear para sicredi-ml (30 min)
2. **Q3** (45 → 85, +40): Remapear para sefaz-rollback (30 min)
3. **Q7** (45 → 85, +40): Criar novo case ou FULL review hsbc-payment (60 min)
4. **Q6** (50 → 85, +35): Remapear para unimed-ai (30 min)
5. **Q0** (55 → 85, +30): Remapear para sefaz-rollback (30 min)

**Impacto combinado**: +185 pontos (média +37/questão)

### ⚠️ **PRIORIDADE MÉDIA** (2 questões marginais)
6. **Q8** (80 → 90, +10): FULL review hsbc-migration (45 min)
7. **Q9** (75 → 85, +10): FULL review hsbc-payment (30 min)

**Impacto combinado**: +20 pontos

### ✅ **MANTER** (3 questões já excelentes)
- **Q2** (85): long-term-tradeoff
- **Q4** (90): long-term-tradeoff
- **Q5** (95): sefaz-emergency-rollback

---

## 📊 IMPACTO PROJETADO

### Se executar TODAS as phases:

**Antes**:
- Score médio: 66.5
- Questões ≥80: 4/10 (40%)
- Críticos (<60): 5

**Depois**:
- Score médio: **87** (+20.5, +30.8%)
- Questões ≥80: **10/10 (100%)**
- Críticos (<60): **0** ✅

### Ganhos por Phase:

| Phase | Questões | Ganho | Tempo |
|-------|----------|-------|-------|
| 1 (Remaps) | Q0,Q1,Q3,Q6 | +145 | 2h |
| 2 (Q8 FULL) | Q8 | +10 | 45 min |
| 3 (Q9 FULL) | Q9 | +10 | 30 min |
| 4 (Q7 New) | Q7 | +40 | 60 min |
| **TOTAL** | 7 | **+205** | **~4h15min** |

---

## 🎯 PRÓXIMOS PASSOS IMEDIATOS

1. ✅ **Ingestão completa** (CONCLUÍDA — este documento)
2. ⏭️ **Buscar cases candidatos** (verificar disponibilidade sicredi-ml, unimed-ai, sefaz-rollback)
3. ⏭️ **Executar PHASE 1**: Remapear Q0, Q1, Q3, Q6 (2h)
4. ⏭️ **Decidir Q7**: Criar novo case ou FULL review hsbc-payment
5. ⏭️ **Executar PHASE 2-3**: FULL reviews Q8, Q9 (1h15min)
6. ⏭️ **PHASE 5**: Validação final (20 min)

---

**Responsável**: GitHub Copilot  
**Data Criação**: 2025-10-06  
**Status**: ✅ ANÁLISE COMPLETA — PRONTO PARA EXECUÇÃO
