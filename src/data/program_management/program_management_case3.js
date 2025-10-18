// program_management_case3.js
const case_3 = {
  id: "sefaz-roadmap-adjustment-reforma-tributária",
  title_pt: "Ajustei o Roadmap de Projetos Fiscais na SEFAZ Devido a Reforma Tributária",
  title_en: "Adjusted the Fiscal Projects Roadmap at SEFAZ Due to Tax Reform",
  company: "Secretaria da Fazenda do RS",
  period: "09/2024 - 03/2025",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: "Em setembro de 2024, como Advisor na SEFAZ-RS, eu era responsável pela gestão do portfolio de projetos do Profisco II, um programa de modernização fiscal financiado pelo Banco Interamericano de Desenvolvimento (BID). O cenário mudou drasticamente quando as leis complementares da Reforma Tributária foram aprovadas, o que invalidou premissas centrais de 12 dos nossos projetos em andamento. Isso impactou um orçamento de R$ 45 milhoes é colocou em risco o compliance regulatorio é os prazos acordados com o BID, num ambiente onde as equipes já operavam no limite da capacidade.",
    t: "Minha tarefa era navegar nessa crise regulatoria, realinhando todo o roadmap do programa para absorver as novas regras fiscais sem paralisar o progresso. Eu precisava garantir 100% de compliance com a reforma, mitigar o risco de perdas financeiras estimadas em R$ 8 milhoes devido a projetos obsoletos, é manter a confianca dos stakeholders, incluindo o Secretário da Fazenda é o BID. A missao era transformar um plano rigido em um novo roadmap flexivel é resiliente em menos de 45 dias.",
    a: "Minha primeira ação foi um 'dive deep' imediato. Em 48 horas, cruzei as especificacoes das novas leis com cada um dos 12 projetos, criando uma matriz de impacto que quantificava os riscos é as dependencias. Com esses dados, negociei diretamente com o Secretário o cancelamento de duas features de baixo impacto, o que liberou R$ 2 milhoes para serem realocados nas adaptacoes mais criticas. Em seguida, instaurei um 'war room' com lideres de TI, da área fiscal é representantes do BID, onde redesenhamos o cronograma no MS Project em tempo real. Para validar a melhor estrategia de migração, utilizei Python para simular cenários de impacto, o que nos levou a optar por uma transicao gradual, evitando downtime nos sistemas de arrecadacao. A comunicação foi chave: conduzi workshops semanais com as equipes para coletar feedback é ajustar os prazos, usando dados para mostrar como o esforco inicial evitaria retrabalho é multas futuras.",
    r: "Em marco de 2025, o roadmap ajustado foi aprovado pelo BID com louvor pela agilidade. Alcançamos 100% de compliance com a reforma, é a otimização dos processos gerou uma economia adicional de R$ 12 milhoes, superando as perdas potenciais. Reduzimos o desvio medio de prazo é custo dos projetos de 23% para 7%. O trade-off de pausar algumas iniciativas foi crucial para evitar perdas muito maiores. Como resultado da gestão transparente é colaborativa da crise, o NPS interno das equipes de projeto subiu de 65 para 82, é nosso modelo de gestão de mudanca foi adotado como benchmark por outras secretarias.",
    l: "Aprendi que, especialmente no setor publico, um roadmap de projetos não pode ser um documento estatico; ele precisa ter flexibilidade é buffers para absorver choques externos. Meu erro foi não ter incluido cenários de risco regulatorio no planejamento original. Hoje, eu incorporo 'stress tests' baseados em potenciais mudancas legislativas desde a concepcao de qualquer programa. Apliquei essa abordagem ao apoiar a Unimed, onde, antecipando novas regras da ANS, ajustamos o roadmap de produtos de saude suplementar, reduzindo o impacto de readequacao em mais de 30%.",
  },
  en: {
    s: "In September 2024, as an Advisor at SEFAZ-RS, I was responsible for managing the project portfolio for Profisco II, a tax modernization program funded by the Inter-American Development Bank (IDB). The landscape changed dramatically when the complementary laws of the Tax Reform were passed, which invalidated the core assumptions of 12 of our ongoing projects. This impacted a R$ 45 million budget and jeopardized regulatory compliance and deadlines agreed upon with the IDB, in an environment where teams were already operating at full capacity.",
    t: "My task was to navigate this regulatory crisis by realigning the entire program roadmap to absorb the new tax rules without halting progress. I had to ensure 100% compliance with the reform, mitigate the risk of financial losses estimated at R$ 8 million from obsolete projects, and maintain the trust of stakeholders, including the Secretary of Finance and the IDB. The mission was to transform a rigid plan into a new, flexible, and resilient roadmap in under 45 days.",
    a: "My first action was an immediate 'dive deep.' Within 48 hours, I cross-referenced the specifications of the new laws with each of the 12 projects, creating an impact matrix that quantified risks and dependencies. With this data, I negotiated directly with the Secretary to cancel two low-impact features, which freed up R$ 2 million to be reallocated to the most critical adaptations. I then established a 'war room' with leaders from IT, the tax department, and IDB representatives, where we redesigned the schedule in MS Project in real-time. To validate the best migration strategy, I used Python to simulate impact scenarios, which led us to opt for a gradual transition, avoiding downtime in revenue collection systems. Communication was key: I conducted weekly workshops with the teams to gather feedback and adjust timelines, using data to show how the initial effort would prevent rework and future penalties.",
    r: "By March 2025, the adjusted roadmap was approved by the IDB with praise for our agility. We achieved 100% compliance with the reform, and the process optimization generated an additional R$ 12 million in savings, offsetting the potential losses. We reduced the average project schedule and cost deviation from 23% to 7%. The trade-off of pausing some initiatives was crucial to avoid much larger losses. As a result of the transparent and collaborative crisis management, the internal NPS of the project teams rose from 65 to 82, and our change management model was adopted as a benchmark by other state departments.",
    l: "I learned that, especially in the public sector, a project roadmap cannot be a static document; it must have flexibility and buffers to absorb external shocks. My mistake was not including regulatory risk scenarios in the original planning. Today, I incorporate 'stress tests' based on potential legislative changes from the inception of any program. I applied this approach when supporting Unimed, where, by anticipating new regulations from the National Health Agency (ANS), we adjusted the roadmap for supplementary health products, reducing the impact of readjustment by over 30%.",
  },
  fups: [
    {
      q: "Qual foi seu maior erro nesse caso?",
      a: "Meu maior erro foi ter comecado o programa com um plano de projeto que, embora robusto, era rigido demais. Eu subestimei a probabilidade de uma mudanca externa de grande magnitude como a Reforma Tributária é, por isso, não incorporei 'buffers' de tempo é orçamento para contingencias regulatorias. Isso nos deixou inicialmente vulneraveis é exigiu uma reacao emergencial muito intensa.",
      q_en: "What was your biggest mistake in this case?",
      a_en: "My biggest mistake was starting the program with a project plan that, while robust, was too rigid. I underestimated the probability of a large-scale external change like the Tax Reform and, therefore, did not incorporate time and budget buffers for regulatory contingencies. This left us initially vulnerable and required a very intense emergency reaction.",
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Hoje, eu implementaria uma abordagem de 'planejamento adaptativo' desde o início. Isso incluiria a criação de versoes alternativas do roadmap baseadas em diferentes cenários regulatorios. Utilizaria simulacoes para prever impactos é definir gatilhos claros que nos permitiriam pivotar de um cenário para outro de forma organizada, em vez de reativa.",
      q_en: "What would you do differently today?",
      a_en: "Today, I would implement an 'adaptive planning' approach from the start. This would include creating alternative roadmap versions based on different regulatory scenarios. I would use simulations to predict impacts and define clear triggers that would allow us to pivot from one scenario to another in an organized, rather than reactive, manner.",
    },
    {
      q: "Qual foi o obstáculo mais dificil de superar que você enfrentou?",
      a: "O obstáculo mais dificil foi o cultural. As equipes estavam acostumadas a um modelo de trabalho sequencial é viam o retrabalho como uma falha. Tive que superar a resistencia inicial a mudanca, mostrando que a adaptabilidade era a nova medida de sucesso. Os workshops colaborativos foram essenciais para que eles se sentissem parte da solução, transformando o receio em engajamento.",
      q_en: "What was the most difficult obstacle you faced?",
      a_en: "The most difficult obstacle was cultural. The teams were accustomed to a sequential work model and saw rework as a failure. I had to overcome the initial resistance to change by showing that adaptability was the new measure of success. The collaborative workshops were essential for them to feel part of the solution, turning apprehension into engagement.",
    },
    {
      q: "Quais foram os principais riscos é como você os mitigou?",
      a: "Os principais riscos eram o de 'non-compliance' com a nova lei, que acarretaria multas é invalidacao dos sistemas, é a desmotivacao das equipes. Mitiguei o risco de compliance com a rapida análise de impacto é o redesenho do roadmap. Mitiguei o risco humano atraves da comunicação transparente no 'war room' é nos workshops, garantindo que todos entendessem o 'porque' da mudanca.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "The main risks were non-compliance with the new law, which would lead to fines and system invalidation, and team demotivation. I mitigated the compliance risk with a rapid impact analysis and roadmap redesign. I mitigated the human risk through transparent communication in the 'war room' and workshops, ensuring everyone understood the 'why' behind the change.",
    },
    {
      q: "Que dados você usou é qual foi a racional de calculo?",
      a: "Usei o texto das leis complementares para mapear os requisitos é os dados do nosso portfolio de 12 projetos (orçamento, cronograma, escopo) para a matriz de impacto. Os R$ 12 milhoes em 'savings' foram calculados pela reducao percentual dos desvios de custo é prazo (de 23% para 7%) aplicada sobre uma parcela do orçamento total, um método de calculo de eficiencia alinhado com as diretrizes do BID.",
      q_en: "What data did you use, and what was the calculation rationale?",
      a_en: "I used the text of the complementary laws to map the requirements and data from our 12-project portfolio (budget, schedule, scope) for the impact matrix. The R$ 12 million in savings was calculated by applying the percentage reduction in cost and schedule deviations (from 23% to 7%) to a portion of the total budget, an efficiency calculation method aligned with IDB guidelines.",
    },
    {
      q: "Como você usou o aprendizado desse caso em outras frentes de trabalho?",
      a: "Essa experiencia solidificou minha abordagem de gestão de riscos. Em consultorias posteriores, como na Unimed, criei 'playbooks' de resposta a mudancas externas. Em vez de esperar a crise, mapeamos potenciais mudancas (novas regras da ANS, por exemplo) é pre-definimos planos de ação, o que nos permitiu responder a uma nova regulamentacao 50% mais rapido que os concorrentes.",
      q_en: "How did you use the learning from this case in other work fronts?",
      a_en: "This experience solidified my approach to risk management. In subsequent consultancies, like at Unimed, I created 'response playbooks' for external changes. Instead of waiting for a crisis, we mapped potential changes (new ANS rules, for example) and pre-defined action plans, which allowed us to respond to a new regulation 50% faster than competitors.",
    },
    {
      q: "Qual foi o papel do 'war room' na gestão desta crise?",
      a: "O 'war room' foi o coracao da operação. Ele quebrou os silos entre TI, fiscal é o BID, permitindo uma tomada de decisao agil é alinhada. Em vez de semanas de trocas de é-mails, resolviamos dependencias criticas em reunioes diarias de 30 minutos. Foi a ferramenta que nos deu a velocidade necessaria para cumprir o prazo de 45 dias.",
      q_en: "What was the role of the 'war room' in managing this crisis?",
      a_en: "The 'war room' was the heart of the operation. It broke down the silos between IT, the tax department, and the IDB, enabling agile and aligned decision-making. Instead of weeks of email exchanges, we resolved critical dependencies in daily 30-minute meetings. It was the tool that gave us the speed needed to meet the 45-day deadline.",
    },
    {
      q: "Como você garantiu o alinhamento é a aprovacao do BID?",
      a: "Eu inclui os representantes do BID no 'war room' desde o primeiro dia. Essa transparencia total permitiu que eles acompanhassem nosso racional é participassem das decisoes de priorizacao. Ao inves de apresentar um plano final como surpresa, nos o co-criamos, o que tornou a aprovacao formal uma mera formalidade, pois eles já estavam comprados na solução.",
      q_en: "How did you ensure alignment with and approval from the IDB?",
      a_en: "I included the IDB representatives in the 'war room' from day one. This complete transparency allowed them to follow our rationale and participate in prioritization decisions. Instead of presenting a final plan as a surprise, we co-created it, which made the formal approval a mere formality as they were already bought into the solution.",
    },
  ],
};

export default case_3;