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
    s: "Em 2018, o Bradesco Next possuía uma stack de pagamentos de alta performance, mas com uma visão limitada ao B2C brasileiro. Enquanto isso, concorrentes como Stripe e Adyen expandiam na América Latina, capturando um mercado que ignorávamos. Identifiquei que nosso ativo, um centro de custo de R$120M/ano, poderia se tornar uma nova linha de receita. A visão era grande: transformar nossa infraestrutura interna em uma plataforma de Pagamentos como Serviço (PaaS) para toda a região, permitindo que milhões de novos consumidores tivessem acesso a pagamentos eficientes.",
    t: "Meu mandato oficial era limitado a evoluir o app, mas a oportunidade era muito maior. Eu me impus a missão de provar que poderíamos exportar nossa tecnologia. A meta era ambiciosa: em 12 meses, validar a viabilidade técnica, fechar 3 pilotos pagantes que impactassem 500 mil consumidores e construir um business case para gerar R$70M de ARR em 3 anos, efetivamente transformando um centro de custo em um negócio B2B de escala regional.",
    a: "Para tornar a visão tangível e vencer o ceticismo interno, minha ação principal foi construir um protótipo funcional: um portal de desenvolvedores com um sandbox que permitia o onboarding em apenas 6 minutos — um salto revolucionário comparado aos 6-9 meses do modelo legado. Em paralelo, priorizei as APIs com maior impacto no consumidor final, desenhei uma arquitetura multi-tenant que atendeu às exigências regulatórias e provei a demanda com 7 cartas de intenção de fintechs, desarmando as objeções sobre canibalização de receita.",
    r: "A visão foi validada pelos resultados. Os pilotos geraram R$18,4M de receita anualizada com 58% de margem, reduzindo o payback do investimento para 21 meses. Para o consumidor final, o impacto foi direto: o tempo de checkout caiu 74% e a taxa de abandono de carrinho despencou de 28% para 9%. O sucesso foi tão claro que levou à criação de uma nova unidade de negócio com um orçamento de R$85M, e fui nomeado para liderar essa expansão na América Latina.",
    l: "Aprendi que 'pensar grande' é enxergar o potencial de um ativo interno e transformá-lo em uma plataforma externa. Mas a visão só se concretiza com uma execução obcecada pelo cliente. Um protótipo funcional que resolve uma dor real, como o onboarding de 6 minutos, é a ferramenta mais poderosa para vencer objeções internas e pavimentar o caminho para a inovação. Hoje, meu playbook para escalar é este: prototipar rápido, medir o impacto no cliente final e construir a estrutura para crescer."
  },
  en: {
    s: "In 2018, Bradesco Next had a high-performance payment stack but a vision limited to the Brazilian B2C market. Meanwhile, competitors like Stripe and Adyen were expanding in Latin America, capturing a market we were ignoring. I identified that our asset, a BRL 120M/year cost center, could become a new revenue stream. The vision was big: to transform our internal infrastructure into a Payments as a Service (PaaS) platform for the entire region, allowing millions of new consumers to access efficient payments.",
    t: "My official mandate was limited to evolving the app, but the opportunity was much bigger. I set myself the mission of proving that we could export our technology. The goal was ambitious: in 12 months, validate the technical feasibility, close 3 paying pilots impacting 500,000 consumers, and build a business case to generate BRL 70M in ARR in 3 years, effectively turning a cost center into a regional-scale B2B business.",
    a: "To make the vision tangible and overcome internal skepticism, my main action was to build a functional prototype: a developer portal with a sandbox that allowed onboarding in just 6 minutes—a revolutionary leap compared to the 6-9 months of the legacy model. In parallel, I prioritized the APIs with the greatest impact on the end consumer, designed a multi-tenant architecture that met regulatory requirements, and proved demand with 7 letters of intent from fintechs, disarming objections about revenue cannibalization.",
    r: "The vision was validated by the results. The pilots generated BRL 18.4M in annualized revenue with a 58% margin, reducing the investment payback to 21 months. For the end consumer, the impact was direct: checkout time dropped by 74%, and the cart abandonment rate plummeted from 28% to 9%. The success was so clear that it led to the creation of a new business unit with a BRL 85M budget, and I was appointed to lead this expansion in Latin America.",
    l: "I learned that 'thinking big' is about seeing the potential of an internal asset and turning it into an external platform. But the vision only materializes with customer-obsessed execution. A functional prototype that solves a real pain point, like the 6-minute onboarding, is the most powerful tool to overcome internal objections and pave the way for innovation. Today, my playbook for scaling is this: prototype quickly, measure the impact on the end customer, and build the structure to grow."
  },
  fups: [
    {
      q: "Qual foi seu maior erro ou falha neste caso?",
      a: "Meu maior erro foi subestimar o ceticismo do CFO sobre a canibalização da receita. Apresentei a visão estratégica sem um modelo financeiro robusto que provasse o valor e mitigasse os medos da liderança. Perdi um ciclo de aprovação e aprendi que uma visão 'think big' precisa ser acompanhada de uma planilha 'dive deep' para se tornar realidade.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "My biggest mistake was underestimating the CFO's skepticism about revenue cannibalization. I presented the strategic vision without a robust financial model to prove the value and mitigate leadership's fears. I missed an approval cycle and learned that a 'think big' vision must be accompanied by a 'dive deep' spreadsheet to become a reality."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Hoje, eu começaria pelo sandbox. Em vez de gastar tempo em apresentações, eu demonstraria o onboarding de 6 minutos ao vivo para o CFO e o CTO desde o primeiro dia. Uma demonstração funcional que prova o valor para o cliente final é a ferramenta mais rápida para vencer o ceticismo e transformar uma ideia abstrata em um produto tangível.",
      q_en: "What would you do differently today?",
      a_en: "Today, I would start with the sandbox. Instead of spending time on presentations, I would demonstrate the 6-minute onboarding live to the CFO and CTO from day one. A functional demo that proves the value for the end customer is the fastest tool to overcome skepticism and turn an abstract idea into a tangible product."
    },
    {
      q: "Qual foi o obstáculo mais difícil que você enfrentou?",
      a: "O obstáculo mais difícil foi o conflito com a área de TI legada, que via o projeto como uma distração. Superei isso provando com dados que expor as APIs como um produto reduziria em 18% as requisições repetitivas que eles recebiam. Mostrei que a visão não era um custo, mas uma forma de otimizar o trabalho deles e gerar nova receita.",
      q_en: "What was the most difficult obstacle you faced?",
      a_en: "The most difficult obstacle was the conflict with the legacy IT area, which saw the project as a distraction. I overcame this by proving with data that exposing the APIs as a product would reduce their repetitive requests by 18%. I showed that the vision was not a cost, but a way to optimize their work and generate new revenue."
    },
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "O principal risco era regulatório, devido à arquitetura multi-tenant. Mitiguei isso desenhando uma segregação lógica de dados e obtendo um parecer formal do BACEN em 45 dias, antes de iniciar o desenvolvimento. O segundo risco era a performance; garanti a estabilidade do B2C com quotas de capacidade e throttling automático.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "The main risk was regulatory, due to the multi-tenant architecture. I mitigated this by designing a logical data segregation and obtaining a formal opinion from BACEN in 45 days, before starting development. The second risk was performance; I ensured B2C stability with capacity quotas and automatic throttling."
    },
    {
      q: "Que dados você usou e qual foi a racional de cálculo?",
      a: "Usei a receita anualizada dos pilotos (R$18,4M) com 58% de margem bruta, resultando em um lucro de R$10,67M/ano. O investimento total foi de R$18,7M. O payback foi calculado como Investimento / Lucro Bruto Anual (R$18,7M / R$10,67M), resultando em 1,75 anos, ou 21 meses. Isso provou a viabilidade financeira da visão.",
      q_en: "What data did you use and what was the calculation rationale?",
      a_en: "I used the annualized revenue from the pilots (BRL 18.4M) with a 58% gross margin, resulting in a profit of BRL 10.67M/year. The total investment was BRL 18.7M. The payback was calculated as Investment / Annual Gross Profit (BRL 18.7M / BRL 10.67M), resulting in 1.75 years, or 21 months. This proved the financial viability of the vision."
    },
    {
      q: "Como você usou o aprendizado desse caso em outras frentes?",
      a: "Esse caso criou meu playbook para 'monetizar ativos internos'. Na Unimed, usei a mesma lógica para transformar a rede de médicos em uma plataforma de telemedicina. A lição de que um protótipo funcional e um business case robusto vencem objeções internas foi fundamental para destravar inovações em ambientes corporativos tradicionais.",
      q_en: "How did you use the learning from this case in other areas?",
      a_en: "This case created my playbook for 'monetizing internal assets.' At Unimed, I used the same logic to turn the network of doctors into a telemedicine platform. The lesson that a functional prototype and a robust business case overcome internal objections was fundamental to unlocking innovations in traditional corporate environments."
    },
    {
      q: "Como você priorizou as APIs focando no impacto para o consumidor final?",
      a: "Entrevistei consumidores no México e na Colômbia e descobri que 73% abandonavam checkouts por latência. Criei uma matriz de valor que priorizava APIs que entregassem latência <800ms e cobrissem 85% do valor percebido pelo usuário final. Rejeitei APIs de relatórios que as fintechs queriam, mas que não impactavam a experiência do cliente delas.",
      q_en: "How did you prioritize APIs focusing on the end-consumer impact?",
      a_en: "I interviewed consumers in Mexico and Colombia and found that 73% abandoned checkouts due to latency. I created a value matrix that prioritized APIs delivering <800ms latency and covering 85% of the end-user's perceived value. I rejected reporting APIs that fintechs wanted but that didn't impact their customer's experience."
    },
    {
      q: "Qual era a visão de longo prazo para o PaaS além de pagamentos?",
      a: "A visão era criar um ecossistema completo. O próximo passo, que deixei desenhado, era lançar uma oferta de 'Crédito como Serviço', usando nosso motor de análise de risco para permitir que fintechs oferecessem crédito na ponta. A projeção era de um GMV adicional de R$3,2 bilhões em 24 meses.",
      q_en: "What was the long-term vision for the PaaS beyond payments?",
      a_en: "The vision was to create a complete ecosystem. The next step, which I outlined, was to launch a 'Credit as a Service' offering, using our risk analysis engine to allow fintechs to offer credit at the point of sale. The projection was for an additional BRL 3.2 billion in GMV within 24 months."
    },
    {
      q: "Como você preparou a organização para escalar a nova unidade de negócio sem você?",
      a: "Eu documentei todo o 'operating playbook' da nova unidade, formei três líderes de produto para serem meus sucessores e atrelei os bônus da equipe a KPIs de crescimento da plataforma. Após minha saída, a unidade entregou 104% da meta anual, provando que o modelo era autossustentável.",
      q_en: "How did you prepare the organization to scale the new business unit without you?",
      a_en: "I documented the new unit's entire 'operating playbook,' trained three product leaders to be my successors, and tied the team's bonuses to the platform's growth KPIs. After I left, the unit delivered 104% of its annual target, proving the model was self-sustaining."
    }
  ]
};

export default case_3;
