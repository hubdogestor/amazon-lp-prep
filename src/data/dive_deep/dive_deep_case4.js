const case_4 = {
  id: "sicredi-pix-settlement",
  title: "Reducao de 47% no Tempo de Liquidacao de Pagamentos PIX",
  title_pt: "Reducao de 47% no Tempo de Liquidacao de Pagamentos PIX",
  title_en: "47% Reduction in PIX Payment Settlement Time",
  company: "Sicredi",
  period: "03/2020-08/2020",
  isTopCase: false,
  isGoodCase: true, // Updated from false to true after review
  pt: {
    s: `Quando assumi o produto PIX no Sicredi, a liquidação média de pagamentos havia estourado para 4.2 horas — 40% acima do limite regulatório de 3 horas do Banco Central. Às 14h37 de uma terça-feira, recebi a ligação que nenhum PM quer receber: o maior merchant da carteira, processando R$2 milhões por mês, ameaçou publicamente nos abandonar. O NPS havia despencado para 32, e a empresa tinha exatos 60 dias para resolver ou enfrentar multas pesadas do BCB e dano irreparável à reputação no lançamento do PIX. O pior: engenharia e fraude apontavam culpados diferentes, e ninguém tinha um mapa da latência de ponta a ponta.`,
    t: `Diante desse caos e da ameaça de multas iminentes, eu me tornei o single-threaded owner com a missão de evitar o desastre. Meu compromisso com o CTO era claro: em 45 dias, eu iria pessoalmente diagnosticar a causa raiz, reduzir o tempo médio de liquidação para menos de 2 horas, manter o p95 abaixo de 3 horas, reter o merchant crítico e fazer tudo isso sem estourar o orçamento de nuvem da empresa.`,
    a: `Para dissecar o problema, eu mergulhei nos logs. Instrumentei pessoalmente cada um dos 7 microsserviços do fluxo de pagamento, inserindo timestamps para criar o primeiro mapa de latência ponta a ponta que a empresa já teve. Minha análise de 1.2 milhão de transações revelou o gargalo: 65% do tempo era consumido em uma fila sequencial no motor de fraude, que operava com baixa utilização de CPU. Com essa evidência, eu desenhei uma nova arquitetura de 'fast lanes', priorizando 80% das transações de baixo risco em um caminho mais leve. Para convencer o cético diretor de Fraude, eu modelei o impacto financeiro da latência e apresentei um plano de rollback detalhado. Após conseguir seu buy-in, eu formei e liderei um squad dedicado de 5 engenheiros, reprocessei uma amostra histórica para validar a tese, conduzi uma PoC em staging e, finalmente, implementei o rollout gradual. Para garantir que o problema nunca mais voltasse, eu criei um dashboard em tempo real com métricas de p50/p95, backlog da fila e taxa de falsos positivos, com alertas automáticos que me notificavam diretamente no Slack.`,
    r: `O resultado do meu plano foi imediato. Em apenas 38 dias, a liquidação média despencou de 4.2 para 2.2 horas, uma redução de 47%, com o p95 caindo para 2.9 horas, bem dentro do limite regulatório. A taxa de falsos positivos se manteve estável em 0.4%. O merchant crítico não apenas permaneceu, como aumentou seu volume em 15%. O NPS da carteira PIX saltou de 32 para 68. Evitei que a empresa sofresse multas do Banco Central e o churn de merchants caiu 22% no trimestre seguinte. O mecanismo de alerta que eu criei se tornou o padrão para todos os fluxos de pagamento da cooperativa.`,
    l: `Esse caso me ensinou que, em uma crise, um líder não pode delegar a investigação; é preciso mergulhar nos dados para transformar opiniões conflitantes em uma causa raiz incontestável. Desde então, eu internalizei um playbook de três passos para resolver qualquer crise de latência: 1) Instrumentar tudo de ponta a ponta antes de discutir soluções; 2) Isolar o gargalo com dados e modelar o impacto da solução antes de codificar; 3) Deixar para trás um mecanismo de monitoramento e alertas que garanta que o problema nunca mais ocorra. Repliquei esse playbook em TED e boleto no Sicredi, reduzindo o tempo médio em 28% e 34% respectivamente em 90 dias, evitando R$ 8.7 milhões em perdas operacionais. Foi assim que transformei um conflito entre áreas em um sistema resiliente e replicável.`
  },
  en: {
    s: `When I took over the PIX product, the average payment settlement time had exploded to 4.2 hours, 40% above the Central Bank\'s 3-hour regulatory limit. One of our largest merchants, processing BRL 2 million per month, publicly threatened to leave us, the NPS plummeted to 32, and we had 60 days to fix the problem or face heavy fines and irreparable damage to Sicredi\'s reputation at the launch of PIX. The worst part was that the engineering and fraud teams were pointing fingers at each other, and no one had an end-to-end latency map.`,
    t: `Faced with this chaos, I became the single-threaded owner with the mission to avert disaster. My commitment to the CTO was clear: within 45 days, I would personally diagnose the root cause, reduce the average settlement time to under 2 hours, keep the p95 below 3 hours, retain the critical merchant, and do it all without blowing our cloud budget.`,
    a: `To dissect the problem, I dove into the logs. I personally instrumented each of the 7 microservices in the payment flow, inserting timestamps to create the first end-to-end latency map the company had ever seen. My analysis of 1.2 million transactions revealed the bottleneck: 65% of the time was consumed in a sequential queue in the fraud engine, which was operating at low CPU utilization. With this evidence, I designed a new \'fast lanes\' architecture, prioritizing 80% of low-risk transactions on a lighter path. To convince the skeptical Fraud director, I modeled the financial impact of the latency and presented a detailed rollback plan. After getting his buy-in, I led a dedicated squad, reprocessed a historical sample to validate the thesis, conducted a PoC in staging, and finally, implemented the gradual rollout. To ensure the problem never returned, I created a real-time dashboard with p50/p95 metrics, queue backlog, and false-positive rates, with automatic alerts that notified me directly on Slack.`,
    r: `The result of my plan was immediate. In just 38 days, the average settlement time plummeted from 4.2 to 2.2 hours, a 47% reduction, with the p95 dropping to 2.9 hours, well within the regulatory limit. The false-positive rate remained stable at 0.4%. The critical merchant not only stayed but increased their volume by 15%. The PIX portfolio NPS jumped from 32 to 68. We avoided the Central Bank fines, and merchant churn dropped by 22% the following quarter. The alert mechanism I created became the standard for all payment flows.`,
    l: `This case taught me that in a crisis, a leader cannot delegate the investigation; you have to dive into the data to turn conflicting opinions into an indisputable root cause. Since then, I have internalized a three-step playbook to resolve any latency crisis: 1) Instrument everything end-to-end before discussing solutions; 2) Isolate the bottleneck with data and model the solution\'s impact before coding; 3) Leave behind a monitoring and alerting mechanism that ensures the problem never happens again. That\'s how I turned a conflict between departments into a resilient and replicable system.`
  },
  fups: [
    {
      q: "Qual foi o maior erro que você cometeu durante essa crise e o que você aprendeu com ele?",
      a: "Meu maior erro foi ter confiado nos relatórios iniciais das equipes por quase uma semana, o que atrasou minha própria investigação. Eu presumi que eles tinham os dados, mas eles tinham apenas opiniões. Aprendi da maneira mais difícil que, como líder, eu sou o responsável final pela verdade. Hoje, minha primeira ação em qualquer crise é pedir acesso bruto aos logs. Eu confio, mas sempre verifico com minhas próprias queries.",
      q_en: "What was the biggest mistake you made during this crisis, and what did you learn from it?",
      a_en: "My biggest mistake was trusting the initial team reports for almost a week, which delayed my own investigation. I assumed they had data, but they only had opinions. I learned the hard way that as a leader, I am ultimately responsible for the truth. Today, my first action in any crisis is to request raw log access. I trust, but I always verify with my own queries."
    },
    {
      q: "Como voce convenceu o diretor de Fraude a aceitar a nova arquitetura?",
      a: "Mostrei o funil com 65% da latencia na fila sequencial e apresentei arquitetura, riscos e rollback. Deixei claro que escalar horizontalmente com mais servidores nao resolveria o problema de processamento sequencial.",
      q_en: "How did you convince the fraud director to adopt the new architecture?",
      a_en: "I showed the funnel with 65% of latency in the sequential queue and presented the architecture, risks, and rollback plans. I made it clear that horizontally scaling with more servers would not solve the sequential processing problem."
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
      a_en: "How did you reuse the learning in other flows?",
      a_en: "I documented the playbook and replicated it for wire transfers and boleto, cutting average time by 28% within 90 days."
    }
  ]
};

export default case_4;

