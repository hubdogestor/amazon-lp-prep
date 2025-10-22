const case_4 = {
  id: "unimed-open-innovation",
  title: "Inventei plataforma aberta com LP SaaS que reduziu ciclo de inovação em 68%",
  title_pt: "Inventei plataforma aberta com LP SaaS que reduziu ciclo de inovação em 68%",
  title_en: "Invented open platform with SaaS LP that cut innovation cycle by 68%",
  company: "Unimed",
  period: "02/2022-12/2023",
  keywords: "#inventar-plataforma | #inovação-aberta | #reduzir-ciclo | #apis | #saas",
  isTopCase: false,
  isGoodCase: true,

  pt: {
    s: `Em 2022, como Gerente de Transformação Digital na Unimed, recebi um relatório do conselho que escancarou a crise de inovação: “21 meses para um MVP, R$ 2,1 milhões por projeto, nenhuma solução entregue.” Enquanto startups lançavam aplicativos de saúde em semanas, nós levávamos quase dois anos para aprovar qualquer integração. Essa lentidão nos fez perder duas parcerias estratégicas para concorrentes digitais, custou R$ 5,4 milhões em oportunidades não convertidas e aumentou em 13% a taxa de churn de clientes corporativos. Além do impacto financeiro, nossa marca passou a ser percebida como lenta e pouco inovadora, abrindo espaço para clínicas digitais em crescimento como Dr. Consulta e Alice Health.`,
    
    t: `Minha missão era reconstruir o modelo de inovação corporativa: reduzir em 70% o ciclo de desenvolvimento, lançar três soluções com NPS acima de 60 e estruturar um sistema sustentável de parcerias com startups, sem aumentar o risco financeiro. Precisávamos provar que governança e agilidade podiam coexistir.`,
    
    a: `Para tratar as causas, analisei 27 projetos anteriores e modelei um mapa completo dos fluxos de aprovação. Entrevistas com 18 gestores de TI e jurídico revelaram quatro níveis redundantes de validação que geravam retrabalho sem ganho de segurança. Simulei sua remoção em ambiente controlado e validei em três projetos-piloto com auditoria independente; todos mantiveram 100% de compliance e reduziram tempo de aprovação em 70%. Esse estudo de risco foi a base para criar o “Fast-Track Klin”, um novo fluxo de decisão que transferiu autoridade para squads multidisciplinares e substituiu gatekeepers por critérios objetivos de risco.  
    Em seguida, lidero a criação técnica da plataforma de APIs abertas, desenvolvida com arquitetura segura e sandbox para testes de integração. A redução do tempo de integração de 140 para 10 dias permitiu que 33 startups lançassem provas de conceito em menos de três semanas, gerando R$ 11 milhões em receita acelerada e reduzindo o tempo médio de lançamento ao mercado de 4 meses para 21 dias.  
    Por fim, ao apresentar o modelo ao conselho financeiro, demonstrei por simulação que o risco máximo de perda por piloto (R$ 50 mil) representava menos de 1% do custo médio de projetos anteriores. A governança com cap financeiro, métricas claras e kill criteria de 90 dias foi aprovada por unanimidade.`,
    
    r: `Em 18 meses, o ciclo de MVP caiu de 21 para 6,7 meses (-68%) e os custos baixaram 44%. Comparado ao benchmark de 12 meses do setor privado de saúde digital, operamos com velocidade duas vezes maior. Atraímos 96 startups, assinamos 14 contratos ativos e geramos R$ 36 milhões em eficiência operacional. As soluções de monitoramento remoto reduziram readmissões cardíacas em 19%, e o Fast-Track Klin foi replicado em cinco outras unidades da Unimed e duas instituições parceiras do setor público, provando sua escalabilidade.`,
    
    l: `Aprendi que mudanças estruturais só avançam quando combinam dados, validação progressiva e comunicação estratégica com os tomadores de decisão. O Fast-Track Klin evoluiu para um modelo de integração aplicável a mercados regulados  - como pagamentos, seguros e telemedicina - onde a equação entre agilidade e compliance é ainda mais complexa. Atualmente, trabalho em projetos para replicar a metodologia em parcerias internacionais de open health com foco em escalabilidade global.`
  },

  en: {
    s: `In 2022, as Digital Transformation Manager at Unimed, a board report revealed our innovation crisis: “21 months for an MVP, BRL 2.1 million per project, no solution delivered.” While startups released health apps within weeks, we needed almost two years to approve a simple integration. That delay cost two strategic partnerships lost to digital competitors, BRL 5.4 million in unrealized opportunities, and a 13 % increase in corporate client churn. Beyond finances, our brand started being seen as slow and obsolete, allowing digital players like Dr. Consulta and Alice Health to capture our space in the market.`,
    
    t: `My mission was to rebuild the corporate innovation model: Reduce development cycle by 70 %, launch three solutions with NPS above 60, and create a sustainable startup partnership system without financial over-risk. We had to prove that governance and agility could coexist.`,
    
    a: `To find the root causes, I analyzed 27 past projects and mapped the full approval flow. Interviews with 18 IT and legal managers revealed four redundant validation levels creating rework without added security. I simulated their removal in controlled environments and validated in three low-risk pilots audited externally - all kept 100 % compliance and cut approval time by 70 %. That evidence founded the design of “Fast-Track Klin,” a new decision flow delegating authority to cross-functional squads based on objective risk criteria.  
    Then I led the technical creation of a secure open-API platform with sandbox integration testing. Integration time fell from 140 to 10 days, enabling 33 startups to launch proof-of-concepts in under three weeks, accelerating BRL 11 million in revenue and cutting average time-to-market from four months to 21 days.  
    Finally, I presented a simulation to the finance board demonstrating that the maximum pilot loss (BRL 50 k) was under 1 % of previous project costs. The new governance with financial cap, clear metrics and 90-day kill-criteria was approved unanimously.`,
    
    r: `Within 18 months the MVP cycle dropped from 21 to 6.7 months (-68 %), costs fell 44 %. Compared to the 12-month benchmark in the private digital-health sector, our speed was twice as fast. We attracted 96 startups, signed 14 contracts and generated BRL 36 million in operational savings. Remote-monitoring solutions reduced cardiac readmissions by 19 %. The Fast-Track Klin framework was replicated in five other Unimed units and two public partners, proving scalability across contexts.`,
    
    l: `I learned that structural change moves forward only when it combines data, gradual validation and strategic communication with decision-makers. Fast-Track Klin evolved into a model that applies to regulated markets such as payments, insurance and telemedicine, where balancing speed and compliance is even more complex. I am now working on projects to replicate the methodology in international open-health partnerships aimed at global scalability.`
  },

  fups: [
    // --- 6 PERGUNTAS OBRIGATÓRIAS ---
    {
      q: "Qual foi seu maior erro ou falha neste caso?",
      a: "Subestimei a resistência do comitê de TI às APIs abertas. Demorei três semanas convencendo quando poderia ter envolvido desde o diagnóstico, poupando tempo e desgaste político.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "I underestimated IT committee resistance to open APIs. Took three weeks convincing when I could have involved them from diagnosis, saving time and political friction."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Criaria workshop de co-design com TI, jurídico e compliance antes do piloto, transformando stakeholders críticos em aliados desde o início.",
      q_en: "What would you do differently today?",
      a_en: "I'd create co-design workshop with IT, legal, and compliance before pilot, turning critical stakeholders into allies from the start."
    },
    {
      q: "Qual foi o obstáculo mais difícil de superar?",
      a: "Balancear agilidade com compliance em ambiente altamente regulado. Resolvi com validação progressiva em pilotos auditados e criação do Fast-Track Klin.",
      q_en: "What was the hardest obstacle to overcome?",
      a_en: "Balancing agility with compliance in highly regulated environment. Solved through progressive validation in audited pilots and creating Fast-Track Klin."
    },
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "Riscos: violação de dados (sandbox isolado + auditorias), falha financeira (cap de R$ 50k/piloto), rejeição médica (co-criação com 18 médicos).",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "Risks: data breach (isolated sandbox + audits), financial loss (R$ 50k cap/pilot), physician rejection (co-creation with 18 doctors)."
    },
    {
      q: "Que dados você usou e qual foi a racional de cálculo?",
      a: "Analisei 27 projetos anteriores, 180 mil registros de ouvidoria e entrevistas com 18 gestores. ROI calculado comparando custo médio anterior (R$ 2,1 mi) vs novo modelo (R$ 50k/piloto).",
      q_en: "What data did you use and what was your calculation rationale?",
      a_en: "Analyzed 27 past projects, 180k ombudsman records, and 18 manager interviews. ROI calculated comparing previous average cost (BRL 2.1M) vs new model (BRL 50k/pilot)."
    },
    {
      q: "Como você usou o aprendizado deste caso em outros contextos?",
      a: "Replicamos Fast-Track Klin em cinco unidades Unimed e duas instituições públicas. Aplico o modelo API-first em fintechs, priorizando velocidade com compliance.",
      q_en: "How did you apply this learning elsewhere?",
      a_en: "Replicated Fast-Track Klin across five Unimed units and two public institutions. Apply API-first model in fintechs, prioritizing speed with compliance."
    },

    // --- FUPs originais e complementares ---
    {
      q: "Como voce priorizou as dores dos pacientes na escolha das startups?",
      a: "Eu usei os 28 depth interviews e 180 mil registros da ouvidoria para criar um score de urgência que pesava impacto clínico, frequência e custo; as startups com score acima de 8 entraram na primeira onda.",
      q_en: "How did you prioritize patient pains when selecting startups?",
      a_en: "I combined 28 depth interviews and 180 thousand ombudsman records into an urgency score weighing clinical impact, frequency, and cost; startups scoring above 8 joined wave one."
    },
    {
      q: "Qual foi o maior conflito interno e como voce resolveu?",
      a: "O diretor de TI bloqueou as APIs abertas por segurança; eu propus sandbox isolado, auditoria mensal e kill switch automático, ganhando aprovação em 3 semanas.",
      q_en: "What was the biggest internal conflict and how did you resolve it?",
      a_en: "The IT director blocked open APIs for security; I proposed an isolated sandbox, monthly audits, and automatic kill switch, gaining approval in 3 weeks."
    },
    {
      q: "Como voce mediu ROI das parcerias alem da economia?",
      a: "Eu trackeei NPS por solução, tempo de adoção pelos médicos e impacto clínico; criei dashboard que mostrava correlação entre inovação e satisfação do cliente.",
      q_en: "How did you measure partnership ROI beyond savings?",
      a_en: "I tracked NPS per solution, physician adoption time, and clinical impact; I built a dashboard showing correlation between innovation and customer satisfaction."
    },
    {
      q: "Que mecanismo voce criou para sustentar a inovacao?",
      a: "Eu instituí Innovation Fridays, onde 20% do time dedica tempo a experimentação, e criei fundo rotativo de R$ 500k para pilotos rápidos.",
      q_en: "What mechanism did you create to sustain innovation?",
      a_en: "I instituted Innovation Fridays where 20% of the team dedicates time to experimentation, and created a R$500k revolving fund for rapid pilots."
    },
    {
      q: "Como voce garantiu que startups entendessem o contexto medico?",
      a: "Eu criei programa de imersão de 2 semanas com médicos, enfermeiros e pacientes, obrigatório para todas as startups antes do desenvolvimento.",
      q_en: "How did you ensure startups understood the medical context?",
      a_en: "I created a mandatory 2-week immersion program with doctors, nurses, and patients for all startups before development."
    },
    {
      q: "Qual aprendizado voce levou para pagamentos?",
      a: "O conceito de API-first e governança clara; hoje uso o mesmo modelo para integrar fintechs, priorizando velocidade sem comprometer compliance.",
      q_en: "What learning did you take to payments?",
      a_en: "The API-first concept and clear governance; today I use the same model to integrate fintechs, prioritizing speed without compromising compliance."
    },
    {
      q: "Como voce tratou startups que falharam nos pilotos?",
      a: "Eu criei processo de feedback estruturado e ofereci mentoria para pivot; 30% das startups rejeitadas voltaram com soluções melhores em 6 meses.",
      q_en: "How did you handle startups that failed pilots?",
      a_en: "I created structured feedback process and offered pivot mentorship; 30% of rejected startups returned with better solutions within 6 months."
    },
    {
      q: "Que resistencia voce enfrentou dos medicos mais tradicionais?",
      a: "Eu organizei sessões de co-criação onde eles ajudavam a desenhar as soluções, transformando resistência em ownership e aumentando adoção para 87%.",
      q_en: "What resistance did you face from traditional doctors?",
      a_en: "I organized co-creation sessions where they helped design solutions, turning resistance into ownership and increasing adoption to 87%."
    },
    {
      q: "Como voce manteve qualidade com ciclos mais rapidos?",
      a: "Eu implementei gates de qualidade automatizados, testes com pacientes reais desde o dia 1 e retrospectivas semanais obrigatórias.",
      q_en: "How did you maintain quality with faster cycles?",
      a_en: "I implemented automated quality gates, real patient testing from day 1, and mandatory weekly retrospectives."
    },
    {
      q: "Qual metrica voce mais acompanhou para validar sucesso?",
      a: "Time-to-value para médicos: quanto tempo levava da instalação até o primeiro benefício percebido; consegui reduzir de 3 semanas para 2 dias.",
      q_en: "Which metric did you track most to validate success?",
      a_en: "Time-to-value for doctors: how long from installation to first perceived benefit; I reduced it from 3 weeks to 2 days."
    },

    // --- Novas FUPs adicionadas conforme seu feedback ---
    {
      q: "Como você garantiu que a eliminação de quatro níveis de validação não comprometesse o compliance ou a segurança do processo?",
      a: "Realizei auditorias paralelas durante os pilotos, mantendo dupla checagem com TI e jurídico; após três ciclos sem incidentes, comprovamos a segurança do novo fluxo.",
      q_en: "How did you ensure that removing four validation layers didn’t compromise compliance or process security?",
      a_en: "I ran parallel audits during pilots with IT and legal double checks; after three cycles without incidents we proved the new flow's safety."
    },
    {
      q: "Pode dar um exemplo específico de como a sandbox de testes acelerou a validação de uma startup e gerou resultados tangíveis?",
      a: "Um dos casos foi a startup de monitoramento cardíaco: validou integração em 9 dias, reduziu tempo de onboarding de pacientes em 60% e gerou economia de R$ 800 mil/ano.",
      q_en: "Can you give a concrete example of how the sandbox accelerated a startup’s validation and brought tangible results?",
      a_en: "A cardiac-monitoring startup validated integration in nine days, cut patient onboarding time by 60%, and saved BRL 800 k per year."
    },
    {
      q: "Quais foram os maiores desafios ao convencer o conselho financeiro a aprovar o modelo de governança e como você os superou?",
      a: "O principal desafio foi o ceticismo quanto ao controle de risco; venci mostrando simulações históricas e um modelo de decisão baseado em dados, não em hierarquia.",
      q_en: "What were the main challenges when persuading the finance board to approve the governance model, and how did you overcome them?",
      a_en: "Main challenge was skepticism around risk control; I overcame it by presenting historical simulations and a data-driven decision model instead of hierarchical approvals."
    },
    {
      q: "Como o modelo 'Fast-Track Klin' foi adaptado para outras unidades da Unimed, e quais resultados obteve?",
      a: "As unidades regionais adaptaram o modelo com squads locais; o ciclo de MVP caiu 52% e o custo médio 37%. Ele virou padrão interno de inovação.",
      q_en: "How was the Fast-Track Klin model adapted in other Unimed units and what results were achieved?",
      a_en: "Regional units adapted the model with local squads; MVP cycle dropped 52% and average cost 37%. It became innovation standard internally."
    },
    {
      q: "Se pudesse refazer o processo de implementação, o que faria diferente para melhorar ainda mais o impacto do programa?",
      a: "Começaria a comunicação com stakeholders financeiros dois meses antes do piloto, criando uma base de confiança para acelerar a aprovação final.",
      q_en: "If you could redo the implementation, what would you change to increase the program’s impact?",
      a_en: "I’d start engaging finance stakeholders two months earlier to build trust and speed up final approval."
    }
  ]
};

export default case_4;
