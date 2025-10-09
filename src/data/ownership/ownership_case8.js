// Case 8 - ownership
const case_8 = {
  id: "bradesco-next-delay",
  title: "Erro de Estimativa no Lançamento Bradesco Next",
  title_pt: "Erro de Estimativa no Lançamento Bradesco Next",
  title_en: "Estimation Error in Bradesco Next Launch",
  company: "Bradesco",
  period: "Q2 2018",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: `"Leonardo, você garantiu que abril era viável. O CEO já fez um press release. Onde você errou?" A confrontação do CTO em uma chamada executiva foi direta, e o momento da verdade chegou. Três semanas antes do congelamento de código, meu time reportou 60% de conclusão quando eu havia comunicado 85% ao conselho. As apostas eram brutais: um prazo público de 28 de abril para o lançamento do Bradesco Next, um banco 100% digital, já anunciado na imprensa; um mercado dominado pelo Nubank (NPS 92); e minha estimativa otimista que subestimou a complexidade da API da Serasa (TLS mútuo + retries assíncronos). Este era o momento da verdade: assumir o erro publicamente perante o conselho ou transferir a culpa e destruir a confiança para sempre. A verdadeira ownership se manifesta quando você admite "o erro foi meu" sem justificativas — especialmente diante do CEO.`,
    t: `Diante de um erro de estimativa que ameaçava um lançamento de alto risco, minha tarefa era assumir publicamente a responsabilidade, realinhar as expectativas com o C-level e entregar uma solução que não apenas corrigisse o curso, mas também fortalecesse a organização. Eu precisava transformar uma falha individual em uma capacidade organizacional duradoura, demonstrando que ownership verdadeiro significa crescer a partir dos erros.`,
    a: `Eu agi com transparência radical e construí mecanismos para prevenir repetição. Primeiro, em menos de 24 horas, enviei email ao CEO, CTO e conselho, com meu time em cópia, declarando: "Eu subestimei a complexidade da integração da Serasa. O erro foi meu. A nova data é 19 de maio." Segundo, conduzi post-mortem de 5 porquês em 48 horas, que revelou a causa raiz: ausência de framework de estimativa para integrações regulatórias. Terceiro, apresentei plano de recuperação: realoquei 8 FTEs de features não críticas, contratei 2 consultores especializados em Serasa (R$ 180k/mês) e implementei testes de carga em paralelo, comprimindo o cronograma em 3 semanas. Quarto, para garantir que o erro não se repetisse, criei e documentei novo framework de estimativa, incluindo buffer de 40% para APIs de terceiros e política de escalonamento clara. Quinto, treinei 4 engenheiros principais neste novo modelo e institucionalizei revisões de estimativa quinzenais com arquitetos sênior. Sexto, estabeleci métricas de acompanhamento: variance tracking semanal, risk escalation automático quando desvio >15%, e post-mortem obrigatório para qualquer atraso >1 semana.`,
    r: `Eu transformei um erro individual em capacidade organizacional duradoura que fortaleceu toda a empresa. Entregamos o Bradesco Next na data revisada, 19 de maio, com motor de crédito suportando pico de 73k requisições/hora e aprovando 12.847 contas em 72 horas com zero incidentes. Atingimos tempo médio de aprovação de 3m47s, superando nossa meta de <5min e alcançando NPS de 89, próximo ao líder de mercado. Mais importante, o framework de estimativa que criei foi adotado em toda a empresa, reduzindo erro médio de estimativa de ±42% para ±11% nos 5 projetos seguintes e prevenindo 3 atrasos críticos. O framework salvou R$ 8,7M em custos de atraso e retrabalho ao longo de 18 meses. Quatro meses depois, fui promovido a Principal Engineer, com o CTO citando meu "ownership exemplar" e "capacidade de transformar falhas em ativos estratégicos". O CEO passou a usar meu caso como exemplo de "como líderes devem assumir responsabilidade" em treinamentos executivos.`,
    l: `Essa experiência cristalizou minha filosofia sobre ownership: ela se prova não na celebração do sucesso, mas na forma como lidamos com o fracasso. Aprendi que admitir "o erro foi meu" de forma rápida e pública é o alicerce da confiança. Desde então, meu método é: escalar riscos cedo é ownership, esconder é ego; post-mortems sem culpa geram aprendizado, defesa gera repetição; e um mecanismo duradouro é a única prova de que a lição foi aprendida. Este incidente não foi apenas sobre corrigir um erro, mas sobre transformar uma falha em um ativo estratégico para a organização. Apliquei esse template em outras situações: no Sicredi quando subestimei complexidade do PIX (assumi erro, criei framework de estimativa para pagamentos instantâneos, evitei 2 atrasos futuros), e no HSBC quando erro de sizing causou degradação (ownership público, novo modelo de capacity planning, zero incidentes similares em 24 meses). Ownership não é sobre ser perfeito, é sobre crescer publicamente a partir dos erros e deixar a organização mais forte.`
  },
  en: {
    s: `"Leonardo, you guaranteed April was feasible. The CEO already issued a press release. Where did you go wrong?" The CTO's confrontation on an executive call was direct, and the moment of truth arrived. Three weeks before code freeze, my team reported 60% completion when I had communicated 85% to the board. The stakes were brutal: a public deadline of April 28th for the launch of Bradesco Next, a 100% digital bank, already announced in the press; a market dominated by Nubank (NPS 92); and my optimistic estimate that underestimated the complexity of the Serasa API (mutual TLS + asynchronous retries). This was the moment of truth: own the mistake publicly before the board or shift blame and destroy trust forever. True ownership manifests when you admit "the mistake was mine" without excuses—especially in front of the CEO.`,
    t: `Faced with an estimation error that threatened a high-stakes launch, my task was to publicly take responsibility, realign expectations with C-level, and deliver a solution that not only corrected course but also strengthened the organization. I needed to turn an individual failure into lasting organizational capability, demonstrating that true ownership means growing from mistakes.`,
    a: `I acted with radical transparency and built mechanisms to prevent repetition. First, within 24 hours, I sent email to CEO, CTO, and board, with my team copied, stating: "I underestimated the complexity of Serasa integration. The mistake was mine. The new date is May 19th." Second, I conducted 5-whys post-mortem within 48 hours, which revealed root cause: absence of estimation framework for regulatory integrations. Third, I presented recovery plan: reallocated 8 FTEs from non-critical features, hired 2 specialized Serasa consultants (R$180k/month), and implemented parallel load testing, compressing schedule by 3 weeks. Fourth, to ensure mistake wouldn't repeat, I created and documented new estimation framework, including 40% buffer for third-party APIs and clear escalation policy. Fifth, I trained 4 principal engineers on this new model and institutionalized bi-weekly estimation reviews with senior architects. Sixth, I established tracking metrics: weekly variance tracking, automatic risk escalation when deviation >15%, and mandatory post-mortem for any delay >1 week.`,
    r: `I transformed an individual error into lasting organizational capability that strengthened the entire company. We delivered Bradesco Next on revised date, May 19th, with credit engine supporting peak of 73k requests/hour and approving 12,847 accounts in 72 hours with zero incidents. We achieved average approval time of 3m47s, beating our goal of <5min and reaching NPS of 89, close to market leader. More importantly, the estimation framework I created was adopted company-wide, reducing average estimation error from ±42% to ±11% in following 5 projects and preventing 3 critical delays. The framework saved R$8.7M in delay costs and rework over 18 months. Four months later, I was promoted to Principal Engineer, with CTO citing my "exemplary ownership" and "ability to transform failures into strategic assets". CEO started using my case as example of "how leaders should take responsibility" in executive training.`,
    l: `This experience crystallized my philosophy on ownership: it's proven not in celebrating success, but in how we handle failure. I learned that admitting "the mistake was mine" quickly and publicly is the bedrock of trust. Since then, my method has been: escalating risks early is ownership, hiding is ego; blameless post-mortems generate learning, defensiveness generates repetition; and lasting mechanism is the only proof that lesson was learned. This incident wasn't just about fixing a mistake, but about transforming failure into strategic asset for the organization. I applied this template in other situations: at Sicredi when I underestimated PIX complexity (owned error, created estimation framework for instant payments, avoided 2 future delays), and at HSBC when sizing error caused degradation (public ownership, new capacity planning model, zero similar incidents in 24 months). Ownership isn't about being perfect, it's about growing publicly from mistakes and leaving the organization stronger.`
  },
  fups: [
    {
      "q": "Como você soube que havia subestimado a complexidade?",
      "a": "Na sprint review de 12 de março, três semanas antes do code freeze, meu tech lead reportou que a integração Serasa estava 60% completa quando eu havia comunicado ao board 85% e garantido que abril era viável. O gap entre meu tracking (baseado em story points concluídos) e a realidade técnica (autenticação TLS + retries assíncronos ainda não resolvidos) ficou evidente quando testamos carga de 50k req/h e o sistema falhou em 73% das requisições.",
      "q_en": "How did you know you had underestimated complexity?",
      "a_en": "At March 12th sprint review, three weeks before code freeze, my tech lead reported Serasa integration was 60% complete when I had communicated 85% to board and guaranteed April was viable. The gap between my tracking (based on completed story points) and technical reality (TLS authentication + async retries still unresolved) became evident when we tested 50k req/h load and system failed 73% of requests."
    },
    {
      "q": "Como o CEO e o CTO reagiram quando você assumiu o erro?",
      "a": "O CTO me confrontou duramente: 'Leonardo, você garantiu que abril era viável. O CEO já fez press release. Onde você errou?'. Quando assumi imediatamente 'o erro foi meu: subestimei Serasa e não incluí buffer regulatório', a tensão diminuiu. O CEO respondeu: 'Eu aprecio a honestidade. Qual é o novo target realista?'. A transparência imediata transformou confronto em colaboração.",
      "q_en": "How did CEO and CTO react when you owned the error?",
      "a_en": "CTO confronted me hard: 'Leonardo, you guaranteed April was viable. CEO already issued press release. Where did you go wrong?'. When I immediately owned 'the error was mine: I underestimated Serasa and didn't include regulatory buffer', tension decreased. CEO responded: 'I appreciate honesty. What's the realistic new target?'. Immediate transparency turned confrontation into collaboration."
    },
    {
      "q": "Qual foi o framework de estimativa que você criou?",
      "a": "Criei framework com 4 componentes: (1) Buffer obrigatório de 40% para APIs de terceiros regulatórios, (2) POC técnico obrigatório para integrações >50 story points, (3) Revisão quinzenal com arquitetos sênior, (4) Escalação automática quando variance >15%. Framework reduziu erro médio de ±42% para ±11% e preveniu 3 atrasos críticos.",
      "q_en": "What was the estimation framework you created?",
      "a_en": "I created framework with 4 components: (1) Mandatory 40% buffer for regulatory third-party APIs, (2) Mandatory technical POC for integrations >50 story points, (3) Bi-weekly review with senior architects, (4) Automatic escalation when variance >15%. Framework reduced average error from ±42% to ±11% and prevented 3 critical delays."
    },
    {
      "q": "Como você mediu o impacto do seu erro na organização?",
      "a": "Impacto direto: atraso de 3 semanas custou R$ 2,1M (marketing, consultores, oportunidade). Impacto indireto: credibilidade abalada com CEO e board. Mas o framework que criei salvou R$ 8,7M em custos de atraso nos 18 meses seguintes, gerando ROI líquido de 314%. Mais importante: transformei falha em ativo estratégico.",
      "q_en": "How did you measure the impact of your error on the organization?",
      "a_en": "Direct impact: 3-week delay cost R$2.1M (marketing, consultants, opportunity). Indirect impact: shaken credibility with CEO and board. But framework I created saved R$8.7M in delay costs over next 18 months, generating net ROI of 314%. Most importantly: I transformed failure into strategic asset."
    },
    {
      "q": "Que resistência você enfrentou ao assumir o erro publicamente?",
      "a": "Meu time estava nervoso ('vai prejudicar nossa reputação'), alguns colegas sugeriram culpar Serasa ('API deles mudou'). Mas expliquei que ownership constrói confiança: 'Se escondermos agora, nunca mais seremos confiáveis'. Resultado: CEO passou a me consultar em decisões críticas porque sabia que eu seria transparente sobre riscos.",
      "q_en": "What resistance did you face in owning the error publicly?",
      "a_en": "My team was nervous ('it will hurt our reputation'), some colleagues suggested blaming Serasa ('their API changed'). But I explained ownership builds trust: 'If we hide now, we'll never be trusted again'. Result: CEO started consulting me on critical decisions because he knew I'd be transparent about risks."
    },
    {
      "q": "Como você garantiu que o framework fosse adotado pela empresa?",
      "a": "Três estratégias: (1) Provei ROI com dados (±42% → ±11% de erro), (2) Treinei 4 engenheiros principais que se tornaram evangelistas, (3) Institucionalizei no processo oficial com aprovação do CTO. Mais importante: mostrei que framework nasceu de falha real, não de teoria, o que deu credibilidade.",
      "q_en": "How did you ensure the framework was adopted by the company?",
      "a_en": "Three strategies: (1) Proved ROI with data (±42% → ±11% error), (2) Trained 4 principal engineers who became evangelists, (3) Institutionalized in official process with CTO approval. Most importantly: I showed framework was born from real failure, not theory, which gave credibility."
    },
    {
      "q": "Qual foi o maior aprendizado pessoal dessa experiência?",
      "a": "Que ownership se prova no fracasso, não no sucesso. Antes eu evitava admitir erros por medo de parecer incompetente. Aprendi que transparência radical constrói confiança: CEO passou a me ver como 'líder confiável' porque sabia que eu escalaria problemas cedo, não esconderia até explodir.",
      "q_en": "What was the biggest personal learning from this experience?",
      "a_en": "That ownership is proven in failure, not success. Before I avoided admitting errors for fear of appearing incompetent. I learned radical transparency builds trust: CEO started seeing me as 'reliable leader' because he knew I'd escalate problems early, not hide until they exploded."
    },
    {
      "q": "Como você aplicou esse aprendizado em outras situações?",
      "a": "No Sicredi: subestimei PIX complexity, assumi erro publicamente, criei framework de estimativa para pagamentos instantâneos. No HSBC: erro de sizing causou degradação, ownership público, novo modelo de capacity planning. Template: erro → ownership público → post-mortem → mecanismo → institucionalização.",
      "q_en": "How did you apply this learning in other situations?",
      "a_en": "At Sicredi: underestimated PIX complexity, owned error publicly, created estimation framework for instant payments. At HSBC: sizing error caused degradation, public ownership, new capacity planning model. Template: error → public ownership → post-mortem → mechanism → institutionalization."
    },
    {
      "q": "Qual foi o ROI real do framework de estimativa?",
      "a": "ROI de 314% em 18 meses: investimento de R$ 2,8M (treinamentos, ferramentas, tempo), economia de R$ 8,7M (atrasos evitados, retrabalho prevenido). Mais importante: 5 projetos seguintes tiveram erro médio de ±11% vs. ±42% anterior, e zero atrasos críticos vs. 3 previstos.",
      "q_en": "What was the real ROI of the estimation framework?",
      "a_en": "314% ROI over 18 months: investment of R$2.8M (training, tools, time), savings of R$8.7M (avoided delays, prevented rework). Most importantly: next 5 projects had average error of ±11% vs. ±42% before, and zero critical delays vs. 3 predicted."
    },
    {
      "q": "Como você lidou com a pressão do CEO e da imprensa?",
      "a": "Transparência total: expliquei ao CEO que atraso de 3 semanas era melhor que lançamento instável que prejudicaria NPS. Com imprensa, criamos narrativa de 'lançamento responsável' focado em qualidade. Resultado: Bradesco Next lançou com NPS 89, próximo ao líder Nubank (92), validando a decisão.",
      "q_en": "How did you handle pressure from CEO and press?",
      "a_en": "Total transparency: I explained to CEO that 3-week delay was better than unstable launch that would hurt NPS. With press, we created narrative of 'responsible launch' focused on quality. Result: Bradesco Next launched with NPS 89, close to leader Nubank (92), validating the decision."
    }
  ]
};

export default case_8;
