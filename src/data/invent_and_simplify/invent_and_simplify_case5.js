const case_5 = {
  id: "sefarz-pix-reconciliation-automation",
  title: "Automacao de conciliacao PIX municipal inventada em 45 dias eliminou risco fiscal",
  title_pt: "Automacao de conciliacao PIX municipal inventada em 45 dias eliminou risco fiscal",
  title_en: "Invented PIX municipal reconciliation automation in 45 days eliminating fiscal risk",
  company: "SEFAZ RS",
  period: "08/2024-01/2025",
  isTopCase: false,
  isGoodCase: true, // Added
  pt: {
    s: `A tesouraria digital de 184 municípios estava quebrada. O Process Cycle Time da conciliação PIX era de 72 horas, o que congelava repasses federais e atrasava verbas para escolas. Isso quebrava a experiência do cliente (os municípios) e freava o flywheel do serviço público. A dor era clara: falta de confiança e velocidade, impactando diretamente a ponta.`,
    t: `Eu me posicionei como a ponte entre a dor dos municípios e a decisão de negócio. Minha missão era tomar uma decisão acionável: inventar uma automação que reduzisse o Process Cycle Time para menos de 6 horas e elevasse o Customer Satisfaction (NPS) acima de 50, sem orçamento extra. Eu precisava criar um mecanismo que restaurasse a confiança e girasse o flywheel da eficiência.`,
    a: `Eu inventei e simplifiquei. Primeiro, para ser a ponte com o negócio, criei o indicador \"hora sem lastro\", traduzindo a latência do sistema em dor do cliente. Segundo, usei meu julgamento e criei um motor de conciliação em Python com 320 regras heurísticas, uma solução não-convencional que ninguém havia tentado. Terceiro, quando o jurídico resistiu, não mostrei apenas dados; enquadrei a questão como uma decisão de negócio sobre o Custo Operacional por Transação da ineficiência, provando a acurácia de 99,1% em um piloto. A integração via API que desenhei foi a ponte final para a automação.`,
    r: `A invenção girou o flywheel. O Process Cycle Time caiu para menos de 5 horas, o NPS subiu para 61 e eliminamos 93% do retrabalho. A melhor experiência do cliente (municípios) restaurou a confiança, o que acelerou os repasses e liberou R$27M para a educação. O Custo Operacional por Transação foi reduzido ao evitar R$4,6M em multas. O mecanismo foi reconhecido por 146 prefeitos.`,
    l: `Aprendi que para inovar e simplificar no setor público, é preciso ser a ponte que transforma a dor do cliente em uma decisão de negócio acionável. O indicador \"hora sem lastro\" virou meu mecanismo para justificar tecnologia de alto impacto. Hoje, em pagamentos, uso a mesma lógica: meço a \"hora sem lastro\" para adquirentes para justificar investimentos em automação que melhoram nosso Payment Success Rate (PSR) e a experiência do lojista, provando que a simplicidade gera valor real.`
  },
  en: {
    s: `The digital treasury of 184 municipalities was broken. The PIX reconciliation Process Cycle Time was 72 hours, which froze federal transfers and delayed funds for schools. This was breaking the customer experience (the municipalities) and stalling the public service flywheel. The pain was clear: a lack of trust and speed, directly impacting the end-users.`,
    t: `I positioned myself as the bridge between the municipalities\' pain and the business decision. My mission was to make an actionable decision: invent an automation that would reduce the Process Cycle Time to under 6 hours and raise Customer Satisfaction (NPS) above 50, with no extra budget. I needed to create a mechanism that would restore trust and spin the efficiency flywheel.`,
    a: `I invented and simplified. First, to be the bridge to the business, I created the \"hours without backing\" indicator, translating system latency into customer pain. Second, I used my judgment and built a reconciliation engine in Python with 320 heuristic rules, an unconventional solution no one had tried. Third, when legal resisted, I didn\'t just show data; I framed it as a business decision about the Operational Cost per Transaction of inefficiency, proving 99.1% accuracy in a pilot. The API integration I designed was the final bridge to automation.`,
    r: `The invention spun the flywheel. The Process Cycle Time dropped to under 5 hours, the NPS rose to 61, and we eliminated 93% of rework. The better customer experience (municipalities) restored trust, which accelerated transfers and freed up R$27M for education. The Operational Cost per Transaction was reduced by avoiding R$4.6M in fines. The mechanism was recognized by 146 mayors.`,
    l: `I learned that to innovate and simplify in the public sector, you need to be the bridge that turns customer pain into an actionable business decision. The \"hours without backing\" indicator became my mechanism to justify high-impact tech. Today, in payments, I use the same logic: I measure \"hours without backing\" for acquirers to justify investments in automation that improve our Payment Success Rate (PSR) and the merchant experience, proving that simplicity generates real value.`
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
