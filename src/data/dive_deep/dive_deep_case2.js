const case_2 = {
  id: "hsbc-data-validation-audit",
  title: "Auditoria Pessoal em Processos de Validacao de Dados em Multiplos Paises",
  title_pt: "Auditoria Pessoal em Processos de Validacao de Dados em Multiplos Paises",
  title_en: "Personal Audit of Data Validation Processes Across Multiple Countries",
  company: "HSBC",
  period: "05/2015-06/2016",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: `Quando um dashboard mostra 99,8% de sucesso na migração de um portfólio de US$ 5,2 bilhões, a maioria dos executivos comemora. Mas eu vi uma bomba-relógio prestes a explodir para 280 mil clientes de alta renda do HSBC. Aquele 0,2% de erro significava que nomes como \'João\' viravam \'Jo?o\', bloqueando o acesso a milhões em investimentos e fazendo com que cartas de compliance nunca chegassem. O fornecedor global dizia \'está tudo bem\', mas eu sabia que a confiança dos nossos clientes mais valiosos estava em jogo.`,
    t: `Fui nomeado o single-threaded owner para ser a voz do cliente naquela migração. Meu compromisso com o COO era claro: em 10 dias, eu iria provar, com dados, o risco real para nossos clientes e entregar um plano para garantir que nenhum deles fosse prejudicado, protegendo o go-live sem atrasar o cronograma.`,
    a: `Eu mergulhei nos dados pessoalmente, pedindo acesso direto ao Redshift e às instâncias Oracle. Escrevi 51 scripts SQL para caçar os erros que os jobs padrão ignoravam, como caracteres especiais em nomes internacionais. Auditei manualmente 120 contas, não as aleatórias, mas as dos clientes com maior patrimônio e atividade internacional, onde um erro seria catastrófico. Para dar voz à dor, liguei para 12 Relationship Managers e usei suas histórias de horror de migrações passadas para provar que o NPS dos nossos clientes VIPs despencaria. Minha investigação revelou 840 contas em risco, totalizando US$ 180 milhões em ativos. Em uma chamada de crise com o diretor do fornecedor, eu não mostrei apenas queries; eu simulei a tela de um cliente VIP tentando acessar seu portfólio bloqueado. Exigi uma correção em 72 horas e liderei três squads globais (Índia, Polônia, Brasil) para reescrever o parser. Finalmente, instalei um mecanismo de \'Auditoria do Cliente Cético\': um script de comparação byte a byte que me alertava sobre qualquer desvio acima de 0,05%.`,
    r: `O resultado foi a proteção total dos nossos clientes. Nenhum dos 840 clientes em risco sofreu qualquer impacto no go-live. O NPS, que prevíamos que iria desabar para menos de 50, se manteve estável em 82. Além do impacto no cliente, minha ação evitou multas FATCA estimadas em até US$ 5 milhões. O mecanismo de alerta que criei reduziu o tempo de resposta a incidentes de dados em 35% e o playbook da minha auditoria foi publicado pelo PMO global como leitura obrigatória para todas as futuras migrações.`,
    l: `Esse caso me ensinou que a verdadeira governança não é sobre agradar dashboards, é sobre honrar a confiança do cliente. Um dashboard \'verde\' pode esconder uma experiência \'vermelha\' para milhares. Desde então, eu aplico um mecanismo que chamo de \'Auditoria do Cliente Cético\': 1) Eu pessoalmente audito as amostras mais críticas, não com a visão do sistema, mas com a visão do cliente que mais tem a perder. 2) Eu trago a \'voz da dor\' para a sala, seja através dos RMs ou dos próprios clientes. 3) Eu instalo um monitoramento contínuo que mede a experiência do cliente, não apenas a saúde do sistema. Esse playbook se tornou meu legado no HSBC, protegendo milhões de clientes em programas subsequentes.`
  },
  en: {
    s: `When a dashboard shows 99.8% success in a US$5.2 billion portfolio migration, most executives celebrate. But I saw a ticking time bomb about to explode for 280,000 high-net-worth HSBC clients. That 0.2% error meant names like \'João\' became \'Jo?o\', blocking access to millions in investments and causing compliance letters to never arrive. The global vendor said \'everything is fine,\', but I knew the trust of our most valuable clients was at stake.`,
    t: `I was appointed the single-threaded owner to be the voice of the customer in that migration. My commitment to the COO was clear: within 10 days, I would prove, with data, the real risk to our clients and deliver a plan to ensure none of them were harmed, protecting the go-live without delaying the timeline.`,
    a: `I dove into the data myself, requesting direct access to Redshift and the Oracle instances. I wrote 51 SQL scripts to hunt for the errors the standard jobs ignored, like special characters in international names. I manually audited 120 accounts, not random ones, but those of clients with the highest net worth and international activity, where an error would be catastrophic. To give a voice to the pain, I called 12 Relationship Managers and used their horror stories from past migrations to prove that the NPS of our VIP clients would plummet. My investigation revealed 840 accounts at risk, totaling US$180 million in assets. In a crisis call with the vendor\'s director, I didn\'t just show queries; I simulated the screen of a VIP client trying to access their blocked portfolio. I demanded a fix in 72 hours and led three global squads (India, Poland, Brazil) to rewrite the parser. Finally, I installed a \'Skeptical Customer Audit\' mechanism: a byte-by-byte comparison script that alerted me to any deviation above 0.05%.`,
    r: `The result was the complete protection of our clients. None of the 840 at-risk clients suffered any impact at go-live. The NPS, which we predicted would plummet to below 50, remained stable at 82. In addition to the customer impact, my action avoided FATCA fines estimated at up to US$5 million. The alert mechanism I created reduced the response time to data incidents by 35%, and my audit playbook was published by the global PMO as mandatory reading for all future migrations.`,
    l: `This case taught me that true governance is not about pleasing dashboards, it\'s about honoring the customer\'s trust. A \'green\' dashboard can hide a \'red\' experience for thousands. Since then, I apply a mechanism I call the \'Skeptical Customer Audit\': 1) I personally audit the most critical samples, not from the system\'s perspective, but from the perspective of the customer who has the most to lose. 2) I bring the \'voice of pain\' into the room, whether through RMs or the customers themselves. 3) I install continuous monitoring that measures the customer experience, not just system health. This playbook became my legacy at HSBC, protecting millions of customers in subsequent programs.`
  },
  fups: [
    {
        q: "Qual foi o maior risco que você não previu inicialmente?",
        a: "Eu subestimei a resistência cultural do fornecedor em admitir uma falha. Eu achei que os dados seriam suficientes, mas precisei de uma escalada direta ao diretor global deles, com o impacto financeiro e o risco de quebra de contrato na mesa. Aprendi que, além dos dados, é preciso ter uma estratégia de influência e escalada preparada para quando a negação é mais forte que a evidência.",
        q_en: "What was the biggest risk you didn\'t initially foresee?",
        a_en: "I underestimated the vendor\'s cultural resistance to admitting a flaw. I thought the data would be enough, but I needed a direct escalation to their global director, with the financial impact and the risk of breach of contract on the table. I learned that in addition to data, you need to have an influence and escalation strategy ready for when denial is stronger than the evidence."
    },
    {
      q: "Como voce convenceu o fornecedor global a priorizar a correcao sem atrasar o cronograma?",
      a: "Montei um plano de risco binario: mostrei o calculo de multa FATCA, os 840 registros afetados e uma linha do tempo comparando correcao em 72h versus impacto pos go-live. Pedi um commitment formal do diretor do fornecedor e inseri checkpoint diario comigo e com o CTO.",
      q_en: "How did you convince the global vendor to prioritize the fix without delaying the timeline?",
      a_en: "I built a binary risk plan: showed the FATCA penalty exposure, the 840 affected records, and a timeline comparing an immediate 72-hour fix versus post go-live fallout. I asked the vendor director for a formal commitment and set up a daily checkpoint with him and our CTO." 
    },
    {
      q: "Que criterios voce usou para selecionar as 120 contas auditadas manualmente?",
      a: "Criei um score baseado em valor de ativos, presenca internacional, campos sensiveis e historico de reclamacoes. As 120 contas cobriam 95% da receita em risco e traziam pelo menos um campo com caracteres especiais.",
      q_en: "What criteria did you use to choose the 120 accounts for manual audit?",
      a_en: "I built a scoring model using asset value, international presence, sensitive fields, and prior complaints. The 120 accounts covered 95% of revenue at risk and each had at least one special-character field." 
    },
    {
      q: "Como voce garantiu que o parser corrigido nao introduzisse novos problemas?",
      a: "Implementei testes unitarios com 30 cenarios, rodamos carga retroativa com hash de comparacao e usei o script de byte check. Tambem fizemos smoke test com 50 clientes acompanhados pelos RMs.",
      q_en: "How did you ensure the fixed parser did not introduce new issues?",
      a_en: "We added 30 unit-test scenarios, ran a retroactive load with hash comparison, and used the byte-check script. We also ran a smoke test with 50 real customers monitored by their RMs." 
    },
    {
      q: "De que maneira voce envolveu os Relationship Managers na mitigacao do risco?",
      a: "Compartilhei com cada RM a lista de clientes potencialmente afetados, pedi validacao de dados sensiveis e alinhei mensagens proativas caso encontrasse erro. Isso manteve a area comercial confiante e preservou o NPS em 82.",
      q_en: "How did you involve Relationship Managers in mitigating the risk?",
      a_en: "I shared a list of potentially affected clients with each RM, asked them to validate sensitive fields, and aligned proactive messaging. That kept the commercial team confident and maintained NPS at 82." 
    },
    {
      q: "Qual foi o mecanismo de alerta implementado apos o go-live?",
      a: "Criei um script em Python que compara byte a byte os arquivos origem/destino, gera checksum e dispara alerta via Slack/e-mail quando a divergencia ultrapassa 0,05%. Os alertas abrem incidentes no ServiceNow com SLA de 12h.",
      q_en: "What alerting mechanism did you implement after go-live?",
      a_en: "A Python script compares source vs target byte-by-byte, generates checksums, and triggers Slack/email alerts for deviations over 0.05%. Alerts auto-create ServiceNow incidents with a 12-hour SLA." 
    },
    {
      q: "Como voce mediu o impacto evitado no NPS e na satisfacao do cliente?",
      a: "Projetei a queda de NPS com base nas 32 reclamacoes da migracao anterior e no valor dos clientes afetados. Apos o go-live, capturei NPS priority em 82 e zero reclamacoes sobre cadastro incorreto.",
      q_en: "How did you measure the avoided impact on NPS and customer satisfaction?",
      a_en: "I projected NPS drop using 32 complaints from the prior migration and the value of affected clients. After go-live we captured priority-customer NPS at 82 and zero complaints about incorrect data." 
    },
    {
      q: "Que licao voce compartilhou com o PMO global e como foi aplicada depois?",
      a: "Documentei um playbook de 14 passos com auditoria amostral, envolvimento de RM e mecanismo de alerta. O documento virou prerequisito em programas subsequentes no Mexico e Reino Unido.",
      q_en: "What lesson did you share with the global PMO and how was it applied later?",
      a_en: "I documented a 14-step playbook covering sample audits, RM involvement, and alert mechanisms. It became mandatory in follow-up migrations in Mexico and the UK." 
    },
    {
      q: "Como voce equilibrou velocidade e profundidade para entregar o laudo em 10 dias?",
      a: "Dividi os 10 dias em tres ondas: 3 dias de auditoria tecnica, 3 para validacao com RM/regulatorio, 2 para correcao com os squads e 2 para revalidacao. Usei dailies curtos e kanban para remover bloqueios em horas.",
      q_en: "How did you balance speed and depth to deliver the report in 10 days?",
      a_en: "I split the 10 days into three waves: 3 days technical audit, 3 days RM/regulatory validation, 2 days fixes with squads, 2 days revalidation. Short dailies and a kanban board kept blockers to hours." 
    },
    {
      q: "Quais sinais voce monitora quando um dashboard parece bom demais?",
      a: "Procuro ausencia de variancia, campos criticos sem distribuicao esperada e indicadores que nao mudam conforme a complexidade. Se tudo fica plano por semanas, levanto alerta e audito manualmente.",
      q_en: "What signals do you monitor when a dashboard looks too good?",
      a_en: "I look for lack of variance, critical fields without expected distribution, and indicators that do not shift with data complexity. If everything stays flat for weeks, I raise a flag and audit manually." 
    }
  ]
};

export default case_2;

