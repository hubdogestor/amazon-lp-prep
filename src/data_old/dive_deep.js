const dive_deep = {
  principle: {
    title: "Mergulhar Fundo",
    title_en: "Dive Deep",
    description: "Os l�deres operam em todos os n�veis, mant�m-se conectados aos detalhes, auditam frequentemente e s�o c�ticos quando m�tricas e evidencias diferem. Nenhuma tarefa est� abaixo deles.",
    description_en: "Leaders operate at all levels, stay connected to the details, audit frequently, and are skeptical when metrics and anecdote differ. No task is beneath them.",
    icon: ""
  },
  "id": "dive_deep",
  "name": "Mergulhar fundo",
  "cases": [
    {
      "title": "Timeouts Ocultos em Verifica��o Externa (SEFAZ-RS)",
      "pt": {
        "s": "Um projeto de arrecada��o digital apresentava queda de convers�o em uma etapa espec�fica, sem causa aparente nos relat�rios executivos.",
        "t": "Minha miss�o era: Descobrir a causa raiz e recuperar a convers�o sem aumentar custo de aquisi��o.",
        "a": "Eu mergulhei nos dados brutos (eventos do front e logs de API). Descobri que 18% das tentativas falhavam por timeout em uma chamada de verifica��o externa. Modelei correla��o por hor�rio/dispositivo, implementei retry exponencial, cache de respostas benignas e monitoramento granular.",
        "r": "Convers�o +9 p.p.; tempo m�dio de resposta -32%; tickets de suporte -25%. (com baseline, meta e per�odo documentados em relat�rio executivo).",
        "l": "Aprendi que 'Dive deep' � sair do slide e ir ao dado fonte. Fluxo real > narrativa. Instrumenta��o correta ilumina o �bvio que n�o se via. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje come�o engajando-os desde o in�cio."
      },
      "en": {
        "s": "A digital tax collection project showed a conversion drop at a specific step with no apparent cause in executive reports.",
        "t": "Find the root cause and recover conversion without raising acquisition costs.",
        "a": "I went into raw data (frontend events and API logs). I found that 18% of attempts failed due to timeouts in an external verification call. I modeled correlation by hour/device, implemented exponential retry, cached benign responses, and added granular monitoring.",
        "r": "+9 pp conversion; 32% average response time; 25% support tickets.",
        "l": "Dive deep means leaving the slide deck and touching source data. Real flows trump narratives. Proper instrumentation reveals the obvious we couldn't see."
      },      "fup": [
        {
          "q": "Como voc� garantiu que n�o era um falso positivo de analytics?",
          "a": "Cruzei tr�s fontes: eventos do front, logs do backend e grava��es amostrais de sess�o.",
          "q_en": "How did you ensure it wasn't a false positive in analytics?",
          "a_en": "I cross-referenced three sources: frontend events, backend logs, and sample session recordings."
        },
        {
          "q": "Por que 18%? O que havia de comum?",
          "a": "Correla��o com hor�rios de pico e dispositivos mais antigos com lat�ncia maior.",
          "q_en": "Why 18%? What did they have in common?",
          "a_en": "Correlation with peak hours and older devices with higher latency."
        },
        {
          "q": "Por que o timeout n�o aparecia nos pain�is?",
          "a": "A m�trica estava agregada por servi�o; criei um painel por endpoint com percentis p95/p99.",
          "q_en": "Why didn't the timeout show up in dashboards?",
          "a_en": "The metric was aggregated by service; I created a per-endpoint dashboard with p95/p99 percentiles."
        },
        {
          "q": "Qual foi a hip�tese descartada?",
          "a": "Bug no formul�rio; n�o havia aumento de erros de valida��o.",
          "q_en": "What hypothesis was discarded?",
          "a_en": "Form bug; there was no increase in validation errors."
        },
        {
          "q": "Que experimento rodou primeiro?",
          "a": "Retry exponencial com jitter em 10% do tr�fego; impacto positivo sem efeito colateral.",
          "q_en": "What experiment ran first?",
          "a_en": "Exponential retry with jitter on 10% of traffic; positive impact with no side effects."
        },        {
          "q": "Como evitou efeitos colaterais?",
          "a": "Rate limiting e circuit breaker para o servi�o externo.",
          "q_en": "How did you avoid side effects?",
          "a_en": "Rate limiting and circuit breaker for the external service."
        },
        {
          "q": "Que monitoramento permanente ficou?",
          "a": "Alertas por endpoint, por regi�o e por device class com SLOs expl�citos.",
          "q_en": "What permanent monitoring remained?",
          "a_en": "Alerts per endpoint, per region, and per device class with explicit SLOs."
        },
        {
          "q": "Como alinhou isso ao neg�cio?",
          "a": "Mostrei o ganho de convers�o traduzido em receita incremental por per�odo.",
          "q_en": "How did you align this with the business?",
          "a_en": "I showed the conversion gain translated into incremental revenue per period."
        },
        {
          "q": "Qual d�vida t�cnica virou a��o?",
          "a": "Implementar fallback offline para verifica��o n�o cr�tica.",
          "q_en": "What technical debt became an action?",
          "a_en": "Implement offline fallback for non-critical verification."
        },
        {
          "q": "O que faria diferente?",
          "a": "Instrumentaria o endpoint desde o in�cio com percentis e tracing distribu�do.",
          "q_en": "What would you do differently?",
          "a_en": "I would instrument the endpoint from the start with percentiles and distributed tracing."
        }
      ]
    },    {
      "title": "Reduzindo Tempo 'Percebido' em Teleconsulta (Unimed APS)",
      "pt": {
        "s": "No Unimed APS, pacientes reportavam percep��o de demora na primeira teleconsulta, apesar de SLAs dentro do esperado.",
        "t": "Minha miss�o era: Entender a discrep�ncia entre SLA t�cnico e percep��o de demora e corrigi-la.",
        "a": "Eu analisei a jornada ponta a ponta, cronometrando o 'tempo percebido': cadastroagendamentosala de esperaconsulta. Descobri que o gargalo era a espera n�o informada na sala virtual. Introduzi tempos estimados din�micos, lembretes contextuais e fila inteligente.",
        "r": "Queda de 31% na percep��o de demora; NPS +0,8; abandono na sala de espera -26%. (com baseline, meta e per�odo documentados em relat�rio executivo).",
        "l": "Aprendi que mergulhar fundo inclui medir o que realmente importa para o usu�rio, n�o apenas o que � f�cil para o sistema. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje come�o engajando-os desde o in�cio."
      },
      "en": {
        "s": "In Unimed's PHC program, patients perceived long waits for the first teleconsultation despite SLAs being met.",
        "t": "Understand the gap between technical SLA and perceived delay and fix it.",
        "a": "I mapped the end-to-end journey, timing 'perceived time': signupschedulingwaiting roomvisit. The bottleneck was undisclosed wait in the virtual room. I added dynamic ETA, contextual reminders, and smart queueing.",
        "r": "31% drop in perceived delay; NPS +0.8; 26% waiting-room abandonment.",
        "l": "Diving deep includes measuring what matters to users, not just what's easy for systems."
      },      "fup": [
        {
          "q": "Como voc� mediu 'tempo percebido'?",
          "a": "Shadowing e instrumenta��o no front para medir eventos de espera vis�vel ao usu�rio.",
          "q_en": "How did you measure 'perceived time'?",
          "a_en": "Shadowing and frontend instrumentation to measure user-visible waiting events."
        },
        {
          "q": "Qual foi o insight mais contra-intuitivo?",
          "a": "O SLA t�cnico era bom, mas a falta de feedback visual gerava ansiedade e a sensa��o de demora.",
          "q_en": "What was the most counterintuitive insight?",
          "a_en": "The technical SLA was good, but lack of visual feedback created anxiety and the feeling of delay."
        },
        {
          "q": "Como priorizou o que atacar primeiro?",
          "a": "Alto impacto e baixa complexidade: ETA din�mico e mensagens contextuais.",
          "q_en": "How did you prioritize what to tackle first?",
          "a_en": "High impact and low complexity: dynamic ETA and contextual messages."
        },
        {
          "q": "Houve impacto em fraude ou consultas fantasma?",
          "a": "N�o; a fila inteligente reduziu no-show e melhorou ocupa��o.",
          "q_en": "Was there any impact on fraud or ghost consultations?",
          "a_en": "No; the smart queue reduced no-shows and improved occupancy."
        },
        {
          "q": "Como garantiu precis�o do ETA?",
          "a": "Modelos simples por fila e hor�rio, ajustados diariamente com dados reais.",
          "q_en": "How did you ensure ETA accuracy?",
          "a_en": "Simple models per queue and time slot, adjusted daily with real data."
        },        {
          "q": "Que trade-off voc� aceitou?",
          "a": "Investir mais tempo no front-end para reduzir tickets no suporte.",
          "q_en": "What trade-off did you accept?",
          "a_en": "Invest more time in frontend to reduce support tickets."
        },
        {
          "q": "Como sustentou os ganhos?",
          "a": "Alertas se ETA desvia >20% do previsto e revis�o semanal da fila.",
          "q_en": "How did you sustain the gains?",
          "a_en": "Alerts if ETA deviates >20% from expected and weekly queue review."
        },
        {
          "q": "Que m�trica monitorou p�s-lan�amento?",
          "a": "Abandono na sala e CSAT por consulta.",
          "q_en": "What metric did you monitor post-launch?",
          "a_en": "Room abandonment and CSAT per consultation."
        },
        {
          "q": "O que os m�dicos acharam?",
          "a": "A agenda ficou mais previs�vel, com menos aberturas e atrasos.",
          "q_en": "What did the doctors think?",
          "a_en": "The schedule became more predictable, with fewer openings and delays."
        },
        {
          "q": "O que faria diferente?",
          "a": "Testes com mensagens personalizadas por perfil para ganhar mais pontos de satisfa��o.",
          "q_en": "What would you do differently?",
          "a_en": "Test personalized messages by profile to gain more satisfaction points."
        }
      ]
    }
  ]
};

export default dive_deep;
