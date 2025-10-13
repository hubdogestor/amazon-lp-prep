const case_5 = {
  id: "bradesco-sla-director",
  title: "Redefini SLA crítico com diretor para recuperar credibilidade operacional",
  title_pt: "Redefini SLA crítico com diretor para recuperar credibilidade operacional",
  title_en: "Redefined critical SLA with director to restore operational credibility",
  company: "Bradesco Payments",
  period: "03/2018-07/2018",
  isTopCase: true,
  isGoodCase: true,

  pt: {
    s: `Em março de 2018, como Product Manager na operação de pagamentos do Bradesco, respondi pela liquidação de grandes varejistas. No fechamento do trimestre, o diretor da divisão – ex-presidente de uma adquirente concorrente – destacou que a liquidação média atrasou 29% e R$ 480 milhões estavam fora do prazo. Cada dia de atraso elevava o custo de capital em 0,4 p.p. e gerava penalidades contratuais; três clientes ameaçavam encerrar contrato por quebra de confiança. O diretor foi direto: se o SLA D+1 não voltasse ao normal em 60 dias, ele entregaria a operação a outro gestor.`,

    t: `Redesenhar o SLA D+1, reduzir a variação de atraso a menos de 0,15% em 60 dias, sem aumentar custo fixo – e, acima de tudo, reconstruir a confiança do diretor mostrando que transparência ativa e entrega mensurável podiam conviver sob pressão extrema.`,

    a: `Realizei análise de causa-raiz e identifiquei que 42% dos atrasos vinham do descompasso entre janelas de corte e crédito da tesouraria. Reuni financeiro, tecnologia e operações, criei um painel em tempo real com alertas quando o desvio passava de cinco minutos e reprogramei scripts para conciliações incrementais. Negociei com tecnologia uma janela exclusiva das 2h às 4h sem custo adicional. Para dar previsibilidade ao diretor, criei o “Check 7h”: reunião diária de dez minutos às 7h em que eu apresentava todos os números, inclusive falhas fora da minha área.

    O diretor passou de receptor de más notícias para participante ativo das decisões. Pilotei o novo modelo nos dois maiores clientes; os atrasos caíram 73% em uma semana. Compartilhei resultados em tempo real e, na segunda semana, ele pediu para institucionalizar o ritual. Um coordenador resistiu por medo de exposição diária; levei dados de perda de contratos e estabeleci regra de não citar nomes, apenas tempos de resolução. Em quatro semanas, a equipe passou a antecipar relatórios antes da reunião.`,

    r: `Em 45 dias a taxa fora do D+1 despencou de 7,1% para 0,12%, a conciliação automática subiu de 68% para 94% e o tempo médio de correção caiu de 18 horas para 2h50. Quatro contratos estratégicos foram renovados sem desconto, o método economizou R$ 2,3 milhões e o “Check 7h” foi replicado em cinco áreas. Auditoria posterior citou o modelo como referência de governança operacional.`,

    l: `Aprendi que confiança executiva nasce quando vulnerabilidade vem acompanhada de ritmo e dados. Expor falhas no momento em que acontecem e manter cadência diária transformou tensão em previsibilidade. O método virou meu padrão: métricas em tempo real, diálogo aberto e correção rápida.`
  },

  en: {
    s: `March 2018, Bradesco Payments. As Product Manager for large-retailer settlements, I faced an escalation: average D+1 delays jumped 29%, BRL 480M were outside SLA, and three strategic clients were ready to leave. Each 24-hour delay raised capital cost by 0.4 p.p. The division director, a former competitor executive, told me bluntly: if performance wasn’t back within 60 days, he’d move the operation.`,

    t: `Redesign the D+1 settlement model, keep variance below 0.15% in 60 days without increasing fixed cost, and rebuild the director’s confidence by pairing transparency with measurable delivery.`,

    a: `Root-cause analysis showed 42% of delays came from unsynchronized cut-off and treasury windows. I aligned finance, tech, and ops, built a real-time audit dashboard with five-minute alerts, rewrote reconciliation scripts for incremental runs, and negotiated a dedicated 2-4 a.m. batch window with no extra cost. Created the daily “Check 7h” ten-minute stand-up, 7 a.m. sharp, where I presented full numbers—including failures outside my scope. Owning every issue shifted the tone from defense to partnership.

    We piloted with two top clients; delays fell 73% in one week. Sharing results live, the director asked to institutionalize the routine. One coordinator feared daily exposure; I presented contract-loss projections and established a rule—discuss causes and resolution time, never names. Within four weeks, teams sent metrics before the meetings; fear turned into anticipation.`,

    r: `After 45 days, late-settlement rate dropped from 7.1% to 0.12%, auto-reconciliation rose from 68% to 94%, and fix time fell from 18 hours to 2h50. Four major contracts renewed at full margin, the initiative saved BRL 2.3M, and “Check 7h” spread to five additional areas. An internal audit later highlighted the model as trust-based operational governance.`,

    l: `Executive confidence grows when vulnerability meets cadence. By exposing issues in real time and keeping a predictable rhythm, I replaced tension with reliability. I now replicate the same pattern—real-time metrics, open dialogue, rapid iteration—whenever credibility is on the line.`
  },

  fups: [
    {
      q: "Qual foi seu maior erro ou falha neste caso?",
      a: "Tratei o atraso inicialmente como problema técnico, não como crise de confiança. Só quando entendi o fator político mudei a abordagem.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "At first I treated it as a technical problem, not a trust crisis; acknowledging the political factor changed the outcome."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Envolveria o diretor já no diagnóstico e validaria a estratégia antes do piloto, acelerando o patrocínio institucional.",
      q_en: "What would you do differently today?",
      a_en: "I would bring the director into the diagnostic phase and validate the approach before piloting, speeding sponsorship."
    },
    {
      q: "Qual foi o obstáculo mais difícil de superar?",
      a: "Resistência do time em expor erros diários. Venci com dados sobre perdas e regra de discutir causas, não culpados.",
      q_en: "What was the hardest obstacle to overcome?",
      a_en: "Team resistance to exposing daily errors; solved it with data on losses and a rule to discuss causes, not culprits."
    },
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "Falha na janela crítica e atrito com TI. Mitiguei com scripts de contingência e monitoramento minuto a minuto.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "Critical-window failure and friction with IT; mitigated via contingency scripts and minute-level monitoring."
    },
    {
      q: "Como o diretor reagiu ao novo ritual após 60 dias?",
      a: "Passou a acompanhar o dashboard ao vivo e citá-lo nas reuniões de board como referência de confiabilidade.",
      q_en: "How did the director react to the new ritual after 60 days?",
      a_en: "He began checking the live dashboard daily and citing it in board meetings as a reliability reference."
    }
  ]
};

export default case_5;
