const case_5 = {
  id: "bradesco-sla-director",
  title: "Redefini SLA critico com diretor para recuperar credibilidade operacional",
  title_pt: "Redefini SLA critico com diretor para recuperar credibilidade operacional",
  title_en: "Redefined critical SLA with director to restore operational credibility",
  company: "Bradesco Payments",
  period: "03/2018-07/2018",
  isTopCase: true,
  isGoodCase: true,

  pt: {
    s: "Em março de 2018, eu atuava como Product Manager na operacao de pagamentos do Bradesco, responsavel pelos fluxos de liquidação de grandes varejistas. No fechamento do trimestre, o diretor da divisão — ex-presidente de uma adquirente concorrente — mostrou que os atrasos médios de liquidação haviam subido 29% e que R$ 480 milhões estavam fora do prazo. Enquanto o problema técnico parecia pontual, o impacto financeiro era imediato: cada dia de atraso elevava o custo de capital em 0,4 p.p. e aumentava o volume de reclamações de clientes estratégicos. Três contratos estavam prestes a ser encerrados por quebra de confiança. O diretor foi direto: se o SLA D+1 não voltasse em 60 dias, ele transferiria a operação para outro gestor. O desafio envolvia alta pressão, visibilidade política e risco real de perda de emprego. Precisava reverter a crise com ações que gerassem previsibilidade real em um ambiente de desconfiança crescente.",
    
    t: "Meu objetivo era redesenhar o SLA de liquidação D+1, reduzindo a variação de atraso a menos de 0,15% em 60 dias, sem aumento de custo fixo. Além da meta operacional, eu precisava reconstruir a confiança do diretor e mostrar que transparência ativa e entrega mensurável podiam coexistir mesmo em ambiente de cobrança extrema.",
    
    a: "Comecei com uma análise detalhada da causa-raiz: 42% dos atrasos vinham da falta de sincronização entre janelas de corte e crédito de tesouraria. Mapiei o fluxo ponta a ponta reunindo financeiro, tecnologia e operação. Desenvolvi um painel de auditoria em tempo real que mostrava cada lote processado e emitia alerta automático se o desvio passasse de cinco minutos. Para retomar previsibilidade, propus reunião de dez minutos às 7 h diárias batizada de 'Check 7h'. Nela, eu apresentava todos os números e falhas, inclusive quando a origem estava fora da minha área. Expor as vulnerabilidades me transformou de porta-voz reativo em ponto de confiança: o diretor passou a enxergar consistência, não defesas. Em paralelo, reprogramei os scripts de conciliação para execução incremental e negociei com tecnologia uma janela exclusiva entre 2h e 4h, sem custo adicional. Pilotei o novo modelo nos dois maiores clientes; os atrasos caíram 73% em uma semana. Compartilhei os resultados ao vivo e, ao final da segunda semana, o diretor pediu para adotar o 'Check 7h' como rotina oficial. Enfrentei resistência de um coordenador que temia exposição diária de erros perante a diretoria. Convoquei o time, apresentei dados de perda de contratos e demonstrei que ocultar falhas havia custado mais que mostrá-las. Criei regra: nenhum nome seria exibido, apenas o tempo de resolução. Essa mudança gerou adesão — o próprio coordenador passou a liderar o status das 7 h. Em quatro semanas, a equipe passou de medo à antecipação: enviavam relatórios antes de serem solicitados.",
    
    r: "Em 45 dias, a taxa de liquidação fora do D+1 despencou de 7,1% para 0,12%. O índice de conciliação automática saltou de 68% para 94%. A agilidade de correção de falhas passou de 18 horas para 2 h 50 min. O ambiente de trabalho mudou: o diretor, antes receptor de relatórios críticos, passou a acompanhar o dashboard ao vivo e elogiar a previsibilidade. Em junho, quatro contratos estratégicos foram renovados sem pedido de desconto adicional, e o projeto economizou R$ 2,3 milhões em custos indiretos. O método 'Check 7h' foi replicado em cinco outras áreas e se tornou rotina de avaliação de risco. A cultura de comunicação direta se consolidou — gestores passaram a priorizar visibilidade sobre discurso. Em auditoria posterior, o modelo foi citado como exemplo de governança operacional voltada a previsibilidade e integridade de informação.",
    
    l: "Aprendi que confiança executiva é conquistada quando vulnerabilidade vem acompanhada de ritmo e dados. Ao admitir falhas no exato momento em que ocorrem e manter cadência de comunicação, percebi que previsibilidade gera segurança maior do que promessas. No caso do 'Check 7h', transformar erro em informação abriu espaço para decisões mais rápidas e sustentáveis. Desde então, aplico o mesmo método em contextos complexos: transparência diária, indicadores compartilhados e resposta imediata. O resultado é recorrente — times mais engajados, menor volume de crises e diretores que confiam porque veem os sinais antes do problema surgir."
  },

  en: {
    s: "March 2018, Bradesco Payments. I was Product Manager responsible for large‑retailer settlements when the division director—former head of a competitor—called an emergency meeting. Average settlement delays had risen 29%, leaving BRL 480 million unsettled and three major clients threatening to exit. Each 24‑hour delay raised capital cost by 0.4 p.p. and triggered contractual penalties. It wasn’t just a technical issue—it was a financial and reputational crisis. The director told me bluntly that if D+1 performance wasn’t stable within 60 days, he’d move the account elsewhere. The situation demanded restoring confidence at both operational and executive levels under intense scrutiny.",
    
    t: "My goal: redesign the D+1 settlement SLA within 60 days to keep variance below 0.15%, without raising fixed cost. Beyond metrics, I needed to rebuild the director’s confidence by proving that transparency and delivery could reinforce each other.",
    
    a: "I began with root‑cause analysis: 42% of delays came from unsynchronized cut‑off and treasury windows. I assembled finance, tech, and ops to map the full flow. Built a real‑time audit dashboard flagging any delay over 5 minutes. To regain predictability, I created a ten‑minute daily checkpoint at 7 a.m. called 'Check 7h'. I personally presented data and admitted every failure, even those outside my area. Owning all outcomes transformed the tone from defense to collaboration—it showed steadiness under pressure. In parallel, I rewrote reconciliation scripts for incremental runs and negotiated with IT an exclusive 2–4 a.m. window without added cost. We piloted with two top clients; delays dropped 73% in one week. Real‑time sharing of results built confidence so fast that the director asked to institutionalize 'Check 7h'. One coordinator resisted, calling daily exposure risky. I showed contract‑loss projections proving that hiding errors hurt credibility more than revealing them. Established a clear rule: we discuss causes and fix times, never names. Within weeks he became the leading voice of the sunrise stand‑up. The culture flipped from fear to anticipation—teams sent metrics before being asked.",
    
    r: "After 45 days, D+1 late‑settlement rate fell from 7.1% to 0.12%. Auto‑reconciliation jumped from 68% to 94%, mean issue‑fix time dropped from 18 hours to 2 h 50 min. The director began checking the live dashboard each morning and citing ops reliability in board updates. Four major clients renewed contracts at full margin. The initiative saved BRL 2.3 million and cut SLA escalations by 90%. The 'Check 7h' routine was later expanded to five service areas, embedding a visible rhythm of metrics sharing across the organization. Transparency became cultural currency—issues were surfaced early, discussed by data, resolved faster. An internal audit six months later highlighted the method as model for trust‑based operational governance.",
    
    l: "I learned that confidence from executives and teams grows through steady transparency, not silence. Admitting mistakes at the moment they occur and maintaining rhythm turns uncertainty into reliability. The 'Check 7h' case showed that data cadence replaces tension with clarity. Since then, I’ve applied the same pattern—real‑time metrics, open dialogue, quick iteration—whenever large‑scale delivery requires visible credibility. It consistently results in faster alignment, fewer escalations, and stronger cross‑functional cooperation."
  },

  fups: [
    {
      q: "Qual foi seu maior erro ou falha neste caso?",
      a: "Tratei a situacao inicialmente como problema tecnico, e nao como crise de confianca. So quando entendi o fator politico consegui agir corretamente.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "I first saw it as a technical issue, not a trust crisis; only after recognizing the political dimension did I act effectively."
    },
    {
      q: "O que voce faria diferente hoje?",
      a: "Envolveria o diretor ja na fase diagnostica e validaria a abordagem antes do piloto. Isso teria acelerado apoio institucional.",
      q_en: "What would you do differently today?",
      a_en: "I’d involve the director in the diagnostic stage to gain institutional sponsorship sooner."
    },
    {
      q: "Qual foi o obstaculo mais dificil de superar?",
      a: "A resistencia do time em expor erros diarios. Superei mostrando dados concretos de como a ocultacao aumentava retrabalho e desgaste.",
      q_en: "What was the hardest obstacle to overcome?",
      a_en: "Team fear of exposing daily mistakes; I overcame it by sharing data proving how hiding issues increased rework and stress."
    },
    {
      q: "Quais foram os principais riscos e como voce os mitigou?",
      a: "Risco de falha na janela critica e atrito com TI. Mitiguei criando planos de contingencia e monitoramento minuto a minuto.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "Main risks were downtime in critical window and IT friction—mitigated with contingency scripts and minute‑level tracking."
    },
    {
      q: "Que dados voce usou e qual foi a racional de calculo?",
      a: "Avaliei 17 mil logs de liquidacao e calculei desvio‑padrao de horario para projetar tolerancia ate 0,15% de variacao maxima.",
      q_en: "What data did you use and what was your calculation rationale?",
      a_en: "Reviewed 17 k settlement logs, computed time variance standard deviation, and set tolerance below 0.15%."
    },
    {
      q: "Como voce usou o aprendizado deste caso em outras frentes?",
      a: "Apliquei o modelo de reuniao curta e painel em tempo real em reconciliacoes internacionais; reduziu incidentes em 58%.",
      q_en: "How did you apply this learning elsewhere?",
      a_en: "Applied short‑meeting + real‑time dashboard model in international reconciliations, cutting incidents by 58%."
    },
    {
      q: "Como voce superou a resistencia interna ao implementar o 'Check 7h' e promover transparencia direta com o diretor?",
      a: "Expliquei o objetivo de previsibilidade, provei resultados preliminares e garanti que nenhum erro seria usado para punição. O engajamento veio quando perceberam reducao de cobrancas unilaterais.",
      q_en: "How did you overcome internal resistance to implementing 'Check 7h' and direct transparency?",
      a_en: "Clarified the goal of predictability, shared early wins, and ensured errors wouldn’t trigger punishment; engagement followed once pressure dropped."
    },
    {
      q: "Quais metricas voce usou para monitorar o progresso do SLA D+1 durante os 60 dias?",
      a: "Tempo medio de liquidação por lote, variacao percentual diaria e taxa de correção inferior a 3h. Acompanhei todas em painel ativo.",
      q_en: "Which metrics did you track to monitor the D+1 SLA progress during the 60 days?",
      a_en: "Tracked average batch time, daily delay variance, and fixes under 3 hours through a live dashboard."
    },
    {
      q: "Que desafios tecnicos ou de priorizacao surgiram durante o piloto com os dois maiores clientes?",
      a: "Precisamos equilibrar volume e tempo de corte; ajustamos scripts para execucao paralela e priorizamos clientes com maior custo de capital.",
      q_en: "What technical or prioritization issues emerged in the pilot with the two largest clients?",
      a_en: "We balanced volume versus cut‑off times; re‑sequenced scripts for parallel execution and prioritized clients with higher capital cost."
    },
    {
      q: "Como voce garantiu que o modelo de governanca fosse escalavel para outras areas?",
      a: "Documentei estrutura e indicadores, padronizei parametros e apresentei resultados para RH e PMO como modelo de previsibilidade interarea.",
      q_en: "How did you ensure the governance model was scalable for other areas?",
      a_en: "Documented structure, standardized metrics, and presented outcomes to HR and PMO as a cross‑department predictability model."
    },
    {
      q: "Apos o sucesso inicial, como voce manteve a confianca do diretor e evolucao para decisoes estrategicas?",
      a: "Mantive reunioes mensais de previsibilidade, abri discussoes de novos SLAs e passei a apresentar indicadores trimestrais da divisao conjunta.",
      q_en: "After initial success, how did you sustain trust and evolve into strategic discussions?",
      a_en: "Held monthly predictability reviews, opened joint SLA design sessions, and presented consolidated quarterly metrics with the director."
    }
  ]
};

export default case_5;