// src/data/myQuestions_sophisticated.js
// Perguntas estratégicas e diferenciadas para demonstrar expertise e mentalidade de líder sênior

const myQuestionsData = {
  pt: {
    title: "Perguntas Estratégicas para Entrevistadores Amazon",
    subtitle: "Demonstrando expertise em pagamentos, AI/ML e liderança sênior",
    categories: [
      {
        category: "Estratégia de Pagamentos & Parceria Oakberry",
        icon: "💳",
        description: "Perguntas que demonstram conhecimento profundo do ecossistema de pagamentos Amazon",
        questions: [
          {
            q: "Como a parceria estratégica com Oakberry se alinha com a visão de longo prazo da Amazon para pagamentos no Brasil, especialmente considerando o crescimento do PIX e Open Finance?",
            note: "Demonstra conhecimento do mercado brasileiro e visão estratégica",
            level: "Strategic"
          },
          {
            q: "Quais são os principais trade-offs entre velocidade de implementação e robustez operacional que vocês enfrentam ao integrar novos payment partners como Oakberry?",
            note: "Mostra experiência com dilemas reais de program management",
            level: "Tactical"
          },
          {
            q: "Como vocês medem o sucesso de uma transformação operacional em pagamentos? Além de Payment Success Rate e Authorization Rate, quais métricas de eficiência (por exemplo, Custo Operacional por Transação e Tempo de Processamento) e de experiência do cliente (como NPS) são críticas para o negócio?",
            note: "Revela conhecimento de métricas de eficiência e experiência do cliente em pagamentos",
            level: "Operational"
          },
          {
            q: "Considerando que pagamentos são mission-critical, como vocês balanceiam experimentação com AI/ML versus estabilidade operacional? Existe um framework de risk appetite definido?",
            note: "Demonstra maturidade em gestão de risco e inovação",
            level: "Strategic"
          }
        ]
      },
      {
        category: "AI/ML & Automação Operacional",
        icon: "🤖",
        description: "Perguntas que revelam expertise técnica e visão de futuro",
        questions: [
          {
            q: "Quais use cases de AI/ML vocês consideram mais promissores para reduzir Process Cycle Time em operações de pagamento? Anomaly detection, predictive routing, ou automated reconciliation?",
            note: "Mostra conhecimento técnico específico de AI/ML em pagamentos",
            level: "Technical"
          },
          {
            q: "Como vocês lidam com o cold start problem ao implementar modelos de ML em novos payment partners? Existe uma estratégia de transfer learning ou vocês começam do zero?",
            note: "Demonstra conhecimento profundo de desafios de ML",
            level: "Technical"
          },
          {
            q: "Qual é a abordagem da Amazon para explicabilidade de modelos de AI em decisões críticas de pagamento, especialmente considerando compliance e auditoria?",
            note: "Revela preocupação com governança e compliance",
            level: "Strategic"
          },
          {
            q: "Como vocês medem ROI de iniciativas de automação? Existe um framework padronizado para calcular savings de Process Cycle Time versus investment em AI/ML?",
            note: "Mostra mentalidade de business case e ROI",
            level: "Business"
          }
        ]
      },
      {
        category: "Excelência Operacional & Lean Six Sigma",
        icon: "⚡",
        description: "Perguntas que demonstram expertise em transformação operacional",
        questions: [
          {
            q: "Como vocês aplicam os princípios de Lean Six Sigma em um ambiente de alta velocidade como Amazon? Existe tensão entre 'bias for action' e rigor metodológico?",
            note: "Mostra conhecimento dos Leadership Principles e metodologias",
            level: "Cultural"
          },
          {
            q: "Qual é a abordagem para identificar e eliminar waste em processos de pagamento? Vocês usam value stream mapping ou têm metodologia própria?",
            note: "Demonstra conhecimento prático de Lean",
            level: "Operational"
          },
          {
            q: "Como vocês garantem que melhorias de processo sejam sustentáveis e não regridam após a implementação? Existe um sistema de controle estatístico?",
            note: "Revela preocupação com sustentabilidade de melhorias",
            level: "Tactical"
          },
          {
            q: "Quais são os maiores desafios para implementar self-service capabilities em operações de pagamento? Como vocês balanceiam autonomia versus controle?",
            note: "Mostra entendimento de dilemas de self-service",
            level: "Strategic"
          }
        ]
      },
      {
        category: "Liderança & Influência sem Autoridade",
        icon: "🎯",
        description: "Perguntas que revelam maturidade em liderança sênior",
        questions: [
          {
            q: "Como vocês lidam com resistência de stakeholders sênior quando dados mostram que uma transformação é necessária, mas ela impacta métricas de curto prazo?",
            note: "Demonstra experiência com dilemas de liderança sênior",
            level: "Leadership"
          },
          {
            q: "Qual é a estratégia para influenciar teams que não reportam diretamente para você, especialmente quando há conflito de prioridades entre eficiência operacional e feature delivery?",
            note: "Mostra experiência com matrix organizations",
            level: "Influence"
          },
          {
            q: "Como vocês constroem buy-in para iniciativas de transformação que têm payback de longo prazo? Existe um playbook para storytelling com dados?",
            note: "Revela habilidade de comunicação estratégica",
            level: "Communication"
          },
          {
            q: "Quando vocês enfrentam trade-offs entre Customer Obsession e Operational Excellence, como tomam decisões? Existe um framework de priorização?",
            note: "Demonstra entendimento profundo dos Leadership Principles",
            level: "Decision Making"
          }
        ]
      },
      {
        category: "Escalabilidade & Crescimento",
        icon: "📈",
        description: "Perguntas sobre visão de futuro e crescimento sustentável",
        questions: [
          {
            q: "Como vocês projetam operações de pagamento para escalar 10x sem aumentar headcount proporcionalmente? Quais são os principais bottlenecks antecipados?",
            note: "Mostra pensamento de escala e eficiência",
            level: "Scalability"
          },
          {
            q: "Qual é a visão de 3-5 anos para Payment Business Operations na Amazon Brasil? Como vocês se preparam para mudanças regulatórias como CBDC?",
            note: "Demonstra visão de longo prazo e conhecimento regulatório",
            level: "Vision"
          },
          {
            q: "Como vocês balanceiam padronização global versus customização local em operações de pagamento? Existe tensão entre efficiency e market fit?",
            note: "Revela entendimento de complexidades globais",
            level: "Global Strategy"
          },
          {
            q: "Quais capabilities vocês consideram core versus non-core para build vs buy decisions em payment operations? Como avaliam make-or-break moments?",
            note: "Mostra maturidade em decisões estratégicas",
            level: "Strategic"
          }
        ]
      },
      {
        category: "Cultura & Desenvolvimento Organizacional",
        icon: "🌟",
        description: "Perguntas sobre construção de cultura de excelência",
        questions: [
          {
            q: "Como vocês cultivam uma cultura de continuous improvement em um ambiente de alta pressão? Existe espaço para experimentação e failure?",
            note: "Demonstra preocupação com cultura de longo prazo",
            level: "Culture"
          },
          {
            q: "Qual é a abordagem para desenvolver capabilities de AI/ML no time? Vocês investem em upskilling ou preferem hiring?",
            note: "Mostra visão de desenvolvimento de talentos",
            level: "Talent Development"
          },
          {
            q: "Como vocês medem e melhoram psychological safety no time, especialmente quando lidam com sistemas críticos onde erros têm alto impacto?",
            note: "Revela maturidade em liderança moderna",
            level: "Team Dynamics"
          },
          {
            q: "Existe um career path claro para Program Managers que querem evoluir para roles mais sênior? Quais são os key differentiators entre L6 e L7?",
            note: "Demonstra ambição e planejamento de carreira",
            level: "Career Growth"
          }
        ]
      },
      // A categoria de sugestões do Glassdoor foi removida para focar em perguntas personalizadas para cada entrevistador e nos objetivos da vaga.
      {
        category: "Perguntas de Fechamento Estratégico",
        icon: "🚀",
        description: "Perguntas que demonstram confiança e visão de contribuição",
        questions: [
          {
            q: "Baseado na minha experiência com transformações de pagamento no Sicredi, Bradesco e HSBC, onde vocês veem maior potencial de impacto nos primeiros 6 meses?",
            note: "Conecta experiência passada com oportunidades futuras",
            level: "Value Proposition"
          },
          {
            q: "Se eu trouxesse uma proposta de quick win que poderia reduzir Operational Cost per Transaction em 15% nos primeiros 90 dias, qual seria o processo de approval e implementation?",
            note: "Demonstra mentalidade de results delivery",
            level: "Execution"
          },
          {
            q: "Quais são os 2-3 biggest bets que vocês estão fazendo em Payment Operations para os próximos 18 meses? Como meu background pode acelerar esses outcomes?",
            note: "Mostra interesse em contribuir para prioridades estratégicas",
            level: "Strategic Alignment"
          },
          {
            q: "Existe algo na minha experiência ou approach que vocês gostariam de explorar mais profundamente? Posso compartilhar um case específico que seja mais relevante?",
            note: "Abre espaço para demonstrar expertise adicional",
            level: "Opportunity Creation"
          }
        ]
      },
      // Categorias personalizadas para cada entrevistador
      {
        category: "Heleno P.",
        categorySubtext: "Modelagem e Ciência de Dados em Pagamentos",
        icon: "🧠",
        description: "Perguntas alinhadas à experiência do entrevistador em ciência de dados e precificação",
        questions: [
          {
            q: "Quais conjuntos de dados vocês consideram inegociáveis para treinar modelos que conectam supply chain ao desempenho de pagamentos, e como garantem qualidade contínua dessas fontes?",
            note: "Explora governança de dados para modelos críticos",
            level: "Technical"
          },
          {
            q: "Como vocês conectam iniciativas de ciência de dados em pagamentos ao ROI? Existe uma métrica que combine redução de custo por transação com impacto na experiência do cliente?",
            note: "Relaciona ciência de dados a métricas de negócio",
            level: "Strategic"
          },
          {
            q: "Quando um modelo sugere uma nova lógica de roteamento, qual é o processo para provar causalidade antes de escalar a mudança?",
            note: "Aprofunda disciplina experimental e tomada de decisão",
            level: "Operational"
          },
          {
            q: "Como equilibram experimentação rápida com a exigência de explicabilidade para auditorias e stakeholders de risco?",
            note: "Garante conformidade sem bloquear inovação",
            level: "Strategic"
          },
          {
            q: "Que suportes as equipes de produto precisam para consumir modelos em self-service e agir sem depender do time de ciência de dados?",
            note: "Explora enablement e disseminação de analytics",
            level: "Leadership"
          }
        ]
      },
      {
        category: "Sujash B.",
        categorySubtext: "Programas de Pagamentos e Expansão Internacional",
        icon: "🌎",
        description: "Perguntas focadas em programas globais de pagamentos e parcerias internacionais",
        questions: [
          {
            q: "Quando vocês lançam um novo método de pagamento em vários países, como definem a ordem dos mercados piloto e quais sinais acionam expansão?",
            note: "Explora estratégia de rollout internacional",
            level: "Strategic"
          },
          {
            q: "Quais mecanismos garantem que parceiros externos cumpram SLAs antes do go/no-go global?",
            note: "Foca em gestão de parceiros e qualidade",
            level: "Operational"
          },
          {
            q: "Como equilibram compliance local com a necessidade de uma experiência global consistente para o cliente?",
            note: "Analisa governança regulatória versus experiência",
            level: "Strategic"
          },
          {
            q: "Quais métricas acompanham nos primeiros 90 dias de um programa cross-border para decidir se dobram a aposta ou iteram?",
            note: "Discute métricas leading de sucesso de programa",
            level: "Business"
          },
          {
            q: "Como vocês capturam e socializam aprendizados quando um experimento falha em um mercado, evitando repetir o erro em outros países?",
            note: "Mostra aprendizado institucional e colaboração",
            level: "Leadership"
          }
        ]
      },
      {
        category: "Andreia G.",
        categorySubtext: "Excelência Operacional e Melhoria Contínua em Pagamentos",
        icon: "⚙️",
        description: "Perguntas voltadas a transformação operacional e cultura Lean",
        questions: [
          {
            q: "Como priorizam entre iniciativas Lean de curto prazo e automação estrutural quando o time tem capacidade limitada?",
            note: "Explora tomada de decisão no portfólio de melhorias",
            level: "Strategic"
          },
          {
            q: "Que indicadores acompanham para garantir que ganhos de Kaizen não regridam depois de operacionalizados?",
            note: "Foca em sustainment e controle de processo",
            level: "Operational"
          },
          {
            q: "Qual é o papel dos operadores de linha de frente na identificação de desperdícios e como vocês tornam essas sugestões visíveis?",
            note: "Valoriza cultura de melhoria contínua",
            level: "Culture"
          },
          {
            q: "Como definem limites entre autonomia local e padrões globais quando criam playbooks de pagamento?",
            note: "Equilibra padronização e flexibilidade",
            level: "Strategic"
          },
          {
            q: "Há métricas antecipadoras que avisam sobre regressão antes de os indicadores de resultado piorarem? Como vocês as constroem?",
            note: "Investiga leading indicators para estabilidade operacional",
            level: "Technical"
          }
        ]
      },
      {
        category: "Eduardo L.",
        categorySubtext: "Estratégia Financeira e Parcerias de Alto Impacto",
        icon: "💼",
        description: "Perguntas sobre disciplina financeira e alianças estratégicas em pagamentos",
        questions: [
          {
            q: "Como vocês avaliam o retorno esperado de parcerias de alto impacto? Trabalham com NPV, payback ou outro critério?",
            note: "Explora disciplina financeira na seleção de parceiros",
            level: "Strategic"
          },
          {
            q: "Quais fatores determinam se vale internalizar um serviço ou seguir com um parceiro externo em pagamentos?",
            note: "Discute decisões build versus buy",
            level: "Decision Making"
          },
          {
            q: "Como conectam métricas financeiras a narrativas de experiência do cliente para conseguir sponsorship das lideranças?",
            note: "Une números com storytelling para stakeholders",
            level: "Communication"
          },
          {
            q: "Que mecanismos usam para renegociar termos quando o cenário macro muda (juros, câmbio)?",
            note: "Aborda gestão ativa de risco financeiro",
            level: "Business"
          },
          {
            q: "Como o portfólio de parceiros de pagamento se conecta às big bets da Amazon Brasil nos próximos 18 meses?",
            note: "Garante alinhamento estratégico de longo prazo",
            level: "Vision"
          }
        ]
      },
      {
        category: "Gabriela B.",
        categorySubtext: "Business Intelligence e Métricas de Sucesso em Pagamentos",
        icon: "📊",
        description: "Perguntas dirigidas a profissionais de BI para decisões de pagamento baseadas em dados",
        questions: [
          {
            q: "Quais dashboards ou métricas North Star sustentam decisões diárias do time de pagamentos e como chegaram a esse conjunto?",
            note: "Investiga definição de indicadores críticos",
            level: "Strategic"
          },
          {
            q: "Como tratam discrepâncias de dados entre provedores de pagamento diferentes para que a conciliação aconteça quase em tempo real?",
            note: "Explora governança de dados em ambientes heterogêneos",
            level: "Technical"
          },
          {
            q: "Que práticas usam para garantir que squads não técnicos adotem análises self-service sem depender do BI?",
            note: "Mostra enablement e mudança de comportamento",
            level: "Team Dynamics"
          },
          {
            q: "Quais métricas vocês usam para medir sucesso da democratização de dados? Tempo de resposta, adoção, NPS interno?",
            note: "Conecta data democratization a resultados mensuráveis",
            level: "Business"
          },
          {
            q: "Quando surge um novo método de pagamento, como habilitam o tracking end-to-end desde o dia zero?",
            note: "Foca em readiness analítico para lançamentos",
            level: "Operational"
          }
        ]
      },
      {
        category: "Heleno P.",
        categorySubtext: "Modeling & Data Science in Payments",
        icon: "🧠",
        description: "Questions aligned with the interviewer’s background in data science and pricing",
        questions: [
          {
            q: "Which datasets are non-negotiable to train models that link supply chain decisions to payment performance, and how do you keep those sources trustworthy over time?",
            note: "Explores data governance for mission-critical models",
            level: "Technical"
          },
          {
            q: "How do you connect payment data science initiatives to ROI? Is there a metric that blends cost-per-transaction reduction with customer experience impact?",
            note: "Ties data science outcomes to business value",
            level: "Strategic"
          },
          {
            q: "When a model recommends a new routing strategy, what steps ensure you are acting on causal impact before scaling the change?",
            note: "Deepens the discussion on experimentation discipline",
            level: "Operational"
          },
          {
            q: "How do you balance rapid experimentation with the explainability level risk teams expect for audits and compliance?",
            note: "Shows how innovation and controls coexist",
            level: "Strategic"
          },
          {
            q: "What kind of enablement do product teams need to consume models self-serve and act without constant data science support?",
            note: "Highlights analytics enablement and adoption",
            level: "Leadership"
          }
        ]
      },
      {
        category: "Sujash B.",
        categorySubtext: "Payments Programs & International Expansion",
        icon: "🌎",
        description: "Questions focused on global payment programs and international partnerships",
        questions: [
          {
            q: "When you launch a new payment method across countries, how do you pick pilot markets and what signals trigger scale-out?",
            note: "Explores international rollout strategy",
            level: "Strategic"
          },
          {
            q: "Which mechanisms ensure external partners consistently meet SLAs before a global go/no-go?",
            note: "Focuses on partner management and quality",
            level: "Operational"
          },
          {
            q: "How do you reconcile local compliance requirements with the need for a consistent global customer experience?",
            note: "Examines regulatory governance versus CX",
            level: "Strategic"
          },
          {
            q: "Which metrics matter most in the first 90 days of a cross-border program to decide whether to double down or pivot?",
            note: "Discusses leading indicators for program success",
            level: "Business"
          },
          {
            q: "How do you capture and broadcast learnings when an experiment fails in one market so others do not repeat it?",
            note: "Shows institutional learning and collaboration",
            level: "Leadership"
          }
        ]
      },
      {
        category: "Andreia G.",
        categorySubtext: "Operational Excellence & Continuous Improvement in Payments",
        icon: "⚙️",
        description: "Questions about transformation, Lean practices, and sustaining results",
        questions: [
          {
            q: "How do you prioritize between Lean quick wins and structural automation when team capacity is limited?",
            note: "Surfaces decision-making in the improvement portfolio",
            level: "Strategic"
          },
          {
            q: "Which indicators assure you that Kaizen gains stick once the project closes?",
            note: "Focuses on sustainment and process control",
            level: "Operational"
          },
          {
            q: "What role do frontline operators play in spotting waste, and how do you elevate their suggestions into the roadmap?",
            note: "Reinforces continuous improvement culture",
            level: "Culture"
          },
          {
            q: "How do you set guardrails between local autonomy and global standards when crafting payment playbooks?",
            note: "Balances standardization with flexibility",
            level: "Strategic"
          },
          {
            q: "Do you track leading indicators that flag regression before outcome metrics slip? How are those signals built?",
            note: "Investigates leading metrics for operational stability",
            level: "Technical"
          }
        ]
      },
      {
        category: "Eduardo L.",
        categorySubtext: "Financial Strategy & High-Impact Partnerships",
        icon: "💼",
        description: "Questions about financial discipline and strategic alliances in payments",
        questions: [
          {
            q: "How do you evaluate the expected return of high-impact partnerships? Do you rely on NPV, payback, or other guardrails?",
            note: "Explores financial rigor in partner selection",
            level: "Strategic"
          },
          {
            q: "What factors determine whether you internalize a capability or stay with an external partner in payments?",
            note: "Discusses build versus buy decisions",
            level: "Decision Making"
          },
          {
            q: "How do you connect financial metrics with customer experience narratives to secure senior sponsorship?",
            note: "Links storytelling with hard metrics",
            level: "Communication"
          },
          {
            q: "What mechanisms do you use to renegotiate terms when macro conditions shift, like interest rates or FX?",
            note: "Addresses active financial risk management",
            level: "Business"
          },
          {
            q: "How does the payment partner portfolio map to Amazon Brazil’s big bets over the next 18 months?",
            note: "Ensures long-term strategic alignment",
            level: "Vision"
          }
        ]
      },
      {
        category: "Gabriela B.",
        categorySubtext: "Business Intelligence & Success Metrics in Payments",
        icon: "📊",
        description: "Questions for BI professionals driving data-informed payment decisions",
        questions: [
          {
            q: "Which dashboards or North Star metrics anchor the daily decisions of the payments team, and how did you land on that set?",
            note: "Investigates the definition of critical indicators",
            level: "Strategic"
          },
          {
            q: "How do you handle data discrepancies across PSPs so reconciliation happens almost in real time?",
            note: "Explores data governance in heterogeneous environments",
            level: "Technical"
          },
          {
            q: "What practices help non-technical squads adopt self-service analytics without leaning on BI every day?",
            note: "Highlights enablement and behavior change",
            level: "Team Dynamics"
          },
          {
            q: "Which metrics do you track to prove data democratization is working? Response time, adoption, internal NPS?",
            note: "Connects data democratization to measurable outcomes",
            level: "Business"
          },
          {
            q: "When a new payment method launches, how do you enable end-to-end tracking from day zero?",
            note: "Focuses on analytical readiness for launches",
            level: "Operational"
          }
        ]
      },
      {
        category: "AI/ML & Operational Automation",
        icon: "🤖",
        description: "Questions revealing technical expertise and future vision",
        questions: [
          {
            q: "Which AI/ML use cases do you consider most promising for reducing Process Cycle Time in payment operations? Anomaly detection, predictive routing, or automated reconciliation?",
            note: "Shows specific technical knowledge of AI/ML in payments",
            level: "Technical"
          },
          {
            q: "How do you handle the cold start problem when implementing ML models for new payment partners? Is there a transfer learning strategy or do you start from scratch?",
            note: "Demonstrates deep ML challenges knowledge",
            level: "Technical"
          },
          {
            q: "What's Amazon's approach to AI model explainability in critical payment decisions, especially considering compliance and audit requirements?",
            note: "Shows concern for governance and compliance",
            level: "Strategic"
          },
          {
            q: "How do you measure ROI of automation initiatives? Is there a standardized framework to calculate Process Cycle Time savings versus AI/ML investment?",
            note: "Shows business case and ROI mindset",
            level: "Business"
          }
        ]
      },
      {
        category: "Operational Excellence & Lean Six Sigma",
        icon: "⚡",
        description: "Questions demonstrating operational transformation expertise",
        questions: [
          {
            q: "How do you apply Lean Six Sigma principles in a high-velocity environment like Amazon? Is there tension between 'bias for action' and methodological rigor?",
            note: "Shows knowledge of Leadership Principles and methodologies",
            level: "Cultural"
          },
          {
            q: "What's the approach to identify and eliminate waste in payment processes? Do you use value stream mapping or have proprietary methodology?",
            note: "Demonstrates practical Lean knowledge",
            level: "Operational"
          },
          {
            q: "How do you ensure process improvements are sustainable and don't regress after implementation? Is there a statistical control system?",
            note: "Shows concern for improvement sustainability",
            level: "Tactical"
          },
          {
            q: "What are the biggest challenges implementing self-service capabilities in payment operations? How do you balance autonomy versus control?",
            note: "Shows understanding of self-service dilemmas",
            level: "Strategic"
          }
        ]
      },
      {
        category: "Leadership & Influence Without Authority",
        icon: "🎯",
        description: "Questions revealing senior leadership maturity",
        questions: [
          {
            q: "How do you handle senior stakeholder resistance when data shows transformation is needed, but it impacts short-term metrics?",
            note: "Shows experience with senior leadership dilemmas",
            level: "Leadership"
          },
          {
            q: "What's the strategy to influence teams that don't report directly to you, especially when there's priority conflict between operational efficiency and feature delivery?",
            note: "Shows matrix organization experience",
            level: "Influence"
          },
          {
            q: "How do you build buy-in for transformation initiatives with long-term payback? Is there a playbook for data-driven storytelling?",
            note: "Reveals strategic communication skills",
            level: "Communication"
          },
          {
            q: "When facing trade-offs between Customer Obsession and Operational Excellence, how do you make decisions? Is there a prioritization framework?",
            note: "Shows deep understanding of Leadership Principles",
            level: "Decision Making"
          }
        ]
      },
      {
        category: "Scalability & Growth",
        icon: "📈",
        description: "Questions about future vision and sustainable growth",
        questions: [
          {
            q: "How do you design payment operations to scale 10x without proportional headcount increase? What are the main anticipated bottlenecks?",
            note: "Shows scale thinking and efficiency",
            level: "Scalability"
          },
          {
            q: "What's the 3-5 year vision for Payment Business Operations at Amazon Brazil? How do you prepare for regulatory changes like CBDC?",
            note: "Shows long-term vision and regulatory knowledge",
            level: "Vision"
          },
          {
            q: "How do you balance global standardization versus local customization in payment operations? Is there tension between efficiency and market fit?",
            note: "Shows understanding of global complexities",
            level: "Global Strategy"
          },
          {
            q: "Which capabilities do you consider core versus non-core for build vs buy decisions in payment operations? How do you evaluate make-or-break moments?",
            note: "Shows maturity in strategic decisions",
            level: "Strategic"
          }
        ]
      },
      {
        category: "Culture & Organizational Development",
        icon: "🌟",
        description: "Questions about building excellence culture",
        questions: [
          {
            q: "How do you cultivate continuous improvement culture in high-pressure environment? Is there space for experimentation and failure?",
            note: "Shows concern for long-term culture",
            level: "Culture"
          },
          {
            q: "What's the approach to develop AI/ML capabilities in the team? Do you invest in upskilling or prefer hiring?",
            note: "Shows talent development vision",
            level: "Talent Development"
          },
          {
            q: "How do you measure and improve psychological safety in the team, especially when dealing with critical systems where errors have high impact?",
            note: "Shows modern leadership maturity",
            level: "Team Dynamics"
          },
          {
            q: "Is there a clear career path for Program Managers wanting to evolve to more senior roles? What are key differentiators between L6 and L7?",
            note: "Shows ambition and career planning",
            level: "Career Growth"
          }
        ]
      },
      // The Glassdoor-based category was removed to emphasize questions tailored to each interviewer and the role requirements.
      {
        category: "Strategic Closing Questions",
        icon: "🚀",
        description: "Questions demonstrating confidence and contribution vision",
        questions: [
          {
            q: "Based on my experience with payment transformations at Sicredi, Bradesco, and HSBC, where do you see greatest impact potential in first 6 months?",
            note: "Connects past experience with future opportunities",
            level: "Value Proposition"
          },
          {
            q: "If I brought a quick win proposal that could reduce Operational Cost per Transaction by 15% in first 90 days, what would be the approval and implementation process?",
            note: "Shows results delivery mindset",
            level: "Execution"
          },
          {
            q: "What are the 2-3 biggest bets you're making in Payment Operations for next 18 months? How could my background accelerate those outcomes?",
            note: "Shows interest in contributing to strategic priorities",
            level: "Strategic Alignment"
          },
          {
            q: "Is there anything in my experience or approach you'd like to explore more deeply? Can I share a specific case that's more relevant?",
            note: "Opens space to demonstrate additional expertise",
            level: "Opportunity Creation"
          }
        ]
      }
    ]
  }
};

export default myQuestionsData;
