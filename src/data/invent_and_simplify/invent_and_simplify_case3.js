const case_3 = {
  id: "unimed-ai-authorization",
  title: "Inventei IA de Autorização Médica que Simplificou Processo de 5 Dias para 9 Horas (82% Automação)",
  title_pt: "Inventei IA de Autorização Médica que Simplificou Processo de 5 Dias para 9 Horas (82% Automação)",
  title_en: "Invented Medical Authorization AI that Simplified 5-Day Process to 9 Hours (82% Automation)",
  company: "Unimed",
  period: "01/2023-10/2023",
  isTopCase: true,
  isGoodCase: true,
  pt: {
    s: `Em 2023, eu atuava como Advisor de Estratégia e Gestão na Unimed, acompanhando indicadores de atendimento quando recebi um alerta do Head de Customer Service: a fila de autorização médica tinha virado um colapso humanitário. Era comum ouvir frases como “meu pai vai morrer esperando autorização”.  
    Investiguei os dados e descobri que levávamos 5,1 dias em média para aprovar um procedimento. O NPS havia caído para 19, a mídia regional fazia reportagens negativas, e hospitais parceiros ameaçavam interromper atendimentos por falta de confiança.  
    Casos oncológicos perdiam janelas clínicas essenciais, famílias entravam em desespero e 50 anos de reputação estavam por um fio. Cada dia de atraso custava vidas, dinheiro e credibilidade. Era impossível ficar inerte.`,
    
    t: `Fui encarregado de reconstruir o processo de autorização médica de forma integral. O pedido do presidente foi direto: “faça o que for preciso, mas resolva a agonia das famílias sem gerar risco clínico.” Defini a meta - reduzir o tempo médio para menos de 12 horas e automatizar pelo menos 80% das decisões, garantindo explicabilidade e justiça clínica.  
    Entendi que a resposta não poderia ser somente tecnológica; teria de ser humana, baseada em propósito e confiança.`,
    
    a: `Comecei redesenhando o fluxo para entender onde o tempo realmente se perdia. Havia 49 etapas distintas entre pedido, análise e autorização, muitas com filas manuais de auditoria. Criei um novo indicador - “**tempo de angústia**” - que somava as horas entre a solicitação e a decisão, ponderadas pela criticidade médica (escala 1 a 5). Esse índice mediu não só eficiência, mas sofrimento real. Publicamos diariamente num painel visível a todos.  
    Em seguida, construí um modelo de IA explicável baseado em 127 mil autorizações anteriores. A primeira versão tinha 94 variáveis; filtrei para 58 com ganho de informação acima de 0,02 e validação clínica por médicos. Depois, eliminei 11 variáveis de renda e região, pois geravam viés socioeconômico. O modelo final usava gradiente boosting e produzia explicações por SHAP‑values.  
    Quando o conselho médico resistiu, percebi que não adiantaria diagramas técnicos. Levei histórias reais: um paciente oncológico que tinha esperado cinco dias e perdido a janela de quimioterapia, contraposto a um caso onde a nova IA autorizou em 3 horas e viabilizou tratamento imediato. A emoção rompeu a barreira da resistência.  
    Para dar confiança técnica, criei o **Painel de Confiança**, que traduzia cada decisão em linguagem médica com pesos, justificativas e link para o protocolo usado. Auditores podiam ver por que a IA autorizara ou negara. Esse grau de explicabilidade foi inédito no setor.  
    Paralelamente, rodei testes de fairness por gênero e faixa etária, reduzindo a diferença de aprovação entre grupos para menos de 2 p.p. Implantei piloto de 30 dias em duas linhas de cuidado, expandi somente quando o falso positivo ficou abaixo de 1,5%. Cada semana, abríamos dailies com depoimentos de pacientes, lembrando‑nos de quem realmente se beneficiava.`,
    
    r: `Em dez meses, o tempo médio de autorização caiu de 5,1 dias para 9 horas (‑96%), atingimos 82% de automação com zero aumento de erro clínico e o NPS subiu para 67. O índice de “tempo de angústia” reduziu 89%.  
    Mais de 2.800 pacientes oncológicos receberam tratamento na janela correta. Hospitais parceiros renovaram contratos antes do prazo e a Unimed transformou‑se em referência nacional em IA ética em saúde. Financeiramente, a unidade reduziu em R$ 2,4 milhões os custos operacionais.  
    Mas o melhor resultado foi intangível: a restauração de confiança entre médicos, pacientes e a marca.`,
    
    l: `Essa experiência provou que inovar em saúde é antes de tudo um ato de empatia. Automatizar sem humanizar gera resistência; automatizar com propósito gera aliança. O “tempo de angústia” virou meu instrumento para medir o lado emocional da eficiência. Desde então, aplico essa mesma lógica em fintechs e pagamentos: mensuro a frustração do usuário como métrica principal para guiar decisões de velocidade e clareza.`
  },

  en: {
    s: `In 2023, I worked as Strategy and Operations Advisor at Unimed when we faced an unexpected crisis. The Head of Customer Service alerted: call center logs were overflowing with cases of families crying for help. One daughter’s sentence haunted us: “My father will die waiting for authorization.”  
    Data showed we took 5.1 days on average to approve a medical procedure. NPS had collapsed to 19, regional media criticized the queue, and partner hospitals considered suspending service. Oncology patients missed critical treatment windows. Each day of delay was measured in anxiety and lives lost.`,
    
    t: `The CEO assigned me to rebuild the authorization process completely. He said, “Bring families relief without endangering safety.” My goal was to cut authorization time to under 12 hours and automate at least 80 percent of decisions while keeping transparency and clinical fairness.  
    I understood real change would require both algorithmic rigor and emotional credibility.`,
    
    a: `I mapped the entire workflow and found 49 sequential steps from request to approval. Using this diagnosis, I built our core metric - **"distress time"** - the number of hours between submission and decision multiplied by clinical criticality (from 1 to 5). It quantified family pain in time units. Publishing that daily shifted organizational focus from bureaucracy to people.  
    Next, I developed an explainable AI using 127 thousand past cases. Out of 94 variables tested, I kept 58 with information gain >0.02 and clinically validated them with auditors, removing 11 income‑related features that generated bias. The final gradient‑boosting model included SHAP‑value visualizations for each decision.  
    To win the medical board’s trust, I avoided technical jargon and shared patient stories instead - contrasting a five‑day delay that caused clinical loss with a three‑hour AI approval that saved treatment time. That changed the conversation entirely.  
    I then built the **Confidence Panel**, a dashboard translating AI rationale into medical language with conditional weights and source protocols. Auditors could see why a case was approved or rejected. Simultaneously, I ran fairness tests across age and gender groups until approval variance shrunk below 2 p.p.   
    We launched a 30‑day pilot covering two care lines and expanded only after false positives fell below 1.5%. Every morning, daily stand‑ups started with patients’ recordings to remind everyone what urgency meant.`,
    
    r: `In ten months, average authorization time dropped from 5.1 days to 9 hours (‑96%). Automation reached 82 percent with zero increase in clinical errors, and NPS rose to 67. Family distress time fell by 89%.  
    2,847 oncology patients received treatment within clinical windows. Partner hospitals renewed contracts ahead of schedule, and Unimed was cited nationally for ethical AI in healthcare. Operational savings totaled BRL 2.4 million per year.  
    The deepest impact was moral - we restored trust in our cooperative mission.`,
    
    l: `The experience showed that true innovation in health means designing for empathy, not just efficiency. Automation without humanity creates resistance; automation with purpose builds trust. “Distress time” became my go‑to metric for balancing speed and compassion. I now apply it to digital payments - measuring merchant frustration where delays hurt business -and using that evidence to justify faster, clearer systems.`
  },

   fups: [
    // 1. Erro / Failure
    {
      q: "Qual foi seu maior erro ou falha nesse caso?",
      a: "Subestimei a resistência dos auditores médicos no início. Falei apenas em dados e ignorava o impacto emocional. Quando passei a abrir as reuniões com histórias de pacientes, a adesão aconteceu espontaneamente.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "I underestimated medical auditors’ resistance early on. I focused on data, ignoring the emotional layer. Once I started meetings with real patient stories, support came naturally."
    },
    // 2. O que faria diferente / What would you do differently
    {
      q: "O que você faria diferente hoje?",
      a: "Começaria com piloto de menor complexidade clínica, gerando confiança mais rápido, e traria o conselho médico para o design do modelo desde o primeiro dia.",
      q_en: "What would you do differently today?",
      a_en: "I would start with a smaller, low‑complexity pilot to build trust faster and engage the medical board from day one in co‑design, not only validation."
    },
    // 3. Obstáculo / Hardest obstacle
    {
      q: "Qual foi o obstáculo mais difícil de superar que você enfrentou?",
      a: "A resistência cultural dos médicos, que viam a IA como risco à autonomia clínica. Superei criando o Painel de Confiança, que explicava cada decisão em linguagem médica e mostrava que a IA ampliava sua capacidade.",
      q_en: "What was the most difficult obstacle you faced and overcame?",
      a_en: "Cultural resistance from doctors who saw AI as a threat to autonomy. I overcame it through the Confidence Panel, which translated each decision into medical reasoning showing AI as augmentation, not replacement."
    },
    // 4. Riscos / Risks
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "Viés algorítmico, erro médico e rejeição regulatória. Rodei fairness metrics, removi 11 variáveis socioeconômicas, executei piloto controlado até falso positivo <1,5% e entreguei logs explicáveis à ANS mensalmente.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "Algorithmic bias, medical error, and regulatory rejection. I ran fairness metrics, removed 11 socioeconomic variables, conducted a controlled pilot until false positives dropped below 1.5%, and sent monthly explainability logs to the regulator."
    },
    // 5. Dados / Data rationale
    {
      q: "Que dados você usou e qual foi a racional de cálculo?",
      a: "Usei histórico de 127 mil autorizações em 18 meses, cruzando sinistralidade e tempo de resposta. O 'tempo de angústia' = (horas entre solicitação e decisão) × (criticidade clínica de 1 a 5). Casos com score >50 eram priorizados.",
      q_en: "What data did you use and what was the calculation rationale?",
      a_en: "Used 127 k historical authorizations over 18 months, cross‑referenced with claim cost and processing time. 'Distress time' = (hours between request and decision) × (clinical criticality 1-5). Scores > 50 were prioritized."
    },
    // 6. Uso posterior / Learning reuse
    {
      q: "Como você usou o aprendizado desse caso em outras frentes ou trabalhos?",
      a: "Reapliquei o Painel de Confiança em reembolso odontológico (SLA de 6 dias → 26 h) e adaptei o indicador de angústia em underwriting de sellers em fintech, reduzindo tempo de aprovação para < 2 h. Também ajudei outras três cooperativas a replicar o modelo.",
      q_en: "How did you use this learning in other areas or work?",
      a_en: "I reused the Confidence Panel in dental reimbursement (SLA 6 days → 26 h) and adapted the distress metric to seller underwriting in fintech, cutting approval to under 2 h. I also trained three medical co‑ops to replicate the framework."
    },

    // Complementares bilíngues
    {
      q: "Como você selecionou os 58 atributos do modelo?",
      a: "Baseei‑me em 12 entrevistas com auditores e em ganho de informação > 0,02; descartei atributos redundantes e mantive somente os clinicamente relevantes.",
      q_en: "How did you select the 58 model attributes?",
      a_en: "I based selection on 12 auditor interviews and information gain > 0.02, discarding redundant features and keeping only clinically relevant ones."
    },
    {
      q: "Que decisão técnica foi mais sensível?",
      a: "Excluir atributos de renda e região. Reduziu levemente acurácia, mas trouxe justiça e confiança do corpo clínico.",
      q_en: "What was the most sensitive technical decision?",
      a_en: "Eliminating income‑ and region‑based features. It slightly reduced accuracy but increased fairness and trust in the system."
    },
    {
      q: "Como garantiu explicabilidade regulatória para a ANS?",
      a: "Integrei o painel com logs de pesos e justificativas do modelo, e gerei relatórios assinados digitalmente. A ANS elogiou o formato de auditoria contínua.",
      q_en: "How did you guarantee explainability to the regulator?",
      a_en: "I embedded weight logs and reasoning into the panel and produced digitally signed monthly reports. The regulator praised the continuous‑audit format."
    },
    {
      q: "Como comprovou impacto financeiro além de FTE?",
      a: "Comprovei queda de 5,6 % em reembolsos emergenciais e alta de 2,1 % em planos premium por renovações antecipadas, ligando tempo de resposta à receita.",
      q_en: "How did you prove financial impact beyond FTE savings?",
      a_en: "I demonstrated a 5.6 % drop in emergency reimbursements and 2.1 % growth in premium renewals - linking faster response time to revenue."
    },
    {
      q: "Qual dado melhor representa o sucesso humano do projeto?",
      a: "A redução do 'tempo de angústia' médio de 127 h para 13 h por paciente. Esse número virou métrica‑símbolo de empatia operacional.",
      q_en: "Which data best reflects the human success of the project?",
      a_en: "Average ‘distress time’ dropped from 127 h to 13 h per case - a symbolic indicator of operational empathy."
    },
    {
      q: "Que habilidade pessoal foi decisiva?",
      a: "Transformar dados técnicos em linguagem emocional. Foi assim que o projeto deixou de ser IA e virou cuidado.",
      q_en: "Which personal skill proved decisive?",
      a_en: "Turning technical data into emotional language - that’s how the project stopped being about AI and became about care."
    },
    {
      q: "Qual insight ético mais importante você tirou?",
      a: "Percebi que IA em saúde exige transparência radical. Nenhum modelo vale risco se ele não puder ser explicado a quem é afetado.",
      q_en: "What ethical insight did you take from this experience?",
      a_en: "AI in healthcare requires radical transparency. No algorithm is worth it if its rationale can’t be explained to those it affects."
    },
    {
      q: "Como mediu o fator humano após o go‑live?",
      a: "Medi o índice de confiança das famílias atendidas por meio de entrevistas e cresceu 52 % nos quatro primeiros meses.",
      q_en: "How did you measure the human factor after go‑live?",
      a_en: "I surveyed families’ trust levels, which increased 52 % within the first four months."
    },
    {
      q: "Qual aprendizado mais profundo você extraiu?",
      a: "Que automação só é sustentável quando devolve tempo e dignidade às pessoas envolvidas no processo.",
      q_en: "What was your deepest learning from this case?",
      a_en: "That automation is only sustainable when it returns time and dignity to people within the process."
    }
  ]
};

export default case_3;