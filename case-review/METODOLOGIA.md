# 🎯 METODOLOGIA DE REVISÃO - 68 Cases Amazon LP

**Autor**: Claude
**Data**: 2025-10-08
**Objetivo**: Revisar sistematicamente 68 cases para atingir excelência em entrevistas Amazon L5/L6

---

## 📋 VISÃO GERAL

### **Filosofia da Metodologia**

1. **Data-Driven**: Scoring quantitativo com critérios objetivos
2. **Priorização Inteligente**: Atacar primeiro casos com maior ROI
3. **Incremental**: Melhorias iterativas, não reescrita completa
4. **Rastreável**: Output estruturado para acompanhamento de progresso

### **Escopo**

- **68 cases** distribuídos em 16 Leadership Principles
- **~680 FUPs** (10 por case em média)
- **PT/EN parity** (versões em português e inglês)
- **Foco**: Conteúdo (STAR + FUPs), não código da aplicação

---

## 🔢 SISTEMA DE SCORING

### **Dimensões de Avaliação** (baseado em CRITERIOS.md)

Cada case recebe score de **0-100 pontos** distribuídos em:

| Dimensão | Peso | Pontos | Critérios-chave |
|----------|------|--------|-----------------|
| **1. Estrutura STAR** | 20% | 20 | S(5) + T(5) + A(7) + R(3) |
| **2. Conteúdo LP** | 25% | 25 | Alinhamento com elementos-chave do LP específico |
| **3. Métricas e Dados** | 20% | 20 | ≥8 métricas específicas, baseline+delta+% |
| **4. Contribuição Individual** | 15% | 15 | Ratio EU:NÓS ≥3:1, ownership claro |
| **5. Qualidade Narrativa** | 10% | 10 | Hook, transições, conflito, mic-drop |
| **6. Aspectos Amazon** | 10% | 10 | Customer Obsession, mechanisms, data-driven |
| **TOTAL** | 100% | **100** | **Threshold aprovação: ≥75** |

### **Sub-dimensões Detalhadas**

#### **1. Estrutura STAR (20 pontos)**

- **Situação (5 pts)**
  - [ ] 2 pts: Contexto claro (empresa, cargo, período)
  - [ ] 2 pts: Cenário bem ambientado
  - [ ] 1 pt: Detalhes relevantes que justificam ação

- **Tarefa (5 pts)**
  - [ ] 2 pts: Desafio específico e mensurável
  - [ ] 2 pts: Responsabilidade individual clara
  - [ ] 1 pt: Conexão explícita com LP

- **Ação (7 pts)**
  - [ ] 3 pts: Foco em "EU fiz" (ratio ≥3:1)
  - [ ] 2 pts: Processo de decisão detalhado
  - [ ] 2 pts: Trade-offs e alternativas consideradas

- **Resultado (3 pts)**
  - [ ] 2 pts: Métricas específicas (baseline→resultado)
  - [ ] 1 pt: Comparação antes/depois

#### **2. Conteúdo LP (25 pontos)**

- [ ] **10 pts**: Presença de elementos-chave obrigatórios do LP (conforme CRITERIOS.md seção específica)
- [ ] **8 pts**: Demonstração orgânica do LP (sem citá-lo explicitamente)
- [ ] **7 pts**: Evidências práticas de que candidato "vive" o princípio

#### **3. Métricas e Dados (20 pontos)**

- [ ] **10 pts**: ≥8 métricas quantificadas
- [ ] **5 pts**: Métricas seguem formato [baseline] → [resultado] ([delta], [%]) em [timeframe]
- [ ] **3 pts**: Propriedade dos dados (como calculou, metodologia)
- [ ] **2 pts**: Contextualização da relevância

**Penalidades**:
- -3 pts por métrica genérica ("melhoria significativa", "aumento expressivo")
- -2 pts se <8 métricas

#### **4. Contribuição Individual (15 pontos)**

- [ ] **8 pts**: Ratio EU:NÓS ≥3:1 (ideal ≥4:1)
- [ ] **4 pts**: Decisões tomadas autonomamente
- [ ] **3 pts**: Liderança/influência demonstrada

**Escala de ratio**:
- ≥4:1 → 8 pts
- 3-4:1 → 6 pts
- 2.5-3:1 → 4 pts
- <2.5:1 → 2 pts

#### **5. Qualidade Narrativa (10 pontos)**

- [ ] **3 pts**: Hook dramático (tensão + stakes + urgência)
- [ ] **3 pts**: Transições fluidas S→T→A→R→L
- [ ] **2 pts**: Conflito/hardening (resistência superada)
- [ ] **2 pts**: Mic-drop memorável no Learn

#### **6. Aspectos Amazon (10 pontos)**

- [ ] **4 pts**: Customer Obsession explícita (impacto no cliente final)
- [ ] **3 pts**: Data-driven (decisões baseadas em dados)
- [ ] **2 pts**: Mechanisms vs. intentions (processos/sistemas criados)
- [ ] **1 pt**: Ownership mindset (pensamento longo prazo)

---

## 🎯 PROCESSO DE REVISÃO

### **FASE 0: Setup (30 min)**

1. Criar estrutura de pastas:
```
case-review/
├── METODOLOGIA.md (este arquivo)
├── CRITERIOS.md (já existe)
├── OPORTUNIDADES.md (já existe)
├── reports/
│   ├── 01-inventory.json          # Inventário completo dos 68 cases
│   ├── 02-scoring-summary.json    # Scores por case
│   ├── 03-priorization.json       # Ordem de revisão
│   └── 04-progress.json           # Rastreamento de progresso
├── analysis/
│   ├── by-lp/                     # Análises por LP (16 arquivos)
│   ├── by-dimension/              # Análises por dimensão (6 arquivos)
│   └── cross-cutting/             # Análises transversais
└── recommendations/
    ├── high-priority/             # Cases que precisam revisão urgente
    ├── medium-priority/           # Cases com oportunidades de melhoria
    └── low-priority/              # Cases já excelentes (polimento apenas)
```

2. Criar script de análise (Python/Node) que:
   - Carrega todos os 68 cases dos arquivos `.js`
   - Calcula scores automaticamente onde possível
   - Gera reports estruturados

---

### **FASE 1: Inventário e Scoring Inicial (3-4 horas)**

**Objetivo**: Mapear estado atual e identificar prioridades

#### **1.1. Inventário Completo**

Para cada case, extrair:

```json
{
  "id": "case-id",
  "lp": "Leadership Principle",
  "title_pt": "Título PT",
  "title_en": "Título EN",
  "company": "Empresa",
  "period": "Período",
  "role": "Cargo",
  "isTopCase": true/false,
  "metadata": {
    "word_count_pt": 1234,
    "word_count_en": 1234,
    "fup_count": 10,
    "has_learning": true,
    "sections_present": ["s", "t", "a", "r", "l"]
  }
}
```

**Output**: `reports/01-inventory.json`

#### **1.2. Scoring Automático (onde possível)**

Métricas que podem ser calculadas automaticamente:

- **Ratio EU:NÓS**: Contar ocorrências de "eu/I" vs "nós/we"
- **Contagem de métricas**: Regex para números + % + unidades
- **Word count**: Total de palavras
- **FUPs count**: Número de follow-ups
- **PT/EN parity**: Similaridade de estrutura

Métricas que precisam **análise manual**:

- Hook dramático (subjetivo)
- Alinhamento com LP específico
- Qualidade de transições
- Profundidade técnica

**Output**: `reports/02-scoring-summary.json`

```json
{
  "case_id": "unimed-customer-experience",
  "lp": "Customer Obsession",
  "scores": {
    "total": 82,
    "star_structure": 18,
    "lp_content": 22,
    "metrics": 17,
    "individual_contribution": 13,
    "narrative_quality": 7,
    "amazon_aspects": 9
  },
  "auto_calculated": {
    "eu_nos_ratio": 3.2,
    "metrics_count": 9,
    "word_count_pt": 856,
    "fup_count": 10
  },
  "flags": [
    "⚠️ Hook pode ter mais tensão dramática",
    "⚠️ Transições S→T podem ser mais fluidas",
    "✅ Customer Obsession explícita presente"
  ],
  "status": "APPROVED" // ou "NEEDS_REFINEMENT"
}
```

#### **1.3. Priorização**

Classificar cases em 3 grupos:

**🟢 Grupo A: Cases Excelentes (≥85 pts)**
- Status: Polimento apenas
- Prioridade: Baixa
- Ações: Pequenos ajustes em FUPs, mic-drop

**🟡 Grupo B: Cases Bons (75-84 pts)**
- Status: Bom mas pode ser ótimo
- Prioridade: Média
- Ações: Enriquecer hook, métricas, transições

**🔴 Grupo C: Cases Precisam Refinamento (<75 pts)**
- Status: Precisa revisão estrutural
- Prioridade: Alta
- Ações: Revisão profunda em múltiplas dimensões

**Output**: `reports/03-priorization.json`

---

### **FASE 2: Análise Profunda por Dimensão (4-6 horas)**

**Objetivo**: Análise manual detalhada das 6 dimensões

Para cada dimensão, criar relatório:

#### **Exemplo: Análise de Hooks (Dimensão 5.1)**

```markdown
# Análise: Hooks Dramáticos

## Metodologia
- ✅ Hook forte: Tensão + stakes + urgência nas primeiras 2-3 frases
- ⚠️ Hook médio: Contextualiza mas sem tensão dramática
- ❌ Hook fraco: Genérico, "Em [data] eu assumi..."

## Resultados

### 🔥 Hooks Exemplares (15 cases)
1. `hsbc-migration`: "Quando recebi ligação às 22h informando que 180 mil clientes..."
2. `huawei-world-cup`: "Faltavam 72 horas para Copa do Mundo..."

### ⚠️ Hooks Médios (35 cases)
1. `unimed-customer-experience`: "Em janeiro de 2023 eu assumi a diretoria..."
   - **Problema**: Contexto claro mas sem tensão
   - **Recomendação**: Iniciar com NPS 28 + ameaça de terceirização

### ❌ Hooks Fracos (18 cases)
1. `case-xyz`: "Eu trabalhava na empresa X quando..."
   - **Problema**: Abertura genérica
   - **Recomendação**: Criar stakes numéricos logo na primeira frase

## Priorização
- **Alta**: 18 cases com hook fraco
- **Média**: 35 cases com hook médio
- **Baixa**: 15 cases já excelentes
```

**Deliverables**:
- `analysis/by-dimension/01-hooks.md`
- `analysis/by-dimension/02-transitions.md`
- `analysis/by-dimension/03-metrics.md`
- `analysis/by-dimension/04-customer-obsession.md`
- `analysis/by-dimension/05-eu-nos-ratio.md`
- `analysis/by-dimension/06-mic-drops.md`

---

### **FASE 3: Análise por Leadership Principle (3-4 horas)**

**Objetivo**: Validar alinhamento com elementos-chave de cada LP

Para cada LP, validar presença dos **elementos obrigatórios** (conforme CRITERIOS.md).

#### **Template de Análise por LP**

```markdown
# LP: Customer Obsession (3 cases)

## Elementos-chave Obrigatórios (CRITERIOS.md linha 125-137)
- [ ] Foco explícito no cliente/usuário final
- [ ] Métricas de satisfação (NPS, CSAT, feedback)
- [ ] Antecipação de necessidades não expressas
- [ ] Trabalho backwards a partir do cliente
- [ ] Impacto mensurável na experiência

## Análise dos 3 Cases

### Case 1: `unimed-customer-experience`
- ✅ Foco explícito no cliente (beneficiários Unimed)
- ✅ Métricas de satisfação (NPS 28→58)
- ⚠️ Antecipação: Implícita, pode ser mais explícita
- ✅ Backwards from customer: "Voz do Cliente no board"
- ✅ Impacto mensurável: NPS +107%
- **Score LP**: 22/25 pts
- **Recomendação**: Explicitar antecipação de necessidades

### Case 2: `case-2-id`
...

## Red Flags Identificados
- Nenhum red flag crítico
- 1 case precisa reforçar "trabalho backwards"

## Recomendações
1. Case 1: Adicionar frase sobre antecipação no contexto
2. Case 2: ...
```

**Deliverables**:
- `analysis/by-lp/01-customer-obsession.md`
- `analysis/by-lp/02-ownership.md`
- ...
- `analysis/by-lp/16-broad-responsibility.md`

---

### **FASE 4: Análise de FUPs (3-4 horas)**

**Objetivo**: Validar qualidade e profundidade das ~680 FUPs

#### **Critérios de Avaliação de FUPs**

**✅ FUP Forte**:
- 3-4 frases
- Inclui métricas específicas
- Demonstra domínio técnico
- Framework/processo usado
- Resultado mensurável

**⚠️ FUP Média**:
- 2 frases
- Responde a pergunta mas sem profundidade
- Faltam métricas

**❌ FUP Fraca**:
- 1 frase genérica
- Sem métricas
- Superficial

#### **Análise Estruturada**

```markdown
# Análise: Follow-Up Questions (680 FUPs total)

## Distribuição por Qualidade

| Qualidade | Count | % | Ação |
|-----------|-------|---|------|
| ✅ Forte  | 280   | 41% | Manter |
| ⚠️ Média  | 320   | 47% | Enriquecer |
| ❌ Fraca  | 80    | 12% | Reescrever |

## FUPs Prioritárias para Revisão

### Tipo 1: FUPs Fracas (80 casos)
Cases com ≥3 FUPs fracas (precisam revisão urgente):
- `case-abc`: 5 FUPs fracas de 10
- `case-def`: 4 FUPs fracas de 10

### Tipo 2: FUPs sem "Failure Mode" (41 cases)
Cases que não têm nenhuma FUP explorando falha/aprendizado negativo:
- `case-xyz`
- ...

## Recomendações
1. Priorizar 15 cases com mais FUPs fracas
2. Adicionar 1-2 FUPs de "failure mode" em todos os 68 cases
```

**Deliverables**:
- `analysis/cross-cutting/fups-quality-analysis.md`

---

### **FASE 5: PT/EN Parity Audit (2-3 horas)**

**Objetivo**: Garantir espelhamento perfeito entre versões PT e EN

#### **Validações Automáticas**

Script que verifica:

1. **Estrutura**:
   - Mesmo número de frases em S/T/A/R/L
   - Mesmo número de FUPs

2. **Métricas**:
   - Números idênticos em PT e EN
   - Percentuais consistentes

3. **False Friends**:
   - "Eventualmente" (PT) vs "Eventually" (EN)
   - "Atualmente" (PT) vs "Currently" (EN)
   - "Realizar" (PT) vs "Realize" (EN)

4. **Tom**:
   - Mesmo nível de formalidade
   - Execução vs. execution (tom executivo mantido)

**Output**: `analysis/cross-cutting/pt-en-parity-report.json`

```json
{
  "case_id": "unimed-customer-experience",
  "parity_issues": [
    {
      "type": "metric_divergence",
      "section": "r",
      "pt": "NPS subiu 30 pontos",
      "en": "NPS increased 32 points",
      "severity": "HIGH"
    },
    {
      "type": "sentence_count_mismatch",
      "section": "a",
      "pt_sentences": 12,
      "en_sentences": 11,
      "severity": "MEDIUM"
    }
  ],
  "parity_score": 92 // 0-100
}
```

---

### **FASE 6: Geração de Recomendações (2-3 horas)**

**Objetivo**: Consolidar findings em ações específicas e priorizadas

#### **Template de Recomendação**

Para cada case que precisa revisão:

```markdown
# Recomendações: `unimed-customer-experience`

**LP**: Customer Obsession
**Score Atual**: 82/100
**Status**: ✅ APPROVED (mas pode ser excelente)
**Prioridade**: 🟡 MÉDIA

## Pontos Fortes
- ✅ Customer Obsession explícita e bem documentada
- ✅ Métricas robustas (NPS 28→58, +107%)
- ✅ Ratio EU:NÓS saudável (3.8:1)

## Oportunidades de Melhoria

### 1. Hook Dramático (Dimensão 5) [-3 pts]
**Problema**: Hook atual é claro mas sem tensão dramática

**Atual**:
> "Em janeiro de 2023 eu assumi a diretoria de Experiência do Cliente da Unimed..."

**Recomendado**:
> "Quando o NPS despencou para 28 e o conselho ameaçou terceirizar o atendimento, eu sabia que tinha 12 meses para salvar a experiência de 1.6 milhão de beneficiários."

**Impacto**: +3 pts → Score 85/100

### 2. Transição S→T (Dimensão 5) [-2 pts]
**Problema**: Falta conector narrativo entre Situação e Tarefa

**Atual**:
> S: "...ninguém assumia a migração."
> T: "Eu me declarei owner único dessa transição."

**Recomendado**:
> S: "...ninguém assumia a migração."
> **[TRANSIÇÃO]**: "Naquele momento, percebi que o projeto falharia sem ownership claro. Foi quando decidi..."
> T: "Eu me declarei owner único dessa transição, mesmo sem mandato formal."

**Impacto**: +2 pts → Score 87/100

### 3. FUPs de Failure Mode (Dimensão FUPs)
**Problema**: Nenhuma FUP explora falha/aprendizado negativo

**Recomendação**: Adicionar 2 FUPs:

**FUP 11**:
- Q: "Que decisão você subestimou nesse projeto?"
- A: "Eu subestimei a resistência cultural ao modelo de autorização digital. Vários médicos mais antigos boicotaram o sistema nas primeiras semanas. Tive que criar programa de ambassadors com médicos influentes para quebrar essa resistência. Aprendi que mudança de processo exige mudança de cultura."

**FUP 12**:
- Q: "Se repetisse hoje, o que ajustaria?"
- A: "Eu investiria mais tempo em change management desde o início. Executei um rollout técnico perfeito mas quase falhei no aspecto humano. Hoje, nenhum projeto meu começa sem mapa de stakeholders e plano de comunicação estruturado."

**Impacto**: Profundidade e credibilidade aumentadas

## Resumo de Impacto
- Score atual: 82/100
- Score projetado: 87/100
- Esforço: 45 minutos
- ROI: ⭐⭐⭐⭐
```

**Deliverables**:
- `recommendations/high-priority/case-xyz.md` (para scores <75)
- `recommendations/medium-priority/case-abc.md` (para scores 75-84)
- `recommendations/low-priority/case-def.md` (para scores ≥85)

---

### **FASE 7: Plano de Execução (1 hora)**

**Objetivo**: Criar roadmap priorizado de melhorias

#### **Output Final: Master Plan**

```markdown
# Plano de Execução: Revisão de 68 Cases

## Resumo Executivo

| Métrica | Valor |
|---------|-------|
| Cases analisados | 68 |
| Score médio atual | 78.5/100 |
| Cases aprovados (≥75) | 52 (76%) |
| Cases que precisam refinamento | 16 (24%) |
| Esforço total estimado | 40-55 horas |

## Distribuição por Prioridade

### 🔴 ALTA Prioridade (16 cases, <75 pts)
Esforço: 20-25 horas

**Cases prioritários**:
1. `case-id-1` (score 68) - 2.5h
2. `case-id-2` (score 71) - 2h
...

**Ações principais**:
- Revisar hooks dramáticos
- Adicionar métricas específicas
- Reforçar Customer Obsession
- Elevar ratio EU:NÓS

### 🟡 MÉDIA Prioridade (32 cases, 75-84 pts)
Esforço: 15-20 horas

**Ações principais**:
- Enriquecer transições STAR
- Amplificar mic-drops
- Adicionar FUPs de failure mode
- Intensificar conflito

### 🟢 BAIXA Prioridade (20 cases, ≥85 pts)
Esforço: 5-10 horas

**Ações principais**:
- Polimento de FUPs
- Validação PT/EN parity
- Pequenos ajustes de narrativa

## Cronograma Sugerido

### Sprint 1 (15-20 horas): Quick Wins
**Foco**: 16 cases alta prioridade

- Dias 1-2: Revisar 5 cases críticos (<70 pts)
- Dias 3-4: Revisar 6 cases moderados (70-74 pts)
- Dia 5: Revisar 5 cases restantes + validação

### Sprint 2 (15-20 horas): Enhancement
**Foco**: 32 cases média prioridade

- Dias 6-8: Transições STAR + mic-drops (15 cases)
- Dias 9-10: FUPs failure mode (17 cases)

### Sprint 3 (5-10 horas): Polimento
**Foco**: 20 cases baixa prioridade + validação final

- Dia 11: Polimento de FUPs
- Dia 12: Validação PT/EN parity
- Dia 13: Revisão final e geração de relatório

## Critérios de Sucesso

- [ ] 100% dos cases com score ≥75
- [ ] Score médio ≥82
- [ ] 100% dos cases com Customer Obsession explícita
- [ ] 100% dos cases com transições fluidas
- [ ] PT/EN parity validada
```

---

## 📊 FORMATO DE OUTPUT

### **Reports Gerados**

1. **Inventory Report** (`reports/01-inventory.json`)
   - Lista completa de 68 cases
   - Metadados estruturados

2. **Scoring Summary** (`reports/02-scoring-summary.json`)
   - Score dimensional de cada case
   - Flags automáticos

3. **Priorization Matrix** (`reports/03-priorization.json`)
   - Classificação A/B/C
   - Ordem de revisão

4. **Progress Tracker** (`reports/04-progress.json`)
   - Status de revisão (pending/in-progress/completed)
   - Tempo investido por case

5. **Dimensional Analysis** (`analysis/by-dimension/*.md`)
   - 6 relatórios de análise profunda

6. **LP Analysis** (`analysis/by-lp/*.md`)
   - 16 relatórios de alinhamento com LPs

7. **Recommendations** (`recommendations/{high,medium,low}-priority/*.md`)
   - Ações específicas por case

8. **Master Plan** (`reports/MASTER-PLAN.md`)
   - Roadmap de execução
   - Cronograma e critérios de sucesso

---

## 🛠️ FERRAMENTAS E AUTOMAÇÃO

### **Scripts Recomendados**

1. **`inventory-generator.js`**
   - Carrega todos os 68 cases
   - Gera `01-inventory.json`

2. **`auto-scorer.js`**
   - Calcula métricas automáticas (ratio EU:NÓS, contagem de métricas)
   - Gera `02-scoring-summary.json`

3. **`parity-validator.js`**
   - Compara PT vs EN
   - Detecta divergências de métricas/estrutura

4. **`progress-tracker.js`**
   - Atualiza status de revisão
   - Gera dashboard de progresso

### **Análise Manual (não automatizável)**

- Hook dramático (subjetivo)
- Qualidade de transições
- Alinhamento com LP específico
- Profundidade de FUPs
- Mic-drop memorável

---

## ✅ CRITÉRIOS DE ACEITE DA METODOLOGIA

Esta metodologia é considerada bem-sucedida se:

- [ ] Produz scoring objetivo e rastreável (0-100 pts)
- [ ] Identifica prioridades claras (A/B/C)
- [ ] Gera recomendações acionáveis por case
- [ ] Estima esforço realista (horas por case)
- [ ] Permite rastreamento de progresso
- [ ] É executável de forma incremental (sprints)

---

## 🎯 ABORDAGEM RECOMENDADA

### **Sequencial ou Paralela?**

**Recomendação: HÍBRIDA**

1. **Fase 1-2 (Inventário + Scoring)**: Automática, rodar em batch
2. **Fase 3-5 (Análise Profunda)**: Sequencial, por dimensão/LP
3. **Fase 6 (Recomendações)**: Por prioridade (alta → média → baixa)
4. **Execução das melhorias**: Incremental, sprints de 15-20h

### **Por Prioridade**

✅ **SIM** - Começar por casos de alta prioridade (<75 pts)

Razões:
- Maior impacto no score médio
- Urgência: casos fracos podem comprometer entrevista
- Quick wins motivam continuidade

### **Por LP**

❌ **NÃO** recomendado como abordagem principal

Razões:
- LPs têm quantidade desigual de cases (1-8 cases)
- Não prioriza por qualidade atual
- Menos eficiente que priorização por score

**Exceção**: Análise por LP é útil na **Fase 3** para validar alinhamento com elementos-chave.

---

## 📝 PRÓXIMOS PASSOS

Após aprovação desta metodologia:

1. **Setup**: Criar estrutura de pastas (30 min)
2. **Automação**: Desenvolver scripts de análise (3-4 horas)
3. **Execução Fase 1**: Inventário e scoring (3-4 horas)
4. **Apresentação de Findings**: Reportar casos prioritários
5. **Aprovação de Roadmap**: Definir sprints de execução
6. **Execução Incremental**: Revisar cases conforme plano

---

**Documento criado por**: Claude
**Baseado em**: CRITERIOS.md + OPORTUNIDADES.md
**Validade**: Living document, atualizar conforme progresso
