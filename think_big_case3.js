// Case 3 - think_big
const case_3 = {
  id: "bradesco-paas-latam",
  title: "Proposta de Plataforma de Pagamentos como Serviço para América Latina",
  title_pt: "Proposta e Desenho de uma Plataforma de Pagamentos como Serviço (PaaS) para a América Latina",
  title_en: "Payments as a Service (PaaS) Platform Proposal for Latin America",
  company: "Bradesco Next",
  period: "03/2018--06/2022",
  isTopCase: false,
  pt: {
    s: `Situação — Em 2018, o Next já operava com 6,5 milhões de contas digitais no Brasil e uptime de 99,98%, mas nossa agenda estratégica seguia confinada ao B2C doméstico. Stripe, dLocal e Adyen avançavam na região, capturando startups que nós nem considerávamos clientes. Eu mostrei que estávamos sentado em um ativo subutilizado de R$120M/ano em custo fixo que poderia virar nova fonte de receita se pensássemos como plataforma regional.`,
    t: `Tarefa — Como Product Manager de inovação, meu mandato oficial era lançar features para o app. Eu assumi a tarefa de transformar nossa stack de pagamentos em produto exportável. Defini metas autoimpostas: provar viabilidade técnica em 120 dias, fechar três pilotos pagantes em 12 meses e estruturar business plan que pudesse gerar R$70M ARR em três anos com margem bruta >55%.`,
    a: `Ação — Eu liderei integralmente a iniciativa. Primeiro, inventariei 214 APIs internas e selecionei 47 críticas para expor. Para contornar o risco regulatório levantado pelo diretor jurídico, desenhei arquitetura multi-tenant com segregação de dados e obtive parecer do BACEN em 45 dias. Construí um portal de desenvolvedores com sandbox e mostrei demo em que um parceiro hipotético processava transações em 6 minutos (vs. 6-9 meses do modelo tradicional). Enfrentei resistência do CFO que temia canibalização; eu projetei cenários de preço (take rate 2,3%-2,7%) e demonstrei que operar como PaaS aumentaria uso da nossa infraestrutura em 28% sem elevar CAPEX. Para comprovar apetite, conduzi roadshow em México, Colômbia e Chile, entrevistando 23 fintechs. Dessas, sete assinaram LOI condicionada. Eu negociei pessoalmente com duas scale-ups (Kushki e Clip) e com uma adquirente brasileira independente; fechei pilotos que movimentaram R$1,1B em GMV nos primeiros 9 meses. Implantei mecanismo de governança com diretoria: comitê "New Ventures" mensal, scorecards trimestrais e cláusula de kill switch se SLA caísse abaixo de 99,9%.`,
    r: `Resultado — Os pilotos geraram receita anualizada de R$18,4M com margem bruta de 58%. O payback estimado do investimento inicial (R$32M) caiu para 21 meses. O tempo de integração caiu de 182 dias para 9 dias e o NPS de desenvolvedores subiu de 21 para 63. Os dados convenceram a diretoria a criar a unidade Banking & Payments as a Service em 2021, com orçamento de R$85M e equipe dedicada. Em 2022, o Next assinou contrato plurianual com uma fintech mexicana (GMV projetado R$6,4B) e o CDO me colocou como chair do novo conselho de venture building para escalar ofertas B2B na América Latina.`,
    l: `Lição — Pensa grande quem transforma um ativo interno em plataforma regional com métricas que sustentam a ambição. Aprendi que só ganharíamos escala se eu enfrentasse conflitos regulatórios e financeiros com detalhes e protótipo em mãos. Hoje, sempre que identifico um ativo subaproveitado, meu default é construir tese de monetização, pilotar rapidamente e criar mecanismos de governança que travem a agenda de crescimento.`
  },
  en: {
    s: `Situation — By 2018 Next operated 6.5 million digital accounts in Brazil with 99.98% uptime, yet our strategy remained confined to domestic B2C. Stripe, dLocal, and Adyen were scaling across Latin America, onboarding startups we did not even consider. I highlighted we were sitting on a BRL 120M/year fixed-cost asset that could become a revenue stream if we thought like a regional platform.`,
    t: `Task — As innovation Product Manager my formal mandate was shipping app features. I took ownership to turn our payments stack into an exportable product. I set self-imposed goals: prove technical feasibility in 120 days, close three paying pilots in 12 months, and build a business plan for BRL 70M ARR in three years with >55% gross margin.`,
    a: `Action — I led the initiative end-to-end. First I inventoried 214 internal APIs and selected 47 critical ones to expose. To mitigate regulatory risk raised by legal, I designed a multi-tenant architecture with data segregation and secured a BACEN green light within 45 days. I built a developer portal with sandbox and demoed a scenario where a hypothetical partner processed transactions in six minutes (versus 6-9 months previously). The CFO feared cannibalization; I priced take rates at 2.3%-2.7% and proved PaaS would lift infrastructure utilization by 28% without extra CAPEX. To prove demand I ran a roadshow in Mexico, Colombia, and Chile, interviewing 23 fintechs—seven signed LOIs. I personally negotiated pilots with two scale-ups (Kushki and Clip) plus a Brazilian independent acquirer; together they processed BRL 1.1B GMV in the first nine months. I installed governance mechanisms: a monthly New Ventures committee, quarterly scorecards, and a kill switch clause if SLA dipped below 99.9%.`,
    r: `Result — Pilots generated BRL 18.4M annualized revenue with 58% gross margin. Payback on the initial BRL 32M investment shortened to 21 months. Integration time dropped from 182 days to nine days and developer NPS rose from 21 to 63. The data convinced leadership to create the Banking & Payments as a Service unit in 2021 with BRL 85M budget and dedicated team. In 2022 Next signed a multi-year deal with a Mexican fintech (projected BRL 6.4B GMV) and the CDO appointed me chair of the venture-building council to scale B2B offerings across Latin America.`,
    l: `Learning — Thinking big means turning an internal asset into a regional platform backed by metrics that sustain ambition. I learned we would only scale by confronting regulatory and financial conflicts with detail and working prototypes. Today, whenever I spot an underutilized asset, my default is to craft a monetization thesis, pilot fast, and install governance that locks the growth agenda.`,
  },
  fups: [
    {
      q: "Como você priorizou quais APIs seriam expostas primeiro?",
      a: "Eu apliquei matriz valor vs. risco, cruzei volume de chamadas internas com demanda de parceiros e selecionei 47 APIs que entregavam 85% do valor percebido com risco regulatório baixo.",
      q_en: "How did you prioritize which APIs to expose first?",
      a_en: "I ran a value-versus-risk grid, crossing internal call volume with partner demand and picked 47 APIs delivering 85% of perceived value with low regulatory risk."
    },
    {
      q: "Que objeções regulatórias o jurídico levantou e como você endereçou?",
      a: "Eles temiam mistura de dados de clientes. Eu desenhei segregação lógica por tenant, roteamento dedicado e log criptografado auditável. O parecer do BACEN confirmou aderência à Circular 3.681.",
      q_en: "What regulatory objections did legal raise and how did you address them?",
      a_en: "They feared customer data blending. I designed tenant-based logical segregation, dedicated routing, and encrypted auditable logs. BACEN's opinion confirmed compliance with Circular 3.681."
    },
    {
      q: "Como você precificou a oferta PaaS para competir com players globais?",
      a: "Eu coletei benchmarks (Stripe 2,9%, dLocal 3,2%) e usei nossa eficiência operacional para ofertar 2,3%-2,7%. Modelei tier variável e incentivei volume com rebates progressivos.",
      q_en: "How did you price the PaaS offer against global players?",
      a_en: "I benchmarked Stripe at 2.9% and dLocal at 3.2%, leveraged our efficiency to offer 2.3%-2.7%, modeled variable tiers, and tied progressive rebates to volume."
    },
    {
      q: "Que conflito você teve com a TI legado e como resolveu?",
      a: "A TI queria priorizar backlog interno. Eu provei que expor APIs reduziria 18% das demandas internas repetitivas. Assumi compromisso de financiar squads híbridos com budget de inovação.",
      q_en: "What conflict arose with legacy IT and how did you resolve it?",
      a_en: "IT wanted to prioritize internal backlog. I showed exposing APIs would cut 18% of repetitive internal requests. I funded hybrid squads from the innovation budget to cover the gap."
    },
    {
      q: "Como você demonstrou demanda real dos parceiros?",
      a: "Além das 23 entrevistas, eu converti sete LOIs com cláusulas de volume mínimo. Dois pilotos faturaram R$6,1M em seis meses, validando disposição a pagar.",
      q_en: "How did you demonstrate real partner demand?",
      a_en: "Beyond 23 interviews, I converted seven LOIs with minimum volume clauses. Two pilots billed BRL 6.1M in six months, validating willingness to pay."
    },
    {
      q: "Quais métricas você monitorou no comitê New Ventures?",
      a: "Apresentei GMV, uptime, latency P95, fraude, receita líquida, CAC e margem. O comitê só aprovava expansão se uptime >99,95% e margem >50%.",
      q_en: "Which metrics did you track in the New Ventures committee?",
      a_en: "I reported GMV, uptime, P95 latency, fraud, net revenue, CAC, and margin. Expansion only cleared if uptime stayed above 99.95% and margin above 50%."
    },
    {
      q: "Como garantiu que o piloto não comprometesse a operação B2C?",
      a: "Segmentei ambientes, criei quotas de capacidade e monitorei consumo em tempo real. Caso atingisse 80%, o portal bloqueava novas transações PaaS até redistribuição.",
      q_en: "How did you ensure the pilot didn’t jeopardize B2C operations?",
      a_en: "I segmented environments, set capacity quotas, and monitored consumption in real time. If usage hit 80%, the portal throttled new PaaS transactions until redistribution."
    },
    {
      q: "Qual foi o maior aprendizado comercial dos pilotos?",
      a: "Percebi que fintechs valorizavam onboarding assistido. Ao oferecer squad de integração por quatro semanas, reduzimos churn pós-proposta de 38% para 11%.",
      q_en: "What was the biggest commercial learning from the pilots?",
      a_en: "Fintechs valued guided onboarding. By offering a four-week integration squad we cut post-proposal churn from 38% to 11%."
    },
    {
      q: "Como você preparou a organização para escalar após sua saída do projeto?",
      a: "Eu documentei operating playbook, formei três product leads e criei KPIs vinculados a bônus. Mesmo após migração de função em 2022, a unidade bateu 104% da meta anual.",
      q_en: "How did you prepare the organization to scale after you left the project?",
      a_en: "I codified an operating playbook, trained three product leads, and tied KPIs to bonuses. After I rotated in 2022 the unit still delivered 104% of the annual target."
    },
    {
      q: "Que próximo passo você desenhou para expandir o PaaS?",
      a: "Planejei módulo de crédito como serviço com score alternativo e iniciei POC com duas fintechs mexicanas. O roadmap projetava GMV extra de R$3,2B em 24 meses.",
      q_en: "What next step did you design to expand the PaaS?",
      a_en: "I planned a credit-as-a-service module with alternative scoring and launched a POC with two Mexican fintechs. The roadmap projected an extra BRL 3.2B GMV in 24 months."
    }
  ]
};

export default case_3;
