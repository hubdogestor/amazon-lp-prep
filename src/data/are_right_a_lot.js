const are_right_a_lot_data = {
  "id": "are_right_a_lot",
  "name": "Estar certo, e muito",
  "cases": [
    {
      "title": "Estruturação da Cultura de Produto Baseada em Dados (Sicredi)",
      "pt": {
        "s": "No Sicredi, a cultura de desenvolvimento de produtos digitais era imatura, com decisões baseadas em intuição. Não havia uma análise profunda das necessidades dos cooperados ou do impacto no negócio.",
        "t": "Minha tarefa era implementar uma cultura de gestão de produto orientada por dados, garantindo que estivéssemos construindo os produtos certos. Minha credibilidade dependia de minhas decisões se provarem corretas.",
        "a": "Eu introduzi o modelo Dual-Track Agile. Conduzi workshops de product discovery com cooperados, usando técnicas como Jobs to Be Done para buscar diversas perspectivas e desconfirmar nossas crenças. Implementei priorização com WSJF e estruturei dashboards de métricas (NPS, adoção, churn) para validar hipóteses pós-lançamento.",
        "r": "A abordagem se provou correta. Lançamos 15+ produtos digitais alinhados com as necessidades reais dos clientes, levando a um aumento de 25% na adoção digital (~$50 milhões em receita adicional) e estabelecendo uma cultura de produto madura. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que 'estar certo' não é sobre intuição, mas sobre construir um sistema para testar hipóteses e corrigir o curso com dados. Ao buscar ativamente perspectivas diversas e trabalhar para desconfirmar minhas crenças, a probabilidade da decisão correta aumenta exponencialmente. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "At Sicredi, the digital product development culture was immature, with decisions based on intuition. There was no deep analysis of member needs or business impact.",
        "t": "My task was to implement a data-driven product management culture, ensuring we were building the right products. My credibility depended on my decisions proving to be correct.",
        "a": "I introduced the Dual-Track Agile model. I conducted product discovery workshops with members, using techniques like Jobs to Be Done to seek diverse perspectives and disconfirm our beliefs. I implemented prioritization with WSJF and set up metric dashboards (NPS, adoption, churn) to validate hypotheses post-launch.",
        "r": "The approach proved to be correct. We launched 15+ digital products aligned with real customer needs, leading to a 25% increase in digital adoption (~$50 million in additional revenue) and establishing a mature product culture.",
        "l": "I learned that 'being right' is not about intuition, but about building a system to test hypotheses and course-correct with data. By actively seeking diverse perspectives and working to disconfirm my beliefs, the probability of the right decision increases exponentially."
      },
      "fup": [
        {
          "q": "Qual foi a primeira decisão importante que você tomou usando o novo modelo de dados que se provou correta?",
          "a": "A decisão de priorizar a integração com o PIX no app Woop. Os dados de pesquisa qualitativa mostravam a demanda, e os dados de mercado indicavam uma adoção massiva. Apesar do alto custo técnico, a decisão se provou corretíssima, aumentando o volume transacional em 12%."
        },
        {
          "q": "Descreva uma vez em que seu instinto estava errado e os dados o corrigiram.",
          "a": "Meu instinto era que os usuários queriam um extrato financeiro cheio de gráficos e categorias. Os dados de uso de um protótipo, no entanto, mostraram que 95% dos usuários só queriam uma busca simples e rápida. Os dados me forçaram a abandonar minha ideia e construir o que o cliente realmente usaria."
        },
        {
          "q": "Como você lidou com um stakeholder sênior cuja 'intuição' contradizia os dados que você apresentava?",
          "a": "Eu não disse que ele estava errado. Eu propus um teste A/B: 'Sua ideia é excelente. Que tal testarmos a sua versão contra a versão baseada nos dados com 5% dos nossos usuários? Deixemos os clientes decidirem.' Essa abordagem baseada em fatos, e não em opiniões, sempre funcionou."
        },
        {
          "q": "Que métrica-chave você escolheu para ser a 'estrela-guia' da estratégia de produto e por quê?",
          "a": "A 'taxa de retenção da segunda semana'. Escolhi essa métrica porque ela indica se os novos usuários que ativaram o produto estão realmente encontrando valor e engajando. É um forte preditor do sucesso de longo prazo do produto."
        },
        {
          "q": "Qual foi a pergunta mais importante que você fez durante os workshops de discovery que mudou a direção de um produto?",
          "a": "A pergunta foi: 'Qual é a 'gambiarra' que você usa hoje para resolver esse problema?'. As respostas revelaram as dores e os processos reais dos clientes, que eram muito diferentes do que imaginávamos, e nos fizeram redesenhar completamente a solução."
        },
        {
          "q": "Como você equilibrou dados quantitativos (o quê) com dados qualitativos (o porquê)?",
          "a": "Eu usava os dados quantitativos para identificar anomalias ou oportunidades, como uma queda no funil de conversão. Depois, usava a pesquisa qualitativa, como entrevistas com usuários, para entender o 'porquê' por trás daquele número. Um informava o outro."
        },
        {
          "q": "Qual foi a sua fonte de dados mais não-convencional ou surpreendente?",
          "a": "Foram os tickets do call center. Eu criei um processo para categorizar e analisar as reclamações e dúvidas. Essa fonte revelou pequenas fricções na experiência do usuário que nunca apareceriam em dados de analytics, mas que tinham um grande impacto na satisfação."
        },
        {
          "q": "Descreva o processo de um teste A/B que você liderou e que teve um resultado contra-intuitivo.",
          "a": "Testamos um fluxo de PIX com uma tela de confirmação a mais, acreditando que isso aumentaria a sensação de segurança. O resultado foi o oposto: a versão com menos telas teve uma taxa de sucesso 5% maior. Aprendemos que, para o PIX, a velocidade era mais valorizada que a confirmação extra."
        },
        {
          "q": "Como você se certificava de que não estava caindo em 'viés de confirmação' ao analisar os dados?",
          "a": "Eu sempre buscava ativamente 'desconfirmar' minhas hipóteses. Antes de analisar os dados, eu escrevia: 'Minha hipótese será invalidada se...'. Isso me forçava a procurar evidências contrárias, e não apenas aquelas que confirmavam o que eu já acreditava."
        },
        {
          "q": "Qual foi a decisão mais controversa que você tomou e que, no final, os dados provaram estar correta?",
          "a": "A decisão de remover uma funcionalidade de 'gestão de metas financeiras' que era pouco usada, mas amada por um pequeno grupo de usuários vocais. Foi controverso, mas os dados mostraram que menos de 1% da base a utilizava, e sua manutenção estava atrasando features mais importantes. A remoção melhorou a velocidade do time e o NPS geral não foi afetado."
        }
      ]
    },
    {
      "title": "Decisão de Arquitetura Cloud Híbrida para o Banco Digital Next",
      "pt": {
        "s": "Na criação do Banco Digital Next, havia um debate: usar a infraestrutura on-premise do Bradesco (segurança) ou ir 100% para a nuvem (agilidade), como as fintechs.",
        "t": "Como líder do programa, eu precisava guiar a equipe para a decisão correta, que equilibrasse agilidade com a segurança e as exigências regulatórias (BACEN) de um grande banco.",
        "a": "Eu busquei perspectivas diversas (tecnologia, segurança, compliance, negócios, especialistas externos). Analisei casos de outros neobanks e trabalhei para desconfirmar a crença de que seria 'tudo ou nada'. Propus e defendi uma arquitetura cloud-híbrida: AWS para as camadas de aplicação e front-end (agilidade), e manter os dados sensíveis no data center do Bradesco (compliance).",
        "r": "A decisão se provou correta. Lançamos o Banco Digital Next em menos de 12 meses, mantendo 100% de conformidade com o BACEN. A arquitetura permitiu que o Next escalasse rapidamente para competir com o Nubank, com a segurança da estrutura do Bradesco. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que ter bom julgamento muitas vezes significa encontrar um caminho intermediário inteligente. 'Are Right, A Lot' envolve sintetizar informações de fontes diversas e conflitantes para formar uma nova solução que incorpore os melhores pontos de cada uma. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "In the creation of Banco Digital Next, there was a debate: use Bradesco's on-premise infrastructure (security) or go 100% cloud (agility), like the fintechs.",
        "t": "As a program leader, I needed to guide the team to the right decision, balancing agility with the security and regulatory requirements (BACEN) of a large bank.",
        "a": "I sought diverse perspectives (tech, security, compliance, business, external experts). I analyzed cases from other neobanks and worked to disconfirm the 'all or nothing' belief. I proposed and championed a hybrid-cloud architecture: AWS for the application and front-end layers (agility), while keeping sensitive data in Bradesco's data center (compliance).",
        "r": "The decision proved correct. We launched Banco Digital Next in under 12 months, maintaining 100% compliance with BACEN. The architecture allowed Next to scale quickly to compete with Nubank, with the security of Bradesco's structure.",
        "l": "I learned that good judgment often means finding a smart middle ground. 'Are Right, A Lot' involves synthesizing information from diverse and conflicting sources to form a new solution that incorporates the best points of each."
      },
      "fup": [
        {
          "q": "Quais foram os 3 principais pontos de dados que apoiaram sua tese da arquitetura híbrida?",
          "a": "Primeiro, o tempo de provisionamento de servidores on-premise era de 3 meses, contra 3 minutos na nuvem. Segundo, 100% dos neobanks concorrentes usavam nuvem. Terceiro, a regulamentação do BACEN para dados sensíveis era muito mais clara para data centers no Brasil. Esses três pontos juntos apontavam para a solução híbrida."
        },
        {
          "q": "Qual foi o argumento mais forte da oposição (100% cloud ou 100% on-premise) e como você o desconstruiu?",
          "a": "O argumento mais forte para 100% on-premise era a segurança. Eu não o desconstruí; eu o incorporei. Minha proposta mantinha os dados mais críticos on-premise, atendendo ao requisito de segurança, enquanto ganhava a agilidade da nuvem para o resto. Eu transformei um 'ou' em um 'e'."
        },
        {
          "q": "Descreva uma vez em que você buscou ativamente uma perspectiva para desconfirmar sua própria crença sobre a arquitetura.",
          "a": "Eu acreditava que a latência entre a nuvem e o on-premise seria um grande problema. Para desconfirmar isso, pedi à equipe de tecnologia para montar um protótipo rápido e fazer testes de estresse. Os resultados mostraram que, com a arquitetura correta, a latência era insignificante."
        },
        {
          "q": "Que princípio de design você usou para decidir quais componentes ficariam na nuvem e quais ficariam on-premise?",
          "a": "O princípio foi 'separar os dados da lógica'. Os dados sensíveis dos clientes e o core bancário, que mudam pouco, ficariam on-premise. A lógica de negócio, as APIs e as interfaces, que mudam constantemente, ficariam na nuvem para permitir agilidade e iteração rápida."
        },
        {
          "q": "Como essa decisão se conectava com a visão de longo prazo do Bradesco, além do projeto Next?",
          "a": "Ela se conectava à visão de modernização gradual do banco. A arquitetura híbrida criou uma 'ponte' segura para o futuro, permitindo que o Bradesco começasse a usar a nuvem de forma estratégica, aprendendo com o Next, antes de decidir sobre uma migração maior de seus sistemas legados."
        },
        {
          "q": "Qual foi o maior risco da sua abordagem híbrida e como você o mitigou?",
          "a": "O maior risco era a complexidade operacional de gerenciar dois ambientes. Mitiguei isso defendendo a criação de uma equipe de 'Platform Engineering' dedicada, com a responsabilidade de criar ferramentas e automação para simplificar o deployment e o monitoramento em ambos os ambientes."
        },
        {
          "q": "Se você estivesse errado, qual seria o custo e a complexidade para reverter a decisão?",
          "a": "A beleza da abordagem era a reversibilidade. Se a performance na nuvem fosse ruim, poderíamos mover os componentes de volta para o on-premise em cerca de 3 a 6 meses. Se a regulação mudasse, poderíamos mover o core para a nuvem. Era uma decisão de baixo arrependimento."
        },
        {
          "q": "Como você usou o seu julgamento para preencher as lacunas onde não havia dados claros?",
          "a": "Onde não havia dados, usei analogias de outras indústrias que passaram por transformações semelhantes, como o varejo. Meu julgamento foi que o setor bancário seguiria o mesmo caminho de agilidade e foco na experiência do cliente, e a arquitetura precisava suportar isso."
        },
        {
          "q": "Qual especialista externo você consultou e qual foi o conselho mais valioso que ele deu?",
          "a": "Consultei um ex-diretor de tecnologia de um grande banco europeu. Seu conselho mais valioso foi: 'Não lute contra o seu core bancário, isole-o. Construa seu novo mundo ao redor dele, através de APIs.' Isso foi fundamental para a minha tese da arquitetura híbrida."
        },
        {
          "q": "Olhando para trás, a decisão híbrida ainda é a correta hoje? Por quê?",
          "a": "Sim, absolutamente. Ela permitiu que o Next nascesse com a velocidade de uma fintech e a segurança de um incumbente. Hoje, com a maturidade das tecnologias de nuvem e a clareza regulatória, o caminho poderia ser diferente, mas para aquele momento, foi a decisão que permitiu o sucesso do projeto."
        }
      ]
    }
  ]
};

export default are_right_a_lot_data;
