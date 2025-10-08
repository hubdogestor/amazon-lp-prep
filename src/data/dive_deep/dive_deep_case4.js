// Case 4 - dive_deep
const case_4 = {
  id: "sicredi-pix-settlement",
  title: "Reducao de 47% no Tempo de Liquidacao de Pagamentos PIX",
  title_pt: "Reducao de 47% no Tempo de Liquidacao de Pagamentos PIX",
  title_en: "47% Reduction in PIX Payment Settlement Time",
  company: "Sicredi",
  period: "03/2020-08/2020",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: `Quando passei a liderar o produto PIX a liquidação media chegou a 4,2h (limite Bacen 3h). Um merchant de R$2M/mês ameaçou sair, NPS caiu para 32 e havia risco de multas caso nao reduzissemos em 60 dias. As equipes discutiam causas diferentes e nao havia mapa de latencia ponta a ponta.`,
    t: `Eu precisava reduzir a media para <2h, manter p95 <3h, evitar multas e reter o merchant sem estourar o orcamento de cloud.`,
    a: `Mapeei sistemas e criacao de timestamps em cada etapa para medir fila e processamento. Identifiquei fila sequencial no motor de fraude concentrando a maior parte da latencia enquanto CPU estava baixa. Reorganizei fluxo em trilhas rapida/media/alta priorizando 80% das transacoes em caminho mais leve. Reprocessei amostra historica e conduzi POC em staging antes do rollout gradual. Adicionei dashboard com p50/p95, backlog de fila e taxa de falsos positivos com alertas automaticos.`,
    r: `Em pouco mais de um mes a media caiu de 4,2h para 2,2h (-47%) e o p95 para 2,9h; falsos positivos ficaram em 0,4%. O merchant permaneceu, churn reduziu, NPS subiu para 68 e nao tivemos multas. Mecanismo de alerta criou respostas mais rapidas e replicamos abordagem em outros fluxos.`,
    l: `Aprendi que sem instrumentar cada etapa lideres discutem opinioes e nao causas. Hoje sempre crio rastreabilidade, testo arquitetura em replay controlado e so considero resolvido apos estabilidade sem regressao.`
  },
  en: {
    s: `When I took over PIX settlement average time had reached 4.2h (limit 3h). A BRL 2M/month merchant was ready to leave, NPS had fallen to 32 and fines were possible if we didn’t recover in 60 days. Teams disagreed on causes and no end‑to‑end latency map existed.`,
    t: `I needed to bring average below 2h, keep P95 under 3h, avoid fines and retain the merchant without blowing the cloud budget.`,
    a: `I mapped each system and inserted timestamps at every hop to measure queue plus processing. Found a sequential fraud queue driving most delay while CPU was low. I restructured flow into fast/medium/high lanes so 80% of transactions bypassed heavier checks. Replayed historical samples, ran a staging POC, then gradual rollout. Added a dashboard (p50/p95, queue backlog, false-positive rate) and alerting.`,
    r: `Within just over a month average fell from 4.2h to 2.2h (-47%) and P95 to 2.9h; false positives held at 0.4%. Merchant stayed, churn dropped, NPS rose to 68 and no fines occurred. The alert mechanism sped responses and we replicated the approach in other payment flows.`,
    l: `I learned that without instrumentation leaders debate opinions not causes. Now I always create traceability, test architecture with controlled replay, and only close the issue after stable regression-free performance.`
  },
  fups: [
    {
      q: "Como voce convenceu o diretor de Fraude a aceitar a nova arquitetura?",
      a: "Mostrei o funil com 65% da latencia na fila sequencial e apresentei arquitetura, riscos e rollback. Fiquei claro que mais servidores nao resolveriam o problema.",
      q_en: "How did you convince the fraud director to adopt the new architecture?",
      a_en: "I showed the funnel with 65% of latency in the sequential queue and presented architecture, risk, and rollback plans. It was clear more servers would not fix it." 
    },
    {
      q: "Quais metricas voce monitora hoje para garantir que o SLA nao volte a estourar?",
      a: "P50, p95, backlog de fila, taxa de falsos positivos e alertas para filas acima de 120 minutos. Cada alerta abre incidente com SLA de 2h.",
      q_en: "Which metrics do you monitor today to keep the SLA healthy?",
      a_en: "P50, P95, queue backlog, false-positive rate, and alerts whenever a queue exceeds 120 minutes. Each alert triggers a two-hour SLA incident." 
    },
    {
      q: "Como voce garantiu que o novo modelo nao aumentasse falsos positivos?",
      a: "Balanceei o dataset, monitorei precision/recall, rodei shadow mode por 10 dias e so promovi quando falsos positivos ficaram abaixo de 0,5%.",
      q_en: "How did you ensure the new model did not increase false positives?",
      a_en: "I balanced the dataset, tracked precision/recall, ran 10 days in shadow mode, and only promoted when false positives stayed below 0.5%." 
    },
    {
      q: "Qual foi o plano de comunicacao com merchants criticos?",
      a: "Contato proativo com os 50 maiores, explicacao do novo SLA, canal VIP e follow-up semanal ate NPS superar 60.",
      q_en: "What communication plan did you adopt with critical merchants?",
      a_en: "Proactive outreach to the top 50 merchants, explanation of the new SLA, a VIP channel, and weekly follow-ups until NPS stayed above 60." 
    },
    {
      q: "Como voce priorizou backlog sem prejudicar outras frentes?",
      a: "Mapeei OKRs, pausei itens nao criticos, negociei com marketing e compliance e mostrei o custo de inercia (multas + churn). Consegui squad dedicado por 45 dias.",
      q_en: "How did you prioritize the backlog without hurting other workstreams?",
      a_en: "I mapped OKRs, paused non-critical items, negotiated with marketing and compliance, and showed the cost of inaction (fines + churn). I secured a dedicated squad for 45 days." 
    },
    {
      q: "Quais testes voce executou antes do rollout final?",
      a: "POC em staging com 50k transacoes, A/B controlado em 10% do volume e monitoramento ao vivo por 48h antes do rollout total.",
      q_en: "What tests did you run before the full rollout?",
      a_en: "Staging POC with 50K transactions, a controlled A/B on 10% of traffic, and live monitoring for 48 hours before full rollout." 
    },
    {
      q: "Como voce protegeu a experiencia dos clientes classificados como alto risco?",
      a: "Mantive fallback manual com SLA de 2h e scripts de atendimento dedicados para merchants premium, garantindo transparencia sem atritos.",
      q_en: "How did you protect the experience of high-risk customers?",
      a_en: "I kept a manual fallback with a two-hour SLA and dedicated support scripts for premium merchants, ensuring transparency without friction." 
    },
    {
      q: "Que mecanismo impede novas mudancas de degradarem o SLA?",
      a: "Toda mudanca passa por teste de carga, comparacao de p95 e aprovacao minha + CTO antes do deploy. Alertas monitoram cada release por 48h.",
      q_en: "What mechanism keeps future changes from degrading the SLA?",
      a_en: "Every change goes through load testing, P95 comparison, and my + CTO approval before deployment. Alerts monitor each release for 48 hours." 
    },
    {
      q: "Como voce reaproveitou o aprendizado em outros fluxos?",
      a: "Documentei o playbook e repliquei em TED e boleto, reduzindo o tempo medio em 28% em 90 dias.",
      q_en: "How did you reuse the learning in other flows?",
      a_en: "I documented the playbook and replicated it for wire transfers and boleto, cutting average time by 28% within 90 days." 
    },
    {
      q: "Qual a principal licao que voce leva para entrevistas da Amazon?",
      a: "Converter conflito em mecanismo se tornou regra. Quando um SLA esta em risco, eu controlo o fluxo, convenco com dados e deixo alertas e runbooks em producao para evitar regressao.",
      q_en: "What is the key lesson you bring to Amazon interviews?",
      a_en: "Turning conflict into mechanisms is non-negotiable. When an SLA is at risk I control the flow, convince with data, and leave alerts and runbooks in production to prevent regression." 
    }
  ]
};

export default case_4;







