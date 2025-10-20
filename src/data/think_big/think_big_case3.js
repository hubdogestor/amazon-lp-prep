// Case 3 - think_big
const case_3 = {
  id: "bradesco-paas-latam",
  title: "Proposta de Plataforma de Pagamentos como Serviço para América Latina",
  title_pt: "Proposta e Desenho de uma Plataforma de Pagamentos como Serviço (PaaS) para a América Latina",
  title_en: "Payments as a Service (PaaS) Platform Proposal for Latin America",
  company: "Bradesco Next",
  period: "03/2018--06/2022",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: `Situação — Em 2018, o Next operava 6,5 milhões de contas digitais com uptime de 99,98%, porém toda a estratégia seguia confinada ao B2C brasileiro. Stripe, dLocal e Adyen avançavam na região capturando fintechs que ignorávamos. Eu analisei feedback de 340 comerciantes parceiros do Next que reclamavam de integrações lentas e descobri que 68% desejavam APIs simples para oferecer pagamentos aos seus próprios clientes finais. Eu mostrei que manter foco local significava desperdiçar um ativo de R$120M/ano em custos fixos que poderia virar receita se eu transformasse nossa stack em plataforma regional - e, mais importante, permitiria que milhões de consumidores latino-americanos tivessem experiências de pagamento tão rápidas quanto as que oferecíamos no Brasil.`,
    t: `Meu mandato oficial era lançar features para o app, mas eu me impus uma missão maior: provar que nossa stack de pagamentos poderia se tornar um produto exportável. **Minha tarefa era validar a viabilidade técnica em 120 dias, fechar 3 pilotos pagantes em 12 meses que impactassem 500 mil consumidores e desenhar um business case para gerar R$70M de ARR em 3 anos,** transformando um centro de custo em uma nova linha de negócio e expandindo nossa visão para além das fronteiras.`,
    a: `Para transformar a visão em realidade, liderei a iniciativa de ponta a ponta. Priorizei 47 das 214 APIs internas com base no impacto para o consumidor final, como latência e taxa de aprovação, e desenhei uma arquitetura multi-tenant que apaziguou as preocupações do jurídico, obtendo o parecer do BACEN em 45 dias. **Para provar o valor, construí um portal de desenvolvedores com um sandbox que demonstrava um onboarding em 6 minutos, um salto imenso em relação aos 6-9 meses do modelo legado.** Entrevistei 42 consumidores no México e na Colômbia e garanti que nossas APIs respondessem em <800ms, atacando a principal causa de abandono de checkout. Enfrentei o ceticismo do CFO sobre canibalização com um modelo de take rate e provei a demanda com 7 cartas de intenção de fintechs regionais.`,
    r: `Os resultados validaram a ousadia da visão. **Os pilotos geraram R$18,4M de receita anualizada com 58% de margem bruta, reduzindo o payback do investimento para 21 meses.** Para o consumidor final, o impacto foi ainda mais claro: o tempo de checkout caiu 74% (de 4.2s para 1.1s), a taxa de abandono de pagamento despencou de 28% para 9%, e o NPS dos usuários de nossos parceiros subiu de 34 para 67. O sucesso levou à criação de uma nova unidade de negócio com um orçamento de R$85M e culminou na minha nomeação para liderar a expansão B2B na América Latina.`,
    l: `A maior lição foi que pensar grande significa transformar um ativo interno em uma plataforma regional, mas isso só é possível com uma execução obcecada pelo cliente e validada por métricas. **Aprendi que um protótipo funcional, um business case robusto e uma governança centrada no cliente são o tripé que vence objeções internas e abre caminho para a inovação.** Hoje, meu instinto ao ver um ativo subutilizado é aplicar esse mesmo playbook: monetizar com pilotos rápidos, medir o impacto no cliente final e construir a estrutura para escalar o crescimento.`
  },
  en: {
    s: `Situation — By 2018 Next ran 6.5 million digital accounts with 99.98% uptime, yet strategy remained confined to Brazilian B2C. Stripe, dLocal, and Adyen were scaling across the region signing fintechs we ignored. I analyzed feedback from 340 Next merchant partners complaining about slow integrations and discovered 68% wanted simple APIs to offer payments to their own end customers. I showed that staying local meant wasting a BRL 120M/year fixed-cost asset that could become revenue if I turned our stack into a regional platform - and, more importantly, would enable millions of Latin American consumers to have payment experiences as fast as what we offered in Brazil.`,
    t: `My official mandate was to launch app features, but I set a bigger mission for myself: to prove that our payments stack could become an exportable product. **My task was to validate technical feasibility in 120 days, close 3 paying pilots in 12 months impacting 500,000 consumers, and design a business case to generate R$70M in ARR in 3 years,** turning a cost center into a new business line and expanding our vision beyond borders.`,
    a: `To turn this vision into reality, I led the initiative end-to-end. I prioritized 47 of the 214 internal APIs based on end-consumer impact, such as latency and approval rates, and designed a multi-tenant architecture that appeased legal concerns, obtaining BACEN's approval in 45 days. **To prove the value, I built a developer portal with a sandbox demonstrating a 6-minute onboarding, a huge leap from the 6-9 months of the legacy model.** I interviewed 42 consumers in Mexico and Colombia and ensured our APIs responded in <800ms, addressing the main cause of checkout abandonment. I faced the CFO's skepticism about cannibalization with a take-rate model and proved demand with 7 letters of intent from regional fintechs.`,
    r: `The results validated the boldness of the vision. **The pilots generated R$18.4M in annualized revenue with a 58% gross margin, reducing the investment payback to 21 months.** For the end consumer, the impact was even clearer: checkout time dropped by 74% (from 4.2s to 1.1s), payment abandonment rate plummeted from 28% to 9%, and our partners' user NPS increased from 34 to 67. The success led to the creation of a new business unit with an R$85M budget and culminated in my appointment to lead the B2B expansion in Latin America.`,
    l: `The biggest lesson was that thinking big means turning an internal asset into a regional platform, but this is only possible with customer-obsessed execution validated by metrics. **I learned that a functional prototype, a robust business case, and customer-centric governance are the tripod that overcomes internal objections and paves the way for innovation.** Today, my instinct when I see an underutilized asset is to apply this same playbook: monetize with fast pilots, measure the impact on the end customer, and build the structure to scale growth.`
  },
  fups: [
    {
      q: "Qual foi seu maior erro ou falha neste caso?",
      a: "Meu maior erro foi subestimar o ceticismo do CFO sobre a canibalização da receita. Inicialmente, apresentei a visão estratégica, mas não um modelo financeiro robusto. Perdi um ciclo de aprovação. Aprendi que uma visão 'think big' precisa ser acompanhada de uma planilha 'dive deep' que prove o valor e mitigue os medos financeiros da liderança sênior.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "My biggest mistake was underestimating the CFO's skepticism about revenue cannibalization. Initially, I presented the strategic vision but not a robust financial model. I missed an approval cycle. I learned that a 'think big' vision must be accompanied by a 'dive deep' spreadsheet that proves the value and mitigates the senior leadership's financial fears."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Hoje, eu começaria pelo sandbox e pelo portal de desenvolvedores. Em vez de gastar tempo em apresentações, eu demonstraria o onboarding de 6 minutos ao vivo para o CFO e o CTO desde o primeiro dia. Uma demonstração funcional que prova a simplicidade e o valor para o cliente final é mais poderosa do que qualquer slide para vencer o ceticismo inicial.",
      q_en: "What would you do differently today?",
      a_en: "Today, I would start with the sandbox and the developer portal. Instead of spending time on presentations, I would demonstrate the 6-minute onboarding live to the CFO and CTO from day one. A functional demo that proves the simplicity and value for the end customer is more powerful than any slide to overcome initial skepticism."
    },
    {
      q: "Qual foi o obstáculo mais difícil de superar que você enfrentou?",
      a: "O obstáculo mais difícil foi o conflito com a área de TI legada, que via meu projeto como uma distração do backlog interno. Superei isso provando com dados que expor as APIs como um produto reduziria em 18% as requisições repetitivas que eles recebiam, liberando tempo da equipe deles. Além disso, consegui um orçamento de inovação para financiar squads híbridos, mostrando que era uma iniciativa de receita, não de custo.",
      q_en: "What was the hardest obstacle to overcome that you faced?",
      a_en: "The hardest obstacle was the conflict with the legacy IT area, which saw my project as a distraction from the internal backlog. I overcame this by proving with data that exposing the APIs as a product would reduce by 18% the repetitive requests they received, freeing up their team's time. Additionally, I secured an innovation budget to fund hybrid squads, showing it was a revenue initiative, not a cost one."
    },
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "O principal risco era regulatório, especificamente a mistura de dados de clientes em uma arquitetura multi-tenant. Mitiguei isso desenhando uma segregação lógica por tenant e obtendo um parecer formal do BACEN em 45 dias, antes de escrever o código. Outro risco era a performance; garanti que as novas APIs não impactassem o B2C com quotas de capacidade e throttling automático a 80% do consumo.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "The main risk was regulatory, specifically the mixing of customer data in a multi-tenant architecture. I mitigated this by designing logical segregation per tenant and obtaining a formal opinion from BACEN in 45 days, before writing the code. Another risk was performance; I ensured the new APIs wouldn't impact the B2C with capacity quotas and automatic throttling at 80% consumption."
    },
    {
      q: "Que dados você usou e qual foi a racional de cálculo para o payback de 21 meses?",
      a: "Usei a receita anualizada dos pilotos (R$18,4M) com 58% de margem bruta, resultando em um lucro bruto de R$10,67M/ano. O investimento total no projeto (desenvolvimento, infra, time) foi de R$18,7M. O payback foi calculado como Investimento / Lucro Bruto Anual, ou seja, R$18,7M / R$10,67M = 1,75 anos, o que equivale a aproximadamente 21 meses.",
      q_en: "What data did you use and what was your calculation rationale for the 21-month payback?",
      a_en: "I used the annualized revenue from the pilots (BRL 18.4M) with a 58% gross margin, resulting in a gross profit of BRL 10.67M/year. The total project investment (development, infrastructure, team) was BRL 18.7M. The payback was calculated as Investment / Annual Gross Profit, i.e., BRL 18.7M / BRL 10.67M = 1.75 years, which is approximately 21 months."
    },
    {
      q: "Como você usou o aprendizado desse caso em outras frentes / trabalhos?",
      a: "Esse caso criou meu playbook para 'monetizar ativos internos'. Na Unimed, usei a mesma lógica para transformar a rede de médicos em uma plataforma de telemedicina aberta, gerando uma nova linha de receita. A lição de que um protótipo funcional e um business case robusto vencem objeções internas foi fundamental para destravar inovações em ambientes corporativos tradicionais.",
      q_en: "How did you use the learning from this case in other fronts / works?",
      a_en: "This case created my playbook for 'monetizing internal assets.' At Unimed, I used the same logic to transform the network of doctors into an open telemedicine platform, generating a new revenue stream. The lesson that a functional prototype and a robust business case overcome internal objections was fundamental to unlocking innovations in traditional corporate environments."
    },
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
