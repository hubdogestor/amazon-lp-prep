// src/data/icebreaker.js
// Icebreaker estratégico para entrevistas Amazon - Versões naturais e fluidas

const icebreakerData = {
  pt: {
    title: "Icebreaker Estratégico Amazon",
    subtitle: "Posicionamento diferenciado desde os primeiros segundos",
    
    // PERGUNTA PRINCIPAL: "FALE SOBRE VOCÊ"
    fale_sobre_voce: {
      question: "Fale sobre você / Me conte sobre você / Tell me about yourself",
      category: "Apresentação Pessoal",
      versions: [
        {
          id: "versao_pessoal",
          title: "Versão Pessoal",
          badge: "Pessoal",
          badgeColor: "bg-blue-500",
          context: "Para criar conexão humana e quebrar o gelo",
          content: `Sou Leonardo Menezes, gaúcho de Porto Alegre, 40 anos, casado com a Thais e pai da Livia, que tem 10 anos. Além da minha paixão por transformação digital, sou uma pessoa curiosa por natureza - gosto de estar sempre atualizado sobre o que está acontecendo no mundo e as novas tendências, especialmente em tecnologia e inovação.

Nos meus momentos livres, você me encontra jogando xadrez - adoro a estratégia do jogo, que muito me lembra os desafios que enfrento no trabalho. Também toco guitarra para relaxar, e sou um leitor ávido. Estou sempre com um livro sobre estratégia, tecnologia ou liderança.

O que me move profissionalmente é a mesma curiosidade que me move pessoalmente: entender como as coisas funcionam e como podem ser melhoradas. Essa combinação de pensamento analítico do xadrez, criatividade da música e aprendizado contínuo dos livros se reflete na minha forma de liderar projetos e resolver problemas complexos. No fundo, sou alguém que adora transformar complexidade em simplicidade, sempre buscando soluções que façam sentido tanto tecnicamente quanto para as pessoas que vão usá-las.`,
          tags: ["pessoal", "família", "hobbies", "conexão humana"],
          hook: "Gaúcho, pai, curioso por natureza",
          mic_drop: "Transformar complexidade em simplicidade - do xadrez aos negócios"
        },
        {
          id: "versao_profissional",
          title: "Versão Profissional",
          badge: "Profissional",
          badgeColor: "bg-green-500",
          context: "Para destacar expertise e track record",
          content: `Sou Leonardo Menezes, e nos últimos 15 anos tenho me dedicado a transformar operações complexas em resultados mensuráveis. Minha trajetória começou na Huawei, onde passei 6 anos construindo a infraestrutura que conectou o Brasil ao 4G. Foi lá que entreguei a primeira estação 4G do país em 2012 e coordenei toda a conectividade da Copa do Mundo de 2014. O que me marcou nessa época foi aprender que escala e excelência operacional não são excludentes - na verdade, são complementares quando você mergulha nos detalhes certos.

Depois migrei para o setor financeiro, onde enfrentei um dos desafios mais críticos da minha carreira: liderar a migração de 3 bilhões de dólares em ativos do HSBC para o Bradesco. Foram meses de trabalho intenso, negociando com reguladores, coordenando times multidisciplinares e garantindo que cada centavo fosse transferido sem erros. O resultado? Zero falhas, zero perda de dados, e a confiança de ter entregue algo que muitos achavam impossível. Logo depois, co-liderei o lançamento do Banco Digital Next, competindo diretamente com fintechs como Nubank.

Mais recentemente, tenho focado em aplicar inteligência artificial para resolver problemas reais. Na Unimed, implementei automação que reduziu em 30% o tempo de processamento de sinistros, gerando 45 milhões de dólares em economia anual. No Sicredi, meus modelos de machine learning aceleraram aprovações de crédito em 40%, impactando diretamente a vida de 6.4 milhões de cooperados. Atualmente na SEFAZ-RS, estou modernizando a gestão fiscal do estado usando frameworks de value-based management.

O que me diferencia não é apenas ter experiência técnica ou visão estratégica isoladamente, mas conseguir transitar entre esses dois mundos. Sou igualmente confortável discutindo arquitetura de sistemas com engenheiros ou apresentando ROI para CFOs. No final do dia, o que me move é transformar complexidade em valor mensurável para quem realmente importa: o cliente final.`,
          tags: ["executiva", "impacto", "liderança", "resultados"],
          hook: "15 anos transformando operações complexas em resultados mensuráveis",
          mic_drop: "Do código ao boardroom - transformar complexidade em valor para o cliente"
        },
        {
          id: "versao_tecnica",
          title: "Versão Técnica",
          badge: "Técnica",
          badgeColor: "bg-gray-700",
          context: "Para destacar experiência técnica em produto, programas e IA",
          content: `Sou um Product Manager e Program Manager com especialização em transformação digital e implementação de IA. Minha experiência abrange desde infraestrutura de telecomunicações até produtos digitais em fintech e healthcare.

Tecnicamente, tenho expertise em gestão de produtos end-to-end, desde discovery e user research até implementação e growth. Trabalho com metodologias ágeis, design thinking e data-driven decision making. Tenho experiência prática com machine learning para credit scoring, fraud detection e automação de processos.

Nos últimos projetos, liderei a implementação de soluções de IA que automatizaram processos manuais, resultando em economias de $45 milhões anuais. Também desenvolvi frameworks de OKRs e value-based management que foram adotados como padrão organizacional.

Minha abordagem combina visão estratégica com execução prática, sempre focando em métricas quantificáveis e impacto real no negócio. Tenho certificações em PMP, PMO-CP e SAFe SSM, e experiência liderando times multidisciplinares de até 30 pessoas.
  `,
          tags: ["product management", "program management", "IA", "machine learning", "metodologias"],
          hook: "Product & Program Manager — transformação digital e IA",
          mic_drop: "Visão estratégica + execução prática = impacto mensurável"
        },
        {
          id: "versao_payments",
          title: "Versão Payments",
          badge: "Payments",
          badgeColor: "bg-indigo-500",
          context: "Para entrevistadores técnicos ou foco na vaga específica",
          content: `Sou Leonardo Menezes, e minha trajetória profissional me trouxe para um ponto muito específico: transformar operações de pagamento através de inteligência artificial e automação. O interessante é que cheguei aqui por um caminho não convencional, mas que faz todo sentido quando você olha em retrospectiva.

Comecei construindo a infraestrutura que sustenta os pagamentos digitais hoje. Na Huawei, liderei o rollout do 4G que habilitou o PIX e os pagamentos móveis no Brasil. Naquela época, em 2012, 2013, ninguém imaginava que aquela rede seria a base para a revolução de pagamentos que vivemos hoje. Depois, no setor financeiro, gerenciei operações de pagamento em escala bilionária - migrei 3 bilhões de dólares em ativos entre bancos sem uma única falha transacional. Foi ali que aprendi que em pagamentos, 99.9% de disponibilidade não é suficiente - você precisa de 99.99%, porque cada falha é dinheiro de alguém que não chegou onde deveria.

Nos últimos anos, tenho focado em aplicar IA para otimizar essas operações. No Sicredi, implementei modelos de machine learning para credit scoring e fraud detection que aceleraram aprovações em 40% sem aumentar inadimplência. Na Unimed, automatizei processamento de sinistros com IA, reduzindo cycle time em 30% e gerando 45 milhões de dólares em savings anuais. O que aprendi é que IA não é mágica - é sobre entender profundamente o processo, identificar onde a decisão humana agrega valor e onde ela é apenas overhead, e então construir sistemas que amplificam o melhor dos dois mundos.

Minha abordagem é sempre data-driven. Uso métricas como Payment Success Rate, Authorization Rate e Process Cycle Time para medir impacto real, não apenas eficiência operacional. Também tenho experiência com Lean Six Sigma, que aplico para identificar waste em processos de pagamento e criar soluções sustentáveis. O que me motiva hoje é a oportunidade de aplicar tudo isso em escala Amazon, especialmente num momento tão crítico como a transformação de pagamentos no Brasil com PIX e Open Finance. É onde posso combinar infraestrutura crítica, operações financeiras e IA para gerar impacto real na experiência de milhões de clientes.`,
          tags: ["pagamentos", "IA", "técnica", "métricas"],
          hook: "Transformar operações de pagamento através de IA - do 4G ao PIX",
          mic_drop: "Infraestrutura + operações financeiras + IA = impacto em escala Amazon"
        }
      ]
    },

    // PERGUNTA: "POR QUE A AMAZON?"
    por_que_amazon: {
      question: "Por que a Amazon? / Why Amazon?",
      category: "Motivação e Fit Cultural",
      versions: [
        {
          id: "versao_principal",
          title: "Versão Principal",
          badge: "Recomendada",
          badgeColor: "bg-orange-500",
          content: `A Amazon sempre me fascinou porque é onde obsessão pelo cliente não é apenas um discurso bonito em apresentação de PowerPoint - está genuinamente no DNA de cada decisão. Ao longo da minha carreira, sempre priorizei o impacto no cliente final. Quando entreguei a primeira estação 4G do Brasil, não estava apenas instalando antenas - estava conectando pessoas. Quando implementei IA que reduz tempo de processamento de sinistros de saúde, não estava apenas otimizando processos - estava fazendo com que pacientes recebessem aprovações mais rápido.

O que mais me atrai na Amazon é a cultura de mergulhar fundo nos problemas e simplificar o complexo. Na Huawei, quando os SLAs estavam em 382 dias, eu não aceitei a resposta fácil de "é assim que funciona no Brasil". Mergulhei nos dados, redesenhei workflows e reduzi para 62 dias. Na Unimed, quando vi operações complexas consumindo tempo precioso de médicos, simplifiquei através de automação, gerando 45 milhões de dólares em economia. Essa mentalidade de não aceitar o status quo e sempre buscar a raiz do problema é algo que vejo profundamente enraizado na Amazon.

Também ressoa muito comigo a cultura de ownership completo. No HSBC, quando assumi a migração de 3 bilhões de dólares, não deleguei a responsabilidade - mergulhei pessoalmente nas negociações com reguladores, nos detalhes técnicos, nas validações de compliance. Não existe "não é minha responsabilidade" no meu vocabulário. Você assume o problema end-to-end e entrega, ponto.

Mas o que realmente me motiva a estar aqui hoje é a combinação de escala, inovação e impacto. Quero trabalhar em uma organização que pensa grande, age rápido e coloca o cliente em primeiro lugar em cada decisão. É onde posso aplicar minha experiência em transformação operacional para gerar valor em escala verdadeiramente global. Depois de 15 anos construindo infraestrutura crítica, transformando operações financeiras e implementando IA em setores tradicionais, a Amazon representa o próximo nível: impactar milhões de clientes mantendo obsessão pelo detalhe e pela excelência operacional.`,
          tags: ["customer obsession", "ownership", "dive deep", "scale"],
          hook: "Obsessão pelo cliente não é discurso - está no DNA de cada decisão",
          mic_drop: "Escala + inovação + impacto = próximo nível da minha carreira"
        },
        {
          id: "versao_pagamentos_flywheel",
          title: "Versão Pagamentos & Flywheel",
          badge: "Payments Focus",
          badgeColor: "bg-green-500",
          content: `A Amazon me fascina porque é onde posso aplicar minha experiência em pagamentos para acelerar o flywheel de crescimento mais poderoso do mundo. Entendo profundamente como operações de pagamento eficientes não são apenas um centro de custo - elas reduzem atrito, melhoram experiência do cliente e habilitam mais seleção. É um ciclo virtuoso: quanto melhor a experiência de pagamento, mais clientes compram. Quanto mais clientes compram, mais dados você tem para otimizar. Quanto mais você otimiza, melhor fica a experiência. E o ciclo se acelera.

Minha experiência é exatamente o que esse momento exige. Liderei operações de pagamento em escala bilionária, implementei IA para otimizar authorization rates e process cycle time, e tenho expertise em compliance regulatório crítico. No Sicredi, meus modelos de machine learning aumentaram payment success rate em 25%, gerando 50 milhões de dólares em receita adicional. Não foi mágica - foi entender onde estavam os pontos de falha, aplicar dados para prever comportamentos e construir sistemas que aprendem continuamente.

O que me motiva especialmente é a oportunidade de trabalhar na parceria estratégica com Oakberry, aplicando AI/ML para transformar payment business operations. Vejo potencial imenso para implementar automação que reduza operational cost per transaction enquanto melhora customer payment satisfaction. É exatamente o tipo de desafio que me energiza: pegar algo que já funciona bem e torná-lo extraordinário através de dados e tecnologia.

A Amazon é onde posso combinar minha paixão por inovação com impacto em escala global. Quero fazer parte de uma organização que não apenas aceita mudança, mas a lidera - especialmente em um momento crítico como a transformação de pagamentos no Brasil com PIX e Open Finance. É onde posso aplicar tudo que aprendi em 15 anos para ajudar a construir o futuro dos pagamentos digitais.`,
          tags: ["pagamentos", "flywheel", "crescimento", "inovação"],
          hook: "Acelerar o flywheel mais poderoso do mundo através de pagamentos",
          mic_drop: "Liderar a transformação de pagamentos no Brasil com PIX e Open Finance"
        }
      ]
    },

    // PERGUNTA: "POR QUE ESTA VAGA?"
    por_que_esta_vaga: {
      question: "Por que esta vaga específica? / Why this role?",
      category: "Fit com a Posição",
      versions: [
        {
          id: "versao_principal",
          title: "Versão Principal",
          badge: "Recomendada",
          badgeColor: "bg-purple-500",
          content: `Esta vaga é a convergência perfeita de tudo que construí nos últimos 15 anos: program management em escala, transformação operacional e implementação de AI/ML em operações críticas. Quando li a descrição, foi quase como se tivessem escrito olhando para o meu currículo.

Meu background é exatamente o que vocês precisam. Liderei programas complexos que geraram mais de 300 milhões de dólares em valor, sempre com foco em excelência operacional. Na Huawei, coordenei 30+ gerentes de projeto e 20 fornecedores para entregar infraestrutura crítica. No HSBC e Bradesco, gerenciei a migração mais complexa da história bancária brasileira. Mas não foi apenas sobre coordenar - foi sobre mergulhar nos detalhes técnicos, entender cada dependência crítica e garantir que nada caísse entre as rachaduras.

Mais importante: tenho experiência hands-on implementando AI/ML em operações de pagamento. Na Unimed, meus modelos automatizaram processamento que reduziu cycle time em 30%. No Sicredi, implementei machine learning para credit scoring e fraud detection que melhorou significativamente authorization rates. Não sou alguém que apenas gerencia projetos de IA - eu entendo os algoritmos, participo das decisões de arquitetura e sei exatamente quais métricas importam.

A parceria com Oakberry me empolga especialmente porque vejo a oportunidade de aplicar Lean Six Sigma para identificar waste em processos de pagamento e implementar use cases de IA que reduzam operational cost per transaction. Minha experiência com value-based management e OKRs será crucial para medir ROI dessas transformações e garantir que estamos gerando valor real, não apenas implementando tecnologia por implementar.

O que me atrai nesta posição é a combinação de ownership end-to-end, impacto mensurável e oportunidade de aplicar minha expertise em um ambiente que valoriza inovação e obsessão pelo cliente. É exatamente onde quero estar: resolvendo problemas complexos em escala, com autonomia para tomar decisões e responsabilidade total pelos resultados.`,
          tags: ["program management", "AI/ML", "operational excellence", "value-based"],
          hook: "Convergência perfeita: program management + transformação + AI/ML",
          mic_drop: "Ownership end-to-end com impacto mensurável em ambiente de inovação"
        }
      ]
    },

    // PERGUNTA: "PONTOS FORTES"
    pontos_fortes: {
      question: "Quais são seus principais pontos fortes? / What are your strengths?",
      category: "Autoconhecimento",
      versions: [
        {
          id: "versao_principal",
          title: "Versão Principal",
          badge: "Recomendada",
          badgeColor: "bg-green-500",
          content: `Meu principal diferencial é a capacidade de mergulhar profundamente em problemas complexos e consistentemente entregar resultados mensuráveis. Não sou alguém que fica na superfície - quando assumo um desafio, vou até a raiz.

Na Huawei, quando os SLAs estavam em 382 dias, não aceitei explicações genéricas. Conduzi pessoalmente análise de causa raiz usando Ishikawa e 5 Whys, identifiquei que 60% dos atrasos vinham de gargalos regulatórios, negociei pessoalmente com prefeituras e ANATEL, redesenhei workflows e reduzi para 62 dias. Não deleguei o problema - mergulhei nele.

Outro ponto forte é minha capacidade de entregar resultados consistentes. Tenho um track record de mais de 300 milhões de dólares em valor gerado. Na Unimed, implementei IA que automatizou 30% do processamento de sinistros, gerando 45 milhões de dólares em economia anual. No HSBC, migrei 3 bilhões de dólares sem uma única falha. Não são promessas - são entregas documentadas e auditadas.

Também me destaco em conectar decisões técnicas com impacto no cliente. No Sicredi, meus modelos de machine learning não apenas melhoraram credit scoring tecnicamente - eles reduziram tempo de aprovação de crédito, melhorando a experiência de 6.4 milhões de cooperados. Sempre pergunto: "Como isso melhora a vida do cliente final?" Se não consigo responder, repensamos a solução.

O que me diferencia é conseguir combinar profundidade técnica com visão de negócio. Sou igualmente confortável revisando código Python de modelos de ML ou apresentando business case para o CFO. Essa versatilidade me permite ser uma ponte efetiva entre times técnicos e liderança executiva, garantindo que estamos construindo as coisas certas, da forma certa, pelos motivos certos.`,
          tags: ["dive deep", "deliver results", "customer obsession", "technical"],
          hook: "Mergulhar profundamente e entregar resultados mensuráveis consistentemente",
          mic_drop: "Profundidade técnica + visão de negócio = ponte entre código e boardroom"
        }
      ]
    },

    // PERGUNTA: "ÁREAS DE DESENVOLVIMENTO"
    areas_desenvolvimento: {
      question: "Quais são suas áreas de desenvolvimento? / What are your weaknesses?",
      category: "Autoconhecimento",
      versions: [
        {
          id: "versao_delegacao_estrategica",
          title: "Delegação Estratégica",
          badge: "Desenvolvimento",
          badgeColor: "bg-yellow-500",
          content: `Uma competência que venho aprimorando é delegação estratégica, especialmente em projetos de alta visibilidade. Minha experiência técnica e paixão pelos detalhes às vezes me levam a assumir tarefas que poderiam ser melhor executadas por especialistas do time. É quase como se eu quisesse garantir pessoalmente que cada peça está no lugar certo.

Identifiquei isso durante a implementação de IA na Unimed, onde inicialmente eu estava envolvido demais nos aspectos técnicos de machine learning. Percebi que isso limitava minha capacidade de focar em estratégia e alinhamento com stakeholders. Estava resolvendo problemas técnicos quando deveria estar garantindo que estávamos resolvendo os problemas certos.

Desenvolvi uma abordagem mais estruturada: defino claramente objetivos e critérios de sucesso, identifico os melhores recursos para cada tarefa, e estabeleço pontos de controle regulares. Isso me permite manter visibilidade sem microgerenciar. Na prática, significa que ao invés de revisar cada linha de código, defino padrões de qualidade claros, estabeleço code reviews em par, e foco minha energia em garantir que a solução técnica está alinhada com o problema de negócio.

O resultado foi melhoria significativa na eficiência do time e na qualidade das entregas. Também me permitiu focar mais tempo em atividades de maior valor: alinhamento estratégico, gestão de stakeholders e desenvolvimento de pessoas. É um exemplo prático de como desenvolver talentos ao redor e confiar na expertise deles gera resultados melhores do que tentar fazer tudo sozinho. Continuo trabalhando nisso conscientemente em cada novo projeto.`,
          tags: ["delegação", "estratégia", "desenvolvimento de pessoas", "autoconhecimento"],
          hook: "Aprimorando delegação estratégica em projetos de alta visibilidade",
          mic_drop: "Confiar na expertise do time gera resultados melhores que fazer tudo sozinho"
        },
        {
          id: "versao_comunicacao_executiva",
          title: "Comunicação Executiva Concisa",
          badge: "Desenvolvimento",
          badgeColor: "bg-yellow-600",
          content: `Uma área que continuo desenvolvendo é tornar minha comunicação executiva mais concisa, especialmente ao apresentar temas técnicos complexos para audiências não técnicas. Minha tendência natural é querer explicar todo o contexto e os detalhes técnicos que levaram a uma conclusão, porque para mim esses detalhes são fascinantes e importantes. Mas aprendi que nem sempre a audiência precisa ou quer esse nível de profundidade.

Percebi isso de forma clara durante uma apresentação para o conselho da Unimed, onde comecei explicando a arquitetura técnica dos modelos de machine learning antes de chegar aos resultados de negócio. Vi nos rostos que estava perdendo a audiência. O CFO me interrompeu gentilmente e perguntou: "Leonardo, quanto isso vai economizar?" Foi um wake-up call.

Desde então, tenho trabalhado conscientemente em estruturar comunicações começando pelo impacto e depois oferecendo detalhes técnicos apenas se solicitado. Uso frameworks como "Situação-Complicação-Resolução" e sempre preparo uma versão executiva de 2 minutos e uma versão detalhada de 15 minutos. Também peço feedback regularmente: "Fui claro? Precisa de mais detalhes ou menos?"

A melhoria tem sido notável. Na SEFAZ-RS, minhas apresentações ao Secretário da Fazenda são muito mais efetivas porque começo com o "so what" - o impacto em receita, em eficiência, em cidadãos atendidos - e só depois entro nos detalhes técnicos se ele demonstrar interesse. É um equilíbrio constante entre minha paixão pelos detalhes técnicos e a necessidade de comunicar de forma que ressoe com cada audiência específica.`,
          tags: ["comunicação", "executiva", "audiência", "autoconhecimento"],
          hook: "Tornando comunicação executiva mais concisa e focada em impacto",
          mic_drop: "Começar pelo 'so what' e oferecer detalhes técnicos apenas se solicitado"
        }
      ]
    },

    // PERGUNTAS COMPORTAMENTAIS - MANTIDAS COMO ESTÃO
    comportamentais: {
      question: "Amazon Behavioral Questions",
      category: "STAR Response Examples",
      versions: [
        {
          id: "unfinished_task",
          title: "Unfinished Task",
          badge: "STAR",
          badgeColor: "bg-red-500",
          context: "Tell me about a time when you had to leave a task unfinished",
          content: `**Situation**: Em 2016, durante a migração HSBC→Bradesco, eu estava simultaneamente liderando a implementação de controles FATCA e a validação de dados de clientes HNWI. Com apenas 3 semanas para o deadline regulatório, percebi que não conseguiria entregar ambos com a qualidade necessária.

**Task**: Minha responsabilidade era garantir compliance total em ambas as frentes, mas os recursos eram limitados e a complexidade maior que o estimado.

**Action**: Tomei a decisão difícil de priorizar compliance FATCA, que tinha impacto regulatório direto. Escalei para meu diretor, apresentei análise detalhada de riscos e propus postergar validação HNWI em 2 semanas. Realoquei meu melhor analista para FATCA e assumi pessoalmente tarefas de validação técnica.

**Result**: Entregamos compliance FATCA no prazo, evitando multas regulatórias de US$ 2+ milhões. A validação HNWI foi concluída 2 semanas depois, sem impacto em clientes. Aprendi que ownership às vezes significa tomar decisões difíceis e comunicar riscos de forma transparente.`,
          tags: ["ownership", "customer obsession", "STAR"],
          hook: "Priorização estratégica sob pressão regulatória",
          mic_drop: "Ownership significa tomar decisões difíceis e comunicar riscos transparentemente"
        },
        {
          id: "simple_solution",
          title: "Simple Solution to Complex Problem",
          badge: "STAR",
          badgeColor: "bg-blue-500",
          context: "Tell me about a time when you gave a simple solution to a complex problem",
          content: `**Situation**: Na Huawei, enfrentávamos SLAs de 382 dias para rollout de torres 4G, com 20 fornecedores e processos complexos de licenciamento envolvendo prefeituras, ANATEL e proprietários de terrenos.

**Task**: Como Program Manager, precisava acelerar drasticamente as entregas para cumprir compromissos da Copa 2014, mas o processo tinha dezenas de dependências críticas.

**Action**: Ao invés de otimizar cada etapa individualmente, criei uma solução simples: um "War Room" físico onde todos os stakeholders se reuniam diariamente. Implementei um dashboard visual único mostrando status de cada torre em tempo real. A regra era simples: nenhum problema podia ficar mais de 24h sem solução ou escalação.

**Result**: Reduzimos SLA de 382 para 62 dias - melhoria de 84%. O modelo foi replicado globalmente pela Huawei, gerando US$ 120 milhões em eficiência. A simplicidade da solução (um local, um dashboard, uma regra) resolveu a complexidade de coordenação entre múltiplos stakeholders.`,
          tags: ["invent and simplify", "dive deep", "STAR"],
          hook: "War Room: simplicidade que resolveu complexidade multi-stakeholder",
          mic_drop: "84% de melhoria através de simplicidade radical"
        },
        {
          id: "invented_something",
          title: "Innovation / Invention",
          badge: "STAR",
          badgeColor: "bg-purple-500",
          context: "Tell me about a time when you invented something",
          content: `**Situation**: Na Unimed, processamento manual de sinistros consumia 40% do tempo do time médico, criando gargalos que impactavam 695 mil beneficiários. Cada sinistro passava por 7 etapas de validação manual.

**Task**: Como Strategy Advisor, precisava encontrar solução que reduzisse workload sem comprometer qualidade médica ou compliance regulatório.

**Action**: Inventei um sistema de "AI Triage" combinando OCR para documentos médicos, NLP para análise de laudos e ML para classificação de risco. O sistema automaticamente aprovava casos de baixa complexidade (60% do volume), priorizava casos urgentes e sinalizava anomalias para revisão humana. Implementei em 4 meses com squad de 6 pessoas.

**Result**: Reduzimos cycle time de processamento em 30%, liberando 280 horas/mês do time médico. Geramos US$ 45 milhões em savings anuais. NPS de beneficiários subiu 6 pontos devido a aprovações mais rápidas. O sistema foi expandido para outras operadoras Unimed, impactando 2.1 milhões de vidas.`,
          tags: ["invent and simplify", "customer obsession", "STAR"],
          hook: "AI Triage: automação inteligente que liberou tempo médico",
          mic_drop: "US$ 45 milhões em savings + NPS +6 pontos"
        }
      ]
    }
  },

  en: {
    title: "Amazon Strategic Icebreaker",
    subtitle: "Differentiated positioning from the first seconds",
    
    // MAIN QUESTION: "TELL ME ABOUT YOURSELF"
    fale_sobre_voce: {
      question: "Tell me about yourself / Walk me through your background",
      category: "Personal Introduction",
      versions: [
        {
          id: "versao_pessoal",
          title: "Personal Version",
          badge: "Personal",
          badgeColor: "bg-blue-500",
          context: "To create human connection and break the ice",
          content: `I'm Leonardo Menezes, from Porto Alegre in southern Brazil, 40 years old, married to Thais and father to Livia, who is 10. Beyond my passion for digital transformation, I'm naturally curious - I like staying updated on what's happening in the world and new trends, especially in technology and innovation.

In my free time, you'll find me playing chess - I love the strategy of the game, which reminds me a lot of the challenges I face at work. I also play guitar to relax, and I'm an avid reader. I'm always with a book about strategy, technology, or leadership.

What drives me professionally is the same curiosity that drives me personally: understanding how things work and how they can be improved. This combination of analytical thinking from chess, creativity from music, and continuous learning from books reflects in how I lead projects and solve complex problems. At the core, I'm someone who loves transforming complexity into simplicity, always seeking solutions that make sense both technically and for the people who will use them.`,
          tags: ["personal", "family", "hobbies", "human connection"],
          hook: "From southern Brazil, father, naturally curious",
          mic_drop: "Transforming complexity into simplicity - from chess to business"
        },
        {
          id: "versao_profissional",
          title: "Professional Version",
          badge: "Professional",
          badgeColor: "bg-green-500",
          context: "To highlight expertise and track record",
          content: `I'm Leonardo Menezes, and for the past 15 years I've dedicated myself to transforming complex operations into measurable results. My journey began at Huawei, where I spent 6 years building the infrastructure that connected Brazil to 4G. That's where I delivered Brazil's first 4G station in 2012 and coordinated all connectivity for the 2014 World Cup. What marked me during that time was learning that scale and operational excellence aren't mutually exclusive - in fact, they're complementary when you dive into the right details.

I then moved to financial services, where I faced one of the most critical challenges of my career: leading the migration of 3 billion dollars in assets from HSBC to Bradesco. It was months of intense work, negotiating with regulators, coordinating multidisciplinary teams, and ensuring every cent was transferred without errors. The result? Zero failures, zero data loss, and the confidence of having delivered something many thought impossible. Shortly after, I co-led the launch of Next Digital Bank, competing directly with fintechs like Nubank.

More recently, I've focused on applying artificial intelligence to solve real problems. At Unimed, I implemented automation that reduced claims processing time by 30%, generating 45 million dollars in annual savings. At Sicredi, my machine learning models accelerated credit approvals by 40%, directly impacting the lives of 6.4 million members. Currently at SEFAZ-RS, I'm modernizing the state's tax management using value-based management frameworks.

What differentiates me isn't just having technical experience or strategic vision in isolation, but being able to navigate between these two worlds. I'm equally comfortable discussing system architecture with engineers or presenting ROI to CFOs. At the end of the day, what drives me is transforming complexity into measurable value for who truly matters: the end customer.`,
          tags: ["executive", "impact", "leadership", "results"],
          hook: "15 years transforming complex operations into measurable results",
          mic_drop: "From code to boardroom - transforming complexity into customer value"
        },
        {
          id: "versao_tecnica",
          title: "Technical Version",
          badge: "Technical",
          badgeColor: "bg-gray-700",
          context: "To highlight technical product, program and AI expertise",
          content: `I'm a Product Manager and Program Manager specialized in digital transformation and AI implementation. My experience spans telecommunications infrastructure to digital products in fintech and healthcare.

Technically, I have expertise in end-to-end product management, from discovery and user research to implementation and growth. I work with agile methodologies, design thinking and data-driven decision making. I have hands-on experience with machine learning for credit scoring, fraud detection and process automation.

In recent projects, I led AI implementations that automated manual processes, resulting in $45M in annual savings. I also developed OKR and value-based management frameworks that were adopted as organizational standards.

My approach blends strategic vision with hands-on execution, always focusing on quantifiable metrics and real business impact. I hold certifications in PMP, PMO-CP and SAFe SSM, and have experience leading multidisciplinary teams of up to 30 people.
  `,
          tags: ["product management", "program management", "AI", "machine learning", "methodologies"],
          hook: "Product & Program Manager — digital transformation & AI",
          mic_drop: "Strategic vision + hands-on execution = measurable impact"
        },
        {
          id: "versao_payments",
          title: "Payments Version",
          badge: "Payments Focus",
          badgeColor: "bg-indigo-500",
          context: "For technical interviewers or role-specific focus",
          content: `I'm Leonardo Menezes, and my professional journey has brought me to a very specific point: transforming payment operations through artificial intelligence and automation. The interesting thing is I got here through an unconventional path, but one that makes perfect sense when you look back.

I started building the infrastructure that supports digital payments today. At Huawei, I led the 4G rollout that enabled PIX and mobile payments in Brazil. Back then, in 2012, 2013, nobody imagined that network would be the foundation for the payment revolution we're experiencing today. Later, in financial services, I managed payment operations at billion-dollar scale - I migrated 3 billion dollars in assets between banks without a single transactional failure. That's where I learned that in payments, 99.9% availability isn't enough - you need 99.99%, because each failure is someone's money that didn't arrive where it should.

In recent years, I've focused on applying AI to optimize these operations. At Sicredi, I implemented machine learning models for credit scoring and fraud detection that accelerated approvals by 40% without increasing default rates. At Unimed, I automated claims processing with AI, reducing cycle time by 30% and generating 45 million dollars in annual savings. What I learned is that AI isn't magic - it's about deeply understanding the process, identifying where human decision adds value and where it's just overhead, and then building systems that amplify the best of both worlds.

My approach is always data-driven. I use metrics like Payment Success Rate, Authorization Rate, and Process Cycle Time to measure real impact, not just operational efficiency. I also have experience with Lean Six Sigma, which I apply to identify waste in payment processes and create sustainable solutions. What motivates me today is the opportunity to apply all this at Amazon scale, especially at such a critical moment as the payment transformation in Brazil with PIX and Open Finance. It's where I can combine critical infrastructure, financial operations, and AI to generate real impact on millions of customers' experience.`,
          tags: ["payments", "AI", "technical", "metrics"],
          hook: "Transforming payment operations through AI - from 4G to PIX",
          mic_drop: "Infrastructure + financial operations + AI = impact at Amazon scale"
        }
      ]
    },

    // QUESTION: "WHY AMAZON?"
    por_que_amazon: {
      question: "Why Amazon? / What attracts you to Amazon?",
      category: "Motivation and Cultural Fit",
      versions: [
        {
          id: "versao_principal",
          title: "Main Version",
          badge: "Recommended",
          badgeColor: "bg-orange-500",
          content: `Amazon has always fascinated me because it's where customer obsession isn't just nice rhetoric in a PowerPoint presentation - it's genuinely embedded in the DNA of every decision. Throughout my career, I've always prioritized end-customer impact. When I delivered Brazil's first 4G station, I wasn't just installing antennas - I was connecting people. When I implemented AI that reduces healthcare claims processing time, I wasn't just optimizing processes - I was making patients receive approvals faster.

What attracts me most to Amazon is the culture of diving deep into problems and simplifying the complex. At Huawei, when SLAs were at 382 days, I didn't accept the easy answer of "that's how it works in Brazil." I dove into the data, redesigned workflows, and reduced it to 62 days. At Unimed, when I saw complex operations consuming precious time from doctors, I simplified through automation, generating 45 million dollars in savings. This mentality of not accepting the status quo and always seeking the root of the problem is something I see deeply rooted in Amazon.

The culture of complete ownership also resonates strongly with me. At HSBC, when I took on the 3 billion dollar migration, I didn't delegate responsibility - I personally dove into negotiations with regulators, technical details, compliance validations. "It's not my responsibility" doesn't exist in my vocabulary. You own the problem end-to-end and deliver, period.

But what truly motivates me to be here today is the combination of scale, innovation, and impact. I want to work in an organization that thinks big, acts fast, and puts the customer first in every decision. It's where I can apply my operational transformation experience to generate value at truly global scale. After 15 years building critical infrastructure, transforming financial operations, and implementing AI in traditional sectors, Amazon represents the next level: impacting millions of customers while maintaining obsession with detail and operational excellence.`,
          tags: ["customer obsession", "ownership", "dive deep", "scale"],
          hook: "Customer obsession isn't rhetoric - it's in every decision's DNA",
          mic_drop: "Scale + innovation + impact = next level of my career"
        },
        {
          id: "versao_pagamentos_flywheel",
          title: "Payments & Flywheel Version",
          badge: "Payments Focus",
          badgeColor: "bg-green-500",
          content: `Amazon fascinates me because it's where I can apply my payments experience to accelerate the world's most powerful growth flywheel. I deeply understand how efficient payment operations aren't just a cost center - they reduce friction, improve customer experience, and enable more selection. It's a virtuous cycle: the better the payment experience, the more customers buy. The more customers buy, the more data you have to optimize. The more you optimize, the better the experience gets. And the cycle accelerates.

My experience is exactly what this moment requires. I've led payment operations at billion-dollar scale, implemented AI to optimize authorization rates and process cycle time, and have critical regulatory compliance expertise. At Sicredi, my machine learning models increased payment success rate by 25%, generating 50 million dollars in additional revenue. It wasn't magic - it was understanding where failure points were, applying data to predict behaviors, and building systems that continuously learn.

What especially motivates me is the opportunity to work on the strategic partnership with Oakberry, applying AI/ML to transform payment business operations. I see immense potential to implement automation that reduces operational cost per transaction while improving customer payment satisfaction. It's exactly the kind of challenge that energizes me: taking something that already works well and making it extraordinary through data and technology.

Amazon is where I can combine my passion for innovation with global-scale impact. I want to be part of an organization that doesn't just accept change, but leads it - especially at a critical moment like the payment transformation in Brazil with PIX and Open Finance. It's where I can apply everything I've learned in 15 years to help build the future of digital payments.`,
          tags: ["payments", "flywheel", "growth", "innovation"],
          hook: "Accelerate the world's most powerful flywheel through payments",
          mic_drop: "Lead payment transformation in Brazil with PIX and Open Finance"
        }
      ]
    },

    // QUESTION: "WHY THIS ROLE?"
    por_que_esta_vaga: {
      question: "Why this specific role? / Why this position?",
      category: "Position Fit",
      versions: [
        {
          id: "versao_principal",
          title: "Main Version",
          badge: "Recommended",
          badgeColor: "bg-purple-500",
          content: `This role is the perfect convergence of everything I've built over the past 15 years: program management at scale, operational transformation, and AI/ML implementation in critical operations. When I read the description, it was almost as if it had been written looking at my resume.

My background is exactly what you need. I've led complex programs that generated over 300 million dollars in value, always focusing on operational excellence. At Huawei, I coordinated 30+ project managers and 20 suppliers to deliver critical infrastructure. At HSBC and Bradesco, I managed the most complex migration in Brazilian banking history. But it wasn't just about coordinating - it was about diving into technical details, understanding every critical dependency, and ensuring nothing fell through the cracks.

More importantly: I have hands-on experience implementing AI/ML in payment operations. At Unimed, my models automated processing that reduced cycle time by 30%. At Sicredi, I implemented machine learning for credit scoring and fraud detection that significantly improved authorization rates. I'm not someone who just manages AI projects - I understand the algorithms, participate in architecture decisions, and know exactly which metrics matter.

The Oakberry partnership especially excites me because I see the opportunity to apply Lean Six Sigma to identify waste in payment processes and implement AI use cases that reduce operational cost per transaction. My experience with value-based management and OKRs will be crucial to measure ROI of these transformations and ensure we're generating real value, not just implementing technology for technology's sake.

What attracts me to this position is the combination of end-to-end ownership, measurable impact, and opportunity to apply my expertise in an environment that values innovation and customer obsession. It's exactly where I want to be: solving complex problems at scale, with autonomy to make decisions and total responsibility for results.`,
          tags: ["program management", "AI/ML", "operational excellence", "value-based"],
          hook: "Perfect convergence: program management + transformation + AI/ML",
          mic_drop: "End-to-end ownership with measurable impact in innovation environment"
        }
      ]
    },

    // QUESTION: "STRENGTHS"
    pontos_fortes: {
      question: "What are your main strengths? / What are your strengths?",
      category: "Self-awareness",
      versions: [
        {
          id: "versao_principal",
          title: "Main Version",
          badge: "Recommended",
          badgeColor: "bg-green-500",
          content: `My main differentiator is the ability to dive deeply into complex problems and consistently deliver measurable results. I'm not someone who stays on the surface - when I take on a challenge, I go to the root.

At Huawei, when SLAs were at 382 days, I didn't accept generic explanations. I personally conducted root cause analysis using Ishikawa and 5 Whys, identified that 60% of delays came from regulatory bottlenecks, personally negotiated with municipalities and ANATEL, redesigned workflows, and reduced to 62 days. I didn't delegate the problem - I dove into it.

Another strength is my ability to consistently deliver results. I have a track record of over 300 million dollars in value generated. At Unimed, I implemented AI that automated 30% of claims processing, generating 45 million dollars in annual savings. At HSBC, I migrated 3 billion dollars without a single failure. These aren't promises - they're documented and audited deliveries.

I also excel at connecting technical decisions with customer impact. At Sicredi, my machine learning models didn't just technically improve credit scoring - they reduced credit approval time, improving experience for 6.4 million members. I always ask: "How does this improve the end customer's life?" If I can't answer, we rethink the solution.

What differentiates me is being able to combine technical depth with business vision. I'm equally comfortable reviewing Python code for ML models or presenting business case to the CFO. This versatility allows me to be an effective bridge between technical teams and executive leadership, ensuring we're building the right things, the right way, for the right reasons.`,
          tags: ["dive deep", "deliver results", "customer obsession", "technical"],
          hook: "Dive deeply and consistently deliver measurable results",
          mic_drop: "Technical depth + business vision = bridge between code and boardroom"
        }
      ]
    },

    // QUESTION: "WEAKNESSES / DEVELOPMENT AREAS"
    areas_desenvolvimento: {
      question: "What are your development areas? / What are your weaknesses?",
      category: "Self-awareness",
      versions: [
        {
          id: "versao_delegacao_estrategica",
          title: "Strategic Delegation",
          badge: "Development",
          badgeColor: "bg-yellow-500",
          content: `A competency I've been improving is strategic delegation, especially in high-visibility projects. My technical experience and passion for details sometimes lead me to take on tasks that could be better executed by team specialists. It's almost as if I want to personally ensure every piece is in the right place.

I identified this during AI implementation at Unimed, where initially I was too involved in the technical aspects of machine learning. I realized this limited my ability to focus on strategy and stakeholder alignment. I was solving technical problems when I should have been ensuring we were solving the right problems.

I developed a more structured approach: I clearly define objectives and success criteria, identify the best resources for each task, and establish regular control points. This allows me to maintain visibility without micromanaging. In practice, this means instead of reviewing every line of code, I define clear quality standards, establish pair code reviews, and focus my energy on ensuring the technical solution aligns with the business problem.

The result was significant improvement in team efficiency and delivery quality. It also allowed me to focus more time on higher-value activities: strategic alignment, stakeholder management, and people development. It's a practical example of how developing talent around you and trusting their expertise generates better results than trying to do everything yourself. I continue working on this consciously in each new project.`,
          tags: ["delegation", "strategy", "people development", "self-awareness"],
          hook: "Improving strategic delegation in high-visibility projects",
          mic_drop: "Trusting team expertise generates better results than doing everything yourself"
        },
        {
          id: "versao_comunicacao_executiva",
          title: "Concise Executive Communication",
          badge: "Development",
          badgeColor: "bg-yellow-600",
          content: `An area I continue developing is making my executive communication more concise, especially when presenting complex technical topics to non-technical audiences. My natural tendency is to want to explain all the context and technical details that led to a conclusion, because for me those details are fascinating and important. But I learned that the audience doesn't always need or want that level of depth.

I realized this clearly during a presentation to Unimed's board, where I started explaining the technical architecture of machine learning models before getting to business results. I saw in their faces I was losing the audience. The CFO gently interrupted me and asked: "Leonardo, how much will this save?" It was a wake-up call.

Since then, I've been consciously working on structuring communications starting with impact and then offering technical details only if requested. I use frameworks like "Situation-Complication-Resolution" and always prepare a 2-minute executive version and a 15-minute detailed version. I also regularly ask for feedback: "Was I clear? Need more details or less?"

The improvement has been notable. At SEFAZ-RS, my presentations to the Treasury Secretary are much more effective because I start with the "so what" - the impact on revenue, efficiency, citizens served - and only then get into technical details if he shows interest. It's a constant balance between my passion for technical details and the need to communicate in a way that resonates with each specific audience.`,
          tags: ["communication", "executive", "audience", "self-awareness"],
          hook: "Making executive communication more concise and impact-focused",
          mic_drop: "Start with the 'so what' and offer technical details only if requested"
        }
      ]
    },

    // BEHAVIORAL QUESTIONS - KEPT AS IS
    comportamentais: {
      question: "Amazon Behavioral Questions",
      category: "STAR Response Examples",
      versions: [
        {
          id: "unfinished_task",
          title: "Unfinished Task",
          badge: "STAR",
          badgeColor: "bg-red-500",
          context: "Tell me about a time when you had to leave a task unfinished",
          content: `**Situation**: In 2016, during the HSBC→Bradesco migration, I was simultaneously leading FATCA controls implementation and HNWI client data validation. With only 3 weeks to regulatory deadline, I realized I couldn't deliver both with necessary quality.

**Task**: My responsibility was to ensure total compliance in both workstreams, but resources were limited and complexity greater than estimated.

**Action**: I made the difficult decision to prioritize FATCA compliance, which had direct regulatory impact. I escalated to my director, presented detailed risk analysis, and proposed postponing HNWI validation by 2 weeks. I reallocated my best analyst to FATCA and personally took on technical validation tasks.

**Result**: We delivered FATCA compliance on time, avoiding regulatory fines of $2+ million. HNWI validation was completed 2 weeks later, with no impact on clients. I learned that ownership sometimes means making difficult decisions and communicating risks transparently.`,
          tags: ["ownership", "customer obsession", "STAR"],
          hook: "Strategic prioritization under regulatory pressure",
          mic_drop: "Ownership means making difficult decisions and communicating risks transparently"
        },
        {
          id: "simple_solution",
          title: "Simple Solution to Complex Problem",
          badge: "STAR",
          badgeColor: "bg-blue-500",
          context: "Tell me about a time when you gave a simple solution to a complex problem",
          content: `**Situation**: At Huawei, we faced 382-day SLAs for 4G tower rollout, with 20 suppliers and complex licensing processes involving municipalities, ANATEL, and landowners.

**Task**: As Program Manager, I needed to drastically accelerate deliveries to meet 2014 World Cup commitments, but the process had dozens of critical dependencies.

**Action**: Instead of optimizing each step individually, I created a simple solution: a physical "War Room" where all stakeholders met daily. I implemented a single visual dashboard showing each tower's status in real-time. The rule was simple: no problem could stay more than 24h without solution or escalation.

**Result**: We reduced SLA from 382 to 62 days - an 84% improvement. The model was replicated globally by Huawei, generating $120 million in efficiency. The simplicity of the solution (one location, one dashboard, one rule) solved the complexity of coordination among multiple stakeholders.`,
          tags: ["invent and simplify", "dive deep", "STAR"],
          hook: "War Room: simplicity that solved multi-stakeholder complexity",
          mic_drop: "84% improvement through radical simplicity"
        },
        {
          id: "invented_something",
          title: "Innovation / Invention",
          badge: "STAR",
          badgeColor: "bg-purple-500",
          context: "Tell me about a time when you invented something",
          content: `**Situation**: At Unimed, manual claims processing consumed 40% of medical team's time, creating bottlenecks impacting 695k members. Each claim went through 7 manual validation steps.

**Task**: As Strategy Advisor, I needed to find a solution that reduced workload without compromising medical quality or regulatory compliance.

**Action**: I invented an "AI Triage" system combining OCR for medical documents, NLP for report analysis, and ML for risk classification. The system automatically approved low-complexity cases (60% of volume), prioritized urgent cases, and flagged anomalies for human review. I implemented it in 4 months with a 6-person squad.

**Result**: We reduced processing cycle time by 30%, freeing 280 hours/month of medical team time. We generated $45 million in annual savings. Beneficiary NPS rose 6 points due to faster approvals. The system was expanded to other Unimed operators, impacting 2.1 million lives.`,
          tags: ["invent and simplify", "customer obsession", "STAR"],
          hook: "AI Triage: intelligent automation that freed medical time",
          mic_drop: "$45 million in savings + NPS +6 points"
        }
      ]
    }
  }
};

export default icebreakerData;

