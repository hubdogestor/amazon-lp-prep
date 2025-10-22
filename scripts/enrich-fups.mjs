import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, "..", "src", "data");

const extrasByFile = {
  "customer_obsession/customer_obsession_case1.js": {
    extrasPt: [
      "Quantifiquei que o protocolo derrubou o SLA de autorização de 12 para 1,8 dia e que 340 enfermeiras passaram a acompanhar os pacientes nas 89 cooperativas.",
      "Também citei que identificamos 156 casos com detecção precoce e evitamos R$ 47 milhões em tratamentos tardios.",
      "Reforcei que 94% dos pacientes recebem o kit automaticamente hoje e mais de 47 mil pessoas já foram beneficiadas."
    ],
    extrasEn: [
      "I grounded the answer in the data: the SLA fell from 12 to 1.8 days and 340 nurses now monitor patients across 89 co-ops.",
      "I also highlighted the 156 early-detected cases and the BRL 47M in advanced-treatment costs we prevented.",
      "I reinforced that 94% of patients now receive the care kit automatically and over 47,000 people have benefited."
    ]
  },
  "customer_obsession/customer_obsession_case2.js": {
    extrasPt: [
      "Contextualizei com a adesão de 340 mil clientes 65+, um salto de 840% na base ativa.",
      "Mostrei que as tentativas de golpe caíram 67%, a autonomia digital subiu de 23% para 78% e o ROI ficou em 68:1.",
      "Reforcei que o modelo foi replicado em cinco países, alcançando 1,2 milhão de usuários na região."
    ],
    extrasEn: [
      "I framed it with 340k seniors adopting the app—an 840% lift in active usage.",
      "I showed that scam attempts dropped 67%, digital autonomy rose from 23% to 78%, and ROI hit 68:1.",
      "I reinforced that the model scaled to five countries and now supports 1.2 million users across the region."
    ]
  },
  "customer_obsession/customer_obsession_case3.js": {
    extrasPt: [
      "Trabalhei com a liberação de R$ 47 milhões em crédito emergencial mantendo SLA médio de 1,8 dia.",
      "Detalhei que nenhum dos 2.400 negócios fechou, 8.700 famílias preservaram renda e 73% saíram faturando mais que no pré-pandemia.",
      "Reforcei que o modelo replicou em 109 cooperativas, atendendo 34 mil pequenos negócios e reconhecido pelo prêmio Cooperativismo Solidário."
    ],
    extrasEn: [
      "I referenced the BRL 47M in emergency credit we released with a 1.8-day SLA.",
      "I explained that none of the 2,400 businesses closed, 8,700 families kept income, and 73% left earning above pre-pandemic levels.",
      "I highlighted the replication across 109 co-ops, supporting 34k small businesses and winning the Cooperative Solidarity award."
    ]
  },
  "customer_obsession/customer_obsession_case4.js": {
    extrasPt: [
      "Contextualizei com o piloto de 2.400 famílias, 94% de satisfação e 91% de renovação.",
      "Mostrei que a sinistralidade caiu 16% e a margem líquida ficou em 25%, gerando R$ 23 milhões de receita nova.",
      "Completei citando o reconhecimento da ANS e o playbook que treinou gestores na expansão nacional."
    ],
    extrasEn: [
      "I anchored it in the pilot with 2,400 families, 94% satisfaction, and 91% renewal.",
      "I showed that claims frequency dropped 16% while net margin reached 25% and added BRL 23M in new revenue.",
      "I noted the ANS innovation award and the expansion playbook I used to train regional leaders nationwide."
    ]
  },
  "customer_obsession/customer_obsession_case5.js": {
    extrasPt: [
      "Fundamentei com a queda de churn de 38% para 16,2%, preservando R$ 94 milhões anuais.",
      "Mostrei que o NPS saltou de 31 para 68 e a conversão em sete dias subiu de 62% para 83%.",
      "Reforcei que o módulo de tesouraria atingiu 84% de adoção e gerou R$ 51 milhões, superando a meta em R$ 4 milhões."
    ],
    extrasEn: [
      "I grounded it in the churn drop from 38% to 16.2%, preserving BRL 94M in annualized value.",
      "I showed NPS climbing from 31 to 68 and day-seven conversion rising from 62% to 83%.",
      "I reinforced that the treasury module hit 84% adoption and generated BRL 51M—BRL 4M above target."
    ]
  },
  "customer_obsession/customer_obsession_case6.js": {
    extrasPt: [
      "Compartilhei que a fraude real caiu de R$ 18 milhões para R$ 4,8 milhões ao ano e os falsos positivos de 67% para 12%.",
      "Mostrei o salto de NPS de 12 para 76, o churn pós-bloqueio reduzido de 23% para 3,1% e o desbloqueio médio de 4,2 horas para 38 segundos.",
      "Reforcei que o modelo protege hoje 4,2 milhões de cooperados em 109 cooperativas, evitando R$ 67 milhões anuais."
    ],
    extrasEn: [
      "I shared that real fraud dropped from BRL 18M to BRL 4.8M annually while false positives fell from 67% to 12%.",
      "I showed NPS climbing from 12 to 76, blocked-member churn shrinking from 23% to 3.1%, and average unlock time dropping from 4.2 hours to 38 seconds.",
      "I highlighted that the model now shields 4.2M members across 109 co-ops, preventing BRL 67M per year."
    ]
  },
  "customer_obsession/customer_obsession_case7.js": {
    extrasPt: [
      "Mostrei que o chargeback caiu de 1,8% para 0,5% e a resolução pré-chargeback saltou de 12% para 67%, evitando 47 mil disputas.",
      "Detalhei que o tempo médio de resolução caiu de 23 dias para 2,8 dias e a reativação de clientes subiu de 16% para 91%.",
      "Reforcei a economia anual de R$ 11,4 milhões e o reconhecimento da ABECS que permitiu replicar o modelo em 67 cooperativas."
    ],
    extrasEn: [
      "I showed chargeback rates dropping from 1.8% to 0.5% and pre-chargeback resolution jumping from 12% to 67%, avoiding 47k disputes.",
      "I detailed cutting average resolution time from 23 days to 2.8 days and lifting customer reactivation from 16% to 91%.",
      "I highlighted the BRL 11.4M annual savings and the ABECS award that led 67 co-ops to adopt the model."
    ]
  },
  "customer_obsession/customer_obsession_case8.js": {
    extrasPt: [
      "Referenciei que liberamos crédito em 72 horas e reduzimos o SLA médio de 26h para 7h45.",
      "Mostrei que o NPS Private saltou de 54 para 81 e o cancelamento anual caiu de 6,2% para 2,1%.",
      "Reforcei que o fluxo eliminou 94% das reclamações sobre atraso e virou mecanismo estratégico replicado em outros segmentos."
    ],
    extrasEn: [
      "I referenced releasing credit within 72 hours and cutting the average SLA from 26 hours to 7h45.",
      "I showed Private NPS jumping from 54 to 81 and annual churn dropping from 6.2% to 2.1%.",
      "I highlighted eliminating 94% of delay complaints and turning the flow into a strategic mechanism replicated in other segments."
    ]
  },
  "ownership/ownership_case1.js": {
    extrasPt: [
      "Reforcei que migramos 100% das contas com 99,98% de precisão e derrubamos o cycle time de 72 para 4 horas.",
      "Mostrei que o NPS subiu de 52 para 78, o churn premium ficou em 0,3% e evitamos US$ 180 milhões em multas.",
      "Citei a redução de 67% em custos operacionais e a antecipação de R$ 46 milhões em sinergias com governança replicada nas integrações seguintes."
    ],
    extrasEn: [
      "I reinforced migrating 100% of the accounts with 99.98% accuracy while cutting cycle time from 72 hours to 4.",
      "I showed NPS rising from 52 to 78, premium churn landing at 0.3%, and US$180M in fines avoided.",
      "I highlighted the 67% operating-cost reduction and R$46M in synergies pulled forward through the governance model we replicated."
    ]
  },
  "ownership/ownership_case2.js": {
    extrasPt: [
      "Detalhei que eliminamos 100% das duplicidades, cortamos o desvio de prazo de 23% para 7,4% e recuperamos R$ 2,3 milhões no orçamento.",
      "Mostrei que o tempo de restituição de ICMS caiu de 28 para 9 dias e que o NPS digital subiu de 52 para 76 com 40% menos reclamações.",
      "Reforcei o aporte de US$ 12 milhões liberado sem condicionantes e a automação de 72% dos relatórios, economizando 1.520 horas anuais."
    ],
    extrasEn: [
      "I detailed removing 100% of duplicate projects, cutting schedule deviation from 23% to 7.4%, and recovering BRL 2.3M in budget.",
      "I showed tax refunds accelerating from 28 to 9 days and digital-service NPS rising from 52 to 76 with 40% fewer complaints.",
      "I highlighted the US$12M release without conditions and the 72% report automation that freed 1,520 hours a year."
    ]
  },
  "ownership/ownership_case3.js": {
    extrasPt: [
      "Mostrei a queda de custo médio de R$ 54 para R$ 46,4 (-14%) e o SLA reduzido para 2h32 (-38%).",
      "Detalhei o backlog derrubado de 1.120 para 160 casos (-86%) e o NPS subindo de 48 para 74 em 74 dias.",
      "Reforcei que evitamos R$ 4,8 milhões anuais em perdas e o manual de 21 páginas virou template corporativo."
    ],
    extrasEn: [
      "I showed average cost dropping from BRL 54 to BRL 46.4 (-14%) and SLA tightening to 2h32 (-38%).",
      "I detailed the backlog collapsing from 1,120 to 160 cases (-86%) and NPS climbing from 48 to 74 within 74 days.",
      "I highlighted the BRL 4.8M annual loss avoided and the 21-page playbook that became the corporate crisis template."
    ]
  },
  "ownership/ownership_case4.js": {
    extrasPt: [
      "Expliquei que zeramos o backlog em 38 dias, resolvendo 2.276 casos automaticamente e 427 via playbook manual.",
      "Mostrei a liberação de US$ 47 milhões, a multa de R$ 12 milhões evitada e o cutover mantido no prazo.",
      "Reforcei que o runbook reduziu incidentes em 73%, derrubou o MTTR de 4,3 para 1,2 dia e elevou o NPS de 67 para 81."
    ],
    extrasEn: [
      "I explained clearing the backlog in 38 days with 2,276 cases auto-resolved and 427 handled via the manual playbook.",
      "I showed US$47M released, a R$12M fine avoided, and the cutover staying on schedule.",
      "I highlighted the runbook cutting incidents by 73%, shrinking MTTR from 4.3 to 1.2 days, and lifting NPS from 67 to 81."
    ]
  },
  "ownership/ownership_case5.js": {
    extrasPt: [
      "Mostrei a queda de incidentes recorrentes de 12 para 5 (-58%) e o MTTR médio de 3h40 para 2h25 (-34%).",
      "Detalhei que nenhuma falha classe A se repetiu, as reclamações caíram 45% e o NPS subiu para 64.",
      "Reforcei a adoção oficial do modelo pela SEFAZ, com redução de 25% nas horas extras e replicação assistida na Procergs."
    ],
    extrasEn: [
      "I showed recurring incidents dropping from 12 to 5 (-58%) and average MTTR going from 3h40 to 2h25 (-34%).",
      "I detailed zero repeat Class A failures, a 45% complaint reduction, and NPS climbing to 64.",
      "I highlighted SEFAZ institutionalizing the model, cutting overtime by 25%, and replicating it with Procergs under my guidance."
    ]
  },
  "ownership/ownership_case6.js": {
    extrasPt: [
      "Expliquei que manter cinco funcionalidades elevou a disponibilidade de 99,2% para 99,97% e reduziu a latência p95 para 320 ms (-53%).",
      "Mostrei a queda de incidentes P1 de 27 para 4 por mês, a redução de chargebacks em 18% e o NPS indo de 61 para 79.",
      "Reforcei que a Black Friday processou 3,8 milhões de transações/dia sem degradação e que o modelo evitou R$ 67 milhões em perdas."
    ],
    extrasEn: [
      "I explained how narrowing to five features drove availability from 99.2% to 99.97% and cut p95 latency to 320 ms (-53%).",
      "I showed P1 incidents falling from 27 to 4 per month, chargebacks down 18%, and NPS rising from 61 to 79.",
      "I highlighted handling 3.8M daily Black Friday transactions without degradation and avoiding BRL 67M in losses."
    ]
  },
  "ownership/ownership_case7.js": {
    extrasPt: [
      "Detalhei o rollback completo em 1h10 com zero perda de dados e 23.400 empresas retomando operação.",
      "Mostrei que evitamos R$ 8,2 milhões em vendas perdidas e fomos quatro vezes mais rápidos que incidentes semelhantes de 2015.",
      "Reforcei a criação do Procedimento de Decisão Emergencial, já usado quatro vezes para evitar mais de R$ 15 milhões."
    ],
    extrasEn: [
      "I detailed the full rollback in 1h10 with zero data loss and 23,400 companies back online.",
      "I showed the BRL 8.2M in losses avoided and that we were four times faster than similar 2015 incidents.",
      "I highlighted institutionalizing the Emergency Decision Procedure, already used four times to avert over BRL 15M."
    ]
  },
  "ownership/ownership_case8.js": {
    extrasPt: [
      "Mostrei que o motor suportou 73 mil requisições/hora, abriu 12.847 contas em 72 horas e manteve aprovação média em 3 min 47 s.",
      "Detalhei o NPS de 89, muito próximo do benchmark Nubank, e a precisão de estimativa melhorando de ±42% para ±11%.",
      "Reforcei que eliminamos três atrasos críticos, economizando R$ 8,7 milhões e influenciando o planejamento corporativo."
    ],
    extrasEn: [
      "I showed the engine handling 73k requests/hour, opening 12,847 accounts in 72 hours with 3m47 average approval.",
      "I detailed NPS reaching 89—just three points off Nubank—and forecast accuracy improving from ±42% to ±11%.",
      "I highlighted eliminating three critical delays, saving BRL 8.7M, and shaping the group’s planning standards."
    ]
  },
  "program_management/program_management_case1.js": {
    extrasPt: [
      "Reforcei que migramos 100% das contas com 99,98% de precisão e derrubamos o cycle time de 72 para 4 horas.",
      "Mostrei que o NPS subiu de 52 para 78, o churn premium ficou em 0,3% e evitamos US$ 180 milhões em multas.",
      "Citei a redução de 67% em custos operacionais e a antecipação de R$ 46 milhões em sinergias com governança replicada nas integrações seguintes."
    ],
    extrasEn: [
      "I reinforced migrating 100% of the accounts with 99.98% accuracy while cutting cycle time from 72 hours to 4.",
      "I showed NPS rising from 52 to 78, premium churn landing at 0.3%, and US$180M in fines avoided.",
      "I highlighted the 67% operating-cost reduction and R$46M in synergies pulled forward through the governance model we replicated."
    ]
  },
  "program_management/program_management_case2.js": {
    extrasPt: [
      "Detalhei que eliminamos 100% das duplicidades, cortamos o desvio de prazo de 23% para 7,4% e recuperamos R$ 2,3 milhões no orçamento.",
      "Mostrei que o tempo de restituição de ICMS caiu de 28 para 9 dias e que o NPS digital subiu de 52 para 76 com 40% menos reclamações.",
      "Reforcei o aporte de US$ 12 milhões liberado sem condicionantes e a automação de 72% dos relatórios, economizando 1.520 horas anuais."
    ],
    extrasEn: [
      "I detailed removing 100% of duplicate projects, cutting schedule deviation from 23% to 7.4%, and recovering BRL 2.3M in budget.",
      "I showed tax refunds accelerating from 28 to 9 days and digital-service NPS rising from 52 to 76 with 40% fewer complaints.",
      "I highlighted the US$12M release without conditions and the 72% report automation that freed 1,520 hours a year."
    ]
  },
  "program_management/program_management_case3.js": {
    extrasPt: [
      "Mostrei que o roadmap revisado entregou 100% de compliance e reduziu desvios médios de prazo e custo de 23% para 7%.",
      "Detalhei a economia adicional de R$ 12 milhões obtida com a reorganização das entregas.",
      "Reforcei que o NPS interno subiu de 65 para 82 e o modelo virou benchmark em outras secretarias."
    ],
    extrasEn: [
      "I showed the revised roadmap hitting 100% compliance and cutting average schedule/budget deviation from 23% to 7%.",
      "I detailed the additional BRL 12M saved through the reprioritized delivery plan.",
      "I highlighted internal NPS rising from 65 to 82 and the model becoming a benchmark for other departments."
    ]
  },
  "program_management/program_management_case4.js": {
    extrasPt: [
      "Mostrei que evitamos R$ 8 milhões em perdas e realocamos os fundos para gerar R$ 16 milhões em receita em 18 meses.",
      "Detalhei o aumento de 22% no EBITDA da unidade após o pivot controlado.",
      "Reforcei que o modelo passou a orientar futuras transições, equilibrando risco e alinhamento com o conselho."
    ],
    extrasEn: [
      "I showed we avoided a potential BRL 8M loss and redirected funds to generate BRL 16M in revenue within 18 months.",
      "I detailed the 22% EBITDA lift the unit captured after the controlled pivot.",
      "I highlighted how the pivot model now guides future transitions, balancing risk with board alignment."
    ]
  },
  "program_management/program_management_case5.js": {
    extrasPt: [
      "Mostrei que o MVP atingiu 25% de adoção da base de espera com churn de apenas 3% e receita incremental de R$ 50 milhões.",
      "Detalhei que lançar com menos features garantiu NPS 78 em seis meses e estabilidade total.",
      "Reforcei que o board aprovou recursos extras por unanimidade e transformou o case em referência de crise."
    ],
    extrasEn: [
      "I showed the MVP hit 25% adoption of the waitlist with only 3% churn and BRL 50M in first-year revenue.",
      "I detailed how shipping fewer features delivered a stable platform with NPS 78 in six months.",
      "I highlighted the board’s unanimous approval of extra funding and how the case became our crisis-management reference."
    ]
  },
  "program_management/program_management_case6.js": {
    extrasPt: [
      "Mostrei que 18 de 47 projetos foram entregues com 38% do orçamento executado e zero não-conformidades.",
      "Detalhei a aderência de 92% em projetos waterfall e 87% de OKRs em squads ágeis, ambos acima da média histórica.",
      "Reforcei o impacto anual de R$ 127 milhões, o atendimento caindo de 47 para 12 minutos e a detecção de fraude subindo de 23% para 61%."
    ],
    extrasEn: [
      "I showed 18 of 47 projects delivered with 38% budget execution and zero non-compliances.",
      "I detailed waterfall squads hitting 92% schedule/cost adherence and agile teams reaching 87% of OKRs—well above benchmarks.",
      "I highlighted the BRL 127M annual impact, service time dropping from 47 to 12 minutes, and fraud detection rising from 23% to 61%."
    ]
  }
  ,
  "dive_deep/dive_deep_case1.js": {
    extrasPt: [
      "Quantifiquei que o churn caiu de 40% para 32,8%, preservando 32 mil clientes e R$ 5,4 milhões em receita anual.",
      "Detalhei que a conclusão do onboarding subiu 20 pontos percentuais, sinalizando adoção saudável desde o primeiro acesso.",
      "Ressaltei que a base ativa cresceu 25% e batemos a meta de 150% sem investir um real em cashback.",
      "Mostrei que o war room reduziu o tempo de reação a incidentes em 35%, evitando sustos na operação.",
      "Fechei lembrando que o mecanismo virou rotina estratégica e mantém a diretoria informada a cada 15 dias."
    ],
    extrasEn: [
      "I quantified churn dropping from 40% to 32.8%, retaining 32,000 clients and BRL 5.4M in annual revenue.",
      "I outlined onboarding completion climbing 20 percentage points, proving new users stay engaged from day one.",
      "I reinforced that active users grew 25% and we hit the 150% growth target without spending a cent on cashback.",
      "I showed the war room cut incident response time by 35%, keeping surprises off the dashboard.",
      "I closed by noting the cadence became a biweekly mechanism that keeps the executive team wired into the numbers."
    ]
  },
  "dive_deep/dive_deep_case2.js": {
    extrasPt: [
      "Mencionei que mapeei 840 contas críticas somando US$ 180 milhões e garanti patch em 72 horas.",
      "Expliquei que nenhum cliente foi impactado no go-live, mantendo NPS 82 e evitando multas FATCA de até US$ 5 milhões.",
      "Ressaltei que o script Auditoria do Cliente Cético monitora byte a byte desvios acima de 0,05%.",
      "Detalhei que o tempo de reação a incidentes caiu 35% graças ao mecanismo permanente de auditoria.",
      "Reforcei que o playbook foi adotado globalmente e já protege US$ 47 bilhões em ativos em oito países."
    ],
    extrasEn: [
      "I highlighted mapping 840 critical accounts worth US$180M and securing a 72-hour vendor patch.",
      "I explained that zero clients were impacted at go-live, NPS held at 82, and we avoided up to US$5M in FATCA fines.",
      "I emphasized the Skeptical Customer Audit script comparing data byte-by-byte above a 0.05% threshold.",
      "I showed incident response time shrank 35% because the audit became a standing mechanism.",
      "I reinforced that the playbook is now global policy protecting US$47B in assets across eight countries."
    ]
  },
  "dive_deep/dive_deep_case3.js": {
    extrasPt: [
      "Quantifiquei que estancamos R$ 4,8 milhões em perdas anuais em menos de 30 dias.",
      "Mostrei que a precisão subiu 31%, falsos positivos caíram 42% e o review médio desceu para 11 minutos.",
      "Expliquei que o mapa de correlação hoje é mecanismo permanente em 14 cooperativas, blindando R$ 67 milhões.",
      "Detalhei que o método foi reaplicado no Sicredi, cortando fraudes via PIX em 45% e poupando R$ 23 milhões.",
      "Reforcei que criamos alçadas de monitoramento contínuo, eliminando dependência de planilhas manuais."
    ],
    extrasEn: [
      "I quantified shutting down BRL 4.8M in annual losses in under a month.",
      "I showed detection precision jumping 31%, false positives down 42%, and review effort falling to 11 minutes.",
      "I noted the correlation map now runs in 14 co-ops, safeguarding BRL 67M as a permanent mechanism.",
      "I detailed reapplying the approach at Sicredi to cut PIX fraud 45% and save BRL 23M.",
      "I reinforced that we replaced spreadsheet chasing with continuous monitoring thresholds."
    ]
  },
  "dive_deep/dive_deep_case4.js": {
    extrasPt: [
      "Quantifiquei que a liquidação caiu de 4,2 para 2,2 horas e o p95 ficou estável em 2,9 horas dentro do limite do Bacen.",
      "Mostrei que mantivemos falsos positivos em 0,4% enquanto o merchant crítico ampliou 15% do volume.",
      "Detalhei que o NPS PIX saltou de 32 para 68 e o churn de lojistas caiu 22% no trimestre seguinte.",
      "Reforcei que evitamos multas regulatórias e mantivemos todos os arranjos operando sem fricção.",
      "Expliquei que o dashboard e os alertas viraram padrão para todo fluxo de pagamentos do Sicredi."
    ],
    extrasEn: [
      "I quantified settlement dropping from 4.2 to 2.2 hours with P95 anchored at 2.9h under the central bank limit.",
      "I showed false positives holding at 0.4% while the flagship merchant grew volume 15%.",
      "I detailed PIX NPS climbing from 32 to 68 and merchant churn falling 22% the next quarter.",
      "I reinforced that we avoided regulatory fines and kept every scheme running without friction.",
      "I explained the dashboard-plus-alert stack became the blueprint for all Sicredi payment flows."
    ]
  },
  "dive_deep/dive_deep_case6.js": {
    extrasPt: [
      "Quantifiquei a queda de 70% nos conflitos de expectativa e o NPS subindo de 45 para 72.",
      "Mostrei que os 8 experimentos entregaram R$ 12 milhões em eficiência operacional.",
      "Detalhei que o modelo de comunicação virou padrão em outras iniciativas estratégicas da Unimed.",
      "Ressaltei que a diretoria passou a ver mudanças de escopo como aprendizado, não como indecisão.",
      "Fechei lembrando que hoje temos rituais, métricas e backlog compartilhado que sustentam a transparência."
    ],
    extrasEn: [
      "I quantified a 70% drop in expectation clashes and NPS rising from 45 to 72.",
      "I showed the eight experiments unlocked BRL 12M in operational savings.",
      "I detailed the communication model scaling to every other Unimed strategic initiative.",
      "I highlighted leaders reframing scope changes as learning moments, not indecision.",
      "I closed noting we now run shared rituals, metrics, and backlog to keep everyone aligned."
    ]
  },
  "dive_deep/dive_deep_case7.js": {
    extrasPt: [
      "Quantifiquei que a margem operacional saltou de -0,3% para +0,8%, um ganho de 340% por transação.",
      "Mostrei que o churn permaneceu estável nos níveis pré-experimento, provando sustentabilidade.",
      "Detalhei que o investimento teve ROI de 8,2x com payback em três meses.",
      "Reforcei que o framework foi replicado em cinco iniciativas estratégicas adicionais.",
      "Expliquei que o pipeline de otimização chegou a R$ 45 milhões em oportunidades mapeadas."
    ],
    extrasEn: [
      "I quantified operating margin flipping from -0.3% to +0.8%, a 340% swing per transaction.",
      "I showed churn holding steady at pre-test levels, confirming the model’s sustainability.",
      "I detailed the experimentation stack delivering 8.2x ROI with a three-month payback.",
      "I reinforced the framework scaling to five additional strategic initiatives.",
      "I explained it opened a BRL 45M optimization pipeline ready for execution."
    ]
  },
  "invent_and_simplify/invent_and_simplify_case1.js": {
    extrasPt: [
      "Quantifiquei a queda do tempo de ativação de 214 para 58 dias, redução de 73%.",
      "Detalhei a eliminação das multas contratuais, economizando R$ 10,8 milhões por ano.",
      "Mostrei que o NPS subiu de 17 para 56 e os clientes entenderam a correlação entre eventos e atrasos.",
      "Reforcei que o Command Center foi replicado em oito países e virou prática oficial.",
      "Expliquei que as operadoras destravaram R$ 47 milhões em receita antes represada com o novo fluxo."
    ],
    extrasEn: [
      "I quantified activation shrinking from 214 to 58 days—a 73% cut.",
      "I detailed removing all penalties, saving BRL 10.8M annually.",
      "I showed NPS climbing from 17 to 56 as teams linked technical events to customer impact.",
      "I reinforced the Command Center scaling across eight countries as the official playbook.",
      "I explained carriers unlocked BRL 47M in previously delayed revenue once the flow stabilized."
    ]
  },
  "invent_and_simplify/invent_and_simplify_case2.js": {
    extrasPt: [
      "Quantifiquei que o onboarding caiu de 32 horas para 5h58, uma redução de 81%.",
      "Mostrei o abandono despencando para 4% e o NPS saltando para 68.",
      "Detalhei a queda de 74% no retrabalho de compliance e o ganho de R$ 28 milhões em 18 meses.",
      "Reforcei que o Next atingiu 2,1 milhões de contas no período e sustentou crescimento saudável.",
      "Expliquei que a trilha escalou para 450 mil vendedores na Elo e Cielo sem perder governança."
    ],
    extrasEn: [
      "I quantified onboarding time dropping from 32 hours to 5h58—an 81% reduction.",
      "I showed abandonment falling to 4% and NPS jumping to 68.",
      "I detailed compliance rework down 74% and BRL 28M in incremental revenue within 18 months.",
      "I reinforced Next hitting 2.1M accounts while sustaining healthy growth.",
      "I explained the flow scaled to 450k Elo and Cielo merchants without sacrificing governance."
    ]
  },
  "invent_and_simplify/invent_and_simplify_case3.js": {
    extrasPt: [
      "Quantifiquei que as autorizações caíram de 5,1 dias para 9 horas, redução de 96%.",
      "Mostrei que atingimos 82% de automação sem aumentar erro clínico e o NPS chegou a 67.",
      "Detalhei que o tempo de angústia das famílias reduziu 89% com acompanhamento humano.",
      "Reforcei que 2.847 pacientes oncológicos receberam tratamento na janela correta.",
      "Expliquei que geramos R$ 2,4 milhões em economia operacional e contratos foram renovados antecipadamente."
    ],
    extrasEn: [
      "I quantified authorization dropping from 5.1 days to 9 hours—a 96% cut.",
      "I showed automation reaching 82% with zero clinical error increase and NPS hitting 67.",
      "I detailed family distress time falling 89% because of real human follow-up.",
      "I reinforced that 2,847 oncology patients were treated within the clinical window.",
      "I explained we saved BRL 2.4M in operating costs while partners renewed contracts early."
    ]
  },
  "invent_and_simplify/invent_and_simplify_case4.js": {
    extrasPt: [
      "Quantifiquei a queda do ciclo de MVP de 21 para 6,7 meses, 68% mais rápido.",
      "Mostrei a redução de 44% nos custos enquanto operamos o dobro da velocidade do benchmark privado.",
      "Detalhei a atração de 96 startups e 14 contratos ativos gerando R$ 36 milhões em eficiência.",
      "Reforcei que o monitoramento remoto reduziu readmissões cardíacas em 19%.",
      "Expliquei que o Fast-Track Klin foi replicado em cinco unidades da Unimed e duas instituições públicas."
    ],
    extrasEn: [
      "I quantified the MVP cycle falling from 21 to 6.7 months—68% faster.",
      "I showed costs dropping 44% while we operated at twice the private-sector benchmark speed.",
      "I detailed sourcing 96 startups and 14 active contracts generating BRL 36M in efficiency.",
      "I reinforced remote monitoring cutting cardiac readmissions by 19%.",
      "I explained the Fast-Track Klin model scaling to five Unimed units and two public partners."
    ]
  },
  "invent_and_simplify/invent_and_simplify_case5.js": {
    extrasPt: [
      "Quantifiquei que a conciliação caiu de 72 para menos de 5 horas, redução de 93%.",
      "Mostrei que liberamos R$ 27 milhões em repasses educacionais e evitamos R$ 4,6 milhões em multas.",
      "Detalhei que o NPS saltou de 18 para 61 com 146 prefeitos aderindo à plataforma.",
      "Reforcei que eliminamos 93% do retrabalho manual e trouxemos rastreabilidade em tempo real.",
      "Expliquei que o CONFAZ adotou o modelo e outros estados operam 20% acima do benchmark privado."
    ],
    extrasEn: [
      "I quantified reconciliation time falling from 72 to under 5 hours—a 93% cut.",
      "I showed BRL 27M released to education funds and BRL 4.6M in fines avoided.",
      "I detailed NPS rising from 18 to 61 with 146 mayors voluntarily onboard.",
      "I reinforced eliminating 93% of manual rework while adding real-time traceability.",
      "I explained CONFAZ adopted the model and other states now run 20% above private-bank benchmarks."
    ]
  },
  "invent_and_simplify/invent_and_simplify_case6.js": {
    extrasPt: [
      "Quantifiquei que atingimos D+0 em 82% do volume com NPS subindo de 29 para 71.",
      "Mostrei que retivemos R$ 2,4 bilhões em TPV e reduzimos churn em 4,5 pontos percentuais.",
      "Detalhei os R$ 19 milhões de receita incremental e R$ 7,4 milhões em economia anual.",
      "Reforcei a queda de 48% nas reconciliações tardias após simplificar 27 integrações para oito módulos.",
      "Expliquei que o modelo escalou para cartões corporativos e cross-border, elevando o D+0 em 36% no ano seguinte."
    ],
    extrasEn: [
      "I quantified reaching D+0 for 82% of volume with NPS rising from 29 to 71.",
      "I showed retaining BRL 2.4B in TPV while churn dropped 4.5 points.",
      "I detailed BRL 19M in incremental revenue plus BRL 7.4M in annual savings.",
      "I reinforced late reconciliation incidents falling 48% after simplifying 27 integrations into eight modules.",
      "I explained the model scaling to corporate cards and cross-border, boosting D+0 share 36% the following year."
    ]
  },
  "earn_trust/earn_trust_case1.js": {
    extrasPt: [
      "Reforcei que em 36 horas restabelecemos liquidez, devolvemos R$ 14,8 milhões e derrubamos tickets de 5.940 para 182.",
      "Contextualizei que o NPS voltou a 58 em 28 dias e os clientes relataram se sentir dentro da sala de controle.",
      "Mostrei que o diretor comercial passou a copiar cada comunicação crítica e o conselho institucionalizou a carta diária.",
      "Detalhei que o Banco Central elogiou formalmente o nível de transparência adotado na crise.",
      "Lembrei que o mecanismo virou playbook de governança sempre que enfrentamos incidentes críticos."
    ],
    extrasEn: [
      "I reinforced that within 36 hours we restored liquidity, refunded BRL 14.8M, and cut tickets from 5,940 to 182.",
      "I contextualized that NPS rebounded to 58 in 28 days and customers said they felt inside the control room.",
      "I showed the commercial director now loops me on every critical message and the board institutionalized the daily letter.",
      "I detailed the Central Bank formally praising the transparency we adopted during the crisis.",
      "I reminded them the mechanism became our governance playbook for future critical incidents."
    ]
  },
  "earn_trust/earn_trust_case2.js": {
    extrasPt: [
      "Detalhei que respondemos 47 ofícios do Bacen em média 12 horas antes do prazo, mantendo câmbio sem interrupções.",
      "Mostrei que o score com o regulador saltou de 43 para 86 e o processo encerrou sem multa.",
      "Reforcei que a confiança dos clientes corporativos subiu de 72% para 98% depois da nossa postura.",
      "Expliquei que o CFO replicou o modelo em quatro áreas reguladas e hoje ele é padrão na companhia.",
      "Citei o convite do Bacen para o comitê de inovação em regtech como prova da credibilidade reconstruída."
    ],
    extrasEn: [
      "I detailed delivering 47 Central Bank requests on average 12 hours early while keeping FX services uninterrupted.",
      "I showed the regulator score climbing from 43 to 86 and the case closing with zero fines.",
      "I reinforced corporate client trust rising from 72% to 98% after our transparency.",
      "I explained the CFO replicated the model across four regulated areas and it became company standard.",
      "I cited the Central Bank inviting us to its regtech innovation forum as proof trust was rebuilt."
    ]
  },
  "earn_trust/earn_trust_case3.js": {
    extrasPt: [
      "Detalhei que em 9 dias zeramos o backlog de R$ 420 milhões e restabelecemos o SLA D+1 com variação de saldo em 0,08%.",
      "Mostrei que o churn de sellers caiu 3,9 pontos e o NPS do parceiro subiu de 18 para 63 em seis semanas.",
      "Reforcei que o contrato foi renovado por dois anos com revisões trimestrais coassinadas.",
      "Expliquei que o Saldo Garantido agora cobre R$ 1,2 bilhão em TPV e reduziu escaladas em 46%.",
      "Citei que o caso virou workshop interno de governança e transformou transparência em vantagem competitiva."
    ],
    extrasEn: [
      "I detailed clearing the BRL 420M backlog in nine days, restoring D+1 SLA with balance variance at 0.08%.",
      "I showed seller churn dropping 3.9 points and partner NPS jumping from 18 to 63 within six weeks.",
      "I reinforced the partner renewed for two years with quarterly co-signed reviews.",
      "I explained the Guaranteed Balance model now shields BRL 1.2B TPV and cut escalations by 46%.",
      "I cited how the case became our trust governance workshop and turned transparency into a competitive edge."
    ]
  },
  "earn_trust/earn_trust_case4.js": {
    extrasPt: [
      "Mostrei que em 74 dias o chargeback caiu de 0,62% para 0,38% com as 19 frentes concluídas.",
      "Detalhei que o SLA de reembolso caiu de 11 para 4 horas e as escaladas mensais de 11 para 2.",
      "Reforcei que o eNPS interáreas saltou de 31 para 68 assim que o ritual foi implantado.",
      "Expliquei que o CFO oficializou o modelo como governança preventiva e o PMO incorporou ao framework digital.",
      "Lembrei que outras áreas replicaram o mecanismo e os riscos passaram a aparecer antes das auditorias."
    ],
    extrasEn: [
      "I showed chargeback dropping from 0.62% to 0.38% in 74 days with all 19 streams delivered.",
      "I detailed refund SLA shrinking from 11 to 4 hours and monthly escalations falling from 11 to 2.",
      "I reinforced cross-team eNPS rising from 31 to 68 once the ritual was in place.",
      "I explained the CFO formalized it as preventive governance and PMO embedded it in the digital framework.",
      "I reminded them other areas replicated it and risks surfaced before audit cycles."
    ]
  },
  "earn_trust/earn_trust_case5.js": {
    extrasPt: [
      "Detalhei que em 45 dias a taxa fora do D+1 caiu de 7,1% para 0,12% e a conciliação automática subiu de 68% para 94%.",
      "Mostrei que o tempo médio de correção despencou de 18 horas para 2h50 com o novo ritual.",
      "Reforcei que quatro contratos estratégicos foram renovados sem desconto, economizando R$ 2,3 milhões.",
      "Expliquei que o Check 7h foi replicado em cinco áreas como mecanismo diário de confiança.",
      "Citei que a auditoria posterior registrou o modelo como referência de governança operacional."
    ],
    extrasEn: [
      "I detailed cutting late D+1 settlements from 7.1% to 0.12% and lifting auto-reconciliation from 68% to 94% in 45 days.",
      "I showed correction time dropping from 18 hours to 2h50 once the ritual started.",
      "I reinforced four strategic contracts renewed at full margin, saving BRL 2.3M.",
      "I explained Check 7h now operates in five areas as a daily trust mechanism.",
      "I cited the audit report naming the model an operational governance reference."
    ]
  },
  "deliver_results/deliver_results_case1.js": {
    extrasPt: [
      "Reforcei que entregamos a rede 10 dias antes do kick-off com 99,8% de disponibilidade e throughput médio de 124 Mbps.",
      "Detalhei que processamos 8,6 milhões de transações contactless sem falhas ao longo do torneio.",
      "Mostrei que o NPS das operadoras subiu de 46 para 71 e a satisfação dos torcedores atingiu 94% segundo a FIFA.",
      "Expliquei que evitamos US$ 38 milhões em multas ao manter operação impecável.",
      "Citei que o VPI e a torre de controle viraram padrão em 11 países, reduzindo lead time em 60% nos rollouts 5G."
    ],
    extrasEn: [
      "I reinforced we delivered ten days ahead with 99.8% availability and 124 Mbps average throughput.",
      "I detailed handling 8.6 million contactless transactions with zero failures across the tournament.",
      "I showed carrier NPS climbing 46→71 and fan satisfaction reaching 94% in FIFA surveys.",
      "I explained we avoided US$38M in penalties by keeping operations flawless.",
      "I cited VPI and the control tower becoming the 5G rollout standard in 11 countries with 60% lead-time reduction."
    ]
  },
  "deliver_results/deliver_results_case2.js": {
    extrasPt: [
      "Detalhei que o EBITDA cresceu 22% (R$ 320M → R$ 391M) enquanto o setor avançou apenas 9%.",
      "Mostrei que o APS 360 economizou R$ 21 milhões anuais, a redução de churn reteve R$ 34 milhões e novos produtos trouxeram R$ 16 milhões.",
      "Reforcei que o NPS chegou a 67 e o tempo de aprovação caiu 64% (48h → 1h45).",
      "Expliquei que a carteira ativa cresceu 12% e o conselho aprovou bônus integral pela primeira vez em três anos.",
      "Citei que 17 regionais replicaram o APS 360 suportadas pelo Centro de Excelência com templates e dashboards automatizados."
    ],
    extrasEn: [
      "I detailed EBITDA climbing 22% (BRL 320M → 391M) while the industry grew only 9%.",
      "I showed APS 360 saving BRL 21M per year, churn cuts retaining BRL 34M, and new products adding BRL 16M.",
      "I reinforced NPS hitting 67 and approval time dropping 64% (48h → 1h45).",
      "I explained the portfolio expanded 12% and the board approved full bonus for the first time in three years.",
      "I cited 17 co-ops replicating APS 360 via the Center of Excellence with templates and automated dashboards."
    ]
  },
  "deliver_results/deliver_results_case3.js": {
    extrasPt: [
      "Detalhei que em cinco meses as perdas caíram de R$ 420 mil para R$ 226 mil (-46%), muito além da meta de 30%.",
      "Mostrei que o tempo de resposta a novos ataques despencou de 21 dias para 18 horas (-96%).",
      "Reforcei que mantivemos falsos positivos em 1,6% (abaixo da meta de 2%) e o NPS de onboarding saltou de 29 para 63.",
      "Expliquei que recuperamos R$ 1,9 milhão em receita anualizada aprovando clientes legítimos.",
      "Citei que o playbook virou padrão corporativo e reduziu perdas em 38% em outras três unidades."
    ],
    extrasEn: [
      "I detailed losses dropping from BRL 420K to 226K (-46%) in five months, far beyond the 30% goal.",
      "I showed response time to new attack patterns plummeting from 21 days to 18 hours (-96%).",
      "I reinforced false positives staying at 1.6% (below the 2% target) and onboarding NPS jumping from 29 to 63.",
      "I explained we recovered BRL 1.9M in annualized revenue by approving legitimate customers.",
      "I cited the playbook becoming corporate standard and driving 38% loss reduction across three more units."
    ]
  },
  "deliver_results/deliver_results_case4.js": {
    extrasPt: [
      "Detalhei que o Portal e-CAGE foi lançado em seis meses sem custo extra e migrou 1.200 demandas em 60 dias.",
      "Mostrei que o tempo médio de aprovação caiu 47% (15 → 8 dias) e o SLA saltou de 66% para 94%.",
      "Reforcei que o retrabalho despencou de 25% para 4%, economizando 120 horas mensais.",
      "Expliquei que o NPS subiu de 30 para 72 e casos críticos como a merenda caíram de seis semanas para oito dias.",
      "Citei que o comitê com 12 super-usuários, a documentação e os painéis automáticos renderam autonomia e o prêmio ENAP 2024."
    ],
    extrasEn: [
      "I detailed launching Portal e-CAGE in six months with no extra budget and migrating 1,200 requests in 60 days.",
      "I showed approval time dropping 47% (15 → 8 days) and SLA jumping from 66% to 94%.",
      "I reinforced rework falling from 25% to 4%, saving 120 hours per month.",
      "I explained NPS rising from 30 to 72 and critical cases like school meals shrinking from six weeks to eight days.",
      "I cited the 12-member committee, documentation, and automated dashboards enabling autonomy and winning the ENAP 2024 award."
    ]
  },
  "deliver_results/deliver_results_case5.js": {
    extrasPt: [
      "Detalhei que entregamos o Pix Core em 16 de novembro com 520 TPS e zero incidentes críticos nas primeiras 72 horas.",
      "Mostrei que em 30 dias processamos 2,8 milhões de transações com 99,2% de disponibilidade para 4,5 milhões de cooperados.",
      "Reforcei que o NPS do Pix subiu de 45 para 68 e 87% dos usuários avaliaram melhor que TED/DOC.",
      "Expliquei que as features avançadas chegaram duas semanas antes do prazo com 95% do valor do escopo original.",
      "Citei que a matriz de dependências e os gates de qualidade viraram padrão para projetos regulatórios acima de 50 pessoas."
    ],
    extrasEn: [
      "I detailed delivering Pix Core on November 16 with 520 TPS capacity and zero critical incidents in the first 72 hours.",
      "I showed 2.8 million Pix transactions in 30 days at 99.2% availability for 4.5M members.",
      "I reinforced Pix NPS rising from 45 to 68 with 87% of users rating it better than TED/DOC.",
      "I explained advanced features shipped two weeks early while preserving 95% of original scope value.",
      "I cited the dependency matrix and quality gates becoming the standard for regulatory projects over 50 people."
    ]
  },
  "deliver_results/deliver_results_case6.js": {
    extrasPt: [
      "Detalhei que lançamos telemedicina no prazo com 23.400 consultas em 90 dias, 30% acima da projeção.",
      "Mostrei que o NPS atingiu 78 (meta 65) e a taxa de conclusão ficou em 94% versus 71% dos concorrentes.",
      "Reforcei que a latência média de 420 ms e a taxa de falha de 0,8% reduziram reclamações previstas de 468 para 187.",
      "Expliquei que o negócio gerou R$ 11,2 milhões em quatro meses, margem de 42% e CAC de R$ 23 por consulta.",
      "Citei que o investimento de R$ 1,8 milhão teve payback em 6,4 semanas e abriu pipeline de R$ 34 milhões."
    ],
    extrasEn: [
      "I detailed launching telemedicine on schedule with 23,400 consultations in 90 days—30% above plan.",
      "I showed NPS hitting 78 versus 65 target and completion at 94% versus competitors’ 71%.",
      "I reinforced average latency of 420 ms and a 0.8% failure rate, cutting expected complaints from 468 to 187.",
      "I explained the business generated BRL 11.2M in four months with 42% margin and BRL 23 CAC per visit.",
      "I cited the BRL 1.8M transition paying back in 6.4 weeks and opening a BRL 34M pipeline of new specialties."
    ]
  },
  "deliver_results/deliver_results_case7.js": {
    extrasPt: [
      "Quantifiquei que elevamos a disponibilidade de 95% para 99,99% durante 12 meses consecutivos.",
      "Mostrei que a economia anual de R$ 15 milhões veio da eliminação de downtime em sistemas críticos para 3 milhões de beneficiários.",
      "Reforcei que criamos um Centro de Excelência em SRE com metodologia replicada em cinco sistemas adicionais.",
      "Expliquei que o framework reduziu o tempo de implementação em 40% quando aplicado a outros contextos críticos.",
      "Citei que o reconhecimento nacional consolidou o padrão como referência de confiabilidade da Unimed RS."
    ],
    extrasEn: [
      "I quantified lifting availability from 95% to 99.99% for twelve straight months.",
      "I showed the BRL 15M annual savings from eliminating downtime in systems serving 3 million members.",
      "I reinforced establishing an SRE Center of Excellence replicated across five additional systems.",
      "I explained the framework cut rollout time by 40% in other critical contexts.",
      "I cited national recognition cementing the standard as Unimed RS’s reliability benchmark."
    ]
  },
  "stakeholder_management/stakeholder_management_case1.js": {
    extrasPt: [
      "Detalhei que o lead time caiu de 382 para 62 dias, liberando 1.136 sites e antecipando R$ 1,1 bilhão em receita.",
      "Mostrei que o modelo escalou para 54 operações globais após o summit de 2017.",
      "Reforcei que a média global estabilizou em 58 dias com savings acumulados de US$ 120 milhões.",
      "Expliquei que US$ 80 milhões vieram de receita antecipada, US$ 25 milhões de renegociação e US$ 15 milhões de retrabalho evitado.",
      "Citei que o NPS interno subiu de 41 para 68 e o SLA crítico <72h saltou de 42% para 91%."
    ],
    extrasEn: [
      "I detailed cutting lead time from 382 to 62 days, unlocking 1,136 sites and BRL 1.1B in accelerated revenue.",
      "I showed the model scaling to 54 global operations after the 2017 summit.",
      "I reinforced the global average holding at 58 days with US$120M cumulative savings.",
      "I explained US$80M came from accelerated revenue, US$25M from renegotiation, and US$15M from avoided rework.",
      "I cited internal NPS rising 41→68 and the <72h critical SLA jumping from 42% to 91%."
    ]
  },
  "stakeholder_management/stakeholder_management_case2.js": {
    extrasPt: [
      "Reforcei que a governança colaborativa elevou o EBITDA em 22% enquanto o mercado avançou 9%.",
      "Detalhei que o APS 360 economizou R$ 21 milhões ao ano e a queda de churn reteve R$ 34 milhões.",
      "Expliquei que o NPS subiu 15 pontos até 67 e as aprovações caíram de 48h para 1h45.",
      "Mostrei que a carteira ativa cresceu 12% e o conselho liberou bônus integral após três anos.",
      "Citei que 17 regionais pediram replicação usando os templates e treinamentos do Centro de Excelência."
    ],
    extrasEn: [
      "I reinforced the collaborative governance lifting EBITDA 22% while the market grew 9%.",
      "I detailed APS 360 saving BRL 21M annually and churn reduction retaining BRL 34M.",
      "I explained NPS climbed 15 points to 67 with approvals dropping from 48h to 1h45.",
      "I showed the portfolio expanding 12% and the board granting full bonuses after three years.",
      "I cited 17 regions requesting replication via the Center of Excellence templates and training."
    ]
  },
  "stakeholder_management/stakeholder_management_case3.js": {
    extrasPt: [
      "Detalhei que o novo fornecedor entregou SLA de 99,82% versus 87% anterior e reduziu incidentes críticos de 23 para 1.",
      "Mostrei que as perdas operacionais caíram de R$ 3,2 milhões para R$ 180 mil e geraram R$ 2,8 milhões em savings no primeiro ano.",
      "Reforcei que o CEO institucionalizou revisões trimestrais baseadas em dados e passou a me consultar em toda decisão de vendor.",
      "Expliquei que fui promovido a VP de Tecnologia oito meses depois justamente pela confiança reconstruída.",
      "Citei que a ServiceIT evoluiu para SLA de 98,2% após o feedback e voltou a disputar RFP 18 meses depois."
    ],
    extrasEn: [
      "I detailed the new vendor delivering 99.82% SLA versus 87% before and cutting critical incidents from 23 to 1.",
      "I showed operational losses dropping from BRL 3.2M to 180K, yielding BRL 2.8M savings in year one.",
      "I reinforced the CEO institutionalized quarterly data-driven vendor reviews and now brings me into every vendor decision.",
      "I explained I was promoted to VP of Technology eight months later because trust was rebuilt.",
      "I cited ServiceIT improving to 98.2% SLA after our feedback and rejoining Unimed bids 18 months later."
    ]
  },
  "stakeholder_management/stakeholder_management_case4.js": {
    extrasPt: [
      "Detalhei que o framework reduziu desvios de 23% para 7% em menos de nove meses.",
      "Mostrei que o esforço gerou R$ 12 milhões em economias adicionais segundo o Relatório de Transparência Fiscal.",
      "Reforcei que o NPS interno chegou a 82 com o sistema integrado operando sem minha intervenção.",
      "Expliquei que o BID elogiou oficialmente a execução e adotou o modelo como benchmark para o Profisco III.",
      "Citei que o business case projetava ROI de R$ 57 milhões cruzando dados de 11 sistemas e 433 metas."
    ],
    extrasEn: [
      "I detailed cutting deviations from 23% to 7% in under nine months.",
      "I showed the framework generated BRL 12M in savings per the Fiscal Transparency Report.",
      "I reinforced internal NPS reaching 82 with the integrated system running autonomously.",
      "I explained BID formally praised the execution and adopted the model as the Profisco III benchmark.",
      "I cited the BRL 57M ROI case built by cross-referencing 11 systems and 433 goals."
    ]
  },
  "stakeholder_management/stakeholder_management_case5.js": {
    extrasPt: [
      "Detalhei que instalamos 2.847 antenas e atingimos 98,7% de cobertura, acima do benchmark GSMA de 95%.",
      "Mostrei que entregamos 4G nas 12 cidades-sede no prazo com zero incidentes em 64 jogos.",
      "Reforcei que 100% das prefeituras aprovaram licenças e a ANATEL registrou excelência em compliance.",
      "Expliquei que a FIFA enviou carta de elogio e as quatro operadoras renovaram contratos somando R$ 340 milhões.",
      "Citei os três novos contratos de R$ 180 milhões e a promoção a Senior Program Manager como reconhecimento coletivo."
    ],
    extrasEn: [
      "I detailed installing 2,847 antennas and reaching 98.7% coverage—above the 95% GSMA benchmark.",
      "I showed we delivered 4G on schedule in all 12 host cities with zero incidents across 64 matches.",
      "I reinforced 100% of city halls approving permits and ANATEL certifying our compliance excellence.",
      "I explained FIFA’s formal commendation and the four carriers renewing BRL 340M in contracts.",
      "I cited the three additional BRL 180M contracts and my promotion to Senior Program Manager as collective recognition."
    ]
  },
  "stakeholder_management/stakeholder_management_case6.js": {
    extrasPt: [
      "Detalhei que o Woop atingiu 25% de adoção digital, 15 pontos acima da base e 1,7x o benchmark interno.",
      "Mostrei que lançamos 15 versões cocriadas com funcionalidades como PIX e biometria facial.",
      "Reforcei que o NPS digital subiu de 32 para 67 e o board reduziu aprovações de 90 para 30 dias.",
      "Expliquei que o modelo foi institucionalizado pelo Sicredi Nacional e replicado em 48 cooperativas.",
      "Citei que o presidente mais resistente virou porta-voz do digital na convenção nacional de 2021."
    ],
    extrasEn: [
      "I detailed Woop reaching 25% digital adoption-15 points above baseline and 1.7x the internal benchmark.",
      "I showed 15 co-created releases adding PIX and facial biometrics.",
      "I reinforced digital NPS climbing from 32 to 67 and board approvals dropping from 90 to 30 days.",
      "I explained the model was institutionalized by Sicredi Nacional and replicated in 48 cooperatives.",
      "I cited the once-skeptical president becoming the digital spokesperson at the 2021 national convention."
    ]
  },
  "learn_and_be_curious/learn_and_be_curious_case1.js": {
    extrasPt: [
      "Mostrei que o APS alcançou 20 mil associados e cortou 15% dos custos hospitalares, gerando R$ 4 milhões em economia.",
      "Reforcei que o NPS da carteira saltou de 28 para 34 enquanto o EBITDA cresceu 22% versus 8% do setor.",
      "Expliquei que US$ 3,2 mil investidos em Harvard retornaram mais de R$ 4 milhões no primeiro ano.",
      "Detalhei que superamos as projeções de Harvard, que apontavam reduções típicas de 10% a 12%.",
      "Citei que o protocolo Harvard virou pré-requisito corporativo para novos líderes de inovação."
    ],
    extrasEn: [
      "I showed APS reaching 20,000 members and cutting hospital costs 15%, delivering BRL 4M savings.",
      "I reinforced participant NPS rising from 28 to 34 while EBITDA grew 22% versus the 8% industry average.",
      "I explained the US$3.2K Harvard investment returned over BRL 4M in the first year.",
      "I detailed we beat Harvard's 10-12% benchmark with a 15% reduction.",
      "I cited the Harvard-based protocol becoming a corporate prerequisite for innovation leaders."
    ]
  },
  "learn_and_be_curious/learn_and_be_curious_case2.js": {
    extrasPt: [
      "Mostrei que o Next foi lançado seis meses antes, economizando R$ 2,4 milhões e eliminando dependências ocultas.",
      "Detalhei que o tempo de reunião caiu 50% e o retrabalho despencou 70% após o novo modelo.",
      "Reforcei que a Comunidade Ágil treinou mais de 2.000 profissionais e influenciou 12 diretorias.",
      "Expliquei que o playbook 'Bradesco Way of Working' virou referência de governança de entrega.",
      "Citei que o aprendizado contínuo passou a ser tratado como ferramenta de execução, não como treinamento isolado."
    ],
    extrasEn: [
      "I showed Next launching six months early, saving BRL 2.4M and eliminating hidden dependencies.",
      "I detailed meeting time dropping 50% and rework 70% under the new operating model.",
      "I reinforced the Agile Community training 2,000+ professionals and influencing 12 directorates.",
      "I explained the 'Bradesco Way of Working' playbook became the enterprise delivery reference.",
      "I cited leaders now using continuous learning as an execution tool, not a side training track."
    ]
  },
  "learn_and_be_curious/learn_and_be_curious_case3.js": {
    extrasPt: [
      "Mostrei que a decisão evitou investir R$ 800 mil e redirecionou o capital para gerar R$ 1,2 milhão em receita.",
      "Detalhei que o whitepaper de 18 páginas e o protótipo interativo sustentaram a recomendação de pausar.",
      "Reforcei que definimos KRs como 'Clareza Regulatória Nível 3' e 'Adoção PME > 15%' para reavaliar o tema.",
      "Expliquei que o ROI da curiosidade disciplinada foi 150% maior que o cenário blockchain.",
      "Citei que a metodologia virou mecanismo corporativo de inteligência estratégica trimestral."
    ],
    extrasEn: [
      "I showed we avoided a BRL 800K spend and redirected funds to generate BRL 1.2M revenue.",
      "I detailed the 18-page whitepaper and interactive prototype that backed the pause recommendation.",
      "I reinforced setting KRs like 'Regulatory Clarity Level 3' and 'SME adoption >15%' to reassess the space.",
      "I explained disciplined curiosity produced 150% ROI over the blockchain alternative.",
      "I cited the method becoming the company's quarterly strategic intelligence mechanism."
    ]
  },
  "learn_and_be_curious/learn_and_be_curious_case4.js": {
    extrasPt: [
      "Mostrei que entregamos 26 PoCs em três anos, reduzindo o ramp-up de seis para 2,8 semanas (-53%).",
      "Detalhei que a aplicação de aprendizado subiu de 22% para 81% e a due diligence caiu de oito para 3,2 semanas.",
      "Reforcei que o Woop App cresceu 25% (aproximadamente R$ 160 milhões) graças aos aceleradores padronizados.",
      "Expliquei que dois PoCs viraram templates oficiais: integração de pagamentos (-6 -> 1,5 semana) e reconciliação (-94% erros).",
      "Citei que 832 horas de estudo renderam R$ 2,1 milhões em savings, um ROI de 8,3x."
    ],
    extrasEn: [
      "I showed delivering 26 PoCs in three years, cutting ramp-up from six to 2.8 weeks (-53%).",
      "I detailed learning application rising from 22% to 81% and due diligence dropping from eight to 3.2 weeks.",
      "I reinforced Woop App adoption growing 25% (~BRL 160M) via standardized accelerators.",
      "I explained two PoCs became templates: payment integration (six -> 1.5 weeks) and reconciliation (-94% manual errors).",
      "I cited 832 learning hours producing BRL 2.1M in savings—an 8.3x ROI."
    ]
  },
  "learn_and_be_curious/learn_and_be_curious_case5.js": {
    extrasPt: [
      "Mostrei que o portal foi entregue em 3,8 meses, 36% antes do plano técnico e 5% antes do marco político.",
      "Detalhei que 14,2 mil usuários únicos mensais representam 42% acima da meta original.",
      "Reforcei que os pedidos LAI caíram 67% (340 -> 112) e economizamos 480 horas anuais de atendimento.",
      "Expliquei que a arquitetura foi replicada por 23 municípios e gerou 47 reportagens em poucos meses.",
      "Citei que o domínio em LGPD evitou R$ 380 mil em consultorias em quatro novos projetos."
    ],
    extrasEn: [
      "I showed the portal launched in 3.8 months, 36% ahead of plan and 5% before the political deadline.",
      "I detailed 14.2K monthly unique users—42% above target.",
      "I reinforced FOIA requests dropping 67% (340 -> 112) and 480 support hours saved annually.",
      "I explained 23 municipalities reused the architecture and 47 data stories hit the press within months.",
      "I cited the LGPD expertise saving BRL 380K in consultancy across four follow-on projects."
    ]
  },
  "learn_and_be_curious/learn_and_be_curious_case6.js": {
    extrasPt: [
      "Mostrei que o Vibee acelerou sete startups, investiu em duas e validou R$ 12 milhões em inovação.",
      "Detalhei que o tempo de contratação caiu de 21 para oito dias com zero desistências.",
      "Reforcei que o modelo foi replicado em 23 cooperativas, gerando R$ 47 milhões em projetos.",
      "Expliquei que o investimento de R$ 340 mil virou estrutura permanente e reconhecida pela OCB.",
      "Citei que a Unimed passou a ser vista como parceira confiável no ecossistema de inovação cooperativa."
    ],
    extrasEn: [
      "I showed Vibee accelerating seven startups, investing in two, and validating BRL 12M in innovation.",
      "I detailed contracting time dropping from 21 to eight days with zero attrition.",
      "I reinforced the model scaling to 23 cooperatives and generating BRL 47M in projects.",
      "I explained the BRL 340K investment created a permanent structure recognized by OCB.",
      "I cited Unimed becoming a trusted partner within Brazil's cooperative innovation ecosystem."
    ]
  },
  "bias_for_action/bias_for_action_case1.js": {
    extrasPt: [
      "Mostrei que lançamos o Next sete meses antes, reduzindo onboarding de 27 dias para dez minutos.",
      "Detalhei que a evasão caiu de 38% para 9% e capturamos 1,2 milhão de clientes com R$ 310 milhões em saldos.",
      "Reforcei que o NPS subiu de 34 para 57 e o SeDR economizou 147 dias-pessoa em comitês.",
      "Expliquei que a pergunta 'qual o custo da inação?' virou mantra corporativo após o projeto.",
      "Citei que a disciplina de decisão rápida passou a guiar outras iniciativas digitais."
    ],
    extrasEn: [
      "I showed we launched Next seven months early, shrinking onboarding from 27 days to ten minutes.",
      "I detailed attrition falling 38%->9% while acquiring 1.2M clients and BRL 310M balances.",
      "I reinforced NPS rising from 34 to 57 and SeDR saving 147 committee person-days.",
      "I explained the question 'what's the cost of inaction?' became a corporate mantra afterward.",
      "I cited the rapid-decision discipline spreading across other digital programs."
    ]
  },
  "bias_for_action/bias_for_action_case2.js": {
    extrasPt: [
      "Mostrei que o ML automatizou 73% dos pedidos em oito meses, cortando análise de 11 para 1,8 dia.",
      "Detalhei que o backlog caiu de 18 mil para 2,4 mil e o abandono de 31% para 8%.",
      "Reforcei que a inadimplência ficou em 1,9% e aprovamos R$ 127 milhões extras com custo 42% menor.",
      "Expliquei que o laboratório regulado inspirado pelo projeto hoje atende seguros e investimentos.",
      "Citei que o diretor de risco, antes contra, virou patrocinador e mentor de novas frentes."
    ],
    extrasEn: [
      "I showed ML automating 73% of requests in eight months, trimming analysis from 11 to 1.8 days.",
      "I detailed backlog shrinking 18K->2.4K and abandonment plunging 31%->8%.",
      "I reinforced default staying at 1.9% while approving BRL 127M more credit with 42% lower cost.",
      "I explained the regulated innovation lab formed afterward now covers insurance and investments.",
      "I cited the once-opposed risk director becoming the model's executive sponsor."
    ]
  },
  "bias_for_action/bias_for_action_case3.js": {
    extrasPt: [
      "Mostrei que o portal emergencial ficou pronto em 18 dias e processou 28.700 pedidos em três semanas.",
      "Detalhei que concedemos R$ 312 milhões em suporte fiscal e evitamos R$ 128 milhões em perdas.",
      "Reforcei que o tempo médio caiu de 96 horas para 18 minutos com 99,4% de disponibilidade.",
      "Expliquei que o NPS atingiu 76 e 91% dos casos foram aprovados sem intervenção humana.",
      "Citei que o modelo virou referência do CONFAZ para respostas a desastres naturais."
    ],
    extrasEn: [
      "I showed the emergency portal went live on day 18 and handled 28,700 requests in three weeks.",
      "I detailed BRL 312M granted in fiscal relief while avoiding BRL 128M in losses.",
      "I reinforced average handling dropping from 96 hours to 18 minutes with 99.4% uptime.",
      "I explained NPS hitting 76 and 91% of cases approved automatically.",
      "I cited the governance becoming CONFAZ's reference for disaster response."
    ]
  },
  "bias_for_action/bias_for_action_case4.js": {
    extrasPt: [
      "Mostrei que recuperamos 83% da capacidade em 61 horas com SLA 97% superior ao pré-ataque.",
      "Detalhei que evitamos 32 mil cancelamentos e preservamos R$ 5,8 milhões em receita crítica.",
      "Reforcei que o atendimento oncológico voltou em 36 horas sem incidentes de privacidade.",
      "Expliquei que auditoria interna e ANS validaram todas as salvaguardas do Phoenix.",
      "Citei que o protocolo virou Centro de Resposta Digital com simulações trimestrais."
    ],
    extrasEn: [
      "I showed restoring 83% capacity in 61 hours with SLA 97% above pre-attack levels.",
      "I detailed avoiding 32K cancellations and preserving BRL 5.8M in critical revenue.",
      "I reinforced oncology service resuming in 36 hours with zero privacy incidents.",
      "I explained internal audit and ANS validating every Phoenix safeguard.",
      "I cited the protocol evolving into a Digital Response Center with quarterly drills."
    ]
  },
  "bias_for_action/bias_for_action_case5.js": {
    extrasPt: [
      "Mostrei que o bloqueio focalizado conteve 89% da fraude projetada, economizando R$ 2,05 milhões.",
      "Detalhei que interceptamos 312 transações irregulares com apenas 34 falsos positivos (4%).",
      "Reforcei que o NPS caiu só dois pontos e normalizou em 72 horas mesmo com a ação dura.",
      "Expliquei que em 48h corrigimos a vulnerabilidade do parceiro X e as ocorrências caíram 94% em 30 dias.",
      "Citei que o método de sinais mínimos virou trecho oficial do manual de resposta rápida."
    ],
    extrasEn: [
      "I showed the focused block containing 89% of projected fraud, saving BRL 2.05M.",
      "I detailed stopping 312 bad transactions with only 34 false positives (4%).",
      "I reinforced NPS dipping just two points and normalizing within 72 hours.",
      "I explained partner X's flaw was fixed in 48h, driving 94% fewer cases in the next month.",
      "I cited the minimal-signal playbook becoming part of the fast-response manual."
    ]
  },
  "bias_for_action/bias_for_action_case6.js": {
    extrasPt: [
      "Mostrei que concluímos o pivot em dez meses com custo final de R$ 2,8 milhões (-22%).",
      "Detalhei que reaproveitamos 60% do código e economizamos quatro squad-months de retrabalho.",
      "Reforcei que o tempo de emissão de NF-e caiu 78% para 1,8 segundo com disponibilidade de 99,7%.",
      "Expliquei que a arquitetura modular permitiu atualizar o Tax Engine em três semanas durante a reforma.",
      "Citei que o framework de riscos legislativos elevou o NPS interno de 45 para 72."
    ],
    extrasEn: [
      "I showed completing the pivot in ten months with final cost BRL 2.8M (-22%).",
      "I detailed reusing 60% of code and saving four squad-months of rework.",
      "I reinforced NF-e issuance time dropping 78% to 1.8 seconds with 99.7% availability.",
      "I explained the modular setup let us update the Tax Engine in three weeks during the reform.",
      "I cited the legislative-risk framework boosting internal NPS from 45 to 72."
    ]
  },
  "bias_for_action/bias_for_action_case7.js": {
    extrasPt: [
      "Mostrei que migramos US$ 5,2 bilhões e 1,2 milhão de clientes em 18 horas sem incidentes.",
      "Detalhei que mantivemos 99,94% de disponibilidade e barramos 127 tentativas anômalas nos 90 dias seguintes.",
      "Reforcei que evitamos R$ 310 milhões em impactos entre multas, churn e operação dual.",
      "Expliquei que o CISO reconheceu publicamente a análise contextual como superior ao protocolo padrão.",
      "Citei que a FEBRABAN passou a usar o framework de análise contextual como referência."
    ],
    extrasEn: [
      "I showed migrating USD 5.2B assets and 1.2M clients in 18 hours without incidents.",
      "I detailed sustaining 99.94% availability and blocking 127 anomalies in the next 90 days.",
      "I reinforced avoiding BRL 310M in combined fines, churn, and dual-operation costs.",
      "I explained the CISO publicly endorsed contextual analysis over the prior protocol.",
      "I cited FEBRABAN adopting the contextual-risk framework as a market reference."
    ]
  },
  "prioritizing_and_influence/prioritizing_and_influence_case1.js": {
    extrasPt: [
      "Mostrei que o B2C saltou de 1,2 para 1,87 milhão de usuários ativos (+56%) e reativou 340 mil inativos.",
      "Detalhei que o ROI da reativação foi 1.240% versus aquisição nova e gerou R$ 91 milhões extras.",
      "Reforcei que o CAC B2C ficou em R$ 67 contra R$ 1.180 no B2B, provando foco certo.",
      "Expliquei que o CLTV composto atingiu R$ 4.680 com cross-sell PIX -> investimentos.",
      "Citei que o NPS geral subiu de 61 para 74 enquanto o churn caiu para 14%."
    ],
    extrasEn: [
      "I showed B2C growing from 1.2M to 1.87M active users (+56%) and reactivating 340K dormant accounts.",
      "I detailed the reactivation ROI hitting 1,240% versus new acquisition and driving BRL 91M revenue.",
      "I reinforced B2C CAC holding at BRL 67 versus BRL 1,180 B2B, proving the focus.",
      "I explained compound CLTV reaching BRL 4,680 through PIX-to-investments cross-sell.",
      "I cited overall NPS moving 61->74 with churn dropping to 14%."
    ]
  },
  "prioritizing_and_influence/prioritizing_and_influence_case2.js": {
    extrasPt: [
      "Mostrei que digitalizamos 10 operações em 23 dias e processamos 87% das transações da rede.",
      "Detalhei que evitamos R$ 2,72 bilhões em perdas durante oito semanas de lockdown.",
      "Reforcei que a abertura de conta PJ cresceu 1.240% e a portabilidade via app subiu 890%.",
      "Expliquei que o NPS digital saltou de 58 para 81 e o churn caiu 34% graças à alternativa rápida.",
      "Citei que o framework 'Salva R$ X? Top 10? Espera 60 dias?' foi usado em quatro crises posteriores."
    ],
    extrasEn: [
      "I showed digitizing 10 operations in 23 days, covering 87% of branch transactions.",
      "I detailed saving BRL 2.72B across eight lockdown weeks.",
      "I reinforced business account onboarding growing 1,240% and salary portability up 890%.",
      "I explained digital NPS leaping from 58 to 81 with churn down 34% thanks to the quick alternative.",
      "I cited the 'Save BRL X? Top 10? Wait 60 days?' framework powering four later crisis responses."
    ]
  },
  "prioritizing_and_influence/prioritizing_and_influence_case3.js": {
    extrasPt: [
      "Mostrei que reduzir desvios para 7% liberou R$ 12 milhões em economias segundo o BID.",
      "Detalhei que o NPS interno atingiu 82 graças ao sistema integrado funcionando sem intervenção diária.",
      "Reforcei que o framework virou referência oficial para o Profisco III.",
      "Expliquei que os trade-offs de pausas temporárias evitaram desperdício em iniciativas secundárias.",
      "Citei que os dashboards consolidados criaram transparência com secretários e tribunal de contas."
    ],
    extrasEn: [
      "I showed cutting deviations to 7% unlocked BRL 12M savings per BID's evaluation.",
      "I detailed internal NPS reaching 82 because the integrated system ran autonomously.",
      "I reinforced the framework becoming Profisco III's official benchmark.",
      "I explained temporary pauses prevented waste on secondary initiatives.",
      "I cited consolidated dashboards building transparency with secretaries and auditors."
    ]
  },
  "prioritizing_and_influence/prioritizing_and_influence_case4.js": {
    extrasPt: [
      "Mostrei que o pivot elevou em 45% os leads qualificados enquanto maturávamos os robôs.",
      "Detalhei que preservamos todo o conhecimento técnico construído para o lançamento futuro.",
      "Reforcei que o trade-off de pausar receita curto prazo criou base escalável para 2026.",
      "Expliquei que os protótipos ficaram prontos sem comprometer o financeiro do ano.",
      "Citei que a priorização alinhou marketing, engenharia e operações em menos de duas semanas."
    ],
    extrasEn: [
      "I showed the pivot lifting qualified leads 45% while we matured the robot roadmap.",
      "I detailed preserving the full technical knowledge base for future launch.",
      "I reinforced that pausing short-term revenue built a scalable 2026 foundation.",
      "I explained prototypes were completed without breaking the annual budget.",
      "I cited prioritization aligning marketing, engineering, and ops within two weeks."
    ]
  },
  "prioritizing_and_influence/prioritizing_and_influence_case5.js": {
    extrasPt: [
      "Mostrei que o MVP atrasado ainda entregou 25% de adoção e churn de apenas 3%.",
      "Detalhei que a estratégia gerou R$ 50 milhões no primeiro ano mesmo com escopo enxuto.",
      "Reforcei que o NPS ficou em 78, validando a escolha por estabilidade.",
      "Expliquei que o board aprovou recursos extras ao ver o plano transparente.",
      "Citei que o case virou referência interna de gestão de crises de produto."
    ],
    extrasEn: [
      "I showed the delayed MVP still reached 25% adoption with only 3% churn.",
      "I detailed the approach generating BRL 50M in year-one revenue despite reduced scope.",
      "I reinforced NPS holding at 78, validating stability-first delivery.",
      "I explained the board approved extra funding after seeing the transparent plan.",
      "I cited the case becoming the internal reference for product-crisis management."
    ]
  },
  "prioritizing_and_influence/prioritizing_and_influence_case6.js": {
    extrasPt: [
      "Mostrei que o Next foi lançado quatro meses antes, capturando 420 mil clientes no primeiro ano.",
      "Detalhei que a receita atingiu R$ 220 milhões, 22% acima do planejado, com NPS 74 (vs 68 do Nubank).",
      "Reforcei que a Wave 2 atrasou só 2,5 meses e comitê considerou aceitável.",
      "Expliquei que o roadmap faseado reduziu risco e virou padrão em projetos digitais seguintes.",
      "Citei que o CEO apresentou o case em town-hall como benchmark de execução ágil."
    ],
    extrasEn: [
      "I showed Next launching four months early and capturing 420K clients in year one.",
      "I detailed revenue hitting BRL 220M (22% above plan) with NPS 74 versus 68 at Nubank.",
      "I reinforced Wave 2 slipping only 2.5 months, within the committee's tolerance.",
      "I explained the phased roadmap reduced risk and became standard for future digital programs.",
      "I cited the CEO highlighting the case in a town hall as the agile execution benchmark."
    ]
  }
};

const endPunctuation = new Set([".", "!", "?", "…"]);

const appendSentence = (text, extra) => {
  if (!text || !extra) return text;
  if (text.includes(extra)) return text;
  const trimmed = text.trim();
  const lastChar = trimmed.slice(-1);
  const separator = endPunctuation.has(lastChar) ? " " : ". ";
  return `${trimmed}${separator}${extra}`;
};

for (const [relativePath, extras] of Object.entries(extrasByFile)) {
  const filePath = path.join(baseDir, relativePath);
  const moduleUrl = pathToFileURL(filePath).href;
  const mod = await import(moduleUrl);
  const data = mod.default ?? mod;

  const originalContent = fs.readFileSync(filePath, "utf8");
  const constMatch = originalContent.match(/const\s+([a-zA-Z0-9_]+)\s*=/);
  if (!constMatch) {
    throw new Error(`Const declaration not found in ${relativePath}`);
  }

  const commentMatch = originalContent.match(/^\s*\/\/[^\n]*/);
  const header = commentMatch ? `${commentMatch[0]}\n` : "";
  const constName = constMatch[1];

  const fups = Array.isArray(data.fups) ? data.fups : [];
  const updatedFups = fups.map((fup, index) => ({
    ...fup,
    a: appendSentence(fup.a, extras.extrasPt[index % extras.extrasPt.length]),
    a_en: appendSentence(fup.a_en, extras.extrasEn[index % extras.extrasEn.length])
  }));

  const objectString = JSON.stringify(
    {
      ...data,
      fups: updatedFups
    },
    null,
    2
  );

  const newContent = `${header}const ${constName} = ${objectString};\n\nexport default ${constName};\n`;
  fs.writeFileSync(filePath, newContent, "utf8");
}

