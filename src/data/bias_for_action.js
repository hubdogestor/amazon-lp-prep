const bias_for_action = {
  "id": "bias_for_action",
  "name": "Ter Iniciativa",
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
          "a": "Mostrei um mapa 'Now / Next / Later' e garanti que as métricas essenciais (cronograma, % concluído, riscos críticos) estariam no Now."
        },
        {
          "q": "Qual foi o maior atalho técnico que você assumiu e como mitigou a dívida?",
          "a": "Importação manual de uma planilha legado. Cataloguei como 'tech debt P2' com owner e prazo de automação na sprint seguinte."
        },
        {
          "q": "Que métrica provou que o MVP gerou valor imediato?",
          "a": "Tempo de preparação dos GPs para a reunião caiu 60% e o número de versões de planilhas trocadas por e-mail caiu a zero."
        },
        {
          "q": "Houve algum erro por agir rápido? Como lidou?",
          "a": "Uma métrica de riscos veio atrasada no primeiro corte. Assumi na reunião, expliquei a limitação e publiquei hotfix no dia seguinte."
        },
        {
          "q": "Como evitou que o MVP virasse definitivo sem refinamentos?",
          "a": "Criei um roadmap público com datas e check-ins quinzenais; o MVP tinha 'banner' de versão para deixar claro o status."
        },
        {
          "q": "Como priorizou as 12 iniciativas críticas?",
          "a": "Critérios: impacto fiscal, dependências regulatórias e risco de prazo. Fiz scoring rápido com os sponsors."
        },
        {
          "q": "Qual foi o aprendizado para próximos lançamentos rápidos?",
          "a": "Definir upfront 'cut-off' diário e contrato de dados com os times evita discussões de última hora."
        },
        {
          "q": "Como alinhou expectativas com a Diretiva sob pressão de tempo?",
          "a": "Usei uma prévia clicável em 48h para alinhar expectativas e evitar surpresas no dia 10."
        },
        {
          "q": "Que riscos você aceitou conscientemente?",
          "a": "Não implementei drill-down de tarefas; aceitei usar apenas nível de macroentregas para manter o prazo."
        },
        {
          "q": "Se tivesse 2 dias a mais, o que incluiria?",
          "a": "O módulo de riscos com thresholds e semáforos de tendência."
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
          "a": "Score de risco abaixo de um limiar combinado de sinalizadores (documento limpo, biometria alta, geolocalização consistente)."
        },
        {
          "q": "Como garantiu reversibilidade?",
          "a": "Feature flag com kill switch e versão paralela do fluxo manual pronta para fallback."
        },
        {
          "q": "Que métrica você olhou primeiro nas 24h iniciais?",
          "a": "Taxa de falsos negativos/positivos e tempo médio de aprovação por faixa horária."
        },
        {
          "q": "Quais riscos você decidiu NÃO aceitar?",
          "a": "Aprovação automática para documentos com OCR < 0,85 de confiança."
        },
        {
          "q": "Como comunicou a mudança ao time de suporte?",
          "a": "Playbook de uma página com novos códigos de motivo e roteiro para exceções."
        },
        {
          "q": "Que experimento A/B você rodou?",
          "a": "Tela de captura de biometria com instruções reduzidas vs. detalhadas; a versão reduzida performou melhor em ambientes bem iluminados."
        },
        {
          "q": "Como evitou viés de seleção no dark release?",
          "a": "Randomização estratificada por região e versão do app."
        },
        {
          "q": "Qual foi o maior aprendiado inesperado?",
          "a": "A iluminação ambiental impactou mais a biometria do que a câmera; ajustamos mensagens contextuais."
        },
        {
          "q": "O que faria diferente?",
          "a": "Incluir fraude mais cedo na definição das regras de exceção para reduzir retrabalho no dia 2."
        },
        {
          "q": "Como escalou para 100%?",
          "a": "Incrementos de 5→15→50→100% condicionados a limites de erro e auditoria diária."
        }
      ]
    }
  ]
};

export default bias_for_action;
