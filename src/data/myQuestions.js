// src/data/myQuestions.js
// Perguntas que o candidato pode/deve fazer aos entrevistadores

const myQuestionsData = {
  pt: {
    title: "Minhas Perguntas para o Entrevistador",
    categories: [
      {
        category: "Sobre o Time e Cultura",
        icon: "👥",
        questions: [
          {
            q: "Como é a dinâmica do time? Como vocês colaboram no dia a dia?",
            note: "Entenda a estrutura, comunicação e processos do time."
          },
          {
            q: "Quais são os maiores desafios que o time está enfrentando atualmente?",
            note: "Demonstra interesse genuíno e permite avaliar complexidade."
          },
          {
            q: "Como o time equilibra inovação com entrega de resultados?",
            note: "Importante para entender se há espaço para experimentação."
          },
          {
            q: "Como os Leadership Principles são aplicados no dia a dia do time?",
            note: "Mostra interesse na cultura Amazon e práticas reais."
          },
          {
            q: "Qual é o estilo de liderança predominante no time?",
            note: "Avalie se o estilo de gestão se alinha com suas preferências."
          }
        ]
      },
      {
        category: "Sobre a Vaga e Projetos",
        icon: "🎯",
        questions: [
          {
            q: "Quais seriam as principais responsabilidades nos primeiros 3-6 meses?",
            note: "Clareza sobre expectativas iniciais e ramp-up."
          },
          {
            q: "Quais são os projetos mais estratégicos que o time está trabalhando?",
            note: "Entenda o impacto e relevância do trabalho."
          },
          {
            q: "Como o sucesso nesta posição seria medido nos primeiros 6-12 meses?",
            note: "Importante para alinhar expectativas de performance."
          },
          {
            q: "Quais tecnologias e ferramentas o time utiliza no dia a dia?",
            note: "Avalie o tech stack e oportunidades de aprendizado."
          },
          {
            q: "Há oportunidade de trabalhar em projetos cross-team ou com outros times?",
            note: "Entenda possibilidades de networking e aprendizado amplo."
          }
        ]
      },
      {
        category: "Crescimento e Desenvolvimento",
        icon: "📈",
        questions: [
          {
            q: "Quais são as oportunidades de crescimento e desenvolvimento na Amazon?",
            note: "Demonstra ambição e interesse em carreira de longo prazo."
          },
          {
            q: "Como funciona o processo de promoção e desenvolvimento de carreira?",
            note: "Entenda critérios e caminhos de progressão."
          },
          {
            q: "O time investe em treinamentos, certificações ou conferências?",
            note: "Avalie investimento em desenvolvimento profissional."
          },
          {
            q: "Existe programa de mentoria formal ou informal?",
            note: "Importante para acelerar aprendizado e crescimento."
          },
          {
            q: "Como a Amazon apoia colaboradores que querem explorar outras áreas?",
            note: "Entenda mobilidade interna e flexibilidade de carreira."
          }
        ]
      },
      {
        category: "Work-Life Balance e Benefícios",
        icon: "⚖️",
        questions: [
          {
            q: "Como é a política de trabalho remoto/híbrido do time?",
            note: "Clareza sobre flexibilidade e modelo de trabalho."
          },
          {
            q: "Como o time lida com on-call e questões de disponibilidade?",
            note: "Importante entender expectativas de horário e plantões."
          },
          {
            q: "Quais são os principais benefícios além do salário?",
            note: "Avalie pacote completo de compensação e benefícios."
          },
          {
            q: "Como a empresa apoia o bem-estar e saúde mental dos colaboradores?",
            note: "Demonstra preocupação com equilíbrio e sustentabilidade."
          }
        ]
      },
      {
        category: "Sobre Você e Sua Experiência",
        icon: "💭",
        questions: [
          {
            q: "O que você mais gosta de trabalhar na Amazon?",
            note: "Perspectiva pessoal e honesta do entrevistador."
          },
          {
            q: "Qual foi o projeto mais desafiador e gratificante que você trabalhou aqui?",
            note: "Insights sobre tipo de trabalho e satisfação."
          },
          {
            q: "Se você pudesse mudar algo na empresa/time, o que seria?",
            note: "Pergunta corajosa que pode revelar pontos de atenção."
          },
          {
            q: "Como você descreveria a cultura do time em 3 palavras?",
            note: "Resumo rápido e revelador da dinâmica do grupo."
          }
        ]
      },
      {
        category: "Próximos Passos",
        icon: "🚀",
        questions: [
          {
            q: "Quais são os próximos passos no processo seletivo?",
            note: "Importante para entender timeline e expectativas."
          },
          {
            q: "Há algo nas minhas respostas que gostaria de explorar mais?",
            note: "Mostra abertura e interesse em esclarecer dúvidas."
          },
          {
            q: "Com base na nossa conversa, você tem alguma preocupação sobre meu fit para a vaga?",
            note: "Pergunta corajosa que permite endereçar objeções."
          },
          {
            q: "Qual seria o prazo esperado para decisão após esta etapa?",
            note: "Planejamento e gestão de expectativas."
          }
        ]
      }
    ]
  },
  en: {
    title: "My Questions for the Interviewer",
    categories: [
      {
        category: "About the Team and Culture",
        icon: "👥",
        questions: [
          {
            q: "What's the team dynamic like? How do you collaborate day-to-day?",
            note: "Understand structure, communication, and team processes."
          },
          {
            q: "What are the biggest challenges the team is currently facing?",
            note: "Shows genuine interest and allows complexity assessment."
          },
          {
            q: "How does the team balance innovation with delivering results?",
            note: "Important to understand if there's room for experimentation."
          },
          {
            q: "How are the Leadership Principles applied in the team's daily work?",
            note: "Shows interest in Amazon culture and real practices."
          },
          {
            q: "What's the predominant leadership style in the team?",
            note: "Assess if management style aligns with your preferences."
          }
        ]
      },
      {
        category: "About the Role and Projects",
        icon: "🎯",
        questions: [
          {
            q: "What would be the main responsibilities in the first 3-6 months?",
            note: "Clarity on initial expectations and ramp-up."
          },
          {
            q: "What are the most strategic projects the team is working on?",
            note: "Understand impact and relevance of the work."
          },
          {
            q: "How would success in this position be measured in the first 6-12 months?",
            note: "Important to align performance expectations."
          },
          {
            q: "What technologies and tools does the team use daily?",
            note: "Assess tech stack and learning opportunities."
          },
          {
            q: "Is there opportunity to work on cross-team projects?",
            note: "Understand networking and broad learning possibilities."
          }
        ]
      },
      {
        category: "Growth and Development",
        icon: "📈",
        questions: [
          {
            q: "What are the growth and development opportunities at Amazon?",
            note: "Shows ambition and interest in long-term career."
          },
          {
            q: "How does the promotion and career development process work?",
            note: "Understand criteria and progression paths."
          },
          {
            q: "Does the team invest in training, certifications, or conferences?",
            note: "Assess investment in professional development."
          },
          {
            q: "Is there a formal or informal mentorship program?",
            note: "Important to accelerate learning and growth."
          },
          {
            q: "How does Amazon support employees who want to explore other areas?",
            note: "Understand internal mobility and career flexibility."
          }
        ]
      },
      {
        category: "Work-Life Balance and Benefits",
        icon: "⚖️",
        questions: [
          {
            q: "What's the team's remote/hybrid work policy?",
            note: "Clarity on flexibility and work model."
          },
          {
            q: "How does the team handle on-call and availability requirements?",
            note: "Important to understand schedule and on-call expectations."
          },
          {
            q: "What are the main benefits beyond salary?",
            note: "Assess complete compensation and benefits package."
          },
          {
            q: "How does the company support employee well-being and mental health?",
            note: "Shows concern for balance and sustainability."
          }
        ]
      },
      {
        category: "About You and Your Experience",
        icon: "💭",
        questions: [
          {
            q: "What do you enjoy most about working at Amazon?",
            note: "Personal and honest perspective from interviewer."
          },
          {
            q: "What was the most challenging and rewarding project you've worked on here?",
            note: "Insights about type of work and satisfaction."
          },
          {
            q: "If you could change something about the company/team, what would it be?",
            note: "Bold question that can reveal attention points."
          },
          {
            q: "How would you describe the team culture in 3 words?",
            note: "Quick and revealing summary of group dynamics."
          }
        ]
      },
      {
        category: "Next Steps",
        icon: "🚀",
        questions: [
          {
            q: "What are the next steps in the selection process?",
            note: "Important to understand timeline and expectations."
          },
          {
            q: "Is there anything in my answers you'd like to explore further?",
            note: "Shows openness and interest in clarifying doubts."
          },
          {
            q: "Based on our conversation, do you have any concerns about my fit for the role?",
            note: "Bold question that allows addressing objections."
          },
          {
            q: "What would be the expected timeframe for decision after this stage?",
            note: "Planning and expectation management."
          }
        ]
      }
    ]
  }
};

module.exports = myQuestionsData;
