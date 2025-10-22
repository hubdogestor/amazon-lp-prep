// src/data/icebreaker.js
// Icebreaker estratégico para entrevistas Amazon - Versões naturais e fluidas

const icebreakerData = {
  pt: {
    title: "Icebreaker Estratégico Amazon",
    subtitle: "Posicionamento diferenciado desde os primeiros segundos",
    
    // PERGUNTA PRINCIPAL: "FALE SOBRE VOCÊ"
    fale_sobre_voce: {
      question: "Fale sobre você / Me conte sobre você",
      category: "Apresentação Pessoal",
      versions: [
        {
          id: "default",
          title: "Versão Padrão (Genérica)",
          badge: "Default",
          badgeColor: "bg-gray-500",
          context: "Uma versão segura e completa para usar quando não há informações sobre o entrevistador.",
          content: `Claro. Sou Leonardo Menezes, gaúcho, pai da Livia de 10 anos, e um apaixonado por desvendar sistemas complexos, seja jogando xadrez ou otimizando operações de pagamento. Nos últimos 15 anos, minha carreira tem sido uma jornada para transformar desafios operacionais em resultados mensuráveis e valor para o cliente.

Comecei na Huawei, onde liderei a implementação da primeira rede 4G do Brasil e a infraestrutura da Copa de 2014. Lá, aprendi na prática que escala e excelência andam juntas quando se mergulha nos detalhes. Depois, no setor financeiro, estive à frente da migração de 3 bilhões de dólares do HSBC para o Bradesco, um projeto de altíssimo risco que entregamos com zero falhas, e co-liderei o lançamento do banco digital Next.

Mais recentemente, meu foco tem sido aplicar IA para resolver problemas de negócio. Na Unimed, por exemplo, implementei modelos que automatizaram processos e geraram uma economia de 45 milhões de dólares. No Sicredi, acelerei a análise de crédito com machine learning, impactando 6.4 milhões de cooperados.

O que conecta todas essas experiências é minha capacidade de transitar entre a estratégia e a execução técnica. Sinto-me igualmente à vontade discutindo arquitetura de microsserviços com engenheiros e apresentando o ROI de um projeto para a diretoria. No fundo, o que me move é usar a tecnologia para simplificar a complexidade e entregar valor real para o cliente final.`,
        },
        {
          id: "andreia_guarino",
          title: "Para Andreia Guarino (Foco em Excelência Operacional)",
          badge: "Andreia G.",
          badgeColor: "bg-blue-500",
          context: "Conecta com a experiência dela em melhoria contínua, Six Sigma e operações de pagamento.",
          content: `É um prazer, Andreia. Vi que você tem uma carreira sólida em melhoria contínua e excelência operacional em pagamentos, com certificação Six Sigma, uma área que admiro profundamente. Minha trajetória, de certa forma, seguiu uma busca parecida por eficiência.

Comecei na Huawei, onde meu grande desafio foi redesenhar processos de rollout de telecom. Usando princípios de Lean, consegui reduzir o SLA médio de 382 para 62 dias, um ganho que foi transformador para a operação. Mais tarde, no setor financeiro, apliquei essa mesma mentalidade na migração de 3 bilhões de dólares do HSBC para o Bradesco, onde cada detalhe do processo era crítico para evitar falhas.

Recentemente, tenho combinado essa base de excelência operacional com IA. Na Unimed, por exemplo, usei machine learning para automatizar a análise de sinistros, cortando o tempo de processamento em 30% e gerando uma economia de 45 milhões de dólares.

O que me atrai nesta posição na Amazon é justamente a chance de unir essas duas paixões: a disciplina dos processos, que vejo no seu background, com a inovação em automação, para construir as operações de pagamento mais eficientes e robustas do mercado. No fundo, sou como você: um construtor de sistemas que funcionam melhor, dia após dia.`,
        },
        {
          id: "eduardo_lopes",
          title: "Para Eduardo Lopes (Foco em Estratégia Financeira e M&A)",
          badge: "Eduardo L.",
          badgeColor: "bg-green-500",
          context: "Conecta com a experiência dele em finanças, estratégia (ex-BCG) e decisões de alto impacto.",
          content: `Prazer em conhecê-lo, Eduardo. Notei sua trajetória impressionante, com passagens pelo BCG e INSEAD, focada em estratégia, finanças e M&A. Acredito que temos uma visão de mundo complementar: enquanto você estrutura as grandes decisões de investimento, eu sou o cara que garante que a execução entregue o valor prometido no business case.

Por exemplo, na migração de 3 bilhões de dólares do HSBC para o Bradesco, minha responsabilidade era garantir que a tese de M&A se tornasse realidade, sem perda de dados, clientes ou compliance. Foi um exercício intenso de gestão de risco e entrega de valor. Na Unimed, lancei 4 novos produtos digitais que hoje representam 5% da receita, e aumentei o EBITDA em 22%, sempre conectando a inovação a métricas financeiras claras.

Mais recentemente, tenho focado em como a IA pode otimizar o P&L. Na Unimed, os modelos que implementei geraram 45 milhões de dólares em economia anual. No Sicredi, a automação na análise de crédito não só melhorou a experiência, mas também a eficiência operacional.

Vejo que a Amazon busca líderes que entendem a conexão entre tecnologia, operações e impacto financeiro. É exatamente essa a minha praia: transformar iniciativas estratégicas em resultados auditáveis no balanço.`,
        },
        {
          id: "gabriela_bonelle",
          title: "Para Gabriela Bonelle (Foco em BI e Análise de Dados)",
          badge: "Gabriela B.",
          badgeColor: "bg-yellow-600",
          context: "Conecta com a expertise dela em BI, SQL, BigQuery e transformar dados em decisões.",
          content: `Olá, Gabriela, tudo bem? Vi que você é especialista em transformar dados em decisões, com um background técnico forte em BI, SQL e BigQuery. Eu venho do outro lado da mesa: sou um grande consumidor e parceiro de áreas de dados como a sua para construir produtos e operações mais inteligentes.

Minha carreira tem sido sobre usar os insights que profissionais como você geram para criar impacto real. Por exemplo, no Sicredi, usei dados de comportamento de crédito para treinar modelos de machine learning que aceleraram as aprovações em 40%. Na Unimed, os dashboards de sinistros que ajudei a especificar foram a base para um projeto de automação com IA que economizou 45 milhões de dólares.

Atualmente, na SEFAZ-RS, estou liderando a modernização da gestão fiscal, e o primeiro passo foi justamente criar um portal de PMO com dashboards em tempo real para dar visibilidade e agilidade às decisões.

Acredito que a parceria entre quem gera o dado (BI) e quem o consome (Produto/Operações) é o que cria magia. O que me anima na Amazon é a cultura 'data-driven' e a chance de trabalhar com pessoas como você para transformar os dados de pagamento em ações que melhorem a vida de milhões de clientes.`,
        },
        {
          id: "heleno_pioner",
          title: "Para Heleno Pioner (Foco em Data Science e Economia)",
          badge: "Heleno P.",
          badgeColor: "bg-red-500",
          context: "Conecta com a experiência dele em modelagem, economia (PhD UChicago) e ciência de dados.",
          content: `É uma honra, Heleno. Vi seu perfil e fiquei impressionado com sua profundidade em ciência de dados e economia, com um PhD de Chicago e experiência em criar modelos complexos. Eu sou um grande admirador e parceiro de cientistas de dados como você; meu papel tem sido traduzir o poder dos seus modelos em valor de negócio tangível.

Por exemplo, no Sicredi, trabalhei junto à equipe de dados para implementar modelos de ML que aceleraram a análise de crédito em 40%, transformando um processo que levava dias em minutos. Na Unimed, usei modelos preditivos para automatizar a triagem de sinistros, o que resultou em uma economia de 45 milhões de dólares anuais.

Em ambos os casos, meu trabalho foi garantir que os modelos tivessem os dados certos, fossem integrados aos sistemas legados corretamente e que o ROI fosse claramente medido e comunicado à diretoria. Eu atuo como a ponte entre a ciência e a operação.

O que me fascina na Amazon é a escala em que vocês aplicam a ciência de dados. A oportunidade de colaborar com mentes como a sua para otimizar um ecossistema de pagamentos tão vasto, transformando modelos em melhorias reais para milhões de pessoas, é o desafio que busco para minha carreira.`,
        },
        {
          id: "sujash_biswas",
          title: "Para Sujash Biswas (Foco em Programas Globais e Pagamentos)",
          badge: "Sujash B.",
          badgeColor: "bg-purple-500",
          context: "Conecta com a experiência dele em liderar programas de pagamento em diferentes mercados (LATAM, Índia).",
          content: `É um prazer, Sujash. Vi que você tem uma vasta experiência liderando programas de pagamento em escala global, da Índia à América Latina. Essa visão 'cross-market' é algo que valorizo muito. Minha carreira, embora mais focada no Brasil, sempre envolveu a gestão de programas complexos com stakeholders globais.

Na Huawei, por exemplo, liderei o rollout da primeira rede 4G do Brasil, um programa que exigia a coordenação de times e fornecedores de diversas partes do mundo. O modelo de governança que criei aqui acabou sendo adotado como um padrão global pela empresa. Mais tarde, na migração do HSBC para o Bradesco, coordenei equipes na Índia, China e Polônia para garantir uma transição de 3 bilhões de dólares sem falhas.

Mais recentemente, tenho aplicado essa experiência em programas de transformação com IA. Na Unimed, um projeto de automação que liderei gerou 45 milhões de dólares em economia.

O que me atrai nesta posição é a chance de aplicar essa minha experiência em 'program delivery' no contexto de pagamentos em LATAM, uma área que você conhece tão bem. Acredito que minha capacidade de executar programas complexos, combinada com sua visão estratégica global, pode ser uma parceria muito poderosa para a Amazon.`,
        },
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
          badge: "Payments",
          badgeColor: "bg-green-500",
          content: `A Amazon está prestes a dar o próximo salto em pagamentos com a parceria estratégica com a Oakberry, e é exatamente o tipo de desafio que me move. Combinar AI/ML, operações em escala e design de jornadas para transformar pagamentos em vantagem competitiva é onde entrego meu melhor.

Nos últimos anos liderei transformações que refletem o que vocês querem construir: usei Lean Six Sigma para redesenhar roteiros de aprovação, implementei modelos de ML que elevaram authorization rate em 25% e criei pipelines self-service que reduziram o cycle time em 40%. Fiz isso coordenando produto, engenharia, risco, finanças e parceiros externos para que tecnologia, compliance e experiência do cliente avançassem juntos.

Vejo uma oportunidade clara de aplicar esse repertório em três frentes críticas para a Amazon Brasil: automatizar decisões com inteligência preditiva, expandir capacidades self-service para merchants Oakberry e reduzir custo por transação sem abrir mão da experiência. Meu estilo é definir o mecanismo, instrumentar métricas e conduzir business reviews com dados na mão — seja com VPs, seja com parceiros estratégicos.

Quero liderar essa transformação end-to-end porque acredito que pagamentos são o motor silencioso desse crescimento. Aqui, cada melhoria que entregarmos destrava crescimento, habilita novos produtos e fortalece a confiança do cliente brasileiro na Amazon.`,
          tags: ["pagamentos", "AI/ML", "lean six sigma", "self-service"],
          hook: "Parceria Oakberry como plataforma para o próximo salto em pagamentos",
          mic_drop: "Transformar operações em mecanismos self-service que escalam com o cliente"
        },
        {
          id: "versao_builder",
          title: "Versão Builder",
          badge: "Builder",
          badgeColor: "bg-purple-500",
          content: `A Amazon é o ecossistema ideal para quem gosta de construir produtos começando pelo cliente e desenhando cada etapa a partir desse objetivo. Sempre que precisei gerar impacto duradouro, comecei exatamente assim: definindo a experiência desejada, prototipando rápido e iterando com dados — seja conectando o país ao 4G, seja implementando IA em healthcare ou criando frameworks de valor para governos.

Meu modo de operar é construir soluções simples e escaláveis. Criei um War Room PMO que virou padrão global, implantei data lakes que democratizaram informação para decisões em horas e desenhei playbooks de IA que foram adotados em escala. Tudo isso nasce da mesma crença da Amazon: o cliente não tem tempo para esperar pela versão perfeita, mas merece que você chegue lá rápido.

Quero construir com gente que pensa grande, prototipa rápido e mede obsessivamente. A Amazon oferece o palco certo: desafios complexos, autonomia real, pares exigentes e a cultura que não deixa as boas ideias morrerem por falta de owner.`,
          tags: ["simplify and scale", "builder", "customer-first planning", "full accountability"],
          hook: "Builder que trabalha de trás para frente encontra o habitat natural",
          mic_drop: "Do War Room ao data lake — mecanismos replicáveis, não heroísmo"
        },
        {
          id: "versao_people_leadership",
          title: "Versão Liderança & Cultura",
          badge: "People",
          badgeColor: "bg-blue-500",
          content: `A Amazon não quer apenas resultados; quer continuar sendo uma das melhores empregadoras do mundo enquanto entrega para o cliente. É exatamente a interseção que me move: combinar métricas de negócio com desenvolvimento de gente.

Liderei squads em operações críticas mantendo NPS interno alto, criei comunidades de prática em IA/ML e Lean que multiplicaram conhecimento, e construí mecanismos de coaching que elevaram a senioridade de PMs e engenheiros. Aprendi que cultura não se declara — se constrói em cada decisão de priorização, em cada feedback difícil e no cuidado com quem executa.

Quero ajudar a Amazon a continuar crescendo sem perder a característica que a torna única: times empoderados, diversidade de pensamento, autonomia com responsabilidade e uma régua alta de liderança. Para mim, elevar a régua começa dentro de casa: apoiar quem está ao meu lado para que o cliente perceba a diferença do lado de fora.`,
          tags: ["liderança de pessoas", "melhor lugar para trabalhar", "aprendizado contínuo", "elevar a régua"],
          hook: "Crescer sem perder a alma: performance + melhores empregadores",
          mic_drop: "Bar raiser começa dentro de casa — cultura forte entrega cliente feliz"
        }
      ]
    },

    por_que_mudar: {
      question: "Por que está considerando mudar de emprego? / Why consider a move?",
      category: "Motivação de Mudança",
      versions: [
        {
          id: "foco_crescimento",
          title: "Foco em Crescimento",
          badge: "Crescimento",
          badgeColor: "bg-lime-500",
          content: `Cheguei a um ponto em que o próximo salto de aprendizado exige operar em um ambiente com escala global, mais ritmo e desafios inéditos. Na Amazon posso aplicar o que aprendi em telecom, finanças e setor público para resolver problemas de pagamento que impactam milhões de clientes diariamente.

Quero continuar crescendo em complexidade: liderar squads multifuncionais, construir mecanismos que funcionem em vários países e acelerar minha curva em AI/ML aplicada a pagamentos. No cenário atual, esse tipo de desafio aparece de forma pontual; aqui ele é o dia a dia.`,
          tags: ["crescimento", "aprendizado", "escala", "carreira"],
          hook: "Pronto para um próximo ciclo de aprendizado em escala global",
          mic_drop: "Busco o ambiente onde o desafio certo aparece todo dia, não uma vez por ano"
        },
        {
          id: "foco_proposito",
          title: "Foco em Propósito",
          badge: "Propósito",
          badgeColor: "bg-rose-500",
          content: `Quero dedicar meus próximos anos a uma jornada que cria valor direto para clientes e parceiros. A Amazon tem uma missão que conversa com o que acredito: tornar a vida das pessoas mais fácil, com acesso amplo a produtos e serviços confiáveis.

A parceria com a Oakberry mostra que existem oportunidades reais de ajudar empreendedores brasileiros a escalar com tecnologia. Isso me motiva a levantar todo dia e usar minhas habilidades em AI/ML, pagamentos e governança para gerar impacto tangível.`,
          tags: ["propósito", "impacto", "clientes", "empreendedores"],
          hook: "Quero construir tecnologia que transforme a vida de quem empreende e compra",
          mic_drop: "Alinhar carreira e propósito me faz entregar mais energia, todos os dias"
        },
        {
          id: "foco_desafio_tecnico",
          title: "Foco em Desafio Técnico",
          badge: "Tech",
          badgeColor: "bg-sky-600",
          content: `Estou pronto para mergulhar em um desafio técnico maior: integrar AI/ML, automação e novas formas de pagamento em uma plataforma de escala Amazon. Já provei que consigo fazer isso em ambientes regulados e críticos, mas quero levar essa experiência para um contexto onde a experimentação é acelerada e global.

A arquitetura de pagamentos da Amazon, os requisitos de disponibilidade e a velocidade de inovação são o cenário perfeito para expandir minhas competências técnicas e de liderança.`,
          tags: ["tecnologia", "AI/ML", "arquitetura", "escala"],
          hook: "Buscar um tabuleiro técnico mais desafiador",
          mic_drop: "Quero construir soluções que sustentem a próxima década de pagamentos digitais"
        },
        {
          id: "foco_impacto_global",
          title: "Foco em Impacto Global",
          badge: "Impacto",
          badgeColor: "bg-amber-600",
          content: `Depois de impactar segmentos relevantes no Brasil, quero atuar em uma plataforma que conversa com o mundo. A Amazon me permite aprender com times globais, aplicar boas práticas localmente e exportar soluções criadas aqui para outros mercados.

Esse intercâmbio amplia meu repertório, gera novas ideias e mantém a motivação alta porque vejo o impacto do meu trabalho ultrapassando fronteiras.`,
          tags: ["impacto global", "colaboração", "aprendizado", "pagamentos"],
          hook: "Expandir impacto local para uma vitrine global",
          mic_drop: "Quero que soluções nascidas no Brasil resolvam problemas em outros países também"
        }
      ]
    },
    por_que_amazon: {
      question: "Por que a Amazon? / Why Amazon?",
      category: "Motivação e Fit Cultural",
      versions: [
        {
          id: "versao_principal",
          title: "Versão Principal",
          badge: "Recomendada",
          badgeColor: "bg-orange-500",
          content: `O que me atrai na Amazon é ver foco genuíno no cliente caminhando lado a lado com disciplina operacional. Sempre que tive espaço para gerar impacto duradouro, foi em ambientes que valorizam quem mergulha fundo nos detalhes, simplifica o complexo e leva o resultado até o fim — e esse é exatamente o jeito da Amazon.

Quando conectei o Brasil ao 4G na Huawei, tratei de cada dependência regulatória porque sabia que estava conectando pessoas, não apenas instalando antenas. Na Unimed, automatizei decisões com IA para devolver 45 milhões de dólares ao sistema de saúde, acelerando aprovações para os pacientes. No HSBC, garanti a migração de 3 bilhões de dólares sem ruídos porque confiança do cliente não admite falhas. O padrão é o mesmo: começar pelo cliente, ir ao detalhe, simplificar e entregar.

Também admiro o quanto a Amazon incentiva builders. Transformei war rooms em centros de decisão, criei frameworks de valor e democratizei dados porque acredito que resultados sustentáveis nascem de mecanismos replicáveis, não de heroísmo. Quero trazer essa energia para uma companhia que pensa grande, age rápido e mede sucesso pelo impacto real no cliente.

Para mim, a Amazon é o próximo passo natural: elevar a barra todos os dias, em escala global, com a segurança de que cada detalhe conta.`,
          tags: ["foco no cliente", "disciplina operacional", "responsabilidade total", "simplificar"],
          hook: "Foco genuíno no cliente com execução disciplinada",
          mic_drop: "15 anos elevando a barra se encontram com o mecanismo que escala impacto"
        },
        {
          id: "versao_payments",
          title: "Versão Payments",
          badge: "Payments",
          badgeColor: "bg-green-500",
          content: `A Amazon está prestes a dar o próximo salto em pagamentos com a parceria estratégica com a Oakberry, e esse é exatamente o tipo de desafio que me move. Combinar AI/ML, operações em grande escala e design de jornadas para transformar pagamentos em vantagem competitiva é onde entrego meus melhores resultados.

Nos últimos anos liderei transformações similares: usei Lean Six Sigma para redesenhar fluxos de aprovação, implantei modelos de ML que elevaram authorization rate em 25% e construí pipelines self-service que reduziram o cycle time em 40%. Fiz isso alinhando produto, engenharia, risco, finanças e parceiros externos para que tecnologia, compliance e experiência do cliente avançassem juntos.

Enxergo três frentes imediatas para aplicar esse repertório na Amazon Brasil: automatizar decisões com inteligência preditiva, ampliar capacidades self-service para os merchants da Oakberry e baixar o custo por transação sem perder experiência. Meu estilo é definir o mecanismo, instrumentar métricas e conduzir business reviews com dados na mão — tanto com VPs quanto com parceiros estratégicos.

Quero liderar essa transformação ponta a ponta porque pagamentos são o motor silencioso desse crescimento. Cada melhoria que entregarmos destrava expansão, habilita novos lançamentos e fortalece a confiança do cliente brasileiro na Amazon.`,
          tags: ["pagamentos", "AI/ML", "lean six sigma", "self-service"],
          hook: "Parceria Oakberry como trampolim para uma nova geração de pagamentos",
          mic_drop: "Transformar operações em mecanismos autoajustáveis que acompanham o cliente"
        },
        {
          id: "versao_builder",
          title: "Versão Builder",
          badge: "Builder",
          badgeColor: "bg-purple-500",
          content: `A Amazon é o ecossistema ideal para quem constrói produtos começando pelo cliente e desenhando cada etapa a partir desse objetivo. Sempre que precisei entregar algo duradouro, segui esse roteiro: definir a experiência desejada, prototipar rápido, medir e iterar. Foi assim no rollout do 4G, na aplicação de IA em saúde e na criação de frameworks de valor para o setor público.

Meu modo de operar é construir soluções simples e escaláveis. Criei um War Room PMO que virou referência global, implantei data lakes que democratizaram informação em horas e documentei playbooks de IA que depois foram adotados em larga escala. Tudo isso porque acredito que o cliente não tem tempo para esperar a versão perfeita — ele precisa sentir a evolução continuamente.

Quero construir com pessoas que pensam grande, entregam rápido e medem obsessivamente. A Amazon oferece o palco certo: desafios complexos, autonomia de verdade, pares que elevam a régua e uma cultura onde boas ideias não morrem por falta de dono.`,
          tags: ["simplificar", "builder", "planejamento centrado no cliente", "responsabilidade total"],
          hook: "Construir partindo do cliente é meu modo natural de operar",
          mic_drop: "Do War Room ao data lake — mecanismos replicáveis, não heroísmo"
        },
        {
          id: "versao_people_lideranca",
          title: "Versão Liderança & Cultura",
          badge: "People",
          badgeColor: "bg-blue-500",
          content: `A Amazon não busca apenas resultados; quer continuar sendo um dos melhores lugares para se trabalhar enquanto entrega para o cliente. Essa combinação é o que me move: conciliar métricas de negócio com desenvolvimento de gente.

Liderei squads em operações críticas mantendo NPS interno alto, criei comunidades de prática em IA/ML e Lean que multiplicaram conhecimento e estruturei mecanismos de coaching que elevaram a maturidade de PMs e engenheiros. Aprendi que cultura não se declara — ela se constrói em cada decisão de priorização, em cada feedback difícil e no cuidado com quem executa.

Quero ajudar a Amazon a crescer sem perder a essência: times empoderados, diversidade de pensamento, autonomia com responsabilidade e uma régua alta para liderança. Para mim, elevar a régua começa dentro de casa: apoiar quem está ao meu lado para que o cliente perceba a diferença do lado de fora.`,
          tags: ["liderança de pessoas", "melhor lugar para trabalhar", "aprendizado contínuo", "elevar a régua"],
          hook: "Crescer sem perder a essência: performance + experiência humana",
          mic_drop: "Cultura forte dentro de casa se traduz em clientes mais satisfeitos"
        }
      ]
    },
    // PERGUNTA: "POR QUE ESTA VAGA?"
    por_que_esta_vaga: {
      question: "Por que esta vaga específica?",
      category: "Fit com a Posição",
      versions: [
        {
          id: "versao_principal",
          title: "Versão Principal",
          badge: "Recomendada",
          badgeColor: "bg-purple-500",
          content: `Esta vaga reúne exatamente o tipo de transformação que venho conduzindo: redesenhar operações críticas com dados, automação e coordenação entre tecnologia e negócio. Liderar a evolução das operações de pagamentos, enquanto a parceria com a Oakberry ganha escala, exige alguém que consiga sair da estratégia para a execução e voltar com métricas claras.

Na Unimed, implementei IA para automatizar decisões e reduzi o cycle time em 30%; no Sicredi, redesenhei regras de autorização com modelos de ML que elevaram o approval rate em 25%; na SEFAZ-RS, estruturei uma governança de dados que permitiu decisões de negócio em horas, não semanas. Em todos os casos, o segredo foi trabalhar com Lean Six Sigma, instrumentar indicadores e criar mecanismos de revisão com executivos e parceiros para garantir tração contínua.

Vejo três frentes imediatas onde posso acelerar a Amazon: definir o roadmap de automação (AI/ML) com squads multidisciplinares, medir obsessivamente eficiência e experiência do cliente e, ao mesmo tempo, preparar as áreas internas para decisões rápidas por meio de business reviews e dashboards claros. É o que faço de forma natural: transformar planos em mecanismos que duram.`,
          tags: ["transformação", "AI/ML", "lean six sigma", "governança de dados"],
          hook: "Transformar planos em mecanismos que geram tração contínua",
          mic_drop: "Já liderei operações críticas com IA, métricas e coordenação ponta a ponta"
        },
        {
          id: "versao_insights",
          title: "Versão Métricas & Insights",
          badge: "Métricas",
          badgeColor: "bg-indigo-500",
          content: `O job pede alguém que converta dados em decisões práticas e mantenha a operação alinhada. Essa é a minha zona de conforto. No governo do RS, integrei 48 fontes e criei business reviews quinzenais que encurtaram o tempo de reação de semanas para horas. No Sicredi, construí indicadores de performance para pagamentos que direcionavam ajustes em tempo quase real.

Para a Amazon, quero deixar métricas de eficiência, experiência e compliance visíveis para todos os times, conectando squads de AI/ML, operações, financeiro e parceiros externos. A partir daí, conduzir weekly reviews focadas em experimentos, gargalos e próximos passos. O objetivo é transformar a operação de pagamento em um sistema autoexplicativo, onde cada decisão tem dados, dono e prazo.`,
          tags: ["métricas", "insights", "business review", "automação"],
          hook: "Decisões rápidas começam com métricas simples e acessíveis",
          mic_drop: "Transformei dados dispersos em review cadenciado que acelera decisões"
        },
        {
          id: "versao_parcerias",
          title: "Versão Parcerias & Stakeholders",
          badge: "Stakeholders",
          badgeColor: "bg-teal-500",
          content: `O papel exige articular Amazon, Oakberry e demais parceiros para que tecnologia, produto e operação avancem juntos. Foi assim que conduzi a migração HSBC–Bradesco e o rollout do 4G: alinhando reguladores, fornecedores e times internos em planos com donos, riscos e checkpoints.

Na Amazon, quero criar um ritual em que produto, engenharia, risco, financeiro e parceiros externos revisem roadmap, dependências e prontidão com antecedência. Isso reduz surpresas, garante integração tecnológica e aumenta a confiança de todos os lados. Meu foco é garantir que cada stakeholder saiba o que precisa fazer, quando, com qual métrica de sucesso e como escalar rapidamente quando algo trava.`,
          tags: ["stakeholders", "parcerias", "coordenação", "roadmap compartilhado"],
          hook: "Orquestrar Amazon e parceiros para que nenhum elo fique para trás",
          mic_drop: "Já alinhei programas multinacionais críticos com clareza de papéis e dependências"
        },
        {
          id: "versao_eventos",
          title: "Versão Eventos & Readiness",
          badge: "Operações",
          badgeColor: "bg-amber-500",
          content: `Outra parte central do papel é preparar a Amazon para eventos críticos e revisões operacionais de alto risco. Foi isso que fiz na Copa 2014 com o War Room de telecom e em grandes lançamentos de IA em saúde: criar checklists, simulações e planos de contingência que evitam surpresas.

Quero aplicar o mesmo rigor aqui: estabelecer readiness reviews periódicos, testar falhas hipotéticas com times técnicos e garantir que toda a cadeia (de backoffice a atendimento) esteja pronta para picos e mudanças. Isso envolve documentar runbooks, treinar equipes e garantir que aprendizados de cada evento retroalimentem o processo.`,
          tags: ["readiness", "operações críticas", "planos de contingência", "runbooks"],
          hook: "Eventos críticos pedem checklists, simulações e owners claros",
          mic_drop: "Já garanti zero surpresa em momentos de alto risco com preparação disciplinada"
        }
      ]
    },
    // PERGUNTA: "PONTOS FORTES"
    pontos_fortes: {
      question: "Quais são seus principais pontos fortes?",
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
          tags: ["go deep", "drive outcomes", "customer focus", "technical"],
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
          tags: ["customer focus", "experiência", "NPS", "priorização"],
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
          tags: ["continuous learning", "coaching", "comunidade", "melhoria contínua"],
          hook: "Aprendizagem que vira vantagem competitiva",
          mic_drop: "Playbooks e comunidades que aceleram cada nova iniciativa"
        }
      ]
    },
    // PERGUNTA: "ÁREAS DE DESENVOLVIMENTO"
    areas_desenvolvimento: {
      question: "Quais são suas áreas de desenvolvimento?",
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
          tags: ["decisão", "dados", "sense of urgency", "timeboxing"],
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
  },
  en: {
    title: "Amazon Strategic Icebreaker",
    subtitle: "Differentiated positioning from the first seconds",
    
    fale_sobre_voce: {
      question: "Tell me about yourself / Walk me through your background",
      category: "Personal Introduction",
      versions: [
        {
          id: "default",
          title: "Default Version (Generic)",
          badge: "Default",
          badgeColor: "bg-gray-500",
          context: "A safe and comprehensive version to use when there is no information about the interviewer.",
          content: `Of course. I'm Leonardo Menezes, from southern Brazil, father to 10-year-old Livia, and passionate about unraveling complex systems, whether it's playing chess or optimizing payment operations. For the past 15 years, my career has been a journey to transform operational challenges into measurable results and customer value.

I started at Huawei, where I led the implementation of Brazil's first 4G network and the infrastructure for the 2014 World Cup. There, I learned firsthand that scale and excellence go hand in hand when you dive into the details. Later, in the financial sector, I was at the forefront of the 3-billion-dollar migration from HSBC to Bradesco, a high-risk project we delivered with zero failures, and I co-led the launch of the Next digital bank.

More recently, my focus has been on applying AI to solve business problems. At Unimed, for example, I implemented models that automated processes and generated savings of 45 million dollars. At Sicredi, I accelerated credit analysis with machine learning, impacting 6.4 million members.

What connects all these experiences is my ability to move between strategy and technical execution. I'm equally comfortable discussing microservices architecture with engineers and presenting a project's ROI to the board. Ultimately, what drives me is using technology to simplify complexity and deliver real value to the end customer.`,
        },
        {
          id: "andreia_guarino",
          title: "For Andreia Guarino (Focus on Operational Excellence)",
          badge: "Andreia G.",
          badgeColor: "bg-blue-500",
          context: "Connects with her experience in continuous improvement, Six Sigma, and payment operations.",
          content: `It's a pleasure, Andreia. I saw you have a solid career in continuous improvement and operational excellence in payments, with a Six Sigma certification, an area I deeply admire. My journey, in a way, has followed a similar quest for efficiency.

I started at Huawei, where my main challenge was redesigning telecom rollout processes. Using Lean principles, I managed to reduce the average SLA from 382 to 62 days, a gain that was transformative for the operation. Later, in the financial sector, I applied this same mindset to the 3-billion-dollar migration from HSBC to Bradesco, where every process detail was critical to avoid failures.

Recently, I've been combining this foundation of operational excellence with AI. At Unimed, for example, I used machine learning to automate claims analysis, cutting processing time by 30% and generating savings of 45 million dollars.

What attracts me to this position at Amazon is precisely the chance to unite these two passions: process discipline, which I see in your background, with innovation in automation, to build the most efficient and robust payment operations in the market. Deep down, I'm like you: a builder of systems that work better, day after day.`,
        },
        {
          id: "eduardo_lopes",
          title: "For Eduardo Lopes (Focus on Financial Strategy and M&A)",
          badge: "Eduardo L.",
          badgeColor: "bg-green-500",
          context: "Connects with his experience in finance, strategy (ex-BCG), and high-impact decisions.",
          content: `A pleasure to meet you, Eduardo. I noticed your impressive background, with stints at BCG and INSEAD, focused on strategy, finance, and M&A. I believe we have a complementary worldview: while you structure the major investment decisions, I'm the one who ensures the execution delivers the value promised in the business case.

For example, in the 3-billion-dollar migration from HSBC to Bradesco, my responsibility was to ensure the M&A thesis became a reality, with no data, customer, or compliance loss. It was an intense exercise in risk management and value delivery. At Unimed, I launched 4 new digital products that now account for 5% of revenue, and I increased EBITDA by 22%, always connecting innovation to clear financial metrics.

More recently, I've focused on how AI can optimize the P&L. At Unimed, the models I implemented generated 45 million dollars in annual savings. At Sicredi, automation in credit analysis not only improved the experience but also operational efficiency.

I see that Amazon is looking for leaders who understand the connection between technology, operations, and financial impact. That's exactly my sweet spot: turning strategic initiatives into auditable results on the balance sheet.`,
        },
        {
          id: "gabriela_bonelle",
          title: "For Gabriela Bonelle (Focus on BI and Data Analysis)",
          badge: "Gabriela B.",
          badgeColor: "bg-yellow-600",
          context: "Connects with her expertise in BI, SQL, BigQuery, and turning data into decisions.",
          content: `Hi Gabriela, how are you? I saw that you specialize in turning data into decisions, with a strong technical background in BI, SQL, and BigQuery. I come from the other side of the table: I'm a major consumer and partner of data areas like yours to build smarter products and operations.

My career has been about using the insights that professionals like you generate to create real impact. For example, at Sicredi, I used credit behavior data to train machine learning models that accelerated approvals by 40%. At Unimed, the claims dashboards I helped specify were the basis for an AI automation project that saved 45 million dollars.

Currently, at SEFAZ-RS, I'm leading the modernization of tax management, and the first step was precisely to create a PMO portal with real-time dashboards to provide visibility and agility to decisions.

I believe that the partnership between those who generate the data (BI) and those who consume it (Product/Operations) is what creates magic. What excites me about Amazon is the data-driven culture and the chance to work with people like you to turn payment data into actions that improve the lives of millions of customers.`,
        },
        {
          id: "heleno_pioner",
          title: "For Heleno Pioner (Focus on Data Science and Economics)",
          badge: "Heleno P.",
          badgeColor: "bg-red-500",
          context: "Connects with his experience in modeling, economics (PhD UChicago), and data science.",
          content: `It's an honor, Heleno. I saw your profile and was impressed by your depth in data science and economics, with a PhD from Chicago and experience in creating complex models. I'm a great admirer and partner of data scientists like you; my role has been to translate the power of your models into tangible business value.

For example, at Sicredi, I worked with the data team to implement ML models that accelerated credit analysis by 40%, turning a process that took days into minutes. At Unimed, I used predictive models to automate claims screening, which resulted in annual savings of 45 million dollars.

In both cases, my job was to ensure that the models had the right data, were correctly integrated with legacy systems, and that the ROI was clearly measured and communicated to the board. I act as the bridge between science and operation.

What fascinates me about Amazon is the scale at which you apply data science. The opportunity to collaborate with minds like yours to optimize such a vast payment ecosystem, turning models into real improvements for millions of people, is the challenge I'm seeking for my career.`,
        },
        {
          id: "sujash_biswas",
          title: "For Sujash Biswas (Focus on Global Programs and Payments)",
          badge: "Sujash B.",
          badgeColor: "bg-purple-500",
          context: "Connects with his experience leading payment programs in different markets (LATAM, India).",
          content: `It's a pleasure, Sujash. I saw you have extensive experience leading payment programs on a global scale, from India to Latin America. This cross-market vision is something I highly value. My career, although more focused on Brazil, has always involved managing complex programs with global stakeholders.

At Huawei, for example, I led the rollout of Brazil's first 4G network, a program that required coordinating teams and suppliers from various parts of the world. The governance model I created here was eventually adopted as a global standard by the company. Later, in the HSBC to Bradesco migration, I coordinated teams in India, China, and Poland to ensure a flawless 3-billion-dollar transition.

More recently, I've been applying this experience to AI transformation programs. At Unimed, an automation project I led generated 45 million dollars in savings.

What attracts me to this position is the chance to apply my program delivery experience in the context of payments in LATAM, an area you know so well. I believe my ability to execute complex programs, combined with your global strategic vision, can be a very powerful partnership for Amazon.`,
        },
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
          title: "Payments Narrative",
          badge: "Payments",
          badgeColor: "bg-green-500",
          content: `Amazon is about to take the next leap in payments with the Oakberry partnership, and that's exactly the kind of challenge that energizes me. Bringing AI/ML, large-scale operations, and journey design together to turn payments into daily competitive advantage is where I do my best work.

In recent years I've led transformations that mirror what you’re aiming for: applying Lean Six Sigma to redesign approval workflows, deploying ML models that lifted authorization rates by 25%, and building self-service pipelines that cut cycle time by 40%. I did that by aligning product, engineering, risk, finance, and external partners so technology, compliance, and customer experience moved in sync.

I see three critical fronts to apply that playbook for Amazon Brazil: automate decisions with predictive intelligence, expand self-service capabilities for Oakberry merchants, and lower cost per transaction without sacrificing customer delight. My style is to define the mechanism, instrument the metrics, and run business reviews with data in hand — with VPs as well as strategic partners.

I want to lead this end-to-end transformation because payments are the quiet driver of this growth engine. Every improvement we ship here unlocks growth, enables new launches, and deepens Brazilian customers’ trust in Amazon.`,
          tags: ["payments", "AI/ML", "lean six sigma", "self-service"],
          hook: "Oakberry partnership as launchpad for the next payments leap",
          mic_drop: "Turning payments ops into self-service mechanisms that scale with customers"
        },
        {
          id: "versao_builder",
          title: "Builder Mindset",
          badge: "Builder",
          badgeColor: "bg-purple-500",
          content: `Amazon is home for people who like to start with the customer and work backwards. Every enduring outcome I've delivered followed that playbook: define the ideal experience, prototype fast, iterate with data — whether I was lighting up the 4G network, deploying AI in healthcare, or architecting value frameworks for government.

Simplify and Scale is how I operate. I designed a War Room PMO that became a global pattern, deployed data lakes that put insight in the hands of decision-makers within hours, and codified AI playbooks that scaled across business units. All born from the same Amazon belief: customers can't wait for a perfect solution, but deserve that we get there fast.

I want to build alongside people who think big, ship quickly, and measure obsessively. Amazon offers the perfect stage: complex challenges, real autonomy, peers who raise the bar, and a culture where good ideas don't die for lack of full accountability.`,
          tags: ["simplify and scale", "builder", "customer-first planning", "full accountability"],
          hook: "A builder who starts from the customer finds the natural habitat",
          mic_drop: "From War Room to data lake — mechanisms scale, heroics don’t"
        },
        {
          id: "versao_people_leadership",
          title: "Leadership & Culture",
          badge: "People",
          badgeColor: "bg-blue-500",
          content: `Amazon isn’t chasing results alone; it’s committed to being one of the best workplaces on the planet while delivering for customers. That intersection is my sweet spot: coupling business metrics with people development.

I’ve led squads through mission-critical operations while keeping internal NPS high, built AI/ML and Lean communities of practice that multiplied knowledge, and designed coaching mechanisms that raised PM and engineering maturity. Culture isn’t a slide deck — it’s every prioritization decision, every tough feedback conversation, every investment in people.

I want to help Amazon grow without losing the traits that make it unique: empowered teams, diverse thinking, autonomy with accountability, and a high leadership bar. For me, raising the bar starts at home: lifting the people beside me so customers feel the difference outside.`,
          tags: ["people leadership", "top workplace ambition", "continuous learning", "elevate the bar"],
          hook: "Grow without losing the soul: performance + top workplace experience",
          mic_drop: "Bar raising starts inside — strong culture equals delighted customers"
        }
      ]
    },
    por_que_mudar: {
      question: "Why are you considering a move?",
      category: "Motivation for Change",
      versions: [
        {
          id: "foco_crescimento",
          title: "Growth Focus",
          badge: "Growth",
          badgeColor: "bg-lime-500",
          content: `I've reached a point where the next learning leap requires operating in an environment with global scale, higher velocity and problems I haven't solved yet. At Amazon I can combine what I learned in telecom, financial services and the public sector to tackle payment challenges that touch millions of customers every day.

I want to keep growing in complexity: lead multi-disciplinary squads, build mechanisms that work across countries and accelerate my AI/ML curve applied to payments. In my current environment those challenges appear sporadically; at Amazon they are the everyday reality.`,
          tags: ["growth", "learning", "scale", "career"],
          hook: "Ready for another global-scale learning cycle",
          mic_drop: "I want a place where the right challenge shows up every day, not once a year"
        },
        {
          id: "foco_proposito",
          title: "Purpose-Driven Move",
          badge: "Purpose",
          badgeColor: "bg-rose-500",
          content: `I want to spend the next years on a mission that creates direct value for customers and partners. Amazon's mission resonates with me: make people's lives easier with reliable access to products and services.

The Oakberry partnership shows a real opportunity to help Brazilian entrepreneurs scale with technology. That motivates me to wake up every day and use my skills in AI/ML, payments and governance to create tangible impact.`,
          tags: ["purpose", "impact", "customers", "entrepreneurs"],
          hook: "I want to build technology that changes how entrepreneurs and buyers operate",
          mic_drop: "When career and purpose align I bring more energy every single day"
        },
        {
          id: "foco_desafio_tecnico",
          title: "Technical Challenge Focus",
          badge: "Tech",
          badgeColor: "bg-sky-600",
          content: `I'm ready to dive into a bigger technical challenge: integrate AI/ML, automation and new payment rails in a platform with Amazon-level scale. I've already done it in regulated, mission-critical environments, but I want to take that experience to a context where experimentation is fast and global.

Amazon's payment architecture, availability requirements and innovation speed are the perfect scenario to stretch both my technical and leadership skills.`,
          tags: ["technology", "AI/ML", "architecture", "scale"],
          hook: "Looking for a more demanding technical board",
          mic_drop: "I want to craft the solutions that sustain the next decade of digital payments"
        },
        {
          id: "foco_impacto_global",
          title: "Global Impact Focus",
          badge: "Impact",
          badgeColor: "bg-amber-600",
          content: `After impacting large segments in Brazil, I want to operate on a platform that speaks to the world. Amazon lets me learn from global teams, apply best practices locally and export solutions built here to other markets.

That exchange expands my repertoire, sparks new ideas and keeps motivation high because I can see the impact crossing borders.`,
          tags: ["global impact", "collaboration", "learning", "payments"],
          hook: "Expand local impact to a global stage",
          mic_drop: "I want solutions born in Brazil to solve problems in other countries too"
        }
      ]
    },
    por_que_amazon: {
      question: "Why Amazon?",
      category: "Motivation & Cultural Fit",
      versions: [
        {
          id: "versao_principal",
          title: "Core Version",
          badge: "Recommended",
          badgeColor: "bg-orange-500",
          content: `What attracts me to Amazon is seeing genuine customer obsession paired with disciplined operational execution. Whenever I delivered lasting impact, it was in environments that reward people who dive deep, simplify the complex and carry the result across the finish line—and that's exactly how Amazon operates.

When I connected Brazil to 4G at Huawei, I handled every regulatory dependency because I knew we were connecting people, not installing towers. At Unimed, I automated decisions with AI and returned 45 million dollars to the health system while speeding up approvals for patients. At HSBC, I guaranteed a three-billion-dollar migration with zero incidents because customer trust doesn't tolerate noise. The pattern is the same: start with the customer, go to the detail, simplify and deliver.

I also admire how Amazon empowers builders. I turned war rooms into decision centers, created value frameworks and democratized data because I believe sustainable results come from replicable mechanisms, not heroics. I want to bring that energy to a company that thinks big, moves fast and measures success by real customer impact.

For me Amazon is the natural next step: raise the bar every day, at global scale, knowing every detail matters.`,
          tags: ["customer focus", "operational discipline", "ownership", "simplify"],
          hook: "Genuine customer obsession paired with disciplined execution",
          mic_drop: "Fifteen years of raising the bar meet the mechanism that scales impact"
        },
        {
          id: "versao_payments",
          title: "Payments Version",
          badge: "Payments",
          badgeColor: "bg-green-500",
          content: `Amazon is about to take the next leap in payments with the Oakberry partnership, and that's exactly the kind of challenge that moves me. Combining AI/ML, large-scale operations and journey design to turn payments into a competitive advantage is where I deliver my best results.

In recent years I led similar transformations: used Lean Six Sigma to redesign approval flows, deployed ML models that lifted authorization rate by 25% and built self-service pipelines that reduced cycle time by 40%. I did it by aligning product, engineering, risk, finance and external partners so technology, compliance and customer experience could advance together.

I see three immediate fronts to apply this playbook at Amazon Brazil: automate decisions with predictive intelligence, expand self-service capabilities for Oakberry merchants and lower cost per transaction without hurting experience. My style is to define the mechanism, instrument metrics and run business reviews with data in hand—with VPs and with strategic partners.

I want to lead this end-to-end transformation because payments are the silent engine of this growth. Every improvement we deliver unlocks expansion, enables new launches and strengthens Brazilian customers' trust in Amazon.`,
          tags: ["payments", "AI/ML", "lean six sigma", "self-service"],
          hook: "Use the Oakberry partnership as a springboard for next-gen payments",
          mic_drop: "Turn operations into self-adjusting mechanisms that move with the customer"
        },
        {
          id: "versao_builder",
          title: "Builder Version",
          badge: "Builder",
          badgeColor: "bg-purple-500",
          content: `Amazon is the ideal ecosystem for builders who start with the customer and design every step from that objective. Whenever I delivered something durable I followed that playbook: define the desired experience, prototype fast, measure and iterate. That's how I handled the 4G rollout, applied AI in healthcare and designed value frameworks for the public sector.

My way of operating is to craft simple, scalable solutions. I created a War Room PMO that became a global reference, implemented data lakes that democratized information in hours and wrote AI playbooks later adopted at scale. All because I believe customers don't have time to wait for a perfect version—they need to feel progress continuously.

I want to build with people who think big, deliver fast and measure obsessively. Amazon offers the right stage: complex challenges, real autonomy, peers who raise the bar and a culture where good ideas don't die for lack of ownership.`,
          tags: ["simplify", "builder mindset", "customer-back planning", "ownership"],
          hook: "Building from the customer back is how I naturally operate",
          mic_drop: "From war room to data lake—replicable mechanisms, not heroics"
        },
        {
          id: "versao_people_lideranca",
          title: "Leadership & Culture Version",
          badge: "People",
          badgeColor: "bg-blue-500",
          content: `Amazon doesn't chase results alone; it wants to stay one of the best places to work while delivering for customers. That combination moves me: balance business metrics with developing people.

I led squads in critical operations while keeping internal NPS high, created IA/ML and Lean communities of practice that multiplied knowledge and built coaching mechanisms that raised PM and engineering maturity. I learned that culture isn't declared—it is built in every prioritization decision, every tough feedback and the care for those executing.

I want to help Amazon grow without losing its essence: empowered teams, diversity of thought, autonomy with accountability and a high bar for leadership. For me, raising the bar starts at home: enable the people beside me so customers feel the difference outside.`,
          tags: ["people leadership", "best employer", "continuous learning", "raise the bar"],
          hook: "Grow without losing the mix of performance and human experience",
          mic_drop: "A strong internal culture translates into happier customers"
        }
      ]
    },
    por_que_esta_vaga: {
      question: "Why this specific role?",
      category: "Fit with the Position",
      versions: [
        {
          id: "versao_principal",
          title: "Core Version",
          badge: "Recommended",
          badgeColor: "bg-purple-500",
          content: `This role combines exactly the kind of transformation I've been driving: redesign critical operations with data, automation and coordination between technology and business. Leading the evolution of payments operations while the Oakberry partnership scales requires someone who can move from strategy to execution and come back with clear metrics.

At Unimed I implemented AI to automate decisions and cut cycle time by 30%; at Sicredi I redesigned authorization rules with ML models that lifted approval rate by 25%; at SEFAZ-RS I built a data governance structure that enabled business decisions in hours, not weeks. In every case the secret was using Lean Six Sigma, instrumenting indicators and creating review mechanisms with executives and partners to maintain traction.

I see three immediate fronts where I can accelerate Amazon: define the automation roadmap (AI/ML) with multi-disciplinary squads, obsessively measure efficiency and customer experience, and prepare internal areas for quick decisions through business reviews and clear dashboards. That's what I naturally do: turn plans into mechanisms that last.`,
          tags: ["transformation", "AI/ML", "lean six sigma", "data governance"],
          hook: "Turn plans into mechanisms that generate continuous traction",
          mic_drop: "I've already led end-to-end critical operations with AI, metrics and coordination"
        },
        {
          id: "versao_insights",
          title: "Metrics & Insights Version",
          badge: "Metrics",
          badgeColor: "bg-indigo-500",
          content: `The job needs someone who converts data into practical decisions and keeps the operation aligned. That's my comfort zone. In Rio Grande do Sul's government I integrated 48 sources and created bi-weekly business reviews that cut reaction time from weeks to hours. At Sicredi I built payment KPIs that guided changes almost in real time.

For Amazon I want efficiency, experience and compliance metrics to be visible to every team, connecting AI/ML squads, operations, finance and external partners. From there I'll run weekly reviews focused on experiments, bottlenecks and next steps. The goal is to turn the payment operation into a self-explanatory system where every decision has data, an owner and a deadline.`,
          tags: ["metrics", "insights", "business review", "automation"],
          hook: "Fast decisions start with simple, visible metrics",
          mic_drop: "I turned scattered data into a cadence of reviews that accelerates decisions"
        },
        {
          id: "versao_parcerias",
          title: "Partnerships & Stakeholders Version",
          badge: "Stakeholders",
          badgeColor: "bg-teal-500",
          content: `The role demands orchestrating Amazon, Oakberry and other partners so technology, product and operations move together. That's how I led the HSBC–Bradesco migration and the 4G rollout: aligning regulators, suppliers and internal teams in plans with owners, risks and checkpoints.

At Amazon I want to create a ritual where product, engineering, risk, finance and external partners review roadmap, dependencies and readiness ahead of time. That reduces surprises, secures technological integration and raises trust on all sides. My focus is to ensure every stakeholder knows what to do, when, with which success metric and how to escalate quickly when something blocks.`,
          tags: ["stakeholders", "partnerships", "coordination", "shared roadmap"],
          hook: "Orchestrate Amazon and partners so no link falls behind",
          mic_drop: "I've aligned multinational critical programs with clear owners and dependencies"
        },
        {
          id: "versao_eventos",
          title: "Events & Readiness Version",
          badge: "Operations",
          badgeColor: "bg-amber-500",
          content: `Another key part of the role is preparing Amazon for critical events and high-stakes operational reviews. That's what I did in the 2014 World Cup War Room and in major AI rollouts in healthcare: create checklists, simulations and contingency plans that prevent surprises.

I want to apply the same rigor here: establish regular readiness reviews, run failure drills with technical teams and ensure the entire chain—from back office to customer support—is ready for peaks and changes. That means documenting runbooks, training teams and feeding learnings from every event back into the process.`,
          tags: ["readiness", "critical operations", "contingency plans", "runbooks"],
          hook: "Critical events demand checklists, drills and clear owners",
          mic_drop: "I delivered zero surprises in high-risk moments through disciplined preparation"
        }
      ]
    },
    pontos_fortes: {
      question: "What are your key strengths?",
      category: "Self-awareness",
      versions: [
        {
          id: "versao_principal",
          title: "Core Version",
          badge: "Recommended",
          badgeColor: "bg-green-500",
          content: `My main differentiator is the ability to dive deep into complex problems and convert diagnostics into measurable execution.

At Huawei, when SLAs were at 382 days, I personally led root-cause analyses (Ishikawa and 5 Whys), negotiated with city halls and ANATEL and redesigned the entire flow. The result was 62 days—no shortcuts, just deep dive, data in hand and obsession with execution.

At Unimed I automated 30% of claims processing with AI, generating 45 million dollars in annual savings. At HSBC I led the migration of three billion dollars with zero failures. All numbers are audited and documented.

I also connect technical decisions to customer impact. At Sicredi, ML models I built reduced credit approval time and improved the experience of 6.4 million members.

The common trait is balancing technical depth and business vision. I'm equally comfortable reviewing Python code or defending business cases for CFOs, ensuring we build the right thing, the right way, for the right reason.`,
          tags: ["go deep", "drive outcomes", "customer focus", "technical"],
          hook: "Deep dive with auditable delivery",
          mic_drop: "Technical depth plus business lens that closes the loop"
        },
        {
          id: "foco_estrategia",
          title: "Strategic Vision Focus",
          badge: "Strategy",
          badgeColor: "bg-blue-700",
          content: `I translate strategic vision into actionable, measurable roadmaps.

At Unimed I anticipated competitive pressure and designed a digital portfolio that created four new revenue streams—now 5% of total revenue. At HSBC/Bradesco I turned an integration thesis into a coordinated program across five countries, migrating three billion dollars with no incidents.

I combine long-term frameworks with operational cadence. I craft executive narratives, connect investments to metrics and monitor ROI continuously so strategy doesn't become a slide, but tangible delivery.`,
          tags: ["strategy", "execution", "transformation", "ROI"],
          hook: "Vision becomes roadmap, roadmap becomes outcome",
          mic_drop: "Strategy translated into billions migrated and new revenue streams"
        },
        {
          id: "foco_lideranca",
          title: "Leadership Focus",
          badge: "Leadership",
          badgeColor: "bg-purple-700",
          content: `I lead people in highly complex environments while keeping clarity, pace and engagement.

I implemented the War Room PMO at Huawei, aligning more than 30 PMs and 20 suppliers. We dropped SLAs from 382 to 62 days because I built radical transparency, daily cadence and 24-hour decision mechanisms.

My communication bridges technical and executive levels. I translate complexity into plain language, remove noise and ensure everyone knows the next step. That combination keeps teams energized even in long, demanding programs.`,
          tags: ["leadership", "communication", "motivation", "complexity"],
          hook: "Leadership with cadence, clarity and energy",
          mic_drop: "War Room PMO replicated globally with energized teams"
        },
        {
          id: "foco_inovacao",
          title: "Innovation Focus",
          badge: "Innovation",
          badgeColor: "bg-yellow-600",
          content: `I turn emerging technologies into solutions with proven ROI.

I was a pioneer in the 4G rollout in Brazil and years later led AI automations that reduced Unimed's claims cycle by 30%. At Sicredi I designed algorithms that increased credit approval while keeping risk under control.

I don't implement innovation for novelty. I build business cases, define success metrics, pilot with cross-functional squads and convert learning into organizational playbooks.`,
          tags: ["innovation", "technology", "data-driven", "culture"],
          hook: "Innovation with playbook and metrics, not hype",
          mic_drop: "AI, 4G and OKRs turned into recurring value"
        },
        {
          id: "foco_dados",
          title: "Data & Metrics Focus",
          badge: "Data & Metrics",
          badgeColor: "bg-cyan-700",
          content: `I'm obsessed with decisions anchored in data that is reliable and accessible.

In Rio Grande do Sul's government I redesigned the fiscal data lake, integrating 48 sources, and built executive dashboards that cut decision cycles from weeks to hours. At Sicredi I democratized risk and product metrics, giving squads autonomy to test hypotheses.

I invest in governance, data quality and visual storytelling. That discipline ensures every strategic discussion starts with facts, not assumptions.`,
          tags: ["data", "analytics", "governance", "metrics"],
          hook: "Great decisions start with trustworthy data",
          mic_drop: "48 sources integrated → decisions in hours, not weeks"
        },
        {
          id: "foco_cliente",
          title: "Customer Obsession Focus",
          badge: "Customer",
          badgeColor: "bg-orange-600",
          content: `I use the customer's voice as a compass to prioritize and design solutions.

When I redesigned Sicredi's onboarding, I interviewed members, analyzed NPS and churn metrics. The result was a digital journey that lifted conversion by 23% and reduced contact center calls.

I also bring field feedback to executive forums. That keeps financial, technological and operational decisions centered on the customer and generates visible value for the people using the service.`,
          tags: ["customer focus", "experience", "NPS", "prioritization"],
          hook: "Real customers guiding strategic decisions",
          mic_drop: "Redesigned onboarding: +23% conversion and fewer calls"
        },
        {
          id: "foco_aprendizado",
          title: "Continuous Learning Focus",
          badge: "Learn & Be Curious",
          badgeColor: "bg-emerald-600",
          content: `I learn fast, teach fast and create systems that multiply knowledge.

I lead internal communities of practice in AI/ML and Lean, documenting playbooks and hosting tech talks to accelerate large-scale adoption. In every transformation I capture lessons learned and turn them into reusable frameworks.

This mindset helps teams raise the bar together, reduces repeated mistakes and keeps the organization one step ahead.`,
          tags: ["continuous learning", "coaching", "community", "continuous improvement"],
          hook: "Learning that becomes a competitive advantage",
          mic_drop: "Playbooks and communities that accelerate every new initiative"
        }
      ]
    },
    areas_desenvolvimento: {
      question: "What are your development areas?",
      category: "Self-awareness",
      versions: [
        {
          id: "versao_delegacao_estrategica",
          title: "Strategic Delegation",
          badge: "Development",
          badgeColor: "bg-yellow-500",
          content: `A capability I'm sharpening is strategic delegation, especially in high-visibility projects. My technical background and love for detail sometimes make me take on tasks that would be better executed by specialists on the team. It's almost as if I wanted to personally ensure every piece is exactly where it should be.

I spotted that during the AI implementation at Unimed, where I was initially too deep in the machine-learning layer. I realized that limited my ability to focus on strategy and stakeholder alignment. I was solving technical issues when I should ensure we were solving the right business problems.

I developed a more structured approach: clearly define objectives and success criteria, map the best resources for each task and set regular checkpoints. That lets me keep visibility without micromanaging. In practice I no longer review every line of code; I define quality standards, establish paired code reviews and invest my energy in keeping the technical solution aligned with the business problem.

The result was better team efficiency and delivery quality. It also freed up time for higher-value activities: strategic alignment, stakeholder management and developing people. It's a practical example of how developing the talent around me and trusting their expertise yields better outcomes than doing it alone. I keep working on this intentionally in every new project.`,
          tags: ["delegation", "strategy", "people development", "self-awareness"],
          hook: "Sharpening strategic delegation in high-visibility projects",
          mic_drop: "Trusting the team's expertise beats doing everything myself"
        },
        {
          id: "versao_comunicacao_executiva",
          title: "Concise Executive Communication",
          badge: "Development",
          badgeColor: "bg-yellow-600",
          content: `Another area I'm refining is making my executive communication more concise, especially when presenting complex technical topics to non-technical audiences. My instinct is to explain the full context and the underlying technical details because I find them fascinating and important. But I've learned that the audience doesn't always need or want that level of depth.

I saw it clearly during a Unimed board presentation where I started with the machine-learning architecture before covering business results. I noticed on their faces that I was losing the room. The CFO kindly interrupted: "Leonardo, how much will this save?" That was a wake-up call.

Since then I've worked deliberately on structuring communication by opening with the impact and offering technical detail only on demand. I use frameworks like Situation-Complication-Resolution and always prepare a two-minute executive version and a fifteen-minute detailed version. I also ask for feedback regularly: "Was I clear? Do you need more or less detail?"

The improvement is evident. At SEFAZ-RS my presentations to the Secretary of Finance are much more effective because I start with the "so what"—revenue impact, efficiency, citizens served—and only dive into technical detail when asked. It's a constant balance between my passion for technical detail and the need to communicate in a way that resonates with each audience.`,
          tags: ["communication", "executive", "audience", "self-awareness"],
          hook: "Making executive communication more concise and impact-first",
          mic_drop: "Lead with the 'so what' and offer technical depth only if needed"
        },
        {
          id: "paciencia_processos_politicos",
          title: "Patience with Organizational Politics",
          badge: "Development",
          badgeColor: "bg-amber-500",
          content: `I'm continuously working on my patience with organizational politics, especially when I feel technical decisions are being influenced by factors unrelated to the solution's merit.

My natural orientation is efficiency and outcome delivery, which sometimes makes me want to accelerate consensus-building steps that are vital for organizational buy-in. I learned that while implementing OKR frameworks at SEFAZ-RS, when I realized having the best architecture wasn't enough—we needed lasting agreements.

Today I invest more time at the beginning of projects to map political dynamics, identify champions in different areas and translate technical benefits into strategic goals. I also started to view the consensus-building process as part of the work, not as an obstacle.

The result is more sustainable implementations, with organic adoption and less rework. Turning politics into a lever has become a personal competitive advantage.`,
          tags: ["politics", "consensus", "sustainability", "adoption"],
          hook: "Turning politics into an adoption lever",
          mic_drop: "Well-built consensus equals sustainable rollouts"
        },
        {
          id: "decisoes_com_dados_incompletos",
          title: "Decisions with Imperfect Data",
          badge: "Development",
          badgeColor: "bg-yellow-400",
          content: `I'm also evolving my ability to take quick decisions even when the data isn't perfect. My natural reflex is to keep digging until I have 100% statistical confidence, and that has delayed experiments in the past.

To balance it, I now define analysis timeboxes, agree upfront on the acceptable confidence level and map exactly what learning I expect from each cycle. If data is still incomplete at the agreed deadline, we move ahead with a controlled experiment and gather the missing information afterwards.

This adjustment shortened decision time, preserved a bias for action and created a cadence of continuous learning without analysis paralysis. The team gained speed without abandoning accountability.`,
          tags: ["decision", "data", "sense of urgency", "timeboxing"],
          hook: "Time-boxed analysis for decisions without paralysis",
          mic_drop: "Sprint-paced decisions with incremental learning"
        },
        {
          id: "proteção_foco_time",
          title: "Protecting Squad Focus",
          badge: "Development",
          badgeColor: "bg-orange-500",
          content: `I'm also honing my discipline to say "not now" to requests that dilute the team's focus. My desire to generate impact used to make me accept new demands without checking available capacity, which overloaded squads during the Oakberry rollout.

Now, before taking on extra work, I review active OKRs, validate trade-offs with capacity data and build transparent narratives with stakeholders. When I accept a new request, I adjust the backlog immediately and communicate the impact to avoid last-minute heroics.

That muscle brought predictability to the roadmap, protected team energy and kept delivery quality high. I've learned that focus is also a leadership decision.`,
          tags: ["prioritization", "focus", "capacity", "trade-offs"],
          hook: "A focus shield that protects squad capacity",
          mic_drop: "Protected focus equals consistent delivery without last-minute heroes"
        }
      ]
    }
  }
};

export default icebreakerData;
