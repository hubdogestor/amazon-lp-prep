const bias_for_action = {
  principle: {
    title: "Ter Iniciativa",
    title_en: "Bias for Action",
    description: "Velocidade importa nos negócios. Muitas decisões e ações são reversíveis e não precisam de estudos extensos. Valorizamos a tomada de riscos calculados.",
    description_en: "Speed matters in business. Many decisions and actions are reversible and do not need extensive study. We value calculated risk taking.",
    icon: ""
  },
  "id": "bias_for_action",
  "name": "Ter iniciativa",
  "cases": [
    {
      "title": "Dashboard Executivo em 10 dias (PMO CAGE)",
      "pt": {
        "s": "No lançamento do portal do PMO da CAGE, a Diretiva precisava visualizar em poucos dias o status do portfólio para uma reunião com o Secretário. As fontes de dados estavam dispersas (planilhas, e-mails, Project, PSA) e não havia um dashboard executivo consolidado.",
        "t": "Minha missão era: Entregar um MVP funcional do painel executivo em 10 dias, ainda que com escopo reduzido, para suportar a decisão estratégica e padronizar o rito mensal de acompanhamento.",
        "a": "Eu adotei um recorte de 12 projetos críticos, criei um esquema de dados mínimo viável e conectei as fontes via Power BI e SharePoint. Usei feature flags para liberar o módulo de riscos depois e estabeleci um 'ritual de dados' diário (cut-off às 18h). Documentei limitações e próximos incrementos.",
        "r": "O dashboard ficou pronto em 8 dias, suportou a reunião e virou padrão mensal. O tempo de preparação dos GPs para reuniões executivas caiu 60%, e a Diretiva passou a tomar decisões baseadas em um quadro único e confiável. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que iniciativa eficaz é sobre otimizar valor/tempo: destravar decisões com um MVP bem recortado, sem esperar a 'perfeição'. A clareza sobre o que entra agora e o que fica para a próxima sprint garante confiança e ritmo. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "For the SEFAZ PMO portal launch, leadership needed a consolidated portfolio view within days for a meeting with the Secretary. Data sources were scattered (spreadsheets, emails, Project, PSA) and there was no executive dashboard.",
        "t": "Deliver a functional MVP of the executive dashboard in 10 days, with a reduced scope, to support decision-making and standardize the monthly review ritual.",
        "a": "I narrowed the scope to 12 critical projects, defined a minimal data schema, and wired sources via Power BI and SharePoint. I used feature flags to enable the risk module later and set a daily 'data ritual' (cut-off at 6pm). I documented limitations and the next increments.",
        "r": "The dashboard was ready in 8 days, supported the meeting, and became the monthly standard. PMs’ preparation time dropped 60%, and leadership shifted to decisions based on a single, trusted view.",
        "l": "Bias for action is optimizing value/time: unblocking decisions with a well-scoped MVP, not waiting for perfection. Clarity on what ships now vs. next sprint creates trust and cadence."
      },
      "fup": [
        {
          "q": "Como você definiu o escopo mínimo viável sem frustrar stakeholders?",
          "a": "Mostrei um mapa 'Now / Next / Later' e garanti que as métricas essenciais (cronograma, % concluído, riscos críticos) estariam no Now.",
          "q_en": "How did you define the minimum viable scope without frustrating stakeholders?",
          "a_en": "I showed a 'Now / Next / Later' roadmap and ensured that essential metrics (timeline, % completed, critical risks) would be in the Now."
        },
        {
          "q": "Qual foi o maior atalho técnico que você assumiu e como mitigou a dívida?",
          "a": "Importação manual de uma planilha legado. Cataloguei como 'tech debt P2' com owner e prazo de automação na sprint seguinte.",
          "q_en": "What was the biggest technical shortcut you took and how did you mitigate the debt?",
          "a_en": "Manual import from a legacy spreadsheet. I catalogued it as 'tech debt P2' with owner and automation deadline for the following sprint."
        },
        {
          "q": "Que métrica provou que o MVP gerou valor imediato?",
          "a": "Tempo de preparação dos GPs para a reunião caiu 60% e o número de versões de planilhas trocadas por e-mail caiu a zero.",
          "q_en": "What metric proved that the MVP generated immediate value?",
          "a_en": "PMs' meeting preparation time dropped 60% and the number of spreadsheet versions exchanged by email dropped to zero."
        },
        {
          "q": "Houve algum erro por agir rápido? Como lidou?",
          "a": "Uma métrica de riscos veio atrasada no primeiro corte. Assumi na reunião, expliquei a limitação e publiquei hotfix no dia seguinte.",
          "q_en": "Was there any error from acting fast? How did you handle it?",
          "a_en": "A risk metric was delayed in the first cut. I owned it in the meeting, explained the limitation, and published a hotfix the next day."
        },
        {
          "q": "Como evitou que o MVP virasse definitivo sem refinamentos?",
          "a": "Criei um roadmap público com datas e check-ins quinzenais; o MVP tinha 'banner' de versão para deixar claro o status.",
          "q_en": "How did you prevent the MVP from becoming permanent without refinements?",
          "a_en": "I created a public roadmap with dates and bi-weekly check-ins; the MVP had a version 'banner' to make the status clear."
        },
        {
          "q": "Como priorizou as 12 iniciativas críticas?",
          "a": "Critérios: impacto fiscal, dependências regulatórias e risco de prazo. Fiz scoring rápido com os sponsors.",
          "q_en": "How did you prioritize the 12 critical initiatives?",
          "a_en": "Criteria: fiscal impact, regulatory dependencies, and timeline risk. I did quick scoring with sponsors."
        },
        {
          "q": "Qual foi o aprendizado para próximos lançamentos rápidos?",
          "a": "Definir upfront 'cut-off' diário e contrato de dados com os times evita discussões de última hora.",
          "q_en": "What was the learning for future fast launches?",
          "a_en": "Defining upfront daily 'cut-off' and data contracts with teams avoids last-minute discussions."
        },
        {
          "q": "Como alinhou expectativas com a Diretiva sob pressão de tempo?",
          "a": "Usei uma prévia clicável em 48h para alinhar expectativas e evitar surpresas no dia 10.",
          "q_en": "How did you align expectations with leadership under time pressure?",
          "a_en": "I used a clickable preview in 48h to align expectations and avoid surprises on day 10."
        },
        {
          "q": "Que riscos você aceitou conscientemente?",
          "a": "Não implementei drill-down de tarefas; aceitei usar apenas nível de macroentregas para manter o prazo.",
          "q_en": "What risks did you consciously accept?",
          "a_en": "I didn't implement task drill-down; I accepted using only milestone level to meet the deadline."
        },
        {
          "q": "Se tivesse 2 dias a mais, o que incluiria?",
          "a": "O módulo de riscos com thresholds e semáforos de tendência.",
          "q_en": "If you had 2 more days, what would you include?",
          "a_en": "The risk module with thresholds and trend indicators."
        }
      ]
    },
    {
      "title": "Fast Track de Aprovação no Onboarding (Woop Sicredi)",
      "pt": {
        "s": "No Woop Sicredi, a abertura de conta sofria com um gargalo de aprovação manual que atrasava o onboarding em picos de demanda.",
        "t": "Minha missão era: Reduzir o tempo de aprovação para menos de 5 minutos nos horários de pico, sem elevar o risco de fraude.",
        "a": "Implementei um 'fast track' com regras de aprovação automática baseadas em score de risco, OCR e biometria. Criei rollback seguro e monitoração de falsos positivos. Lançamos em 'dark release' para 5% da base e expandimos em 72 horas.",
        "r": "Tempo médio de aprovação caiu para 2min40s nos picos; nenhuma perda material por fraude; CSAT no onboarding subiu 0,5.",
        "l": "Aprendi que iniciativa não é imprudência: é criar alavancas reversíveis, medir de perto e expandir o que funciona. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "At Woop Sicredi, account opening faced a manual approval bottleneck during demand peaks.",
        "t": "Reduce approval time to under 5 minutes at peak hours without increasing fraud risk.",
        "a": "I implemented a fast track with auto-approval rules based on risk score, OCR, and biometrics. I set safe rollback and monitoring for false positives. We launched as a dark release to 5% of users and expanded within 72 hours.",
        "r": "Average approval time dropped to 2m40s at peaks; no material fraud losses; onboarding CSAT +0.5.",
        "l": "Bias for action is not recklessness: design reversible levers, measure closely, and scale what works."
      },
      "fup": [
        {
          "q": "Qual foi o critério para o 'fast track'?",
          "a": "Score de risco abaixo de um limiar combinado de sinalizadores (documento limpo, biometria alta, geolocalização consistente).",
          "q_en": "What was the criterion for the 'fast track'?",
          "a_en": "Risk score below a threshold combined with indicators (clean document, high biometrics, consistent geolocation)."
        },
        {
          "q": "Como garantiu reversibilidade?",
          "a": "Feature flag com kill switch e versão paralela do fluxo manual pronta para fallback.",
          "q_en": "How did you ensure reversibility?",
          "a_en": "Feature flag with kill switch and parallel version of manual flow ready for fallback."
        },
        {
          "q": "Que métrica você olhou primeiro nas 24h iniciais?",
          "a": "Taxa de falsos negativos/positivos e tempo médio de aprovação por faixa horária.",
          "q_en": "What metric did you look at first in the initial 24 hours?",
          "a_en": "False negative/positive rate and average approval time by time slot."
        },
        {
          "q": "Quais riscos você decidiu NÃO aceitar?",
          "a": "Aprovação automática para documentos com OCR < 0,85 de confiança.",
          "q_en": "What risks did you decide NOT to accept?",
          "a_en": "Automatic approval for documents with OCR < 0.85 confidence."
        },
        {
          "q": "Como comunicou a mudança ao time de suporte?",
          "a": "Playbook de uma página com novos códigos de motivo e roteiro para exceções.",
          "q_en": "How did you communicate the change to the support team?",
          "a_en": "One-page playbook with new reason codes and exception roadmap."
        },
        {
          "q": "Que experimento A/B você rodou?",
          "a": "Tela de captura de biometria com instruções reduzidas vs. detalhadas; a versão reduzida performou melhor em ambientes bem iluminados.",
          "q_en": "What A/B experiment did you run?",
          "a_en": "Biometric capture screen with reduced vs. detailed instructions; the reduced version performed better in well-lit environments."
        },
        {
          "q": "Como evitou viés de seleção no dark release?",
          "a": "Randomização estratificada por região e versão do app.",
          "q_en": "How did you avoid selection bias in the dark release?",
          "a_en": "Stratified randomization by region and app version."
        },
        {
          "q": "Qual foi o maior aprendiado inesperado?",
          "a": "A iluminação ambiental impactou mais a biometria do que a câmera; ajustamos mensagens contextuais.",
          "q_en": "What was the biggest unexpected learning?",
          "a_en": "Ambient lighting impacted biometrics more than the camera; we adjusted contextual messages."
        },
        {
          "q": "O que faria diferente?",
          "a": "Incluir fraude mais cedo na definição das regras de exceção para reduzir retrabalho no dia 2.",
          "q_en": "What would you do differently?",
          "a_en": "Include fraud earlier in defining exception rules to reduce rework on day 2."
        },
        {
          "q": "Como escalou para 100%?",
          "a": "Incrementos de 5→15→50→100% condicionados a limites de erro e auditoria diária.",
          "q_en": "How did you scale to 100%?",
          "a_en": "Increments of 5→15→50→100% conditional on error limits and daily auditing."
        }
      ]
    }
  ]
};

export default bias_for_action;
