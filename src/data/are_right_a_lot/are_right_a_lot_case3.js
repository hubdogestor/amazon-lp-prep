// Case 3 - are_right_a_lot
const case_3 = {
  id: "sicredi-api-pricing-model",
  title: "Provei com ciencia de dados que a nova precificacao API nao se pagava e redesenhei o modelo em 30 dias",
  title_pt: "Provei com ciencia de dados que a nova precificacao API nao se pagava e redesenhei o modelo em 30 dias",
  title_en: "I used data science to prove the API pricing would not pay off and redesigned the model in 30 days",
  company: "Sicredi Plataforma",
  period: "06/2020-12/2020",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: `Situacao: "Essa tabela fixa vai reduzir receitas em 11%. Os quatro parceiros gigantes representam 63% das chamadas e vao pivotar para concorrentes." Eu era PM de plataforma no Sicredi quando o comite aprovou precificacao fixa de R$ 2,90 por chamada de API para parceiros fintech. Minha analise inicial mostrava o risco, mas o diretor comercial estava convencido de que o volume compensaria. O time de vendas ja tinha comunicado a mudanca a 23 parceiros e o CFO queria ver numeros em menos de uma semana.`,
    t: `Task: O desafio critico que enfrentei foi demonstrar matematicamente se a proposta se sustentava e, caso nao, propor um modelo robusto o suficiente para manter a confianca do comite e dos parceiros. Minhas metas: (1) construir um modelo de elasticidade e custo em cinco dias, (2) apresentar um plano alternativo com unit economics positivos, (3) negociar com comercial e parceiros um piloto que preservasse receita e experiencia.`,
    a: `Action: Minha abordagem foi traduzir ciencia de dados em linguagem financeira que comercial e finansas entendessem. Primeiro extraI 18 meses de logs de uso, apliquei clusterizacao K-means para segmentar parceiros por volume e usei regressao logistica para estimar churn em funcao de preco. O modelo mostrava que o grupo premium teria queda de 22% no volume e geraria perda de R$ 14M ao ano. Em seguida levei os graficos ao diretor comercial e ao CFO dizendo: "os fatos nao sustentam o preco fixo; estou propondo uma tabela escalonada com desconto progressivo". Criei o mecanismo "Price Ladder" e defini tres camadas: ate 5M de chamadas, 5-25M e acima de 25M, com precos de R$ 3,10, R$ 2,80 e R$ 2,40. Inclui fee minimo mensal para cobrir custo fixo. Consegui buy-in ao mostrar que o CAC payback cairia de 9 para 5 meses e que o NPS projetado subia 11 pontos. Por fim sentei com vendas para criar playbook de comunicacao transparente e com tecnologia para ajustar billing em 21 dias. Abri uma linha direta com seis parceiros chave, apresentei os dados e obtive carta de intencao para o piloto em 30 dias.`,
    r: `Result: O impacto mensuravel desse modelo data-driven foi imediato. O piloto com seis parceiros representando 58% do volume ocorreu entre agosto e setembro. As receitas subiram 8,7%, o churn ficou em 0,6% (vs. 2,1% projetado no modelo antigo) e o NPS de plataforma cresceu de 63 para 74. Por fim o CFO aprovou rollout completo e o diretor comercial me chamou para atualizar trimestralmente o pricing com o mesmo modelo.`,
    l: `Learning: A licao principal desse caso transformou minha abordagem para decisoes de pricing. Aprendi que estar certo muitas vezes depende de traduzir ciencia de dados em linguagem financeira simples. Quando eu mostro clusters, elasticidade e payback lado a lado, convenco comercial e finansas a abandonar uma ideia popular sem perder a relacao com parceiros. Transformei isso em framework que adotei para precificar APIs de open finance em 2024 com resultados similares.`,
  },
  en: {
    s: `Situation: "This flat pricing will cut revenue by 11%. The four giant partners represent 63% of calls and will pivot to competitors." I was the platform PM at Sicredi when the committee approved a flat price of BRL 2.90 per API call for fintech partners. My early analysis showed the risk, but the sales director believed volume would offset it. Sales had already announced the change to 23 partners and the CFO wanted numbers within a week.`,
    t: `Task: The critical challenge I faced was mathematically proving whether the proposal held up and, if not, designing a robust model that preserved committee and partner trust. My goals were: (1) build an elasticity and cost model in five days, (2) present an alternative plan with positive unit economics, (3) negotiate a pilot with sales and partners that protected revenue and experience.`,
    a: `Action: My approach was translating data science into financial language that sales and finance would understand. First I extracted 18 months of usage logs, ran K-means clustering to segment partners by volume, and used logistic regression to estimate price-driven churn. The model showed the premium cluster would drop volume 22% and destroy BRL 14M annually. Next I presented the charts to the sales director and CFO stating, "facts do not support the flat price; I propose a tiered schedule with progressive discounts." I created the "Price Ladder" mechanism and defined three tiers—up to 5M calls, 5-25M, above 25M—priced at BRL 3.10, 2.80, and 2.40, plus a minimum monthly fee to cover fixed cost. I earned buy-in by showing CAC payback falling from nine to five months and projected NPS rising eleven points. Finally I worked with sales on a transparent communication playbook and with technology to adjust billing in 21 days. I opened a hotline with six key partners, presented the data, and received letters of intent for a 30-day pilot.`,
    r: `Result: The measurable impact of this data-driven model was immediate. The pilot with six partners representing 58% of volume ran between August and September. Revenue rose 8.7%, churn stayed at 0.6% (vs. 2.1% under the old model), and platform NPS climbed from 63 to 74. Finally the CFO approved full rollout and the sales director asked me to refresh pricing quarterly using the same model.`,
    l: `Learning: The key lesson from this case transformed my approach to pricing decisions. I learned that being right often means translating data science into plain financial language. When I show clusters, elasticity, and payback side by side, I convince sales and finance to drop a popular idea without damaging partner relationships. I turned this into a framework that I adopted to price open-finance APIs in 2024 with similar results.`,
  },
  fups: [
    {
      "q": "Qual foi o maior erro que você cometeu no modelo de pricing inicial e como impactou o projeto?",
      "a": "Acreditei que poderia implementar pricing dinâmico sem considerar o impacto no churn dos parceiros menores, resultando em perda de 15% da base durante o piloto. Esse erro quase fez o projeto ser cancelado, pois o CFO viu apenas a queda na receita sem entender que era um ajuste necessário para sustentabilidade de longo prazo.",
      "q_en": "What was the biggest mistake you made in the initial pricing model and how did it impact the project?",
      "a_en": "I believed I could implement dynamic pricing without considering the impact on smaller partners' churn, resulting in 15% base loss during the pilot. This mistake almost got the project canceled, as the CFO only saw revenue drop without understanding it was necessary for long-term sustainability."
    },
    {
      "q": "O que você faria diferente hoje se implementasse um modelo de pricing dinâmico?",
      "a": "Hoje começaria com análise de elasticidade de preço por cluster de clientes, implementaria pricing em camadas com períodos de transição mais longos, e criaria um comitê de pricing independente para validar mudanças. Também estabeleceria métricas de saúde financeira por segmento antes de qualquer alteração.",
      "q_en": "What would you do differently today if you implemented a dynamic pricing model?",
      "a_en": "Today I would start with price elasticity analysis by customer cluster, implement tiered pricing with longer transition periods, and create an independent pricing committee to validate changes. I would also establish financial health metrics by segment before any changes."
    },
    {
      "q": "Qual foi o maior obstáculo que você enfrentou na implementação do pricing?",
      "a": "A resistência comercial que via o modelo como ameaça às vendas, argumentando que preços dinâmicos complicariam negociações. Superei criando uma calculadora personalizada que demonstrava como o novo modelo aumentava margem em 23% para clientes premium, mantendo acessibilidade para pequenos parceiros através de descontos por volume.",
      "q_en": "What was the biggest obstacle you faced in implementing the pricing?",
      "a_en": "Sales resistance that saw the model as a threat to sales, arguing that dynamic prices would complicate negotiations. I overcame it by creating a personalized calculator that demonstrated how the new model increased margin by 23% for premium clients while maintaining accessibility for small partners through volume discounts."
    },
    {
      "q": "Quais foram os principais riscos do novo modelo de pricing e como mitigou?",
      "a": "Riscos principais: (1) churn massivo de pequenos parceiros, (2) complexidade técnica no billing, (3) resistência cultural das vendas. Mitiguei com: (1) análise de elasticidade prévia e camadas de transição, (2) desenvolvimento de tabela dinâmica e feature flags, (3) comunicação individual com top 10 parceiros e FAQ detalhado.",
      "q_en": "What were the main risks of the new pricing model and how did you mitigate them?",
      "a_en": "Main risks: (1) massive churn of small partners, (2) technical complexity in billing, (3) sales cultural resistance. I mitigated with: (1) prior elasticity analysis and transition layers, (2) dynamic table development and feature flags, (3) individual communication with top 10 partners and detailed FAQ."
    },
    {
      "q": "Quais dados e racional você usou para convencer o CFO sobre o pricing dinâmico?",
      "a": "Usei dados de regressão com features de volume, sazonalidade e churn histórico (AUC 0,83), análise de elasticidade mostrando que preços dinâmicos aumentavam margem em 23%, e projeções de receita mostrando crescimento de 18% em 12 meses. O racional foi: pricing estático deixa dinheiro na mesa; dinâmico captura valor real do uso.",
      "q_en": "What data and rationale did you use to convince the CFO about dynamic pricing?",
      "a_en": "I used regression data with volume, seasonality, and historical churn features (AUC 0.83), elasticity analysis showing 23% margin increase with dynamic pricing, and revenue projections showing 18% growth in 12 months. The rationale was: static pricing leaves money on the table; dynamic pricing captures real usage value."
    },
    {
      "q": "Como você aplicou o aprendizado dessa implementação em projetos futuros?",
      "a": "Criei um framework de pricing dinâmico que reutilizei para APIs de open finance em 2024, resultando em 28% de aumento na margem. Também implementei comitês de pricing trimestrais e dashboards de elasticidade que se tornaram padrão na organização, reduzindo tempo de decisão de pricing de 3 meses para 2 semanas.",
      "q_en": "How did you apply the learning from this implementation in future projects?",
      "a_en": "I created a dynamic pricing framework that I reused for open finance APIs in 2024, resulting in 28% margin increase. I also implemented quarterly pricing committees and elasticity dashboards that became organizational standards, reducing pricing decision time from 3 months to 2 weeks."
    },
    { q: "Quais features voce usou na regressao?", a: "Volume mensal, sazonalidade, ticket medio, vertical, uso de endpoints criticos e churn historico.", q_en: "Which features fed the regression?", a_en: "Monthly volume, seasonality, average ticket, vertical, critical endpoint usage, and historical churn." },
    { q: "Como validou o modelo antes do piloto?", a: "Usei cross-validation k=5, AUC de 0,83 e apresentei intervalo de confianca ao CFO.", q_en: "How did you validate the model before the pilot?", a_en: "I used k=5 cross-validation, achieved 0.83 AUC, and presented confidence intervals to the CFO." },
    { q: "Que comunicacao fez com os parceiros?", a: "Call individual para top 10, e-mail com FAQ e calculadora personalizada em planilha.", q_en: "How did you communicate with partners?", a_en: "Individual calls for the top ten, emails with FAQ, and a personalized spreadsheet calculator." },
    { q: "Qual ajuste tecnico precisou no billing?", a: "Criamos tabela de precos dinamica, feature flag por parceiro e reconciliacao diaria.", q_en: "What billing adjustments were required?", a_en: "We built dynamic price tables, partner-level feature flags, and daily reconciliation." },
    { q: "Como monitorou o piloto?", a: "Dashboard diario com receita, volume, churn, NPS e custo de nuvem.", q_en: "How did you monitor the pilot?", a_en: "Daily dashboard with revenue, volume, churn, NPS, and cloud cost." },
    { q: "Como lidou com o marketing?", a: "Alinhei storytelling de valor agregado e entregamos case para imprensa especializada.", q_en: "How did you handle marketing?", a_en: "I aligned the value-added storytelling and delivered a case study to specialized press." },
    { q: "Qual foi o maior risco residual?", a: "Clientes free-riders; bloqueamos com minima mensal e limites de burst.", q_en: "What was the main residual risk?", a_en: "Free-rider clients; we blocked it with minimum fees and burst limits." },
    { q: "Como registrou o acordo com comercial?", a: "Ata de reuniao com metas de receita, NPS e revisao trimestral do pricing.", q_en: "How did you document the agreement with sales?", a_en: "Meeting minutes with revenue, NPS, and quarterly pricing review targets." },
    { q: "Que indicadores voce acompanha hoje?", a: "Elasticidade por cluster, margem, churn, SLA de suporte e uso de endpoints premium.", q_en: "Which indicators do you track today?", a_en: "Cluster elasticity, margin, churn, support SLA, and premium endpoint usage." }
  ]
};

export default case_3;
