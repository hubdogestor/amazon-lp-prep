// ownership_case7.js
const case_7 = {
  "id": "sefaz-emergency-rollback-no-approval",
  "title": "Autorizei Rollback de Sistema Crítico às 18h Sexta Sem Consultar Gestor e Salvei 23k Empresas",
  "title_pt": "Autorizei Rollback de Sistema Crítico às 18h Sexta Sem Consultar Gestor e Salvei 23k Empresas",
  "title_en": "Authorized Critical System Rollback at 6pm Friday Without Manager Approval and Saved 23k Companies",
  "company": "SEFAZ/RS",
  "period": "09/2024",
  "keywords": "#decisão-sem-gestor | #crise | #rollback | #assumir-risco | #emergência",
  "isTopCase": true,
  "isGoodCase": false,
  "pt": {
    "s": "Sexta-feira, 27 de setembro de 2024, 18h05. Eu era Advisor de Infraestrutura e Confiabilidade na SEFAZ/RS, responsável por acompanhar criticamente a disponibilidade dos sistemas fiscais que sustentam a arrecadação estadual. Encerrava o dia quando o NOC disparou um alerta crítico: 'NFCE down. Zero notas emitidas desde 17h30.' Em segundos percebi a gravidade -- o sistema de nota fiscal do consumidor, usado por 23.400 empresas, havia parado completamente. Supermercados, postos e restaurantes não conseguiam vender. Diagnosticamos a causa rapidamente: patch de segurança incompatível com a versão de Java do core fiscal. A ação correta era clara -- rollback imediato --, mas a norma exigia autorização formal do Diretor de TI. Meu gestor estava em um evento, com o telefone desligado. Eu tinha duas opções: seguir o processo e permitir que milhares de empresas ficassem paradas até segunda-feira ou agir sem aprovação formal, assumindo o risco pessoal para proteger a continuidade do serviço.",
    "t": "Meu mandato formal cobria a orientação técnica e governança de infraestrutura, mas meu histórico em arquitetura distribuída e recuperação de sistemas críticos me tornava a pessoa mais preparada para decidir sob pressão. Cada hora sem emissão fiscal representava mais de R$ 340 mil em perdas coletivas e risco de exposição pública. Eu precisava equilibrar respeito à hierarquia com o dever de evitar colapso operacional. Percebi que não agir seria mais arriscado do que qualquer consequência pessoal.",
    "a": "Às 18h20, depois de tentar contato com o diretor por 15 minutos em três canais diferentes, decidi agir. Autorizei o rollback sob protocolo emergencial, mas com controles estritos para eliminar risco técnico. Para evitar corrupção de dados e garantir rastreabilidade, apliquei quatro salvaguardas: (1) convoquei call imediata com cinco testemunhas técnicas -- líder do NOC, DBA sênior, analista de segurança, arquiteto de sistemas e auditor interno -- para revisar linha a linha o plano de reversão; (2) às 18h25 enviei email formal para gestor, diretor e auditoria, explicando o racional técnico e assumindo total responsabilidade; (3) gravei a reunião e criei ata digital com assinaturas eletrônicas para evidenciar transparência; e (4) defini três gates objetivos: rollback interrompido se falhasse em 30 min, se houvesse perda de dados ou se não estabilizasse em 2 horas. A execução começou às 18h35 e o sistema foi estabilizado às 19h15.",
    "r": "O resultado foi imediato e mensurável. O rollback restaurou totalmente o ambiente em 1 h 10 min, com zero perda de dados, e as 23.400 empresas voltaram a operar. Evitamos R$ 8,2 milhões em vendas perdidas no fim de semana -- quatro vezes mais rápido do que incidentes similares em 2015. Na segunda-feira, o diretor me chamou e disse: 'Você salvou o fim de semana de 23 mil empresas. Eu teria feito o mesmo.' Ele institucionalizou minha decisão, criando o Procedimento de Decisão Emergencial que autoriza coordenadores e advisors a intervir em situações críticas quando não houver gestor disponível, desde que sigam documentação e controles técnicos. O protocolo foi usado com sucesso quatro vezes desde então, evitando mais de R$ 15 milhões em perdas. O episódio consolidou a cultura de responsabilidade técnica dentro da SEFAZ.",
    "l": "Aprendi que liderança não é violar hierarquia, é equilibrar urgência, transparência e controle de risco. Demonstrei que agir com método e lastro técnico é diferente de agir por impulso. Essa experiência reforçou meu padrão de decisão: agir no último limite possível, com documentação completa e consciência plena dos impactos. Meses depois, usei a mesma abordagem no Sicredi, quando o sistema PIX travou às 22h enquanto o CTO estava em voo: autorizei restart do cluster com as mesmas salvaguardas. Sistema voltou em 45 min e a diretoria reconheceu a maturidade da decisão."
  },
  "en": {
    "s": "Friday, September 27, 2024, 6:05 PM. I was the Advisor for Infrastructure and Reliability at SEFAZ/RS, responsible for overseeing availability of the state fiscal systems that sustain revenue collection. As the day was ending, a critical alert appeared on the NOC screen: 'NFCE down. No invoices since 5:30 PM.' Within seconds I understood the impact: the consumer invoice system, used by 23,400 companies, had stopped completely -- supermarkets, gas stations and restaurants could not sell. We quickly found the cause: a security patch incompatible with the Java version of the fiscal core. The solution was clear -- immediate rollback -- but procedure required formal authorization by the IT Director. My manager was at a corporate event, phone off. Two paths were possible: follow protocol and leave thousands of companies idle until Monday, or act without approval and accept personal risk to restore the system.",
    "t": "My formal scope focused on technical advisory, not operational commands, but my expertise in distributed architecture and incident response had prepared me to act. Each hour offline meant over R$ 340 K in collective losses and risk of public exposure. The real option was between personal comfort and public duty. Doing nothing would be the greater failure.",
    "a": "At 6:20 PM, after fifteen minutes of unsuccessful contact attempts through three channels, I decided to act under emergency protocol with strict controls. To avoid data corruption and ensure traceability, I implemented four risk controls: (1) convened emergency call with five technical witnesses -- NOC lead, senior DBA, security analyst, systems architect, and internal auditor -- to double-check rollback steps; (2) sent a formal email at 6:25 PM to manager, director, and audit team explaining rationale and assuming accountability; (3) recorded the session and issued digitally signed minutes; and (4) defined three rollback gates: stop if rollback failed within 30 minutes, if any data loss occurred, or if stability was not achieved within 2 hours. Execution began 6:35 PM and system restored by 7:15 PM.",
    "r": "Rollback was fully successful -- system restored in 1 hour 10 minutes with zero data loss, bringing 23,400 companies back online. We avoided R$ 8.2 M in lost sales over the weekend -- four times faster recovery than previous 2015 incidents. On Monday the Director told me, 'You saved the weekend for 23 thousand companies; I would have done the same.' He officialized the decision in the Emergency Decision Procedure, authorizing coordinators and advisors to act with proper documentation when leadership is unavailable. The protocol has been used four times since, avoiding over R$ 15 M in losses. The episode helped strengthen the department’s culture of technical accountability.",
    "l": "I learned that leadership means acting responsibly when timing and impact don’t allow bureaucracy. Courage is sustainable when paired with transparency and control. I proved that structured risk beats hesitation. Months later, at Sicredi, when the PIX system failed at 10 PM and the CTO was on a flight, I authorized cluster restart using the same framework; system recovered in 45 minutes, and executives commended the discipline behind the decision."
  },
  "fups": [
    {
      "q": "Qual foi seu maior erro ou falha nesse caso?",
      "a": "Esperei 15 minutos antes de preparar paralelamente a documentação de decisão. Aprendi que, em crise, registro e plano precisam evoluir juntos ao diagnóstico técnico. Detalhei o rollback completo em 1h10 com zero perda de dados e 23.400 empresas retomando operação.",
      "q_en": "What was your biggest mistake or failure?",
      "a_en": "Waited fifteen minutes before parallel documentation; learned planning and record must evolve instantly with technical diagnosis. I detailed the full rollback in 1h10 with zero data loss and 23,400 companies back online."
    },
    {
      "q": "O que você faria diferente hoje?",
      "a": "Criaria substituto formal para ausências gerenciais e automatizaria log de decisão emergencial diretamente no sistema de monitoramento. Mostrei que evitamos R$ 8,2 milhões em vendas perdidas e fomos quatro vezes mais rápidos que incidentes semelhantes de 2015.",
      "q_en": "What would you do differently today?",
      "a_en": "Would predefine substitute for absent leadership and automate decision logging within monitoring system. I showed the BRL 8.2M in losses avoided and that we were four times faster than similar 2015 incidents."
    },
    {
      "q": "Qual foi o obstáculo mais difícil que você enfrentou?",
      "a": "Superar a hesitação inicial da equipe em executar rollback sem aprovação formal. Conquistei confiança apresentando dados concretos de risco financeiro e técnica de reversão testada. Reforcei a criação do Procedimento de Decisão Emergencial, já usado quatro vezes para evitar mais de R$ 15 milhões.",
      "q_en": "What was the hardest obstacle you faced?",
      "a_en": "Overcoming team's hesitation about rollback without approval by showing financial risk and tested reversal plan. I highlighted institutionalizing the Emergency Decision Procedure, already used four times to avert over BRL 15M."
    },
    {
      "q": "Quais foram os principais riscos e como você os mitigou?",
      "a": "Risco de falha técnica e sanção administrativa; mitiguei convocando auditoria, definindo gates objetivos e registrando todos os passos com evidência digital. Detalhei o rollback completo em 1h10 com zero perda de dados e 23.400 empresas retomando operação.",
      "q_en": "What were the main risks and how did you mitigate them?",
      "a_en": "Technical failure and procedural sanction; mitigated via audit inclusion, objective gates, and full digital evidence. I detailed the full rollback in 1h10 with zero data loss and 23,400 companies back online."
    },
    {
      "q": "Que dados você usou e qual foi a racional de cálculo?",
      "a": "Usei logs de falha, número de empresas afetadas e ticket médio diário para estimar perda de R$ 8,2 M; calculei também tempo médio de parada histórica para comparar redução de impacto. Mostrei que evitamos R$ 8,2 milhões em vendas perdidas e fomos quatro vezes mais rápidos que incidentes semelhantes de 2015.",
      "q_en": "What data did you use and what was your rationale?",
      "a_en": "Used failure logs, affected companies, average daily ticket to model R$ 8.2 M loss; compared to historical downtime for benchmark. I showed the BRL 8.2M in losses avoided and that we were four times faster than similar 2015 incidents."
    },
    {
      "q": "Como você usou o aprendizado desse caso em outras frentes?",
      "a": "Transformei o protocolo em política institucional replicada em quatro órgãos e usei no Sicredi em incidente do PIX em 2021 com mesma eficiência. Reforcei a criação do Procedimento de Decisão Emergencial, já usado quatro vezes para evitar mais de R$ 15 milhões.",
      "q_en": "How did you use this learning elsewhere?",
      "a_en": "Turned protocol into institutional policy adopted by four entities and reused it at Sicredi with equal success. I highlighted institutionalizing the Emergency Decision Procedure, already used four times to avert over BRL 15M."
    },
    {
      "q": "Por que você não esperou conseguir falar com o diretor antes de agir?",
      "a": "Porque o impacto era imediato: 23.400 empresas estariam paradas todo o fim de semana (R$ 8,2 M em vendas perdidas). Cada hora agravava o prejuízo. Tentei contato por 15 minutos em três canais e só então decidi agir. Detalhei o rollback completo em 1h10 com zero perda de dados e 23.400 empresas retomando operação.",
      "q_en": "Why didn't you wait to reach the director before acting?",
      "a_en": "Impact was immediate -- 23,400 companies idle entire weekend (R$ 8.2 M loss). Each hour worsened damage; after 15 min unsuccessful contact, I acted. I detailed the full rollback in 1h10 with zero data loss and 23,400 companies back online."
    },
    {
      "q": "Quais foram os 4 controles de risco que você implementou para mitigar a decisão unilateral?",
      "a": "1) Call emergencial com cinco testemunhas técnicas; 2) email formal assumindo responsabilidade; 3) gravação e ata digital; 4) três gates de reversão: 30 min erro, perda de dados, ou 2 h sem estabilizar. Mostrei que evitamos R$ 8,2 milhões em vendas perdidas e fomos quatro vezes mais rápidos que incidentes semelhantes de 2015.",
      "q_en": "What were the 4 risk controls you implemented to mitigate the unilateral decision?",
      "a_en": "1) Emergency call with five technical witnesses; 2) formal email assuming responsibility; 3) recording and signed minutes; 4) three rollback gates: 30 min fail, data loss, or 2 h no stability. I showed the BRL 8.2M in losses avoided and that we were four times faster than similar 2015 incidents."
    },
    {
      "q": "Como o diretor reagiu quando soube da sua decisão no dia seguinte?",
      "a": "Reconheceu que a decisão foi correta e institucionalizou a prática em protocolo oficial de decisão emergencial. Reforcei a criação do Procedimento de Decisão Emergencial, já usado quatro vezes para evitar mais de R$ 15 milhões.",
      "q_en": "How did the director react when he learned of your decision the next day?",
      "a_en": "He recognized the decision was right and institutionalized it as official emergency decision protocol. I highlighted institutionalizing the Emergency Decision Procedure, already used four times to avert over BRL 15M."
    },
    {
      "q": "Qual foi o maior risco pessoal que você assumiu nessa decisão?",
      "a": "Risco de demissão por insubordinação e responsabilidade civil caso houvesse perda de dados. Decidir não agir seria mais devastador para o estado e a equipe. Detalhei o rollback completo em 1h10 com zero perda de dados e 23.400 empresas retomando operação.",
      "q_en": "What was the greatest personal risk you assumed in this decision?",
      "a_en": "Risk of dismissal for insubordination and civil liability if data lost; not acting would bring larger harm to both state and team. I detailed the full rollback in 1h10 with zero data loss and 23,400 companies back online."
    },
    {
      "q": "Como você garantiu que a decisão fosse técnica e não emocional?",
      "a": "Submeti o plano à validação técnica em tempo real com especialistas e documentei critérios mensuráveis para execução. Mostrei que evitamos R$ 8,2 milhões em vendas perdidas e fomos quatro vezes mais rápidos que incidentes semelhantes de 2015.",
      "q_en": "How did you ensure the decision was technical and not emotional?",
      "a_en": "Submitted plan for peer validation in real time and documented measurable execution criteria. I showed the BRL 8.2M in losses avoided and that we were four times faster than similar 2015 incidents."
    },
    {
      "q": "Que protocolo foi criado a partir dessa experiência?",
      "a": "O 'Procedimento de Decisão Emergencial' autorizou coordenadores a agir quando gestor indisponível, exigindo documentação, testemunhas e gates. Aplicado com sucesso quatro vezes. Reforcei a criação do Procedimento de Decisão Emergencial, já usado quatro vezes para evitar mais de R$ 15 milhões.",
      "q_en": "What protocol was created from this experience?",
      "a_en": "The 'Emergency Decision Procedure' empowered coordinators to act when manager unavailable, requiring documentation, witnesses and gates; used successfully four times. I highlighted institutionalizing the Emergency Decision Procedure, already used four times to avert over BRL 15M."
    },
    {
      "q": "Como você mediu o impacto real nas 23.400 empresas?",
      "a": "Calculei faturamento médio diário e multipliquei por 23.400 empresas em 2,3 dias de fim de semana: R$ 8,2 M de perdas evitadas, sem reclamações após a restauração. Detalhei o rollback completo em 1h10 com zero perda de dados e 23.400 empresas retomando operação.",
      "q_en": "How did you measure the real impact on the 23,400 companies?",
      "a_en": "Average daily sales × 23,400 × 2.3 days = R$ 8.2 M avoided; zero complaints after restoration. I detailed the full rollback in 1h10 with zero data loss and 23,400 companies back online."
    },
    {
      "q": "Que resistência você enfrentou da equipe técnica?",
      "a": "Medo de realizar rollback sem aprovação. Ganhei adesão mostrando dados de risco e apresentando os controles documentados. Mostrei que evitamos R$ 8,2 milhões em vendas perdidas e fomos quatro vezes mais rápidos que incidentes semelhantes de 2015.",
      "q_en": "What resistance did you face from the technical team?",
      "a_en": "Fear of rollback without approval; earned adherence by showing risk data and documented controls. I showed the BRL 8.2M in losses avoided and that we were four times faster than similar 2015 incidents."
    },
    {
      "q": "Como você aplicou esse aprendizado em outras situações?",
      "a": "No Sicredi, usei o mesmo método (PIX down às 22h): 10 min de tentativa de contato, documentação imediata, testemunhas e execução controlada. Sistema retomado em 45 min. Reforcei a criação do Procedimento de Decisão Emergencial, já usado quatro vezes para evitar mais de R$ 15 milhões.",
      "q_en": "How did you apply this learning in other situations?",
      "a_en": "At Sicredi (PIX down 10 PM): 10 min contact attempt, instant documentation, witnesses, controlled execution; system back in 45 min. I highlighted institutionalizing the Emergency Decision Procedure, already used four times to avert over BRL 15M."
    },
    {
      "q": "Qual foi o ROI real dessa decisão?",
      "a": "ROI imediato de 70% (R$ 8,2 M preservados vs R$ 4,8 M de risco). No longo prazo, protocolo evitou R$ 15 M em três anos e me rendeu promoção por confiabilidade técnica. Detalhei o rollback completo em 1h10 com zero perda de dados e 23.400 empresas retomando operação.",
      "q_en": "What was the real ROI of this decision?",
      "a_en": "Immediate ROI 70% (R$ 8.2 M protected vs R$ 4.8 M risk); long term protocol prevented R$ 15 M loss in 3 years and earned promotion for technical reliability. I detailed the full rollback in 1h10 with zero data loss and 23,400 companies back online."
    },
    {
      "q": "Quais foram os maiores riscos técnicos associados ao rollback e como os controles implementados ajudaram a mitigá-los?",
      "a": "O maior risco era corromper tabelas fiscais. Os gates temporais e a revisão coletiva do plano garantiram rollback seguro, completado sem perda de integridade. Mostrei que evitamos R$ 8,2 milhões em vendas perdidas e fomos quatro vezes mais rápidos que incidentes semelhantes de 2015.",
      "q_en": "What were the major technical risks associated with the rollback and how did the implemented controls help mitigate them?",
      "a_en": "Main risk was fiscal table corruption; time-gated execution and peer review secured rollback integrity with zero data loss. I showed the BRL 8.2M in losses avoided and that we were four times faster than similar 2015 incidents."
    },
    {
      "q": "Como você garantiu que a equipe técnica estivesse alinhada e confiante para executar o rollback sob pressão?",
      "a": "Expliquei os impactos reais e demonstrei cálculos de perdas; transformei a ansiedade em senso de propósito coletivo. Reforcei a criação do Procedimento de Decisão Emergencial, já usado quatro vezes para evitar mais de R$ 15 milhões.",
      "q_en": "How did you ensure the technical team was aligned and confident to execute the rollback under pressure?",
      "a_en": "Explained real impact and showed financial loss calculations, turning anxiety into collective sense of mission. I highlighted institutionalizing the Emergency Decision Procedure, already used four times to avert over BRL 15M."
    },
    {
      "q": "Qual foi seu papel na criação e adaptação do protocolo de Decisão de Emergência usado posteriormente?",
      "a": "Fui autor do documento-base junto à auditoria, defini critérios técnicos e liderei o treinamento dos novos coordenadores. Detalhei o rollback completo em 1h10 com zero perda de dados e 23.400 empresas retomando operação.",
      "q_en": "What was your role in creating and adapting the Emergency Decision protocol used afterwards?",
      "a_en": "Authored base documentation with audit, defined technical criteria, and led coordinator training for the new protocol. I detailed the full rollback in 1h10 with zero data loss and 23,400 companies back online."
    },
    {
      "q": "Se o rollback tivesse falhado, qual era o plano de contingência?",
      "a": "Backup completo da base havia sido realizado às 16h, e plano B previa standby com réplica em datacenter de contingência em caráter de degradação controlada. Mostrei que evitamos R$ 8,2 milhões em vendas perdidas e fomos quatro vezes mais rápidos que incidentes semelhantes de 2015.",
      "q_en": "If the rollback had failed, what was the contingency plan?",
      "a_en": "Full backup made at 4 PM; Plan B was fallback to secondary datacenter operating in degraded mode. I showed the BRL 8.2M in losses avoided and that we were four times faster than similar 2015 incidents."
    },
    {
      "q": "O que faria de forma diferente para melhorar o processo ou prevenir crises semelhantes?",
      "a": "Implantaria automação de rollback testado em sandbox fiscal e alertas preditivos para evitar patches de incompatibilidade. Reforcei a criação do Procedimento de Decisão Emergencial, já usado quatro vezes para evitar mais de R$ 15 milhões.",
      "q_en": "What would you do differently to improve the process or prevent similar crises?",
      "a_en": "Would implement automated rollback tested in fiscal sandbox and predictive alerts to avoid incompatible patches. I highlighted institutionalizing the Emergency Decision Procedure, already used four times to avert over BRL 15M."
    }
  ]
};

export default case_7;
