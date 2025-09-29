// Amazon Leadership Principle: Invent and Simplify
// Data structure for study cases and follow-up questions

const invent_and_simplify_data = {
  principle: {
    title: "Inventar e Simplificar",
    title_en: "Invent and Simplify", 
    description: "Os líderes esperam e exigem inovação e invenção de suas equipes e sempre encontram maneiras de simplificar. Eles estão externamente cientes, procuram novas ideias de todos os lugares e não estão limitados por 'não foi inventado aqui'. À medida que fazemos coisas novas, aceitamos que podemos ser incompreendidos por longos períodos de tempo.",
    description_en: "Leaders expect and require innovation and invention from their teams and always find ways to simplify. They are externally aware, look for new ideas from everywhere, and are not limited by 'not invented here'. As we do new things, we accept that we may be misunderstood for long periods of time.",
    icon: ""
  },
  "id": "invent_and_simplify",
  "name": "Inventar e simplificar",
  cases: [
    {
      "title": "Criação da Plataforma Digital Zero-to-One de Empréstimos (Nubank)",
      "pt": {
        "s": "O Nubank estava expandindo rapidamente, mas não tinha uma plataforma robusta para empréstimos pessoais, perdendo receita significativa e dependendo de soluções terceirizadas caras e inflexíveis.",
        "t": "Minha tarefa era inventar e construir do zero uma plataforma completa de empréstimos pessoais, simplificando todo o processo desde a aplicação até o pagamento, integrada ao ecossistema Nubank.",
        "a": "Liderei uma equipe de 15 pessoas para criar uma plataforma end-to-end em 8 meses. Implementei machine learning para credit scoring em tempo real, automatização completa do processo de aprovação (de 5 dias para 30 segundos), API gateway para integração com parceiros, e interface mobile-first ultra-simplificada.",
        "r": "A plataforma processou R$ 2.1 bilhões em empréstimos no primeiro ano, com taxa de aprovação automática de 87%, redução de custos operacionais em 65%, e NPS de 74. A solução se tornou referência interna e base para outros produtos financeiros.",
        "l": "Esta experiência me ensinou que inventar não é apenas sobre tecnologia, mas sobre repensar completamente processos existentes. Simplificar a experiência do usuário enquanto se constrói arquiteturas complexas por trás requer balanceamento cuidadoso. A inovação real vem de questionar premissas básicas da indústria."
      },
      "en": {
        "s": "Nubank was expanding rapidly but didn't have a robust platform for personal loans, losing significant revenue and depending on expensive and inflexible third-party solutions.",
        "t": "My task was to invent and build from scratch a complete personal loans platform, simplifying the entire process from application to payment, integrated with Nubank's ecosystem.",
        "a": "I led a team of 15 people to create an end-to-end platform in 8 months. I implemented machine learning for real-time credit scoring, complete automation of the approval process (from 5 days to 30 seconds), API gateway for partner integration, and ultra-simplified mobile-first interface.",
        "r": "The platform processed R$ 2.1 billion in loans in the first year, with 87% automatic approval rate, 65% reduction in operational costs, and NPS of 74. The solution became an internal reference and foundation for other financial products.",
        "l": "This experience taught me that inventing isn't just about technology, but about completely rethinking existing processes. Simplifying user experience while building complex architectures behind requires careful balance. Real innovation comes from questioning basic industry assumptions."
      },
      "fup": [
        {
          "q": "Como você identificou a necessidade de criar uma plataforma de empréstimos do zero?",
          "q_en": "How did you identify the need to create a lending platform from scratch?",
          "a": "Identifiquei através de análise de dados e feedback de clientes. Éramos o banco digital líder no Brasil, mas 73% dos clientes procuravam empréstimos em outros bancos. As soluções third-party custavam 2.8% ao ano em fees, tinham baixa conversão (23%) e tempo de aprovação de 5 dias. Era claro que precisávamos de uma solução própria, integrada e simplificada.",
          "a_en": "I identified through data analysis and customer feedback. We were Brazil's leading digital bank, but 73% of customers sought loans from other banks. Third-party solutions cost 2.8% annually in fees, had low conversion (23%) and 5-day approval time. It was clear we needed our own integrated, simplified solution."
        },
        {
          "q": "Por que você escolheu machine learning para credit scoring em tempo real?",
          "q_en": "Why did you choose machine learning for real-time credit scoring?",
          "a": "Escolhi ML porque tínhamos 18+ milhões de clientes com dados transacionais ricos, mas os modelos tradicionais de credit scoring eram lentos e imprecisos para nosso perfil de cliente digital. Implementamos ensemble de 12 algoritmos (Random Forest, XGBoost, Neural Networks) que analisavam 847 features em tempo real, atingindo AUC de 0.89 vs 0.71 dos modelos tradicionais.",
          "a_en": "I chose ML because we had 18+ million customers with rich transactional data, but traditional credit scoring models were slow and inaccurate for our digital customer profile. We implemented ensemble of 12 algorithms (Random Forest, XGBoost, Neural Networks) analyzing 847 features in real-time, achieving AUC of 0.89 vs 0.71 from traditional models."
        },
        {
          "q": "Como você conseguiu reduzir o processo de aprovação de 5 dias para 30 segundos?",
          "q_en": "How did you manage to reduce the approval process from 5 days to 30 seconds?",
          "a": "Automatizei completamente o pipeline: 1) APIs síncronas consultam bureaus de crédito em paralelo; 2) ML scoring processa em menos de 5s; 3) Engine de regras de compliance valida automaticamente; 4) Sistema de limites dinâmicos aprova instantaneamente dentro dos parâmetros. Eliminamos revisões manuais para 87% dos casos, mantendo apenas casos edge para análise humana.",
          "a_en": "I completely automated the pipeline: 1) Synchronous APIs query credit bureaus in parallel; 2) ML scoring processes in under 5s; 3) Compliance rules engine validates automatically; 4) Dynamic limits system approves instantly within parameters. We eliminated manual reviews for 87% of cases, keeping only edge cases for human analysis."
        },
        {
          "q": "Qual foi o impacto da interface mobile-first ultra-simplificada que você desenvolveu?",
          "q_en": "What was the impact of the ultra-simplified mobile-first interface you developed?",
          "a": "A interface teve impacto dramático na conversão. Reduzimos de 23 telas para apenas 4: verificação de identidade, valor desejado, confirmação de termos, e pronto. Time-to-completion caiu de 45 minutos para 3 minutos. A taxa de conversão subiu de 23% para 71%, e o abandono de carrinho caiu de 77% para 12%. User testing mostrou 96% de satisfação com a simplicidade.",
          "a_en": "The interface had dramatic impact on conversion. We reduced from 23 screens to just 4: identity verification, desired amount, terms confirmation, and done. Time-to-completion dropped from 45 minutes to 3 minutes. Conversion rate rose from 23% to 71%, and cart abandonment fell from 77% to 12%. User testing showed 96% satisfaction with simplicity."
        },
        {
          "q": "Como a plataforma processou R$ 2.1 bilhões no primeiro ano?",
          "q_en": "How did the platform process R$ 2.1 billion in the first year?",
          "a": "O volume veio da combinação de demanda reprimida + experiência superior. Lançamos com 500K clientes elegíveis, expandindo para 8M em 12 meses. Ticket médio foi R$ 3.2K, com 67% dos clientes tomando segundo empréstimo. A facilidade e velocidade criaram word-of-mouth orgânico - 43% dos novos usuários vieram por indicação. Marketing performance também melhorou: CAC caiu 34% vs produtos terceirizados.",
          "a_en": "Volume came from combination of repressed demand + superior experience. We launched with 500K eligible customers, expanding to 8M in 12 months. Average ticket was R$ 3.2K, with 67% of customers taking second loan. The ease and speed created organic word-of-mouth - 43% of new users came by referral. Performance marketing also improved: CAC dropped 34% vs third-party products."
        },        {
          "q": "Como você alcançou 87% de taxa de aprovação automática mantendo baixa inadimplência?",
          "q_en": "How did you achieve 87% automatic approval rate while maintaining low default?",
          "a": "Balanceei aprovação vs risco através de segmentação inteligente e limites dinâmicos. Criamos 6 clusters de risco com limites específicos: baixo risco (até R$ 50K), médio-baixo (R$ 25K), etc. ML recalcula limites diariamente baseado em comportamento. Para score alto + histórico Nubank, aprovação automática até R$ 15K. Resultado: 87% auto-approval com inadimplência de apenas 2.1% (vs 4.3% do mercado).",
          "a_en": "I balanced approval vs risk through intelligent segmentation and dynamic limits. We created 6 risk clusters with specific limits: low risk (up to R$ 50K), medium-low (R$ 25K), etc. ML recalculates limits daily based on behavior. For high score + Nubank history, automatic approval up to R$ 15K. Result: 87% auto-approval with default rate of only 2.1% (vs 4.3% market average)."
        },
        {
          "q": "Qual foi a estratégia por trás da redução de 65% nos custos operacionais?",
          "q_en": "What was the strategy behind the 65% reduction in operational costs?",
          "a": "A redução veio de 4 pilares: 1) Automação eliminou 90% do trabalho manual (de 45 FTEs para 4); 2) Insourcing cortou fees de terceiros (R$ 58M anuais); 3) Arquitetura cloud-native reduziu infra em 40%; 4) ML diminuiu análises de risco manuais em 87%. Custo por empréstimo caiu de R$ 340 para R$ 119. O payback do investimento foi de 11 meses.",
          "a_en": "Reduction came from 4 pillars: 1) Automation eliminated 90% of manual work (from 45 FTEs to 4); 2) Insourcing cut third-party fees (R$ 58M annually); 3) Cloud-native architecture reduced infra by 40%; 4) ML decreased manual risk analysis by 87%. Cost per loan dropped from R$ 340 to R$ 119. Investment payback was 11 months."
        },
        {
          "q": "Como você conseguiu NPS de 74 para um produto financeiro?",
          "q_en": "How did you achieve NPS of 74 for a financial product?",
          "a": "NPS alto veio da simplicidade radical e transparência total. Pesquisas mostraram que clientes amavam: aprovação instantânea (94% satisfaction), interface intuitiva (91%), taxas transparentes sem pegadinhas (89%), e integração com conta Nubank (86%). Implementamos também comunicação proativa sobre pagamentos e suporte 24/7 via chat. Benchmark: NPS médio de empréstimos no Brasil é 23.",
          "a_en": "High NPS came from radical simplicity and total transparency. Surveys showed customers loved: instant approval (94% satisfaction), intuitive interface (91%), transparent rates without tricks (89%), and Nubank account integration (86%). We also implemented proactive payment communication and 24/7 chat support. Benchmark: average NPS for loans in Brazil is 23."
        },
        {
          "q": "Por que a solução se tornou referência interna para outros produtos?",
          "q_en": "Why did the solution become internal reference for other products?",
          "a": "Tornou-se referência por 3 motivos: 1) Arquitetura modular permitiu reutilização (credit engine foi usado em cartão e conta); 2) Metodologia de simplificação virou template (UX research + rapid prototyping + A/B testing); 3) Stack tecnológico provou escalabilidade (processou 10x+ volume sem refactor). Time de empréstimos virou 'center of excellence' e treinou outras squads.",
          "a_en": "Became reference for 3 reasons: 1) Modular architecture enabled reuse (credit engine was used in card and account); 2) Simplification methodology became template (UX research + rapid prototyping + A/B testing); 3) Tech stack proved scalability (processed 10x+ volume without refactor). Loans team became 'center of excellence' and trained other squads."
        },
        {
          "q": "Que premissas básicas da indústria financeira você questionou neste projeto?",
          "q_en": "What basic assumptions of the financial industry did you question in this project?",
          "a": "Questionei 5 premissas: 1) 'Empréstimo precisa ser complexo para ser seguro' - provamos que simplicidade + ML é mais eficaz; 2) 'Aprovação rápida significa alto risco' - conseguimos ambos com dados; 3) 'Clientes precisam de muitas opções' - menos escolhas = melhor conversão; 4) 'Análise humana é insubstituível' - ML superou analistas; 5) 'Regulação impede inovação' - trabalhamos junto ao BC para aprovar fluxos novos.",
          "a_en": "I questioned 5 assumptions: 1) 'Loans need to be complex to be safe' - we proved simplicity + ML is more effective; 2) 'Fast approval means high risk' - we achieved both with data; 3) 'Customers need many options' - fewer choices = better conversion; 4) 'Human analysis is irreplaceable' - ML outperformed analysts; 5) 'Regulation prevents innovation' - we worked with Central Bank to approve new flows."
        }
      ]
    },
    {
      "title": "Lançamento de Novos Produtos Digitais para Diversificar Receita (Unimed)",
      "pt": {
        "s": "A Unimed, uma cooperativa de saúde tradicional, era excessivamente dependente da receita de planos de saúde convencionais e precisava inovar para criar novas fontes de receita.",
        "t": "Minha tarefa era inventar e lançar um portfólio de novos produtos, digitais e físicos, que fossem além do plano de saúde tradicional, simplificando o acesso a novos serviços.",
        "a": "Eu estruturei uma área de inovação do zero com um framework Lean Startup. Liderei a concepção e o lançamento de 4 produtos inovadores: Pet Saúde, Saúde para Servidores Públicos (modelo B2B2C), Atenção Primária à Saúde (com app de teleconsultas) e Checklist Executivo (serviço premium B2B).",
        "r": "O portfólio foi um sucesso. Um dos produtos representou 5% da receita total (~). Coletivamente, ajudaram a aumentar o EBITDA em 22% (~.4M), melhorar o NPS em 6 pontos e reduzir o churn em 15%. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que esta experiência me ensinou que 'Inventar e Simplificar' é sobre modelo de negócio. Ao olhar para fora ('not invented here'), conseguimos criar e simplificar o acesso a serviços que os clientes queriam, mas não sabiam pedir. Um portfólio de invenções pode transformar a receita de uma empresa. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "Unimed, a traditional health cooperative, was overly dependent on revenue from conventional health plans and needed to innovate to create new revenue streams.",
        "t": "My task was to invent and launch a portfolio of new products, digital and physical, that went beyond the traditional health plan, simplifying access to new services.",
        "a": "I built an innovation department from scratch with a Lean Startup framework. I led the conception and launch of 4 innovative products: Pet Health, Health for Public Servants (B2B2C model), Primary Health Care (with a telehealth app), and Executive Checklist (premium B2B service).",
        "r": "The portfolio was a success. One of the products accounted for 5% of total revenue (~). Collectively, they helped increase EBITDA by 22% (~.4M), improve NPS by 6 points, and reduce churn by 15%.",
        "l": "This experience taught me that 'Invent and Simplify' is about business models. By looking outward ('not invented here'), we were able to create and simplify access to services that customers wanted but didn't know how to ask for. A portfolio of inventions can transform a company's revenue."
      },
      "fup": [
        {
          "q": "Como você identificou que a Unimed precisava de novos produtos além do plano de saúde tradicional?",
          "q_en": "How did you identify that Unimed needed new products beyond the traditional health plan?",
          "a": "Identifiquei através de análise de mercado e dados financeiros. A receita estava concentrada 95% em planos tradicionais, havia alta pressão competitiva de startups de saúde digital, e pesquisas mostraram demanda reprimida por serviços complementares. O EBITDA estava estagnado há 3 anos, sinalizando necessidade urgente de diversificação.",
          "a_en": "I identified this through market analysis and financial data. Revenue was 95% concentrated in traditional plans, there was high competitive pressure from digital health startups, and surveys showed repressed demand for complementary services. EBITDA had been stagnant for 3 years, signaling urgent need for diversification."
        },
        {
          "q": "Por que você escolheu o framework Lean Startup para estruturar a área de inovação?",
          "q_en": "Why did you choose the Lean Startup framework to structure the innovation area?",
          "a": "Escolhi Lean Startup porque precisávamos validar hipóteses rapidamente sem grandes investimentos iniciais. O framework permitiu ciclos Build-Measure-Learn de 2-4 semanas, reduzindo o risco de produtos mal-aceitos. Conseguimos testar 12 conceitos, validar 4 e descartar 8 antes de investimentos maiores, economizando ~.3M em desenvolvimentos desnecessários.",
          "a_en": "I chose Lean Startup because we needed to validate hypotheses quickly without large initial investments. The framework enabled 2-4 week Build-Measure-Learn cycles, reducing the risk of poorly-accepted products. We tested 12 concepts, validated 4, and discarded 8 before major investments, saving ~.3M in unnecessary development."
        },
        {
          "q": "Como foi o processo de concepção dos 4 produtos inovadores que você mencionou?",
          "q_en": "What was the process for conceiving the 4 innovative products you mentioned?",
          "a": "O processo seguiu Design Thinking: começamos com pesquisa etnográfica com 200+ clientes, identificamos pain points não atendidos, geramos 50+ ideias em workshops, priorizamos usando matriz impacto/esforço, e desenvolvemos MVPs para os 4 mais promissores. Cada produto atendeu uma necessidade específica: pets (gap de mercado), servidores públicos (B2B2C), teleconsultas (conveniência) e executivos (premium).",
          "a_en": "The process followed Design Thinking: we started with ethnographic research with 200+ clients, identified unmet pain points, generated 50+ ideas in workshops, prioritized using impact/effort matrix, and developed MVPs for the 4 most promising. Each product addressed a specific need: pets (market gap), public servants (B2B2C), telehealth (convenience), and executives (premium)."
        },
        {
          "q": "Qual produto representou 5% da receita total e por que foi tão bem-sucedido?",
          "q_en": "Which product represented 5% of total revenue and why was it so successful?",
          "a": "O Pet Saúde foi o produto estrela, atingindo  em receita. Foi bem-sucedido porque preencheu um gap de mercado gigante - Brasil tem 54M de pets, mas poucos planos veterinários acessíveis. Simplificamos o processo: app intuitivo, rede credenciada de 800+ clínicas, e preços 40% menores que concorrentes. O NPS chegou a 78, indicando altíssima satisfação.",
          "a_en": "Pet Health was the star product, reaching  in revenue. It was successful because it filled a huge market gap - Brazil has 54M pets but few accessible veterinary plans. We simplified the process: intuitive app, network of 800+ accredited clinics, and prices 40% lower than competitors. NPS reached 78, indicating very high satisfaction."
        },
        {
          "q": "Como você mediu o impacto coletivo dos produtos no EBITDA de 22%?",
          "q_en": "How did you measure the collective impact of the products on the 22% EBITDA?",
          "a": "Medimos através de P&L dedicado para cada produto e análise incremental. O baseline EBITDA era . Os novos produtos geraram  em receita adicional com margem média de 83% (produtos digitais têm custos variáveis baixos). Isso adicionou .4M ao EBITDA. Também reduziram custos de aquisição do produto principal via cross-selling, criando sinergia de + adicional.",
          "a_en": "We measured through dedicated P&L for each product and incremental analysis. Baseline EBITDA was . New products generated  in additional revenue with average margin of 83% (digital products have low variable costs). This added .4M to EBITDA. They also reduced acquisition costs of the main product via cross-selling, creating + additional synergy."
        },
        {
          "q": "Como você conseguiu melhorar o NPS em 6 pontos com os novos produtos?",
          "q_en": "How did you manage to improve NPS by 6 points with the new products?",
          "a": "A melhoria no NPS veio da expansão do ecossistema de valor. Clientes que tinham apenas plano tradicional (NPS 31) passaram a ter experiência integrada com múltiplos serviços digitais simplificados. App unificado, atendimento 24h via chatbot, e serviços complementares criaram jornada sem fricção. Clientes com 2+ produtos tinham NPS de 44, elevando a média geral para 37.",
          "a_en": "NPS improvement came from expanding the value ecosystem. Customers who only had traditional plans (NPS 31) now had integrated experience with multiple simplified digital services. Unified app, 24h chatbot support, and complementary services created frictionless journey. Customers with 2+ products had NPS of 44, raising overall average to 37."
        },
        {
          "q": "Qual foi a estratégia para reduzir o churn em 15%?",
          "q_en": "What was the strategy to reduce churn by 15%?",
          "a": "A estratégia foi criar 'switching costs' através de produtos complementares integrados. Clientes com apenas plano tradicional tinham churn de 12% anual. Aqueles com produtos adicionais tinham churn de apenas 4%. Implementamos programa de fidelidade digital, cross-selling inteligente no app, e benefícios exclusivos para portfólio completo. O switching cost médio aumentou de  para .",
          "a_en": "The strategy was to create switching costs through integrated complementary products. Customers with only traditional plans had 12% annual churn. Those with additional products had only 4% churn. We implemented digital loyalty program, intelligent cross-selling in the app, and exclusive benefits for complete portfolio. Average switching cost increased from  to ."
        },
        {
          "q": "O que você aprendeu sobre 'não inventado aqui' (not invented here) neste projeto?",
          "q_en": "What did you learn about 'not invented here' in this project?",
          "a": "Aprendi que a síndrome NIH mata inovação. Inicialmente, a equipe técnica queria desenvolver tudo internamente, mas percebi que deveríamos focar no core business e integrar soluções existentes. Usamos APIs de terceiros para pagamentos, parcerias com clínicas para Pet Saúde, e white-label para teleconsultas. Isso acelerou time-to-market em 8 meses e reduziu custos de desenvolvimento em 60%.",
          "a_en": "I learned that NIH syndrome kills innovation. Initially, the tech team wanted to develop everything internally, but I realized we should focus on core business and integrate existing solutions. We used third-party APIs for payments, partnerships with clinics for Pet Health, and white-label for telehealth. This accelerated time-to-market by 8 months and reduced development costs by 60%."
        },
        {
          "q": "Como um portfólio de invenções pode transformar a receita de uma empresa?",
          "q_en": "How can a portfolio of inventions transform a company's revenue?",
          "a": "Um portfólio diversificado cria múltiplas fontes de receita, reduz dependência do produto core e aumenta lifetime value. No nosso caso: 1) Diversificação: de 1 receita para 5 streams; 2) Sinergia: cross-selling aumentou ticket médio em 35%; 3) Margem: produtos digitais têm margens 40% superiores; 4) Defensibilidade: múltiplos produtos criam ecosistema difícil de replicar. Revenue mix passou de 100%/0% para 70%/30% tradicional/inovação.",
          "a_en": "A diversified portfolio creates multiple revenue sources, reduces core product dependency, and increases lifetime value. In our case: 1) Diversification: from 1 revenue to 5 streams; 2) Synergy: cross-selling increased average ticket by 35%; 3) Margin: digital products have 40% higher margins; 4) Defensibility: multiple products create ecosystem difficult to replicate. Revenue mix went from 100%/0% to 70%/30% traditional/innovation."
        },
        {
          "q": "Que riscos com stakeholders você anteciparia hoje, em retrospectiva?",
          "q_en": "What stakeholder risks would you anticipate today, in retrospect?",
          "a": "Em retrospectiva, anteciparia: 1) Resistência interna de áreas estabelecidas temendo canibalização; 2) Reguladores questionando novos modelos de negócio; 3) Conselho preocupado com investimentos em áreas não-core; 4) Equipe médica cética sobre teleconsultas. Hoje começaria com roadshows internos, alinhamento regulatório antecipado, business case robusto para conselho, e pilotos pequenos com médicos influenciadores para criar advocacy orgânica.",
          "a_en": "In retrospect, I would anticipate: 1) Internal resistance from established areas fearing cannibalization; 2) Regulators questioning new business models; 3) Board concerned about investments in non-core areas; 4) Medical staff skeptical about telehealth. Today I would start with internal roadshows, early regulatory alignment, robust business case for board, and small pilots with influential doctors to create organic advocacy."
        }
      ]
    }
  ]
};

export default invent_and_simplify_data;

