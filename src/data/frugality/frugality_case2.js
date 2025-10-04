// Case 2 - frugality
const case_2 = {
  id: "huawei-resource-optimization",
  title: "Otimização de Recursos no Portfólio da Copa do Mundo",
  title_pt: "Otimização de Recursos em um Portfólio de 50+ Projetos para Acelerar o Rollout do 4G",
  title_en: "Resource Optimization in 50+ Project Portfolio to Accelerate 4G Rollout",
  company: "Huawei",
  period: "01/2009--12/2015",
  isTopCase: true,
  pt: {
    s: `Na Huawei, a pressão para entregar a infraestrutura do 4G antes da Copa do Mundo era gigantesca, com contratos de R$ 2.5 bilhões em risco. O orçamento era fixo e já estava totalmente alocado. A abordagem tradicional seria solicitar um orçamento de emergência para contratar mais equipes, uma solução cara e nem sempre eficaz. O prazo não era negociável e tínhamos mais de 50 projetos críticos correndo em paralelo, com potencial impacto na imagem do Brasil durante o evento mundial.`,
    t: `Meu papel individual: eu liderei end-to-end, defini escopo e decisões críticas, e atuei como owner único. Como Gerente do PMO, minha responsabilidade era garantir a entrega do portfólio dentro das restrições existentes. Recusei-me a aceitar que a única solução era gastar mais. Minha tarefa era encontrar uma maneira de 'fabricar' os recursos necessários através da otimização e da eliminação de desperdícios, maximizando a capacidade produtiva da equipe existente de 200+ especialistas.`,
    a: `Nota de contexto: conectei as mudanças a operações de pagamento onde cabia (ex.: conciliação/settlement, antifraude, SLA de liquidação). Ações pessoais: priorizei mudanças, alinhei stakeholders, tomei decisões de trade-off e removi bloqueios. O maior desperdício era a ociosidade de equipes especializadas alocadas em projetos que estavam parados esperando por licenças governamentais. Criei na 'War Room' um pool centralizado de recursos, o que nos permitiu aumentar a taxa de utilização de especialistas em 30%, pois eles eram alocados dinamicamente onde eram mais necessários. Utilizei o Método do Caminho Crítico (CPM) para prever os gargalos com 2-3 semanas de antecedência. Por exemplo, ao ver que o Projeto A entraria em uma fase de espera de 2 semanas para licenciamento, eu realocava proativamente sua equipe para o Projeto B, que estava em um ponto crítico. Mudei os contratos dos subcontratados para um modelo baseado em marcos de entrega, com bônus de até 15% para entregas antecipadas e multas para atrasos. Isso incentivou os melhores fornecedores a otimizarem seus próprios processos, resultando em uma melhoria média de 15% na velocidade de entrega das etapas críticas. Criei um sistema de priorização rigoroso que classificava todos os projetos em 'Críticos para Copa', 'Importantes' e 'Adiáveis'. Comuniquei de forma transparente aos stakeholders dos projetos 'adiáveis' o porquê da decisão e um novo cronograma realista, mantendo sua confiança enquanto focávamos recursos nos projetos críticos.`,
    r: `Conseguimos entregar todo o programa de telecom da Copa do Mundo a tempo e dentro do orçamento original de R$ 2.5 bilhões, sem aportes extras. A otimização e realocação de recursos foram um dos principais fatores que contribuíram para os ganhos de eficiência de ~$120 milhões que o modelo gerou vs. projeções de custo tradicionais. O modelo de gestão de recursos centralizado foi incorporado ao playbook global da Huawei e replicado em outras regiões, beneficiando projetos em mais de 15 países.`,
    l: `Aprendi que frugalidade em um portfólio de projetos não é sobre cortar custos, mas sobre eliminar o desperdício de capacidade e maximizar o valor de cada recurso existente. Essa lição é a base de como gerencio minha startup hoje: temos uma equipe enxuta, e a chave para nossa produtividade é a alocação flexível de cada pessoa no problema mais crítico da semana, maximizando o impacto de cada hora trabalhada.`
  },
  en: {
    s: `At Huawei, pressure to deliver 4G infrastructure before the World Cup was gigantic, with R$ 2.5 billion contracts at risk. Budget was fixed and already fully allocated. The traditional approach would be to request emergency budget to hire more teams, an expensive and not always effective solution. The deadline was non-negotiable and I had over 50 critical projects running in parallel, with potential impact on Brazil's image during the world event.`,
    t: `My individual role: I led end-to-end, set scope and critical decisions, and acted as the single-threaded owner. As PMO Manager, my responsibility was to ensure portfolio delivery within existing constraints. I refused to accept that the only solution was to spend more. My task was to find a way to 'manufacture' necessary resources through optimization and waste elimination, maximizing existing team's productive capacity of 200+ specialists.`,
    a: `Context note: I tied changes to payment operations when applicable (e.g., reconciliation/settlement, fraud prevention, settlement SLA). Personal actions: I drove execution—prioritized changes, aligned stakeholders, made trade-offs, and unblocked teams. The biggest waste was idle specialized teams allocated to projects that were stopped waiting for government licenses. I created a centralized resource pool in the 'War Room', which allowed us to increase specialist utilization rate by 30%, as they were dynamically allocated where most needed. I used Critical Path Method (CPM) to predict bottlenecks 2-3 weeks ahead. For example, seeing that Project A would enter a 2-week waiting phase for licensing, I proactively reallocated its team to Project B, which was at a critical point. I changed subcontractor contracts to a milestone-based delivery model, with bonuses up to 15% for early deliveries and penalties for delays. This incentivized the best suppliers to optimize their own processes, resulting in average 15% improvement in critical stage delivery speed. I created a rigorous prioritization system that classified all projects as 'Critical for World Cup', 'Important' and 'Deferrable'. I transparently communicated to 'deferrable' project stakeholders the reason for the decision and a realistic new timeline, maintaining their trust while focusing resources on critical projects.`,
    r: `I managed to deliver the entire World Cup telecom program on time and within original budget of R$ 2.5 billion, without extra contributions. Resource optimization and reallocation were key factors contributing to ~$120 million efficiency gains the model generated vs. traditional cost projections. The centralized resource management model was incorporated into Huawei's global playbook and replicated in other regions, benefiting projects in over 15 countries.`,
    l: `I learned that frugality in a project portfolio isn't about cutting costs, but about eliminating capacity waste and maximizing value from each existing resource. This lesson is the foundation of how I manage my startup today: I have a lean team, and the key to my productivity is flexible allocation of each person to the week's most critical problem, maximizing impact of each hour worked.`
  },
  fups: [
    {
        "q": "Como você lidou com a resistência inicial das equipes e dos stakeholders ao implementar a centralização de recursos?",
        "a": "A resistência dos gerentes de projeto, que sentiam que estavam 'perdendo' suas equipes, foi o maior desafio. Eu superei isso garantindo que o novo sistema era mais confiável. Através dos dashboards da War Room, eu lhes dava visibilidade e previsibilidade de quando receberiam os recursos. Quando eles viram que o modelo eliminava seus próprios gargalos, eles se tornaram defensores.",
        "q_en": "How did you handle initial resistance from teams and stakeholders when implementing resource centralization?",
        "a_en": "Resistance from project managers, who felt they were 'losing' their teams, was the biggest challenge. I overcame this by ensuring the new system was more reliable. Through War Room dashboards, I gave them visibility and predictability of when they would receive resources. When they saw the model eliminated their own bottlenecks, they became advocates."
    },
    {
        "q": "Quais foram os maiores desafios ao prever gargalos usando CPM e EVM, e como você garantiu a precisão das previsões?",
        "a": "O maior desafio era a qualidade dos dados de entrada. Para garantir a precisão, instituí uma rotina de atualização do progresso das tarefas no MS Project ao final de cada dia, em vez de semanalmente. Essa frequência maior nos permitiu ter uma visão muito mais acurada do caminho crítico e recalcular as projeções (EVM) com dados mais frescos, tornando minha previsões muito mais confiáveis.",
        "q_en": "What were the biggest challenges in predicting bottlenecks using CPM and EVM, and how did you ensure prediction accuracy?",
        "a_en": "The biggest challenge was input data quality. To ensure accuracy, I instituted a routine of updating task progress in MS Project at the end of each day, instead of weekly. This higher frequency allowed us to have a much more accurate view of the critical path and recalculate projections (EVM) with fresher data, making my predictions much more reliable."
    },
    {
        "q": "Como você monitorou e mediu o impacto específico da mudança para contratos baseados em milestones sobre o desempenho dos fornecedores?",
        "a": "Através do Vendor Performance Index (VPI). Para cada fornecedor, tínhamos um dashboard que monitorava métricas claras: percentual de marcos entregues no prazo, aderência ao orçamento e um índice de qualidade. Os fornecedores com os melhores scores no VPI eram recompensados com mais volume e bônus, criando um ciclo de incentivo à alta performance.",
        "q_en": "How did you monitor and measure the specific impact of changing to milestone-based contracts on supplier performance?",
        "a_en": "Through the Vendor Performance Index (VPI). For each supplier, I had a dashboard monitoring clear metrics: percentage of milestones delivered on time, budget adherence and quality index. Suppliers with the best VPI scores were rewarded with more volume and bonuses, creating a high-performance incentive cycle."
    },
    {
        "q": "Houve algum impacto negativo ou trade-off ao priorizar projetos críticos e pausar projetos estratégicos? Como você mitigou esses riscos?",
        "a": "Sim, o trade-off foi o atraso de projetos importantes, mas não urgentes. Mitiguei isso de duas formas: 1) Transparência radical: comuniquei claramente aos stakeholders o motivo da repriorização e um novo cronograma realista. 2) Alocação mínima: mantive uma equipe mínima ('esqueleto') nos projetos pausados para garantir a continuidade de atividades essenciais, evitando que eles morressem completamente.",
        "q_en": "Was there any negative impact or trade-off when prioritizing critical projects and pausing strategic projects? How did you mitigate these risks?",
        "a_en": "Yes, the trade-off was delaying important but not urgent projects. I mitigated this in two ways: 1) Radical transparency: clearly communicated to stakeholders the reason for reprioritization and a realistic new timeline. 2) Minimal allocation: maintained a minimal ('skeleton') team on paused projects to ensure continuity of essential activities, preventing them from dying completely."
    },
    {
        "q": "Após o sucesso dessa abordagem, como o modelo de gestão de recursos centralizado foi adaptado e escalado para outras regiões ou projetos da Huawei?",
        "a": "O modelo foi documentado em um playbook de 'Gestão de Portfólio de Alta Pressão'. Para a escalada, a principal adaptação foi a criação de 'sub-pools' de recursos por especialidade técnica, o que funcionava melhor em regiões com um volume menor de projetos. O princípio da gestão centralizada foi mantido, mas a implementação tática foi flexibilizada para se adaptar a diferentes escalas.",
        "q_en": "After this approach's success, how was the centralized resource management model adapted and scaled to other Huawei regions or projects?",
        "a_en": "The model was documented in a 'High-Pressure Portfolio Management' playbook. For scaling, the main adaptation was creating resource 'sub-pools' by technical specialty, which worked better in regions with smaller project volumes. The centralized management principle was maintained, but tactical implementation was made flexible to adapt to different scales."
    },
    {
        "q": "Qual foi o maior desperdício que você descobriu e eliminou?",
        "a": "O desperdício de 'setup'. As equipes gastavam muito tempo se preparando cada vez que mudavam de um tipo de site para outro. Eu padronizamos os designs dos sites e criamos 'kits' de instalação pré-montados no armazém. Isso reduziu o tempo de preparação no campo em 50% e foi uma invenção nascida da necessidade de ser mais frugal com o tempo.",
        "q_en": "What was the biggest waste you discovered and eliminated?",
        "a_en": "Setup waste. Teams spent a lot of time preparing each time they switched from one site type to another. I standardized site designs and created pre-assembled installation 'kits' in the warehouse. This reduced field preparation time by 50% and was an invention born from the need to be more frugal with time."
    },
    {
        "q": "Como a sua experiência na Huawei, focada em frugalidade, se conecta com o trabalho na SEFAZ?",
        "a": "É diretamente aplicável. Tanto em um projeto de alta pressão na Huawei quanto na SEFAZ, a premissa é a mesma: os recursos são finitos. A mentalidade de eliminar desperdício e otimizar a alocação de especialistas é a essência da gestão eficiente, seja no setor privado ou público. Os princípios de centralização de recursos e priorização baseada em dados funcionam em qualquer contexto.",
        "q_en": "How does your Huawei experience, focused on frugality, connect with SEFAZ work?",
        "a_en": "It's directly applicable. Both in a high-pressure Huawei project and at SEFAZ, the premise is the same: resources are finite. The mindset of eliminating waste and optimizing specialist allocation is the essence of efficient management, whether in private or public sector. Resource centralization and data-based prioritization principles work in any context."
    },
    {
        "q": "Se o orçamento fosse dobrado, você ainda teria implementado essas mudanças?",
        "a": "Sim, 100%. Porque a frugalidade não é sobre o tamanho do orçamento, é sobre a eficiência da operação. Dobrar o orçamento sem consertar o desperdício sistêmico apenas nos faria gastar o dobro para entregar os mesmos resultados. A otimização de recursos é fundamental independentemente da disponibilidade de capital.",
        "q_en": "If the budget were doubled, would you still have implemented these changes?",
        "a_en": "Yes, 100%. Because frugality isn't about budget size, it's about operational efficiency. Doubling the budget without fixing systemic waste would just make us spend twice as much to deliver the same results. Resource optimization is fundamental regardless of capital availability."
    },
    {
        "q": "O que significa 'autossuficiência' no contexto de um PMO?",
        "a": "Significa construir a capacidade de resolver os problemas internamente, antes de buscar recursos externos. No meu caso, significou criar um sistema de alocação de recursos tão eficiente que não precisamos contratar mais gente e desenvolver minha próprias ferramentas de monitoramento. É sobre criar capacidades internas resilientes que não dependem de fatores externos.",
        "q_en": "What does 'self-sufficiency' mean in the context of a PMO?",
        "a_en": "It means building the capacity to solve problems internally, before seeking external resources. In my case, it meant creating a resource allocation system so efficient that I didn't need to hire more people and developing my own monitoring tools. It's about creating resilient internal capabilities that don't depend on external factors."
    },
    {
        "q": "Qual ferramenta você usou para gerenciar esse pool de recursos dinâmico?",
        "a": "Usamos uma combinação do MS Project Server, para o planejamento de alto nível e identificação do caminho crítico, e planilhas Excel avançadas e compartilhadas para o gerenciamento tático diário e semanal da alocação de equipes. Era uma solução frugal e funcional que nos dava total controle e visibilidade sem custos adicionais de software.",
        "q_en": "What tool did you use to manage this dynamic resource pool?",
        "a_en": "I used a combination of MS Project Server, for high-level planning and critical path identification, and advanced shared Excel spreadsheets for daily and weekly tactical team allocation management. It was a frugal and functional solution that gave us total control and visibility without additional software costs."
    }
]
};

export default case_2;
