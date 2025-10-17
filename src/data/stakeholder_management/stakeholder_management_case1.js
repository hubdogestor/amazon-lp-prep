// Case 1 - think_big
const case_1 = {
  id: "huawei-global-rollout",
  title: "Transformação do Modelo de Rollout Global na Huawei",
  title_pt: "Transformação do Modelo de Rollout no Brasil que foi Adotado Globalmente pela Huawei",
  title_en: "Global Rollout Model Transformation at Huawei - From Brazil to Worldwide Standard",
  company: "Huawei",
  period: "01/2012--06/2023",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: "O desafio começou quando situação — Em 2012, eu recebi a missão de normalizar o rollout de sites 4G da Huawei no Brasil. O SLA era de 382 dias por site, 4x pior que a meta global, e os diretores locais estavam conformados em buscar apenas um ajuste marginal de 10%. Esse pensamento pequeno condenaria a operação brasileira a atrasar o lançamento de R$1,9B em receitas contratadas e, pior, mantinha 14 países presos a soluções manuais semelhantes.",
    t: "Tarefa — Oficialmente, eu deveria entregar um plano incremental para o Brasil. Eu me auto-impus um desafio maior: redesenhar um motor de rollout replicável globalmente que reduzisse o prazo em 70% e criasse novos mecanismos de governança que qualquer região pudesse operar. Para conseguir aprovação, eu precisava provar que o Brasil podia ser laboratório de uma transformação mundial sem comprometer compliance regulatório e margem.",
    a: "Ação — Eu atuei como owner único ao longo de 18 meses. Primeiro, estruturei um piloto agressivo em São Paulo, mapeando 127 gargalos e priorizando 19 alavancas que somavam 220 dias de desperdício. Para vencer o ceticismo do VP LatAm (que pediu \"foco local\"), eu construí um business case que mostrava R$480M de valor presente líquido se o modelo virasse padrão global. Em seguida, criei o Rollout Excellence Playbook (52 páginas) com módulos universais e checklists de localização por país. Para acelerar execução, implantei o Vendor Performance Index: fornecedores com eficiência >95% recebiam 30% mais volume; os que ficavam abaixo tinham coaching forçado. Para sustentar visibilidade, codifiquei o war room global com dashboards diários (Power BI + SMS) que enviavam alertas quando um site ficava 12 horas fora do plano. Quando o CFO Ásia resistiu a congelar US$6M para replicação, eu trouxe um case comparativo: mostrei que cada mês de atraso em território norte-americano custaria US$18M em atraso de revenue recognition. O argumento econômico derrubou a objeção.",
    r: "Resultado — No Brasil, o lead time caiu de 382 para 62 dias (-84%), liberando 1.136 sites em 2014 e antecipando R$1,1B em receita. O modelo provou escalabilidade: em 2015-2016 foi implantado em 12 países e, após minha apresentação no Global PMO Summit de 2017, virou padrão em 54 operações. Em 2023, a controladoria confirmou que o mecanismo continua ativo: média global de rollout estabilizada em 58 dias, saving acumulado de US$120M (US$80M em revenue antecipado, US$25M em renegociação com fornecedores, US$15M em rework evitado). O Net Promoter interno com operadoras subiu de 41 para 68 e o índice de SLA crítico (<72h para correção de falhas) saltou de 42% para 91%.",
    l: "Lição — Pensar grande significou desenhar mecanismos globais desde o primeiro piloto, não apenas um remendo local. Aprendi que toda vez que eu recuso soluções \"pequenas\" e conecto uma dor específica a um sistema escalável, eu multiplico impacto e crio padrões que sobrevivem à minha presença. Hoje, toda transformação que lidero começa perguntando: \"qual versão global e duradoura dessa solução eu posso construir já no MVP?\"."
  },
  en: {
    s: "The challenge began when situation — In 2012 I was tasked with normalizing Huawei's 4G rollout in Brazil. SLA sat at 382 days per site, 4x worse than the global goal, and local directors were satisfied with a modest 10% improvement. That small thinking would postpone BRL 1.9B in contracted revenue and keep 14 countries locked into similar manual bottlenecks.",
    t: "Task — Officially I was supposed to deliver an incremental fix for Brazil. I set a larger self-imposed mission: design a rollout engine that any region could reuse, cutting cycle time by 70% while protecting compliance and margin. To earn approval I needed to prove Brazil could be the laboratory for a worldwide transformation without breaking regulatory constraints.",
    a: "Action — I acted as the single-threaded owner for 18 months. First, I structured an aggressive pilot in São Paulo, mapping 127 bottlenecks and prioritizing 19 levers worth 220 wasted days. To overcome the LatAm VP's pushback (“stay local”), I built a business case showing BRL 480M net present value if the model became global standard. Next, I authored the 52-page Rollout Excellence Playbook with universal modules and localization checklists per country. I launched the Vendor Performance Index: partners above 95% efficiency got 30% more volume while laggards received mandatory coaching. To sustain visibility I coded a global war room with daily dashboards (Power BI + SMS alerts) flagging any site that slipped 12 hours. When the Asia CFO refused to freeze US$6M for replication, I showed that every month of delay in the US meant US$18M in deferred revenue; the economic gap broke the objection.",
    r: "Result — In Brazil the lead time fell from 382 to 62 days (-84%), unlocking 1,136 sites in 2014 and accelerating BRL 1.1B in revenue. The model proved scalable: in 2015-2016 it landed in 12 countries and, after my pitch at the 2017 Global PMO Summit, it became the standard in 54 operations. In 2023 controllership confirmed the mechanism still runs: global rollout now averages 58 days, with US$120M cumulative savings (US$80M accelerated revenue, US$25M supplier renegotiation, US$15M rework avoided). Internal NPS with carriers jumped from 41 to 68 and the critical SLA (<72h to fix defects) rose from 42% to 91%.",
    l: "Learning — Thinking big meant architecting global mechanisms from the very first pilot, not a local patch. I learned that every time I refuse \"small\" fixes and link a specific pain to a scalable system, I multiply impact and create standards that outlive me. Today every transformation I lead begins with the question: “what is the global, durable version of this solution that I can build right in the MVP?”"
  },
  fups: [
    // --- 6 PERGUNTAS OBRIGATÓRIAS ---
    {
      q: "Qual foi seu maior erro ou falha neste caso?",
      a: "Subestimei a resistência política inicial dos diretores locais que estavam confortáveis com metas incrementais. Perdi 6 semanas convencendo quando deveria ter envolvido o VP Global desde o início para criar pressão top-down. Isso atrasou o piloto e quase comprometeu o business case.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "I underestimated initial political resistance from local directors comfortable with incremental goals. Lost 6 weeks convincing when I should have involved Global VP early to create top-down pressure. This delayed pilot and nearly compromised business case."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Construiria coalizão executiva global desde o dia 1, não após o piloto. Envolveria CFO, VP Global e leads de 3 regiões-chave no workshop inicial de design, criando ownership compartilhado e acelerando aprovação de CAPEX em pelo menos 2 meses.",
      q_en: "What would you do differently today?",
      a_en: "Would build global executive coalition from day 1, not after pilot. Would involve CFO, Global VP and leads from 3 key regions in initial design workshop, creating shared ownership and accelerating CAPEX approval by at least 2 months."
    },
    {
      q: "Qual foi o obstáculo mais difícil de superar?",
      a: "Convencer o CFO Ásia a congelar US$6M para replicação quando ele priorizava 5G. Precisei apresentar análise de sensibilidade mostrando US$18M/mês de receita perdida em atraso 4G e trazer testemunho do CEO LatAm sobre perda de market share. Levou 3 semanas de negociação intensa.",
      q_en: "What was the hardest obstacle to overcome?",
      a_en: "Convincing Asia CFO to freeze US$6M for replication when he prioritized 5G. Had to present sensitivity analysis showing US$18M/month revenue loss from 4G delays and bring LatAm CEO testimony on market share loss. Took 3 weeks of intense negotiation."
    },
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "1) Congelamento de 48 projetos críticos: criei buffers contratuais com operadoras; 2) Sobrecarga de CAPEX: estruturei co-investimento 40/60 com regiões; 3) Resistência dos fornecedores: lancei Vendor Performance Index com incentivo econômico (+30% volume para top performers); 4) Perda de compliance: matriz de 86 requisitos regulatórios com trilha de auditoria digital.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "1) Freezing 48 critical projects: created contractual buffers with carriers; 2) CAPEX overload: structured 40/60 co-investment with regions; 3) Vendor pushback: launched Vendor Performance Index with economic incentive (+30% volume for top); 4) Compliance loss: 86-requirement regulatory matrix with digital audit trail."
    },
    {
      q: "Que dados você usou e qual foi a racional de cálculo?",
      a: "Mapeei 127 gargalos no piloto São Paulo e priorizei 19 alavancas que somavam 220 dias de desperdício. Comparei 12 indicadores before/after (lead time, aprovação 1ª inspeção, custo/torre, backlog licenças, NPS operadora). Calculei NPV de BRL 480M para rollout global vs local, com payback de 11 meses. ROI final: US$120M acumulado (2014-2023).",
      q_en: "What data did you use and what was your calculation rationale?",
      a_en: "Mapped 127 bottlenecks in São Paulo pilot and prioritized 19 levers worth 220 wasted days. Compared 12 before/after indicators (lead time, first-pass approval, cost/tower, license backlog, carrier NPS). Calculated BRL 480M NPV for global vs local rollout, 11-month payback. Final ROI: US$120M cumulative (2014-2023)."
    },
    {
      q: "Como você usou o aprendizado deste caso em outros contextos?",
      a: "O Rollout Excellence Playbook virou padrão em 54 operações Huawei globalmente. Repliquei a lógica de co-investimento regional em 3 programas de transformação digital (pagamentos, CRM, supply chain), sempre ancorando sustentabilidade em auditorias semestrais + comunidade de práticas. Redução média de cycle time de 40% nesses programas.",
      q_en: "How did you use the learning from this case in other contexts?",
      a_en: "Rollout Excellence Playbook became standard across 54 Huawei operations globally. Replicated regional co-investment logic in 3 digital transformation programs (payments, CRM, supply chain), always anchoring sustainability in semiannual audits + community of practice. Average 40% cycle time reduction in those programs."
    },
    // --- FUPs COMPLEMENTARES ---
    {
      q: "Como você enfrentou o argumento do VP LatAm para manter o escopo apenas no Brasil?",
      a: "Eu mostrei o custo de oportunidade: projetei cenário em que o Brasil evoluiria sozinho e contrastei com rollout coordenado. O case evidenciou BRL 480M em valor adicional e reduziu o payback global para 11 meses, desmontando a tese de foco local.",
      q_en: "How did you challenge the LatAm VP's request to stay local?",
      a_en: "I exposed the opportunity cost: modeled Brazil evolving alone versus coordinated rollout. The case showed BRL 480M additional value and cut global payback to 11 months, dismantling the “stay local” argument."
    },
    {
      q: "Quais métricas você usou para provar que o piloto paulista era exportável?",
      a: "Eu comparei 12 indicadores base antes/depois: lead time diário, % de sites aprovados na primeira inspeção, custo por torre, backlog de licenças municipais e satisfação da operadora. Exportabilidade veio quando 10 desses 12 itens ficaram acima dos benchmarks globais.",
      q_en: "Which metrics did you use to prove the São Paulo pilot was exportable?",
      a_en: "I compared 12 before/after indicators: daily lead time, first-pass approval rate, cost per tower, municipal license backlog, and carrier satisfaction. Once 10 of those 12 beat global benchmarks, I documented it as export-ready."
    },
    {
      q: "Como o Vendor Performance Index mudou o comportamento dos fornecedores?",
      a: "Eu publiquei rankings semanais e atrelei 30% do volume às notas. Fornecedores que saltaram de 82% para >95% ganharam contratos extras de R$18M e quem ficou abaixo de 90% perdeu prioridade. O incentivo econômico transformou a relação em parceria estratégica.",
      q_en: "How did the Vendor Performance Index shift supplier behavior?",
      a_en: "I published weekly rankings and tied 30% of volume to the scores. Vendors jumping from 82% to >95% received R$18M extra in contracts, while those under 90% lost priority. The economic signal reframed the relationship into a strategic partnership."
    },
    {
      q: "Que mecanismos garantiram sustentabilidade do playbook após 2023?",
      a: "Eu ancorei o playbook em auditorias semestrais conduzidas pela controladoria e numa comunidade global de práticas com OKRs próprios. Em 2023, 87% das filiais mantiveram score >4,5/5 nessas auditorias, comprovando aderência contínua.",
      q_en: "Which mechanisms kept the playbook alive after 2023?",
      a_en: "I tied the playbook to semiannual audits led by controllership and a global community of practice with dedicated OKRs. In 2023, 87% of subsidiaries stayed above 4.5/5, proving sustained adoption."
    },
    {
      q: "Como você protegeu a iniciativa diante do risco de sobrecarga de CAPEX?",
      a: "Eu criei um modelo de co-investimento: regiões aportavam 40% do CAPEX e a matriz financiava 60% condicionado a metas de adoção. Esse mecanismo liberou US$6M sem estourar orçamento local e garantiu comprometimento das filiais.",
      q_en: "How did you shield the initiative from CAPEX overload risk?",
      a_en: "I structured co-investment: regions funded 40% of CAPEX and HQ matched 60% contingent on adoption targets. It released US$6M without breaking local budgets and locked in subsidiary commitment."
    },
    {
      q: "Que tipo de conflito você teve com o CFO Ásia e como venceu?",
      a: "Ele bloqueou o CAPEX de replicação alegando prioridade 5G. Eu rodei análise de sensibilidade mostrando que atrasar rollout 4G em mercados maduros custaria US$18M/mês em receita. Também trouxe depoimento do CEO LatAm relatando perda de market share. O CFO liberou verba em 48h.",
      q_en: "What conflict did you face with the Asia CFO and how did you win it?",
      a_en: "He froze replication CAPEX citing 5G priorities. I ran sensitivity showing each month of 4G delay in mature markets burned US$18M revenue, plus a testimonial from the LatAm CEO about market share loss. He released the funds within 48 hours."
    },
    {
      q: "Como você garantiu compliance simultâneo em 14 países diferentes?",
      a: "Eu criei uma matriz de 86 requisitos regulatórios por região, contratei escritórios locais por sprint crítica e estabeleci trilha de auditoria digital assinada pelo jurídico. Resultado: zero não conformidades nas inspeções de 2014-2023.",
      q_en: "How did you ensure compliance across 14 different countries?",
      a_en: "I built a grid with 86 regulatory requirements per region, hired local firms for each critical sprint, and enforced a digital audit trail signed by legal. Result: zero non-compliances in the 2014-2023 inspections."
    },
    {
      q: "De que forma você mensurou o impacto para as operadoras cliente?",
      a: "Eu coletei NPS trimestral com cinco operadoras âncoras e medi três métricas: tempo até ativação comercial, incidência de retrabalho e disponibilidade média no primeiro mês. As melhorias (NPS +27, retrabalho -61%, disponibilidade +9pp) entraram no dashboard executivo.",
      q_en: "How did you measure impact for carrier customers?",
      a_en: "I ran quarterly NPS with five anchor carriers and tracked time-to-commercial activation, rework incidents, and first-month availability. Improvements (NPS +27, rework -61%, availability +9pp) fed the executive dashboard."
    },
    {
      q: "Como você preparou a sucessão para que o modelo continuasse sem você?",
      a: "Eu formei quatro líderes regionais, cada um com OKR de replicar o playbook em dois novos países por semestre. Também criei academy virtual com 12 módulos microlearning. Mesmo após minha saída em 2018, a cadência de rollout seguiu dentro do target de 60 dias.",
      q_en: "How did you prepare succession so the model kept running without you?",
      a_en: "I trained four regional leads, each with an OKR to replicate the playbook in two new countries per semester. I also launched a 12-module microlearning academy. After I left in 2018, rollout cadence stayed within the 60-day target."
    },
    {
      q: "Qual foi o maior risco que você assumiu e como mitigou?",
      a: "Eu pautei o congelamento temporário de 48 projetos críticos para redesenhar fluxos, o que poderia atrasar receitas. Para mitigar, criei buffers contratuais com as operadoras e garanti que qualquer atraso acima de 7 dias geraria crédito automático. Nenhuma multa foi aplicada.",
      q_en: "What was the biggest risk you took and how did you mitigate it?",
      a_en: "I froze 48 critical projects to redesign flows, risking revenue delays. To mitigate I negotiated contractual buffers with carriers and ensured any delay beyond 7 days triggered automatic credits. No penalties were applied."
    }
  ]
};

export default case_1;

