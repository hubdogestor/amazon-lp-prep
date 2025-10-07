# PHASE 2: Ownership + Invent & Simplify - Mapping Proposal

**Date**: 2025-01-XX  
**Status**: Ready for Implementation  
**Scope**: 12 cases (6 Ownership + 6 Invent & Simplify)  
**Target**: ~50 new mappings (85-98 score range)

---

## Executive Summary

This proposal covers **Phase 2** of the systematic remapping effort: Ownership (6 cases) + Invent & Simplify (6 cases).

**Current State**:
- **Ownership**: 4 cases 0Q, 2 cases 1Q (0 well-mapped)
- **Invent & Simplify**: 5 cases 0Q, 1 case complete (unimed-ai-authorization already 5Q in Phase 1)

**Target State**:
- **Ownership**: All 6 cases → ≥3Q (4 cases → 5Q, 2 cases → 3Q)
- **Invent & Simplify**: All 5 remaining cases → ≥5Q

**Expected Mappings**: ~50 total (24 Ownership + 25 Invent & Simplify)

---

## OWNERSHIP CASES

### Typical Questions for Ownership (12 questions):
- Q0: "Conte uma situação onde você assumiu responsabilidade além do seu escopo"
- Q1: "Me dê um exemplo de quando você foi além da sua função"
- Q2: "Conte sobre uma decisão de longo prazo que você tomou"
- Q3: "Como você age quando algo não é sua responsabilidade?"
- Q4: "Me fale sobre um trade-off difícil pensando no longo prazo"
- Q5: "Descreva quando tomou decisão importante sem consultar gestor"
- Q6: "Me fale sobre quando identificou ineficiência e tomou ownership"
- Q7: "Como lida com situações onde precisa assumir responsabilidade por erros?"
- Q8: "Descreva projeto que liderou início ao fim - como garantiu sucesso?"
- Q9: "Descreva quando criou mecanismo para prevenir problemas recorrentes"

---

## CASE 1: sefaz-pmo-creation (ownership_case2.js)
**Current**: 0Q → **Target**: 5Q

### STAR Summary:
Leonardo assumiu ownership completo da estruturação do PMO PROFISCO II do zero quando SEFAZ/RS recebeu ultimato do BID (45 dias ou congelamento de US$12M). Ele foi além do escopo formal (apenas "suporte metodológico") ao assumir responsabilidade pessoal de criar governança de R$180M. Ele estabeleceu 3 loops (war room, ritos secretários, steering BID), automatizou 18 dashboards, treinou 8 sucessores, e garantiu sustentabilidade pós-saída. Resultados: BID liberou US$12M em 90d, desvio prazo caiu 23%→7,4%, NPS 52→76, e PMO virou referência nacional.

### Proposed Mappings:

**Q0 (98)** - "Conte uma situação onde você assumiu responsabilidade além do seu escopo"
- ✅ Perfect match: "Estruturar PMO NÃO ERA MINHA FUNÇÃO—meu contrato dizia apenas suporte metodológico. Mas eu enxergava a CAGE tocando 28 projetos críticos sem governança... Eu decidi ir além do meu escopo e assumir responsabilidade de ponta a ponta."
- Went beyond formal scope to save R$180M program
- "Ignorando meu escopo formal, eu me declarei owner único da governança"

**Q1 (95)** - "Me dê um exemplo de quando você foi além da sua função"
- ✅ Same evidence: Formal contract = methodology support, took on: governance design, BID negotiations, capacity building, PMO operations
- "Eu mergulhei em 11 bases (S2GPR, FPE, SEI, e-Social) no primeiro fim de semana"
- Built 31 templates, automated 18 dashboards, trained 8 civil servants

**Q6 (92)** - "Me fale sobre quando identificou ineficiência e tomou ownership"
- ✅ "Eu enxergava a CAGE tocando 28 projetos críticos sem governança, três iniciativas duplicadas queimando R$ 4,2M e 18 auditorias em atraso."
- Used data to kill R$1.1M consultancy proposal showing 62% delays came from missing mechanisms
- "Eu eliminei 100% das duplicidades, reduzi o desvio médio de prazo de 23% para 7,4%"

**Q8 (90)** - "Descreva projeto que liderou início ao fim - como garantiu sucesso?"
- ✅ Structured PMO from zero with clear mechanisms:
  - 3 governance loops (daily war room, biweekly secretaries, monthly BID steering)
  - 31 templates + 18 automated dashboards
  - Customer obsession mechanism (interviewed 37 auditors + 52 fiscal users)
  - Trained 8 successors who became PMI certified
- "Eu tracei metas de longo prazo: zerar suspensão de desembolso, eliminar duplicidade, reduzir desvio de prazo... e estruturar mecanismos que sobrevivessem à minha saída."

**Q9 (88)** - "Descreva quando criou mecanismo para prevenir problemas recorrentes"
- ✅ Built permanent mechanisms:
  - 3 governance loops operating without him (war rooms, dashboards)
  - 31 templates used by entire organization
  - 18 automated dashboards (manual 6h→40min)
  - Trained 8 civil servants who took over PMO (cited by IDB as national reference)
- "Pensar no longo prazo significa criar rituais autoportantes, capacitar sucessores e documentar tudo."

---

## CASE 2: hsbc-payment-reconciliation (ownership_case4.js)
**Current**: 0Q → **Target**: 5Q

### STAR Summary:
Leonardo tomou ownership completo de reconciliação crítica de US$47M quando, como PMO (não dono da operação), detectou 2.847 pagamentos não reconciliados 21 dias antes de cutover HSBC→Bradesco. Ele assumiu risco pessoal para autorizar rollback, montou tiger team em 36h, criou runbooks com SLA (12h/24h/48h), instalou war room com Grafana, voou a Brasília para conseguir carta BACEN em 24h, e abriu linha 24/7 para clientes priority. Zerou backlog em 38 dias, evitou R$12M em multas, e mecanismo continuou reduzindo incidentes 73% nos 6 meses seguintes.

### Proposed Mappings:

**Q0 (98)** - "Conte uma situação onde você assumiu responsabilidade além do seu escopo"
- ✅ Perfect match: "Mesmo sendo PMO e não dono da operação, eu avisei o CEO que assumiria a reconciliação ponta a ponta."
- Formal role = PMO, not operations owner
- Took personal accountability for US$47M reconciliation during critical cutover

**Q1 (95)** - "Me dê um exemplo de quando você foi além da sua função"
- ✅ Same evidence: Built tiger team across 5 departments in 36h
- Wrote 5 SQL scripts, created RPA with 80% automation
- Flew to Brasília personally to get BACEN no-objection letter in 24h
- "Eu mergulhei em 300 transações amostrais, escrevi cinco scripts SQL"

**Q6 (92)** - "Me fale sobre quando identificou ineficiência e tomou ownership"
- ✅ "Eu tinha criado uma rotina de auditoria paralela para o programa Banquo e, a 21 dias do cutover, ela apontou 2.847 pagamentos internacionais não reconciliados somando US$ 47M."
- Identified systemic risk, took ownership even without formal authority
- Created parallel audit mechanism showing gaps nobody else saw

**Q8 (90)** - "Descreva projeto que liderou início ao fim - como garantiu sucesso?"
- ✅ Led complete reconciliation operation:
  - Tiger team with Operations, Compliance, IT, Correspondents, Finance
  - War cadence (20-min daily, 6pm review, 48h executive report)
  - 320 heuristic rules in Python (70% written by him)
  - Dashboard alerting any anomaly >US$250K to his phone
- "Em 38 dias eu zerei o backlog: 2.276 casos (80%) resolvidos automaticamente"

**Q9 (88)** - "Descreva quando criou mecanismo para prevenir problemas recorrentes"
- ✅ Built permanent reconciliation mechanism:
  - Hourly automated script reduced incidents 73% (42→11 cases/month)
  - Average resolution time 4.3d→1.2d
  - Corporate client NPS 67→81
  - "O mecanismo foi replicado em três outras integrações do Bradesco com redução média de 68% no tempo de reconciliação."
- Framework has 3 principles: (1) 80%+ automation, (2) Alert threshold <US$250k, (3) 127 transferable procedures

---

## CASE 3: payment-incidents-prevention-mechanism (ownership_case5.js)
**Current**: 0Q → **Target**: 5Q

### STAR Summary:
Leonardo transformou incidentes recorrentes de pagamentos (timeouts gateway, divergências status, falhas liquidação) em mecanismo de confiabilidade quando detectou padrão perigoso: mesmos incidentes reapareciam a cada 6 semanas na SEFAZ/RS, congelando R$18M diários e gerando 4.500 chamados/24h. Ele mapeou 62 incidentes (custo R$7,2M), criou papel "Incident Captain", normalizou postmortems blameless, publicou catálogo SLO (PIX 5min, débito 15min), e alinhou bancos com runbook conjunto. Recorrência caiu 12→5 (-58%), MTTR 3h40→2h25 (-34%), NPS 41→64, mecanismo virou política oficial SEFAZ.

### Proposed Mappings:

**Q0 (95)** - "Conte uma situação onde você assumiu responsabilidade além do seu escopo"
- ✅ "Eu atuava como advisor da SEFAZ/RS quando detectei um padrão perigoso... Comunicação, TI, arrecadação e bancos parceiros trabalhavam em silos e ninguém assumia ownership do ciclo completo."
- Assumed responsibility for incident lifecycle across multiple departments
- "Eu defendi que, sem um mecanismo de prevenção, continuaríamos apagando incêndio."

**Q6 (98)** - "Me fale sobre quando identificou ineficiência e tomou ownership"
- ✅ Perfect match: "Eu detectei um padrão perigoso: os mesmos incidentes de pagamentos (timeouts de gateway, divergência de status, falhas de liquidação) reapareciam a cada seis semanas."
- Mapped 62 incidents (12 months), calculated R$7.2M cost
- "Eu mapeei 62 incidentes dos últimos 12 meses, calculei custo total de R$ 7,2M e usei o número em reunião com o secretário"

**Q9 (98)** - "Descreva quando criou mecanismo para prevenir problemas recorrentes"
- ✅ Perfect match: Case title literally is "Transformei Incidentes Reincidentes em Mecanismo de Confiabilidade"
- Created Incident Captain role (single owner until prevention active)
- Normalized blameless postmortems with 5-block template
- Technical guardrails: 3-layer idempotent retries, safe rollback, canary, duplicate checks
- Published SLOs per service (PIX 5min, debit 15min, transfers 30min)
- "Eu criei o papel de Incident Captain: toda falha classe A passou a ter um dono único até a prevenção ficar ativa."

**Q2 (88)** - "Conte sobre uma decisão de longo prazo que você tomou"
- ✅ Long-term thinking: Built mechanisms to prevent recurrence, not just fix incidents
- "Ownership em incidentes significa transformar dor em mecanismo replicável. Eu nunca encerro uma crise sem: 1) um owner nomeado até a prevenção estar ativa, 2) critérios técnicos que eliminam remendos e 3) métricas visíveis"
- Mechanism became official SEFAZ policy, replicated by Procergs across critical systems

**Q8 (85)** - "Descreva projeto que liderou início ao fim - como garantiu sucesso?"
- ✅ Led incident prevention transformation:
  - Mapped 62 incidents, built R$7.2M business case
  - Created Incident Captain role with clear RACI
  - Normalized postmortems (timeline, root cause, revenue impact, CAPA, mechanism)
  - Published SLO catalog + Datadog dashboard (MTTR, CAPA backlog, recurrence, calls)
  - Aligned Banrisul + Banco do Brasil with joint runbook + quarterly failover tests
- "Em quatro meses eu reduzi incidentes recorrentes de 12 para 5 (-58%) e baixei o MTTR médio de 3h40 para 2h25 (-34%)"

---

## CASE 4: long-term-tradeoff (ownership_case6.js)
**Current**: 0Q → **Target**: 5Q

### STAR Summary:
Leonardo assumiu trade-off difícil no lançamento Bradesco Next quando squad queria 14 features para Black Friday mas ele via latência +45%, 27 incidentes P1, chargebacks +19%/mês e core batendo 92% CPU em pico. Ele assumiu ownership total do core (fora do escopo formal de "integrações parceiros"), cortou fase 1 para 5 features essenciais, modelou R$24M em perdas potenciais, rodou testes carga 12K TPS, implantou circuit breaker + 96 alertas, enfrentou CPO no comitê executivo mostrando heatmap de 9 métricas. Estabilizou core em 28d (disponibilidade 99,2%→99,97%, latência p95 -53%), Black Friday processou 3,8M transações/dia sem degradação, NPS 61→79. Long-term: plataforma manteve 99,96% disponibilidade 18 meses, framework de resiliência adotado por 12 squads, evitou R$67M em perdas (ROI 28:1).

### Proposed Mappings:

**Q4 (98)** - "Me fale sobre um trade-off difícil pensando no longo prazo"
- ✅ Perfect match: Case title is "Assumi Trade-off: Menos Escopo Agora por Maior Robustez"
- "Meu escopo formal cobria integrações com parceiros, mas eu assumi ownership total do core... Eu avisei o CEO que cortaria a primeira onda para cinco features essenciais"
- Chose long-term robustness over short-term features
- "Ownership inclui dizer não quando os dados mostram que o cliente pagaria a conta."

**Q2 (95)** - "Conte sobre uma decisão de longo prazo que você tomou"
- ✅ Long-term thinking: "Eu estabeleci metas: manter disponibilidade acima de 99,9%, reduzir chargebacks em pelo menos 15% e liberar a release em duas ondas somente quando os controles críticos passassem em testes de carga."
- Framework delivered dividends over 18 months: 99.96% availability, MTTR 47min→8min, scaled 8K→24K TPS
- "O trade-off de cortar escopo gerou dividendos de longo prazo... CFO calculou que evitamos R$ 67M em perdas potenciais ao longo de 2 anos."

**Q0 (92)** - "Conte uma situação onde você assumiu responsabilidade além do seu escopo"
- ✅ "Meu escopo formal cobria integrações com parceiros, mas eu assumi ownership total do core."
- Formal role = partner integrations, took on: core stability, load testing, risk mitigation, CEO/CPO negotiations
- Formed tiger team with SRE, risk, product in 48h

**Q6 (90)** - "Me fale sobre quando identificou ineficiência e tomou ownership"
- ✅ "Eu enxergava latência média em 680 ms (+45%), backlog com 27 incidentes P1 e chargebacks crescendo 19% ao mês... Eu recebi alerta do NOC de que sob pico de 8 mil transações por segundo o core legado bateria 92% de CPU"
- Identified systemic risk that nobody else flagged
- Modeled R$24M potential loss (penalties + chargebacks + churn)

**Q8 (88)** - "Descreva projeto que liderou início ao fim - como garantiu sucesso?"
- ✅ Led complete resilience transformation:
  - Financial scenarios (R$24M risk model)
  - Load tests with Locust up to 12K TPS
  - 2-phase roadmap (5 critical features, then hardening)
  - Mechanisms: circuit breaker, 96 Prometheus alerts, feature flags, game days 2x/week
  - War room for Black Friday, 3 real-time dashboards
- "Eu estabilizei o core em 28 dias mantendo apenas cinco features: disponibilidade subiu de 99,2% para 99,97%"

---

## CASE 5: sefaz-emergency-rollback-no-approval (ownership_case7.js)
**Current**: 1Q → **Target**: 3Q

### STAR Summary:
Leonardo autorizou rollback crítico de sistema NFCE (23.400 empresas sem emitir nota fiscal) às 18h05 sexta sem conseguir contatar diretor de TI por 15 minutos. Como Coordenador de Infraestrutura, ele NÃO tinha autoridade formal para rollback sem aprovação, mas assumiu risco pessoal implementando 4 controles: (1) call emergencial com 5 testemunhas (NOC, DBA, segurança, arquiteto, auditor), (2) email formal documentando + assumindo responsabilidade total, (3) gravação + ata com assinaturas digitais, (4) 3 gates de reversão (30min, perda dados, 2h estabilização). Rollback 100% bem-sucedido em 1h10min, evitou R$8.2M em vendas perdidas. Diretor transformou decisão em protocolo oficial "Procedimento de Decisão Emergencial", usado 4x nos anos seguintes. Promovido a Gerente 3 meses depois.

### Proposed Mappings:

**Q5 (98)** - "Descreva quando tomou decisão importante sem consultar gestor"
- ✅ Perfect match: "Rollback de sistema fiscal exigia aprovação formal do Diretor de TI (meu gestor), que já havia saído e estava em evento corporativo sem celular disponível. Tentei contato por 15 minutos... Eu tinha 2 opções: (1) esperar até conseguir falar com ele... (2) autorizar o rollback imediatamente como Coordenador de Infraestrutura assumindo responsabilidade pessoal"
- "Às 18h20 eu tomei a decisão: autorizei o rollback imediatamente."
- Made R$4.8M risk decision without manager approval

**Q7 (95)** - "Como lida com situações onde precisa assumir responsabilidade por erros?"
- ✅ Although not his error, shows accountability mindset:
- "Eu era Coordenador de Infraestrutura... responsável pela disponibilidade dos sistemas fiscais. Minha responsabilidade pessoal era garantir que sistemas críticos operassem"
- Documented everything, called 5 witnesses, recorded call with signatures
- "Assumo total responsabilidade" in formal email
- "Ownership significa tomar decisões difíceis mesmo sem autoridade formal, mas com controles e transparência total."

**Q0 (90)** - "Conte uma situação onde você assumiu responsabilidade além do seu escopo"
- ✅ "Eu era Coordenador de Infraestrutura e PMO responsável pela disponibilidade dos sistemas fiscais. Minha responsabilidade pessoal era garantir que sistemas críticos operassem, mas eu NÃO tinha autoridade formal para autorizar rollbacks sem aprovação do diretor. No entanto eu tinha OWNERSHIP"
- Assumed personal risk to protect business (23k companies vs personal penalty risk)
- "Ownership verdadeiro se manifesta quando VOCÊ precisa decidir sem autoridade formal mas com responsabilidade clara."

---

## CASE 6: bradesco-next-delay (ownership_case8.js)
**Current**: 1Q → **Target**: 3Q

### STAR Summary:
Leonardo assumiu erro publicamente quando subestimou complexidade integração Serasa no lançamento Bradesco Next, reportando ao board que estava 85% completo quando realidade era 60%, 3 semanas antes de code freeze. CEO havia anunciado abril publicamente. Leonardo assumiu imediatamente "o erro foi meu" em email ao CEO/board, rodou 5-why postmortem em 48h (root cause: viés otimismo + falta framework regulatório), apresentou plano correção (8 FTEs realocados, 2 consultores Serasa R$180k/mês, testes paralelos), comprimiu cronograma 11→8 semanas. Entregou exatamente na data revisada (19 maio) com 0 incidentes críticos. Criou framework "Estimating Regulatory Integrations" (40% buffer, POC obrigatório, escalation policy <70% em 50% tempo), adotado como padrão Bradesco, erro médio caiu ±42%→±11% em 5 projetos seguintes. Promovido a Principal 4 meses depois.

### Proposed Mappings:

**Q7 (98)** - "Como lida com situações onde precisa assumir responsabilidade por erros?"
- ✅ Perfect match: Entire case about owning estimation error publicly
- "Eu assumi imediatamente que subestimei a complexidade da API Serasa... O erro foi meu: confiei em estimativa otimista sem buffer para integração regulatória crítica."
- Email to CEO/CTO/board next day: "Eu subestimei... O erro foi meu."
- "Admitir 'o erro foi meu' perante CEO e board, sem transferir culpa ou justificar, é o momento onde você constrói ou destrói confiança."

**Q0 (85)** - "Conte uma situação onde você assumiu responsabilidade além do seu escopo"
- ✅ "Minha tarefa era assumir publicamente o erro perante o board, explicar o root cause sem transferir culpa, apresentar plano de correção realista"
- Protected team: "Eu deixei claro em email ao CEO e board que 'o erro foi meu na estimativa, não do time na execução'."
- Compressed timeline by reallocating resources, hiring specialists, maintaining 24/7 availability

**Q2 (85)** - "Conte sobre uma decisão de longo prazo que você tomou"
- ✅ Created permanent framework from individual error:
- "Framework de estimativa que criei foi adotado como padrão Bradesco para integrações regulatórias e reduziu erro médio de estimativa de ±42% para ±11% nos 5 projetos seguintes"
- 3 principles: (1) Escalate risk early = ownership, (2) Blameless postmortem generates lessons, (3) Permanent mechanism proves you learned
- "Eu transformei erro individual em capacidade organizacional"

---

## INVENT & SIMPLIFY CASES

### Typical Questions for Invent & Simplify (12 questions):
- Q0: "Conte sobre uma inovação que você implementou que simplificou um processo complexo"
- Q1: "Me fale sobre uma solução criativa que você desenvolveu"
- Q2: "Como você simplifica processos complexos?"
- Q3: "Descreva quando desafiou o status quo"
- Q4: "Me fale sobre quando criou processo mais simples com grande impacto"
- Q5: "Conte quando teve um plano mas encontrou obstáculos - como pivotou?"
- Q6: "Descreva quando equilibrou inovação com risco"
- Q7: "Como decidiu entre construir solução própria vs adaptar existente?"
- Q8: "Me dê exemplo de quando usou tecnologia de forma não-convencional"
- Q9: "Conte sobre processo de payment operations que automatizou/otimizou"

---

## CASE 7: huawei-six-sigma-optimization (invent_simplify_case1.js)
**Current**: 0Q → **Target**: 5Q

### STAR Summary:
Leonardo inventou mecanismo 5G com playbook Six Sigma quando assumiu rollout para 5 operadoras com SLA 214 dias, NPS 51→17, 38 mil assinantes reclamando de atrasos. Ele criou indicador "tempo de dor do cliente" (horas sem sinal 5G), descartou pipeline padrão Huawei (19 transferências responsabilidade) e inventou playbook "One Flow" (8 marcos + 42 itens assinados digitalmente). Construiu Command Center 5G integrando PMO + licenciamento municipal + drive-test em dashboard Python recalculando lead time cada 30 minutos (eliminou 14 reuniões semanais). Em 6 meses entregou 92 sites com SLA 58 dias (-73%), tempo dor -81%, NPS 56, receita R$47M antecipada, Command Center replicado em 8 países.

### Proposed Mappings:

**Q0 (95)** - "Conte sobre uma inovação que implementou que simplificou processo complexo"
- ✅ "Eu reescrevi o processo inteiro em quatro ciclos DMAIC adaptados... descartei o pipeline padrão da Huawei porque escondia 19 transferências de responsabilidade; em vez disso, criei o playbook 'One Flow' com 8 marcos obrigatórios e checklist de 42 itens"
- Simplified 214-day process to 58 days (-73%)
- "Inventar significa redesenhar mecanismos que mantém a simplicidade viva"

**Q1 (92)** - "Me fale sobre uma solução criativa que você desenvolveu"
- ✅ Created "customer pain time" indicator measuring hours without 5G coverage per cluster
- Built Command Center integrating PMO + municipal permits + drive-test data
- "Eu criei o Command Center 5G integrando PMO, licenciamento municipal e dados de drive-test em um dashboard que eu codifiquei em Python para recalcular lead time a cada 30 minutos; isso eliminou 14 reuniões semanais."

**Q4 (90)** - "Me fale sobre quando criou processo mais simples com grande impacto"
- ✅ One Flow playbook simplified complex rollout:
- 8 mandatory gates (vs 19 responsibility handoffs in standard pipeline)
- 42-item checklist signed digitally by him and client
- Impact: SLA 214d→58d, NPS 17→56, R$47M revenue accelerated

**Q8 (88)** - "Me dê exemplo de quando usou tecnologia de forma não-convencional"
- ✅ "Eu codifiquei em Python para recalcular lead time a cada 30 minutos"
- Built dashboard integrating 3 disparate systems (PMO, municipal permits, drive tests)
- Eliminated 14 weekly meetings through real-time data
- "Conectei PMO, licenciamento municipal e drive-test" - unconventional integration

**Q9 (85)** - "Conte sobre processo que automatizou/otimizou"
- ✅ Optimized 5G rollout operations:
- Command Center with 87% daily adoption by external teams
- Automated lead-time calculation every 30 minutes
- Reduced customer pain time by 81%
- Replicated across 8 countries

---

## CASE 8: bradesco-next-compliance-simplification (invent_simplify_case2.js)
**Current**: 0Q → **Target**: 5Q

### STAR Summary:
Leonardo inventou trilha KYC one-click quando Next relaunch enfrentava 41% contas presas em compliance 32 horas, NPS onboarding 56→22, 18% abandonavam antes primeira transação. Ele analisou 47 regras BACEN, agrupou em 5 macros (identidade, renda, suitability, PEP, endereço), provou 63% validações redundantes via APIs. Inventou "KYC One-Click" com árvores decisão Python, removeu 11 telas "tortura" após usability labs (40h observação), negociou compliance para integrar APIs externas (Serasa, Open Banking, gov.br) assumindo risco pessoal assinando termo responsabilidade. Tempo onboarding 32h→5h58 (-81%), abandono 18%→4%, NPS 22→68 (+46 pontos), fraude mantida 0,04%. Mecanismo replicado para sellers Elo/Cielo (450k sellers, tempo 48h→8h).

### Proposed Mappings:

**Q0 (98)** - "Conte sobre inovação que implementou que simplificou processo complexo"
- ✅ Perfect match: "Inventei trilha KYC one-click que reduziu onboarding Next de 32 para 6 horas"
- Simplified 47 BACEN rules into 5 macros
- "Eu inventei o 'KYC One-Click': mapeei as 47 regras do Bacen, agrupei em 5 macros... e criei árvores de decisão automatizadas que eu mesmo codifiquei em Python."
- Removed 11 screens customers called "torture"

**Q2 (95)** - "Como você simplifica processos complexos?"
- ✅ Clear methodology:
- Mapped all 47 BACEN rules, identified redundancies (63%)
- Grouped into 5 macros (identity, income, suitability, PEP, address)
- Ran usability labs (3 sessions × 8 customers, 40h observation)
- Automated validation via APIs (Serasa, Open Banking, gov.br)
- "Eu analisei as 47 regras Bacen em detalhe... Percebi que 63% dessas validações eram redundantes ou podiam ser automatizadas via APIs"

**Q1 (92)** - "Me fale sobre solução criativa que desenvolveu"
- ✅ Created "negative proof mechanism": if document fails, 90-minute turnaround with personalized guidance
- "Eu criei um mecanismo de prova negativa: caso o documento não passasse na primeira vez, eu prometia retorno em 90 minutos com orientação personalizada que eu mesmo revisava (primeiros 500 casos)"
- Adjusted risk scoring weights for variable income and business accounts, cutting reanalysis 74%

**Q6 (90)** - "Descreva quando equilibrou inovação com risco"
- ✅ "Eu negociei com compliance para integrar bases externas... assumindo risco pessoal e reputacional ao assinar o termo de responsabilidade por acesso a dados sensíveis — eu me comprometi em reunião com CTO e CCO que, se houvesse vazamento ou incidente Bacen, eu responderia pessoalmente"
- Piloted with 50k accounts under his supervision
- Maintained fraud at 0.04% (below 0.12% market benchmark)
- Zero BACEN fines/letters for 18 months

**Q7 (88)** - "Como decidiu entre construir solução própria vs adaptar existente?"
- ✅ Built custom KYC One-Click instead of off-the-shelf compliance tool
- "Eu inventei o 'KYC One-Click'... criei árvores de decisão automatizadas que eu mesmo codifiquei em Python"
- Needed specific integration with BACEN rules + usability requirements
- Proved value: NPS 22→68, replicated to 450k sellers

---

## CASE 9: unimed-open-innovation (invent_simplify_case4.js)
**Current**: 0Q → **Target**: 5Q

### STAR Summary:
Leonardo inventou plataforma aberta "Fast-Track Klin" quando ecossistema inovação Unimed travava: 47 projetos demoravam 21 meses p/MVP (R$2.1M cada), 63% cancelados sem tocar paciente, 12 startups abandonaram pilotos (140 dias para assinar NDA). Ele mapeou 1.260h backlog provando 41% tempo em comitês desnecessários, decidiu construir solução própria vs contratar consultoria (precisava customizado para burocracia única Unimed). Eliminou 4 camadas aprovação criando mecanismo onde ele como sponsor assinava contrato marco com startups em 10 dias + sandbox jurídico. Manteve olhar externo constante (28 entrevistas pacientes crônicos, 180k mensagens ouvidoria), implementou plataforma APIs FHIR. Ciclo 21→6.7 meses (-68%), custo -44%, NPS soluções 28→64, R$36M economia, hub atraiu 96 startups.

### Proposed Mappings:

**Q0 (95)** - "Conte sobre inovação que implementou que simplificou processo complexo"
- ✅ "Inventei plataforma aberta com LP SaaS que reduziu ciclo de inovação em 68%"
- Simplified innovation cycle from 21 months to 6.7 months
- "Eu coletei dados de 1.260 horas de backlog e provei que 41% do tempo era gasto em comitês desnecessários."
- Eliminated 4 approval layers

**Q7 (98)** - "Como decidiu entre construir solução própria vs adaptar existente?"
- ✅ Perfect match: Explicit decision to build vs buy
- "Eu decidi construir minha própria solução—o 'Fast-Track Klin'—em vez de contratar consultoria externa, porque precisava de algo customizado que acelerasse sem criar novos silos."
- Unique bureaucracy required custom solution
- "Construir solução própria vs adaptar terceiros depende de quão específico é o problema—no meu caso, a burocracia única da Unimed exigia Fast-Track customizado."

**Q1 (92)** - "Me fale sobre solução criativa que desenvolveu"
- ✅ Created "Fast-Track Klin" mechanism:
- Master agreement signed in 10 days (vs 140-day NDA)
- Legal sandbox for rapid validation
- FHIR APIs + data repository normalized in 4 weeks (integration 140d→10d)
- "Clinical demo day" where startups presented with him + physician sponsor

**Q3 (90)** - "Descreva quando desafiou o status quo"
- ✅ Challenged bureaucratic approval process:
- "47 projetos internos demoravam em média 21 meses para virar MVP, queimando R$ 2,1M cada um, e 63% eram cancelados sem tocar paciente algum."
- Finance board feared regulatory exposure, he negotiated R$15M cap with stop-loss
- "Eu enxerguei que a dor não era falta de ideias, mas excesso de camadas de aprovação que matavam velocidade."

**Q6 (88)** - "Descreva quando equilibrou inovação com risco"
- ✅ "O conselho financeiro temia exposure regulatório, então negociei um limite de R$ 15M com stop-loss por coorte e instalei OKRs vinculando retorno clínico e payback de 18 meses."
- Built sandbox LGPD-by-design with 22 mandatory controls
- Created modular contracts reviewed by dedicated lawyer
- Earned regulator's responsible-innovation seal

---

## CASE 10: sefarz-pix-reconciliation-automation (invent_simplify_case5.js)
**Current**: 0Q → **Target**: 5Q

### STAR Summary:
Leonardo inventou automação conciliação PIX municipal em 45 dias quando 184 municípios perdiam rastreabilidade recebiveis PIX (tempo médio 72h, NPS 54→18, R$38M/mês bloqueados, 37% escolas sem verba no 5º dia útil). Enxergou nenhuma ferramenta mercado resolvia complexidade SIAFEM municipal, precisava solução criativa não-convencional. Passou 3 dias em campo ouvindo secretários educação. Mapeou fluxo em 48h (19 planilhas paralelas, 52% tempo refazendo lançamentos), criou indicador "hora sem lastro" mostrando quantas horas caixa ficava sem confirmação. Usou tecnologia não-convencional: desenvolveu motor conciliação Python com 320 regras heurísticas que ele escreveu (70% regras críticas), conectou ao SIAFEM via API que ele próprio desenhou (integração inédita). Tempo conciliação 72h→4h55 em 82% municípios, NPS 18→61, repasses federais 2 dias úteis evitando multas R$4.6M, reconhecimento 146 prefeitos.

### Proposed Mappings:

**Q8 (98)** - "Me dê exemplo de quando usou tecnologia de forma não-convencional"
- ✅ Perfect match: "Eu usei tecnologia de forma não-convencional: desenvolvi um motor de conciliação em Python com 320 regras heurísticas que eu mesmo escrevi (70% das regras críticas), regroupando transações por município, carteira e hora."
- "Eu conectei o motor ao SIAFEM via API que eu próprio desenhei—uma integração que ninguém tinha feito antes"
- Negotiated Central Bank for webhooks every 15 minutes (unconventional for municipal use)

**Q0 (95)** - "Conte sobre inovação que implementou que simplificou processo complexo"
- ✅ "Automação de conciliação PIX municipal inventada em 45 dias eliminou risco fiscal"
- Simplified reconciliation from 72 hours to 4h55 (-93%)
- "Eu mapeei o fluxo ponta a ponta em 48 horas, identifiquei 19 planilhas paralelas e medi que 52% do tempo era gasto refazendo lançamentos."
- Eliminated 93% of reprocessing

**Q1 (92)** - "Me fale sobre solução criativa que desenvolveu"
- ✅ Created "hours without backing" (hora sem lastro) indicator showing cash time without confirmation
- "Eu criei o indicador criativo 'hora sem lastro' para mostrar ao cliente municipal quantas horas o caixa ficava sem confirmação e publiquei ranking diário."
- Published daily ranking engaging mayors
- Negative-proof mechanism: 90-minute turnaround with personalized guidance

**Q9 (90)** - "Conte sobre processo payment operations que automatizou/otimizou"
- ✅ Automated PIX reconciliation for 184 municipalities:
- Python engine with 320 heuristic rules (70% critical rules written by him)
- SIAFEM API integration (first-ever connection)
- Customer dashboards with minute-by-minute forecasts
- "Em 60 dias eu reduzi o tempo médio de conciliação para 4h55 em 82% dos municípios e eliminei 93% dos reprocessamentos."

**Q5 (88)** - "Conte quando teve um plano mas encontrou obstáculos - como pivotou?"
- ✅ Faced legal resistance against auto-reconciling >R$200k amounts
- "Enfrentei resistência da área jurídica... para provar confiança eu pivotei e rodei piloto em 12 municípios, comparei com conciliação manual e mostrei 99,1% de acurácia."
- Pivoted to 12-city pilot, proved 99.1% accuracy
- Implemented dynamic limits + audit trail tagging every override with his login

---

## CASE 11: payment-simplification-high-impact (invent_simplify_case6.js)
**Current**: 0Q → **Target**: 5Q

### STAR Summary:
Leonardo inventou motor simplificação liquidez "Settlement Graph" quando 30 marketplaces ameaçavam sair da plataforma porque recebiam D+3 vs concorrentes em 6h (NPS 63→29, 4.200 chamados capital giro, 2 varejistas R$480M TPV exigindo plano ou migração 60 dias). Ligou pessoalmente para 20 lojistas descobrindo dor era previsibilidade fluxo caixa não tarifa. Inventou "Settlement Graph" clusterizando transações por risco/volume/comportamento vendas, analisou 18 meses dados identificando 8 arquetipos lojistas provando 64% TPV tinha risco <0,2%. Criou motor "Liquidez Zero" reescrevendo 27 integrações legadas, concentrando conciliação em 2 caminhos, inserindo scoring real-time que ele treinou (42 features). Enfrentou comitê risco recusando D+0 sem colateral, construiu experimento 50 lojistas, garantiu fundo R$25M de float ocioso. Settlement D+0 para 82% volume em 120 dias, chamados -86%, NPS 29→71, faturamento marketplaces +12%, churn -4.5pp, receita incremental R$19M.

### Proposed Mappings:

**Q0 (98)** - "Conte sobre inovação que implementou que simplificou processo complexo"
- ✅ Perfect match: "Inventei motor de simplificação de liquidez que reduziu D+3 para D+0 em marketplaces"
- Simplified settlement from 3 days to same-day for 82% of volume
- "Eu simplifiquei o fluxo operacional criando o motor Liquidez Zero: reescrevi 27 integrações legadas, concentrei conciliação em apenas dois caminhos"

**Q1 (95)** - "Me fale sobre solução criativa que desenvolveu"
- ✅ Created "Settlement Graph" model:
- "Eu inventei o 'Settlement Graph', um modelo que clusteriza transações por risco, volume e comportamento de vendas. Eu analisei 18 meses de dados, identifiquei oito arquetipos de lojistas e provei que 64% do TPV tinha risco histórico inferior a 0,2%."
- Real-time scoring trained by him using 42 features
- Smart guarantee fund using R$25M idle float

**Q9 (92)** - "Conte sobre processo payment operations que automatizou/otimizou"
- ✅ Optimized marketplace payment settlement:
- Reduced reconciliation time from 42 hours to 3 hours
- Automated 82% of volume to D+0 settlement
- "Eu entreguei settlement D+0 para 82% do volume em 120 dias, reduzi chamados de saque em 86%"
- Maintained chargeback at 0.31% (below 0.35% target)

**Q6 (90)** - "Descreva quando equilibrou inovação com risco"
- ✅ Balanced instant liquidity with risk controls:
- "O comitê de risco recusou liberar D+0 sem colateral. Eu construí um experimento com 50 lojistas, garanti fundo de garantia de R$ 25M usando recursos ociosos de float"
- Proved only 0.08pp impact on regulatory capital
- Kept chargeback at 0.31% (below market benchmark 0.12%)

**Q4 (88)** - "Me fale sobre quando criou processo mais simples com grande impacto"
- ✅ Simplified settlement process with high impact:
- Settlement D+3→D+0 for 82% of transactions
- NPS 29→71, churn -4.5pp, marketplace revenue +12%
- R$19M incremental fees, R$7.4M capital cost reduction
- "Eu aprendi que simplificar pagamento é sobre entender a dor de caixa do lojista e assumir o risco com mecanismo transparente."

---

## Implementation Summary

### Total Proposed Mappings: 49

**Ownership (24 mappings)**:
- sefaz-pmo-creation: 5 mappings (Q0:98, Q1:95, Q6:92, Q8:90, Q9:88)
- hsbc-payment-reconciliation: 5 mappings (Q0:98, Q1:95, Q6:92, Q8:90, Q9:88)
- payment-incidents-prevention-mechanism: 5 mappings (Q0:95, Q6:98, Q9:98, Q2:88, Q8:85)
- long-term-tradeoff: 5 mappings (Q4:98, Q2:95, Q0:92, Q6:90, Q8:88)
- sefaz-emergency-rollback-no-approval: 3 mappings (Q5:98, Q7:95, Q0:90)
- bradesco-next-delay: 3 mappings (Q7:98, Q0:85, Q2:85)

**Invent & Simplify (25 mappings)**:
- huawei-six-sigma-optimization: 5 mappings (Q0:95, Q1:92, Q4:90, Q8:88, Q9:85)
- bradesco-next-compliance-simplification: 5 mappings (Q0:98, Q2:95, Q1:92, Q6:90, Q7:88)
- unimed-open-innovation: 5 mappings (Q0:95, Q7:98, Q1:92, Q3:90, Q6:88)
- sefarz-pix-reconciliation-automation: 5 mappings (Q8:98, Q0:95, Q1:92, Q9:90, Q5:88)
- payment-simplification-high-impact: 5 mappings (Q0:98, Q1:95, Q9:92, Q6:90, Q4:88)

### Next Steps:
1. ✅ Review this proposal
2. Implement 49 mappings in `questionsToCasesMapping.js`
3. Run tests (expect 31/31 PASS)
4. Build + deploy
5. Validate with `audit-final.mjs`

**Estimated Time**: 45-60 minutes implementation + testing
