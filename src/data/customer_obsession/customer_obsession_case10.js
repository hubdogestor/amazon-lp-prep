const case_10 = {
  id: "payment-simplification-high-impact-co10",
  title: "Inventei motor de simplificação de liquidez que reduziu D+3 para D+0 em marketplaces",
  title_pt: "Inventei motor de simplificação de liquidez que reduziu D+3 para D+0 em marketplaces",
  title_en: "Invented liquidity simplification engine that moved settlements from D+3 to D+0",
  company: "Bradesco Fintech Hub",
  period: "04/2017-12/2017",
  keywords: "#inventar-motor | #simplificação | #d+0 | #liquidez | #marketplace",
  isTopCase: true,
  isGoodCase: true,
  pt: {
    s: "Em 2017, como Product Owner de Liquidez no Bradesco Fintech Hub, recebi um alerta crítico do CEO do nosso maior cliente: “Vou migrar para a Stone, eles pagam no mesmo dia.” Nossa liquidação ainda operava em D+3, enquanto concorrentes como Stone e PagSeguro já ofereciam D+0. Em três meses, perdemos 23% da base, o NPS caiu para 29, e R$ 2,4 bilhões em volume transacionado estavam em risco. Se não agíssemos, a unidade de marketplaces entraria em colapso em até seis meses. Priorizei o problema porque a dor do cliente era urgente, clara e colocava em risco nosso core business.",
    t: "Recebi a missão de entregar D+0 para pelo menos 80% do volume de pagamentos, manter os chargebacks abaixo de 0,35% e reposicionar a plataforma como referência em liquidez simples e confiável. Minha responsabilidade era equilibrar simplificação técnica com segurança operacional e reconquistar a confiança dos clientes.",
    a: "Transformei a crise em uma oportunidade para agir com obsessão pelo cliente. Primeiro, entrevistei os 20 maiores lojistas e descobri que 78% apontavam previsibilidade de caixa como o principal motivo de churn. Criei o 'Settlement Graph' — um modelo de decisão em tempo real que categorizava transações por risco com base em histórico, padrão de vendas e inadimplência. Ao simular mais de 2 milhões de transações, descobri que 73% poderiam ser liquidadas no mesmo dia sem comprometer a segurança. Com base nisso, liderei três squads para redesenhar a arquitetura do motor de conciliação: removi 19 das 27 integrações legadas, implementei cache distribuído e filas assíncronas, reduzindo a latência para 200 ms. Ao enfrentar resistência do comitê de risco, preparei cenários de exposição comparando perdas esperadas em D+3 vs. receita retida com D+0. Propus um fundo de garantia de R$ 8 milhões sob minha gestão direta, com auditoria externa semanal. A proposta foi aprovada por unanimidade após duas sessões.",
    r: "Em oito meses, atingimos D+0 para 82% do volume. O NPS subiu de 29 para 71, o churn caiu 4,5 pontos e retivemos R$ 2,4 bilhões em volume transacionado. A nova arquitetura reduziu reconciliações tardias em 48%, aumentou a eficiência em 18% frente a bancos digitais equivalentes e gerou R$ 19 milhões em receita incremental com economia de R$ 7,4 milhões. A solução foi expandida para cartões corporativos e pagamentos cross-border, elevando o D+0 em 36% no ano seguinte. Mais do que performance técnica, o modelo reconectou a empresa à dor do cliente e transformou liquidez em diferencial competitivo.",
    l: "Aprendi que agir com obsessão pelo cliente exige escutar ativamente a dor real — neste caso, a incerteza de caixa — e redesenhar processos a partir dela. O 'Settlement Graph' mostrou que é possível simplificar sem perder controle. Desde então, uso esse framework para avaliar produtos: ouvir o cliente, remover camadas desnecessárias e criar mecanismos seguros para decisões mais rápidas."
  },
  en: {
    s: "In 2017, as Product Owner for Liquidity at Bradesco Fintech Hub, I received a critical alert from our largest client’s CEO: “We’re switching to Stone—they pay same-day.” Our settlement ran on D+3 while competitors like Stone and PagSeguro offered D+0. In one quarter, we lost 23% of clients, NPS dropped to 29, and BRL 2.4 billion in TPV was at risk. If nothing changed, the marketplace business would collapse within six months. I prioritized the issue because customer pain was urgent, measurable, and core to our business model.",
    t: "I was tasked with delivering D+0 for at least 80% of payment volume, keeping chargebacks under 0.35%, and repositioning the platform as a reliable, simple liquidity engine. My job was to balance technical simplification with operational risk control while restoring customer trust.",
    a: "I turned the crisis into a Customer Obsession opportunity. I first interviewed our top 20 merchants and found that 78% cited cash predictability as their top reason for churning. I created the 'Settlement Graph' — a real-time risk model classifying transactions by history, patterns, and delinquency. Simulating over 2 million transactions revealed 73% could be settled same-day without increasing risk. I led three squads to redesign the reconciliation engine: removed 19 of 27 legacy integrations, implemented distributed cache and async queues, reducing latency to 200 ms. When the risk committee resisted, I presented loss vs. retention scenarios using three years of TPV. I proposed an internal BRL 8M guarantee fund under my ownership, with independent weekly audits. The proposal was unanimously approved after two sessions.",
    r: "In eight months, we reached D+0 for 82% of payment volume. NPS rose from 29 to 71, churn dropped 4.5 points, and we retained BRL 2.4B in TPV. The new system cut late reconciliations by 48%, delivered 18% higher efficiency than digital peers, and generated BRL 19M in incremental revenue and BRL 7.4M in savings. The solution scaled to corporate cards and cross-border payments, growing D+0 share by 36% the following year. More than performance, the solution reconnected the company with real customer pain and turned liquidity into a competitive edge.",
    l: "I learned that Customer Obsession starts with listening deeply to real pain—like cash unpredictability—and redesigning from there. The 'Settlement Graph' proved you can simplify without losing control. I now use this approach to assess products: start from the voice of the customer, eliminate friction, and build secure systems that enable faster, trusted decisions."
  },
  fups: [
    {
      "q": "Qual foi seu maior erro ou falha neste caso?",
      "a": "Inicialmente apontei D+0 como objetivo único sem considerar exceções regulatórias; precisei recalibrar o algoritmo para contas corporativas com restrição de SLA. Quantifiquei que atingimos D+0 em 82% do volume com NPS subindo de 29 para 71.",
      "q_en": "What was your biggest mistake or failure in this case?",
      "a_en": "At first I set D+0 as a single goal ignoring regulatory exceptions; I later recalibrated the algorithm for corporate accounts with SLA restrictions. I quantified reaching D+0 for 82% of volume with NPS rising from 29 to 71."
    },
    {
      "q": "O que você faria diferente hoje?",
      "a": "Iniciaria a comunicação com o comitê de risco já no discovery, criando patrocínio antecipado e evitando duas semanas de atraso na aprovação final. Mostrei que retivemos R$ 2,4 bilhões em TPV e reduzimos churn em 4,5 pontos percentuais.",
      "q_en": "What would you do differently today?",
      "a_en": "I would engage the risk committee during discovery, building early sponsorship and avoiding the two-week delay before final approval. I showed retaining BRL 2.4B in TPV while churn dropped 4.5 points."
    },
    {
      "q": "Qual foi o obstáculo mais difícil de superar?",
      "a": "Convencer o comitê de risco de que a liquidez instantânea traria mais governança, não menos; usei projeções de receita e dados de inadimplência para mudar a narrativa. Detalhei os R$ 19 milhões de receita incremental e R$ 7,4 milhões em economia anual.",
      "q_en": "What was the hardest obstacle to overcome?",
      "a_en": "Convincing the risk committee that instant liquidity improved governance, not jeopardized it; I used revenue projections and delinquency data to shift the narrative. I detailed BRL 19M in incremental revenue plus BRL 7.4M in annual savings."
    },
    {
      "q": "Quais foram os principais riscos e como você os mitigou?",
      "a": "Chargeback e exposição financeira; implantei cap de 0,07 % do TPV, auditoria independente e simulações semanais de stress financeiro. Reforcei a queda de 48% nas reconciliações tardias após simplificar 27 integrações para oito módulos.",
      "q_en": "What were the main risks and how did you mitigate them?",
      "a_en": "Chargeback and financial exposure; I implemented a 0.07 % TPV cap, independent audits and weekly financial stress tests. I reinforced late reconciliation incidents falling 48% after simplifying 27 integrations into eight modules."
    },
    {
      "q": "Que dados você usou e qual foi a racional de cálculo?",
      "a": "Examinei 2,1 milhões de transações históricas, modelei curvas de risco e calculei cut-off de liquidação instantânea com base em probabilidade de inadimplência preditiva. Expliquei que o modelo escalou para cartões corporativos e cross-border, elevando o D+0 em 36% no ano seguinte.",
      "q_en": "What data did you use and what was the calculation rationale?",
      "a_en": "Analyzed 2.1 M historical transactions, modeled risk curves and calculated instant-settlement cut-offs based on predictive default probability. I explained the model scaling to corporate cards and cross-border, boosting D+0 share 36% the following year."
    },
    {
      "q": "Como você usou o aprendizado desse caso em outras frentes?",
      "a": "Reapliquei o conceito em modelos de crédito same-day de open banking e em liquidação cross-border com métricas de risco unificadas. Quantifiquei que atingimos D+0 em 82% do volume com NPS subindo de 29 para 71.",
      "q_en": "How did you apply the learning from this case elsewhere?",
      "a_en": "I used the concept in same-day credit open-banking models and cross-border settlements with unified risk metrics. I quantified reaching D+0 for 82% of volume with NPS rising from 29 to 71."
    },
    {
      "q": "Como você validou que o problema era liquidez e não tarifa?",
      "a": "Realizei 20 entrevistas com lojistas top e descobri que 78 % apontavam previsibilidade de caixa como principal fator de decisão; apenas 12 % citavam preço. Mostrei que retivemos R$ 2,4 bilhões em TPV e reduzimos churn em 4,5 pontos percentuais.",
      "q_en": "How did you validate liquidity was the root issue and not pricing?",
      "a_en": "I ran 20 top-merchant interviews and found 78 % highlighted cash-flow predictability as key driver; only 12 % mentioned price. I showed retaining BRL 2.4B in TPV while churn dropped 4.5 points."
    },
    {
      "q": "Quais foram os maiores desafios técnicos ao remover as 19 integrações legadas, e como você os solucionou?",
      "a": "A principal dificuldade foi mapear dependências ocultas entre sistemas; resolvi criando gateway de compatibilidade temporário e rodando migração em ondas com rollback contínuo. Detalhei os R$ 19 milhões de receita incremental e R$ 7,4 milhões em economia anual.",
      "q_en": "What were the biggest technical challenges when removing 19 legacy integrations and how did you solve them?",
      "a_en": "Main challenge was hidden inter-system dependencies; I built a temporary compatibility gateway and ran wave-based migration with continuous rollback mechanism. I detailed BRL 19M in incremental revenue plus BRL 7.4M in annual savings."
    },
    {
      "q": "O que você considerou ao propor o fundo de garantia de R$ 8 milhões? Havia outras alternativas?",
      "a": "Considerei seguro de performance e reprecificação de risco, mas ambos ampliariam custos; o fundo interno mantinha controle e agilidade de decisão. Reforcei a queda de 48% nas reconciliações tardias após simplificar 27 integrações para oito módulos.",
      "q_en": "What did you consider when proposing the BRL 8 M guarantee fund? Were there alternatives?",
      "a_en": "I considered performance insurance and risk re-pricing, but both raised costs; an internal fund preserved control and decision speed. I reinforced late reconciliation incidents falling 48% after simplifying 27 integrations into eight modules."
    },
    {
      "q": "Como você identificou as 73% das transações que poderiam ser liquidadas instantaneamente sem aumentar o risco?",
      "a": "Combinei histórico comercial, padrões de disputa e score de fraude; usei análise de coorte e machine learning para categorizar transações com erro < 0,2 p.p. Expliquei que o modelo escalou para cartões corporativos e cross-border, elevando o D+0 em 36% no ano seguinte.",
      "q_en": "How did you identify the 73 % of transactions that could be settled instantly without raising risk?",
      "a_en": "Combined sales history, dispute patterns and fraud scores; used cohort analysis and ML to classify transactions with < 0.2 p.p. error margin. I explained the model scaling to corporate cards and cross-border, boosting D+0 share 36% the following year."
    },
    {
      "q": "Após o lançamento do ‘Settlement Graph’, que medidas você tomou para monitorar e ajustar o modelo em tempo real?",
      "a": "Implementei painel de correlação entre TPV e anomalias de risco; ajusto pesos mensalmente com base em feed dos times de operações e fraude. Quantifiquei que atingimos D+0 em 82% do volume com NPS subindo de 29 para 71.",
      "q_en": "After the ‘Settlement Graph’ launch, what measures did you take to monitor and adjust it in real time?",
      "a_en": "Implemented risk-TPV correlation dashboard and monthly weight updates based on operations and fraud-team feedback. I quantified reaching D+0 for 82% of volume with NPS rising from 29 to 71."
    },
    {
      "q": "Como o sucesso deste projeto influenciou outros projetos no Bradesco Fintech Hub ou no mercado?",
      "a": "Inspirou iniciativas de ‘same-day settlement’ em outros produtos e foi adotado como boas práticas pelo hub; duas fintechs parceiras replicaram o modelo. Mostrei que retivemos R$ 2,4 bilhões em TPV e reduzimos churn em 4,5 pontos percentuais.",
      "q_en": "How did this project’s success influence other initiatives in the Bradesco Fintech Hub or industry?",
      "a_en": "It inspired same-day settlement initiatives across other products and was adopted as best practice by the hub; two partner fintechs replicated the model. I showed retaining BRL 2.4B in TPV while churn dropped 4.5 points."
    },
    {
      "q": "Como você mediu o impacto no cliente final?",
      "a": "Monitorei tempo médio de recebimento, volatilidade de caixa e NPS; criei dashboard em tempo real para os lojistas acompanharem a liquidez. Detalhei os R$ 19 milhões de receita incremental e R$ 7,4 milhões em economia anual.",
      "q_en": "How did you measure the end-customer impact?",
      "a_en": "I tracked average time-to-payment, cash-flow volatility and NPS; built real-time merchant liquidity dashboard. I detailed BRL 19M in incremental revenue plus BRL 7.4M in annual savings."
    }
  ]
};

export default case_10;