# 🎨 Preview Visual - Case Question Tooltips

## Interface Antes vs Depois

### ❌ ANTES (sem tooltips)

```
┌────────────────────────────────────────────────────────────────┐
│  ⭐ TOP CASE  Huawei - Project Managers Mentoring Program     │
│                                                     Ver detalhes▾│
└────────────────────────────────────────────────────────────────┘
```

**Problema:** Usuário não sabe quantas/quais perguntas o case responde.

---

### ✅ DEPOIS (com tooltips)

```
┌────────────────────────────────────────────────────────────────┐
│  ⭐ TOP CASE  💬 6 Q  Huawei - Project Managers Mentoring      │
│                                                     Ver detalhes▾│
└────────────────────────────────────────────────────────────────┘
         ↑
     [HOVER AQUI]
         ↓
┌────────────────────────────────────────────────────────────────┐
│ 💬 Tooltip:                                                    │
│ ─────────────────────────────────────────────────────────────  │
│ Responde 6 pergunta(s): Q0, Q1, Q3, Q5, Q8, Q10               │
│                                                                │
│ Q0: Nos conte uma situação onde você assumiu responsabilida...│
│ Q1: Me dê um exemplo de quando você foi além da sua função... │
│ Q3: Como você age quando algo não é sua responsabilidade?...  │
└────────────────────────────────────────────────────────────────┘
```

**Benefício:** Visibilidade instantânea + preview das perguntas específicas.

---

## 🎯 Exemplos Reais por LP

### 1. Customer Obsession

#### unimed-customer-experience (4 perguntas)
```
┌────────────────────────────────────────────────────────────────┐
│  👍 GOOD CASE  💬 4 Q  Unimed - Customer Experience Transform. │
└────────────────────────────────────────────────────────────────┘

Tooltip:
"Responde 4 pergunta(s): Q0, Q4, Q6, Q10

Q0: Conte uma situação onde você foi além da expectativa do cliente...
Q4: Descreva uma situação onde você melhorou a experiência do cliente...
Q6: Descreva uma situação onde você teve que equilibrar demandas..."
```

#### sicredi-gateway-consumer-experience (4 perguntas)
```
┌────────────────────────────────────────────────────────────────┐
│  👍 GOOD CASE  💬 4 Q  Sicredi - Gateway Consumer Experience   │
└────────────────────────────────────────────────────────────────┘

Tooltip:
"Responde 4 pergunta(s): Q3, Q5, Q7, Q9

Q3: Como você entende as necessidades dos clientes?...
Q5: Conte sobre uma vez que você usou feedback de clientes...
Q7: Me fale sobre quando você não conseguiu atender a expectativa..."
```

---

### 2. Hire and Develop the Best

#### huawei-project-managers-mentoring (6 perguntas - MÁXIMA COVERAGE)
```
┌────────────────────────────────────────────────────────────────┐
│  ⭐ TOP CASE  💬 6 Q  Huawei - Project Managers Mentoring      │
└────────────────────────────────────────────────────────────────┘

Tooltip:
"Responde 6 pergunta(s): Q0, Q1, Q3, Q5, Q8, Q10

Q0: Nos conte uma situação onde você assumiu responsabilidade além...
Q1: Me dê um exemplo de quando você foi além da sua função...
Q3: Como você age quando algo não é sua responsabilidade?..."
```

#### bradesco-talent-pipeline-creation (3 perguntas)
```
┌────────────────────────────────────────────────────────────────┐
│  👍 GOOD CASE  💬 3 Q  Bradesco - Talent Pipeline Creation     │
└────────────────────────────────────────────────────────────────┘

Tooltip:
"Responde 3 pergunta(s): Q2, Q4, Q6

Q2: Conte sobre uma decisão de longo prazo que você tomou...
Q4: Me fale sobre um trade-off difícil que você fez pensando no..."
```

---

### 3. Think Big

#### huawei-global-rollout (3 perguntas)
```
┌────────────────────────────────────────────────────────────────┐
│  👍 GOOD CASE  💬 3 Q  Huawei - Global Operations Rollout      │
└────────────────────────────────────────────────────────────────┘

Tooltip:
"Responde 3 pergunta(s): Q0, Q5, Q11

Q0: Tell me about a time when you took on something significant...
Q5: Tell me about your most significant professional achievement...
Q11: Describe when you led a program that required coordination..."
```

#### game-changing-program (3 perguntas)
```
┌────────────────────────────────────────────────────────────────┐
│  ⭐ TOP CASE  💬 3 Q  SEFAZ/RS - Game-Changing Fiscal Program  │
└────────────────────────────────────────────────────────────────┘

Tooltip:
"Responde 3 pergunta(s): Q3, Q7, Q10

Q3: Describe a time when you proposed a non-obvious solution...
Q7: Tell me about when you had to make a decision with incomplete...
Q10: Tell me about a time when you challenged assumptions..."
```

---

### 4. Broad Responsibility

#### sicredi-responsible-ai-policy (4 perguntas - MÁXIMA)
```
┌────────────────────────────────────────────────────────────────┐
│  ⭐ TOP CASE  💬 4 Q  Sicredi - Responsible AI Policy          │
└────────────────────────────────────────────────────────────────┘

Tooltip:
"Responde 4 pergunta(s): Q0, Q2, Q4, Q7

Q0: Tell me about a time you made a decision that benefited the...
Q2: Describe when you had to balance business goals with social...
Q4: Tell me about when you implemented a policy to prevent harm..."
```

#### unimed-lgpd-compliance (3 perguntas)
```
┌────────────────────────────────────────────────────────────────┐
│  👍 GOOD CASE  💬 3 Q  Unimed - LGPD Compliance Implementation │
└────────────────────────────────────────────────────────────────┘

Tooltip:
"Responde 3 pergunta(s): Q1, Q5, Q8

Q1: Describe when you took ownership of a compliance risk...
Q5: Tell me about a time when you improved transparency...
Q8: Describe when you built mechanisms to protect user rights..."
```

#### hsbc-fatca-aml-migration (3 perguntas)
```
┌────────────────────────────────────────────────────────────────┐
│  👍 GOOD CASE  💬 3 Q  HSBC - FATCA/AML Compliance Migration   │
└────────────────────────────────────────────────────────────────┘

Tooltip:
"Responde 3 pergunta(s): Q3, Q6, Q9

Q3: Tell me about when you proactively addressed regulatory risk...
Q6: Describe when you coordinated multiple teams for compliance...
Q9: Tell me about a time when you prevented significant business..."
```

---

## 🎨 Cores e Estilo

### Badge Visual

**Elemento:**
```html
<span class="px-2.5 py-0.5 bg-purple-500 text-white text-[10px] font-semibold rounded-full shadow-sm cursor-help">
  💬 6 Q
</span>
```

**Cores:**
- Background: `bg-purple-500` (#A855F7 - roxo)
- Text: `text-white`
- Shadow: `shadow-sm` (sombra suave)

**Posicionamento:**
```
⭐ TOP CASE → 💬 6 Q → [Título do Case]
    ↑            ↑          ↑
  laranja      roxo      preto
```

### Tooltip (HTML title)

**Formato:**
- Linha 1: Resumo (ex: "Responde 6 pergunta(s): Q0, Q1, Q3...")
- Linha 2: Em branco (separador)
- Linhas 3+: Preview das primeiras 3 perguntas (80 chars cada)

**Comportamento:**
- Aparece no **hover** sobre o badge `💬 X Q`
- Aparece no **hover** sobre o card inteiro (title no `<article>`)
- Nativo do browser (sem CSS/JS customizado)

---

## 📊 Estatísticas de Coverage

### Após Remapping (Fases 1-3)

| LP | Total Q | Cases | Avg Q/Case | Max Q/Case |
|----|---------|-------|------------|------------|
| customer_obsession | 12 | 3 | 4.0 | 4 |
| hire_and_develop_the_best | 11 | 3 | 3.7 | **6** |
| think_big | 12 | 4 | 3.0 | 3 |
| broad_responsibility | 10 | 3 | 3.3 | 4 |

**Destaque:**
- **🏆 Maior Coverage**: huawei-project-managers-mentoring (6 Q = 54.5%)
- **📈 Distribuição Balanceada**: Todos os cases respondem 3-6 perguntas
- **✅ Zero NULLs**: 100% das perguntas mapeadas após Fase 3

---

## 🚀 Como Testar

### Passo 1: Abrir a aplicação
```bash
npm run dev
```

### Passo 2: Navegar para um LP
- Selecione "Hire and Develop the Best" no dropdown
- Expanda o accordion do princípio

### Passo 3: Observar os badges
- Cada case agora mostra `💬 X Q` entre os badges e o título
- Exemplo: `⭐ TOP CASE  💬 6 Q  Huawei - Project...`

### Passo 4: Hover sobre o badge ou card
- Mova o mouse sobre o badge `💬 6 Q`
- Tooltip aparece mostrando as perguntas
- Exemplo:
  ```
  Responde 6 pergunta(s): Q0, Q1, Q3, Q5, Q8, Q10
  
  Q0: Nos conte uma situação onde você...
  Q1: Me dê um exemplo de quando você...
  Q3: Como você age quando algo não é...
  ```

### Passo 5: Trocar idioma
- Clique no botão 🌐 PT/EN
- Tooltip atualiza para inglês:
  ```
  Answers 6 question(s): Q0, Q1, Q3, Q5, Q8, Q10
  
  Q0: Tell me about a situation where...
  Q1: Give me an example of when you...
  Q3: How do you act when something is...
  ```

---

## 🎯 Casos de Uso

### Caso 1: Preparação Focada
**Cenário:** Usuário quer praticar perguntas de "Hire and Develop the Best"

**Como o tooltip ajuda:**
1. Vê que `huawei-mentoring` responde 6 perguntas (54.5% coverage)
2. Hover revela: Q0, Q1, Q3, Q5, Q8, Q10
3. Decide usar esse case como principal para o LP
4. Usa os outros 2 cases para cobrir Q2, Q4, Q6, Q7, Q9

### Caso 2: Identificar Gaps
**Cenário:** Usuário nota que um case não tem badge `💬 X Q`

**O que isso significa:**
- Case não está mapeado para nenhuma pergunta (NULL ou não usado)
- Possível oportunidade de remapping
- Exemplo: Cases antigos ou não validados

### Caso 3: Comparação Rápida
**Cenário:** Usuário compara 2 cases para escolher qual memorizar

**Como o tooltip ajuda:**
```
Case A: 💬 6 Q  (Q0, Q1, Q3, Q5, Q8, Q10)
Case B: 💬 3 Q  (Q2, Q4, Q6)

Decisão: Case A tem maior coverage, melhor para tempo limitado
```

---

**Status:** ✅ DOCUMENTADO E TESTADO  
**Data:** 07/10/2025  
**Autor:** GitHub Copilot (Principal Engineer)
