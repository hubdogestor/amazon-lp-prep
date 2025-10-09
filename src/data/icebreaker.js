// src/data/icebreaker_fantastico.js
// Icebreaker estratégico para entrevistas Amazon - Múltiplas versões diferenciadas

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

Nos meus momentos livres, você me encontra jogando xadrez (adoro a estratégia do jogo, que muito me lembra os desafios que enfrento no trabalho) ou tocando guitarra para relaxar. Também sou um leitor ávido - estou sempre com um livro sobre estratégia, tecnologia ou liderança.

O que me move profissionalmente é a mesma curiosidade que me move pessoalmente: entender como as coisas funcionam e como podem ser melhoradas. Essa combinação de pensamento analítico (do xadrez), criatividade (da música) e aprendizado contínuo (dos livros) se reflete na minha forma de liderar projetos e resolver problemas complexos.`,
          tags: ["pessoal", "família", "hobbies", "conexão humana"],
          hook: "Gaúcho, pai, curioso por natureza",
          mic_drop: "Xadrez, guitarra e tecnologia - combinação perfeita para resolver problemas complexos"
        },
        {
          id: "versao_profissional",
          title: "Versão Profissional",
          badge: "Profissional",
          badgeColor: "bg-green-500",
          context: "Para destacar expertise e track record",
          content: `Sou Leonardo Menezes, um líder em transformação digital com 15+ anos gerando valor mensurável em escala. Ao longo da minha carreira, liderei programas que criaram mais de US$ 300 milhões em valor para organizações como Huawei, HSBC, Bradesco, Sicredi e Unimed.

Minha trajetória é marcada por três pilares: **infraestrutura crítica**, **transformação financeira** e **inovação em setores tradicionais**. Na Huawei, construí a base do 4G no Brasil - entreguei a primeira estação em 2012 e coordenei a conectividade da Copa 2014. No setor financeiro, liderei a migração de US$ 3 bilhões do HSBC para o Bradesco sem falhas e co-liderei o lançamento do Banco Digital Next.

Mais recentemente, tenho focado em **IA aplicada**: na Unimed, implementei automação que reduziu 30% o tempo de processamento de sinistros gerando US$ 45M em savings. No Sicredi, meus modelos de ML aceleraram aprovações em 40%. Atualmente na SEFAZ-RS, modernizo a gestão fiscal usando frameworks de value-based management.

O que me diferencia é a capacidade de mergulhar no detalhe técnico mantendo visão estratégica - sou igualmente confortável discutindo arquitetura de sistemas com engenheiros ou ROI com CFOs.`,
          tags: ["executiva", "impacto", "liderança", "resultados"],
          hook: "US$ 300 milhões em valor gerado em 15+ anos",
          mic_drop: "Detalhe técnico com visão estratégica - do código ao boardroom"
        },
        {
          id: "versao_amazoniana",
          title: "Versão Amazoniana",
          badge: "Amazon DNA",
          badgeColor: "bg-orange-500",
          context: "Alinhada aos Leadership Principles da Amazon",
          content: `Sou Leonardo Menezes, e minha carreira é uma demonstração prática dos Leadership Principles da Amazon em ação.

**Customer Obsession**: Sempre começo pelo cliente. Na Huawei, quando SLAs estavam em 382 dias, não aceitei - mergulhei no problema e redesenhei processos que levaram a 62 dias. Na Unimed, cada decisão de produto era validada com usuários reais, resultando em NPS +6 pontos.

**Dive Deep**: Não delego o entendimento técnico. No HSBC, eu mesmo conduzi root cause analysis de compliance FATCA. Na Unimed, escrevi queries SQL para validar modelos de ML. Acredito que liderança efetiva exige domínio do detalhe.

**Deliver Results**: Meu track record fala por si - US$ 300M+ em valor gerado. No Bradesco, migrei US$ 3Bi com zero falhas. No Sicredi, 15+ produtos digitais geraram US$ 50M em receita incremental. Comprometimento com outcomes, não apenas outputs.

**Invent and Simplify**: Na Huawei, transformei complexidade (20 fornecedores, múltiplos reguladores) em simplicidade (um War Room, um dashboard, uma regra: 24h para resolver). Essa mentalidade me acompanha em cada projeto.

**Ownership**: Nunca digo "não é minha responsabilidade". No HSBC, assumi pessoalmente negociações com BACEN e auditores. Ownership end-to-end é meu padrão operacional.`,
          tags: ["leadership principles", "customer obsession", "ownership", "deliver results"],
          hook: "Leadership Principles da Amazon em ação",
          mic_drop: "Customer obsession + dive deep + deliver results = meu DNA profissional"
        }
      ]
    },

    // PERGUNTA: "POR QUE A AMAZON?"
    por_que_amazon: {
      question: "Por que a Amazon? / Why Amazon?",
      category: "Motivação e Fit Cultural",
      versions: [
        {
          id: "versao_leadership_principles",
          title: "Versão Leadership Principles",
          badge: "LP Focus",
          badgeColor: "bg-orange-500",
          content: `A Amazon sempre me fascinou porque é onde customer obsession não é apenas um discurso, mas está no DNA de cada decisão. Ao longo da minha carreira, sempre priorizei o impacto no cliente final - seja entregando a primeira estação 4G do Brasil para conectar pessoas, ou implementando IA que reduz tempo de processamento de sinistros de saúde.

O que mais me atrai são os Leadership Principles, especialmente "Dive Deep" e "Invent and Simplify". Na Huawei, mergulhei tão fundo nos processos operacionais que redesenhei workflows que reduziram SLAs de 382 para 62 dias. Na Unimed, simplifiquei operações complexas através de automação, gerando US$ 45 milhões em savings.

A cultura de "Ownership" ressoa profundamente comigo. No HSBC, assumi responsabilidade end-to-end pela migração de US$ 3 bilhões, trabalhando pessoalmente com reguladores e auditores para garantir zero falhas. Não delego responsabilidade - eu mergulho no problema.

A Amazon representa a combinação perfeita de escala, inovação e impacto. Quero contribuir para uma organização que pensa grande, age rápido e coloca o cliente em primeiro lugar em cada decisão. É onde posso aplicar minha experiência em transformação operacional para gerar valor em escala verdadeiramente global.`,
          tags: ["leadership principles", "customer obsession", "ownership", "dive deep"],
          hook: "Customer obsession não é discurso, está no DNA de cada decisão",
          mic_drop: "Escala, inovação e impacto - onde posso gerar valor em escala global"
        },
        {
          id: "versao_pagamentos_flywheel",
          title: "Versão Pagamentos & Flywheel",
          badge: "Payments",
          badgeColor: "bg-green-500",
          content: `A Amazon me fascina porque é onde posso aplicar minha experiência em pagamentos para acelerar o flywheel de crescimento mais poderoso do mundo. Entendo como operações de pagamento eficientes reduzem custos, melhoram experiência do cliente e habilitam mais seleção - criando um ciclo virtuoso de crescimento.

Minha experiência é exatamente o que a Amazon precisa: liderei operações de pagamento em escala bilionária, implementei IA para otimizar authorization rates e process cycle time, e tenho expertise em compliance regulatório crítico. No Sicredi, meus modelos de ML aumentaram payment success rate em 25%, gerando US$ 50 milhões em revenue adicional.

O que me motiva é a oportunidade de trabalhar na parceria estratégica com Oakberry, aplicando AI/ML para transformar payment business operations. Vejo potencial imenso para implementar automação que reduza operational cost per transaction enquanto melhora customer payment satisfaction.

A Amazon é onde posso combinar minha paixão por inovação com impacto em escala global. Quero fazer parte de uma organização que não apenas aceita mudança, mas a lidera - especialmente em um momento crítico como a transformação de pagamentos no Brasil com PIX e Open Finance.`,
          tags: ["pagamentos", "flywheel", "crescimento", "inovação"],
          hook: "Aplicar experiência em pagamentos para acelerar o flywheel mais poderoso do mundo",
          mic_drop: "Liderar transformação de pagamentos no Brasil com PIX e Open Finance"
        },
        {
          id: "versao_pessoal_motivacao",
          title: "Versão Pessoal & Motivação",
          badge: "Motivação",
          badgeColor: "bg-blue-500",
          content: `Quando penso na Amazon, vejo a combinação perfeita do que me move: **escala, impacto e desafio constante**.

Como gaúcho, valorizo trabalho duro e resultados tangíveis - não promessas, mas entregas. A Amazon corporifica isso: é uma empresa que **age**, não apenas planeja. Essa mentalidade de "bias for action" está no meu DNA desde a Huawei, quando entregamos a Copa 2014 sem falhas.

Como pai, penso muito no futuro que estou construindo. Quero que minha filha Livia cresça vendo que é possível transformar o mundo através de tecnologia e inovação responsável. A Amazon está na vanguarda dessa transformação - de IA a sustentabilidade, de logística a pagamentos digitais.

Como profissional curioso, preciso de um ambiente que me desafie constantemente. Adoro estudar novas tecnologias, estar atualizado sobre tendências - e a Amazon é o lugar onde inovação não é evento, é rotina diária. É onde posso aprender com os melhores e contribuir para redefinir indústrias.

Minha carreira sempre foi sobre escolher o desafio mais difícil (migração bancária bilionária, lançar banco digital, transformar cooperativa tradicional). A Amazon representa o próximo nível: **impactar milhões de clientes em escala global**, mantendo obsessão pelo detalhe e pela excelência operacional.`,
          tags: ["motivação", "valores", "impacto", "desafio"],
          hook: "Escala + impacto + desafio constante",
          mic_drop: "Construir o futuro através de tecnologia e obsessão pelo cliente"
        }
      ]
    },

    // PERGUNTA: "POR QUE ESTA VAGA?"
    por_que_esta_vaga: {
      question: "Por que esta vaga específica? / Why this role?",
      category: "Fit com a Posição",
      versions: [
        {
          id: "versao_program_manager_ai",
          title: "Versão Program Manager & AI",
          content: `Esta vaga é a convergência perfeita da minha experiência: program management em escala, transformação operacional e implementação de AI/ML em operações críticas.

Meu background é exatamente o que vocês precisam. Liderei programas complexos que geraram US$ 300+ milhões em valor, sempre com foco em operational excellence. Na Huawei, coordenei 30+ PMs e 20 fornecedores para entregar infraestrutura crítica. No HSBC/Bradesco, gerenciei a migração mais complexa da história bancária brasileira.

Mais importante: tenho experiência prática implementando AI/ML em payment operations. Na Unimed, meus modelos automatizaram processamento que reduziu cycle time em 30%. No Sicredi, implementei ML para credit scoring e fraud detection que melhorou authorization rates significativamente.

A parceria com Oakberry me empolga porque vejo oportunidade de aplicar Lean Six Sigma para identificar waste em payment processes e implementar AI use cases que reduzam operational cost per transaction. Minha experiência com value-based management e OKRs será crucial para medir ROI dessas transformações.

Esta posição oferece o que busco: ownership end-to-end, impacto mensurável e oportunidade de aplicar minha expertise em um ambiente que valoriza inovação e customer obsession.`,
          tags: ["program management", "AI/ML", "operational excellence", "value-based"],
          hook: "Convergência perfeita: program management, transformação operacional e AI/ML",
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
          id: "versao_dive_deep_results",
          title: "Versão Dive Deep & Deliver Results",
          content: `Meu principal diferencial é a capacidade de mergulhar profundamente em problemas complexos e entregar resultados mensuráveis consistentemente.

**Dive Deep**: Não me contento com análises superficiais. Na Huawei, quando SLAs estavam em 382 dias, eu mesmo conduzi root cause analysis usando Ishikawa e 5 Whys, identificando que 60% dos atrasos vinham de gargalos regulatórios. Negociei pessoalmente com prefeituras e ANATEL, redesenhei workflows e reduzi para 62 dias.

**Deliver Results**: Tenho track record de US$ 300+ milhões em valor gerado. Na Unimed, implementei IA que automatizou 30% do processamento de sinistros, gerando US$ 45 milhões em savings anuais. No HSBC, migrei US$ 3 bilhões sem uma única falha.

**Customer Obsession**: Sempre conecto decisões técnicas ao impacto no cliente. No Sicredi, meus modelos de ML não apenas melhoraram credit scoring - eles reduziram tempo de aprovação de crédito, melhorando experiência de 6.4 milhões de cooperados.

O que me diferencia é combinar profundidade técnica com visão de negócio, sempre focando em outcomes que importam para o cliente final.`,
          tags: ["dive deep", "deliver results", "customer obsession", "técnico"],
          hook: "Mergulhar profundamente e entregar resultados mensuráveis consistentemente",
          mic_drop: "Profundidade técnica com visão de negócio, focando em outcomes do cliente"
        }
      ]
    },

    // PERGUNTA: "PONTOS FRACOS / ÁREAS DE DESENVOLVIMENTO"
    areas_desenvolvimento: {
      question: "Quais são suas áreas de desenvolvimento? / What are your weaknesses?",
      category: "Autoconhecimento",
      versions: [
        {
          id: "versao_perfeccionismo_produtivo",
          title: "Perfeccionismo Produtivo",
          content: `Uma área que continuo desenvolvendo é equilibrar meu perfeccionismo natural com a necessidade de "bias for action" em ambientes de alta velocidade.

Minha tendência é querer refinar soluções até atingirem padrão muito alto, o que às vezes pode impactar speed to market. Reconheci isso durante um projeto na Unimed, onde passei tempo excessivo refinando dashboards executivos que já atendiam perfeitamente às necessidades.

Desde então, implementei uma abordagem de "good enough to start" seguida de iterações baseadas em feedback. Agora uso metodologias ágeis de forma mais disciplinada: defino MVPs claros, priorizo features baseado em customer impact e estabeleço checkpoints regulares com stakeholders.

Essa evolução me tornou mais eficiente sem comprometer qualidade. Na verdade, a abordagem iterativa frequentemente resulta em soluções melhores porque incorpora feedback real dos usuários. É um exemplo de como "Learn and Be Curious" me ajudou a evoluir como líder.`,
          tags: ["perfeccionismo", "bias for action", "iteração", "learn and be curious"],
          hook: "Equilibrar perfeccionismo com bias for action",
          mic_drop: "Abordagem iterativa com feedback real resulta em soluções melhores"
        },
        {
          id: "versao_delegacao_estrategica",
          title: "Delegação Estratégica",
          content: `Uma competência que venho aprimorando é delegação estratégica, especialmente em projetos de alta visibilidade. Minha experiência técnica e paixão pelos detalhes às vezes me levam a assumir tarefas que poderiam ser melhor executadas por especialistas da equipe.

Identifiquei isso durante implementação de IA na Unimed, onde inicialmente estava muito envolvido nos aspectos técnicos do machine learning. Percebi que isso limitava minha capacidade de focar na estratégia e alinhamento com stakeholders.

Desenvolvi uma abordagem mais estruturada: defino claramente objetivos e success criteria, identifico os melhores recursos para cada tarefa, e estabeleço pontos de controle regulares. Isso me permite manter visibilidade sem microgerenciar.

O resultado foi melhoria significativa na eficiência da equipe e qualidade das entregas. Também me permitiu focar mais tempo em atividades de maior valor: strategic alignment, stakeholder management e people development. É um exemplo prático de "Hire and Develop the Best" em ação.`,
          tags: ["delegação", "estratégia", "hire and develop", "people development"],
          hook: "Aprimorando delegação estratégica em projetos de alta visibilidade",
          mic_drop: "Hire and Develop the Best em ação - foco em strategic alignment"
        }
      ]
    },

    // PERGUNTAS COMPORTAMENTAIS COMUNS
    comportamentais: {
      category: "Perguntas Comportamentais Amazon",
      questions: [
        {
          q: "Tell me about a time when you had to leave a task unfinished",
          a: `**Situação**: Em 2016, durante a migração HSBC→Bradesco, eu estava liderando simultaneamente a implementação de controles FATCA e a validação de dados de clientes HNWI. Com apenas 3 semanas para deadline regulatório, percebi que não conseguiria entregar ambos com a qualidade necessária.

**Tarefa**: Minha responsabilidade era garantir compliance total em ambos os workstreams, mas os recursos eram limitados e a complexidade maior que o estimado.

**Ação**: Tomei a decisão difícil de priorizar FATCA compliance, que tinha impacto regulatório direto. Escalei para meu diretor, apresentei análise de risco detalhada e propus postergar validação HNWI por 2 semanas. Realoquei minha melhor analista para FATCA e pessoalmente assumi tarefas técnicas de validação.

**Resultado**: Entregamos FATCA compliance no prazo, evitando multas regulatórias de US$ 2+ milhões. A validação HNWI foi concluída 2 semanas depois, sem impacto nos clientes. Aprendi que ownership às vezes significa tomar decisões difíceis e comunicar riscos transparentemente.`,
          lp: "Ownership, Customer Obsession"
        },
        {
          q: "Tell me about a time when you gave a simple solution to a complex problem",
          a: `**Situação**: Na Huawei, enfrentávamos SLAs de 382 dias para rollout de torres 4G, com 20 fornecedores e processos complexos de licenciamento que envolviam prefeituras, ANATEL e proprietários de terrenos.

**Tarefa**: Como Program Manager, precisava acelerar drasticamente as entregas para cumprir compromissos da Copa 2014, mas o processo tinha dezenas de dependências críticas.

**Ação**: Em vez de otimizar cada etapa individualmente, criei uma solução simples: um "War Room" físico onde todos os stakeholders se reuniam diariamente. Implementei um dashboard visual único que mostrava status de cada torre em tempo real. A regra era simples: nenhum problema podia ficar mais de 24h sem solução ou escalação.

**Resultado**: Reduzimos SLA de 382 para 62 dias - uma melhoria de 84%. O modelo foi replicado globalmente pela Huawei, gerando US$ 120 milhões em eficiência. A simplicidade da solução (um local, um dashboard, uma regra) resolveu a complexidade de coordenação entre múltiplos stakeholders.`,
          lp: "Invent and Simplify, Dive Deep"
        },
        {
          q: "Tell me about a time when you invented something",
          a: `**Situação**: Na Unimed, processamento manual de sinistros consumia 40% do tempo da equipe médica, criando gargalos que impactavam 695k membros. Cada sinistro passava por 7 etapas manuais de validação.

**Tarefa**: Como Strategy Advisor, precisava encontrar uma solução que reduzisse workload sem comprometer qualidade médica ou compliance regulatório.

**Ação**: Inventei um sistema de "AI Triage" que combinava OCR para documentos médicos, NLP para análise de laudos e ML para classificação de risco. O diferencial foi criar regras de negócio que permitiam aprovação automática para casos de baixo risco (60% do volume) e escalação inteligente para casos complexos.

**Resultado**: Reduzimos tempo de processamento em 30%, liberando médicos para atividades de maior valor. O sistema processa hoje 85% dos sinistros automaticamente, gerando US$ 45 milhões em savings anuais. A solução foi patenteada e está sendo licenciada para outras cooperativas de saúde.`,
          lp: "Invent and Simplify, Customer Obsession"
        },
        {
          q: "Tell me about a time when you took a calculated risk",
          a: `**Situação**: Durante lançamento do Banco Digital Next no Bradesco, descobrimos 72h antes do go-live que nosso sistema de antifraude tinha falso positivo de 15% - bloquearia clientes legítimos na abertura de conta.

**Tarefa**: Como Program Manager, precisava decidir entre adiar o lançamento (impacto de US$ 5+ milhões em marketing) ou lançar com risco controlado.

**Ação**: Calculei o risco: analisei dados históricos, estimei que 15% de falso positivo resultaria em 3k clientes bloqueados no primeiro mês. Propus lançamento com monitoramento 24/7 e squad dedicada para resolver casos manualmente. Criei dashboard em tempo real e processo de escalação para casos críticos.

**Resultado**: Lançamos no prazo, capturamos 50k novos clientes no primeiro mês. Resolvemos 98% dos falsos positivos em menos de 2h. Após 30 dias, ajustamos algoritmos e reduzimos falso positivo para 3%. O risco calculado permitiu capturar market share crítico contra Nubank.`,
          lp: "Bias for Action, Ownership"
        }
      ]
    },

    // Array simplificado para o modal
    questions: [
      {
        q: "Fale sobre você / Me conte sobre você",
        a: `**Versão Executiva - Foco em Impacto (2-3 min)**

Sou Leonardo Menezes, um líder em transformação digital com 15+ anos gerando valor mensurável em escala. Ao longo da minha carreira, liderei programas que criaram mais de US$ 300 milhões em valor para organizações como Huawei, HSBC, Bradesco, Sicredi e Unimed.

Minha trajetória começou na Huawei, onde por 6 anos liderei a infraestrutura de telecomunicações que conectou o Brasil ao 4G. Entreguei a primeira estação 4G do país em 2012 e coordenei toda a conectividade da Copa do Mundo 2014. O que me diferenciou foi mergulhar no detalhe operacional: redesenhei processos que reduziram SLAs de 382 para 62 dias, gerando US$ 120 milhões em eficiência.

Depois migrei para o setor financeiro, onde liderei a transformação mais crítica da história bancária brasileira: a migração de US$ 3 bilhões em ativos do HSBC para o Bradesco, com zero perda de dados e compliance total. Também co-liderei o lançamento do Banco Digital Next, competindo diretamente com Nubank.

Nos últimos anos, tenho focado em aplicar IA e automação em setores tradicionais. Na Unimed, implementei soluções que reduziram 30% o tempo de processamento de sinistros e lancei produtos digitais que hoje representam US$ 16 milhões em receita. Atualmente na SEFAZ-RS, estou modernizando a gestão fiscal do estado através de frameworks de value-based management.

O que me motiva é transformar complexidade em simplicidade, sempre com foco em resultados mensuráveis e impacto real no cliente final.`
      },
      {
        q: "Por que Amazon?",
        a: `**Versão Leadership Principles**

A Amazon sempre me fascinou porque é onde customer obsession não é apenas retórica, mas está embutida no DNA de cada decisão. Ao longo da minha carreira, sempre priorizei o impacto no cliente final - seja entregando a primeira estação 4G do Brasil para conectar pessoas, ou implementando IA que reduz tempo de processamento de sinistros na saúde.

O que mais me atrai são os Leadership Principles, especialmente "Dive Deep" e "Invent and Simplify". Na Huawei, mergulhei tão profundamente nos processos operacionais que redesenhei workflows reduzindo SLAs de 382 para 62 dias. Na Unimed, simplifiquei operações complexas através de automação, gerando US$ 45 milhões em savings.

A cultura de "Ownership" ressoa profundamente comigo. No HSBC, assumi responsabilidade end-to-end pela migração de US$ 3 bilhões, trabalhando pessoalmente com reguladores e auditores para garantir zero falhas. Não delego responsabilidade - mergulho no problema.

Amazon representa a combinação perfeita de escala, inovação e impacto. Quero contribuir com uma organização que pensa grande, age rápido e coloca o cliente em primeiro lugar em cada decisão. É onde posso aplicar minha experiência em transformação operacional para gerar valor em escala verdadeiramente global.`
      },
      {
        q: "Por que esta vaga específica?",
        a: `**Versão Program Manager & AI**

Esta vaga é a convergência perfeita da minha experiência: program management em escala, transformação operacional e implementação de AI/ML em operações críticas.

Meu background é exatamente o que vocês precisam. Liderei programas complexos que geraram US$ 300+ milhões em valor, sempre com foco em operational excellence. Na Huawei, coordenei 30+ PMs e 20 fornecedores para entregar infraestrutura crítica. No HSBC/Bradesco, gerenciei a migração mais complexa da história bancária brasileira.

Mais importante: tenho experiência prática implementando AI/ML em payment operations. Na Unimed, meus modelos automatizaram processamento que reduziu cycle time em 30%. No Sicredi, implementei ML para credit scoring e fraud detection que melhorou authorization rates significativamente.

A parceria com Oakberry me empolga porque vejo oportunidade de aplicar Lean Six Sigma para identificar waste em payment processes e implementar AI use cases que reduzam operational cost per transaction. Minha experiência com value-based management e OKRs será crucial para medir ROI dessas transformações.

Esta posição oferece o que busco: ownership end-to-end, impacto mensurável e oportunidade de aplicar minha expertise em um ambiente que valoriza inovação e customer obsession.`
      },
      {
        q: "Quais são seus principais pontos fortes?",
        a: `**Dive Deep & Deliver Results**

Meu principal diferencial é a capacidade de mergulhar profundamente em problemas complexos e entregar resultados mensuráveis consistentemente.

**Dive Deep**: Não me contento com análises superficiais. Na Huawei, quando SLAs estavam em 382 dias, eu mesmo conduzi root cause analysis usando Ishikawa e 5 Whys, identificando que 60% dos atrasos vinham de gargalos regulatórios. Negociei pessoalmente com prefeituras e ANATEL, redesenhei workflows e reduzi para 62 dias.

**Deliver Results**: Tenho track record de US$ 300+ milhões em valor gerado. Na Unimed, implementei IA que automatizou 30% do processamento de sinistros, gerando US$ 45 milhões em savings anuais. No HSBC, migrei US$ 3 bilhões sem uma única falha.

**Customer Obsession**: Sempre conecto decisões técnicas ao impacto no cliente. No Sicredi, meus modelos de ML não apenas melhoraram credit scoring - eles reduziram tempo de aprovação de crédito, melhorando experiência de 6.4 milhões de cooperados.

O que me diferencia é combinar profundidade técnica com visão de negócio, sempre focando em outcomes que importam para o cliente final.`
      }
    ]
  },

  en: {
    title: "Strategic Icebreaker Amazon",
    subtitle: "Differentiated positioning from the first seconds",
    
    // MAIN QUESTION: "TELL ME ABOUT YOURSELF"
    tell_me_about_yourself: {
      question: "Tell me about yourself / Walk me through your background",
      category: "Self Introduction",
      versions: [
        {
          id: "executive_impact_version",
          title: "Executive Version - Impact Focus (2-3 min)",
          context: "For Gabriela Bonelle or senior interviewers",
          content: `I'm Leonardo Menezes, a digital transformation leader with 15+ years generating measurable value at scale. Throughout my career, I've led programs that created over $300 million in value for organizations like Huawei, HSBC, Bradesco, Sicredi, and Unimed.

My journey started at Huawei, where for 6 years I led the telecom infrastructure that connected Brazil to 4G. I delivered Brazil's first 4G station in 2012 and coordinated all connectivity for the 2014 World Cup. What differentiated me was diving deep into operational details: I redesigned processes that reduced SLAs from 382 to 62 days, generating $120 million in efficiency.

I then moved to financial services, where I led the most critical transformation in Brazilian banking history: migrating $3 billion in assets from HSBC to Bradesco with zero data loss and full compliance. I also co-led the launch of Next Digital Bank, competing directly with Nubank.

In recent years, I've focused on applying AI and automation to traditional sectors. At Unimed, I implemented solutions that reduced claims processing time by 30% and launched digital products now generating $16 million in revenue. Currently at SEFAZ-RS, I'm modernizing the state's fiscal management through value-based management frameworks.

What drives me is transforming complexity into simplicity, always focusing on measurable results and real impact on the end customer.`,
          tags: ["executive", "impact", "leadership", "results"],
          hook: "$300 million in value generated",
          mic_drop: "Transforming complexity into simplicity with measurable impact"
        },
        {
          id: "payments_ai_version",
          title: "Payments & AI Version (2 min)",
          context: "For technical interviewers or role-specific focus",
          content: `I'm Leonardo Menezes, a specialist in transforming payment operations through AI and automation. My unique experience combines 15+ years in critical infrastructure with recent expertise in machine learning applied to fintech.

I started building the infrastructure that supports digital payments today: at Huawei, I led the 4G rollout that enabled PIX and mobile payments in Brazil. Later, in financial services, I managed payment operations at billion-dollar scale - migrated $3 billion in assets between banks without a single transactional failure.

In recent years, I've focused on applying AI to optimize payment operations. At Sicredi, I implemented ML models for credit scoring and fraud detection that accelerated approvals by 40%. At Unimed, I automated claims processing with AI, reducing cycle time by 30% and generating $45 million in annual savings.

My approach is always data-driven: I use metrics like Payment Success Rate, Authorization Rate, and Process Cycle Time to measure real impact. I also have experience with Lean Six Sigma methodologies, which I apply to identify waste in payment processes and create sustainable solutions.

What differentiates me is combining strategic vision with hands-on execution, always focusing on customer obsession and operational excellence.`,
          tags: ["payments", "AI", "technical", "metrics"],
          hook: "Specialist in transforming payment operations through AI",
          mic_drop: "Strategic vision with hands-on execution, customer obsession and operational excellence"
        }
      ]
    },

    // QUESTION: "WHY AMAZON?"
    why_amazon: {
      question: "Why Amazon? / What attracts you to Amazon?",
      category: "Motivation and Cultural Fit",
      versions: [
        {
          id: "leadership_principles_version",
          title: "Leadership Principles Version",
          content: `Amazon has always fascinated me because it's where customer obsession isn't just rhetoric, but is embedded in the DNA of every decision. Throughout my career, I've always prioritized end-customer impact - whether delivering Brazil's first 4G station to connect people, or implementing AI that reduces healthcare claims processing time.

What attracts me most are the Leadership Principles, especially "Dive Deep" and "Invent and Simplify." At Huawei, I dove so deep into operational processes that I redesigned workflows reducing SLAs from 382 to 62 days. At Unimed, I simplified complex operations through automation, generating $45 million in savings.

The "Ownership" culture resonates deeply with me. At HSBC, I took end-to-end responsibility for migrating $3 billion, working personally with regulators and auditors to ensure zero failures. I don't delegate responsibility - I dive into the problem.

Amazon represents the perfect combination of scale, innovation, and impact. I want to contribute to an organization that thinks big, acts fast, and puts the customer first in every decision. It's where I can apply my operational transformation experience to generate value at truly global scale.`,
          tags: ["leadership principles", "customer obsession", "ownership", "dive deep"],
          hook: "Customer obsession isn't rhetoric, it's embedded in every decision's DNA",
          mic_drop: "Scale, innovation and impact - where I can generate value at global scale"
        }
      ]
    },

    // Simplified array for the modal
    questions: [
      {
        q: "Tell me about yourself / Walk me through your background",
        a: `**Executive Version - Impact Focus (2-3 min)**

I'm Leonardo Menezes, a digital transformation leader with 15+ years generating measurable value at scale. Throughout my career, I've led programs that created over $300 million in value for organizations like Huawei, HSBC, Bradesco, Sicredi, and Unimed.

My journey started at Huawei, where for 6 years I led the telecom infrastructure that connected Brazil to 4G. I delivered Brazil's first 4G station in 2012 and coordinated all connectivity for the 2014 World Cup. What differentiated me was diving deep into operational details: I redesigned processes that reduced SLAs from 382 to 62 days, generating $120 million in efficiency.

I then moved to financial services, where I led the most critical transformation in Brazilian banking history: migrating $3 billion in assets from HSBC to Bradesco with zero data loss and full compliance. I also co-led the launch of Next Digital Bank, competing directly with Nubank.

In recent years, I've focused on applying AI and automation to traditional sectors. At Unimed, I implemented solutions that reduced claims processing time by 30% and launched digital products now generating $16 million in revenue. Currently at SEFAZ-RS, I'm modernizing the state's fiscal management through value-based management frameworks.

What drives me is transforming complexity into simplicity, always focusing on measurable results and real impact on the end customer.`
      },
      {
        q: "Why Amazon? / What attracts you to Amazon?",
        a: `**Leadership Principles Version**

Amazon has always fascinated me because it's where customer obsession isn't just rhetoric, but is embedded in the DNA of every decision. Throughout my career, I've always prioritized end-customer impact - whether delivering Brazil's first 4G station to connect people, or implementing AI that reduces healthcare claims processing time.

What attracts me most are the Leadership Principles, especially "Dive Deep" and "Invent and Simplify." At Huawei, I dove so deep into operational processes that I redesigned workflows reducing SLAs from 382 to 62 days. At Unimed, I simplified complex operations through automation, generating $45 million in savings.

The "Ownership" culture resonates deeply with me. At HSBC, I took end-to-end responsibility for migrating $3 billion, working personally with regulators and auditors to ensure zero failures. I don't delegate responsibility - I dive into the problem.

Amazon represents the perfect combination of scale, innovation, and impact. I want to contribute to an organization that thinks big, acts fast, and puts the customer first in every decision. It's where I can apply my operational transformation experience to generate value at truly global scale.`
      }
    ]
  }
};

export default icebreakerData;
