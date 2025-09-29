// Amazon Leadership Principle: Ownership
// Data structure for study cases and follow-up questions

const ownership_data = {
  principle: {
    title: "Mentalidade de dono",
    title_en: "Ownership", 
    description: "Os l�deres s�o donos. Eles pensam a longo prazo e n�o sacrificam valor a longo prazo por resultados a curto prazo. Eles agem em nome de toda a empresa, al�m de sua pr�pria equipe. Eles nunca dizem 'isso n�o � meu trabalho'.",
    description_en: "Leaders are owners. They think long term and don't sacrifice long-term value for short-term results. They act on behalf of the entire company, beyond just their own team. They never say 'that's not my job'.",
    icon: ""
  },
  "id": "ownership",
  "name": "Mentalidade de dono",
  cases: [
    {
      "title": "Migra��o Cr�tica de Dados e Compliance (HSBC  Bradesco)",
      "pt": {
        "s": "Durante a aquisi��o do HSBC pelo Bradesco (US$ 5,2 bi), fui respons�vel pela migra��o do portf�lio de Retail Banking. O desafio era migrar milh�es de contas e R$ 3 bilh�es em ativos sem perda de dados, garantindo 100% de conformidade com reguladores como BACEN e o FATCA/IRS americano.",
        "t": "Minha responsabilidade era garantir que a migra��o ocorresse com zero perda de dados, total conformidade regulat�ria e reten��o da base de clientes de alto valor (HNWI). Eu precisava ser o dono do processo de ponta a ponta.",
        "a": "Eu em vez de delegar, mergulhei nos detalhes. Atuei pessoalmente na implanta��o dos processos de conformidade FATCA. Liderei squads globais na �ndia, China e Pol�nia para valida��o de dados, mapeando tabelas cr�ticas. Quando identifiquei um risco, n�o disse 'n�o � meu trabalho'; eu mesmo criei dashboards de conformidade para reportar o status semanalmente ao C-Level e ao BACEN.",
        "r": "A migra��o foi conclu�da com zero perda de dados e 100% de aprova��o em todas as auditorias. Al�m disso, n�o apenas retivemos a base de clientes HNWI, como aumentamos o portf�lio de Private Banking em 30% durante a transi��o. (com baseline, meta e per�odo documentados em relat�rio executivo).",
        "l": "Aprendi que 'Ownership' em projetos cr�ticos significa ir muito al�m do gerenciamento. Significa assumir a responsabilidade pessoal pelo resultado, mergulhando em �reas t�cnicas ou regulat�rias fora da sua zona de conforto e ser o dono do problema e da solu��o. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje come�o engajando-os desde o in�cio."
      },
      "en": {
        "s": "During the 5.2 billion acquisition of HSBC by Bradesco, I was responsible for the migration of the Retail Banking portfolio. The challenge was to migrate millions of accounts and R$ 3 billion in assets with zero data loss, ensuring 100% compliance with regulators like BACEN and the US FATCA/IRS.",
        "t": "My responsibility was to ensure the migration occurred with zero data loss, full regulatory compliance, and retention of the high-net-worth individual (HNWI) client base. I needed to own the end-to-end process.",
        "a": "Instead of delegating, I dove into the details. I was personally involved in implementing FATCA compliance processes. I led global squads in India, China, and Poland for data validation, mapping critical tables. When I identified a risk, I didn't say 'that's not my job'; I created compliance dashboards myself to report status weekly to the C-Level and BACEN.",
        "r": "The migration was completed with zero data loss and 100% approval in all audits. Furthermore, we not only retained the HNWI client base but also increased the Private Banking portfolio by 30% during the transition.",
        "l": "I learned that 'Ownership' in critical projects means going far beyond management. It means taking personal responsibility for the outcome, diving into technical or regulatory areas outside your comfort zone, and owning both the problem and the solution. In retrospect, I could have anticipated stakeholder risks and today I start by engaging them from the beginning."
      },
      "fup": [
        {
          "q": "Qual foi o primeiro risco que voc� identificou pessoalmente e que a equipe n�o havia percebido?",
          "q_en": "What was the first risk you personally identified that the team hadn't noticed?",
          "a": "Eu identifiquei que o tratamento de 'contas conjuntas' com diferentes nacionalidades tinha uma particularidade na lei FATCA que nosso processo autom�tico n�o cobria. Assumi a lideran�a, criei uma for�a-tarefa e desenhei um processo de valida��o manual para esse nicho, evitando uma falha de compliance. Especificamente, contas com um titular americano e outro brasileiro precisavam de relat�rios separados para IRS e BACEN, mas nosso algoritmo estava consolidando tudo em um �nico report.",
          "a_en": "I identified that handling 'joint accounts' with different nationalities had a FATCA law particularity that our automatic process didn't cover. I took leadership, created a task force and designed a manual validation process for this niche, avoiding a compliance failure. Specifically, accounts with one American holder and one Brazilian needed separate reports for IRS and BACEN, but our algorithm was consolidating everything into a single report."
        },
        {
          "q": "Descreva um momento em que voc� teve que assumir a responsabilidade por um erro cometido por sua equipe global.",
          "q_en": "Describe a moment when you had to take responsibility for a mistake made by your global team.",
          "a": "A equipe de dados na �ndia rodou um script de limpeza que removeu marcadores de clientes de alto valor. Em vez de culp�-los, no comit� executivo eu disse: 'A falha foi minha por n�o ter definido um teste em ambiente controlado para esse script'. Assumi a responsabilidade e apresentei o plano de recupera��o. Trabalhei 18 horas seguidas com o time para recuperar os dados de backup e implementar novos controles de qualidade.",
          "a_en": "The data team in India ran a cleanup script that removed high-value customer markers. Instead of blaming them, in the executive committee I said: 'The failure was mine for not defining a controlled environment test for this script'. I took responsibility and presented the recovery plan. I worked 18 hours straight with the team to recover data from backup and implement new quality controls."
        },
        {
          "q": "Como voc� garantiu que os times na �ndia e Pol�nia se sentissem 'donos' do processo, mesmo estando remotos?",
          "q_en": "How did you ensure that teams in India and Poland felt like 'owners' of the process, even being remote?",
          "a": "Eu dei a eles a posse completa de seus workstreams. O time da Pol�nia era o 'dono da qualidade dos dados', n�o apenas um executor de tarefas. Comemorei publicamente as vit�rias deles e dei-lhes autonomia para propor melhorias no processo. Implementei daily standups com cada time e criei canais dedicados no Slack onde eles podiam escalar issues diretamente para mim. Tamb�m estabeleci KPIs espec�ficos para cada regi�o e bonus por performance.",
          "a_en": "I gave them complete ownership of their workstreams. The Poland team was the 'owner of data quality', not just a task executor. I publicly celebrated their wins and gave them autonomy to propose process improvements. I implemented daily standups with each team and created dedicated Slack channels where they could escalate issues directly to me. I also established specific KPIs for each region and performance bonuses."
        },
        {
          "q": "Qual foi a decis�o mais dif�cil que voc� teve que tomar sem ter todos os dados dispon�veis?",
          "q_en": "What was the most difficult decision you had to make without having all the data available?",
          "a": "Tive que decidir congelar a abertura de novas contas de investimento duas semanas antes da migra��o, mesmo sem dados precisos do impacto na receita. Meu instinto, baseado no risco, era que a complexidade de migrar contas 'em tr�nsito' era muito alta. A decis�o se provou correta - evitamos 847 contas problem�ticas que teriam causado atrasos significativos. O custo da oportunidade perdida foi de ~R$ 2.3M, mas o custo de uma migra��o atrasada seria de R$ 15M+.",
          "a_en": "I had to decide to freeze the opening of new investment accounts two weeks before migration, even without precise data on revenue impact. My instinct, based on risk, was that the complexity of migrating 'in-transit' accounts was too high. The decision proved correct - we avoided 847 problematic accounts that would have caused significant delays. The opportunity cost was ~R$ 2.3M, but the cost of delayed migration would have been R$ 15M+."
        },
        {
          "q": "Al�m dos dashboards, que outro mecanismo voc� criou para garantir a visibilidade do projeto para os reguladores?",
          "q_en": "Besides dashboards, what other mechanism did you create to ensure project visibility for regulators?",
          "a": "Criei um 'RAID Log' (Risks, Assumptions, Issues, Dependencies) espec�fico para compliance, que era compartilhado proativamente com os auditores do BACEN. Isso mostrou que t�nhamos um controle rigoroso e que n�o est�vamos escondendo nada. O log era atualizado diariamente e inclu�a n�o apenas problemas identificados, mas tamb�m medidas preventivas implementadas. Tamb�m implementei reuni�es semanais com representantes do BACEN para review status e answer questions em tempo real.",
          "a_en": "I created a 'RAID Log' (Risks, Assumptions, Issues, Dependencies) specific for compliance, which was proactively shared with BACEN auditors. This showed we had rigorous control and weren't hiding anything. The log was updated daily and included not only identified problems but also preventive measures implemented. I also implemented weekly meetings with BACEN representatives to review status and answer questions in real time."
        },        {
          "q": "'Zero perda de dados' � um objetivo absoluto. Qual foi o processo de valida��o final que voc� institu� para garantir isso?",
          "q_en": "'Zero data loss' is an absolute goal. What was the final validation process you instituted to ensure this?",
          "a": "Institu� uma 'reconcilia��o de tr�s vias'. Um time independente rodava queries no banco de dados de origem (HSBC), no de destino (Bradesco) e os comparava com um terceiro relat�rio de controle. A migra��o s� era declarada completa quando os tr�s batiam 100%. Implementei tamb�m checksums MD5 para cada batch de dados migrados, e um processo de 'double-blind verification' onde duas pessoas diferentes validavam os mesmos dados sem saber o resultado da outra.",
          "a_en": "I instituted a 'three-way reconciliation'. An independent team ran queries on the source database (HSBC), destination database (Bradesco) and compared them with a third control report. Migration was only declared complete when all three matched 100%. I also implemented MD5 checksums for each batch of migrated data, and a 'double-blind verification' process where two different people validated the same data without knowing the other's result."
        },
        {
          "q": "Se um stakeholder s�nior dissesse 'isso n�o � seu trabalho', como voc� responderia?",
          "q_en": "If a senior stakeholder said 'that's not your job', how would you respond?",
          "a": "Eu responderia: 'Eu entendo que isso pode estar fora do meu escopo formal, mas o sucesso desta migra��o � responsabilidade de todos n�s. Estou agindo porque vejo um risco para o resultado final, e meu trabalho � garantir que entreguemos isso sem falhas'. Se necess�rio, escalaria para o sponsor executivo explicando que ownership significa assumir responsabilidade pelo resultado, n�o apenas pelas tarefas formais. Na pr�tica, isso aconteceu 3 vezes e em todas consegui demonstrar valor agregado.",
          "a_en": "I would respond: 'I understand this may be outside my formal scope, but the success of this migration is all of our responsibility. I'm acting because I see a risk to the final outcome, and my job is to ensure we deliver this flawlessly'. If necessary, I would escalate to the executive sponsor explaining that ownership means taking responsibility for results, not just formal tasks. In practice, this happened 3 times and in all cases I was able to demonstrate added value."
        },
        {
          "q": "Como voc� equilibrou o foco nos detalhes t�cnicos com a necessidade de manter a vis�o estrat�gica do programa?",
          "q_en": "How did you balance focus on technical details with the need to maintain strategic program vision?",
          "a": "Eu bloqueava minha agenda: manh�s para 'mergulhar fundo' com as equipes t�cnicas e tardes para reuni�es estrat�gicas e de stakeholders. Essa separa��o disciplinada me permitiu operar nos dois n�veis sem perder o contexto. Implementei tamb�m um 'context switching protocol': 15 minutos entre reuni�es para documentar insights t�cnicos e preparar mindset estrat�gico. Mantinha um 'war room' dashboard que mostrava both technical metrics e business KPIs lado a lado.",
          "a_en": "I blocked my schedule: mornings to 'dive deep' with technical teams and afternoons for strategic and stakeholder meetings. This disciplined separation allowed me to operate at both levels without losing context. I also implemented a 'context switching protocol': 15 minutes between meetings to document technical insights and prepare strategic mindset. I maintained a 'war room' dashboard that showed both technical metrics and business KPIs side by side."
        },
        {
          "q": "Qual foi a sua maior falha pessoal durante esse projeto e como voc� a corrigiu?",
          "q_en": "What was your biggest personal failure during this project and how did you correct it?",
          "a": "Minha falha inicial foi assumir que a comunica��o entre os times globais estava fluindo bem. Ap�s um mal-entendido causar um atraso, institu� uma 'daily scrum' de 15 minutos com os l�deres de cada pa�s. Isso corrigiu a falha de comunica��o imediatamente. Especificamente, o time da China implementou uma valida��o diferente da especificada, causando 3 dias de retrabalho. Aprendi que ownership inclui over-communicate, n�o apenas communicate.",
          "a_en": "My initial failure was assuming communication between global teams was flowing well. After a misunderstanding caused a delay, I instituted a 15-minute 'daily scrum' with leaders from each country. This immediately corrected the communication failure. Specifically, the China team implemented a different validation than specified, causing 3 days of rework. I learned that ownership includes over-communicate, not just communicate."
        },
        {
          "q": "Como voc� comemorou o sucesso com a equipe e reconheceu a contribui��o de cada um?",
          "q_en": "How did you celebrate success with the team and recognize everyone's contribution?",
          "a": "Ap�s a migra��o, organizei uma videoconfer�ncia com todos os times globais. Projetei um slide com o nome de cada membro da equipe, de todas as localidades, e agradeci publicamente a contribui��o espec�fica de v�rios deles, garantindo que o reconhecimento fosse pessoal e n�o apenas para 'a equipe'. Tamb�m criei um 'Hall of Fame' no portal interno com fotos e quotes de cada team member. Al�m disso, coordenei com RH para que todos recebessem um bonus de performance e letter of commendation.",
          "a_en": "After migration, I organized a video conference with all global teams. I projected a slide with each team member's name from all locations and publicly thanked several for their specific contributions, ensuring recognition was personal and not just for 'the team'. I also created a 'Hall of Fame' on the internal portal with photos and quotes from each team member. Additionally, I coordinated with HR so everyone received a performance bonus and letter of commendation."
        }
      ]
    },
    {
      "title": "Estrutura��o do PMO do Zero na Secretaria da Fazenda (SEFAZ-RS)",
      "pt": {
        "s": "A Secretaria da Fazenda do RS enfrentava sistemas obsoletos, processos manuais e falta de governan�a para projetos estrat�gicos, resultando em baixa efici�ncia e riscos de n�o conformidade com a Lei de Responsabilidade Fiscal.",
        "t": "Minha tarefa era pensar a longo prazo e agir em nome de toda a organiza��o. Fui encarregado de criar o primeiro PMO central da SEFAZ do zero, estabelecendo metodologias para gerenciar mais de 50 projetos estrat�gicos.",
        "a": "Eu assumi total responsabilidade. Desenvolvi e implementei um framework de governan�a baseado no PMI. Criei o primeiro portf�lio digital de projetos, centralizando todas as iniciativas e desenvolvendo dashboards para reportar ao Secret�rio. Liderei pessoalmente a moderniza��o do sistema de arrecada��o e revisei contratos de TI.",
        "r": "A cria��o do PMO se tornou uma refer�ncia. As iniciativas que liderei resultaram em um aumento de 12% na arrecada��o estadual e uma redu��o de 15% nos custos operacionais, garantindo o cumprimento da Lei de Responsabilidade Fiscal. (com baseline, meta e per�odo documentados em relat�rio executivo).",
        "l": "Aprendi que esta experi�ncia me ensinou que 'Ownership' � sobre construir algo duradouro que beneficie toda a organiza��o. Exigiu que eu pensasse como um dono do neg�cio (da efici�ncia do estado), tomando decis�es dif�ceis e construindo uma base de governan�a que perduraria. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje come�o engajando-os desde o in�cio."
      },
      "en": {
        "s": "The State Treasury of RS (SEFAZ) faced outdated systems, manual processes, and a lack of governance for strategic projects, resulting in low efficiency and risks of non-compliance with the Fiscal Responsibility Law.",
        "t": "My task was to think long-term and act on behalf of the entire organization. I was tasked with creating the first central PMO at SEFAZ from scratch, establishing methodologies to manage over 50 strategic projects.",
        "a": "I took full ownership. I developed and implemented a governance framework based on PMI. I created the first digital project portfolio, centralizing all initiatives and developing dashboards to report to the Secretary. I personally led the modernization of the tax collection system and reviewed IT contracts.",
        "r": "The creation of the PMO became a benchmark. The initiatives I led resulted in a 12% increase in state revenue and a 15% reduction in operational costs, ensuring compliance with the Fiscal Responsibility Law.",
        "l": "This experience taught me that 'Ownership' is about building something lasting that benefits the entire organization. It required me to think like a business owner (of the state's efficiency), making tough decisions and building a foundation of governance that would endure. In retrospect, I could have anticipated stakeholder risks and today I start by engaging them from the beginning."
      },
      "fup": [
        {
          "q": "Qual foi a maior resist�ncia cultural que voc� enfrentou ao criar o PMO e como voc� a superou?",
          "q_en": "What was the biggest cultural resistance you faced when creating the PMO and how did you overcome it?",
          "a": "A maior resist�ncia foi o ceticismo de que um controle centralizado engessaria os processos. Eu superei isso focando em 'quick wins': automatizei relat�rios que antes eram manuais e demorados. Ao mostrar que o PMO era um facilitador que economizava tempo, e n�o um burocrata, a percep��o mudou. Especificamente, reduzi de 8 horas para 30 minutos o tempo para gerar relat�rio de status de projetos, e isso convenceu os c�ticos.",
          "a_en": "The biggest resistance was skepticism that centralized control would bureaucratize processes. I overcame this by focusing on 'quick wins': I automated reports that were previously manual and time-consuming. By showing the PMO was a facilitator that saved time, not a bureaucrat, perception changed. Specifically, I reduced project status report generation time from 8 hours to 30 minutes, and this convinced the skeptics."
        },
        {
          "q": "Como voc� priorizou os mais de 50 projetos estrat�gicos? Qual crit�rio voc� criou?",
          "q_en": "How did you prioritize the 50+ strategic projects? What criteria did you create?",
          "a": "Criei um modelo de pontua��o simples, baseado em tr�s crit�rios: impacto na arrecada��o, urg�ncia legal (Lei de Responsabilidade Fiscal) e economia de custos. Os projetos com maior pontua��o combinada receberam prioridade m�xima de recursos e aten��o. A f�rmula era: (Impacto Arrecada��o � 40%) + (Urg�ncia Legal � 35%) + (Economia Custos � 25%). Projetos com score >75 entravam no 'fast track' com recursos dedicados.",
          "a_en": "I created a simple scoring model based on three criteria: revenue impact, legal urgency (Fiscal Responsibility Law), and cost savings. Projects with highest combined scores received maximum resource priority and attention. The formula was: (Revenue Impact � 40%) + (Legal Urgency � 35%) + (Cost Savings � 25%). Projects with score >75 entered 'fast track' with dedicated resources."
        },
        {
          "q": "Qual foi o primeiro 'quick win' que voc� entregou para ganhar a confian�a dos l�deres da Secretaria?",
          "q_en": "What was the first 'quick win' you delivered to gain trust from Secretary leaders?",
          "a": "O primeiro 'quick win' foi a cria��o de um dashboard executivo que consolidava o status dos 10 principais projetos em uma �nica tela, atualizado em tempo real. Isso substituiu dezenas de e-mails e planilhas, dando visibilidade imediata ao Secret�rio e ganhando sua confian�a. Implementei em 15 dias usando Power BI conectado �s bases existentes. O Secret�rio comentou: 'Pela primeira vez em anos sei exatamente o que est� acontecendo'.",
          "a_en": "The first 'quick win' was creating an executive dashboard that consolidated the status of the 10 main projects on a single screen, updated in real time. This replaced dozens of emails and spreadsheets, giving immediate visibility to the Secretary and gaining his trust. I implemented it in 15 days using Power BI connected to existing databases. The Secretary commented: 'For the first time in years I know exactly what's happening'."
        },
        {
          "q": "Descreva em detalhes o processo que voc� usou para renegociar um contrato de TI. Qual foi a economia exata?",
          "q_en": "Describe in detail the process you used to renegotiate an IT contract. What was the exact savings?",
          "a": "Eu revisei pessoalmente um contrato de licenciamento de software linha por linha. Descobri que pag�vamos por 20% a mais de licen�as do que o n�mero de funcion�rios ativos. Apresentei essa evid�ncia ao fornecedor e renegociamos o contrato, gerando uma economia imediata de R$ 1.2 milh�o por ano. O processo: 1) Audit de usage real vs licen�as pagas; 2) Benchmarking com outros �rg�os; 3) Apresenta��o de dados ao vendor; 4) Negocia��o de novo modelo baseado em usage real + growth projection.",
          "a_en": "I personally reviewed a software licensing contract line by line. I discovered we were paying for 20% more licenses than the number of active employees. I presented this evidence to the supplier and we renegotiated the contract, generating immediate savings of R$ 1.2 million per year. The process: 1) Audit of real usage vs paid licenses; 2) Benchmarking with other agencies; 3) Data presentation to vendor; 4) Negotiation of new model based on real usage + growth projection."
        },
        {
          "q": "Como voc�, pessoalmente, garantiu que a moderniza��o n�o parasse depois que voc� sa�sse do projeto?",
          "q_en": "How did you personally ensure modernization wouldn't stop after you left the project?",
          "a": "Meu foco foi em capacitar a equipe interna. Criei programas de treinamento em gest�o de projetos e sistemas digitais, formando servidores que se tornaram os novos guardi�es dos processos. Deixei um legado de conhecimento, n�o apenas de ferramentas. Especificamente: formei 12 servidores em PMP, criei documenta��o completa dos processos, e estabeleci rituais de governance (reuni�es semanais, reports mensais) que continuaram rodando autonomamente.",
          "a_en": "My focus was empowering the internal team. I created training programs in project management and digital systems, training civil servants who became the new guardians of processes. I left a legacy of knowledge, not just tools. Specifically: I trained 12 civil servants in PMP, created complete process documentation, and established governance rituals (weekly meetings, monthly reports) that continued running autonomously."
        },
        {
          "q": "Qual foi a decis�o mais impopular que voc� tomou em nome do benef�cio a longo prazo do estado?",
          "q_en": "What was the most unpopular decision you made for the long-term benefit of the state?",
          "a": "A decis�o de descontinuar um sistema antigo, por�m popular entre alguns setores, para centralizar tudo em uma nova plataforma digital. Houve resist�ncia, mas a longo prazo a decis�o eliminou redund�ncias e economizou milh�es em manuten��o. O sistema antigo (AS400) era amado pelos usu�rios seniors, mas custava R$ 800K/ano em manuten��o e impedia integra��o com sistemas modernos. A migra��o for�ada gerou protestos, mas economizou R$ 3.2M em 4 anos.",
          "a_en": "The decision to discontinue an old system that was popular among some sectors, to centralize everything on a new digital platform. There was resistance, but long-term the decision eliminated redundancies and saved millions in maintenance. The old system (AS400) was loved by senior users, but cost R$ 800K/year in maintenance and prevented integration with modern systems. The forced migration generated protests, but saved R$ 3.2M over 4 years."
        },
        {
          "q": "Como voc� mediu o antes e o depois do aumento de 12% na arrecada��o para provar o impacto do seu trabalho?",
          "q_en": "How did you measure before and after the 12% revenue increase to prove your work's impact?",
          "a": "Cruzei dados da arrecada��o por setor com as datas de implementa��o da digitaliza��o de cada processo. A correla��o era clara: os setores que migraram primeiro para o sistema digital tiveram um aumento na arrecada��o de 10 a 15% nos seis meses seguintes, enquanto os outros permaneceram est�veis. Usei an�lise de cohort: grupo controle (setores n�o digitalizados) vs grupo teste (setores digitalizados). O delta foi estatisticamente significativo (p<0.01).",
          "a_en": "I cross-referenced revenue data by sector with digitalization implementation dates for each process. The correlation was clear: sectors that migrated first to the digital system had 10-15% revenue increase in the following six months, while others remained stable. I used cohort analysis: control group (non-digitized sectors) vs test group (digitized sectors). The delta was statistically significant (p<0.01)."
        },
        {
          "q": "Que ferramenta ou processo que voc� implementou foi o mais simples, mas gerou o maior impacto?",
          "q_en": "What tool or process you implemented was the simplest but generated the biggest impact?",
          "a": "Foi um template de 'Project Charter' de uma p�gina. Obrigava os gestores a definirem o escopo, objetivos e m�tricas de sucesso de forma concisa antes de come�ar qualquer projeto. Isso eliminou projetos mal definidos e economizou milhares de horas de trabalho. Template tinha 6 se��es: Objetivo (1 frase), Escopo (3 bullets), N�o-escopo (3 bullets), M�tricas de sucesso (3 KPIs), Timeline (milestones principais), Budget (estimativa). Rejeit�vamos qualquer projeto sem charter aprovado.",
          "a_en": "It was a one-page 'Project Charter' template. It forced managers to define scope, objectives, and success metrics concisely before starting any project. This eliminated poorly defined projects and saved thousands of work hours. Template had 6 sections: Objective (1 sentence), Scope (3 bullets), Non-scope (3 bullets), Success metrics (3 KPIs), Timeline (main milestones), Budget (estimate). We rejected any project without approved charter."
        },
        {
          "q": "Se voc� tivesse um or�amento 20% maior, o que voc� teria feito de diferente?",
          "q_en": "If you had a 20% larger budget, what would you have done differently?",
          "a": "Eu teria investido mais pesadamente em change management e comunica��o. A parte t�cnica foi bem, mas com mais recursos, eu teria criado uma campanha de comunica��o interna mais robusta para acelerar a ado��o das novas ferramentas pelos servidores. Especificamente: 1) Contrataria consultores de change management; 2) Criaria programa de 'digital champions'; 3) Investiria em UX/UI mais intuitivo; 4) Implementaria gamifica��o para adoption. Isso teria reduzido o tempo de ado��o de 8 para 4 meses.",
          "a_en": "I would have invested more heavily in change management and communication. The technical part went well, but with more resources, I would have created a more robust internal communication campaign to accelerate adoption of new tools by civil servants. Specifically: 1) Hire change management consultants; 2) Create 'digital champions' program; 3) Invest in more intuitive UX/UI; 4) Implement gamification for adoption. This would have reduced adoption time from 8 to 4 months."
        },
        {
          "q": "Qual foi a sua maior frustra��o nesse projeto e como voc� lidou com ela?",
          "q_en": "What was your biggest frustration in this project and how did you handle it?",
          "a": "A lentid�o do processo de aquisi��o p�blica foi minha maior frustra��o, atrasando a compra de softwares essenciais. Lidei com isso focando no que eu podia controlar: otimizando ao m�ximo as ferramentas que j� t�nhamos e preparando todos os processos para que, quando o software chegasse, a implementa��o fosse imediata. Criei 'implementation roadmaps' detalhados, treinei equipes em simuladores, e nego trilh de aprova��o antecipada. Quando o software finalmente chegou, implementa��o levou 3 semanas em vez dos 3 meses previstos.",
          "a_en": "The slowness of public procurement process was my biggest frustration, delaying purchase of essential software. I handled this by focusing on what I could control: optimizing existing tools to the maximum and preparing all processes so that when software arrived, implementation would be immediate. I created detailed 'implementation roadmaps', trained teams on simulators, and negotiated advance approval procedures. When software finally arrived, implementation took 3 weeks instead of the projected 3 months."
        }
      ]
    }
  ]
};

export default ownership_data;
