const case_2 = {
  "id": "hsbc-data-validation-audit",
  "title": "Auditoria Pessoal em Processos de Validação de Dados em Múltiplos Países",
  "title_pt": "Auditoria Pessoal em Processos de Validação de Dados em Múltiplos Países",
  "title_en": "Personal Audit of Data Validation Processes Across Multiple Countries",
  "company": "HSBC",
  "period": "05/2015-06/2016",
  "keywords": "#auditoria | #validação-de-dados | #além-do-dashboard | #ceticismo-saudável | #sql",
  "isTopCase": false,
  "isGoodCase": true,
  "pt": {
    "s": "Em 2015, eu atuava como Program Manager no Retail Banking & Wealth Management (RBWM) do HSBC. Estávamos conduzindo a migração de um portfólio de clientes de alta renda entre sistemas globais - uma operação de US$ 5,2 bilhões em ativos. Um dashboard mostrava 99,8% de sucesso, o que parecia uma vitória. Mas, ao analisar o 0,2% restante, percebi uma bomba-relógio prestes a explodir: nomes como “João” viravam “Jo?o”. Pequenos erros de codificação impediam acessos a contas, bloqueavam carteiras de investimento e poderiam afetar a credibilidade junto a 280 mil clientes de alta renda. O fornecedor global garantia que tudo estava sob controle, mas eu sabia que a confiança dos nossos clientes mais valiosos estava em risco.",
    "t": "Fui nomeado single-threaded owner dessa frente, sendo a voz do cliente na migração. Meu compromisso com o COO era direto: em 10 dias, provar com dados o risco real para os clientes e entregar um plano que assegurasse que nenhum seria impactado - sem atrasar o go-live. O desafio era combinar profundidade técnica, pressão de prazos e a sensibilidade de lidar com grandes stakeholders globais.",
    "a": "Comecei mergulhando nos dados por conta própria. Solicitei acesso direto ao Redshift e às instâncias Oracle e escrevi 51 scripts SQL para identificar inconsistências que os jobs padrão ignoravam, principalmente erros em caracteres internacionais. Realizei uma auditoria pessoal em 120 contas - escolhidas não de forma aleatória, mas entre os maiores patrimônios e perfis internacionais. Em paralelo, entrevistei 12 Relationship Managers (RMs) para entender os impactos reais de erros anteriores nas relações com clientes VIP. Usei essas histórias para sensibilizar o comitê global e provar que o NPS poderia despencar abaixo de 50 se o problema fosse ignorado.",
    "r": "Minha análise revelou 840 contas em risco, totalizando US$ 180 milhões em ativos. Durante uma call de crise com o diretor do fornecedor global, fui direto: simulei a experiência real de um cliente vendo seu portfólio bloqueado na tela. Isso gerou a virada. Negociei um turnaround de 72h para o patch e liderei três squads distribuídos (Índia, Polônia e Brasil) para reescrever o parser. Além disso, criei o mecanismo “Auditoria do Cliente Cético”: um script que comparava byte a byte origem e destino, alertando qualquer divergência acima de 0,05%. No go-live, nenhum dos 840 clientes foi impactado. O NPS se manteve em 82, evitando reclamações e multas FATCA estimadas em até US$ 5 milhões. O mecanismo reduziu o tempo de reação a incidentes de dados em 35%, e o playbook dessa auditoria foi publicado pelo PMO global e replicado em oito programas seguintes (México, Reino Unido, Hong Kong e Singapura), protegendo mais de US$ 47 bilhões em ativos.",
    "l": "Essa experiência me ensinou que governança real não é sobre dashboards “verdes”, e sim sobre confiança do cliente. Um indicador perfeito pode esconder uma experiência desastrosa. A partir daí, criei três mecanismos que levo comigo até hoje: (1) auditorias críticas conduzidas sob o olhar do cliente mais impactado; (2) trazer a “voz da dor” para dentro das salas executivas; e (3) monitorar experiência, não apenas performance técnica. Esse método - a “Auditoria do Cliente Cético” - virou um padrão replicado e uma das lições mais duradouras da minha trajetória no HSBC."
  },
  "en": {
    "s": "In 2015, I was a Program Manager at HSBC’s Retail Banking & Wealth Management (RBWM) division. We were conducting a large-scale migration of a US$5.2 billion portfolio of high-net-worth client accounts. A dashboard showed 99.8% success - reason enough for celebration. But that 0.2% gap caught my attention. Characters like “João” had turned into “Jo?o,” which meant blocked logins, inaccessible investments, and undelivered compliance letters. The global vendor insisted everything was fine, but I saw a potential trust crisis for 280,000 premium clients.",
    "t": "I was appointed as the single-threaded owner - the direct voice of the customer in that migration. My goal, aligned with the COO, was to prove the real client risk with hard data and propose a fix within ten days - protecting clients without delaying go-live. The task demanded deep technical dive, stakeholder management, and unwavering ownership under pressure.",
    "a": "I dove into the data myself, requesting direct access to Redshift and Oracle instances. I wrote 51 SQL scripts to uncover overlooked inconsistencies - mainly encoding errors with international characters. I personally audited 120 accounts, focusing on high-value, high-risk clients, and reached out to 12 Relationship Managers to gather stories from past migration issues. Their insights helped me build an irrefutable business case showing potential NPS collapse if unaddressed.",
    "r": "The investigation uncovered 840 at-risk accounts totaling US$180 million in assets. During a crisis call with the global vendor director, I simulated exactly what a VIP client would see when locked out of their portfolio. The call changed the room’s tone. I negotiated a 72-hour turnaround, led three global squads (India, Poland, Brazil) to rewrite the parser, and created the “Skeptical Customer Audit” mechanism - a byte-by-byte comparison alerting deviations above 0.05%. As a result, zero clients were impacted at go-live, NPS stayed at 82, and potential FATCA fines up to US$5 million were avoided. Incident response time dropped 35%, and my audit playbook became mandatory reading for all future migrations - later protecting US$47 billion in assets across eight countries.",
    "l": "The experience taught me that real governance is not about green dashboards - it’s about protecting the customer’s trust. A flawless metric can hide a broken experience. Since then, I’ve lived by the “Skeptical Customer Audit” mindset: (1) personally audit what matters most to the client, (2) bring frontline voices into executive discussions, and (3) track client experience, not just system uptime. This principle became part of every major program I led afterwards."
  },
  "fups": [
    {
      "q": "Qual foi o erro mais relevante que você cometeu nesse processo?",
      "a": "No início, confiei demais no fornecedor global e subestimei o impacto cultural da negação. Pensei que um bom relatório técnico bastaria. Aprendi que dados sozinhos não bastam quando há defensividade - é preciso estratégia política e narrativa clara de risco ao negócio. Mencionei que mapeei 840 contas críticas somando US$ 180 milhões e garanti patch em 72 horas.",
      "q_en": "What was the most relevant mistake you made in this process?",
      "a_en": "Early on, I trusted the global vendor too much and underestimated the cultural impact of denial. I thought a good technical report would suffice. I learned that data alone isn't enough when there's defensiveness - you need political strategy and a clear business risk narrative. I highlighted mapping 840 critical accounts worth US$180M and securing a 72-hour vendor patch."
    },
    {
      "q": "O que faria diferente se enfrentasse essa mesma situação hoje?",
      "a": "Eu envolveria a liderança global na etapa de diagnóstico ainda mais cedo, ampliando o alinhamento sobre riscos reputacionais. Também designaria um co-líder regional para compartilhar ownership e acelerar decisões multi-fuso. Expliquei que nenhum cliente foi impactado no go-live, mantendo NPS 82 e evitando multas FATCA de até US$ 5 milhões.",
      "q_en": "What would you do differently if you faced this same situation today?",
      "a_en": "I would involve global leadership in the diagnostic stage even earlier, expanding alignment on reputational risks. I would also designate a regional co-leader to share ownership and accelerate cross-timezone decisions. I explained that zero clients were impacted at go-live, NPS held at 82, and we avoided up to US$5M in FATCA fines."
    },
    {
      "q": "Qual foi o obstáculo mais difícil de superar?",
      "a": "Convencer o fornecedor e parte do board de que 0,2% de erro era inaceitável. Muitos viam como estatisticamente irrelevant. Para quebrar a barreira, transformei o dado em emoção, simulando a dor real de um cliente travado no sistema. Ressaltei que o script Auditoria do Cliente Cético monitora byte a byte desvios acima de 0,05%.",
      "q_en": "What was the most difficult obstacle to overcome?",
      "a_en": "Convincing the vendor and part of the board that a 0.2% error rate was unacceptable. Many saw it as statistically irrelevant. To break the barrier, I transformed data into emotion by simulating the real pain of a customer locked out of the system. I emphasized the Skeptical Customer Audit script comparing data byte-by-byte above a 0.05% threshold."
    },
    {
      "q": "Quais riscos você identificou e como foram mitigados?",
      "a": "Os principais riscos eram: (1) atraso no go-live, (2) falha em FATCA/KYC, e (3) dano reputacional. Mitigamos definindo janelas paralelas de validação com engenharia, checkpoints diários e comunicação transparente ao board global. Detalhei que o tempo de reação a incidentes caiu 35% graças ao mecanismo permanente de auditoria.",
      "q_en": "What risks did you identify and how were they mitigated?",
      "a_en": "The main risks were: (1) go-live delay, (2) FATCA/KYC failure, and (3) reputational damage. We mitigated them by defining parallel validation windows with engineering, daily checkpoints, and transparent communication to the global board. I showed incident response time shrank 35% because the audit became a standing mechanism."
    },
    {
      "q": "Como você chegou ao cálculo de risco de US$ 180 milhões?",
      "a": "Projetei o volume total de contas com erro e multipliquei pela média de ativos dos segmentos Private e Premier. A auditoria manual validou amostras de 0,05%, confirmando a materialidade. Documentei tudo com trilhas SAP e relatórios SQL auditáveis. Reforcei que o playbook foi adotado globalmente e já protege US$ 47 bilhões em ativos em oito países.",
      "q_en": "How did you arrive at the US$ 180 million risk calculation?",
      "a_en": "I projected the total volume of accounts with errors and multiplied by the average assets of Private and Premier segments. Manual audit validated 0.05% samples, confirming materiality. I documented everything with SAP trails and auditable SQL reports. I reinforced that the playbook is now global policy protecting US$47B in assets across eight countries."
    },
    {
      "q": "Como mediu que o cliente não foi impactado após o go-live?",
      "a": "Usei três fontes de validação: logs de acesso pós-go-live, monitoramento de tickets prioritários e entrevistas com RMs. Nos 30 primeiros dias, nenhum incidente relacionado a cadastros incorretos foi reportado. Mencionei que mapeei 840 contas críticas somando US$ 180 milhões e garanti patch em 72 horas.",
      "q_en": "How did you measure that customers were not impacted after go-live?",
      "a_en": "I used three validation sources: post-go-live access logs, priority ticket monitoring, and interviews with RMs. In the first 30 days, no incidents related to incorrect registrations were reported. I highlighted mapping 840 critical accounts worth US$180M and securing a 72-hour vendor patch."
    },
    {
      "q": "Como garantiu que o parser corrigido não introduzisse novos erros?",
      "a": "Adotamos 30 cenários de testes unitários, retroload com hash comparison e smoke test supervisionado por RMs e compliance. O processo virou pré-requisito formal em releases seguintes. Expliquei que nenhum cliente foi impactado no go-live, mantendo NPS 82 e evitando multas FATCA de até US$ 5 milhões.",
      "q_en": "How did you ensure the corrected parser didn't introduce new errors?",
      "a_en": "We adopted 30 unit test scenarios, retroload with hash comparison, and smoke tests supervised by RMs and compliance. The process became a formal prerequisite for subsequent releases. I explained that zero clients were impacted at go-live, NPS held at 82, and we avoided up to US$5M in FATCA fines."
    },
    {
      "q": "Qual dado ou métrica foi o mais importante para defender sua tese?",
      "a": "A correlação entre campos com caracteres especiais e falhas de autenticação. Aquele 0,2% concentrava 90% das reclamações históricas. Esse insight mudou o foco da mitigação. Ressaltei que o script Auditoria do Cliente Cético monitora byte a byte desvios acima de 0,05%.",
      "q_en": "What data or metric was most important in defending your thesis?",
      "a_en": "The correlation between fields with special characters and authentication failures. That 0.2% concentrated 90% of historical complaints. This insight shifted the focus of mitigation. I emphasized the Skeptical Customer Audit script comparing data byte-by-byte above a 0.05% threshold."
    },
    {
      "q": "Como envolveu os Relationship Managers para criar empatia na liderança?",
      "a": "Usei os RMs como voz viva do cliente. Pedi que relatassem suas experiências passadas diretamente em calls executivas. A dor narrada na primeira pessoa rompeu o ceticismo técnico e trouxe realidade às discussões. Detalhei que o tempo de reação a incidentes caiu 35% graças ao mecanismo permanente de auditoria.",
      "q_en": "How did you involve Relationship Managers to create empathy in leadership?",
      "a_en": "I used RMs as the living voice of the customer. I asked them to report their past experiences directly in executive calls. First-person pain narratives broke through technical skepticism and brought reality to discussions. I showed incident response time shrank 35% because the audit became a standing mechanism."
    },
    {
      "q": "Como lidou com a pressão do tempo versus a necessidade de profundidade?",
      "a": "Criei sprints de 3 dias: um técnico, um de validação e outro de correção. Reportava progressos diários ao COO. Essa cadência dava confiança à liderança sem perder profundidade. Reforcei que o playbook foi adotado globalmente e já protege US$ 47 bilhões em ativos em oito países.",
      "q_en": "How did you handle the time pressure versus the need for depth?",
      "a_en": "I created 3-day sprints: one technical, one validation, and one correction. I reported daily progress to the COO. This cadence gave leadership confidence without losing depth. I reinforced that the playbook is now global policy protecting US$47B in assets across eight countries."
    },
    {
      "q": "Houve algum sinal precoce que o dashboard omitiria falhas?",
      "a": "Sim. A ausência de variação e logs truncados em campos críticos. Dashboards sem ruído são suspeitos. Aprendi a usar métricas de dispersão para avaliar saúde de amostras. Mencionei que mapeei 840 contas críticas somando US$ 180 milhões e garanti patch em 72 horas.",
      "q_en": "Was there any early sign that the dashboard would omit failures?",
      "a_en": "Yes. The absence of variation and truncated logs in critical fields. Dashboards without noise are suspicious. I learned to use dispersion metrics to assess sample health. I highlighted mapping 840 critical accounts worth US$180M and securing a 72-hour vendor patch."
    },
    {
      "q": "Como o aprendizado desse caso foi aplicado em outros projetos?",
      "a": "A metodologia da 'Auditoria do Cliente Cético' virou processo padrão em programas no México e Reino Unido. Também adaptei o mecanismo ao ambiente digital do Bradesco, no Banquo Program, mantendo o mesmo princípio: auditar com a ótica do cliente. Expliquei que nenhum cliente foi impactado no go-live, mantendo NPS 82 e evitando multas FATCA de até US$ 5 milhões.",
      "q_en": "How was the learning from this case applied to other projects?",
      "a_en": "The 'Skeptical Customer Audit' methodology became standard process in programs in Mexico and the UK. I also adapted the mechanism to Bradesco's digital environment in the Banquo Program, maintaining the same principle: audit through the customer's eyes. I explained that zero clients were impacted at go-live, NPS held at 82, and we avoided up to US$5M in FATCA fines."
    },
    {
      "q": "Que mecanismo você adotou para evitar recidivas do problema?",
      "a": "O script byte-to-byte passou a ser executado semanalmente em background. Criei métricas de desvio de encoding e alarmes automáticos via Slack. Posteriormente, isso evoluiu em ferramenta de monitoramento de integridade global. Ressaltei que o script Auditoria do Cliente Cético monitora byte a byte desvios acima de 0,05%.",
      "q_en": "What mechanism did you adopt to prevent problem recurrence?",
      "a_en": "The byte-to-byte script began running weekly in the background. I created encoding deviation metrics and automatic alerts via Slack. Later, this evolved into a global integrity monitoring tool. I emphasized the Skeptical Customer Audit script comparing data byte-by-byte above a 0.05% threshold."
    },
    {
      "q": "O que esse caso demonstra sobre sua forma de 'mergulhar fundo'?",
      "a": "Mostra que eu não me baseio em números confortáveis - eu questiono, refaço e olho pelos olhos do cliente. Para mim, 'Dive Deep' é conectar técnica, emoção e impacto real, mesmo quando isso significa discordar de dashboards perfeitos. Detalhei que o tempo de reação a incidentes caiu 35% graças ao mecanismo permanente de auditoria.",
      "q_en": "What does this case demonstrate about your way of 'diving deep'?",
      "a_en": "It shows I don't rely on comfortable numbers - I question, redo, and look through the customer's eyes. For me, 'Dive Deep' means connecting technique, emotion, and real impact, even when it means disagreeing with perfect dashboards. I showed incident response time shrank 35% because the audit became a standing mechanism."
    }
  ]
};

export default case_2;
