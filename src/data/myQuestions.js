// src/data/myQuestions_sophisticated.js
// Perguntas estratégicas e diferenciadas para demonstrar expertise e mentalidade de líder sênior

const myQuestionsData = {
  pt: {
    title: "Perguntas Estratégicas para Entrevistadores Amazon",
    subtitle: "Demonstrando expertise em pagamentos, AI/ML e liderança sênior",
    categories: [
      {
        category: "Estratégia de Pagamentos & Parceria Oakberry",
        icon: "💳",
        description: "Perguntas que demonstram conhecimento profundo do ecossistema de pagamentos Amazon",
        questions: [
          {
            q: "Como a parceria estratégica com Oakberry se alinha com a visão de longo prazo da Amazon para pagamentos no Brasil, especialmente considerando o crescimento do PIX e Open Finance?",
            note: "Demonstra conhecimento do mercado brasileiro e visão estratégica",
            level: "Strategic"
          },
          {
            q: "Quais são os principais trade-offs entre velocidade de implementação e robustez operacional que vocês enfrentam ao integrar novos payment partners como Oakberry?",
            note: "Mostra experiência com dilemas reais de program management",
            level: "Tactical"
          },
          {
            q: "Como vocês medem o sucesso de uma transformação operacional em pagamentos? Além de Payment Success Rate e Authorization Rate, quais métricas de eficiência (por exemplo, Custo Operacional por Transação e Tempo de Processamento) e de experiência do cliente (como NPS) são críticas para o negócio?",
            note: "Revela conhecimento de métricas de eficiência e experiência do cliente em pagamentos",
            level: "Operational"
          },
          {
            q: "Considerando que pagamentos são mission-critical, como vocês balanceiam experimentação com AI/ML versus estabilidade operacional? Existe um framework de risk appetite definido?",
            note: "Demonstra maturidade em gestão de risco e inovação",
            level: "Strategic"
          }
        ]
      },
      {
        category: "AI/ML & Automação Operacional",
        icon: "🤖",
        description: "Perguntas que revelam expertise técnica e visão de futuro",
        questions: [
          {
            q: "Quais use cases de AI/ML vocês consideram mais promissores para reduzir Process Cycle Time em operações de pagamento? Anomaly detection, predictive routing, ou automated reconciliation?",
            note: "Mostra conhecimento técnico específico de AI/ML em pagamentos",
            level: "Technical"
          },
          {
            q: "Como vocês lidam com o cold start problem ao implementar modelos de ML em novos payment partners? Existe uma estratégia de transfer learning ou vocês começam do zero?",
            note: "Demonstra conhecimento profundo de desafios de ML",
            level: "Technical"
          },
          {
            q: "Qual é a abordagem da Amazon para explicabilidade de modelos de AI em decisões críticas de pagamento, especialmente considerando compliance e auditoria?",
            note: "Revela preocupação com governança e compliance",
            level: "Strategic"
          },
          {
            q: "Como vocês medem ROI de iniciativas de automação? Existe um framework padronizado para calcular savings de Process Cycle Time versus investment em AI/ML?",
            note: "Mostra mentalidade de business case e ROI",
            level: "Business"
          }
        ]
      },
      {
        category: "Excelência Operacional & Lean Six Sigma",
        icon: "⚡",
        description: "Perguntas que demonstram expertise em transformação operacional",
        questions: [
          {
            q: "Como vocês aplicam os princípios de Lean Six Sigma em um ambiente de alta velocidade como Amazon? Existe tensão entre 'bias for action' e rigor metodológico?",
            note: "Mostra conhecimento dos Leadership Principles e metodologias",
            level: "Cultural"
          },
          {
            q: "Qual é a abordagem para identificar e eliminar waste em processos de pagamento? Vocês usam value stream mapping ou têm metodologia própria?",
            note: "Demonstra conhecimento prático de Lean",
            level: "Operational"
          },
          {
            q: "Como vocês garantem que melhorias de processo sejam sustentáveis e não regridam após a implementação? Existe um sistema de controle estatístico?",
            note: "Revela preocupação com sustentabilidade de melhorias",
            level: "Tactical"
          },
          {
            q: "Quais são os maiores desafios para implementar self-service capabilities em operações de pagamento? Como vocês balanceiam autonomia versus controle?",
            note: "Mostra entendimento de dilemas de self-service",
            level: "Strategic"
          }
        ]
      },
      {
        category: "Liderança & Influência sem Autoridade",
        icon: "🎯",
        description: "Perguntas que revelam maturidade em liderança sênior",
        questions: [
          {
            q: "Como vocês lidam com resistência de stakeholders sênior quando dados mostram que uma transformação é necessária, mas ela impacta métricas de curto prazo?",
            note: "Demonstra experiência com dilemas de liderança sênior",
            level: "Leadership"
          },
          {
            q: "Qual é a estratégia para influenciar teams que não reportam diretamente para você, especialmente quando há conflito de prioridades entre eficiência operacional e feature delivery?",
            note: "Mostra experiência com matrix organizations",
            level: "Influence"
          },
          {
            q: "Como vocês constroem buy-in para iniciativas de transformação que têm payback de longo prazo? Existe um playbook para storytelling com dados?",
            note: "Revela habilidade de comunicação estratégica",
            level: "Communication"
          },
          {
            q: "Quando vocês enfrentam trade-offs entre Customer Obsession e Operational Excellence, como tomam decisões? Existe um framework de priorização?",
            note: "Demonstra entendimento profundo dos Leadership Principles",
            level: "Decision Making"
          }
        ]
      },
      {
        category: "Escalabilidade & Crescimento",
        icon: "📈",
        description: "Perguntas sobre visão de futuro e crescimento sustentável",
        questions: [
          {
            q: "Como vocês projetam operações de pagamento para escalar 10x sem aumentar headcount proporcionalmente? Quais são os principais bottlenecks antecipados?",
            note: "Mostra pensamento de escala e eficiência",
            level: "Scalability"
          },
          {
            q: "Qual é a visão de 3-5 anos para Payment Business Operations na Amazon Brasil? Como vocês se preparam para mudanças regulatórias como CBDC?",
            note: "Demonstra visão de longo prazo e conhecimento regulatório",
            level: "Vision"
          },
          {
            q: "Como vocês balanceiam padronização global versus customização local em operações de pagamento? Existe tensão entre efficiency e market fit?",
            note: "Revela entendimento de complexidades globais",
            level: "Global Strategy"
          },
          {
            q: "Quais capabilities vocês consideram core versus non-core para build vs buy decisions em payment operations? Como avaliam make-or-break moments?",
            note: "Mostra maturidade em decisões estratégicas",
            level: "Strategic"
          }
        ]
      },
      {
        category: "Cultura & Desenvolvimento Organizacional",
        icon: "🌟",
        description: "Perguntas sobre construção de cultura de excelência",
        questions: [
          {
            q: "Como vocês cultivam uma cultura de continuous improvement em um ambiente de alta pressão? Existe espaço para experimentação e failure?",
            note: "Demonstra preocupação com cultura de longo prazo",
            level: "Culture"
          },
          {
            q: "Qual é a abordagem para desenvolver capabilities de AI/ML no time? Vocês investem em upskilling ou preferem hiring?",
            note: "Mostra visão de desenvolvimento de talentos",
            level: "Talent Development"
          },
          {
            q: "Como vocês medem e melhoram psychological safety no time, especialmente quando lidam com sistemas críticos onde erros têm alto impacto?",
            note: "Revela maturidade em liderança moderna",
            level: "Team Dynamics"
          },
          {
            q: "Existe um career path claro para Program Managers que querem evoluir para roles mais sênior? Quais são os key differentiators entre L6 e L7?",
            note: "Demonstra ambição e planejamento de carreira",
            level: "Career Growth"
          }
        ]
      },
      // A categoria de sugestões do Glassdoor foi removida para focar em perguntas personalizadas para cada entrevistador e nos objetivos da vaga.
      {
        category: "Perguntas de Fechamento Estratégico",
        icon: "🚀",
        description: "Perguntas que demonstram confiança e visão de contribuição",
        questions: [
          {
            q: "Baseado na minha experiência com transformações de pagamento no Sicredi, Bradesco e HSBC, onde vocês veem maior potencial de impacto nos primeiros 6 meses?",
            note: "Conecta experiência passada com oportunidades futuras",
            level: "Value Proposition"
          },
          {
            q: "Se eu trouxesse uma proposta de quick win que poderia reduzir Operational Cost per Transaction em 15% nos primeiros 90 dias, qual seria o processo de approval e implementation?",
            note: "Demonstra mentalidade de results delivery",
            level: "Execution"
          },
          {
            q: "Quais são os 2-3 biggest bets que vocês estão fazendo em Payment Operations para os próximos 18 meses? Como meu background pode acelerar esses outcomes?",
            note: "Mostra interesse em contribuir para prioridades estratégicas",
            level: "Strategic Alignment"
          },
          {
            q: "Existe algo na minha experiência ou approach que vocês gostariam de explorar mais profundamente? Posso compartilhar um case específico que seja mais relevante?",
            note: "Abre espaço para demonstrar expertise adicional",
            level: "Opportunity Creation"
          }
        ]
      },
      // Categorias personalizadas para cada entrevistador
      {
        category: "<strong>Heleno P.</strong> <small>(Modelagem e Ciência de Dados em Pagamentos)</small>",
        icon: "🧠",
        description: "Perguntas alinhadas à experiência do entrevistador em ciência de dados e precificação",
        questions: [
          {
            q: "Você liderou o desenvolvimento de modelos que conectam decisões de supply chain a custos logísticos no FBA. Como essa experiência em precificação pode ajudar a reduzir custo por transação e melhorar decisões de roteamento em pagamentos?",
            note: "Conecta a experiência do entrevistador com desafios do papel",
            level: "Strategic"
          },
          {
            q: "No WFM você criou modelos causais para medir o gasto incremental de clientes. Como técnicas similares poderiam avaliar o impacto de novos parceiros de pagamento na adoção do PIX?",
            note: "Demonstra visão analítica aplicada a pagamentos",
            level: "Technical"
          },
          {
            q: "Você já transformou métricas complexas em dashboards self-service para Product Managers. Que indicadores seriam essenciais para monitorar a eficácia de modelos de AI/ML em pagamentos?",
            note: "Explora desenho de métricas e governança de dados",
            level: "Operational"
          },
          {
            q: "Como equilibrar experimentação em modelos de fees com a necessidade de estabilidade em sistemas mission-critical de pagamento?",
            note: "Mostra maturidade em gerenciamento de risco",
            level: "Strategic"
          },
          {
            q: "Como vocês calculam o trade-off entre investimento em infraestrutura de modelos de AI/ML e o valor presente líquido (NPV) desses investimentos? Existe um mental model que oriente essa priorização?",
            note: "Usa linguagem econômica e mental models para priorização de AI/ML",
            level: "Strategic"
          },
          {
            q: "Você menciona a importância de traduzir problemas ambíguos em modelos mentais simples【112279552890454†L24-L30】. Poderia compartilhar um exemplo de como aplicou esse approach a uma decisão de precificação ou pagamento ambígua dentro da Amazon?",
            note: "Explora a aplicação de mental models em cenários reais",
            level: "Operational"
          },
          {
            q: "Como você avalia causalidade entre melhorias operacionais e experiência do cliente? Quais experimentos considera para entender o impacto do PIX na retenção de sellers?",
            note: "Une causal inference e métricas de experiência",
            level: "Technical"
          },
          {
            q: "Quando precificam serviços como fulfillment ou armazenamento, como determinam o ponto ótimo em que a redução de fees aumenta a satisfação do cliente sem comprometer a rentabilidade?",
            note: "Conecta pricing com customer experience",
            level: "Strategic"
          },
          {
            q: "Você já enfrentou situações em que o modelo mental inicial se mostrou inadequado frente a dados inesperados? Como você revisou o framework e gerenciou essa incerteza?",
            note: "Explora frameworks de decisão sob incerteza",
            level: "Leadership"
          },
          {
            q: "Como integra externalidades positivas, como fidelização de clientes, ao calcular o retorno de novos recursos de pagamento? Existe um modelo para estimar o valor incremental para o ecossistema?",
            note: "Investiga valorização incremental e impactos indiretos",
            level: "Strategic"
          }
          ,
          {
            q: "Dado seu histórico em econometria e causal inference, como você aborda o desafio de medir o impacto de promoções de taxas de transação em diferentes cohortes de vendedores? Existe uma abordagem de difference-in-differences que você aplica?",
            note: "Aprofunda causal inference e experimentos em contextos de pricing",
            level: "Technical"
          },
          {
            q: "Ao integrar múltiplos métodos de pagamento, como você equilibra a complexidade analítica de diversas variáveis com a necessidade de simplificar a decisão para stakeholders não técnicos? Quais ferramentas ou mental models você utiliza para comunicar resultados?",
            note: "Explora simplificação de problemas complexos e comunicação de insights",
            level: "Strategic"
          },
          {
            q: "Você menciona quantificar valor incremental; ao avaliar novas features de pagamento, como estimam o lifetime value incremental de sellers ou clientes e quais hipóteses são mais críticas nesse cálculo?",
            note: "Enfatiza definição de métricas de valor incremental",
            level: "Strategic"
          },
          {
            q: "Como a sua experiência em Ambev e AB InBev influencia a forma como modela problemas de pagamento na Amazon? Existem insights de precificação de bens de consumo que se aplicam a serviços financeiros?",
            note: "Traz perspectiva cross‑industry para pricing e pagamentos",
            level: "Strategic"
          },
          {
            q: "Quais são os principais riscos de overfitting em sistemas de precificação dinâmica de fees e como você garante que os modelos permaneçam robustos diante de mudanças macroeconômicas?",
            note: "Aborda robustez de modelos e trade‑offs entre precisão e generalização",
            level: "Technical"
          }
        ]
      },
      {
        category: "<strong>Sujash B.</strong> <small>(Programas de Pagamentos e Expansão Internacional)</small>",
        icon: "🌎",
        description: "Perguntas que exploram a experiência do entrevistador em gerir programas de pagamento e parcerias globais",
        questions: [
          {
            q: "Quais aprendizados das operações de pagamentos na Índia e na América Latina você aplicaria na parceria com a Oakberry para acelerar a adoção do PIX e de wallets digitais?",
            note: "Destaca experiência internacional e foco em mercado brasileiro",
            level: "Strategic"
          },
          {
            q: "Como Senior Manager de Digital Payments e Seller Experience, quais trade-offs surgem ao balancear prioridades dos parceiros de pagamento, times de operação e experiência do vendedor?",
            note: "Mostra entendimento de gestão de stakeholders",
            level: "Tactical"
          },
          {
            q: "A experiência em telecom e m-commerce na Airtel influenciou sua abordagem para inovação em pagamentos na Amazon. Quais práticas de lá você recomenda para nossos programas?",
            note: "Cria ligação entre setores diferentes",
            level: "Strategic"
          },
          {
            q: "Que frameworks você usa para medir sucesso em engajamento de parceiros em mercados emergentes e garantir alinhamento entre todas as partes?",
            note: "Foca em métricas e governança",
            level: "Operational"
          }
          ,
          {
            q: "Quais são os critérios mais importantes para avaliar o fit estratégico de um parceiro de pagamento, além de volume de transações? Consideram alinhamento de marca, capacidade tecnológica ou experiência do cliente?",
            note: "Investiga critérios de avaliação de parcerias",
            level: "Strategic"
          },
          {
            q: "Como sua experiência na Índia influenciou sua abordagem para engajar parceiros no Brasil e em outros países da LATAM? Há práticas do mercado indiano que foram decisivas?",
            note: "Explora transfer learning entre mercados internacionais",
            level: "Strategic"
          },
          {
            q: "Ao gerenciar programas de pagamento em diversos países, como balanceia padronização global com necessidade de customização local? Existem princípios norteadores para decidir onde padronizar?",
            note: "Analisa estratégias de padronização versus customização",
            level: "Global Strategy"
          },
          {
            q: "Que tipos de governança você implementa para garantir que múltiplos stakeholders (finance, legal, operações, sellers) estejam alinhados em grandes iniciativas, evitando atrasos e escopos divergentes?",
            note: "Explora estrutura de governança de programas complexos",
            level: "Leadership"
          },
          {
            q: "Dado seu histórico em customer & seller experience, como você avalia o impacto de novos parceiros de pagamento na experiência do vendedor e do cliente final? Existem métricas específicas que orientam essas decisões?",
            note: "Conecta experiência do vendedor com estratégia de parcerias",
            level: "Strategic"
          },
          {
            q: "Como vocês fazem benchmarking de tendências de pagamentos digitais entre Índia, Brasil e outros mercados emergentes para identificar oportunidades de inovação? Há exemplos de iniciativas que replicaram com sucesso?",
            note: "Investiga aprendizado cruzado e replicação de iniciativas bem-sucedidas",
            level: "Strategic"
          },
          {
            q: "Quais desafios de integração de novas APIs de parceiros (como wallets ou bancos digitais) são mais críticos na LATAM? Como a experiência com m-commerce na Airtel ajuda a superá-los?",
            note: "Foca em desafios técnicos e experiência prévia para superá-los",
            level: "Technical"
          }
        ]
      },
      {
        category: "<strong>Andreia G.</strong> <small>(Excelência Operacional e Melhoria Contínua em Pagamentos)</small>",
        icon: "⚙️",
        description: "Perguntas focadas em processos, Lean e melhoria contínua nas operações de pagamento",
        questions: [
          {
            q: "Quais práticas de Lean e Six Sigma você considera mais efetivas na redução de tempos de ciclo em processos de autorização, processamento e settlement?",
            note: "Demonstra conhecimento de melhorias operacionais",
            level: "Operational"
          },
          {
            q: "Você implementou o modelo ‘chapter’ no banco BV, obtendo 70% de ganho de eficiência. Como essa experiência pode ajudar na criação de capacidades de self-service e automação na Amazon?",
            note: "Conecta experiências anteriores com desafios atuais",
            level: "Strategic"
          },
          {
            q: "Sua experiência inclui negociar com payment networks e provedores. Quais critérios você usa para selecionar novos parceiros e garantir compliance e estabilidade?",
            note: "Mostra visão estratégica de parcerias",
            level: "Leadership"
          },
          {
            q: "Como você desenvolve e motiva equipes em ambientes de alta pressão garantindo que a velocidade ágil não comprometa a qualidade e segurança das operações?",
            note: "Explora liderança e cultura de melhoria contínua",
            level: "Team Dynamics"
          },
          {
            q: "Ao projetar processos do zero para a integração da Oakberry, como vocês identificam e priorizam os pain points que mais impactam a taxa de aprovação de transações?",
            note: "Foca em design de processos e otimização de approval rate",
            level: "Strategic"
          },
          {
            q: "Como a implementação do modelo chapter no Banco BV, que resultou em ganhos significativos de eficiência【112279552890454†L174-L178】, influencia sua abordagem ao organizar squads na Amazon? Que métricas usa para medir esse impacto?",
            note: "Conecta chapter model com squads na Amazon",
            level: "Leadership"
          },
          {
            q: "Quais são os maiores desafios em manter um ambiente 24x7 de pagamentos operando com alta disponibilidade e quais práticas de resposta a incidentes recomenda?",
            note: "Explora desafios de operações 24x7",
            level: "Operational"
          },
          {
            q: "Quando introduzem novos fluxos de pagamento, como equilibram a necessidade de resiliência e compliance com a velocidade de rollout? Existe um playbook para operações greenfield versus brownfield?",
            note: "Analisa trade-offs entre resiliência, compliance e velocidade",
            level: "Strategic"
          },
          {
            q: "Quais aprendizados você trouxe da implementação do PIX que podem ser aplicados à adoção de novos métodos de pagamento, como CBDC ou Open Finance?",
            note: "Expande expertise PIX para novas tecnologias",
            level: "Innovative"
          },
          {
            q: "Como você assegura que squads autônomos mantenham alinhamento com objetivos estratégicos enquanto operam de forma ágil?",
            note: "Foca em alinhamento e autonomia de equipes",
            level: "Team Dynamics"
          }
          ,
          {
            q: "Na evolução contínua dos processos de pagamento, como você prioriza melhorias incrementais em relação a iniciativas de transformação completa? Existe um critério para decidir quando redesenhar versus otimizar?",
            note: "Analisa trade‑offs entre melhoria contínua e redesign completo",
            level: "Strategic"
          },
          {
            q: "Como operações 24x7 se preparam para eventos de alto volume, como Prime Day ou Black Friday? Quais lições aprendidas poderiam ser aplicadas à parceria com a Oakberry?",
            note: "Explora preparação para picos de volume em operações críticas",
            level: "Operational"
          },
          {
            q: "Em projetos de aprovação de cartão e PIX, como vocês testam alterações de processo sem comprometer a taxa de aprovação? Existe um mecanismo de A/B testing operacional?",
            note: "Investiga estratégias de experimentação sem impactar performance",
            level: "Technical"
          },
          {
            q: "Quais competências principais você busca ao formar squads para trabalhar em pagamentos? Como equilibra expertise técnica, regulatória e de negócio?",
            note: "Foca em composição e balanceamento de times multidisciplinares",
            level: "Team Development"
          },
          {
            q: "Com o avanço de regulações como Open Finance, como você adapta processos operacionais para garantir compliance enquanto mantém uma experiência de cliente sem atritos?",
            note: "Relaciona compliance regulatório com experiência do cliente",
            level: "Strategic"
          }
        ]
      },
      {
        category: "<strong>Eduardo L.</strong> <small>(Estratégia Financeira e Parcerias de Alto Impacto)</small>",
        icon: "💼",
        description: "Perguntas que cruzam finanças, M&A e decisões estratégicas em pagamentos",
        questions: [
          {
            q: "Como a experiência em planejamento financeiro e tesouraria global pode ajudar a justificar investimentos em AI/ML para operações de pagamento?",
            note: "Foca em alocação de recursos e inovação",
            level: "Strategic"
          },
          {
            q: "Quais métricas financeiras e de risco você considera mais críticas ao avaliar parcerias com novos processadores ou fintechs?",
            note: "Explora gestão de risco e ROI",
            level: "Tactical"
          },
          {
            q: "Tendo atuado em consultoria estratégica e private equity, que práticas de governança e KPIs financeiros você recomenda para garantir que a transformação de pagamentos gere valor a longo prazo?",
            note: "Conecta experiência em M&A com operações",
            level: "Leadership"
          },
          {
            q: "Como a integração entre finanças e operações pode otimizar decisões de pricing e fees para equilibrar experiência do cliente e rentabilidade?",
            note: "Integra perspectivas financeiras e operacionais",
            level: "Strategic"
          },
          {
            q: "Quais múltiplos e métricas financeiras você considera ao decidir entre desenvolver internamente ou terceirizar uma solução de automação de pagamentos? Há diferenças entre mercados como Brasil e EUA?",
            note: "Explora make-or-buy sob perspectiva financeira",
            level: "Strategic"
          },
          {
            q: "Como sua experiência em M&A e private equity influencia sua avaliação de risco na integração de parceiros de pagamento como a Oakberry? Existe um hurdle rate mínimo para aprovar projetos?",
            note: "Usa linguagem de M&A e mindset de private equity",
            level: "Leadership"
          },
          {
            q: "Ao apresentar um business case para o board e CFO, como traduz métricas operacionais (ex. Process Cycle Time, Payment Success Rate) em indicadores financeiros como ROI e payback?",
            note: "Conecta métricas operacionais a indicadores financeiros",
            level: "Operational"
          },
          {
            q: "Você já vivenciou um caso em que a análise financeira indicava um caminho e a estratégia de customer experience apontava para outro? Como equilibrou esses pontos de vista?",
            note: "Explora trade-offs entre finanças e experiência do cliente",
            level: "Decision Making"
          },
          {
            q: "Considerando sua experiência na expansão internacional do Inter【112279552890454†L70-L78】, quais aprendizados podem ser aplicados para escalar soluções de pagamento da Amazon na LATAM?",
            note: "Aplica experiência internacional ao contexto regional",
            level: "Strategic"
          },
          {
            q: "Como a mentalidade de private equity influencia a avaliação e priorização de iniciativas de AI/ML no roadmap de pagamentos?",
            note: "Integra mindset de private equity e inovação tecnológica",
            level: "Strategic"
          }
          ,
          {
            q: "Além de ROI e NPV, quais métricas qualitativas, como brand equity ou experiência do cliente, você considera ao avaliar investimentos em novos métodos de pagamento? Como essas métricas influenciam a decisão final de investimento?",
            note: "Integra métricas intangíveis no processo de tomada de decisão",
            level: "Strategic"
          },
          {
            q: "Quando avaliam parcerias com fintechs emergentes, como equilibram o potencial de inovação com a estabilidade financeira e regulatória? Existe um framework de due diligence específico para o mercado brasileiro de pagamentos?",
            note: "Explora due diligence e gestão de risco em parcerias",
            level: "Strategic"
          },
          {
            q: "Você liderou expansão internacional no Inter; como lidar com riscos cambiais e hedge ao planejar operações de pagamento em múltiplas moedas? Isso afeta a seleção de parceiros e tecnologias?",
            note: "Aborda gestão de risco financeiro em contextos multilaterais",
            level: "Strategic"
          },
          {
            q: "Ao trabalhar com o board em iniciativas estratégicas, quais narrativas ou histórias você utiliza para conectar métricas financeiras aos benefícios para o cliente? Pode dar um exemplo de como transformou métricas de ciclo operacional em insights persuasivos?",
            note: "Explora storytelling financeiro para stakeholders",
            level: "Communication"
          },
          {
            q: "Como a mentalidade de private equity influencia as metas de curto prazo versus investimentos de longo prazo em automação e AI/ML? Há uma taxa mínima de retorno (hurdle rate) para cada tipo de iniciativa?",
            note: "Relaciona mindset de private equity com priorização de investimentos",
            level: "Strategic"
          }
        ]
      },
      {
        category: "<strong>Gabriela B.</strong> <small>(Business Intelligence e Métricas de Sucesso em Pagamentos)</small>",
        icon: "📊",
        description: "Perguntas dirigidas a profissionais de BI/Data Analysis para impulsionar decisões em pagamentos",
        questions: [
          {
            q: "Como você estrutura dashboards e métricas que atendam tanto às necessidades operacionais quanto estratégicas em pagamentos, permitindo que equipes ajam de forma autônoma?",
            note: "Explora design de métricas e empowerment",
            level: "Operational"
          },
          {
            q: "Quais são os principais desafios ao integrar dados de múltiplos parceiros e métodos de pagamento e como sua experiência com SQL, ETL e AWS ajuda a garantir qualidade e governança?",
            note: "Foca em integração e governança de dados",
            level: "Technical"
          },
          {
            q: "Nos projetos em que criou curvas de retenção e modelos estatísticos, quais técnicas seriam mais eficazes para detectar padrões de fraude ou anomalias em transações?",
            note: "Aprofunda temas de detecção e prevenção",
            level: "Strategic"
          },
          {
            q: "Que estratégias recomenda para incentivar uma cultura data-driven em equipes que ainda dependem de relatórios manuais e como medir o sucesso dessa mudança?",
            note: "Foca em mudança cultural e adoção de BI",
            level: "Team Dynamics"
          },
          {
            q: "Quais métricas North Star vocês definiram ou consideram definir para medir o sucesso da adoção do PIX e como envolvem equipes de operações e produto nessa definição?",
            note: "Explora definição de North Star Metrics",
            level: "Strategic"
          },
          {
            q: "Em seus projetos de democratização de dados, como garante que operadores de pagamento com pouca experiência analítica consigam interpretar dashboards complexos? Há práticas de design específicas que recomenda?",
            note: "Conecta democratização de dados com usabilidade",
            level: "Operational"
          },
          {
            q: "Quando integram dados de múltiplos parceiros de pagamento, como vocês mitigam discrepâncias de qualidade e estabelecem governança sem impactar a agilidade?",
            note: "Foco em qualidade de dados e governança",
            level: "Technical"
          },
          {
            q: "Quais técnicas de visualização você utiliza para comunicar insights de modelos de retenção ou detecção de fraude a executivos que não têm background técnico?",
            note: "Explora comunicação com stakeholders não técnicos",
            level: "Communication"
          },
          {
            q: "Você pode compartilhar um exemplo em que a democratização de dados transformou um processo decisório passivo em ativo, levando a mudanças significativas nas operações de pagamento?",
            note: "Mostra impacto prático da democratização",
            level: "Strategic"
          },
          {
            q: "Como vocês treinam ou capacitam times de pagamentos para se tornarem auto-suficientes em análise de dados, minimizando dependência do time de BI?",
            note: "Foca em capacitação e autonomia",
            level: "Team Development"
          }
          ,
          {
            q: "Como você equilibra a padronização de métricas globais com a necessidade de indicadores locais que reflitam as particularidades do mercado brasileiro de pagamentos?",
            note: "Aborda adaptação de métricas globais ao contexto local",
            level: "Strategic"
          },
          {
            q: "Ao definir métricas North Star para iniciativas como PIX ou wallets digitais, quais etapas utiliza para alinhar stakeholders de produto, operações e compliance, e como gerencia divergências nessa definição?",
            note: "Explora alinhamento cross‑functional na definição de métricas",
            level: "Strategic"
          },
          {
            q: "Em projetos de detecção de anomalias, como decide entre modelos estatísticos tradicionais e abordagens de machine learning? Quais critérios utiliza para determinar custo‑benefício e interpretabilidade?",
            note: "Investiga critérios de seleção de modelos para detecção de fraude",
            level: "Technical"
          },
          {
            q: "Como você mede o sucesso da democratização de dados? Vocês rastreiam métricas como tempo de resposta ou número de consultas self-service versus solicitações ao time de BI?",
            note: "Avalia métricas para monitorar a adoção de self‑service",
            level: "Operational"
          },
          {
            q: "Qual é a sua abordagem para manter consistência e qualidade dos dados quando várias equipes adicionam novos campos e atributos aos sistemas? Existe um processo de governança colaborativa?",
            note: "Foca em governança colaborativa para expansão de dados",
            level: "Operational"
          }
        ]
      }
    ]
  },
  en: {
    title: "Strategic Questions for Amazon Interviewers",
    subtitle: "Demonstrating expertise in payments, AI/ML, and senior leadership",
    categories: [
      {
        category: "Payments Strategy & Oakberry Partnership",
        icon: "💳",
        description: "Questions demonstrating deep knowledge of Amazon's payments ecosystem",
        questions: [
          {
            q: "How does the strategic partnership with Oakberry align with Amazon's long-term vision for payments in Brazil, especially considering PIX growth and Open Finance?",
            note: "Shows knowledge of Brazilian market and strategic vision",
            level: "Strategic"
          },
          {
            q: "What are the main trade-offs between implementation speed and operational robustness when integrating new payment partners like Oakberry?",
            note: "Shows experience with real program management dilemmas",
            level: "Tactical"
          },
          {
            q: "How do you measure success of a payments operations transformation? Beyond Payment Success Rate and Authorization Rate, which efficiency metrics (e.g., Operational Cost per Transaction and Processing Time) and customer experience metrics (such as NPS) are critical for the business?",
            note: "Reveals knowledge of both efficiency and customer experience metrics in payments",
            level: "Operational"
          },
          {
            q: "Considering payments are mission-critical, how do you balance AI/ML experimentation versus operational stability? Is there a defined risk appetite framework?",
            note: "Shows maturity in risk management and innovation",
            level: "Strategic"
          }
        ]
      },
      // New custom categories tailored to each interviewer
      {
        category: "<strong>Heleno P.</strong> <small>(Modeling & Data Science in Payments)</small>",
        icon: "🧠",
        description: "Questions aligned with the interviewer's expertise in data science and pricing",
        questions: [
          {
            q: "You led development of models linking supply chain decisions to FBA logistics costs. How can that pricing experience help reduce transaction costs and improve routing decisions in payments?",
            note: "Connects the interviewer's experience with the role's challenges",
            level: "Strategic"
          },
          {
            q: "At Whole Foods Market you built causal models to measure customers’ incremental spend. How could similar techniques evaluate the impact of new payment partners on PIX adoption?",
            note: "Demonstrates analytical vision applied to payments",
            level: "Technical"
          },
          {
            q: "You've turned complex metrics into self‑service dashboards for product managers. Which indicators are essential to monitor AI/ML effectiveness in payments?",
            note: "Explores metric design and data governance",
            level: "Operational"
          },
          {
            q: "How do you balance experimentation in fee models with the need for stability in mission‑critical payment systems?",
            note: "Shows maturity in risk management",
            level: "Strategic"
          },
          {
            q: "How do you calculate the trade‑off between investing in AI/ML model infrastructure and the net present value (NPV) of those investments? Is there a mental model that guides this prioritization?",
            note: "Uses economic language and mental models for AI/ML prioritization",
            level: "Strategic"
          },
          {
            q: "You often emphasize translating ambiguous problems into simple mental models【112279552890454†L24-L30】. Could you share an example of how you applied this approach to an ambiguous pricing or payments decision within Amazon?",
            note: "Explores application of mental models in real scenarios",
            level: "Operational"
          },
          {
            q: "How do you assess causality between operational improvements and customer experience? What experiments would you consider to understand the PIX’s impact on seller retention?",
            note: "Combines causal inference and experience metrics",
            level: "Technical"
          },
          {
            q: "When pricing services such as fulfillment or storage, how do you determine the optimal point where fee reductions increase customer satisfaction without undermining profitability?",
            note: "Connects pricing with customer experience",
            level: "Strategic"
          },
          {
            q: "Have you encountered situations where your initial mental model proved inadequate when confronted with unexpected data? How did you revise the framework and manage this uncertainty?",
            note: "Explores decision frameworks under uncertainty",
            level: "Leadership"
          },
          {
            q: "How do you incorporate positive externalities, such as customer loyalty, when calculating the return on new payment features? Is there a model to estimate incremental value to the ecosystem?",
            note: "Investigates incremental value and indirect impacts",
            level: "Strategic"
          }
          ,
          {
            q: "Given your background in econometrics and causal inference, how do you tackle the challenge of measuring the impact of transaction fee promotions on different seller cohorts? Do you apply difference-in-differences approaches?",
            note: "Deepens causal inference and experimental thinking in pricing contexts",
            level: "Technical"
          },
          {
            q: "When integrating multiple payment methods, how do you balance the analytical complexity of numerous variables with the need to simplify decisions for non‑technical stakeholders? Which tools or mental models do you use to communicate results?",
            note: "Explores simplification of complex problems and communication of insights",
            level: "Strategic"
          },
          {
            q: "You often mention quantifying incremental value; when assessing new payment features, how do you estimate the incremental lifetime value of sellers or customers and which assumptions are most critical in that calculation?",
            note: "Emphasizes defining metrics for incremental value",
            level: "Strategic"
          },
          {
            q: "How does your experience at Ambev and AB InBev influence the way you model payment problems at Amazon? Are there pricing insights from consumer goods that apply to financial services?",
            note: "Brings cross‑industry perspective to pricing and payments",
            level: "Strategic"
          },
          {
            q: "What are the main risks of overfitting in dynamic fee pricing systems, and how do you ensure models remain robust amid macroeconomic changes?",
            note: "Addresses model robustness and trade‑offs between precision and generalization",
            level: "Technical"
          }
        ]
      },
      {
        category: "<strong>Sujash B.</strong> <small>(Payments Programs & International Expansion)</small>",
        icon: "🌎",
        description: "Questions exploring the interviewer's experience managing payment programs and global partnerships",
        questions: [
          {
            q: "What lessons from payment operations in India and Latin America would you apply to the Oakberry partnership to accelerate adoption of PIX and digital wallets?",
            note: "Highlights international experience and focus on the Brazilian market",
            level: "Strategic"
          },
          {
            q: "As Senior Manager of Digital Payments and Seller Experience, what trade‑offs arise when balancing priorities of payment partners, ops teams and seller experience?",
            note: "Demonstrates understanding of stakeholder management",
            level: "Tactical"
          },
          {
            q: "Your telecom and m‑commerce background at Airtel influenced innovation in Amazon payments. Which practices from that sector would you recommend for our programs?",
            note: "Links cross‑industry experience",
            level: "Strategic"
          },
          {
            q: "Which frameworks do you use to measure partner engagement success in emerging markets and ensure alignment among all parties?",
            note: "Focuses on metrics and governance",
            level: "Operational"
          }
          ,
          {
            q: "What are the most important criteria for assessing the strategic fit of a payment partner beyond transaction volume? Do you consider brand alignment, technological capability or customer experience?",
            note: "Investigates criteria for evaluating partnerships",
            level: "Strategic"
          },
          {
            q: "How did your experience in India influence your approach to engaging partners in Brazil and other LATAM countries? Are there practices from the Indian market you found decisive?",
            note: "Explores cross‑market learning and adaptation",
            level: "Strategic"
          },
          {
            q: "When managing payment programs across multiple countries, how do you balance global standardization with the need for local customization? Are there guiding principles that help decide where to standardize?",
            note: "Analyzes strategies of standardization versus customization",
            level: "Global Strategy"
          },
          {
            q: "What types of governance do you implement to ensure multiple stakeholders (finance, legal, operations, sellers) are aligned on major initiatives, avoiding delays and scope creep?",
            note: "Explores governance structures for complex programs",
            level: "Leadership"
          },
          {
            q: "Given your background in customer and seller experience, how do you evaluate the impact of new payment partners on seller and end customer experience? Are there specific metrics that guide these decisions?",
            note: "Connects seller experience with partnership strategy",
            level: "Strategic"
          },
          {
            q: "How do you benchmark digital payment trends across India, Brazil and other emerging markets to identify innovation opportunities? Are there examples of initiatives you successfully replicated?",
            note: "Investigates cross‑market learning and replication of successful initiatives",
            level: "Strategic"
          },
          {
            q: "What are the critical challenges when integrating new partner APIs, such as wallets or digital banks, in LATAM? How does your m‑commerce experience at Airtel help you overcome them?",
            note: "Focuses on technical challenges and prior experience to overcome them",
            level: "Technical"
          }
        ]
      },
      {
        category: "<strong>Andreia G.</strong> <small>(Operational Excellence & Continuous Improvement in Payments)</small>",
        icon: "⚙️",
        description: "Questions focused on processes, Lean and continuous improvement in payment operations",
        questions: [
          {
            q: "Which Lean and Six Sigma practices are most effective at reducing cycle times in authorization, processing and settlement processes?",
            note: "Demonstrates knowledge of operational improvements",
            level: "Operational"
          },
          {
            q: "You implemented the ‘chapter’ model at Banco BV, achieving a 70% efficiency gain. How could that experience help build self‑service and automation capabilities at Amazon?",
            note: "Connects previous experience with current challenges",
            level: "Strategic"
          },
          {
            q: "Your experience includes negotiating with payment networks and providers. What criteria do you use when selecting new partners to ensure compliance and stability?",
            note: "Shows strategic view of partnerships",
            level: "Leadership"
          },
          {
            q: "How do you develop and motivate teams in high‑pressure environments while ensuring agile speed doesn’t compromise quality and payment security?",
            note: "Explores leadership and continuous improvement culture",
            level: "Team Dynamics"
          }
          ,
          {
            q: "In the continuous evolution of payment processes, how do you prioritize incremental improvements versus complete transformations? Is there a criterion for deciding when to redesign versus optimize?",
            note: "Analyzes trade‑offs between continuous improvement and complete redesign",
            level: "Strategic"
          },
          {
            q: "How do 24x7 operations prepare for high‑volume events like Prime Day or Black Friday? Which lessons learned would you apply to the Oakberry partnership?",
            note: "Explores preparation for peak volume in critical operations",
            level: "Operational"
          },
          {
            q: "In card and PIX approval projects, how do you test process changes without compromising the approval rate? Is there an operational A/B testing mechanism?",
            note: "Investigates experimentation strategies without impacting performance",
            level: "Technical"
          },
          {
            q: "What core competencies do you look for when forming squads to work on payments? How do you balance technical, regulatory and business expertise?",
            note: "Focuses on composition and balance of multidisciplinary teams",
            level: "Team Development"
          },
          {
            q: "With regulatory advances such as Open Finance, how do you adapt operational processes to ensure compliance while maintaining a frictionless customer experience?",
            note: "Relates regulatory compliance to customer experience",
            level: "Strategic"
          }
        ]
      },
      {
        category: "<strong>Eduardo L.</strong> <small>(Financial Strategy & High‑Impact Partnerships)</small>",
        icon: "💼",
        description: "Questions crossing finance, M&A and strategic decisions in payments",
        questions: [
          {
            q: "How can your experience in financial planning and global treasury help justify AI/ML investments for payment operations?",
            note: "Focuses on resource allocation and innovation",
            level: "Strategic"
          },
          {
            q: "Which financial and risk metrics do you consider most critical when evaluating partnerships with new processors or fintechs?",
            note: "Explores risk management and ROI",
            level: "Tactical"
          },
          {
            q: "Having worked in strategic consulting and private equity, what governance practices and financial KPIs do you recommend to ensure payment transformation creates long‑term value?",
            note: "Connects M&A experience with operations",
            level: "Leadership"
          },
          {
            q: "How can integration between finance and operations optimize pricing and fee decisions to balance customer experience and profitability?",
            note: "Integrates financial and operational perspectives",
            level: "Strategic"
          },
          {
            q: "Which multiples and financial metrics do you consider when deciding between building an in-house payment automation solution or outsourcing it? Are there differences between markets such as Brazil and the US?",
            note: "Explores make-or-buy from a financial perspective",
            level: "Strategic"
          },
          {
            q: "How does your experience in M&A and private equity influence your risk assessment when integrating payment partners like Oakberry? Is there a minimum hurdle rate to approve such projects?",
            note: "Uses M&A language and private equity mindset",
            level: "Leadership"
          },
          {
            q: "When presenting a business case to the board and CFO, how do you translate operational metrics (e.g., Process Cycle Time, Payment Success Rate) into financial indicators such as ROI and payback?",
            note: "Connects operational metrics to financial metrics",
            level: "Operational"
          },
          {
            q: "Have you experienced a situation where financial analysis pointed one way and customer experience strategy suggested another? How did you balance these perspectives with stakeholders?",
            note: "Explores trade-offs between finance and customer experience",
            level: "Decision Making"
          },
          {
            q: "Given your experience scaling Inter’s international operations【112279552890454†L70-L78】, what lessons can be applied to scale Amazon’s payment solutions across LATAM?",
            note: "Applies international experience to regional context",
            level: "Strategic"
          },
          {
            q: "How does a private equity mindset influence the evaluation and prioritization of AI/ML initiatives on the payments roadmap?",
            note: "Integrates private equity mindset with technological innovation",
            level: "Strategic"
          }
          ,
          {
            q: "Beyond ROI and NPV, which qualitative metrics — such as brand equity or customer experience — do you consider when evaluating investments in new payment methods? How do these metrics influence the final investment decision?",
            note: "Integrates intangible metrics into the investment decision process",
            level: "Strategic"
          },
          {
            q: "When evaluating partnerships with emerging fintechs, how do you balance the potential for innovation with financial and regulatory stability? Is there a specific due diligence framework for the Brazilian payments market?",
            note: "Explores due diligence and risk management in partnerships",
            level: "Strategic"
          },
          {
            q: "You led international expansion at Inter; how do you manage currency and hedging risks when planning payment operations across multiple currencies? Does this affect the selection of partners and technologies?",
            note: "Addresses financial risk management in multi‑currency contexts",
            level: "Strategic"
          },
          {
            q: "When working with the board on strategic initiatives, what narratives or stories do you use to connect financial metrics to customer benefits? Can you share an example where you turned operational cycle metrics into persuasive insights?",
            note: "Explores financial storytelling for stakeholders",
            level: "Communication"
          },
          {
            q: "How does a private equity mindset influence short‑term targets versus long‑term investments in automation and AI/ML? Is there a minimum return hurdle rate for each type of initiative?",
            note: "Relates private equity mindset to investment prioritization",
            level: "Strategic"
          }
        ]
      },
      {
        category: "<strong>Gabriela B.</strong> <small>(Business Intelligence & Success Metrics in Payments)</small>",
        icon: "📊",
        description: "Questions directed at BI/Data Analysis professionals to drive decisions in payments",
        questions: [
          {
            q: "How do you structure dashboards and metrics that meet both operational and strategic needs in payments, enabling teams to act autonomously?",
            note: "Explores metric design and empowerment",
            level: "Operational"
          },
          {
            q: "What are the main challenges of integrating data from multiple partners and payment methods, and how does your experience with SQL, ETL and AWS ensure quality and governance?",
            note: "Focuses on data integration and governance",
            level: "Technical"
          },
          {
            q: "In projects where you created retention curves and statistical models, which techniques would be most effective at detecting fraud patterns or transaction anomalies?",
            note: "Digs into detection and prevention themes",
            level: "Strategic"
          },
          {
            q: "What strategies do you recommend to encourage a data‑driven culture in teams that still rely on manual reports, and how do you measure success of that change?",
            note: "Focuses on cultural change and BI adoption",
            level: "Team Dynamics"
          },
          {
            q: "What North Star metrics have you defined or are considering for measuring success of PIX adoption, and how do you involve operations and product teams in defining them?",
            note: "Explores defining North Star metrics",
            level: "Strategic"
          },
          {
            q: "In your data democratization projects【112279552890454†L130-L141】, how do you ensure payment operators with limited analytical experience can interpret complex dashboards? Are there specific design practices you recommend?",
            note: "Connects data democratization with usability",
            level: "Operational"
          },
          {
            q: "When integrating data from multiple payment partners, how do you mitigate quality discrepancies and establish governance without impacting agility?",
            note: "Focuses on data quality and governance",
            level: "Technical"
          },
          {
            q: "Which visualization techniques do you use to communicate insights from retention or fraud detection models to executives without technical backgrounds?",
            note: "Explores communication with non‑technical stakeholders",
            level: "Communication"
          },
          {
            q: "Could you share an example where data democratization transformed a passive decision‑making process into an active one, leading to significant changes in payment operations?",
            note: "Shows practical impact of democratization",
            level: "Strategic"
          },
          {
            q: "How do you train or upskill payment teams to become self‑sufficient in data analysis, minimizing dependency on the BI team?",
            note: "Focuses on training and autonomy",
            level: "Team Development"
          }
          ,
          {
            q: "How do you balance standardizing global metrics with the need for local indicators that reflect the specificities of Brazil's payments market?",
            note: "Addresses adapting global metrics to the local context",
            level: "Strategic"
          },
          {
            q: "When defining North Star metrics for initiatives like PIX or digital wallets, what steps do you take to align stakeholders in product, operations and compliance, and how do you manage divergent views?",
            note: "Explores cross‑functional alignment in metric definition",
            level: "Strategic"
          },
          {
            q: "In anomaly detection projects, how do you decide between traditional statistical models and machine learning approaches? What criteria do you use to determine cost‑benefit and interpretability?",
            note: "Investigates criteria for selecting models for fraud detection",
            level: "Technical"
          },
          {
            q: "How do you measure the success of data democratization? Do you track metrics such as response time or the number of self‑service queries versus requests to the BI team?",
            note: "Evaluates metrics to monitor adoption of self‑service",
            level: "Operational"
          },
          {
            q: "What's your approach for maintaining data consistency and quality when multiple teams add new fields and attributes to systems? Is there a collaborative governance process?",
            note: "Focuses on collaborative governance for data expansion",
            level: "Operational"
          }
        ]
      },
      {
        category: "AI/ML & Operational Automation",
        icon: "🤖",
        description: "Questions revealing technical expertise and future vision",
        questions: [
          {
            q: "Which AI/ML use cases do you consider most promising for reducing Process Cycle Time in payment operations? Anomaly detection, predictive routing, or automated reconciliation?",
            note: "Shows specific technical knowledge of AI/ML in payments",
            level: "Technical"
          },
          {
            q: "How do you handle the cold start problem when implementing ML models for new payment partners? Is there a transfer learning strategy or do you start from scratch?",
            note: "Demonstrates deep ML challenges knowledge",
            level: "Technical"
          },
          {
            q: "What's Amazon's approach to AI model explainability in critical payment decisions, especially considering compliance and audit requirements?",
            note: "Shows concern for governance and compliance",
            level: "Strategic"
          },
          {
            q: "How do you measure ROI of automation initiatives? Is there a standardized framework to calculate Process Cycle Time savings versus AI/ML investment?",
            note: "Shows business case and ROI mindset",
            level: "Business"
          }
        ]
      },
      {
        category: "Operational Excellence & Lean Six Sigma",
        icon: "⚡",
        description: "Questions demonstrating operational transformation expertise",
        questions: [
          {
            q: "How do you apply Lean Six Sigma principles in a high-velocity environment like Amazon? Is there tension between 'bias for action' and methodological rigor?",
            note: "Shows knowledge of Leadership Principles and methodologies",
            level: "Cultural"
          },
          {
            q: "What's the approach to identify and eliminate waste in payment processes? Do you use value stream mapping or have proprietary methodology?",
            note: "Demonstrates practical Lean knowledge",
            level: "Operational"
          },
          {
            q: "How do you ensure process improvements are sustainable and don't regress after implementation? Is there a statistical control system?",
            note: "Shows concern for improvement sustainability",
            level: "Tactical"
          },
          {
            q: "What are the biggest challenges implementing self-service capabilities in payment operations? How do you balance autonomy versus control?",
            note: "Shows understanding of self-service dilemmas",
            level: "Strategic"
          }
        ]
      },
      {
        category: "Leadership & Influence Without Authority",
        icon: "🎯",
        description: "Questions revealing senior leadership maturity",
        questions: [
          {
            q: "How do you handle senior stakeholder resistance when data shows transformation is needed, but it impacts short-term metrics?",
            note: "Shows experience with senior leadership dilemmas",
            level: "Leadership"
          },
          {
            q: "What's the strategy to influence teams that don't report directly to you, especially when there's priority conflict between operational efficiency and feature delivery?",
            note: "Shows matrix organization experience",
            level: "Influence"
          },
          {
            q: "How do you build buy-in for transformation initiatives with long-term payback? Is there a playbook for data-driven storytelling?",
            note: "Reveals strategic communication skills",
            level: "Communication"
          },
          {
            q: "When facing trade-offs between Customer Obsession and Operational Excellence, how do you make decisions? Is there a prioritization framework?",
            note: "Shows deep understanding of Leadership Principles",
            level: "Decision Making"
          }
        ]
      },
      {
        category: "Scalability & Growth",
        icon: "📈",
        description: "Questions about future vision and sustainable growth",
        questions: [
          {
            q: "How do you design payment operations to scale 10x without proportional headcount increase? What are the main anticipated bottlenecks?",
            note: "Shows scale thinking and efficiency",
            level: "Scalability"
          },
          {
            q: "What's the 3-5 year vision for Payment Business Operations at Amazon Brazil? How do you prepare for regulatory changes like CBDC?",
            note: "Shows long-term vision and regulatory knowledge",
            level: "Vision"
          },
          {
            q: "How do you balance global standardization versus local customization in payment operations? Is there tension between efficiency and market fit?",
            note: "Shows understanding of global complexities",
            level: "Global Strategy"
          },
          {
            q: "Which capabilities do you consider core versus non-core for build vs buy decisions in payment operations? How do you evaluate make-or-break moments?",
            note: "Shows maturity in strategic decisions",
            level: "Strategic"
          }
        ]
      },
      {
        category: "Culture & Organizational Development",
        icon: "🌟",
        description: "Questions about building excellence culture",
        questions: [
          {
            q: "How do you cultivate continuous improvement culture in high-pressure environment? Is there space for experimentation and failure?",
            note: "Shows concern for long-term culture",
            level: "Culture"
          },
          {
            q: "What's the approach to develop AI/ML capabilities in the team? Do you invest in upskilling or prefer hiring?",
            note: "Shows talent development vision",
            level: "Talent Development"
          },
          {
            q: "How do you measure and improve psychological safety in the team, especially when dealing with critical systems where errors have high impact?",
            note: "Shows modern leadership maturity",
            level: "Team Dynamics"
          },
          {
            q: "Is there a clear career path for Program Managers wanting to evolve to more senior roles? What are key differentiators between L6 and L7?",
            note: "Shows ambition and career planning",
            level: "Career Growth"
          }
        ]
      },
      // The Glassdoor-based category was removed to emphasize questions tailored to each interviewer and the role requirements.
      {
        category: "Strategic Closing Questions",
        icon: "🚀",
        description: "Questions demonstrating confidence and contribution vision",
        questions: [
          {
            q: "Based on my experience with payment transformations at Sicredi, Bradesco, and HSBC, where do you see greatest impact potential in first 6 months?",
            note: "Connects past experience with future opportunities",
            level: "Value Proposition"
          },
          {
            q: "If I brought a quick win proposal that could reduce Operational Cost per Transaction by 15% in first 90 days, what would be the approval and implementation process?",
            note: "Shows results delivery mindset",
            level: "Execution"
          },
          {
            q: "What are the 2-3 biggest bets you're making in Payment Operations for next 18 months? How could my background accelerate those outcomes?",
            note: "Shows interest in contributing to strategic priorities",
            level: "Strategic Alignment"
          },
          {
            q: "Is there anything in my experience or approach you'd like to explore more deeply? Can I share a specific case that's more relevant?",
            note: "Opens space to demonstrate additional expertise",
            level: "Opportunity Creation"
          }
        ]
      }
    ]
  }
};

export default myQuestionsData;
