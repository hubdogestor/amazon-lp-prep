// Case 5 - invent_and_simplify
const case_5 = {
  id: "sefarz-pix-reconciliation-automation",
  title: "Automacao de conciliacao PIX municipal inventada em 45 dias eliminou risco fiscal",
  title_pt: "Automacao de conciliacao PIX municipal inventada em 45 dias eliminou risco fiscal",
  title_en: "Invented PIX municipal reconciliation automation in 45 days eliminating fiscal risk",
  company: "SEFAZ RS",
  period: "08/2024-01/2025",
  isTopCase: false,
  pt: {
    s: "O desafio começou quando eu assumi a tesouraria digital quando 184 municipios clientes estavam perdendo rastreabilidade de recebiveis PIX. O tempo medio de conciliacao era 72 horas, o NPS dos tesoureiros caiu de 54 para 18 e o atraso bloqueava repasses federais de R$ 38M por mes. Prefeitos reclamavam diretamente comigo porque havia 5.400 atendimentos sem resposta e 37% das escolas ficavam sem verba no quinto dia util. Eu enxerguei que nenhuma ferramenta de mercado resolvia—a complexidade do SIAFEM municipal exigia solucao criativa e nao-convencional. Mantendo olhar externo, eu passei tres dias em campo ouvindo secretarios de educacao e clientes contadores; a dor era clara: ninguem confiava no extrato do estado porque levava dias para fechar.",
    t: "Eu me declarei owner unico e defini meta publica: inventar automacao de conciliacao sem orcamento adicional, entregando em menos de 6 horas para 80% dos municipios ate janeiro de 2024, elevar o NPS acima de 50 e reduzir retrabalho contabel em 60%. Eu comuniquei pessoalmente a cada prefeito-cliente que enviaria um relatorio diario assinado por mim com o status dos creditos.",
    a: "Primeiro, eu mapeei o fluxo ponta a ponta em 48 horas, identifiquei 19 planilhas paralelas e medi que 52% do tempo era gasto refazendo lancamentos. Eu criei o indicador criativo \"hora sem lastro\" para mostrar ao cliente municipal quantas horas o caixa ficava sem confirmacao e publiquei ranking diario. Segundo, eu usei tecnologia de forma nao-convencional: desenvolvi um motor de conciliacao em Python com 320 regras heuristicas que eu mesmo escrevi (70% das regras criticas), regroupando transacoes por municipio, carteira e hora. Eu conectei o motor ao SIAFEM via API que eu proprio desenhei—uma integracao que ninguem tinha feito antes—e gerei dashboards de cliente com previsao por minuto. Terceiro, enfrentei resistencia da area juridica que nao queria conciliar automaticamente valores acima de R$ 200 mil; para provar confianca eu pivotei e rodei piloto em 12 municipios, comparei com conciliacao manual e mostrei 99,1% de acuracia. Para blindar risco de fraude, implementei limites dinamicos, KPIs de satisfacao do cliente e criei trilha de auditoria que marca cada override com meu login. Tambem negociei com Banco Central para receber webhooks a cada 15 minutos, argumento que eu construi usando dados de sonegacao evitada e entrevistas com 30 tesoureiros clientes.",
    r: "Em 60 dias eu reduzi o tempo medio de conciliacao para 4h55 em 82% dos municipios e eliminei 93% dos reprocessamentos. O NPS dos clientes municipais subiu de 18 para 61, os repasses federais passaram a chegar em dois dias uteis evitando multas de R$ 4,6M e liberando R$ 27M para educacao antes do prazo legal. O indicador de hora sem lastro caiu 88% e as escolas voltaram a receber verba no quinto dia util. O sistema gerou log completo que sustentou auditoria do TCE sem apontamentos e recebeu carta de reconhecimento de 146 prefeitos.",
    l: "Aprendi que inventar solucoes simples no setor publico exige criatividade tecnica (usar Python + SIAFEM de forma nao-convencional), assumir a linha de frente com clientes e pivotar quando ha resistencia (piloto de 12 cidades). Quando eu coloco a dor municipal em metricas claras de experiencia e de caixa, consigo derrubar resistencia juridica e TI. Hoje eu aplico o mesmo mecanismo no mundo de pagamentos: medir hora sem lastro para adquirentes, acompanhar NPS de lojistas e automatizar conciliacao com trilha de auditoria em tempo real."
  },
  en: {
    s: "The challenge began when i took over the digital treasury when 184 municipal customers were losing PIX receivable traceability. Average reconciliation time hit 72 hours, treasurer NPS plunged from 54 to 18, and the delay froze R$ 38M per month in federal transfers. Mayors complained to me directly because 5,400 support tickets had no answer and 37% of schools missed funding by the fifth business day. I saw no off-the-shelf tool solved it—SIAFEM municipal complexity demanded a creative, unconventional solution. Keeping an external lens, I spent three days onsite with education secretaries and accounting customers; the pain was clear: nobody trusted the state's statement because it took days to close.",
    t: "I declared myself single owner and set a public target: invent reconciliation automation without extra budget, delivering under six hours for 80% of municipalities by Jan 2024, lift NPS above 50, and cut accounting rework by 60%. I personally told every mayor-customer I would send a daily report signed by me with the credit status.",
    a: "First, I mapped the end-to-end flow in 48 hours, spotted 19 parallel spreadsheets, and measured that 52% of time was spent re-entering postings. I created the creative \"hours without backing\" indicator to show each municipal client how long cash stayed unconfirmed and published a daily ranking. Second, I used technology in an unconventional way: I built a reconciliation engine in Python with 320 heuristic rules that I personally coded (70% of critical rules), regrouping transactions by municipality, wallet, and hour. I linked the engine to SIAFEM through an API I designed myself—an integration nobody had done before—and produced customer dashboards with minute-by-minute forecasts. Third, I faced legal resistance against auto-reconciling amounts above R$ 200k; to prove reliability I pivoted and ran a pilot in 12 municipalities, compared it to manual reconciliation, and showed 99.1% accuracy. To shield against fraud I implemented dynamic limits, customer satisfaction KPIs, and an audit trail tagging every override with my login. I also negotiated with the Central Bank to receive webhooks every 15 minutes, using tax-evasion data and 30 treasurer interviews I personally compiled.",
    r: "Within 60 days I cut average reconciliation time to 4h55 across 82% of municipalities and eliminated 93% of reprocessing. Municipal-customer NPS rose from 18 to 61, federal transfers started landing within two business days preventing R$ 4.6M in fines, and R$ 27M reached education ahead of the legal deadline. The hours-without-backing indicator dropped 88% and schools resumed receiving funds by the fifth business day. The system produced full logs that passed the state audit with zero findings and earned recognition letters from 146 mayors.",
    l: "I learned that inventing simple solutions in the public sector demands technical creativity (using Python + SIAFEM unconventionally), standing on the frontline with customers, and pivoting when facing resistance (12-city pilot). When I translate municipal pain into clear experience and cash metrics, I can break legal and IT resistance. I now apply the same mechanism in payments: measure hours without backing for acquirers, track merchant NPS, and automate reconciliation with real-time audit trails."
  },
  fups: [
    {
      q: "Como voce ouviu a voz do cliente municipal?",
      a: "Eu visitei dez cidades em uma semana, fiz entrevistas com secretarios, prefeitos e contadores e converti as dores em historias de usuario priorizadas por risco fiscal.",
      q_en: "How did you capture the municipal customer's voice?",
      a_en: "I visited ten cities in a week, interviewed secretaries, mayors, and accountants, and turned their pains into user stories prioritized by fiscal risk."
    },
    {
      q: "Que conflito juridico voce enfrentou?",
      a: "A procuradoria queria manter aprovacao manual acima de R$ 200 mil; eu provei com piloto de 12 cidades que o erro seria menor que 1% e assumi responsabilidade pessoal pelas excecoes.",
      q_en: "What legal conflict did you face?",
      a_en: "The attorney's office wanted manual approval above R$ 200k; I proved with a 12-city pilot that error would stay below 1% and took personal responsibility for exceptions."
    },
    {
      q: "Quais metricas de cliente voce usou?",
      a: "Eu acompanhei NPS, horas sem lastro, tempo de resposta da central e share de municipios com conciliacao em 6 horas, enviando boletim diario.",
      q_en: "Which customer metrics did you use?",
      a_en: "I tracked NPS, hours without backing, contact-center response time, and share of municipalities reconciled within six hours, sending a daily bulletin."
    },
    {
      q: "Como voce garantiu confianca dos prefeitos?",
      a: "Eu mandatei relatorios diarios assinados por mim, participei de lives semanais com 60 prefeitos e abri canal direto de WhatsApp para escalacao.",
      q_en: "How did you build trust with mayors?",
      a_en: "I delivered daily reports signed by me, joined weekly livestreams with 60 mayors, and opened a direct WhatsApp escalation channel."
    },
    {
      q: "Que recurso tecnico foi essencial?",
      a: "O motor de regras em Python com 320 heuristicas e conciliacao incremental em memoria; eu mesmo escrevi 70% das regras criticas.",
      q_en: "Which technical asset was essential?",
      a_en: "The Python rule engine with 320 heuristics and in-memory incremental reconciliation; I personally wrote 70% of the critical rules."
    },
    {
      q: "Como voce evitou fraude?",
      a: "Eu criei trilha de auditoria com hash, limites dinamicos por municipio e alertas que me notificavam toda vez que algum override passava de R$ 50 mil.",
      q_en: "How did you avoid fraud?",
      a_en: "I built a hashed audit trail, set dynamic limits per municipality, and configured alerts that pinged me whenever an override exceeded R$ 50k."
    },
    {
      q: "Qual impacto financeiro comprovado?",
      a: "Economia de R$ 4,6M em multas evitadas, liberacao de R$ 27M para educacao e reducao de 22% nas taxas bancarias negociadas com base na previsibilidade.",
      q_en: "What financial impact did you prove?",
      a_en: "We avoided R$ 4.6M in fines, freed R$ 27M for education, and negotiated a 22% cut in banking fees based on the new predictability."
    },
    {
      q: "Como voce manteve ratio EU:NOS elevado?",
      a: "Eu assinei cada release, conduzi as reunioes com Banco Central e deixei claro que as decisoes criticas eram minhas na ata publica.",
      q_en: "How did you sustain a high I:we ratio?",
      a_en: "I signed each release, led the Central Bank meetings, and made it explicit in the public minutes that I owned the critical decisions."
    },
    {
      q: "Qual proximo passo para escalar o mecanismo?",
      a: "Eu ja estou conectando o motor a arrecadacao de ISS digital para reduzir conciliacao de 48h para 2h nos grandes municipios.",
      q_en: "What is the next step to scale the mechanism?",
      a_en: "I'm connecting the engine to digital service-tax collection to cut reconciliation from 48h to 2h in large cities."
    },
    {
      q: "Como isso volta para pagamentos privados?",
      a: "Eu aplico a mesma arquitetura para adquirentes, combinando webhooks e heuristicas para reconciliar carteiras em minutos e liberar working capital antes.",
      q_en: "How does this translate to private payments?",
      a_en: "I apply the same architecture to acquirers, blending webhooks and heuristics to reconcile wallets within minutes and release working capital earlier."
    }
  ]
};

export default case_5;
