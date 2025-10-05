// Case 2 - invent_and_simplify
const case_2 = {
  id: "bradesco-next-compliance-simplification",
  title: "Inventei trilha KYC one-click que reduziu onboarding Next de 32 para 6 horas",
  title_pt: "Inventei trilha KYC one-click que reduziu onboarding Next de 32 para 6 horas",
  title_en: "Invented one-click KYC stream that cut Next onboarding from 32 to 6 hours",
  company: "Bradesco",
  period: "08/2021-05/2022",
  isTopCase: false,
  pt: {
    s: `O relancamento do Next em 2021 ameaçava derrapar porque 41% das contas piloto ficavam presas em compliance por 32 horas e 18% desistiam antes da primeira transacao. O NPS de onboarding despencou de 56 para 22 e o Bacen tinha aberto dois oficios cobrando aderencia a novas regras de suitabilidade. Eu participei de grupos focais com 25 clientes beta e ouvi, de cada um, que o atrito era mandar o mesmo documento cinco vezes e esperar retorno sem prazo.`,
    t: `Eu me coloquei como owner unico da esteira KYC/AML e prometi ao CEO reduzir o tempo total para menos de 6 horas, mantendo 0 incidentes regulatorios e aprovando 90% das contas sem intervenção manual. Eu me comprometi com clientes: enviaria e-mails em meu nome explicando em quanto tempo eles receberiam a resposta.`,
    a: `Primeiro, eu inventei o "KYC One-Click": mapeei as 47 regras do Bacen, agrupei em 5 macros e criei arvores de decisao automatizadas que eu mesmo codifiquei em Python. Para garantir customer obsession, eu repliquei o fluxo na frente dos clientes em usability labs e removi 11 telas. Segundo, eu negociei com compliance para integrar bases externas (Serasa, Open Banking, gov.br) via APIs, assumindo risco pessoal ao assinar o termo de responsabilidade por acesso. Terceiro, eu criei um mecanismo de prova negativa: caso o documento nao passasse na primeira vez, eu prometia retorno em 90 minutos com orientacao personalizada que eu mesmo revisava. O conflito maior veio do jurídico que queria manter checklist manual; eu provei com dados que 63% dos bloqueios eram falsos positivos de endereco e aceitei pilotar com 50 mil contas sob minha supervisao. Tambem ajuste o scoring de risco redefinindo pesos para renda variavel e carteira PJ, reduzindo reanalise em 74%.`,
    r: `Em 90 dias o tempo de onboarding caiu de 32 horas para 5h58, o abandono despencou de 18% para 4%, e o NPS voltou para 68. A taxa de fraude permaneceu em 0,04% e zeramos oficios do Bacen. O Next bateu 2,1M de contas ativas em cinco meses, adicionando R$ 1,3B em saldos e aumentando receita transacional em R$ 28M no semestre.`,
    l: `Aprendi que simplificar compliance exige assumir o discurso com o regulador e com o cliente ao mesmo tempo. Quando eu explico exatamente como a regra funciona e dou previsibilidade, o atrito some. Hoje aplico o KYC One-Click em onboarding de sellers: poucos passos, prometo resposta em horas e mantenho logs auditaveis desde o primeiro clique.`,
  },
  en: {
    s: `The 2021 relaunch of Next was at risk because 41% of pilot accounts were stuck in compliance for 32 hours and 18% abandoned before their first transaction. Onboarding NPS plunged from 56 to 22 and the Central Bank issued two letters demanding adherence to new suitability rules. I joined focus groups with 25 beta customers and heard from every single one that the pain was uploading the same document five times and waiting indefinitely.`,
    t: `I positioned myself as the single owner of the KYC/AML stream and promised the CEO to cut total time below six hours while keeping zero regulatory incidents and approving 90% of accounts with no manual touch. I also committed to customers: I sent emails under my name explaining exactly when they would receive an answer.`,
    a: `First, I invented the "KYC One-Click": I mapped all 47 Central Bank rules, grouped them into five macros, and built decision trees that I coded in Python. To guarantee customer obsession I replicated the flow in front of customers during usability labs and removed 11 screens. Second, I negotiated with compliance to integrate external data sets (credit bureau, Open Banking, gov.br) through APIs, taking personal responsibility by signing the access letter. Third, I created a negative-proof mechanism: if a document failed, I promised a 90-minute turnaround with personalized guidance that I reviewed myself. The toughest conflict came from Legal who wanted to keep manual checklists; I proved 63% of blocks were address false positives and agreed to pilot with 50 thousand accounts under my supervision. I also tuned the risk scoring by redefining weights for variable income and business accounts, cutting reanalysis by 74%.`,
    r: `Within 90 days onboarding time fell from 32 hours to 5h58, abandonment dropped from 18% to 4%, and NPS climbed back to 68. Fraud stayed at 0.04% and Central Bank letters went to zero. Next reached 2.1M active accounts in five months, added R$ 1.3B in balances, and increased transactional revenue by R$ 28M in the semester.`,
    l: `I learned that simplifying compliance means owning the conversation with regulators and customers at the same time. When I clarify how the rule works and provide predictability, friction disappears. I now port the KYC One-Click to seller onboarding: few steps, hour-level response, and auditable logs from the very first click.`,
  },
  fups: [
    {
      q: "Como voce convenceu compliance a abrir as APIs externas?",
      a: "Eu apresentei business case com reducao de 74% em reanalise e aceitei ser o ponto de contato unico com os provedores, assinando SLA de resposta em 90 minutos.",
      q_en: "How did you convince compliance to open external APIs?",
      a_en: "I presented a business case showing a 74% drop in reanalysis and agreed to be the sole point of contact with providers, signing a 90-minute response SLA."
    },
    {
      q: "Que sinal de customer obsession voce mais usou?",
      a: "Eu liguei pessoalmente para clientes que abandonavam e prometi retorno cronometrado; os depoimentos direcionaram quais telas eliminar.",
      q_en: "What customer-obsession signal did you rely on the most?",
      a_en: "I personally called customers who abandoned and promised timed callbacks; their feedback guided which screens to remove."
    },
    {
      q: "Como voce garantiu aderencia regulatoria apos automatizar?",
      a: "Eu criei trilha de auditoria com logs assinados digitalmente e agendei reunioes mensais com Bacen levando evidencias de falso positivo.",
      q_en: "How did you ensure regulatory adherence after automating?",
      a_en: "I built an audit trail with digitally signed logs and held monthly regulator meetings presenting false-positive evidence."
    },
    {
      q: "Qual trade-off financeiro voce assumiu?",
      a: "Eu reestruturei pricing para cobrir o investimento, cobrando 5 bps extra de clientes que desejavam onboarding imediato.",
      q_en: "What financial trade-off did you assume?",
      a_en: "I restructured pricing to cover the investment, adding 5 bps for customers demanding immediate onboarding."
    },
    {
      q: "Como voce manteve ratio EU:NOS acima de 3:1?",
      a: "Eu centralizei aprovacoes, escrevi pessoalmente as cartas ao Bacen e registrei todas as decisoes criticas como minhas no comite executivo.",
      q_en: "How did you keep the I:we ratio above 3:1?",
      a_en: "I centralized approvals, personally wrote the letters to the regulator, and documented every critical decision as mine in the executive committee."
    },
    {
      q: "Quais metricas voce acompanhou apos o go-live?",
      a: "SLA medio, abandono, NPS, fraude, reclamacoes no Bacen e volume de reanalise; eu enviava boletim semanal ao CEO.",
      q_en: "Which metrics did you track after go-live?",
      a_en: "Average SLA, abandonment, NPS, fraud, regulator complaints, and reanalysis volume; I sent a weekly report to the CEO."
    },
    {
      q: "Como voce tratou clientes de maior risco?",
      a: "Eu criei camada de grafos que detecta relacoes e valida automaticamente cada beneficiario, escalando para analise manual somente acima de score 0,7.",
      q_en: "How did you handle higher-risk customers?",
      a_en: "I built a graph layer detecting relationships and auto-validating beneficiaries, escalating to manual review only when the score exceeded 0.7."
    },
    {
      q: "Qual foi o maior aprendizado para pagamentos?",
      a: "Aplicar o conceito de one-click KYC para sellers e billers, garantindo experiencia simples e logs completos desde o inicio.",
      q_en: "What was the biggest takeaway for payments?",
      a_en: "Apply the one-click KYC concept to sellers and billers, ensuring simple experience and full logs from day one."
    },
    {
      q: "Que mecanismos evitam regressao do processo?",
      a: "Eu criei scorecard semanal com gatilho que pausa onboarding se SLA passar de 8 horas e exigi treino trimestral de compliance baseado em dados reais.",
      q_en: "What mechanisms prevent regression?",
      a_en: "I built a weekly scorecard with a trigger suspending onboarding if SLA exceeds eight hours and mandated quarterly compliance training based on real data."
    },
    {
      q: "Como voce compartilhou os resultados com o cliente final?",
      a: "Enviei e-mail personalizado destacando tempo medio de resposta e video explicando o novo fluxo, encerrando com mic-drop de que o risco ficava comigo.",
      q_en: "How did you share results with the end customer?",
      a_en: "I sent personalized emails highlighting response time and a video explaining the new flow, closing with a mic drop that I was taking the risk."
    }
  ]
};

export default case_2;
