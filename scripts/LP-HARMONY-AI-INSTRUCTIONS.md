# 🎯 LP HARMONY ANALYZER v3.0 - AI-POWERED

Ferramenta de análise semântica de Leadership Principles usando Claude AI.

---

## 🚀 **COMO USAR - GUIA PASSO A PASSO**

### **BATCH 1: Customer Obsession, Program Management, Ownership**

```bash
node scripts/lp-harmony-ai.mjs batch1
```

O script vai:
1. ✅ Carregar os 3 LPs
2. ✅ Verificar quais combinações Question × Case já estão no cache
3. ✅ Gerar um prompt para Claude analisar as combinações pendentes
4. ⏸️ **PAUSAR** e pedir que você cole a resposta do Claude

---

## 📋 **WORKFLOW COMPLETO**

### **PASSO 1: Executar o batch**

```bash
node scripts/lp-harmony-ai.mjs batch1
```

### **PASSO 2: Copiar o prompt gerado**

O script vai gerar um prompt gigante como este:

```
# 🎯 TAREFA: Análise Semântica de Cases para Leadership Principle

Você é um especialista em Leadership Principles da Amazon...

[... prompt completo ...]

## 🎯 COMBINAÇÕES PARA ANÁLISE

---
### COMBINAÇÃO 1/42

**CacheKey**: `customer_obsession__Q1__unimed-cancer-patient-journey`

**Pergunta Q1**: "Conte uma situação onde você foi além..."

**Case**: unimed-cancer-patient-journey
**Título**: Antecipei necessidade de pacientes oncológicos...

[... todas as combinações ...]
```

### **PASSO 3: Colar no Claude e obter resposta**

Cole o prompt no Claude (você mesmo, nesta conversa ou em outra sessão).

Claude vai retornar algo assim:

```json
[
  {
    "cacheKey": "customer_obsession__Q1__unimed-cancer-patient-journey",
    "relevance": 30,
    "depth": 28,
    "evidence": 30,
    "scoreBase": 88,
    "reasoning": "Conceito central alinha perfeitamente..."
  },
  {
    "cacheKey": "customer_obsession__Q1__unimed-pet-anticipation",
    "relevance": 28,
    "depth": 26,
    "evidence": 28,
    "scoreBase": 82,
    "reasoning": "Antecipação de necessidade pet..."
  }
]
```

### **PASSO 4: Salvar resposta no cache**

Abra o arquivo `.lp-harmony-cache.json` e adicione as análises:

```json
{
  "customer_obsession__Q1__unimed-cancer-patient-journey": {
    "relevance": 30,
    "depth": 28,
    "evidence": 30,
    "scoreBase": 88,
    "reasoning": "Conceito central alinha perfeitamente...",
    "analyzedAt": "2025-01-19T20:30:00Z",
    "version": "3.0"
  },
  "customer_obsession__Q1__unimed-pet-anticipation": {
    "relevance": 28,
    "depth": 26,
    "evidence": 28,
    "scoreBase": 82,
    "reasoning": "Antecipação de necessidade pet...",
    "analyzedAt": "2025-01-19T20:30:00Z",
    "version": "3.0"
  }
}
```

### **PASSO 5: Executar novamente para processar**

```bash
node scripts/lp-harmony-ai.mjs batch1
```

Agora o script vai:
1. ✅ Ler o cache
2. ✅ Calcular scores finais (com bônus/penalidades)
3. ✅ Gerar novo mapping
4. ✅ Atualizar arquivos de cases (flags isTopCase/isGoodCase)
5. ✅ Atualizar questionsToCasesMapping.js
6. ✅ Mostrar relatório

---

## 📊 **OS 5 BATCHES**

### **Batch 1** (PRIORIDADE ALTA)
```bash
node scripts/lp-harmony-ai.mjs batch1
```
- Customer Obsession
- Program Management
- Ownership

### **Batch 2**
```bash
node scripts/lp-harmony-ai.mjs batch2
```
- Dive Deep
- Invent and Simplify

### **Batch 3**
```bash
node scripts/lp-harmony-ai.mjs batch3
```
- Earn Trust
- Deliver Results
- Stakeholder Management

### **Batch 4**
```bash
node scripts/lp-harmony-ai.mjs batch4
```
- Learn and Be Curious
- Bias for Action
- Prioritizing and Influence

### **Batch 5**
```bash
node scripts/lp-harmony-ai.mjs batch5
```
- Deal with Ambiguity
- Disagree and Commit (Have Backbone)
- Insist on Highest Standards

---

## 🎯 **CRITÉRIOS DE AVALIAÇÃO (CLAUDE)**

Claude vai avaliar cada combinação usando 3 componentes:

### **A. RELEVÂNCIA CONCEITUAL (0-30 pontos)**
- 30: Case responde PERFEITAMENTE
- 26: Case responde MUITO BEM
- 22: Case responde BEM
- 18: Case responde PARCIALMENTE
- 12: Case responde TANGENCIALMENTE
- 0: Case NÃO responde

### **B. PROFUNDIDADE (0-30 pontos)**
- 30: STAR-L completo + exemplos + métricas + aprendizados profundos
- 26: STAR-L completo + bons exemplos + algumas métricas
- 22: STAR bom mas Learning superficial
- 18: STAR genérico
- 12: STAR incompleto
- 0: Inadequado

### **C. EVIDÊNCIAS E MÉTRICAS (0-30 pontos)**
- 30: Métricas concretas + impacto quantificado + comparações
- 26: Métricas concretas + impacto quantificado
- 22: Algumas métricas
- 18: Métricas vagas
- 12: Pouquíssimas evidências
- 0: Sem evidências

**SCORE_BASE = A + B + C** (máximo 90 pontos)

---

## 🧮 **SCORE FINAL (AUTOMÁTICO)**

O script adiciona automaticamente:

```
SCORE_FINAL = SCORE_BASE + BONUS_FUPS + BONUS_VERSATILIDADE - PENALIDADES

Componentes:
  • SCORE_BASE (0-90): Análise AI (relevância + profundidade + evidências)
  • BONUS_FUPS (0-10): Qualidade e quantidade de FUPs
  • BONUS_VERSATILIDADE (-5 a +3):
    - 2-4 perguntas: +3 (especialista)
    - 5-6 perguntas: +1 (equilibrado)
    - 7-8 perguntas: 0 (neutro)
    - 9-10 perguntas: -2 (genérico)
    - 11+ perguntas: -5 (canivete suíço)
  • PENALIDADES:
    - Learning <100 chars: -5
    - Learning <200 chars: -3
    - STAR incompleto: até -9
    - FUPs obrigatórias ausentes: -2 cada (até -12)

Classificação Final:
  • 95-100: TopCase (isTopCase: true, isGoodCase: true)
  • 90-94: GoodCase (isTopCase: false, isGoodCase: true)
  • 80-89: Acceptable
  • <80: Não mapeado
```

---

## 📁 **ARQUIVOS IMPORTANTES**

### **Cache**: `scripts/.lp-harmony-cache.json`
Armazena todas as análises AI para não repetir trabalho.

**Estrutura**:
```json
{
  "<principleId>__Q<num>__<caseId>": {
    "relevance": 30,
    "depth": 28,
    "evidence": 30,
    "scoreBase": 88,
    "reasoning": "...",
    "analyzedAt": "2025-01-19T20:30:00Z",
    "version": "3.0"
  }
}
```

### **Outputs**:
- `src/data/<principle>/<principle>_case<N>.js` → Flags `isTopCase` e `isGoodCase` atualizadas
- `src/data/questionsToCasesMapping.js` → Mapeamento completo atualizado

---

## ⚡ **DICAS**

### **Se quiser analisar apenas 1 LP**:
```bash
node scripts/lp-harmony-ai.mjs analyze ownership
```

### **Para limpar cache e recomeçar**:
```bash
rm scripts/.lp-harmony-cache.json
```

### **Para ver cache atual**:
```bash
cat scripts/.lp-harmony-cache.json | jq
```

### **Para validar JSON do Claude antes de salvar**:
```bash
echo '<seu-json>' | jq
```

---

## 🎯 **ORDEM RECOMENDADA DE EXECUÇÃO**

1. **Batch 1** (Customer Obsession, Program Management, Ownership) ← COMECE AQUI
2. **Batch 2** (Dive Deep, Invent and Simplify)
3. **Batch 3** (Earn Trust, Deliver Results, Stakeholder Management)
4. **Batch 4** (Learn and Be Curious, Bias for Action, Prioritizing & Influence)
5. **Batch 5** (Deal with Ambiguity, Have Backbone, Insist on Highest Standards)

---

## 🐛 **TROUBLESHOOTING**

### **Erro: "Resposta AI não contém JSON válido"**
→ Certifique-se de copiar o JSON completo entre ```json e ```

### **Erro: "Diretório não encontrado"**
→ Verifique o nome do LP (use underscore: `customer_obsession`, `prioritizing_and_influence`)

### **Cache corrompido**
→ Delete `.lp-harmony-cache.json` e recomece

### **Quero refazer análise de um LP específico**
→ Abra o cache e delete as entradas daquele LP, depois rode novamente

---

## 📊 **EXEMPLO COMPLETO (Batch 1 - Primeiro Run)**

```bash
$ node scripts/lp-harmony-ai.mjs batch1

🎯 BATCH: BATCH1
📋 LPs: customer_obsession, program_management, ownership

══════════════════════════════════════════════════════════════════
  PROCESSANDO: CUSTOMER OBSESSION
══════════════════════════════════════════════════════════════════

📂 Carregando customer_obsession...
✅ 7 cases, 14 perguntas

🤖 AGUARDANDO ANÁLISE AI...
📊 98 combinações precisam ser analisadas

──────────────────────────────────────────────────────────────────

# 🎯 TAREFA: Análise Semântica de Cases para Leadership Principle

[... prompt gigante ...]

──────────────────────────────────────────────────────────────────

⏸️  PAUSADO: Cole a resposta JSON do Claude abaixo e pressione ENTER
(ou Ctrl+C para cancelar)

⚠️  MODO INTERATIVO: Execute novamente após Claude responder

💾 Salve a resposta em: D:\github2\amazon-lp-prep\scripts\.lp-harmony-cache.json
```

**Agora você:**
1. Copia o prompt
2. Cola no Claude
3. Copia a resposta JSON
4. Cola em `.lp-harmony-cache.json`
5. Roda `node scripts/lp-harmony-ai.mjs batch1` novamente

**Resultado esperado (segundo run):**

```bash
$ node scripts/lp-harmony-ai.mjs batch1

🎯 BATCH: BATCH1
📋 LPs: customer_obsession, program_management, ownership

══════════════════════════════════════════════════════════════════
  PROCESSANDO: CUSTOMER OBSESSION
══════════════════════════════════════════════════════════════════

📂 Carregando customer_obsession...
✅ 7 cases, 14 perguntas

✅ Todas as 98 combinações já estão no cache!

📝 Atualizando arquivos para customer_obsession...
  ✅ unimed-cancer-patient-journey: isTopCase=true, isGoodCase=true
  ✅ unimed-pet-anticipation: isTopCase=true, isGoodCase=true
  ✅ sicredi-small-business-survival: isTopCase=true, isGoodCase=true
  ✅ bradesco-elderly-digital-inclusion: isTopCase=true, isGoodCase=true
✅ Arquivos atualizados!

══════════════════════════════════════════════════════════════════
  CUSTOMER OBSESSION
══════════════════════════════════════════════════════════════════

📊 Cobertura: 14/14 perguntas (100%)

🎯 Distribuição:
   TopCase (95-100):   18 mapeamentos
   GoodCase (90-94):   15 mapeamentos
   Acceptable (80-89): 10 mapeamentos

✅ Processamento concluído!
```

---

## 🎉 **PRONTO PARA USAR!**

Execute agora:

```bash
node scripts/lp-harmony-ai.mjs batch1
```

E comece a análise! 🚀
