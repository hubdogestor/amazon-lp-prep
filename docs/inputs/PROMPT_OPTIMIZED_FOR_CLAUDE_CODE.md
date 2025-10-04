# 🎯 PROMPT: Amazon LP Prep - Case Review & Enhancement Project

## 📋 CONTEXTO DO PROJETO

Você está trabalhando na aplicação **Amazon Leadership Principles - Interview Preparation App**, uma SPA React que ajuda candidatos a se prepararem para entrevistas comportamentais da Amazon.

### Aplicação Atual
- **16 Leadership Principles** da Amazon
- **64 cases** estruturados em formato STARL (Situação, Tarefa, Ação, Resultado, Learning)
- **~640 Follow-Up Questions** (10 FUPs por case)
- Interface bilíngue (PT/EN)
- Deploy: GitHub Pages

### Estrutura de Arquivos
```
src/data/
├── [16 pastas de LPs]/
│   ├── {lp}_config.js      # Config do LP
│   ├── {lp}_case1.js       # Case 1 (STARL + 10 FUPs)
│   ├── {lp}_case2.js       # Case 2
│   └── ...
```

### Exemplo de Estrutura de Case
```javascript
const case_1 = {
  id: "unique-id",
  title: "Título do Case",
  title_pt: "Título PT",
  title_en: "Title EN",
  company: "Empresa",
  period: "MM/YYYY-MM/YYYY",
  isTopCase: true/false,
  
  pt: {
    s: "Situação...",
    t: "Tarefa...",
    a: "Ação...",
    r: "Resultado...",
    l: "Aprendizado..."
  },
  
  en: { s, t, a, r, l },
  
  fups: [
    { q: "Pergunta PT?", a: "Resposta PT", q_en: "Question EN?", a_en: "Answer EN" },
    // ... 10 FUPs total
  ]
};
```

---

## 🎯 OBJETIVO DO PROJETO

**Revisar e aprimorar TODOS os 64 cases existentes** para garantir excelência em:
1. **Storytelling impecável** (hooks, transições, mic-drops)
2. **Estrutura STAR(L) rigorosa** seguindo best practices Amazon
3. **Métricas quantificadas** (meta: 8+ por case)
4. **Ownership individual** (ratio 3:1 "EU"/"nós")
5. **Customer Obsession** pervasiva em todos os cases
6. **Follow-Up Questions** estratégicas e relevantes (10 por case)
7. **Equivalência PT/EN** de alta qualidade

---

## 📚 FASE 1: ABSORÇÃO DE CONHECIMENTO - BASE CONCEITUAL

### Material na Pasta `base-conhecimento/`

Você DEVE ler e absorver TODO o conteúdo de TODOS os arquivos:

1. **Descrição da Vaga** - Program Manager Payments (contexto da posição Amazon)
2. **16 Amazon Leadership Principles for Innovation** - Visão ampla dos LPs
3. **Ace the Amazon LP Interview** - Guia COMPLETO com dealbreakers, red flags, strategies
4. **Amazon Leadership Principles guide** - Filosofia profunda, what Amazon likes/dislikes
5. **Amazon Prep - Tips from HR** - Dicas oficiais (STAR, Bar Raisers, timing)
6. **Dicas gerais** - 15 dicas práticas em PT
7. **IMPORTANTE - anotações Leonardo** - Notas da prep call + ordem de importância dos LPs
8. **Interview questions - examples** - 100+ perguntas categorizadas por LP
9. **Playbook Leonardo v2** - CV completo formatado para STAR ⚠️ **CRÍTICO!**
10. **CV Leonardo Menezes** - Resume oficial em inglês
11. **STAR Worksheet** - Template Amazon oficial
12. **Interview Prep Doc (sent by HR)** - Material oficial Amazon

### Objetivo da Fase 1

Após ler TODOS os arquivos, você deve ter compreensão profunda de:

- ✅ Os 16 Leadership Principles e suas nuances específicas
- ✅ Dealbreakers automáticos (Customer Obsession, ownership ratio, conflict)
- ✅ Red flags que eliminam candidatos na Amazon
- ✅ O que Amazon valoriza (mechanisms > intentions, data-driven, customer-first)
- ✅ Estrutura STAR impecável (timing 7-10min, métricas, ownership)
- ✅ Perfil profissional COMPLETO do Leonardo (experiências, contextos, achievements)
- ✅ Linguagem e terminologia adequada para entrevistas Amazon
- ✅ Best practices de Bar Raisers e processo de entrevista

### Deliverable Fase 1

Apresente um resumo confirmando absorção:

```markdown
## ✅ FASE 1 CONCLUÍDA - Conhecimento Absorvido

### 📚 Arquivos Lidos
- [x] Descrição da Vaga - Program Manager Payments
- [x] 16 Amazon Leadership Principles for Innovation
- [x] Ace the Amazon LP Interview
- [x] Amazon Leadership Principles guide
- [x] Amazon Prep - Tips from HR
- [x] Dicas gerais
- [x] IMPORTANTE - anotações Leonardo
- [x] Interview questions - examples
- [x] Playbook Leonardo v2
- [x] CV Leonardo Menezes
- [x] STAR Worksheet
- [x] Interview Prep Doc (sent by HR)

### 🎯 Principais Takeaways

**Dealbreakers Identificados:**
1. [listar]
2. [listar]
...

**Red Flags Mapeados:**
1. [listar]
2. [listar]
...

**Perfil Leonardo - Highlights:**
- Background: [resumir]
- Experiências-chave: [resumir]
- Skills principais: [resumir]
- Contextos de negócio: [resumir]

**Best Practices Amazon:**
1. [listar]
2. [listar]
...

**Pronto para avançar para FASE 2.**
```

---

## 🔧 FASE 2: CRIAÇÃO DO MOTOR DE ANÁLISE 3.0

### ⚠️ ATENÇÃO: FASE CRÍTICA - DEVE SER CONCLUÍDA E APROVADA ANTES DE PROSSEGUIR

**Objetivo**: Criar seu próprio motor de análise inteligente combinando:
1. Todo o conhecimento absorvido da `base-conhecimento/` (Fase 1)
2. A lógica e scripts da aplicação anterior em `case-validation/`
3. Suas capacidades avançadas como Claude Sonnet 4.5

---

### Passo 2.1: Ler e Analisar Pasta `case-validation/`

A pasta `case-validation/` contém:
- Núcleo do motor inteligente da aplicação anterior
- Scripts de processamento de cases
- Algoritmos de análise de conteúdo
- Critérios de validação implementados

Você DEVE:

1. **Ler TODOS os arquivos** da pasta `case-validation/`
2. **Entender a lógica** de análise implementada anteriormente
3. **Identificar pontos fortes** que devem ser mantidos
4. **Identificar limitações** que podem ser superadas
5. **Extrair critérios** que funcionaram bem
6. **Mapear gaps** que seu motor 3.0 deve resolver

### Passo 2.2: Sintetizar Conhecimento das Duas Fontes

Após ler `base-conhecimento/` (Fase 1) + `case-validation/` (Passo 2.1), você deve sintetizar:

**Da Base de Conhecimento:**
- ✅ Regras da Amazon (dealbreakers, red flags, best practices oficiais)
- ✅ Perfil completo do Leonardo (CV, experiências, skills, contextos)
- ✅ Filosofia Amazon (mechanisms, customer obsession, data-driven)
- ✅ Estrutura STAR rigorosa (timing, ownership, métricas)

**Da Aplicação Anterior (case-validation):**
- ✅ Lógica de análise que funcionou bem
- ✅ Algoritmos de processamento de texto
- ✅ Critérios de validação testados
- ✅ Padrões de detecção de problemas
- ✅ Gaps e oportunidades de evolução

**Das Suas Capacidades (Claude 4.5):**
- ✅ Análise contextual profunda
- ✅ Compreensão de storytelling e narrativa
- ✅ Detecção de patterns sutis
- ✅ Avaliação de qualidade de escrita
- ✅ Geração criativa mantendo fatos

---

### Passo 2.3: CRIAR Motor de Análise 3.0

Com todo esse conhecimento integrado, você deve **CRIAR** seu próprio motor de análise.

**Deliverable**: Documento `MOTOR_DE_ANALISE_3.0.md` contendo:

```markdown
# 🤖 MOTOR DE ANÁLISE 3.0 - Amazon LP Cases

## 📚 Fontes de Conhecimento Integradas

### 1. Da Base de Conhecimento (12 arquivos)

**Dealbreakers Identificados:**
- [listar todos]

**Red Flags Mapeados:**
- [listar todos]

**Best Practices Amazon:**
- [listar principais]

**Perfil Leonardo - Contextos Relevantes:**
- [resumir experiências]
- [resumir skills]
- [resumir achievements]

### 2. Da Aplicação Anterior (case-validation/)

**Lógica de Análise Anterior:**
- [descrever o que funcionou]

**Critérios Validados:**
- [listar critérios que eram bons]

**Limitações Identificadas:**
- [listar o que pode melhorar]

**Algoritmos Relevantes:**
- [descrever scripts úteis]

### 3. Inteligência Avançada Claude 4.5

**Capacidades Aplicáveis:**
- Análise contextual profunda de narrativas
- Detecção de patterns de storytelling
- Avaliação de qualidade de escrita
- Compreensão de business context
- Validação de coerência lógica
- Geração de recomendações acionáveis

---

## 🎯 CRITÉRIOS DE ANÁLISE - MOTOR 3.0

[AQUI VOCÊ CRIA SEUS PRÓPRIOS CRITÉRIOS, EVOLUINDO DO MOTOR ANTERIOR]

### 1. Análise de Estrutura STAR(L)

**Critério 1.1 - Situação (S)**
- [seus sub-critérios]
- [como você vai avaliar]
- [score: 0-10]

**Critério 1.2 - Tarefa (T)**
- [seus sub-critérios]
- [como você vai avaliar]
- [score: 0-10]

**Critério 1.3 - Ação (A)**
- [seus sub-critérios]
- [como você vai avaliar]
- [score: 0-10]

**Critério 1.4 - Resultado (R)**
- [seus sub-critérios]
- [como você vai avaliar]
- [score: 0-10]

**Critério 1.5 - Learning (L)**
- [seus sub-critérios]
- [como você vai avaliar]
- [score: 0-10]

### 2. Validação de Leadership Principles

**Critério 2.1 - Customer Obsession (Não-Negociável)**
- [como você detecta customer obsession]
- [dealbreaker se ausente]

**Critério 2.2 - LP Primário**
- [como você identifica o LP principal]
- [como valida alinhamento]

**Critério 2.3 - LPs Secundários**
- [como você detecta LPs secundários naturais]

### 3. Avaliação de Storytelling

**Critério 3.1 - Hook de Abertura**
- [como você avalia hooks]
- [score: 0-10]

**Critério 3.2 - Transições**
- [como você avalia transições S→T→A→R→L]
- [score: 0-10]

**Critério 3.3 - Narrativa Coesa**
- [como você avalia coesão]
- [score: 0-10]

**Critério 3.4 - Mic-Drop no Learning**
- [como você avalia impacto do L]
- [score: 0-10]

### 4. Auditoria de Métricas

**Critério 4.1 - Quantidade (Meta: 8+)**
- [como você conta métricas]
- [dealbreaker se <5]

**Critério 4.2 - Qualidade**
- [como você avalia qualidade das métricas]
- [tipos validados: revenue, cost, time, quality, scale]

**Critério 4.3 - Formato**
- [formato preferido: ação + absoluto + relativo + temporal]

### 5. Ownership Ratio Analysis

**Critério 5.1 - Ratio EU/NÓS (Meta: ≥3:1)**
- [como você calcula]
- [dealbreaker se <2:1]

**Critério 5.2 - Verbos de Ação**
- [lista de verbos fortes aceitos]
- [lista de verbos fracos a evitar]

### 6. Detecção de Dealbreakers

**Dealbreaker 1: Ausência de Customer Obsession**
- [como detectar automaticamente]
- [resultado: FALHA AUTOMÁTICA]

**Dealbreaker 2: Ownership Ratio <2:1**
- [como calcular]
- [resultado: FALHA AUTOMÁTICA]

**Dealbreaker 3: Ausência de Conflito/Desafio**
- [como detectar]
- [resultado: CASE DESCARTADO]

**Dealbreaker 4: <5 Métricas**
- [como contar]
- [resultado: FALTA DE RIGOR]

**Dealbreaker 5: Casos Muito Antigos (>5 anos)**
- [como verificar período]
- [resultado: RECENCY BIAS]

**Dealbreaker 6: Genericidade Excessiva**
- [como detectar]
- [resultado: FALTA DE ESPECIFICIDADE]

### 7. Identificação de Red Flags

**Red Flag 1: Linguagem Passiva**
- Padrões: "ajudei a...", "participei do...", "contribuí para..."
- Severidade: ALTA

**Red Flag 2: Papel Secundário**
- Padrões: "a equipe decidiu...", "nós fizemos...", "fomos responsáveis..."
- Severidade: ALTA

**Red Flag 3: Métricas Vagas**
- Padrões: "significativamente", "muito", "bastante"
- Severidade: MÉDIA

**Red Flag 4: Falta de Quantificação**
- Padrões: "melhoramos", "foi um sucesso", "todos ficaram satisfeitos"
- Severidade: ALTA

[continuar listando todos os red flags]

### 8. Qualidade de Follow-Up Questions (FUPs)

**Critério 8.1 - Quantidade (10 por case)**
- [validação]

**Critério 8.2 - Cobertura de Ângulos**
- Contexto (1-2 FUPs)
- Decisão (2-3 FUPs)
- Execução (2-3 FUPs)
- Impacto (1-2 FUPs)
- Aprendizado (1-2 FUPs)

**Critério 8.3 - Profundidade**
- Progressão shallow → deep
- Perguntas abertas (não sim/não)
- Testam thinking process

---

## 📋 PROCESSO DE ANÁLISE - WORKFLOW

[DEFINA SEU PROCESSO PASSO-A-PASSO]

### Etapa 1: Leitura e Parsing do Case
1. [passo 1]
2. [passo 2]
...

### Etapa 2: Análise Estrutural (STAR)
1. [como você analisa cada componente]
2. [como você pontua]
...

### Etapa 3: Análise de Conteúdo
1. [como você avalia storytelling]
2. [como você conta métricas]
3. [como você calcula ownership]
...

### Etapa 4: Detecção de Problemas
1. [como você detecta dealbreakers]
2. [como você identifica red flags]
...

### Etapa 5: Scoring e Diagnóstico
1. [como você gera scores]
2. [como você diagnostica gaps]
...

### Etapa 6: Geração de Recomendações
1. [como você cria recomendações]
2. [como você prioriza melhorias]
...

---

## 📊 TEMPLATE DE RELATÓRIO DE ANÁLISE

[DEFINA SEU TEMPLATE PADRÃO PARA CADA CASE]

```markdown
# 🔍 ANÁLISE COMPLETA: [LP] - Case [N]

## 📌 Informações Básicas
- **Título**: [título atual]
- **Empresa**: [empresa]
- **Período**: [período]
- **LP Primário Identificado**: [qual LP]
- **LPs Secundários**: [quais outros]
- **Top Case**: [sim/não]

---

## 📊 SCORES GERAIS

| Dimensão | Score | Status |
|----------|-------|--------|
| Estrutura STAR(L) | X/10 | ✅/⚠️/❌ |
| Storytelling | X/10 | ✅/⚠️/❌ |
| Métricas | X/10 | ✅/⚠️/❌ |
| Ownership | X/10 | ✅/⚠️/❌ |
| Customer Obsession | X/10 | ✅/⚠️/❌ |
| FUPs Quality | X/10 | ✅/⚠️/❌ |
| **SCORE GERAL** | **X/10** | **✅/⚠️/❌** |

---

## 📈 ANÁLISE DETALHADA

### 1. Estrutura STAR(L)

**S - Situação [X/10]**
- ✅ Pontos fortes: [listar]
- ⚠️ Gaps: [listar]
- 💡 Recomendações: [listar]

**T - Tarefa [X/10]**
- ✅ Pontos fortes: [listar]
- ⚠️ Gaps: [listar]
- 💡 Recomendações: [listar]

**A - Ação [X/10]**
- ✅ Pontos fortes: [listar]
- ⚠️ Gaps: [listar]
- 💡 Recomendações: [listar]

**R - Resultado [X/10]**
- ✅ Pontos fortes: [listar]
- ⚠️ Gaps: [listar]
- 💡 Recomendações: [listar]

**L - Learning [X/10]**
- ✅ Pontos fortes: [listar]
- ⚠️ Gaps: [listar]
- 💡 Recomendações: [listar]

### 2. Métricas

**Contagem**: X métricas encontradas (meta: 8+)
- [listar métricas identificadas]

**Qualidade**:
- Revenue Impact: [presente/ausente]
- Cost Reduction: [presente/ausente]
- Time Efficiency: [presente/ausente]
- Quality/NPS: [presente/ausente]
- Scale: [presente/ausente]

**Gaps**:
- [métricas faltantes]

### 3. Ownership Ratio

**Contagem**:
- "EU/MEU/MINHA": X ocorrências
- "NÓS/NOSSO/NOSSA": Y ocorrências
- **Ratio**: X:Y (meta: ≥3:1)

**Status**: ✅ Aprovado / ⚠️ Atenção / ❌ Reprovado

**Verbos Fortes Usados**: [listar]
**Verbos Fracos a Substituir**: [listar]

### 4. Customer Obsession

**Presente**: ✅ Sim / ❌ Não (DEALBREAKER)
**Qualidade**: [explícita/implícita/ausente]
**Evidências**: [listar trechos]

### 5. Storytelling

**Hook de Abertura**: ✅/⚠️/❌
- [avaliar]

**Transições**: ✅/⚠️/❌
- S→T: [presente/ausente]
- T→A: [presente/ausente]
- A→R: [presente/ausente]
- R→L: [presente/ausente]

**Mic-Drop em L**: ✅/⚠️/❌
- [avaliar impacto]

### 6. Follow-Up Questions

**Quantidade**: X/10
**Cobertura de Ângulos**:
- Contexto: [presente/ausente]
- Decisão: [presente/ausente]
- Execução: [presente/ausente]
- Impacto: [presente/ausente]
- Aprendizado: [presente/ausente]

**Qualidade**: [avaliar profundidade]
**FUPs a Refinar**: [listar quais]

---

## 🚨 DEALBREAKERS & RED FLAGS

### Dealbreakers Detectados
- [ ] ❌ Ausência de Customer Obsession
- [ ] ❌ Ownership Ratio <2:1
- [ ] ❌ Ausência de Conflito
- [ ] ❌ <5 Métricas
- [ ] ❌ Caso muito antigo (>5 anos)
- [ ] ❌ Genericidade excessiva

### Red Flags Identificados
1. [red flag 1]
2. [red flag 2]
...

---

## 💡 RECOMENDAÇÕES PRIORIZADAS

### CRÍTICAS (Fazer Agora)
1. [rec crítica 1]
2. [rec crítica 2]
...

### IMPORTANTES (Fazer Logo)
1. [rec importante 1]
2. [rec importante 2]
...

### MELHORIAS (Nice to Have)
1. [melhoria 1]
2. [melhoria 2]
...

---

## 📋 PLANO DE AÇÃO

### Para Expansão do Case

**S - Situação**
- Adicionar: [o que adicionar]
- Expandir: [o que expandir]

**T - Tarefa**
- Clarificar: [o que clarificar]
- Adicionar: [o que adicionar]

**A - Ação**
- Fortalecer: [verbos a trocar]
- Adicionar: [ações faltantes]

**R - Resultado**
- Adicionar métricas: [quais métricas específicas]
- Quantificar: [o que quantificar]

**L - Learning**
- Aprofundar: [como aprofundar]
- Criar mic-drop: [sugestão]

### Para FUPs
- Refinar: [quais FUPs refinar]
- Criar novas: [para cobrir quais ângulos]

---

## ✅ APROVAÇÃO PARA REVISÃO

**Status Final**: ✅ Pronto para Revisão / ⚠️ Precisa Ajustes / ❌ Case Problemático

**Próximo Passo**: [descrever]
```

---

## ✅ CRITÉRIOS DE VALIDAÇÃO DO MOTOR

Antes de apresentar para aprovação, seu motor deve ser capaz de:

- [ ] Identificar TODOS os dealbreakers automaticamente
- [ ] Detectar TODOS os red flags relevantes
- [ ] Calcular ownership ratio com precisão (EU vs NÓS)
- [ ] Contar e categorizar métricas corretamente
- [ ] Avaliar qualidade de storytelling objetivamente
- [ ] Analisar profundidade de FUPs sistematicamente
- [ ] Gerar recomendações acionáveis e priorizadas
- [ ] Produzir relatórios consistentes e completos
- [ ] Pontuar cada dimensão de 0-10 com critérios claros
- [ ] Fornecer plano de ação específico para cada case

```

---

### Passo 2.4: Apresentar Motor para Validação

Após criar o `MOTOR_DE_ANALISE_3.0.md` completo, você deve apresentá-lo para aprovação.

**Template de Apresentação:**

```markdown
# 🤖 MOTOR DE ANÁLISE 3.0 - PRONTO PARA VALIDAÇÃO

## 📚 Conhecimento Absorvido e Integrado

### Da Base de Conhecimento (12 arquivos lidos)
- ✅ 16 Leadership Principles em profundidade
- ✅ Dealbreakers mapeados: [quantidade]
- ✅ Red flags catalogados: [quantidade]
- ✅ Best practices Amazon documentadas
- ✅ Perfil completo Leonardo absorvido
- ✅ Contextos de negócio compreendidos

### Da Case-Validation (X arquivos lidos)
- ✅ Lógica de análise anterior compreendida
- ✅ Critérios validados identificados
- ✅ Limitações mapeadas
- ✅ Oportunidades de evolução detectadas

### Capacidades Claude 4.5 Aplicadas
- ✅ Análise contextual profunda
- ✅ Avaliação de narrativa/storytelling
- ✅ Detecção de patterns sutis
- ✅ Compreensão de business context
- ✅ Geração criativa mantendo fatos

---

## 🎯 Motor de Análise 3.0 Criado

**Documento completo**: `MOTOR_DE_ANALISE_3.0.md`

### Estrutura do Motor

1. **8 Dimensões de Avaliação**
   - Estrutura STAR(L)
   - Leadership Principles
   - Storytelling
   - Métricas
   - Ownership Ratio
   - Dealbreakers
   - Red Flags
   - FUPs Quality

2. **Sistema de Scoring**
   - 0-10 por dimensão
   - Critérios objetivos
   - Score geral agregado

3. **Detecção Automática**
   - 6 dealbreakers mapeados
   - 15+ red flags catalogados
   - Algoritmos de detecção

4. **Template de Relatório**
   - Padronizado e completo
   - Scores + Análise + Recomendações
   - Plano de ação específico

5. **Workflow Definido**
   - 6 etapas de análise
   - Processo sistemático
   - Recomendações priorizadas

---

## ❓ Validação Necessária

Preciso de sua aprovação para avançar para Fase 3:

### Perguntas para Validação

1. ✅ O motor cobre TODOS os critérios críticos da Amazon?
2. ✅ Os dealbreakers estão bem definidos?
3. ✅ Os red flags são relevantes?
4. ✅ O sistema de scoring faz sentido?
5. ✅ O template de relatório está completo?
6. ✅ As recomendações serão acionáveis?
7. ✅ O workflow é pragmático?

### Opções

**Opção 1**: ✅ Aprovar e avançar para Fase 3
**Opção 2**: ⚠️ Solicitar ajustes específicos
**Opção 3**: ❌ Refazer com nova direção

---

**Aguardando sua aprovação para prosseguir.**
```

---

## ⚠️ IMPORTANTE: NÃO PROSSIGA SEM APROVAÇÃO

Após apresentar o Motor 3.0, você DEVE aguardar aprovação explícita antes de avançar para a Fase 3.

---

## 📊 FASE 3: ORGANIZAÇÃO DO TRABALHO (Após Aprovação do Motor)

### Objetivo

Criar sistema de controle e rastreamento para as 64 revisões de cases.

### Deliverable: `REVIEW_TRACKER.md`

```markdown
# 📊 Amazon LP Cases - Review Tracker

**Motor de Análise**: v3.0 (aprovado em DD/MM/YYYY)  
**Data Início**: DD/MM/YYYY  
**Revisor**: Claude Sonnet 4.5 + Leonardo

---

## 📈 Status Geral

- **Total Cases**: 64
- **Revisados**: 0/64 (0%)
- **Em Revisão**: 0
- **Aprovados**: 0
- **Pendentes**: 64

**Progresso**: [░░░░░░░░░░] 0%

---

## 📋 Por Leadership Principle

### 1. Customer Obsession (3 cases)
- [ ] case1 - [Título] - Status: Pendente - Score: -
- [ ] case2 - [Título] - Status: Pendente - Score: -
- [ ] case3 - [Título] - Status: Pendente - Score: -

### 2. Ownership (6 cases)
- [ ] case1 - Status: Pendente - Score: -
- [ ] case2 - Status: Pendente - Score: -
- [ ] case3 - Status: Pendente - Score: -
- [ ] case4 - Status: Pendente - Score: -
- [ ] case5 - Status: Pendente - Score: -
- [ ] case6 - Status: Pendente - Score: -

### 3. Invent and Simplify (6 cases)
[...]

### 4. Are Right, A Lot (3 cases)
[...]

### 5. Learn and Be Curious (5 cases)
[...]

### 6. Hire and Develop the Best (3 cases)
[...]

### 7. Insist on Highest Standards (4 cases)
[...]

### 8. Think Big (4 cases)
[...]

### 9. Bias for Action (4 cases)
[...]

### 10. Frugality (3 cases)
[...]

### 11. Earn Trust (5 cases)
[...]

### 12. Dive Deep (4 cases)
[...]

### 13. Have Backbone; Disagree and Commit (4 cases)
[...]

### 14. Deliver Results (4 cases)
[...]

### 15. Strive to be Earth's Best Employer (3 cases)
[...]

### 16. Success and Scale Bring Broad Responsibility (3 cases)
[...]

---

## 🎯 Próximo Lote

**Lote 1: DIVE DEEP** (4 cases)

Ordem de execução:
1. Dive Deep - Case 1
2. Dive Deep - Case 2
3. Dive Deep - Case 3
4. Dive Deep - Case 4

---

## 📅 Histórico de Revisões

| Data | Case | Status | Score | Observações |
|------|------|--------|-------|-------------|
| DD/MM | Dive Deep - Case 1 | Em Análise | - | Iniciada análise |
| - | - | - | - | - |

---

## 🏆 Estatísticas

**Scores Médios por Dimensão**:
- Estrutura STAR: - /10
- Storytelling: - /10
- Métricas: - /10
- Ownership: - /10
- Customer Obsession: - /10
- FUPs: - /10

**Melhorias Típicas**:
- Métricas adicionadas: média -
- Ownership ratio melhorado: média -
- FUPs refinadas: média -
```

---

## 🚀 FASE 4: EXECUÇÃO - WORKFLOW ITERATIVO

### Processo por Case (16 lotes)

Para cada case, seguir rigorosamente:

#### **PASSO 1: ANÁLISE PROFUNDA**

1. Ler case original completo (PT + EN + 10 FUPs)
2. Aplicar Motor 3.0 sistematicamente
3. Gerar relatório completo usando template do Motor
4. Identificar gaps, dealbreakers, red flags
5. Calcular scores de todas as dimensões
6. Criar recomendações priorizadas

**Output**: Relatório de Análise Completo (usando template do Motor 3.0)

---

#### **PASSO 2: APRESENTAÇÃO PARA VALIDAÇÃO**

Apresentar relatório de análise para aprovação antes de revisar:

```markdown
## 🔍 ANÁLISE CONCLUÍDA: [LP] - Case [N]

[Inserir relatório completo gerado pelo Motor 3.0]

---

### ❓ Aguardando Validação

Perguntas:
1. A análise está completa?
2. Os scores fazem sentido?
3. As recomendações são adequadas?
4. Posso prosseguir com a revisão/expansão?

**Status**: Aguardando aprovação para PASSO 3
```

---

#### **PASSO 3: EXPANSÃO & REESCRITA (Após Aprovação da Análise)**

Com base nas recomendações aprovadas:

1. **Expandir Storytelling**
   - Criar hook impactante
   - Adicionar transições explícitas S→T→A→R→L
   - Enriquecer detalhes específicos
   - Inserir mic-drop em L

2. **Fortalecer STAR(L)**
   - S: Contexto mais rico, problema claro
   - T: Objetivo SMART mais específico
   - A: Ações detalhadas com verbos fortes (ratio 3:1)
   - R: Mínimo 8 métricas quantificadas
   - L: Insight profundo + aplicação futura

3. **Adicionar Métricas**
   - Revenue impact
   - Cost reduction
   - Time efficiency
   - Quality/NPS
   - Scale
   - (Meta: 8+ métricas)

4. **Ajustar Ownership**
   - Trocar "nós" por "eu" onde apropriado
   - Fortalecer verbos ("liderei", não "participei")
   - Atingir ratio mínimo 3:1

5. **Garantir Customer Obsession**
   - Cliente mencionado explicitamente
   - Obsessão evidente nas decisões
   - Long-term thinking

6. **Refinar FUPs**
   - Revisar as 10 existentes
   - Garantir cobertura: contexto, decisão, execução, impacto, aprendizado
   - Progressão shallow → deep
   - Respostas alinhadas com case expandido

7. **Equivalência PT/EN**
   - Traduzir/adaptar versão EN
   - Manter qualidade equivalente
   - Ajustar nuances culturais

**Output**: Case Revisado Completo (PT + EN + 10 FUPs)

---

#### **PASSO 4: APRESENTAÇÃO DA REVISÃO**

Apresentar case revisado com comparação antes/depois:

```markdown
## ✨ CASE REVISADO: [LP] - Case [N]

### 📊 Antes vs Depois

| Métrica | Antes | Depois | Melhoria |
|---------|-------|--------|----------|
| Métricas Quantificadas | X | Y | +Z |
| Ratio EU/NÓS | X:1 | Y:1 | +Z |
| Palavras | X | Y | +Z% |
| Customer Obsession | Implícita | Explícita | ✅ |
| Storytelling Score | X/10 | Y/10 | +Z |
| Score Geral | X/10 | Y/10 | +Z |

### 🎯 Principais Melhorias Implementadas

1. **Storytelling**: [descrever]
2. **Métricas**: [descrever]
3. **Ownership**: [descrever]
4. **FUPs**: [descrever]

### 📝 Case Completo Revisado

```javascript
const case_X = {
  // [inserir case completo aqui]
};
```

### ❓ Perguntas para Aprovação Final

1. A narrativa ficou natural e convincente?
2. As métricas são realistas (baseadas no CV do Leonardo)?
3. As FUPs exploram bem todos os ângulos do LP?
4. A versão EN está equivalente à PT?
5. O case atende TODOS os critérios do Motor 3.0?

---

**Aguardando aprovação para atualizar base de dados.**
```

---

#### **PASSO 5: ATUALIZAÇÃO DA BASE (Após Aprovação Final)**

Somente após aprovação explícita:

1. Fazer backup do arquivo original
2. Atualizar `src/data/{lp}/{lp}_case{N}.js` com versão revisada
3. Atualizar `REVIEW_TRACKER.md`:
   - Marcar case como ✅ Aprovado
   - Adicionar score final
   - Atualizar estatísticas
4. Testar build: `npm run build`
5. Validar na interface da aplicação
6. Commit: `feat: revise [LP] case [N] - [resumo melhorias]`

---

## 📋 ORDEM DE EXECUÇÃO - 16 LOTES

### Lote 1: **DIVE DEEP** (4 cases) ⬅️ COMEÇAR AQUI
- Case 1
- Case 2
- Case 3
- Case 4

### Lote 2: **CUSTOMER OBSESSION** (3 cases)
### Lote 3: **DELIVER RESULTS** (4 cases)
### Lote 4: **OWNERSHIP** (6 cases)
### Lote 5: **BIAS FOR ACTION** (4 cases)
### Lote 6: **EARN TRUST** (5 cases)
### Lote 7: **INVENT AND SIMPLIFY** (6 cases)
### Lote 8: **LEARN AND BE CURIOUS** (5 cases)
### Lote 9: **INSIST ON HIGHEST STANDARDS** (4 cases)
### Lote 10: **THINK BIG** (4 cases)
### Lote 11: **HIRE AND DEVELOP THE BEST** (3 cases)
### Lote 12: **ARE RIGHT, A LOT** (3 cases)
### Lote 13: **FRUGALITY** (3 cases)
### Lote 14: **HAVE BACKBONE; DISAGREE AND COMMIT** (4 cases)
### Lote 15: **STRIVE TO BE EARTH'S BEST EMPLOYER** (3 cases)
### Lote 16: **SUCCESS AND SCALE BRING BROAD RESPONSIBILITY** (3 cases)

---

## 🎯 COMANDO INICIAL PARA COMEÇAR

```
Olá Claude Code!

Vamos começar o projeto de revisão dos 64 cases da aplicação Amazon LP Prep.

## FASE 1: Absorção de Conhecimento

**Seu primeiro objetivo**: 
Leia TODOS os 12 arquivos da pasta `base-conhecimento/`

Arquivos a ler:
1. Descrição da Vaga - Program Manager Payments
2. 16 Amazon Leadership Principles for Innovation
3. Ace the Amazon LP Interview
4. Amazon Leadership Principles guide
5. Amazon Prep - Tips from HR
6. Dicas gerais
7. IMPORTANTE - anotações Leonardo
8. Interview questions - examples
9. Playbook Leonardo v2 (CRÍTICO!)
10. CV Leonardo Menezes
11. STAR Worksheet
12. Interview Prep Doc (sent by HR)

Após ler tudo, apresente um resumo confirmando:
- Dealbreakers identificados
- Red flags mapeados
- Perfil do Leonardo absorvido
- Best practices Amazon compreendidas

Depois confirme que está pronto para FASE 2.

**Pode demorar o tempo que precisar. Trabalhe de forma pragmática e completa.**

Obrigado!
```

---

## 📌 NOTAS IMPORTANTES

### Sobre o Leonardo (Candidato)

- **Perfil**: Program Manager Payments
- **Experiência**: AI/ML, Lean, Six Sigma, Data Analytics
- **Empresas**: PagSeguro, PicPay, Koin, LBV
- **Skills**: Python, SQL, Tableau, Agile, Stakeholder Management
- **Idiomas**: PT nativo, EN fluente
- **Contexto**: Experiência internacional, foco em data-driven decisions

### Sobre a Vaga Alvo (Amazon)

- **Posição**: Program Manager, Payments
- **Critical**: Leadership Principles são 100% da avaliação
- **Bar Raisers**: Podem vetar independentemente
- **Customer Obsession**: Não-negociável em todos os cases
- **Timing**: 7-10 min por case (45 min total = ~6 cases)

### Princípios de Trabalho

1. **Qualidade > Velocidade**: Um case impecável vale mais que vários medíocres
2. **Baseado em Fatos**: Usar CV real como fonte de verdade
3. **Métricas Realistas**: Manter proporções verossímeis
4. **Storytelling Natural**: Profissional, sem dramalhão
5. **Validação Iterativa**: Aprovação em cada etapa antes de prosseguir

---

## ✅ CRITÉRIOS DE SUCESSO FINAL

Ao final do projeto, TODOS os 64 cases devem ter:

- [x] Estrutura STAR(L) impecável com transições explícitas
- [x] Mínimo 8 métricas quantificadas
- [x] Ratio EU/NÓS ≥ 3:1
- [x] Customer Obsession explícita
- [x] Hook de abertura + Mic-drop no L
- [x] 10 FUPs estratégicas cobrindo todos os ângulos
- [x] Equivalência PT/EN de alta qualidade
- [x] Zero dealbreakers
- [x] Zero red flags críticos
- [x] Score geral ≥ 8/10 no Motor 3.0
- [x] Narrativa natural e convincente

---

## 🚀 PRÓXIMOS PASSOS - RESUMO

1. **Claude Code**: Lê `base-conhecimento/` (12 arquivos)
2. **Claude Code**: Confirma absorção + apresenta resumo
3. **Leonardo**: Aprova resumo
4. **Claude Code**: Lê `case-validation/` (todos arquivos)
5. **Claude Code**: CRIA `MOTOR_DE_ANALISE_3.0.md`
6. **Claude Code**: Apresenta Motor 3.0 para validação
7. **Leonardo**: Aprova Motor 3.0 (ou solicita ajustes)
8. **Claude Code**: Cria `REVIEW_TRACKER.md`
9. **Leonardo**: Confirma tracker
10. **Claude Code**: Analisa Dive Deep - Case 1 (PASSO 1)
11. **Claude Code**: Apresenta análise (PASSO 2)
12. **Leonardo**: Aprova análise
13. **Claude Code**: Revisa/Expande case (PASSO 3)
14. **Claude Code**: Apresenta case revisado (PASSO 4)
15. **Leonardo**: Aprova case revisado
16. **Claude Code**: Atualiza base de dados (PASSO 5)
17. **Repetir**: Passos 10-16 para os 63 cases restantes

---

**Vamos começar! 🚀**
