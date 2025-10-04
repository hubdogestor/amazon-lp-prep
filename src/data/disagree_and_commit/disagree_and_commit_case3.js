// Case 3 - disagree_and_commit
const case_3 = {
  id: "bradesco-mvp-feature-prioritization",
  title: "Discordância sobre Priorização de Feature no MVP",
  title_pt: "Discordância Fundamentada em Dados Sobre a Priorização de um Feature Solicitado por um Stakeholder Sênior",
  title_en: "Data-Driven Disagreement on MVP Feature Prioritization with Senior Stakeholder",
  company: "Bradesco Next",
  period: "03/2017--12/2017",
  isTopCase: false,
  pt: {
    s: `Um VP sênior do Bradesco estava defendendo com paixão a priorização de uma funcionalidade complexa de 'gerenciador de investimentos' para nosso MVP de lançamento. A equipe, para evitar conflito, estava inclinada a aceitar, mesmo sabendo que isso colocaria em risco nosso prazo de 12 meses para o lançamento.`,
    t: `Meu papel individual: eu liderei end-to-end, defini escopo e decisões críticas, e atuei como owner único. Como Product Owner responsável por definir escopo e prioridades do MVP, meu papel era proteger o prazo e garantir que o MVP fosse focado no essencial para o cliente. Eu sabia que a inclusão dessa funcionalidade adicionaria 3 meses ao cronograma. Minha tarefa era ter a firmeza de discordar do VP, uma ação politicamente arriscada em ambiente corporativo hierárquico, mas necessária para o sucesso do projeto e para atender às verdadeiras necessidades dos nossos clientes target.`,
    a: `Nota de contexto: conectei as mudanças a operações de pagamento onde cabia (ex.: conciliação/settlement, antifraude, SLA de liquidação). Ações pessoais: priorizei mudanças, alinhei stakeholders, tomei decisões de trade-off e removi bloqueios. Preparação para 1-on-1 com VP: 4 horas. Criei 3 documentos: (1) Summary executivo de 1 página com dados Forrester sobre priorities millennials em banking, (2) Spreadsheet com timeline comparativo (MVP básico vs. MVP com investimentos), (3) Mockup visual mostrando roadmap com feature dele em posição de destaque no Q3 2018. Usei relatórios específicos da Forrester e da Gartner sobre 'millennial banking' que demonstravam que, para o público-alvo do Next, as funcionalidades mais valorizadas eram simplicidade no onboarding (87% dos respondentes) e transações do dia a dia (79%). Investimentos apareciam como necessidade secundária (34%). Agendei reunião 1-a-1 com o VP, começando validando sua visão de longo prazo: 'Sua visão de tornar o Next uma plataforma completa de serviços financeiros é o futuro que queremos construir.' Em seguida, enquadrei minha discordância como questão de sequenciamento: 'Minha proposta é uma tática para chegarmos lá mais rápido: conquistamos o cliente com a simplicidade que ele espera hoje, e o encantamos com a plataforma de investimentos amanhã'. Para reforçar meu ponto, trouxe quote anônimo de entrevista com usuário target: 'Eu só quero um app que pague minhas contas sem dor de cabeça. Se eu quiser investir, eu abro o app da minha corretora'. Após ele concordar com o sequenciamento, criei épico em nosso backlog chamado 'Futuro: Plataforma de Investimentos' e o convidei para ser o 'padrinho' do discovery, garantindo seu envolvimento contínuo.`,
    r: `A funcionalidade foi adiada, o que foi crucial para cumprirmos o prazo de lançamento de 12 meses. O foco no básico permitiu que investíssemos mais tempo em testes de segurança no onboarding, resultando em um lançamento com zero incidentes críticos. Taxa de conclusão do onboarding ficou em 89%, 30% acima da projetada. A funcionalidade de investimentos, lançada 9 meses depois, foi mais robusta por ter tido mais tempo de discovery e se beneficiou da base de 500k usuários já estabelecida, alcançando 15% de adoção nos primeiros 60 dias.`,
    l: `Aprendi que é possível discordar das pessoas mais seniores se você o fizer com respeito, com dados, e focando no objetivo comum, equilibrando rigor analítico com construção de relacionamento. A chave é separar a ideia da pessoa e alinhar na visão de longo prazo. Essa abordagem de 'alinhar na visão, discordar na tática' se tornou meu principal modelo mental para gerenciar stakeholders seniores e criar confiança através da transparência e entrega de resultados.`
  },
  en: {
    s: `A senior VP at Bradesco was passionately advocating for prioritizing a complex 'investment manager' functionality in my launch MVP. The team, to avoid conflict, was inclined to accept, even knowing this would put my 12-month launch deadline at risk.`,
    t: `My individual role: I led end-to-end, set scope and critical decisions, and acted as the single-threaded owner. As Product Owner responsible for defining MVP scope and priorities, my role was to protect the timeline and ensure the MVP focused on what was essential for the customer. I knew that including this functionality would add 3 months to the schedule. My task was to have the backbone to disagree with the VP, a politically risky action in hierarchical corporate environment, but necessary for project success and to meet my target customers' true needs.`,
    a: `Context note: I tied changes to payment operations when applicable (e.g., reconciliation/settlement, fraud prevention, settlement SLA). Personal actions: I drove execution—prioritized changes, aligned stakeholders, made trade-offs, and unblocked teams. Preparation for 1-on-1 with VP: 4 hours. I created 3 documents: (1) Executive summary 1-page with Forrester data on millennial banking priorities, (2) Comparative timeline spreadsheet (basic MVP vs. MVP with investments), (3) Visual mockup showing roadmap with his feature prominently positioned in Q3 2018. I used specific Forrester and Gartner reports on 'millennial banking' that demonstrated that for Next's target audience, the most valued functionalities were onboarding simplicity (87% of respondents) and day-to-day transactions (79%). Investments appeared as secondary need (34%). I scheduled a 1-on-1 meeting with the VP, starting by validating his long-term vision: 'Your vision of making Next a complete financial services platform is the future I want to build.' Then I framed my disagreement as a sequencing issue: 'My proposal is a tactic to get there faster: I win customers with the simplicity they expect today, and delight them with the investment platform tomorrow'. To reinforce my point, I brought anonymous quote from target user interview: 'I just want an app that pays my bills without headaches. If I want to invest, I'll open my brokerage app'. After he agreed with the sequencing, I created an epic in my backlog called 'Future: Investment Platform' and invited him to be the 'godfather' of that discovery, ensuring his continued involvement.`,
    r: `The functionality was postponed, which was crucial for meeting my 12-month launch deadline. Focus on basics allowed us to invest more time in onboarding security testing, resulting in a launch with zero critical incidents. Onboarding completion rate reached 89%, 30% above projected. The investment functionality, launched 9 months later, was more robust for having had more discovery time and benefited from an already established base of 500k users, achieving 15% adoption in the first 60 days.`,
    l: `I learned that it's possible to disagree with the most senior people if you do it with respect, with data, and focusing on the common goal, balancing analytical rigor with relationship building. The key is to separate the idea from the person and align on the long-term vision. This approach of 'align on vision, disagree on tactics' became my main mental model for managing senior stakeholders and building trust through transparency and delivery of results.`
  },
  fups: [
    {
        "q": "Como você escolheu e analisou os dados de mercado para assegurar que eles fossem relevantes e convincentes para o VP?",
        "a": "Eu foquei em fontes que o próprio banco já considerava credíveis, como Gartner e Forrester. Selecionei os relatórios específicos sobre o comportamento bancário do público-alvo do Next (millennials, digital-first) e extraí os 3 principais insights que sustentavam meu argumento, apresentando-os de forma visual e resumida para respeitar o tempo dele.",
        "q_en": "How did you choose and analyze market data to ensure it was relevant and convincing for the VP?",
        "a_en": "I focused on sources the bank itself already considered credible, like Gartner and Forrester. I selected specific reports on banking behavior of Next's target audience (millennials, digital-first) and extracted the 3 main insights that supported my argument, presenting them visually and summarized to respect his time."
    },
    {
        "q": "Quais foram os maiores desafios ao alinhar o VP com sua proposta, e como você os superou?",
        "a": "O maior desafio foi o apego emocional dele à ideia, que ele via como um grande diferencial. Superei isso não invalidando a ideia, mas celebrando-a e a colocando em um pedestal como o 'próximo grande passo' do meu roadmap. A mudança de 'não' para 'ainda não, mas vamos começar a preparar agora' foi a chave para o alinhamento.",
        "q_en": "What were the biggest challenges in aligning the VP with your proposal, and how did you overcome them?",
        "a_en": "The biggest challenge was his emotional attachment to the idea, which he saw as a great differentiator. I overcame this not by invalidating the idea, but by celebrating it and putting it on a pedestal as the 'next big step' in my roadmap. The shift from 'no' to 'not yet, but let's start preparing now' was key to alignment."
    },
    {
        "q": "Houve algum feedback ou reação inicial negativa do VP durante a apresentação? Como você lidou com isso?",
        "a": "Sim, a reação inicial foi de impaciência, com a pergunta: 'Então você está me dizendo para lançarmos um produto básico?'. Eu lidei com isso reformulando a narrativa: 'Não, estou propondo lançarmos um produto focado. Um produto que seja o melhor do mundo em onboarding e transações, as duas coisas que meu clientes mais valorizam. Vamos ser excelentes no essencial primeiro'.",
        "q_en": "Was there any negative feedback or initial reaction from the VP during the presentation? How did you handle it?",
        "a_en": "Yes, the initial reaction was impatience, with the question: 'So you're telling me to launch a basic product?'. I handled this by reframing the narrative: 'No, I'm proposing I launch a focused product. A product that's the world's best at onboarding and transactions, the two things my customers value most. Let's be excellent at the essentials first'."
    },
    {
        "q": "Como o foco no básico para o MVP influenciou a experiência do cliente e os resultados do lançamento?",
        "a": "Influenciou massivamente. A simplicidade do produto foi o principal elogio nas reviews das app stores (4.2 estrelas vs. 3.1 da concorrência) e contribuiu para um NPS inicial de 62, acima da meta de 55. Além disso, a robustez do onboarding, que recebeu mais atenção de testes, resultou em taxa de conclusão 30% maior do que a projetada, um driver direto para o crescimento inicial de usuários.",
        "q_en": "How did focusing on basics for the MVP influence customer experience and launch results?",
        "a_en": "It influenced massively. Product simplicity was the main praise in app store reviews (4.2 stars vs. 3.1 from competition) and contributed to an initial NPS of 62, above target of 55. Additionally, onboarding robustness, which received more testing attention, resulted in a completion rate 30% higher than projected, a direct driver for initial user growth."
    },
    {
        "q": "Se a funcionalidade de investimentos tivesse sido priorizada no MVP, quais riscos específicos você previa em relação ao prazo e à execução?",
        "a": "Eu previ três riscos principais: 1) Risco de Prazo: um atraso de no mínimo 3 meses no lançamento, perdendo janela de mercado crítica. 2) Risco de Qualidade: teríamos que apressar os testes de segurança do core do app para acomodar o novo escopo. 3) Risco de Adoção: lançaríamos uma funcionalidade complexa que apenas 34% do meu público inicial usaria, gerando percepção de app 'inchado' e complicado.",
        "q_en": "If the investment functionality had been prioritized in the MVP, what specific risks did you foresee regarding timeline and execution?",
        "a_en": "I foresaw three main risks: 1) Timeline Risk: a delay of at least 3 months in launch, missing critical market window. 2) Quality Risk: I would have to rush security testing of the app's core to accommodate the new scope. 3) Adoption Risk: I would launch a complex functionality that only 34% of my initial audience would use, creating perception of a 'bloated' and complicated app."
    },
    {
        "q": "Qual foi o maior risco pessoal que você correu ao desafiar um VP?",
        "a": "O maior risco era ser rotulado como alguém que 'não colabora' ou que 'cria barreiras', o que poderia impactar minha carreira no banco. Eu mitiguei isso focando a conversa inteiramente nos dados e no bem do cliente, sem nenhum traço de confronto pessoal. Também ofereci uma alternativa construtiva que validava a visão dele, apenas mudando o timing.",
        "q_en": "What was the biggest personal risk you took by challenging a VP?",
        "a_en": "The biggest risk was being labeled as someone who 'doesn't collaborate' or 'creates barriers', which could impact my career at the bank. I mitigated this by focusing the conversation entirely on data and customer benefit, without any trace of personal confrontation. I also offered a constructive alternative that validated his vision, just changing the timing."
    },
    {
        "q": "Qual a diferença, na sua visão, entre ser 'tenaz' e ser 'teimoso'?",
        "a": "Ser tenaz é defender uma posição com base em dados e lógica, mas estar aberto a novas informações que possam mudar sua perspectiva. Ser teimoso é defender uma posição por ego, ignorando dados que a contradigam. A tenacidade é sobre a busca pela melhor resposta para o cliente; a teimosia é sobre estar certo a qualquer custo.",
        "q_en": "What's the difference, in your view, between being 'tenacious' and being 'stubborn'?",
        "a_en": "Being tenacious is defending a position based on data and logic, but being open to new information that might change your perspective. Being stubborn is defending a position out of ego, ignoring data that contradicts it. Tenacity is about seeking the best answer for the customer; stubbornness is about being right at any cost."
    },
    {
        "q": "Como o compromisso total com uma decisão da qual você discordou fortalece a confiança da equipe?",
        "a": "Mostra que você é leal ao time e à missão, não ao seu próprio ego. Quando as pessoas veem que você executa com o mesmo vigor uma decisão que não foi a sua, elas passam a confiar que suas discordâncias futuras serão sempre sobre o que é melhor para o negócio, não sobre preferências pessoais. Isso cria um ambiente onde as pessoas se sentem seguras para discordar construtivamente.",
        "q_en": "How does total commitment to a decision you disagreed with strengthen team trust?",
        "a_en": "It shows that you're loyal to the team and mission, not to your own ego. When people see you execute with the same vigor a decision that wasn't yours, they come to trust that your future disagreements will always be about what's best for the business, not personal preferences. This creates an environment where people feel safe to disagree constructively."
    },
    {
        "q": "Como essa experiência mudou sua forma de lidar com stakeholders seniores?",
        "a": "Ensinou-me a importância da preparação meticulosa e da diplomacia estratégica. Hoje, antes de uma conversa difícil com um stakeholder sênior, eu sempre preparo minha argumentação baseada em dados e, crucialmente, penso em como posso enquadrar minha proposta de uma forma que valide a visão dele e nos posicione como parceiros na busca pelo melhor resultado para o cliente.",
        "q_en": "How did this experience change your way of dealing with senior stakeholders?",
        "a_en": "It taught me the importance of meticulous preparation and strategic diplomacy. Today, before a difficult conversation with a senior stakeholder, I always prepare my data-based argument and, crucially, think about how I can frame my proposal in a way that validates their vision and positions us as partners in seeking the best result for the customer."
    },
    {
        "q": "Quando você discorda mas não tem certeza absoluta, como você procede?",
        "a": "Eu enquadro como uma hipótese que precisa ser testada. Digo algo como: 'Tenho uma preocupação baseada em [dados específicos], mas reconheço que posso estar errado. Podemos fazer um pequeno teste ou piloto para validar qual abordagem funciona melhor?' Isso mantém o espírito de backbone (levantar a preocupação), mas de forma colaborativa e orientada a dados.",
        "q_en": "When you disagree but aren't absolutely certain, how do you proceed?",
        "a_en": "I frame it as a hypothesis that needs to be tested. I say something like: 'I have a concern based on [specific data], but I recognize I might be wrong. Can I do a small test or pilot to validate which approach works better?' This maintains the backbone spirit (raising the concern), but in a collaborative and data-driven way."
    }
]
};

export default case_3;
