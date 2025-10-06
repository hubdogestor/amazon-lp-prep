# 🎯 GUIA RÁPIDO: Como Usar o Mapeamento Perguntas → Cases

## 📋 Você Recebeu 4 Arquivos

1. **mapeamento-perguntas-cases-COMPLETO.csv** — Planilha principal (abrir no Excel)
2. **mapeamento-perguntas-cases-COMPLETO.json** — Dados estruturados (para scripts)
3. **gaps-perguntas-sem-cases.md** — Detalhamento dos gaps
4. **DASHBOARD_MAPEAMENTO_PERGUNTAS.md** — Visão executiva e estratégia

---

## 🚀 QUICK START: 3 Cenários de Uso

### 📖 **Cenário 1: Preparar para LP Específico**

**Você quer**: Treinar respostas para "Customer Obsession"

**Passo a passo**:
1. Abra `mapeamento-perguntas-cases-COMPLETO.csv` no Excel
2. Adicione filtro na coluna "LP"
3. Selecione "customer_obsession"
4. Você verá **12 perguntas** com mapeamento

**Resultado esperado**:
```
✅ Todas as 12 perguntas têm case: bradesco-next-customer-ritual
📊 Score médio: 85-90/100
🎯 Recomendação: Case PERFEITO para todas as perguntas deste LP!
```

**Como praticar**:
- Abra o arquivo `src/data/customer_obsession/bradesco-next-customer-ritual.js`
- Leia o STAR(L) completo (PT e EN)
- Para cada pergunta, pratique contar o case enfatizando aspectos específicos:
  * Pergunta 1 "Foi além da expectativa" → Enfatize AÇÃO de criar ritual
  * Pergunta 2 "Cliente em primeiro" → Enfatize DECISÃO de priorizar NPS
  * Pergunta 3 "Cliente vs métricas" → Enfatize TRADE-OFF de curto vs longo prazo

---

### 🔍 **Cenário 2: Identificar Gaps Urgentes**

**Você quer**: Saber quais cases FALTAM desenvolver

**Passo a passo**:
1. Abra `DASHBOARD_MAPEAMENTO_PERGUNTAS.md`
2. Vá direto para seção "🔴 GAPS CRÍTICOS"
3. Identifique perguntas #1 sem case (prioridade máxima)

**Gaps críticos identificados**:
```
❌ Are Right A Lot → "Decisão difícil com stakeholders"
❌ Learn and Be Curious → "Como se mantém atualizado"
❌ Earn Trust → "Feedback mais difícil que recebeu"
❌ Best Employer → TODO (0 cases!)
❌ Broad Responsibility → TODO (0 cases!)
```

**Ação recomendada**:
- Agende 2 horas para **brainstorm de novas experiências**
- Revise seu histórico profissional buscando situações que respondam esses gaps
- Priorize: Best Employer e Broad Responsibility (20 perguntas descobertas!)

---

### 🎓 **Cenário 3: Mock Interview Preparation**

**Você tem**: Mock interview agendado amanhã

**Estratégia relâmpago**:
1. Abra `mapeamento-perguntas-cases-COMPLETO.csv`
2. Filtre coluna "Prioridade" = "ALTA" (são as perguntas #1 de cada LP)
3. Você terá **16 perguntas** (uma por LP) — as MAIS PROVÁVEIS

**Resultado**:
```
✅ 11 perguntas cobertas (68.8%)
❌ 5 perguntas descobertas (31.2%)
```

**Plano de estudo (2 horas)**:
- **60 min**: Treinar os 11 cases que você JÁ TEM
- **30 min**: Preparar "plano B" para os 5 gaps (usar cases de outros LPs adaptados)
- **30 min**: Treinar transições suaves entre STAR(L) elements

---

## 📊 LENDO O CSV: Entendendo as Colunas

### Exemplo de linha do CSV:

```csv
customer_obsession,ALTA,"Conte uma situação onde você foi além...","Tell me about a time...",sim,bradesco-next-customer-ritual,"Liderei o Ritual de Voz do Cliente...",85,"Case do LP correto (customer_obsession); 1 keyword presente; Foco em cliente/experiência alinhado; Conceito alinhado (+10)"
```

**Traduzindo**:

| Coluna | Valor | O Que Significa |
|:-------|:------|:----------------|
| **LP** | `customer_obsession` | Leadership Principle desta pergunta |
| **Prioridade** | `ALTA` | Pergunta #1 (mais provável de ser feita) |
| **Pergunta (PT)** | "Conte uma situação..." | Texto da pergunta em português |
| **Pergunta (EN)** | "Tell me about..." | Texto em inglês (para treinar resposta bilíngue) |
| **Tem Case?** | `sim` | ✅ Você TEM um case adequado! |
| **Case ID** | `bradesco-next-customer-ritual` | Nome do arquivo do case |
| **Case Title** | "Liderei o Ritual..." | Título do case recomendado |
| **Score** | `85` | Qualidade do match (0-100). ≥45 = adequado |
| **Reasoning** | "Case do LP correto..." | Por que esse case foi escolhido |

---

## 🎯 INTERPRETANDO OS SCORES

### Score 80-100: **MATCH PERFEITO** ✅
- Case responde a pergunta de forma DIRETA
- Alto alinhamento semântico
- Use com confiança total

**Exemplo**:
```
Pergunta: "Me dê exemplo de quando você usou dados de pagamento..."
Case: sicredi-api-pricing-model (Score: 90)
Reasoning: "2 keywords presentes; Contexto de dados alinhado; Conceito alinhado"
```

### Score 60-79: **BOM MATCH** ✅
- Case responde bem a pergunta
- Alguns aspectos precisam ser enfatizados no storytelling
- Pratique adaptações

**Exemplo**:
```
Pergunta: "Conte sobre inovação que simplificou processo..."
Case: payment-simplification-high-impact (Score: 75)
Reasoning: "Contexto de inovação alinhado; Conceito alinhado"
```

### Score 45-59: **MATCH ACEITÁVEL** ⚠️
- Case pode responder, mas não é ideal
- Considere usar E TAMBÉM preparar alternativa
- Enfatize os elementos mais relevantes

**Exemplo**:
```
Pergunta: "Quando você identificou ineficiência..."
Case: payment-incidents-prevention-mechanism (Score: 50)
Reasoning: "Case do LP correto; 1 keyword presente"
```

### Score 0-44: **SEM MATCH** ❌
- Case não responde adequadamente
- GAP identificado
- Desenvolva novo case ou use de outro LP adaptado

---

## 💡 DICAS PRÁTICAS

### ✅ **DO's**

1. **Pratique variações do mesmo case**
   - O case `bradesco-next-customer-ritual` responde 12 perguntas!
   - Aprenda a enfatizar diferentes aspectos do mesmo STAR(L)

2. **Use o Reasoning como guia**
   - Se diz "Contexto de dados alinhado", prepare para falar sobre métricas
   - Se diz "Conceito alinhado", prepare para enfatizar o conceito-chave

3. **Treine casos de ALTA prioridade primeiro**
   - As 16 perguntas #1 são as mais prováveis
   - 11 já têm cases → pratique MUITO esses 11

4. **Para gaps, improvise inteligentemente**
   - Use case de outro LP adaptado
   - Ex: "Best Employer" gap → use case de "Hire and Develop" enfatizando bem-estar

### ❌ **DON'Ts**

1. **Não ignore gaps críticos**
   - 5 perguntas #1 sem case = 5 bombas-relógio
   - Invista tempo desenvolvendo esses cases

2. **Não decore STAR(L) verbatim**
   - Use o mapeamento para ADAPTAR o storytelling à pergunta
   - Cada pergunta precisa de ênfases diferentes

3. **Não use case com score <45**
   - Se o algoritmo disse "não é adequado", acredite
   - Melhor improvisar do que forçar case errado

---

## 🔬 EXEMPLOS REAIS DE PREPARAÇÃO

### **Exemplo 1: Pergunta de Customer Obsession**

**Pergunta**: "Como você equilibra prevenção de fraude com experiência do cliente?"  
**Case Recomendado**: `bradesco-next-customer-ritual` (Score: 90)

**Preparação**:
1. Leia o STAR(L) completo
2. Identifique onde fala sobre **trade-offs** (balanço)
3. Pratique resposta enfatizando:
   - **S**: Problema de NPS baixo devido a processo rígido
   - **T**: Tarefa de melhorar NPS SEM comprometer segurança
   - **A**: Ritual de Voz do Cliente para balancear fricção vs. segurança
   - **R**: NPS 35→62 mantendo compliance
   - **L**: Aprendizado sobre customer-first mindset

### **Exemplo 2: Pergunta de Ownership**

**Pergunta**: "Descreva quando você criou mecanismo para prevenir problemas recorrentes em pagamentos"  
**Case Recomendado**: `bradesco-international-payments` (Score: 75)

**Preparação**:
1. Case fala sobre força-tarefa de pagamentos internacionais
2. Enfatize:
   - **S**: Problemas recorrentes (incidents reincidentes)
   - **T**: Criar MECANISMO (não só resolver pontualmente)
   - **A**: Implementação de safeguards e processos
   - **R**: Redução de X% de incidentes
   - **L**: "Think mechanisms, not intentions"

### **Exemplo 3: GAP Identificado**

**Pergunta**: "Me fale sobre o feedback mais difícil que você já recebeu"  
**Status**: ❌ GAP (nenhum case adequado)

**Estratégia de contingência**:
1. Revise seu histórico: teve algum feedback difícil?
2. Se sim: desenvolva caso novo (mesmo que breve)
3. Se não: use caso próximo e adapte
   - Ex: Momento em `earn_trust` onde teve que reconstruir confiança
   - Conecte com feedback implícito que levou àquela situação

---

## 🎬 WORKFLOW SUGERIDO

### **Semana 1: Fortalecer Casos Existentes (85 perguntas)**
- [ ] Dia 1-2: LPs com 100% cobertura (Customer Obsession)
- [ ] Dia 3-4: LPs com 60-80% cobertura (Ownership, Think Big, etc.)
- [ ] Dia 5: LPs com 45-60% cobertura (Invent and Simplify, etc.)

### **Semana 2: Desenvolver Casos Novos (86 gaps)**
- [ ] Dia 1-2: Casos para Best Employer (10 perguntas)
- [ ] Dia 3: Casos para Broad Responsibility (10 perguntas)
- [ ] Dia 4: Casos para gaps críticos (Are Right A Lot, Earn Trust, Learn and Be Curious)
- [ ] Dia 5: Revisar e documentar todos os novos casos

### **Semana 3: Mock Interviews & Refinamento**
- [ ] Dia 1-2: Mock interviews por LP (3-4 LPs por dia)
- [ ] Dia 3-4: Ajustar casos com feedback dos mocks
- [ ] Dia 5: Mock interview completo (todas as 16 perguntas #1)

---

## 📞 SUPORTE

**Arquivos de Referência**:
- CSV completo: `mapeamento-perguntas-cases-COMPLETO.csv`
- Gaps detalhados: `gaps-perguntas-sem-cases.md`
- Dashboard executivo: `DASHBOARD_MAPEAMENTO_PERGUNTAS.md`

**Cases Originais**:
- Diretório: `src/data/<lp_folder>/<case_id>.js`
- Exemplo: `src/data/customer_obsession/bradesco-next-customer-ritual.js`

---

## 🎯 OBJETIVO FINAL

**Até o dia da entrevista, você deve**:
- ✅ Dominar os **85 casos já mapeados** (adaptando storytelling por pergunta)
- ✅ Desenvolver **pelo menos 20 novos casos** para gaps críticos
- ✅ Treinar **todas as 16 perguntas #1** (alta prioridade)
- ✅ Ter **plano B** para cada gap identificado

**Resultado esperado**: **70%+ de cobertura** em TODOS os LPs = **forte candidato preparado**

---

**Boa sorte na preparação! 🚀**
