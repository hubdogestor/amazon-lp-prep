# 📊 COMPARAÇÃO: Debug Script vs Mapeador Oficial

**Data**: 06/10/2025  
**Caso Teste**: broad_responsibility P1 - "Me fale sobre como você considera impacto mais amplo das suas decisões"

---

## 🎯 SCORES DIVERGENTES

| Case | Debug Score | Oficial Score | Diferença |
|------|-------------|---------------|-----------|
| Case1 (unimed-lgpd-compliance) | 57 | ~50 | +7 |
| Case2 (nubank-financial-inclusion) | 65 | ~50 | +15 |
| **Case3 (sicredi-responsible-ai-policy)** | **82** | **50** | **+32** ⚠️ |

**Problema**: Case3 deveria ter score 82 (excelente alinhamento), mas mapeador oficial dá apenas 50 (limiar mínimo).

---

## 🔬 ANÁLISE DAS DIFERENÇAS

### **1. KEYWORDS**

#### **Debug Script**:
```javascript
const keywords = [
  "impacto", "amplo", "decisão", "considerar", "responsabilidade", 
  "consequências", "sociedade", "comunidade",
  "impact", "broader", "decision", "consider", "responsibility", 
  "consequences", "society", "community"
];

// Lógica: Busca TODOS os keywords no texto completo (S+T+A+R+L)
keywords.forEach(kw => {
  if (textLower.includes(kw.toLowerCase())) {
    keywordCount++;  // +3 pontos cada, até +30
  }
});
```

**Case3 result**: 9 keywords encontrados × 3 pontos = **+27 pontos**

#### **Mapeador Oficial**:
```javascript
function extractKeywords(q) {
  const keywords = [];
  
  // Termos técnicos/domínio (genéricos)
  const domainTerms = [
    'pagamento', 'payment', 'pix', 'fraude', 'fraud', 'compliance',
    'ia', 'ai', 'inteligência artificial', 'machine learning', 'pmo',
    'inovação', 'innovation', 'simplificação', 'otimização',
    'processo', 'api', 'dados', 'data', 'análise', 'decision',
    'risco', 'risk', 'cliente', 'customer', 'time', 'equipe', 
    'conflito', 'feedback', 'prazo', 'deadline'
  ];
  
  for (const term of domainTerms) {
    if (question.includes(term)) {  // ⚠️ Busca apenas NA PERGUNTA
      keywords.push(term);
    }
  }
  
  // Verbos de ação (não captura "considerar", "sociedade", "comunidade")
  const actionVerbs = [
    'simplificou', 'otimizou', 'automatizou', 'reduziu', 'aumentou'
  ];
  
  for (const verb of actionVerbs) {
    if (question.includes(verb)) {
      keywords.push(verb);
    }
  }
  
  return keywords;
}

// Depois tenta achar keywords NO CASE
let keywordMatches = 0;
for (const kw of keywords) {
  if (fullCase.includes(kw)) {
    keywordMatches++;
  }
}

if (keywordMatches >= 3) score += 30;
else if (keywordMatches >= 2) score += 20;
else if (keywordMatches === 1) score += 10;
```

**Problema**: 
1. **Lista genérica** - não tem keywords específicos de "broad_responsibility" como:
   - "impacto amplo", "responsabilidade social", "sociedade", "comunidade", "consequências"
2. **Extração da pergunta** - busca keywords NA PERGUNTA, não no vocabulário do LP
3. **Match binário** - só conta se achou ≥3, não proporcional

**Case3 result**: Provavelmente 1-2 keywords ("decisão", "risco") = **+10 a +20 pontos**

---

### **2. CONCEPTS**

#### **Debug Script**:
```javascript
const concepts = [
  "impacto amplo", "impacto mais amplo", "responsabilidade social", 
  "stakeholders beyond", "consequências não intencionais",
  "segunda ordem", "futuras gerações", "ecossistema", 
  "integridade do sistema",
  "broader impact", "wider impact", "social responsibility", 
  "beyond obvious stakeholders", "unintended consequences",
  "second order", "future generations", "ecosystem", "system integrity"
];

// Busca conceitos MULTIPALAVRA específicos do LP
concepts.forEach(concept => {
  if (textLower.includes(concept.toLowerCase())) {
    conceptCount++;  // +5 pontos cada, até +30
  }
});
```

**Case3 result**: 3 concepts encontrados × 5 pontos = **+15 pontos**

#### **Mapeador Oficial**:
```javascript
function analyzeConceptMatch(question, caseData, fullCase) {
  const concepts = [
    { q: ['assumiu', 'responsabilidade', 'além', 'escopo'], 
      c: ['liderança', 'ownership', 'além'], weight: 15 },
    { q: ['cliente', 'primeiro', 'experiência'], 
      c: ['cliente', 'nps', 'satisfação'], weight: 15 },
    { q: ['inovação', 'inventei', 'criativo'], 
      c: ['inventei', 'inovação', 'simplific'], weight: 15 },
    // ... mais 7 conceitos genéricos
  ];
  
  for (const concept of concepts) {
    const qMatches = concept.q.filter(term => q.includes(term)).length;
    const cMatches = concept.c.filter(term => fullCase.includes(term)).length;
    
    if (qMatches > 0 && cMatches > 0) {
      const conceptScore = Math.min(concept.weight, qMatches * cMatches * 5);
      score += conceptScore;
    }
  }
  
  return { score: Math.min(30, score), reason };
}
```

**Problema**:
1. **Nenhum conceito específico de broad_responsibility** na lista!
2. Conceitos são **genéricos** para todos os 16 LPs
3. Não tem: "impacto amplo", "responsabilidade social", "consequências não intencionais"

**Case3 result**: 0-5 pontos (match parcial com "responsabilidade" → "liderança")

---

### **3. CONTEXT ANALYSIS**

#### **Mapeador Oficial**:
```javascript
function analyzeContext(question, caseData) {
  let score = 0;
  const q = question.toLowerCase();
  const title = (caseData.title_pt || '').toLowerCase();
  
  // 10 contextos hard-coded:
  // - Pagamentos/Fraude: +25
  // - Inovação/Simplificação: +25
  // - Dados/Análise: +25
  // - Liderança/Equipe: +20
  // - Resultados/Métricas: +15
  // - Cliente/NPS: +25
  // - Migração/Grande Escala: +20
  // - Conflito/Feedback: +20
  // - Custo/Frugalidade: +20
  // - Risco/Incerteza: +15
  
  // ⚠️ NÃO TEM CONTEXTO PARA "broad_responsibility"!
  
  return { score, reason };
}
```

**Case3 result para P1 "impacto mais amplo"**: 
- Não match com nenhum dos 10 contextos hard-coded
- **+0 pontos** de contexto

---

## 📈 BREAKDOWN COMPLETO: CASE3 PARA P1

### **Debug Script (82 pontos)**:
```
Base:             40
Keywords:        +27  (9 matches × 3 pontos)
Concepts:        +15  (3 matches × 5 pontos)
Title overlap:    +0  (2 palavras < threshold de 3)
─────────────────────
TOTAL:           82/100 ✅
```

### **Mapeador Oficial (50 pontos)**:
```
Base:             40
Keywords:        ~10  (1-2 matches genéricos: "decisão", "risco")
Context:          +0  (nenhum dos 10 contextos match)
Concepts:         ~0  (nenhum conceito específico de broad_responsibility)
Title overlap:   +10  (bonus por alinhamento semântico)
─────────────────────
TOTAL:           ~50/100 ⚠️
```

**GAP: 32 pontos** (82 - 50)

---

## 🎯 CAUSA RAIZ DA DIVERGÊNCIA

### **1. Keywords Genéricos vs Específicos**

**Debug**: Lista **curada por LP** com vocabulário específico
```javascript
// broad_responsibility keywords
["impacto amplo", "responsabilidade social", "sociedade", "comunidade", 
 "consequências não intencionais", "stakeholders"]
```

**Oficial**: Lista **genérica para todos LPs**
```javascript
// Termos técnicos gerais
['pagamento', 'pix', 'fraude', 'compliance', 'ia', 'inovação', 'processo']
```

**Resultado**: Debug encontra 9 keywords relevantes, oficial encontra 1-2.

---

### **2. Concepts Genéricos vs Específicos**

**Debug**: Concepts **multipalavra específicos** do LP
```javascript
["impacto amplo", "responsabilidade social", "consequências não intencionais",
 "segunda ordem", "futuras gerações", "integridade do sistema"]
```

**Oficial**: Concepts **genéricos** sem nenhum de broad_responsibility
```javascript
[
  {q: ['assumiu', 'responsabilidade', 'além'], ...},  // ownership
  {q: ['cliente', 'primeiro'], ...},                   // customer obsession
  {q: ['inovação', 'inventei'], ...}                   // invent & simplify
]
```

**Resultado**: Debug encontra 3 concepts, oficial encontra 0.

---

### **3. Context Analysis Incompleto**

**Oficial**: Apenas 10 contextos hard-coded, **FALTA broad_responsibility**:
- ✅ Pagamentos/Fraude
- ✅ Inovação/Simplificação
- ✅ Dados/Análise
- ✅ Liderança/Equipe
- ✅ Resultados/Métricas
- ✅ Cliente/NPS
- ✅ Migração/Grande Escala
- ✅ Conflito/Feedback
- ✅ Custo/Frugalidade
- ✅ Risco/Incerteza
- ❌ **Impacto Amplo/Responsabilidade Social** ← FALTANDO!

**Resultado**: +0 pontos de contexto para P1 de broad_responsibility.

---

## ✅ SOLUÇÃO PROPOSTA

### **Opção A: Adicionar Contextos Específicos por LP** (Recomendado)

Adicionar ao `analyzeContext()`:

```javascript
// Impacto Amplo / Responsabilidade Social (broad_responsibility)
if ((q.includes('impacto') && (q.includes('amplo') || q.includes('mais amplo'))) ||
    q.includes('responsabilidade social') || 
    q.includes('consequências não intencionais') ||
    q.includes('futuras gerações') || 
    q.includes('sociedade') || q.includes('comunidade')) {
  
  if (fullCase.includes('impacto amplo') || 
      fullCase.includes('responsabilidade social') ||
      fullCase.includes('sociedade') || fullCase.includes('comunidade') ||
      fullCase.includes('stakeholders') || 
      fullCase.includes('consequências')) {
    score += 25;
    reason = 'Contexto de impacto amplo/responsabilidade social alinhado';
  }
}
```

**Ganho esperado**: +25 pontos de contexto → Case3 score: 50 + 25 = **75 pontos** ✅

---

### **Opção B: Melhorar `extractKeywords()` com Vocabulário por LP**

Criar mapa de keywords por LP:

```javascript
const LP_KEYWORDS = {
  broad_responsibility: [
    'impacto', 'amplo', 'responsabilidade', 'social', 'sociedade', 
    'comunidade', 'consequências', 'stakeholders', 'futuras gerações',
    'segunda ordem', 'ecossistema', 'integridade'
  ],
  customer_obsession: [
    'cliente', 'experiência', 'nps', 'satisfação', 'jornada', 'feedback'
  ],
  // ... outros 14 LPs
};

function extractKeywords(question, lpKey) {
  const keywords = [];
  const q = question.toLowerCase();
  
  // Adiciona keywords específicos do LP
  const lpKeywords = LP_KEYWORDS[lpKey] || [];
  for (const kw of lpKeywords) {
    if (q.includes(kw)) {
      keywords.push(kw);
    }
  }
  
  // Mantém keywords genéricos também
  // ...
  
  return keywords;
}
```

**Ganho esperado**: +15-20 pontos de keywords → Case3 score: 50 + 15 = **65 pontos** ✅

---

### **Opção C: Adicionar Conceitos Específicos por LP**

Expandir `analyzeConceptMatch()`:

```javascript
const concepts = [
  // Genéricos (mantém)
  { q: ['assumiu', 'responsabilidade'], c: ['liderança', 'ownership'], weight: 15 },
  
  // ✅ ADICIONAR: broad_responsibility
  { q: ['impacto', 'amplo', 'mais amplo'], 
    c: ['impacto amplo', 'responsabilidade social', 'sociedade'], 
    weight: 20 },
  { q: ['consequências', 'não intencionais', 'segunda ordem'], 
    c: ['consequências', 'impacto secundário', 'efeitos colaterais'], 
    weight: 15 },
  
  // ... outros LPs
];
```

**Ganho esperado**: +15-20 pontos de concepts → Case3 score: 50 + 15 = **65 pontos** ✅

---

### **Opção D: Combo (A + B + C)** ⭐ **RECOMENDADO**

Aplicar todas as 3 melhorias:
- **Contexto específico**: +25 pontos
- **Keywords por LP**: +10 pontos adicionais (melhora precisão)
- **Concepts por LP**: +10 pontos adicionais

**Ganho total**: ~45 pontos → Case3 score: 50 + 45 = **95 pontos** ✅✅✅

---

## 📊 IMPACTO ESTIMADO

### **Antes (algoritmo atual)**:
```
Case1: 50 (vence por ordem alfabética quando empate)
Case2: 50
Case3: 50 ← Deveria vencer!
```

### **Depois (com melhorias)**:
```
Case1: 55 (+5 de contexto parcial)
Case2: 65 (+15 de keywords/concepts)
Case3: 82-95 (+32-45 de contexto+keywords+concepts) ← VENCE! ✅
```

---

## 🚀 PLANO DE IMPLEMENTAÇÃO

### **Fase 1: Quick Win (15 min)**
1. Adicionar contexto de "impacto amplo" ao `analyzeContext()`
2. Rodar remapeamento
3. Verificar se Case3 agora tem score ~75

### **Fase 2: Médio Prazo (1h)**
1. Criar `LP_KEYWORDS` map com vocabulário dos 6 LPs prioritários
2. Atualizar `extractKeywords()` para usar LP-specific keywords
3. Rodar remapeamento e comparar coverage

### **Fase 3: Longo Prazo (2-3h)**
1. Expandir `analyzeConceptMatch()` com concepts dos 6 LPs prioritários
2. Criar arquivo `lp-vocabulary.json` com keywords/concepts de todos 16 LPs
3. Refatorar para carregar dinamicamente

---

## 🎯 MÉTRICAS DE SUCESSO

- [ ] Case3 score: 50 → **82+** para P1 de broad_responsibility
- [ ] Coverage P1 (alta prioridade): 93.8% → **100%**
- [ ] Coverage geral: 58.5% → **65%+** (estimativa)
- [ ] Zero regressões: testes 31/31 passing
- [ ] Tempo de remapeamento: <30s (mesmo desempenho)

---

## 📝 LIÇÕES APRENDIDAS

1. **Debug scripts são protótipos valiosos**: Mostram o "ideal" de precisão com LP-specific logic
2. **Algoritmo genérico é trade-off**: Escalabilidade vs precisão
3. **Vocabulário específico por LP é essencial**: Diferença de 32 pontos (64% do score)
4. **Context analysis precisa ser completo**: Faltavam 6+ contextos importantes
5. **Hybrid approach funciona**: Manter base genérica + adicionar LP-specific boosts

---

## ⚠️ RISCOS

1. **Overfitting**: Adicionar muitos LP-specific keywords pode beneficiar apenas os cases atuais
   - **Mitigação**: Testar com perguntas novas; manter threshold de 45 pontos

2. **Manutenção**: Vocabulário por LP precisa ser atualizado conforme cases evoluem
   - **Mitigação**: Criar `lp-vocabulary.json` centralizando keywords/concepts

3. **Performance**: Adicionar mais checks pode deixar mapeamento mais lento
   - **Mitigação**: Benchmark antes/depois; otimizar com early returns

4. **Regressões**: Melhorar broad_responsibility pode piorar outros LPs
   - **Mitigação**: Rodar testes completos; gerar diff de coverage antes/depois

---

## 📅 PRÓXIMOS PASSOS

**AGORA**: Implementar Fase 1 (contexto de impacto amplo)

**DEPOIS**: Analisar impacto e decidir se segue para Fases 2 e 3

**META**: Score 82+ para Case3, coverage P1 100%, zero regressões
