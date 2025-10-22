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
        category: "<strong>Heleno P.</strong> <small>(Modelagem e Ciência de Dados em Pagamentos)</small>",
        icon: "🧠",
        description: "Perguntas alinhadas à experiência do entrevistador em ciência de dados e precificação",
        questions: [
          {
            q: "Você liderou o desenvolvimento de modelos que conectam decisões de supply chain a custos logísticos no FBA. Como essa experiência em precificação pode ajudar a reduzir custo por transação e melhorar decisões de roteamento em pagamentos?",
            note: "Conecta a experiência do entrevistador com desafios do papel",
            level: "Strategic"
          },
          {
            q: "No WFM você criou modelos causais para medir o gasto incremental de clientes. Como técnicas similares poderiam avaliar o impacto de novos parceiros de pagamento na adoção do PIX?",
            note: "Demonstra visão analítica aplicada a pagamentos",
            level: "Technical"
          },
          {
            q: "Você já transformou métricas complexas em dashboards self-service para Product Managers. Que indicadores seriam essenciais para monitorar a eficácia de modelos de AI/ML em pagamentos?",
            note: "Explora desenho de métricas e governança de dados",
            level: "Operational"
          },
          {
            q: "Como equilibrar experimentação em modelos de fees com a necessidade de estabilidade em sistemas mission-critical de pagamento?",
            note: "Mostra maturidade em gerenciamento de risco",
            level: "Strategic"
          }
        ]
      },
      {
        category: "<strong>Sujash B.</strong> <small>(Programas de Pagamentos e Expansão Internacional)</small>",
        icon: "🌎",
        description: "Perguntas que exploram a experiência do entrevistador em gerir programas de pagamento e parcerias globais",
        questions: [
          {
            q: "Quais aprendizados das operações de pagamentos na Índia e na América Latina você aplicaria na parceria com a Oakberry para acelerar a adoção do PIX e de wallets digitais?",
            note: "Destaca experiência internacional e foco em mercado brasileiro",
            level: "Strategic"
          },
          {
            q: "Como Senior Manager de Digital Payments e Seller Experience, quais trade-offs surgem ao balancear prioridades dos parceiros de pagamento, times de operação e experiência do vendedor?",
            note: "Mostra entendimento de gestão de stakeholders",
            level: "Tactical"
          },
          {
            q: "A experiência em telecom e m-commerce na Airtel influenciou sua abordagem para inovação em pagamentos na Amazon. Quais práticas de lá você recomenda para nossos programas?",
            note: "Cria ligação entre setores diferentes",
            level: "Strategic"
          },
          {
            q: "Que frameworks você usa para medir sucesso em engajamento de parceiros em mercados emergentes e garantir alinhamento entre todas as partes?",
            note: "Foca em métricas e governança",
            level: "Operational"
          }
        ]
      },
      {
        category: "<strong>Andreia G.</strong> <small>(Excelência Operacional e Melhoria Contínua em Pagamentos)</small>",
        icon: "⚙️",
        description: "Perguntas focadas em processos, Lean e melhoria contínua nas operações de pagamento",
        questions: [
          {
            q: "Quais práticas de Lean e Six Sigma você considera mais efetivas na redução de tempos de ciclo em processos de autorização, processamento e settlement?",
            note: "Demonstra conhecimento de melhorias operacionais",
            level: "Operational"
          },
          {
            q: "Você implementou o modelo ‘chapter’ no banco BV, obtendo 70% de ganho de eficiência. Como essa experiência pode ajudar na criação de capacidades de self-service e automação na Amazon?",
            note: "Conecta experiências anteriores com desafios atuais",
            level: "Strategic"
          },
          {
            q: "Sua experiência inclui negociar com payment networks e provedores. Quais critérios você usa para selecionar novos parceiros e garantir compliance e estabilidade?",
            note: "Mostra visão estratégica de parcerias",
            level: "Leadership"
          },
          {
            q: "Como você desenvolve e motiva equipes em ambientes de alta pressão garantindo que a velocidade ágil não comprometa a qualidade e segurança das operações?",
            note: "Explora liderança e cultura de melhoria contínua",
            level: "Team Dynamics"
          }
        ]
      },
      {
        category: "<strong>Eduardo L.</strong> <small>(Estratégia Financeira e Parcerias de Alto Impacto)</small>",
        icon: "💼",
        description: "Perguntas que cruzam finanças, M&A e decisões estratégicas em pagamentos",
        questions: [
          {
            q: "Como a experiência em planejamento financeiro e tesouraria global pode ajudar a justificar investimentos em AI/ML para operações de pagamento?",
            note: "Foca em alocação de recursos e inovação",
            level: "Strategic"
          },
          {
            q: "Quais métricas financeiras e de risco você considera mais críticas ao avaliar parcerias com novos processadores ou fintechs?",
            note: "Explora gestão de risco e ROI",
            level: "Tactical"
          },
          {
            q: "Tendo atuado em consultoria estratégica e private equity, que práticas de governança e KPIs financeiros você recomenda para garantir que a transformação de pagamentos gere valor a longo prazo?",
            note: "Conecta experiência em M&A com operações",
            level: "Leadership"
          },
          {
            q: "Como a integração entre finanças e operações pode otimizar decisões de pricing e fees para equilibrar experiência do cliente e rentabilidade?",
            note: "Integra perspectivas financeiras e operacionais",
            level: "Strategic"
          }
        ]
      },
      {
        category: "<strong>Gabriela B.</strong> <small>(Business Intelligence e Métricas de Sucesso em Pagamentos)</small>",
        icon: "📊",
        description: "Perguntas dirigidas a profissionais de BI/Data Analysis para impulsionar decisões em pagamentos",
        questions: [
          {
            q: "Como você estrutura dashboards e métricas que atendam tanto às necessidades operacionais quanto estratégicas em pagamentos, permitindo que equipes ajam de forma autônoma?",
            note: "Explora design de métricas e empowerment",
            level: "Operational"
          },
          {
            q: "Quais são os principais desafios ao integrar dados de múltiplos parceiros e métodos de pagamento e como sua experiência com SQL, ETL e AWS ajuda a garantir qualidade e governança?",
            note: "Foca em integração e governança de dados",
            level: "Technical"
          },
          {
            q: "Nos projetos em que criou curvas de retenção e modelos estatísticos, quais técnicas seriam mais eficazes para detectar padrões de fraude ou anomalias em transações?",
            note: "Aprofunda temas de detecção e prevenção",
            level: "Strategic"
          },
          {
            q: "Que estratégias recomenda para incentivar uma cultura data-driven em equipes que ainda dependem de relatórios manuais e como medir o sucesso dessa mudança?",
            note: "Foca em mudança cultural e adoção de BI",
            level: "Team Dynamics"
          }
        ]
      }
    ]
  },
  en: {
    title: "Strategic Questions for Amazon Interviewers",
    subtitle: "Demonstrating expertise in payments, AI/ML, and senior leadership",
    categories: [
      {
        category: "Payments Strategy & Oakberry Partnership",
        icon: "💳",
        description: "Questions demonstrating deep knowledge of Amazon's payments ecosystem",
        questions: [
          {
            q: "How does the strategic partnership with Oakberry align with Amazon's long-term vision for payments in Brazil, especially considering PIX growth and Open Finance?",
            note: "Shows knowledge of Brazilian market and strategic vision",
            level: "Strategic"
          },
          {
            q: "What are the main trade-offs between implementation speed and operational robustness when integrating new payment partners like Oakberry?",
            note: "Shows experience with real program management dilemmas",
            level: "Tactical"
          },
          {
            q: "How do you measure success of a payments operations transformation? Beyond Payment Success Rate and Authorization Rate, which efficiency metrics (e.g., Operational Cost per Transaction and Processing Time) and customer experience metrics (such as NPS) are critical for the business?",
            note: "Reveals knowledge of both efficiency and customer experience metrics in payments",
            level: "Operational"
          },
          {
            q: "Considering payments are mission-critical, how do you balance AI/ML experimentation versus operational stability? Is there a defined risk appetite framework?",
            note: "Shows maturity in risk management and innovation",
            level: "Strategic"
          }
        ]
      },
      // New custom categories tailored to each interviewer
      {
        category: "<strong>Heleno P.</strong> <small>(Modeling & Data Science in Payments)</small>",
        icon: "🧠",
        description: "Questions aligned with the interviewer's expertise in data science and pricing",
        questions: [
          {
            q: "You led development of models linking supply chain decisions to FBA logistics costs. How can that pricing experience help reduce transaction costs and improve routing decisions in payments?",
            note: "Connects the interviewer's experience with the role's challenges",
            level: "Strategic"
          },
          {
            q: "At Whole Foods Market you built causal models to measure customers’ incremental spend. How could similar techniques evaluate the impact of new payment partners on PIX adoption?",
            note: "Demonstrates analytical vision applied to payments",
            level: "Technical"
          },
          {
            q: "You've turned complex metrics into self‑service dashboards for product managers. Which indicators are essential to monitor AI/ML effectiveness in payments?",
            note: "Explores metric design and data governance",
            level: "Operational"
          },
          {
            q: "How do you balance experimentation in fee models with the need for stability in mission‑critical payment systems?",
            note: "Shows maturity in risk management",
            level: "Strategic"
          }
        ]
      },
      {
        category: "<strong>Sujash B.</strong> <small>(Payments Programs & International Expansion)</small>",
        icon: "🌎",
        description: "Questions exploring the interviewer's experience managing payment programs and global partnerships",
        questions: [
          {
            q: "What lessons from payment operations in India and Latin America would you apply to the Oakberry partnership to accelerate adoption of PIX and digital wallets?",
            note: "Highlights international experience and focus on the Brazilian market",
            level: "Strategic"
          },
          {
            q: "As Senior Manager of Digital Payments and Seller Experience, what trade‑offs arise when balancing priorities of payment partners, ops teams and seller experience?",
            note: "Demonstrates understanding of stakeholder management",
            level: "Tactical"
          },
          {
            q: "Your telecom and m‑commerce background at Airtel influenced innovation in Amazon payments. Which practices from that sector would you recommend for our programs?",
            note: "Links cross‑industry experience",
            level: "Strategic"
          },
          {
            q: "Which frameworks do you use to measure partner engagement success in emerging markets and ensure alignment among all parties?",
            note: "Focuses on metrics and governance",
            level: "Operational"
          }
        ]
      },
      {
        category: "<strong>Andreia G.</strong> <small>(Operational Excellence & Continuous Improvement in Payments)</small>",
        icon: "⚙️",
        description: "Questions focused on processes, Lean and continuous improvement in payment operations",
        questions: [
          {
            q: "Which Lean and Six Sigma practices are most effective at reducing cycle times in authorization, processing and settlement processes?",
            note: "Demonstrates knowledge of operational improvements",
            level: "Operational"
          },
          {
            q: "You implemented the ‘chapter’ model at Banco BV, achieving a 70% efficiency gain. How could that experience help build self‑service and automation capabilities at Amazon?",
            note: "Connects previous experience with current challenges",
            level: "Strategic"
          },
          {
            q: "Your experience includes negotiating with payment networks and providers. What criteria do you use when selecting new partners to ensure compliance and stability?",
            note: "Shows strategic view of partnerships",
            level: "Leadership"
          },
          {
            q: "How do you develop and motivate teams in high‑pressure environments while ensuring agile speed doesn’t compromise quality and payment security?",
            note: "Explores leadership and continuous improvement culture",
            level: "Team Dynamics"
          }
        ]
      },
      {
        category: "<strong>Eduardo L.</strong> <small>(Financial Strategy & High‑Impact Partnerships)</small>",
        icon: "💼",
        description: "Questions crossing finance, M&A and strategic decisions in payments",
        questions: [
          {
            q: "How can your experience in financial planning and global treasury help justify AI/ML investments for payment operations?",
            note: "Focuses on resource allocation and innovation",
            level: "Strategic"
          },
          {
            q: "Which financial and risk metrics do you consider most critical when evaluating partnerships with new processors or fintechs?",
            note: "Explores risk management and ROI",
            level: "Tactical"
          },
          {
            q: "Having worked in strategic consulting and private equity, what governance practices and financial KPIs do you recommend to ensure payment transformation creates long‑term value?",
            note: "Connects M&A experience with operations",
            level: "Leadership"
          },
          {
            q: "How can integration between finance and operations optimize pricing and fee decisions to balance customer experience and profitability?",
            note: "Integrates financial and operational perspectives",
            level: "Strategic"
          }
        ]
      },
      {
        category: "<strong>Gabriela B.</strong> <small>(Business Intelligence & Success Metrics in Payments)</small>",
        icon: "📊",
        description: "Questions directed at BI/Data Analysis professionals to drive decisions in payments",
        questions: [
          {
            q: "How do you structure dashboards and metrics that meet both operational and strategic needs in payments, enabling teams to act autonomously?",
            note: "Explores metric design and empowerment",
            level: "Operational"
          },
          {
            q: "What are the main challenges of integrating data from multiple partners and payment methods, and how does your experience with SQL, ETL and AWS ensure quality and governance?",
            note: "Focuses on data integration and governance",
            level: "Technical"
          },
          {
            q: "In projects where you created retention curves and statistical models, which techniques would be most effective at detecting fraud patterns or transaction anomalies?",
            note: "Digs into detection and prevention themes",
            level: "Strategic"
          },
          {
            q: "What strategies do you recommend to encourage a data‑driven culture in teams that still rely on manual reports, and how do you measure success of that change?",
            note: "Focuses on cultural change and BI adoption",
            level: "Team Dynamics"
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
