const case_5 = {
  "id": "bradesco-sla-director",
  "title": "Redefini SLA crítico com diretor para recuperar credibilidade operacional",
  "title_pt": "Redefini SLA crítico com diretor para recuperar credibilidade operacional",
  "title_en": "Redefined critical SLA with director to restore operational credibility",
  "company": "Bradesco Payments",
  "period": "03/2018-07/2018",
  "keywords": "#redefinir-sla | #credibilidade | #crise | #transparência | #stakeholder",
  "isTopCase": false,
  "isGoodCase": false,
  "pt": {
    "s": "Em março de 2018, como Product Manager na operação de pagamentos do Bradesco, respondi pela liquidação de grandes varejistas. No fechamento do trimestre, o diretor da divisão - ex-presidente de uma adquirente concorrente - destacou que a liquidação média atrasou 29% e R$ 480 milhões estavam fora do prazo. Cada dia de atraso elevava o custo de capital em 0,4 p.p. e gerava penalidades contratuais; três clientes ameaçavam encerrar contrato por quebra de confiança. O diretor foi direto: se o SLA D+1 não voltasse ao normal em 60 dias, ele entregaria a operação a outro gestor.",
    "t": "Redesenhar o SLA D+1, reduzir a variação de atraso a menos de 0,15% em 60 dias, sem aumentar custo fixo - e, acima de tudo, reconstruir a confiança do diretor mostrando que transparência ativa e entrega mensurável podiam conviver sob pressão extrema.",
    "a": "Realizei análise de causa-raiz e identifiquei que 42% dos atrasos vinham do descompasso entre janelas de corte e crédito da tesouraria. Reuni financeiro, tecnologia e operações, criei um painel em tempo real com alertas quando o desvio passava de cinco minutos e reprogramei scripts para conciliações incrementais. Negociei com tecnologia uma janela exclusiva das 2h às 4h sem custo adicional. Para dar previsibilidade ao diretor, criei o “Check 7h”: reunião diária de dez minutos às 7h em que eu apresentava todos os números, inclusive falhas fora da minha área.\n\n    O diretor passou de receptor de más notícias para participante ativo das decisões. Pilotei o novo modelo nos dois maiores clientes; os atrasos caíram 73% em uma semana. Compartilhei resultados em tempo real e, na segunda semana, ele pediu para institucionalizar o ritual. Um coordenador resistiu por medo de exposição diária; levei dados de perda de contratos e estabeleci regra de não citar nomes, apenas tempos de resolução. Em quatro semanas, a equipe passou a antecipar relatórios antes da reunião.",
    "r": "Em 45 dias a taxa fora do D+1 despencou de 7,1% para 0,12%, a conciliação automática subiu de 68% para 94% e o tempo médio de correção caiu de 18 horas para 2h50. Quatro contratos estratégicos foram renovados sem desconto, o método economizou R$ 2,3 milhões e o “Check 7h” foi replicado em cinco áreas. Auditoria posterior citou o modelo como referência de governança operacional.",
    "l": "Aprendi que confiança executiva nasce quando vulnerabilidade vem acompanhada de ritmo e dados. Expor falhas no momento em que acontecem e manter cadência diária transformou tensão em previsibilidade. O método virou meu padrão: métricas em tempo real, diálogo aberto e correção rápida."
  },
  "en": {
    "s": "March 2018, Bradesco Payments. As Product Manager for large-retailer settlements, I faced an escalation: average D+1 delays jumped 29%, BRL 480M were outside SLA, and three strategic clients were ready to leave. Each 24-hour delay raised capital cost by 0.4 p.p. The division director, a former competitor executive, told me bluntly: if performance wasn’t back within 60 days, he’d move the operation.",
    "t": "Redesign the D+1 settlement model, keep variance below 0.15% in 60 days without increasing fixed cost, and rebuild the director’s confidence by pairing transparency with measurable delivery.",
    "a": "Root-cause analysis showed 42% of delays came from unsynchronized cut-off and treasury windows. I aligned finance, tech, and ops, built a real-time audit dashboard with five-minute alerts, rewrote reconciliation scripts for incremental runs, and negotiated a dedicated 2-4 a.m. batch window with no extra cost. Created the daily “Check 7h” ten-minute stand-up, 7 a.m. sharp, where I presented full numbers--including failures outside my scope. Owning every issue shifted the tone from defense to partnership.\n\n    We piloted with two top clients; delays fell 73% in one week. Sharing results live, the director asked to institutionalize the routine. One coordinator feared daily exposure; I presented contract-loss projections and established a rule--discuss causes and resolution time, never names. Within four weeks, teams sent metrics before the meetings; fear turned into anticipation.",
    "r": "After 45 days, late-settlement rate dropped from 7.1% to 0.12%, auto-reconciliation rose from 68% to 94%, and fix time fell from 18 hours to 2h50. Four major contracts renewed at full margin, the initiative saved BRL 2.3M, and “Check 7h” spread to five additional areas. An internal audit later highlighted the model as trust-based operational governance.",
    "l": "Executive confidence grows when vulnerability meets cadence. By exposing issues in real time and keeping a predictable rhythm, I replaced tension with reliability. I now replicate the same pattern--real-time metrics, open dialogue, rapid iteration--whenever credibility is on the line."
  },
  "fups": [
    {
      "q": "Qual foi seu maior erro ou falha neste caso?",
      "a": "Tratei o atraso inicialmente como problema técnico, não como crise de confiança. Só quando entendi o fator político mudei a abordagem. Detalhei que em 45 dias a taxa fora do D+1 caiu de 7,1% para 0,12% e a conciliação automática subiu de 68% para 94%.",
      "q_en": "What was your biggest mistake or failure in this case?",
      "a_en": "At first I treated it as a technical problem, not a trust crisis; acknowledging the political factor changed the outcome. I detailed cutting late D+1 settlements from 7.1% to 0.12% and lifting auto-reconciliation from 68% to 94% in 45 days."
    },
    {
      "q": "O que você faria diferente hoje?",
      "a": "Envolveria o diretor já no diagnóstico e validaria a estratégia antes do piloto, acelerando o patrocínio institucional. Mostrei que o tempo médio de correção despencou de 18 horas para 2h50 com o novo ritual.",
      "q_en": "What would you do differently today?",
      "a_en": "I would bring the director into the diagnostic phase and validate the approach before piloting, speeding sponsorship. I showed correction time dropping from 18 hours to 2h50 once the ritual started."
    },
    {
      "q": "Qual foi o obstáculo mais difícil de superar?",
      "a": "Resistência do time em expor erros diários. Venci com dados sobre perdas e regra de discutir causas, não culpados. Reforcei que quatro contratos estratégicos foram renovados sem desconto, economizando R$ 2,3 milhões.",
      "q_en": "What was the hardest obstacle to overcome?",
      "a_en": "Team resistance to exposing daily errors; solved it with data on losses and a rule to discuss causes, not culprits. I reinforced four strategic contracts renewed at full margin, saving BRL 2.3M."
    },
    {
      "q": "Quais foram os principais riscos e como você os mitigou?",
      "a": "Falha na janela crítica e atrito com TI. Mitiguei com scripts de contingência e monitoramento minuto a minuto. Expliquei que o Check 7h foi replicado em cinco áreas como mecanismo diário de confiança.",
      "q_en": "What were the main risks and how did you mitigate them?",
      "a_en": "Critical-window failure and friction with IT; mitigated via contingency scripts and minute-level monitoring. I explained Check 7h now operates in five areas as a daily trust mechanism."
    },
    {
      "q": "Que dados você usou e qual foi a racional de cálculo?",
      "a": "Identifiquei que 42% dos atrasos vinham de janelas descasadas; calculei impacto de 0,4 p.p. no custo de capital por dia de atraso. Citei que a auditoria posterior registrou o modelo como referência de governança operacional.",
      "q_en": "What data did you use and what was your calculation rationale?",
      "a_en": "Identified 42% of delays from mismatched windows; calculated 0.4 p.p. capital cost impact per delay day. I cited the audit report naming the model an operational governance reference."
    },
    {
      "q": "Como você usou o aprendizado deste caso em outros contextos?",
      "a": "Replicamos 'Check 7h' em cinco áreas do Bradesco; auditoria interna citou como referência de governança operacional. Detalhei que em 45 dias a taxa fora do D+1 caiu de 7,1% para 0,12% e a conciliação automática subiu de 68% para 94%.",
      "q_en": "How did you apply this learning elsewhere?",
      "a_en": "Replicated 'Check 7h' across five Bradesco areas; internal audit cited it as operational governance reference. I detailed cutting late D+1 settlements from 7.1% to 0.12% and lifting auto-reconciliation from 68% to 94% in 45 days."
    },
    {
      "q": "Como o diretor reagiu ao novo ritual após 60 dias?",
      "a": "Passou a acompanhar o dashboard ao vivo e citá-lo nas reuniões de board como referência de confiabilidade. Mostrei que o tempo médio de correção despencou de 18 horas para 2h50 com o novo ritual.",
      "q_en": "How did the director react to the new ritual after 60 days?",
      "a_en": "He began checking the live dashboard daily and citing it in board meetings as a reliability reference. I showed correction time dropping from 18 hours to 2h50 once the ritual started."
    },
    {
      "q": "Como você identificou que 42% dos atrasos vinham do descompasso entre janelas de corte e crédito?",
      "a": "Realizei análise de causa-raiz cruzando logs de tesouraria com timestamps de conciliação em janelas de 10 minutos. Reforcei que quatro contratos estratégicos foram renovados sem desconto, economizando R$ 2,3 milhões.",
      "q_en": "How did you identify that 42% of delays came from cut-off and credit window mismatch?",
      "a_en": "Ran root-cause analysis crossing treasury logs with reconciliation timestamps in 10-minute windows. I reinforced four strategic contracts renewed at full margin, saving BRL 2.3M."
    },
    {
      "q": "Qual foi o momento específico que transformou o diretor de receptor de más notícias em participante ativo?",
      "a": "Quando assumi publicamente erros de outras áreas no 'Check 7h' e ele viu que transparência gerava controle, não exposição. Expliquei que o Check 7h foi replicado em cinco áreas como mecanismo diário de confiança.",
      "q_en": "Which specific moment turned the director from news recipient into active participant?",
      "a_en": "When I publicly owned errors from other areas in 'Check 7h' and he saw transparency created control, not exposure. I explained Check 7h now operates in five areas as a daily trust mechanism."
    },
    {
      "q": "Como você convenceu tecnologia a aprovar janela exclusiva 2h-4h sem custo adicional?",
      "a": "Mostrei que atrasos custavam 0,4 p.p. em capital diário e que janela noturna tinha capacidade ociosa de 78%. Citei que a auditoria posterior registrou o modelo como referência de governança operacional.",
      "q_en": "How did you convince tech to approve exclusive 2-4 a.m. window without extra cost?",
      "a_en": "Showed delays cost 0.4 p.p. daily capital and that night window had 78% idle capacity. I cited the audit report naming the model an operational governance reference."
    },
    {
      "q": "Como você superou resistência do coordenador que temia exposição diária?",
      "a": "Levei dados de perda de contratos, estabeleci regra de não citar nomes (só tempos) e equipe passou a antecipar relatórios. Detalhei que em 45 dias a taxa fora do D+1 caiu de 7,1% para 0,12% e a conciliação automática subiu de 68% para 94%.",
      "q_en": "How did you overcome coordinator resistance who feared daily exposure?",
      "a_en": "Presented contract-loss data, set rule to discuss times not names, and team began anticipating reports. I detailed cutting late D+1 settlements from 7.1% to 0.12% and lifting auto-reconciliation from 68% to 94% in 45 days."
    },
    {
      "q": "Quais métricas específicas do 'Check 7h' tiveram maior impacto na recuperação da confiança?",
      "a": "Taxa fora do D+1 caiu de 7,1% para 0,12%, conciliação automática subiu para 94% e tempo de correção caiu para 2h50. Mostrei que o tempo médio de correção despencou de 18 horas para 2h50 com o novo ritual.",
      "q_en": "Which specific 'Check 7h' metrics had greatest impact on trust recovery?",
      "a_en": "Late rate fell from 7.1% to 0.12%, auto-reconciliation rose to 94%, and fix time dropped to 2h50. I showed correction time dropping from 18 hours to 2h50 once the ritual started."
    },
    {
      "q": "Como o piloto com os dois maiores clientes gerou momentum para institucionalização?",
      "a": "Atrasos caíram 73% em uma semana; compartilhei resultados em tempo real e diretor pediu escala imediata. Reforcei que quatro contratos estratégicos foram renovados sem desconto, economizando R$ 2,3 milhões.",
      "q_en": "How did the pilot with two top clients create momentum for institutionalization?",
      "a_en": "Delays fell 73% in one week; shared results live and director requested immediate scale. I reinforced four strategic contracts renewed at full margin, saving BRL 2.3M."
    },
    {
      "q": "Qual foi o impacto financeiro direto da iniciativa em termos de economia e retenção?",
      "a": "Economizamos R$ 2,3 milhões em custo de capital e retivemos quatro contratos estratégicos sem desconto de margem. Expliquei que o Check 7h foi replicado em cinco áreas como mecanismo diário de confiança.",
      "q_en": "What was the direct financial impact of the initiative in savings and retention?",
      "a_en": "Saved BRL 2.3M in capital cost and retained four strategic contracts at full margin. I explained Check 7h now operates in five areas as a daily trust mechanism."
    },
    {
      "q": "Como você garantiu que equipe mantivesse ritmo após primeiros 45 dias de sucesso?",
      "a": "Mantive 'Check 7h' diário, celebrei micro-vitórias e liguei métricas ao bônus trimestral da área. Citei que a auditoria posterior registrou o modelo como referência de governança operacional.",
      "q_en": "How did you ensure team maintained pace after first 45 days of success?",
      "a_en": "Kept daily 'Check 7h', celebrated micro-wins, and linked metrics to quarterly team bonus. I cited the audit report naming the model an operational governance reference."
    },
    {
      "q": "Quais sinais indicaram que a confiança do diretor estava sendo restaurada?",
      "a": "Passou de ameaçar transferir operação para me defender em reuniões de board e pedir expansão do modelo. Detalhei que em 45 dias a taxa fora do D+1 caiu de 7,1% para 0,12% e a conciliação automática subiu de 68% para 94%.",
      "q_en": "Which signals showed the director's trust was being restored?",
      "a_en": "Shifted from threatening operation transfer to defending me in board meetings and requesting model expansion. I detailed cutting late D+1 settlements from 7.1% to 0.12% and lifting auto-reconciliation from 68% to 94% in 45 days."
    }
  ]
};

export default case_5;
