// Case 3 - think_big
const case_3 = {
  id: "bradesco-paas-latam",
  title: "Proposta de Plataforma de Pagamentos como Serviço para América Latina",
  title_pt: "Proposta e Desenho de uma Plataforma de Pagamentos como Serviço (PaaS) para a América Latina",
  title_en: "Payments as a Service (PaaS) Platform Proposal for Latin America",
  company: "Bradesco Next",
  period: "03/2018--06/2022",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: `Situação — Em 2018, o Next operava 6,5 milhões de contas digitais com uptime de 99,98%, porém toda a estratégia seguia confinada ao B2C brasileiro. Stripe, dLocal e Adyen avançavam na região capturando fintechs que ignorávamos. Eu analisei feedback de 340 comerciantes parceiros do Next que reclamavam de integrações lentas e descobri que 68% desejavam APIs simples para oferecer pagamentos aos seus próprios clientes finais. Eu mostrei que manter foco local significava desperdiçar um ativo de R$120M/ano em custos fixos que poderia virar receita se eu transformasse nossa stack em plataforma regional - e, mais importante, permitiria que milhões de consumidores latino-americanos tivessem experiências de pagamento tão rápidas quanto as que oferecíamos no Brasil.`,
    t: `Tarefa — Como Product Manager de inovação, meu mandato oficial era lançar features para o app. Eu me auto-impus uma missão maior centrada no cliente final: provar que a stack de pagamentos podia virar produto exportável que permitisse a consumidores latino-americanos terem a mesma experiência rápida e confiável de pagamento que oferecíamos no Brasil. Estabeleci metas pessoais de destravar viabilidade técnica em 120 dias, fechar três pilotos pagantes em 12 meses que impactassem pelo menos 500 mil consumidores finais, e desenhar business plan para gerar R$70M de ARR em três anos com margem bruta acima de 55%.`,
    a: `Ação — Eu liderei a iniciativa end-to-end focando no impacto para consumidores finais. Inventariei 214 APIs internas, priorizei 47 críticas usando matriz valor vs. risco centrada em experiência do usuário final (tempo de checkout, taxa de aprovação, latência percebida) e desenhei arquitetura multi-tenant com segregação de dados para mitigar a objeção do jurídico. Em 45 dias obtive parecer do BACEN. Construi portal de desenvolvedores com sandbox que permitia simular jornada completa do consumidor e demonstrei onboarding em seis minutos (contra 6-9 meses no modelo legado). Entrevistei 42 consumidores finais em México e Colômbia que usavam fintechs concorrentes e identifiquei que 73% abandonavam checkouts por latência >3 segundos - garanti que nossas APIs entregassem <800ms. O CFO temia canibalização; eu modelei take rate entre 2,3% e 2,7%, projetei aumento de 28% no uso da infraestrutura sem CAPEX adicional e mostrei que não concorreríamos com o B2C porque as APIs tinham limites de escopo. Para validar demanda, conduzi roadshow em México, Colômbia e Chile, entrevistei 23 fintechs e converti sete cartas de intenção vinculadas a volume mínimo. Negociei pessoalmente pilotos com duas scale-ups (Kushki e Clip) e uma adquirente brasileira independente, movimentando R$1,1B de GMV que impactou 680 mil consumidores finais em nove meses. Instituí governança formal com métricas centradas no cliente: comitê New Ventures mensal rastreando NPS de usuários finais, tempo de checkout, e taxa de abandono, scorecards trimestrais e kill switch automático se SLA ficasse abaixo de 99,9%.`,
    r: `Resultado — Os pilotos renderam receita anualizada de R$18,4M com margem bruta de 58% e reduziram o payback estimado (R$32M) para 21 meses. Mais importante para consumidores finais: tempo médio de checkout caiu de 4.2s para 1.1s (74% de redução), taxa de abandono em pagamentos reduziu de 28% para 9%, e NPS de usuários finais das fintechs parceiras subiu de 34 para 67. O tempo de integração caiu de 182 dias para nove dias, o NPS de desenvolvedores subiu de 21 para 63 e o índice de fraude ficou abaixo de 0,03%. Impactei 680 mil consumidores finais em nove meses (superando meta de 500 mil em 36%), com 92% reportando experiência de pagamento "excelente" ou "muito boa". Os dados convenceram a diretoria a criar a unidade Banking & Payments as a Service em 2021 com orçamento de R$85M e squad dedicado. Em 2022, assinei contrato plurianual com uma fintech mexicana (GMV projetado de R$6,4B alcançando 2,1 milhões de consumidores) e assumi a cadeira de chair no conselho de venture building para escalar ofertas B2B na América Latina.`,
    l: `Lição — Pensar grande é transformar ativo interno em plataforma regional sustentada por métricas. Aprendi que protótipo funcionando, business case robusto e mecanismos de governança são o tripé que neutraliza objeções regulatórias e financeiras. Hoje, sempre que identifico um ativo subaproveitado, meu reflexo é monetizá-lo com pilotos rápidos e estrutura que amarre a agenda de crescimento.`
  },
  en: {
    s: `Situation — By 2018 Next ran 6.5 million digital accounts with 99.98% uptime, yet strategy remained confined to Brazilian B2C. Stripe, dLocal, and Adyen were scaling across the region signing fintechs we ignored. I analyzed feedback from 340 Next merchant partners complaining about slow integrations and discovered 68% wanted simple APIs to offer payments to their own end customers. I showed that staying local meant wasting a BRL 120M/year fixed-cost asset that could become revenue if I turned our stack into a regional platform - and, more importantly, would enable millions of Latin American consumers to have payment experiences as fast as what we offered in Brazil.`,
    t: `Task — As innovation Product Manager my formal mandate was shipping app features. I set a larger customer-centric mission: prove our payments stack could become an exportable product enabling Latin American consumers to have the same fast, reliable payment experience we offered in Brazil. I set personal targets to unlock technical feasibility in 120 days, close three paying pilots in 12 months impacting at least 500K end consumers, and design a business plan for BRL 70M ARR within three years at >55% gross margin.`,
    a: `Action — I led the effort end-to-end focusing on end-consumer impact. I inventoried 214 internal APIs, prioritized 47 critical ones using a value-versus-risk matrix centered on end-user experience (checkout time, approval rate, perceived latency), and designed a multi-tenant architecture with data segregation to answer legal's objection. Within 45 days I secured a BACEN green light. I built a developer portal with sandbox that simulated complete consumer journey and demoed six-minute onboarding (versus 6-9 months previously). I interviewed 42 end consumers in Mexico and Colombia using competing fintechs and identified 73% abandoned checkouts due to latency >3 seconds - I ensured our APIs delivered <800ms. The CFO feared cannibalization; I modeled take rates between 2.3% and 2.7%, proved utilization would rise 28% with no extra CAPEX, and limited B2C overlap through scoped APIs. To validate demand I ran a roadshow in Mexico, Colombia, and Chile, interviewed 23 fintechs, and converted seven LOIs with minimum volume clauses. I personally negotiated pilots with two scale-ups (Kushki and Clip) plus a Brazilian independent acquirer, delivering BRL 1.1B GMV impacting 680K end consumers in nine months. I installed customer-centric governance: monthly New Ventures committee tracking end-user NPS, checkout time, and abandonment rate, quarterly scorecards, and automatic kill switch if SLA dropped below 99.9%.`,
    r: `Result — Pilots generated BRL 18.4M in annualized revenue at 58% gross margin and shortened the payback on the BRL 32M investment to 21 months. Most important for end consumers: average checkout time dropped from 4.2s to 1.1s (74% reduction), payment abandonment rate reduced from 28% to 9%, and end-user NPS of partner fintechs rose from 34 to 67. Integration time fell from 182 days to nine, developer NPS rose from 21 to 63, and fraud stayed below 0.03%. I impacted 680K end consumers in nine months (exceeding 500K goal by 36%), with 92% reporting "excellent" or "very good" payment experience. The evidence convinced leadership to create the Banking & Payments as a Service unit in 2021 with BRL 85M budget and dedicated squad. In 2022 I signed a multi-year deal with a Mexican fintech (projected BRL 6.4B GMV reaching 2.1M consumers) and became chair of the venture-building council to scale B2B offerings across Latin America.`,
    l: `Learning — Thinking big is about turning an internal asset into a regional platform backed by hard metrics. I learned that working prototypes, robust business cases, and governance mechanisms are the trio that neutralizes regulatory and financial objections. Whenever I spot an underused asset, my instinct now is to monetize it via fast pilots and a structure that locks the growth agenda.`
  },
  fups: [
    {
      q: "Como priorizou quais APIs expor primeiro focando no impacto real nos consumidores finais?",
      a: "Entrevistei 340 comerciantes parceiros do Next e 42 consumidores finais em México e Colômbia. Descobri que 73% dos consumidores abandonavam checkouts por latência >3 segundos. Criei matriz valor vs. risco com 3 dimensões: (1) experiência do usuário final (tempo de checkout, taxa de aprovação, latência percebida), (2) volume interno de transações, (3) risco regulatório. Das 214 APIs inventariadas, priorizei 47 que entregavam <800ms de latência, cobriam 85% do valor percebido pelos consumidores finais, e tinham baixo risco regulatório. Rejeitei APIs de relatórios que fintechs queriam mas não impactavam experiência do end-user.",
      q_en: "How did you prioritize which APIs to expose first focusing on real end-consumer impact?",
      a_en: "I interviewed 340 Next merchant partners and 42 end consumers in Mexico and Colombia. I discovered 73% of consumers abandoned checkouts due to latency >3 seconds. Created value vs. risk matrix with 3 dimensions: (1) end-user experience (checkout time, approval rate, perceived latency), (2) internal transaction volume, (3) regulatory risk. Of 214 inventoried APIs, I prioritized 47 delivering <800ms latency, covering 85% of value perceived by end consumers, with low regulatory risk. Rejected reporting APIs fintechs wanted but didn't impact end-user experience."
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
      q: "Como demonstrou demanda real focando no valor para consumidores finais, não apenas fintechs?",
      a: "Não validei apenas willingness to pay das fintechs - validei impacto nos consumidores finais delas. Entrevistei 42 consumidores em México/Colômbia e descobri que 73% abandonavam checkouts por latência. Nos pilotos com Kushki e Clip, rastreei: (1) tempo médio de checkout caiu de 4.2s para 1.1s (74% de redução), (2) taxa de abandono reduziu de 28% para 9%, (3) NPS de usuários finais das fintechs parceiras subiu de 34 para 67. Além das 23 entrevistas com fintechs, converti 7 LOIs com cláusulas de volume mínimo. Dois pilotos faturaram R$6,1M em 6 meses impactando 680K consumidores finais, provando que valor para end-user se traduzia em receita.",
      q_en: "How did you demonstrate real demand focusing on end-consumer value, not just fintechs?",
      a_en: "Didn't just validate fintechs' willingness to pay - validated impact on their end consumers. I interviewed 42 consumers in Mexico/Colombia and discovered 73% abandoned checkouts due to latency. In pilots with Kushki and Clip, I tracked: (1) average checkout time dropped from 4.2s to 1.1s (74% reduction), (2) abandonment rate reduced from 28% to 9%, (3) end-user NPS of partner fintechs rose from 34 to 67. Beyond 23 fintech interviews, converted 7 LOIs with minimum volume clauses. Two pilots billed R$ 6.1M in 6 months impacting 680K end consumers, proving end-user value translated to revenue."
    },
    {
      q: "Quais métricas centradas no consumidor final você rastreou no comitê New Ventures além de métricas B2B?",
      a: "Implementei 3 camadas de métricas: (1) Métricas B2B tradicionais: GMV, uptime, latência P95, fraude, receita líquida, CAC, margem; (2) Métricas de experiência do consumidor final: NPS de usuários finais das fintechs parceiras (subiu de 34 para 67), tempo médio de checkout (caiu de 4.2s para 1.1s), taxa de abandono de pagamentos (reduziu de 28% para 9%); (3) Impacto em escala: 680K consumidores finais impactados em 9 meses, 92% reportando experiência 'excelente'/'muito boa'. Expansões só avançavam com uptime >99,95%, margem >50%, E NPS de end-user >60. Foquei em Customer Obsession aplicado aos usuários das nossas fintechs parceiras.",
      q_en: "What end-consumer-centric metrics did you track in New Ventures committee beyond B2B metrics?",
      a_en: "Implemented 3 metric layers: (1) Traditional B2B metrics: GMV, uptime, P95 latency, fraud, net revenue, CAC, margin; (2) End-consumer experience metrics: partner fintechs' end-user NPS (rose from 34 to 67), average checkout time (dropped from 4.2s to 1.1s), payment abandonment rate (reduced from 28% to 9%); (3) Scale impact: 680K end consumers impacted in 9 months, 92% reporting 'excellent'/'very good' experience. Expansion only moved forward with uptime >99.95%, margin >50%, AND end-user NPS >60. Focused on Customer Obsession applied to our partner fintechs' users."
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
