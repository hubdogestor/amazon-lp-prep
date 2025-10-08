// Case 1 - customer_obsession (refined with structured transitions and mechanisms)
const case_1 = {
  id: "unimed-customer-experience",
  title: "Transformei a Jornada do Beneficiário e Levei o NPS de 28 para 58 em 12 Meses",
  title_pt: "Transformei a Jornada do Beneficiário e Levei o NPS de 28 para 58 em 12 Meses",
  title_en: "Rebuilt the Member Journey and Lifted NPS from 28 to 58 in 12 Months",
  company: "Unimed",
  period: "01/2023-12/2023",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: `"Se não virar em 12 meses, cortamos o orçamento e terceirizamos" — essa frase abriu o board de jan/2023 enquanto pousava um dossiê: NPS 28 (benchmark 60), churn 18% (benchmark 11%), 63% dos tickets rotulados "falta de transparência", 1,6M interações desperdiçadas/ano por canais contraditórios e R$ 28M de receita em risco. Jurídico já rascunhava RFP de outsourcing, três cooperativas defendiam entregar o atendimento e a diretoria médica ameaçava vetar qualquer automação (risco ANS). Se falhássemos, perderíamos controle da jornada do beneficiário e diluiríamos a cultura cooperativa. A urgência era existencial.` ,
    t: `Diante da ameaça explícita de terceirização, eu me declarei owner single-threaded e redesenhei o problema como um compromisso público de confiança com 1,6M de vidas. Estabeleci quatro outcomes não negociáveis para 12 meses: (1) NPS ≥60, (2) churn ≤11%, (3) autorização crítica ≤2 dias (baseline 4,8) e (4) elevar transparência sem expandir CAPEX. TRANSIÇÃO S→T: Ao ancorar objetivos mensuráveis + mecanismo de governança (voz bruta + métrica operacional em todo board), criei foco e legitimidade para cortar ruído político.` ,
    a: `Para entregar sem diluir ambição, executei quatro frentes sincronizadas sustentadas por um único painel de impacto e rituais de Voz do Cliente:
TRANSIÇÃO T→A (entendimento raiz): (1) Voz sem filtro — em 6 semanas conduzi 52 entrevistas (18 detratores), analisei 7.200 reclamações e reconstruí a jornada day‑one. Toquei no board o áudio de uma beneficiária 9 dias esperando autorização; resistência caiu. TRANSIÇÃO → Dor validada, ataquei o maior driver de atrito. (2) Autorização 2.0 — 71% do atraso vinha de exames classe B. Codifiquei regras médicas com o diretor (sob ameaça de veto), implementei motor automático com guardrails clínicos + task force de auditoria. Métricas: autorização média 4,8 → 1,9 dia; backlog crítico 12K → 2,1K; 42K chamadas/mês removidas. TRANSIÇÃO → Fricção crítica reduzida, foquei em resolução na primeira interação. (3) Atendimento que resolve — redesenhei call center em squads por jornada (gestante, crônicos, empresarial), treinei 480 agentes com scripts co‑criadas por beneficiários e ancorei bônus em FCR. Resultado: FCR 54% → 81%, espera 11 → 3 min, reincidência -38%. TRANSIÇÃO → Base transacional estabilizada, acelerei experiência digital + retenção corporativa. (4) Jornada digital precisa — teste com 300 clientes mostrou 67% abandono no onboarding. Lancei (12 semanas) login biométrico + onboarding progressivo. Adoção 38% → 72%, NPS app 22 → 55. Em paralelo criei concierge DNA Empresas (SLA 30 min, WhatsApp 24/7) elevando retenção 84% → 97%. Mecanismo contínuo: ritual mensal “Voz do Cliente no board” — nenhum investimento sem Customer Impact Score acoplado a métrica operacional.` ,
    r: `TRANSIÇÃO A→R: A execução disciplinada converteu ameaça existencial em vetor de crescimento. Dez/2023 entregamos: NPS 28 → 58 (+30), churn 18% → 10,9% (-7,1 p.p.), autorização 4,8 → 1,9 dia (-60%), FCR 54% → 81% (+27 p.p.), NPS digital 22 → 55 (+33), reclamações ANS -43%, MAUs app +94%. Financeiro: R$ 7,5M OPEX evitados (contatos repetidos), R$ 28M receita preservada, concierge +R$ 11M; evitamos multa projetada R$ 4M. Escala: 14 federações replicaram. Impacto humano: neutralizamos terceirização e restauramos confiança de 1,6M de beneficiários.` ,
    l: `TRANSIÇÃO R→L: O resultado consolidou mecanismos culturais permanentes. Lição: obsessão pelo cliente não é campanha; é engenharia de mecanismos — áudio real na governança, Customer Impact Score gate de aprovação, incentivos atrelados a FCR e automação com guardrails clínicos. Hoje rejeito backlog sem evidência de dor + métrica de outcome. Mic-drop: cultura muda quando dor do cliente deixa de ser storytelling ocasional e vira input estruturado obrigatório.`
  },
  en: {
    s: `"If this doesn't turn in 12 months, we cut the budget and outsource" — that line opened the Jan/2023 board while a dossier landed: NPS 28 (benchmark 60), churn 18% (benchmark 11%), 63% of tickets tagged "lack of transparency", 1.6M wasted interactions/year from contradictory channels, and BRL 28M revenue at risk. Legal was drafting an outsourcing RFP, three cooperatives pushed to hand service away, and the medical director threatened to veto any automation (ANS risk). Failure meant losing the member journey and diluting cooperative culture. The urgency was existential.` ,
    t: `Facing an explicit outsourcing threat, I declared myself single‑threaded owner and reframed the problem as a public trust commitment to 1.6M lives. I set four non‑negotiable 12‑month outcomes: (1) NPS ≥60, (2) churn ≤11%, (3) critical authorization ≤2 days (baseline 4.8), (4) transparency uplift with flat CAPEX. TRANSITION S→T: By anchoring measurable goals plus a governance mechanism (raw voice + operational metric every board), I created focus and legitimacy to cut political noise.` ,
    a: `To deliver without diluting ambition, I ran four synchronized fronts supported by one impact dashboard and Voice of Customer rituals:
TRANSITION T→A (root understanding): (1) Unfiltered voice — in 6 weeks I ran 52 interviews (18 detractors), mined 7,200 complaints, rebuilt the day‑one journey. I played a 9‑day authorization audio in the boardroom — resistance collapsed. TRANSITION → Pain validated, I attacked the largest friction driver. (2) Authorization 2.0 — 71% of delay was class‑B exams. I codified medical rules with the director (under veto threat), deployed an automated engine with clinical guardrails plus an audit task force. Metrics: average authorization 4.8 → 1.9 days; critical backlog 12K → 2.1K; 42K calls/month removed. TRANSITION → Critical friction down, I moved to first‑contact resolution. (3) Service that solves — redesigned call center into journey squads (pregnancy, chronic, enterprise), trained 480 agents with member co‑created scripts, tied incentives to FCR. Results: FCR 54% → 81%, wait 11 → 3 min, repeat contacts -38%. TRANSITION → Transactional base stable, I accelerated digital experience + corporate retention. (4) Precision digital — usability with 300 members showed 67% onboarding abandonment. Shipped (12 weeks) biometric login + progressive onboarding. Adoption 38% → 72%, app NPS 22 → 55. In parallel launched DNA Empresas concierge (30‑min SLA, 24/7 WhatsApp) lifting retention 84% → 97%. Continuous mechanism: monthly “Voice of the Customer” ritual—no investment without Customer Impact Score + paired operational metric.` ,
    r: `TRANSITION A→R: Disciplined execution converted an existential threat into a growth vector. By Dec/2023: NPS 28 → 58 (+30), churn 18% → 10.9% (-7.1 p.p.), authorization 4.8 → 1.9 days (-60%), FCR 54% → 81% (+27 p.p.), digital NPS 22 → 55 (+33), ANS complaints -43%, app MAUs +94%. Financial: BRL 7.5M OPEX avoided (repeat contacts), BRL 28M revenue preserved, concierge +BRL 11M; avoided projected BRL 4M penalty. Scale: 14 federations replicated. Human impact: we neutralized outsourcing and restored trust for 1.6M members.` ,
    l: `TRANSITION R→L: Outcomes solidified permanent cultural mechanisms. Lesson: customer obsession isn’t a campaign; it’s mechanism engineering—raw audio in governance, Customer Impact Score as approval gate, FCR‑anchored incentives, automation with clinical guardrails. Today I reject backlog without pain evidence + outcome metric. Mic drop: culture shifts when customer pain stops being occasional storytelling and becomes mandatory structured input.`
  },
  fups: [
    {
      q: "Como convenceu a diretoria médica a aceitar regras automatizadas?",
      a: "Comitê semanal, piloto duplo-cego, métricas de erro <0,5% e override manual garantido <2h para exceções.",
      q_en: "How did you convince the medical board to accept automated rules?",
      a_en: "Weekly committee, double-blind pilot, error rate <0.5%, and guaranteed manual override within 2 hours for exceptions." 
    },
    {
      q: "Quais indicadores diários eram seu painel crítico?",
      a: "FCR, tempo de espera, reincidência, backlog de autorização, NPS transacional; pico acionava plano em 24h.",
      q_en: "Which daily indicators formed your critical dashboard?",
      a_en: "FCR, wait time, repeat contacts, authorization backlog, transactional NPS; any spike triggered a 24‑hour action plan." 
    },
    {
      q: "Como calculou o impacto financeiro do churn reduzido?",
      a: "Vidas retidas x ticket médio x margem líquida - custo incremental de servir = R$ 28M/ano líquido.",
      q_en: "How did you quantify the financial impact of reduced churn?",
      a_en: "Retained lives × average ticket × net margin minus incremental cost-to-serve = BRL 28M net/year." 
    },
    {
      q: "Como mediu 'transparência' objetivamente?",
      a: "Proporção de tickets reclassificados de 'falta de transparência' + tempo médio até 1ª resposta informativa.",
      q_en: "How did you measure 'transparency' objectively?",
      a_en: "Share of tickets reclassified from 'lack of transparency' plus average time to first informative response." 
    },
    {
      q: "Qual foi a reação do board ao áudio de 9 dias?",
      a: "Silêncio, decisão imediata priorizando autorização e institucionalização do ritual mensal de áudio.",
      q_en: "What was the board's reaction to the 9‑day audio?",
      a_en: "Silence, immediate prioritization of authorization, and institutionalization of the monthly audio ritual." 
    },
    {
      q: "Como garantiu adoção do onboarding digital?",
      a: "Loop semanal A/B + review quinzenal com beta + heatmaps; drop de abandono 67% → 28% em 10 semanas.",
      q_en: "How did you ensure digital onboarding adoption?",
      a_en: "Weekly A/B loop + biweekly beta review + heatmaps; abandonment fell 67% → 28% within 10 weeks." 
    },
    {
      q: "Como evitou aumento de CAPEX mesmo automatizando?",
      a: "Priorizei refatoração e realocação: 120 backoffice → squads, 18 fluxos automatizados, ROI <12 meses como gate.",
      q_en: "How did you avoid CAPEX increase while automating?",
      a_en: "Refactoring + reallocation: 120 backoffice → squads, 18 flows automated, ROI <12 months as approval gate." 
    },
    {
      q: "O que diferencia o concierge DNA Empresas?",
      a: "Gerente dedicado, SLA 30 min, WhatsApp 24/7, acesso direto clínico; retenção 84% → 97% e NPS C-level 84.",
      q_en: "What differentiates the DNA Empresas concierge?",
      a_en: "Dedicated manager, 30‑min SLA, 24/7 WhatsApp, direct clinical access; retention 84% → 97% and C‑level NPS 84." 
    },
    {
      q: "Que mecanismo levou para outros programas depois?",
      a: "Ritual Voz do Cliente + Customer Impact Score; em telemedicina NPS 0‑7 dias +18 pontos em 3 ciclos.",
      q_en: "Which mechanism did you export elsewhere?",
      a_en: "Voice of Customer + Customer Impact Score ritual; in telemedicine day‑7 NPS +18 points in 3 cycles." 
    },
    {
      q: "Qual indicador melhor previu retenção futura?",
      a: "FCR + redução de tempo até autorização; combinação antecipou churn com 6 semanas de antecedência (AUC 0,81).",
      q_en: "Which indicator best predicted future retention?",
      a_en: "FCR plus reduction in authorization time; combo predicted churn 6 weeks early (AUC 0.81)." 
    }
  ]
};

export default case_1;
