const disagree_and_commit = {
  id: "ser firme, discordar e se comprometer",
  name: "ser firme, discordar e se comprometer",
  principle: {
    title: "Ser firme, discordar e se comprometer",
    title_en: "Have Backbone; Disagree and Commit",
    description: "Os líderes são obrigados a desafiar respeitosamente as decisões quando discordam, mesmo quando isso é desconfortável. Os líderes têm convicção e são tenazes. Uma vez que uma decisão é determinada, eles se comprometem totalmente.",
    description_en: "Leaders are obligated to respectfully challenge decisions when they disagree, even when doing so is uncomfortable or exhausting. Leaders have conviction and are tenacious. Once a decision is determined, they commit wholly.",
    icon: "💪"
  },
  cases: [
    {
      "id": "decisao-arquitetura-bancaria-next-vs-bradesco",
      "title": "Decisão de Arquitetura Bancária Next vs. Bra - Bradesco (08/2016–12/2017)",
      "title_pt": "Decisão de Arquitetura Bancária Next vs. Bra",
      "title_en": "Banking Architecture Decision Next vs. Bra",
      "company": "Bradesco",
      "period": "08/2016–12/2017",
      "isTopCase": true,
      "pt": {
        "s": "No desenho da arquitetura do Banco Digital Next, times de segurança defendiam on-premise total; times de produto, nuvem total. A polarização travou decisões críticas por 3 semanas com deadline regulatório se aproximando.",
        "t": "Minha missão era conduzir a decisão técnica com base em fatos, discordar frontalmente quando necessário e, após a decisão, unir todos sob um único compromisso de execução, independente de preferências pessoais.",
        "a": "Liderei um processo decisório estruturado (ADR) com critérios objetivos e pesos transparentes. Defendi arquitetura híbrida com dados de latência, compliance e TTM, mesmo contra preferência da maioria. Houve discordâncias duras; registrei todas as objeções e tomei a decisão como DRI. Depois, publiquei o 'Commit Plan': quem faz o quê, quando, independendo de opiniões.",
        "r": "Decisão implementada em 12 semanas, time 100% alinhado na execução, lançamento dentro do prazo regulatório e zero reabertura do tema. Architecture decision score 9.5/10 em retrospectiva 6 meses depois. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que backbone é discordar com respeito e assumir ownership da decisão final. Compromisso verdadeiro é executar a decisão como se fosse sua escolha, mesmo quando não era sua preferência. Em retrospectiva, eu poderia ter documentado trade-offs melhor upfront, e hoje sempre incluo análise de alternatives rejected no ADR."
      },
      "en": {
        "s": "In designing Next Digital Bank's architecture, security teams defended total on-premise; product teams, total cloud. Polarization blocked critical decisions for 3 weeks with regulatory deadline approaching.",
        "t": "My mission was to lead technical decision based on facts, disagree frontally when necessary and, after decision, unite everyone under single execution commitment, regardless of personal preferences.",
        "a": "I led structured decision process (ADR) with objective criteria and transparent weights. I defended hybrid architecture with latency, compliance and TTM data, even against majority preference. There were hard disagreements; I recorded all objections and made decision as DRI. Then, I published 'Commit Plan': who does what, when, regardless of opinions.",
        "r": "Decision implemented in 12 weeks, team 100% aligned in execution, launch within regulatory deadline and zero theme reopening. Architecture decision score 9.5/10 in retrospective 6 months later. (with baseline, target and period documented in executive report).",
        "l": "I learned that backbone is disagreeing with respect and assuming ownership of final decision. True commitment is executing decision as if it were your choice, even when it wasn't your preference. In retrospect, I could have documented trade-offs better upfront, and today I always include analysis of alternatives rejected in ADR."
      },
      "fups": [
        {
          "q": "Como você estruturou o processo ADR para ser objetivo e não político?",
          "q_en": "How did you structure the ADR process to be objective and not political?",
          "a": "Critérios definidos upfront: security (30%), performance (25%), cost (25%), TTM (20%). Scoring blind de cada alternativa, depois revelação coletiva. Data-driven decisions, não opinion-driven.",
          "a_en": "Criteria defined upfront: security (30%), performance (25%), cost (25%), TTM (20%). Blind scoring of each alternative, then collective reveal. Data-driven decisions, not opinion-driven."
        },
        {
          "q": "Qual foi a discordância mais difícil que você teve que enfrentar?",
          "q_en": "What was the hardest disagreement you had to face?",
          "a": "CTO queria cloud-first, eu defendi hybrid-first com dados de compliance. Discordei publicamente em reunião executiva, apresentei analysis detalhado e mantive posição. Respectful but firm disagreement.",
          "a_en": "CTO wanted cloud-first, I defended hybrid-first with compliance data. I disagreed publicly in executive meeting, presented detailed analysis and held position. Respectful but firm disagreement."
        },
        {
          "q": "Como você garantiu commitment total após decision controversa?",
          "q_en": "How did you ensure total commitment after controversial decision?",
          "a": "Public commitment ritual: cada lead verbalizou 'I commit to execute this decision' e assinou o plano. Skin in the game através de metrics de execução atrelados a performance review.",
          "a_en": "Public commitment ritual: each lead verbalized 'I commit to execute this decision' and signed the plan. Skin in the game through execution metrics tied to performance review."
        },
        {
          "q": "Como você lidou com quem continuou questionando após a decisão?",
          "q_en": "How did you handle those who kept questioning after the decision?",
          "a": "'Disagree and commit means commit'. Uma conversa 1:1 clara: 'Sua objeção foi ouvida e registrada. Agora precisamos de 100% execution energy'. Redirect energy to execution.",
          "a_en": "'Disagree and commit means commit'. One clear 1:1 conversation: 'Your objection was heard and recorded. Now we need 100% execution energy'. Redirect energy to execution."
        },
        {
          "q": "Que ferramentas você usou para documentar discordâncias respeitosamente?",
          "q_en": "What tools did you use to document disagreements respectfully?",
          "a": "ADR template estruturado: Context, Options Considered, Decision, Consequences. Seção específica 'Dissenting Opinions' com rationale de cada posição. Transparency builds trust.",
          "a_en": "Structured ADR template: Context, Options Considered, Decision, Consequences. Specific 'Dissenting Opinions' section with rationale of each position. Transparency builds trust."
        },
        {
          "q": "Como você evitou que disagreement virasse conflito pessoal?",
          "q_en": "How did you prevent disagreement from becoming personal conflict?",
          "a": "Attack ideas, not people: 'I disagree with this approach because...' nunca 'You're wrong because...'. Focus no problema, não na pessoa. Professional disagreement etiquette.",
          "a_en": "Attack ideas, not people: 'I disagree with this approach because...' never 'You're wrong because...'. Focus on problem, not person. Professional disagreement etiquette."
        },
        {
          "q": "Qual foi o momento mais desconfortável durante o processo de disagreement?",
          "q_en": "What was the most uncomfortable moment during the disagreement process?",
          "a": "Discordar do sponsor executivo na frente de 15 pessoas. Heart racing, mas dados eram claros. Uncomfortable but necessary. Leadership é about doing right thing, not comfortable thing.",
          "a_en": "Disagreeing with executive sponsor in front of 15 people. Heart racing, but data was clear. Uncomfortable but necessary. Leadership is about doing right thing, not comfortable thing."
        },
        {
          "q": "Como você mediu se o commitment foi genuíno ou apenas superficial?",
          "q_en": "How did you measure if commitment was genuine or just superficial?",
          "a": "Actions speak louder: tracking de sprint velocity, quality of deliverables, proactive problem-solving e absence of backdoor complaints. Behavior reveals true commitment level.",
          "a_en": "Actions speak louder: tracking sprint velocity, quality of deliverables, proactive problem-solving and absence of backdoor complaints. Behavior reveals true commitment level."
        },
        {
          "q": "Que lição sobre 'backbone' esse projeto te ensinou?",
          "q_en": "What lesson about 'backbone' did this project teach you?",
          "a": "Backbone não é about being right, é about doing right thing baseado em evidence. Sometimes you're wrong, mas process matters mais que ego. Intellectual honesty é foundation.",
          "a_en": "Backbone isn't about being right, it's about doing right thing based on evidence. Sometimes you're wrong, but process matters more than ego. Intellectual honesty is foundation."
        },
        {
          "q": "Se tivesse uma situação similar hoje, o que faria diferente?",
          "q_en": "If you had a similar situation today, what would you do differently?",
          "a": "Mais stakeholder pre-alignment antes do decision point, better change management communication e follow-up mais estruturado pós-commit. Process refinement através de experience.",
          "a_en": "More stakeholder pre-alignment before decision point, better change management communication and more structured post-commit follow-up. Process refinement through experience."
        }
      ]
    },
    {
      "title": "Pivot de Produto vs. Persistência - Woop/Unimed (MM/AAAA-MM/AAAA)",
      "title_pt": "Pivot de Produto vs. Persistência",
      "title_en": "Product Pivot vs. Persistence Decision",
      "company": "Woop/Unimed",
      "period": "06/2019–12/2021",
      "pt": {
        "s": "A Woop/Unimed estava investindo R$ 2M+ em feature de telemedicina que não estava ganhando tração após 4 meses. A diretoria queria continuar investindo; dados mostravam baixa adoção (8% vs. 25% esperado).",
        "t": "Minha missão era analisar objetivamente se deveríamos perseverar ou pivotar, discordar da continuidade se necessário e, independente da decisão final, executar com total compromisso.",
        "a": "Conduzi análise profunda com user research, cohort analysis e competitive intelligence. Discordei frontalmente da continuidade em board meeting, apresentando dados de baixa market-fit e propondo pivot para funcionalidade híbrida. Após decisão de continuar mais 2 meses, me comprometi 100% com execution otimizada.",
        "r": "Após 2 meses com minha execução total, dados confirmaram análise inicial. Pivot aprovado e nova direção entregue em 6 semanas com 35% adoption rate. Economia de R$ 800k ao evitar bad money after good. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que disagreement baseado em dados é responsabilidade de liderança, mesmo quando unpopular. Commitment após decisão contrária demonstra profissionalismo e pode até validar sua análise original. Em retrospectiva, eu poderia ter proposto experiments menores antes de full pivot recommendation, e hoje sempre sugiro low-risk validation paths primeiro."
      },
      "en": {
        "s": "Woop/Unimed was investing R$ 2M+ in telemedicine feature that wasn't gaining traction after 4 months. The board wanted to continue investing; data showed low adoption (8% vs. 25% expected).",
        "t": "My mission was to objectively analyze whether we should persevere or pivot, disagree with continuity if necessary and, regardless of final decision, execute with total commitment.",
        "a": "I conducted deep analysis with user research, cohort analysis and competitive intelligence. I frontally disagreed with continuity in board meeting, presenting low market-fit data and proposing pivot to hybrid functionality. After decision to continue 2 more months, I committed 100% with optimized execution.",
        "r": "After 2 months with my total execution, data confirmed initial analysis. Pivot approved and new direction delivered in 6 weeks with 35% adoption rate. Saved R$ 800k by avoiding bad money after good. (with baseline, target and period documented in executive report).",
        "l": "I learned that data-based disagreement is leadership responsibility, even when unpopular. Commitment after contrary decision shows professionalism and may even validate your original analysis. In retrospect, I could have proposed smaller experiments before full pivot recommendation, and today I always suggest low-risk validation paths first."
      },
      "fups": [
        {
          "q": "Como você preparou data compelling enough para discordar do board?",
          "q_en": "How did you prepare data compelling enough to disagree with the board?",
          "a": "Triangulação: user analytics, customer interviews, competitive benchmarks e financial modeling. Multiple data sources convergindo na mesma conclusão. Bulletproof analysis for uncomfortable conversations.",
          "a_en": "Triangulation: user analytics, customer interviews, competitive benchmarks and financial modeling. Multiple data sources converging on same conclusion. Bulletproof analysis for uncomfortable conversations."
        },
        {
          "q": "Qual foi a reação do board quando você discordou publicamente?",
          "q_en": "What was the board's reaction when you disagreed publicly?",
          "a": "Initial surprise, depois appreciation pela thoroughness. 'Nobody likes bad news, mas everybody respects honest analysis'. Courage to disagree earned respect, not resentment.",
          "a_en": "Initial surprise, then appreciation for thoroughness. 'Nobody likes bad news, but everybody respects honest analysis'. Courage to disagree earned respect, not resentment."
        },
        {
          "q": "Como você manteve team motivation depois de discordar da estratégia?",
          "q_en": "How did you maintain team motivation after disagreeing with strategy?",
          "a": "Transparency com o time: 'I disagreed based on data, mas nossa job é executar excellently'. Focus em learning fast, não em proving right. Team appreciates honesty.",
          "a_en": "Transparency with team: 'I disagreed based on data, but our job is to execute excellently'. Focus on learning fast, not proving right. Team appreciates honesty."
        },
        {
          "q": "Como você executou com total commitment algo que acreditava estar errado?",
          "q_en": "How did you execute with total commitment something you believed was wrong?",
          "a": "Reframe mental: 'My job é provar que estou errado o mais rápido possível'. Optimized experiments para fast learning. Execute to disprove, não to sabotage.",
          "a_en": "Mental reframe: 'My job is to prove I'm wrong as fast as possible'. Optimized experiments for fast learning. Execute to disprove, not to sabotage."
        },
        {
          "q": "Que métricas você usou para track success durante os 2 meses extras?",
          "q_en": "What metrics did you use to track success during the extra 2 months?",
          "a": "Weekly cohorts de adoption, user engagement depth, churn rate e qualitative feedback score. Leading indicators + lagging indicators para decision making rápido.",
          "a_en": "Weekly adoption cohorts, user engagement depth, churn rate and qualitative feedback score. Leading indicators + lagging indicators for quick decision making."
        },
        {
          "q": "Como você propôs o pivot sem parecer 'I told you so'?",
          "q_en": "How did you propose the pivot without seeming 'I told you so'?",
          "a": "'Data tells the story': apresentei learnings objetivos, options analysis e recommended next steps. Focus no future action, não no past disagreement. Forward-looking leadership.",
          "a_en": "'Data tells the story': presented objective learnings, options analysis and recommended next steps. Focus on future action, not past disagreement. Forward-looking leadership."
        },
        {
          "q": "Qual foi o maior challenge pessoal em executar algo que você não acreditava?",
          "q_en": "What was the biggest personal challenge in executing something you didn't believe in?",
          "a": "Manter team energy high enquanto privately acreditava no pivot. Leadership é about team success, not personal vindication. Separate belief from execution excellence.",
          "a_en": "Keeping team energy high while privately believing in pivot. Leadership is about team success, not personal vindication. Separate belief from execution excellence."
        },
        {
          "q": "Como você comunicou o eventual pivot para quem apoiava a estratégia original?",
          "q_en": "How did you communicate the eventual pivot to those who supported original strategy?",
          "a": "Evidence-based narrative: 'Learnings indicam new opportunity'. Pivot como evolution, não admission of failure. Frame mudança como growth, não como mistake.",
          "a_en": "Evidence-based narrative: 'Learnings indicate new opportunity'. Pivot as evolution, not admission of failure. Frame change as growth, not as mistake."
        },
        {
          "q": "Que lesson sobre 'disagree and commit' esse projeto te ensinou?",
          "q_en": "What lesson about 'disagree and commit' did this project teach you?",
          "a": "Sometimes você está right, sometimes wrong, mas commitment to process e team sempre matters. Intellectual integrity + execution excellence = leadership credibility.",
          "a_en": "Sometimes you're right, sometimes wrong, but commitment to process and team always matters. Intellectual integrity + execution excellence = leadership credibility."
        },
        {
          "q": "Se uma situação similar acontecesse hoje, como você abordaria diferente?",
          "q_en": "If a similar situation happened today, how would you approach it differently?",
          "a": "Smaller experiments upfront, mais frequent checkpoint meetings e better stakeholder expectation setting. Disagree and commit funciona melhor com incremental decisions.",
          "a_en": "Smaller experiments upfront, more frequent checkpoint meetings and better stakeholder expectation setting. Disagree and commit works better with incremental decisions."
        }
      ]
    }
  ]
};

export default disagree_and_commit;