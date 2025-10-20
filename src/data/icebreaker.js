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
      question: "Why are you considering a move? / Why consider a change?",
      category: "Motivation for Change",
      versions: [
        {
          id: "foco_crescimento",
          title: "Growth Narrative",
          badge: "Growth",
          badgeColor: "bg-lime-500",
          content: `I’ve reached a point where the next learning leap requires operating in a higher-scale environment with faster cadence and brand-new challenges. Amazon lets me bring together my telecom, financial services, and public-sector experience to solve payment problems that touch millions of customers daily.

I want to keep stretching the complexity I handle: lead cross-functional squads, build mechanisms that work across countries, and accelerate my AI/ML journey applied to payments. In my current context those challenges show up occasionally; here they’re the norm.`,
          tags: ["growth", "learning", "scale", "career"],
          hook: "Ready for the next learning curve at global scale",
          mic_drop: "I’m seeking a place where the right challenge appears every day, not once a year"
        },
        {
          id: "foco_proposito",
          title: "Purpose Narrative",
          badge: "Purpose",
          badgeColor: "bg-rose-500",
          content: `I want my next years to be spent building something that undeniably improves life for customers and partners. Amazon’s mission resonates with me: make everyday life easier through reliable services and wide access.

The Oakberry partnership shows there’s real opportunity to help Brazilian entrepreneurs scale with technology. That motivates me to pour my energy into AI/ML, payments, and governance so the impact is visible and tangible.`,
          tags: ["purpose", "impact", "customers", "entrepreneurs"],
          hook: "Building technology that empowers those who sell and those who buy",
          mic_drop: "When career and purpose line up, I deliver more energy every single day"
        },
        {
          id: "foco_desafio_tecnico",
          title: "Technical Challenge Narrative",
          badge: "Tech",
          badgeColor: "bg-sky-600",
          content: `I’m ready to dive into a bigger technical challenge: integrating AI/ML, automation, and new payment experiences inside an Amazon-scale platform. I’ve done this in regulated, high-stakes environments, and now I want to bring that playbook where experimentation is faster and reach is global.

Amazon’s payments architecture, availability expectations, and innovation pace create the perfect arena to expand both my technical depth and my leadership range.`,
          tags: ["technology", "AI/ML", "architecture", "scale"],
          hook: "Looking for a more demanding technical board",
          mic_drop: "I want to build the payment foundations that will stand for the next decade"
        },
        {
          id: "foco_impacto_global",
          title: "Global Impact Narrative",
          badge: "Impact",
          badgeColor: "bg-amber-600",
          content: `After driving relevant outcomes in Brazil, I want to work on a platform that talks to the world. Amazon lets me learn from global teams, apply best practices locally, and export solutions created here to other markets.

That cross-pollination expands my toolkit, sparks new ideas, and keeps motivation high because I can see the ripples of my work beyond one geography.`,
          tags: ["global impact", "collaboration", "learning", "payments"],
          hook: "Turning local expertise into global wins",
          mic_drop: "I want solutions designed here to solve problems elsewhere too"
        }
      ]
    },
    por_que_amazon: {
      question: "Why Amazon? / What attracts you to Amazon?",
      category: "Motivation and Cultural Fit",
      versions: [
        {
          id: "versao_principal",
          title: "Core Narrative",
          badge: "Recommended",
          badgeColor: "bg-orange-500",
          content: `What excites me about Amazon is the genuine customer focus paired with operational discipline. Everywhere I've created lasting impact, the environment rewarded people who dive deep, simplify the complex, and see delivery through to the end — and that is precisely the Amazon mindset.

When I rolled out Brazil's first 4G network, I handled every regulatory dependency because I knew I was connecting people, not just installing hardware. At Unimed, I used AI to return 45 million dollars to the healthcare system because faster approvals meant better outcomes for patients. At HSBC, I migrated 3 billion dollars without noise because customer trust leaves no room for error. Same pattern every time: start with the customer, go deep, simplify, deliver.

I also value how Amazon celebrates builders. I turned war rooms into decision hubs, created value-based frameworks, and democratized data because sustainable results come from replicable mechanisms, not hero moments. I want to bring that energy to a company that thinks big, moves fast, and measures success by real customer impact.

For me, Amazon is the natural next step: raising the bar every day, at global scale, with the certainty that every detail matters.`,
          tags: ["customer focus", "operational discipline", "full accountability", "simplify"],
          hook: "Genuine customer focus backed by disciplined execution",
          mic_drop: "15 years of raising the bar meet the mechanism that scales impact"
        },
        {
          id: "versao_payments",
          title: "Payments Narrative",
          badge: "Payments",
          badgeColor: "bg-green-500",
          content: `Amazon is about to take the next leap in payments with the Oakberry partnership, and that is exactly the kind of challenge that energizes me. Blending AI/ML, large-scale operations, and journey design to turn payments into a daily advantage is where I deliver my best work.

In recent years I led similar transformations: applying Lean Six Sigma to redesign approval flows, deploying ML models that lifted authorization rates by 25%, and building self-service pipelines that trimmed cycle time by 40%. I did it by aligning product, engineering, risk, finance, and external partners so technology, compliance, and customer experience moved in lockstep.

I see three immediate fronts to apply that playbook for Amazon Brazil: automate decisions with predictive intelligence, expand self-service capabilities for Oakberry merchants, and reduce cost per transaction without sacrificing experience. My style is to define the mechanism, instrument the metrics, and run business reviews with data in hand — with VPs and strategic partners alike.

I want to lead this end-to-end transformation because payments are the quiet driver of this growth engine. Every improvement we release unlocks expansion, enables new launches, and deepens Brazilian customers’ trust in Amazon.`,
          tags: ["payments", "AI/ML", "lean six sigma", "self-service"],
          hook: "Oakberry partnership as a launchpad for the next payments leap",
          mic_drop: "Turning operations into self-adjusting mechanisms that scale with customers"
        },
        {
          id: "versao_builder",
          title: "Builder Mindset",
          badge: "Builder",
          badgeColor: "bg-purple-500",
          content: `Amazon is home for people who start with the customer and design every step from that point forward. Every enduring outcome I've delivered followed that playbook: define the ideal experience, prototype fast, iterate with data — whether I was lighting up the 4G network, deploying AI in healthcare, or shaping value frameworks for government.

My way of operating is to build simple, scalable solutions. I designed a War Room PMO that became a global reference, deployed data lakes that put insight in the hands of decision-makers within hours, and codified AI playbooks that scaled across business units. Customers can’t wait for the perfect release — they deserve to feel progress continuously.

I want to build alongside people who think big, ship quickly, and measure obsessively. Amazon offers the perfect stage: complex challenges, real autonomy, peers who elevate the bar, and a culture where good ideas don’t die for lack of ownership.`,
          tags: ["simplify", "builder", "customer-first planning", "full accountability"],
          hook: "Starting from the customer is my natural way of operating",
          mic_drop: "From War Room to data lake — mechanisms scale, heroics don’t"
        },
        {
          id: "versao_people_lideranca",
          title: "Leadership & Culture",
          badge: "People",
          badgeColor: "bg-blue-500",
          content: `Amazon isn’t chasing results alone; it’s committed to being one of the best workplaces on the planet while delivering for customers. That intersection is my sweet spot: coupling business metrics with people development.

I’ve led squads through mission-critical operations while keeping internal NPS high, built AI/ML and Lean communities of practice that multiplied knowledge, and designed coaching mechanisms that raised PM and engineering maturity. Culture isn’t a slide deck — it’s every prioritization call, every tough feedback conversation, every investment in people.

I want to help Amazon grow without losing what makes it unique: empowered teams, diverse thinking, autonomy with accountability, and a high bar for leadership. For me, raising the bar starts at home: supporting the people beside me so customers feel the difference outside.`,
          tags: ["people leadership", "top workplace ambition", "continuous learning", "elevate the bar"],
          hook: "Grow without losing the soul: performance + top workplace experience",
          mic_drop: "Strong culture inside the house is felt by customers on the outside"
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
          title: "Core Narrative",
          badge: "Recommended",
          badgeColor: "bg-purple-500",
          content: `This role brings together exactly the kind of transformation work I’ve been doing: redesigning critical operations with data, automation, and the orchestration of tech and business teams. Leading payments operations while the Oakberry partnership scales requires someone comfortable moving from strategy to delivery and then back with clear metrics.

At Unimed I used AI to automate decisions and trimmed cycle time by 30%; at Sicredi I rebuilt authorization rules with ML that lifted approval rates by 25%; at RS Treasury I set up a data governance model that allowed decisions in hours, not weeks. The pattern is the same: Lean Six Sigma rigor, well-instrumented indicators, and structured reviews with executives and partners to keep momentum.

I see three immediate fronts for Amazon: define the automation roadmap with cross-functional squads, measure efficiency and customer experience obsessively, and set up business reviews that keep every area aligned and ready to act. That’s how I naturally operate: turn plans into mechanisms that endure.`,
          tags: ["transformation", "AI/ML", "lean six sigma", "data governance"],
          hook: "Turning plans into mechanisms that sustain momentum",
          mic_drop: "I’ve already run critical operations with AI, metrics, and end-to-end coordination"
        },
        {
          id: "versao_insights",
          title: "Metrics & Insights",
          badge: "Metrics",
          badgeColor: "bg-indigo-500",
          content: `The job calls for someone who can convert data into practical decisions and keep the operation aligned. That’s my comfort zone. At the RS Treasury I integrated 48 sources and ran biweekly business reviews that shortened reaction time from weeks to hours. At Sicredi I built payment KPIs that directed near real-time adjustments.

For Amazon I want to make efficiency, customer and compliance metrics visible to every team, connecting AI/ML squads, operations, finance, and external partners. From there, I intend to run weekly reviews focused on experiments, bottlenecks, and next steps — turning the payments operation into a self-explanatory system where every decision has data, an owner, and a deadline.`,
          tags: ["metrics", "insights", "business review", "automation"],
          hook: "Fast decisions start with simple, accessible metrics",
          mic_drop: "I’ve turned scattered data into a review cadence that speeds decisions"
        },
        {
          id: "versao_parcerias",
          title: "Partnership Orchestration",
          badge: "Stakeholders",
          badgeColor: "bg-teal-500",
          content: `The role requires coordinating Amazon, Oakberry, and other partners so product, engineering, and operations move in lockstep. That’s how I ran the HSBC–Bradesco migration and the 4G rollout: aligning regulators, vendors, and internal teams around plans with owners, risks, and checkpoints.

For Amazon I plan to set up a ritual where product, engineering, risk, finance, and external partners review roadmap, dependencies, and readiness ahead of time. That eliminates surprises, secures technology integration, and builds confidence on every side. My focus is ensuring every stakeholder knows what to deliver, when, how success is measured, and how to escalate quickly when something blocks progress.`,
          tags: ["stakeholders", "partnerships", "alignment", "shared roadmap"],
          hook: "Orchestrating Amazon and partners so no link falls behind",
          mic_drop: "I’ve aligned multinational programs with crystal-clear roles and dependencies"
        },
        {
          id: "versao_eventos",
          title: "Launch & Readiness",
          badge: "Operations",
          badgeColor: "bg-amber-500",
          content: `Another core aspect of the job is preparing Amazon for high-stakes events and operational reviews. That’s exactly what I did for the 2014 World Cup telecom war room and in major healthcare AI launches: build checklists, simulations, and contingency plans that leave no room for surprises.

I want to apply the same rigor here: establishing readiness reviews, running tabletop drills with tech teams, and ensuring every function — from back office to support — is ready for spikes and change. That means documented runbooks, trained teams, and a loop where lessons from each event feed back into the process.`,
          tags: ["readiness", "critical operations", "contingency planning", "runbooks"],
          hook: "High-stakes events demand checklists, simulations, and clear owners",
          mic_drop: "I’ve delivered zero-surprise outcomes in high-risk moments with disciplined prep"
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

At Huawei, when tower rollouts were stalled at 382 days, I personally ran Ishikawa and 5 Whys analysis, renegotiated with municipalities and ANATEL, and redesigned the end-to-end workflow. We brought the SLA down to 62 days — pure go deep, data on hand, and execution obsession.

At Unimed I automated 30% of claims processing with AI, generating 45 million dollars in annual savings. At HSBC I led a 3-billion-dollar migration with zero incidents. These numbers are audited and documented.

I also connect technical decisions to customer outcomes. At Sicredi, the machine learning models I built reduced credit approval time and improved experience for 6.4 million members.

The common thread is balancing technical depth with business vision. I'm equally comfortable reviewing Python code or defending business cases to CFOs, making sure we ship the right thing, the right way, for the right reason.`,
          tags: ["go deep", "drive outcomes", "customer focus", "technical"],
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
          title: "Customer Focus in Practice",
          badge: "Customer",
          badgeColor: "bg-orange-600",
          content: `I use the customer's voice as the compass to prioritize and shape solutions.

When I redesigned Sicredi's onboarding journey, I interviewed members, analyzed NPS, and studied churn. The new digital journey lifted conversion by 23% and reduced contact-center calls.

I also bring frontline feedback to executive tables so financial, tech, and operational decisions keep the customer at the center and generate value people can feel.`,
          tags: ["customer focus", "experience", "NPS", "prioritization"],
          hook: "Real customer signals steering strategic bets",
          mic_drop: "Onboarding redesign: +23% conversion and fewer support calls"
        },
        {
          id: "foco_aprendizado",
          title: "Learning Growth Engine",
          badge: "Learn & Be Curious",
          badgeColor: "bg-emerald-600",
          content: `I learn fast, teach fast, and create systems that scale knowledge.

I lead internal communities of practice in AI/ML and Lean, documenting playbooks and hosting tech talks to accelerate enterprise adoption. In every transformation I capture lessons learned and turn them into reusable frameworks.

That mindset keeps teams raising the bar together, reduces repeated mistakes, and makes the organization stay one step ahead.`,
          tags: ["continuous learning", "coaching", "community", "continuous improvement"],
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

At SEFAZ-RS the difference is evident: starting with "so what" keeps leaders engaged and earns me permission to go deep only when they want it.`,
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

This keeps the sense of urgency alive, shortens decision loops, and maintains a steady learning cadence without analysis paralysis.`,
          tags: ["decision", "data", "sense of urgency", "timeboxing"],
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
  }
};

export default icebreakerData;




