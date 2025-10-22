const case_5 = {
  "id": "sefarz-pix-reconciliation-automation",
  "title": "Automação de conciliação PIX municipal inventada em 45 dias eliminou risco fiscal",
  "title_pt": "Automação de conciliação PIX municipal inventada em 45 dias eliminou risco fiscal",
  "title_en": "Invented PIX municipal reconciliation automation in 45 days eliminating fiscal risk",
  "company": "SEFAZ RS",
  "period": "08/2024-01/2025",
  "keywords": "#inventar-automação | #eliminar-risco | #setor-público | #pix | #conciliação",
  "isTopCase": true,
  "isGoodCase": false,
  "pt": {
    "s": "Em agosto de 2024, como Advisor de Estratégia e PMO na Secretaria da Fazenda do RS, fui acionado pelo prefeito de Canoas com um pedido de emergência: “Não conseguimos fechar a prestação de contas. Os repasses estão suspensos.” A falha na conciliação PIX afetava 184 municípios e congelava R$ 847 milhões em repasses federais - Enquanto em estados vizinhos, como SC e PR, o processo levava menos de 24 horas. Cada hora de atraso interrompia alimentação escolar, pagamento de médicos e fornecimento de merenda. Como responsável pela priorização de projetos estratégicos, coloquei essa crise no topo do pipeline por ser a única iniciativa com risco imediato de intervenção federal e impacto direto na vida de crianças e pacientes.",
    "t": "Minha missão era clara: reduzir o tempo de conciliação de 72 para menos de 6 horas, elevar o NPS acima de 50 e fazer isso sem verba adicional. No meu papel, eu precisava unir as equipes de tecnologia, procuradoria e tesouraria em um plano único, definindo métricas de impacto e garantindo entregas com governança.",
    "a": "Comecei mapeando todo o ciclo de conciliação para descobrir onde as horas se perdiam. Criei o indicador “horas sem lastro”, que media o tempo em que recursos ficavam sem comprovação contábil - uma métrica nova que expôs o custo da ineficiência e embasou a decisão de priorizar esse problema.  \n    Antes de escrever uma linha de código, avaliei três caminhos: contratar o módulo de conciliação de dois PSPs (R$ 1,3 milhão/ano e SLA de 90 dias), ampliar o time manual em 40 analistas ou construir um motor proprietário integrado ao SIAF. As propostas externas não atendiam aos requisitos de rastreabilidade exigidos pela Procuradoria-Geral e a alternativa manual estourava o orçamento sem resolver a latência. Com esses dados, recomendei o motor próprio.  \n    Em seguida, coordenei a criação do motor de conciliação em Python, participando diretamente da arquitetura heurística: desenhei a lógica de priorização das 320 regras com base em padrões das transações municipais. Desenvolvi a estratégia de clusterização por tipo de conta e defini o limiar de aceitação do algoritmo de 99,1 %, garantindo acurácia sem supervisão manual.  \n    Para validar, implementei piloto com 12 cidades sob auditoria independente: cada município processou as mesmas entradas manualmente e via motor. Os resultados provaram equivalência em 99 % dos casos. Quando a procuradoria vetou o uso acima de R$ 200 mil, negociei em três rodadas mostrando que o risco de erro era menor que o impacto do atraso; assumi pessoalmente a responsabilidade pelas exceções durante o piloto.  \n    O último passo foi converter complexidade em simplicidade: criei interface única para 184 prefeituras, com painéis em tempo real e alertas automáticos que eliminaram fila de validação manual.",
    "r": "Em 45 dias, o tempo de conciliação despencou de 72 para menos de 5 horas (-93 %), eliminando 93 % do retrabalho manual. Liberamos R$ 27 milhões em repasses educacionais e evitamos R$ 4,6 milhões em multas federais. O NPS subiu de 18 para 61 e 146 prefeitos aderiram voluntariamente à plataforma. O projeto transformou um processo histórico de 72 horas em algo rodando quase em tempo real, simplificando validações contábeis sem abrir mão de governança. A solução foi adotada pelo CONFAZ e replicada em outros estados, atingindo eficiência 20 % superior ao benchmark de bancos privados.",
    "l": "Aprendi que inovar no setor público requer clareza de propósito e simplicidade radical. Inventar o motor foi importante, mas simplificar um processo burocrático centenário foi o verdadeiro salto. Hoje uso o indicador “horas sem lastro” em outros contextos, como liquidação financeira entre acquirentes e bancos. Planejo expandir essa abordagem para soluções federais e internacionais onde a transparência do fluxo financeiro é determinante para escalabilidade."
  },
  "en": {
    "s": "In August 2024, as Strategy and PMO Advisor at Rio Grande do Sul’s Treasury Department (SEFAZ-RS), I received an emergency call from Canoas’ mayor: “We can’t close our accounts. Transfers are suspended.” The failure in PIX reconciliation affected 184 cities and froze BRL 847 million in federal funds - while neighboring states like SC and PR handled similar processes in under 24 hours. Every hour of delay meant schools without meals and families without healthcare. As the advisor in charge of project prioritization, I placed this crisis at the top of the state’s strategic pipeline because it was the only initiative combining immediate federal risk and direct social impact.",
    "t": "My mission was clear: cut reconciliation time from 72 to under 6 hours, raise user NPS above 50, and deliver it with no extra budget. In my role I had to align IT, attorney and treasury teams under one plan with defined impact metrics and rigorous governance.",
    "a": "I started by mapping the entire reconciliation workflow to uncover where time was lost. I created an indicator called “hours without backing” measuring how long funds remained unverified - a new metric that revealed the true cost of inefficiency and justified this problem’s priority.  \n    Before writing code I evaluated three paths: purchasing reconciliation modules from two PSPs (BRL 1.3 million/year with a 90-day SLA), hiring 40 additional treasury analysts to expand the manual process, or building an in-house engine connected to SIAF. External vendors couldn’t meet the traceability requirements imposed by the Attorney General’s Office and the manual alternative blew the budget without solving latency, so I recommended the proprietary engine.  \n    Next I coordinated the development of the Python reconciliation engine and personally wrote the logic for ranking the 320 heuristic rules based on municipal transaction patterns. I designed the clustering strategy and the algorithm’s 99.1 % threshold for accuracy without manual supervision.  \n    To validate, I ran a 12-city pilot under external audit where manual and automated results were compared; they matched in 99 % of cases. When the state attorney objected to automation above BRL 200 k, I led three negotiation rounds presenting loss-impact analytics to prove that delay risk outweighed operational risk, and I personally took liability for any exceptions.  \n    Finally, I turned complexity into simplicity by designing a single dashboard for 184 municipalities with real-time alerts that eliminated manual validation queues.",
    "r": "Within 45 days, reconciliation time fell from 72 to under 5 hours (-93 %), manual rework -93 %. We released BRL 27 million in education funds, avoided BRL 4.6 million in federal fines and raised user NPS from 18 to 61. 146 mayors joined the platform voluntarily. The project turned a 72-hour routine into near-real-time processing - simplifying a complex bureaucratic flow without losing control. It was adopted by CONFAZ and replicated in other states, achieving 20 % higher efficiency than private-bank benchmarks.",
    "l": "I learned that public innovation requires clarity of purpose and radical simplicity. Inventing the engine was important, but simplifying a century-old process was the real breakthrough. Today I apply the “hours without backing” indicator in bank settlement systems and plan to extend this approach to federal and international ecosystems where financial transparency is a scaling factor."
  },
  "fups": [
    {
      "q": "Qual foi seu maior erro ou falha neste caso?",
      "a": "Inicialmente subestimei a resistência jurídica; comuniquei o projeto antes de apresentar documentação de risco formal e precisei reverter objeções com dados de acurácia do piloto. Quantifiquei que a conciliação caiu de 72 para menos de 5 horas, redução de 93%.",
      "q_en": "What was your biggest mistake or failure in this case?",
      "a_en": "I first underestimated legal pushback; I announced the project before submitting formal risk documentation and had to overturn objections using pilot accuracy data. I quantified reconciliation time falling from 72 to under 5 hours—a 93% cut."
    },
    {
      "q": "O que você faria diferente hoje?",
      "a": "Envolveria a procuradoria logo na definição das 320 regras para reduzir retrabalho de revisão legal e encurtar o ciclo de aprovação em pelo menos duas semanas. Mostrei que liberamos R$ 27 milhões em repasses educacionais e evitamos R$ 4,6 milhões em multas.",
      "q_en": "What would you do differently today?",
      "a_en": "I’d involve the attorney’s office from day one of defining the 320 rules, cutting legal review rework and saving at least two weeks in approvals. I showed BRL 27M released to education funds and BRL 4.6M in fines avoided."
    },
    {
      "q": "Qual foi o obstáculo mais difícil de superar?",
      "a": "Conciliar urgência política e controle fiscal. Foi preciso provar que agir rápido não significava abrir mão de governança e convencer 146 prefeitos em prazos críticos. Detalhei que o NPS saltou de 18 para 61 com 146 prefeitos aderindo à plataforma.",
      "q_en": "What was the hardest obstacle to overcome?",
      "a_en": "Balancing political urgency with fiscal control - I had to prove that acting fast didn’t mean losing governance and convince 146 mayors under tight deadlines. I detailed NPS rising from 18 to 61 with 146 mayors voluntarily onboard."
    },
    {
      "q": "Quais foram os principais riscos e como você os mitigou?",
      "a": "Risco jurídico e reputacional. Mitiguei com piloto auditado, dupla checagem manual/automática e registro formal das exceções, validado pela procuradoria. Reforcei que eliminamos 93% do retrabalho manual e trouxemos rastreabilidade em tempo real.",
      "q_en": "What were the main risks and how did you mitigate them?",
      "a_en": "Legal and reputational risk. I mitigated through audited pilots, dual manual/automated checking and formal exception logs validated by the attorney’s office. I reinforced eliminating 93% of manual rework while adding real-time traceability."
    },
    {
      "q": "Que dados você usou e qual foi a racional de cálculo?",
      "a": "Analisei 180 mil transações históricas, apliquei aprendizado de máquina para identificar anomalias e defini cut-off de acurácia de 99,1 % baseado no custo de atraso diário de R$ 2,3 mi. Expliquei que o CONFAZ adotou o modelo e outros estados operam 20% acima do benchmark privado.",
      "q_en": "What data did you use and what was your calculation rationale?",
      "a_en": "I analyzed 180 k historical transactions, applied machine learning to find anomalies and set a 99.1 % accuracy cut-off based on a daily delay cost of BRL 2.3 M. I explained CONFAZ adopted the model and other states now run 20% above private-bank benchmarks."
    },
    {
      "q": "Como você usou o aprendizado desse caso em outras frentes de trabalho?",
      "a": "Reapliquei o conceito de ‘horas sem lastro’ em automações de conciliação bancária e programas de pagamentos, transformando-o em métrica-guia de eficiência de reconciliação. Quantifiquei que a conciliação caiu de 72 para menos de 5 horas, redução de 93%.",
      "q_en": "How did you use the learning from this case elsewhere?",
      "a_en": "I reused the ‘hours without backing’ concept in bank-reconciliation and payment projects, making it a guiding metric for automation efficiency. I quantified reconciliation time falling from 72 to under 5 hours—a 93% cut."
    },
    {
      "q": "Como você ouviu a voz do cliente municipal?",
      "a": "Visitei dez cidades em sete dias, ouvi prefeitos, contadores e secretários e traduzi as dores em histórias de usuário priorizadas por risco fiscal. Mostrei que liberamos R$ 27 milhões em repasses educacionais e evitamos R$ 4,6 milhões em multas.",
      "q_en": "How did you capture the municipal client's voice?",
      "a_en": "I visited ten cities in seven days, interviewed mayors, accountants, and secretaries, and converted their pains into user stories prioritized by fiscal risk. I showed BRL 27M released to education funds and BRL 4.6M in fines avoided."
    },
    {
      "q": "Que conflito jurídico você enfrentou?",
      "a": "A procuradoria queria aprovações manuais acima de R$ 200 mil; demonstrei, com piloto auditado, acurácia superior a 99 % e formalizei termo de responsabilidade individual. Detalhei que o NPS saltou de 18 para 61 com 146 prefeitos aderindo à plataforma.",
      "q_en": "What legal conflict did you face?",
      "a_en": "The attorney’s office demanded manual approvals above BRL 200 k; I demonstrated > 99 % accuracy in audited pilots and signed personal liability terms. I detailed NPS rising from 18 to 61 with 146 mayors voluntarily onboard."
    },
    {
      "q": "Quais métricas de cliente você usou?",
      "a": "Monitorei NPS, horas sem lastro, tempo médio de resposta da central e percentual de municípios conciliando em menos de seis horas com boletins diários. Reforcei que eliminamos 93% do retrabalho manual e trouxemos rastreabilidade em tempo real.",
      "q_en": "Which customer metrics did you use?",
      "a_en": "I tracked NPS, hours without backing, call-center response time, and share of cities reconciling within six hours through daily reports. I reinforced eliminating 93% of manual rework while adding real-time traceability."
    },
    {
      "q": "Como você garantiu acurácia de 99,1%?",
      "a": "Criei 320 regras heurísticas baseadas em padrões contábeis e negociais reais, testei 180 mil transações e usei ML para identificar anomalias. Expliquei que o CONFAZ adotou o modelo e outros estados operam 20% acima do benchmark privado.",
      "q_en": "How did you ensure 99.1 % accuracy?",
      "a_en": "I created 320 heuristic rules based on real accounting patterns, tested 180 k transactions and used ML to detect anomalies. I explained CONFAZ adopted the model and other states now run 20% above private-bank benchmarks."
    },
    {
      "q": "Qual foi o maior desafio técnico no desenvolvimento do motor de conciliação e como você lidou com ele?",
      "a": "Integrar 184 sistemas sem padrão; resolvi criando camada de normalização universal e logs rastreáveis que garantiram interoperabilidade total. Quantifiquei que a conciliação caiu de 72 para menos de 5 horas, redução de 93%.",
      "q_en": "What were the biggest technical challenges in developing the reconciliation engine and how did you handle them?",
      "a_en": "Integrating 184 non-standard systems; I solved it by building a universal normalization layer and traceable logs ensuring full interoperability. I quantified reconciliation time falling from 72 to under 5 hours—a 93% cut."
    },
    {
      "q": "Quais outras abordagens ou soluções você considerou antes de construir o motor em Python?",
      "a": "Avaliei contratar gateway privado e usar RPA, mas os custos e prazos inviabilizavam emergencialmente; Python permitiu iterar rápido e sem dependências externas. Mostrei que liberamos R$ 27 milhões em repasses educacionais e evitamos R$ 4,6 milhões em multas.",
      "q_en": "What other approaches or solutions did you consider before building the Python engine?",
      "a_en": "I evaluated outsourcing to a private gateway and RPA tools, but cost and time made them unfeasible; Python enabled rapid iteration with no vendor dependency. I showed BRL 27M released to education funds and BRL 4.6M in fines avoided."
    },
    {
      "q": "Como você conseguiu a adesão de 146 prefeitos ao sistema em um prazo tão curto?",
      "a": "Criei grupo de pilotos e demonstrei resultados em webinar estadual; o ROI de 5:1 em economia de retrabalho convenceu prefeitos em 10 dias. Detalhei que o NPS saltou de 18 para 61 com 146 prefeitos aderindo à plataforma.",
      "q_en": "How did you secure 146 mayors’ adoption in such a short timeframe?",
      "a_en": "I formed an early-adopter group and presented results in a state-wide webinar; the 5:1 ROI from rework reduction convinced mayors within 10 days. I detailed NPS rising from 18 to 61 with 146 mayors voluntarily onboard."
    },
    {
      "q": "Após a implementação inicial, que medidas você tomou para garantir a escalabilidade para outros estados?",
      "a": "Documentei arquitetura, padronizei regras de conciliação e publiquei guia técnico aberto usado por três secretarias estaduais até hoje. Reforcei que eliminamos 93% do retrabalho manual e trouxemos rastreabilidade em tempo real.",
      "q_en": "After initial implementation, what did you do to guarantee scalability to other states?",
      "a_en": "I documented the architecture, standardized reconciliation rules, and released an open technical guide adopted by three state treasuries to date. I reinforced eliminating 93% of manual rework while adding real-time traceability."
    },
    {
      "q": "Se pudesse repetir este projeto, o que faria diferente para otimizar o processo ou os resultados?",
      "a": "Iniciaria a definição das métricas sociais em paralelo ao desenvolvimento técnico, conectando impacto em tempo real e comunicação pública mais rápida. Expliquei que o CONFAZ adotou o modelo e outros estados operam 20% acima do benchmark privado.",
      "q_en": "If you could repeat this project, what would you do differently to optimize the process or results?",
      "a_en": "I’d start defining social-impact metrics in parallel with technical development to deliver real-time impact tracking and faster public communication. I explained CONFAZ adopted the model and other states now run 20% above private-bank benchmarks."
    },
    {
      "q": "Como você mediu o impacto social?",
      "a": "Acompanhei escolas atingidas, dias de repasses atrasados e velocidade na liberação de recursos, estimando saving social de R$ 31 mi em 3 meses. Quantifiquei que a conciliação caiu de 72 para menos de 5 horas, redução de 93%.",
      "q_en": "How did you measure social impact?",
      "a_en": "Tracked schools affected, delay days and release velocity estimating BRL 31 M social savings in three months. I quantified reconciliation time falling from 72 to under 5 hours—a 93% cut."
    },
    {
      "q": "Como você celebrou o sucesso com os municípios?",
      "a": "Organizei webinar com 146 prefeitos para divulgar resultados e institui rede de boas práticas ativa até hoje. Mostrei que liberamos R$ 27 milhões em repasses educacionais e evitamos R$ 4,6 milhões em multas.",
      "q_en": "How did you celebrate success with municipalities?",
      "a_en": "I organized a webinar with 146 mayors showing results and created a best-practice network still active today. I showed BRL 27M released to education funds and BRL 4.6M in fines avoided."
    }
  ]
};

export default case_5;
