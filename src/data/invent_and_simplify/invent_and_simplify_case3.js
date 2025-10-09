const case_3 = {
  id: "unimed-ai-authorization",
  title: "Inventei IA de Autorizacao Medica que Simplificou Processo de 5 Dias para 9 Horas (82% Automacao)",
  title_pt: "Inventei IA de Autorizacao Medica que Simplificou Processo de 5 Dias para 9 Horas (82% Automacao)",
  title_en: "Invented Medical Authorization AI that Simplified 5-Day Process to 9 Hours (82% Automation)",
  company: "Unimed",
  period: "01/2023-10/2023",
  isTopCase: true,
  isGoodCase: true,
  pt: {
    s: `"Meu pai vai morrer esperando autorização." A frase de uma filha desesperada no call center resumia nossa crise: 5,1 dias para autorizar procedimentos médicos, NPS despencando para 19 e hospitais parceiros ameaçando romper contratos. Pacientes oncológicos perdiam janelas clínicas críticas, famílias entravam em desespero e nossa reputação de 50 anos estava em colapso. Cada dia de atraso custava vidas e credibilidade.`,
    t: `Diante dessa crise humanitária que destruía nossa essência cooperativista, assumi ownership total da transformação do processo de autorizações. Minha missão era clara: reduzir o tempo para menos de 12 horas, automatizar 80% das decisões e devolver dignidade ao atendimento médico.`,
    a: `Eu inventei uma solução radical que humanizou a tecnologia. Primeiro, criei o indicador "tempo de angústia" — medindo horas de sofrimento familiar por procedimento negado ou atrasado — que se tornou nossa métrica norte. Segundo, desenvolvi uma IA explicável que processava 58 variáveis clínicas, mas eliminei 11 que geravam viés socioeconômico, priorizando equidade. Terceiro, quando o conselho médico resistiu à automação, não apresentei apenas algoritmos — mostrei histórias reais de pacientes salvos pela velocidade. Criei o "Painel de Confiança" que traduzia decisões da IA em linguagem médica, permitindo que auditores entendessem e validassem cada escolha.`,
    r: `A invenção transformou vidas e números. Em 10 meses, o tempo médio despencou de 5,1 dias para 9 horas (-96%), atingimos 82% de automação e o NPS saltou para 67. Mais importante: salvamos janelas clínicas críticas para 2.847 pacientes oncológicos, reduzimos "tempo de angústia" familiar em 89% e economizamos R$ 2,4M anuais em custos operacionais. A solução foi tão eficaz que hospitais parceiros renovaram contratos antecipadamente, e o modelo virou referência para outras cooperativas médicas.`,
    l: `Aprendi que inventar com propósito é sobre humanizar a tecnologia, não substituir o humano. O "tempo de angústia" virou meu indicador padrão para justificar automação em qualquer contexto. Hoje, em pagamentos, aplico o mesmo princípio: meço a frustração do lojista durante aprovações lentas e uso isso para justificar investimentos em velocidade de processamento, sempre lembrando que por trás de cada transação há uma pessoa esperando.`
  },
  en: {
    s: `"My father will die waiting for authorization." A desperate daughter's words in our call center summarized our crisis: 5.1 days to authorize medical procedures, NPS plummeting to 19, and partner hospitals threatening to break contracts. Oncology patients were missing critical clinical windows, families were entering despair, and our 50-year reputation was collapsing. Each day of delay cost lives and credibility.`,
    t: `Faced with this humanitarian crisis destroying our cooperative essence, I took total ownership of transforming the authorization process. My mission was clear: reduce time to under 12 hours, automate 80% of decisions, and restore dignity to medical care.`,
    a: `I invented a radical solution that humanized technology. First, I created the "distress time" indicator — measuring hours of family suffering per denied or delayed procedure — which became our north star metric. Second, I developed an explainable AI processing 58 clinical variables, but eliminated 11 that created socioeconomic bias, prioritizing equity. Third, when the medical board resisted automation, I didn't just present algorithms — I showed real stories of patients saved by speed. I created the "Confidence Panel" that translated AI decisions into medical language, allowing auditors to understand and validate each choice.`,
    r: `The invention transformed lives and numbers. In 10 months, average time plummeted from 5.1 days to 9 hours (-96%), we achieved 82% automation, and NPS jumped to 67. More importantly: we saved critical clinical windows for 2,847 oncology patients, reduced family "distress time" by 89%, and saved R$2.4M annually in operational costs. The solution was so effective that partner hospitals renewed contracts early, and the model became a reference for other medical cooperatives.`,
    l: `I learned that inventing with purpose is about humanizing technology, not replacing humans. "Distress time" became my standard indicator for justifying automation in any context. Today, in payments, I apply the same principle: I measure merchant frustration during slow approvals and use that to justify investments in processing speed, always remembering that behind every transaction is a person waiting.`
  },
  fups: [
    {
      q: "Como voce selecionou os 58 atributos do modelo?",
      a: "Eu fiz feature store com base em 12 entrevistas com auditores e testei 94 variaveis; mantive as 58 com ganho de informacao acima de 0,02 e que tinham correlacao clinica validada pelo board.",
      q_en: "How did you select the 58 model attributes?",
      a_en: "I built the feature store from 12 auditor interviews and tested 94 variables; I kept the 58 with information gain above 0.02 and clinically validated by the board."
    },
    {
      q: "Qual foi o maior sinal de customer obsession na execucao?",
      a: "Eu fiz todas as dailies abrindo com depoimentos dos pacientes, publiquei o indicador de angustia na intranet e acompanhei pessoalmente cada caso onco ate a alta.",
      q_en: "What was the strongest customer-obsession signal during execution?",
      a_en: "I opened every daily standup with patient recordings, published the distress indicator on the intranet, and personally followed each oncology case until discharge."
    },
    {
      q: "Como voce tratou o risco de viés algoritmico?",
      a: "Eu rodei fairness metrics por genero e faixa etaria, cortei 11 variaveis de renda e ajustei pesos ate reduzir a diferenca de aprovacao para menos de 2 p.p. entre grupos.",
      q_en: "How did you deal with algorithmic bias risk?",
      a_en: "I ran fairness metrics by gender and age, removed 11 income-related variables, and tuned weights until approval gap stayed below 2 p.p. across groups."
    },
    {
      q: "Como voce mediu impacto financeiro alem da economia de FTE?",
      a: "Eu cruzei base de sinistralidade e provei queda de 5,6% em reembolsos emergenciais e aumento de 2,1% em receita de planos premium devido a renovacoes antecipadas.",
      q_en: "How did you measure financial impact beyond FTE savings?",
      a_en: "I connected claims data and proved a 5.6% drop in emergency reimbursements plus a 2.1% premium-plan revenue uplift from early renewals."
    },
    {
      q: "Qual conflito voce teve com o conselho medico e como resolveu?",
      a: "Eles queriam voto de minerva em cada negativa automatica; eu propus limite dinamico por CID e defendi pessoalmente cada caso acima de R$ 8k em reuniao semanal.",
      q_en: "What conflict did you face with the medical board and how did you resolve it?",
      a_en: "They wanted veto power on every automatic denial; I proposed a dynamic threshold per ICD and personally defended each case above R$ 8k in the weekly meeting."
    },
    {
      q: "Como voce garantiu explainability para reguladores?",
      a: "Eu integrei o Painel de Confianca com logs que mostram pesos do modelo, gerei relatórios mensais para ANS e capturei assinatura digital de todos os ajustes.",
      q_en: "How did you guarantee explainability to regulators?",
      a_en: "I integrated the Confidence Panel with model-weight logs, produced monthly reports for the regulator, and captured digital signatures for every adjustment."
    },
    {
      q: "Que testes voce fez antes de escalar para 82%?",
      a: "Eu conduzi piloto de 30 dias com duas linhas de cuidado, acompanhei retrospectivas diarias e so expandi quando o falso positivo ficou abaixo de 1,5%.",
      q_en: "What tests did you run before scaling to 82%?",
      a_en: "I ran a 30-day pilot covering two care lines, tracked daily retrospectives, and only expanded once false positives stayed under 1.5%."
    },
    {
      q: "Como voce manteve o ratio EU:NOS acima de 3:1?",
      a: "Eu centralizei aprovacoes, mantive meu nome em cada decisao critica e registrei no painel quem aprovou, reforcando que as escolhas chave eram minhas.",
      q_en: "How did you keep the I:we ratio above 3:1?",
      a_en: "I centralized approvals, kept my name on every critical decision, and logged ownership in the panel to reinforce that the decisive calls were mine."
    },
    {
      q: "Qual proximo mecanismo voce ativou com o aprendizado?",
      a: "Eu criei squad para reembolso odontologico usando o mesmo painel e o indicador de angustia, reduzindo SLA de 6 dias para 26 horas em 45 dias.",
      q_en: "Which next mechanism did you activate using the learning?",
      a_en: "I launched a squad for dental reimbursements using the same panel and distress indicator, cutting SLA from 6 days to 26 hours within 45 days."
    },
    {
      q: "Como isso se conecta a pagamentos e fintech?",
      a: "Eu levo o conceito de explainability e do indicador de angustia para underwriting de sellers, deixando claro pro cliente por que a IA aprovou ou nao e devolvendo resposta em menos de 2 horas.",
      q_en: "How does this connect to payments and fintech?",
      a_en: "I bring the explainability concept and the distress indicator to seller underwriting, making it clear why AI approved or not and returning decisions in under two hours."
    }
  ]
};

export default case_3;
