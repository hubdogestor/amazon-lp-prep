const earn_trust = {
  principle: {
    title: "Ganhar a confiança",
    title_en: "Earn Trust",
    description: "Os líderes ouvem atentamente, falam com franqueza e tratam os outros com respeito. Eles são vocalmente autocríticos, mesmo quando isso é constrangedor. Os líderes se comparam e às suas equipes com os melhores.",
    description_en: "Leaders listen attentively, speak candidly, and treat others respectfully. They are vocally self-critical, even when doing so is awkward or embarrassing. They benchmark themselves and their teams against the best.",
    icon: ""
  },
  id: "earn_trust",
  name: "Ganhar a confiança",
  cases: [
    {
      id: "sicredi-post-mortem-transparency",
      title: "Condução de um Post-Mortem Transparente Após uma Falha Crítica em Produção",
      title_pt: "Condução de um Post-Mortem Transparente Após uma Falha Crítica em Produção",
      title_en: "Leading a Transparent Post-Mortem After a Critical Production Failure",
      company: "Sicredi Woop",
      period: "03/2020-04/2020",
      isTopCase: false,
      pt: {
        s: "Durante meu período como Estrategista de Produtos no Sicredi, a implantação de uma nova funcionalidade no banco digital Woop causou uma falha intermitente no módulo de pagamentos que afetou cerca de 5% das transações (milhares de clientes) durante um fim de semana. A decisão de acelerar a entrega, embora estratégica, teve essa consequência inesperada. A falha gerou frustração nos clientes e abalou a confiança das equipes internas de Negócios e Operações. O feedback mais difícil que recebi foi do líder de Operações durante essa crise. Ele me disse, de forma muito direta: 'Leonardo, sua equipe de produto nos trata como um afterthought. Vocês lançam as coisas e nós temos que nos virar para lidar com os problemas'. Foi duro ouvir isso.",
        t: "Minha responsabilidade era liderar a resposta ao incidente e, mais importante, conduzir a análise post-mortem. O objetivo não era apenas corrigir o bug, mas reconstruir a confiança e criar mecanismos para garantir que o mesmo tipo de problema nunca mais ocorresse.",
        a: "Na abertura da reunião de post-mortem, minha primeira frase foi: 'A responsabilidade por esta falha começa comigo. Como líder, a decisão de acelerar a entrega sem os devidos testes de carga foi minha. Nossa busca por velocidade resultou em um impacto negativo para o cliente, e eu assumo total responsabilidade por isso'. Criei um documento de post-mortem compartilhado com toda a empresa, detalhando a timeline, o número de transações impactadas e a análise de causa raiz. Não houve tentativa de minimizar a gravidade do problema. Eu pessoalmente liderei a força-tarefa para implementar as três melhorias definidas. Priorizei no backlog a inclusão do teste de carga automatizado, trabalhei com os arquitetos para definir o padrão de uso de 'feature flags' e desenhei o novo protocolo de comunicação de crise em conjunto com as áreas de negócio. Eu lidei com o feedback do líder de Operações ouvindo, validando a frustração dele e, como ação concreta, eu o convidei para participar de nossas reuniões de planejamento de sprint. Esse feedback foi o catalisador para criarmos o novo protocolo de comunicação, transformando a relação de adversários para parceiros.",
        r: "O post-mortem resultou em três melhorias de processo concretas. A adoção de 'feature flags', por exemplo, nos deu a capacidade de desativar novas funcionalidades em segundos, um novo padrão de segurança para o cliente. A confiança interna foi reconstruída, como medido pelo feedback qualitativo direto do líder de Operações e por uma melhoria na pontuação de 'colaboração entre áreas' na pesquisa de clima seguinte. Após a implementação, a taxa de incidentes críticos em produção foi reduzida em 70% nos seis meses seguintes. Como medi que a confiança foi reconstruída: Curto prazo (1 semana): O líder de Operações aceitou meu convite para participar das Sprints. Médio prazo (1 mês): Ele começou a trazer problemas proativamente para mim, em vez de esperar explodirem. Longo prazo (3 meses): Na pesquisa de clima, a pontuação de 'colaboração entre áreas' subiu de 6.2 para 7.8 (escala 0-10) nas equipes de Produto e Operações. Validação final: Ele me indicou para liderar um projeto cross-funcional crítico 6 meses depois, dizendo ao diretor: 'Leonardo é a pessoa que eu confio para fazer a ponte entre tecnologia e operação'.",
        l: "A confiança não é construída quando as coisas vão bem; ela é forjada quando as coisas dão errado. Ser vocalmente autocrítico e transparente não demonstra fraqueza, mas sim força e cria segurança psicológica. Um líder que assume a responsabilidade primeiro ganha o direito de liderar a solução."
      },
      en: {
        s: "During my time as Product Strategist at Sicredi, the deployment of a new feature in the digital bank Woop caused an intermittent failure in the payments module that affected about 5% of transactions (thousands of customers) during a weekend. The decision to accelerate delivery, while strategic, had this unexpected consequence. The failure generated customer frustration and shook the trust of internal Business and Operations teams. The hardest feedback I received was from the Operations leader during this crisis. He told me, very directly: 'Leonardo, your product team treats us as an afterthought. You launch things and we have to figure out how to deal with the problems.' It was hard to hear this.",
        t: "My responsibility was to lead the incident response and, more importantly, conduct the post-mortem analysis. The goal was not just to fix the bug, but to rebuild trust and create mechanisms to ensure the same type of problem would never happen again.",
        a: "At the opening of the post-mortem meeting, my first sentence was: 'The responsibility for this failure starts with me. As a leader, the decision to accelerate delivery without proper load testing was mine. Our pursuit of speed resulted in a negative impact on the customer, and I take full responsibility for it.' I created a post-mortem document shared with the entire company, detailing the timeline, number of impacted transactions, and root cause analysis. There was no attempt to minimize the severity of the problem. I personally led the task force to implement the three defined improvements. I prioritized including automated load testing in the backlog, worked with architects to define the standard use of 'feature flags,' and designed the new crisis communication protocol together with business areas. I handled the Operations leader's feedback by listening, validating his frustration, and as concrete action, I invited him to participate in our sprint planning meetings. This feedback was the catalyst for creating the new communication protocol, transforming the relationship from adversaries to partners.",
        r: "The post-mortem resulted in three concrete process improvements. The adoption of 'feature flags,' for example, gave us the ability to disable new features in seconds, a new security standard for customers. Internal trust was rebuilt, as measured by direct qualitative feedback from the Operations leader and an improvement in 'cross-area collaboration' scores in the following climate survey. After implementation, the rate of critical production incidents was reduced by 70% in the following six months. How I measured that trust was rebuilt: Short term (1 week): The Operations leader accepted my invitation to participate in Sprints. Medium term (1 month): He started bringing problems proactively to me, instead of waiting for them to explode. Long term (3 months): In the climate survey, the 'cross-area collaboration' score rose from 6.2 to 7.8 (0-10 scale) in Product and Operations teams. Final validation: He recommended me to lead a critical cross-functional project 6 months later, telling the director: 'Leonardo is the person I trust to bridge technology and operations.'",
        l: "Trust is not built when things go well; it is forged when things go wrong. Being vocally self-critical and transparent doesn't show weakness, but strength and creates psychological safety. A leader who takes responsibility first earns the right to lead the solution."
      },
      fups: [
        {
          q: "O que você fez para garantir que as melhorias implementadas fossem sustentáveis e monitoradas ao longo do tempo?",
          a: "Instituímos mecanismos. O teste de carga foi adicionado como um 'quality gate' obrigatório e automatizado no nosso pipeline de CI/CD -- nenhum deploy acontecia sem ele. As 'feature flags' se tornaram parte do nosso 'Definition of Done'. E o protocolo de crise virou um playbook com treinamentos anuais. A sustentabilidade veio ao transformar os aprendizados em processos.",
          q_en: "What did you do to ensure the implemented improvements were sustainable and monitored over time?",
          a_en: "We instituted mechanisms. Load testing was added as a mandatory and automated 'quality gate' in our CI/CD pipeline -- no deployment happened without it. 'Feature flags' became part of our 'Definition of Done.' And the crisis protocol became a playbook with annual training. Sustainability came from transforming learnings into processes."
        },
        {
          q: "Você enfrentou alguma resistência interna ao compartilhar o documento de post-mortem de forma tão aberta? Como lidou com isso?",
          a: "Sim, houve receio de expor a equipe. Eu lidei com isso garantindo que o documento fosse 100% focado em falhas de processo, não de pessoas. Antes de publicar, eu o revisei com os líderes técnicos para garantir que se sentissem seguros. Argumentei que a transparência criaria uma cultura de aprendizado em escala, beneficiando a todos.",
          q_en: "Did you face any internal resistance to sharing the post-mortem document so openly? How did you handle it?",
          a_en: "Yes, there was fear of exposing the team. I handled this by ensuring the document was 100% focused on process failures, not people. Before publishing, I reviewed it with technical leaders to ensure they felt safe. I argued that transparency would create a learning culture at scale, benefiting everyone."
        },
        {
          q: "Como você priorizou e gerenciou a execução das três melhorias de processo mencionadas?",
          a: "Eu as tratei como 'débitos técnicos críticos' e as priorizei acima de novas funcionalidades no backlog do sprint seguinte. Usei uma matriz de 'Impacto vs. Esforço' para sequenciar: o protocolo de comunicação foi o primeiro (alto impacto, baixo esforço), seguido pelas feature flags e, por último, os testes de carga, que eram mais complexos.",
          q_en: "How did you prioritize and manage the execution of the three mentioned process improvements?",
          a_en: "I treated them as 'critical technical debt' and prioritized them above new features in the next sprint backlog. I used an 'Impact vs. Effort' matrix to sequence: the communication protocol was first (high impact, low effort), followed by feature flags, and finally load testing, which was more complex."
        },
        {
          q: "Quais foram os desafios mais significativos em balancear transparência com evitar alarmismo ao comunicar o incidente para stakeholders internos?",
          a: "O desafio era comunicar a gravidade sem gerar pânico. A chave foi sempre apresentar o problema junto com o plano de contenção e a análise inicial. A mensagem não era 'estamos com um problema', mas sim 'identificamos um incidente, ele está contido, e esta é nossa equipe e nosso plano para a resolução'. A confiança vem da demonstração de controle.",
          q_en: "What were the most significant challenges in balancing transparency with avoiding alarmism when communicating the incident to internal stakeholders?",
          a_en: "The challenge was communicating severity without generating panic. The key was always presenting the problem together with the containment plan and initial analysis. The message wasn't 'we have a problem,' but rather 'we identified an incident, it's contained, and this is our team and plan for resolution.' Trust comes from demonstrating control."
        },
        {
          q: "Após o incidente, houve alguma tentativa de escalar essas práticas para outras áreas ou times dentro da organização? Se sim, como você contribuiu para isso?",
          a: "Sim. Eu apresentei o nosso playbook de post-mortem e o protocolo de comunicação de crise na Comunidade de Prática de Produto. O modelo foi tão bem recebido que o PMO Central o adaptou e o distribuiu como uma 'melhor prática' recomendada para todos os projetos digitais do Sicredi.",
          q_en: "After the incident, was there any attempt to scale these practices to other areas or teams within the organization? If so, how did you contribute to it?",
          a_en: "Yes. I presented our post-mortem playbook and crisis communication protocol to the Product Community of Practice. The model was so well received that the Central PMO adapted it and distributed it as a recommended 'best practice' for all Sicredi digital projects."
        },
        {
          q: "Como você garantiu que a reunião de post-mortem não se tornasse uma sessão de apontar dedos?",
          a: "Eu estabeleci as 'regras do jogo' no início: 1) Partimos da premissa de que todos fizeram o melhor que podiam. 2) Culpamos o processo, não as pessoas. 3) O único objetivo é aprender. Minha própria autocrítica inicial serviu como modelo para o tom da conversa.",
          q_en: "How did you ensure the post-mortem meeting didn't become a finger-pointing session?",
          a_en: "I established the 'rules of the game' at the beginning: 1) We start from the premise that everyone did their best. 2) We blame the process, not people. 3) The only goal is to learn. My own initial self-criticism served as a model for the conversation's tone."
        },
        {
          q: "A sua autocrítica não poderia ser vista como uma fraqueza ou incompetência pela liderança sênior?",
          a: "Pelo contrário. Ao assumir a responsabilidade, demonstrei ownership. E ao apresentar imediatamente um plano claro de como iríamos garantir que o erro não se repetisse, demonstrei liderança e foco na solução. A liderança sênior confia mais em quem reconhece um problema e o corrige do que em quem tenta escondê-lo.",
          q_en: "Couldn't your self-criticism be seen as weakness or incompetence by senior leadership?",
          a_en: "On the contrary. By taking responsibility, I demonstrated ownership. And by immediately presenting a clear plan for how we would ensure the error wouldn't repeat, I demonstrated leadership and solution focus. Senior leadership trusts more those who recognize a problem and fix it than those who try to hide it."
        },
        {
          q: "O que o novo protocolo de comunicação de crise incluía, especificamente?",
          a: "Incluía um 'comandante do incidente' claramente definido, um canal dedicado no Slack para comunicação centralizada, e templates de comunicação pré-aprovados para diferentes stakeholders (equipes internas, liderança, clientes), garantindo uma comunicação rápida, consistente e precisa.",
          q_en: "What did the new crisis communication protocol specifically include?",
          a_en: "It included a clearly defined 'incident commander,' a dedicated Slack channel for centralized communication, and pre-approved communication templates for different stakeholders (internal teams, leadership, customers), ensuring rapid, consistent, and accurate communication."
        },
        {
          q: "Como você se compara com os melhores em gestão de incidentes?",
          a: "Após o incidente, eu e a equipe de engenharia estudamos os playbooks de SRE (Site Reliability Engineering) de empresas como Google e Netflix. Adotamos várias de suas melhores práticas, como 'orçamentos de erro' (error budgets) e 'post-mortems sem culpa' (blameless postmortems), nos comparando com o padrão ouro da indústria de tecnologia.",
          q_en: "How do you compare yourself with the best in incident management?",
          a_en: "After the incident, the engineering team and I studied SRE (Site Reliability Engineering) playbooks from companies like Google and Netflix. We adopted several of their best practices, such as 'error budgets' and 'blameless postmortems,' benchmarking ourselves against the gold standard of the technology industry."
        },
        {
          q: "Qual a diferença entre 'assumir a responsabilidade' e 'levar a culpa'?",
          a: "Levar a culpa é passivo e focado no erro passado. Assumir a responsabilidade é ativo e focado na solução futura. Quando assumo a responsabilidade, estou dizendo: 'Eu sou o dono de garantir que isso seja resolvido e não aconteça novamente'. É sobre ownership e ação, não sobre penitência.",
          q_en: "What's the difference between 'taking responsibility' and 'taking blame'?",
          a_en: "Taking blame is passive and focused on past error. Taking responsibility is active and focused on future solution. When I take responsibility, I'm saying: 'I own ensuring this gets resolved and doesn't happen again.' It's about ownership and action, not penance."
        }
      ]
    },
    {
      id: "hsbc-bacen-communication",
      title: "Gestão da Comunicação com Reguladores (BACEN) Durante a Migração de Alto Risco",
      title_pt: "Gestão da Comunicação com Reguladores (BACEN) Durante a Migração de Alto Risco",
      title_en: "Managing Communication with Regulators (BACEN) During High-Risk Migration",
      company: "HSBC",
      period: "01/2015-12/2016",
      isTopCase: true,
      pt: {
        s: "A migração da operação do HSBC (US$ 5.2B) para o Bradesco estava sob a supervisão direta do Banco Central (BACEN). A confiança do regulador era nosso ativo mais importante. Qualquer surpresa poderia resultar em multas, atrasos ou na suspensão da migração, que envolvia milhões de contas.",
        t: "Minha responsabilidade era gerenciar a comunicação com os reguladores. O objetivo era construir uma relação de confiança inabalável, garantindo que eles se sentissem parceiros no processo, e não adversários.",
        a: "Em um dos relatórios, nosso monitoramento apontou um risco de atraso. A recomendação da equipe foi reportar como 'amarelo'. Eu tomei a decisão de reportar como 'vermelho', e fui pessoalmente à reunião com o BACEN explicar a causa, o plano de mitigação e a nova data projetada. Para dar transparência, eu defini os requisitos e liderei a equipe de BI para construir dashboards específicos para os reguladores, com acesso restrito, mostrando uma visão quase em tempo real da qualidade dos dados e do progresso. Cada questionamento deles era formalmente registrado como um ponto de atenção em nosso RAID Log, com um 'dono' e um plano de resposta, tratando suas perguntas com a máxima seriedade. Durante uma auditoria interna, identificamos uma pequena falha em nosso processo FATCA. Antes que o BACEN sequer sonhasse em auditar aquele ponto, preparei um relatório sobre a falha e a correção. Apresentei isso proativamente a eles.",
        r: "Construímos uma relação de confiança tão forte que, em um relatório de acompanhamento, o fiscal do BACEN citou nossa governança e transparência como um 'exemplo a ser seguido' para outros processos de M&A no setor. Essa confiança foi crucial quando precisamos solicitar um ajuste de 3 semanas no cronograma final devido a uma complexidade externa. O pedido foi recebido com compreensão e aprovado rapidamente. A migração foi concluída com 100% de aprovação de conformidade e zero sanções.",
        l: "A confiança com stakeholders críticos é construída sobre uma base de transparência proativa. É sempre melhor compartilhar um problema cedo com um plano claro do que esperar que ele seja descoberto. Falar a verdade e tratar com respeito não são apenas posturas éticas, são as ferramentas mais poderosas de gestão de risco."
      },
      en: {
        s: "The migration of HSBC's operation (US$ 5.2B) to Bradesco was under direct supervision of the Central Bank (BACEN). Regulator trust was our most important asset. Any surprise could result in fines, delays, or suspension of the migration, which involved millions of accounts.",
        t: "My responsibility was to manage communication with regulators. The goal was to build an unshakeable trust relationship, ensuring they felt like partners in the process, not adversaries.",
        a: "In one of the reports, our monitoring pointed to a delay risk. The team's recommendation was to report as 'yellow.' I made the decision to report as 'red,' and personally went to the BACEN meeting to explain the cause, mitigation plan, and new projected date. To provide transparency, I defined requirements and led the BI team to build specific dashboards for regulators, with restricted access, showing a near real-time view of data quality and progress. Each of their questions was formally recorded as an attention point in our RAID Log, with an 'owner' and response plan, treating their questions with utmost seriousness. During an internal audit, we identified a small failure in our FATCA process. Before BACEN even dreamed of auditing that point, I prepared a report on the failure and correction. I presented this proactively to them.",
        r: "We built such a strong trust relationship that, in a follow-up report, the BACEN inspector cited our governance and transparency as an 'example to be followed' for other M&A processes in the sector. This trust was crucial when we needed to request a 3-week adjustment in the final schedule due to external complexity. The request was received with understanding and approved quickly. The migration was completed with 100% compliance approval and zero sanctions.",
        l: "Trust with critical stakeholders is built on a foundation of proactive transparency. It's always better to share a problem early with a clear plan than to wait for it to be discovered. Speaking truth and treating with respect are not just ethical postures, they are the most powerful risk management tools."
      },
      fups: [
        {
          q: "Como você mediu o impacto da relação de confiança com o BACEN ao longo do projeto?",
          a: "Medimos de forma qualitativa e quantitativa. Qualitativamente, pelo tom das reuniões, que mudou de inquisitivo para colaborativo. Quantitativamente, pelo 'tempo de resposta a solicitações': no início, o BACEN levava em média 2 semanas para aprovar nossos planos; no final, com a confiança estabelecida, as aprovações ocorriam em menos de 3 dias.",
          q_en: "How did you measure the impact of the trust relationship with BACEN throughout the project?",
          a_en: "We measured both qualitatively and quantitatively. Qualitatively, by the tone of meetings, which changed from inquisitive to collaborative. Quantitatively, by 'response time to requests': initially, BACEN took an average of 2 weeks to approve our plans; by the end, with trust established, approvals occurred in less than 3 days."
        },
        {
          q: "Quais desafios você enfrentou ao introduzir os dashboards para os reguladores e como os superou?",
          a: "O maior desafio foi interno: a equipe jurídica tinha receio de dar tanta transparência. Superei isso demonstrando como os dashboards eram focados em métricas de qualidade e progresso, não em dados sensíveis de clientes. Argumentei que a transparência controlada era nossa melhor defesa, pois construía uma narrativa de competência que eles não poderiam questionar.",
          q_en: "What challenges did you face when introducing dashboards for regulators and how did you overcome them?",
          a_en: "The biggest challenge was internal: the legal team was afraid of giving so much transparency. I overcame this by demonstrating how the dashboards focused on quality and progress metrics, not sensitive customer data. I argued that controlled transparency was our best defense, as it built a competency narrative they couldn't question."
        },
        {
          q: "Como você garantiu que suas ações de transparência e proatividade foram bem recebidas pelo BACEN, sem gerar desconfiança ou alarmismo?",
          a: "O segredo era nunca apresentar um problema isolado. Eu sempre apresentava um 'pacote': 1) o problema ou risco identificado, 2) a análise de causa raiz, 3) o plano de ação detalhado com donos e prazos. A mensagem não era 'temos um problema', era 'encontramos um desafio e já estamos no controle da solução'.",
          q_en: "How did you ensure your transparency and proactivity actions were well received by BACEN, without generating distrust or alarmism?",
          a_en: "The secret was never presenting an isolated problem. I always presented a 'package': 1) the identified problem or risk, 2) root cause analysis, 3) detailed action plan with owners and deadlines. The message wasn't 'we have a problem,' it was 'we found a challenge and are already in control of the solution.'"
        },
        {
          q: "Você enfrentou resistência interna ao optar por reportar o status como 'vermelho' em vez de 'amarelo'? Como lidou com isso?",
          a: "Sim, a equipe de gestão do projeto temia a reação do cliente (Bradesco) e do BACEN. Minha argumentação foi baseada no longo prazo: 'Se reportarmos amarelo e o risco se materializar, nossa credibilidade será destruída. Se reportarmos vermelho com um plano sólido, mostraremos que temos controle e maturidade'. Foi uma decisão de sacrificar o conforto de curto prazo pela confiança de longo prazo.",
          q_en: "Did you face internal resistance when choosing to report status as 'red' instead of 'yellow'? How did you handle it?",
          a_en: "Yes, the project management team feared the reaction from the client (Bradesco) and BACEN. My argument was based on the long term: 'If we report yellow and the risk materializes, our credibility will be destroyed. If we report red with a solid plan, we'll show we have control and maturity.' It was a decision to sacrifice short-term comfort for long-term trust."
        },
        {
          q: "Após concluir a migração, houve alguma ação para institucionalizar essas práticas de comunicação e confiança em outros projetos da organização?",
          a: "Sim. O sucesso da abordagem levou à criação de um 'Playbook de Comunicação com Reguladores', que eu ajudei a redigir. Ele se tornou parte do treinamento padrão para gerentes de programa envolvidos em projetos com alto escrutínio regulatório dentro do banco, garantindo que as lições aprendidas fossem escaladas.",
          q_en: "After completing the migration, was there any action to institutionalize these communication and trust practices in other organizational projects?",
          a_en: "Yes. The success of the approach led to creating a 'Regulator Communication Playbook,' which I helped write. It became part of standard training for program managers involved in projects with high regulatory scrutiny within the bank, ensuring learned lessons were scaled."
        },
        {
          q: "Como você equilibrava a necessidade de transparência com a de não criar pânico desnecessário?",
          a: "O equilíbrio vinha da preparação. Eu nunca apresentava um problema sem apresentar também uma análise de causa raiz e um plano de ação detalhado. A transparência sobre a solução é o antídoto para o pânico sobre o problema.",
          q_en: "How did you balance the need for transparency with not creating unnecessary panic?",
          a_en: "Balance came from preparation. I never presented a problem without also presenting root cause analysis and a detailed action plan. Transparency about the solution is the antidote to panic about the problem."
        },
        {
          q: "Você já recebeu um feedback duro de um regulador? Como reagiu?",
          a: "Sim. Em uma ocasião, um fiscal apontou que um dos nossos relatórios não tinha a profundidade que ele esperava. Minha primeira reação foi agradecer o feedback. Eu não discuti nem justifiquei. Apenas perguntei: 'Você poderia me dar um exemplo do que seria um relatório ideal? Quero garantir que o próximo atenda exatamente às suas expectativas'.",
          q_en: "Have you ever received harsh feedback from a regulator? How did you react?",
          a_en: "Yes. On one occasion, an inspector pointed out that one of our reports didn't have the depth he expected. My first reaction was to thank him for the feedback. I didn't argue or justify. I just asked: 'Could you give me an example of what an ideal report would be? I want to ensure the next one meets your expectations exactly.'"
        },
        {
          q: "Como você se certificou de que a comunicação de todas as equipes para o BACEN era consistente?",
          a: "Eu centralizei a comunicação. Eu era o único ponto de contato oficial para todos os reportes formais. Criei um comitê interno de revisão onde todas as informações a serem enviadas eram validadas por mim e pelos líderes das áreas relevantes para garantir consistência e precisão.",
          q_en: "How did you ensure that communication from all teams to BACEN was consistent?",
          a_en: "I centralized communication. I was the only official point of contact for all formal reports. I created an internal review committee where all information to be sent was validated by me and relevant area leaders to ensure consistency and accuracy."
        },
        {
          q: "Qual é a coisa mais importante para se lembrar ao se comunicar com um stakeholder poderoso?",
          a: "Lembrar que a sua maior fonte de poder é a sua preparação e a sua credibilidade. Se você domina os dados, é transparente sobre os riscos e tem um plano sólido, você pode e deve falar com franqueza e confiança, tratando o stakeholder com respeito, mas como um igual na resolução do problema.",
          q_en: "What's the most important thing to remember when communicating with a powerful stakeholder?",
          a_en: "Remember that your greatest source of power is your preparation and credibility. If you master the data, are transparent about risks, and have a solid plan, you can and should speak candidly and confidently, treating the stakeholder with respect, but as an equal in problem-solving."
        },
        {
          q: "Como essa experiência no HSBC influenciou a forma como você lida com auditorias hoje na SEFAZ?",
          a: "Influenciou totalmente. Hoje, na SEFAZ, eu vejo os auditores do BID ou do Tribunal de Contas como parceiros. Eu adoto uma política de 'portas abertas', dando a eles acesso proativo à informação e aos dashboards. Essa abordagem de transparência constrói confiança e torna o processo de auditoria muito mais colaborativo.",
          q_en: "How did this HSBC experience influence how you handle audits today at SEFAZ?",
          a_en: "It influenced completely. Today, at SEFAZ, I see IDB auditors or Court of Accounts as partners. I adopt an 'open doors' policy, giving them proactive access to information and dashboards. This transparency approach builds trust and makes the audit process much more collaborative."
        }
      ]
    },
    {
      id: "bradesco-partner-recovery",
      title: "Apresentação de um Plano de Correção a um Parceiro Estratégico Após uma Quebra de SLA",
      title_pt: "Apresentação de um Plano de Correção a um Parceiro Estratégico Após uma Quebra de SLA",
      title_en: "Presenting a Correction Plan to a Strategic Partner After SLA Breach",
      company: "Bradesco",
      period: "05/2017-08/2017",
      isTopCase: false,
      pt: {
        s: "Um dos nossos maiores parceiros de e-commerce (um contrato de ~$5M/ano), sofreu uma interrupção de 30 minutos em nosso serviço de pagamentos devido a um erro de implantação. A falha ocorreu durante um evento promocional, causando perdas de vendas e quebrando a confiança. O CTO do parceiro estava furioso e ameaçava rescindir o contrato.",
        t: "Minha tarefa era gerenciar a crise e salvar a parceria. O objetivo não era apenas pedir desculpas, mas usar a crise como uma oportunidade para demonstrar nosso compromisso e, paradoxalmente, fortalecer a relação.",
        a: "Minha primeira ação foi ligar para o CTO. Minha primeira frase foi: 'Por favor, me ajude a entender o impacto completo que isso teve do seu lado'. Ouvi, sem interrupções, enquanto ele detalhava as perdas. Depois de ouvir, fui direto: 'A falha foi 100% nossa. Nosso processo de deploy, que eu supervisiono, falhou. A responsabilidade é minha e vamos corrigir'. Eu pessoalmente liderei a análise de causa raiz com a equipe de engenharia durante a noite. Apresentei ao parceiro um plano de 5 pontos que eu mesmo estruturei: 1) Análise de causa raiz, 2) Correção do bug, 3) Crédito financeiro, 4) Implementação de 'canary releases', e 5) Um canal de emergência direto comigo. Expliquei que 'canary releases' (liberar o código para uma pequena porcentagem de usuários antes de todos) era uma prática do Google e Netflix. Isso mostrou que não estávamos apenas aplicando um curativo, mas que a falha nos forçou a adotar um padrão de confiabilidade de classe mundial.",
        r: "O CTO concordou em nos dar uma segunda chance. Seis meses depois, o parceiro renovou seu contrato por mais dois anos. A implementação de canary releases se tornou o padrão para toda a plataforma, reduzindo o número de incidentes críticos pós-deploy em 60% no semestre seguinte, beneficiando todos os clientes.",
        l: "A confiança perdida pode ser reconquistada, mas exige uma resposta imediata, empática e autocrítica. A maneira como um líder lida com uma falha diz muito mais sobre seu caráter do que meses de operação sem problemas. Ouvir, assumir a responsabilidade e apresentar um plano que mostre que você aprendeu com o erro é a fórmula para transformar uma crise em um ponto de inflexão positivo."
      },
      en: {
        s: "One of our largest e-commerce partners (a contract of ~$5M/year) suffered a 30-minute interruption in our payment service due to a deployment error. The failure occurred during a promotional event, causing sales losses and breaking trust. The partner's CTO was furious and threatening to terminate the contract.",
        t: "My task was to manage the crisis and save the partnership. The goal was not just to apologize, but to use the crisis as an opportunity to demonstrate our commitment and, paradoxically, strengthen the relationship.",
        a: "My first action was to call the CTO. My first sentence was: 'Please help me understand the complete impact this had on your side.' I listened, without interruptions, while he detailed the losses. After listening, I was direct: 'The failure was 100% ours. Our deployment process, which I supervise, failed. The responsibility is mine and we will fix it.' I personally led the root cause analysis with the engineering team overnight. I presented the partner with a 5-point plan I structured myself: 1) Root cause analysis, 2) Bug fix, 3) Financial credit, 4) Implementation of 'canary releases,' and 5) A direct emergency channel with me. I explained that 'canary releases' (releasing code to a small percentage of users before everyone) was a practice from Google and Netflix. This showed we weren't just applying a band-aid, but that the failure forced us to adopt world-class reliability standards.",
        r: "The CTO agreed to give us a second chance. Six months later, the partner renewed their contract for two more years. The implementation of canary releases became the standard for the entire platform, reducing the number of critical post-deployment incidents by 60% in the following semester, benefiting all customers.",
        l: "Lost trust can be regained, but requires an immediate, empathetic, and self-critical response. How a leader handles a failure says much more about their character than months of problem-free operation. Listening, taking responsibility, and presenting a plan that shows you learned from the error is the formula for transforming a crisis into a positive turning point."
      },
      fups: [
        {
          q: "Quais foram os maiores desafios ao trabalhar com sua equipe para criar o plano de ação em tão pouco tempo?",
          a: "O maior desafio foi o moral da equipe, que estava baixo por causa do erro. Meu primeiro passo foi blindá-los de qualquer culpa, reforçando que a falha era do processo. Depois, enquadrei o trabalho noturno não como uma punição, mas como uma 'missão de resgate' para salvar um parceiro valioso. Isso mudou a energia e focou a equipe na solução.",
          q_en: "What were the biggest challenges when working with your team to create the action plan in such a short time?",
          a_en: "The biggest challenge was team morale, which was low because of the error. My first step was to shield them from any blame, reinforcing that the failure was in the process. Then, I framed the overnight work not as punishment, but as a 'rescue mission' to save a valuable partner. This changed the energy and focused the team on the solution."
        },
        {
          q: "Como você garantiu que o plano de 5 pontos foi implementado de forma eficiente e dentro do prazo?",
          a: "Eu me comprometi pessoalmente como o 'dono' do plano. Criei um tracker de projeto compartilhado com o parceiro e agendei follow-ups quinzenais com ele para mostrar o progresso de cada um dos 5 pontos. A confiança foi reconstruída através da consistência entre a promessa e a entrega.",
          q_en: "How did you ensure the 5-point plan was implemented efficiently and on time?",
          a_en: "I personally committed as the 'owner' of the plan. I created a project tracker shared with the partner and scheduled biweekly follow-ups with them to show progress on each of the 5 points. Trust was rebuilt through consistency between promise and delivery."
        },
        {
          q: "Você recebeu algum feedback adicional do parceiro após a renovação do contrato? Se sim, como utilizou esse feedback?",
          a: "Sim, o CTO mencionou que, embora a falha tenha sido grave, a resposta rápida e transparente foi o que lhes deu segurança para renovar. Eu utilizei esse feedback internamente, compartilhando-o com a liderança e com a equipe, para reforçar a importância da nossa nova cultura de gestão de incidentes e o valor de sermos vocalmente autocríticos.",
          q_en: "Did you receive any additional feedback from the partner after contract renewal? If so, how did you use that feedback?",
          a_en: "Yes, the CTO mentioned that although the failure was serious, the quick and transparent response was what gave them confidence to renew. I used this feedback internally, sharing it with leadership and the team, to reinforce the importance of our new incident management culture and the value of being vocally self-critical."
        },
        {
          q: "Qual foi a maior dificuldade em decidir compensar financeiramente o parceiro e como isso foi negociado internamente?",
          a: "A maior dificuldade foi a resistência da área financeira, que via a ação como 'abrir um precedente'. Eu negociei internamente argumentando com base no LTV (Lifetime Value) do parceiro. Mostrei que o custo do crédito era inferior a 1% do valor total do contrato que estávamos arriscando perder. Foi uma decisão de negócio, um investimento na retenção de um cliente de alto valor.",
          q_en: "What was the biggest difficulty in deciding to financially compensate the partner and how was this negotiated internally?",
          a_en: "The biggest difficulty was resistance from the finance area, which saw the action as 'setting a precedent.' I negotiated internally by arguing based on the partner's LTV (Lifetime Value). I showed that the credit cost was less than 1% of the total contract value we were risking losing. It was a business decision, an investment in retaining a high-value customer."
        },
        {
          q: "As práticas adotadas, como os 'canary releases', foram aplicadas a outros clientes ou processos? Se sim, qual foi o impacto geral?",
          a: "Sim. O sucesso foi tão claro que os 'canary releases' se tornaram a política padrão para todas as implantações de software em nossa plataforma de pagamentos. O impacto geral foi uma redução de 60% nos incidentes críticos (Severity 1) nos seis meses seguintes, o que melhorou drasticamente a estabilidade para todos os nossos clientes e reduziu o estresse das equipes de plantão.",
          q_en: "Were the adopted practices, like 'canary releases,' applied to other customers or processes? If so, what was the overall impact?",
          a_en: "Yes. The success was so clear that 'canary releases' became the standard policy for all software deployments on our payments platform. The overall impact was a 60% reduction in critical incidents (Severity 1) in the following six months, which dramatically improved stability for all our customers and reduced stress for on-call teams."
        },
        {
          q: "Por que você decidiu oferecer um crédito financeiro? Não era admitir uma obrigação legal?",
          a: "Foi uma decisão estratégica. Legalmente, nosso contrato talvez não nos obrigasse. Mas o objetivo não era ganhar uma disputa legal, era salvar uma parceria. O crédito foi um gesto simbólico para mostrar que entendíamos que o impacto no negócio deles era real e que estávamos dispostos a compartilhar parte dessa dor. Foi um investimento na confiança.",
          q_en: "Why did you decide to offer a financial credit? Wasn't that admitting a legal obligation?",
          a_en: "It was a strategic decision. Legally, our contract might not have obligated us. But the goal wasn't to win a legal dispute, it was to save a partnership. The credit was a symbolic gesture to show we understood the impact on their business was real and that we were willing to share part of that pain. It was an investment in trust."
        },
        {
          q: "Qual foi a parte mais difícil de 'ouvir sem interromper' a frustração do CTO?",
          a: "A parte mais difícil é lutar contra o instinto de se defender ou de corrigir informações. Exige uma disciplina consciente para focar 100% em entender a perspectiva da outra pessoa. O objetivo naquele momento não era estar certo, era fazer o parceiro se sentir ouvido.",
          q_en: "What was the hardest part of 'listening without interrupting' to the CTO's frustration?",
          a_en: "The hardest part is fighting the instinct to defend yourself or correct information. It requires conscious discipline to focus 100% on understanding the other person's perspective. The goal at that moment wasn't to be right, it was to make the partner feel heard."
        },
        {
          q: "A sua franqueza sobre a falha não poderia ser usada contra você pelo parceiro em uma negociação futura?",
          a: "É um risco calculado. A alternativa, que é minimizar o problema, tem um risco muito maior: a perda total de credibilidade. A longo prazo, parceiros de negócio valorizam a honestidade e a integridade acima de uma perfeição irreal. A franqueza constrói a base para uma parceria adulta.",
          q_en: "Couldn't your candor about the failure be used against you by the partner in a future negotiation?",
          a_en: "It's a calculated risk. The alternative, which is minimizing the problem, has a much greater risk: total loss of credibility. Long-term, business partners value honesty and integrity above unrealistic perfection. Candor builds the foundation for a mature partnership."
        },
        {
          q: "Como você tratou com respeito um cliente que estava sendo agressivo e culpando sua equipe?",
          a: "Eu atuei como um escudo para a minha equipe. Na frente do cliente, eu absorvi toda a responsabilidade. Internamente, eu defendi a equipe, focando a discussão no processo. Respeitar o cliente, mesmo quando ele está exaltado, significa validar a legitimidade da sua frustração, sem necessariamente concordar com a forma como ela é expressa.",
          q_en: "How did you treat with respect a customer who was being aggressive and blaming your team?",
          a_en: "I acted as a shield for my team. In front of the customer, I absorbed all responsibility. Internally, I defended the team, focusing the discussion on the process. Respecting the customer, even when they're agitated, means validating the legitimacy of their frustration, without necessarily agreeing with how it's expressed."
        },
        {
          q: "Qual é o sinal nº 1 de que você ganhou a confiança de alguém?",
          a: "É quando essa pessoa passa a compartilhar más notícias com você de forma proativa e precoce. Isso mostra que ela não tem medo de ser punida pela transparência e confia que você focará na solução, e não na culpa. É o maior indicador de segurança psicológica e de uma relação de confiança saudável.",
          q_en: "What's the #1 sign that you've earned someone's trust?",
          a_en: "It's when that person starts sharing bad news with you proactively and early. This shows they're not afraid of being punished for transparency and trust that you'll focus on the solution, not blame. It's the biggest indicator of psychological safety and a healthy trust relationship."
        }
      ]
    }
  ]
};

export default earn_trust;
