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
          context: "Para destacar produto, programa e IA",
          content: `Sou um Product Manager e Program Manager com especialização em transformação digital e IA. Minha experiência vai de infraestrutura de telecom a produtos digitais em fintechs e saúde.

Tenho domínio de ponta a ponta em gestão de produto: discovery, priorização, entrega e growth. Trabalho com métodos ágeis, design thinking e decisões guiadas por dados. Possuo experiência prática com machine learning para crédito, fraude e automação de processos.

Nos últimos projetos liderei implementações de IA que automatizaram processos manuais e geraram 45 milhões de dólares em savings anuais. Também criei frameworks de OKRs e value-based management adotados como padrão organizacional.

Equilibro visão estratégica e execução hands-on, sempre com métricas claras e impacto de negócio comprovado. Sou certificado PMP, PMO-CP e SAFe SSM, e já liderei equipes multidisciplinares de até 30 pessoas.`,
          tags: ["product management", "program management", "IA", "machine learning", "metodologias"],
          hook: "Product & Program Manager - transformação digital e IA",
          mic_drop: "Visão estratégica + execução hands-on = impacto mensurável"
        },
        {
          id: "versao_payments",
          title: "Versão Payments",
          badge: "Payments Focus",
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
          content: `Meu principal diferencial é a capacidade de mergulhar profundamente em problemas complexos e converter diagnóstico em execução mensurável.

Na Huawei, quando os SLAs estavam em 382 dias, conduzi pessoalmente análises de causa raiz (Ishikawa e 5 Whys), negociei com prefeituras e com a ANATEL e redesenhei o fluxo completo. O resultado foi a redução para 62 dias — sem atalhos, apenas mergulho profundo, dados na mão e obsessão por execução.

Na Unimed automatizei 30% do processamento de sinistros com IA, gerando 45 milhões de dólares em economia anual. No HSBC liderei a migração de 3 bilhões de dólares sem qualquer falha. Esses números são auditados e documentados.

Também conecto decisões técnicas ao impacto no cliente. No Sicredi, modelos de machine learning que construí reduziram o tempo de aprovação de crédito e elevaram a experiência de 6,4 milhões de cooperados.

O traço comum é equilibrar profundidade técnica e visão de negócio. Sou igualmente confortável revisando código Python ou defendendo business cases para CFOs, garantindo que construímos o certo, da maneira certa, pelo motivo certo.`,
          tags: ["dive deep", "deliver results", "customer obsession", "technical"],
          hook: "Mergulho profundo com entregas auditáveis",
          mic_drop: "Profundidade técnica + visão de negócio que fecha o ciclo"
        },
        {
          id: "foco_estrategia",
          title: "Foco em Visão Estratégica",
          badge: "Estratégia",
          badgeColor: "bg-blue-700",
          content: `Tenho facilidade em traduzir visão estratégica em roadmaps acionáveis e mensuráveis.

Na Unimed antecipei a pressão competitiva e desenhei um portfólio digital que criou quatro novas linhas de receita — hoje respondem por 5% do faturamento. No HSBC/Bradesco converti uma tese de integração em um programa coordenado em cinco países, migrando 3 bilhões de dólares sem incidentes.

Também combino frameworks de longo prazo com cadência operacional. Construo narrativas executivas, conecto investimentos a métricas e monitoro ROI continuamente para garantir que estratégia não vire um slide, mas entregas concretas.`,
          tags: ["estratégia", "execução", "transformação", "ROI"],
          hook: "Visão que vira roadmap, roadmap que vira resultado",
          mic_drop: "Estratégia traduzida em bilhões migrados e novas receitas"
        },
        {
          id: "foco_lideranca",
          title: "Foco em Liderança",
          badge: "Liderança",
          badgeColor: "bg-purple-700",
          content: `Lidero pessoas em ambientes de altíssima complexidade mantendo clareza, ritmo e engajamento.

Implementei o War Room PMO na Huawei, alinhando mais de 30 PMs e 20 fornecedores. Reduzimos SLAs de 382 para 62 dias porque criei transparência radical, cadência diária e mecanismos de decisão em 24 horas.

Minha comunicação conecta níveis técnicos e executivos. Traduzo complexidade para linguagem acessível, removo ruídos e garanto que cada pessoa saiba qual é o próximo passo. Essa combinação mantém os times motivados mesmo em programas longos e desafiadores.`,
          tags: ["liderança", "comunicação", "motivação", "complexidade"],
          hook: "Liderança com cadência, clareza e energia",
          mic_drop: "War Room PMO replicado globalmente com times energizados"
        },
        {
          id: "foco_inovacao",
          title: "Foco em Inovação",
          badge: "Inovação",
          badgeColor: "bg-yellow-600",
          content: `Transformo tecnologias emergentes em soluções com ROI comprovado.

Fui pioneiro no rollout do 4G no Brasil e, anos depois, liderei automações com IA que reduziram em 30% o ciclo de sinistros na Unimed. No Sicredi desenhei algoritmos que aumentaram a aprovação de crédito mantendo risco sob controle.

Não implemento inovação pela novidade. Construo business cases, defino métricas de sucesso, piloto com squads multifuncionais e converto aprendizado em playbook organizacional.`,
          tags: ["inovação", "tecnologia", "data-driven", "cultura"],
          hook: "Inovação com playbook e métricas, não apenas hype",
          mic_drop: "IA, 4G e OKRs transformados em valor recorrente"
        },
        {
          id: "foco_dados",
          title: "Foco em Dados e Métricas",
          badge: "Dados & Métricas",
          badgeColor: "bg-cyan-700",
          content: `Sou obcecado por decisões ancoradas em dados confiáveis e acessíveis.

No Governo do RS redesenhei o data lake fiscal integrando 48 fontes e criei dashboards executivos que reduziram o ciclo decisório de semanas para horas. No Sicredi democratizei métricas de risco e produto para os times de negócio, permitindo que squads testassem hipóteses com autonomia.

Invisto em governança, qualidade de dados e storytelling visual. Essa disciplina garante que cada discussão estratégica comece com fatos, não suposições.`,
          tags: ["data", "analytics", "governança", "métricas"],
          hook: "Decisão boa começa com dados confiáveis",
          mic_drop: "48 fontes integradas → decisões em horas, não semanas"
        },
        {
          id: "foco_cliente",
          title: "Foco em Obsessão pelo Cliente",
          badge: "Cliente",
          badgeColor: "bg-orange-600",
          content: `Uso a voz do cliente como bússola para priorizar e desenhar soluções.

Ao redesenhar o onboarding do Sicredi, entrevistei cooperados, analisei NPS e métricas de churn. O resultado foi uma jornada digital que elevou a conversão em 23% e reduziu chamadas no contact center.

Também levo feedback do campo para a mesa executiva. Isso garante que decisões financeiras, tecnológicas e operacionais mantenham o cliente no centro e gerem valor perceptível para quem usa o serviço.`,
          tags: ["customer obsession", "experiência", "NPS", "priorização"],
          hook: "Clientes reais guiando decisões estratégicas",
          mic_drop: "Onboarding redesenhado: +23% de conversão e menos chamadas"
        },
        {
          id: "foco_aprendizado",
          title: "Foco em Aprendizado Contínuo",
          badge: "Learn & Be Curious",
          badgeColor: "bg-emerald-600",
          content: `Aprendo rápido, ensino rápido e crio sistemas que multiplicam conhecimento.

Lidero comunidades internas de prática em IA/ML e Lean, documentando playbooks e promovendo tech talks para acelerar adoção em larga escala. Em cada transformação capturo lições aprendidas e transformo em frameworks reutilizáveis.

Essa postura garante que os times elevem a barra juntos, reduz erros repetidos e mantém a organização sempre um passo à frente.`,
          tags: ["learn and be curious", "coaching", "comunidade", "melhoria contínua"],
          hook: "Aprendizagem que vira vantagem competitiva",
          mic_drop: "Playbooks e comunidades que aceleram cada nova iniciativa"
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

A melhoria tem sido notável. Na SEFAZ-RS, minhas apresentações ao Secretário da Fazenda são muito mais efetivas porque começo com o "so what" - o impacto em receita, eficiência, cidadãos atendidos - e só depois entro nos detalhes técnicos se ele demonstrar interesse. É um equilíbrio constante entre minha paixão pelos detalhes técnicos e a necessidade de comunicar de forma que ressoe com cada audiência específica.`,
          tags: ["comunicação", "executiva", "audiência", "autoconhecimento"],
          hook: "Tornando comunicação executiva mais concisa e focada em impacto",
          mic_drop: "Começar pelo 'so what' e oferecer detalhes técnicos apenas se solicitado"
        },
        {
          id: "paciencia_processos_politicos",
          title: "Paciência com Processos Políticos",
          badge: "Desenvolvimento",
          badgeColor: "bg-amber-500",
          content: `Uma área de desenvolvimento contínuo é a minha paciência com processos políticos organizacionais, especialmente quando percebo que decisões técnicas estão sendo influenciadas por fatores não ligados ao mérito da solução.

Minha orientação natural é eficiência e entrega de resultados, o que às vezes me faz querer acelerar etapas de consenso que são vitais para o buy-in organizacional. Aprendi isso na implementação dos frameworks de OKRs na SEFAZ-RS, quando percebi que não bastava ter a melhor arquitetura – era preciso construir acordos duradouros.

Hoje invisto mais tempo no início dos projetos para mapear as dinâmicas políticas, identificar champions em diferentes áreas e traduzir benefícios técnicos em objetivos estratégicos. Também passei a enxergar o processo de construção de consenso como parte do trabalho, não como obstáculo.

O resultado são implementações mais sustentáveis, com adoção orgânica e menor retrabalho. Transformar política em alavanca virou uma vantagem competitiva pessoal.`,
          tags: ["política", "consenso", "sustentabilidade", "adoção"],
          hook: "Transformando política em alavanca de adoção",
          mic_drop: "Consenso bem construído = implementação sustentável"
        },
        {
          id: "decisoes_com_dados_incompletos",
          title: "Decisões com Dados Imperfeitos",
          badge: "Desenvolvimento",
          badgeColor: "bg-yellow-400",
          content: `Outra frente em evolução é tomar decisões rápidas mesmo quando os dados ainda não estão perfeitos. Meu reflexo natural é mergulhar até ter 100% de confiança estatística, e isso já atrasou alguns experimentos no Sicredi.

Para equilibrar, passei a definir timeboxes para análises, acordar previamente qual nível de confiança é aceitável e mapear claramente qual aprendizado espero de cada ciclo. Se o dado não estiver completo no limite combinado, seguimos com um experimento controlado e coletamos o que falta depois.

Esse ajuste reduziu o tempo de decisão, manteve o viés por ação e criou uma cadência de aprendizado contínuo sem paralisia por análise. A equipe ganhou velocidade sem abrir mão de responsabilidade.`,
          tags: ["decisão", "dados", "bias for action", "timeboxing"],
          hook: "Timebox para análise e decisão sem paralisia",
          mic_drop: "Decisões em ritmo de sprint, com aprendizado incremental"
        },
        {
          id: "proteção_foco_time",
          title: "Protegendo o Foco do Time",
          badge: "Desenvolvimento",
          badgeColor: "bg-orange-500",
          content: `Também venho lapidando minha disciplina em dizer "não agora" para demandas que diluem o foco do time. Minha vontade de gerar impacto fazia com que eu aceitasse novos pedidos sem avaliar a capacidade disponível, o que já sobrecarregou squads durante o rollout com a Oakberry.

Hoje, antes de absorver trabalho extra, reviso os OKRs ativos, valido trade-offs com dados de capacidade e construo narrativas transparentes com stakeholders. Quando aceito algo novo, ajusto o backlog na mesma hora e comunico o impacto para evitar heróis de última hora.

Essa musculatura trouxe previsibilidade ao roadmap, preservou energia do time e manteve a qualidade das entregas. Aprendi que foco também é uma escolha de liderança.`,
          tags: ["priorização", "foco", "capacidade", "trade-offs"],
          hook: "Escudo de foco para proteger capacidade do squad",
          mic_drop: "Foco preservado = entregas consistentes sem heróis de última hora"
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
          context: "To showcase product, program, and AI depth",
          content: `I'm a Product and Program Manager specialized in digital transformation and AI. My background spans telecommunications infrastructure and digital products across fintech and healthcare.

I manage products end-to-end: discovery, prioritization, delivery, and growth. I work with agile methods, design thinking, and data-driven decisions, and I have hands-on experience with machine learning for credit, fraud, and process automation.

In recent engagements I led AI initiatives that automated manual work and generated 45 million dollars in annual savings. I also built OKR and value-based management frameworks later adopted as organizational standards.

I balance strategic vision with hands-on execution, always anchored in clear metrics and measurable business impact. I'm PMP, PMO-CP, and SAFe SSM certified, and have led cross-functional teams of up to 30 people.`,
          tags: ["product management", "program management", "AI", "machine learning", "methods"],
          hook: "Product & Program leader with practical AI delivery",
          mic_drop: "Strategic vision + hands-on execution = measurable outcome"
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
          title: "Core Narrative",
          badge: "Recommended",
          badgeColor: "bg-green-500",
          content: `My strongest differentiator is diving deep into complex problems and converting diagnosis into measurable execution.

At Huawei, when tower rollouts were stalled at 382 days, I personally ran Ishikawa and 5 Whys analysis, renegotiated with municipalities and ANATEL, and redesigned the end-to-end workflow. We brought the SLA down to 62 days — pure dive deep, data on hand, and execution obsession.

At Unimed I automated 30% of claims processing with AI, generating 45 million dollars in annual savings. At HSBC I led a 3-billion-dollar migration with zero incidents. These numbers are audited and documented.

I also connect technical decisions to customer outcomes. At Sicredi, the machine learning models I built reduced credit approval time and improved experience for 6.4 million members.

The common thread is balancing technical depth with business vision. I'm equally comfortable reviewing Python code or defending business cases to CFOs, making sure we ship the right thing, the right way, for the right reason.`,
          tags: ["dive deep", "deliver results", "customer obsession", "technical"],
          hook: "Deep dives that end in audited outcomes",
          mic_drop: "Technical depth + business vision that closes the loop"
        },
        {
          id: "foco_estrategia",
          title: "Strategic Vision in Action",
          badge: "Strategy",
          badgeColor: "bg-blue-700",
          content: `I translate long-term vision into actionable, measurable roadmaps.

At Unimed I anticipated competitive pressure and built a digital portfolio that launched four new products — now 5% of total revenue. At HSBC/Bradesco I turned an integration thesis into a coordinated program across five countries, migrating 3 billion dollars with zero data loss.

I combine long-term frameworks with operational cadence. I craft executive narratives, connect investments to metrics, and monitor ROI relentlessly so strategy never becomes just a slide — it becomes delivered value.`,
          tags: ["strategy", "execution", "transformation", "ROI"],
          hook: "Vision that becomes a roadmap, roadmap that becomes results",
          mic_drop: "Strategy translated into billions migrated and new revenue streams"
        },
        {
          id: "foco_lideranca",
          title: "High-Trust Leadership",
          badge: "Leadership",
          badgeColor: "bg-purple-700",
          content: `I lead people through high-complexity programs while preserving clarity, pace, and engagement.

I built the Huawei War Room PMO, aligning 30+ PMs and 20 suppliers. We cut SLAs from 382 to 62 days because I installed radical transparency, daily cadence, and 24-hour decision mechanisms.

My communication bridges technical and executive levels. I translate complexity into clear language, remove noise, and ensure everyone knows the next step. That keeps teams energized even in long, demanding transformations.`,
          tags: ["leadership", "communication", "motivation", "complexity"],
          hook: "Leadership with cadence, clarity, and energy",
          mic_drop: "War Room PMO replicated globally with motivated teams"
        },
        {
          id: "foco_inovacao",
          title: "Innovation with ROI",
          badge: "Innovation",
          badgeColor: "bg-yellow-600",
          content: `I turn emerging technologies into solutions with proven ROI.

I pioneered Brazil's first 4G rollout and, years later, led AI automations that cut claims cycle time by 30% at Unimed. At Sicredi I designed algorithms that increased credit approvals while keeping risk under control.

Innovation is never hype for me. I build business cases, define success metrics, pilot with cross-functional squads, and convert learnings into organizational playbooks.`,
          tags: ["innovation", "technology", "data-driven", "culture"],
          hook: "Innovation with playbooks and metrics, not buzzwords",
          mic_drop: "AI, 4G, and OKRs turned into recurring enterprise value"
        },
        {
          id: "foco_dados",
          title: "Data & Metrics Discipline",
          badge: "Data",
          badgeColor: "bg-cyan-700",
          content: `I'm obsessed with decisions anchored in trustworthy, accessible data.

In the RS Government I redesigned the fiscal data lake, integrating 48 sources and releasing executive dashboards that shrank decision cycles from weeks to hours. At Sicredi I democratized risk and product metrics, enabling squads to test hypotheses autonomously.

I invest in governance, data quality, and visual storytelling. This discipline ensures every strategic debate starts with facts, not assumptions.`,
          tags: ["data", "analytics", "governance", "metrics"],
          hook: "Great decisions start with reliable data",
          mic_drop: "48 sources integrated → decisions in hours, not weeks"
        },
        {
          id: "foco_cliente",
          title: "Customer Obsession in Practice",
          badge: "Customer",
          badgeColor: "bg-orange-600",
          content: `I use the customer's voice as the compass to prioritize and shape solutions.

When I redesigned Sicredi's onboarding journey, I interviewed members, analyzed NPS, and studied churn. The new digital journey lifted conversion by 23% and reduced contact-center calls.

I also bring frontline feedback to executive tables so financial, tech, and operational decisions keep the customer at the center and generate value people can feel.`,
          tags: ["customer obsession", "experience", "NPS", "prioritization"],
          hook: "Real customer signals steering strategic bets",
          mic_drop: "Onboarding redesign: +23% conversion and fewer support calls"
        },
        {
          id: "foco_aprendizado",
          title: "Learning Flywheel",
          badge: "Learn & Be Curious",
          badgeColor: "bg-emerald-600",
          content: `I learn fast, teach fast, and create systems that scale knowledge.

I lead internal communities of practice in AI/ML and Lean, documenting playbooks and hosting tech talks to accelerate enterprise adoption. In every transformation I capture lessons learned and turn them into reusable frameworks.

That mindset keeps teams raising the bar together, reduces repeated mistakes, and makes the organization stay one step ahead.`,
          tags: ["learn and be curious", "coaching", "community", "continuous improvement"],
          hook: "Learning converted into competitive advantage",
          mic_drop: "Playbooks and communities that accelerate every new initiative"
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
          content: `A competency I've been improving is strategic delegation, especially in high-visibility projects. My technical background and love for detail sometimes make me take on tasks that specialists could execute better. It's almost like I want to personally ensure every piece is exactly where it should be.

I noticed this during the AI implementation at Unimed, where I stayed too deep in the machine learning details. That limited my bandwidth to focus on strategy and stakeholder alignment. I was solving technical problems when I should have been confirming we were solving the right business problem.

Now I set clear objectives and success criteria, map the best owner for each task, and schedule regular check-ins. That keeps visibility without micromanagement. Instead of reviewing every line of code, I define quality standards, enforce peer reviews, and invest energy in steering alignment and stakeholder communication.

The payoff has been stronger execution, faster delivery, and more time for high-leverage work like coaching and stakeholder management. Trusting the team's expertise simply scales better than doing everything myself.`,
          tags: ["delegation", "strategy", "people development", "self-awareness"],
          hook: "Sharpening strategic delegation in high-visibility programs",
          mic_drop: "Trusting specialists scales better than doing everything yourself"
        },
        {
          id: "versao_comunicacao_executiva",
          title: "Concise Executive Communication",
          badge: "Development",
          badgeColor: "bg-yellow-600",
          content: `I still work on making executive communication more concise, especially when translating complex technical work for non-technical audiences. My instinct is to share all the context and analysis because I find it fascinating—but the audience often just wants the impact.

A board presentation at Unimed made that painfully clear. I began with architecture details and saw attention slipping. The CFO kindly interrupted: "Leonardo, how much will this save?" That moment reset my approach.

Since then I lead with outcomes, then offer technical depth only if requested. I prep a two-minute executive story and a deeper backup version, use frameworks like Situation-Complication-Resolution, and always ask for feedback on clarity.

At SEFAZ-RS the difference is evident: starting with "so what" keeps leaders engaged and earns me permission to dive deep only when they want it.`,
          tags: ["communication", "executive", "audience", "storytelling"],
          hook: "Leading with impact before diving into technical depth",
          mic_drop: "Start with the 'so what'—earn the right to go deep"
        },
        {
          id: "paciencia_processos_politicos",
          title: "Patience with Organizational Politics",
          badge: "Development",
          badgeColor: "bg-amber-500",
          content: `A development area I monitor closely is staying patient when political dynamics influence technical decisions. I'm wired for efficiency and measurable outcomes, which can make me want to speed up consensus cycles that are vital for long-term adoption.

Implementing OKR frameworks at SEFAZ-RS taught me that having the best design is not enough—you need coalitions. Now I invest more time upfront mapping stakeholders, spotting champions, and translating technical benefits into language that resonates with executive priorities.

I reframed consensus-building as a delivery stage, not a hurdle. The result has been more sustainable rollouts, stronger adoption, and fewer surprises downstream.`,
          tags: ["politics", "consensus", "sustainability", "adoption"],
          hook: "Turning organizational politics into an adoption lever",
          mic_drop: "Well-built consensus = sustainable implementation"
        },
        {
          id: "decisoes_com_dados_incompletos",
          title: "Deciding with Imperfect Data",
          badge: "Development",
          badgeColor: "bg-yellow-400",
          content: `Another area I'm strengthening is making timely decisions even when the dataset isn't yet perfect. My instinct is to keep digging until confidence intervals are pristine, which has delayed a few experiments at Sicredi.

To balance that, I now set timeboxes for analysis, define the acceptable confidence level upfront, and design clear learning plans for each iteration. If the timer expires, we launch a controlled experiment and backfill data later.

This keeps the bias for action alive, shortens decision loops, and maintains a steady learning cadence without analysis paralysis.`,
          tags: ["decision", "data", "bias for action", "timeboxing"],
          hook: "Timeboxing analysis to avoid decision paralysis",
          mic_drop: "Faster decisions with controlled experiments and learning loops"
        },
        {
          id: "proteção_foco_time",
          title: "Protecting Team Focus",
          badge: "Development",
          badgeColor: "bg-orange-500",
          content: `I also work on saying "not now" when new requests dilute squad focus. My drive to contribute sometimes made me accept additional scope without recalibrating capacity, which overloaded teams during the Oakberry rollout.

Now I check active OKRs, make trade-offs explicit with capacity data, and communicate the impact before accepting extra work. When I do take something on, I adjust the backlog immediately and align stakeholders to avoid late heroics.

That discipline keeps the roadmap predictable, preserves team energy, and sustains quality. Focus is a leadership choice, and I'm treating it as such.`,
          tags: ["prioritization", "focus", "capacity", "trade-offs"],
          hook: "Shielding squad focus by making trade-offs explicit",
          mic_drop: "Protected focus = consistent outcomes without burnout"
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




