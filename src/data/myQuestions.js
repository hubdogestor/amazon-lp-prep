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
            q: "Como vocês medem o sucesso de uma transformação operacional em pagamentos? Quais métricas além de Payment Success Rate e Authorization Rate são críticas para o negócio?",
            note: "Revela conhecimento de métricas específicas de pagamentos",
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
      {
        category: "Sugestões Glassdoor",
        icon: "📝",
        description: "Perguntas inspiradas em relatos recentes do Glassdoor",
        questions: [
          {
            q: "Vi no Glassdoor que entrevistas recentes destacam liderança inclusiva. Quais comportamentos vocês avaliam como diferenciais hoje?",
            note: "Mostra que você conecta pesquisa externa com expectativas internas",
            level: "Leadership"
          },
          {
            q: "Relatos no Glassdoor mencionam desafios de integração entre tecnologia e operações. Quais aprendizados desses casos orientam o roadmap atual?",
            note: "Demonstra que você transforma feedback público em ações estruturadas",
            level: "Strategic"
          },
          {
            q: "Muitos candidatos citam a etapa com o bar raiser. Que padrões de reprovação vocês identificaram e como ajustaram o coaching dos times?",
            note: "Evidencia foco em melhoria contínua do processo seletivo",
            level: "Operational"
          },
          {
            q: "Glassdoor mostra que candidatos valorizam clareza sobre sucesso nos primeiros 90 dias. Como vocês estruturam o onboarding para garantir resultados rápidos?",
            note: "Mostra preocupação em entregar impacto logo no início",
            level: "Execution"
          }
        ]
      },
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
            q: "How do you measure success of operational transformation in payments? Which metrics beyond Payment Success Rate and Authorization Rate are critical for business?",
            note: "Reveals knowledge of specific payment metrics",
            level: "Operational"
          },
          {
            q: "Considering payments are mission-critical, how do you balance AI/ML experimentation versus operational stability? Is there a defined risk appetite framework?",
            note: "Shows maturity in risk management and innovation",
            level: "Strategic"
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
      {
        category: "Glassdoor Suggestions",
        icon: "📝",
        description: "Questions inspired by recent interview stories shared on Glassdoor",
        questions: [
          {
            q: "Glassdoor reviews highlight inclusive leadership as a differentiator. Which behaviors do you prioritize when evaluating senior Program Managers?",
            note: "Shows you connect external research with Amazon expectations",
            level: "Leadership"
          },
          {
            q: "Several candidates mention integration challenges between tech and operations. What lessons from those cases still guide the roadmap today?",
            note: "Signals you convert public feedback into structured improvements",
            level: "Strategic"
          },
          {
            q: "Many reviews reference the bar raiser round. What recurring rejection patterns have you identified and how did you evolve interviewer coaching?",
            note: "Reinforces focus on continuously improving the hiring journey",
            level: "Operational"
          },
          {
            q: "Candidates appreciate clarity on success within the first 90 days. How do you design onboarding so new PMs can deliver fast impact?",
            note: "Emphasizes commitment to early wins and measurable outcomes",
            level: "Execution"
          }
        ]
      },
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
