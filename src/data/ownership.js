// Amazon Leadership Principle: Ownership
// Data structure for study cases and follow-up questions

const ownership_data = {
  principle: {
    title: "Mentalidade de Dono",
    title_en: "Ownership", 
    description: "Os líderes são donos. Eles pensam a longo prazo e não sacrificam valor a longo prazo por resultados a curto prazo. Eles agem em nome de toda a empresa, além de sua própria equipe. Eles nunca dizem 'isso não é meu trabalho'.",
    description_en: "Leaders are owners. They think long term and don't sacrifice long-term value for short-term results. They act on behalf of the entire company, beyond just their own team. They never say 'that's not my job'.",
    icon: ""
  },
  cases: [
    {
      "title": "Migração Crítica de Dados e Compliance (HSBC  Bradesco)",
      "pt": {
        "s": "Durante a aquisição do HSBC pelo Bradesco (US$ 5,2 bi), fui responsável pela migração do portfólio de Retail Banking. O desafio era migrar milhões de contas e R$ 3 bilhões em ativos sem perda de dados, garantindo 100% de conformidade com reguladores como BACEN e o FATCA/IRS americano.",
        "t": "Minha responsabilidade era garantir que a migração ocorresse com zero perda de dados, total conformidade regulatória e retenção da base de clientes de alto valor (HNWI). Eu precisava ser o dono do processo de ponta a ponta.",
        "a": "Eu em vez de delegar, mergulhei nos detalhes. Atuei pessoalmente na implantação dos processos de conformidade FATCA. Liderei squads globais na Índia, China e Polônia para validação de dados, mapeando tabelas críticas. Quando identifiquei um risco, não disse 'não é meu trabalho'; eu mesmo criei dashboards de conformidade para reportar o status semanalmente ao C-Level e ao BACEN.",
        "r": "A migração foi concluída com zero perda de dados e 100% de aprovação em todas as auditorias. Além disso, não apenas retivemos a base de clientes HNWI, como aumentamos o portfólio de Private Banking em 30% durante a transição. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que 'Ownership' em projetos críticos significa ir muito além do gerenciamento. Significa assumir a responsabilidade pessoal pelo resultado, mergulhando em áreas técnicas ou regulatórias fora da sua zona de conforto e ser o dono do problema e da solução. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "During the 5.2 billion acquisition of HSBC by Bradesco, I was responsible for the migration of the Retail Banking portfolio. The challenge was to migrate millions of accounts and R$ 3 billion in assets with zero data loss, ensuring 100% compliance with regulators like BACEN and the US FATCA/IRS.",
        "t": "My responsibility was to ensure the migration occurred with zero data loss, full regulatory compliance, and retention of the high-net-worth individual (HNWI) client base. I needed to own the end-to-end process.",
        "a": "Instead of delegating, I dove into the details. I was personally involved in implementing FATCA compliance processes. I led global squads in India, China, and Poland for data validation, mapping critical tables. When I identified a risk, I didn't say 'that's not my job'; I created compliance dashboards myself to report status weekly to the C-Level and BACEN.",
        "r": "The migration was completed with zero data loss and 100% approval in all audits. Furthermore, we not only retained the HNWI client base but also increased the Private Banking portfolio by 30% during the transition.",
        "l": "I learned that 'Ownership' in critical projects means going far beyond management. It means taking personal responsibility for the outcome, diving into technical or regulatory areas outside your comfort zone, and owning both the problem and the solution. In retrospect, I could have anticipated stakeholder risks and today I start by engaging them from the beginning."
      },      "fups": [
        {
          "q": "Qual foi o primeiro risco que você identificou pessoalmente e que a equipe não havia percebido?",
          "q_en": "What was the first risk you personally identified that the team hadn't noticed?",
          "a": "Eu identifiquei que o tratamento de 'contas conjuntas' com diferentes nacionalidades tinha uma particularidade na lei FATCA que nosso processo automático não cobria. Assumi a liderança, criei uma força-tarefa e desenhei um processo de validação manual para esse nicho, evitando uma falha de compliance. Especificamente, contas com um titular americano e outro brasileiro precisavam de relatórios separados para IRS e BACEN, mas nosso algoritmo estava consolidando tudo em um único report.",
          "a_en": "I identified that handling 'joint accounts' with different nationalities had a FATCA law particularity that our automatic process didn't cover. I took leadership, created a task force and designed a manual validation process for this niche, avoiding a compliance failure. Specifically, accounts with one American holder and one Brazilian needed separate reports for IRS and BACEN, but our algorithm was consolidating everything into a single report."
        },
        {
          "q": "Descreva um momento em que você teve que assumir a responsabilidade por um erro cometido por sua equipe global.",
          "q_en": "Describe a moment when you had to take responsibility for a mistake made by your global team.",
          "a": "A equipe de dados na Índia rodou um script de limpeza que removeu marcadores de clientes de alto valor. Em vez de culpá-los, no comitê executivo eu disse: 'A falha foi minha por não ter definido um teste em ambiente controlado para esse script'. Assumi a responsabilidade e apresentei o plano de recuperação. Trabalhei 18 horas seguidas com o time para recuperar os dados de backup e implementar novos controles de qualidade.",
          "a_en": "The data team in India ran a cleanup script that removed high-value customer markers. Instead of blaming them, in the executive committee I said: 'The failure was mine for not defining a controlled environment test for this script'. I took responsibility and presented the recovery plan. I worked 18 hours straight with the team to recover data from backup and implement new quality controls."
        },
        {
          "q": "Como você garantiu que os times na Índia e Polônia se sentissem 'donos' do processo, mesmo estando remotos?",
          "q_en": "How did you ensure that teams in India and Poland felt like 'owners' of the process, even being remote?",
          "a": "Eu dei a eles a posse completa de seus workstreams. O time da Polônia era o 'dono da qualidade dos dados', não apenas um executor de tarefas. Comemorei publicamente as vitórias deles e dei-lhes autonomia para propor melhorias no processo. Implementei daily standups com cada time e criei canais dedicados no Slack onde eles podiam escalar issues diretamente para mim. Também estabeleci KPIs específicos para cada região e bonus por performance.",
          "a_en": "I gave them complete ownership of their workstreams. The Poland team was the 'owner of data quality', not just a task executor. I publicly celebrated their wins and gave them autonomy to propose process improvements. I implemented daily standups with each team and created dedicated Slack channels where they could escalate issues directly to me. I also established specific KPIs for each region and performance bonuses."
        },
        {
          "q": "Qual foi a decisão mais difícil que você teve que tomar sem ter todos os dados disponíveis?",
          "q_en": "What was the most difficult decision you had to make without having all the data available?",
          "a": "Tive que decidir congelar a abertura de novas contas de investimento duas semanas antes da migração, mesmo sem dados precisos do impacto na receita. Meu instinto, baseado no risco, era que a complexidade de migrar contas 'em trânsito' era muito alta. A decisão se provou correta - evitamos 847 contas problemáticas que teriam causado atrasos significativos. O custo da oportunidade perdida foi de ~R$ 2.3M, mas o custo de uma migração atrasada seria de R$ 15M+.",
          "a_en": "I had to decide to freeze the opening of new investment accounts two weeks before migration, even without precise data on revenue impact. My instinct, based on risk, was that the complexity of migrating 'in-transit' accounts was too high. The decision proved correct - we avoided 847 problematic accounts that would have caused significant delays. The opportunity cost was ~R$ 2.3M, but the cost of delayed migration would have been R$ 15M+."
        },
        {
          "q": "Além dos dashboards, que outro mecanismo você criou para garantir a visibilidade do projeto para os reguladores?",
          "q_en": "Besides dashboards, what other mechanism did you create to ensure project visibility for regulators?",
          "a": "Criei um 'RAID Log' (Risks, Assumptions, Issues, Dependencies) específico para compliance, que era compartilhado proativamente com os auditores do BACEN. Isso mostrou que tínhamos um controle rigoroso e que não estávamos escondendo nada. O log era atualizado diariamente e incluía não apenas problemas identificados, mas também medidas preventivas implementadas. Também implementei reuniões semanais com representantes do BACEN para review status e answer questions em tempo real.",
          "a_en": "I created a 'RAID Log' (Risks, Assumptions, Issues, Dependencies) specific for compliance, which was proactively shared with BACEN auditors. This showed we had rigorous control and weren't hiding anything. The log was updated daily and included not only identified problems but also preventive measures implemented. I also implemented weekly meetings with BACEN representatives to review status and answer questions in real time."
        },        {
          "q": "'Zero perda de dados' é um objetivo absoluto. Qual foi o processo de validação final que você instituí para garantir isso?",
          "q_en": "'Zero data loss' is an absolute goal. What was the final validation process you instituted to ensure this?",
          "a": "Instituí uma 'reconciliação de três vias'. Um time independente rodava queries no banco de dados de origem (HSBC), no de destino (Bradesco) e os comparava com um terceiro relatório de controle. A migração só era declarada completa quando os três batiam 100%. Implementei também checksums MD5 para cada batch de dados migrados, e um processo de 'double-blind verification' onde duas pessoas diferentes validavam os mesmos dados sem saber o resultado da outra.",
          "a_en": "I instituted a 'three-way reconciliation'. An independent team ran queries on the source database (HSBC), destination database (Bradesco) and compared them with a third control report. Migration was only declared complete when all three matched 100%. I also implemented MD5 checksums for each batch of migrated data, and a 'double-blind verification' process where two different people validated the same data without knowing the other's result."
        },
        {
          "q": "Se um stakeholder sênior dissesse 'isso não é seu trabalho', como você responderia?",
          "q_en": "If a senior stakeholder said 'that's not your job', how would you respond?",
          "a": "Eu responderia: 'Eu entendo que isso pode estar fora do meu escopo formal, mas o sucesso desta migração é responsabilidade de todos nós. Estou agindo porque vejo um risco para o resultado final, e meu trabalho é garantir que entreguemos isso sem falhas'. Se necessário, escalaria para o sponsor executivo explicando que ownership significa assumir responsabilidade pelo resultado, não apenas pelas tarefas formais. Na prática, isso aconteceu 3 vezes e em todas consegui demonstrar valor agregado.",
          "a_en": "I would respond: 'I understand this may be outside my formal scope, but the success of this migration is all of our responsibility. I'm acting because I see a risk to the final outcome, and my job is to ensure we deliver this flawlessly'. If necessary, I would escalate to the executive sponsor explaining that ownership means taking responsibility for results, not just formal tasks. In practice, this happened 3 times and in all cases I was able to demonstrate added value."
        },
        {
          "q": "Como você equilibrou o foco nos detalhes técnicos com a necessidade de manter a visão estratégica do programa?",
          "q_en": "How did you balance focus on technical details with the need to maintain strategic program vision?",
          "a": "Eu bloqueava minha agenda: manhãs para 'mergulhar fundo' com as equipes técnicas e tardes para reuniões estratégicas e de stakeholders. Essa separação disciplinada me permitiu operar nos dois níveis sem perder o contexto. Implementei também um 'context switching protocol': 15 minutos entre reuniões para documentar insights técnicos e preparar mindset estratégico. Mantinha um 'war room' dashboard que mostrava both technical metrics e business KPIs lado a lado.",
          "a_en": "I blocked my schedule: mornings to 'dive deep' with technical teams and afternoons for strategic and stakeholder meetings. This disciplined separation allowed me to operate at both levels without losing context. I also implemented a 'context switching protocol': 15 minutes between meetings to document technical insights and prepare strategic mindset. I maintained a 'war room' dashboard that showed both technical metrics and business KPIs side by side."
        },
        {
          "q": "Qual foi a sua maior falha pessoal durante esse projeto e como você a corrigiu?",
          "q_en": "What was your biggest personal failure during this project and how did you correct it?",
          "a": "Minha falha inicial foi assumir que a comunicação entre os times globais estava fluindo bem. Após um mal-entendido causar um atraso, instituí uma 'daily scrum' de 15 minutos com os líderes de cada país. Isso corrigiu a falha de comunicação imediatamente. Especificamente, o time da China implementou uma validação diferente da especificada, causando 3 dias de retrabalho. Aprendi que ownership inclui over-communicate, não apenas communicate.",
          "a_en": "My initial failure was assuming communication between global teams was flowing well. After a misunderstanding caused a delay, I instituted a 15-minute 'daily scrum' with leaders from each country. This immediately corrected the communication failure. Specifically, the China team implemented a different validation than specified, causing 3 days of rework. I learned that ownership includes over-communicate, not just communicate."
        },
        {
          "q": "Como você comemorou o sucesso com a equipe e reconheceu a contribuição de cada um?",
          "q_en": "How did you celebrate success with the team and recognize everyone's contribution?",
          "a": "Após a migração, organizei uma videoconferência com todos os times globais. Projetei um slide com o nome de cada membro da equipe, de todas as localidades, e agradeci publicamente a contribuição específica de vários deles, garantindo que o reconhecimento fosse pessoal e não apenas para 'a equipe'. Também criei um 'Hall of Fame' no portal interno com fotos e quotes de cada team member. Além disso, coordenei com RH para que todos recebessem um bonus de performance e letter of commendation.",
          "a_en": "After migration, I organized a video conference with all global teams. I projected a slide with each team member's name from all locations and publicly thanked several for their specific contributions, ensuring recognition was personal and not just for 'the team'. I also created a 'Hall of Fame' on the internal portal with photos and quotes from each team member. Additionally, I coordinated with HR so everyone received a performance bonus and letter of commendation."
        }
      ]
    },
    {
      "title": "Estruturação do PMO do Zero na Secretaria da Fazenda (SEFAZ-RS)",
      "pt": {
        "s": "A Secretaria da Fazenda do RS enfrentava sistemas obsoletos, processos manuais e falta de governança para projetos estratégicos, resultando em baixa eficiência e riscos de não conformidade com a Lei de Responsabilidade Fiscal.",
        "t": "Minha tarefa era pensar a longo prazo e agir em nome de toda a organização. Fui encarregado de criar o primeiro PMO central da SEFAZ do zero, estabelecendo metodologias para gerenciar mais de 50 projetos estratégicos.",
        "a": "Eu assumi total responsabilidade. Desenvolvi e implementei um framework de governança baseado no PMI. Criei o primeiro portfólio digital de projetos, centralizando todas as iniciativas e desenvolvendo dashboards para reportar ao Secretário. Liderei pessoalmente a modernização do sistema de arrecadação e revisei contratos de TI.",
        "r": "A criação do PMO se tornou uma referência. As iniciativas que liderei resultaram em um aumento de 12% na arrecadação estadual e uma redução de 15% nos custos operacionais, garantindo o cumprimento da Lei de Responsabilidade Fiscal. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que esta experiência me ensinou que 'Ownership' é sobre construir algo duradouro que beneficie toda a organização. Exigiu que eu pensasse como um dono do negócio (da eficiência do estado), tomando decisões difíceis e construindo uma base de governança que perduraria. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "The State Treasury of RS (SEFAZ) faced outdated systems, manual processes, and a lack of governance for strategic projects, resulting in low efficiency and risks of non-compliance with the Fiscal Responsibility Law.",
        "t": "My task was to think long-term and act on behalf of the entire organization. I was tasked with creating the first central PMO at SEFAZ from scratch, establishing methodologies to manage over 50 strategic projects.",
        "a": "I took full ownership. I developed and implemented a governance framework based on PMI. I created the first digital project portfolio, centralizing all initiatives and developing dashboards to report to the Secretary. I personally led the modernization of the tax collection system and reviewed IT contracts.",
        "r": "The creation of the PMO became a benchmark. The initiatives I led resulted in a 12% increase in state revenue and a 15% reduction in operational costs, ensuring compliance with the Fiscal Responsibility Law.",
        "l": "This experience taught me that 'Ownership' is about building something lasting that benefits the entire organization. It required me to think like a business owner (of the state's efficiency), making tough decisions and building a foundation of governance that would endure. In retrospect, I could have anticipated stakeholder risks and today I start by engaging them from the beginning."
      },      "fups": [
        {
          "q": "Qual foi a maior resistência cultural que você enfrentou ao criar o PMO e como você a superou?",
          "q_en": "What was the biggest cultural resistance you faced when creating the PMO and how did you overcome it?",
          "a": "A maior resistência foi o ceticismo de que um controle centralizado engessaria os processos. Eu superei isso focando em 'quick wins': automatizei relatórios que antes eram manuais e demorados. Ao mostrar que o PMO era um facilitador que economizava tempo, e não um burocrata, a percepção mudou. Especificamente, reduzi de 8 horas para 30 minutos o tempo para gerar relatório de status de projetos, e isso convenceu os céticos.",
          "a_en": "The biggest resistance was skepticism that centralized control would bureaucratize processes. I overcame this by focusing on 'quick wins': I automated reports that were previously manual and time-consuming. By showing the PMO was a facilitator that saved time, not a bureaucrat, perception changed. Specifically, I reduced project status report generation time from 8 hours to 30 minutes, and this convinced the skeptics."
        },
        {
          "q": "Como você priorizou os mais de 50 projetos estratégicos? Qual critério você criou?",
          "q_en": "How did you prioritize the 50+ strategic projects? What criteria did you create?",
          "a": "Criei um modelo de pontuação simples, baseado em três critérios: impacto na arrecadação, urgência legal (Lei de Responsabilidade Fiscal) e economia de custos. Os projetos com maior pontuação combinada receberam prioridade máxima de recursos e atenção. A fórmula era: (Impacto Arrecadação × 40%) + (Urgência Legal × 35%) + (Economia Custos × 25%). Projetos com score >75 entravam no 'fast track' com recursos dedicados.",
          "a_en": "I created a simple scoring model based on three criteria: revenue impact, legal urgency (Fiscal Responsibility Law), and cost savings. Projects with highest combined scores received maximum resource priority and attention. The formula was: (Revenue Impact × 40%) + (Legal Urgency × 35%) + (Cost Savings × 25%). Projects with score >75 entered 'fast track' with dedicated resources."
        },
        {
          "q": "Qual foi o primeiro 'quick win' que você entregou para ganhar a confiança dos líderes da Secretaria?",
          "q_en": "What was the first 'quick win' you delivered to gain trust from Secretary leaders?",
          "a": "O primeiro 'quick win' foi a criação de um dashboard executivo que consolidava o status dos 10 principais projetos em uma única tela, atualizado em tempo real. Isso substituiu dezenas de e-mails e planilhas, dando visibilidade imediata ao Secretário e ganhando sua confiança. Implementei em 15 dias usando Power BI conectado às bases existentes. O Secretário comentou: 'Pela primeira vez em anos sei exatamente o que está acontecendo'.",
          "a_en": "The first 'quick win' was creating an executive dashboard that consolidated the status of the 10 main projects on a single screen, updated in real time. This replaced dozens of emails and spreadsheets, giving immediate visibility to the Secretary and gaining his trust. I implemented it in 15 days using Power BI connected to existing databases. The Secretary commented: 'For the first time in years I know exactly what's happening'."
        },
        {
          "q": "Descreva em detalhes o processo que você usou para renegociar um contrato de TI. Qual foi a economia exata?",
          "q_en": "Describe in detail the process you used to renegotiate an IT contract. What was the exact savings?",
          "a": "Eu revisei pessoalmente um contrato de licenciamento de software linha por linha. Descobri que pagávamos por 20% a mais de licenças do que o número de funcionários ativos. Apresentei essa evidência ao fornecedor e renegociamos o contrato, gerando uma economia imediata de R$ 1.2 milhão por ano. O processo: 1) Audit de usage real vs licenças pagas; 2) Benchmarking com outros órgãos; 3) Apresentação de dados ao vendor; 4) Negociação de novo modelo baseado em usage real + growth projection.",
          "a_en": "I personally reviewed a software licensing contract line by line. I discovered we were paying for 20% more licenses than the number of active employees. I presented this evidence to the supplier and we renegotiated the contract, generating immediate savings of R$ 1.2 million per year. The process: 1) Audit of real usage vs paid licenses; 2) Benchmarking with other agencies; 3) Data presentation to vendor; 4) Negotiation of new model based on real usage + growth projection."
        },
        {
          "q": "Como você, pessoalmente, garantiu que a modernização não parasse depois que você saísse do projeto?",
          "q_en": "How did you personally ensure modernization wouldn't stop after you left the project?",
          "a": "Meu foco foi em capacitar a equipe interna. Criei programas de treinamento em gestão de projetos e sistemas digitais, formando servidores que se tornaram os novos guardiões dos processos. Deixei um legado de conhecimento, não apenas de ferramentas. Especificamente: formei 12 servidores em PMP, criei documentação completa dos processos, e estabeleci rituais de governance (reuniões semanais, reports mensais) que continuaram rodando autonomamente.",
          "a_en": "My focus was empowering the internal team. I created training programs in project management and digital systems, training civil servants who became the new guardians of processes. I left a legacy of knowledge, not just tools. Specifically: I trained 12 civil servants in PMP, created complete process documentation, and established governance rituals (weekly meetings, monthly reports) that continued running autonomously."
        },
        {
          "q": "Qual foi a decisão mais impopular que você tomou em nome do benefício a longo prazo do estado?",
          "q_en": "What was the most unpopular decision you made for the long-term benefit of the state?",
          "a": "A decisão de descontinuar um sistema antigo, porém popular entre alguns setores, para centralizar tudo em uma nova plataforma digital. Houve resistência, mas a longo prazo a decisão eliminou redundâncias e economizou milhões em manutenção. O sistema antigo (AS400) era amado pelos usuários seniors, mas custava R$ 800K/ano em manutenção e impedia integração com sistemas modernos. A migração forçada gerou protestos, mas economizou R$ 3.2M em 4 anos.",
          "a_en": "The decision to discontinue an old system that was popular among some sectors, to centralize everything on a new digital platform. There was resistance, but long-term the decision eliminated redundancies and saved millions in maintenance. The old system (AS400) was loved by senior users, but cost R$ 800K/year in maintenance and prevented integration with modern systems. The forced migration generated protests, but saved R$ 3.2M over 4 years."
        },
        {
          "q": "Como você mediu o antes e o depois do aumento de 12% na arrecadação para provar o impacto do seu trabalho?",
          "q_en": "How did you measure before and after the 12% revenue increase to prove your work's impact?",
          "a": "Cruzei dados da arrecadação por setor com as datas de implementação da digitalização de cada processo. A correlação era clara: os setores que migraram primeiro para o sistema digital tiveram um aumento na arrecadação de 10 a 15% nos seis meses seguintes, enquanto os outros permaneceram estáveis. Usei análise de cohort: grupo controle (setores não digitalizados) vs grupo teste (setores digitalizados). O delta foi estatisticamente significativo (p<0.01).",
          "a_en": "I cross-referenced revenue data by sector with digitalization implementation dates for each process. The correlation was clear: sectors that migrated first to the digital system had 10-15% revenue increase in the following six months, while others remained stable. I used cohort analysis: control group (non-digitized sectors) vs test group (digitized sectors). The delta was statistically significant (p<0.01)."
        },
        {
          "q": "Que ferramenta ou processo que você implementou foi o mais simples, mas gerou o maior impacto?",
          "q_en": "What tool or process you implemented was the simplest but generated the biggest impact?",
          "a": "Foi um template de 'Project Charter' de uma página. Obrigava os gestores a definirem o escopo, objetivos e métricas de sucesso de forma concisa antes de começar qualquer projeto. Isso eliminou projetos mal definidos e economizou milhares de horas de trabalho. Template tinha 6 seções: Objetivo (1 frase), Escopo (3 bullets), Não-escopo (3 bullets), Métricas de sucesso (3 KPIs), Timeline (milestones principais), Budget (estimativa). Rejeitávamos qualquer projeto sem charter aprovado.",
          "a_en": "It was a one-page 'Project Charter' template. It forced managers to define scope, objectives, and success metrics concisely before starting any project. This eliminated poorly defined projects and saved thousands of work hours. Template had 6 sections: Objective (1 sentence), Scope (3 bullets), Non-scope (3 bullets), Success metrics (3 KPIs), Timeline (main milestones), Budget (estimate). We rejected any project without approved charter."
        },
        {
          "q": "Se você tivesse um orçamento 20% maior, o que você teria feito de diferente?",
          "q_en": "If you had a 20% larger budget, what would you have done differently?",
          "a": "Eu teria investido mais pesadamente em change management e comunicação. A parte técnica foi bem, mas com mais recursos, eu teria criado uma campanha de comunicação interna mais robusta para acelerar a adoção das novas ferramentas pelos servidores. Especificamente: 1) Contrataria consultores de change management; 2) Criaria programa de 'digital champions'; 3) Investiria em UX/UI mais intuitivo; 4) Implementaria gamificação para adoption. Isso teria reduzido o tempo de adoção de 8 para 4 meses.",
          "a_en": "I would have invested more heavily in change management and communication. The technical part went well, but with more resources, I would have created a more robust internal communication campaign to accelerate adoption of new tools by civil servants. Specifically: 1) Hire change management consultants; 2) Create 'digital champions' program; 3) Invest in more intuitive UX/UI; 4) Implement gamification for adoption. This would have reduced adoption time from 8 to 4 months."
        },
        {
          "q": "Qual foi a sua maior frustração nesse projeto e como você lidou com ela?",
          "q_en": "What was your biggest frustration in this project and how did you handle it?",
          "a": "A lentidão do processo de aquisição pública foi minha maior frustração, atrasando a compra de softwares essenciais. Lidei com isso focando no que eu podia controlar: otimizando ao máximo as ferramentas que já tínhamos e preparando todos os processos para que, quando o software chegasse, a implementação fosse imediata. Criei 'implementation roadmaps' detalhados, treinei equipes em simuladores, e nego trilh de aprovação antecipada. Quando o software finalmente chegou, implementação levou 3 semanas em vez dos 3 meses previstos.",
          "a_en": "The slowness of public procurement process was my biggest frustration, delaying purchase of essential software. I handled this by focusing on what I could control: optimizing existing tools to the maximum and preparing all processes so that when software arrived, implementation would be immediate. I created detailed 'implementation roadmaps', trained teams on simulators, and negotiated advance approval procedures. When software finally arrived, implementation took 3 weeks instead of the projected 3 months."
        }
      ]
    }
  ]
};

export default ownership_data;