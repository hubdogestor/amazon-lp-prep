const case_3 = {
  id: "unimed-fraud-investigation",
  title: "Investigação Manual de Anomalias em Reembolsos para Identificar Fraude em Rede",
  title_pt: "Investigação Manual de Anomalias em Reembolsos para Identificar Fraude em Rede",
  title_en: "Manual Investigation of Reimbursement Anomalies to Uncover Network Fraud",
  company: "Unimed",
  period: "06/2022-12/2022",
  isTopCase: true,
  isGoodCase: true,

  pt: {
    s: `R$ 4,8 milhões sangrando em reembolsos fraudulentos - um padrão invisível ao sistema, mas não aos meus olhos. Em 2022, enquanto atuava como Head de Inovação & Produto Digital da Unimed, passei a supervisionar também a área de Risco de Pagamentos. Uma analista do time me trouxe algo aparentemente trivial: milhares de reembolsos de R$150, sempre para os mesmos 12 psicólogos, solicitados por 112 clientes diferentes. O sistema antifraude, que analisava transações de forma isolada, estava “verde”, sem alertas. Mas uma rápida projeção mostrou o tamanho do problema: uma perda anual de quase R$5 milhões - um vazamento silencioso e corrosivo à confiança de 1,6 milhão de clientes.`,
    
    t: `Quando percebi que o sistema não veria o que eu via, decidi assumir pessoalmente a investigação. Em 30 dias, precisava provar se tratava-se de uma fraude estruturada em rede, neutralizar os fraudadores e propor um novo mecanismo para evitar recorrências - tudo isso sem gerar pânico entre os clientes legítimos que dependiam de reembolsos diários.`,
    
    a: `Comecei extraindo seis meses de logs do data lake, totalizando 28 milhões de transações. Escrevi scripts em Python para correlacionar sinais fracos - como CPF, IP e device hash - que os modelos tradicionais ignoravam. Em uma semana, identifiquei o padrão: os 112 clientes usavam apenas três dispositivos, que operavam alternadamente em horários idênticos. Modelei o risco financeiro e regulatório e levei o caso diretamente ao Diretor Assistencial. Ele hesitava em agir contra uma rede parceira importante. Em vez de confronto, construí credibilidade: apresentei o mapa de conexões, demonstrei o impacto financeiro e propus uma ação conjunta e discreta. Criei um war room semanal com jurídico, compliance e operações para acompanhar as ações. Em paralelo, implementamos bloqueios preventivos e um novo processo de auditoria com machine learning supervisionado para validar transações futuras.`,
    
    r: `Em menos de 30 dias, estanquei uma perda anual de R$4,8 milhões. O novo sistema de detecção aumentou a precisão em 31%, reduziu falsos positivos em 42% e melhorou o tempo médio de revisão de alertas - de 25 para 11 minutos. O mapa de correlação virou um mecanismo permanente e foi compartilhado com 14 outras cooperativas financeiras, protegendo R$67 milhões adicionais. A metodologia foi posteriormente aplicada no Sicredi, reduzindo fraudes via PIX em 45% e evitando R$23 milhões em perdas no primeiro ano.`,
    
    l: `Esse caso me ensinou que os fraudadores sofisticados vivem nos espaços entre os sistemas. As regras sozinhas não bastam - o segredo está em conectar sinais fracos que isoladamente passam despercebidos. Desde então, adotei um playbook que sempre aplico: 1) confie na intuição da linha de frente; 2) vá até o dado cru e aprenda novas ferramentas, se necessário; 3) transforme descobertas pontuais em mecanismos contínuos. Foi isso que fez meu time deixar de reagir a fraudes e começar a preveni-las em escala.`
  },

  en: {
    s: `In 2022, while serving as Head of Digital Product & Innovation at Unimed, I also took responsibility for payment risk. An analyst flagged a small anomaly: thousands of BRL 150 psychology reimbursements to the same 12 professionals, claimed by 112 different clients. It looked minor, but something felt off. The fraud detection system - focused on isolated transactions - saw nothing abnormal. Still, projections pointed to an annual BRL 4.8 million loss, quietly eroding trust among our 1.6 million customers.`,
    
    t: `When the system failed to see what I was seeing, I took personal ownership of the investigation. I had 30 days to prove whether it was organized network fraud, remove the scheme, and design a mechanism to prevent recurrence - all without disrupting legitimate customer reimbursements.`,
    
    a: `I extracted six months of raw data - 28 million transactions - and wrote Python scripts to correlate weak signals: CPF, IP geolocation, and device hash. Within days, the pattern surfaced: 112 clients linked to just three devices, cycling transactions in fixed hourly slots. I mapped the financial and regulatory risk and presented it to the Medical Director. He hesitated to confront a trusted partner, so instead of forcing the issue, I earned alignment - showing network graphs, financial exposure, and proposing a discreet joint action. I led a weekly war room with legal, compliance, and operations, defined a new audit process, and implemented supervised machine learning to monitor anomalies post-fix.`,
    
    r: `In under 30 days, we stopped BRL 4.8 million in annual losses. Detection precision improved by 31%, false positives dropped 42%, and manual review time fell from 25 to 11 minutes. The correlation map became a permanent mechanism shared across 14 regional cooperatives, protecting BRL 67 million more. Later, I applied the same approach at Sicredi to reduce PIX fraud by 45%, preventing BRL 23 million in losses.`,
    
    l: `This experience reinforced a key truth: sophisticated fraud often hides between systems. Rules alone can’t stop it - connecting weak signals can. My lasting playbook is: (1) trust frontline insights and dive deep into raw data, (2) connect what’s invisible, even if it means learning a new skill, and (3) turn discoveries into repeatable mechanisms. That mindset changed our culture from reacting to preventing fraud at scale.`
  },

  fups: [
    {
      q: "Qual foi a sua maior falha ou erro nesse caso?",
      a: "Meu erro inicial foi tentar ajustar o modelo antifraude existente em vez de reconstruí-lo. Perdi quase uma semana tentando calibrar regras que eram estruturalmente limitadas. Foi quando percebi que precisava começar do zero e confiar mais na minha intuição do que no algoritmo antigo.",
      q_en: "What was your biggest failure or mistake in this case?",
      a_en: "My initial mistake was trying to adjust the existing fraud detection model instead of rebuilding it. I lost almost a week trying to calibrate rules that were structurally limited. That's when I realized I needed to start from scratch and trust my intuition more than the old algorithm."
    },
    {
      q: "Qual foi o obstáculo mais difícil de superar durante a investigação?",
      a: "Convencer a diretoria médica a agir foi o principal desafio. Havia receio político de envolver uma rede parceira. Usei empatia e dados concretos para tornar a decisão segura, mostrando que a ação seria discreta e preservaria os clientes legítimos.",
      q_en: "What was the most difficult obstacle to overcome during the investigation?",
      a_en: "Convincing the medical board to act was the main challenge. There was political fear of involving a partner network. I used empathy and concrete data to make the decision safe, showing that the action would be discreet and preserve legitimate customers."
    },
    {
      q: "Quais foram os principais riscos do projeto e como você mitigou cada um?",
      a: "Os riscos eram três: bloquear clientes reais, gerar ruído regulatório e comprometer a confiança dos médicos. Mitiguei incluindo compliance e jurídico desde o início, criando revisões manuais de 24h e comunicando cada passo com mensagens internas controladas.",
      q_en: "What were the main project risks and how did you mitigate each one?",
      a_en: "There were three risks: blocking real customers, generating regulatory noise, and compromising doctor trust. I mitigated by including compliance and legal from the start, creating 24-hour manual reviews, and communicating each step with controlled internal messages."
    },
    {
      q: "Como você calculou a perda potencial de R$4,8 milhões?",
      a: "Projetei a média de transações diárias suspeitas, multipliquei pelo ticket médio de R$150 e pela taxa de reincidência semanal. Cruzei os resultados com logs históricos e validações amostrais no banco de dados transacional.",
      q_en: "How did you calculate the potential loss of BRL 4.8 million?",
      a_en: "I projected the average daily suspicious transactions, multiplied by the average ticket of BRL 150 and the weekly recurrence rate. I cross-referenced the results with historical logs and sample validations in the transactional database."
    },
    {
      q: "Qual insight técnico foi o ponto de virada na descoberta da fraude?",
      a: "O cruzamento de device hash com CPF. Quando percebi que três devices controlavam todos os CPFs suspeitos, a rede apareceu claramente. A visualização em grafo consolidou a prova definitiva.",
      q_en: "What technical insight was the turning point in discovering the fraud?",
      a_en: "The cross-referencing of device hash with CPF. When I realized three devices controlled all suspicious CPFs, the network appeared clearly. The graph visualization consolidated the definitive proof."
    },
    {
      q: "Como garantiu que o bloqueio preventivo não afetasse clientes genuínos?",
      a: "Implementei bloqueios temporários apenas acima do percentil 99 de frequência e valor, com revisão manual em até 24 horas. Isso reduziu falsos positivos e manteve o índice de reclamações em zero.",
      q_en: "How did you ensure preventive blocking didn't affect genuine customers?",
      a_en: "I implemented temporary blocks only above the 99th percentile of frequency and value, with manual review within 24 hours. This reduced false positives and kept the complaint rate at zero."
    },
    {
      q: "Qual foi a reação dos times de jurídico e compliance à sua abordagem?",
      a: "Inicialmente, cautelosa. Eles temiam exposição pública. Mostrei que o plano era técnico e confidencial, não punitivo - e convidei ambos para coproduzir o protocolo final. Isso mudou o papel deles de barreira para aliados.",
      q_en: "What was the legal and compliance teams' reaction to your approach?",
      a_en: "Initially cautious. They feared public exposure. I showed that the plan was technical and confidential, not punitive - and invited both to co-produce the final protocol. This changed their role from barrier to allies."
    },
    {
      q: "Como você mediu o sucesso do novo modelo antifraude?",
      a: "Usei três métricas: aumento de precisão (+31%), redução de falsos positivos (-42%) e tempo médio de revisão (25→11 minutos). Além disso, o volume de fraudes detectadas caiu 60% nos três meses seguintes.",
      q_en: "How did you measure the success of the new fraud detection model?",
      a_en: "I used three metrics: precision increase (+31%), false positive reduction (-42%), and average review time (25→11 minutes). Additionally, the volume of detected fraud dropped 60% in the following three months."
    },
    {
      q: "Qual foi o impacto organizacional da sua abordagem?",
      a: "Mudou o mindset de todo o time. A partir dali, os analistas passaram a propor hipóteses e scripts próprios. A cultura saiu do modo reativo para um modelo preditivo e colaborativo.",
      q_en: "What was the organizational impact of your approach?",
      a_en: "It changed the entire team's mindset. From then on, analysts began proposing their own hypotheses and scripts. The culture shifted from reactive mode to a predictive and collaborative model."
    },
    {
      q: "Como você aplicou o aprendizado desse caso em outras empresas?",
      a: "Criei uma versão simplificada do mesmo modelo e apliquei no Sicredi. Adaptando as features, reduzi fraudes em PIX em 45%. A base do raciocínio foi idêntica: conectar sinais fracos que ninguém mais estava cruzando.",
      q_en: "How did you apply the learning from this case to other companies?",
      a_en: "I created a simplified version of the same model and applied it at Sicredi. By adapting the features, I reduced PIX fraud by 45%. The reasoning base was identical: connecting weak signals that no one else was cross-referencing."
    },
    {
      q: "Como lidou com o volume massivo de dados (28 milhões de transações)?",
      a: "Utilizei amostragem estratificada, filtrando transações por intensidade de IP e frequência de CPF. Rodei os scripts em lotes distribuídos no Spark local e validei incremento a incremento para garantir performance.",
      q_en: "How did you handle the massive data volume (28 million transactions)?",
      a_en: "I used stratified sampling, filtering transactions by IP intensity and CPF frequency. I ran the scripts in distributed batches on local Spark and validated incrementally to ensure performance."
    },
    {
      q: "Como você reconheceu o papel da analista que levantou o alerta inicial?",
      a: "Mencionei o nome dela pessoalmente no comitê executivo e a incluí no grupo de inovação antifraude. Isso reforçou o valor da voz técnica e gerou efeito de segurança psicológica no time.",
      q_en: "How did you recognize the analyst who raised the initial alert?",
      a_en: "I personally mentioned her name in the executive committee and included her in the fraud innovation group. This reinforced the value of technical voice and created a psychological safety effect on the team."
    },
    {
      q: "Como garantiu governança e compliance com a ANS ao alterar processos de reembolso?",
      a: "Formalizamos um documento conjunto entre jurídico, risco e compliance detalhando cada exceção e incluímos um painel de rastreabilidade via CRM. A ANS validou o fluxo em auditoria trimestral.",
      q_en: "How did you ensure governance and ANS compliance when changing reimbursement processes?",
      a_en: "We formalized a joint document between legal, risk, and compliance detailing each exception and included a traceability panel via CRM. ANS validated the flow in quarterly audit."
    },
    {
      q: "Qual foi o momento em que você percebeu que estava certo sobre a fraude?",
      a: "Quando desenhei o grafo e vi as 12 clínicas se conectando aos mesmos 3 devices. Foi o "aha moment" - a anomalia virou uma rede visível. Naquele instante, eu sabia que era fraude sistêmica.",
      q_en: "What was the moment you realized you were right about the fraud?",
      a_en: "When I drew the graph and saw the 12 clinics connecting to the same 3 devices. It was the 'aha moment' - the anomaly became a visible network. At that instant, I knew it was systemic fraud."
    },
    {
      q: "O que esse caso demonstra sobre o princípio 'Dive Deep' na prática?",
      a: "Significa que eu não delego a curiosidade - mergulho pessoalmente no dado cru, entendendo a jornada, o risco e o contexto. Mergulhar fundo é não aceitar um 'dashboard verde' sem entender suas entrelinhas.",
      q_en: "What does this case demonstrate about the 'Dive Deep' principle in practice?",
      a_en: "It means I don't delegate curiosity - I personally dive into raw data, understanding the journey, risk, and context. Diving deep means not accepting a 'green dashboard' without understanding what lies beneath."
    }
  ]
};

export default case_3;