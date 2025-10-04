const bias_for_action = {
  principle: {
    title: "Ter Iniciativa",
    title_en: "Bias for Action",
    description: "Velocidade é importante nos negócios. Muitas decisões e ações são reversíveis e não precisam de estudo extensivo. Valorizamos a tomada de riscos calculados.",
    description_en: "Speed matters in business. Many decisions and actions are reversible and do not need extensive study. We value calculated risk taking.",
    icon: ""
  },
  id: "bias_for_action",
  name: "Ter Iniciativa",
  cases: [
    {
      id: "bradesco-next-rapid-launch",
      title: "Decisão Rápida para Lançar Banco Digital Next em 12 Meses, Assumindo Riscos Calculados",
      title_pt: "Decisão Rápida para Lançar Banco Digital Next em 12 Meses, Assumindo Riscos Calculados",
      title_en: "Quick Decision to Launch Next Digital Bank in 12 Months, Taking Calculated Risks",
      company: "Bradesco Next",
      period: "01/2016--12/2018",
      isTopCase: true,
      pt: {
        s: "O desafio de lançar Banco Next em 12 meses nos colocou em conflito direto com cultura avessa a risco do Bradesco. Abordagem padrão de análise exaustiva levaria anos. Para competir com fintechs, precisávamos nos mover em velocidade radicalmente diferente.",
        t: "Meu papel individual: eu liderei end-to-end, defini escopo e decisões críticas, e atuei como owner único. Como líder da trilha de Produto & Tecnologia, coordenando 15 squads e 100+ pessoas, minha responsabilidade era injetar velocidade decisória e quebrar a paralisia por análise. Tinha autonomia para definir frameworks de governança que afetariam decisões estratégicas críticas para o lançamento.",
        a: "Nota de contexto: conectei as mudanças a operações de pagamento onde cabia (ex.: conciliação/settlement, antifraude, SLA de liquidação). Ações pessoais: priorizei mudanças, alinhei stakeholders, tomei decisões de trade-off e removi bloqueios. Criei e implementei o framework 'Decision Framework Next' - documento de 1 página com decision tree visual: 'Esta decisão é reversível em <48h? Custo de reversão <R$50k? Impacto <10% da base?' Se sim = Two-Way Door. Treinei os 15 POs em workshop de 4 horas, estabelecendo que eu dedicaria 3 dias por semana para coaching direto das squads. Quando squad estava paralisada por semanas discutindo design de extrato bancário (uma 'two-way door'), intervim, dei ao Product Owner autoridade para tomar decisão em 24h e seguir em frente. Para decisões irreversíveis como escolha do parceiro de processamento de cartões, criei e facilitei workshop de 48 horas reunindo especialistas-chave e forçando decisão fundamentada. A decisão mais crítica foi priorizar agressivamente MVP, adiando funcionalidades complexas. Embora stakeholders inicialmente preferissem produto 'completo', alinhei com sucesso o grupo à urgência de mercado mostrando dados específicos: fintechs capturavam 60% dos early adopters nos primeiros 6 meses. Tempo médio de decisão por feature caiu de 12 dias para 3,5 dias, liberando equivalente a 3 sprints de capacidade de desenvolvimento por trimestre.",
        r: "Essa cultura de iniciativa e risco calculado foi fator determinante para conseguirmos lançar Next no prazo recorde de 12 meses. Framework de decisões reduziu tempo médio de tomada de decisão de 12 para 3,5 dias (70% de redução). Nenhum dos riscos calculados que assumimos resultou em incidente crítico. Decisão de focar no MVP se provou correta, com Next atingindo 1 milhão de clientes em 18 meses.",
        l: "Aprendi que velocidade não vem de trabalhar mais rápido, mas de decidir mais rápido. A chave é diferenciar rigorosamente os tipos de decisão e criar sistemas que empoderem equipes. Apliquei esse aprendizado diretamente na minha startup Hub do Gestor, onde todas decisões são explicitamente classificadas como 'one-way' ou 'two-way', permitindo mover com extrema agilidade."
      },
      en: {
        s: "The challenge of launching Next Bank in 12 months put us in direct conflict with Bradesco's risk-averse culture. Standard exhaustive analysis approach would take years. To compete with fintechs, I needed to move at radically different speed.",
        t: "My individual role: I led end-to-end, set scope and critical decisions, and acted as the single-threaded owner. As leader of Product & Technology track, coordinating 15 squads and 100+ people, my responsibility was to inject decision speed and break analysis paralysis. I had autonomy to define governance frameworks that would affect critical strategic decisions for the launch.",
        a: "Context note: I tied changes to payment operations when applicable (e.g., reconciliation/settlement, fraud prevention, settlement SLA). Personal actions: I drove execution—prioritized changes, aligned stakeholders, made trade-offs, and unblocked teams. I created and implemented 'Decision Framework Next' - 1-page document with visual decision tree: 'Is this decision reversible in <48h? Reversal cost <R$50k? Impact <10% of base?' If yes = Two-Way Door. I trained the 15 POs in 4-hour workshop, establishing that I would dedicate 3 days per week for direct squad coaching. When squad was paralyzed for weeks discussing bank statement design (a 'two-way door'), I intervened, gave Product Owner authority to make decision in 24h and move forward. For irreversible decisions like choosing card processing partner, I created and facilitated 48-hour workshop gathering key experts and forcing informed decision. Most critical decision was aggressively prioritizing MVP, postponing complex features. Although stakeholders initially preferred 'complete' product, I successfully aligned group to market urgency by showing specific data: fintechs captured 60% of early adopters in first 6 months. Average decision time per feature dropped from 12 to 3.5 days, freeing equivalent of 3 development sprints capacity per quarter.",
        r: "This culture of initiative and calculated risk was determining factor for launching Next in record 12-month timeline. Decision framework reduced average decision-making time from 12 to 3.5 days (70% reduction). None of calculated risks I took resulted in critical incident. Decision to focus on MVP proved correct, with Next reaching 1 million customers in 18 months.",
        l: "I learned speed doesn't come from working faster, but deciding faster. Key is rigorously differentiating decision types and creating systems that empower teams. I applied this learning directly in my startup Hub do Gestor, where all decisions are explicitly classified as 'one-way' or 'two-way', allowing us to move with extreme agility."
      },
      fups: [
        {
          q: "Como você lidou com resistência interna ao introduzir conceito de 'One-Way vs. Two-Way Door' em cultura avessa a riscos?",
          a: "A chave foi começar pequeno e criar 'porto seguro'. Pilotei conceito com duas squads que já tinham mentalidade mais aberta. O sucesso e velocidade que demonstraram criaram 'inveja positiva' nas outras equipes. Em vez de impor conceito, criei caso de sucesso interno que outros quiseram copiar.",
          q_en: "How did you handle internal resistance when introducing 'One-Way vs. Two-Way Door' concept in risk-averse culture?",
          a_en: "Key was starting small and creating 'safe harbor'. I piloted concept with two squads that already had more open mindset. Success and speed they demonstrated created 'positive envy' in other teams. Instead of imposing concept, I created internal success case that others wanted to copy."
        },
        {
          q: "Durante workshop de análise acelerada, houve momento em que especialistas discordaram? Como gerenciou divergências para chegar a decisão dentro do prazo?",
          a: "Sim, houve grande discordância sobre escolha do provedor de KYC. Para resolver, usei técnica do 'Disagree and Commit'. Deixei cada lado apresentar argumentos baseados em critérios pré-definidos (custo, precisão, escalabilidade). Após debate, como facilitador, ajudei dono da decisão a fazer escolha. Uma vez decidida, meu papel foi garantir que todos, inclusive os que discordaram, se comprometessem 100% com execução.",
          q_en: "During accelerated analysis workshop, was there moment when experts disagreed? How did you manage disagreements to reach decision within deadline?",
          a_en: "Yes, there was major disagreement about KYC provider choice. To resolve, I used 'Disagree and Commit' technique. I let each side present arguments based on pre-defined criteria (cost, accuracy, scalability). After debate, as facilitator, I helped decision owner make choice. Once decided, my role was ensuring everyone, including those who disagreed, committed 100% to execution."
        },
        {
          q: "Como você mediu impacto direto da priorização do MVP nas métricas de adoção e satisfação dos primeiros clientes?",
          a: "Definimos 'métricas de sucesso' para MVP antes do lançamento, focadas no 'core loop' do produto: taxa de conclusão do onboarding (meta: >85%), número de transações no primeiro mês (meta: >5 transações) e NPS da primeira experiência (meta: >50). MVP atingiu 87% de conclusão, 6,2 transações médias e NPS de 58, provando que produto entregava valor essencial.",
          q_en: "How did you measure direct impact of MVP prioritization on adoption metrics and early customer satisfaction?",
          a_en: "I defined 'success metrics' for MVP before launch, focused on product's 'core loop': onboarding completion rate (target: >85%), number of transactions in first month (target: >5 transactions) and first experience NPS (target: >50). MVP achieved 87% completion, 6.2 average transactions and NPS of 58, proving product delivered essential value."
        },
        {
          q: "Houve algum momento em que decisão reversível ('two-way door') acabou tendo consequências inesperadas? Como gerenciou isso?",
          a: "Sim. Lançamos fluxo de transferências que, nos testes, parecia ótimo. Mas com volume de produção, percebemos que gerava muitas chamadas no suporte. Como decisão era reversível, em 48 horas, squad usou feedback para lançar versão ajustada com melhores instruções. Consequência foi gerenciada rapidamente porque cultura já previa que decisões 'two-way door' poderiam precisar de iteração.",
          q_en: "Was there moment when reversible decision ('two-way door') ended up having unexpected consequences? How did you manage it?",
          a_en: "Yes. I launched transfer flow that seemed great in tests. But with production volume, I realized it generated many support calls. Since decision was reversible, in 48 hours, squad used feedback to launch adjusted version with better instructions. Consequence was managed quickly because culture already anticipated 'two-way door' decisions might need iteration."
        },
        {
          q: "Após lançamento do Next, como você incorporou feedback dos primeiros usuários para iterar rapidamente o produto?",
          a: "Criamos 'ciclo de feedback de 48 horas'. Todos os dias, time de growth analisava feedbacks dos canais (app store, suporte) e os transformava em hipóteses priorizadas. Hipóteses mais críticas eram apresentadas na reunião diária da squad relevante, que tinha autonomia para colocar melhoria no sprint seguinte. Isso nos permitiu iterar em velocidade muito alta.",
          q_en: "After Next launch, how did you incorporate early user feedback to quickly iterate the product?",
          a_en: "I created '48-hour feedback cycle'. Every day, growth team analyzed feedback from channels (app store, support) and transformed them into prioritized hypotheses. Most critical hypotheses were presented in relevant squad's daily meeting, which had autonomy to put improvement in next sprint. This allowed us to iterate at very high speed."
        },
        {
          q: "Como você treinou equipes para diferenciar decisão 'one-way' de 'two-way door'?",
          a: "Criei matriz de decisão simples com duas perguntas: 1) 'Qual impacto (custo, tempo, reputação) se tivermos que reverter essa decisão?' e 2) 'Qual dificuldade técnica para reverter?'. Decisões com alto impacto e alta dificuldade eram 'one-way'. As demais eram 'two-way'. Discutimos exemplos reais em workshops para calibrar entendimento.",
          q_en: "How did you train teams to differentiate 'one-way' from 'two-way door' decision?",
          a_en: "I created simple decision matrix with two questions: 1) 'What's the impact (cost, time, reputation) if I have to reverse this decision?' and 2) 'What's the technical difficulty to reverse?'. Decisions with high impact and high difficulty were 'one-way'. Others were 'two-way'. I discussed real examples in workshops to calibrate understanding."
        },
        {
          q: "Qual diferença, na sua visão, entre 'risco calculado' e 'imprudência'?",
          a: "Risco calculado é quando você entende claramente pior cenário possível e tem plano de mitigação ou reversão. Você age apesar do risco porque custo da inação é maior. Imprudência é agir sem entender pior cenário ou sem ter plano B, é torcer para que dê certo.",
          q_en: "What's the difference, in your view, between 'calculated risk' and 'recklessness'?",
          a_en: "Calculated risk is when you clearly understand worst possible scenario and have mitigation or reversal plan. You act despite risk because cost of inaction is greater. Recklessness is acting without understanding worst scenario or having plan B, it's hoping things work out."
        },
        {
          q: "Como essa abordagem de velocidade não entra em conflito com princípio de 'Mergulhar Fundo'?",
          a: "Pelo contrário, eles se complementam. Mergulhávamos fundo nas decisões 'one-way door', onde rigor era essencial. E tínhamos viés para ação nas 'two-way doors', onde velocidade do aprendizado era mais importante. Sabedoria está em saber quando aplicar cada princípio.",
          q_en: "How does this speed approach not conflict with 'Dive Deep' principle?",
          a_en: "On contrary, they complement each other. I dove deep into 'one-way door' decisions, where rigor was essential. And I had bias for action on 'two-way doors', where learning speed was more important. Wisdom is knowing when to apply each principle."
        },
        {
          q: "O que frase 'velocidade importa nos negócios' significa para você?",
          a: "Significa que time-to-market e velocidade de aprendizado são, em si, vantagens competitivas. Uma decisão 'boa' hoje é quase sempre melhor que decisão 'perfeita' em seis meses, pois nesse tempo mercado, cliente e concorrência já mudaram.",
          q_en: "What does phrase 'speed matters in business' mean to you?",
          a_en: "It means time-to-market and learning speed are, themselves, competitive advantages. A 'good' decision today is almost always better than 'perfect' decision in six months, because by then market, customer and competition have already changed."
        },
        {
          q: "Como essa experiência mudou sua abordagem de liderança?",
          a: "Ensinou-me que meu papel como líder não é ter todas as respostas, mas criar ambiente onde equipe possa encontrar respostas rapidamente. Minha função passou a ser mais de 'arquiteto de sistemas de decisão' e 'removedor de bloqueios' que tomador de decisões centralizado.",
          q_en: "How did this experience change your leadership approach?",
          a_en: "It taught me that my role as leader isn't having all answers, but creating environment where team can find answers quickly. My function became more of 'decision systems architect' and 'blocker remover' than centralized decision maker."
        }
      ]
    },
    {
      id: "sicredi-ml-credit-analysis",
      title: "Introdução de Análise Preditiva com Machine Learning para Aprovação de Crédito",
      title_pt: "Introdução de Análise Preditiva com Machine Learning para Aprovação de Crédito",
      title_en: "Introduction of Predictive Analysis with Machine Learning for Credit Approval",
      company: "Sicredi Woop",
      period: "01/2019--12/2020",
      isTopCase: false,
      pt: {
        s: "O processo de análise de crédito no banco digital Woop levava 5 dias, tempo inaceitável. Discussão sobre usar IA estava presa em ciclo de planejamento que levaria mais de um ano. A inação estava nos custando clientes e competitividade no mercado.",
        t: "Meu papel individual: eu liderei end-to-end, defini escopo e decisões críticas, e atuei como owner único. Identificando esta inércia organizacional, assumi a liderança para provar valor do Machine Learning de forma rápida e com baixo risco, quebrando ciclo de paralisia por análise. Minha tarefa era validar a hipótese de forma executiva e criar precedente para inovação.",
        a: "Nota de contexto: conectei as mudanças a operações de pagamento onde cabia (ex.: conciliação/settlement, antifraude, SLA de liquidação). Ações pessoais: priorizei mudanças, alinhei stakeholders, tomei decisões de trade-off e removi bloqueios. Em vez de esperar pelo projeto 'oficial', liderei iniciativa independente apresentando à diretoria plano para 'experimento de 90 dias', enquadrando-o não como projeto de tecnologia, mas como iniciativa de 'aprendizado de negócio' de baixo custo. Montei trio estratégico: eu + 1 data scientist + 1 engenheiro de ML. Negociei com seus gestores: 20% do tempo deles por 90 dias, estabelecendo 3 milestones quinzenais com gates de decisão go/no-go. Baseando-me em análise rigorosa de dados históricos de 24 meses, demonstrei que 30% dos casos apresentavam padrão de baixíssimo risco (taxa de inadimplência <0,5%), justificando foco do MVP neste segmento. Argumentei que maior risco não era experimento falhar, mas inação nos fazer perder ainda mais mercado. Diretoria de Risco estava inicialmente cética. Para conquistar confiança, propus rodar modelo em 'modo sombra' por 30 dias, apenas comparando decisões com analistas. Dados mostrando consistência e segurança do modelo foram o que os convenceu a aprovar piloto.",
        r: "Piloto foi sucesso excepcional. Para 30% dos pedidos, tempo de resposta caiu de 5 dias para menos de 2 minutos, refletindo-se em aumento de 10 pontos no NPS da jornada de crédito (de 45 para 55). Taxa de inadimplência no grupo pré-aprovado foi 10% menor que média histórica. Pré-aprovação automática processou 2.500 operações/mês sem intervenção humana, gerando savings de R$125k/mês em custos operacionais. Sucesso desbloqueou investimento de R$2M para projeto completo de IA.",
        l: "Aprendi que melhor maneira de superar resistência à inovação é através da ação rápida e focada com dados. Um piloto bem-sucedido é argumento mais poderoso que business case teórico. Repliquei essa abordagem na Unimed para testar produto de APS, começando com piloto em uma única clínica, provando valor antes de escalar para toda rede."
      },
      en: {
        s: "Credit analysis process at Woop digital bank took 5 days, unacceptable time. Discussion about using AI was stuck in planning cycle that would take over a year. Inaction was costing us customers and market competitiveness.",
        t: "My individual role: I led end-to-end, set scope and critical decisions, and acted as the single-threaded owner. Identifying this organizational inertia, I took leadership to prove Machine Learning value quickly and with low risk, breaking analysis paralysis cycle. My task was to validate hypothesis executively and create precedent for innovation.",
        a: "Context note: I tied changes to payment operations when applicable (e.g., reconciliation/settlement, fraud prevention, settlement SLA). Personal actions: I drove execution—prioritized changes, aligned stakeholders, made trade-offs, and unblocked teams. Instead of waiting for 'official' project, I led independent initiative presenting board with plan for '90-day experiment', framing it not as technology project, but as low-cost 'business learning' initiative. I assembled strategic trio: me + 1 data scientist + 1 ML engineer. I negotiated with their managers: 20% of their time for 90 days, establishing 3 biweekly milestones with go/no-go decision gates. Based on rigorous analysis of 24-month historical data, I demonstrated that 30% of cases showed very low-risk pattern (default rate <0.5%), justifying MVP focus on this segment. I argued biggest risk wasn't experiment failing, but inaction making us lose even more market. Risk board was initially skeptical. To gain confidence, I proposed running model in 'shadow mode' for 30 days, just comparing decisions with analysts. Data showing model consistency and safety convinced them to approve pilot.",
        r: "Pilot was exceptional success. For 30% of requests, response time dropped from 5 days to less than 2 minutes, reflecting in 10-point increase in credit journey NPS (from 45 to 55). Default rate in pre-approved group was 10% lower than historical average. Automatic pre-approval processed 2,500 operations/month without human intervention, generating R$125k/month savings in operational costs. Success unlocked R$2M investment for complete AI project.",
        l: "I learned best way to overcome innovation resistance is through quick and focused action with data. Successful pilot is more powerful argument than theoretical business case. I replicated this approach at Unimed to test APS product, starting with pilot at single clinic, proving value before scaling to entire network."
      },
      fups: [
        {
          q: "Como você garantiu que modelo MVP fosse suficientemente robusto para gerar confiança, mesmo sendo experimento inicial?",
          a: "Focamos na robustez dentro do escopo limitado. Usamos técnicas de 'cross-validation' nos dados históricos para garantir que modelo não estivesse 'viciado'. Mais importante, design do piloto, rodando em 'modo sombra' primeiro e depois apenas em segmento de baixíssimo risco, foi o que construiu confiança, pois impacto de erro seria mínimo.",
          q_en: "How did you ensure MVP model was robust enough to generate confidence, even being initial experiment?",
          a_en: "I focused on robustness within limited scope. I used 'cross-validation' techniques on historical data to ensure model wasn't 'biased'. More importantly, pilot design, running in 'shadow mode' first and then only in lowest-risk segment, built confidence, as impact of error would be minimal."
        },
        {
          q: "Quais foram maiores desafios ao lidar com resistência cultural à IA, e como você os superou?",
          a: "Maior desafio foi medo do 'desconhecido' e da 'caixa-preta' por parte da área de Risco. Superei com transparência e educação. Apresentei conceitos de 'feature importance' para mostrar quais variáveis modelo estava usando, traduzindo decisão da IA para lógica de negócio que eles podiam entender e validar.",
          q_en: "What were biggest challenges dealing with cultural resistance to AI, and how did you overcome them?",
          a_en: "Biggest challenge was fear of 'unknown' and 'black box' from Risk area. I overcame with transparency and education. I presented 'feature importance' concepts to show which variables model was using, translating AI decision to business logic they could understand and validate."
        },
        {
          q: "Após sucesso do piloto, como você adaptou modelo para escalar solução e incluir outros 70% dos casos?",
          a: "Escalada foi feita em fases. Fase 2 envolveu treinar modelo para identificar também casos de 'altíssimo risco' para negação automática. Fase 3, mais complexa, foi usar modelo para gerar 'score de risco' para casos intermediários, que era usado como ferramenta de apoio para acelerar decisão do analista humano.",
          q_en: "After pilot success, how did you adapt model to scale solution and include other 70% of cases?",
          a_en: "Scaling was done in phases. Phase 2 involved training model to also identify 'highest risk' cases for automatic denial. Phase 3, more complex, was using model to generate 'risk score' for intermediate cases, which was used as support tool to accelerate human analyst decision."
        },
        {
          q: "Como você mediu impacto desse experimento no engajamento ou satisfação do cliente?",
          a: "Medimos de forma muito direta. Implementamos pesquisa de NPS de uma única pergunta, enviada imediatamente após comunicação da decisão de crédito. Comparamos NPS do grupo que recebeu resposta em 2 minutos (NPS 55) com grupo que esperou 5 dias (NPS 45). Diferença de 10 pontos provou impacto massivo na experiência do cliente.",
          q_en: "How did you measure impact of this experiment on customer engagement or satisfaction?",
          a_en: "I measured very directly. I implemented single-question NPS survey, sent immediately after credit decision communication. I compared NPS of group that received response in 2 minutes (NPS 55) with group that waited 5 days (NPS 45). 10-point difference proved massive impact on customer experience."
        },
        {
          q: "Se tivesse mais tempo para planejar, há algo que você faria diferente em relação ao escopo ou abordagem do experimento?",
          a: "Honestamente, não. Acredito que restrição de tempo foi o que nos forçou a ter escopo tão focado e abordagem tão enxuta, o que foi chave do sucesso. Mais tempo de planejamento provavelmente teria nos levado a escopo mais complexo e paralisia por análise, exatamente o que queria evitar.",
          q_en: "If you had more time to plan, is there something you'd do differently regarding experiment scope or approach?",
          a_en: "Honestly, no. I believe time constraint was what forced us to have such focused scope and lean approach, which was key to success. More planning time probably would have led us to more complex scope and analysis paralysis, exactly what I wanted to avoid."
        },
        {
          q: "Como você conseguiu recursos (analista e engenheiro) para projeto não oficial?",
          a: "Negociei alocação de 20% do tempo deles. Apresentei aos gestores deles oportunidade como projeto de 'P&D' de alto impacto e visibilidade, que também serviria como grande oportunidade de desenvolvimento para próprios funcionários.",
          q_en: "How did you get resources (analyst and engineer) for unofficial project?",
          a_en: "I negotiated 20% time allocation from them. I presented to their managers the opportunity as high-impact and high-visibility 'R&D' project, which would also serve as great development opportunity for employees themselves."
        },
        {
          q: "Por que 90 dias? Como você chegou a esse prazo?",
          a: "Escolhi 90 dias por ser prazo psicologicamente eficaz. É curto o suficiente para criar senso de urgência e foco, mas longo o suficiente para permitir entrega de resultado tangível.",
          q_en: "Why 90 days? How did you arrive at this deadline?",
          a_en: "I chose 90 days for being psychologically effective deadline. It's short enough to create sense of urgency and focus, but long enough to allow delivery of tangible result."
        },
        {
          q: "A equipe de análise manual se sentiu ameaçada pela automação?",
          a: "Sim, no início. Lidei posicionando ferramenta como 'assistente'. Mostrei que automação das tarefas repetitivas liberaria tempo deles para se aprofundarem nos casos complexos, onde julgamento humano é insubstituível. Transformei narrativa de 'substituição' para 'valorização'.",
          q_en: "Did manual analysis team feel threatened by automation?",
          a_en: "Yes, initially. I handled this by positioning tool as 'assistant'. I showed that automating repetitive tasks would free their time to dive deep into complex cases, where human judgment is irreplaceable. I transformed narrative from 'replacement' to 'enhancement'."
        },
        {
          q: "E se piloto tivesse falhado? Qual era seu plano?",
          a: "Design do piloto limitava 'raio da explosão'. Plano era desligar automação imediatamente e conduzir post-mortem para extrair aprendizados, tratando falha como custo de aprendizado baixo e controlado.",
          q_en: "What if pilot had failed? What was your plan?",
          a_en: "Pilot design limited 'blast radius'. Plan was to immediately turn off automation and conduct post-mortem to extract learnings, treating failure as low and controlled learning cost."
        },
        {
          q: "Sucesso do piloto não criou risco de outras áreas começarem a lançar projetos de IA sem governança?",
          a: "Sim, e agimos sobre isso. Usei sucesso do piloto para defender criação de 'Centro de Excelência em IA', que definiria melhores práticas e framework de governança. Iniciativa de 'guerrilha' serviu como catalisador para criação da estrutura formal.",
          q_en: "Didn't pilot success create risk of other areas starting AI projects without governance?",
          a_en: "Yes, and I acted on it. I used pilot success to advocate for creating 'AI Center of Excellence', which would define best practices and governance framework. 'Guerrilla' initiative served as catalyst for creating formal structure."
        }
      ]
    },
    {
      id: "huawei-logistics-optimization-pilot",
      title: "Lançamento de Piloto de Otimização de Processos em 60 Dias para Validar Hipótese de Eficiência",
      title_pt: "Lançamento de Piloto de Otimização de Processos em 60 Dias para Validar Hipótese de Eficiência",
      title_en: "Launch of Process Optimization Pilot in 60 Days to Validate Efficiency Hypothesis",
      company: "Huawei",
      period: "01/2014--12/2014",
      isTopCase: false,
      pt: {
        s: "Após grande reengenharia de processos na Huawei, identificamos gargalo persistente na logística de entrega de equipamentos. Discussão sobre solução estava travada em comitês, com propostas de caros sistemas de WMS que levariam mais de um ano para serem implementados.",
        t: "Meu papel individual: eu liderei end-to-end, defini escopo e decisões críticas, e atuei como owner único. Vendo impasse, assumi a liderança para validar rapidamente a principal hipótese: que problema era de processo de roteirização, não de ferramenta. Propus piloto de 60 dias para testar novo fluxo, provando conceito antes de grandes investimentos.",
        a: "Nota de contexto: conectei as mudanças a operações de pagamento onde cabia (ex.: conciliação/settlement, antifraude, SLA de liquidação). Ações pessoais: priorizei mudanças, alinhei stakeholders, tomei decisões de trade-off e removi bloqueios. Em vez de esperar pelo orçamento, escolhi estrategicamente ferramentas 'low-tech' que permitissem iteração rápida: Google Sheets para agendamento e WhatsApp para comunicação em tempo real. Essas ferramentas eram perfeitas para o aprendizado acelerado que piloto exigia. Escolhi região de Curitiba para piloto por ter alta complexidade logística (12 rotas, 45 clientes ativos, 3 tipos de equipamento) que era representativa de 80% das outras operações, garantindo escalabilidade dos aprendizados. Criei ritual diário às 17h: call de 15min com equipe de campo. Usava Google Sheets projetado na tela, editávamos juntos ao vivo. Quando via falha no processo, adicionava coluna nova na hora - levava literalmente 5 minutos usando fórmulas simples. Após duas falhas de agendamento, implementei sistema de 'dupla confirmação' na planilha, melhoria que levou 10 minutos para implementar. Piloto provou que hipótese estava correta. Aprendizados foram usados para descartar 40% das funcionalidades complexas (e caras) propostas para novo sistema de WMS, focando apenas nos requisitos essenciais.",
        r: "Em 60 dias, tempo médio de logística na região do piloto foi reduzido de 4,2 para 2,5 dias (40% de melhoria). Validação do fluxo no piloto economizou estimado de 30% no tempo e custo do projeto final de WMS, pois focamos apenas nos requisitos realmente necessários. Taxa de satisfação da equipe de campo aumentou 35% devido ao maior empoderamento no processo.",
        l: "A ação rápida é melhor ferramenta contra paralisia por análise. Um experimento de baixo custo pode gerar mais insights que meses de planejamento teórico. Essa mentalidade de 'testar com o que se tem' se tornou minha abordagem padrão para validar hipóteses de processo antes de comprometer grandes investimentos, tanto na SEFAZ quanto na minha startup."
      },
      en: {
        s: "After major process reengineering at Huawei, I identified persistent bottleneck in equipment delivery logistics. Solution discussion was stuck in committees, with proposals for expensive WMS systems that would take over a year to implement.",
        t: "My individual role: I led end-to-end, set scope and critical decisions, and acted as the single-threaded owner. Seeing impasse, I took leadership to quickly validate main hypothesis: that problem was routing process, not tool. I proposed 60-day pilot to test new flow, proving concept before major investments.",
        a: "Context note: I tied changes to payment operations when applicable (e.g., reconciliation/settlement, fraud prevention, settlement SLA). Personal actions: I drove execution—prioritized changes, aligned stakeholders, made trade-offs, and unblocked teams. Instead of waiting for budget, I strategically chose 'low-tech' tools that would allow rapid iteration: Google Sheets for scheduling and WhatsApp for real-time communication. These tools were perfect for accelerated learning pilot required. I chose Curitiba region for pilot for having high logistics complexity (12 routes, 45 active clients, 3 equipment types) that was representative of 80% of other operations, ensuring learning scalability. I created daily ritual at 5pm: 15min call with field team. I used Google Sheets projected on screen, I edited together live. When I saw process failure, I added new column immediately - literally took 5 minutes using simple formulas. After two scheduling failures, I implemented 'double confirmation' system in spreadsheet, improvement that took 10 minutes to implement. Pilot proved hypothesis was correct. Learnings were used to discard 40% of complex (and expensive) functionalities proposed for new WMS system, focusing only on essential requirements.",
        r: "In 60 days, average logistics time in pilot region was reduced from 4.2 to 2.5 days (40% improvement). Flow validation in pilot saved estimated 30% in time and cost of final WMS project, as I focused only on truly necessary requirements. Field team satisfaction rate increased 35% due to greater process empowerment.",
        l: "Quick action is best tool against analysis paralysis. Low-cost experiment can generate more insights than months of theoretical planning. This 'test with what you have' mentality became my standard approach for validating process hypotheses before committing large investments, both at SEFAZ and my startup."
      },
      fups: [
        {
          q: "Como você garantiu que uso de ferramentas não-oficiais, como WhatsApp e Google Sheets, não comprometesse qualidade ou segurança dos dados?",
          a: "Mitigação do risco foi ponto central do design do piloto. Garanti que essas ferramentas fossem usadas apenas para coordenação da logística (agendamento, comunicação). Controle oficial de inventário e dados sensíveis permaneceram 100% dentro do sistema SAP legado. Havia fronteira clara entre sistema de registro e sistema de ação rápida.",
          q_en: "How did you ensure use of unofficial tools like WhatsApp and Google Sheets didn't compromise data quality or security?",
          a_en: "Risk mitigation was central point of pilot design. I ensured these tools were used only for logistics coordination (scheduling, communication). Official inventory control and sensitive data remained 100% within legacy SAP system. There was clear boundary between system of record and quick action system."
        },
        {
          q: "Quais foram maiores desafios enfrentados durante piloto e como você os superou?",
          a: "Maior desafio foi 'memória muscular' da equipe, acostumada a seguir processo antigo. Nos primeiros dias, continuavam a usar e-mail em vez do WhatsApp. Implementei processo de feedback em tempo real: respondia instantaneamente no WhatsApp e celebrava publicamente cada vez que comunicação rápida resolvia problema, criando novo hábito.",
          q_en: "What were biggest challenges faced during pilot and how did you overcome them?",
          a_en: "Biggest challenge was team's 'muscle memory', accustomed to following old process. In first days, they continued using email instead of WhatsApp. I implemented real-time feedback process: responded instantly on WhatsApp and publicly celebrated every time quick communication solved problem, creating new habit."
        },
        {
          q: "Houve alguma resistência das equipes locais em adotar novo fluxo? Como você lidou com isso?",
          a: "Sim, no início. Equipe de campo via como 'mais um controle'. Lidei focando na dor deles. Perguntei: 'O que mais te frustra no seu dia?'. Resposta era 'esperar por equipamento que não chega'. Posicionei piloto como forma de resolver essa frustração. Quando viram que novo fluxo lhes dava mais previsibilidade, se tornaram maiores defensores.",
          q_en: "Was there resistance from local teams in adopting new flow? How did you handle it?",
          a_en: "Yes, initially. Field team saw it as 'another control'. I handled by focusing on their pain. I asked: 'What frustrates you most in your day?' Answer was 'waiting for equipment that doesn't arrive'. I positioned pilot as way to solve that frustration. When they saw new flow gave them more predictability, they became biggest advocates."
        },
        {
          q: "Como insights do piloto foram comunicados e aceitos pelos stakeholders para influenciar projeto final de WMS?",
          a: "Não apresentei apenas 40% de melhoria. Apresentei 'playbook' detalhado do processo que funcionou, com lições aprendidas e, mais importante, lista de 'Requisitos Validados' e 'Requisitos Descartados' para novo sistema. Aceitação veio porque minha recomendação não era baseada em opinião, mas em 60 dias de dados operacionais do mundo real.",
          q_en: "How were pilot insights communicated and accepted by stakeholders to influence final WMS project?",
          a_en: "I didn't just present 40% improvement. I presented detailed 'playbook' of process that worked, with lessons learned and, most importantly, list of 'Validated Requirements' and 'Discarded Requirements' for new system. Acceptance came because my recommendation wasn't based on opinion, but on 60 days of real-world operational data."
        },
        {
          q: "Se tivesse mais tempo ou recursos, o que você teria feito de forma diferente durante piloto?",
          a: "Honestamente, muito pouco. Restrição de tempo e recursos foi o que nos forçou a ser criativos e focados. Simplicidade foi chave do sucesso. Recursos ilimitados poderiam ter nos levado a solução mais complexa e aprendizado mais lento, exatamente o oposto do que precisávamos.",
          q_en: "If you had more time or resources, what would you have done differently during pilot?",
          a_en: "Honestly, very little. Time and resource constraint was what forced us to be creative and focused. Simplicity was key to success. Unlimited resources could have led us to more complex solution and slower learning, exactly opposite of what I needed."
        },
        {
          q: "Qual foi principal aprendizado do piloto que influenciou projeto do novo sistema?",
          a: "Descobrimos que comunicação em tempo real entre armazém e equipe de campo era fator mais crítico para otimizar rotas, não algoritmos complexos de roteamento. Com base nisso, funcionalidade de 'chat em tempo real' se tornou requisito de alta prioridade no novo sistema, algo que não havia sido considerado antes.",
          q_en: "What was main pilot learning that influenced new system project?",
          a_en: "I discovered that real-time communication between warehouse and field team was most critical factor for optimizing routes, not complex routing algorithms. Based on this, 'real-time chat' functionality became high-priority requirement in new system, something that hadn't been considered before."
        },
        {
          q: "Como você conseguiu aprovação da gestão local para rodar piloto 'fora do sistema' oficial?",
          a: "Apresentei como 'estudo de eficiência' de baixo risco e com prazo definido. Não pedi permissão para 'mudar sistema', mas para 'testar ideia em ambiente controlado'. Garanti ao gestor local que assumiria responsabilidade total por qualquer problema e que resultados poderiam torná-lo herói.",
          q_en: "How did you get local management approval to run pilot 'outside official system'?",
          a_en: "I presented as low-risk 'efficiency study' with defined deadline. I didn't ask permission to 'change system', but to 'test idea in controlled environment'. I assured local manager I'd take total responsibility for any problem and that results could make him hero."
        },
        {
          q: "O que você fez quando algo deu errado no piloto?",
          a: "Em uma ocasião, planilha foi editada incorretamente, enviando equipamento para local errado. Em vez de culpar, tratei como aprendizado acelerado. Em menos de uma hora, ajustamos permissões da planilha e criamos sistema de dupla verificação. Velocidade da correção era mais importante que evitar erro.",
          q_en: "What did you do when something went wrong in pilot?",
          a_en: "On one occasion, spreadsheet was edited incorrectly, sending equipment to wrong location. Instead of blaming, I treated as accelerated learning. In less than hour, I adjusted spreadsheet permissions and created double-check system. Speed of correction was more important than avoiding error."
        },
        {
          q: "Qual foi maior benefício inesperado do piloto?",
          a: "Aumento brutal no moral e engajamento da equipe de campo. Pela primeira vez, se sentiram ouvidos e empoderados para ajudar a desenhar próprio processo. Iniciativa de agir rápido e envolvê-los teve impacto cultural tão importante quanto impacto no KPI.",
          q_en: "What was biggest unexpected benefit of pilot?",
          a_en: "Massive increase in field team morale and engagement. For first time, they felt heard and empowered to help design their own process. Initiative to act quickly and involve them had cultural impact as important as KPI impact."
        },
        {
          q: "Como essa experiência define sua abordagem para melhoria de processos hoje?",
          a: "Define-a como 'viés para experimentação'. Antes de iniciar grande projeto de otimização, minha primeira pergunta é sempre: 'Qual é experimento mais barato e rápido que podemos fazer em duas semanas para validar minha principal hipótese?'. Ajo para aprender, não apenas para executar.",
          q_en: "How does this experience define your approach to process improvement today?",
          a_en: "Defines it as 'bias for experimentation'. Before starting major optimization project, my first question is always: 'What's cheapest and fastest experiment I can do in two weeks to validate my main hypothesis?' I act to learn, not just to execute."
        }
      ]
    }
  ,
    
    {
      id: "calculated-risk-time-critical",
      title: "Ativei 4G em Janela Crítica com Risco Calculado (Arenas)",
      title_pt: "Ativei 4G em Janela Crítica com Risco Calculado (Arenas)",
      title_en: "Activated 4G in a Critical Window with Calculated Risk (Arenas)",
      company: "Huawei/Operadora (ex.)",
      period: "2014",
      isTopCase: false,
      pt: {
        s: "Janela curta para ativar 4G antes de eventos; perder o prazo prejudicaria a experiência e parcerias.",
        t: "Ativar no prazo com risco controlado, evitando indisponibilidade ampla.",
        a: "Escolhi ativação por zonas com rollback planejado; defini GO/NO-GO claros e telemetria priorizada; orquestrei dependências externas e comunicação em tempo real (NOC, campo, parceiros).",
        r: "Ativação no prazo, sem indisponibilidade ampla; contingência não foi necessária; playbook virou referência.",
        l: "Velocidade com disciplina: critérios objetivos mantêm risco sob controle."
      },
      en: {
        s: "Short window to activate 4G before events; missing it would harm UX and partnerships.",
        t: "Activate on time with controlled risk, avoiding widespread outages.",
        a: "I chose zoned activation with planned rollback; set clear GO/NO-GO and prioritized telemetry; orchestrated external dependencies and real-time comms (NOC, field, partners).",
        r: "On-time activation, no wide outages; contingency unused; playbook became a reference.",
        l: "Speed with discipline: objective criteria keep risk under control."
      },
      fups: [
        { q: "Qual era o custo de perder a janela?", a: "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "What was the cost of missing the window?", a_en: "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Por que ativação por zonas foi superior?", a: "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "Why was zoned activation superior?", a_en: "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Como critérios de rollback evitaram incidentes?", a: "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "How did rollback criteria prevent incidents?", a_en: "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Que telemetria foi crítica no cutover?", a: "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "Which telemetry was critical during cutover?", a_en: "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Como coordenou dependências externas?", a: "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "How did you coordinate external dependencies?", a_en: "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Quais métricas usou no go-live?", a: "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "Which metrics did you use on go-live?", a_en: "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Que playbook/documentação deixou como legado?", a: "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "What playbook/documentation did you leave?", a_en: "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Se refizesse, que otimização faria?", a: "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "If redoing, what optimization would you make?", a_en: "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Como escalou o padrão para outros eventos?", a: "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "How did you scale the pattern to other events?", a_en: "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Como protegeu a experiência do usuário final?", a: "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "How did you protect end-user experience?", a_en: "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." }
      ]
    }

  ]
};

export default bias_for_action;