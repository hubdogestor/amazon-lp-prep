// Case 4 - learn_and_be_curious
const case_4 = {
  id: "stay-updated-payments-fintech",
  title: "Criei um Sistema de Atualização Contínua em Payments/Fintech com PoCs Reutilizáveis",
  title_pt: "Criei um Sistema de Atualização Contínua em Payments/Fintech com PoCs Reutilizáveis",
  title_en: "Built a Continuous Learning System in Payments/Fintech with Reusable PoCs",
  company: "Pessoal/Profissional",
  period: "01/2020-12/2024",
  isTopCase: false,
  pt: {
    s: `No setor de pagamentos, identifiquei que minha equipe estava sempre 6-12 meses atrasada em relação a mudanças regulatórias e tecnológicas do BACEN. Analisei 15 incidentes de integração de pagamento que ocorreram sob minha responsabilidade em 2 anos e descobri que 73% eram causados por desconhecimento de padrões recentes (PIX, Open Finance, ISO 20022). Clientes corporativos reclamavam diretamente comigo que levava 8 semanas para eu avaliar viabilidade de novas funcionalidades, perdendo janelas competitivas. Tentativas anteriores que implementei para manter equipe atualizada falharam - reuniões mensais de 'tech talks' que organizei tinham 22% de participação e zero aplicação prática. Sem método estruturado, decisões ficavam defasadas, riscos regulatórios aumentavam e inovação virava tentativa-e-erro custosa.`,
    t: `Meu papel individual: eu liderei end-to-end, defini escopo e decisões críticas, e atuei como owner único. Minha responsabilidade era criar um sistema de aprendizado contínuo que acelerasse time-to-market de novas features de pagamento e eliminasse riscos de não-conformidade. Estabeleci meta clara: reduzir ramp-up de novos padrões de 6 para 3 semanas, criar pelo menos 8 PoCs reutilizáveis por ano focados em dores reais de clientes, e aumentar taxa de aproveitamento de aprendizado de 22% para mínimo 75%. Sabia que precisava transformar curiosidade passiva em vantagem competitiva mensurável.`,
    a: `Priorizei aprendizado centrado no cliente, alinhei stakeholders, tomei decisões de trade-off e removi bloqueios. Primeiro: mapeei competências-alvo entrevistando 12 clientes enterprise que representavam 68% da receita de pagamentos. Identifiquei que queriam principalmente: (1) tempo de integração PIX < 2 semanas, (2) suporte a Open Finance sem fricção, (3) reconciliação automatizada multi-adquirente. Estruturei pipeline de fontes primárias: assinei circulares BACEN, papers de FEBRABAN, roadmaps de Visa/Mastercard, e estabeleci ROT (Ritmo de Trabalho) semanal de 4 horas dedicadas. Segundo: montei laboratório de PoCs com critérios rigorosos. Cada PoC precisava: resolver dor específica de cliente (validada), ter documentação padrão (README + arquitetura + casos de uso), código reutilizável em 3+ projetos, e tempo de implementação < 16 horas. Criei repositório Git privado com 8 templates pré-configurados (APIs PIX, antifraude com ML, reconciliação batch, webhooks BACEN). Terceiro: publiquei sínteses opinativas semanais (newsletter interna 'Payments Pulse') destacando mudanças regulatórias e impacto em roadmap. Rodei guildas quinzenais de 90 minutos onde eu apresentava PoC novo, time fazia hands-on e discutíamos aplicação. Maior desafio foi convencer liderança a alocar 4h/semana para aprendizado quando roadmap estava apertado. Montei business case mostrando que cada dia de atraso em conformidade PIX custava R$ 47k em multas potenciais (dados do jurídico) e que ramp-up rápido economizaria 120h/trimestre de retrabalho (R$ 156k considerando custo de eng). Negociei aprovação após demonstrar PoC de reconciliação PIX que economizou 18h/semana de trabalho manual da operação.`,
    r: `Entreguei 8-10 PoCs por ano durante 4 anos (total 34 PoCs), todos focados em problemas reais de clientes. Reduzi ramp-up de novos padrões de pagamento de 6 para 2.8 semanas (53% de redução, superando meta de 50%). Taxa de aproveitamento de aprendizado saltou de 22% para 81% (medido por aplicação prática em projetos). Due diligence técnica de novas integrações caiu de 8 para 3.2 semanas, acelerando time-to-market em 60%. Dois PoCs viraram aceleradores padrão de projeto: (1) template PIX reduziu tempo de integração de 6 para 1.5 semanas, economizando R$ 280k/ano em eng, (2) framework de reconciliação multi-adquirente eliminou 94% de erros manuais (de 340 para 18 erros/mês). Clientes reportaram 45% de redução em tempo de onboarding de novos meios de pagamento. ROI do investimento foi 8.3x: 832h investidas geraram economia de R$ 2.1M em 2 anos (retrabalho evitado + conformidade antecipada + aceleração de receita). Sistema foi replicado por 2 outras áreas da empresa (fraud detection e compliance).`,
    l: `Aprendi que curiosidade estruturada com método gera vantagem competitiva composta quando ligada a problemas reais de clientes e mecanismos de reuso. Descobri que aprendizado passivo (ler artigos) tem 10% de retenção, mas criar PoCs práticos aumenta para 78%. O maior insight foi que velocidade de aprendizado é vantagem defensável - competidores podem copiar features, mas não conseguem copiar pipeline de conhecimento que acelera execução em 60%. Hoje, sempre que enfrento domínio técnico complexo, primeiro pergunto: 'Qual problema específico do cliente isso resolve?' e estruturo aprendizado com PoCs reutilizáveis ao invés de teoria abstrata.`
  },
  en: {
    s: `In payments, I identified my team was always 6-12 months behind regulatory and tech changes from Central Bank. I analyzed 15 payment integration incidents that occurred under my responsibility over 2 years and discovered 73% were caused by lack of knowledge of recent standards (PIX, Open Finance, ISO 20022). Corporate clients complained directly to me that I took 8 weeks to assess new feature viability, missing competitive windows. Previous attempts I implemented to keep team updated failed - monthly 'tech talks' I organized had 22% attendance and zero practical application. Without structured method, decisions went stale, regulatory risks increased, and innovation became costly trial-and-error.`,
    t: `My individual role: I led end-to-end, set scope and critical decisions, and acted as single-threaded owner. My responsibility was to create continuous learning system that accelerated time-to-market for new payment features and eliminated non-compliance risks. I established clear goals: reduce ramp-up for new standards from 6 to 3 weeks, create at least 8 reusable PoCs per year focused on real customer pain points, and increase learning utilization rate from 22% to minimum 75%. I knew I needed to transform passive curiosity into measurable competitive advantage.`,
    a: `I prioritized customer-centric learning, aligned stakeholders, made trade-offs, and unblocked teams. First: I mapped target competencies by interviewing 12 enterprise clients representing 68% of payments revenue. I identified they wanted primarily: (1) PIX integration time < 2 weeks, (2) frictionless Open Finance support, (3) automated multi-acquirer reconciliation. I structured primary-source pipeline: subscribed to Central Bank circulars, industry papers, Visa/Mastercard roadmaps, and established weekly ROT (Rhythm of Business) of 4 dedicated hours. Second: I built PoC laboratory with rigorous criteria. Each PoC needed to: solve specific customer pain (validated), have standard documentation (README + architecture + use cases), reusable code in 3+ projects, and implementation time < 16 hours. I created private Git repo with 8 pre-configured templates (PIX APIs, ML fraud detection, batch reconciliation, Central Bank webhooks). Third: I published weekly opinionated syntheses (internal newsletter 'Payments Pulse') highlighting regulatory changes and roadmap impact. I ran bi-weekly 90-minute guilds where I presented new PoC, team did hands-on, and discussed application. Biggest challenge was convincing leadership to allocate 4h/week for learning when roadmap was tight. I built business case showing each day of PIX compliance delay cost R$ 47k in potential fines (legal data) and fast ramp-up would save 120h/quarter of rework (R$ 156k considering eng cost). I negotiated approval after demonstrating PIX reconciliation PoC that saved 18h/week of manual operations work.`,
    r: `I delivered 8-10 PoCs per year over 4 years (total 34 PoCs), all focused on real customer problems. I reduced ramp-up for new payment standards from 6 to 2.8 weeks (53% reduction, exceeding 50% goal). Learning utilization rate jumped from 22% to 81% (measured by practical application in projects). Technical due diligence for new integrations dropped from 8 to 3.2 weeks, accelerating time-to-market by 60%. Two PoCs became standard project accelerators: (1) PIX template reduced integration time from 6 to 1.5 weeks, saving R$ 280k/year in eng, (2) multi-acquirer reconciliation framework eliminated 94% of manual errors (from 340 to 18 errors/month). Clients reported 45% reduction in onboarding time for new payment methods. Investment ROI was 8.3x: 832h invested generated R$ 2.1M savings over 2 years (rework avoided + early compliance + revenue acceleration). System was replicated by 2 other company areas (fraud detection and compliance).`,
    l: `I learned that structured curiosity with method generates compounding competitive advantage when tied to real customer problems and reuse mechanisms. I discovered that passive learning (reading articles) has 10% retention, but creating practical PoCs increases to 78%. Biggest insight was that learning velocity is defensible advantage - competitors can copy features, but can't copy knowledge pipeline that accelerates execution by 60%. Today, whenever I face complex technical domain, I first ask: 'What specific customer problem does this solve?' and structure learning with reusable PoCs instead of abstract theory.`
  },
  fups: [
    {
        "q": "Como escolheu fontes primárias?",
        "a": "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you choose primary sources?",
        "a_en": "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Qual PoC teve maior impacto?",
        "a": "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "Which PoC had the biggest impact?",
        "a_en": "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como manteve constância do ROT?",
        "a": "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you keep ROT consistent?",
        "a_en": "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como antecipou mudanças regulatórias?",
        "a": "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you anticipate regulatory changes?",
        "a_en": "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Que métricas provam eficácia?",
        "a": "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "What metrics prove effectiveness?",
        "a_en": "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como compartilhou conhecimento?",
        "a": "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you share knowledge?",
        "a_en": "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como prioriza temas emergentes?",
        "a": "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How do you prioritize emerging topics?",
        "a_en": "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Que mecanismos evitam dispersão?",
        "a": "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "What mechanisms avoid dispersion?",
        "a_en": "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Se refizesse, que melhoria faria?",
        "a": "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "If redoing, what improvement would you add?",
        "a_en": "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como o sistema escala com o workload?",
        "a": "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How does the system scale with workload?",
        "a_en": "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    }
]
};

export default case_4;
