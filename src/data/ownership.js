const ownership_data = {
  "id": "ownership",
  "name": "Mentalidade de Dono",
  "cases": [
    {
      "title": "Migração Crítica de Dados e Compliance (HSBC → Bradesco)",
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
        "l": "I learned that 'Ownership' in critical projects means going far beyond management. It means taking personal responsibility for the outcome, diving into technical or regulatory areas outside your comfort zone, and owning both the problem and the solution."
      },
      "fup": [
        {
          "q": "Qual foi o primeiro risco que você identificou pessoalmente e que a equipe não havia percebido?",
          "a": "Eu identifiquei que o tratamento de 'contas conjuntas' com diferentes nacionalidades tinha uma particularidade na lei FATCA que nosso processo automático não cobria. Assumi a liderança, criei uma força-tarefa e desenhei um processo de validação manual para esse nicho, evitando uma falha de compliance.",
          "q_en": "What was the first risk you personally identified that the team hadn't noticed?",
          "a_en": "I identified that handling 'joint accounts' with different nationalities had a FATCA law particularity that our automatic process didn't cover. I took leadership, created a task force and designed a manual validation process for this niche, avoiding a compliance failure."
        },
        {
          "q": "Descreva um momento em que você teve que assumir a responsabilidade por um erro cometido por sua equipe global.",
          "a": "A equipe de dados na Índia rodou um script de limpeza que removeu marcadores de clientes de alto valor. Em vez de culpá-los, no comitê executivo eu disse: 'A falha foi minha por não ter definido um teste em ambiente controlado para esse script'. Assumi a responsabilidade e apresentei o plano de recuperação.",
          "q_en": "Describe a moment when you had to take responsibility for a mistake made by your global team.",
          "a_en": "The data team in India ran a cleanup script that removed high-value customer markers. Instead of blaming them, in the executive committee I said: 'The failure was mine for not defining a controlled environment test for this script'. I took responsibility and presented the recovery plan."
        },
        {
          "q": "Como você garantiu que os times na Índia e Polônia se sentissem 'donos' do processo, mesmo estando remotos?",
          "a": "Eu dei a eles a posse completa de seus workstreams. O time da Polônia era o 'dono da qualidade dos dados', não apenas um executor de tarefas. Comemorei publicamente as vitórias deles e dei-lhes autonomia para propor melhorias no processo.",
          "q_en": "How did you ensure that teams in India and Poland felt like 'owners' of the process, even being remote?",
          "a_en": "I gave them complete ownership of their workstreams. The Poland team was the 'owner of data quality', not just a task executor. I publicly celebrated their wins and gave them autonomy to propose process improvements."
        },
        {
          "q": "Qual foi a decisão mais difícil que você teve que tomar sem ter todos os dados disponíveis?",
          "a": "Tive que decidir congelar a abertura de novas contas de investimento duas semanas antes da migração, mesmo sem dados precisos do impacto na receita. Meu instinto, baseado no risco, era que a complexidade de migrar contas 'em trânsito' era muito alta. A decisão se provou correta.",
          "q_en": "What was the most difficult decision you had to make without having all the data available?",
          "a_en": "I had to decide to freeze the opening of new investment accounts two weeks before migration, even without precise data on revenue impact. My instinct, based on risk, was that the complexity of migrating 'in-transit' accounts was too high. The decision proved correct."
        },
        {
          "q": "Além dos dashboards, que outro mecanismo você criou para garantir a visibilidade do projeto para os reguladores?",
          "a": "Criei um 'RAID Log' (Risks, Assumptions, Issues, Dependencies) específico para compliance, que era compartilhado proativamente com os auditores do BACEN. Isso mostrou que tínhamos um controle rigoroso e que não estávamos escondendo nada.",
          "q_en": "Besides dashboards, what other mechanism did you create to ensure project visibility for regulators?",
          "a_en": "I created a 'RAID Log' (Risks, Assumptions, Issues, Dependencies) specific for compliance, which was proactively shared with BACEN auditors. This showed we had rigorous control and weren't hiding anything."
        },
        {
          "q": "'Zero perda de dados' é um objetivo absoluto. Qual foi o processo de validação final que você instituiu para garantir isso?",
          "a": "Instituí uma 'reconciliação de três vias'. Um time independente rodava queries no banco de dados de origem (HSBC), no de destino (Bradesco) e os comparava com um terceiro relatório de controle. A migração só era declarada completa quando os três batiam 100%."
        },
        {
          "q": "Se um stakeholder sênior dissesse 'isso não é seu trabalho', como você responderia?",
          "a": "Eu responderia: 'Eu entendo que isso pode estar fora do meu escopo formal, mas o sucesso desta migração é responsabilidade de todos nós. Estou agindo porque vejo um risco para o resultado final, e meu trabalho é garantir que entreguemos isso sem falhas'."
        },
        {
          "q": "Como você equilibrou o foco nos detalhes técnicos com a necessidade de manter a visão estratégica do programa?",
          "a": "Eu bloqueava minha agenda: manhãs para 'mergulhar fundo' com as equipes técnicas e tardes para reuniões estratégicas e de stakeholders. Essa separação disciplinada me permitiu operar nos dois níveis sem perder o contexto."
        },
        {
          "q": "Qual foi a sua maior falha pessoal durante esse projeto e como você a corrigiu?",
          "a": "Minha falha inicial foi assumir que a comunicação entre os times globais estava fluindo bem. Após um mal-entendido causar um atraso, instituí uma 'daily scrum' de 15 minutos com os líderes de cada país. Isso corrigiu a falha de comunicação imediatamente."
        },
        {
          "q": "Como você comemorou o sucesso com a equipe e reconheceu a contribuição de cada um?",
          "a": "Após a migração, organizei uma videoconferência com todos os times globais. Projetei um slide com o nome de cada membro da equipe, de todas as localidades, e agradeci publicamente a contribuição específica de vários deles, garantindo que o reconhecimento fosse pessoal e não apenas para 'a equipe'."
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
        "l": "This experience taught me that 'Ownership' is about building something lasting that benefits the entire organization. It required me to think like a business owner (of the state's efficiency), making tough decisions and building a foundation of governance that would endure."
      },
      "fup": [
        {
          "q": "Qual foi a maior resistência cultural que você enfrentou ao criar o PMO e como você a superou?",
          "a": "A maior resistência foi o ceticismo de que um controle centralizado engessaria os processos. Eu superei isso focando em 'quick wins': automatizei relatórios que antes eram manuais e demorados. Ao mostrar que o PMO era um facilitador que economizava tempo, e não um burocrata, a percepção mudou."
        },
        {
          "q": "Como você priorizou os mais de 50 projetos estratégicos? Qual critério você criou?",
          "a": "Criei um modelo de pontuação simples, baseado em três critérios: impacto na arrecadação, urgência legal (Lei de Responsabilidade Fiscal) e economia de custos. Os projetos com maior pontuação combinada receberam prioridade máxima de recursos e atenção."
        },
        {
          "q": "Qual foi o primeiro 'quick win' que você entregou para ganhar a confiança dos líderes da Secretaria?",
          "a": "O primeiro 'quick win' foi a criação de um dashboard executivo que consolidava o status dos 10 principais projetos em uma única tela, atualizado em tempo real. Isso substituiu dezenas de e-mails e planilhas, dando visibilidade imediata ao Secretário e ganhando sua confiança."
        },
        {
          "q": "Descreva em detalhes o processo que você usou para renegociar um contrato de TI. Qual foi a economia exata?",
          "a": "Eu revisei pessoalmente um contrato de licenciamento de software linha por linha. Descobri que pagávamos por 20% a mais de licenças do que o número de funcionários ativos. Apresentei essa evidência ao fornecedor e renegociamos o contrato, gerando uma economia imediata de R$ 1.2 milhão por ano."
        },
        {
          "q": "Como você, pessoalmente, garantiu que a modernização não parasse depois que você saísse do projeto?",
          "a": "Meu foco foi em capacitar a equipe interna. Criei programas de treinamento em gestão de projetos e sistemas digitais, formando servidores que se tornaram os novos guardiões dos processos. Deixei um legado de conhecimento, não apenas de ferramentas."
        },
        {
          "q": "Qual foi a decisão mais impopular que você tomou em nome do benefício a longo prazo do estado?",
          "a": "A decisão de descontinuar um sistema antigo, porém popular entre alguns setores, para centralizar tudo em uma nova plataforma digital. Houve resistência, mas a longo prazo a decisão eliminou redundâncias e economizou milhões em manutenção."
        },
        {
          "q": "Como você mediu o antes e o depois do aumento de 12% na arrecadação para provar o impacto do seu trabalho?",
          "a": "Cruzei dados da arrecadação por setor com as datas de implementação da digitalização de cada processo. A correlação era clara: os setores que migraram primeiro para o sistema digital tiveram um aumento na arrecadação de 10 a 15% nos seis meses seguintes, enquanto os outros permaneceram estáveis."
        },
        {
          "q": "Que ferramenta ou processo que você implementou foi o mais simples, mas gerou o maior impacto?",
          "a": "Foi um template de 'Project Charter' de uma página. Obrigava os gestores a definirem o escopo, objetivos e métricas de sucesso de forma concisa antes de começar qualquer projeto. Isso eliminou projetos mal definidos e economizou milhares de horas de trabalho."
        },
        {
          "q": "Se você tivesse um orçamento 20% maior, o que você teria feito de diferente?",
          "a": "Eu teria investido mais pesadamente em change management e comunicação. A parte técnica foi bem, mas com mais recursos, eu teria criado uma campanha de comunicação interna mais robusta para acelerar a adoção das novas ferramentas pelos servidores."
        },
        {
          "q": "Qual foi a sua maior frustração nesse projeto e como você lidou com ela?",
          "a": "A lentidão do processo de aquisição pública foi minha maior frustração, atrasando a compra de softwares essenciais. Lidei com isso focando no que eu podia controlar: otimizando ao máximo as ferramentas que já tínhamos e preparando todos os processos para que, quando o software chegasse, a implementação fosse imediata."
        }
      ]
    }
  ]
};

export default ownership_data;
