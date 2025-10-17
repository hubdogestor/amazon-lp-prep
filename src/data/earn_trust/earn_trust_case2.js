const case_2 = {
  id: "hsbc-bacen-communication",
  title: "Transformei relacionamento com Bacen com briefings executivos em 48h",
  title_pt: "Transformei relacionamento com Bacen com briefings executivos em 48h",
  title_en: "Transformed Central Bank relationship with 48-hour executive briefings",
  company: "HSBC Brasil",
  period: "07/2015-03/2016",
  isTopCase: true,
  isGoodCase: true,

  pt: {
    s: `Em julho de 2022, como Program Manager responsável por entregas regulatórias e pelo relacionamento com o Banco Central no HSBC Brasil, enfrentei a maior crise de conformidade da unidade. O Bacen apontou falhas recorrentes nas integrações de PLD: discrepâncias de R$ 1,1 bilhão na posição diária causadas por conciliações manuais dispersas em cinco sistemas. Doze áreas - risco, tecnologia, contabilidade, tesouraria, operações, compliance e produto - entraram em modo de crise. O relacionamento com o regulador despencou para 43/100 e, só naquele mês, recebemos 18 ofícios formais. O CFO foi direto: “Você já reconstruiu pontes, mas agora não há margem para erro.”`,

    t: `Assumi responsabilidade integral pelo dossiê regulatório com quatro metas: responder a qualquer solicitação do Bacen em até 48 horas, eliminar discrepâncias em 60 dias, elevar o score de relacionamento acima de 80 até março de 2023 e impedir qualquer interrupção de câmbio para 4.300 clientes corporativos.`,

    a: `Mapeei a origem das divergências e identifiquei que 219 dos 1.276 campos enviados ao Bacen vinham de planilhas manuais. O diretor de risco queria manter o processo legado por medo de auditorias passadas. Assumi publicamente a responsabilidade pelo novo pipeline automatizado e garanti ao CFO visibilidade diária das entregas. Montei um squad multifuncional patrocinado por ele com metas de conciliação contínua. Em paralelo, criei os “Bacen Briefings”: cada ofício gerava, em até seis horas, um resumo executivo de duas páginas com origem do dado, área responsável, impacto no cliente e data de entrega. Passei a enviar o mesmo material aos principais clientes em até 24 horas, explicando o desvio e o plano de correção. Internamente, institui a Regra das 3 Transparências - admitir o erro com número, detalhar a correção e informar a data de revalidação - o que reduziu o medo de exposição e fez outras áreas relatarem problemas cedo.

    Por fim, automatizei a reconciliação conectando o core financeiro e o sistema de risco via API com logs rastreáveis e alertas automáticos para divergências acima de 0,1%. Incluí redundância em ambiente espelhado e histórico de 18 meses, permitindo auditoria reversa em segundos. O tempo médio de conciliação caiu de 12 horas para 2, e o erro residual ficou abaixo de 0,02%. Transparência em tempo real virou mecanismo concreto de confiança.`,

    r: `Em 54 dias eliminamos todas as discrepâncias e respondemos 47 solicitações do Bacen em média 12 horas antes do prazo. Operações de câmbio seguiram sem interrupções, o score subiu de 43 para 86 e o processo foi encerrado sem multa. O CFO expandiu o formato para outras áreas reguladas e quatro departamentos adotaram o modelo. Entre clientes corporativos, o índice de confiança total saltou de 72% para 98%. Três anos depois o Bacen convidou o HSBC para o comitê de inovação em regtech - transformamos uma crise reputacional em vantagem competitiva.`,

    l: `Aprendi que Earn Trust começa quando fatos são comunicados antes de qualquer especulação. Transparência disciplinada, combinada com automação rastreável, tornou a confiança mensurável. Desde então replico o modelo em programas regulatórios: comunicar cedo, provar com dados e manter resultado auditável.`
  },

  en: {
    s: `In July 2022, as Program Manager responsible for regulatory deliveries and the Central Bank relationship at HSBC Brazil, I faced the bank’s most complex compliance crisis. The regulator detected repeated AML-reporting mismatches worth BRL 1.1B due to manual spreadsheets across five systems. Twelve areas--risk, technology, accounting, treasury, operations, compliance, and product--were mobilized. The relationship score with the regulator fell to 43/100 and 18 formal inquiries arrived in a single month. The CFO told me, “You’ve rebuilt bridges before, but this time there’s zero tolerance for error.”`,

    t: `I took full ownership with four objectives: answer any Central Bank request within 48 hours, eliminate all mismatches within 60 days, raise the relationship score above 80 by March 2023, and keep FX operations running for 4,300 corporate clients.`,

    a: `I traced discrepancies to 219 of 1,276 reported fields sourced from manual spreadsheets. The risk director resisted change, fearing exposure of legacy audits. I publicly offered to be accountable for the new automated pipeline and secured CFO sponsorship for a dedicated cross-functional squad with daily reconciliation goals and real-time dashboards. I also launched “Central Bank Briefings”: every request became a two-page executive memo showing data source, accountable owner, client impact, and delivery date, signed by me and sent within six hours to both the CFO and regulator. The same briefing went to top clients within 24 hours, reinforcing transparency.

    Finally, we automated reconciliation with an API between finance and risk systems, adding validation logs, mirrored redundancy, and 18 months of history. Alerts triggered when variance exceeded 0.1%. Cycle time dropped from 12 hours to 2, residual variance to 0.02%, and the regulator could audit results in seconds.`,

    r: `Within 54 days every mismatch was corrected and 47 Central Bank inquiries were delivered an average of 12 hours ahead of SLA. FX services continued uninterrupted, the relationship score climbed to 86, and the regulator closed the case with formal praise. The CFO extended the method to other regulatory fronts, four departments replicated it, and client trust jumped from 72% to 98%. Three years later we were invited to join the Central Bank’s regtech innovation forum--trust became a competitive asset.`,

    l: `I learned that trust in regulated environments is built through disciplined transparency plus auditable automation. Since then I’ve reused the same playbook across compliance programs: respond fast, share facts with every stakeholder, and make outcomes verifiable.`
  },

  fups: [
    {
      q: "Qual foi seu maior erro ou falha neste caso?",
      a: "Demorei duas semanas para envolver o diretor de risco na solução; confiança exige inclusão imediata dos principais stakeholders.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "I took two extra weeks to engage the risk director; trust demands early inclusion of key stakeholders."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Iniciaria a automação junto ao time de tecnologia sem esperar o ciclo trimestral da tesouraria, acelerando a redução de risco.",
      q_en: "What would you do differently today?",
      a_en: "I would start automation with the tech team without waiting for treasury's quarterly cycle, accelerating risk reduction."
    },
    {
      q: "Qual foi o obstáculo mais difícil de superar?",
      a: "Resistência política e medo de exposição. Venci criando rituais públicos de progresso e compartilhando dados brutos em reuniões abertas.",
      q_en: "What was the hardest obstacle to overcome?",
      a_en: "Political resistance and fear of exposure. Overcame it with public progress rituals and transparent data sharing."
    },
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "Multas regulatórias e ruptura com clientes de câmbio. Mitiguei com respostas em até 48 horas, briefings executivos e automação rastreável.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "Regulatory fines and FX client churn. Mitigated with <48h responses, executive briefings, and traceable automation."
    },
    {
      q: "Que dados você usou e qual foi a racional de cálculo?",
      a: "Mapeei 1.276 campos de envio ao Bacen, identifiquei 219 manuais e priorizei por impacto financeiro e risco regulatório.",
      q_en: "What data did you use and what was your calculation rationale?",
      a_en: "Mapped 1,276 fields sent to Central Bank, identified 219 manual ones, and prioritized by financial impact and regulatory risk."
    },
    {
      q: "Como você usou o aprendizado deste caso em outros contextos?",
      a: "Replicamos o modelo de briefings em quatro outras áreas reguladas, reduzindo tempo de resposta em 40% e elevando score médio.",
      q_en: "How did you apply this learning elsewhere?",
      a_en: "Replicated briefing model in four other regulated areas, cutting response time 40% and raising average scores."
    },
    {
      q: "Como você garantiu a adesão das 12 áreas envolvidas?",
      a: "Associei metas ao squad patrocinado pelo CFO e usei a Regra das 3 Transparências, que reduziu medo de exposição e incentivou cooperação.",
      q_en: "How did you secure adherence from all 12 areas?",
      a_en: "Linked goals to the CFO-sponsored squad and used the Three Transparencies Rule, reducing fear and driving cooperation."
    },
    {
      q: "De que forma os briefings impactaram a relação com o Bacen?",
      a: "Transformaram a percepção: o regulador elogiou a previsibilidade e passou a usar o material como referência para monitoramento.",
      q_en: "How did the briefings impact the regulator relationship?",
      a_en: "They shifted perception--the Central Bank praised the predictability and used the material as a monitoring reference."
    },
    {
      q: "Como você mediu o sucesso da Regra das 3 Transparências?",
      a: "Monitorei taxa de reporte espontâneo de problemas, que subiu de 12% para 78% em seis semanas.",
      q_en: "How did you measure success of the Three Transparencies Rule?",
      a_en: "Tracked spontaneous problem reporting rate, which rose from 12% to 78% in six weeks."
    },
    {
      q: "Qual foi o impacto de longo prazo do convite ao comitê de regtech do Bacen?",
      a: "Posicionou o HSBC como referência técnica, acelerou aprovações futuras e abriu canal direto com reguladores.",
      q_en: "What was the long-term impact of the regtech committee invitation?",
      a_en: "Positioned HSBC as technical reference, accelerated future approvals, and opened direct regulator channel."
    },
    {
      q: "Como você equilibrou transparência com proteção de informações confidenciais?",
      a: "Compartilhei agregados e tendências sem expor detalhes individuais; validei limites com jurídico e compliance antes.",
      q_en: "How did you balance transparency with confidential information protection?",
      a_en: "Shared aggregates and trends without exposing individual details; validated boundaries with legal and compliance upfront."
    },
    {
      q: "Quais sinais indicaram que a confiança do Bacen estava sendo restaurada?",
      a: "Redução de 18 para 3 ofícios mensais, elogios formais e convite para comitê técnico de inovação regulatória.",
      q_en: "Which signals showed Central Bank trust was being restored?",
      a_en: "Drop from 18 to 3 monthly inquiries, formal praise, and invitation to regulatory innovation technical committee."
    },
    {
      q: "Como o modelo de automação com API influenciou outras frentes do banco?",
      a: "Foi replicado em contabilidade e compliance, eliminando 340 planilhas manuais e reduzindo erros em 67%.",
      q_en: "How did the API automation model influence other bank areas?",
      a_en: "Replicated in accounting and compliance, eliminating 340 manual spreadsheets and cutting errors by 67%."
    },
    {
      q: "Qual foi a reação dos clientes corporativos ao processo de transparência?",
      a: "Índice de confiança total saltou de 72% para 98%; três clientes citaram transparência como diferencial competitivo.",
      q_en: "How did corporate clients react to the transparency process?",
      a_en: "Full trust index jumped from 72% to 98%; three clients cited transparency as competitive differentiator."
    },
    {
      q: "Como você manteve momentum após os primeiros 54 dias de correção?",
      a: "Instituí revisões mensais com CFO e Bacen, mantendo métricas públicas e rituais de governança contínua.",
      q_en: "How did you maintain momentum after the first 54 days?",
      a_en: "Instituted monthly CFO and Central Bank reviews, keeping public metrics and ongoing governance rituals."
    }
  ]
};

export default case_2;
