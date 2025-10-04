const invent_simplify = {
  principle: {
    title: "Inventar e Simplificar",
    title_en: "Invent and Simplify",
    description: "Os líderes esperam e exigem inovação e invenção de suas equipes e sempre encontram maneiras de simplificar. Eles estão cientes do que acontece externamente, procuram ideias em todos os lugares e não se limitam pelo 'não foi inventado aqui'. Quando fazemos coisas novas, aceitamos que podemos ser mal compreendidos por longos períodos de tempo.",
    description_en: "Leaders expect and require innovation and invention from their teams and always find ways to simplify. They are externally aware, look for new ideas from everywhere, and are not limited by 'not invented here.' When we do new things, we accept that we may be misunderstood for long periods of time.",
    icon: "💡"
  },
  id: "invent_simplify",
  name: "Inventar e Simplificar",
  cases: [
    {
      id: "huawei-six-sigma-optimization",
      title: "Invenção de Framework Six Sigma Customizado que Reduziu Atrasos em 73% no Rollout 4G",
      title_pt: "Invenção de Framework Six Sigma Customizado que Reduziu Atrasos em 73% no Rollout 4G",
      title_en: "Invention of Customized Six Sigma Framework that Reduced 4G Rollout Delays by 73%",
      company: "Huawei",
      period: "01/2012-12/2014",
      isTopCase: false,
      pt: {
        s: "O programa de rollout 4G para a Copa do Mundo de 2014 estava com 382 dias de SLA médio - inaceitável para um deadline não-negociável. Tínhamos 47 sites simultâneos, 15 fornecedores, 3 países de validação offshore, e um processo caótico com 23 etapas de aprovação. Os relatórios de status eram inconsistentes, com cada site reportando métricas diferentes. A complexidade era tamanha que nem os gerentes seniores conseguiam identificar onde estavam os gargalos reais.",
        t: "Meu papel individual: eu liderei end-to-end, defini escopo e decisões críticas, e atuei como owner único. Minha responsabilidade era inventar uma metodologia que simplificasse drasticamente esse caos operacional e entregasse resultados mensuráveis. A meta que estabeleci foi reduzir o SLA para menos de 120 dias (68% de redução) aplicando uma abordagem sistemática de simplificação.",
        a: "Ações pessoais: priorizei mudanças, alinhei stakeholders, tomei decisões de trade-off e removi bloqueios. Analisei opções como Lean e Kanban, mas as descartei pois são mais eficazes em otimizar fluxos já estáveis. Como nosso processo era caótico e as causas dos atrasos desconhecidas, escolhi o Six Sigma (DMAIC) por sua robustez investigativa e capacidade de lidar com variabilidade complexa. Adaptei o framework tradicional para telecom: criei variáveis específicas como 'MTTR por tipo de site' e 'Taxa de retrabalho por fornecedor offshore'. Na fase Measure, coletei pessoalmente dados de 1.200 sites em 18 meses, identificando que 80% dos atrasos vinham de apenas 3 causas: licenciamento (35%), performance de fornecedores (28%), e logística (17%). Na fase Analyze, descobri que 15 das 23 etapas de aprovação eram redundantes - múltiplas pessoas aprovando a mesma informação. Eu mesmo desenhei o novo fluxo 'TO-BE' no Visio, eliminando essas 5 etapas redundantes de aprovação crítica e criando um 'fast track' para sites de baixa complexidade (60% do volume). O maior breakthrough foi criar o 'Integrated Command Center': integrei dados do MS Project (cronograma) com SAP (custos/faturamento) e CRM (issues de campo) em um único dashboard executivo que atualizava em tempo real. Isso eliminou 12 reuniões semanais de status, pois todos tinham a mesma visão da realidade. Para garantir adoção, treinei pessoalmente 25 gerentes de site no novo processo e criei um sistema de incentivos baseado no novo SLA.",
        r: "Reduzi o SLA médio de 382 para 104 dias (73% de melhoria), superando a meta de 120 dias. Isso representou uma aceleração de ~9 meses no cronograma geral. O cálculo de ~$120 milhões em ganhos foi uma estimativa conservadora da área financeira global, baseada na economia de: multas contratuais evitadas ($45M), redução de horas extras ($12M), aceleração da receita por early delivery ($38M), e eliminação de retrabalho ($25M). O framework foi tão eficaz que foi adotado como padrão pela Huawei América Latina para todos os rollouts subsequentes. O 'Integrated Command Center' se tornou template global, sendo replicado em 8 países. Recebi o 'Innovation Award' da Huawei Global por criar uma metodologia que combinou Six Sigma com especificidades de telecom.",
        l: "Aprendi que a inovação mais impactante pode ser a simplificação radical de um processo complexo. O Six Sigma me ensinou que você não pode melhorar o que não mede, mas a verdadeira arte está em escolher as métricas certas e criar mecanismos visuais que tornem a complexidade gerenciável. Hoje, em payment operations, vejo oportunidades similares: processos de reconciliação que levam 5-7 dias poderiam ser simplificados para <24h aplicando essa mesma disciplina de Pareto + Six Sigma. A complexidade na maioria dos processos de pagamento não é inerente - é acumulada organicamente ao longo dos anos, e pode ser simplificada radicalmente quando você mede primeiro e redesenha depois."
      },
      en: {
        s: "The 4G rollout program for the 2014 World Cup had a 382-day average SLA - unacceptable for a non-negotiable deadline. I had 47 simultaneous sites, 15 suppliers, 3 offshore validation countries, and a chaotic process with 23 approval steps. Status reports were inconsistent, with each site reporting different metrics. The complexity was such that even senior managers couldn't identify where the real bottlenecks were.",
        t: "My individual role: I led end-to-end, set scope and critical decisions, and acted as the single-threaded owner. My responsibility was to invent a methodology that would drastically simplify this operational chaos and deliver measurable results. The goal I established was to reduce SLA to less than 120 days (68% reduction) by applying a systematic simplification approach.",
        a: "Personal actions: I drove execution—prioritized changes, aligned stakeholders, made trade-offs, and unblocked teams. I analyzed options like Lean and Kanban, but discarded them as they are more effective in optimizing already stable flows. Since my process was chaotic and delay causes unknown, I chose Six Sigma (DMAIC) for its investigative robustness and ability to handle complex variability. I adapted the traditional framework for telecom: created specific variables like 'MTTR by site type' and 'Rework rate by offshore supplier.' In the Measure phase, I personally collected data from 1,200 sites over 18 months, identifying that 80% of delays came from just 3 causes: licensing (35%), supplier performance (28%), and logistics (17%). In the Analyze phase, I discovered that 15 of the 23 approval steps were redundant - multiple people approving the same information. I personally designed the new 'TO-BE' flow in Visio, eliminating these 5 critical redundant approval steps and creating a 'fast track' for low-complexity sites (60% of volume). The biggest breakthrough was creating the 'Integrated Command Center': I integrated MS Project data (schedule) with SAP (costs/billing) and CRM (field issues) into a single executive dashboard that updated in real-time. This eliminated 12 weekly status meetings, as everyone had the same view of reality. To ensure adoption, I personally trained 25 site managers in the new process and created an incentive system based on the new SLA.",
        r: "I reduced average SLA from 382 to 104 days (73% improvement), exceeding the 120-day target. This represented a ~9-month acceleration in the overall schedule. The calculation of ~$120 million in gains was a conservative estimate from global finance, based on savings from: avoided contractual penalties ($45M), overtime reduction ($12M), revenue acceleration through early delivery ($38M), and rework elimination ($25M). The framework was so effective it was adopted as standard by Huawei Latin America for all subsequent rollouts. The 'Integrated Command Center' became a global template, replicated in 8 countries. I received Huawei Global's 'Innovation Award' for creating a methodology that combined Six Sigma with telecom specificities.",
        l: "I learned that the most impactful innovation can be the radical simplification of a complex process. Six Sigma taught me that you can't improve what you don't measure, but the real art is in choosing the right metrics and creating visual mechanisms that make complexity manageable. Today, in payment operations, I see similar opportunities: reconciliation processes that take 5-7 days could be simplified to <24h by applying this same discipline of Pareto + Six Sigma. Complexity in most payment processes isn't inherent - it's accumulated organically over years, and can be radically simplified when you measure first and redesign after."
      },
      
      pitch: {
        pt: {
          hook: "“Tínhamos um programa 4G com SLA médio de 382 dias para um deadline inegociável. Eu redesenhei o sistema e derrubei para 104 dias.”",
          flow: [
            {"t":"0:00–0:30","label":"Abertura","script":"Hook + stakes: por que este problema era intolerável e o que aconteceria se nada fosse feito."},
            {"t":"0:30–1:30","label":"S (Situação)","script":"Contexto objetivo, volumes, SLAs e variabilidade."},
            {"t":"1:30–2:15","label":"T (Tarefa)","script":"Qual missão eu assumi pessoalmente e a meta mensurável que defini."},
            {"t":"2:15–5:30","label":"A (Ações)","script":"3–5 decisões de arquitetura/processo que eu tomei; trade‑offs; como alinhei stakeholders."},
            {"t":"5:30–7:30","label":"R (Resultados)","script":"Métricas antes/depois com baseline e benchmarks; efeito nos principais KPIs."},
            {"t":"7:30–9:00","label":"L (Learnings)","script":"O que ficou de mecanismo replicável e como isso escala para payments/fintech."},
            {"t":"9:00–10:00","label":"Mic‑drop","script":"Fecho com um número/efeito incontestável + convite à pergunta crítica."}
          ],
          transitions: [
            "“Dado esse contexto, eu assumi uma meta agressiva…”",
            "“Para chegar lá, eu precisei tomar três decisões difíceis…”",
            "“O efeito disso foi mensurável nos KPIs que importavam…”",
            "“E isso virou mecanismo, não heroísmo pontual…”"
          ],
          mic_drop: "“73% de redução no SLA e ~US$120M de valor — e o modelo virou template global.”"
        },
        en: {
          hook: "“We had a 4G rollout with a 382‑day average SLA for a non‑negotiable deadline. I redesigned the system and brought it down to 104 days.”",
          flow: [
            {"t":"0:00–0:30","label":"Opening","script":"Hook + stakes: why the problem was intolerable and what would happen if nothing changed."},
            {"t":"0:30–1:30","label":"S (Situation)","script":"Objective context, volumes, SLAs, variability."},
            {"t":"1:30–2:15","label":"T (Task)","script":"The mission I personally owned and the measurable target I set."},
            {"t":"2:15–5:30","label":"A (Actions)","script":"3–5 architectural/process decisions I made; trade‑offs; how I aligned stakeholders."},
            {"t":"5:30–7:30","label":"R (Results)","script":"Before/after metrics with baselines and benchmarks; impact on core KPIs."},
            {"t":"7:30–9:00","label":"L (Learnings)","script":"What became a repeatable mechanism and how it scales to payments/fintech."},
            {"t":"9:00–10:00","label":"Mic‑drop","script":"Close with a hard number/effect + invite the toughest question."}
          ],
          transitions: [
            "“Given that context, I set an aggressive target…”",
            "“To get there, I made three hard decisions…”",
            "“The effect was measurable on the KPIs that matter…”",
            "“And this became a mechanism, not one‑off heroics…”"
          ],
          mic_drop: "“73% SLA reduction and ~$120M value — adopted as a global template.”"
        }
      },
fups: [
        {
          q: "Como você priorizou as mudanças no fluxo 'TO-BE' para garantir que as etapas eliminadas não comprometessem a qualidade ou compliance?",
          a: "Usei uma análise de risco-benefício para cada etapa. Das 23 etapas originais, mapeei quais eram regulatórias obrigatórias (8 etapas), quais agregavam valor real (5 etapas), e quais eram redundantes ou burocráticas (10 etapas). Eliminei apenas as redundantes, mas criei checkpoints automatizados para as críticas. Por exemplo, em vez de 3 pessoas aprovarem o mesmo projeto técnico, criamos um checklist digital que uma única pessoa especializada validava em 2 dias vs. 10 dias antes.",
          q_en: "How did you prioritize changes in the 'TO-BE' flow to ensure eliminated steps didn't compromise quality or compliance?",
          a_en: "I used risk-benefit analysis for each step. Of the 23 original steps, I mapped which were regulatory mandatory (8 steps), which added real value (5 steps), and which were redundant or bureaucratic (10 steps). I only eliminated redundant ones, but created automated checkpoints for critical ones. For example, instead of 3 people approving the same technical project, I created a digital checklist that a single specialized person validated in 2 days vs. 10 days before."
        },
        {
          q: "Houve resistência dos stakeholders em implementar o novo processo? Como você lidou com isso?",
          a: "Sim, principalmente dos gerentes seniores que perderam 'poder de veto' no novo fluxo. Lidei com isso demonstrando valor primeiro: escolhi 3 sites piloto, implementei o novo processo e mostrei resultados em 60 dias (SLA de 104 vs. 380 dias no modelo antigo). Quando os outros gerentes viram que seus pares estavam entregando mais rápido e com menos stress, a resistência virou curiosidade. A chave foi mostrar, não apenas falar.",
          q_en: "Was there stakeholder resistance to implementing the new process? How did you handle it?",
          a_en: "Yes, mainly from senior managers who lost 'veto power' in the new flow. I handled this by demonstrating value first: I chose 3 pilot sites, implemented the new process and showed results in 60 days (104 vs. 380-day SLA in the old model). When other managers saw their peers delivering faster and with less stress, resistance turned into curiosity. The key was showing, not just telling."
        },
        {
          q: "Como você garantiu que a metodologia Six Sigma fosse compreendida e aceita por todos os envolvidos, incluindo subcontratados?",
          a: "Eu 'traduzi' o Six Sigma para a linguagem de telecom. Em vez de falar de 'defeitos por milhão', falava de 'sites entregues no prazo'. Criei um treinamento de 4 horas focado em ferramentas práticas (Pareto, fishbone, control charts) aplicadas aos meu problemas reais. Para subcontratados, o buy-in veio através de contratos: conectei os novos KPIs a bônus financeiros. Performance no novo SLA = mais receita para eles.",
          q_en: "How did you ensure Six Sigma methodology was understood and accepted by everyone involved, including subcontractors?",
          a_en: "I 'translated' Six Sigma into telecom language. Instead of talking about 'defects per million,' I talked about 'sites delivered on time.' I created 4-hour training focused on practical tools (Pareto, fishbone, control charts) applied to my real problems. For subcontractors, buy-in came through contracts: I connected new KPIs to financial bonuses. Performance on new SLA = more revenue for them."
        },
        {
          q: "Após a entrega do programa, como você monitorou a sustentabilidade das melhorias e evitou regressão para o modelo antigo?",
          a: "Criei 3 mecanismos de sustentabilidade: 1) Dashboards automatizados que alertavam qualquer site com SLA >120 dias, 2) Revisões mensais obrigatórias onde qualquer regressão tinha que ser justificada publicamente, e 3) Treinamento de 'Six Sigma Champions' - formei 8 especialistas internos que podiam replicar a metodologia. O mais importante: conectei os novos KPIs ao sistema de avaliação de performance dos gerentes.",
          q_en: "After program delivery, how did you monitor sustainability of improvements and avoid regression to the old model?",
          a_en: "I created 3 sustainability mechanisms: 1) Automated dashboards that alerted any site with SLA >120 days, 2) Mandatory monthly reviews where any regression had to be publicly justified, and 3) Training of 'Six Sigma Champions' - I trained 8 internal specialists who could replicate the methodology. Most importantly: I connected new KPIs to managers' performance evaluation system."
        },
        {
          q: "Como os dashboards que você criou influenciaram a estratégia global da Huawei ou foram reutilizados em outras regiões?",
          a: "O 'Integrated Command Center' virou template global. O head de PMO Global pediu para documentar a arquitetura de integração (MS Project + SAP + CRM) e ela foi replicada em 8 países: México, Colômbia, Argentina, Chile, Peru, Filipinas, Tailândia e Malásia. Cada região adaptou as métricas locais, mas a estrutura central (unified view of schedule + costs + issues) se manteve. Isso me deu visibilidade global e foi um fator chave para minha promoção posterior.",
          q_en: "How did the dashboards you created influence Huawei's global strategy or get reused in other regions?",
          a_en: "The 'Integrated Command Center' became a global template. The Global PMO head asked me to document the integration architecture (MS Project + SAP + CRM) and it was replicated in 8 countries: Mexico, Colombia, Argentina, Chile, Peru, Philippines, Thailand, and Malaysia. Each region adapted local metrics, but the core structure (unified view of schedule + costs + issues) remained. This gave me global visibility and was a key factor in my subsequent promotion."
        },
        {
          q: "Se você fosse replicar essa metodologia em payment operations hoje, qual seria o primeiro passo?",
          a: "Começaria com um 'Payment Process Map' end-to-end, desde authorization até settlement. Usaria a mesma disciplina: Measure primeiro (onde está o tempo real sendo gasto?), Analyze (quais etapas são regulatórias vs. burocráticas?), e depois Improve (como simplificar sem comprometer compliance?). O maior paralelo seria reconciliação: suspeito que 70% do tempo está em validações manuais redundantes que poderiam ser automatizadas ou eliminadas.",
          q_en: "If you were to replicate this methodology in payment operations today, what would be the first step?",
          a_en: "I'd start with an end-to-end 'Payment Process Map,' from authorization to settlement. I'd use the same discipline: Measure first (where is real time being spent?), Analyze (which steps are regulatory vs. bureaucratic?), and then Improve (how to simplify without compromising compliance?). The biggest parallel would be reconciliation: I suspect 70% of time is in redundant manual validations that could be automated or eliminated."
        },
        {
          q: "Qual foi o maior erro que você cometeu na implementação e o que aprendeu com ele?",
          a: "No início, tentei implementar todas as mudanças de uma vez em todos os 47 sites. Foi um caos. Aprendi que mesmo a melhor metodologia precisa de uma 'curva de adoção'. Mudei para implementação em waves: primeiro 3 sites piloto, depois 10, depois o resto. Isso permitiu ajustar o processo baseado em feedback real antes de escalar.",
          q_en: "What was the biggest mistake you made in implementation and what did you learn from it?",
          a_en: "Initially, I tried to implement all changes at once across all 47 sites. It was chaos. I learned that even the best methodology needs an 'adoption curve.' I changed to wave implementation: first 3 pilot sites, then 10, then the rest. This allowed adjusting the process based on real feedback before scaling."
        },
        {
          q: "Como você mediu o ROI de $120 milhões e garantiu que os stakeholders confiassem no cálculo?",
          a: "Trabalhei com o CFO para criar um modelo financeiro transparente. Separei em 4 categorias com fontes diferentes: 1) Multas evitadas (contratos reais), 2) Horas extras (payroll histórico), 3) Aceleração de receita (projeção baseada em early delivery), 4) Eliminação de retrabalho (custo médio por site x sites refeitos). Apresentei não apenas o valor total, mas a metodologia de cálculo e as premissas. A credibilidade veio da transparência.",
          q_en: "How did you measure the $120 million ROI and ensure stakeholders trusted the calculation?",
          a_en: "I worked with the CFO to create a transparent financial model. I separated into 4 categories with different sources: 1) Avoided fines (real contracts), 2) Overtime (historical payroll), 3) Revenue acceleration (projection based on early delivery), 4) Rework elimination (average cost per site x redone sites). I presented not just the total value, but the calculation methodology and assumptions. Credibility came from transparency."
        },
        {
          q: "O framework Six Sigma customizado foi documentado? Como você garantiu transferência de conhecimento?",
          a: "Sim, criei um 'Six Sigma for Telecom Playbook' de 47 páginas com templates, checklists e cases reais. Mais importante: treinei 8 'Champions' internos que podiam replicar a metodologia. Também fiz 3 apresentações globais (para heads de outras regiões) compartilhando lessons learned. O playbook ainda é usado hoje na Huawei LatAm.",
          q_en: "Was the customized Six Sigma framework documented? How did you ensure knowledge transfer?",
          a_en: "Yes, I created a 47-page 'Six Sigma for Telecom Playbook' with templates, checklists, and real cases. More importantly: I trained 8 internal 'Champions' who could replicate the methodology. I also gave 3 global presentations (to heads of other regions) sharing lessons learned. The playbook is still used today at Huawei LatAm."
        },
        {
          q: "Se você tivesse que escolher apenas uma inovação deste projeto como a mais impactante, qual seria?",
          a: "O 'Integrated Command Center'. Eliminar 12 reuniões semanais criando uma single source of truth foi transformacional. Todos tomavam decisões baseados nos mesmos dados, em tempo real. Isso mudou a cultura de 'reunir para reportar' para 'reunir para resolver'. Foi a simplificação mais poderosa que implementei.",
          q_en: "If you had to choose just one innovation from this project as the most impactful, which would it be?",
          a_en: "The 'Integrated Command Center.' Eliminating 12 weekly meetings by creating a single source of truth was transformational. Everyone made decisions based on the same data, in real-time. This changed the culture from 'meeting to report' to 'meeting to solve.' It was the most powerful simplification I implemented."
        }
      ]
    },
    {
      id: "bradesco-next-compliance-simplification",
      title: "Simplificação do Processo de Compliance KYC/AML de 45 para 7 Dias no Lançamento do Next",
      title_pt: "Simplificação do Processo de Compliance KYC/AML de 45 para 7 Dias no Lançamento do Next",
      title_en: "Simplification of KYC/AML Compliance Process from 45 to 7 Days in Next Launch",
      company: "Bradesco",
      period: "01/2017-12/2017",
      isTopCase: false,
      pt: {
        s: "Quando assumi a missão de lançar o Next, o maior desafio não era apenas tecnológico, mas cultural e processual. O processo de compliance de KYC e AML, essencial para o lançamento, demorava em média 45 dias para aprovação devido à complexidade regulatória e falta de integração entre áreas. Isso era incompatível com o prazo de 12 meses para lançamento do banco digital. As squads ágeis ficavam bloqueadas aguardando aprovações que dependiam de interpretações manuais de 47 regras diferentes do BACEN, cada uma com subdivisões e exceções.",
        t: "Meu papel individual: eu liderei end-to-end, defini escopo e decisões críticas, e atuei como owner único. Minha responsabilidade era inventar uma abordagem que simplificasse drasticamente esse processo sem comprometer a conformidade regulatória. Precisávamos reduzir o tempo de compliance para menos de 7 dias, permitindo que as squads avançassem sem bloqueios. A meta que estabeleci foi mais ambiciosa: criar um modelo replicável que pudesse ser usado em outros produtos digitais do Bradesco.",
        a: "Nota de contexto: conectei as mudanças a operações de pagamento onde cabia (ex.: conciliação/settlement, antifraude, SLA de liquidação). Ações pessoais: priorizei mudanças, alinhei stakeholders, tomei decisões de trade-off e removi bloqueios. Trabalhei diretamente com a equipe de compliance para traduzir as 47 regras regulatórias complexas em user stories acionáveis, com critérios de aceite claros. Por exemplo, a regra 'Clientes PEP precisam de análise aprofundada' se tornou: 'COMO analista, EU QUERO que o sistema sinalize automaticamente clientes PEP PARA QUE eu possa aplicar due diligence apropriada em <2h'. Isso eliminou ambiguidades e reduziu a necessidade de reuniões intermináveis para alinhamento. Criei um mecanismo visual de rastreamento no Jira, que integrava squads de produto e compliance em um único fluxo. Cada user story tinha status claro: 'Em Análise', 'Aprovada', 'Precisa Ajuste', eliminando o telefone sem fio. A maior inovação foi automatizar 30% das verificações regulatórias usando APIs de parceiros externos: Validação de identidade (Serasa), Screening de sanções (Dow Jones Risk Center), Verificação de PEP (Bureau van Dijk). Isso transformou processos manuais de 5-8 dias em validações automáticas de 5-10 minutos. Para os 70% restantes que precisavam de julgamento humano, criei um 'Decision Tree' digital que guiava os analistas através das regras complexas com perguntas simples de sim/não. Cofundei a 'Comunidade Ágil @ InovaBra' como um ecossistema de baixo custo, liderado por funcionários, para escalar essa mentalidade de simplificação. Isso incluía workshops quinzenais, um Slack interno e um 'Innovation Day' trimestral onde equipes apresentavam suas simplificações.",
        r: "Reduzimos o tempo médio de aprovação de compliance de 45 dias para 7 dias, um corte de 84%. Isso liberou capacidade significativa nas squads e garantiu que o Next fosse lançado em 12 meses, um marco para o setor. Métricas específicas: Taxa de aprovação automática: 30% (vs. 0% antes), Tempo médio para aprovação manual: 4.2 dias (vs. 32 dias antes), Redução de reuniões de alinhamento: 78% (de 18 para 4 por semana). A abordagem de simplificação foi replicada em outros processos de compliance no Bradesco: Abertura de conta PF (45→12 dias), Produtos de investimento (30→8 dias), Cartão de crédito (21→5 dias). Isso gerou uma economia estimada de R$ 8.5M/ano em custo operacional. A 'Comunidade Ágil' cresceu para 340+ membros e se tornou o mecanismo oficial de transformação cultural do banco. O modelo foi apresentado no FEBRABAN como case de 'Regulatory Innovation'.",
        l: "Aprendi que a simplificação mais impactante vem de traduzir complexidade técnica em mecanismos claros e acionáveis. Transformar compliance de um bloqueio em um facilitador foi uma das inovações organizacionais mais importantes que implementei. Isso demonstrou que simplificar processos críticos é o que permite resultados extraordinários em prazos desafiadores. A chave foi entender que regulamentação não é inimiga da agilidade - é sobre traduzi-la em linguagem operacional que as equipes possam executar com confiança."
      },
      en: {
        s: "When I took on the mission to launch Next, the biggest challenge wasn't just technological, but cultural and procedural. The KYC and AML compliance process, essential for launch, took an average of 45 days for approval due to regulatory complexity and lack of integration between areas. This was incompatible with the 12-month deadline for launching the digital bank. Agile squads were blocked waiting for approvals that depended on manual interpretations of 47 different BACEN rules, each with subdivisions and exceptions.",
        t: "My individual role: I led end-to-end, set scope and critical decisions, and acted as the single-threaded owner. My responsibility was to invent an approach that would drastically simplify this process without compromising regulatory compliance. I needed to reduce compliance time to less than 7 days, allowing squads to advance without blockages. The goal I established was more ambitious: create a replicable model that could be used in other Bradesco digital products.",
        a: "Context note: I tied changes to payment operations when applicable (e.g., reconciliation/settlement, fraud prevention, settlement SLA). Personal actions: I drove execution—prioritized changes, aligned stakeholders, made trade-offs, and unblocked teams. I worked directly with the compliance team to translate the 47 complex regulatory rules into actionable user stories, with clear acceptance criteria. For example, the rule 'PEP clients need in-depth analysis' became: 'AS analyst, I WANT the system to automatically flag PEP clients SO THAT I can apply appropriate due diligence in <2h'. This eliminated ambiguities and reduced the need for endless alignment meetings. I created a visual tracking mechanism in Jira, which integrated product and compliance squads into a single flow. Each user story had clear status: 'Under Analysis', 'Approved', 'Needs Adjustment', eliminating the telephone game. The biggest innovation was automating 30% of regulatory verifications using external partner APIs: Identity validation (Serasa), Sanctions screening (Dow Jones Risk Center), PEP verification (Bureau van Dijk). This transformed manual processes of 5-8 days into automatic validations of 5-10 minutes. For the remaining 70% that needed human judgment, I created a digital 'Decision Tree' that guided analysts through complex rules with simple yes/no questions. I co-founded the 'Agile Community @ InovaBra' as a low-cost, employee-led ecosystem to scale this simplification mindset. This included biweekly workshops, an internal Slack, and a quarterly 'Innovation Day' where teams presented their simplifications.",
        r: "I reduced average compliance approval time from 45 days to 7 days, an 84% cut. This freed up significant capacity in squads and ensured Next was launched in 12 months, a milestone for the sector. Specific metrics: Automatic approval rate: 30% (vs. 0% before), Average time for manual approval: 4.2 days (vs. 32 days before), Reduction in alignment meetings: 78% (from 18 to 4 per week). The simplification approach was replicated in other Bradesco compliance processes: Individual account opening (45→12 days), Investment products (30→8 days), Credit card (21→5 days). This generated an estimated savings of R$ 8.5M/year in operational cost. The 'Agile Community' grew to 340+ members and became the bank's official cultural transformation mechanism. The model was presented at FEBRABAN as a 'Regulatory Innovation' case.",
        l: "I learned that the most impactful simplification comes from translating technical complexity into clear and actionable mechanisms. Transforming compliance from a blocker into a facilitator was one of the most important organizational innovations I implemented. This demonstrated that simplifying critical processes is what enables extraordinary results in challenging deadlines. The key was understanding that regulation isn't the enemy of agility - it's about translating it into operational language that teams can execute with confidence."
      },
      
      pitch: {
        pt: {
          hook: "“Compliance KYC/AML levava 45 dias e travava o lançamento do Next. Eu simplifiquei para 7 dias sem perder conformidade.”",
          flow: [
            {"t":"0:00–0:30","label":"Abertura","script":"Hook + stakes: por que este problema era intolerável e o que aconteceria se nada fosse feito."},
            {"t":"0:30–1:30","label":"S (Situação)","script":"Contexto objetivo, volumes, SLAs e variabilidade."},
            {"t":"1:30–2:15","label":"T (Tarefa)","script":"Qual missão eu assumi pessoalmente e a meta mensurável que defini."},
            {"t":"2:15–5:30","label":"A (Ações)","script":"3–5 decisões de arquitetura/processo que eu tomei; trade‑offs; como alinhei stakeholders."},
            {"t":"5:30–7:30","label":"R (Resultados)","script":"Métricas antes/depois com baseline e benchmarks; efeito nos principais KPIs."},
            {"t":"7:30–9:00","label":"L (Learnings)","script":"O que ficou de mecanismo replicável e como isso escala para payments/fintech."},
            {"t":"9:00–10:00","label":"Mic‑drop","script":"Fecho com um número/efeito incontestável + convite à pergunta crítica."}
          ],
          transitions: [
            "“Dado esse contexto, eu assumi uma meta agressiva…”",
            "“Para chegar lá, eu precisei tomar três decisões difíceis…”",
            "“O efeito disso foi mensurável nos KPIs que importavam…”",
            "“E isso virou mecanismo, não heroísmo pontual…”"
          ],
          mic_drop: "“84% de redução e R$8,5M/ano em eficiência — replicado em 8 produtos.”"
        },
        en: {
          hook: "“KYC/AML compliance took 45 days and blocked Next’s launch. I simplified it to 7 days without losing compliance.”",
          flow: [
            {"t":"0:00–0:30","label":"Opening","script":"Hook + stakes: why the problem was intolerable and what would happen if nothing changed."},
            {"t":"0:30–1:30","label":"S (Situation)","script":"Objective context, volumes, SLAs, variability."},
            {"t":"1:30–2:15","label":"T (Task)","script":"The mission I personally owned and the measurable target I set."},
            {"t":"2:15–5:30","label":"A (Actions)","script":"3–5 architectural/process decisions I made; trade‑offs; how I aligned stakeholders."},
            {"t":"5:30–7:30","label":"R (Results)","script":"Before/after metrics with baselines and benchmarks; impact on core KPIs."},
            {"t":"7:30–9:00","label":"L (Learnings)","script":"What became a repeatable mechanism and how it scales to payments/fintech."},
            {"t":"9:00–10:00","label":"Mic‑drop","script":"Close with a hard number/effect + invite the toughest question."}
          ],
          transitions: [
            "“Given that context, I set an aggressive target…”",
            "“To get there, I made three hard decisions…”",
            "“The effect was measurable on the KPIs that matter…”",
            "“And this became a mechanism, not one‑off heroics…”"
          ],
          mic_drop: "“84% reduction and R$8.5M/year efficiency — replicated across 8 products.”"
        }
      },
fups: [
        {
          q: "Como você identificou os principais pontos de ineficiência no processo de compliance e priorizou as mudanças?",
          a: "Fiz um mapeamento detalhado (Value Stream Map) de todo o processo de compliance, cronometrando cada etapa durante 2 semanas. Descobri que 65% do tempo estava em 'hand-offs' entre áreas e retrabalho por falta de clareza. Priorizei mudanças que eliminassem esses hand-offs: integração Jira (eliminou 12 hand-offs), APIs automáticas (eliminou 5 hand-offs manuais), e Decision Tree (eliminou 80% das consultas ad-hoc).",
          q_en: "How did you identify the main inefficiency points in the compliance process and prioritize changes?",
          a_en: "I did a detailed mapping (Value Stream Map) of the entire compliance process, timing each step for 2 weeks. I discovered that 65% of time was in 'hand-offs' between areas and rework due to lack of clarity. I prioritized changes that eliminated these hand-offs: Jira integration (eliminated 12 hand-offs), automatic APIs (eliminated 5 manual hand-offs), and Decision Tree (eliminated 80% of ad-hoc consultations)."
        },
        {
          q: "Quais foram os maiores desafios ao traduzir as regras de KYC e AML em user stories, e como você os superou?",
          a: "O maior desafio foi que muitas regras eram 'interpretativas' - dependiam do julgamento do analista. Por exemplo, 'risco elevado' não tinha definição clara. Criei workshops com 8 analistas seniores para transformar julgamento subjetivo em critérios objetivos. 'Risco elevado' virou: 'Cliente com >R$ 50k/mês, setor de alto risco, ou 3+ transferências internacionais/mês'. Isso permitiu criar user stories específicas e testáveis.",
          q_en: "What were the biggest challenges in translating KYC and AML rules into user stories, and how did you overcome them?",
          a_en: "The biggest challenge was that many rules were 'interpretative' - they depended on analyst judgment. For example, 'high risk' had no clear definition. I created workshops with 8 senior analysts to transform subjective judgment into objective criteria. 'High risk' became: 'Client with >R$ 50k/month, high-risk sector, or 3+ international transfers/month'. This allowed creating specific and testable user stories."
        },
        {
          q: "Como você garantiu que a automação das verificações regulatórias mantivesse a conformidade com todas as exigências legais?",
          a: "Trabalhei lado a lado com a área jurídica para criar um 'Compliance by Design'. Cada API automatizada tinha que passar por 3 validações: 1) Compliance (a regra está sendo aplicada corretamente?), 2) Jurídico (há risco legal?), 3) Auditoria (há rastreabilidade?). Criamos logs detalhados de cada decisão automática e um processo de amostragem onde 5% das aprovações automáticas eram revisadas manualmente para garantir qualidade.",
          q_en: "How did you ensure that automation of regulatory verifications maintained compliance with all legal requirements?",
          a_en: "I worked side by side with the legal area to create 'Compliance by Design.' Each automated API had to pass 3 validations: 1) Compliance (is the rule being applied correctly?), 2) Legal (is there legal risk?), 3) Audit (is there traceability?). I created detailed logs of each automatic decision and a sampling process where 5% of automatic approvals were manually reviewed to ensure quality."
        },
        {
          q: "Após o lançamento do Next, como o modelo de compliance simplificado foi adaptado e replicado em outros programas do Bradesco?",
          a: "O sucesso criou uma 'onda' de adoção. Criei um 'Simplification Playbook' de 23 páginas com templates de user stories, Decision Trees e métricas de sucesso. Treinei 12 'Simplification Champions' em outras áreas que replicaram a metodologia. O modelo foi adaptado considerando as especificidades: PF tinha mais validações automáticas (70% vs. 30%), investimentos tinham Decision Trees mais complexas. Em 18 meses, 8 produtos diferentes usavam a metodologia.",
          q_en: "After Next's launch, how was the simplified compliance model adapted and replicated in other Bradesco programs?",
          a_en: "Success created an 'adoption wave.' I created a 23-page 'Simplification Playbook' with user story templates, Decision Trees, and success metrics. I trained 12 'Simplification Champions' in other areas who replicated the methodology. The model was adapted considering specificities: Individual customers had more automatic validations (70% vs. 30%), investments had more complex Decision Trees. In 18 months, 8 different products used the methodology."
        },
        {
          q: "Como você mediu o impacto da Comunidade Ágil no desempenho das squads e na entrega do Next?",
          a: "Criei métricas específicas para a Comunidade: 1) Adoption Rate (% de squads usando práticas ágeis), 2) Lead Time (tempo médio de feature), 3) Innovation Index (# de simplificações implementadas por trimestre). No Next especificamente: Lead time reduziu de 6.2 para 2.8 semanas (55% melhoria), Deployment frequency aumentou de semanal para diário, e o team NPS subiu de 6.2 para 8.1. A correlação entre participação na Comunidade e performance das squads era clara.",
          q_en: "How did you measure the impact of the Agile Community on squad performance and Next delivery?",
          a_en: "I created specific metrics for the Community: 1) Adoption Rate (% of squads using agile practices), 2) Lead Time (average feature time), 3) Innovation Index (# of simplifications implemented per quarter). For Next specifically: Lead time reduced from 6.2 to 2.8 weeks (55% improvement), Deployment frequency increased from weekly to daily, and team NPS rose from 6.2 to 8.1. The correlation between Community participation and squad performance was clear."
        },
        {
          q: "Qual foi a maior resistência que você enfrentou e como a superou?",
          a: "A maior resistência veio de analistas seniores de compliance que temiam perder relevância com a automação. Mudei a narrativa: em vez de 'substituir', posicionei como 'elevar' - eles deixariam de fazer trabalho repetitivo para focar em casos complexos e interessantes. Mostrei que analistas usando o novo modelo analisavam 3x mais casos e reportavam maior satisfação no trabalho. A resistência virou advocacy.",
          q_en: "What was the biggest resistance you faced and how did you overcome it?",
          a_en: "The biggest resistance came from senior compliance analysts who feared losing relevance with automation. I changed the narrative: instead of 'replace,' I positioned it as 'elevate' - they would stop doing repetitive work to focus on complex and interesting cases. I showed that analysts using the new model analyzed 3x more cases and reported higher job satisfaction. Resistance turned into advocacy."
        },
        {
          q: "Como você garantiu que o Decision Tree digital fosse eficaz e não criasse novos gargalos?",
          a: "Testei o Decision Tree com 15 casos reais históricos, cronometrando o tempo que analistas levavam para tomar decisões. O modelo inicial tinha 23 perguntas e demorava 45 minutos. Simplifiquei para 12 perguntas essenciais, reduzindo para 15 minutos. Mais importante: incluí links para documentação e precedentes em cada pergunta, transformando o Tree também em ferramenta de treinamento.",
          q_en: "How did you ensure the digital Decision Tree was effective and didn't create new bottlenecks?",
          a_en: "I tested the Decision Tree with 15 real historical cases, timing how long analysts took to make decisions. The initial model had 23 questions and took 45 minutes. I simplified to 12 essential questions, reducing to 15 minutes. More importantly: I included links to documentation and precedents in each question, transforming the Tree into a training tool as well."
        },
        {
          q: "Se você tivesse mais 3 meses no projeto, o que faria diferente ou melhor?",
          a: "Teria investido mais tempo em Machine Learning para os 70% de casos que ainda precisavam de análise manual. Durante o projeto, focamos em automação baseada em regras (APIs), mas casos mais complexos poderiam se beneficiar de ML para scoring de risco. Com 3 meses extras, teria treinado um modelo básico usando 2 anos de decisões históricas. Isso poderia aumentar a automação de 30% para 50-60%.",
          q_en: "If you had 3 more months on the project, what would you do differently or better?",
          a_en: "I would have invested more time in Machine Learning for the 70% of cases that still needed manual analysis. During the project, I focused on rule-based automation (APIs), but more complex cases could benefit from ML for risk scoring. With 3 extra months, I would have trained a basic model using 2 years of historical decisions. This could increase automation from 30% to 50-60%."
        },
        {
          q: "Como a experiência de simplificar compliance mudou sua abordagem para outros projetos?",
          a: "Mudou completamente minha filosofia. Antes, eu tentava otimizar processos existentes. Depois dessa experiência, sempre pergunto: 'Esse processo precisa existir?' Aprendi que a melhor otimização é a eliminação. Em projetos subsequentes, sempre começo com 'zero-based thinking' - reconstruindo do zero em vez de incrementar. Essa mentalidade me poupou meses de trabalho desnecessário em vários projetos.",
          q_en: "How did the experience of simplifying compliance change your approach to other projects?",
          a_en: "It completely changed my philosophy. Before, I tried to optimize existing processes. After this experience, I always ask: 'Does this process need to exist?' I learned that the best optimization is elimination. In subsequent projects, I always start with 'zero-based thinking' - rebuilding from scratch instead of incrementing. This mindset saved me months of unnecessary work on several projects."
        },
        {
          q: "Qual conselho você daria para alguém tentando simplificar processos regulatórios em outros bancos?",
          a: "Três pontos críticos: 1) Comece com compliance como parceiro, não oponente - eles querem que o processo funcione tanto quanto você, 2) Traduza regras em critérios testáveis - se não pode ser testado, não pode ser automatizado, 3) Implemente em waves - comece com 1-2 regras simples, prove o valor, depois escale. O maior erro é tentar automatizar tudo de uma vez. Regulamentação é como código legacy - refatore gradualmente, não reescreva tudo.",
          q_en: "What advice would you give someone trying to simplify regulatory processes in other banks?",
          a_en: "Three critical points: 1) Start with compliance as partner, not opponent - they want the process to work as much as you do, 2) Translate rules into testable criteria - if it can't be tested, it can't be automated, 3) Implement in waves - start with 1-2 simple rules, prove value, then scale. The biggest mistake is trying to automate everything at once. Regulation is like legacy code - refactor gradually, don't rewrite everything."
        }
      ]
    },
    {
      id: "unimed-ai-authorization",
      title: "Invenção de Sistema de Autorização Médica com IA que Automatizou 80% das Decisões",
      title_pt: "Invenção de Sistema de Autorização Médica com IA que Automatizou 80% das Decisões",
      title_en: "Invention of AI Medical Authorization System that Automated 80% of Decisions",
      company: "Unimed",
      period: "03/2022-11/2022",
      isTopCase: false,
      pt: {
        s: "O processo de autorização de procedimentos médicos na Unimed era um gargalo crítico: 847 solicitações/dia processadas por 12 analistas, com tempo médio de resposta de 4.8 dias. Isso gerava insatisfação massiva dos beneficiários (NPS 31) e custos operacionais altos (R$ 2.1M/ano só em pessoal). O problema não era volume, mas complexidade: cada analista precisava revisar histórico médico, cruzar com diretrizes clínicas, verificar cobertura do plano, e tomar uma decisão. 67% das aprovações eram 'óbvias' (casos simples dentro da cobertura), mas o processo tratava tudo com a mesma rigidez.",
        t: "Meu papel individual: eu liderei end-to-end, defini escopo e decisões críticas, e atuei como owner único. Minha responsabilidade era inventar uma solução que simplificasse drasticamente esse processo sem comprometer a qualidade médica. A meta que estabeleci foi automatizar 80% das decisões simples, reduzindo o tempo de resposta para <24h nos casos automáticos e liberando analistas para focar nos 20% genuinamente complexos.",
        a: "Ações pessoais: priorizei mudanças, alinhei stakeholders, tomei decisões de trade-off e removi bloqueios. Propus uma invenção: usar Machine Learning para replicar o processo de decisão dos analistas mais experientes. A escolha pela IA foi estratégica porque o problema não era a tarefa (revisar documentos), era o julgamento (decidir se aprova ou não). O ML poderia aprender os padrões sutis por trás das decisões históricas e replicá-los em escala. Trabalhei com a equipe de dados para treinar um modelo usando 2 anos de decisões históricas (180k casos) como dataset de treinamento. Features principais: tipo de procedimento, valor, histórico do beneficiário, médico solicitante, CID-10, urgência. O modelo alcançou 94.7% de acurácia em validação cruzada, comparável aos analistas seniores (95.1%). Desenhei o 'Painel de Confiabilidade' - um dashboard simples que, para cada decisão automática, mostrava as 3 principais variáveis que a influenciaram (ex: 'Procedimento de rotina + Médico credenciado + Histórico limpo'). Isso foi crucial para ganhar confiança dos gestores e permitir auditoria. A arquitetura híbrida que criei processava 80% dos casos automaticamente (decisões de alta confiança) e direcionava os 20% restantes (casos complexos ou borderline) para revisão humana. Implementei safeguards: decisões automáticas tinham limite de valor (max R$ 5k), casos urgentes sempre iam para humanos, e havia um 'circuit breaker' que parava a automação se a taxa de erro subisse acima de 2%.",
        r: "O sistema automatizou 82% das autorizações, superando a meta de 80%. Tempo médio de resposta: Casos automáticos: 4.2 horas (vs. 4.8 dias antes), Casos complexos: 2.1 dias (vs. 4.8 dias antes - analistas agora tinham mais tempo). Taxa de acurácia: 94.1% (vs. meta de 90%). NPS de autorização subiu de 31 para 67 (+36 pontos). Economia operacional: R$ 1.2M/ano (redução de 6 FTEs), mais R$ 800k/ano em satisfação/retenção de beneficiários. O modelo foi tão eficaz que foi expandido para outras modalidades: Autorização de exames (71% automação), Reembolsos (65% automação), Pré-autorização de cirurgias eletivas (45% automação - mais conservadora por complexidade). Recebi o 'Prêmio Inovação em Saúde Digital 2023' da ANS por criar o primeiro sistema de IA para autorizações médicas no Brasil.",
        l: "Aprendi que a melhor automação não substitui julgamento humano, mas o amplifica. O 'Painel de Confiabilidade' foi a inovação mais importante - não apenas automatizamos decisões, mas tornamos o processo transparente e auditável. Meu papel como líder foi inventar não apenas a solução técnica, mas o modelo operacional e de governança que a tornaram simples, confiável e escalável. Este mesmo princípio de 'simplificar via automação inteligente' aplica-se perfeitamente a payment operations. Por exemplo: processos de KYC/AML review que hoje levam horas e dependem de julgamento humano poderiam ser simplificados com ML para aprovar automaticamente 70-80% dos casos de baixo risco, liberando analistas para focar nos 20% genuinamente complexos - exatamente o padrão que implementei aqui."
      },
      en: {
        s: "The medical procedure authorization process at Unimed was a critical bottleneck: 847 requests/day processed by 12 analysts, with average response time of 4.8 days. This generated massive beneficiary dissatisfaction (NPS 31) and high operational costs (R$ 2.1M/year in personnel alone). The problem wasn't volume, but complexity: each analyst needed to review medical history, cross-reference with clinical guidelines, verify plan coverage, and make a decision. 67% of approvals were 'obvious' (simple cases within coverage), but the process treated everything with the same rigidity.",
        t: "My individual role: I led end-to-end, set scope and critical decisions, and acted as the single-threaded owner. My responsibility was to invent a solution that would drastically simplify this process without compromising medical quality. The goal I established was to automate 80% of simple decisions, reducing response time to <24h in automatic cases and freeing analysts to focus on the 20% genuinely complex.",
        a: "Personal actions: I drove execution—prioritized changes, aligned stakeholders, made trade-offs, and unblocked teams. I proposed an invention: use Machine Learning to replicate the decision process of the most experienced analysts. The choice for AI was strategic because the problem wasn't the task (reviewing documents), it was judgment (deciding whether to approve or not). ML could learn the subtle patterns behind historical decisions and replicate them at scale. I worked with the data team to train a model using 2 years of historical decisions (180k cases) as training dataset. Main features: procedure type, value, beneficiary history, requesting doctor, ICD-10, urgency. The model achieved 94.7% accuracy in cross-validation, comparable to senior analysts (95.1%). I designed the 'Confidence Panel' - a simple dashboard that, for each automatic decision, showed the 3 main variables that influenced it (e.g., 'Routine procedure + Accredited doctor + Clean history'). This was crucial for gaining manager confidence and enabling auditing. The hybrid architecture I created processed 80% of cases automatically (high confidence decisions) and directed the remaining 20% (complex or borderline cases) to human review. I implemented safeguards: automatic decisions had value limits (max R$ 5k), urgent cases always went to humans, and there was a 'circuit breaker' that stopped automation if error rate rose above 2%.",
        r: "The system automated 82% of authorizations, exceeding the 80% target. Average response time: Automatic cases: 4.2 hours (vs. 4.8 days before), Complex cases: 2.1 days (vs. 4.8 days before - analysts now had more time). Accuracy rate: 94.1% (vs. 90% target). Authorization NPS rose from 31 to 67 (+36 points). Operational savings: R$ 1.2M/year (6 FTE reduction), plus R$ 800k/year in beneficiary satisfaction/retention. The model was so effective it was expanded to other modalities: Exam authorization (71% automation), Reimbursements (65% automation), Elective surgery pre-authorization (45% automation - more conservative due to complexity). I received the '2023 Digital Health Innovation Award' from ANS for creating Brazil's first AI system for medical authorizations.",
        l: "I learned that the best automation doesn't replace human judgment, but amplifies it. The 'Confidence Panel' was the most important innovation - I not only automated decisions, but made the process transparent and auditable. My role as leader was to invent not just the technical solution, but the operational and governance model that made it simple, reliable and scalable. This same principle of 'simplifying via intelligent automation' applies perfectly to payment operations. For example: KYC/AML review processes that today take hours and depend on human judgment could be simplified with ML to automatically approve 70-80% of low-risk cases, freeing analysts to focus on the 20% genuinely complex - exactly the pattern I implemented here."
      },
      
      pitch: {
        pt: {
          hook: "“Autorizações médicas levavam 4,8 dias. Eu criei um motor de decisão com IA que decidiu 80% dos casos em horas.”",
          flow: [
            {"t":"0:00–0:30","label":"Abertura","script":"Hook + stakes: por que este problema era intolerável e o que aconteceria se nada fosse feito."},
            {"t":"0:30–1:30","label":"S (Situação)","script":"Contexto objetivo, volumes, SLAs e variabilidade."},
            {"t":"1:30–2:15","label":"T (Tarefa)","script":"Qual missão eu assumi pessoalmente e a meta mensurável que defini."},
            {"t":"2:15–5:30","label":"A (Ações)","script":"3–5 decisões de arquitetura/processo que eu tomei; trade‑offs; como alinhei stakeholders."},
            {"t":"5:30–7:30","label":"R (Resultados)","script":"Métricas antes/depois com baseline e benchmarks; efeito nos principais KPIs."},
            {"t":"7:30–9:00","label":"L (Learnings)","script":"O que ficou de mecanismo replicável e como isso escala para payments/fintech."},
            {"t":"9:00–10:00","label":"Mic‑drop","script":"Fecho com um número/efeito incontestável + convite à pergunta crítica."}
          ],
          transitions: [
            "“Dado esse contexto, eu assumi uma meta agressiva…”",
            "“Para chegar lá, eu precisei tomar três decisões difíceis…”",
            "“O efeito disso foi mensurável nos KPIs que importavam…”",
            "“E isso virou mecanismo, não heroísmo pontual…”"
          ],
          mic_drop: "“82% de automação, NPS +36 p.p., e economia de R$2M/ano.”"
        },
        en: {
          hook: "“Medical authorizations took 4.8 days. I built an AI decision engine that handled 80% of cases in hours.”",
          flow: [
            {"t":"0:00–0:30","label":"Opening","script":"Hook + stakes: why the problem was intolerable and what would happen if nothing changed."},
            {"t":"0:30–1:30","label":"S (Situation)","script":"Objective context, volumes, SLAs, variability."},
            {"t":"1:30–2:15","label":"T (Task)","script":"The mission I personally owned and the measurable target I set."},
            {"t":"2:15–5:30","label":"A (Actions)","script":"3–5 architectural/process decisions I made; trade‑offs; how I aligned stakeholders."},
            {"t":"5:30–7:30","label":"R (Results)","script":"Before/after metrics with baselines and benchmarks; impact on core KPIs."},
            {"t":"7:30–9:00","label":"L (Learnings)","script":"What became a repeatable mechanism and how it scales to payments/fintech."},
            {"t":"9:00–10:00","label":"Mic‑drop","script":"Close with a hard number/effect + invite the toughest question."}
          ],
          transitions: [
            "“Given that context, I set an aggressive target…”",
            "“To get there, I made three hard decisions…”",
            "“The effect was measurable on the KPIs that matter…”",
            "“And this became a mechanism, not one‑off heroics…”"
          ],
          mic_drop: "“82% automation, +36‑pt NPS, and R$2M/year savings.”"
        }
      },
fups: [
        {
          q: "Como você lidou com a resistência inicial da equipe ao adotar o Machine Learning para decisões críticas?",
          a: "A resistência foi natural - analistas temiam ser substituídos. Mudei a narrativa: posicionei o ML como 'seu assistente inteligente', não 'seu substituto'. Mostrei que eles deixariam de analisar casos óbvios (chatos) para focar em casos complexos (interessantes). Implementei em paralelo por 30 dias - analistas viam as decisões do ML e comparavam com as suas. Quando viram 94% de concordância, a resistência virou curiosidade.",
          q_en: "How did you handle initial team resistance to adopting Machine Learning for critical decisions?",
          a_en: "Resistance was natural - analysts feared being replaced. I changed the narrative: positioned ML as 'your intelligent assistant,' not 'your replacement.' I showed they would stop analyzing obvious cases (boring) to focus on complex cases (interesting). I implemented in parallel for 30 days - analysts saw ML decisions and compared with theirs. When they saw 94% agreement, resistance turned to curiosity."
        },
        {
          q: "Quais métricas específicas foram usadas para medir a eficácia do modelo de Machine Learning e como você garantiu sua precisão?",
          a: "Usei 4 métricas: 1) Accuracy (94.7%), 2) Precision para aprovações (96.2%), 3) Recall para negações (91.8%), e 4) F1-score balanceado (94.1%). Para garantir precisão: Validação cruzada com 5 folds, Teste A/B com 1000 casos reais em paralelo, Revisão mensal com amostra aleatória de 500 decisões automáticas. Se qualquer métrica caísse abaixo de 90%, o modelo era retreinado automaticamente.",
          q_en: "What specific metrics were used to measure ML model effectiveness and how did you ensure its accuracy?",
          a_en: "I used 4 metrics: 1) Accuracy (94.7%), 2) Precision for approvals (96.2%), 3) Recall for denials (91.8%), and 4) Balanced F1-score (94.1%). To ensure precision: Cross-validation with 5 folds, A/B testing with 1000 real cases in parallel, Monthly review with random sample of 500 automatic decisions. If any metric fell below 90%, the model was automatically retrained."
        },
        {
          q: "Que desafios você enfrentou ao criar o 'Painel de Confiabilidade' e como garantiu que ele fosse intuitivo para os gestores?",
          a: "O maior desafio foi traduzir 'feature importance' técnica em linguagem de negócio. Gestores não entendiam 'coeficiente 0.73 para procedure_type'. Criei narrativas: 'Esta aprovação foi baseada em: Procedimento de rotina (peso alto), Médico credenciado (peso médio), Histórico limpo (peso baixo)'. Testei com 5 gestores, cronometrei quanto tempo levavam para entender, e iteramos até ficar intuitivo em <30 segundos.",
          q_en: "What challenges did you face creating the 'Confidence Panel' and how did you ensure it was intuitive for managers?",
          a_en: "The biggest challenge was translating technical 'feature importance' into business language. Managers didn't understand 'coefficient 0.73 for procedure_type.' I created narratives: 'This approval was based on: Routine procedure (high weight), Accredited doctor (medium weight), Clean history (low weight).' I tested with 5 managers, timed how long they took to understand, and iterated until it was intuitive in <30 seconds."
        },
        {
          q: "Após a implementação, como você garantiu que o modelo de ML continuasse relevante e atualizado com novos dados e padrões?",
          a: "Implementei 'Continuous Learning': O modelo era retreinado automaticamente a cada 3 meses com novos dados, Monitoramento de 'drift' - se distribuição de features mudasse >10%, alertava para investigação, Feedback loop - quando analistas discordavam de uma decisão automática, isso virava dado de treino. Mais importante: criei um comitê médico que revisava mensalmente se as diretrizes clínicas mudaram, ajustando regras de negócio quando necessário.",
          q_en: "After implementation, how did you ensure the ML model remained relevant and updated with new data and patterns?",
          a_en: "I implemented 'Continuous Learning': Model was automatically retrained every 3 months with new data, 'Drift' monitoring - if feature distribution changed >10%, it alerted for investigation, Feedback loop - when analysts disagreed with automatic decisions, this became training data. Most importantly: I created a medical committee that monthly reviewed if clinical guidelines changed, adjusting business rules when necessary."
        },
        {
          q: "Esse modelo de simplificação e automação foi replicado em outros processos da Unimed? Se sim, como você contribuiu para a escalabilidade?",
          a: "Sim, totalmente. Criei um 'AI Playbook' de 31 páginas com metodologia step-by-step: Como identificar processos candidatos (volume alto + decisões repetitivas), Como preparar dados (qualidade + quantidade), Como treinar modelos (features + validation), Como implementar safeguards (limits + monitoring). Treinei 6 'AI Champions' em outras áreas. Em 18 meses, 4 processos diferentes usavam variações do modelo. A chave foi criar templates e metodologia replicável, não apenas tecnologia.",
          q_en: "Was this simplification and automation model replicated in other Unimed processes? If so, how did you contribute to scalability?",
          a_en: "Yes, completely. I created a 31-page 'AI Playbook' with step-by-step methodology: How to identify candidate processes (high volume + repetitive decisions), How to prepare data (quality + quantity), How to train models (features + validation), How to implement safeguards (limits + monitoring). I trained 6 'AI Champions' in other areas. In 18 months, 4 different processes used model variations. The key was creating replicable templates and methodology, not just technology."
        },
        {
          q: "Como você balanceou automação com supervisão humana para manter qualidade e compliance?",
          a: "Criei uma 'Governance Matrix': Decisões automáticas tinham limites claros (valor, urgência, complexidade), Casos borderline (confidence <85%) sempre iam para humanos, Auditoria aleatória de 5% das decisões automáticas por analistas seniores, Escalação automática se taxa de erro subisse >2% em qualquer semana. O compliance foi 'by design' - cada safeguard era aprovado pela área médica e jurídica antes de implementar.",
          q_en: "How did you balance automation with human oversight to maintain quality and compliance?",
          a_en: "I created a 'Governance Matrix': Automatic decisions had clear limits (value, urgency, complexity), Borderline cases (confidence <85%) always went to humans, Random audit of 5% of automatic decisions by senior analysts, Automatic escalation if error rate rose >2% in any week. Compliance was 'by design' - each safeguard was approved by medical and legal areas before implementing."
        },
        {
          q: "Qual foi o maior erro ou desafio técnico que você enfrentou na implementação e como resolveu?",
          a: "O maior erro foi assumir que 'accurate model = successful implementation'. Nosso primeiro modelo tinha 96% accuracy, mas estava negando muitos casos que analistas aprovavam, gerando reclamações. Descobri que accuracy não captura 'business impact'. Ajustei o threshold para reduzir falsos negativos (negar um caso que deveria ser aprovado), mesmo que reduzisse accuracy para 94%. Isso melhorou a experiência do beneficiário significativamente.",
          q_en: "What was the biggest mistake or technical challenge you faced in implementation and how did you solve it?",
          a_en: "The biggest mistake was assuming 'accurate model = successful implementation.' Our first model had 96% accuracy, but was denying many cases that analysts approved, generating complaints. I discovered accuracy doesn't capture 'business impact.' I adjusted the threshold to reduce false negatives (denying a case that should be approved), even if it reduced accuracy to 94%. This significantly improved beneficiary experience."
        },
        {
          q: "Como você mediu o ROI e convenceu a diretoria sobre o investimento em IA?",
          a: "Construí um business case claro: Investimento: R$ 450k (desenvolvimento + infraestrutura), Economia anual: R$ 2M (1.2M pessoal + 800k satisfação), ROI: 344% no primeiro ano. Mais importante: mostrei 'time to value' rápido - piloto com 100 casos em 30 dias demonstrou viabilidade. A diretoria viu resultados tangíveis antes de aprovar investimento total. Também comparei com alternativa: contratar 6 analistas adicionais custaria R$ 1.8M/ano sem resolver o problema de velocidade.",
          q_en: "How did you measure ROI and convince the board about AI investment?",
          a_en: "I built a clear business case: Investment: R$ 450k (development + infrastructure), Annual savings: R$ 2M (1.2M personnel + 800k satisfaction), ROI: 344% in first year. More importantly: I showed fast 'time to value' - pilot with 100 cases in 30 days demonstrated viability. The board saw tangible results before approving total investment. I also compared with alternative: hiring 6 additional analysts would cost R$ 1.8M/year without solving the speed problem."
        },
        {
          q: "Se você fosse implementar este sistema numa empresa de payment operations, o que adaptaria?",
          a: "Adaptaria o modelo para decisões de risco: KYC approval (baixo risco = automático, alto risco = humano), Transaction monitoring (padrão normal = passa, suspeito = análise), Merchant onboarding (documentação completa + baixo risco = aprovação automática). A metodologia seria a mesma: treinar com decisões históricas, criar confidence thresholds, implementar safeguards. A maior diferença seria speed - payments precisam de decisões em segundos, não horas.",
          q_en: "If you were to implement this system in a payment operations company, what would you adapt?",
          a_en: "I'd adapt the model for risk decisions: KYC approval (low risk = automatic, high risk = human), Transaction monitoring (normal pattern = pass, suspicious = analysis), Merchant onboarding (complete documentation + low risk = automatic approval). The methodology would be the same: train with historical decisions, create confidence thresholds, implement safeguards. The biggest difference would be speed - payments need decisions in seconds, not hours."
        },
        {
          q: "Qual foi o impacto na cultura da empresa com a introdução da IA em processos críticos?",
          a: "Mudou a mentalidade de 'automation is threat' para 'automation is opportunity'. Analistas começaram a sugerir outros processos para automatizar. Criamos uma cultura de 'AI-first thinking' - para qualquer processo repetitivo, a primeira pergunta era: 'Podemos automatizar isso?' Isso acelerou inovação em outras áreas e posicionou a Unimed como líder em health tech. O sucesso criou momentum para outros projetos de IA.",
          q_en: "What was the impact on company culture with AI introduction in critical processes?",
          a_en: "It changed the mindset from 'automation is threat' to 'automation is opportunity.' Analysts started suggesting other processes to automate. I created a culture of 'AI-first thinking' - for any repetitive process, the first question was: 'Can I automate this?' This accelerated innovation in other areas and positioned Unimed as a leader in health tech. Success created momentum for other AI projects."
        }
      ]
    },
    {
      id: "unimed-open-innovation",
      title: "Criação do Primeiro Programa de Corporate Venture Capital em Saúde que Reduziu Time-to-Market em 68%",
      title_pt: "Criação do Primeiro Programa de Corporate Venture Capital em Saúde que Reduziu Time-to-Market em 68%",
      title_en: "Creation of First Healthcare Corporate Venture Capital Program that Reduced Time-to-Market by 68%",
      company: "Unimed",
      period: "01/2023-02/2024",
      isTopCase: true,
      pt: {
        s: "A Unimed enfrentava um modelo fechado de inovação que limitava drasticamente a velocidade e a eficácia dos projetos. Com um ciclo médio de 18-24 meses do conceito ao MVP, custos altos (R$ 2M/projeto) e baixa taxa de sucesso (30%), estávamos perdendo market share para operadoras digitais mais ágeis. Um exemplo crítico foi a plataforma de telemedicina, desenvolvida internamente em 22 meses, que chegou ao mercado obsoleta, enquanto healthtechs já lideravam o segmento. O crescimento anual de beneficiários caiu de 8% para 2% nos últimos três anos.",
        t: "Meu papel individual: eu liderei end-to-end, defini escopo e decisões críticas, e atuei como owner único. Minha missão era criar e liderar o primeiro programa estruturado de Corporate Venture Capital (CVC) e Inovação Aberta da Unimed. Precisávamos construir um mecanismo eficiente e técnico para identificar, avaliar e integrar startups ao portfólio, garantindo resultados mensuráveis em 12 meses. A meta que propus foi lançar dois novos produtos via inovação aberta em menos de 12 meses, reduzindo o time-to-market em 50% comparado ao modelo interno.",
        a: "Ações pessoais: priorizei mudanças, alinhei stakeholders, tomei decisões de trade-off e removi bloqueios. Para transformar a abordagem de inovação, desenvolvi um sistema estruturado com três pilares técnicos e estratégicos: 1) **Scoring System para Startups:** Criei um modelo técnico de avaliação com três dimensões principais (Fit Estratégico 40%, Maturidade Tecnológica 35%, Modelo de Negócio 25%) e 15 subcritérios específicos. Por exemplo, 'Fit Estratégico' incluía: alinhamento com roadmap product, complementaridade vs. canibalização, e sinergias com base de beneficiários. Este sistema permitiu priorizar startups com maior potencial de impacto real, evitando desperdício de recursos em POCs de baixo retorno. 2) **Modelo de Execução Rápido:** Estruturei um funil de 3 etapas no programa UNIDEIAS: Screen (30 dias), Prove (60 dias), Scale (90 dias). Cada etapa tinha KPIs claros e budget definido: Screen (até R$ 50k), Prove (até R$ 200k), Scale (até R$ 1M). Isso criou disciplina de capital e urgência de resultados. 3) **Parcerias Estratégicas e CVC Fund:** Negociei pessoalmente contratos com startups como MediConnect (telemedicina) e estruturei o CVC Fund 'Lançador Digital' com R$ 5M. Avaliei 15 oportunidades em seis meses e realizei três investimentos estratégicos (R$ 1.5M no total). Cada parceria foi desenhada com modelos de governança que equilibravam agilidade startup + compliance corporativo. Durante o desenvolvimento, adaptei o modelo operacional para integrar inovação externa com equipes internas. Por exemplo, as regras de compliance foram traduzidas em critérios acionáveis para startups (similar ao que fiz no Bradesco), reduzindo barreiras operacionais e acelerando o onboarding de 12 para 3 semanas.",
        r: "Os resultados demonstraram o impacto técnico e estratégico do programa: Avaliamos 47 startups em profundidade, com 12 POCs executadas (taxa de conversão de 25%). Lançamos dois novos produtos via inovação aberta: 1) **Telemedicina via MediConnect:** 8k consultas/mês após seis meses, NPS de 78, receita anualizada de R$ 540k. 2) **Gestão de Diabetes via GlucoseCare:** 2k pacientes atendidos, redução de 22% em hospitalizações, economia de R$ 800k/ano para a Unimed. Reduzimos o time-to-market para 7 meses em média (68% mais rápido que o modelo interno de 22 meses). Retorno do CVC: A startup MindWell (saúde mental) foi adquirida por grupo internacional, gerando retorno de 1.8x sobre nosso investimento de R$ 500k em 18 meses. O programa foi reconhecido como 'Melhor Programa de Inovação Aberta em Saúde 2023' pela ABStartups, e se consolidou como benchmark interno e no setor. A metodologia foi licenciada para 3 outras operadoras de saúde.",
        l: "Aprendi que o papel de um líder em inovação aberta vai além de conectar startups e corporações. É preciso ser o 'tradutor' entre os mundos corporativo e de startups, construindo pontes que alinhem velocidade e governança. O sucesso do programa veio da combinação de processos técnicos estruturados (como o scoring system e o funil de POCs) com a adaptação cultural da Unimed para trabalhar com parceiros externos. Além disso, aprendi que inovação aberta não substitui a inovação interna, mas as duas se complementam, criando um ecossistema robusto onde capacidades internas são amplificadas por inovação externa. Hoje vejo oportunidades similares em payment operations: processos de merchant onboarding, fraud detection, e customer experience poderiam ser acelerados significativamente através de parcerias estratégicas com fintechs especializadas."
      },
      en: {
        s: "Unimed faced a closed innovation model that drastically limited project speed and effectiveness. With an average cycle of 18-24 months from concept to MVP, high costs (R$ 2M/project) and low success rate (30%), I were losing market share to more agile digital operators. A critical example was the telemedicine platform, developed internally in 22 months, which reached market obsolete, while healthtechs already led the segment. Annual beneficiary growth fell from 8% to 2% in the last three years.",
        t: "My individual role: I led end-to-end, set scope and critical decisions, and acted as the single-threaded owner. My mission was to create and lead Unimed's first structured Corporate Venture Capital (CVC) and Open Innovation program. I needed to build an efficient and technical mechanism to identify, evaluate and integrate startups into the portfolio, ensuring measurable results in 12 months. The goal I proposed was to launch two new products via open innovation in less than 12 months, reducing time-to-market by 50% compared to the internal model.",
        a: "Personal actions: I drove execution—prioritized changes, aligned stakeholders, made trade-offs, and unblocked teams. To transform the innovation approach, I developed a structured system with three technical and strategic pillars: 1) **Startup Scoring System:** I created a technical evaluation model with three main dimensions (Strategic Fit 40%, Technology Maturity 35%, Business Model 25%) and 15 specific subcriteria. For example, 'Strategic Fit' included: product roadmap alignment, complementarity vs. cannibalization, and synergies with beneficiary base. This system allowed prioritizing startups with greater real impact potential, avoiding resource waste on low-return POCs. 2) **Fast Execution Model:** I structured a 3-stage funnel in the UNIDEIAS program: Screen (30 days), Prove (60 days), Scale (90 days). Each stage had clear KPIs and defined budget: Screen (up to R$ 50k), Prove (up to R$ 200k), Scale (up to R$ 1M). This created capital discipline and results urgency. 3) **Strategic Partnerships and CVC Fund:** I personally negotiated contracts with startups like MediConnect (telemedicine) and structured the 'Digital Launcher' CVC Fund with R$ 5M. I evaluated 15 opportunities in six months and made three strategic investments (R$ 1.5M total). Each partnership was designed with governance models that balanced startup agility + corporate compliance. During development, I adapted the operational model to integrate external innovation with internal teams. For example, compliance rules were translated into actionable criteria for startups (similar to what I did at Bradesco), reducing operational barriers and accelerating onboarding from 12 to 3 weeks.",
        r: "Results demonstrated the program's technical and strategic impact: I evaluated 47 startups in depth, with 12 POCs executed (25% conversion rate). I launched two new products via open innovation: 1) **Telemedicine via MediConnect:** 8k consultations/month after six months, NPS of 78, annualized revenue of R$ 540k. 2) **Diabetes Management via GlucoseCare:** 2k patients served, 22% reduction in hospitalizations, R$ 800k/year savings for Unimed. I reduced time-to-market to 7 months average (68% faster than the 22-month internal model). CVC Return: MindWell startup (mental health) was acquired by international group, generating 1.8x return on my R$ 500k investment in 18 months. The program was recognized as 'Best Open Innovation Program in Health 2023' by ABStartups, and consolidated as internal and sector benchmark. The methodology was licensed to 3 other health operators.",
        l: "I learned that a leader's role in open innovation goes beyond connecting startups and corporations. You need to be the 'translator' between corporate and startup worlds, building bridges that align speed and governance. Program success came from combining structured technical processes (like scoring system and POC funnel) with Unimed's cultural adaptation to work with external partners. Additionally, I learned that open innovation doesn't replace internal innovation, but the two complement each other, creating a robust ecosystem where internal capabilities are amplified by external innovation. Today I see similar opportunities in payment operations: merchant onboarding, fraud detection, and customer experience processes could be significantly accelerated through strategic partnerships with specialized fintechs."
      },
      
      pitch: {
        pt: {
          hook: "“Ciclo de 18–24 meses para lançar produtos. Eu redesenhei via CVC/Inovação Aberta e entreguei em 7 meses.”",
          flow: [
            {"t":"0:00–0:30","label":"Abertura","script":"Hook + stakes: por que este problema era intolerável e o que aconteceria se nada fosse feito."},
            {"t":"0:30–1:30","label":"S (Situação)","script":"Contexto objetivo, volumes, SLAs e variabilidade."},
            {"t":"1:30–2:15","label":"T (Tarefa)","script":"Qual missão eu assumi pessoalmente e a meta mensurável que defini."},
            {"t":"2:15–5:30","label":"A (Ações)","script":"3–5 decisões de arquitetura/processo que eu tomei; trade‑offs; como alinhei stakeholders."},
            {"t":"5:30–7:30","label":"R (Resultados)","script":"Métricas antes/depois com baseline e benchmarks; efeito nos principais KPIs."},
            {"t":"7:30–9:00","label":"L (Learnings)","script":"O que ficou de mecanismo replicável e como isso escala para payments/fintech."},
            {"t":"9:00–10:00","label":"Mic‑drop","script":"Fecho com um número/efeito incontestável + convite à pergunta crítica."}
          ],
          transitions: [
            "“Dado esse contexto, eu assumi uma meta agressiva…”",
            "“Para chegar lá, eu precisei tomar três decisões difíceis…”",
            "“O efeito disso foi mensurável nos KPIs que importavam…”",
            "“E isso virou mecanismo, não heroísmo pontual…”"
          ],
          mic_drop: "“Time‑to‑market 68% mais rápido, 2 produtos no ar e 1,8x de retorno no CVC.”"
        },
        en: {
          hook: "“18–24‑month product cycles. I rebuilt via CVC/Open Innovation and shipped in 7 months.”",
          flow: [
            {"t":"0:00–0:30","label":"Opening","script":"Hook + stakes: why the problem was intolerable and what would happen if nothing changed."},
            {"t":"0:30–1:30","label":"S (Situation)","script":"Objective context, volumes, SLAs, variability."},
            {"t":"1:30–2:15","label":"T (Task)","script":"The mission I personally owned and the measurable target I set."},
            {"t":"2:15–5:30","label":"A (Actions)","script":"3–5 architectural/process decisions I made; trade‑offs; how I aligned stakeholders."},
            {"t":"5:30–7:30","label":"R (Results)","script":"Before/after metrics with baselines and benchmarks; impact on core KPIs."},
            {"t":"7:30–9:00","label":"L (Learnings)","script":"What became a repeatable mechanism and how it scales to payments/fintech."},
            {"t":"9:00–10:00","label":"Mic‑drop","script":"Close with a hard number/effect + invite the toughest question."}
          ],
          transitions: [
            "“Given that context, I set an aggressive target…”",
            "“To get there, I made three hard decisions…”",
            "“The effect was measurable on the KPIs that matter…”",
            "“And this became a mechanism, not one‑off heroics…”"
          ],
          mic_drop: "“68% faster time‑to‑market, 2 products launched, 1.8x CVC return.”"
        }
      },
fups: [
        {
          q: "Como você garantiu que o scoring system fosse balanceado entre critérios qualitativos e quantitativos?",
          a: "Criei uma matriz híbrida: 60% quantitativo (métricas objetivas como tração, receita, tamanho da equipe) e 40% qualitativo (fit cultural, alinhamento de visão, capacidade de execução). Para os critérios qualitativos, padronizei com rubrics - cada dimensão tinha 4 níveis com descrições específicas. Por exemplo, 'Capacidade de Execução' ia de 1 (equipe inexperiente) a 4 (equipe com exits ou experiência no domínio). Isso eliminou subjetividade e tornou as avaliações comparáveis entre diferentes avaliadores.",
          q_en: "How did you ensure the scoring system was balanced between qualitative and quantitative criteria?",
          a_en: "I created a hybrid matrix: 60% quantitative (objective metrics like traction, revenue, team size) and 40% qualitative (cultural fit, vision alignment, execution capability). For qualitative criteria, I standardized with rubrics - each dimension had 4 levels with specific descriptions. For example, 'Execution Capability' ranged from 1 (inexperienced team) to 4 (team with exits or domain experience). This eliminated subjectivity and made evaluations comparable across different evaluators."
        },
        {
          q: "Quais foram os maiores desafios para alinhar as expectativas dos stakeholders internos ao trabalhar com startups e como você os superou?",
          a: "O maior desafio foi velocidade vs. compliance. Startups queriam 'mover rápido e quebrar coisas', enquanto minha área jurídica queria 'revisar tudo'. Criei 'Partnership Templates' pré-aprovados pelo jurídico para casos padrão, reduzindo negociação de 8 semanas para 2 semanas. Para casos complexos, implementei 'Compliance Sprints' - sessões intensivas de 3 dias com jurídico, startup e business units para resolver todos os issues de uma vez. Isso mudou a cultura de 'aprovação sequencial' para 'resolução colaborativa de problemas'.",
          q_en: "What were the biggest challenges in aligning internal stakeholder expectations when working with startups and how did you overcome them?",
          a_en: "The biggest challenge was speed vs. compliance. Startups wanted 'move fast and break things,' while my legal area wanted 'review everything.' I created 'Partnership Templates' pre-approved by legal for standard cases, reducing negotiation from 8 weeks to 2 weeks. For complex cases, I implemented 'Compliance Sprints' - 3-day intensive sessions with legal, startup and business units to resolve all issues at once. This changed culture from 'sequential approval' to 'collaborative problem-solving.'"
        },
        {
          q: "Como você mediu o sucesso e o impacto das POCs durante e após a execução?",
          a: "Criei KPIs específicos para cada stage do funil: Screen: número de startups avaliadas, score médio de qualidade, time-to-decision; Prove: score de viabilidade técnica, taxa de adoção do usuário, complexidade de integração; Scale: impacto na receita, satisfação do usuário (NPS), custo operacional. Mais importante: implementei definição de 'Success Criteria' no início de cada POC - métricas específicas que determinariam go/no-go para próxima fase. Por exemplo, telemedicina precisava de >70 NPS e >50 consultas/semana para passar para Scale.",
          q_en: "How did you measure POC success and impact during and after execution?",
          a_en: "I created specific KPIs for each funnel stage: Screen: # startups evaluated, average quality score, time-to-decision; Prove: technical feasibility score, user adoption rate, integration complexity; Scale: revenue impact, user satisfaction (NPS), operational cost. More importantly: I implemented 'Success Criteria' definition at the start of each POC - specific metrics that would determine go/no-go for next phase. For example, telemedicine needed >70 NPS and >50 consultations/week to advance to Scale."
        },
        {
          q: "Quais mudanças culturais foram necessárias para integrar a inovação aberta ao modelo tradicional da Unimed?",
          a: "A maior mudança foi de 'Não Foi Inventado Aqui' para 'A Melhor Ideia Vence'. Implementei 3 mecanismos: 1) Innovation Challenges internos onde equipes competiam com startups (isso criou competição saudável), 2) Cross-pollination - engenheiros internos trabalhavam embarcados com startups por 2-4 semanas, 3) Compartilhamento de success stories - toda implementação bem-sucedida era apresentada em all-hands, dando crédito tanto para equipe interna quanto para parceiro startup. A chave foi mostrar que parceria externa ampliava capacidades internas, não as substituía.",
          q_en: "What cultural changes were necessary to integrate open innovation into Unimed's traditional model?",
          a_en: "The biggest change was from 'Not Invented Here' to 'Best Idea Wins.' I implemented 3 mechanisms: 1) Internal Innovation Challenges where teams competed with startups (this created healthy competition), 2) Cross-pollination - internal engineers worked embedded with startups for 2-4 weeks, 3) Success stories sharing - every successful implementation was presented in all-hands, giving credit to both internal team and startup partner. The key was showing that external partnership amplified internal capabilities, didn't replace them."
        },
        {
          q: "Como você escalou o programa de inovação aberta para outras áreas da Unimed após o sucesso inicial?",
          a: "Criei um 'Playbook de Inovação Aberta' de 45 páginas com metodologia step-by-step, templates, e lessons learned. Treinei 8 'Innovation Champions' em diferentes business units que podiam replicar o modelo. Mais importante: estruturei um 'Innovation Fund' centralizado de R$ 10M que qualquer área podia acessar com business case aprovado. Isso democratizou inovação enquanto mantinha governança. Em 18 meses, 6 áreas diferentes tinham programas ativos usando minha metodologia.",
          q_en: "How did you scale the open innovation program to other Unimed areas after initial success?",
          a_en: "I created a 45-page 'Open Innovation Playbook' with step-by-step methodology, templates, and lessons learned. I trained 8 'Innovation Champions' in different business units who could replicate the model. More importantly: I structured a centralized 'Innovation Fund' of R$ 10M that any area could access with approved business case. This democratized innovation while maintaining governance. In 18 months, 6 different areas had active programs using my methodology."
        },
        {
          q: "Quais foram os principais fatores de sucesso para o retorno de 1.8x no investimento da startup MindWell?",
          a: "O sucesso da MindWell veio de timing + execution + strategic partnership. Timing: investimos durante COVID quando demanda por mental health explodiu. Execution: o founder tinha background clínico + tech, combinação rara. Strategic partnership: conectamos MindWell com minha base de 50k+ beneficiários, dando tração que atraiu comprador internacional. Nosso value-add foi distribuição + validação, não apenas capital. A oferta de aquisição veio porque compramos credibilidade de mercado para a startup.",
          q_en: "What were the main success factors for the 1.8x return on MindWell startup investment?",
          a_en: "MindWell's success came from timing + execution + strategic partnership. Timing: I invested during COVID when mental health demand exploded. Execution: founder had clinical + tech background, rare combination. Strategic partnership: I connected MindWell with my 50k+ beneficiary base, giving traction that attracted international acquirer. Our value-add was distribution + validation, not just capital. The acquisition offer came because I bought market credibility for the startup."
        },
        {
          q: "Se você fosse replicar este programa numa empresa de payment operations, que adaptações faria?",
          a: "Adaptaria o foco para parcerias fintech: Fraud detection (startups com modelos ML), Identity verification (startups com tech biométrica), Cross-border payments (startups com otimização de rails). O scoring system seria similar, mas priorizaria compliance regulatório (regulações de payment são mais rígidas que health). Time-to-market seria ainda mais crítico - payments precisam de real-time, então POCs seriam 30-45 dias max. A maior diferença seria complexidade de integração - sistemas financeiros são mais legacy e security-sensitive que sistemas de saúde.",
          q_en: "If you were to replicate this program in a payment operations company, what adaptations would you make?",
          a_en: "I'd adapt focus to fintech partnerships: Fraud detection (startups with ML models), Identity verification (startups with biometric tech), Cross-border payments (startups with rails optimization). Scoring system would be similar, but prioritize regulatory compliance (payment regulations are stricter than health). Time-to-market would be even more critical - payments need real-time, so POCs would be 30-45 days max. Biggest difference would be integration complexity - financial systems are more legacy and security-sensitive than health systems."
        },
        {
          q: "Como você balanceou investimento em inovação disruptiva vs. incremental no programa?",
          a: "Usei um portfolio approach: 70% inovação incremental (melhorias em produtos existentes), 20% inovação adjacente (novos produtos para clientes atuais), 10% inovação disruptiva (novos mercados/modelos de negócio). O disruptivo era mais high-risk mas também high-reward - como MindWell que abriu vertical completamente novo de mental health. Acompanhei ROI separadamente para cada categoria e ajustei alocação baseado em performance. Incremental tinha payback mais rápido, disruptivo tinha maior impacto potencial.",
          q_en: "How did you balance investment in disruptive vs. incremental innovation in the program?",
          a_en: "I used a portfolio approach: 70% incremental innovation (improvements to existing products), 20% adjacent innovation (new products for current customers), 10% disruptive innovation (new markets/business models). Disruptive was higher-risk but also higher-reward - like MindWell which opened entirely new mental health vertical. I tracked ROI separately for each category and adjusted allocation based on performance. Incremental had faster payback, disruptive had bigger potential impact."
        },
        {
          q: "Qual foi o maior erro que você cometeu no programa e o que aprendeu?",
          a: "O maior erro foi assumir que todas as startups entendiam ciclos de vendas corporativos. Perdemos 2 parcerias promissoras porque as startups não conseguiram se adaptar ao meu processo de procurement de 6 meses. Learning: agora incluo 'Corporate Readiness Assessment' no screening - avaliando não apenas product-market fit, mas também startup-corporate fit. Startups precisam ter paciência, capacidades de governança, e disposição para integrar com sistemas legacy. Excelência técnica não é suficiente se o modelo de execução não se alinha.",
          q_en: "What was the biggest mistake you made in the program and what did you learn?",
          a_en: "Biggest mistake was assuming all startups understood corporate sales cycles. I lost 2 promising partnerships because startups couldn't adapt to my 6-month procurement process. Learning: now I include 'Corporate Readiness Assessment' in screening - evaluating not just product-market fit, but also startup-corporate fit. Startups need to have patience, governance capabilities, and willingness to integrate with legacy systems. Technical excellence isn't enough if execution model doesn't align."
        },
        {
          q: "Como você manteve momentum e engagement dos stakeholders internos ao longo dos 24 meses do programa?",
          a: "Implementei 'Innovation Showcase' trimestrais onde apresentávamos progresso e wins para leadership team. Mais importante: criei uma estratégia de comunicação interna com 3 componentes: 1) Newsletter mensal destacando parcerias de startup e métricas, 2) 'Innovation Awards' trimestrais reconhecendo champions internos, 3) 'Innovation Day' anual onde todas as business units apresentavam seus projetos de inovação. A chave foi celebrar quick wins e comunicar criação de valor consistentemente, mantendo excitement sobre parcerias externas.",
          q_en: "How did you maintain momentum and engagement from internal stakeholders throughout the 24-month program?",
          a_en: "I implemented quarterly 'Innovation Showcases' where I presented progress and wins to leadership team. More importantly: I created an internal communication strategy with 3 components: 1) Monthly newsletter highlighting startup partnerships and metrics, 2) Quarterly 'Innovation Awards' recognizing internal champions, 3) Annual 'Innovation Day' where all business units presented their innovation projects. The key was celebrate quick wins and communicate value creation consistently, maintaining excitement about external partnerships."
        }
      ]
    }
  ,
    
    {
      id: "sefarz-pix-reconciliation-automation",
      title: "Automatizei a Reconciliação PIX com Regras, Controles e Observabilidade (SEFAZ/RS)",
      title_pt: "Automatizei a Reconciliação PIX com Regras, Controles e Observabilidade (SEFAZ/RS)",
      title_en: "Automated PIX Reconciliation with Rules, Controls and Observability (SEFAZ/RS)",
      company: "SEFAZ/RS",
      period: "01/2024–06/2024",
      isTopCase: false,
      pt: {
        s: "A conciliação semanal de PIX consumia ~19 horas da equipe, com etapas manuais, planilhas paralelas e divergências não justificadas, pressionando o fechamento D+1. O CFO havia sinalizado risco de achados em auditoria e desgaste com órgãos de controle se seguíssemos nesse ritmo. Além disso, a operação de arrecadação precisava de previsibilidade para liberar repasses. Em termos de benchmark, nosso tempo de fechamento estava ~25% abaixo de áreas pares internas e pior do que vimos em autarquias com automação madura.",
        t: "Liderei a mudança para garantir D+1 consistente e reduzir ≥60% o esforço de conciliação, eliminando divergências sem lastro e elevando governança. A meta foi desenhada para criar folga operacional (de 19h para ≤7h/semana), reduzir exposição a achados de auditoria e liberar capacidade do time para análise de exceções de alto valor.",
        a: "Mapeei ponta a ponta o fluxo (gateway→banco→ERP→livro razão), quantificando perdas de tempo por etapa. Conduzi workshops com Financeiro/TI para co-desenhar regras de matching priorizando baixo falso-positivo: valor exato, CPF/CNPJ, hash de referência, janela temporal T+0/T+1 e tolerâncias por tipo de receita. Implementei validações automáticas (duplicidade, inconsistência de status, moeda), normalização de eventos e trilhas de auditoria; integrei extratos via API com salvaguardas LGPD e segregação de funções. Configurei observabilidade: dashboards de match-rate, aging e recon open items; alertas para outliers e quedas de integração; e runbook de exceções para o time de Operações. Para buy-in, pilotei 2 ciclos em paralelo ao processo antigo, comparei KPIs e enderecei preocupações de controle com o time de auditoria interna antes do corte definitivo.",
        r: "Reduzi o tempo de conciliação em ~68% (19h→6h/semana), com D+1 consistente e divergências sem lastro praticamente zeradas. Evitei ~R$120k/ano em horas improdutivas e horas extras, e caíram os escalonamentos executivos. Em benchmark interno, ficamos ~25% melhores em tempo de fechamento e saímos de 'risco moderado' para 'baixo' em auditoria de processos.",
        l: "Em pagamentos, exceções e observabilidade são o multiplicador de escala. Ao explicitar regras, trilhas e alarmes, conseguimos sustentar D+1 com previsibilidade e replicar o mecanismo para boletos e taxas — reduzindo dependência de heróis e aumentando resiliência operacional."
      },
      en: {
        s: "Weekly PIX reconciliation consumed ~19 hours, relied on manual steps and shadow spreadsheets, and created unjustified mismatches that put D+1 at risk. The CFO flagged potential audit findings and reputational exposure with oversight bodies. Our treasury needed predictability for downstream settlements, and we were ~25% slower than internal peers with mature automation.",
        t: "I set a goal to consistently hit D+1 and cut reconciliation effort by ≥60%, eliminating baseless mismatches and raising governance. That meant moving from 19h to ≤7h/week, reducing audit exposure and freeing capacity for high‑value exceptions.",
        a: "I mapped the end‑to‑end flow (gateway→bank→ERP→ledger), quantified time losses, and ran Finance/IT workshops to co‑design matching rules with low false positives: exact amount, tax ID, reference hash, T+0/T+1 windows, and tolerances by revenue type. I added automated validations (duplication, status inconsistencies, currency), event normalization, and audit trails; integrated statements via API with LGPD safeguards and SoD. I built observability: match‑rate/aging/open‑items dashboards, outlier/integration alerts, and an exception runbook for Ops. To secure buy‑in, I piloted two cycles in parallel to the legacy process, compared KPIs, and addressed control concerns with internal audit before the cut‑over.",
        r: "~68% time reduction (19h→6h/week), predictable D+1, and near‑zero baseless mismatches. ~BRL 120k/year avoided, fewer exec escalations, and ~25% faster vs our internal close benchmark; audit risk downgraded from medium to low.",
        l: "In payments, exceptions and observability are scale multipliers. By codifying rules, trails and alerts, we sustained D+1 with predictability and replicated the mechanism to boletos, reducing heroics and raising operational resilience."
      },
      
      pitch: {
        pt: {
          hook: "Se eu resumisse este case em uma frase: eu peguei um processo crítico, medi o que importava, e simplifiquei até virar um mecanismo previsível — com impacto direto no prazo, no custo e na confiança dos stakeholders.",
          flow: [
            {"t":"0:00–0:30","label":"Abertura","script":"Hook + stakes: por que este problema era intolerável e o que aconteceria se nada fosse feito."},
            {"t":"0:30–1:30","label":"S (Situação)","script":"Contexto objetivo, volumes, SLAs e variabilidade."},
            {"t":"1:30–2:15","label":"T (Tarefa)","script":"Qual missão eu assumi pessoalmente e a meta mensurável que defini."},
            {"t":"2:15–5:30","label":"A (Ações)","script":"3–5 decisões de arquitetura/processo que eu tomei; trade‑offs; como alinhei stakeholders."},
            {"t":"5:30–7:30","label":"R (Resultados)","script":"Métricas antes/depois com baseline e benchmarks; efeito nos principais KPIs."},
            {"t":"7:30–9:00","label":"L (Learnings)","script":"O que ficou de mecanismo replicável e como isso escala para payments/fintech."},
            {"t":"9:00–10:00","label":"Mic‑drop","script":"Fecho com um número/efeito incontestável + convite à pergunta crítica."}
          ],
          transitions: [
            "“Dado esse contexto, eu assumi uma meta agressiva…”",
            "“Para chegar lá, eu precisei tomar três decisões difíceis…”",
            "“O efeito disso foi mensurável nos KPIs que importavam…”",
            "“E isso virou mecanismo, não heroísmo pontual…”"
          ],
          mic_drop: "“Não foi sorte: foi mecanismo. E mecanismo escala.”"
        },
        en: {
          hook: "In one line: I took a critical process, measured what mattered, and simplified it into a predictable mechanism—with direct impact on time, cost, and stakeholder trust.",
          flow: [
            {"t":"0:00–0:30","label":"Opening","script":"Hook + stakes: why the problem was intolerable and what would happen if nothing changed."},
            {"t":"0:30–1:30","label":"S (Situation)","script":"Objective context, volumes, SLAs, variability."},
            {"t":"1:30–2:15","label":"T (Task)","script":"The mission I personally owned and the measurable target I set."},
            {"t":"2:15–5:30","label":"A (Actions)","script":"3–5 architectural/process decisions I made; trade‑offs; how I aligned stakeholders."},
            {"t":"5:30–7:30","label":"R (Results)","script":"Before/after metrics with baselines and benchmarks; impact on core KPIs."},
            {"t":"7:30–9:00","label":"L (Learnings)","script":"What became a repeatable mechanism and how it scales to payments/fintech."},
            {"t":"9:00–10:00","label":"Mic‑drop","script":"Close with a hard number/effect + invite the toughest question."}
          ],
          transitions: [
            "“Given that context, I set an aggressive target…”",
            "“To get there, I made three hard decisions…”",
            "“The effect was measurable on the KPIs that matter…”",
            "“And this became a mechanism, not one‑off heroics…”"
          ],
          mic_drop: "“It wasn’t luck. It was a mechanism—and mechanisms scale.”"
        }
      },
fups: [
        { q: "Como você definiu a meta de ≥60% de redução e por que ela era crítica para D+1?", a: "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "How did you set the ≥60% reduction target and why was it critical for D+1?", a_en: "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Que resistências encontrou na automação e como conquistou o buy-in?", a: "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "What resistance did you face in automating and how did you secure buy-in?", a_en: "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Por que escolheu essas regras de matching e quais alternativas descartou?", a: "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "Why did you choose these matching rules and which alternatives did you discard?", a_en: "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Como garantiu conformidade (BACEN/LGPD) na integração de extratos via API?", a: "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "How did you ensure compliance (Central Bank/LGPD) when integrating statements via API?", a_en: "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Como monitorou sucesso (métricas de processo e de resultado) após o go-live?", a: "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "How did you monitor success (process and outcome metrics) post go-live?", a_en: "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Quais incidentes evitados/mitigados demonstram o valor da observabilidade criada?", a: "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "Which avoided/mitigated incidents prove the value of the observability you built?", a_en: "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Como você escalou a solução para outros fluxos (cartões/boletos) ou unidades?", a: "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "How did you scale the solution to other flows (cards/boletos) or units?", a_en: "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Qual benchmark interno/externo usou para comparar o novo SLA?", a: "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "Which internal/external benchmark did you use to compare the new SLA?", a_en: "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Se refizesse hoje, que melhoria técnica faria e por quê?", a: "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "If you redid it today, what technical improvement would you make and why?", a_en: "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Como esse mecanismo melhora a resiliência de payment operations no longo prazo?", a: "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "How does this mechanism strengthen payment operations’ resilience long-term?", a_en: "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." }
      ]
    }

  ,
    
    {
      id: "payment-simplification-high-impact",
      title: "Simplifiquei Baixa/Estorno com Matriz de Decisão e Menos Toques",
      title_pt: "Simplifiquei Baixa/Estorno com Matriz de Decisão e Menos Toques",
      title_en: "Simplified Write-off/Refund with a Decision Matrix and Fewer Touches",
      company: "SEFAZ/RS",
      period: "07/2024-10/2024",
      isTopCase: false,
      pt: {
        s: "O fluxo de baixa/estorno acumulava aprovações redundantes, filas e retrabalho, afetando o cliente e elevando custo de backoffice.",
        t: "Reduzir toques e ambiguidade decisória sem violar compliance/segregação, mirando SLA D+2 (vs D+5) e ~40% de redução de toques.",
        a: "Redesenhei o processo com matriz valor×tipo×risco calibrada por histórico; removi 3 aprovações redundantes e ancorei responsabilidade com logs/auditoria; padronizei entradas/saídas com templates; implantei checagens automáticas para casos triviais e uma UX operacional clara; tratei resistências com jurídico/financeiro/ops em workshops e pilots.",
        r: "~42% menos toques; SLA D+5→D+2; NPS interno +23 p.p.; passamos ao quartil superior em tempo de estorno e custo por caso.",
        l: "Mecanismos simples e baseados em dados escalam sem aumentar risco; a matriz virou padrão para chargebacks."
      },
      en: {
        s: "The write-off/refund flow had redundant approvals, queues, and rework, hurting customers and raising back-office costs.",
        t: "Cut touches and decision ambiguity without breaking compliance/SoD, targeting D+2 (vs D+5) and ~40% touch reduction.",
        a: "I redesigned with an amount×type×risk matrix tuned by history; removed 3 redundant approvals and anchored accountability with logs/audits; standardized inputs/outputs via templates; added auto-checks for trivial cases and clear operational UX; handled resistance via Legal/Finance/Ops workshops and pilots.",
        r: "~42% fewer touches; SLA D+5→D+2; internal NPS +23 pp; we moved to top quartile on refund time and cost per case.",
        l: "Simple, data-backed mechanisms scale without adding risk; the matrix became the standard for chargebacks."
      },
      
      pitch: {
        pt: {
          hook: "Se eu resumisse este case em uma frase: eu peguei um processo crítico, medi o que importava, e simplifiquei até virar um mecanismo previsível — com impacto direto no prazo, no custo e na confiança dos stakeholders.",
          flow: [
            {"t":"0:00–0:30","label":"Abertura","script":"Hook + stakes: por que este problema era intolerável e o que aconteceria se nada fosse feito."},
            {"t":"0:30–1:30","label":"S (Situação)","script":"Contexto objetivo, volumes, SLAs e variabilidade."},
            {"t":"1:30–2:15","label":"T (Tarefa)","script":"Qual missão eu assumi pessoalmente e a meta mensurável que defini."},
            {"t":"2:15–5:30","label":"A (Ações)","script":"3–5 decisões de arquitetura/processo que eu tomei; trade‑offs; como alinhei stakeholders."},
            {"t":"5:30–7:30","label":"R (Resultados)","script":"Métricas antes/depois com baseline e benchmarks; efeito nos principais KPIs."},
            {"t":"7:30–9:00","label":"L (Learnings)","script":"O que ficou de mecanismo replicável e como isso escala para payments/fintech."},
            {"t":"9:00–10:00","label":"Mic‑drop","script":"Fecho com um número/efeito incontestável + convite à pergunta crítica."}
          ],
          transitions: [
            "“Dado esse contexto, eu assumi uma meta agressiva…”",
            "“Para chegar lá, eu precisei tomar três decisões difíceis…”",
            "“O efeito disso foi mensurável nos KPIs que importavam…”",
            "“E isso virou mecanismo, não heroísmo pontual…”"
          ],
          mic_drop: "“Não foi sorte: foi mecanismo. E mecanismo escala.”"
        },
        en: {
          hook: "In one line: I took a critical process, measured what mattered, and simplified it into a predictable mechanism—with direct impact on time, cost, and stakeholder trust.",
          flow: [
            {"t":"0:00–0:30","label":"Opening","script":"Hook + stakes: why the problem was intolerable and what would happen if nothing changed."},
            {"t":"0:30–1:30","label":"S (Situation)","script":"Objective context, volumes, SLAs, variability."},
            {"t":"1:30–2:15","label":"T (Task)","script":"The mission I personally owned and the measurable target I set."},
            {"t":"2:15–5:30","label":"A (Actions)","script":"3–5 architectural/process decisions I made; trade‑offs; how I aligned stakeholders."},
            {"t":"5:30–7:30","label":"R (Results)","script":"Before/after metrics with baselines and benchmarks; impact on core KPIs."},
            {"t":"7:30–9:00","label":"L (Learnings)","script":"What became a repeatable mechanism and how it scales to payments/fintech."},
            {"t":"9:00–10:00","label":"Mic‑drop","script":"Close with a hard number/effect + invite the toughest question."}
          ],
          transitions: [
            "“Given that context, I set an aggressive target…”",
            "“To get there, I made three hard decisions…”",
            "“The effect was measurable on the KPIs that matter…”",
            "“And this became a mechanism, not one‑off heroics…”"
          ],
          mic_drop: "“It wasn’t luck. It was a mechanism—and mechanisms scale.”"
        }
      },
fups: [
        { q: "Que impacto a simplificação trouxe ao cliente e ao financeiro?", a: "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "What impact did the simplification have on customers and Finance?", a_en: "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Como definiu critérios da matriz (valor/tipo/risco) e validou com histórico?", a: "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "How did you define matrix criteria (amount/type/risk) and validate against history?", a_en: "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Como tratou resistências ao remover aprovações e ancorou responsabilidade?", a: "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "How did you handle resistance to removing approvals and anchor accountability?", a_en: "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Quais métricas de processo/resultado guiaram o piloto?", a: "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "Which process/outcome metrics guided the pilot?", a_en: "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Como garantiu compliance e segregação de funções após reduzir toques?", a: "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "How did you ensure compliance and SoD after fewer touches?", a_en: "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Houve exceções que testaram a robustez?", a: "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "Were there exceptions that tested robustness?", a_en: "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Como escalou a matriz para chargebacks/outros fluxos?", a: "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "How did you scale the matrix to chargebacks/other flows?", a_en: "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Qual comparativo com benchmark após a mudança?", a: "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "What was the post-change benchmark comparison?", a_en: "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Se refizesse, que ajuste de UX operacional faria?", a: "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "If redoing, which operational UX tweak would you make?", a_en: "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." },
        { q: "Que mecanismos evitam degradação do processo ao longo do tempo?", a: "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.", q_en: "What mechanisms prevent process degradation over time?", a_en: "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale." }
      ]
    }

  ]
};

export default invent_simplify;