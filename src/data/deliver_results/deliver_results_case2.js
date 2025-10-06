// Case 2 - deliver_results
const case_2 = {
  id: "unimed-ebitda-growth",
  title: "Transformei EBITDA Estagnado em Crescimento de 22% Atacando Tres Inputs Chave",
  title_pt: "Transformei EBITDA Estagnado em Crescimento de 22% Atacando Tres Inputs Chave",
  title_en: "Digital Health Platform that Unified 347 Cooperatives and Served 4.2M Lives",
  company: "Unimed",
  period: "08/2021-12/2023",
  isTopCase: true,
  pt: {
    s: `Em 2020 a Unimed veio de dois anos com EBITDA travado em ~R$ 320M, sinistralidade em 83%, churn digital de 40% e NPS em 52. A cada trimestre o conselho apertava a diretoria porque o plano de reducao de custos fracassava. Quando assumi o programa, encontrei 17 iniciativas dispersas, sem dono unico nem indicador claro.`,
    t: `Eu me comprometi com o CEO e com o conselho a elevar o EBITDA em 20% em tres anos, explicitar os inputs que movem o resultado e liderar pessoalmente a execucao das frentes prioritarias. Assumi accountability direto pelos OKRs corporativos ligados a rentabilidade.`,
    a: `Eu desmontei o problema em tres inputs que representavam 80% do impacto: custo assistencial, churn e novas receitas. (1) Custo assistencial: analisei 36 meses de P&L linha a linha no Excel, identifiquei que pacientes cronicos respondiam por 35% do gasto. Criei o programa APS 360: mapeei 42 mil pacientes, lancei 12 hubs multiprofissionais e negociei com 3 cooperativas medicas pacotes de performance. Resultado: consultas de pronto atendimento caíram 31% e sinistralidade baixou para 76%. (2) Churn/NPS: acompanhei 20 entrevistas com clientes que cancelaram e liderei squad cross-funcional para redesenhar o onboarding digital. Introduzi tutor interativo, SLA de aprovacao em 2 horas e canal proativo de WhatsApp. Resultado: churn caiu de 40% para 24% em 12 meses e NPS subiu para 67. (3) Novas receitas: pessoalmente fiz discovery com 25 veterinarias, 18 clinicas corporativas e testei prototipo do plano Pet e do Checklist Executivo; lancei em 90 dias com pricing baseado em dados de sinistralidade e ancinei metas de cross-sell ao time comercial. Em paralelo, implantei ciclo trimestral de OKRs: conduzi workshops de 4h com cada diretoria, amarrei KRs a metricas de EBITDA e criei ritual de review quinzenal. Quando o diretor financeiro resistiu a abrir dados detalhados, negociei acesso condicionado a comite semanal e garanti compliance LGPD; em menos de um mes eu tinha visibilidade diaria do fluxo de caixa.`,
    r: `Em 24 meses o EBITDA saltou 22% (R$ 320M -> R$ 391M). Decomposicao: APS 360 entregou R$ 21M em economia anual, queda de churn gerou R$ 34M em receita retida e novos produtos adicionaram R$ 16M. NPS foi a 67 (+15), churn digital 24%, tempo de aprovacao caiu de 48h para 1h45, e carteira ativa cresceu 12%. O conselho aprovou bonus integral da diretoria e o modelo de OKRs virou mecanismo oficial da cooperativa.`,
    l: `Aprendi que entregar resultado financeiro exige tratar cada ponto do EBITDA como alavanca mensuravel. Inputs claros, rituais sequenciados e coragem para enfrentar resistencias (financeiro e cooperativas) garantiram o crescimento sem shot de curto prazo.`
  },
  en: {
    s: `In 2020 Unimed had two years of flat EBITDA around R$320M, medical loss at 83%, digital churn at 40%, and NPS at 52. Every quarter the board pressed leadership because previous cost-cutting plans stalled. When I took over, I found 17 scattered initiatives, no single owner, and no input-based tracking.`,
    t: `I committed to the CEO and the board to lift EBITDA by 20% within three years, expose the inputs that move the outcome, and personally lead the execution of the priority fronts. I took direct accountability for profitability OKRs.`,
    a: `I broke the challenge into three inputs covering 80% of impact: care cost, churn, and new revenue. (1) Care cost: I dissected 36 months of P&L in Excel and saw chronic patients drove 35% of spend. I launched the APS 360 program: mapped 42K patients, opened 12 multi-disciplinary hubs, and negotiated pay-for-performance with three medical cooperatives. ER visits dropped 31% and loss ratio fell to 76%. (2) Churn/NPS: I observed 20 exit interviews and led a cross-functional squad to redesign digital onboarding. We rolled out an interactive tutor, two-hour approval SLA, and proactive WhatsApp support. Churn dropped from 40% to 24% in 12 months and NPS climbed to 67. (3) New revenue: I personally ran discovery with 25 vet clinics and 18 corporate clinics, prototyped the Pet and Executive Checklist plans, and launched in 90 days with pricing tied to claims data, assigning cross-sell targets to commercial. In parallel I implemented quarterly OKRs: facilitated 4-hour workshops per directorate, linked KRs to EBITDA metrics, and instituted biweekly reviews. When the CFO resisted sharing granular data I negotiated access via a weekly committee and LGPD compliance; within a month I had daily cash visibility.`,
    r: `In 24 months EBITDA rose 22% (R$320M → R$391M). Breakdown: APS 360 delivered R$21M annual savings, churn reduction yielded R$34M retained revenue, and new products added R$16M. NPS hit 67 (+15), digital churn reached 24%, approval time fell from 48h to 1h45, and active membership grew 12%. The board approved full executive bonuses and the OKR cadence became the cooperative's standard mechanism.`,
    l: `I learned that delivering financial results means treating EBITDA as a set of measurable levers. Clear inputs, tight rituals, and confronting resistance (finance and cooperatives) unlocked sustainable growth without quick fixes.`
  },
  fups: [
    {
      "q": "Como voce calculou o impacto de cada input no EBITDA?",
      "a": "Modelei os 36 meses de P&L, usei regressao com tres variaveis principais (custo cronico, churn, ticket medio) e projetei sensibilidade de +/-5%." ,
      "q_en": "How did you size each input's impact on EBITDA?",
      "a_en": "I modeled 36 months of P&L, ran a regression on three variables (chronic cost, churn, average ticket), and produced +/-5% sensitivity curves." 
    },
    {
      "q": "Qual foi o desenho da APS 360?",
      "a": "Estruturei 12 hubs com enfermeiro lider, dashboard de meta clinica e contrato pay-for-performance com metas de HbA1c, PA e adesao." ,
      "q_en": "How did you design the APS 360 program?",
      "a_en": "I set up 12 hubs led by nurse coordinators, built a clinical goal dashboard, and signed pay-for-performance contracts on HbA1c, BP, and adherence." 
    },
    {
      "q": "Como voce convenceu as cooperativas medicas a aceitar pagamento por performance?",
      "a": "Apresentei simulacao de receita futura, garanti piso financeiro por 6 meses e criei comite tripartite para arbitrar conflitos." ,
      "q_en": "How did you persuade the medical cooperatives to adopt pay-for-performance?",
      "a_en": "I showed future revenue simulations, guaranteed a six-month financial floor, and created a tri-party committee to arbitrate disputes." 
    },
    {
      "q": "Que metricas voce monitorou semanalmente no onboarding digital?",
      "a": "Churn 0-7 dias, taxa de finalizacao, tempo de aprovacao, NPS por coorte e quantidade de clientes reativados." ,
      "q_en": "Which metrics did you track weekly in digital onboarding?",
      "a_en": "Day 0-7 churn, completion rate, approval time, cohort NPS, and count of reactivated customers." 
    },
    {
      "q": "Como voce estruturou o lancamento dos produtos Pet e Checklist Executivo?",
      "a": "Usei discovery com 43 entrevistas, MVP em 90 dias, pricing baseado em claims, CRM com funil dedicado e squad de cross-sell treinado por mim." ,
      "q_en": "How did you launch the Pet and Executive Checklist products?",
      "a_en": "I ran 43 discovery interviews, shipped an MVP in 90 days, priced with claims data, configured a dedicated CRM funnel, and trained the cross-sell squad myself." 
    },
    {
      "q": "Qual foi o ritual de OKRs que voce implantou?",
      "a": "Workshop de definicao a cada quarter, check quinzenal de progresso, revisao mensal de riscos, e eu botei na agenda do CEO as decisoes de trade-off." ,
      "q_en": "What OKR ritual did you implement?",
      "a_en": "Quarterly definition workshops, biweekly progress reviews, monthly risk scans, and I placed trade-off decisions on the CEO's agenda." 
    },
    {
      "q": "Como voce destravou o acesso aos dados financeiros detalhados?",
      "a": "Negociei com o CFO: comite semanal comigo, auditoria LGPD, trilha de acesso logada e charter aprovado pelo conselho." ,
      "q_en": "How did you unlock detailed financial data access?",
      "a_en": "I negotiated with the CFO: weekly steering with me, LGPD audit, logged access trail, and a council-approved charter." 
    },
    {
      "q": "Que acao tomou para clientes bloqueados indevidamente no onboarding?",
      "a": "Criei canal de reprocesso em 2 horas com cashback de R$ 30 e monitorei NPS desses clientes por 60 dias." ,
      "q_en": "What did you do about wrongly blocked onboarding customers?",
      "a_en": "I created a two-hour reprocessing lane with a R$30 cashback and tracked those customers' NPS for 60 days." 
    },
    {
      "q": "Como voce garantiu disciplina de execucao entre as diretorias?",
      "a": "Associei bonus variavel aos KRs, publiquei dashboard em tempo real e fiz meet semanal de cobranca com cada diretor." ,
      "q_en": "How did you enforce execution discipline across directorates?",
      "a_en": "I tied variable bonus to KRs, published a real-time dashboard, and held a weekly accountability meeting with each director." 
    },
    {
      "q": "Qual aprendizado levou para outros programas?",
      "a": "Levei o modelo de inputs + OKRs para a vertical de pagamentos corporativos; em 2024 ja entregou reducao de DSO em 11 dias." ,
      "q_en": "Which lesson did you carry forward?",
      "a_en": "I applied the input + OKR model to the corporate payments vertical; by 2024 it had already cut DSO by 11 days." 
    }
  ]
};

export default case_2;
