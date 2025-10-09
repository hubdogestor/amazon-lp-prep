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
    s: `O e-mail de um cliente beta, \"Mandei o mesmo documento cinco vezes\", resumia a crise no Next: o Process Cycle Time do onboarding era de 32 horas, gerando 18% de abandono e um NPS de 22. Isso quebrava a experiência do cliente, o primeiro pilar do flywheel da Amazon. O atrito regulatório estava impedindo o crescimento do tráfego de novos clientes e a expansão da seleção de produtos.`,
    t: `Eu me posicionei como a ponte entre a dor do cliente e a decisão de negócio. Prometi ao CEO reduzir o Process Cycle Time para menos de 6 horas e aumentar o Automation Rate para 90% das aprovações, transformando o problema em uma alavanca para o flywheel. Meu objetivo era tomar uma decisão de negócio acionável que simplificasse 47 regras do BACEN.`,
    a: `Para isso, inventei o “KYC One-Click”. Mapeei as 47 regras, agrupei-as em 5 macrocategorias e criei árvores de decisão automatizadas em Python, uma simplificação radical. Para ser a ponte com o negócio, negociei com compliance a integração de APIs externas, assumindo o risco pessoalmente para gerar confiança. O maior conflito veio do jurídico, mas usei meu julgamento e os dados (63% dos bloqueios eram falsos positivos) para provar que a simplificação, na verdade, reduzia o risco real e melhorava a experiência do cliente.`,
    r: `Minha invenção girou o flywheel. Em 90 dias, o Process Cycle Time caiu para 5h58 (redução de 81%), o Automation Rate atingiu 90% e o Customer Satisfaction (NPS) recuperou para 68. A melhor experiência do cliente fez o abandono despencar para 4%, o que aumentou o tráfego e permitiu ao Next alcançar 2,1 milhões de contas, acelerando a receita em R$ 28 milhões. O mecanismo foi replicado para 450 mil vendedores na Elo/Cielo, provando sua escalabilidade.`,
    l: `Aprendi que simplificar o compliance é uma decisão de negócio que impulsiona o flywheel. Criei um framework, “Simplify Compliance”, que uso até hoje: 1) Meça a dor do usuário com métricas como Process Cycle Time; 2) Desafie o status quo com dados; 3) Assuma o risco para ser a ponte e gerar confiança; 4) Transforme a invenção em um mecanismo escalável. Foi assim que provei que compliance e customer obsession são aliados para gerar valor real para a empresa.`
  },
  en: {
    s: `A beta customer\'s email, \"I uploaded the same document five times,\" summarized the crisis at Next: the onboarding Process Cycle Time was 32 hours, leading to an 18% drop-off rate and an NPS of 22. This was breaking the customer experience, the first pillar of the Amazon flywheel. Regulatory friction was hindering new customer traffic growth and the expansion of product selection.`,
    t: `I positioned myself as the bridge between the customer\'s pain and the business decision. I promised the CEO to reduce the Process Cycle Time to under 6 hours and increase the Automation Rate to 90% of approvals, turning the problem into a lever for the flywheel. My goal was to make an actionable business decision that simplified 47 Central Bank rules.`,
    a: `To do this, I invented the “KYC One-Click.” I mapped the 47 rules, grouped them into 5 macro-categories, and created automated decision trees in Python, a radical simplification. To be the bridge to the business, I negotiated with compliance to integrate external APIs, taking personal risk to build trust. The biggest conflict came from legal, but I used my judgment and data (63% of blocks were false positives) to prove that simplification actually reduced real risk and improved the customer experience.`,
    r: `My invention spun the flywheel. In 90 days, the Process Cycle Time dropped to 5h58 (an 81% reduction), the Automation Rate reached 90%, and Customer Satisfaction (NPS) recovered to 68. The better customer experience caused the drop-off rate to plummet to 4%, which increased traffic and allowed Next to reach 2.1 million accounts, accelerating revenue by R$28 million. The mechanism was replicated for 450,000 sellers in the Elo/Cielo ecosystem, proving its scalability.`,
    l: `I learned that simplifying compliance is a business decision that drives the flywheel. I created a framework, “Simplify Compliance,” that I still use today: 1) Measure user pain with metrics like Process Cycle Time; 2) Challenge the status quo with data; 3) Take personal risk to be the bridge and build trust; 4) Turn the invention into a scalable mechanism. That\'s how I proved that compliance and customer obsession are allies in generating real value for the company.`
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

