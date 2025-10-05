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
    s: `Situação — Em 2018, o Next operava 6,5 milhões de contas digitais com uptime de 99,98%, porém toda a estratégia seguia confinada ao B2C brasileiro. Stripe, dLocal e Adyen avançavam na região capturando fintechs que ignorávamos. Eu mostrei que manter foco local significava desperdiçar um ativo de R$120M/ano em custos fixos que poderia virar receita se eu transformasse nossa stack em plataforma regional.`,
    t: `Tarefa — Como Product Manager de inovação, meu mandato oficial era lançar features para o app. Eu me auto-impus uma missão maior: provar que a stack de pagamentos podia virar produto exportável. Estabeleci metas pessoais de destravar viabilidade técnica em 120 dias, fechar três pilotos pagantes em 12 meses e desenhar business plan para gerar R$70M de ARR em três anos com margem bruta acima de 55%.`,
    a: `Ação — Eu liderei a iniciativa end-to-end. Inventariei 214 APIs internas, priorizei 47 críticas usando matriz valor vs. risco e desenhei arquitetura multi-tenant com segregação de dados para mitigar a objeção do jurídico. Em 45 dias obtive parecer do BACEN. Construi portal de desenvolvedores com sandbox e demonstrei onboarding completo em seis minutos (contra 6-9 meses no modelo legado). O CFO temia canibalização; eu modelei take rate entre 2,3% e 2,7%, projetei aumento de 28% no uso da infraestrutura sem CAPEX adicional e mostrei que não concorreríamos com o B2C porque as APIs tinham limites de escopo. Para validar demanda, conduzi roadshow em México, Colômbia e Chile, entrevistei 23 fintechs e converti sete cartas de intenção vinculadas a volume mínimo. Negociei pessoalmente pilotos com duas scale-ups (Kushki e Clip) e uma adquirente brasileira independente, movimentando R$1,1B de GMV em nove meses. Instituí governança formal: comitê New Ventures mensal, scorecards trimestrais e kill switch automático se SLA ficasse abaixo de 99,9%.`,
    r: `Resultado — Os pilotos renderam receita anualizada de R$18,4M com margem bruta de 58% e reduziram o payback estimado (R$32M) para 21 meses. O tempo de integração caiu de 182 dias para nove dias, o NPS de desenvolvedores subiu de 21 para 63 e o índice de fraude ficou abaixo de 0,03%. Os dados convenceram a diretoria a criar a unidade Banking & Payments as a Service em 2021 com orçamento de R$85M e squad dedicado. Em 2022, assinei contrato plurianual com uma fintech mexicana (GMV projetado de R$6,4B) e assumi a cadeira de chair no conselho de venture building para escalar ofertas B2B na América Latina.`,
    l: `Lição — Pensar grande é transformar ativo interno em plataforma regional sustentada por métricas. Aprendi que protótipo funcionando, business case robusto e mecanismos de governança são o tripé que neutraliza objeções regulatórias e financeiras. Hoje, sempre que identifico um ativo subaproveitado, meu reflexo é monetizá-lo com pilotos rápidos e estrutura que amarre a agenda de crescimento.`
  },
  en: {
    s: `Situation — By 2018 Next ran 6.5 million digital accounts with 99.98% uptime, yet strategy remained confined to Brazilian B2C. Stripe, dLocal, and Adyen were scaling across the region signing fintechs we ignored. I showed that staying local meant wasting a BRL 120M/year fixed-cost asset that could become revenue if I turned our stack into a regional platform.`,
    t: `Task — As innovation Product Manager my formal mandate was shipping app features. I set a larger mission: prove our payments stack could become an exportable product. I set personal targets to unlock technical feasibility in 120 days, close three paying pilots in 12 months, and design a business plan for BRL 70M ARR within three years at >55% gross margin.`,
    a: `Action — I led the effort end-to-end. I inventoried 214 internal APIs, prioritized 47 critical ones using a value-versus-risk matrix, and designed a multi-tenant architecture with data segregation to answer legal's objection. Within 45 days I secured a BACEN green light. I built a developer portal with sandbox and demoed a six-minute onboarding (versus 6-9 months previously). The CFO feared cannibalization; I modeled take rates between 2.3% and 2.7%, proved utilization would rise 28% with no extra CAPEX, and limited B2C overlap through scoped APIs. To validate demand I ran a roadshow in Mexico, Colombia, and Chile, interviewed 23 fintechs, and converted seven LOIs with minimum volume clauses. I personally negotiated pilots with two scale-ups (Kushki and Clip) plus a Brazilian independent acquirer, delivering BRL 1.1B GMV in nine months. I installed governance: a monthly New Ventures committee, quarterly scorecards, and an automatic kill switch if SLA dropped below 99.9%.`,
    r: `Result — Pilots generated BRL 18.4M in annualized revenue at 58% gross margin and shortened the payback on the BRL 32M investment to 21 months. Integration time fell from 182 days to nine, developer NPS rose from 21 to 63, and fraud stayed below 0.03%. The evidence convinced leadership to create the Banking & Payments as a Service unit in 2021 with BRL 85M budget and dedicated squad. In 2022 I signed a multi-year deal with a Mexican fintech (projected BRL 6.4B GMV) and became chair of the venture-building council to scale B2B offerings across Latin America.`,
    l: `Learning — Thinking big is about turning an internal asset into a regional platform backed by hard metrics. I learned that working prototypes, robust business cases, and governance mechanisms are the trio that neutralizes regulatory and financial objections. Whenever I spot an underused asset, my instinct now is to monetize it via fast pilots and a structure that locks the growth agenda.`
  },
  fups: [
    {
      q: "Como você priorizou quais APIs expor primeiro?",
      a: "Apliquei matriz valor versus risco, cruzei volume interno com demanda de parceiros e escolhi 47 APIs que entregavam 85% do valor percebido com risco regulatório baixo.",
      q_en: "How did you prioritize which APIs to expose first?",
      a_en: "I used a value-versus-risk matrix, crossed internal volume with partner demand, and chose 47 APIs delivering 85% of perceived value with low regulatory risk."
    },
    {
      q: "Que objeções regulatórias surgiram e como você tratou?",
      a: "O jurídico temia mistura de dados. Modelei segregação lógica por tenant, roteamento dedicado e log criptografado auditável; o parecer do BACEN confirmou aderência à Circular 3.681.",
      q_en: "Which regulatory objections surfaced and how did you solve them?",
      a_en: "Legal feared data mixing. I designed tenant-based logical segregation, dedicated routing, and encrypted auditable logs; BACEN confirmed compliance with Circular 3.681."
    },
    {
      q: "Como você definiu a precificação da oferta PaaS?",
      a: "Comparei benchmarks (Stripe 2,9%, dLocal 3,2%), defini faixa de 2,3%-2,7%, criei tiers variáveis e rebates progressivos para incentivar volume.",
      q_en: "How did you set PaaS pricing?",
      a_en: "I benchmarked Stripe at 2.9% and dLocal at 3.2%, set a 2.3%-2.7% band, built variable tiers, and tied progressive rebates to volume."
    },
    {
      q: "Que conflito apareceu com a TI legada?",
      a: "TI queria priorizar backlog interno. Eu provei que expor APIs reduziria 18% das requisições repetitivas e financiei squads híbridos via orçamento de inovação.",
      q_en: "What conflict arose with legacy IT?",
      a_en: "Legacy IT wanted to focus on internal backlog. I showed exposing APIs would cut 18% of repetitive requests and funded hybrid squads with the innovation budget."
    },
    {
      q: "Como demonstrou demanda real dos parceiros?",
      a: "Além das 23 entrevistas, converti sete LOIs com cláusulas de volume mínimo e dois pilotos faturaram R$6,1M em seis meses, provando willingness to pay.",
      q_en: "How did you evidence real partner demand?",
      a_en: "Beyond 23 interviews I converted seven LOIs with minimum volume clauses, and two pilots billed BRL 6.1M in six months, validating willingness to pay."
    },
    {
      q: "Quais métricas acompanharam no comitê New Ventures?",
      a: "Reportei GMV, uptime, latência P95, fraude, receita líquida, CAC e margem. Expansões só avançavam com uptime >99,95% e margem >50%.",
      q_en: "Which metrics did you track in the New Ventures committee?",
      a_en: "I reported GMV, uptime, P95 latency, fraud, net revenue, CAC, and margin. Expansion only moved forward with uptime >99.95% and margin >50%."
    },
    {
      q: "Como você evitou impacto no B2C enquanto pilotava o PaaS?",
      a: "Segmentei ambientes, criei quotas de capacidade e ativei throttling automático quando o consumo chegava a 80%, garantindo que o B2C mantivesse SLA.",
      q_en: "How did you prevent B2C impact while piloting PaaS?",
      a_en: "I segmented environments, set capacity quotas, and triggered automatic throttling at 80% consumption to keep B2C SLA intact."
    },
    {
      q: "Qual aprendizado comercial os pilotos geraram?",
      a: "Descobri que onboarding assistido reduzia churn pós-proposta. Com squad dedicado por quatro semanas, a queda passou de 38% para 11%.",
      q_en: "What commercial learning came from the pilots?",
      a_en: "Guided onboarding cut post-proposal churn. With a four-week dedicated squad it dropped from 38% to 11%."
    },
    {
      q: "Como preparou a organização para escalar sem você?",
      a: "Documentei operating playbook, formei três product leads sucessores e atrelei bônus a KPIs. Após minha saída, a unidade entregou 104% da meta anual.",
      q_en: "How did you prepare the organization to scale without you?",
      a_en: "I documented the operating playbook, trained three successor product leads, and tied bonuses to KPIs. After I rotated out the unit delivered 104% of the annual goal."
    },
    {
      q: "Qual próximo passo você deixou desenhado?",
      a: "Elaborei roadmap de crédito como serviço com score alternativo, iniciei POC com duas fintechs mexicanas e projetei GMV adicional de R$3,2B em 24 meses.",
      q_en: "What next step did you outline?",
      a_en: "I drafted a credit-as-a-service roadmap with alternative scoring, launched POCs with two Mexican fintechs, and projected an extra BRL 3.2B GMV in 24 months."
    }
  ]
};

export default case_3;
