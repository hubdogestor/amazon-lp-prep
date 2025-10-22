// Case 4 - are_right_a_lot
const case_4 = {
  id: "sicredi-wrong-fraud-model-pivot",
  title: "Eu Estava Errado Sobre Modelo de Fraude: Tive Humildade para Pivotar e Aprender com Analista Junior",
  title_pt: "Eu Estava Errado Sobre Modelo de Fraude: Tive Humildade para Pivotar e Aprender com Analista Junior",
  title_en: "I Was Wrong About Fraud Model: Had Humility to Pivot and Learn from Junior Analyst",
  company: "Sicredi",
  period: "02/2021-05/2021",
  keywords: "#erro | #humildade | #pivot | #aprender-com-time | #corrigir-curso",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: "Em março de 2021, dez dias após o lançamento do novo modelo de fraude em Pix que eu havia arquitetado, os resultados eram catastróficos. Com 15 anos de experiência em pagamentos, eu estava 95% confiante em um modelo baseado em valor e frequência, mas os dados eram brutais: 23% de falsos positivos (clientes legítimos bloqueados) e 34% de fraudes reais não detectadas. O modelo, que custou R$ 180 mil, estava falhando. Pior, uma analista de dados júnior, Marina, tinha evidências de que eu focara nas variáveis erradas. Minha reação inicial foi defensiva. Eu estava diante de uma escolha: proteger meu ego ou salvar a empresa de R$ 600 mil em perdas projetadas.",
    t: "Como Head de Pagamentos, minha responsabilidade era entregar um modelo de fraude eficaz. Isso significava que eu tinha o dever de reconhecer rapidamente quando minha abordagem estava errada e pivotar para a solução correta, mesmo que isso implicasse admitir publicamente um erro de R$ 180 mil e questionar minha própria experiência.",
    a: "No 11º dia, convoquei um post-mortem de emergência. Nele, Marina, com apenas 9 meses de casa, apresentou sua análise: 78% das fraudes eram de valores baixos, de madrugada, para beneficiários com relacionamento recente. Meu modelo estava olhando para o lado oposto. Quando a confrontei sobre a validade da variável 'horário', ela me mostrou os dados: 67% dos fraudadores agiam de madrugada, contra apenas 3% dos clientes legítimos. Ela estava certa. No dia seguinte, tomei três decisões: (1) pausei o modelo em produção imediatamente; (2) promovi Marina a co-líder técnica do novo modelo; (3) dei a ela autonomia total para liderar o redesenho. Em uma reunião com a diretoria, assumi publicamente: 'Eu estava errado. Marina identificou o padrão correto e agora vai liderar o pivô'. Com o apoio do CTO, que viu a ação como a essência de 'Are Right, a Lot', eu passei a trabalhar PARA Marina, removendo seus impedimentos e aprendendo com suas técnicas de feature engineering, que eu desconhecia.",
    r: "O novo modelo, liderado por Marina, foi para produção em maio e os resultados se inverteram. A taxa de falsos positivos caiu de 23% para 4,2%, e a detecção de fraudes subiu de 66% para 91%. Isso nos economizou R$ 1,8 milhão em fraudes evitadas no primeiro mês, o dobro do modelo antigo. O NPS dos clientes que haviam sido bloqueados indevidamente saltou de 12 para 58. Marina foi promovida seis meses antes do esperado, e eu fiz questão de creditá-la em um all-hands para 400 pessoas. O caso se tornou um exemplo de cultura, e a prática de 'challenge sessions' que implementei depois salvou outros dois projetos de arquitetura.",
    l: "Aprendi que 'Are Right, a Lot' não é sobre nunca errar, mas sobre a velocidade e a humildade com que você corrige o erro. É sobre criar um sistema onde as melhores ideias vencem, independentemente da hierarquia. Pausar o projeto errado nos custou R$ 180 mil, mas insistir no erro nos custaria R$ 600 mil a mais. O aprendizado mais profundo foi que, para estar certo mais vezes, preciso criar um ambiente onde eu possa ser corrigido por qualquer pessoa, a qualquer momento. É sobre priorizar o resultado, não o ego."
  },
  en: {
    s: "In March 2021, ten days after the launch of the new Pix fraud model that I had architected, the results were catastrophic. With 15 years of experience in payments, I was 95% confident in a model based on value and frequency, but the data was brutal: 23% false positives (legitimate customers blocked) and 34% of real frauds undetected. The model, which cost BRL 180,000, was failing. Worse, a junior data analyst, Marina, had evidence that I had focused on the wrong variables. My initial reaction was defensive. I was faced with a choice: protect my ego or save the company from a projected BRL 600,000 in losses.",
    t: "As Head of Payments, my responsibility was to deliver an effective fraud model. This meant I had a duty to quickly recognize when my approach was wrong and pivot to the correct solution, even if it meant publicly admitting to a BRL 180,000 mistake and questioning my own experience.",
    a: "On the 11th day, I called an emergency post-mortem. In it, Marina, with only 9 months at the company, presented her analysis: 78% of frauds were of low value, at dawn, to beneficiaries with a recent relationship. My model was looking in the opposite direction. When I confronted her about the validity of the 'time' variable, she showed me the data: 67% of fraudsters acted at dawn, versus only 3% of legitimate customers. She was right. The next day, I made three decisions: (1) I immediately paused the model in production; (2) I promoted Marina to technical co-lead of the new model; (3) I gave her full autonomy to lead the redesign. In a meeting with the board, I publicly owned up: 'I was wrong. Marina identified the correct pattern and will now lead the pivot.' With the support of the CTO, who saw the action as the essence of 'Are Right, a Lot,' I began to work FOR Marina, removing her impediments and learning from her feature engineering techniques, which I was unfamiliar with.",
    r: "The new model, led by Marina, went into production in May and the results were reversed. The false positive rate dropped from 23% to 4.2%, and fraud detection rose from 66% to 91%. This saved us BRL 1.8 million in avoided frauds in the first month, double the old model. The NPS of customers who had been incorrectly blocked jumped from 12 to 58. Marina was promoted six months ahead of schedule, and I made sure to credit her in an all-hands meeting for 400 people. The case became a cultural example, and the 'challenge sessions' practice I implemented later saved two other architecture projects.",
    l: "I learned that 'Are Right, a Lot' is not about never being wrong, but about the speed and humility with which you correct the error. It's about creating a system where the best ideas win, regardless of hierarchy. Pausing the wrong project cost us BRL 180,000, but insisting on the mistake would have cost us an additional BRL 600,000. The deepest learning was that to be right more often, I need to create an environment where I can be corrected by anyone, at any time. It's about prioritizing the outcome, not the ego."
  },
  fups: [
    {
      q: "Qual foi seu maior erro ou falha nesse caso?",
      a: "Meu maior erro foi a arrogância de aplicar minha experiência passada sem validar as premissas no novo contexto. Eu presumi que fraude no Pix se comportaria como em sistemas legados, o que me levou a arquitetar um modelo de R$ 180 mil sobre as variáveis erradas, ignorando os dados que Marina, uma analista júnior, já possuía.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "My biggest mistake was the arrogance of applying my past experience without validating the assumptions in the new context. I assumed that Pix fraud would behave like in legacy systems, which led me to architect a BRL 180,000 model on the wrong variables, ignoring the data that Marina, a junior analyst, already had."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Hoje, eu nunca mais arquitetaria uma solução baseada apenas na minha experiência. A primeira fase de qualquer projeto de modelagem seria uma análise exploratória de dados, liderada pelos analistas, para que as hipóteses surjam dos dados, e não da minha intuição. A experiência serve para guiar, não para ditar.",
      q_en: "What would you do differently today?",
      a_en: "Today, I would never again architect a solution based solely on my experience. The first phase of any modeling project would be an exploratory data analysis, led by the analysts, so that hypotheses emerge from the data, not from my intuition. Experience is for guiding, not for dictating."
    },
    {
      q: "Qual foi o obstáculo mais difícil que você enfrentou?",
      a: "O obstáculo mais difícil foi interno: meu próprio ego e a reação defensiva inicial. Admitir para mim mesmo, e depois publicamente, que uma analista com 9 meses de casa estava mais certa do que eu, com 15 anos de experiência, foi um exercício de humildade mais desafiador do que qualquer problema técnico.",
      q_en: "What was the most difficult obstacle you faced?",
      a_en: "The most difficult obstacle was internal: my own ego and the initial defensive reaction. Admitting to myself, and then publicly, that an analyst with 9 months at the company was more right than I was with 15 years of experience was an exercise in humility more challenging than any technical problem."
    },
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "O principal risco de promover Marina era a resistência da equipe sênior. Mitiguei isso de três formas: (1) obtive apoio explícito do CTO, (2) dei a ela autonomia real, comunicando que eu 'trabalhava para ela', e (3) usei os dados irrefutáveis para justificar a decisão, tornando-a uma questão de lógica, não de política.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "The main risk of promoting Marina was resistance from the senior team. I mitigated this in three ways: (1) I obtained explicit support from the CTO, (2) I gave her real autonomy, communicating that I 'worked for her,' and (3) I used the irrefutable data to justify the decision, making it a matter of logic, not politics."
    },
    {
      q: "Que dados você usou e qual foi a racional de cálculo?",
      a: "O dado crucial foi a análise da Marina, que mostrou que 67% das transações fraudulentas ocorriam de madrugada, em comparação com apenas 3% das transações legítimas. O racional do pivô foi o ROI: gastamos R$ 180 mil em um erro, mas o novo modelo evitou R$ 1,8 milhão em perdas em apenas 30 dias.",
      q_en: "What data did you use and what was the calculation rationale?",
      a_en: "The crucial data was Marina's analysis, which showed that 67% of fraudulent transactions occurred at dawn, compared to only 3% of legitimate transactions. The rationale for the pivot was the ROI: we spent BRL 180,000 on a mistake, but the new model avoided BRL 1.8 million in losses in just 30 days."
    },
    {
      q: "Como você usou o aprendizado desse caso em outras frentes?",
      a: "Eu usei o aprendizado de duas formas. Primeiro, a técnica de feature engineering sobre 'idade do relacionamento' foi aplicada em um modelo de autorização médica na Unimed, melhorando a acurácia em 6%. Segundo, a experiência me levou a criar as 'challenge sessions', uma prática que se tornou padrão e que já salvou dois projetos de arquitetura de seguirem o caminho errado.",
      q_en: "How did you use the learning from this case in other areas?",
      a_en: "I used the learning in two ways. First, the feature engineering technique on 'relationship age' was applied to a medical authorization model at Unimed, improving accuracy by 6%. Second, the experience led me to create 'challenge sessions,' a practice that became standard and has already saved two architecture projects from going down the wrong path."
    },
    {
      q: "Como você se sentiu no momento em que percebeu que Marina estava certa?",
      a: "Minha reação inicial, por 30 segundos, foi defensiva. Mas ao ver o gráfico comparando 3% de clientes legítimos contra 67% de fraudadores no mesmo horário, a sensação foi de clareza, não de derrota. Percebi que o dado era o chefe ali, não eu. A decisão de pivotar se tornou lógica e imediata.",
      q_en: "How did you feel the moment you realized Marina was right?",
      a_en: "My initial reaction, for 30 seconds, was defensive. But upon seeing the chart comparing 3% of legitimate customers versus 67% of fraudsters at the same time, the feeling was one of clarity, not defeat. I realized that the data was the boss there, not me. The decision to pivot became logical and immediate."
    },
    {
      q: "Como a equipe reagiu à promoção de Marina e como você gerenciou a transição?",
      a: "Houve ceticismo inicial, especialmente dos mais seniores. Eu gerenciei isso sendo explícito: em reuniões, eu dizia 'Marina é a líder técnica, eu removo os impedimentos'. Ao me colocar publicamente a serviço da liderança dela, a equipe entendeu que a decisão era baseada em competência, não em hierarquia, e a resistência se dissipou.",
      q_en: "How did the team react to Marina's promotion and how did you manage the transition?",
      a_en: "There was initial skepticism, especially from the more senior members. I managed this by being explicit: in meetings, I would say 'Marina is the technical lead, I remove the impediments.' By publicly placing myself in service of her leadership, the team understood that the decision was based on competence, not hierarchy, and the resistance dissipated."
    },
    {
      q: "O que você aprendeu especificamente com Marina sobre feature engineering?",
      a: "Aprendi duas técnicas principais que eu não dominava: o uso de embeddings para tratar a 'idade do relacionamento' como uma feature contínua, e a análise da sequência de navegação pré-transação. Essas abordagens eram mais sofisticadas do que o meu foco anterior em variáveis transacionais isoladas.",
      q_en: "What did you specifically learn from Marina about feature engineering?",
      a_en: "I learned two main techniques that I had not mastered: the use of embeddings to treat 'relationship age' as a continuous feature, and the analysis of the pre-transaction navigation sequence. These approaches were more sophisticated than my previous focus on isolated transactional variables."
    }
  ]
};

export default case_4;
