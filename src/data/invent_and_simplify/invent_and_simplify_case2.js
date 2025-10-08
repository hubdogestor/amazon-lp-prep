// Case 2 - invent_and_simplify
const case_2 = {
  id: "bradesco-next-compliance-simplification",
  title: "Inventei trilha KYC one-click que reduziu onboarding Next de 32 para 6 horas",
  title_pt: "Inventei trilha KYC one-click que reduziu onboarding Next de 32 para 6 horas",
  title_en: "Invented one-click KYC stream that cut Next onboarding from 32 to 6 hours",
  company: "Bradesco",
  period: "08/2016-05/2017",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: "“Mandei o mesmo documento cinco vezes. Onde ele está?” O e-mail de um cliente beta sintetizava o problema brutal do relançamento do Next em 2021: 41% das contas piloto ficavam presas em compliance por 32 horas, 18% desistiam antes da primeira transação e o NPS de onboarding despencou de 56 para 22. Os riscos eram altos: o BACEN abriu dois ofícios cobrando aderência a novas regras de adequação, 25 clientes beta relatavam a mesma frustração em grupos focais e o lançamento oficial estava em perigo. Meu desafio era inventar uma solução que simplificasse 47 regras do BACEN sem comprometer a segurança regulatória ou gerar um único incidente.",
    t: "Diante desse cenário, eu me posicionei como o único responsável pela esteira de KYC/AML e prometi ao CEO reduzir o tempo total para menos de 6 horas, mantendo zero incidentes regulatórios e aprovando 90% das contas sem intervenção manual. Para isso, analisei as 47 regras do Bacen em detalhe: 12 eram sobre validação de CPF/CNPJ, 8 sobre comprovação de renda, 11 sobre adequação financeira, 9 sobre listas de sanções internacionais e 7 sobre documentação de endereço. Percebi que 63% dessas validações eram redundantes ou poderiam ser automatizadas via APIs, um insight que me levou a me comprometer diretamente com os clientes, enviando e-mails em meu nome para explicar em quanto tempo eles teriam uma resposta.",
    a: "Para colocar o plano em prática, primeiro, eu inventei o “KYC One-Click”: mapeei as 47 regras, agrupei-as em 5 macrocategorias e criei árvores de decisão automatizadas que eu mesmo codifiquei em Python. Para garantir a obsessão pelo cliente, repliquei o fluxo em laboratórios de usabilidade, removendo 11 telas que os clientes chamavam de “tortura”. Segundo, negociei com a área de compliance para integrar bases de dados externas via APIs, assumindo o risco pessoal ao assinar o termo de responsabilidade por acesso a dados sensíveis e me comprometendo a responder pessoalmente por qualquer incidente. Terceiro, criei um mecanismo de “prova negativa”: se um documento falhasse, eu prometia um retorno em 90 minutos com orientação personalizada, que eu mesmo revisava inicialmente. O maior conflito veio do jurídico, que queria manter um checklist manual; eu os convenci com dados, mostrando que 63% dos bloqueios eram falsos positivos, e aceitei pilotar a solução com 50 mil contas sob minha supervisão direta.",
    r: "Como resultado, em 90 dias, o tempo de onboarding caiu de 32 horas para 5h58 (uma redução de 81%), o abandono despencou de 18% para 4% e o NPS recuperou-se de 22 para 68. A taxa de fraude permaneceu em 0,04%, abaixo do benchmark de mercado, e zeramos os ofícios do Bacen. O Next alcançou 2,1 milhões de contas ativas em cinco meses, adicionando R$ 1,3 bilhão em saldos e aumentando a receita transacional em R$ 28 milhões no semestre. A longo prazo, o mecanismo foi replicado para o onboarding de 450 mil vendedores no ecossistema Elo/Cielo, com resultados igualmente expressivos.",
    l: "Com essa experiência, aprendi que simplificar o compliance exige assumir o discurso com o regulador e com o cliente simultaneamente, transformando atrito em confiança. Criei um framework chamado “Simplify Compliance”, com quatro princípios que aplico até hoje: medir a dor do usuário objetivamente, desafiar o status quo com evidências, assumir o risco pessoalmente para gerar confiança e replicar o mecanismo com um playbook. Esse foi o meu mic drop: provar que compliance não é inimigo da obsessão pelo cliente, mas um aliado quando você assume a responsabilidade e demonstra que a simplificação, na verdade, reduz o risco real."
  },
  en: {
    s: "\"I uploaded the same document five times. Where is it?\" A beta customer's email synthesized the brutal problem of Next's 2021 relaunch: 41% of pilot accounts were stuck in compliance for 32 hours, 18% abandoned before their first transaction, and the onboarding NPS plunged from 56 to 22. The stakes were high: the Central Bank had issued two official letters demanding adherence to new suitability rules, 25 beta customers were reporting the same frustration in focus groups, and the official launch was at risk. My challenge was to invent a solution that simplified 47 Central Bank rules without compromising regulatory security or generating a single incident.",
    t: "Faced with this scenario, I positioned myself as the single owner of the KYC/AML stream and promised the CEO to cut the total time to less than 6 hours, while maintaining zero regulatory incidents and approving 90% of accounts with no manual intervention. To do this, I analyzed the 47 Central Bank rules in detail: 12 were about CPF/CNPJ validation, 8 about income proof, 11 about financial suitability, 9 about international sanctions lists, and 7 about address documentation. I realized that 63% of these validations were redundant or could be automated via APIs, an insight that led me to commit directly to customers, sending emails under my own name to explain how long it would take to get an answer.",
    a: "To put the plan into action, first, I invented the \"KYC One-Click\": I mapped the 47 rules, grouped them into 5 macro-categories, and created automated decision trees that I coded myself in Python. To ensure customer obsession, I replicated the flow in usability labs, removing 11 screens that customers called \"torture.\" Second, I negotiated with the compliance department to integrate external databases via APIs, taking personal risk by signing the liability waiver for accessing sensitive data and committing to personally answer for any incident. Third, I created a \"negative proof\" mechanism: if a document failed, I promised a 90-minute turnaround with personalized guidance, which I initially reviewed myself. The biggest conflict came from the legal department, which wanted to keep a manual checklist; I convinced them with data, showing that 63% of the blocks were false positives, and agreed to pilot the solution with 50,000 accounts under my direct supervision.",
    r: "As a result, within 90 days, the onboarding time fell from 32 hours to 5h58 (an 81% reduction), abandonment plummeted from 18% to 4%, and the NPS recovered from 22 to 68. The fraud rate remained at 0.04%, below the market benchmark, and we eliminated the Central Bank's official letters. Next reached 2.1 million active accounts in five months, adding R$1.3 billion in balances and increasing transactional revenue by R$28 million in the semester. In the long term, the mechanism was replicated for the onboarding of 450,000 sellers in the Elo/Cielo ecosystem, with equally impressive results.",
    l: "With this experience, I learned that simplifying compliance requires owning the narrative with both the regulator and the customer simultaneously, turning friction into trust. I created a framework called \"Simplify Compliance,\" with four principles I still apply today: measure user pain objectively, challenge the status quo with evidence, take personal risk to build trust, and replicate the mechanism with a playbook. This was my mic drop: proving that compliance is not an enemy of customer obsession, but an ally when you take ownership and demonstrate that simplification actually reduces real risk."
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
