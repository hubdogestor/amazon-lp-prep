const case_5 = {
  id: "sicredi-pix-deadline-miss-recovery",
  title: "Perdi Deadline do Pix por Má Gestão de Prioridades: Assumi, Aprendi e Recuperei em 60 Dias",
  title_pt: "Perdi Deadline do Pix por Má Gestão de Prioridades: Assumi, Aprendi e Recuperei em 60 Dias",
  title_en: "Missed Pix Deadline Due to Poor Priority Management: Owned It, Learned, and Recovered in 60 Days",
  company: "Sicredi",
  period: "03/2020-09/2020",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: `"Não vamos conseguir entregar." A frase que pronunciei em setembro de 2020 congelou a sala de diretoria do Sicredi. Como Product Owner responsável por coordenar 5 squads e entregar o Pix até 16 de novembro, eu havia falhado. Testes de carga revelaram que o sistema suportava apenas 120 TPS contra os 450 TPS exigidos pelo Banco Central, tínhamos 17 casos de borda de fraude sem tratamento e perderiamos o deadline por 3 semanas. O Pix representava revolução na experiência de pagamento para 4,5 milhões de cooperados: transferências instantâneas 24/7 gratuitas vs. TED/DOC que custavam R$ 15-25 e levavam 24-48h. Enquanto isso, concorrentes como Nubank, Inter e Banco do Brasil já ofereciam o serviço. Eu havia subestimado a complexidade das integrações e confiado demais nas estimativas otimistas das squads.`,
    t: `Diante dessa falha regulatória iminente e do risco de deixar 4,5 milhões de cooperados sem acesso ao Pix, eu reconheci que havia subestimado gravemente a complexidade do projeto. Precisava assumir ownership total tanto do erro quanto da recuperação. Meu desafio era recuperar um deadline perdido por má gestão de prioridades, transformando fracasso em aprendizado e entregando resultado sólido que restaurasse a confiança regulatória e dos cooperados.`,
    a: `Eu executei recuperação sistemática em seis etapas coordenadas para corrigir os erros específicos que cometi. Primeiro, assumi responsabilidade publicamente em reunião com o C-level e apresentei análise honesta do que deu errado: havia priorizado features visíveis (UI do app) sobre infraestrutura crítica (capacidade, resiliência), não mapeei as 23 dependências em rede crítica e não implementei gates de qualidade objetivos. Segundo, renegociei o prazo com o BCB baseado em dados técnicos sólidos, conseguindo 3 semanas de extensão mediante compromisso irrevogável de entrega faseada (core flows em novembro, features avançadas em dezembro). Terceiro, criei a matriz RACI de dependências que deveria ter feito no início: mapeei os 23 pontos de integração, identifiquei 9 dependências críticas no caminho crítico e estabeleci daily syncs de 15min com os 9 owners. Quarto, cortei 40% do escopo original (Pix Saque e Pix Troco para fase 2), mantendo apenas os 4 flows core exigidos pelo BCB. Quinto, implementei gates de qualidade rigorosos: teste de carga obrigatório a cada 3 dias, review de casos de fraude toda segunda e freeze code 10 dias antes do go-live. Sexto, assumi comando tático diário: daily de 8h com todas as squads, painel live de TPS/latência que checava 6 vezes por dia e autoridade para desbloquear qualquer impedimento em menos de 2 horas.`,
    r: `Eu transformei fracasso em credibilidade através de execução disciplinada. Entreguei o Pix Core em 16 de novembro conforme novo acordo com BCB -- exatamente dentro do prazo renegociado. O sistema entrou em produção suportando 520 TPS (16% acima do mínimo exigido), com 0 incidentes críticos nas primeiras 72 horas. Nos primeiros 30 dias processamos 2,8 milhões de transações Pix com 99,2% de disponibilidade, entregando aos 4,5 milhões de cooperados transferências instantâneas gratuitas 24/7. NPS do Pix saltou de 45 (beta) para 68 (produção), com 87% dos cooperados reportando "experiência melhor que TED/DOC". Features avançadas foram entregues em dezembro, 2 semanas antes do prazo, com 95% do valor do escopo original. Recuperei a confiança da liderança através de transparência e execução -- em janeiro fui promovido a Head of Payments. A matriz de dependências e os gates de qualidade que criei viraram padrão para todos os projetos regulatórios do Sicredi acima de 50 pessoas.`,
    l: `Aprendi que ownership verdadeiro inclui assumir fracassos públicos, aprender rapidamente e entregar recuperação sólida com métricas concretas. Três lições transformaram permanentemente minha abordagem: nunca mais começo projeto crítico sem mapa de dependências em rede (faço pré-mortem obrigatório no kick-off), gates objetivos são inegociáveis desde o início (implemento teste de carga desde sprint 1), e confiança se reconstrói com transparência radical (criei ritual de "reality check" toda sexta expondo riscos antes de virarem problemas). Esse playbook de recuperação virou mecanismo replicável que usei na Unimed para lançar IA de autorização médica, entregando 2 semanas antes do prazo com 95,2% de acurácia. O erro no Pix me ensinou que ownership verdadeiro não é nunca falhar -- é assumir fracassos rapidamente, aprender com transparência brutal e entregar recuperação que supera expectativas originais.`
  },
  en: {
    s: `"We won't be able to deliver." The phrase I uttered in September 2020 froze the Sicredi boardroom. As Product Owner responsible for coordinating 5 squads and delivering Pix by November 16, I had failed. Load tests revealed the system supported only 120 TPS against the 450 TPS required by the Central Bank, we had 17 unhandled fraud edge cases, and we would miss the deadline by 3 weeks. Pix represented a revolution in payment experience for 4.5 million members: instant 24/7 free transfers vs. TED/DOC that cost R$ 15-25 and took 24-48h. Meanwhile, competitors like Nubank, Inter, and Banco do Brasil already offered the service. I had underestimated integration complexity and trusted too much in squads' optimistic estimates.`,
    t: `Faced with that imminent regulatory failure and the risk of leaving 4.5 million members without Pix access, I recognized I had gravely underestimated the project's complexity. I needed to take total ownership of both the error and the recovery. My challenge was recovering from a missed deadline due to poor priority management, transforming failure into learning and delivering solid results that would restore regulatory and member trust.`,
    a: `I executed systematic recovery in six coordinated steps to fix the specific errors I made. First, I took public responsibility in a C-level meeting and presented honest analysis of what went wrong: I had prioritized visible features (app UI) over critical infrastructure (capacity, resilience), didn't map the 23 dependencies as a critical network, and didn't implement objective quality gates. Second, I renegotiated the deadline with BCB based on solid technical data, getting a 3-week extension with irrevocable commitment to phased delivery (core flows in November, advanced features in December). Third, I created the RACI dependency matrix I should have done at the start: mapped the 23 integration points, identified 9 critical dependencies on the critical path, and established 15-min daily syncs with the 9 owners. Fourth, I cut 40% of original scope (Pix Withdrawal and Pix Change to phase 2), keeping only the 4 core flows required by BCB. Fifth, I implemented rigorous quality gates: mandatory load testing every 3 days, fraud case review every Monday, and code freeze 10 days before go-live. Sixth, I took daily tactical command: 8am daily with all squads, live TPS/latency dashboard I checked 6 times per day, and authority to unblock any impediment in less than 2 hours.`,
    r: `I transformed failure into credibility through disciplined execution. I delivered Pix Core on November 16 per new agreement with BCB -- exactly within renegotiated timeline. The system went live supporting 520 TPS (16% above required minimum), with 0 critical incidents in the first 72 hours. In the first 30 days we processed 2.8 million Pix transactions with 99.2% availability, delivering to 4.5 million members instant 24/7 free transfers. Pix NPS rose from 45 (beta) to 68 (production), with 87% of members reporting "better experience than TED/DOC". Advanced features were delivered in December, 2 weeks ahead of schedule, with 95% of original scope value. I recovered leadership's trust through transparency and execution -- in January I was promoted to Head of Payments. The dependency matrix and quality gates I created became standard for all Sicredi regulatory projects above 50 people.`,
    l: `I learned that true ownership includes owning public failures, learning rapidly, and delivering solid recovery with concrete metrics. Three lessons permanently transformed my approach: never start critical project without network dependency map (I do mandatory pre-mortem at kick-off), objective gates are non-negotiable from the start (I implement load testing from sprint 1), and trust is rebuilt with radical transparency (I created "reality check" ritual every Friday exposing risks before they become problems). That recovery playbook became a replicable mechanism I used at Unimed to launch medical authorization AI, delivering 2 weeks ahead with 95.2% accuracy. The Pix error taught me that true ownership isn't never failing -- it's owning failures quickly, learning with brutal transparency, and delivering recovery that exceeds original expectations.`
  },
  fups: [
    {
      "q": "Por que voce decidiu assumir publicamente o fracasso em vez de culpar as squads?",
      "a": "Porque eu era o Product Owner end-to-end, responsavel por coordenar as 5 squads e gerenciar dependencias. O fracasso foi meu: subestimei riscos, nao criei gates de qualidade e confiei demais em estimativas otimistas. Assumir ownership publico foi prerequisito para recuperar credibilidade e liderar a recuperacao.",
      "q_en": "Why did you decide to publicly own the failure instead of blaming the squads?",
      "a_en": "Because I was the end-to-end Product Owner, responsible for coordinating the 5 squads and managing dependencies. The failure was mine: I underestimated risks, didn't create quality gates, and trusted too much in optimistic estimates. Public ownership was prerequisite to recover credibility and lead the recovery."
    },
    {
      "q": "Como voce conseguiu renegociar o prazo com o Banco Central?",
      "a": "Apresentei dados tecnicos solidos: mostrei que 120 TPS vs 450 TPS exigidos era gap mensuravel, mapeei as 17 lacunas de fraude especificas e propus entrega faseada com core flows em novembro. BCB aceitou porque viu plano concreto, nao desculpas vagas.",
      "q_en": "How did you manage to renegotiate the deadline with the Central Bank?",
      "a_en": "I presented solid technical data: showed that 120 TPS vs required 450 TPS was measurable gap, mapped the 17 specific fraud gaps, and proposed phased delivery with core flows in November. BCB accepted because they saw concrete plan, not vague excuses."
    },
    {
      "q": "Qual foi o maior desafio na recuperacao do projeto?",
      "a": "Recuperar a confianca das 5 squads apos assumir publicamente que havia falhado como coordenador. Eu precisei provar que os novos mecanismos (matriz RACI, gates de qualidade, daily command) realmente funcionavam. Levou 3 semanas para as squads voltarem a confiar na minha lideranca.",
      "q_en": "What was the biggest challenge in project recovery?",
      "a_en": "Recovering trust from the 5 squads after publicly owning that I had failed as coordinator. I needed to prove the new mechanisms (RACI matrix, quality gates, daily command) actually worked. It took 3 weeks for squads to trust my leadership again."
    },
    {
      "q": "Como voce garantiu que os gates de qualidade fossem seguidos rigorosamente?",
      "a": "Eu assumi comando tatico diario: checava painel de TPS/latencia 6 vezes por dia, participava pessoalmente dos testes de carga a cada 3 dias e tinha autoridade para bloquear deploy se qualquer gate falhasse. Sem excecoes, sem negociacoes.",
      "q_en": "How did you ensure quality gates were followed rigorously?",
      "a_en": "I took daily tactical command: checked TPS/latency dashboard 6 times per day, personally participated in load tests every 3 days, and had authority to block deployment if any gate failed. No exceptions, no negotiations."
    },
    {
      "q": "Qual foi o momento mais critico da recuperacao?",
      "a": "Semana 2 da recuperacao, quando descobri que uma das 9 dependencias criticas (integracao com SPI do BCB) tinha sido subestimada em 40%. Cancelei ferias, passei 3 dias com a squad de infra reescrevendo a arquitetura e conseguimos recuperar o atraso.",
      "q_en": "What was the most critical moment of the recovery?",
      "a_en": "Week 2 of recovery, when I discovered one of the 9 critical dependencies (BCB SPI integration) had been underestimated by 40%. I canceled vacation, spent 3 days with infra squad rewriting architecture, and we managed to recover the delay."
    },
    {
      "q": "Como voce mediu o sucesso da recuperacao alem das metricas tecnicas?",
      "a": "NPS do Pix (45→68), satisfacao dos cooperados (87% preferindo Pix a TED/DOC), economia media por cooperado (R$ 180/ano em tarifas evitadas) e, mais importante, confianca da lideranca: fui promovido a Head of Payments em janeiro.",
      "q_en": "How did you measure recovery success beyond technical metrics?",
      "a_en": "Pix NPS (45→68), member satisfaction (87% preferring Pix to TED/DOC), average savings per member (R$180/year in avoided fees), and most importantly, leadership trust: I was promoted to Head of Payments in January."
    },
    {
      "q": "Que aprendizado voce aplicou em projetos posteriores?",
      "a": "O playbook de recuperacao: pre-mortem obrigatório no kick-off, mapa de dependencias em rede (nao linear), gates objetivos desde sprint 1 e ritual de 'reality check' toda sexta. Usei na Unimed para IA de autorizacao medica: entreguei 2 semanas antes do prazo.",
      "q_en": "What learning did you apply to subsequent projects?",
      "a_en": "The recovery playbook: mandatory pre-mortem at kick-off, network dependency map (not linear), objective gates from sprint 1, and 'reality check' ritual every Friday. I used it at Unimed for medical authorization AI: delivered 2 weeks ahead of schedule."
    },
    {
      "q": "Como voce lidou com a pressao da diretoria durante a crise?",
      "a": "Transparencia radical: updates diarios por email com metricas objetivas (TPS, casos de fraude resolvidos, dependencias desbloqueadas), sem sugar-coating. Diretoria parou de pressionar quando viu que eu tinha controle real da situacao.",
      "q_en": "How did you handle board pressure during the crisis?",
      "a_en": "Radical transparency: daily email updates with objective metrics (TPS, fraud cases resolved, dependencies unblocked), no sugar-coating. Board stopped pressuring when they saw I had real control of the situation."
    },
    {
      "q": "Qual foi o impacto financeiro real do atraso de 3 semanas?",
      "a": "Custo de oportunidade: R$ 2.3M em receita de interchange perdida (estimativa de transacoes que processariamos em 3 semanas). Mas evitamos multa regulatoria do BCB (estimada em R$ 15M) entregando dentro do prazo renegociado.",
      "q_en": "What was the real financial impact of the 3-week delay?",
      "a_en": "Opportunity cost: R$2.3M in lost interchange revenue (estimate of transactions we would have processed in 3 weeks). But we avoided BCB regulatory fine (estimated at R$15M) by delivering within renegotiated deadline."
    },
    {
      "q": "Como voce garantiu que esse tipo de falha nao se repetisse?",
      "a": "Institucionalizei os mecanismos: matriz de dependencias e gates de qualidade viraram padrao para todos os projetos regulatorios do Sicredi acima de 50 pessoas. Tambem criei ritual de pre-mortem obrigatorio em todo kick-off que lidero.",
      "q_en": "How did you ensure this type of failure wouldn't repeat?",
      "a_en": "I institutionalized the mechanisms: dependency matrix and quality gates became standard for all Sicredi regulatory projects above 50 people. I also created mandatory pre-mortem ritual in every kick-off I lead."


    }
  ]
};

export default case_5;
