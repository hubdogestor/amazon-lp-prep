// Case 2 - dive_deep
const case_2 = {
  id: "hsbc-data-validation-audit",
  title: "Auditoria Pessoal em Processos de Validacao de Dados em Multiplos Paises",
  title_pt: "Auditoria Pessoal em Processos de Validacao de Dados em Multiplos Paises",
  title_en: "Personal Audit of Data Validation Processes Across Multiple Countries",
  company: "HSBC",
  period: "05/2015-06/2016",
  isTopCase: false,
  pt: {
    s: `Na migracao do portfolio de US$ 5,2 bilhoes do HSBC para o Bradesco, eu era o responsavel direto pela governanca do programa. A migracao envolvia 280 mil contas de clientes high-net-worth (67% com ativos acima de US$ 1M) em 12 paises. Os dashboards mostravam tudo "verde", com 99,8% de correspondencia, e o fornecedor global insistia que nao precisavamos auditar mais nada. Eu via risco reputacional gigantesco: bastava um erro em nomes ou enderecos para cartas de compliance nao chegarem e clientes-chave perderem acesso aos investimentos.`,
    t: `Fui nomeado single-threaded owner para provar se a migracao estava, de fato, segura. Meu compromisso com o COO era entregar, em 10 dias, um laudo independente com amostras auditadas, avaliacao de impacto ao cliente e plano de mitigacao se houvesse falhas. Eu precisava mergulhar nos dados pessoalmente, confrontar o fornecedor e proteger o go-live sem atrasar o cronograma.`,
    a: `Comecei pedindo acesso direto ao repositorio Redshift e as instancias Oracle origem/destino. Escrevi 51 scripts SQL cobrindo cenarios que os jobs padrao ignoravam (caracteres especiais, multi-cotitulares com nacionalidades diferentes, contas FATCA com dependentes). Auditei manualmente 120 contas "criticas": selecionei as de maior valor, com historico internacional e campos sensiveis. Para trazer a voz do cliente, liguei para 12 Relationship Managers e coletei exemplos concretos de reclamacoes anteriores - isso me deu municao para provar que o NPS cairia abaixo de 50 se repetissemos o erro. Minha investigacao apontou 0,3% das contas (840 registros, US$ 180M em ativos) com caracteres truncados ("Joao" virando "Jo?o"). Em call de crise, mostrei consultas lado a lado, simulei a carta de FATCA devolvida e exigi correcao em 72 horas. Liderei tres squads (India, Polonia, Brasil) para reescrever o parser, adicionar testes unitarios e refazer a carga incremental. Tambem instalei um mecanismo: script de comparacao byte a byte mais dashboard diario com alertas automaticos quando a divergencia passava de 0,05%.`,
    r: `Antes do go-live, o parser corrigido eliminou os 840 erros, preservando US$ 180M em ativos sem incidentes. Evitamos multas FATCA estimadas em US$ 2-5M e 320 cartas de compliance que seriam devolvidas. As auditorias do BACEN e da Receita Federal foram concluidas sem ressalvas e o NPS dos clientes priority se manteve em 82. O mecanismo de alerta passou a monitorar 100% das cargas seguintes e reduziu em 35% o tempo de resposta a incidentes. O head global do PMO transformou minha metodologia em licao aprendida obrigatoria para futuras migracoes.`,
    l: `Aprendi que "verde" demais e sinal de alerta: lideres precisam auditar dados como se fossem clientes. Hoje aplico tres habitos quando vejo metricas perfeitas: 1) audito amostras criticas com meus proprios scripts, 2) envolvo quem sente a dor (clientes e RMs) para medir impacto real e 3) instalo monitoramento continuo antes do go-live. Em operacoes de pagamentos, 0,1% de erro representa milhares de transacoes e reputacao em jogo - essa disciplina me impede de aceitar storytelling sem evidencia.`
  },
  en: {
    s: `During the US$5.2B HSBC-to-Bradesco migration I owned program governance end to end. We were moving 280K high-net-worth accounts (67% with assets above US$1M) across 12 countries. Dashboards looked perfectly green with 99.8% matching, and the global vendor insisted no further audits were required. I saw a massive customer risk: a single corrupted name or address could block compliance letters and freeze key clients' portfolios.`,
    t: `I was appointed the single-threaded owner to verify whether the migration was genuinely safe. I committed to the COO to deliver, within 10 days, an independent report with audited samples, quantified customer impact, and a mitigation plan if issues surfaced. I had to dive into the data myself, challenge the vendor, and protect the go-live without delaying the timeline.`,
    a: `I requested direct access to Redshift and the Oracle source/target instances. I wrote 51 custom SQL scripts covering scenarios the standard jobs ignored (special characters, multi-co-holders with different nationalities, FATCA accounts with dependents). I manually audited 120 "critical" accounts: the highest-value portfolios, international histories, and sensitive fields. To bring the customer voice I called 12 Relationship Managers and gathered complaints from prior migrations as evidence that NPS would crash below 50. My investigation uncovered 0.3% of accounts (840 records, US$180M in assets) with truncated characters ("Joao" becoming "Jo?o"). On an emergency call with the vendor director I screenshared the queries, simulated the FATCA letter that would bounce, and demanded a 72-hour fix. I then led three squads (India, Poland, Brazil) to rewrite the parser, add unit tests, and rerun the incremental load. I also installed a mechanism: a byte-to-byte comparison script plus a daily dashboard that triggers alerts for deviations above 0.05%.`,
    r: `Before go-live the corrected parser eliminated all 840 defects, preserving US$180M in assets without incident. That avoided FATCA penalties of US$2-5M and prevented 320 compliance letters from bouncing. BACEN and IRS audits closed with zero findings, and priority-customer NPS stayed at 82 instead of collapsing as in previous migrations. The alerting mechanism now monitors 100% of subsequent loads and cut response time to data incidents by 35%. The global PMO head published my playbook as mandatory reading for every migration program.`,
    l: `I learned that "too green" is a red flag: leaders must audit data as if they were the customer. Today I always 1) audit critical samples with my own scripts, 2) involve people who feel the pain (clients and RMs) to quantify impact, and 3) set up continuous monitoring before go-live. In payments, a 0.1% error represents thousands of transactions and brand damage-this discipline keeps me from accepting storytelling without proof.`
  },
  fups: [
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
    },
    {
      q: "Como esse caso influencia sua atuacao em pagamentos hoje?",
      a: "Nunca aceito aprovacao automatica sem auditar amostras. Reaplico o byte check e envolvo atendimento para validar impacto no cliente antes de liberar qualquer mudanca critica.",
      q_en: "How does this case influence your work in payments today?",
      a_en: "I never accept auto-approval without sample audits. I reuse the byte check and involve support to validate customer impact before releasing any critical change." 
    }
  ]
};

export default case_2;



