// bias_for_action_case4.js
const case_4 = {
  "id": "calculated-risk-time-critical",
  "title": "Risco calculado em tempo crítico: restaurei telemedicina em 72h com mitigação por zonas e rollback seletivo",
  "title_pt": "Risco calculado em tempo crítico: restaurei telemedicina em 72h com mitigação por zonas e rollback seletivo",
  "title_en": "Calculated risk under time pressure: restored telemedicine in 72h with zoned mitigation and selective rollback",
  "company": "Unimed Porto Alegre",
  "period": "03/2023-05/2023",
  "keywords": "#risco-calculado | #tempo-crítico | #recuperação-desastre | #rollback | #crise",
  "isTopCase": true,
  "isGoodCase": false,
  "pt": {
    "s": "Às 6h37 de uma sexta-feira, como Head de Transformação Digital e owner do produto de telemedicina da Unimed Porto Alegre, recebi o alerta de que um ataque de ransomware derrubara completamente a plataforma de consultas online. O impacto foi imediato: 38 mil atendimentos interrompidos, R$ 1,2 milhão de perdas por dia, e a confiança dos pacientes abalada. A infraestrutura seguia protocolo de rebuild de duas semanas, mas isso deixaria pacientes críticos sem assistência e exporia a marca a crise reputacional. Assumi a responsabilidade direta pela decisão de restaurar rápido com riscos controlados, pois cada hora de parada representava vidas, recursos e credibilidade em jogo.",
    "t": "Meu desafio era reerguer no mínimo 80 % da capacidade em até 72 horas, mantendo conformidade com a LGPD e possibilidade de rollback imediato. O objetivo ia além de recuperar tecnologia - era preservar confiança de pacientes e profissionais médicos, evitar R$ 8 milhões em perdas e proteger a imagem da Unimed como referência em cuidados digitais seguros.",
    "a": "Desenvolvi e liderei o plano que denominamos Phoenix, baseado em zonas isoladas e rollback seletivo. Dividi a plataforma monolítica em cinco zonas principais (agendamento, billing, prontuário, vídeo e prescrições) para permitir recuperação parcial sem violar a LGPD. Em menos de duas horas, convoquei um conselho de crise com CFO, CIO e DPO e assumi responsabilidade pessoal pelas decisões de risco. Houve objeções fortes sobre migrar temporariamente para cloud pública e usar backups segmentados sem validação plena. Apresentei dados financeiros e clínicos mostrando que cada hora de inatividade custava cerca de R$ 50 mil em atendimentos e poderia comprometer vidas. Comprovei criptografia end-to-end e telemetria auditável em tempo real. A autorização jurídica de 72 horas foi concedida. Realizei a sanitização manual dos backups com scripts de hash duplo e configurei runbooks de rollback gatilhados por latência ou erro HTTP. No segundo dia, ao detectar 450 ms de latência na zona de vídeo, executei rollback seletivo em sete minutos e restaurei o serviço em 31 minutos sem perda de consultas. Mantive comunicação contínua com médicos e reguladores via bot a cada 30 min, garantindo transparência total até a normalização.",
    "r": "Em 61 horas, restauramos 83 % da capacidade com SLA 97 % acima do estado pré-ataque. Evitamos 32 mil cancelamentos, preservamos R$ 5,8 milhões em recursos e mantivemos NPS 71 em modo contingente. O atendimento oncológico voltou em 36 horas, sem falhas de segurança. A auditoria interna e a ANS validaram todas as salvaguardas. Após a crise, o Phoenix foi incorporado como protocolo corporativo para restauração de sistemas críticos e originou o Centro de Resposta Digital da Unimed. A organização passou a trabalhar com planos de ação curtos, decisões documentadas e simulações trimestrais, mudando a cultura de espera para a de execução responsável.",
    "l": "Essa crise trouxe um aprendizado profundo: agir com rapidez é viável somente quando os mecanismos de controle são claros. Os três elementos essenciais garantiram o resultado - zonas isoladas permitiram restauração gradual sem ruptura; rollback periodicamente testado eliminou falhas críticas; e comunicação transparente preservou confiança mesmo sob risco. Dois meses depois, esse modelo impediu novo incidente em atualização de sistema clínico, evitando impacto de R$ 900 mil. Comprovei que agir com rapidez e responsabilidade é a combinação que sustenta resultados duradouros."
  },
  "en": {
    "s": "At 6:37 a.m. on a Friday, as Head of Digital Transformation and Product Owner for Telemedicine at Unimed Porto Alegre, I received an alert that a ransomware attack had collapsed the entire telemedicine platform. Immediate impact: 38 000 appointments frozen, BRL 1.2 million daily loss and patients losing trust. The infrastructure team followed a standard two-week rebuild proposal that would leave critical patients without care and damage the brand. I took personal responsibility to restore operations fast under controlled risk, knowing each hour meant lost confidence, revenue and treatment continuity.",
    "t": "My goal was to recover at least 80 % operational capacity in 72 hours with full LGPD compliance and instant rollback capability. Beyond technology, I needed to protect patients’ trust and avoid approximately BRL 8 million loss while proving the organization could act quickly and safely.",
    "a": "I led a response plan called Phoenix, based on isolated zones and selective rollback. The monolith was segmented into five zones (scheduling, billing, records, video, prescriptions) allowing partial recovery under compliance. Within two hours I assembled CFO, CIO and DPO into a crisis board and assumed accountability for decisions of controlled risk. Strong objections arose regarding temporary public cloud use and partial backups. I presented financial and clinical data showing each hour of outage cost BRL 50 K and could endanger patients. Encryption and audit telemetry were demonstrated and a 72-h authorization was granted. I sanitized backups with double-hash scripts and built runbooks triggered by latency and error rate. On day two, the video zone hit 450 ms latency; rollback executed in seven minutes and service restored in thirty-one, with no consult lost. A bot kept doctors and regulators informed every 30 minutes, maintaining transparency throughout. The hardest part was cultural -- proving that quick action can still be responsible action.",
    "r": "In 61 hours operations reached 83 % capacity with 97 % SLA -- higher than before the attack. 32 000 appointments saved, BRL 5.8 M loss avoided and NPS 71 maintained. Oncology consults resumed within 36 h, and no privacy incident was found by audits. Phoenix was formalized as corporate protocol for core system recovery and spawned a Digital Crisis Center for quarterly testing. The organization shifted from reactive to methodical yet fast execution culture.",
    "l": "The experience proved that speed and responsibility can coexist when control mechanisms are clear. Three pillars drove the result -- isolated zones enabled safe 83 % restoration, tested rollback prevented loss and transparent communication preserved trust. Two months later, this model prevented another incident during clinical upgrade saving BRL 900 K. Acting swiftly with data and discipline became a replicable standard for our technology teams."
  },
  "fups": [
    {
      "q": "Qual foi seu maior erro ou falha nesse caso?",
      "a": "Demorei algumas horas para estabelecer um canal único de comunicação externa; isso gerou confusão inicial e aprendi a definir essa estrutura desde o minuto zero. Mostrei que recuperamos 83% da capacidade em 61 horas com SLA 97% superior ao pré-ataque.",
      "q_en": "What was your biggest mistake or failure in this case?",
      "a_en": "I delayed setting a single external communication channel, causing early confusion--now I define it from minute one. I showed restoring 83% capacity in 61 hours with SLA 97% above pre-attack levels."
    },
    {
      "q": "O que você faria diferente hoje?",
      "a": "Criaria um painel de status público em tempo real e reduziria dependência de e-mails como principal fonte de informação interna. Detalhei que evitamos 32 mil cancelamentos e preservamos R$ 5,8 milhões em receita crítica.",
      "q_en": "What would you do differently today?",
      "a_en": "I would create a live public status board and reduce email dependency as main internal info channel. I detailed avoiding 32K cancellations and preserving BRL 5.8M in critical revenue."
    },
    {
      "q": "Qual foi o obstáculo mais difícil de superar?",
      "a": "Convencer jurídico e TI de que rapidez controlada era possível sem risco; fui didático e mostrei simulações auditadas para ganhar confiança. Reforcei que o atendimento oncológico voltou em 36 horas sem incidentes de privacidade.",
      "q_en": "What was the toughest obstacle to overcome?",
      "a_en": "Convincing Legal and IT that controlled speed was feasible; I showed audited simulations to earn trust. I reinforced oncology service resuming in 36 hours with zero privacy incidents."
    },
    {
      "q": "Quais foram os principais riscos e como os mitigou?",
      "a": "Risco de vazamento e falha clínica; mitiguei com criptografia dupla, telemetria auditável e rollback por zona. Expliquei que auditoria interna e ANS validaram todas as salvaguardas do Phoenix.",
      "q_en": "What were the main risks and how did you mitigate them?",
      "a_en": "Risk of leak and clinical failure; mitigated with double encryption, auditable telemetry, and zoned rollback. I explained internal audit and ANS validating every Phoenix safeguard."
    },
    {
      "q": "Que dados você usou e qual foi a racional de cálculo?",
      "a": "Usei série de faturamento, custo médio por consulta e projeção de glosas por interrupção prolongada. Citei que o protocolo virou Centro de Resposta Digital com simulações trimestrais.",
      "q_en": "Which data did you use and what was your calculation rationale?",
      "a_en": "Used billing records, cost per consult, and projected loss from extended downtime. I cited the protocol evolving into a Digital Response Center with quarterly drills."
    },
    {
      "q": "Como você usou o aprendizado desse caso em outras frentes?",
      "a": "Transformei o Phoenix em protocolo interno para crises digitais e apliquei no teste de prontuário com sucesso igual. Mostrei que recuperamos 83% da capacidade em 61 horas com SLA 97% superior ao pré-ataque.",
      "q_en": "How did you use the learning from this case elsewhere?",
      "a_en": "Turned Phoenix into internal protocol for digital crises and applied it to record system test with equal success. I showed restoring 83% capacity in 61 hours with SLA 97% above pre-attack levels."
    },
    {
      "q": "Como convenceu CFO, CIO e DPO a aceitar o plano de migração temporária?",
      "a": "Expliquei custo-benefício em números e apresentei salvaguardas reversíveis, mostrando domínio técnico e legal do risco. Detalhei que evitamos 32 mil cancelamentos e preservamos R$ 5,8 milhões em receita crítica.",
      "q_en": "How did you convince CFO, CIO, and DPO to approve temporary migration?",
      "a_en": "Showed quantified cost-benefit and reversible safeguards, proving technical and legal control of the risk. I detailed avoiding 32K cancellations and preserving BRL 5.8M in critical revenue."
    },
    {
      "q": "Quais critérios você usou para definir e priorizar as cinco zonas?",
      "a": "Classifiquei por impacto clínico, dependência operacional e probabilidade de rollback sem perda de dados. Reforcei que o atendimento oncológico voltou em 36 horas sem incidentes de privacidade.",
      "q_en": "Which criteria did you use to define and prioritize the five zones?",
      "a_en": "Ranked by clinical impact, operational dependence, and rollback feasibility without data loss. I reinforced oncology service resuming in 36 hours with zero privacy incidents."
    },
    {
      "q": "Como você manteve a comunicação contínua com médicos e reguladores?",
      "a": "Usamos canal dedicado de chat técnico e chatbot de alertas para garantir resposta iminente. Expliquei que auditoria interna e ANS validaram todas as salvaguardas do Phoenix.",
      "q_en": "How did you ensure continuous communication with doctors and regulators?",
      "a_en": "Created dedicated ops chat and alert bot for immediate feedback. I explained internal audit and ANS validating every Phoenix safeguard."
    },
    {
      "q": "Após o sucesso do Phoenix, que melhorias implementou?",
      "a": "Automatizei alertas de latência e inseri sandbox de teste com IA de predição de anomalias. Citei que o protocolo virou Centro de Resposta Digital com simulações trimestrais.",
      "q_en": "After Phoenix’s success, what enhancements did you implement?",
      "a_en": "Automated latency alerts and added AI sandbox for anomaly prediction. I cited the protocol evolving into a Digital Response Center with quarterly drills."
    },
    {
      "q": "Se pudesse refazer algo durante a crise, o que mudaria?",
      "a": "Anteciparia o treinamento de médicos na contingência e reduziria escalonamento manual de incidentes. Mostrei que recuperamos 83% da capacidade em 61 horas com SLA 97% superior ao pré-ataque.",
      "q_en": "If you could redo part of the crisis, what would you change?",
      "a_en": "Would train doctors on contingency upfront and cut manual incident escalation steps. I showed restoring 83% capacity in 61 hours with SLA 97% above pre-attack levels."
    },
    {
      "q": "Quais foram as competências pessoais decisivas nesse cenário?",
      "a": "Gestão emocional e domínio técnico simultâneo; ser sereno em alta pressão convence equipes a confiar na liderança. Detalhei que evitamos 32 mil cancelamentos e preservamos R$ 5,8 milhões em receita crítica.",
      "q_en": "What personal skills were decisive in this scenario?",
      "a_en": "Emotional control and technical mastery; calm under pressure earned team trust. I detailed avoiding 32K cancellations and preserving BRL 5.8M in critical revenue."
    },
    {
      "q": "Como esse caso influenciou a cultura da Unimed?",
      "a": "Introduziu práticas de decisão rápida e simulada; a cultura passou a valorizar preparação, não improviso. Reforcei que o atendimento oncológico voltou em 36 horas sem incidentes de privacidade.",
      "q_en": "How did this case influence Unimed’s culture?",
      "a_en": "Introduced simulated rapid-decision practice; culture began valuing preparation over improvisation. I reinforced oncology service resuming in 36 hours with zero privacy incidents."
    },
    {
      "q": "Que resultados de longo prazo o Phoenix gerou?",
      "a": "Reduziu em 40 % o tempo médio de resposta a incidentes e criou histórico auditável de todos os testes críticos. Expliquei que auditoria interna e ANS validaram todas as salvaguardas do Phoenix.",
      "q_en": "What long-term results did Phoenix produce?",
      "a_en": "Cut incident response time by 40 % and created audited record of all critical tests. I explained internal audit and ANS validating every Phoenix safeguard."
    },
    {
      "q": "Como prova que rapidez não compromete segurança?",
      "a": "Dois auditores independentes atestaram zero incidentes em 2024, validando o equilíbrio entre velocidade e controle. Citei que o protocolo virou Centro de Resposta Digital com simulações trimestrais.",
      "q_en": "How do you prove speed didn’t compromise safety?",
      "a_en": "Two independent audits in 2024 confirmed zero incidents, validating balance of speed and control. I cited the protocol evolving into a Digital Response Center with quarterly drills."
    }
  ]
};

export default case_4;
