// Case 5 - ownership
const case_5 = {
  id: "payment-incidents-prevention-mechanism",
  title: "Transformei Incidentes Reincidentes em Mecanismo de Confiabilidade",
  title_pt: "Transformei Incidentes Reincidentes em Mecanismo de Confiabilidade",
  title_en: "Turned Recurring Payment Incidents into a Reliability Mechanism",
  company: "SEFAZ/RS",
  period: "08/2024-11/2024",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: `Eu atuava como advisor da SEFAZ/RS quando detectei um padrao perigoso: os mesmos incidentes de pagamentos (timeouts de gateway, divergencia de status, falhas de liquidacao) reapareciam a cada seis semanas. Cada crise congelava ate R$ 18M de arrecadacao diaria, gerava 4.500 chamados de contribuintes em 24h e derrubava o NPS de 63 para 41. Comunicacao, TI, arrecadacao e bancos parceiros trabalhavam em silos e ninguem assumia ownership do ciclo completo.`,
    t: `Eu defendi que, sem um mecanismo de prevencao, continuariamos apagando incendio. Assumi a responsabilidade de reduzir recorrencia em 50% e MTTR em 30% em quatro meses, criar um owner unico por incidente classe A e devolver o NPS para acima de 60.`,
    a: `Em duas semanas eu mapeei 62 incidentes dos ultimos 12 meses, calculei custo total de R$ 7,2M (horas extras, multas, atrasos de repasse) e usei o numero em reuniao com o secretario da Fazenda para garantir sponsorship. Eu criei o papel de Incident Captain: toda falha classe A passou a ter um dono unico ate a prevencao ficar ativa. Eu normalizei postmortems sem culpa com template de cinco blocos (linha do tempo, causa raiz, impacto na arrecadacao, acoes corretivas/preventivas, mecanismo instalado) e defini criterios tecnicos obrigatorios: retry idempotente em tres camadas (aplicacao, gateway, banco), rollback seguro, canario e verificacao de mensagens duplicadas. Eu publiquei catálogo de SLO por servico (PIX 5 minutos, debito automatico 15 minutos, transferencias 30 minutos) e dashboard no Datadog com MTTR, backlog de CAPA, reincidencia e volume de chamados. Quando o diretor de TI reclamou do tempo adicional para postmortem, eu provei que cada incidente repetido consumia 140 horas versus quatro horas para CAPA; ele autorizou tornar a pratica mandatória. Eu envolvi bancos Banrisul e Banco do Brasil com runbook conjunto, teste trimestral de contingencia e canal direto de escalonamento nivel 1, e alinhei comunicacao com SAC para atualizar contribuintes em ate 30 minutos apos o gatilho.`,
    r: `Em quatro meses eu reduzi incidentes recorrentes de 12 para 5 (-58%) e baixei o MTTR medio de 3h40 para 2h25 (-34%). Nenhum incidente classe A se repetiu, reclamacoes na ouvidoria caíram 45%, o NPS voltou para 64 e a arrecadacao deixou de atrasar. As horas extras despencaram 25% e o secretario passou a usar meu dashboard em comites semanais com o governador. O mecanismo virou politica oficial da SEFAZ e a Procergs replicou o modelo em sistemas criticos.`,
    l: `Eu aprendi que ownership em incidentes significa transformar dor em mecanismo replicavel. Eu nunca encerro uma crise sem: 1) um owner nomeado ate a prevencao estar ativa, 2) criterios tecnicos que eliminam remendos e 3) metricas visiveis para toda a lideranca. Isso evita heroismo e protege a confianca no sistema de arrecadacao.`,
  },
  en: {
    s: `I was advising SEFAZ/RS when I spotted a dangerous pattern: the same payment incidents (gateway timeouts, status mismatches, settlement gaps) kept resurfacing every six weeks. Each crisis froze up to R$18M in daily revenue, drove 4,500 taxpayer calls within 24 hours, and knocked NPS from 63 to 41. Communications, IT, Treasury, and partner banks worked in silos and no one owned the full incident life cycle.`,
    t: `I argued that without a prevention mechanism we would keep firefighting. I took ownership to cut recurrence by 50% and MTTR by 30% in four months, assign a single-threaded owner to every class-A incident, and restore NPS above 60.`,
    a: `Within two weeks I mapped 62 incidents from the prior year, quantified a R$7.2M cost (overtime, fines, delayed settlements), and used it with the Finance Secretary to secure sponsorship. I created the Incident Captain role so every class-A failure had one accountable owner until prevention was live. I normalized blameless postmortems with a five-block template (timeline, root cause, revenue impact, corrective/preventive actions, mechanism) and codified technical guardrails: three-layer idempotent retries (app, gateway, bank), safe rollback, canary releases, and duplicate-message checks. I published SLOs per service (PIX 5 minutes, auto-debit 15, transfers 30) and a Datadog board showing MTTR, CAPA backlog, recurrence, and call volume. When the IT director complained about extra time, I proved each repeated incident consumed 140 hours versus four hours for CAPA; he backed making it mandatory. I aligned Banrisul and Banco do Brasil through a joint runbook, quarterly failover tests, and a level-1 escalation hotline, and synced our call center to update taxpayers within 30 minutes of any trigger.`,
    r: `In four months recurrence dropped from 12 to 5 incidents (-58%) and average MTTR fell from 3h40 to 2h25 (-34%). No class-A incident repeated, ombudsman complaints fell 45%, NPS climbed back to 64, and revenue stayed on schedule. Overtime shrank 25%, and the Secretary used my dashboard in weekly updates with the governor. The mechanism became official SEFAZ policy and Procergs replicated it across critical systems.`,
    l: `I learned that real incident ownership means turning pain into a reusable mechanism. I refuse to close a crisis without 1) a named owner until prevention is live, 2) technical guardrails that kill patchwork, and 3) visible metrics across leadership. That prevents heroics and keeps our revenue platform trustworthy.`,
  },
  fups: [
    {
      q: "Como voce mensurou o custo total dos incidentes para convencer a lideranca?",
      a: "Eu calculei horas extras, multas, atrasos de repasse e impacto de imagem; o total anualizado chegou a R$ 7,2M, numero que usei no comite executivo.",
      q_en: "How did you quantify total incident cost to convince leadership?",
      a_en: "I added overtime, fines, delayed settlements, and reputation impact; the annualized total reached R$7.2M, the number I presented to the executive committee." 
    },
    {
      q: "Quais metricas voce acompanhou semanalmente para garantir queda de recorrencia?",
      a: "Eu monitorei reincidencia por categoria, MTTR, backlog de CAPA, percentual de acoes preventivas concluidas e SLO versus realizado.",
      q_en: "Which metrics did you track weekly to ensure recurrence dropped?",
      a_en: "I monitored recurrence by category, MTTR, CAPA backlog, preventive action completion, and SLO versus actual." 
    },
    {
      q: "Como voce assegurou que os bancos parceiros adotassem o runbook?",
      a: "Eu assinei SLA conjunto com Banrisul e Banco do Brasil, testei failover trimestral e inseri penalidades contratuais caso nao respondessem em 15 minutos.",
      q_en: "How did you ensure partner banks followed the runbook?",
      a_en: "I signed a joint SLA with Banrisul and Banco do Brasil, ran quarterly failover drills, and added contractual penalties for not responding within 15 minutes." 
    },
    {
      q: "Que process changes evitaram rollback manual arriscado?",
      a: "Eu implantei checklist de rollback com validacao dupla, logs auditaveis e gatilho automatico de reversao se o retry falhasse tres vezes.",
      q_en: "What process changes prevented risky manual rollbacks?",
      a_en: "I implemented a rollback checklist with dual validation, auditable logs, and an automatic reversal trigger if retry failed three times." 
    },
    {
      q: "Como voce manteve o CAPA leve e util, nao burocratico?",
      a: "Eu limitei o template a uma pagina, exigi conclusao em ate cinco dias, revisao quinzenal e compartilhei exemplos reais para mostrar valor.",
      q_en: "How did you keep CAPA lightweight and useful?",
      a_en: "I capped the template at one page, enforced five-day completion, held biweekly reviews, and used real examples to show the value." 
    },
    {
      q: "Que conflitos surgiram ao definir Incident Captain e como resolveu?",
      a: "Eu tratei a disputa entre times com RACI claro, apoio do secretario e regra: quem detecta nao necessariamente resolve; o captain e sempre o owner mais proximo do cliente.",
      q_en: "What conflicts arose when defining the Incident Captain and how did you resolve them?",
      a_en: "I handled team disputes with a clear RACI, the Secretary's backing, and a rule that detection differs from resolution; the captain is always the owner closest to the customer." 
    },
    {
      q: "Como voce garantiu que licoes fossem reproduzidas em outros sistemas?",
      a: "Eu criei repositorio de postmortems em Confluence, conduzi chapters mensais e incluí CAPA no onboarding de novos PMs e tech leads.",
      q_en: "How did you replicate lessons across other systems?",
      a_en: "I created a Confluence postmortem repository, ran monthly chapters, and added CAPA to onboarding for new PMs and tech leads." 
    },
    {
      q: "Quais ganhos perceptiveis o negocio enxergou?",
      a: "Eu medi SLAs cumpridos, queda de 45% na ouvidoria e previsibilidade na arrecadacao; apresentei os resultados em dashboard publico.",
      q_en: "What tangible gains did the business notice?",
      a_en: "I measured SLA adherence, a 45% drop in ombudsman complaints, and restored revenue predictability; I shared the results on a public dashboard." 
    },
    {
      q: "Se tivesse mais tempo, que automacoes adicionais faria?",
      a: "Eu planejei deteccao preditiva com series temporais e integracao do CAPA ao ServiceNow para fechar o ciclo automaticamente.",
      q_en: "If you had more time, what extra automation would you build?",
      a_en: "I planned predictive detection with time-series models and CAPA integration into ServiceNow for a closed loop." 
    },
    {
      q: "Como voce monitora se o mecanismo continua saudavel hoje?",
      a: "Eu reviso mensalmente MTTR, reincidencia, backlog de CAPA e status dos testes de contingencia com bancos parceiros; qualquer anomalia gera ajuste no mecanismo.",
      q_en: "How do you monitor if the mechanism stays healthy today?",
      a_en: "I review MTTR, recurrence, CAPA backlog, and partner contingency test status monthly; any anomaly triggers a mechanism tune-up." 
    }
  ]
};

export default case_5;
