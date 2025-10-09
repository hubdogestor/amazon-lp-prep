const case_1 = {
  "id": "sicredi-churn-analysis",
  "title": "Analise de Dados para Identificar os Principais Drivers de Churn no App",
  "title_pt": "Analise de Dados para Identificar os Principais Drivers de Churn no App",
  "title_en": "Data Analysis to Identify Main App Churn Drivers",
  "company": "Sicredi Woop",
  "period": "01/2019-10/2019",
  "isTopCase": true,
  "isGoodCase": true, // Updated from false
  "pt": {
    "s": "40% de churn anual. R$ 12 milhões sangrando. O número piscava vermelho no dashboard quando o diretor comercial entrou na sala de guerra às 10h23: \"Leonardo, vamos aprovar R$ 400k em cashback agora. Precisamos estancar essa sangria.\" Mas eu acabara de ler o 500º ticket de suporte de clientes abandonando o Woop (Sicredi) frustrados, e a dor real não estava na falta de benefícios. Stakes: se eu deixasse aprovar o cashback sem investigar, queimávamos R$ 400k em solução errada enquanto milhares de clientes continuavam fugindo e a meta de crescimento de 150% da empresa desmoronava. Se eu travasse a decisão para investigar, enfrentaria a pressão do comercial, atrasaria a \"solução rápida\" e apostaria minha credibilidade em dados que ainda não tinha. Dilema brutal: ceder à pressão corporativa por velocidade ou mergulhar nos dados para encontrar a causa raiz — mesmo que isso significasse confrontar um diretor e admitir que estávamos atacando o problema errado.",
    "t": "Eu me comprometi com o COO a ir além do óbvio. Em duas semanas, eu entregaria um diagnóstico de causa raiz, provando se o churn vinha de falhas operacionais ou da falta de benefícios. Minha missão era convencer a liderança a priorizar a dor real do cliente em vez de soluções superficiais, usando dados como minha única arma.",
    "a": "Eu mergulhei nos dados pessoalmente. Pedi acesso direto ao Redshift e, com 47 queries SQL que eu mesmo escrevi, cruzei cinco tabelas e reconstruí a jornada de 2.3 milhões de registros. A descoberta foi chocante: 54% dos cancelamentos ocorriam nos primeiros sete dias, e o ponto de maior abandono, com 40% de queda, era o upload de documentos. Para dar vida aos números, eu li 500 tickets de suporte e reviews na app store, e liguei para três clientes afetados, ouvindo a frustração deles com nossas mensagens de erro confusas. Armado com essa evidência, eu confrontei o diretor comercial que defendia o cashback. Em uma sessão 1:1, eu apresentei o funil passo a passo e um business case que mostrava que consertar o onboarding (R$180k, 2 meses) tinha um ROI 3x maior. Eu não saí da sala sem o compromisso dele por escrito. Em paralelo, instalei um war room diário com engenharia e QA, definindo métricas de sucesso claras (upload >95%, tempo <30s, falsos positivos <2%) e criei um dashboard de saúde com oito métricas e alertas automáticos para garantir que o problema nunca mais passasse despercebido.",
    "r": "O plano que eu liderei mudou o jogo. Em nove meses, o churn despencou de 40% para 32.8% (-18%), o que significou que 32 mil clientes que teriam nos abandonado permaneceram conosco, preservando R$5.4 milhões em receita anual. A conversão do onboarding, a principal fonte de frustração, subiu 20 pontos percentuais, e a base de clientes ativos cresceu 25%, nos permitindo bater a meta de 150% sem gastar um centavo em cashback. O mecanismo do war room se tornou uma cadência quinzenal que reduziu o tempo de resposta a incidentes em 35%.",
    "l": "Esse caso foi um divisor de águas para mim. Aprendi que em uma crise, a voz do cliente está escondida nos dados, e é meu trabalho como líder encontrá-la. A tensão com o diretor comercial me ensinou que uma opinião, por mais alta que seja, não resiste a um funil de conversão bem detalhado. Desde então, a \'Triangulação de Evidências\' (quantitativo + qualitativo + operacional) se tornou um mecanismo que eu não apenas uso, mas ensino para todos os meus times. Ele foi a base para resolver outros 5 problemas complexos no Sicredi, economizando milhões. Hoje, eu não entro em nenhuma reunião de priorização sem esse framework. É assim que eu garanto que a voz do cliente seja a mais alta na sala."
  },
  "en": {
    "s": "In 2019, the digital bank Woop (Sicredi) was bleeding: 40% annual churn, equivalent to BRL 12 million in lost revenue, and leadership was about to approve BRL 400k in cashback as a quick fix. As a Product Strategist, I saw that this approach not only ignored the pain of thousands of customers who were abandoning our app in frustration but also jeopardized the company\'s 150% growth target. I knew the shortcut was a trap.",
    "t": "I committed to the COO to go beyond the obvious. Within two weeks, I would deliver a root-cause diagnosis, proving whether the churn came from operational failures or a lack of benefits. My mission was to convince leadership to prioritize the customer\'s real pain over superficial solutions, using data as my only weapon.",
    "a": "I dove into the data myself. I requested direct access to Redshift and, with 47 SQL queries I wrote myself, I cross-referenced five tables and reconstructed the journey of 2.3 million records. The discovery was shocking: 54% of cancellations occurred within the first seven days, and the biggest drop-off point, with a 40% drop, was the document upload. To bring the numbers to life, I read 500 support tickets and app store reviews, and I called three affected customers, listening to their frustration with our confusing error messages. Armed with this evidence, I confronted the commercial director who was advocating for cashback. In a 1:1 session, I presented the step-by-step funnel and a business case showing that fixing the onboarding (BRL 180k, 2 months) had a 3x higher ROI. I didn\'t leave the room without his written commitment. In parallel, I set up a daily war room with engineering and QA, defining clear success metrics (upload >95%, time <30s, false positives <2%) and created a health dashboard with eight metrics and automatic alerts to ensure the problem would never go unnoticed again.",
    "r": "The plan I led changed the game. In nine months, churn plummeted from 40% to 32.8% (-18%), which meant that 32,000 customers who would have abandoned us stayed, preserving BRL 5.4 million in annual revenue. The onboarding conversion, the main source of frustration, increased by 20 percentage points, and the active customer base grew by 25%, allowing us to hit the 150% growth target without spending a dime on cashback. The war room mechanism became a bi-weekly cadence that reduced incident response time by 35%.",
    "l": "This case was a turning point for me. I learned that in a crisis, the customer\'s voice is hidden in the data, and it\'s my job as a leader to find it. The tension with the commercial director taught me that an opinion, no matter how senior, cannot withstand a well-detailed conversion funnel. Since then, the \'Evidence Triangulation\' (quantitative + qualitative + operational) has become a mechanism that I not only use but teach to all my teams. It was the basis for solving 5 other complex problems at Sicredi, saving millions. Today, I don\'t walk into any prioritization meeting without this framework. That\'s how I ensure the customer\'s voice is the loudest in the room."
  },
  "fups": [
    {
        "q": "Qual foi seu maior erro nesse processo e o que você faria diferente hoje?",
        "a": "Meu maior erro foi não ter envolvido o diretor comercial desde o dia 1 da minha investigação. Eu assumi que os dados falariam por si só e preparei uma grande revelação, o que o colocou na defensiva. Hoje, eu o traria para a sala de investigação comigo, o convidaria para ouvir as ligações dos clientes e o tornaria um parceiro na descoberta. A conclusão seria a mesma, mas teríamos chegado a ela juntos, com muito menos atrito.",
        "q_en": "What was your biggest mistake in this process, and what would you do differently today?",
        "a_en": "My biggest mistake was not involving the commercial director from day 1 of my investigation. I assumed the data would speak for itself and prepared a big reveal, which put him on the defensive. Today, I would bring him into the investigation room with me, invite him to listen to customer calls, and make him a partner in the discovery. The conclusion would have been the same, but we would have reached it together, with much less friction."
    },
    {
      "q": "Como voce conduziu o confronto com o diretor comercial e garantiu alinhamento sem desgastar a relacao?",
      "a": "Preparei um doc de 8 paginas com dados e simulacoes, marquei uma sessao 1:1, mostrei o impacto financeiro de cada alternativa e pedi um commitment explicito. Transformei a discordancia em uma decisao baseada em ROI, o que facilitou o patrocinio dele na execucao.",
      "q_en": "How did you handle the confrontation with the commercial director and secure alignment without damaging the relationship?",
      "a_en": "I prepared an eight-page brief with data and simulations, set up a 1:1, showed the financial impact of each path, and asked for explicit commitment. Turning the disagreement into an ROI discussion made it easy for him to sponsor the execution."
    },
    {
      "q": "Quais controles voce implementou para evitar regressao apos o rollout do novo onboarding?",
      "a": "Implementei alertas de anomalia via CloudWatch + Slack, uma cadencia quinzenal de auditoria com engenharia e um review mensal de coorte comigo e com o COO. Cada alerta abre automaticamente um ticket JIRA com SLA de 24h.",
      "q_en": "What controls did you put in place to prevent regression after the new onboarding went live?",
      "a_en": "I set up CloudWatch + Slack anomaly alerts, a biweekly audit with engineering, and a monthly cohort review with the COO. Each alert automatically opens a JIRA ticket with a 24-hour SLA."
    },
    {
      "q": "Como voce garantiu a consistencia dos dados entre Redshift, Firebase e tickets de suporte?",
      "a": "Criei uma camada de staging com chaves unicas (user_id + timestamp) e escrevi scripts de reconciliacao em Python para comparar agregados. Se algum delta passava de 2%, o script travava a execucao e disparava alerta.",
      "q_en": "How did you ensure data consistency among Redshift, Firebase, and support tickets?",
      "a_en": "I created a staging layer with unique keys (user_id + timestamp) and built Python reconciliation scripts to compare aggregates. If any delta exceeded 2%, the script stopped and triggered an alert."
    },
    {
      "q": "Que trade-offs voce avaliou antes de priorizar o conserto do onboarding em vez de novos beneficios?",
      "a": "Comparei tres opcoes: cashback (R$ 400k, impacto incerto), nova feature (R$ 650k, 6 meses) e correcao do onboarding (R$ 180k, 2 meses). Usei payback, NPV e risco de execucao para demonstrar que quitar a dor raiz tinha ROI e velocidade muito superiores.",
      "q_en": "What trade-offs did you weigh before prioritizing the onboarding fix over new perks?",
      "a_en": "I compared three options: cashback (R$400K, uncertain impact), new feature (R$650K, six months), and onboarding fix (R$180K, two months). I used payback, NPV, and execution risk to show the root-cause fix had superior ROI and speed."
    },
    {
      "q": "Quais foram os principais riscos do war room diario e como voce os mitigou?",
      "a": "O principal risco era sobrecarregar engenharia e perder foco. Estabeleci agenda de 30 minutos, usei um kanban com tres prioridades e qualquer item fora do escopo exigia aprovacao minha + CTO. Tambem programei \'dias sem reuniao\' para evitar fadiga.",
      "q_en": "What were the main risks of the daily war room and how did you mitigate them?",
      "a_en": "The main risk was overloading engineering and losing focus. I enforced a 30-minute agenda, used a three-priority kanban, and anything outside scope needed my + CTO approval. I also scheduled \'no-meeting days\' to avoid fatigue."
    },
    {
      q: "Como voce calculou e comunicou o ROI de 3x para a diretoria?",
      a: "Projetei receita preservada com base na reducao de churn (% x base x ticket medio) e comparei com o investimento incremental (OCR, UX, QA). Usei cenario conservador e mostrei payback em cinco meses. O CFO validou os numeros antes da apresentacao ao board.",
      q_en: "How did you calculate and communicate the 3x ROI to the board?",
      a_en: "I projected preserved revenue using churn reduction (% x base x ARPU) and compared it with incremental spend (OCR, UX, QA). I used a conservative scenario and showed five-month payback. The CFO validated the numbers before I presented to the board."
    },
    {
      q: "De que forma voce garantiu que a solucao atendesse clientes com baixa proficiencia digital?",
      a: "Inclui no piloto um grupo de clientes 60+ e facilitei sessoes de usabilidade remota. Ajustei as mensagens para linguagem simples, inclui video microlearning e medi CSAT especifico desse publico, que subiu de 6,1 para 7,8.",
      q_en: "How did you make sure the solution worked for low digital literacy customers?",
      a_en: "I included 60+ customers in the pilot and ran remote usability sessions. I simplified error messages, added a microlearning video, and tracked a dedicated CSAT which climbed from 6.1 to 7.8."
    },
    {
      q: "Como voce usou o aprendizado desse caso em outras frentes do Sicredi?",
      a: "Transformei a abordagem em training: formei seis PMs na metodologia de triangulacao, documentei o playbook e implementei retro trimestral. Aplicamos depois em credito, cartoes e investimentos, sempre com analise coorte + funil + qualitativo.",
      q_en: "How did you reuse this learning across other Sicredi initiatives?",
      a_en: "I turned the approach into training: coached six PMs on triangulation, documented the playbook, and instituted a quarterly retro. We reused it for lending, cards, and investments with the same cohort + funnel + qualitative triad."
    },
    {
      q: "Qual metrica voce monitorou para provar que o problema nao voltou apos 12 meses?",
      a: "Alem do churn anualizado, monitorei a retencao de 7 e 30 dias por coorte. Se qualquer coorte caisse 5 p.p., o alerta automatico me obrigava a fazer deep dive e apresentar plano corretivo em 48h para o COO.",
      q_en: "Which metric did you monitor to prove the issue didn\'t return after 12 months?",
      a_en: "Beyond annual churn, I tracked seven-day and 30-day retention by cohort. If any cohort dropped 5 p.p., the automated alert forced a deep dive and a 48-hour corrective plan for the COO."
    }
  ]
};

export default case_1;

