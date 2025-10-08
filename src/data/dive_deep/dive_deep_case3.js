// Case 3 - dive_deep
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
    s: `Assumindo a gestao de riscos de pagamentos cross-border, revisei uma amostra de transacoes e notei padroes repetidos de pequenos valores enviados em horarios muito proximos para o mesmo beneficiario estrangeiro. Enderecos incompletos e descricoes genericas reforcaram a suspeita de fracionamento para burlar limites. O processo existente tratava alertas isoladamente sem correlacionar comportamento ao longo do tempo.`,
    t: `Eu precisava confirmar se era um padrao ilicito real e bloquear transacoes indevidas sem prejudicar clientes legitimos. O objetivo era reduzir falsos positivos e aumentar a precisao na identificacao de fracionamento recorrente.`,
    a: `Extraí 6 meses de logs (28 milhoes de transacoes), normalizei campos (horario, IP, device hash, geolocalizacao) e gerei features temporais basicas (intervalo medio, repeticao de beneficiarios, distribuicao de horarios). Apliquei clustering simples para destacar grupos de baixo valor e alta frequencia, cruzei com listas de sancoes e cadastros incompletos e construí regras dinamicas combinando baixo valor + repeticao + janela curta. Ajustei pesos com compliance em amostra rotulada.`,
    r: `Reduzi falsos positivos em 42% e aumentei a precisao na deteccao em 31% versus o metodo anterior. Escalamos 87 contas e bloqueamos 26 com evidencias consolidadas. Tempo de revisao manual caiu de 25 para 11 minutos. Nenhum cliente legitimo de alto valor foi afetado e o modelo virou base para monitoramentos seguintes.`,
    l: `Aprendi que correlacionar sinais fracos distribuidos no tempo revela padroes que regras simples nao capturam. Mecanismos: camada de correlacao temporal, revisao mensal conjunta e regras adaptativas. Reaplico sempre que alertas isolados geram ruido excessivo.`
  },
  en: {
    s: `When I took over cross-border payments risk I reviewed a sample of transactions and saw repeated small fractional amounts sent within very short windows to the same foreign beneficiary. Incomplete addresses and generic descriptions suggested structuring to bypass limits. The existing process treated alerts in isolation without correlating behavior over time.`,
    t: `I needed to confirm if this was a real illicit pattern and block improper transactions without harming legitimate customers. Goal: cut false positives while increasing precision in detecting recurring structuring.`,
    a: `I extracted six months of logs (28M transactions), normalized key fields (timestamp, IP, device hash, geolocation) and built basic temporal features (avg interval, beneficiary repetition, hour distribution). I used light clustering to surface low‑value/high‑frequency groups, cross‑checked with sanctions lists and incomplete registrations, and authored adaptive rules combining low value + repetition + short window. I tuned weights with compliance on a labeled sample.`,
    r: `False positives dropped 42% and detection precision rose 31% over the prior method. We escalated 87 accounts and blocked 26 with consolidated evidence. Manual review time fell from 25 to 11 minutes. No legitimate high‑value customer was impacted and the model became the baseline for subsequent monitoring.`,
    l: `I learned correlating weak temporal signals reveals patterns simple rules miss. Mechanisms: temporal correlation layer, monthly joint review, adaptive ruleset. I reapply this whenever isolated alerts create excessive noise.`
  },
  fups: [
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
    },
    {
      q: "Qual licao voce da para times de dados sobre intuicao humana?",
      a: "Tratem intuicao como sinal prioritario. Criei um mecanismo: qualquer analista abre um 'case de intuicao' e eu garanto slot de investigacao em 48h. Isso mantem o loop humano + maquina.",
      q_en: "What lesson do you give data teams about human intuition?",
      a_en: "Treat intuition as a priority signal. I codified it: any analyst can open an 'intuition case' and I guarantee an investigation slot within 48 hours. That keeps the human + machine loop healthy." 
    }
  ]
};

export default case_3;


