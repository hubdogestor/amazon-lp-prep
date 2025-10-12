const case_1 = {
  id: "sicredi-post-mortem-transparency",
  title: "Reconstruí confiança após bug Pix com ritual de transparências diárias",
  title_pt: "Reconstruí confiança após bug Pix com ritual de transparências diárias",
  title_en: "Rebuilt trust after Pix outage through daily transparency rituals",
  company: "Sicredi Woop",
  period: "02/2020–06/2020",
  isTopCase: true,
  isGoodCase: true,

  pt: {
    s: `Em fevereiro de 2023, como gerente de produtos no Sicredi Woop, liberei uma nova chave de rate limiting no core Pix antes de concluir o teste de carga trifásico. Em 12 horas, 62.400 transferências ficaram travadas, R$ 14,8 milhões retidos e o NPS despencou de 62 para 21. O Banco Central recebeu 312 reclamações formais e solicitou esclarecimentos sobre resiliência técnica. Um diretor me confrontou em reunião executiva: “Você quebrou nossa palavra.” A frase não atingiu apenas minha imagem profissional — ela expôs a perda de credibilidade institucional diante dos clientes e do regulador. Nosso histórico de confiabilidade Pix construído em três anos ficava sob ameaça, e a relação com o Banco Central passava a ser de suspeita em vez de cooperação.`,
    
    t: `Declarei‑me responsável único pela recuperação da confiança, tanto interna quanto externa. Estabeleci metas claras: zerar pendências em 72 horas, elevar o NPS acima de 55 em 30 dias e publicar diariamente uma carta de status com dados validados e decisões técnicas sob minha assinatura, visíveis ao diretor, clientes e ao Banco Central.`,
    
    a: `Implementei cinco ações principais.  
    **(1)** Criei um war room 24×7 com acesso aberto ao time e painel atualizado de hora em hora com backlog, valor médio (R$ 237) e fila restante — gerando 48 comunicações transparentes em três dias. Houve instabilidades nas primeiras 12 horas, que resolvi implementando cache local na coleta de dados para garantir disponibilidade contínua.  
    **(2)** Compareci ao Banco Central com a superintendência apresentando logs, carimbos de tempo e tabelas de latência por janela de 10 minutos. Demonstrei que nenhum cliente sofrera perda financeira e que as transações ficaram em fila controlada; isso os levou a cancelar a abertura do RDR.  
    **(3)** Enfrentei forte pressão do diretor comercial, que buscava minimizar publicamente o erro por temor de repercussão midiática. Expliquei o risco de ocultar informações, citei precedentes de multas em cases similares e propus uma comunicação controlada por dados. Após duas reuniões com o CFO e Jurídico, obti aprovação para enviar mensagem assinada em meu nome a todos os clientes afetados com detalhes do problema, prazo de ressarcimento (12 h) e canal dedicado.  
    **(4)** Incluí o diretor comercial no meu planning diário com poder de veto sobre releases. Esse ato quebrou a barreira política entre engenharia e negócio e permitiu a criação conjunta do indicador “horas de silêncio”, que reduzimos de 11 para 45 minutos.  
    **(5)** Elaborei 20 lições no post‑mortem e conduzi a migração do pipeline de testes manuais para um modo automatizado com gatilho de rollback acima de 280 ms. A automação introduziu alertas visuais e bloqueios automáticos no Jenkins. Treinei a equipe em execuções simuladas por duas semanas, e a adoção chegou a 100 %. O novo modelo evitou seis reversões em produção nos três meses seguintes e mudou a cultura da equipe: ninguém fazia deploy sem evidência de stress test concluído.`,
    
    r: `Em 36 horas, liquidei todas as transferências e reembolsei R$ 14,8 milhões. Tickets caíram de 5.940 para 182 e o NPS retornou a 58 em 28 dias. Mais importante, a confiança foi reconstruída com base em ritual e constância. O diretor comercial passou a incluir‑me em toda comunicação crítica e o conselho institucionalizou a carta diária como política de governança. Clientes relataram sensação de “estar dentro da sala de controle” ao ver as atualizações. Reguladores afirmaram em ofício que a transparência do processo era referência para outras instituições, reforçando a credibilidade de longo prazo.`,
    
    l: `Aprendi que earn trust significa agir antes da desconfiança aparecer. Fazer o erro visível de forma responsável reduz ruído e aumenta o respeito. O pipeline automatizado mostrou que simplificar processos também é ato de confiança — menos passos ocultos, mais previsibilidade. Hoje replico esse ritual em operações B2B e uso as “horas de silêncio” como indicador oficial de responsividade ao cliente e ao regulador.`
  },

  en: {
    s: `In February 2023, as Engineering Manager at Sicredi Woop, I released a new rate‑limit key in the Pix core before completing load testing. Within 12 hours 62,400 payments froze and BRL 14.8 M hung in limbo. NPS fell from 62 to 21, and 312 formal complaints hit the Central Bank. A director told me in front of executives: “You broke our word.” The comment signaled not only my personal loss of credibility but an institutional breach of trust that shook our standing with customers and regulators. Years of reliable Pix operations were suddenly questioned.`,
    
    t: `I declared myself sole owner of the recovery — responsible for restoring confidence both internally and externally. Targets: clear backlog within 72 hours, raise NPS above 55 in 30 days, and issue a daily data‑driven status letter under my signature shared with executives, clients, and the Central Bank.`,
    
    a: `I took five key actions.  
    **(1)** Built a 24/7 war room with hourly open updates on backlog, average value (BRL 237) and queue — 48 transparent reports in three days. Early system lags were fixed using local cache for real‑time availability.  
    **(2)** Went to the Central Bank with the superintendent, presenting logs and latency tables per 10‑minute windows. Proved no financial loss occurred and the queue was controlled; they called off the RDR process.  
    **(3)** The sales director pushed to downplay the failure to avoid media exposure. I explained the legal risk of omission, shared precedent cases, and advocated a data‑based communication plan. After two meetings with CFO and Legal, I secured approval to send a transparent email in my name to all affected clients stating root cause, 12‑hour refund SLA, and direct channel for assistance.  
    **(4)** Included him in daily planning with veto rights — ending political friction and co‑creating the “hours of silence” metric, cut from 11 h to 45 min in a week.  
    **(5)** Documented 20 lessons and led migration from manual to automated testing pipeline with rollback trigger over 280 ms. Added real‑time alerts and deployment locks. Trained the team with simulation for two weeks; adoption reached 100 %. The new pipeline prevented six production rollbacks in three months and shifted our mindset — no one deploys without completed stress proofs.`,
    
    r: `Within 36 hours we cleared all transactions and returned BRL 14.8 M. Tickets fell from 5,940 to 182 and NPS hit 58 within a month. More importantly, trust was rebuilt through ritual and consistency. The sales director began including me in every critical communication, and the board officialized the daily letter practice. Clients said they felt “inside the control room.” The Central Bank praised our approach as a model for transparency, solidifying confidence for future audits.`,
    
    l: `I learned that earning trust means acting before doubt appears. Owning mistakes publicly reduces noise and builds respect. The automated pipeline showed that technical discipline is an act of trust: fewer hidden steps, greater predictability. Today I replicate this cadence in B2B operations and treat “hours of silence” as an official responsiveness metric for customers and regulators.`
  },

  fups: [
    // --- Seis FUPs centrais obrigatórias ---
    { q: "Qual foi seu maior erro ou falha neste caso?", a: "Executei deploy sem validar o teste trifásico; priorizei tempo ao invés de confiança. Aprendi que visibilidade sem validação é ilusão.", q_en: "What was your biggest mistake or failure in this case?", a_en: "Deployed without finishing tri‑phase test; prioritized speed over trust. Learned that visibility without validation is illusion." },
    { q: "O que você faria diferente hoje?", a: "Criaria camada de aprovação cruzada com compliance e monitor de rollback automatizado antes do go‑live.", q_en: "What would you do differently today?", a_en: "Add cross‑approval with compliance and automated rollback monitor before go‑live." },
    { q: "Qual foi o obstáculo mais difícil de superar?", a: "Resistência política do diretor comercial; precisei negociar transparência controlada e transformar medo em colaboração.", q_en: "What was the hardest obstacle to overcome?", a_en: "Political resistance from sales director; I negotiated controlled transparency turning fear into collaboration." },
    { q: "Quais foram os principais riscos e como você os mitigou?", a: "Risco reputacional e técnico; criei comunicação contínua com clientes e uso de logs auditáveis para validar estabilidade.", q_en: "What were the main risks and how did you mitigate them?", a_en: "Reputational and technical risk; maintained continuous client communication and auditable logs to validate stability." },
    { q: "Que dados você usou e qual foi a racional de cálculo?", a: "Tempo médio de liberação, volume travado e latência por lote; priorizei clientes de maior valor e impacto regulatório.", q_en: "What data did you use and what was your calculation rationale?", a_en: "Average release time, frozen amounts, latency per batch; prioritized high‑value clients and regulatory exposure." },
    { q: "Como você usou o aprendizado deste caso em outros contextos?", a: "Criei playbook de transparência adotado por três áreas, elevando previsibilidade e cortando incidentes críticos em 70%.", q_en: "How did you apply this learning elsewhere?", a_en: "Built transparency playbook adopted by three areas, increasing predictability and cutting major incidents by 70%." },

    // --- FUPs originais + novas complementares ---
    { q: "Durante a implementação do war room, houve desafios técnicos ou operacionais? Como você os superou?", a: "Sim; instabilidade no primeiro painel. Adicionei cache local e camada de failover, garantindo disponibilidade contínua.", q_en: "During war room implementation, did you face technical challenges? How did you overcome them?", a_en: "Yes; dashboard instability fixed by local cache and failover layer ensuring 24/7 availability." },
    { q: "Como você garantiu a adesão da equipe e dos stakeholders ao novo pipeline de testes automatizados?", a: "Realizei 4 workshops de simulação, medi performance e associei incentivos a zero incidence de rollback.", q_en: "How did you ensure team and stakeholder adherence to the new automated testing pipeline?", a_en: "Held four simulation workshops, tracked performance, and tied incentives to zero‑rollback rate." },
    { q: "Quais dados específicos você utilizou para demonstrar ao Banco Central que o RDR não era necessário?", a: "Logs validados por amostragem, curva de latência e ausência de perdas financeiras em 100% das amostras.", q_en: "Which specific data did you show to prove RDR was unnecessary?", a_en: "Validated log samples, latency curve, and zero‑loss evidence across 100% of tested transactions." },
    { q: "Quais métricas você utilizou para medir o sucesso do ritual de carta diária, além do NPS?", a: "Redução nas horas de silêncio, aumento de respostas espontâneas positivas e queda de tickets em 97%.", q_en: "Which metrics did you use to measure the success of daily letters beyond NPS?", a_en: "Reduction in hours of silence, growth of positive client replies, and 97% drop in tickets." },
    { q: "Com base nas 20 lições aprendidas, qual considera mais relevante e como reaplicou?", a: "‘Erro oculto se multiplica.’ Instituí regra de exposição imediata em todos os incidentes críticos da empresa.", q_en: "From the 20 post‑mortem lessons, which was most relevant and how was it reused?", a_en: "‘Hidden error multiplies.’ Instituted immediate exposure rule for all critical incidents company‑wide." }
  ]
};

export default case_1;