// Case 7 - ownership
const case_7 = {
  id: "sefaz-emergency-rollback-no-approval",
  title: "Autorizei Rollback de Sistema Crítico às 18h Sexta Sem Consultar Gestor e Salvei 23k Empresas",
  title_pt: "Autorizei Rollback de Sistema Crítico às 18h Sexta Sem Consultar Gestor e Salvei 23k Empresas",
  title_en: "Authorized Critical System Rollback at 6pm Friday Without Manager Approval and Saved 23k Companies",
  company: "SEFAZ/RS",
  period: "09/2016",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: `18h05. Sexta-feira 23 de setembro de 2016. Eu estava desligando o notebook quando o alerta crítico explodiu no NOC: "NFCE down. Zero notas emitidas desde 17h30." Era meu segundo ano como Coordenador de Infraestrutura da SEFAZ/RS quando o sistema fiscal de nota eletrônica de consumidor final parou completamente. 23.400 empresas gaúchas — supermercados, postos de gasolina, restaurantes — travadas sem conseguir vender. A causa era óbvia: patch de segurança incompatível com Java. A solução também: rollback imediato. Mas havia um problema brutal: rollback de sistema fiscal exigia aprovação formal do Diretor de TI. Meu gestor já havia saído. Evento corporativo. Celular desligado.`,
    t: `Meu escopo formal como Coordenador cobria disponibilidade dos sistemas fiscais, mas eu não tinha autoridade para autorizar rollbacks sem aprovação do diretor. Diante dessa crise que paralisava 23.400 empresas no momento mais crítico da semana, eu precisava decidir: seguir o processo formal (seguro para mim) ou assumir risco pessoal para proteger o negócio. Sabia que esperar aprovação formal significaria empresas sem operar durante fim de semana inteiro.`,
    a: `Eu tinha duas hipóteses: (1) Esperar autorização formal — horas ou até segunda-feira — deixando 23 mil empresas sem faturar, ou (2) Autorizar rollback imediatamente sob minha responsabilidade pessoal. Escolhi a segunda, mas com controles rigorosos. Às 18h20 tomei a decisão: autorizei o rollback imediatamente, mas implementei quatro controles de risco. Primeiro, convoquei call emergencial com cinco pessoas-chave: líder do NOC, DBA sênior, analista de segurança, arquiteto de sistemas e auditor interno (para ter testemunhas da decisão e do racional técnico). Segundo, documentei tudo em email formal enviado às 18h25 para meu gestor, diretor de TI e auditoria assumindo total responsabilidade. Terceiro, gravei a call de emergência e criei ata com assinaturas digitais de todos os participantes. Quarto, estabeleci três gates de reversão: se rollback falhar em 30min, se houver perda de dados, ou se sistema não estabilizar em 2h, eu interromperia e esperaria o diretor. A equipe executou o rollback às 18h35. Às 19h15 o sistema estava restaurado e estável.`,
    r: `Transformei uma decisão de risco pessoal em protocolo institucional que protegeu milhares de empresas. O rollback foi 100% bem-sucedido: restauramos o sistema em 1h10min, zero perda de dados, 23.400 empresas voltaram a operar normalmente. Evitamos impacto de R$ 8,2M em vendas perdidas durante fim de semana. Na segunda-feira o diretor me chamou e disse: "Sua decisão salvou o fim de semana de 23 mil empresas. Você assumiu responsabilidade quando eu não estava disponível." Ele transformou minha decisão em protocolo oficial: criamos "Procedimento de Decisão Emergencial" que dava autoridade a coordenadores para autorizar rollbacks em situações críticas. Esse protocolo foi usado 4 vezes nos anos seguintes. Três meses depois fui promovido a Gerente de Infraestrutura.`,
    l: `A chave não é ignorar hierarquia, é balancear três elementos: urgência do impacto, controles de risco e transparência total. Tentei contatar o gestor por 15 minutos antes de decidir sozinho — isso demonstrou que decisão unilateral foi último recurso, não primeira opção. Usei esse modelo depois no Sicredi quando sistema PIX teve falha crítica às 22h e CTO estava em voo internacional: autorizei restart de cluster com mesma abordagem. Sistema voltou em 45min, CTO me agradeceu no dia seguinte.`
  },
  en: {
    s: `6:05 PM. Friday, September 23, 2016. I was shutting down my laptop when critical alert exploded in NOC: "NFCE down. Zero invoices issued since 5:30 PM." It was my second year as Infrastructure Coordinator at SEFAZ/RS when the consumer electronic invoice tax system stopped completely. 23,400 companies in Rio Grande do Sul — supermarkets, gas stations, restaurants — stuck unable to sell. The cause was obvious: security patch incompatible with Java. The solution too: immediate rollback. But there was a brutal problem: tax system rollback required formal approval from IT Director. My manager had already left. Corporate event. Phone off.`,
    t: `My formal scope as Coordinator covered tax systems availability, but I didn't have authority to authorize rollbacks without director approval. Faced with that crisis paralyzing 23,400 companies at the week's most critical moment, I needed to decide: follow formal process (safe for me) or assume personal risk to protect business. I knew waiting for formal approval would mean companies unable to operate during entire weekend.`,
    a: `I had two hypotheses: (1) Wait for formal authorization — hours or until Monday — leaving 23 thousand companies unable to bill, or (2) Authorize rollback immediately under my personal responsibility. I chose the second, but with rigorous controls. At 6:20 PM I made the decision: authorized rollback immediately, but implemented four risk controls. First, I called emergency meeting with five key people: NOC leader, senior DBA, security analyst, systems architect, and internal auditor (to have witnesses of decision and technical rationale). Second, I documented everything in formal email sent at 6:25 PM to my manager, IT director, and audit assuming full responsibility. Third, I recorded emergency call and created minutes with digital signatures from all participants. Fourth, I established three rollback gates: if rollback fails in 30min, if there's data loss, or if system doesn't stabilize in 2h, I would stop and wait for director. Team executed rollback at 6:35 PM. At 7:15 PM system was restored and stable.`,
    r: `I transformed a personal risk decision into institutional protocol that protected thousands of companies. Rollback was 100% successful: we restored system in 1h10min, zero data loss, 23,400 companies returned to normal operation. We avoided R$8.2M impact in lost sales during weekend. On Monday director called me and said: "Your decision saved the weekend for 23 thousand companies. You took responsibility when I wasn't available." He transformed my decision into official protocol: we created "Emergency Decision Procedure" that gave coordinators authority to authorize rollbacks in critical situations. This protocol was used 4 times in following years. Three months later I was promoted to Infrastructure Manager.`,
    l: `The key is not ignoring hierarchy, it's balancing three elements: impact urgency, risk controls, and total transparency. I tried to contact manager for 15 minutes before deciding alone — this demonstrated unilateral decision was last resort, not first option. I used this model later at Sicredi when PIX system had critical failure at 10 PM and CTO was on international flight: I authorized cluster restart with same approach. System returned in 45min, CTO thanked me next day.`
  },
  fups: [
    {
      "q": "Por que você não esperou conseguir falar com o diretor antes de agir?",
      "a": "Porque o impacto era material e imediato: 23.400 empresas sem poder vender durante fim de semana inteiro (potencial de R$ 8,2M em vendas perdidas). Cada hora de espera multiplicava o dano. Tentei contato por 15 minutos (3 canais), esgotei opções razoáveis.",
      "q_en": "Why didn't you wait to reach the director before acting?",
      "a_en": "Because impact was material and immediate: 23,400 companies unable to sell during entire weekend (potential R$8.2M in lost sales). Each hour of waiting multiplied damage. I tried contact for 15 minutes (3 channels), exhausted reasonable options."
    },
    {
      "q": "Quais foram os 4 controles de risco que você implementou para mitigar a decisão unilateral?",
      "a": "Os 4 controles foram: (1) Call emergencial com 5 testemunhas-chave (NOC, DBA, segurança, arquiteto, auditor) para validar decisão; (2) Email formal documentando situação + tentativas de contato + racional + assumindo responsabilidade total; (3) Gravação + ata com assinaturas digitais (prova de processo); (4) 3 gates de reversão objetivos (30min, perda de dados, 2h estabilização).",
      "q_en": "What were the 4 risk controls you implemented to mitigate unilateral decision?",
      "a_en": "The 4 controls were: (1) Emergency call with 5 key witnesses (NOC, DBA, security, architect, auditor) to validate decision; (2) Formal email documenting situation + contact attempts + rationale + assuming full responsibility; (3) Recording + minutes with digital signatures (process proof); (4) 3 objective rollback gates (30min, data loss, 2h stabilization)."
    },
    {
      "q": "Como o diretor reagiu quando soube da sua decisão no dia seguinte?",
      "a": "Estava inicialmente preocupado (decisão unilateral é sempre arriscada), mas quando viu: (1) documentação completa (email formal + ata); (2) controles implementados (testemunhas + gates); (3) resultado positivo (sistema restaurado, zero perda), disse: 'Você fez a coisa certa. Eu teria feito o mesmo.' Transformou minha decisão em protocolo oficial.",
      "q_en": "How did the director react when he learned about your decision the next day?",
      "a_en": "He was initially concerned (unilateral decision is always risky), but when he saw: (1) complete documentation (formal email + minutes); (2) implemented controls (witnesses + gates); (3) positive result (system restored, zero loss), he said: 'You did the right thing. I would have done the same.' He transformed my decision into official protocol."
    },
    {
      "q": "Qual foi o maior risco pessoal que você assumiu nessa decisão?",
      "a": "Risco de demissão por insubordinação (decisão unilateral de R$ 4,8M sem autorização), responsabilidade civil por eventuais perdas (se rollback falhasse), e risco reputacional (ser visto como 'insubordinado'). Mas o risco de não agir era maior: 23k empresas paradas custaria R$ 8,2M + crise política.",
      "q_en": "What was the biggest personal risk you assumed in this decision?",
      "a_en": "Risk of dismissal for insubordination (unilateral R$4.8M decision without authorization), civil liability for eventual losses (if rollback failed), and reputational risk (being seen as 'insubordinate'). But risk of not acting was greater: 23k companies stopped would cost R$8.2M + political crisis."
    },
    {
      "q": "Como você garantiu que a decisão fosse técnica e não emocional?",
      "a": "Cinco testemunhas técnicas validaram o racional (NOC, DBA, segurança, arquiteto, auditor), documentei análise de risco objetiva, estabeleci gates de reversão mensuráveis (30min, perda de dados, 2h), e gravei toda a discussão. Emoção teria sido decidir sozinho sem controles.",
      "q_en": "How did you ensure the decision was technical and not emotional?",
      "a_en": "Five technical witnesses validated the rationale (NOC, DBA, security, architect, auditor), I documented objective risk analysis, established measurable rollback gates (30min, data loss, 2h), and recorded entire discussion. Emotion would have been deciding alone without controls."
    },
    {
      "q": "Que protocolo foi criado a partir dessa experiência?",
      "a": "'Procedimento de Decisão Emergencial' que autoriza coordenadores a tomar decisões críticas quando gestor indisponível, desde que: (1) documentem em email formal, (2) envolvam auditoria/testemunhas, (3) estabeleçam gates objetivos. Protocolo foi usado 4 vezes nos anos seguintes com sucesso.",
      "q_en": "What protocol was created from this experience?",
      "a_en": "'Emergency Decision Procedure' that authorizes coordinators to make critical decisions when manager unavailable, as long as: (1) document in formal email, (2) involve audit/witnesses, (3) establish objective gates. Protocol was used 4 times in following years successfully."
    },
    {
      "q": "Como você mediu o impacto real nas 23.400 empresas?",
      "a": "Calculei vendas médias por empresa (R$ 350/dia baseado em dados fiscais), multipliquei por 23.400 empresas e 2,3 dias de fim de semana = R$ 8,2M em vendas perdidas evitadas. Mais importante: zero reclamações de empresas após restauração do sistema.",
      "q_en": "How did you measure real impact on 23,400 companies?",
      "a_en": "I calculated average sales per company (R$350/day based on tax data), multiplied by 23,400 companies and 2.3 weekend days = R$8.2M in avoided lost sales. Most importantly: zero company complaints after system restoration."
    },
    {
      "q": "Que resistência você enfrentou da equipe técnica?",
      "a": "Equipe estava nervosa com rollback sem aprovação formal ('e se der errado?'). Mostrei que risco de não agir (R$ 8,2M + crise política) era maior que risco técnico (rollback testado, gates de reversão). Transparência e controles deram confiança para executar.",
      "q_en": "What resistance did you face from the technical team?",
      "a_en": "Team was nervous about rollback without formal approval ('what if it goes wrong?'). I showed that risk of not acting (R$8.2M + political crisis) was greater than technical risk (tested rollback, rollback gates). Transparency and controls gave confidence to execute."
    },
    {
      "q": "Como você aplicou esse aprendizado em outras situações?",
      "a": "Usei o mesmo modelo no Sicredi (PIX down às 22h, CTO em voo): (1) Tentei contato por 10min, (2) Documentei decisão em email, (3) Envolvi testemunhas técnicas, (4) Estabeleci gates objetivos, (5) Executei restart de cluster. Sistema voltou em 45min, CTO agradeceu.",
      "q_en": "How did you apply this learning in other situations?",
      "a_en": "I used same model at Sicredi (PIX down at 10 PM, CTO on flight): (1) Tried contact for 10min, (2) Documented decision in email, (3) Involved technical witnesses, (4) Established objective gates, (5) Executed cluster restart. System returned in 45min, CTO thanked me."
    },
    {
      "q": "Qual foi o ROI real dessa decisão?",
      "a": "ROI imediato: evitei R$ 8,2M em vendas perdidas vs. R$ 4,8M de risco de rollback = 70% de proteção. ROI de longo prazo: protocolo criado preveniu 4 outras crises similares, economizando estimados R$ 15M em 3 anos. Mais importante: reputação de confiabilidade me rendeu promoção.",
      "q_en": "What was the real ROI of this decision?",
      "a_en": "Immediate ROI: avoided R$8.2M in lost sales vs. R$4.8M rollback risk = 70% protection. Long-term ROI: created protocol prevented 4 other similar crises, saving estimated R$15M over 3 years. Most importantly: reputation for reliability earned me promotion."
    }
  ]
};

export default case_7;
