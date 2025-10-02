const broad_responsibility = {
  principle: {
    title: "Sucesso e crescimento trazem maior responsabilidade",
    title_en: "Success and Scale Bring Broad Responsibility",
    description: "Os líderes estão conscientes de que podemos fazer coisas incríveis juntos quando olhamos além da fronteira de nossa própria responsabilidade. Eles ajudam os outros, assumem responsabilidades mais amplas e levam em conta o impacto de suas decisões na comunidade mais ampla.",
    description_en: "Leaders are conscious that we can do amazing things together when we look beyond the boundary of our own accountability. They help others, take on broader responsibilities, and consider the impact of their decisions on the broader community.",
    icon: "🌍"
  },
  id: "broad_responsibility",
  name: "Sucesso e crescimento trazem maior responsabilidade",
  cases: [
    {
      id: "unimed-lgpd-compliance",
      title: "Conformidade LGPD em Produtos Digitais para Milhões de Clientes",
      title_pt: "Garantia de Conformidade com a LGPD no Lançamento de Produtos Digitais para Milhões de Clientes",
      title_en: "LGPD Compliance Assurance in Digital Product Launch for Millions of Customers",
      company: "Unimed",
      period: "01/2021--12/2021",
      isTopCase: true,
      pt: {
        s: "Em 2021, a Lei Geral de Proteção de Dados (LGPD) entrou em pleno vigor. Na Unimed, nosso sucesso e escala significavam que éramos guardiões dos dados de saúde -- a categoria mais sensível de dados pessoais -- de centenas de milhares de pessoas. Ao liderar o lançamento de 4 novos produtos digitais, a responsabilidade de garantir a conformidade não era apenas uma obrigação legal, mas um imperativo ético que impactaria milhões de vidas.",
        t: "Minha responsabilidade era garantir que cada produto fosse desenhado desde o início com os princípios de 'Privacy by Design', estabelecendo um novo e mais alto padrão de governança de dados para a área de inovação. Era minha responsabilidade proteger não apenas os dados dos clientes atuais, mas também estabelecer precedentes que protegeriam futuras gerações de usuários.",
        a: "Comecei com humildade, organizando workshops com nosso DPO. Os workshops cobriram tópicos como 'Bases Legais para Tratamento de Dados de Saúde' e 'Princípios de Minimização de Dados', preparando a equipe para pensar em privacidade desde a concepção. Incorporei um 'Privacy Impact Assessment' (PIA) como um 'quality gate' obrigatório em nosso processo. Nenhuma nova funcionalidade poderia avançar sem a aprovação formal do DPO. Para o produto de Atenção Primária à Saúde (APS), que envolvia o compartilhamento de dados com uma equipe multidisciplinar, liderei o desenho de um novo 'Painel de Consentimento Granular'. O desafio foi técnico e de UX: criamos uma interface simples onde o cliente podia, com checkboxes, controlar exatamente quais dados (ex: histórico, exames) compartilhava com cada profissional (médico, nutricionista). Ao desenhar o produto Pet Saúde, consideramos o ciclo de vida completo do dado. Criamos um processo automatizado, comunicado de forma transparente na política de privacidade, onde os dados do pet eram anonimizados após 12 meses de inatividade do plano, garantindo que não retínhamos informações desnecessariamente.",
        r: "Lançamos 4 novos produtos digitais em total conformidade com a LGPD, passando por todas as auditorias sem ressalvas. O Painel de Consentimento Granular foi tão bem recebido que foi adotado como o novo padrão para todos os produtos digitais da empresa, incluindo o aplicativo principal que servia a mais de 600 mil usuários, melhorando a governança de dados em escala. Não tivemos nenhum incidente de privacidade ou vazamento de dados relacionado aos novos produtos, protegendo a confiança de centenas de milhares de clientes.",
        l: "Aprendi que, com a escala, a responsabilidade sobre os efeitos secundários das nossas ações cresce exponencialmente. Um líder precisa ser o guardião da confiança do cliente. Esse aprendizado influenciou diretamente a concepção da minha startup, onde a governança de dados e a transparência com o cliente foram definidas como valores inegociáveis desde o primeiro dia."
      },
      en: {
        s: "In 2021, the General Data Protection Law (LGPD) came into full force. At Unimed, our success and scale meant we were guardians of health data -- the most sensitive category of personal data -- for hundreds of thousands of people. When leading the launch of 4 new digital products, the responsibility to ensure compliance was not just a legal obligation, but an ethical imperative that would impact millions of lives.",
        t: "My responsibility was to ensure each product was designed from the beginning with 'Privacy by Design' principles, establishing a new and higher standard of data governance for the innovation area. It was my responsibility to protect not only current customer data, but also establish precedents that would protect future generations of users.",
        a: "I started with humility, organizing workshops with our DPO. The workshops covered topics like 'Legal Bases for Health Data Processing' and 'Data Minimization Principles', preparing the team to think about privacy from conception. I incorporated a 'Privacy Impact Assessment' (PIA) as a mandatory 'quality gate' in our process. No new functionality could advance without formal DPO approval. For the Primary Health Care (APS) product, which involved sharing data with a multidisciplinary team, I led the design of a new 'Granular Consent Panel'. The challenge was technical and UX: we created a simple interface where customers could, with checkboxes, control exactly which data (e.g., history, exams) they shared with each professional (doctor, nutritionist). When designing the Pet Health product, we considered the complete data lifecycle. We created an automated process, transparently communicated in the privacy policy, where pet data was anonymized after 12 months of plan inactivity, ensuring we didn't retain information unnecessarily.",
        r: "We launched 4 new digital products in full LGPD compliance, passing all audits without exceptions. The Granular Consent Panel was so well received that it was adopted as the new standard for all company digital products, including the main app serving over 600k users, improving data governance at scale. We had no privacy incidents or data breaches related to the new products, protecting the trust of hundreds of thousands of customers.",
        l: "I learned that, with scale, responsibility for secondary effects of our actions grows exponentially. A leader must be the guardian of customer trust. This learning directly influenced my startup's conception, where data governance and customer transparency were defined as non-negotiable values from day one."
      },
      fups: [
        {
          q: "Como você garantiu que os princípios de 'Privacy by Design' fossem aplicados de forma consistente durante o desenvolvimento dos quatro produtos?",
          a: "Através de mecanismos. O 'Privacy Impact Assessment' no início de cada projeto era o primeiro. O segundo era um 'checklist de privacidade' que criei e que fazia parte da nossa 'Definition of Done' para cada user story que lidava com dados de clientes. Nenhuma história era considerada 'pronta' sem passar por essa verificação.",
          q_en: "How did you ensure 'Privacy by Design' principles were consistently applied during the four products' development?",
          a_en: "Through mechanisms. The 'Privacy Impact Assessment' at the beginning of each project was the first. The second was a 'privacy checklist' I created that was part of our 'Definition of Done' for each user story dealing with customer data. No story was considered 'done' without passing this verification."
        },
        {
          q: "Quais foram os maiores desafios ao implementar o Painel de Consentimento Granular e como você os superou?",
          a: "O maior desafio foi técnico: integrar o painel com múltiplos sistemas legados de onde os dados eram puxados. Superamos isso criando uma camada de microsserviços de 'gestão de consentimento' que centralizava as regras e se comunicava com os sistemas antigos, evitando uma reforma complexa e arriscada nos legados.",
          q_en: "What were the biggest challenges implementing the Granular Consent Panel and how did you overcome them?",
          a_en: "The biggest challenge was technical: integrating the panel with multiple legacy systems from where data was pulled. We overcame this by creating a 'consent management' microservices layer that centralized rules and communicated with old systems, avoiding a complex and risky legacy overhaul."
        },
        {
          q: "Como você mediu o impacto do Painel de Consentimento Granular na experiência do cliente e na governança de dados?",
          a: "Medimos de duas formas. Na experiência do cliente, através de uma pesquisa de satisfação que mostrou um aumento na percepção de 'confiança e controle' dos usuários do piloto. Na governança, o impacto foi uma redução de 100% no número de reclamações relacionadas a consentimento de dados para os produtos que usavam o novo painel.",
          q_en: "How did you measure the Granular Consent Panel's impact on customer experience and data governance?",
          a_en: "We measured in two ways. On customer experience, through a satisfaction survey that showed an increase in pilot users' perception of 'trust and control'. On governance, the impact was a 100% reduction in data consent-related complaints for products using the new panel."
        },
        {
          q: "Durante o lançamento dos produtos, houve resistência ou preocupações de stakeholders em relação ao impacto das novas medidas de privacidade? Como você lidou com isso?",
          a: "Sim, a área de Marketing inicialmente se preocupou que um consentimento mais granular pudesse reduzir o opt-in para comunicações. Lidei com isso mostrando, com dados de mercado, que a transparência aumenta a confiança e, a longo prazo, a qualidade do engajamento. Também propusemos testes A/B para diferentes abordagens de texto, provando que uma comunicação clara e honesta sobre o valor para o cliente poderia manter as taxas de opt-in altas.",
          q_en: "During product launch, was there resistance or stakeholder concerns about new privacy measures' impact? How did you handle it?",
          a_en: "Yes, Marketing initially worried that more granular consent could reduce opt-in for communications. I handled this by showing, with market data, that transparency increases trust and, long-term, engagement quality. We also proposed A/B tests for different text approaches, proving that clear and honest communication about customer value could keep opt-in rates high."
        },
        {
          q: "Após o sucesso desses produtos, como você promoveu a escalabilidade e a continuidade dos padrões de governança de dados para futuras iniciativas?",
          a: "Eu trabalhei com o DPO para formalizar o 'Privacy Impact Assessment' e o 'checklist de privacidade' como artefatos obrigatórios no PMO corporativo. Além disso, apresentei o case do Painel de Consentimento em um fórum de liderança, o que levou à decisão de criar uma equipe central de 'UX de Confiança' para padronizar essa experiência em toda a empresa.",
          q_en: "After these products' success, how did you promote scalability and continuity of data governance standards for future initiatives?",
          a_en: "I worked with the DPO to formalize the 'Privacy Impact Assessment' and 'privacy checklist' as mandatory artifacts in corporate PMO. Additionally, I presented the Consent Panel case in a leadership forum, which led to the decision to create a central 'Trust UX' team to standardize this experience company-wide."
        },
        {
          q: "Como você equilibrou a conformidade rigorosa com a LGPD com a velocidade da inovação?",
          a: "Ao tratar a privacidade como um requisito desde o Dia 0. O workshop inicial com o DPO e o 'Privacy Impact Assessment' no início do ciclo de vida do produto evitavam retrabalho. Era mais rápido construir certo da primeira vez do que consertar depois. A privacidade se tornou uma funcionalidade, não um obstáculo.",
          q_en: "How did you balance rigorous LGPD compliance with innovation speed?",
          a_en: "By treating privacy as a Day 0 requirement. The initial DPO workshop and 'Privacy Impact Assessment' at the beginning of product lifecycle avoided rework. It was faster to build right the first time than fix later. Privacy became a feature, not an obstacle."
        },
        {
          q: "Qual foi a decisão mais difícil que você tomou relacionada à privacidade?",
          a: "Foi a de descartar uma parceria promissora com uma healthtech. A solução deles era inovadora, mas o modelo de compartilhamento de dados deles não atendia aos nossos altos padrões de privacidade. Foi uma decisão difícil de curto prazo, mas que protegeu nossa responsabilidade de longo prazo com os dados dos clientes.",
          q_en: "What was the most difficult privacy-related decision you made?",
          a_en: "It was discarding a promising partnership with a healthtech. Their solution was innovative, but their data sharing model didn't meet our high privacy standards. It was a difficult short-term decision, but protected our long-term responsibility with customer data."
        },
        {
          q: "Como você garantiu que a equipe entendesse que privacidade não era apenas compliance, mas responsabilidade ética?",
          a: "Através de storytelling. Nos workshops, eu não falava sobre 'conformidade com a LGPD', mas sobre 'proteger a dona Maria, que confia seus dados de saúde a nós'. Conectei cada decisão técnica ao impacto humano real. Quando as pessoas entenderam que estávamos protegendo pessoas reais, não apenas cumprindo regras, a mentalidade mudou.",
          q_en: "How did you ensure the team understood that privacy wasn't just compliance, but ethical responsibility?",
          a_en: "Through storytelling. In workshops, I didn't talk about 'LGPD compliance', but about 'protecting Mrs. Maria, who trusts her health data to us'. I connected each technical decision to real human impact. When people understood we were protecting real people, not just following rules, the mindset changed."
        },
        {
          q: "Qual é a sua responsabilidade quando uma decisão de negócio tem um impacto negativo na comunidade?",
          a: "Minha responsabilidade é, primeiro, ter a humildade de reconhecer o impacto. Segundo, agir para mitigar o dano. Terceiro, e mais importante, conduzir um post-mortem para entender a causa raiz e criar mecanismos para garantir que esse tipo de efeito secundário negativo seja antecipado e evitado no futuro.",
          q_en: "What's your responsibility when a business decision has negative impact on the community?",
          a_en: "My responsibility is, first, to have the humility to recognize the impact. Second, act to mitigate damage. Third, and most importantly, conduct a post-mortem to understand root cause and create mechanisms to ensure this type of negative secondary effect is anticipated and avoided in the future."
        },
        {
          q: "Como essa experiência com LGPD influenciou sua abordagem em projetos futuros, incluindo sua startup?",
          a: "Tornou a privacidade e a transparência valores fundamentais, não features opcionais. Na minha startup, a primeira pergunta em qualquer nova funcionalidade é: 'Como isso impacta a privacidade e a confiança do cliente?'. Criamos um 'Privacy First Checklist' que é aplicado em todas as decisões de produto, garantindo que nunca sacrifiquemos a confiança do cliente por conveniência técnica.",
          q_en: "How did this LGPD experience influence your approach in future projects, including your startup?",
          a_en: "It made privacy and transparency fundamental values, not optional features. In my startup, the first question for any new functionality is: 'How does this impact customer privacy and trust?'. We created a 'Privacy First Checklist' applied to all product decisions, ensuring we never sacrifice customer trust for technical convenience."
        }
      ]
    },
    {
      id: "hsbc-fatca-aml-migration",
      title: "Implementação de Controles FATCA e AML em Operação Bilionária",
      title_pt: "Implementação de Controles FATCA e AML em uma Operação de Escala Bilionária",
      title_en: "FATCA and AML Controls Implementation in Billion-Dollar Operation",
      company: "HSBC",
      period: "01/2016--12/2016",
      isTopCase: true,
      pt: {
        s: "A venda da operação do HSBC para o Bradesco envolvia a migração de um portfólio de Wealth Management com milhares de contas internacionais. Nosso sucesso e escala significavam que estávamos no centro de regulamentações globais complexas como FATCA e AML (Anti-Lavagem de Dinheiro). Uma única falha poderia resultar em multas multimilionárias e impactar a integridade do sistema financeiro global.",
        t: "Como líder do portfólio, minha responsabilidade era absoluta. Eu precisava garantir 100% de conformidade. A tarefa era entender as implicações mais amplas de nossas ações: nosso trabalho era uma linha de defesa na integridade do sistema financeiro global, protegendo não apenas o banco, mas contribuindo para a estabilidade econômica internacional.",
        a: "Reconhecendo a complexidade, organizei uma força-tarefa que não apenas incluía especialistas de compliance e jurídico, mas também analistas de operações, que eram quem realmente entendia as nuances dos dados dos clientes. Essa inclusão da linha de frente foi crucial para identificar riscos práticos. O processo padrão era um script para identificar clientes com 'indícios de cidadania americana'. Eu considerei isso insuficiente. Criei um processo de 'due diligence aprimorada', onde contas de alto risco (ex: com múltiplos passaportes, movimentações em paraísos fiscais) eram revisadas manualmente por uma dupla de analistas, um padrão de 'quatro olhos' que elevou drasticamente nossa segurança. Sabíamos que teríamos que contatar clientes. Em vez de uma carta legalista, trabalhei com a comunicação para criar um roteiro empático. O resultado foi que a taxa de resposta dos clientes aumentou em 40% em comparação com comunicações similares anteriores. Criei um 'Playbook de Conformidade em Migrações'. Esse playbook foi subsequentemente solicitado e utilizado pela equipe que conduziu a migração do HSBC na Argentina, economizando meses de trabalho de planejamento para eles.",
        r: "Concluímos a migração com 100% de conformidade FATCA e AML, validado por auditorias sem ressalvas. Evitamos multas potenciais e protegemos a reputação do banco em uma transação de altíssimo perfil. O playbook que criei foi adotado como uma melhor prática pelo PMO global do HSBC, beneficiando futuras migrações e fortalecendo os controles globais da instituição.",
        l: "Aprendi que, quanto maior a escala, maior a responsabilidade com o ecossistema. A conformidade não é uma caixa a ser marcada; é uma manifestação da nossa responsabilidade com a sociedade. Essa mentalidade me guiou na SEFAZ, onde a responsabilidade com o dinheiro do contribuinte exige um nível similar de rigor e pensamento sobre o impacto de cada ação."
      },
      en: {
        s: "The sale of HSBC's operation to Bradesco involved migrating a Wealth Management portfolio with thousands of international accounts. Our success and scale meant we were at the center of complex global regulations like FATCA and AML (Anti-Money Laundering). A single failure could result in multimillion-dollar fines and impact global financial system integrity.",
        t: "As portfolio leader, my responsibility was absolute. I needed to ensure 100% compliance. The task was to understand the broader implications of our actions: our work was a line of defense in global financial system integrity, protecting not just the bank, but contributing to international economic stability.",
        a: "Recognizing the complexity, I organized a task force that not only included compliance and legal experts, but also operations analysts, who truly understood customer data nuances. This frontline inclusion was crucial for identifying practical risks. The standard process was a script to identify customers with 'American citizenship indicators'. I considered this insufficient. I created an 'enhanced due diligence' process, where high-risk accounts (e.g., with multiple passports, movements in tax havens) were manually reviewed by an analyst pair, a 'four eyes' standard that dramatically elevated our security. We knew we'd have to contact customers. Instead of a legalistic letter, I worked with communications to create an empathetic script. The result was that customer response rate increased 40% compared to similar previous communications. I created a 'Migration Compliance Playbook'. This playbook was subsequently requested and used by the team that conducted HSBC migration in Argentina, saving them months of planning work.",
        r: "We completed migration with 100% FATCA and AML compliance, validated by audits without exceptions. We avoided potential fines and protected the bank's reputation in a very high-profile transaction. The playbook I created was adopted as a best practice by HSBC's global PMO, benefiting future migrations and strengthening the institution's global controls.",
        l: "I learned that, the greater the scale, the greater the responsibility to the ecosystem. Compliance isn't a box to be checked; it's a manifestation of our responsibility to society. This mentality guided me at SEFAZ, where responsibility with taxpayer money requires a similar level of rigor and thinking about each action's impact."
      },
      fups: [
        {
          q: "Como você garantiu que a força-tarefa de especialistas trabalhasse de forma colaborativa e eficiente, considerando o nível de especialização envolvido?",
          a: "Eu estabeleci um objetivo comum claro e papéis bem definidos. Usei a metodologia RACI (Responsible, Accountable, Consulted, Informed) para mapear as responsabilidades. Além disso, facilitei as reuniões focando em decisões e ações, evitando debates puramente teóricos. Minha função era ser o 'tradutor' entre o jurídico, o compliance e a operação.",
          q_en: "How did you ensure the specialist task force worked collaboratively and efficiently, considering the level of expertise involved?",
          a_en: "I established a clear common objective and well-defined roles. I used RACI methodology (Responsible, Accountable, Consulted, Informed) to map responsibilities. Additionally, I facilitated meetings focusing on decisions and actions, avoiding purely theoretical debates. My role was to be the 'translator' between legal, compliance and operations."
        },
        {
          q: "Quais foram os maiores desafios ao implementar o processo de 'due diligence aprimorada' e como você os superou?",
          a: "O maior desafio foi o custo e o tempo adicionais do processo manual. Superei isso apresentando um business case baseado em risco. Mostrei que o custo da revisão manual de 1.000 contas era inferior a 1% do valor de uma única multa potencial do IRS por uma falha de reporte, tornando o ROI da precaução evidente.",
          q_en: "What were the biggest challenges implementing the 'enhanced due diligence' process and how did you overcome them?",
          a_en: "The biggest challenge was the additional cost and time of the manual process. I overcame this by presenting a risk-based business case. I showed that the cost of manually reviewing 1,000 accounts was less than 1% of the value of a single potential IRS fine for a reporting failure, making the ROI of precaution evident."
        },
        {
          q: "Como você mediu o impacto da abordagem centrada no cliente na experiência durante a migração? Houve feedback direto dos clientes?",
          a: "Medimos principalmente pela 'taxa de resposta positiva' e pelo 'tempo para obter a documentação'. A abordagem empática reduziu o atrito e acelerou o processo. Sim, recebemos feedbacks diretos através dos gerentes de relacionamento, com clientes elogiando a clareza da comunicação em um momento de incerteza.",
          q_en: "How did you measure the customer-centric approach's impact on migration experience? Was there direct customer feedback?",
          a_en: "We measured mainly through 'positive response rate' and 'time to obtain documentation'. The empathetic approach reduced friction and accelerated the process. Yes, we received direct feedback through relationship managers, with customers praising communication clarity during an uncertain time."
        },
        {
          q: "Quais foram os principais critérios e decisões documentados no playbook de conformidade, e como eles diferem de processos anteriores?",
          a: "A principal diferença foi o foco na 'gestão proativa de risco'. O playbook incluía checklists detalhados para identificar contas complexas, roteiros de comunicação com clientes e um fluxograma de escalonamento para casos atípicos. Processos anteriores eram reativos; o nosso era preventivo.",
          q_en: "What were the main criteria and decisions documented in the compliance playbook, and how do they differ from previous processes?",
          a_en: "The main difference was focus on 'proactive risk management'. The playbook included detailed checklists for identifying complex accounts, customer communication scripts and an escalation flowchart for atypical cases. Previous processes were reactive; ours was preventive."
        },
        {
          q: "Após concluir a migração, houve algum processo de revisão ou auditoria que validou os resultados e identificou oportunidades de melhoria?",
          a: "Sim, a migração passou por uma auditoria interna rigorosa e, posteriormente, pela auditoria externa anual. Os resultados 'sem ressalvas' validaram nosso sucesso. Uma oportunidade de melhoria identificada foi a necessidade de automatizar parte da 'due diligence aprimorada', o que levou a um novo projeto para desenvolver ferramentas de IA para triagem de risco.",
          q_en: "After completing migration, was there any review or audit process that validated results and identified improvement opportunities?",
          a_en: "Yes, the migration underwent rigorous internal audit and, subsequently, annual external audit. The 'without exceptions' results validated our success. An identified improvement opportunity was the need to automate part of 'enhanced due diligence', which led to a new project to develop AI tools for risk screening."
        },
        {
          q: "Qual foi o 'efeito secundário' mais complexo que você teve que gerenciar neste projeto?",
          a: "Foi o impacto nos clientes 'falsos positivos' -- clientes que o sistema sinalizava como americanos, mas não eram. O processo de 'due diligence aprimorada' que criei tinha uma etapa para resolver esses casos internamente sempre que possível, minimizando o impacto em clientes inocentes.",
          q_en: "What was the most complex 'secondary effect' you had to manage in this project?",
          a_en: "It was the impact on 'false positive' customers -- customers the system flagged as American, but weren't. The 'enhanced due diligence' process I created had a step to resolve these cases internally whenever possible, minimizing impact on innocent customers."
        },
        {
          q: "O que significa ser 'humilde e ponderado' na prática em uma situação de alta pressão?",
          a: "Significa admitir o que você não sabe e buscar ativamente a ajuda dos especialistas. Significa ouvir todas as perspectivas antes de tomar uma decisão. E significa considerar cuidadosamente o impacto das suas decisões em todos os stakeholders, incluindo aqueles que você nunca conhecerá pessoalmente.",
          q_en: "What does being 'humble and thoughtful' mean in practice in a high-pressure situation?",
          a_en: "It means admitting what you don't know and actively seeking help from specialists. It means listening to all perspectives before making a decision. And it means carefully considering the impact of your decisions on all stakeholders, including those you'll never meet personally."
        },
        {
          q: "Como você garante que sua equipe esteja sempre pensando nessas responsabilidades mais amplas?",
          a: "Eu começo conectando o trabalho diário a um propósito maior. A equipe não estava 'verificando formulários'; ela estava 'protegendo a integridade do sistema financeiro'. Regularmente, eu lembrava a eles de que nosso trabalho impactava não apenas o banco, mas a confiança de milhares de clientes e a estabilidade do sistema.",
          q_en: "How do you ensure your team is always thinking about these broader responsibilities?",
          a_en: "I start by connecting daily work to a bigger purpose. The team wasn't 'checking forms'; they were 'protecting financial system integrity'. Regularly, I reminded them that our work impacted not just the bank, but thousands of customers' trust and system stability."
        },
        {
          q: "Qual foi a sua reação quando um membro da sua equipe cometeu um erro no processo de compliance?",
          a: "Minha primeira reação foi de apoio: 'Ok, vamos entender o que aconteceu e como podemos consertar. O que o processo permitiu que esse erro acontecesse?'. Depois que resolvemos, a conversa se tornou sobre aprendizado. A responsabilidade é sobre corrigir o sistema, não sobre culpar o indivíduo.",
          q_en: "What was your reaction when a team member made a compliance process error?",
          a_en: "My first reaction was supportive: 'OK, let's understand what happened and how we can fix it. What did the process allow for this error to happen?' After we resolved it, the conversation became about learning. Responsibility is about fixing the system, not blaming the individual."
        },
        {
          q: "Como essa experiência se conecta à sua responsabilidade com as 'futuras gerações'?",
          a: "A conexão é a integridade do sistema. Ao garantir a conformidade com leis anti-lavagem de dinheiro, estamos fazendo uma pequena parte para tornar o sistema financeiro global mais seguro e transparente. Deixar um sistema mais íntegro do que o encontramos é uma responsabilidade com as futuras gerações que dependerão desse sistema.",
          q_en: "How does this experience connect to your responsibility to 'future generations'?",
          a_en: "The connection is system integrity. By ensuring compliance with anti-money laundering laws, we're doing a small part to make the global financial system safer and more transparent. Leaving a more integral system than we found is a responsibility to future generations who will depend on this system."
        }
      ]
    },
    {
      id: "sicredi-responsible-ai-policy",
      title: "Política de IA Responsável para Análise de Crédito",
      title_pt: "Desenvolvimento de uma Política de IA Responsável para Análise de Crédito, Garantindo Equidade e Transparência",
      title_en: "Responsible AI Policy Development for Credit Analysis, Ensuring Equity and Transparency",
      company: "Sicredi",
      period: "01/2020--12/2020",
      isTopCase: false,
      pt: {
        s: "No Sicredi, ao introduzirmos o primeiro modelo de ML para pré-aprovação de crédito, o sucesso trouxe uma nova e complexa responsabilidade. A escala do nosso negócio significava que as decisões do nosso algoritmo impactariam a vida financeira de milhares de pessoas. O risco de o modelo perpetuar vieses, levando a decisões injustas, era uma responsabilidade que precisávamos endereçar com urgência.",
        t: "Minha responsabilidade ia além da acurácia do modelo. Eu precisava garantir que nosso uso de IA fosse ético e justo para toda a comunidade. Minha tarefa foi liderar a criação da primeira 'Política de IA Responsável' do Sicredi, deixando as coisas melhores, não apenas em tecnologia, mas em governança e responsabilidade social.",
        a: "Iniciei o projeto apresentando à liderança os riscos reputacionais e regulatórios emergentes de IA enviesada, usando exemplos de outras empresas. Argumentei que, para uma cooperativa baseada em princípios de equidade, a responsabilidade de garantir uma IA justa não era opcional, era central para nossa marca. Estudei os frameworks de IA Responsável do Google e Microsoft e organizei um workshop com especialistas em ética de IA. O insight chave foi o conceito de 'justiça contrafactual', que nos ajudou a moldar nossos testes de viés de uma forma muito mais robusta. A política que redigi instituía mecanismos concretos. Um deles foi o 'teste de viés' obrigatório. Nos testes, identificamos que nosso modelo inicial estava penalizando trabalhadores autônomos. A correção foi feita através de 'feature engineering', criando novas variáveis que representavam melhor a saúde financeira de um autônomo (ex: regularidade de depósitos). Antes, a negação de crédito era uma 'caixa-preta'. A política exigiu um processo de 'explicabilidade'. Criamos um sistema que traduzia a decisão do modelo em uma explicação simples, como 'A negação foi baseada em um alto nível de endividamento atual', que passou a ser comunicada ao cliente.",
        r: "A 'Política de IA Responsável' foi implementada e se tornou o padrão para todos os projetos de dados no Sicredi. A correção do viés aumentou a taxa de aprovação para trabalhadores autônomos qualificados em 15%, tornando nosso crédito mais justo e inclusivo. A abordagem responsável nos deu grande credibilidade com os reguladores e fortaleceu nossa marca como uma instituição que se preocupa genuinamente com o impacto social de suas decisões.",
        l: "Aprendi que, com a escala, a responsabilidade de um líder é sobre as consequências não intencionais de suas ações. Essa experiência me ensinou a incorporar uma 'revisão de impacto ético' no início de todos os projetos de tecnologia que lidero, garantindo que consideremos os efeitos secundários desde o primeiro dia."
      },
      en: {
        s: "At Sicredi, when introducing the first ML model for credit pre-approval, success brought a new and complex responsibility. Our business scale meant our algorithm's decisions would impact thousands of people's financial lives. The risk of the model perpetuating biases, leading to unfair decisions, was a responsibility we urgently needed to address.",
        t: "My responsibility went beyond model accuracy. I needed to ensure our AI use was ethical and fair to the entire community. My task was to lead creation of Sicredi's first 'Responsible AI Policy', leaving things better, not just in technology, but in governance and social responsibility.",
        a: "I started the project by presenting leadership with emerging reputational and regulatory risks of biased AI, using examples from other companies. I argued that, for a cooperative based on equity principles, the responsibility to ensure fair AI wasn't optional, it was central to our brand. I studied Google and Microsoft's Responsible AI frameworks and organized a workshop with AI ethics experts. The key insight was the concept of 'counterfactual fairness', which helped us shape our bias tests much more robustly. The policy I drafted instituted concrete mechanisms. One was mandatory 'bias testing'. In tests, we identified our initial model was penalizing freelance workers. Correction was made through 'feature engineering', creating new variables that better represented a freelancer's financial health (e.g., deposit regularity). Before, credit denial was a 'black box'. The policy required an 'explainability' process. We created a system that translated the model's decision into simple explanation, like 'Denial was based on high current debt level', which was communicated to customers.",
        r: "The 'Responsible AI Policy' was implemented and became the standard for all data projects at Sicredi. Bias correction increased approval rate for qualified freelance workers by 15%, making our credit fairer and more inclusive. The responsible approach gave us great credibility with regulators and strengthened our brand as an institution that genuinely cares about the social impact of its decisions.",
        l: "I learned that, with scale, a leader's responsibility is about unintended consequences of their actions. This experience taught me to incorporate an 'ethical impact review' at the beginning of all technology projects I lead, ensuring we consider secondary effects from day one."
      },
      fups: [
        {
          q: "Quais foram os principais desafios ao implementar a Política de IA Responsável e como você os superou?",
          a: "O maior desafio foi a percepção de que isso 'atrasaria a inovação'. Superei isso mostrando que a IA Responsável não era um 'freio', mas um 'guard-rail'. Argumentei que construir um modelo justo e transparente desde o início era muito mais rápido e barato do que gerenciar uma crise de reputação ou ter que reconstruir um modelo enviesado do zero no futuro.",
          q_en: "What were the main challenges implementing the Responsible AI Policy and how did you overcome them?",
          a_en: "The biggest challenge was the perception that this would 'slow innovation'. I overcame this by showing that Responsible AI wasn't a 'brake', but a 'guard-rail'. I argued that building a fair and transparent model from the start was much faster and cheaper than managing a reputation crisis or having to rebuild a biased model from scratch in the future."
        },
        {
          q: "Como você monitorou os resultados após corrigir o viés no modelo? Houve melhorias específicas para os trabalhadores autônomos ou outros grupos?",
          a: "Nós criamos um 'dashboard de equidade' que monitorava continuamente a taxa de aprovação do modelo entre diferentes segmentos demográficos. Após a correção, vimos a taxa de aprovação para autônomos qualificados aumentar em 15%, alinhando-se com a dos trabalhadores formais com perfil de risco similar, provando que havíamos corrigido a distorção.",
          q_en: "How did you monitor results after correcting model bias? Were there specific improvements for freelance workers or other groups?",
          a_en: "We created an 'equity dashboard' that continuously monitored the model's approval rate among different demographic segments. After correction, we saw approval rate for qualified freelancers increase by 15%, aligning with formal workers with similar risk profile, proving we had corrected the distortion."
        },
        {
          q: "Como o Comitê de Ética em IA operava na prática? Quais eram os critérios para revisar e aprovar novos modelos?",
          a: "O comitê se reunia mensalmente. Os critérios de aprovação eram baseados em um checklist que criei, cobrindo: 1) Validação do caso de uso e seu impacto social. 2) Resultados dos testes de viés. 3) Nível de interpretabilidade do modelo. 4) Plano de monitoramento contínuo. Nenhum modelo entrava em produção sem a aprovação formal do comitê.",
          q_en: "How did the AI Ethics Committee operate in practice? What were the criteria for reviewing and approving new models?",
          a_en: "The committee met monthly. Approval criteria were based on a checklist I created, covering: 1) Use case validation and its social impact. 2) Bias test results. 3) Model interpretability level. 4) Continuous monitoring plan. No model went into production without formal committee approval."
        },
        {
          q: "Houve resistência interna ou externa à ideia de tornar as decisões da IA explicáveis? Como você lidou com isso?",
          a: "A resistência interna veio da equipe de dados, preocupada com a complexidade técnica. Lidei com isso posicionando a 'explicabilidade' como um desafio de engenharia interessante e investindo em ferramentas (como SHAP) que facilitavam o processo. Externamente, a resposta foi extremamente positiva, especialmente dos clientes que valorizaram a transparência.",
          q_en: "Was there internal or external resistance to making AI decisions explainable? How did you handle it?",
          a_en: "Internal resistance came from the data team, worried about technical complexity. I handled this by positioning 'explainability' as an interesting engineering challenge and investing in tools (like SHAP) that facilitated the process. Externally, response was extremely positive, especially from customers who valued transparency."
        },
        {
          q: "Após o sucesso dessa iniciativa, como você garantiu que a política fosse continuamente aprimorada e mantida em novos projetos?",
          a: "A política foi integrada ao nosso processo de desenvolvimento de produtos. A revisão pelo Comitê de Ética se tornou um 'quality gate' obrigatório. Além disso, criamos um treinamento anual obrigatório sobre IA Responsável para todos os funcionários das áreas de dados e produto, garantindo que o conhecimento fosse constantemente renovado.",
          q_en: "After this initiative's success, how did you ensure the policy was continuously improved and maintained in new projects?",
          a_en: "The policy was integrated into our product development process. Ethics Committee review became a mandatory 'quality gate'. Additionally, we created mandatory annual training on Responsible AI for all data and product area employees, ensuring knowledge was constantly renewed."
        },
        {
          q: "Como você se mantém atualizado sobre um campo que evolui tão rápido como a ética em IA?",
          a: "Eu sigo ativamente o trabalho de pesquisadores e instituições líderes na área, como o 'AI Now Institute' e o 'Partnership on AI'. Leio os artigos, acompanho os debates e participo de webinars. É uma responsabilidade contínua de aprendizado. Também mantenho uma rede de contatos com outros profissionais que enfrentam desafios similares.",
          q_en: "How do you stay updated on a field that evolves as fast as AI ethics?",
          a_en: "I actively follow the work of leading researchers and institutions in the area, like the 'AI Now Institute' and 'Partnership on AI'. I read articles, follow debates and participate in webinars. It's a continuous learning responsibility. I also maintain a network of contacts with other professionals facing similar challenges."
        },
        {
          q: "O que significa ser 'humilde e ponderado' ao lidar com IA?",
          a: "Significa reconhecer que os dados não são a verdade absoluta; eles são um reflexo do mundo, com todos os seus vieses. Significa ter a humildade de saber que nosso modelo pode estar errado ou ser injusto, e a ponderação de criar sistemas robustos para auditar, monitorar e corrigir esses erros continuamente.",
          q_en: "What does being 'humble and thoughtful' mean when dealing with AI?",
          a_en: "It means recognizing that data isn't absolute truth; it's a reflection of the world, with all its biases. It means having the humility to know our model can be wrong or unfair, and the thoughtfulness to create robust systems to audit, monitor and continuously correct these errors."
        },
        {
          q: "Como essa iniciativa de responsabilidade deixou as coisas 'melhores do que você as encontrou'?",
          a: "Antes, o processo de crédito era uma caixa-preta. Deixamos um processo mais justo e transparente. Criamos uma consciência sobre a responsabilidade ética do uso de dados que não existia e que passou a influenciar todos os outros projetos de tecnologia. Estabelecemos um precedente de que inovação e responsabilidade social andam juntas.",
          q_en: "How did this responsibility initiative leave things 'better than you found them'?",
          a_en: "Before, the credit process was a black box. We left a fairer and more transparent process. We created awareness about ethical responsibility in data use that didn't exist and began influencing all other technology projects. We established a precedent that innovation and social responsibility go together."
        },
        {
          q: "Qual é a sua maior preocupação sobre o futuro da IA e qual é a sua responsabilidade como líder para mitigá-la?",
          a: "Minha maior preocupação é a automação da tomada de decisões em escala sem a devida governança ética, levando a consequências não intencionais de discriminação. Minha responsabilidade como líder é ser um defensor incansável da IA Responsável, garantindo que, para cada avanço técnico, tenhamos um avanço correspondente em nossos mecanismos de controle e transparência.",
          q_en: "What's your biggest concern about AI's future and what's your responsibility as a leader to mitigate it?",
          a_en: "My biggest concern is automation of decision-making at scale without proper ethical governance, leading to unintended discrimination consequences. My responsibility as a leader is to be a tireless advocate for Responsible AI, ensuring that for each technical advance, we have a corresponding advance in our control and transparency mechanisms."
        },
        {
          q: "Quem fazia parte do 'Comitê de Ética em IA' e por que você escolheu essa composição?",
          a: "Era um grupo multidisciplinar. Incluía cientistas de dados, líderes de negócio, representantes da área jurídica, compliance, auditoria e, crucialmente, um membro do comitê de relacionamento com o cooperado, que trazia a voz do cliente para a discussão. Essa diversidade garantia que considerássemos o impacto de múltiplas perspectivas.",
          q_en: "Who was part of the 'AI Ethics Committee' and why did you choose this composition?",
          a_en: "It was a multidisciplinary group. It included data scientists, business leaders, legal area representatives, compliance, audit and, crucially, a member of the member relationship committee, who brought the customer voice to the discussion. This diversity ensured we considered impact from multiple perspectives."
        }
      ]
    }
  ]
};

export default broad_responsibility;
