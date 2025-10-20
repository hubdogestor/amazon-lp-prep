const case_3 = {
  id: "unimed-fraud-investigation",
  title: "Investigação Manual de Anomalias em Reembolsos para Identificar Fraude em Rede",
  title_pt: "Investigação Manual de Anomalias em Reembolsos para Identificar Fraude em Rede",
  title_en: "Manual Investigation of Reimbursement Anomalies to Uncover Network Fraud",
  company: "Unimed",
  period: "06/2022-12/2022",
  isTopCase: false,
  isGoodCase: false,

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
      q: "Qual foi seu maior erro ou falha neste caso?",
      a: "Meu erro inicial foi tentar ajustar o modelo antifraude existente em vez de reconstruí-lo do zero. Perdi quase uma semana tentando calibrar regras que eram estruturalmente limitadas para detectar fraudes em rede. Aprendi que, ao lidar com anomalias complexas, é mais eficiente começar do zero e confiar na análise de dados brutos do que tentar consertar um sistema que não foi projetado para aquele tipo de problema.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "My initial mistake was trying to adjust the existing fraud model instead of rebuilding it from scratch. I lost almost a week calibrating rules that were structurally limited to detect network fraud. I learned that when dealing with complex anomalies, it's more efficient to start from scratch and trust raw data analysis than to try to fix a system that wasn't designed for that type of problem."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Hoje, eu começaria a investigação com uma mentalidade de ‘sistemas, não sintomas’. Em vez de focar nas transações individuais, eu mapearia todo o ecossistema de pagamentos primeiro, procurando por pontos de conexão e vulnerabilidades sistêmicas. Essa abordagem teria me levado à análise de rede mais rapidamente, economizando tempo e recursos preciosos.",
      q_en: "What would you do differently today?",
      a_en: "Today, I would start the investigation with a 'systems, not symptoms' mindset. Instead of focusing on individual transactions, I would map the entire payment ecosystem first, looking for connection points and systemic vulnerabilities. This approach would have led me to the network analysis faster, saving precious time and resources."
    },
    {
      q: "Qual foi o obstáculo mais difícil de superar durante a investigação?",
      a: "O obstáculo mais difícil foi convencer a diretoria médica a agir contra uma rede de psicólogos parceira. Havia um receio político de criar um conflito com profissionais importantes. Para superar isso, usei uma combinação de dados concretos, mostrando o impacto financeiro de R$4,8 milhões, e empatia, garantindo que a ação seria discreta e preservaria os clientes legítimos, o que tornou a decisão mais segura para eles.",
      q_en: "What was the most difficult obstacle to overcome during the investigation?",
      a_en: "The most difficult obstacle was convincing the medical board to act against a partner network of psychologists. There was a political fear of creating a conflict with important professionals. To overcome this, I used a combination of concrete data, showing the financial impact of BRL 4.8 million, and empathy, ensuring that the action would be discreet and preserve legitimate customers, which made the decision safer for them."
    },
    {
      q: "Quais foram os principais riscos do projeto e como você os mitigou?",
      a: "Os principais riscos eram três: bloquear clientes reais e gerar insatisfação, criar ruído regulatório com a ANS, e comprometer a confiança dos médicos parceiros. Mitiguei esses riscos incluindo as áreas de compliance e jurídico desde o início, criando um processo de revisão manual de 24 horas para casos suspeitos, e comunicando cada passo com mensagens internas controladas para evitar pânico.",
      q_en: "What were the main project risks and how did you mitigate each one?",
      a_en: "The main risks were three: blocking real customers and generating dissatisfaction, creating regulatory noise with the ANS, and compromising the trust of partner doctors. I mitigated these risks by including the compliance and legal areas from the beginning, creating a 24-hour manual review process for suspicious cases, and communicating each step with controlled internal messages to avoid panic."
    },
    {
      q: "Que dados você usou para provar a fraude e qual foi a lógica da sua análise?",
      a: "A lógica foi conectar sinais fracos que, isoladamente, não significavam nada. Usei scripts em Python para correlacionar CPF, geolocalização de IP e o hash do dispositivo em 28 milhões de transações. O cruzamento do hash do dispositivo com o CPF foi o ponto de virada, revelando que apenas três dispositivos controlavam todos os CPFs suspeitos, o que provou a existência de uma rede organizada.",
      q_en: "What data did you use to prove the fraud and what was the logic of your analysis?",
      a_en: "The logic was to connect weak signals that, in isolation, meant nothing. I used Python scripts to correlate CPF, IP geolocation, and the device hash in 28 million transactions. The cross-referencing of the device hash with the CPF was the turning point, revealing that only three devices controlled all the suspicious CPFs, which proved the existence of an organized network."
    },
    {
      q: "Como você usou o aprendizado desse caso em outras frentes?",
      a: "O mapa de correlação que criei virou um mecanismo permanente e foi compartilhado com 14 outras cooperativas, protegendo R$67 milhões adicionais. A metodologia foi posteriormente aplicada no Sicredi para reduzir fraudes via PIX em 45%, evitando R$23 milhões em perdas no primeiro ano. O aprendizado de conectar sinais fracos se tornou um pilar da minha abordagem de gestão de risco.",
      q_en: "How did you use the learning from this case in other areas?",
      a_en: "The correlation map I created became a permanent mechanism and was shared with 14 other cooperatives, protecting an additional BRL 67 million. The methodology was later applied at Sicredi to reduce PIX fraud by 45%, avoiding BRL 23 million in losses in the first year. The learning of connecting weak signals has become a pillar of my risk management approach."
    },
    {
      q: "Como garantiu que o bloqueio preventivo não afetasse clientes genuínos?",
      a: "Implementei bloqueios temporários apenas para transações que estivessem acima do percentil 99 de frequência e valor, e criei um processo de revisão manual em até 24 horas para esses casos. Isso reduziu os falsos positivos a quase zero e manteve o índice de reclamações de clientes legítimos em zero, garantindo uma experiência positiva para eles.",
      q_en: "How did you ensure that the preventive blocking did not affect genuine customers?",
      a_en: "I implemented temporary blocks only for transactions that were above the 99th percentile of frequency and value, and I created a manual review process within 24 hours for these cases. This reduced false positives to almost zero and kept the complaint rate from legitimate customers at zero, ensuring a positive experience for them."
    },
    {
      q: "Qual foi a reação das equipes de jurídico e compliance à sua abordagem proativa?",
      a: "Inicialmente, eles foram cautelosos, pois temiam a exposição pública e os riscos legais. No entanto, quando mostrei que o plano era técnico, confidencial e focado em prevenção, não em punição, e os convidei para co-produzir o protocolo final, eles se tornaram meus maiores aliados. A colaboração transformou o papel deles de uma barreira para uma força de apoio.",
      q_en: "What was the reaction of the legal and compliance teams to your proactive approach?",
      a_en: "Initially, they were cautious, as they feared public exposure and legal risks. However, when I showed them that the plan was technical, confidential, and focused on prevention, not punishment, and invited them to co-produce the final protocol, they became my biggest allies. The collaboration transformed their role from a barrier to a support force."
    },
    {
      q: "Como você mediu o sucesso do novo modelo antifraude em termos de eficiência operacional?",
      a: "Além do aumento de 31% na precisão e da redução de 42% nos falsos positivos, o tempo médio de revisão de alertas caiu de 25 para 11 minutos. Isso liberou 56% do tempo da equipe de analistas, que pôde ser realocado para investigações mais estratégicas e complexas, aumentando a eficiência geral da área.",
      q_en: "How did you measure the success of the new anti-fraud model in terms of operational efficiency?",
      a_en: "In addition to the 31% increase in accuracy and the 42% reduction in false positives, the average alert review time dropped from 25 to 11 minutes. This freed up 56% of the analysts' team time, which could be reallocated to more strategic and complex investigations, increasing the overall efficiency of the area."
    },
    {
      q: "Como você reconheceu o papel da analista que levantou o alerta inicial?",
      a: "Fiz questão de mencionar o nome dela pessoalmente no comitê executivo como a origem da investigação e a incluí no grupo de inovação antifraude que criei. Isso reforçou o valor da voz técnica na linha de frente e gerou um efeito de segurança psicológica em toda a equipe, incentivando outros a levantarem alertas.",
      q_en: "How did you recognize the role of the analyst who raised the initial alert?",
      a_en: "I made a point of personally mentioning her name in the executive committee as the origin of the investigation and included her in the anti-fraud innovation group I created. This reinforced the value of the technical voice on the front line and generated a psychological safety effect throughout the team, encouraging others to raise alerts."
    }
  ]
};

export default case_3;