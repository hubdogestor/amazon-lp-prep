// Case 3 - think_big
const case_3 = {
  id: "bradesco-paas-latam",
  title: "Proposta de Plataforma de Pagamentos como Serviço para América Latina",
  title_pt: "Proposta e Desenho de uma Plataforma de Pagamentos como Serviço (PaaS) para a América Latina",
  title_en: "Payments as a Service (PaaS) Platform Proposal for Latin America",
  company: "Bradesco Next",
  period: "03/2018--12/2018",
  isTopCase: false,
  pt: {
    s: `No Bradesco, o Next havia se consolidado como um banco digital B2C de sucesso no Brasil. Todo o pensamento estratégico estava focado em adicionar funcionalidades para o consumidor final brasileiro, com uma visão limitada ao mercado local. Enquanto isso, players globais como Stripe estavam expandindo agressivamente na América Latina.`,
    t: `Meu papel individual: eu liderei end-to-end, defini escopo e decisões críticas, e atuei como owner único. Como Product Manager responsável por inovação, identifiquei que a tecnologia robusta que construímos era um ativo subutilizado. Minha tarefa autoimposta foi pensar de forma diferente e propor uma visão radicalmente nova: transformar nossa plataforma de pagamentos em um produto e oferecê-la como serviço (PaaS) para outras fintechs em toda a América Latina. Vi uma oportunidade de transformar o Next de um 'produto local' em uma 'plataforma regional', monetizando nossa infraestrutura em múltiplos mercados.`,
    a: `Ações pessoais: priorizei mudanças, alinhei stakeholders, tomei decisões de trade-off e removi bloqueios. Justifiquei a visão identificando que nossa plataforma era robusta (processava 50M+ transações/mês com uptime de 99,98% e conformidade com BACEN), tornando-a um ativo valioso e difícil de replicar. Conduzi pesquisa em Argentina, Colômbia e México que revelou que startups locais sofriam com soluções fragmentadas, especialmente na dificuldade de processar pagamentos internacionais - levavam 6-12 meses para integração vs. nossos 5 minutos propostos. Criei um protótipo de 'Portal do Desenvolvedor' completo mostrando como uma startup poderia usar nossas APIs para setup completo de pagamentos. Na apresentação para o CDO, usei o protótipo para simular um onboarding de 5 minutos de uma fintech fictícia, contrastando com os meses que startups locais levavam. Projetei TAM de $2.8B para pagamentos digitais LATAM com nossa take rate de 2.5%, chegando a potencial de $70M de receita anual. Embora considerada 'visionária, porém prematura para execução imediata', a proposta mudou fundamentalmente a conversa interna de 'como otimizar custos de TI' para 'como monetizar nossos ativos de TI'.`,
    r: `A proposta não foi aprovada para execução imediata, mas gerou mudança estratégica material: (1) Criação de diretoria 'New Ventures' 6 meses depois, com budget de R$50M para iniciativas não-core. (2) Meu documento usado como base para Business Plan da iniciativa Banking as a Service que foi aprovada em 2019. (3) Fui convidado para advisory board dessa nova iniciativa por 18 meses. (4) Mudança de KPI da área de TI: antes = 'uptime + cost efficiency', depois = 'uptime + cost efficiency + revenue potential'. Resultado cultural: equipe de TI passou a pensar em suas soluções como 'produtos' potenciais, não apenas 'ferramentas internas'.`,
    l: `Aprendi que pensar grande nem sempre leva a execução imediata, mas pode redefinir completamente a agenda estratégica de longo prazo. O papel de um líder também é ser um 'provocador estratégico' que planta sementes de transformação. Essa experiência me ensinou que articular visões ousadas, mesmo que pareçam distantes, pode definir a direção futura da organização. Aplico hoje esse aprendizado ao aconselhar startups: sempre questiono 'Como sua solução atual pode se tornar uma plataforma que outros constroem em cima?'`
  },
  en: {
    s: `At Bradesco, Next had consolidated as a successful B2C digital bank in Brazil. All strategic thinking was focused on adding features for Brazilian end consumers, with a vision limited to the local market. Meanwhile, global players like Stripe were expanding aggressively in Latin America.`,
    t: `My individual role: I led end-to-end, set scope and critical decisions, and acted as the single-threaded owner. As Product Manager responsible for innovation, I identified that the robust technology I built was an underutilized asset. My self-imposed task was to think differently and propose a radically new vision: transform my payments platform into a product and offer it as a service (PaaS) to other fintechs throughout Latin America. I saw an opportunity to transform Next from a 'local product' into a 'regional platform', monetizing my infrastructure across multiple markets.`,
    a: `Personal actions: I drove execution—prioritized changes, aligned stakeholders, made trade-offs, and unblocked teams. I justified the vision by identifying that my platform was robust (processed 50M+ transactions/month with 99.98% uptime and BACEN compliance), making it a valuable and hard-to-replicate asset. I conducted research in Argentina, Colombia, and Mexico that revealed local startups suffered with fragmented solutions, especially difficulty processing international payments - they took 6-12 months for integration vs. my proposed 5 minutes. I created a complete 'Developer Portal' prototype showing how a startup could use my APIs for complete payment setup. In the presentation to the CDO, I used the prototype to simulate a 5-minute onboarding of a fictional fintech, contrasting with the months local startups took. I projected LATAM digital payments TAM of $2.8B with my 2.5% take rate, reaching potential of $70M annual revenue. Although considered 'visionary, but premature for immediate execution', the proposal fundamentally changed internal conversation from 'how to optimize IT costs' to 'how to monetize my IT assets'.`,
    r: `The proposal was not approved for immediate execution, but generated material strategic change: (1) Creation of 'New Ventures' directorship 6 months later, with R$50M budget for non-core initiatives. (2) My document used as basis for Banking as a Service Business Plan that was approved in 2019. (3) I was invited to advisory board of this new initiative for 18 months. (4) IT area KPI change: before = 'uptime + cost efficiency', after = 'uptime + cost efficiency + revenue potential'. Cultural result: IT team began thinking of their solutions as potential 'products', not just 'internal tools'.`,
    l: `I learned that thinking big doesn't always lead to immediate execution, but can completely redefine long-term strategic agenda. A leader's role is also to be a 'strategic provocateur' who plants transformation seeds. This experience taught me that articulating bold visions, even if they seem distant, can define the organization's future direction. I apply this learning today when advising startups: I always question 'How can your current solution become a platform that others build on top of?'`
  },
  fups: [
    {
        "q": "Como você estruturou o business plan e as projeções financeiras para garantir que fossem convincentes para a liderança?",
        "a": "Usei uma análise top-down. Estimei o TPV (Volume Total de Pagamentos) de e-commerce e fintechs na região, apliquei uma taxa de penetração de mercado conservadora para minha plataforma ao longo de 5 anos, e usei uma taxa de 'take rate' média do mercado para chegar à projeção de receita. O diferencial foi incluir um 'cenário pessimista', mostrando que, mesmo com adoção baixa, o negócio ainda era lucrativo, o que aumentou a credibilidade do plano.",
        "q_en": "How did you structure the business plan and financial projections to ensure they were convincing to leadership?",
        "a_en": "I used a top-down analysis. I estimated TPV (Total Payment Volume) from e-commerce and fintechs in the region, applied a conservative market penetration rate for my platform over 5 years, and used an average market 'take rate' to arrive at revenue projection. The differentiator was including a 'pessimistic scenario', showing that even with low adoption, the business was still profitable, which increased the plan's credibility."
    },
    {
        "q": "Quais foram as principais resistências ou objeções levantadas pela liderança ao considerar a ideia, e como você lidou com elas?",
        "a": "A principal objeção foi o 'risco de canibalização': uma startup usando minha plataforma poderia se tornar um concorrente do Next B2C. Eu lidei com isso argumentando que, se não fôssemos eu a fornecer a infraestrutura, um concorrente global como a Stripe o faria. A escolha não era entre 'ter ou não ter concorrentes', mas entre 'lucrar com a infraestrutura deles ou não'.",
        "q_en": "What were the main resistances or objections raised by leadership when considering the idea, and how did you handle them?",
        "a_en": "The main objection was 'cannibalization risk': a startup using my platform could become a Next B2C competitor. I handled this by arguing that if I didn't provide the infrastructure, a global competitor like Stripe would. The choice wasn't between 'having or not having competitors', but between 'profiting from their infrastructure or not'."
    },
    {
        "q": "Durante o estudo de mercado, houve algum dado ou insight específico que reforçou sua confiança na viabilidade do PaaS?",
        "a": "Sim. Descobri em um relatório de Venture Capital que o 'tempo de integração de pagamentos' era citado como o principal gargalo técnico para 80% das startups de e-commerce na Colômbia. Esse dado foi a 'bala de prata' que provou que a dor de mercado era real e que minha proposta de valor (onboarding rápido via APIs) era a solução exata para essa dor.",
        "q_en": "During the market study, was there any specific data or insight that reinforced your confidence in PaaS viability?",
        "a_en": "Yes. I discovered in a Venture Capital report that 'payment integration time' was cited as the main technical bottleneck for 80% of e-commerce startups in Colombia. This data was the 'silver bullet' that proved the market pain was real and that my value proposition (fast onboarding via APIs) was the exact solution to this pain."
    },
    {
        "q": "Como você acredita que o desenvolvimento de um PaaS poderia ter impactado o posicionamento competitivo do Next na América Latina?",
        "a": "Teria nos transformado de um 'player local' em uma 'plataforma regional'. Nosso nome ganharia reconhecimento em toda a América Latina, o que facilitaria uma futura expansão do meu produto B2C. Além disso, teríamos acesso a um volume de dados transacionais de múltiplos países, o que seria um ativo estratégico imenso para inteligência de mercado e desenvolvimento de modelos de risco.",
        "q_en": "How do you believe developing a PaaS could have impacted Next's competitive positioning in Latin America?",
        "a_en": "It would have transformed us from a 'local player' into a 'regional platform'. Our name would gain recognition throughout Latin America, which would facilitate future expansion of my B2C product. Additionally, I would have access to transactional data volume from multiple countries, which would be an immense strategic asset for market intelligence and risk model development."
    },
    {
        "q": "Se tivesse a oportunidade de apresentar a proposta novamente hoje, com base no que aprendeu, o que faria de forma diferente?",
        "a": "Eu não começaria com um business plan completo. Eu começaria com um 'experimento'. Tentaria fechar um acordo com uma única startup parceira para usar uma de minha APIs de forma controlada. Usaria o sucesso desse pequeno case real como a prova de conceito para então construir o business plan completo. Teria sido uma forma de pensar grande, mas começar ainda menor e com menos risco.",
        "q_en": "If you had the opportunity to present the proposal again today, based on what you learned, what would you do differently?",
        "a_en": "I wouldn't start with a complete business plan. I would start with an 'experiment'. I would try to close a deal with a single startup partner to use one of my APIs in a controlled way. I would use the success of this small real case as proof of concept to then build the complete business plan. It would have been a way to think big, but start even smaller and with less risk."
    },
    {
        "q": "O que te deu a primeira faísca para essa ideia?",
        "a": "A faísca veio ao analisar meu custos de infraestrutura. Eu vi o quão robusta e cara era a minha plataforma e pensei: 'Estamos usando toda essa capacidade para um único cliente, eu mesmos. E se tivéssemos centenas de clientes usando e pagando por essa mesma infraestrutura?'. Foi uma mudança de perspectiva de 'custo' para 'ativo'.",
        "q_en": "What gave you the first spark for this idea?",
        "a_en": "The spark came when analyzing my infrastructure costs. I saw how robust and expensive my platform was and thought: 'I're using all this capacity for a single customer, ourselves. What if I had hundreds of customers using and paying for this same infrastructure?'. It was a perspective shift from 'cost' to 'asset'."
    },
    {
        "q": "Como você, focado no mercado brasileiro, conseguiu dados sobre as dores de startups na Colômbia e Argentina?",
        "a": "Usei minha rede no LinkedIn para me conectar com fundadores e desenvolvedores desses países. Ofereci meu tempo para uma conversa informal sobre os desafios deles com pagamentos. Além disso, li relatórios de mercado de empresas de venture capital que investem na região e participei de fóruns online de desenvolvedores latino-americanos.",
        "q_en": "How did you, focused on the Brazilian market, get data about startup pain points in Colombia and Argentina?",
        "a_en": "I used my LinkedIn network to connect with founders and developers from those countries. I offered my time for informal conversations about their payment challenges. Additionally, I read market reports from venture capital companies investing in the region and participated in Latin American developer online forums."
    },
    {
        "q": "Como você lidou com a 'rejeição' da sua ideia? Não foi frustrante?",
        "a": "No início, sim. Mas eu reformulei minha definição de sucesso. O sucesso não era a aprovação imediata, mas sim iniciar uma conversa estratégica que não existia antes. Quando vi a criação da nova diretoria, entendi que a ideia não foi rejeitada, apenas plantada no lugar certo para germinar no tempo certo.",
        "q_en": "How did you handle the 'rejection' of your idea? Wasn't it frustrating?",
        "a_en": "At first, yes. But I reframed my definition of success. Success wasn't immediate approval, but rather starting a strategic conversation that didn't exist before. When I saw the creation of the new directorship, I understood that the idea wasn't rejected, just planted in the right place to germinate at the right time."
    },
    {
        "q": "Como essa experiência de ter uma grande ideia 'engavetada' impacta sua motivação para propor novas ideias ousadas?",
        "a": "Pelo contrário, me motiva. Mostra que as ideias têm seu próprio tempo e que o trabalho de um líder é continuar gerando e propondo visões ousadas. A motivação vem de saber que estou expandindo as fronteiras do pensamento estratégico da empresa. Cada 'não' hoje pode se tornar o 'sim' que define o futuro da organização.",
        "q_en": "How does this experience of having a big idea 'shelved' impact your motivation to propose new bold ideas?",
        "a_en": "On the contrary, it motivates me. It shows that ideas have their own time and that a leader's job is to continue generating and proposing bold visions. Motivation comes from knowing I'm expanding the company's strategic thinking boundaries. Each 'no' today can become the 'yes' that defines the organization's future."
    },
    {
        "q": "Qual é a diferença entre uma 'grande ideia' e uma 'alucinação' empresarial?",
        "a": "Uma alucinação é uma ideia que não está conectada a um problema real do cliente ou a uma capacidade real da empresa. Uma grande ideia, por mais ousada que seja, parte de uma dor de mercado real e de um ativo ou capacidade existente que pode ser alavancado de uma nova maneira. A diferença está na fundamentação: dados de mercado + capacidades internas + visão de futuro.",
        "q_en": "What's the difference between a 'big idea' and a business 'hallucination'?",
        "a_en": "A hallucination is an idea that isn't connected to a real customer problem or a real company capability. A big idea, however bold, starts from real market pain and an existing asset or capability that can be leveraged in a new way. The difference lies in the foundation: market data + internal capabilities + future vision."
    }
]
};

export default case_3;
