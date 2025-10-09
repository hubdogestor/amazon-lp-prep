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
    s: `"Mandei o mesmo documento cinco vezes e ainda não foi aprovado." O e-mail de um cliente beta resumia o pesadelo do Next: 32 horas para abrir uma conta, 18% de abandono e NPS despencando para 22. Cada cliente perdido custava R$ 1.200 em CAC desperdiçado, e estávamos sangrando 2.400 prospects por semana. O problema? 47 regras do BACEN interpretadas por 12 analistas diferentes, criando um labirinto burocrático que destruía a experiência do cliente.`,
    t: `Diante dessa crise que ameaçava o lançamento do Next, assumi ownership total da simplificação regulatória. Minha missão era clara: reduzir o onboarding para menos de 6 horas, automatizar 90% das aprovações e transformar compliance de obstáculo em vantagem competitiva.`,
    a: `Eu inventei o "KYC One-Click" — uma solução radical que desafiou décadas de burocracia bancária. Primeiro, mapeei as 47 regras do BACEN e descobri que 80% dos casos podiam ser resolvidos com apenas 5 validações automatizadas. Segundo, criei árvores de decisão em Python que processavam documentos em tempo real, eliminando 11 dos 14 passos manuais. Terceiro, negociei diretamente com compliance a integração de APIs externas (Serasa, SPC, Receita Federal), assumindo pessoalmente o risco regulatório. Quando o jurídico resistiu, apresentei dados brutais: 63% dos bloqueios eram falsos positivos que custavam R$ 2.8M em retrabalho anual.`,
    r: `A invenção transformou radicalmente o onboarding. Em 90 dias, o tempo médio despencou de 32 para 5h58 (-81%), a taxa de abandono caiu para 4% e o NPS saltou para 68. Mais importante: desbloqueamos o crescimento do Next, que alcançou 2,1 milhões de contas em 18 meses, gerando R$ 28M em receita incremental. O mecanismo foi tão eficaz que foi replicado para 450 mil vendedores na Elo/Cielo, provando sua escalabilidade além do varejo.`,
    l: `Aprendi que simplificar compliance é uma decisão estratégica, não técnica. O framework "Simplify Compliance" que criei virou meu padrão: meça a dor do usuário, desafie o status quo com dados, assuma riscos calculados e transforme a solução em mecanismo escalável. Hoje, em pagamentos, aplico o mesmo princípio para reduzir fricção no onboarding de lojistas, sempre priorizando experiência sem comprometer segurança.`
  },
  en: {
    s: `"I uploaded the same document five times and it still wasn't approved." A beta customer's email summarized Next's nightmare: 32 hours to open an account, 18% abandonment, and NPS plummeting to 22. Each lost customer cost R$1,200 in wasted CAC, and we were bleeding 2,400 prospects weekly. The problem? 47 Central Bank rules interpreted by 12 different analysts, creating a bureaucratic maze that destroyed customer experience.`,
    t: `Faced with this crisis threatening Next's launch, I took total ownership of regulatory simplification. My mission was clear: reduce onboarding to under 6 hours, automate 90% of approvals, and transform compliance from obstacle to competitive advantage.`,
    a: `I invented "KYC One-Click" — a radical solution that challenged decades of banking bureaucracy. First, I mapped the 47 Central Bank rules and discovered that 80% of cases could be resolved with just 5 automated validations. Second, I created Python decision trees that processed documents in real-time, eliminating 11 of 14 manual steps. Third, I negotiated directly with compliance to integrate external APIs (Serasa, SPC, Federal Revenue), personally assuming regulatory risk. When legal resisted, I presented brutal data: 63% of blocks were false positives costing R$2.8M in annual rework.`,
    r: `The invention radically transformed onboarding. In 90 days, average time plummeted from 32 to 5h58 (-81%), abandonment rate fell to 4%, and NPS jumped to 68. More importantly: we unlocked Next's growth, reaching 2.1 million accounts in 18 months, generating R$28M in incremental revenue. The mechanism was so effective it was replicated for 450,000 sellers in Elo/Cielo, proving its scalability beyond retail.`,
    l: `I learned that simplifying compliance is a strategic decision, not a technical one. The "Simplify Compliance" framework I created became my standard: measure user pain, challenge status quo with data, take calculated risks, and turn the solution into a scalable mechanism. Today, in payments, I apply the same principle to reduce friction in merchant onboarding, always prioritizing experience without compromising security.`
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
