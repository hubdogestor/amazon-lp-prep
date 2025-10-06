// Case 1 - ownership
const case_1 = {
  id: "hsbc-migration-leadership",
  title: "Liderança da Migração de US$ 5.2B de Ativos e Contas",
  title_pt: "Liderança da Migração de US$ 5.2B de Ativos e Contas",
  title_en: "Leadership of US$ 5.2B Assets and Accounts Migration",
  company: "HSBC",
  period: "05/2015-06/2016",
  isTopCase: false,
  pt: {
    s: `Eu recebi o e-mail urgente do CFO com o assunto "Deal em risco" e o relatório do BACEN. Ele apontava 17 falhas de controle, 94 mil contas sem validação FATCA e um NPS premium despencando de 71 para 52. Eu tinha 18 meses até o closing da venda do HSBC Brasil para o Bradesco (US$ 5,2B) e ninguém assumia a migração de 2,7M de contas e US$ 3,2B em ativos. Quando eu provoquei os diretores de Operações, Compliance, TI e Comercial, cada um alegou que o problema era de outra área enquanto clientes priority ameaçavam retirar recursos.`,
    t: `Mesmo com mandato formal restrito ao PMO de transformação digital, eu subi na reunião do comitê executivo e me declarei owner único dessa transição. Eu estabeleci metas explícitas: migrar 100% das contas sem perdas de dados, manter churn HNWI abaixo de 0,5%, recuperar o NPS premium para acima de 70 e fechar todas as auditorias BACEN/IRS sem ressalvas. Eu recusei a pressão do board por encurtar o cronograma de 18 para 12 meses sem reforçar controles e ofereci um roadmap com gates objetivos que eu pessoalmente desbloquearia.`,
    a: `Eu redesenhei a governança em quatro frentes (dados, compliance, cliente, tecnologia) e passei a operar um war room diário como single-threaded leader. (1) Eu modelei o risco financeiro/regulatório em cenários: multa potencial de R$ 110M, custo de remediação de até R$ 180M e perda anual de US$ 58M caso 20% da base HNWI churnasse; usei o modelo para garantir com o CFO um buffer de R$ 9,5M dedicado a controles críticos. (2) Eu montei um mecanismo de monitoramento: extraí 2,3TB de logs de sete sistemas, normalizei em Python e construí no Tableau um painel diário com 28 indicadores (RPO/RTO, reconciliação FATCA, variação de saldo migrado, reclamações premium) que eu apresentava ao BACEN e ao IRS toda sexta-feira. (3) Eu tracei um programa de retenção um-a-um: liguei pessoalmente para 60 dos 200 maiores HNWIs, criei scripts com os leads comerciais e disponibilizei um canal seguro 24/7; reduzi tickets críticos por semana de 37 para 11. (4) Eu enfrentei resistência direta do diretor de Compliance quando ele travou 12 mil contas por falta de biometria; eu fui a Brasília, coapresentei o plano com o diretor do BACEN, obtive carta de não objeção e automatizei a checagem com reconhecimento facial (falso positivo caiu de 4,3% para 0,8%).`,
    r: `Eu conduzi oito ondas de migração dentro do cronograma original de 18 meses com zero incidentes críticos e 99,98% de precisão de dados (benchmark global: 99,85%). Eu recuperei o NPS premium de 52 para 78 em 120 dias, mantive o churn HNWI em 0,3% diante da meta máxima de 0,5% e garanti que 92% dos clientes citassem comunicação proativa nas pesquisas pós-migração. Eu eliminei 94 mil pendências FATCA, passei por seis auditorias BACEN/IRS sem ressalvas e capturei R$ 46M em sinergias antecipadas liberando cross-sell dois meses antes. Eu recebi o prêmio global de Operational Excellence e transformei o mecanismo de governança em template para três integrações subsequentes do HSBC.`,
    l: `Eu aprendi que ownership verdadeiro exige segurar o volante até em espaços que ninguém lhe deu. Eu comprovei que integrações de alto risco pedem narrativa regulatória, proteção de clientes premium e mecanismos que continuem rodando quando o projeto acaba. Eu transformei esse caso no meu playbook pessoal para qualquer migração crítica.`,
  },
  en: {
    s: `I received the CFO urgent email titled "Deal at risk" with the BACEN report attached. It listed 17 control gaps, 94K accounts without FATCA validation, and premium NPS dropping from 71 to 52. I was 18 months away from closing the US$5.2B HSBC Brazil sale to Bradesco and no one owned the migration of 2.7M accounts and US$3.2B in assets. When I pressed the Operations, Compliance, IT, and Commercial directors, each deflected responsibility while priority clients threatened to pull assets.`,
    t: `Even though my formal remit was the digital transformation PMO, I took the floor in the executive steering committee and declared myself the single-threaded owner of the transition. I set explicit goals: migrate 100% of accounts with zero data loss, keep HNWI churn below 0.5%, bring premium NPS back above 70, and close every BACEN/IRS audit with no findings. I pushed back on the board request to compress the timeline from 18 to 12 months without hardening controls and presented a gated roadmap that I would personally unblock.`,
    a: `I redesigned governance across four streams (data, compliance, customer, technology) and ran a daily war room as the single-threaded leader. (1) I built financial/regulatory risk scenarios: potential BACEN fines up to R$110M, remediation cost up to R$180M, and annual revenue loss of US$58M if 20% of HNWIs churned; I used the model to secure a R$9.5M control buffer from the CFO. (2) I created a monitoring mechanism: pulled 2.3TB of logs from seven systems, normalized them in Python, and built a Tableau dashboard with 28 daily indicators (RPO/RTO, FATCA reconciliation, migrated balance variance, premium complaints) that I reviewed with BACEN and IRS every Friday. (3) I designed a one-to-one retention program: personally called 60 of the top 200 HNWIs, co-created scripts with commercial leads, and opened a 24/7 secure channel; critical tickets per week fell from 37 to 11. (4) I faced direct resistance from the Compliance director when he froze 12K accounts over biometrics; I flew to Brasília, co-presented the mitigation plan with the BACEN director, obtained the no-objection letter, and embedded facial-recognition checks in the automation (false positives dropped from 4.3% to 0.8%).`,
    r: `I led eight migration waves on the original 18-month schedule with zero critical incidents and 99.98% data accuracy (global benchmark 99.85%). I lifted premium NPS from 52 to 78 within 120 days, held HNWI churn at 0.3% versus the 0.5% cap, and ensured 92% of clients cited proactive communication in the post-migration survey. I cleared 94K FATCA backlogs, passed six BACEN/IRS audits with no findings, and unlocked R$46M in early synergies by enabling cross-sell two months ahead of plan. I received the global Operational Excellence award and turned the governance mechanism into the template for three subsequent HSBC integrations.`,
    l: `I learned that true ownership means grabbing the wheel even in spaces no one hands to you. I proved that high-stakes integrations demand regulatory storytelling, premium-client protection, and mechanisms that keep running after the project ends. I now treat this playbook as the default for any critical migration.`,
  },
  fups: [
    {
      "q": "Como estruturou o modelo de risco financeiro/regulatório que convenceu o CFO?",
      "a": "Eu mapeei multas e consent decrees do BACEN e do IRS ao longo de 10 anos, combinei com benchmarks da McKinsey para fusões e aquisições bancárias e com dados internos de churn/receita. Eu estruturei os cenários em fluxo de caixa descontado que mostrava ROI de 4,8:1 ao priorizar controles e validei com Risco e Auditoria antes da apresentação final.",
      "q_en": "How did you structure the financial/regulatory risk model that convinced the CFO?",
      "a_en": "I mapped BACEN and IRS fines and consent decrees across 10 years, combined them with McKinsey banking mergers-and-acquisitions benchmarks and our churn/revenue data, structured the scenarios in a discounted cash-flow model showing a 4.8:1 ROI, and validated it with Risk and Audit before the final presentation."
    },
    {
      "q": "Quais mecanismos usou para garantir disciplina diária no war room?",
      "a": "Eu defini três ritos fixos: daily de 15 minutos só com owners, review às 18h comigo e com o COO e um relatório de bloqueios enviado a todo C-Level a cada 48h. Quando um gate ameaçava escorregar, eu marcava decisão em 24h com dados e opções de trade-off.",
      "q_en": "Which mechanisms kept daily discipline inside the war room?",
      "a_en": "I enforced three rituals: a 15-minute daily with owners only, a 6pm indicator review with the COO and me, and a 48-hour blocker report to the entire C-level. If any gate slipped, I scheduled a decision meeting within 24 hours with data and trade-off options."
    },
    {
      "q": "Como lidou com a resistência do board em reduzir o cronograma?",
      "a": "Eu usei o risk model para mostrar perda esperada de R$ 188M caso acelerássemos sem controles. Eu propus milestones adicionais (cyber, FATCA, customer readiness) com critérios binários de go/no-go e ofereci updates semanais ao board. Quando viram cada gate acompanhado de mitigação, desistiram do atalho.",
      "q_en": "How did you handle board resistance about keeping the longer schedule?",
      "a_en": "I used the risk model to show an expected R$188M loss if we accelerated without controls, proposed extra milestones (cyber, FATCA, customer readiness) with binary go/no-go criteria, and offered weekly board updates. Once they saw each gate paired with mitigation, the shortcut push ended."
    },
    {
      "q": "Que evidências apresentou ao BACEN para obter a carta de não objeção?",
      "a": "Eu levei trilha de auditoria dos testes biométricos, logs da automação com 1,2M eventos, matriz de segregação de funções e simulações de fraude. Eu também apresentei plano de fallback manual com SLA de 4h para exceções, comprovando resiliência e aderência à Resolução 4.753.",
      "q_en": "Which evidence did you bring to BACEN to secure the no-objection letter?",
      "a_en": "I presented the biometric testing audit trail, automation logs covering 1.2M events, the segregation-of-duties matrix, and fraud simulations, plus a manual fallback plan with a 4-hour SLA, proving resilience and compliance with Resolution 4.753."
    },
    {
      "q": "Como garantiu retenção dos clientes HNWI na prática?",
      "a": "Eu segmentei os 200 maiores HNWIs em três perfis, atribuí um executivo dedicado por cluster e criei scripts personalizados. Eu conduzi 60 ligações, monitorei sentiment com análise de texto e acionei ofertas preventivas como waiver de tarifas e assessoria tributária, mantendo churn em 0,3%.",
      "q_en": "How did you ensure HNWI retention in practice?",
      "a_en": "I segmented the top 200 HNWIs into three profiles, assigned a dedicated executive per cluster, created tailored scripts, personally handled 60 calls, tracked sentiment via text analytics, and triggered proactive offers such as fee waivers and tax advisory, keeping churn at 0.3%."
    },
    {
      "q": "De que forma monitorou a qualidade dos dados migrados?",
      "a": "Eu implementei batidas diárias em 12 controles: reconciliação saldo versus ledger, duplicidade de conta, compliance FATCA, divergência cadastral e antifraude. Qualquer desvio acima de 0,05% acionava um squad de correção em 12h. A precisão final ficou em 99,98%.",
      "q_en": "How did you monitor migrated data quality?",
      "a_en": "I ran daily checks on 12 controls—balance versus ledger reconciliation, duplicate-account detection, FATCA compliance, registration mismatches, and fraud flags. Any deviation above 0.05% triggered a correction squad within 12 hours, keeping accuracy at 99.98%."
    },
    {
      "q": "Qual foi o mecanismo para antecipar sinergias em dois meses?",
      "a": "Eu criei um readiness score por segmento liberando cross-sell somente quando compliance, dados e comunicação estavam verdes. Ao automatizar o score no CRM, eu habilitei 320 mil contas dois meses antes e gerei R$ 46M em sinergias de cartão, investimento e seguros.",
      "q_en": "What mechanism let you unlock synergies two months early?",
      "a_en": "I built a readiness score per segment that only enabled cross-sell once compliance, data, and communication were green. Automating it in the CRM activated 320K accounts two months early and yielded R$46M in card, investment, and insurance synergies."
    },
    {
      "q": "Como manteve o time engajado durante 18 meses de pressão constante?",
      "a": "Eu estabeleci reconhecimento semanal com métricas visíveis, rodei responsabilidades a cada seis semanas para evitar burnout e reservei 10% da capacidade para melhoria contínua proposta pelo time. O turnover ficou em 1,8%, metade da média global do HSBC.",
      "q_en": "How did you keep the team engaged during 18 months of pressure?",
      "a_en": "I set up a weekly recognition loop with visible metrics, rotated responsibilities every six weeks to avoid burnout, and reserved 10% capacity for continuous-improvement ideas from the team. Turnover stayed at 1.8%, half the HSBC global average."
    },
    {
      "q": "Que lição levou para outras integrações após o prêmio de Operational Excellence?",
      "a": "Eu carreguei dois mecanismos: o painel de risco quase em tempo real e o readiness score para liberar sinergias. Em cada nova integração eu repliquei gates com métricas tangíveis e canal direto com reguladores, reduzindo em 23% o tempo de decisão crítica.",
      "q_en": "Which lesson did you carry into other integrations after the Operational Excellence award?",
      "a_en": "I carried two mechanisms: the near-real-time risk dashboard and the readiness score to release synergies. In subsequent integrations I replicated the gated metrics and direct regulator channel, cutting critical decision time by 23%."
    },
    {
      "q": "Se repetisse a migração hoje, o que ajustaria?",
      "a": "Eu iniciaria automação de analytics desde a onda piloto; no programa original os modelos preditivos só chegaram no mês três. Com monitoramento preditivo desde o início, eu reduziria ainda mais esforço manual de war room.",
      "q_en": "If you had to run the migration again today, what would you adjust?",
      "a_en": "I would introduce analytics automation from the pilot wave; in the original program predictive models only arrived in month three. Starting with predictive monitoring would cut even more manual war-room effort."
    }
  ]
};

export default case_1;
