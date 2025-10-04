// Case 1 - deliver_results
const case_1 = {
  id: "huawei-world-cup-4g",
  title: "Entrega do Rollout de 4G a Tempo para a Copa do Mundo de 2014, Superando Obstáculos Críticos",
  title_pt: "Entrega do Rollout de 4G a Tempo para a Copa do Mundo de 2014, Superando Obstáculos Críticos",
  title_en: "4G Rollout Delivery on Time for 2014 World Cup, Overcoming Critical Obstacles",
  company: "Huawei",
  period: "01/2012-06/2014",
  isTopCase: true,
  pt: {
    s: `O Brasil iria sediar a Copa do Mundo de 2014 e a Huawei era a principal fornecedora de infraestrutura de telecom. O cronograma era inegociável. Este rollout incluía infraestrutura crítica para processamento de pagamentos móveis 4G, que habilitaria transações mobile banking pela primeira vez no Brasil. Quando assumi, o processo que EU herdei tinha SLA de 382 dias, enquanto o prazo para a Copa era inferior a 24 meses. Identifiquei obstáculos de todos os tipos que EU precisaria eliminar: burocracia, logística e subcontratados com performance inconsistente. O fracasso não era uma opção.`,
    t: `Meu papel individual: eu liderei end-to-end, defini escopo e decisões críticas, e atuei como owner único. Como líder do PMO, minha tarefa era uma só: entregar a infraestrutura de rede 4G nos 12 estádios e nas cidades-sede antes do início do evento, com 100% de qualidade e dentro do orçamento. Eu era o responsável final por garantir o resultado, independentemente dos contratempos.`,
    a: `Ações pessoais: priorizei mudanças, alinhei stakeholders, tomei decisões de trade-off e removi bloqueios. EU conduzi análise de Pareto que provou que 80% de todos os atrasos provinham de apenas três inputs: 1) tempo de licenciamento, 2) performance de subcontratados e 3) logística de equipamentos. Com essa clareza, concentrei 90% da minha energia em otimizar apenas esses três pontos. Para o licenciamento, não esperei relatórios. EU liderei força-tarefa de 8 pessoas (3 jurídico, 3 relações institucionais, 2 engenharia) durante 4 meses e fui pessoalmente a 12 reuniões com a ANATEL para destravar aprovações críticas. Para os subcontratados, EU implementei o VPI (Vendor Performance Index), que melhorou a performance dos 15 parceiros-chave de uma média de 70% para 95% de aderência ao SLA. EU criei 3 dashboards no MS Project integrados com SAP, atualizados a cada 2 horas, monitorando 47 sites ativos simultaneamente. A 'War Room' do PMO foi o mecanismo que EU criei para garantir a entrega. Com visibilidade imediata de qualquer desvio, quando um problema surgia, ele era resolvido em horas, não em semanas. Mesmo quando atingimos um SLA de 100 dias, bem abaixo da meta de 120, continuei pressionando por melhorias, pois sabia que qualquer 'gordura' no cronograma seria nossa defesa contra imprevistos. Continuamos otimizando o processo até chegarmos aos 62 dias.`,
    r: `Entregamos 100% da infraestrutura necessária a tempo para a Copa do Mundo, com a rede operando com total estabilidade. A redução do SLA para 62 dias não apenas garantiu o projeto, mas se tornou um resultado ~50% mais rápido que o benchmark da indústria na época (120-150 dias). O mecanismo da 'War Room' foi tão eficaz que foi documentado em um playbook e adotado pelo PMO da América Latina, tornando-se um processo escalável. Economia total estimada: R$ 45M em multas contratuais evitadas + R$ 12M em otimização de recursos.`,
    l: `Aprendi que em payment operations, onde cada dia de atraso pode significar milhões em receita perdida, entregar resultados não é sobre heroísmo mas sobre identificar os 3 inputs críticos (neste caso: licenciamento, fornecedores, logística) e criar mecanismos implacáveis para controlá-los. É sobre ter a disciplina para identificar os poucos inputs que realmente movem o ponteiro e a resiliência para superar cada obstáculo sem nunca se acomodar.`
  },
  en: {
    s: `Brazil was going to host the 2014 World Cup and Huawei was the main telecom infrastructure supplier. The timeline was non-negotiable. This rollout included critical infrastructure for 4G mobile payment processing, which would enable mobile banking transactions for the first time in Brazil. When I took over, the process I inherited had an SLA of 382 days, while the deadline for the World Cup was less than 24 months. I identified obstacles of all kinds that I would need to eliminate: bureaucracy, logistics, and subcontractors with inconsistent performance. Failure was not an option.`,
    t: `My individual role: I led end-to-end, set scope and critical decisions, and acted as the single-threaded owner. As PMO leader, my task was simple: deliver 4G network infrastructure in the 12 stadiums and host cities before the event began, with 100% quality and within budget. I was ultimately responsible for ensuring the result, regardless of setbacks.`,
    a: `Personal actions: I drove execution—prioritized changes, aligned stakeholders, made trade-offs, and unblocked teams. I conducted Pareto analysis that proved 80% of all delays came from just three inputs: 1) licensing time, 2) subcontractor performance, and 3) equipment logistics. With this clarity, I concentrated 90% of my energy on optimizing only these three points. For licensing, I didn't wait for reports. I led a task force of 8 people (3 legal, 3 institutional relations, 2 engineering) for 4 months and personally went to 12 meetings with ANATEL to unlock critical approvals. For subcontractors, I implemented the VPI (Vendor Performance Index), which improved the performance of 15 key partners from an average of 70% to 95% SLA adherence. I created 3 dashboards in MS Project integrated with SAP, updated every 2 hours, monitoring 47 active sites simultaneously. The PMO 'War Room' was the mechanism I created to ensure delivery. With immediate visibility of any deviation, when a problem arose, it was resolved in hours, not weeks. Even when I achieved an SLA of 100 days, well below the 120-day target, I continued pushing for improvements, knowing that any 'fat' in the schedule would be my defense against unforeseen events. I continued optimizing the process until I reached 62 days.`,
    r: `I delivered 100% of the necessary infrastructure on time for the World Cup, with the network operating with total stability. Reducing the SLA to 62 days not only secured the project, but became a result ~50% faster than the industry benchmark at the time (120-150 days). The 'War Room' mechanism was so effective that it was documented in a playbook and adopted by the Latin America PMO, becoming a scalable process. Total savings: R$ 45M in avoided contractual penalties + R$ 12M in resource optimization.`,
    l: `I learned that in payment operations, where each day of delay can mean millions in lost revenue, delivering results isn't about heroism but about identifying the 3 critical inputs (in this case: licensing, suppliers, logistics) and creating relentless mechanisms to control them. It's about having the discipline to identify the few inputs that really move the needle and the resilience to overcome every obstacle without ever settling.`
  },
  fups: [
    {
        "q": "Por que você priorizou os três inputs principais (licenciamento, performance dos subcontratados, logística) em detrimento de outros possíveis gargalos? Que dados ou análise apoiaram essa decisão?",
        "a": "A decisão foi 100% baseada em dados. A análise de Pareto que conduzi no início do projeto foi conclusiva: ela mostrou que esses três fatores, juntos, eram responsáveis por mais de 80% da variabilidade e do tempo total de atraso em meu SLA de 382 dias. Focar neles era simplesmente a forma mais eficaz de usar meu recursos para gerar o máximo de impacto no resultado final.",
        "q_en": "Why did you prioritize the three main inputs (licensing, subcontractor performance, logistics) over other possible bottlenecks? What data or analysis supported this decision?",
        "a_en": "The decision was 100% data-based. The Pareto analysis I conducted at the beginning of the project was conclusive: it showed that these three factors, together, were responsible for more than 80% of the variability and total delay time in my 382-day SLA. Focusing on them was simply the most effective way to use my resources to generate maximum impact on the final result."
    },
    {
        "q": "Como você conquistou o engajamento dos stakeholders internos ou externos (ex.: ANATEL, subcontratados) nos mecanismos implementados, como o VPI ou a War Room?",
        "a": "O engajamento veio ao mostrar o 'o que tem para mim'. Para os subcontratados, o VPI significava que os melhores poderiam ganhar bônus e mais volume de trabalho. Para a ANATEL, mostrei como minha nova governança lhes daria mais visibilidade e previsibilidade. Para as equipes internas, a War Room significava menos reuniões e decisões mais rápidas. Foquei em comunicar o benefício para cada parte.",
        "q_en": "How did you gain engagement from internal or external stakeholders (e.g., ANATEL, subcontractors) in the implemented mechanisms, like VPI or War Room?",
        "a_en": "Engagement came from showing 'what's in it for me.' For subcontractors, VPI meant the best ones could earn bonuses and more work volume. For ANATEL, I showed how my new governance would give them more visibility and predictability. For internal teams, the War Room meant fewer meetings and faster decisions. I focused on communicating the benefit for each party."
    },
    {
        "q": "Quais desafios ou resistências você enfrentou na implementação do sistema VPI, e como lidou com eles?",
        "a": "A maior resistência veio dos subcontratados com performance mais baixa, que se sentiram expostos. Lidei com isso de duas formas: primeiro, fui transparente com os dados, mostrando que a avaliação era objetiva. Segundo, ofereci ajuda, criando workshops de melhores práticas com meu melhores fornecedores para ajudar os outros a elevarem seu nível. A abordagem foi 'vamos subir o padrão juntos'.",
        "q_en": "What challenges or resistance did you face in implementing the VPI system, and how did you handle them?",
        "a_en": "The biggest resistance came from lower-performing subcontractors who felt exposed. I handled this in two ways: first, I was transparent with data, showing that the evaluation was objective. Second, I offered help, creating best practice workshops with my top suppliers to help others raise their level. The approach was 'let's raise the standard together.'"
    },
    {
        "q": "Após alcançar o SLA de 62 dias, essas novas eficiências foram mantidas ou escaladas para futuros projetos? Se não, por quê?",
        "a": "Sim, totalmente. O novo processo e os mecanismos como a War Room e o VPI foram formalizados em um playbook de governança. Esse playbook se tornou o padrão para todos os novos projetos de rollout na América Latina. O SLA de 62 dias se tornou o meu novo baseline interno, a partir do qual buscávamos melhorias incrementais.",
        "q_en": "After achieving the 62-day SLA, were these new efficiencies maintained or scaled for future projects? If not, why?",
        "a_en": "Yes, completely. The new process and mechanisms like the War Room and VPI were formalized in a governance playbook. This playbook became the standard for all new rollout projects in Latin America. The 62-day SLA became my new internal baseline, from which I sought incremental improvements."
    },
    {
        "q": "Olhando para trás, existe algo que você faria de diferente para aprimorar ainda mais o processo de entrega ou mitigar riscos que surgiram durante a execução?",
        "a": "Sim. Eu teria implementado o Vendor Performance Index (VPI) desde o primeiro dia. Inicialmente, gastei alguns meses tentando melhorar a performance dos fornecedores apenas com reuniões e relatórios. A introdução do VPI, que conectava a performance a incentivos financeiros, foi a virada de chave. Tê-lo feito antes teria acelerado ainda mais meu resultados.",
        "q_en": "Looking back, is there anything you would do differently to further improve the delivery process or mitigate risks that arose during execution?",
        "a_en": "Yes. I would have implemented the Vendor Performance Index (VPI) from day one. Initially, I spent a few months trying to improve supplier performance only with meetings and reports. Introducing the VPI, which connected performance to financial incentives, was the game changer. Having done it earlier would have accelerated my results even more."
    },
    {
        "q": "Qual foi o maior contratempo que vocês enfrentaram e como você o superou?",
        "a": "A um mês do evento, uma greve de transportes paralisou a entrega de equipamentos para o estádio de Manaus. Minha ação imediata foi usar o orçamento de contingência para fretar uma aeronave de carga. Foi uma decisão cara, mas o resultado (entrega no prazo) era inegociável. Eu superei o obstáculo assumindo o custo para garantir o resultado.",
        "q_en": "What was the biggest setback you faced and how did you overcome it?",
        "a_en": "One month before the event, a transport strike paralyzed equipment delivery to the Manaus stadium. My immediate action was to use the contingency budget to charter a cargo aircraft. It was an expensive decision, but the result (on-time delivery) was non-negotiable. I overcame the obstacle by taking on the cost to ensure the result."
    },
    {
        "q": "Como você se certificou de que a qualidade não estava sendo sacrificada em nome da velocidade?",
        "a": "Implementamos 'quality gates' obrigatórios no final de cada fase do projeto. Nenhuma etapa poderia começar antes que a anterior tivesse seu checklist de qualidade 100% aprovado. A qualidade era um input chave, tão importante quanto o tempo, e o processo garantia que ela não fosse negociada.",
        "q_en": "How did you ensure that quality wasn't being sacrificed for speed?",
        "a_en": "I implemented mandatory 'quality gates' at the end of each project phase. No stage could begin before the previous one had its quality checklist 100% approved. Quality was a key input, as important as time, and the process ensured it wasn't traded away."
    },
    {
        "q": "Como você define os 'principais inputs' para um negócio ou projeto?",
        "a": "Eu uso a técnica de 'working backwards' a partir do resultado desejado. Se o resultado é 'alta satisfação do cliente', eu pergunto: 'Quais são as 3-5 coisas que precisam ser verdadeiras para que o cliente fique satisfeito?'. Esses são os inputs. É um processo de decomposição lógica do resultado final em suas causas diretas.",
        "q_en": "How do you define the 'key inputs' for a business or project?",
        "a_en": "I use the 'working backwards' technique from the desired result. If the result is 'high customer satisfaction,' I ask: 'What are the 3-5 things that need to be true for the customer to be satisfied?' Those are the inputs. It's a process of logical decomposition of the final result into its direct causes."
    },
    {
        "q": "Qual é a sua filosofia sobre 'nunca se acomodar'?",
        "a": "Para mim, significa que cada meta atingida é a nova linha de base. O sucesso de hoje é o padrão esperado para amanhã. Eu celebro a vitória por um dia e, no dia seguinte, pergunto à equipe: 'Isso foi ótimo. Agora, como podemos fazer isso 20% melhor ou mais rápido da próxima vez?'.",
        "q_en": "What's your philosophy about 'never settling'?",
        "a_en": "For me, it means that every goal achieved is the new baseline. Today's success is tomorrow's expected standard. I celebrate the victory for a day and, the next day, ask the team: 'That was great. Now, how can I do this 20% better or faster next time?'"
    },
    {
        "q": "Como você garante a entrega de resultados com dependências de outras equipes que não se reportam a você?",
        "a": "Através de acordos de nível de serviço (SLAs) claros, rituais de governança (como reuniões de 'Scrum of Scrums') e, o mais importante, construindo relacionamentos baseados em objetivos comuns. Eu me esforço para garantir que os líderes das outras equipes vejam o meu sucesso como o sucesso deles, enquadrando a colaboração como um ganha-ganha.",
        "q_en": "How do you ensure results delivery with dependencies on other teams that don't report to you?",
        "a_en": "Through clear service level agreements (SLAs), governance rituals (like 'Scrum of Scrums' meetings), and most importantly, building relationships based on common objectives. I strive to ensure that leaders of other teams see my success as their success, framing collaboration as win-win."
    }
]
};

export default case_1;
