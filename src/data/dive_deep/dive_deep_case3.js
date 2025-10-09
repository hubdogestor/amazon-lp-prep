const case_3 = {
  id: "unimed-fraud-investigation",
  title: "Investigacao Manual de Anomalias em Reembolsos para Identificar Fraude em Rede",
  title_pt: "Investigacao Manual de Anomalias em Reembolsos para Identificar Fraude em Rede",
  title_en: "Manual Investigation of Reimbursement Anomalies to Uncover Network Fraud",
  company: "Unimed",
  period: "06/2022-12/2022",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: `R$ 4.8 milhões sangrando em reembolsos fraudulentos. Um padrão invisível para o sistema. Mas eu vi. Em 2022, ao assumir a área de Risco de Pagamentos da Unimed, uma analista me trouxe o que parecia trivial: milhares de reembolsos de R$150, sempre para os mesmos 12 psicólogos, solicitados por 112 clientes diferentes. O sistema de fraude existente, que analisava transações isoladamente, não via nada de errado, mas a projeção indicava uma perda anual que minava a confiança dos 1.6 milhão de beneficiários da cooperativa.`,
    t: `Diante da inação do sistema, eu me declarei o owner da investigação. Meu objetivo era claro: em 30 dias, eu precisava provar se aquilo era uma fraude em rede, desativar os fraudadores e criar um mecanismo para prevenir recorrências, tudo isso sem impactar negativamente os milhares de clientes legítimos que dependiam dos nossos reembolsos.`,
    a: `Para desvendar a rede, eu extraí pessoalmente 6 meses de logs do nosso data lake, totalizando 28 milhões de transações. Eu escrevi scripts em Python para correlacionar sinais fracos que o sistema ignorava: CPF, geolocalização do IP e device hash. A análise revelou a conexão: os 112 clientes eram, na verdade, controlados por apenas 3 devices. Com o mapa da fraude em mãos, eu modelei o impacto financeiro e o risco regulatório e confrontei o Diretor Assistencial, que relutava em questionar uma rede parceira. Apresentei os dados de forma incontestável e propus uma ação conjunta e discreta. Liderando um war room semanal com jurídico, compliance e operações, eu refinei o modelo de detecção, implementei o bloqueio preventivo das 26 contas fraudulentas e defini um novo processo de auditoria.`,
    r: `Minha investigação estancou uma perda de R$4.8 milhões anuais. A precisão do sistema de detecção aumentou em 31%, enquanto os falsos positivos para clientes legítimos caíram 42%, melhorando a experiência do usuário. O tempo de revisão manual de alertas caiu de 25 para 11 minutos. Mais importante, o mapa de correlação que eu criei se tornou um mecanismo permanente, aplicado em 14 instituições financeiras cooperadas, protegendo R$ 67 milhões adicionais. Posteriormente, repliquei a metodologia no Sicredi para reduzir fraudes no PIX em 45%, evitando R$ 23 milhões em perdas no primeiro ano.`,
    l: `Esse caso me ensinou que fraudadores sofisticados exploram as lacunas entre os sistemas. Regras isoladas são insuficientes; a verdadeira defesa está em correlacionar sinais fracos ao longo do tempo. Hoje, meu playbook é: 1) Confie na intuição da linha de frente e mergulhe nos dados brutos; 2) Conecte os pontos que ninguém está vendo, mesmo que isso signifique aprender uma nova linguagem de programação; 3) Transforme a descoberta em um mecanismo automatizado. É assim que se constrói uma defesa que escala.`
  },
  en: {
    s: `In 2022, upon taking over the Payments Risk area at Unimed, an analyst brought me what seemed like a trivial alert: a small increase in psychology reimbursements. But as I dove into the data, my intuition pointed to something bigger. I noticed a strange pattern: thousands of BRL 150 reimbursements, always to the same 12 psychologists, requested by 112 different clients. The existing fraud system, which analyzed transactions in isolation, saw nothing wrong, but the projection indicated an annual loss of BRL 4.8 million, undermining the trust of our 1.6 million beneficiaries.`,
    t: `Faced with the system's inaction, I declared myself the owner of the investigation. My goal was clear: within 30 days, I needed to prove if this was a network fraud, deactivate the fraudsters, and create a mechanism to prevent recurrence, all without negatively impacting the thousands of legitimate clients who depended on our reimbursements.`,
    a: `To unravel the network, I personally extracted 6 months of logs from our data lake, totaling 28 million transactions. I wrote Python scripts to correlate weak signals the system ignored: CPF, IP geolocation, and device hash. The analysis revealed the connection: the 112 clients were actually controlled by just 3 devices. With the fraud map in hand, I modeled the financial impact and regulatory risk and confronted the Medical Director, who was reluctant to question a partner network. I presented the data irrefutably and proposed a joint, discreet action. Leading a weekly war room with legal, compliance, and operations, I refined the detection model, implemented the preventive blocking of the 26 fraudulent accounts, and defined a new audit process.`,
    r: `My investigation staunched an annual loss of BRL 4.8 million. Our detection system's precision increased by 31%, while false positives for legitimate clients dropped by 42%, improving the user experience. The manual review time for alerts fell from 25 to 11 minutes. More importantly, the correlation map I created became a permanent mechanism, which was later replicated at Sicredi to reduce PIX fraud by 45%.`,
    l: `This case taught me that sophisticated fraudsters exploit the gaps between systems. Isolated rules are insufficient; the real defense lies in correlating weak signals over time. Today, my playbook is: 1) Trust the intuition of the front line and dive into the raw data; 2) Connect the dots no one else is seeing, even if it means learning a new programming language; 3) Turn the discovery into an automated mechanism. That's how you build a defense that scales.`
  },
  fups: [
    {
      q: "Qual foi o maior obstáculo técnico que você enfrentou ao correlacionar os dados?",
      a: "O maior obstáculo foi a inconsistência dos dados entre diferentes fontes. Os timestamps eram diferentes, os formatos de endereço variavam e os identificadores de dispositivo não eram padronizados. Tive que escrever vários scripts de normalização e limpeza antes de conseguir juntar as informações de forma confiável. Foi um trabalho de 'data janitor' que consumiu 40% do tempo, mas foi essencial para a descoberta.",
      q_en: "What was the biggest technical obstacle you faced when correlating the data?",
      a_en: "The biggest obstacle was the data inconsistency across different sources. Timestamps were different, address formats varied, and device identifiers were not standardized. I had to write several normalization and cleaning scripts before I could reliably join the information. It was 'data janitor' work that took up 40% of the time, but it was essential for the discovery."
    },
    {
      q: "Como voce tratou a resistencia do diretor assistencial em apontar uma rede parceira?",
      a: "Levei dados incontestaveis: mapa medico-paciente, projecao de perda e risco regulatorio. Propus comunicacao discreta e conjunta em vez de exposicao publica. Assim ele se sentiu protegido e liberou meus passos.",
      q_en: "How did you address the medical director's resistance to questioning a partner network?",
      a_en: "I brought irrefutable data: the doctor-patient map, loss projection, and regulatory risk. I suggested a discreet joint outreach instead of public blame, giving him air cover to approve the plan." 
    },
    {
      q: "Quais indicadores voce monitorou para provar impacto ao cliente?",
      a: "Combinei volume suspeito, CSAT dos 112 clientes, NPS da carteira e numero de reclamacoes na ouvidoria. Isso traduziu o problema em termos de experiencia e nao apenas financas.",
      q_en: "Which indicators did you track to prove customer impact?",
      a_en: "I combined suspicious volume, CSAT for the 112 customers, portfolio NPS, and ombudsman complaints. That framed the issue in customer terms, not just finance." 
    },
    {
      q: "Como garantiu que o modelo atualizado detectasse fraudes futuras similares?",
      a: "Criei tres novas features, defini limiares de alerta e exigi testes A/B com base historica. Tambem agendei revisao mensal de performance com ciencia de dados e atendimento.",
      q_en: "How did you ensure the updated model would catch similar fraud going forward?",
      a_en: "I delivered three new features, defined alert thresholds, and required A/B tests on historical data. I also scheduled a monthly performance review with data science and service teams." 
    },
    {
      q: "Qual foi a logica por tras do bloqueio temporario de CPFs/IPs?",
      a: "Usei um score com frequencia por hora, valor acumulado e repeticao de procedimentos. Bloqueei quem passava do percentil 99 e defini revisao manual em 24h para evitar falso positivo.",
      q_en: "What logic did you apply to temporarily block CPFs/IPs?",
      a_en: "I built a score combining hourly frequency, accumulated value, and repeated procedures. Anything above the 99th percentile was blocked and manually reviewed within 24 hours to avoid false positives." 
    },
    {
      q: "Como voce reconheceu o alerta inicial da analista?",
      a: "Reconheci publicamente no all-hands, criei um canal de dicas de fraude e inclui a analista na definicao dos novos mecanismos. Isso incentivou o time a compartilhar sinais cedo.",
      q_en: "How did you recognize the analyst's initial alert?",
      a_en: "I celebrated her in the all-hands, opened a fraud-tip channel, and involved her in defining the new mechanisms. That encouraged the team to raise signals early." 
    },
    {
      q: "Que metricas mostraram que o war room semanal era efetivo?",
      a: "Tempo medio de resposta caiu de 5 dias para 18 horas, reincidencia ficou zero e 100% dos casos tinham plano fechado ate o proximo encontro.",
      q_en: "Which metrics showed the weekly war room was effective?",
      a_en: "Average response time dropped from five days to 18 hours, recidivism hit zero, and 100% of cases had a closed plan by the next meeting." 
    },
    {
      q: "Como voce assegurou compliance com ANS ao bloquear reembolsos?",
      a: "Alinhei com juridico um procedimento: bloqueio preventivo, contato ao beneficiario em 24h, documentacao completa no prontuario digital. Isso manteve aderencia e evitou reclamacoes.",
      q_en: "How did you ensure ANS compliance when blocking reimbursements?",
      a_en: "I aligned with legal on a procedure: preventive block, beneficiary contact within 24 hours, full documentation in the digital record. That kept us compliant and avoided complaints." 
    },
    {
      q: "Qual visualizacao foi decisiva e por que?",
      a: "O scatter valor x hora expos o cluster improvavel. Ele mostrava um padrao que nenhum relatorio tabular revelaria e foi a prova-chave para convencer executivos.",
      q_en: "Which visualization was decisive and why?",
      a_en: "The value-hour scatter exposed the unlikely cluster. It revealed a pattern no tabular report would highlight and became the key evidence for executives." 
    },
    {
      q: "Como a metodologia foi replicada em outros produtos?",
      a: "Levei o mesmo playbook para o Sicredi e reduzi fraude PIX em 45% usando as mesmas oito visualizacoes e o ritual de outliers.",
      q_en: "How was the methodology replicated elsewhere?",
      a_en: "I reused the playbook at Sicredi and cut PIX fraud by 45% using the same eight visualizations and outlier ritual." 
    }
  ]
};

export default case_3;

