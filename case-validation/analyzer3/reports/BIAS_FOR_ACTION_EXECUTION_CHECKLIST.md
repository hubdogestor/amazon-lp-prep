# ✅ Bias for Action - Checklist de Execução (FULL Review)

**Criado**: 2025-01-XX  
**Status**: 🔄 IN PROGRESS  
**Prioridade**: 1 (HIGHEST)

---

## 📋 Visão Geral

**Objetivo**: Elevar Bias for Action de **40% → 100%** com FULL review (título, STAR, FUPs)

**Escopo**:
- ✅ 2 remapeamentos rápidos (Q1, Q2)
- ✅ 4 FULL reviews (Q3, Q5, Q6, Q7)
- ✅ 1 novo case (SEFAZ Pivot - Q8)
- ✅ 1 novo case opcional (HDG - backup)

**Impacto Esperado**:
- Score médio: 50 → 87 (+37 pontos)
- Scores críticos (<60): 3 → 0
- Cobertura: 40% → 100%

---

## PHASE 1: Remapeamentos Rápidos (30 min)

### ✅ Task 1.1: Remapear Q1 (calculated-risk → fraud case)

**Pergunta**: "Me fale sobre uma decisão que você tomou com informação limitada"

**Mudança**:
- ❌ **ANTES**: `calculated-risk-time-critical` (score 55)
- ✅ **DEPOIS**: `sicredi-fraud-emergency-4h-decision` (score esperado: 80)

**Justificativa**: Fraud case coletou 3 signals em 1h15min e decidiu em 4h (informação limitada clara).

**Arquivos a atualizar**:
- [ ] `src/data/questionsToCasesMapping.js` (linha ~337)
  - Alterar `"1": { "case_id": "calculated-risk-time-critical", "score": 55 }`
  - Para `"1": { "case_id": "sicredi-fraud-emergency-4h-decision", "score": 80 }`

- [ ] `perguntas-cases/dados/mapeamento-perguntas-cases-COMPLETO.csv` (linha ~91)
  - Alterar case_id, case_title, score, reasoning

- [ ] `perguntas-cases/dados/mapeamento-perguntas-cases-COMPLETO.json` (linha ~973)
  - Alterar case_id, case_title, score, reasoning

**Reasoning atualizado**:
```
Case do LP correto (bias_for_action); Decisão com 3 signals em 1h15min (informação limitada); 4h para decisão final; 2 keywords presentes; Conceito alinhado (+10)
```

---

### ✅ Task 1.2: Remapear Q2 (bradesco → sefaz-portal)

**Pergunta**: "Conte sobre uma vez que você agiu rapidamente"

**Mudança**:
- ❌ **ANTES**: `bradesco-next-rapid-launch` (score 50)
- ✅ **DEPOIS**: `sefaz-emergency-tax-portal` (score esperado: 90)

**Justificativa**: Portal em 18 dias, MVP em 5 dias, stop-the-backlog policy = ação ultra-rápida.

**Arquivos a atualizar**:
- [ ] `src/data/questionsToCasesMapping.js` (linha ~341)
  - Alterar `"2": { "case_id": "bradesco-next-rapid-launch", "score": 50 }`
  - Para `"2": { "case_id": "sefaz-emergency-tax-portal", "score": 90 }`

- [ ] `perguntas-cases/dados/mapeamento-perguntas-cases-COMPLETO.csv` (linha ~92)
  - Alterar case_id, case_title, score, reasoning

- [ ] `perguntas-cases/dados/mapeamento-perguntas-cases-COMPLETO.json` (linha ~988)
  - Alterar case_id, case_title, score, reasoning

**Reasoning atualizado**:
```
Case do LP correto (bias_for_action); Ação ultra-rápida: portal em 18 dias, MVP em 5 dias; Stop-the-backlog policy; 2 keywords presentes; Conceito alinhado (+10); Título alinhado com pergunta
```

---

### ✅ Task 1.3: Validar remapeamentos

- [ ] Executar `npm test` (todos os testes passando)
- [ ] Executar `npm run build` (sem erros)
- [ ] Abrir UI e verificar:
  - [ ] Q1 agora mostra fraud case
  - [ ] Q2 agora mostra sefaz-portal
  - [ ] Links funcionando corretamente

**Status**: [ ] COMPLETO

---

## PHASE 2: FULL Review - Q6 (bradesco two-way door) (1 hora)

### ✅ Task 2.1: Review Q6 - Título

**Pergunta**: "Descreva uma vez que você teve que tomar decisão reversível rapidamente vs. irreversível com mais análise"

**Título atual**: "Decisao Rapida para Lancar o Banco Digital Next em 11 Meses"

**Problema**: Título não menciona two-way door framework (conceito-chave da pergunta)

**Título proposto**:
```
Classifiquei 126 Decisões em Two-Way/One-Way Door e Lancei Banco Digital em 11 Meses
```

**Mudança**:
- [ ] Atualizar `src/data/bias_for_action/bias_for_action_case1.js`
  - Alterar `title_pt` (linha ~6)
  - Alterar `title_en` (linha ~7)

**Título EN proposto**:
```
Classified 126 Decisions as Two-Way/One-Way Door and Launched Digital Bank in 11 Months
```

---

### ✅ Task 2.2: Review Q6 - STAR (Situation)

**Objetivo**: Adicionar parágrafo enfatizando SeDR mechanism e two-way door framework

**Localização**: `bias_for_action_case1.js`, `pt.situation` (linha ~15)

**Adição sugerida** (após parágrafo existente):
```
Criei o SeDR (Speedy Decision Review): framework de classificação de decisões em two-way door (reversíveis) vs. one-way door (irreversíveis). Identifiquei que 79% das 126 decisões mapeadas eram two-way (ex: escolha de provider de análise de crédito) e podiam ser tomadas em <24h. Os 21% one-way (ex: escolha de core bancário) receberiam análise profunda de 2-4 semanas. Esse framework quebrou o paradigma de 'tudo precisa de 3 comitês e 6 semanas'.
```

**Checklist**:
- [ ] Adicionar parágrafo em `pt.situation`
- [ ] Adicionar parágrafo equivalente em `en.situation`
- [ ] Garantir que total de linhas de situation permanece equilibrado (não ultrapassar 20 linhas)

---

### ✅ Task 2.3: Review Q6 - STAR (Action)

**Objetivo**: Destacar processo de classificação e velocidade de aprovação

**Localização**: `bias_for_action_case1.js`, `pt.action` (linha ~35)

**Adição sugerida** (inserir após descrição de SeDR):
```
Para decisões two-way door, criei fast-track: apresentação de 1 página, 3 critérios (impacto cliente, reversibilidade, custo rollback), aprovação em até 24h. Exemplo: integração com ClearSale (antifraud) foi aprovada em 9 horas porque impacto cliente era alto, mas poderíamos trocar de provider em 2 semanas se necessário. Para decisões one-way door, exigi análise profunda: 3 cenários, impacto 5 anos, exit strategy, aprovação com VP + CTO.
```

**Checklist**:
- [ ] Adicionar detalhamento de two-way door process em `pt.action`
- [ ] Adicionar equivalente em `en.action`
- [ ] Revisar transição entre parágrafos

---

### ✅ Task 2.4: Review Q6 - STAR (Result)

**Objetivo**: Adicionar métrica específica de velocidade de decisões two-way door

**Localização**: `bias_for_action_case1.js`, `pt.result` (linha ~55)

**Adição sugerida** (inserir após métricas de NPS):
```
- **Velocidade de decisão**: 79% das decisões (two-way door) aprovadas em <24h vs. 6 semanas antes
- **Acertos**: 94% das decisões two-way door foram corretas (apenas 6 rollbacks necessários)
- **Economia de tempo**: 147 dias-pessoa economizados em comitês desnecessários
```

**Checklist**:
- [ ] Adicionar métricas de two-way door em `pt.result`
- [ ] Adicionar equivalente em `en.result`
- [ ] Garantir que métricas são críveis e consistentes

---

### ✅ Task 2.5: Review Q6 - STAR (Learning)

**Objetivo**: Adicionar learning sobre framework de classificação de decisões

**Localização**: `bias_for_action_case1.js`, `pt.learning` (linha ~75)

**Adição sugerida**:
```
O SeDR framework transformou minha abordagem de gestão de decisões: (1) 80% das decisões são two-way door e merecem velocidade, não perfeição; (2) Classificar decisões ANTES de discutir agiliza reuniões em 60%; (3) Critério de reversibilidade é mais útil que severidade de impacto; (4) Registrar decisões two-way door com reasoning ajuda rollback rápido se necessário. Apliquei SeDR em 3 projetos posteriores (Huawei, Unimed, Sicredi) com economia média de 40% no ciclo de decisão.
```

**Checklist**:
- [ ] Adicionar learning sobre two-way door em `pt.learning`
- [ ] Adicionar equivalente em `en.learning`
- [ ] Garantir que learning é específico e transferível

---

### ✅ Task 2.6: Review Q6 - FUPs

**Objetivo**: Criar 3 FUPs específicos sobre two-way door framework

**Localização**: `bias_for_action_case1.js`, `fups` (linha ~90)

**FUPs sugeridos** (adicionar ou substituir):

**FUP 4**: "Como você classifica uma decisão como two-way door vs. one-way door? Quais critérios usa?"
- **Resposta PT**: "Uso 3 critérios: (1) Reversibilidade: posso voltar atrás em <30 dias sem custo proibitivo?; (2) Impacto: se errar, o custo de rollback é <20% do custo total?; (3) Dependências: outros sistemas/times dependem dessa decisão ser permanente? Se sim em 2 dos 3, é two-way door. Exemplo: escolha de provider de SMS é two-way (posso trocar em 2 semanas), escolha de core bancário é one-way (migração custaria R$8M e 18 meses)."
- **Resposta EN**: "I use 3 criteria: (1) Reversibility: can I reverse in <30 days without prohibitive cost?; (2) Impact: if wrong, rollback cost is <20% of total cost?; (3) Dependencies: do other systems/teams depend on this decision being permanent? If yes on 2 of 3, it's two-way door. Example: SMS provider choice is two-way (can switch in 2 weeks), core banking choice is one-way (migration would cost R$8M and 18 months)."

**FUP 7**: "Você teve alguma decisão two-way door que descobriu ser one-way door depois? Como lidou?"
- **Resposta PT**: "Sim. A escolha de design system (Material vs. Bootstrap) foi classificada como two-way door (podemos trocar). Mas após 4 meses, 78 componentes customizados estavam acoplados ao Material. Custo de migração seria 6 semanas-squad. Aprendi: para decisões arquiteturais, adicionar critério 'velocity of lock-in' - se uso cresce >20 componentes/mês, reclassificar como one-way door e fazer análise profunda. Depois disso, adicionei gate de revisão no mês 2 para decisões arquiteturais."
- **Resposta EN**: "Yes. Design system choice (Material vs. Bootstrap) was classified as two-way door (we can switch). But after 4 months, 78 custom components were coupled to Material. Migration cost would be 6 squad-weeks. I learned: for architectural decisions, add 'velocity of lock-in' criterion - if usage grows >20 components/month, reclassify as one-way door and do deep analysis. After that, I added month 2 review gate for architectural decisions."

**FUP 9**: "Como você convenceu stakeholders conservadores a aceitar decisões rápidas two-way door?"
- **Resposta PT**: "Criei 'Reversibility Index': para cada decisão two-way door, documentava (1) Tempo de rollback (ex: 48h), (2) Custo de rollback (ex: R$12k), (3) Impacto cliente durante rollback (ex: feature offline por 6h). Apresentava isso em 1 slide antes da decisão. Exemplo: integração ClearSale tinha Reversibility Index de 48h / R$15k / 6h offline - VP aprovou em 4 horas. Também criei 'rollback playbook' com 5 passos pré-documentados. Após 6 meses, 94% de acerto em two-way doors validou abordagem, e VP passou a aprovar via Slack."
- **Resposta EN**: "I created 'Reversibility Index': for each two-way door decision, I documented (1) Rollback time (e.g., 48h), (2) Rollback cost (e.g., R$12k), (3) Customer impact during rollback (e.g., feature offline for 6h). Presented this in 1 slide before decision. Example: ClearSale integration had Reversibility Index of 48h / R$15k / 6h offline - VP approved in 4 hours. Also created 'rollback playbook' with 5 pre-documented steps. After 6 months, 94% success rate in two-way doors validated approach, and VP started approving via Slack."

**Checklist**:
- [ ] Adicionar/substituir 3 FUPs em `bias_for_action_case1.js`
- [ ] Garantir parity PT/EN
- [ ] Verificar que FUPs não repetem perguntas de Q3, Q7 (outras perguntas do mesmo case)

---

### ✅ Task 2.7: Atualizar score de Q6

- [ ] Atualizar score em `questionsToCasesMapping.js` (linha ~353)
  - Alterar `"6": { "case_id": "bradesco-next-rapid-launch", "score": 50 }`
  - Para `"6": { "case_id": "bradesco-next-rapid-launch", "score": 90 }`

- [ ] Atualizar score em CSV e JSON
  - `mapeamento-perguntas-cases-COMPLETO.csv`
  - `mapeamento-perguntas-cases-COMPLETO.json`

**Status**: [ ] COMPLETO

---

## PHASE 3: FULL Review - Q3 e Q7 (bradesco) (45 min)

### ✅ Task 3.1: Review Q3 - "Como você decide quando é hora de agir vs. analisar mais?"

**Score atual**: 85 → **Meta**: 90

**Foco**: Enfatizar tradeoff entre 18 meses (análise completa) vs. 11 meses (dados suficientes)

**Mudanças sugeridas**:

**STAR - Situation** (adicionar):
```
A diretoria queria análise completa de 18 meses antes do go-live: 6 meses de estudos de mercado, 8 meses de desenvolvimento com todas as features, 4 meses de testes. Argumentei que essa abordagem nos colocaria 12 meses atrás do Nubank. Propus abordagem de 'minimum viable data': coletar apenas dados críticos para decisões irreversíveis, e aprender o resto no mercado.
```

**FUP adicional**:
- **Q**: "Como você definiu 'dados suficientes' vs. 'análise infinita'? Qual seu framework?"
- **A PT**: "Usei 'Decision Quality Threshold': para cada decisão, defini (1) Custo de erro (se errar, quanto perdemos?), (2) Custo de atraso (cada mês de espera, quanto perdemos?). Se custo de atraso > custo de erro, era hora de agir. Exemplo: escolha de core bancário tinha custo de erro alto (R$8M migração se errar) e baixo custo de atraso (escolher em 2 vs. 4 meses não muda competição) → analisei 4 meses. Escolha de cor do app tinha baixo custo de erro (mudar em 1 semana) e alto custo de atraso (cada dia atrasava launch) → decidi em 2 dias com A/B test de protótipos."
- **A EN**: "I used 'Decision Quality Threshold': for each decision, I defined (1) Cost of error (if wrong, how much do we lose?), (2) Cost of delay (each month waiting, how much do we lose?). If cost of delay > cost of error, it was time to act. Example: core banking choice had high cost of error (R$8M migration if wrong) and low cost of delay (choosing in 2 vs. 4 months doesn't change competition) → I analyzed for 4 months. App color choice had low cost of error (change in 1 week) and high cost of delay (each day delayed launch) → I decided in 2 days with A/B test of prototypes."

**Checklist**:
- [ ] Adicionar parágrafo em situation
- [ ] Adicionar FUP sobre framework de decisão
- [ ] Atualizar score: 85 → 90

---

### ✅ Task 3.2: Review Q7 - "Como você equilibra necessidade de dados com necessidade de agir?"

**Score atual**: 85 → **Meta**: 90

**Foco**: Destacar conceito de "minimum viable data"

**Mudanças sugeridas**:

**STAR - Task** (adicionar):
```
Meu desafio era equilibrar 2 forças: (1) Time de risco queria 12 meses de dados históricos antes de aprovar qualquer produto de crédito; (2) Time de produto queria lançar em 6 meses para competir com Nubank. Criei framework 'Minimum Viable Data': identificar quais dados são críticos para decisões irreversíveis, e quais podemos coletar no mercado.
```

**FUP adicional**:
- **Q**: "Você teve pressão para agir SEM dados suficientes? Como resistiu?"
- **A PT**: "Sim. VP de Marketing queria lançar cartão de crédito no mês 8 sem dados de default rate (modelo de risco ainda em treinamento com apenas 4 meses de dados). Resisti criando 'Risk Gate': identifiquei que precisávamos de minimum 6 meses de dados históricos para ter 80% de confiança no modelo de risco (se não, poderíamos ter default rate de 15% vs. 3% esperado = R$45M de perda). Negociei: lançamos cartão no mês 10 (atraso de 2 meses), mas com modelo calibrado. Resultado: default rate foi 3.2% (dentro do esperado). Aprendi: definir 'minimum confidence threshold' para decisões de alto risco."
- **A EN**: "Yes. VP of Marketing wanted to launch credit card in month 8 without default rate data (risk model still training with only 4 months of data). I resisted by creating 'Risk Gate': I identified we needed minimum 6 months of historical data to have 80% confidence in risk model (otherwise, we could have default rate of 15% vs. 3% expected = R$45M loss). I negotiated: we launched card in month 10 (2-month delay), but with calibrated model. Result: default rate was 3.2% (within expected). I learned: define 'minimum confidence threshold' for high-risk decisions."

**Checklist**:
- [ ] Adicionar parágrafo em task
- [ ] Adicionar FUP sobre resistir a pressão
- [ ] Atualizar score: 85 → 90

**Status**: [ ] COMPLETO

---

## PHASE 4: FULL Review - Q5 (sicredi-ml) (30 min)

### ✅ Task 4.1: Review Q5 - Título

**Pergunta**: "Me fale sobre quando você foi o primeiro a agir em algo"

**Título atual**: "Fui o Primeiro a Implementar Análise de Crédito com Machine Learning no Sicredi"

**Análise**: Título JÁ É PERFEITO ✅ (enfatiza "fui o primeiro")

**Ação**: Manter título, mas verificar se STAR reforça pioneirismo

---

### ✅ Task 4.2: Review Q5 - STAR (Situation)

**Objetivo**: Adicionar contexto de resistência cultural a ser pioneiro

**Adição sugerida** (após parágrafo existente):
```
Eu seria o primeiro PM a implementar ML na análise de crédito do Sicredi. Havia resistência cultural: 23 anos de análise humana, crença de que 'cooperativismo precisa de toque humano', medo de desemprego entre analistas. Diretoria estava cética: 'ML não entende cultura local de cada cooperativa'. Precisava provar que pioneirismo era seguro.
```

**Checklist**:
- [ ] Adicionar parágrafo em `pt.situation`
- [ ] Adicionar equivalente em `en.situation`

---

### ✅ Task 4.3: Review Q5 - FUP adicional

**FUP sugerido**:
- **Q**: "Como você lidou com a resistência cultural de ser o primeiro a implementar ML?"
- **A PT**: "Usei estratégia de 'learn by doing': (1) Shadow mode por 30 dias: ML analisava, mas decisão final era humana - mostrei que ML concordava com analista em 87% dos casos; (2) Envolvemos 3 analistas sênior no treinamento do modelo: eles viraram 'embaixadores' da solução; (3) Criamos 'human-in-the-loop' para casos de risco >620: ML sugeria, analista decidia em 30 min - isso gerou confiança. Após 3 meses, analistas pediam para AUMENTAR threshold de automação (de 36% para 50% dos casos). Aprendi: pioneirismo funciona quando transforma resistentes em co-criadores."
- **A EN**: "I used 'learn by doing' strategy: (1) Shadow mode for 30 days: ML analyzed, but final decision was human - I showed ML agreed with analyst in 87% of cases; (2) We involved 3 senior analysts in model training: they became 'ambassadors' of the solution; (3) We created 'human-in-the-loop' for risk cases >620: ML suggested, analyst decided in 30 min - this generated trust. After 3 months, analysts asked to INCREASE automation threshold (from 36% to 50% of cases). I learned: pioneering works when you transform resisters into co-creators."

**Checklist**:
- [ ] Adicionar FUP sobre resistência cultural
- [ ] Garantir parity PT/EN
- [ ] Atualizar score: 80 → 85

**Status**: [ ] COMPLETO

---

## PHASE 5: Criar Novo Case 6 - SEFAZ Pivot (Q8) (2-3 horas)

### ✅ Task 5.1: Definir estrutura do case

**Pergunta alvo**: "Conte sobre quando você teve que mudar curso/direção de um projeto quando estava 70% completo"

**Contexto sugerido**: SEFAZ/RS - Projeto de modernização de sistema tributário

**Cenário proposto**:
- **Situation**: Projeto de modernização do sistema de emissão de notas fiscais eletrônicas (NF-e) estava 70% completo (7 meses de desenvolvimento). Descoberta crítica: nova legislação federal (Reforma Tributária) mudaria estrutura de impostos, tornando 40% do código desenvolvido obsoleto em 6 meses.
- **Task**: Decidir entre (1) Continuar e refatorar depois (custo: R$1.2M + 8 meses), (2) Pivotar arquitetura agora (custo: R$400k + 3 meses), (3) Abortar projeto.
- **Action**:
  - Análise de impacto em 48h: workshop com arquiteto, jurídico, e 3 desenvolvedores
  - Identificamos 60% do código era reutilizável (camada de API, autenticação, base de dados)
  - Decisão: pivotar para arquitetura modular (separar lógica tributária em microserviço)
  - Nova arquitetura em 72h (aprovada por CTO + jurídico)
  - Plano de migração: 3 sprints de 2 semanas (reaproveitamento + novo microserviço)
  - Rollback: manter sistema legado em paralelo por 3 meses (custo: R$80k em infra)
- **Result**:
  - Entregue em 10 meses (vs. 12 meses planejados inicialmente)
  - Custo total: R$2.8M (vs. R$3.6M se continuasse)
  - Sistema pronto para Reforma Tributária (0 refatoração após lei)
  - 60% do código reutilizado (economia de 4 meses-squad)
  - Arquitetura modular permitiu adicionar novo módulo (ICMS-ST) em 3 semanas
  - NPS de stakeholders internos: 72 (vs. 45 em projetos anteriores)
- **Learning**: Framework de pivot: (1) Assess impact em <72h, (2) Salvage analysis (quanto é reutilizável?), (3) Redesign com constraints claros, (4) Deliver com rollback plan.

**Checklist**:
- [ ] Criar arquivo `src/data/bias_for_action/bias_for_action_case6.js`
- [ ] Seguir template: id, title_pt, title_en, company, period, isTopCase, pt:{s,t,a,r,l}, en:{s,t,a,r,l}, fups
- [ ] Garantir métricas confiáveis (evitar números irrealistas)

---

### ✅ Task 5.2: Escrever STAR(L) completo

**Título proposto**:
- **PT**: "Pivotei Projeto SEFAZ 70% Completo para Nova Legislação e Entreguei com 2 Meses de Atraso Aceitável"
- **EN**: "I Pivoted 70%-Complete SEFAZ Project for New Legislation and Delivered with 2-Month Acceptable Delay"

**Métricas-chave**:
- % reaproveitamento: 60%
- Custo evitado: R$800k (R$2.8M vs. R$3.6M)
- Tempo de decisão: 48h (análise) + 72h (nova arquitetura)
- Atraso: 2 meses (10 vs. 8 meses restantes) = aceitável
- NPS stakeholders: 72

**Checklist**:
- [ ] Escrever `pt.situation` (10-15 linhas)
- [ ] Escrever `pt.task` (8-10 linhas)
- [ ] Escrever `pt.action` (20-25 linhas)
  - [ ] Detalhar análise de impacto 48h
  - [ ] Detalhar salvage analysis (60% reutilizável)
  - [ ] Detalhar nova arquitetura modular
  - [ ] Detalhar plano de migração + rollback
- [ ] Escrever `pt.result` (12-15 linhas, ≥6 métricas)
- [ ] Escrever `pt.learning` (8-10 linhas, framework transferível)
- [ ] Espelhar tudo em EN (parity 100%)

---

### ✅ Task 5.3: Criar 10 FUPs

**FUPs sugeridos** (foco em pivot, decisão sob pressão, stakeholder management):

1. Como você identificou que era necessário pivotar vs. continuar?
2. Como você analisou o que era reutilizável vs. descartável em 48h?
3. Houve pressão para continuar (sunk cost fallacy)? Como resistiu?
4. Como você comunicou a decisão de pivotar para a equipe (que já tinha 7 meses investidos)?
5. Qual foi a reação do sponsor/stakeholders ao saber que 40% do trabalho seria descartado?
6. Como você garantiu que a nova arquitetura não teria o mesmo problema (obsolescência)?
7. Você teve que renegociar prazo/budget? Como justificou?
8. Algum membro da equipe desanimou ou pediu demissão após o pivot? Como reteve talentos?
9. Se pudesse voltar, teria feito algo diferente na análise inicial para prever a mudança legislativa?
10. Você aplicou esse framework de pivot em outros projetos? Com qual resultado?

**Checklist**:
- [ ] Escrever 10 FUPs (q, a, q_en, a_en)
- [ ] Garantir que respostas têm 8-12 linhas cada
- [ ] Incluir métricas/exemplos concretos em 70% das respostas
- [ ] Verificar parity PT/EN

---

### ✅ Task 5.4: Integrar case 6 no sistema

- [ ] Adicionar import em `src/data/bias_for_action/index.js`
  ```javascript
  import case6 from './bias_for_action_case6.js';
  ```
- [ ] Adicionar ao array:
  ```javascript
  const biasForActionCases = [case1, case2, case3, case4, case5, case6];
  ```
- [ ] Atualizar `bias_for_action_config.js` se necessário

---

### ✅ Task 5.5: Mapear Q8 para case 6

- [ ] Atualizar `questionsToCasesMapping.js` (linha ~361)
  - Alterar `"8": { "case_id": "calculated-risk-time-critical", "score": 80 }`
  - Para `"8": { "case_id": "sefaz-project-pivot-70-percent", "score": 90 }`

- [ ] Atualizar CSV e JSON
  - `mapeamento-perguntas-cases-COMPLETO.csv`
  - `mapeamento-perguntas-cases-COMPLETO.json`

**Reasoning**:
```
Case do LP correto (bias_for_action); NOVO CASE sobre pivot de projeto 70% completo; Conceito PERFEITAMENTE alinhado com pergunta; 3 keywords presentes; Métricas de reaproveitamento e custo evitado; Framework transferível (+10)
```

**Status**: [ ] COMPLETO

---

## PHASE 6: Validação Final (30 min)

### ✅ Task 6.1: Testes automatizados

- [ ] Executar `npm test`
  - [ ] Todos os 31 testes passando
  - [ ] Sem erros de schema/estrutura

- [ ] Executar `npm run build`
  - [ ] Build completo sem erros
  - [ ] Verificar bundle size (não aumentar >10%)

---

### ✅ Task 6.2: Validação manual na UI

- [ ] Abrir aplicação local (`npm run dev`)
- [ ] Navegar para **Bias for Action**
- [ ] Verificar 10 perguntas típicas:
  - [ ] Q0: `calculated-risk-time-critical` (score 75)
  - [ ] Q1: `sicredi-fraud-emergency-4h-decision` (score 80) ← MUDOU
  - [ ] Q2: `sefaz-emergency-tax-portal` (score 90) ← MUDOU
  - [ ] Q3: `bradesco-next-rapid-launch` (score 90) ← MELHOROU
  - [ ] Q4: `sefaz-emergency-tax-portal` (score 90)
  - [ ] Q5: `sicredi-ml-credit-analysis` (score 85) ← MELHOROU
  - [ ] Q6: `bradesco-next-rapid-launch` (score 90) ← MELHOROU
  - [ ] Q7: `bradesco-next-rapid-launch` (score 90) ← MELHOROU
  - [ ] Q8: `sefaz-project-pivot-70-percent` (score 90) ← NOVO CASE
  - [ ] Q9: `sicredi-fraud-emergency-4h-decision` (score 90)

- [ ] Clicar em cada pergunta e verificar:
  - [ ] Link leva ao case correto
  - [ ] Título do case exibido corretamente
  - [ ] Score badge mostra cor adequada (verde se ≥80)

---

### ✅ Task 6.3: Verificar STAR quality

Para cada case modificado, abrir e verificar:

**Case 1: bradesco-next-rapid-launch**
- [ ] Título menciona "Two-Way Door" (Q6)
- [ ] Situation menciona SeDR mechanism + classificação
- [ ] Action detalha processo two-way door
- [ ] Result inclui métricas de velocidade de decisão
- [ ] Learning menciona framework transferível
- [ ] FUPs incluem 3 perguntas sobre two-way door

**Case 2: sicredi-ml-credit-analysis**
- [ ] Situation menciona resistência cultural + pioneirismo
- [ ] FUPs incluem pergunta sobre resistência

**Case 6: sefaz-project-pivot-70-percent** ⭐ NOVO
- [ ] Todos os campos preenchidos (PT + EN)
- [ ] Métricas confiáveis (não irrealistas)
- [ ] 10 FUPs completos
- [ ] Parity PT/EN verificada

---

### ✅ Task 6.4: Gerar relatório de cobertura

- [ ] Executar script de cobertura (se disponível)
- [ ] Verificar métricas finais:
  - [ ] Bias for Action: 100% (10/10) ✅
  - [ ] Score médio: ≥85 ✅
  - [ ] Scores críticos (<60): 0 ✅

**Status**: [ ] COMPLETO

---

## PHASE 7 (OPCIONAL): Criar Case 7 - HDG (backup)

### ⚠️ Decisão: Criar ou não?

**Análise**:
- Após PHASE 5, todas as 10 perguntas estarão cobertas com scores ≥75
- User pediu 2 novos cases (SEFAZ + HDG)
- HDG case seria backup de alta qualidade

**Recomendação**: 
- ✅ **Criar case 7** se tempo disponível >2 horas
- ⚠️ **Skip** se prioridade é passar para Ownership (Priority 2)

**Se CRIAR, cenário sugerido**:
- **Company**: HDG (Health Data Group)
- **Scenario**: Concorrente lançou feature de telemedicina integrada, decisão em 24h: copiar, inovar, ou ignorar
- **Action**: Reuniu 3 squads, analisou churn em 12h, decidiu por MVP diferenciado em 2 semanas
- **Result**: Churn contido, NPS estável, diferenciação competitiva

**Checklist** (se decidir criar):
- [ ] Criar `bias_for_action_case7.js`
- [ ] Escrever STAR(L) completo
- [ ] Criar 10 FUPs
- [ ] Integrar em index.js
- [ ] (Opcional) Usar em Q2, liberando sefaz-portal para outro LP

**Status**: [ ] DECIDIR (criar ou skip)

---

## 📊 Progresso Geral

### Métricas de Sucesso

| Métrica | ANTES | META | ATUAL | Status |
|---------|-------|------|-------|--------|
| **Cobertura** | 40% (4/10) | 100% (10/10) | [ ]% | [ ] |
| **Score Médio** | 50 | ≥85 | [ ] | [ ] |
| **Scores ≥80** | 3/10 | 9/10 | [ ]/10 | [ ] |
| **Scores <60** | 3 | 0 | [ ] | [ ] |
| **FULL Reviews** | 0 | 4 | [ ]/4 | [ ] |
| **Novos Cases** | 0 | 1-2 | [ ]/2 | [ ] |

### Time Tracking

| Phase | Tempo Estimado | Tempo Real | Status |
|-------|----------------|------------|--------|
| PHASE 1: Remapeamentos | 30 min | [ ] | [ ] |
| PHASE 2: Q6 FULL Review | 60 min | [ ] | [ ] |
| PHASE 3: Q3+Q7 FULL Review | 45 min | [ ] | [ ] |
| PHASE 4: Q5 FULL Review | 30 min | [ ] | [ ] |
| PHASE 5: Novo Case 6 | 2-3 horas | [ ] | [ ] |
| PHASE 6: Validação | 30 min | [ ] | [ ] |
| PHASE 7: Case 7 (opcional) | 2-3 horas | [ ] | [ ] |
| **TOTAL** | **5-6 horas** | [ ] | [ ] |

---

## ✅ Completion Criteria

**Bias for Action estará COMPLETO quando**:
- [x] Todos os checkboxes acima marcados
- [x] 10/10 perguntas mapeadas com scores ≥75
- [x] 4 FULL reviews concluídos (título, STAR, FUPs)
- [x] 1 novo case criado (Case 6 - SEFAZ Pivot)
- [x] Build + testes passando
- [x] UI funcionando corretamente

**Próximo passo**: Ownership (Priority 2)

---

**Última atualização**: 2025-01-XX  
**Status**: 🔄 IN PROGRESS ([ ]% completo)
