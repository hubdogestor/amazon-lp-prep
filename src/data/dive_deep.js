const dive_deep = {
  "id": "dive_deep",
  "name": "Mergulhar Fundo",
  "cases": [
    {
      "title": "Timeouts Ocultos em Verificação Externa (Arrecadação Digital)",
      "pt": {
        "s": "Um projeto de arrecadação digital apresentava queda de conversão em uma etapa específica, sem causa aparente nos relatórios executivos.",
        "t": "Minha missão era: Descobrir a causa raiz e recuperar a conversão sem aumentar custo de aquisição.",
        "a": "Eu mergulhei nos dados brutos (eventos do front e logs de API). Descobri que 18% das tentativas falhavam por timeout em uma chamada de verificação externa. Modelei correlação por horário/dispositivo, implementei retry exponencial, cache de respostas benignas e monitoramento granular.",
        "r": "Conversão +9 p.p.; tempo médio de resposta -32%; tickets de suporte -25%. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que ‘Dive deep’ é sair do slide e ir ao dado fonte. Fluxo real > narrativa. Instrumentação correta ilumina o óbvio que não se via. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "A digital tax collection project showed a conversion drop at a specific step with no apparent cause in executive reports.",
        "t": "Find the root cause and recover conversion without raising acquisition costs.",
        "a": "I went into raw data (frontend events and API logs). I found that 18% of attempts failed due to timeouts in an external verification call. I modeled correlation by hour/device, implemented exponential retry, cached benign responses, and added granular monitoring.",
        "r": "+9 pp conversion; −32% average response time; −25% support tickets.",
        "l": "Dive deep means leaving the slide deck and touching source data. Real flows trump narratives. Proper instrumentation reveals the obvious we couldn’t see."
      },
      "fup": [
        {
          "q": "Como você garantiu que não era um falso positivo de analytics?",
          "a": "Cruzei três fontes: eventos do front, logs do backend e gravações amostrais de sessão."
        },
        {
          "q": "Por que 18%? O que havia de comum?",
          "a": "Correlação com horários de pico e dispositivos mais antigos com latência maior."
        },
        {
          "q": "Por que o timeout não aparecia nos painéis?",
          "a": "A métrica estava agregada por serviço; criei um painel por endpoint com percentis p95/p99."
        },
        {
          "q": "Qual foi a hipótese descartada?",
          "a": "Bug no formulário; não havia aumento de erros de validação."
        },
        {
          "q": "Que experimento rodou primeiro?",
          "a": "Retry exponencial com jitter em 10% do tráfego; impacto positivo sem efeito colateral."
        },
        {
          "q": "Como evitou efeitos colaterais?",
          "a": "Rate limiting e circuit breaker para o serviço externo."
        },
        {
          "q": "Que monitoramento permanente ficou?",
          "a": "Alertas por endpoint, por região e por device class com SLOs explícitos."
        },
        {
          "q": "Como alinhou isso ao negócio?",
          "a": "Mostrei o ganho de conversão traduzido em receita incremental por período."
        },
        {
          "q": "Qual dívida técnica virou ação?",
          "a": "Implementar fallback offline para verificação não crítica."
        },
        {
          "q": "O que faria diferente?",
          "a": "Instrumentaria o endpoint desde o início com percentis e tracing distribuído."
        }
      ]
    },
    {
      "title": "Reduzindo Tempo 'Percebido' em Teleconsulta (Unimed APS)",
      "pt": {
        "s": "No Unimed APS, pacientes reportavam percepção de demora na primeira teleconsulta, apesar de SLAs dentro do esperado.",
        "t": "Minha missão era: Entender a discrepância entre SLA técnico e percepção de demora e corrigi-la.",
        "a": "Eu analisei a jornada ponta a ponta, cronometrando o ‘tempo percebido’: cadastro→agendamento→sala de espera→consulta. Descobri que o gargalo era a espera não informada na sala virtual. Introduzi tempos estimados dinâmicos, lembretes contextuais e fila inteligente.",
        "r": "Queda de 31% na percepção de demora; NPS +0,8; abandono na sala de espera -26%. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que mergulhar fundo inclui medir o que realmente importa para o usuário, não apenas o que é fácil para o sistema. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "In Unimed’s PHC program, patients perceived long waits for the first teleconsultation despite SLAs being met.",
        "t": "Understand the gap between technical SLA and perceived delay and fix it.",
        "a": "I mapped the end-to-end journey, timing 'perceived time': signup→scheduling→waiting room→visit. The bottleneck was undisclosed wait in the virtual room. I added dynamic ETA, contextual reminders, and smart queueing.",
        "r": "31% drop in perceived delay; NPS +0.8; −26% waiting-room abandonment.",
        "l": "Diving deep includes measuring what matters to users, not just what’s easy for systems."
      },
      "fup": [
        {
          "q": "Como você mediu ‘tempo percebido’?",
          "a": "Shadowing e instrumentação no front para medir eventos de espera visível ao usuário."
        },
        {
          "q": "Qual foi o insight mais contra-intuitivo?",
          "a": "O SLA técnico era bom, mas a falta de feedback visual gerava ansiedade e a sensação de demora."
        },
        {
          "q": "Como priorizou o que atacar primeiro?",
          "a": "Alto impacto e baixa complexidade: ETA dinâmico e mensagens contextuais."
        },
        {
          "q": "Houve impacto em fraude ou consultas fantasma?",
          "a": "Não; a fila inteligente reduziu no-show e melhorou ocupação."
        },
        {
          "q": "Como garantiu precisão do ETA?",
          "a": "Modelos simples por fila e horário, ajustados diariamente com dados reais."
        },
        {
          "q": "Que trade-off você aceitou?",
          "a": "Investir mais tempo no front-end para reduzir tickets no suporte."
        },
        {
          "q": "Como sustentou os ganhos?",
          "a": "Alertas se ETA desvia >20% do previsto e revisão semanal da fila."
        },
        {
          "q": "Que métrica monitorou pós-lançamento?",
          "a": "Abandono na sala e CSAT por consulta."
        },
        {
          "q": "O que os médicos acharam?",
          "a": "A agenda ficou mais previsível, com menos aberturas e atrasos."
        },
        {
          "q": "O que faria diferente?",
          "a": "Testes com mensagens personalizadas por perfil para ganhar mais pontos de satisfação."
        }
      ]
    }
  ]
};

export default dive_deep;
