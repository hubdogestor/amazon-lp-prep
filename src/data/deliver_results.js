const deliver_results = {
  principle: {
    title: "Entregar Resultados",
    title_en: "Deliver Results",
    description: "Os líderes se concentram nos principais insumos para seus negócios e os entregam com a qualidade certa e em tempo hábil. Apesar dos contratempos, eles se levantam e nunca se acomodam.",
    description_en: "Leaders focus on the key inputs for their business and deliver them with the right quality and in a timely fashion. Despite setbacks, they rise to the occasion and never settle.",
    icon: ""
  },
  id: "deliver_results",
  name: "Entregar Resultados",
  cases: [
    {
      id: "huawei-world-cup-4g",
      title: "Entrega do Rollout de 4G a Tempo para a Copa do Mundo de 2014, Superando Obstáculos Críticos",
      title_pt: "Entrega do Rollout de 4G a Tempo para a Copa do Mundo de 2014, Superando Obstáculos Críticos",
      title_en: "4G Rollout Delivery on Time for 2014 World Cup, Overcoming Critical Obstacles",
      company: "Huawei",
      period: "01/2012-06/2014",
      isTopCase: true,
      pt: {
        s: "O Brasil iria sediar a Copa do Mundo de 2014 e a Huawei era a principal fornecedora de infraestrutura de telecom. O cronograma era inegociável. Este rollout incluía infraestrutura crítica para processamento de pagamentos móveis 4G, que habilitaria transações mobile banking pela primeira vez no Brasil. Quando assumi, o processo que EU herdei tinha SLA de 382 dias, enquanto o prazo para a Copa era inferior a 24 meses. Identifiquei obstáculos de todos os tipos que EU precisaria eliminar: burocracia, logística e subcontratados com performance inconsistente. O fracasso não era uma opção.",
        t: "Como líder do PMO, minha tarefa era uma só: entregar a infraestrutura de rede 4G nos 12 estádios e nas cidades-sede antes do início do evento, com 100% de qualidade e dentro do orçamento. Eu era o responsável final por garantir o resultado, independentemente dos contratempos.",
        a: "EU conduzi análise de Pareto que provou que 80% de todos os atrasos provinham de apenas três inputs: 1) tempo de licenciamento, 2) performance de subcontratados e 3) logística de equipamentos. Com essa clareza, concentrei 90% da minha energia em otimizar apenas esses três pontos. Para o licenciamento, não esperei relatórios. EU liderei força-tarefa de 8 pessoas (3 jurídico, 3 relações institucionais, 2 engenharia) durante 4 meses e fui pessoalmente a 12 reuniões com a ANATEL para destravar aprovações críticas. Para os subcontratados, EU implementei o VPI (Vendor Performance Index), que melhorou a performance dos 15 parceiros-chave de uma média de 70% para 95% de aderência ao SLA. EU criei 3 dashboards no MS Project integrados com SAP, atualizados a cada 2 horas, monitorando 47 sites ativos simultaneamente. A 'War Room' do PMO foi o mecanismo que EU criei para garantir a entrega. Com visibilidade imediata de qualquer desvio, quando um problema surgia, ele era resolvido em horas, não em semanas. Mesmo quando atingimos um SLA de 100 dias, bem abaixo da meta de 120, continuei pressionando por melhorias, pois sabia que qualquer 'gordura' no cronograma seria nossa defesa contra imprevistos. Continuamos otimizando o processo até chegarmos aos 62 dias.",
        r: "Entregamos 100% da infraestrutura necessária a tempo para a Copa do Mundo, com a rede operando com total estabilidade. A redução do SLA para 62 dias não apenas garantiu o projeto, mas se tornou um resultado ~50% mais rápido que o benchmark da indústria na época (120-150 dias). O mecanismo da 'War Room' foi tão eficaz que foi documentado em um playbook e adotado pelo PMO da América Latina, tornando-se um processo escalável. Economia total estimada: R$ 45M em multas contratuais evitadas + R$ 12M em otimização de recursos.",
        l: "Aprendi que em payment operations, onde cada dia de atraso pode significar milhões em receita perdida, entregar resultados não é sobre heroísmo mas sobre identificar os 3 inputs críticos (neste caso: licenciamento, fornecedores, logística) e criar mecanismos implacáveis para controlá-los. É sobre ter a disciplina para identificar os poucos inputs que realmente movem o ponteiro e a resiliência para superar cada obstáculo sem nunca se acomodar."
      },
      en: {
        s: "Brazil was going to host the 2014 World Cup and Huawei was the main telecom infrastructure supplier. The timeline was non-negotiable. This rollout included critical infrastructure for 4G mobile payment processing, which would enable mobile banking transactions for the first time in Brazil. When I took over, the process I inherited had an SLA of 382 days, while the deadline for the World Cup was less than 24 months. I identified obstacles of all kinds that I would need to eliminate: bureaucracy, logistics, and subcontractors with inconsistent performance. Failure was not an option.",
        t: "As PMO leader, my task was simple: deliver 4G network infrastructure in the 12 stadiums and host cities before the event began, with 100% quality and within budget. I was ultimately responsible for ensuring the result, regardless of setbacks.",
        a: "I conducted Pareto analysis that proved 80% of all delays came from just three inputs: 1) licensing time, 2) subcontractor performance, and 3) equipment logistics. With this clarity, I concentrated 90% of my energy on optimizing only these three points. For licensing, I didn't wait for reports. I led a task force of 8 people (3 legal, 3 institutional relations, 2 engineering) for 4 months and personally went to 12 meetings with ANATEL to unlock critical approvals. For subcontractors, I implemented the VPI (Vendor Performance Index), which improved the performance of 15 key partners from an average of 70% to 95% SLA adherence. I created 3 dashboards in MS Project integrated with SAP, updated every 2 hours, monitoring 47 active sites simultaneously. The PMO 'War Room' was the mechanism I created to ensure delivery. With immediate visibility of any deviation, when a problem arose, it was resolved in hours, not weeks. Even when we achieved an SLA of 100 days, well below the 120-day target, I continued pushing for improvements, knowing that any 'fat' in the schedule would be our defense against unforeseen events. We continued optimizing the process until we reached 62 days.",
        r: "We delivered 100% of the necessary infrastructure on time for the World Cup, with the network operating with total stability. Reducing the SLA to 62 days not only secured the project, but became a result ~50% faster than the industry benchmark at the time (120-150 days). The 'War Room' mechanism was so effective that it was documented in a playbook and adopted by the Latin America PMO, becoming a scalable process. Total savings: R$ 45M in avoided contractual penalties + R$ 12M in resource optimization.",
        l: "I learned that in payment operations, where each day of delay can mean millions in lost revenue, delivering results isn't about heroism but about identifying the 3 critical inputs (in this case: licensing, suppliers, logistics) and creating relentless mechanisms to control them. It's about having the discipline to identify the few inputs that really move the needle and the resilience to overcome every obstacle without ever settling."
      },
      fups: [
        {
          q: "Por que você priorizou os três inputs principais (licenciamento, performance dos subcontratados, logística) em detrimento de outros possíveis gargalos? Que dados ou análise apoiaram essa decisão?",
          a: "A decisão foi 100% baseada em dados. A análise de Pareto que conduzi no início do projeto foi conclusiva: ela mostrou que esses três fatores, juntos, eram responsáveis por mais de 80% da variabilidade e do tempo total de atraso em nosso SLA de 382 dias. Focar neles era simplesmente a forma mais eficaz de usar nossos recursos para gerar o máximo de impacto no resultado final.",
          q_en: "Why did you prioritize the three main inputs (licensing, subcontractor performance, logistics) over other possible bottlenecks? What data or analysis supported this decision?",
          a_en: "The decision was 100% data-based. The Pareto analysis I conducted at the beginning of the project was conclusive: it showed that these three factors, together, were responsible for more than 80% of the variability and total delay time in our 382-day SLA. Focusing on them was simply the most effective way to use our resources to generate maximum impact on the final result."
        },
        {
          q: "Como você conquistou o engajamento dos stakeholders internos ou externos (ex.: ANATEL, subcontratados) nos mecanismos implementados, como o VPI ou a War Room?",
          a: "O engajamento veio ao mostrar o 'o que tem para mim'. Para os subcontratados, o VPI significava que os melhores poderiam ganhar bônus e mais volume de trabalho. Para a ANATEL, mostrei como nossa nova governança lhes daria mais visibilidade e previsibilidade. Para as equipes internas, a War Room significava menos reuniões e decisões mais rápidas. Foquei em comunicar o benefício para cada parte.",
          q_en: "How did you gain engagement from internal or external stakeholders (e.g., ANATEL, subcontractors) in the implemented mechanisms, like VPI or War Room?",
          a_en: "Engagement came from showing 'what's in it for me.' For subcontractors, VPI meant the best ones could earn bonuses and more work volume. For ANATEL, I showed how our new governance would give them more visibility and predictability. For internal teams, the War Room meant fewer meetings and faster decisions. I focused on communicating the benefit for each party."
        },
        {
          q: "Quais desafios ou resistências você enfrentou na implementação do sistema VPI, e como lidou com eles?",
          a: "A maior resistência veio dos subcontratados com performance mais baixa, que se sentiram expostos. Lidei com isso de duas formas: primeiro, fui transparente com os dados, mostrando que a avaliação era objetiva. Segundo, ofereci ajuda, criando workshops de melhores práticas com nossos melhores fornecedores para ajudar os outros a elevarem seu nível. A abordagem foi 'vamos subir o padrão juntos'.",
          q_en: "What challenges or resistance did you face in implementing the VPI system, and how did you handle them?",
          a_en: "The biggest resistance came from lower-performing subcontractors who felt exposed. I handled this in two ways: first, I was transparent with data, showing that the evaluation was objective. Second, I offered help, creating best practice workshops with our top suppliers to help others raise their level. The approach was 'let's raise the standard together.'"
        },
        {
          q: "Após alcançar o SLA de 62 dias, essas novas eficiências foram mantidas ou escaladas para futuros projetos? Se não, por quê?",
          a: "Sim, totalmente. O novo processo e os mecanismos como a War Room e o VPI foram formalizados em um playbook de governança. Esse playbook se tornou o padrão para todos os novos projetos de rollout na América Latina. O SLA de 62 dias se tornou o nosso novo baseline interno, a partir do qual buscávamos melhorias incrementais.",
          q_en: "After achieving the 62-day SLA, were these new efficiencies maintained or scaled for future projects? If not, why?",
          a_en: "Yes, completely. The new process and mechanisms like the War Room and VPI were formalized in a governance playbook. This playbook became the standard for all new rollout projects in Latin America. The 62-day SLA became our new internal baseline, from which we sought incremental improvements."
        },
        {
          q: "Olhando para trás, existe algo que você faria de diferente para aprimorar ainda mais o processo de entrega ou mitigar riscos que surgiram durante a execução?",
          a: "Sim. Eu teria implementado o Vendor Performance Index (VPI) desde o primeiro dia. Inicialmente, gastei alguns meses tentando melhorar a performance dos fornecedores apenas com reuniões e relatórios. A introdução do VPI, que conectava a performance a incentivos financeiros, foi a virada de chave. Tê-lo feito antes teria acelerado ainda mais nossos resultados.",
          q_en: "Looking back, is there anything you would do differently to further improve the delivery process or mitigate risks that arose during execution?",
          a_en: "Yes. I would have implemented the Vendor Performance Index (VPI) from day one. Initially, I spent a few months trying to improve supplier performance only with meetings and reports. Introducing the VPI, which connected performance to financial incentives, was the game changer. Having done it earlier would have accelerated our results even more."
        },
        {
          q: "Qual foi o maior contratempo que vocês enfrentaram e como você o superou?",
          a: "A um mês do evento, uma greve de transportes paralisou a entrega de equipamentos para o estádio de Manaus. Minha ação imediata foi usar o orçamento de contingência para fretar uma aeronave de carga. Foi uma decisão cara, mas o resultado (entrega no prazo) era inegociável. Eu superei o obstáculo assumindo o custo para garantir o resultado.",
          q_en: "What was the biggest setback you faced and how did you overcome it?",
          a_en: "One month before the event, a transport strike paralyzed equipment delivery to the Manaus stadium. My immediate action was to use the contingency budget to charter a cargo aircraft. It was an expensive decision, but the result (on-time delivery) was non-negotiable. I overcame the obstacle by taking on the cost to ensure the result."
        },
        {
          q: "Como você se certificou de que a qualidade não estava sendo sacrificada em nome da velocidade?",
          a: "Implementamos 'quality gates' obrigatórios no final de cada fase do projeto. Nenhuma etapa poderia começar antes que a anterior tivesse seu checklist de qualidade 100% aprovado. A qualidade era um input chave, tão importante quanto o tempo, e o processo garantia que ela não fosse negociada.",
          q_en: "How did you ensure that quality wasn't being sacrificed for speed?",
          a_en: "We implemented mandatory 'quality gates' at the end of each project phase. No stage could begin before the previous one had its quality checklist 100% approved. Quality was a key input, as important as time, and the process ensured it wasn't traded away."
        },
        {
          q: "Como você define os 'principais inputs' para um negócio ou projeto?",
          a: "Eu uso a técnica de 'working backwards' a partir do resultado desejado. Se o resultado é 'alta satisfação do cliente', eu pergunto: 'Quais são as 3-5 coisas que precisam ser verdadeiras para que o cliente fique satisfeito?'. Esses são os inputs. É um processo de decomposição lógica do resultado final em suas causas diretas.",
          q_en: "How do you define the 'key inputs' for a business or project?",
          a_en: "I use the 'working backwards' technique from the desired result. If the result is 'high customer satisfaction,' I ask: 'What are the 3-5 things that need to be true for the customer to be satisfied?' Those are the inputs. It's a process of logical decomposition of the final result into its direct causes."
        },
        {
          q: "Qual é a sua filosofia sobre 'nunca se acomodar'?",
          a: "Para mim, significa que cada meta atingida é a nova linha de base. O sucesso de hoje é o padrão esperado para amanhã. Eu celebro a vitória por um dia e, no dia seguinte, pergunto à equipe: 'Isso foi ótimo. Agora, como podemos fazer isso 20% melhor ou mais rápido da próxima vez?'.",
          q_en: "What's your philosophy about 'never settling'?",
          a_en: "For me, it means that every goal achieved is the new baseline. Today's success is tomorrow's expected standard. I celebrate the victory for a day and, the next day, ask the team: 'That was great. Now, how can we do this 20% better or faster next time?'"
        },
        {
          q: "Como você garante a entrega de resultados com dependências de outras equipes que não se reportam a você?",
          a: "Através de acordos de nível de serviço (SLAs) claros, rituais de governança (como reuniões de 'Scrum of Scrums') e, o mais importante, construindo relacionamentos baseados em objetivos comuns. Eu me esforço para garantir que os líderes das outras equipes vejam o meu sucesso como o sucesso deles, enquadrando a colaboração como um ganha-ganha.",
          q_en: "How do you ensure results delivery with dependencies on other teams that don't report to you?",
          a_en: "Through clear service level agreements (SLAs), governance rituals (like 'Scrum of Scrums' meetings), and most importantly, building relationships based on common objectives. I strive to ensure that leaders of other teams see my success as their success, framing collaboration as win-win."
        }
      ]
    },
    {
      id: "unimed-ebitda-growth",
      title: "Aumento de 22% no EBITDA Através de Estratégia Focada em Inputs Mensuráveis",
      title_pt: "Aumento de 22% no EBITDA Através de Estratégia Focada em Inputs Mensuráveis",
      title_en: "22% EBITDA Increase Through Strategy Focused on Measurable Inputs",
      company: "Unimed",
      period: "01/2021-12/2024",
      isTopCase: false,
      pt: {
        s: "A Unimed enfrentava estagnação na rentabilidade com EBITDA pressionado por custos crescentes. O NPS estava em 52 e o churn do app em 40% ao ano. Eu reportava diretamente ao CEO com a missão de desenhar e executar uma estratégia que entregasse resultados financeiros mensuráveis.",
        t: "Minha responsabilidade era criar e liderar a execução de uma estratégia que aumentasse o EBITDA em 20% em 3 anos. Eu precisava identificar os inputs corretos, priorizá-los e liderar as iniciativas que os movimentariam.",
        a: "EU solicitei acesso aos últimos 3 anos de P&L, passei 2 semanas analisando linha por linha no Excel, e apresentei à diretoria financeira minha decomposição: EBITDA = f(Custo Assistencial 70%, Novas Receitas 20%, Retenção 10%). EU conduzi pessoalmente 15 entrevistas de 45min com gestores de saúde, descobrindo que 78% mencionavam 'sinistralidade de crônicos' como principal driver de custo, o que me levou a priorizar Atenção Primária à Saúde (APS). EU construí business case de 23 slides mostrando ROI de 3 anos (investimento R$ 2M, retorno R$ 8M), apresentei em 45 minutos ao Conselho de 12 membros, e recebi aprovação unânime na mesma reunião. Para retenção, EU liderei a squad que redesenhou a jornada de onboarding. Pessoalmente conduzi análise de coorte que identificou que 50% do churn ocorria nos primeiros 7 dias - 67% por dificuldade de uso do app. EU criei 8 novos tutoriais interativos e implementei onboarding progressivo. Para novas receitas, EU pessoalmente conduzi market research para Pet Saúde e Checklist Executivo visitando 12 clínicas e entrevistando 25 veterinários. EU desenhei e implementei framework de OKRs corporativo, conduzindo pessoalmente workshops de 4h com cada uma das 6 diretorias para co-criar seus Key Results.",
        r: "EBITDA cresceu 22% (~R$ 70.4M), superando a meta de 20%. Decomposição detalhada do impacto: APS (custo assistencial): ~R$ 4M (6% do crescimento), Redução de churn de 40% para 25%: ~R$ 45M (64% do crescimento), 4 novos produtos (Pet Saúde, Checklist Executivo, Telemedicina Mental, APS): ~R$ 12M (30% do crescimento). NPS melhorou de 52 para 58 (+6 pontos). Unimed foi reconhecida como 'Operadora Mais Inovadora' pela ANS.",
        l: "Aprendi que entregar resultados extraordinários exige disciplina para identificar os poucos inputs que realmente movem o ponteiro, criar iniciativas específicas para cada um, e liderar a execução com ownership total. Hoje aplico essa mesma disciplina em payment operations: identificar os 2-3 inputs que movem 80% do resultado (ex: tempo de settlement, taxa de falsos positivos, custo por transação) e criar iniciativas específicas para cada um."
      },
      en: {
        s: "Unimed faced profitability stagnation with EBITDA pressured by growing costs. NPS was at 52 and app churn at 40% annually. I reported directly to the CEO with the mission to design and execute a strategy that would deliver measurable financial results.",
        t: "My responsibility was to create and lead the execution of a strategy that would increase EBITDA by 20% in 3 years. I needed to identify the right inputs, prioritize them, and lead the initiatives that would move them.",
        a: "I requested access to the last 3 years of P&L, spent 2 weeks analyzing line by line in Excel, and presented to the finance directorate my decomposition: EBITDA = f(Care Costs 70%, New Revenues 20%, Retention 10%). I personally conducted 15 45-minute interviews with health managers, discovering that 78% mentioned 'chronic care claims' as the main cost driver, which led me to prioritize Primary Health Care (APS). I built a 23-slide business case showing 3-year ROI (R$ 2M investment, R$ 8M return), presented in 45 minutes to the 12-member Board, and received unanimous approval in the same meeting. For retention, I led the squad that redesigned the onboarding journey. I personally conducted cohort analysis that identified that 50% of churn occurred in the first 7 days - 67% due to app usability issues. I created 8 new interactive tutorials and implemented progressive onboarding. For new revenues, I personally conducted market research for Pet Health and Executive Checklist, visiting 12 clinics and interviewing 25 veterinarians. I designed and implemented the corporate OKRs framework, personally conducting 4-hour workshops with each of the 6 directorates to co-create their Key Results.",
        r: "EBITDA grew 22% (~R$ 70.4M), exceeding the 20% target. Detailed impact breakdown: APS (care costs): ~R$ 4M (6% of growth), Churn reduction from 40% to 25%: ~R$ 45M (64% of growth), 4 new products (Pet Health, Executive Checklist, Mental Telemedicine, APS): ~R$ 12M (30% of growth). NPS improved from 52 to 58 (+6 points). Unimed was recognized as 'Most Innovative Operator' by ANS.",
        l: "I learned that delivering extraordinary results requires discipline to identify the few inputs that really move the needle, create specific initiatives for each one, and lead execution with total ownership. Today I apply this same discipline in payment operations: identify the 2-3 inputs that move 80% of the result (e.g., settlement time, false positive rate, cost per transaction) and create specific initiatives for each one."
      },
      fups: [
        {
          q: "Como você determinou que 'custo assistencial', 'novas fontes de receita' e 'experiência do cliente' eram os principais direcionadores para focar?",
          a: "A determinação veio de uma análise do P&L (Demonstrativo de Lucros e Perdas) e de dados de mercado. O custo assistencial era nossa maior linha de despesa, logo, o maior potencial de otimização. Novas receitas eram uma necessidade estratégica para diminuir a dependência do nosso produto principal. E a análise de churn mostrou que a experiência do cliente era a principal alavanca para a retenção, que é a forma mais barata de sustentar a receita.",
          q_en: "How did you determine that 'care costs,' 'new revenue sources,' and 'customer experience' were the main drivers to focus on?",
          a_en: "The determination came from a P&L (Profit & Loss Statement) analysis and market data. Care costs were our largest expense line, thus the biggest optimization potential. New revenues were a strategic necessity to reduce dependence on our main product. And churn analysis showed that customer experience was the main lever for retention, which is the cheapest way to sustain revenue."
        },
        {
          q: "Quais desafios você enfrentou ao liderar o lançamento dos 4 novos produtos, e como os superou?",
          a: "O maior desafio foi a resistência cultural a produtos fora do nosso core business, como o Pet Saúde. Superei isso começando com um MVP de baixo custo. Em vez de construir uma operação completa, fechamos uma parceria com uma rede de clínicas veterinárias para um piloto. O sucesso rápido e os dados de adesão do piloto criaram a prova de conceito necessária para vencer o ceticismo e obter o investimento para escalar.",
          q_en: "What challenges did you face leading the launch of 4 new products, and how did you overcome them?",
          a_en: "The biggest challenge was cultural resistance to products outside our core business, like Pet Health. I overcame this by starting with a low-cost MVP. Instead of building a complete operation, we partnered with a veterinary clinic network for a pilot. The quick success and pilot adoption data created the proof of concept needed to overcome skepticism and obtain investment to scale."
        },
        {
          q: "Havia abordagens alternativas ao uso de IA para triagem de sinistros? Por que você escolheu a solução de IA implementada?",
          a: "Sim, a alternativa era otimizar o processo manual ou usar RPA (Robotic Process Automation). Descartamos essas opções porque elas apenas acelerariam um processo já complexo. A IA foi a escolha estratégica porque ela prometia não apenas acelerar, mas também tornar o processo mais inteligente, identificando padrões de risco que os humanos não viam e liberando a equipe para focar nos casos de maior complexidade.",
          q_en: "Were there alternative approaches to using AI for claim triage? Why did you choose the implemented AI solution?",
          a_en: "Yes, the alternative was to optimize the manual process or use RPA (Robotic Process Automation). We discarded these options because they would only accelerate an already complex process. AI was the strategic choice because it promised not just to accelerate, but also make the process more intelligent, identifying risk patterns that humans didn't see and freeing the team to focus on higher complexity cases."
        },
        {
          q: "Como você alinhou as equipes multifuncionais para executar essa estratégia de forma eficaz? Recebeu alguma resistência?",
          a: "O alinhamento foi construído sobre o framework de OKRs. Como os objetivos e resultados-chave foram definidos em conjunto com os líderes de todas as áreas (TI, Operações, Comercial), a resistência diminuiu. Os OKRs se tornaram nossa 'linguagem comum', garantindo que, mesmo com prioridades táticas diferentes, todos estivessem remando na mesma direção estratégica.",
          q_en: "How did you align cross-functional teams to execute this strategy effectively? Did you receive any resistance?",
          a_en: "Alignment was built on the OKRs framework. Since objectives and key results were defined together with leaders from all areas (IT, Operations, Commercial), resistance decreased. OKRs became our 'common language,' ensuring that even with different tactical priorities, everyone was rowing in the same strategic direction."
        },
        {
          q: "Se fosse repetir essa iniciativa, o que faria diferente para alcançar resultados ainda maiores?",
          a: "Eu teria sido ainda mais agressivo na decomposição dos silos organizacionais. No início, tentamos trabalhar com as estruturas existentes. Com o tempo, percebi que os melhores resultados vinham quando criávamos squads verdadeiramente multifuncionais e dedicadas a um único OKR. Teria defendido esse modelo de 'squads de missão' desde o primeiro dia.",
          q_en: "If you were to repeat this initiative, what would you do differently to achieve even greater results?",
          a_en: "I would have been even more aggressive in breaking down organizational silos. Initially, we tried to work with existing structures. Over time, I realized the best results came when we created truly cross-functional squads dedicated to a single OKR. I would have advocated for this 'mission squads' model from day one."
        },
        {
          q: "Como o framework de OKRs ajudou a entregar resultados?",
          a: "Os OKRs criaram foco e alinhamento. Em vez de 100 prioridades conflitantes, a empresa passou a ter 3-5 objetivos claros para o trimestre. Isso garantiu que todos os recursos e esforços estivessem concentrados nos inputs mais importantes, evitando a dispersão que é inimiga da entrega de resultados.",
          q_en: "How did the OKRs framework help deliver results?",
          a_en: "OKRs created focus and alignment. Instead of 100 conflicting priorities, the company had 3-5 clear objectives for the quarter. This ensured all resources and efforts were concentrated on the most important inputs, avoiding the dispersion that is the enemy of results delivery."
        },
        {
          q: "Qual resultado te deixou mais orgulhoso e por quê?",
          a: "O aumento de 6 pontos no NPS. Porque o EBITDA e o churn são resultados para a empresa, mas o NPS é um resultado direto para o cliente. Ele provou que era possível crescer e ser mais lucrativo, ao mesmo tempo em que melhorávamos a vida e a experiência dos nossos beneficiários.",
          q_en: "Which result made you most proud and why?",
          a_en: "The 6-point increase in NPS. Because EBITDA and churn are results for the company, but NPS is a direct result for the customer. It proved it was possible to grow and be more profitable while improving the lives and experience of our beneficiaries."
        },
        {
          q: "Como você lidou com um projeto que, no meio do caminho, se mostrou incapaz de entregar o resultado esperado?",
          a: "Eu o cancelei rapidamente. A cultura de entregar resultados também significa ter a disciplina de parar de investir em iniciativas que não estão funcionando. Tivemos um projeto de gamificação no app que, após um piloto, mostrou baixo engajamento. Em vez de insistir, fizemos um post-mortem, extraímos os aprendizados e realocamos a equipe para uma iniciativa com maior potencial de impacto no churn.",
          q_en: "How did you handle a project that, midway through, proved unable to deliver the expected result?",
          a_en: "I canceled it quickly. The culture of delivering results also means having the discipline to stop investing in initiatives that aren't working. We had an app gamification project that, after a pilot, showed low engagement. Instead of insisting, we did a post-mortem, extracted learnings, and reallocated the team to an initiative with greater potential impact on churn."
        },
        {
          q: "Como você define 'qualidade certa' ao entregar um resultado?",
          a: "'Qualidade certa' é o nível de qualidade que atende às necessidades do cliente e do negócio, sem excessos que atrasem a entrega (over-engineering). Para o lançamento de um MVP, a 'qualidade certa' é a funcionalidade e a estabilidade. Para um sistema de pagamentos, a 'qualidade certa' é a segurança militar. O contexto define o padrão.",
          q_en: "How do you define 'right quality' when delivering a result?",
          a_en: "'Right quality' is the level of quality that meets customer and business needs, without excesses that delay delivery (over-engineering). For an MVP launch, 'right quality' is functionality and stability. For a payment system, 'right quality' is military-grade security. Context defines the standard."
        },
        {
          q: "Qual é a principal característica de um líder focado em resultados?",
          a: "É a obsessão por fechar o ciclo. Ele não se contenta em lançar um projeto. Ele é obcecado em medir o impacto que aquele projeto teve no negócio e no cliente. Ele só considera o trabalho 'feito' quando o ponteiro do resultado se moveu.",
          q_en: "What's the main characteristic of a results-focused leader?",
          a_en: "It's the obsession with closing the loop. They're not satisfied with launching a project. They're obsessed with measuring the impact that project had on business and customer. They only consider work 'done' when the results needle has moved."
        }
      ]
    },
    {
      id: "sicredi-fraud-reduction",
      title: "Superação da Meta de Redução de Fraudes em 30% em 6 Meses",
      title_pt: "Superação da Meta de Redução de Fraudes em 30% em 6 Meses",
      title_en: "Exceeding 30% Fraud Reduction Target in 6 Months",
      company: "Sicredi Woop",
      period: "01/2020-06/2020",
      isTopCase: false,
      pt: {
        s: "O banco digital Woop estava sofrendo um aumento súbito e agressivo nas tentativas de fraude de identidade no onboarding. As perdas financeiras estavam crescendo de R$ 180k/mês em Nov/19 para R$ 420k/mês em Dez/19, abalando a confiança de stakeholders. Quando cheguei, a equipe de 5 analistas estava reagindo caso a caso, sem padrão de resposta ou priorização baseada em risco.",
        t: "A diretoria me deu uma missão clara: reduzir as perdas por fraude de onboarding em 30% em 6 meses. O resultado não era negociável. Eu precisava montar uma equipe, definir uma estratégia e entregar esse número.",
        a: "Analisei o problema e determinei que as perdas eram uma função de dois inputs principais: 1) nossa Acurácia de detecção e 2) nossa Velocidade de resposta a novas táticas. EU passei 3 dias no SQL analisando os últimos 5.000 ataques, cruzando tabelas de onboarding, KYC e device fingerprint, até identificar o padrão: 67% usavam documentos sintéticos gerados por IA com data de criação inferior a 48h. Calculei que treinar novo modelo ML levaria 3-4 meses. EU decidi por solução tática: criei 5 regras heurísticas simples em Python (ex: 'if documento_criado_última_48h AND idade_aparente_foto > 10_anos_diferença: FLAG') e deploy em 1 semana, que bloquearam imediatamente 40% dos ataques. No terceiro mês, os fraudadores mudaram de tática para deepfakes em vídeo. Em vez de desanimar, usei o ataque como uma fonte de dados. Em 48 horas, liderei a equipe para lançar um 'hotfix' que exigia uma prova de vida (piscar os olhos 3x) no vídeo, neutralizando 85% dos novos ataques. EU criei uma 'War Room' Anti-Fraude, uma força-tarefa com Produto, Dados e Risco. Minha principal dificuldade foi alinhar a velocidade da Engenharia com a cautela do Risco. Instituí uma reunião diária de 15 minutos às 9h onde revisávamos os dados juntos, o que criou confiança e permitiu a implantação de novas regras em 4-6 horas, não semanas.",
        r: "Em menos de 5 meses, reduzimos as perdas por fraude de R$ 420k/mês para R$ 190k/mês (45% de redução), superando a meta de 30%. Esse resultado reverteu uma tendência de crescimento de 133% nas perdas do trimestre anterior e nos colocou abaixo do benchmark da indústria (0.12% vs. 0.18%). Tempo médio de resposta a novos padrões: de 3-4 semanas para 48-72 horas. Taxa de falsos positivos mantida em <2%. O playbook que desenvolvemos se tornou o padrão de resposta a incidentes de fraude para todo o banco, sendo implementado em outras 3 unidades de negócio.",
        l: "Aprendi que, em uma crise de payment operations, a entrega de resultados exige foco, velocidade e resiliência. Um líder precisa criar um mecanismo (a War Room) que permita um ciclo rápido de aprendizado e resposta. Descobri que meu papel mais importante era criar um 'senso de verdade compartilhada' através dos dados, o que permitiu que equipes com culturas diferentes (Risco conservador e Engenharia ágil) colaborassem com eficácia para entregar o resultado."
      },
      en: {
        s: "The digital bank Woop was suffering a sudden and aggressive increase in identity fraud attempts during onboarding. Financial losses were growing from R$ 180k/month in Nov/19 to R$ 420k/month in Dec/19, shaking stakeholder confidence. When I arrived, the team of 5 analysts was reacting case by case, without response patterns or risk-based prioritization.",
        t: "The board gave me a clear mission: reduce onboarding fraud losses by 30% in 6 months. The result was non-negotiable. I needed to assemble a team, define a strategy, and deliver that number.",
        a: "I analyzed the problem and determined that losses were a function of two main inputs: 1) our Detection accuracy and 2) our Response speed to new tactics. I spent 3 days in SQL analyzing the last 5,000 attacks, cross-referencing onboarding, KYC, and device fingerprint tables, until I identified the pattern: 67% used AI-generated synthetic documents with creation dates under 48h. I calculated that training a new ML model would take 3-4 months. I decided on a tactical solution: I created 5 simple heuristic rules in Python (e.g., 'if document_created_last_48h AND apparent_age_photo > 10_years_difference: FLAG') and deployed in 1 week, which immediately blocked 40% of attacks. In the third month, fraudsters switched tactics to deepfake videos. Instead of getting discouraged, I used the attack as a data source. In 48 hours, I led the team to launch a 'hotfix' that required proof of life (blink eyes 3x) in video, neutralizing 85% of new attacks. I created an Anti-Fraud 'War Room,' a task force with Product, Data, and Risk. My main difficulty was aligning Engineering's speed with Risk's caution. I instituted a daily 15-minute meeting at 9am where we reviewed data together, which created trust and allowed new rule deployment in 4-6 hours, not weeks.",
        r: "In less than 5 months, we reduced fraud losses from R$ 420k/month to R$ 190k/month (45% reduction), exceeding the 30% target. This result reversed a 133% growth trend in losses from the previous quarter and put us below industry benchmark (0.12% vs. 0.18%). Average response time to new patterns: from 3-4 weeks to 48-72 hours. False positive rate maintained at <2%. The playbook we developed became the fraud incident response standard for the entire bank, being implemented in 3 other business units.",
        l: "I learned that in a payment operations crisis, results delivery requires focus, speed, and resilience. A leader needs to create a mechanism (the War Room) that enables a rapid learning and response cycle. I discovered that my most important role was creating a 'shared sense of truth' through data, which allowed teams with different cultures (conservative Risk and agile Engineering) to collaborate effectively to deliver the result."
      },
      fups: [
        {
          q: "Por que você escolheu os dois inputs principais (acurácia do modelo e velocidade de resposta) como os mais críticos para reduzir as fraudes? Considerou outros inputs?",
          a: "Sim, consideramos outros, como a recuperação de perdas. No entanto, a análise mostrou que a fraude de onboarding era um problema de 'prevenção'. A perda, uma vez ocorrida, era quase irrecuperável. Portanto, a única forma de impactar o resultado era melhorar nossa capacidade de bloquear a fraude na porta de entrada, o que é uma função direta da nossa acurácia de detecção e da nossa velocidade para nos adaptarmos a novos ataques.",
          q_en: "Why did you choose the two main inputs (model accuracy and response speed) as the most critical for reducing fraud? Did you consider other inputs?",
          a_en: "Yes, we considered others, like loss recovery. However, analysis showed that onboarding fraud was a 'prevention' problem. Once a loss occurred, it was almost unrecoverable. Therefore, the only way to impact the result was to improve our ability to block fraud at the entry point, which is a direct function of our detection accuracy and our speed to adapt to new attacks."
        },
        {
          q: "Qual foi o maior desafio ao liderar uma força-tarefa multidisciplinar e como você garantiu alinhamento entre as equipes?",
          a: "O maior desafio foi o conflito de culturas entre a equipe de Risco (focada em cautela) e a de Engenharia (focada em velocidade). O alinhamento foi forjado na reunião diária da War Room. Ao revisar os dados de ataques do dia anterior juntos, todos tinham a mesma visão do problema. Isso transformou o debate de 'opiniões' para 'decisões baseadas em evidências', criando uma confiança e uma velocidade que não existiam antes.",
          q_en: "What was the biggest challenge in leading a multidisciplinary task force and how did you ensure alignment between teams?",
          a_en: "The biggest challenge was the culture clash between the Risk team (focused on caution) and Engineering (focused on speed). Alignment was forged in the daily War Room meeting. By reviewing the previous day's attack data together, everyone had the same view of the problem. This transformed the debate from 'opinions' to 'evidence-based decisions,' creating trust and speed that didn't exist before."
        },
        {
          q: "Como você priorizou entre implementar regras heurísticas rápidas versus desenvolver soluções baseadas em machine learning?",
          a: "Eu usei uma abordagem de 'estancar a sangria primeiro'. As regras heurísticas eram como um 'curativo' rápido e eficaz para o ataque imediato. Elas nos deram o fôlego necessário. Em paralelo, iniciamos o trabalho no modelo de ML, que era a 'cirurgia' de longo prazo para criar uma defesa mais robusta e adaptativa. Foi uma estratégia de duas velocidades.",
          q_en: "How did you prioritize between implementing quick heuristic rules versus developing machine learning-based solutions?",
          a_en: "I used a 'stop the bleeding first' approach. Heuristic rules were like a quick and effective 'bandage' for the immediate attack. They gave us the necessary breathing room. In parallel, we started work on the ML model, which was the long-term 'surgery' to create a more robust and adaptive defense. It was a two-speed strategy."
        },
        {
          q: "Se os fraudadores tivessem mudado de estratégia novamente após o hotfix, como você teria adaptado sua abordagem?",
          a: "Nossa abordagem já era adaptativa. O mecanismo da War Room foi criado exatamente para isso. Um novo ataque seria tratado da mesma forma: 1) Mergulhar nos dados para entender o novo padrão. 2) Implementar uma contra-medida rápida (seja uma regra ou um ajuste). 3) Usar os aprendizados para fortalecer nosso modelo de longo prazo. O processo era um ciclo contínuo de defesa e aprendizado.",
          q_en: "If fraudsters had changed strategy again after the hotfix, how would you have adapted your approach?",
          a_en: "Our approach was already adaptive. The War Room mechanism was created exactly for this. A new attack would be treated the same way: 1) Dive into data to understand the new pattern. 2) Implement a quick countermeasure (whether a rule or adjustment). 3) Use learnings to strengthen our long-term model. The process was a continuous cycle of defense and learning."
        },
        {
          q: "Como os aprendizados dessa experiência influenciaram sua forma de liderar em outros projetos subsequentes?",
          a: "Influenciou profundamente. Aprendi o poder de criar um 'mecanismo de crise' antes que a crise aconteça. Hoje, para qualquer projeto de alto risco, eu estabeleço desde o início uma 'war room' com um ritual de sincronização rápida e um dashboard focado nos inputs chave. Isso me permite detectar e reagir a desvios com muito mais velocidade e eficácia.",
          q_en: "How did the learnings from this experience influence your way of leading in subsequent projects?",
          a_en: "It influenced profoundly. I learned the power of creating a 'crisis mechanism' before the crisis happens. Today, for any high-risk project, I establish from the beginning a 'war room' with a rapid synchronization ritual and a dashboard focused on key inputs. This allows me to detect and react to deviations with much more speed and effectiveness."
        },
        {
          q: "Como você equilibrou o bloqueio de fraudes com o risco de criar atrito para clientes legítimos (falsos positivos)?",
          a: "Esse foi o nosso principal 'balanceamento de qualidade'. Para cada nova regra, monitorávamos de perto a 'taxa de falsos positivos' em um dashboard. Se uma regra se mostrava muito agressiva, nós a ajustávamos em horas. A 'qualidade certa' era a máxima detecção de fraude com o mínimo de impacto na experiência do cliente bom.",
          q_en: "How did you balance fraud blocking with the risk of creating friction for legitimate customers (false positives)?",
          a_en: "This was our main 'quality balancing.' For each new rule, we closely monitored the 'false positive rate' on a dashboard. If a rule proved too aggressive, we adjusted it within hours. The 'right quality' was maximum fraud detection with minimum impact on good customer experience."
        },
        {
          q: "Como você manteve a equipe motivada ao lutar contra um 'inimigo' que estava constantemente mudando de tática?",
          a: "Eu usei uma analogia de 'jogo de xadrez'. Cada nova tática deles era um 'movimento' que precisávamos antecipar e contra-atacar. Isso transformou a frustração em um desafio intelectual. Eu celebrava cada 'defesa' bem-sucedida, mantendo a energia da equipe alta.",
          q_en: "How did you keep the team motivated while fighting an 'enemy' that was constantly changing tactics?",
          a_en: "I used a 'chess game' analogy. Each new tactic of theirs was a 'move' we needed to anticipate and counter-attack. This transformed frustration into an intellectual challenge. I celebrated each successful 'defense,' keeping the team's energy high."
        },
        {
          q: "O que você fez para garantir que os aprendizados da força-tarefa não se perdessem?",
          a: "Nós documentamos cada novo padrão de fraude e cada contra-medida em um 'playbook anti-fraude'. Ao final do projeto, realizamos um workshop com a equipe de operações de risco para transferir esse conhecimento e formalizar os novos processos e alertas no dia a dia deles.",
          q_en: "What did you do to ensure that the task force learnings weren't lost?",
          a_en: "We documented each new fraud pattern and each countermeasure in an 'anti-fraud playbook.' At the end of the project, we held a workshop with the risk operations team to transfer this knowledge and formalize the new processes and alerts in their daily work."
        },
        {
          q: "E se vocês não tivessem atingido a meta de 30% em 6 meses?",
          a: "O resultado é o número, mas a entrega também é a trajetória e o aprendizado. Se estivéssemos consistentemente reduzindo as perdas, mesmo que não atingíssemos o número exato, teríamos demonstrado progresso e justificado a continuação dos esforços, apresentando um plano revisado com os novos aprendizados.",
          q_en: "What if you hadn't reached the 30% target in 6 months?",
          a_en: "The result is the number, but delivery is also trajectory and learning. If we were consistently reducing losses, even if we didn't reach the exact number, we would have demonstrated progress and justified continuing efforts, presenting a revised plan with new learnings."
        },
        {
          q: "Como você superou o contratempo do novo ataque sem desmoralizar a equipe?",
          a: "Minha mensagem foi: 'Parabéns, equipe. Fomos tão eficazes em bloquear o método antigo que forçamos o inimigo a gastar mais recursos e a nos mostrar sua próxima carta. Agora temos mais dados e sabemos como vencê-los de novo'. Eu enquadrei o ataque como um sinal do nosso sucesso, não da nossa falha.",
          q_en: "How did you overcome the setback of the new attack without demoralizing the team?",
          a_en: "My message was: 'Congratulations, team. We were so effective at blocking the old method that we forced the enemy to spend more resources and show us their next card. Now we have more data and know how to beat them again.' I framed the attack as a sign of our success, not our failure."
        }
      ]
    },
    {
      id: "sefaz-ecage-portal",
      title: "Liderança do Desenvolvimento do Portal e-CAGE com 100% de Adoção",
      title_pt: "Liderança do Desenvolvimento do Portal e-CAGE com 100% de Adoção",
      title_en: "Leadership of e-CAGE Portal Development with 100% Adoption",
      company: "SEFAZ/RS",
      period: "01/2024-06/2024",
      isTopCase: false,
      pt: {
        s: "A Contadoria e Auditoria Geral do Estado (CAGE) gerenciava demandas via e-mail e planilhas Excel, gerando caos operacional. O impacto era severo: em 2023, 34% das demandas estouravam o SLA de 15 dias, gerando reclamações formais de 8 órgãos estaduais ao Secretário. Caso emblemático: a Secretaria de Educação enviou a mesma solicitação por e-mail para 3 pessoas diferentes da CAGE - perdemos 120 horas de trabalho técnico em duplicação. O NPS estimado era de 30, com reclamações constantes sobre 'falta de transparência'.",
        t: "Eu fui designado para liderar o desenho, desenvolvimento e implementação de um portal completo de gestão de demandas. A meta que EU estabeleci foi alcançar 100% de adoção pelos 15 órgãos estaduais em 6 meses e melhorar o NPS para acima de 60.",
        a: "Durante 3 semanas, EU conduzi 25 entrevistas de 45min cada com gestores de 8 órgãos diferentes. Descobri que o maior pain point não era velocidade (mencionado por 31%) mas 'invisibilidade' (78% dos gestores): não saber se alguém estava trabalhando na demanda. Este insight mudou completamente meu design - em vez de focar em automação de workflow, EU priorizei features de rastreabilidade em tempo real. EU criei o Product Canvas sozinho em 2 dias, desenhei os mockups iniciais no Figma, e validei com 5 gestores-piloto antes de começar desenvolvimento. EU avaliei 3 alternativas tecnológicas (Salesforce, Microsoft, solução custom) e escolhi SharePoint + Power Platform por custo zero (licenças já existentes), integração nativa e time-to-market de 6 meses vs. 18 meses. Para a integração com AS/400, EU passei 2 dias na sala de servidores com o único técnico que entendia o sistema. Descobrimos que poderíamos integrar via database view em vez de API. EU desenhei o modelo de dados da integração pessoalmente, usando ERwin, mapeando 47 tabelas do AS/400 para 12 tabelas do SharePoint. O maior obstáculo foi político: 3 órgãos resistiram alegando 'transparência = exposição de falhas'. EU construí MVP sozinho em 2 semanas e demonstrei processando 10 demandas reais deles, provando que transparência na verdade os PROTEGIA (rastreabilidade = accountability clara). EU criei 8 templates configuráveis de workflow usando Power Automate e passei 1 semana criando interface drag-and-drop para qualquer gestor desenhar seu próprio processo. Pessoalmente treinei 50+ gestores no novo sistema em sessões de 2h. Estabeleci canal de suporte direto comigo (WhatsApp) nas primeiras 4 semanas - respondi pessoalmente 180+ dúvidas.",
        r: "Portal lançado exatos 6 meses após kickoff, R$ 0 em licenças novas (economia estimada R$ 200k vs. solução SaaS). 100% de adoção por todos os 15 órgãos estaduais em 2 meses (meta era 6). Impacto mensurável: Tempo médio de resolução: 15 → 8 dias (47%), Taxa de retrabalho: 25% → 5%, SLA compliance: 66% → 94%, Rastreabilidade: 0% → 100%. Eliminação completa de 120 horas/mês perdidas em duplicação de esforços (equivalente a ~R$ 60k/ano em custo de pessoal). NPS saltou de 30 para 72 (+42 pontos). Apresentado como case de sucesso no Encontro Nacional de Contadores Públicos. Modelo sendo replicado em outras 4 secretarias do Estado. Recebeu o Prêmio de Inovação em Gestão Pública 2025 da CAGE.",
        l: "Liderar o desenvolvimento de um produto digital do zero no setor público exige equilibrar ambição tecnológica com pragmatismo financeiro. Aprendi que o sucesso vem de: 1) Ouvir profundamente os usuários antes de desenhar qualquer solução, 2) Escolher tecnologias que maximize valor com mínimo custo, 3) Liderar pessoalmente o desenvolvimento para garantir qualidade, 4) Transformar obstáculos políticos em oportunidades de parceria demonstrando valor tangível, e 5) Investir massivamente em change management. O maior aprendizado foi que resistência não se vence com autoridade, mas com demonstração de valor tangível."
      },
      en: {
        s: "The State General Accounting and Audit Office (CAGE) managed demands via email and Excel spreadsheets, generating operational chaos. The impact was severe: in 2023, 34% of demands exceeded the 15-day SLA, generating formal complaints from 8 state agencies to the Secretary. Emblematic case: the Education Secretary sent the same request by email to 3 different CAGE people - we lost 120 hours of technical work in duplication. The estimated NPS was 30, with constant complaints about 'lack of transparency'.",
        t: "I was designated to lead the design, development, and implementation of a complete demand management portal. The goal I established was to achieve 100% adoption by the 15 state agencies in 6 months and improve NPS to above 60.",
        a: "Over 3 weeks, I conducted 25 45-minute interviews each with managers from 8 different agencies. I discovered that the biggest pain point wasn't speed (mentioned by 31%) but 'invisibility' (78% of managers): not knowing if someone was working on the demand. This insight completely changed my design - instead of focusing on workflow automation, I prioritized real-time traceability features. I created the Product Canvas alone in 2 days, designed initial mockups in Figma, and validated with 5 pilot managers before starting development. I evaluated 3 technological alternatives (Salesforce, Microsoft, custom solution) and chose SharePoint + Power Platform for zero cost (existing licenses), native integration, and 6-month vs. 18-month time-to-market. For AS/400 integration, I spent 2 days in the server room with the only technician who understood the system. We discovered we could integrate via database view instead of API. I personally designed the integration data model using ERwin, mapping 47 AS/400 tables to 12 SharePoint tables. The biggest obstacle was political: 3 agencies resisted claiming 'transparency = exposure of failures.' I built the MVP myself in 2 weeks and demonstrated processing 10 real demands from them, proving transparency actually PROTECTED them (traceability = clear accountability). I created 8 configurable workflow templates using Power Automate and spent 1 week creating a drag-and-drop interface for any manager to design their own process. I personally trained 50+ managers in the new system in 2-hour sessions. I established a direct support channel with me (WhatsApp) in the first 4 weeks - personally answered 180+ questions.",
        r: "Portal launched exactly 6 months after kickoff, R$ 0 in new licenses (estimated savings R$ 200k vs. SaaS solution). 100% adoption by all 15 state agencies in 2 months (goal was 6). Measurable impact: Average resolution time: 15 → 8 days (47%), Rework rate: 25% → 5%, SLA compliance: 66% → 94%, Traceability: 0% → 100%. Complete elimination of 120 hours/month lost in effort duplication (equivalent to ~R$ 60k/year in personnel cost). NPS jumped from 30 to 72 (+42 points). Presented as success case at National Public Accountants Meeting. Model being replicated in 4 other state secretaries. Received the 2025 Public Management Innovation Award from CAGE.",
        l: "Leading the development of a digital product from scratch in the public sector requires balancing technological ambition with financial pragmatism. I learned that success comes from: 1) Listening deeply to users before designing any solution, 2) Choosing technologies that maximize value with minimum cost, 3) Personally leading development to ensure quality, 4) Transforming political obstacles into partnership opportunities by demonstrating tangible value, and 5) Investing massively in change management. The biggest learning was that resistance isn't overcome with authority, but with demonstration of tangible value."
      },
      fups: [
        {
          q: "Como você garantiu que os insights obtidos no Product Discovery fossem priorizados corretamente no desenvolvimento?",
          a: "Usei o framework RICE (Reach, Impact, Confidence, Effort) para criar um score objetivo para cada funcionalidade. Por exemplo, 'rastreabilidade em tempo real' teve score altíssimo (Reach: 100% dos usuários, Impact: 3/3, Confidence: 100%, Effort: 2 semanas), enquanto 'relatórios personalizados' teve score baixo e foi adiado para a v2. Apresentei essa matriz ao comitê gestor, e a priorização baseada em dados eliminou discussões políticas sobre 'o que é mais importante'.",
          q_en: "How did you ensure that insights obtained in Product Discovery were correctly prioritized in development?",
          a_en: "I used the RICE framework (Reach, Impact, Confidence, Effort) to create an objective score for each functionality. For example, 'real-time traceability' had a very high score (Reach: 100% of users, Impact: 3/3, Confidence: 100%, Effort: 2 weeks), while 'custom reports' had a low score and was postponed to v2. I presented this matrix to the management committee, and data-based prioritization eliminated political discussions about 'what's most important'."
        },
        {
          q: "Quais foram os maiores desafios técnicos na criação da integração com o sistema legado e como você os superou?",
          a: "O maior desafio foi que o AS/400 usava EBCDIC encoding (não ASCII/UTF-8), então dados com caracteres especiais portugueses corrompiam. Descobri isso quando nomes com 'ç' e 'ã' ficavam ilegíveis. A solução foi criar uma função de conversão EBCDIC→UTF-8 na camada intermediária usando Python. Passei 6 horas testando manualmente com todos os caracteres especiais do português até garantir 100% de fidelidade. Foi tedioso mas fundamental para a qualidade.",
          q_en: "What were the biggest technical challenges in creating integration with the legacy system and how did you overcome them?",
          a_en: "The biggest challenge was that the AS/400 used EBCDIC encoding (not ASCII/UTF-8), so data with Portuguese special characters got corrupted. I discovered this when names with 'ç' and 'ã' became illegible. The solution was to create an EBCDIC→UTF-8 conversion function in the intermediate layer using Python. I spent 6 hours manually testing with all Portuguese special characters until ensuring 100% fidelity. It was tedious but fundamental for quality."
        },
        {
          q: "Como você mediu o impacto dos treinamentos e do suporte no sucesso da adoção do portal?",
          a: "Criei 3 métricas de sucesso dos treinamentos: 1) Taxa de participação (96% dos gestores participaram), 2) NPS do treinamento (87), e 3) 'Time to First Action' - quanto tempo levou para o usuário criar sua primeira demanda no portal após o treinamento (média de 2.3 dias). Também rastreei o volume de dúvidas no canal de suporte: começou em 45 dúvidas/dia na primeira semana e caiu para 3/dia na quarta semana, provando que os treinamentos foram eficazes.",
          q_en: "How did you measure the impact of training and support on the portal's adoption success?",
          a_en: "I created 3 training success metrics: 1) Participation rate (96% of managers participated), 2) Training NPS (87), and 3) 'Time to First Action' - how long it took for users to create their first demand in the portal after training (average 2.3 days). I also tracked the volume of questions in the support channel: started at 45 questions/day in the first week and dropped to 3/day in the fourth week, proving trainings were effective."
        },
        {
          q: "Houve resistência inicial dos gestores ou usuários finais ao uso do portal? Como você lidou com isso?",
          a: "Sim, principalmente dos 3 órgãos que mencionei no caso. Além da estratégia do 'período de graça', usei uma abordagem de 'early adopters como evangelistas'. Identifiquei 5 gestores mais abertos à inovação, treinei-os primeiro como 'pilotos', e pedi que compartilhassem seus resultados. Quando um deles apresentou em uma reunião do Colégio de Secretários como o portal tinha reduzido suas demandas pendentes em 40%, outros gestores pediram acesso. Transformei resistência em FOMO (fear of missing out).",
          q_en: "Was there initial resistance from managers or end users to using the portal? How did you handle it?",
          a_en: "Yes, mainly from the 3 agencies I mentioned in the case. Besides the 'grace period' strategy, I used an 'early adopters as evangelists' approach. I identified 5 managers most open to innovation, trained them first as 'pilots,' and asked them to share their results. When one of them presented at a Secretaries' College meeting how the portal had reduced their pending demands by 40%, other managers requested access. I transformed resistance into FOMO (fear of missing out)."
        },
        {
          q: "Após o lançamento, como você garantiu a manutenção e melhorias contínuas no portal?",
          a: "Estabeleci 3 mecanismos: 1) Um backlog público no Trello onde qualquer usuário pode sugerir melhorias e votar nas sugestões (gamificação da priorização), 2) Uma 'Sprint de Feedback' mensal onde releaseamos as melhorias mais votadas, e 3) Treinei 2 servidores da CAGE para serem 'Product Owners internos', capazes de fazer pequenas modificações sem depender de mim. Isso criou sustentabilidade.",
          q_en: "After launch, how did you ensure portal maintenance and continuous improvements?",
          a_en: "I established 3 mechanisms: 1) A public backlog on Trello where any user can suggest improvements and vote on suggestions (gamification of prioritization), 2) A monthly 'Feedback Sprint' where we released the most voted improvements, and 3) I trained 2 CAGE employees to be 'internal Product Owners,' capable of making small modifications without depending on me. This created sustainability."
        },
        {
          q: "Qual foi a funcionalidade que os usuários mais pediram no discovery mas que você decidiu NÃO implementar no MVP? Por quê?",
          a: "Relatórios personalizáveis com exportação para vários formatos. 60% dos gestores pediram isso. Decidi adiar porque: 1) O esforço era alto (4 semanas de dev), 2) O impact era médio (nice-to-have, não essencial), e 3) Eu queria validar primeiro se o portal seria adotado antes de investir em features avançadas. Foi a decisão certa - após o sucesso do MVP, implementamos os relatórios na v2 com dados reais de uso que tornaram o design muito melhor.",
          q_en: "What was the functionality users most requested in discovery but you decided NOT to implement in the MVP? Why?",
          a_en: "Customizable reports with export to various formats. 60% of managers requested this. I decided to postpone because: 1) The effort was high (4 weeks of dev), 2) The impact was medium (nice-to-have, not essential), and 3) I wanted to first validate if the portal would be adopted before investing in advanced features. It was the right decision - after MVP success, we implemented reports in v2 with real usage data that made the design much better."
        },
        {
          q: "Como você balanceou as necessidades de diferentes órgãos que tinham workflows muito distintos?",
          a: "Em vez de tentar criar um workflow 'universal' que seria mediocre para todos, optei por criar um 'motor de workflows configurável'. Desenhei 3 templates básicos (simples, com aprovação, com múltiplas aprovações) e dei aos órgãos autonomia para configurar. Por exemplo, a área jurídica criou um workflow de 8 etapas, enquanto a área contábil usa um de 3 etapas. Flexibilidade foi mais poderosa que padronização forçada.",
          q_en: "How did you balance the needs of different agencies that had very distinct workflows?",
          a_en: "Instead of trying to create a 'universal' workflow that would be mediocre for everyone, I chose to create a 'configurable workflow engine.' I designed 3 basic templates (simple, with approval, with multiple approvals) and gave agencies autonomy to configure. For example, the legal area created an 8-step workflow, while the accounting area uses a 3-step one. Flexibility was more powerful than forced standardization."
        },
        {
          q: "Que métricas você acompanha hoje para garantir a 'saúde' contínua do portal?",
          a: "Acompanho 5 KPIs em um dashboard executivo: 1) Taxa de adoção ativa (% de órgãos que usaram o portal na última semana - target >90%), 2) Tempo médio de resolução (target <8 dias), 3) Taxa de cumprimento de SLA (target >90%), 4) NPS trimestral (target >60), e 5) Volume de demandas resolvidas por autoatendimento via base de conhecimento que criamos (target crescente). Se qualquer métrica desvia >10% do target por 2 semanas consecutivas, disparo uma investigação.",
          q_en: "What metrics do you track today to ensure the portal's continuous 'health'?",
          a_en: "I track 5 KPIs in an executive dashboard: 1) Active adoption rate (% of agencies that used the portal in the last week - target >90%), 2) Average resolution time (target <8 days), 3) SLA compliance rate (target >90%), 4) Quarterly NPS (target >60), and 5) Volume of demands resolved by self-service via knowledge base we created (growing target). If any metric deviates >10% from target for 2 consecutive weeks, I trigger an investigation."
        },
        {
          q: "Se você pudesse voltar ao início do projeto, o que faria diferente?",
          a: "Eu teria envolvido a área Jurídica desde o Dia 1. Eles só entraram na semana 8, quando precisamos validar aspectos legais de assinatura digital. Isso causou um atraso de 2 semanas porque descobrimos requisitos de conformidade que não estavam no radar. Aprendi que em projetos governamentais, Jurídico e Compliance devem estar na discovery, não apenas na validação final.",
          q_en: "If you could go back to the beginning of the project, what would you do differently?",
          a_en: "I would have involved the Legal area from Day 1. They only entered in week 8, when we needed to validate legal aspects of digital signature. This caused a 2-week delay because we discovered compliance requirements that weren't on the radar. I learned that in government projects, Legal and Compliance should be in discovery, not just in final validation."
        },
        {
          q: "Como você celebrou os sucessos intermediários para manter a equipe motivada durante os 6 meses?",
          a: "Criei 'marcos visíveis' a cada 3 semanas. Quando completamos a integração com o sistema legado, fiz uma demo para a diretoria e dei crédito público ao técnico do AS/400 que me ajudou. Quando atingimos 50% de adoção, organizei um almoço com pizza para a equipe. Quando o NPS bateu 70, pedi ao Secretário para enviar um e-mail de reconhecimento para todos os envolvidos. Celebrar pequenas vitórias mantém energia por projetos longos.",
          q_en: "How did you celebrate intermediate successes to keep the team motivated during the 6 months?",
          a_en: "I created 'visible milestones' every 3 weeks. When we completed legacy system integration, I did a demo for the board and gave public credit to the AS/400 technician who helped me. When we reached 50% adoption, I organized a pizza lunch for the team. When NPS hit 70, I asked the Secretary to send a recognition email to everyone involved. Celebrating small victories maintains energy for long projects."
        }
      ]
    }
  ]
};

export default deliver_results;