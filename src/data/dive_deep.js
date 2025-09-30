const dive_deep = {
  id: "mergulhar fundo",
  name: "mergulhar fundo",
  principle: {
    title: "Mergulhar Fundo",
    title_en: "Dive Deep",
    description: "Os líderes operam em todos os níveis, mantêm-se conectados aos detalhes, auditam frequentemente e são céticos quando métricas e evidências diferem. Nenhuma tarefa está abaixo deles.",
    description_en: "Leaders operate at all levels, stay connected to the details, audit frequently, and are skeptical when metrics and anecdote differ. No task is beneath them.",
    icon: "🔍"
  },
  cases: [
    {
      "id": "timeouts-ocultos-em-verificacao-externa",
      "title": "Timeouts Ocultos em Verificação Externa - SEFAZ-RS (2024)",
      "title_pt": "Timeouts Ocultos em Verificação Externa",
      "title_en": "Hidden Timeouts in External Verification",
      "company": "SEFAZ-RS",
      "period": "08/2024–12/2024",
      "pt": {
        "s": "Um projeto de arrecadação digital apresentava queda inexplicável de conversão em uma etapa específica, sem causa aparente nos relatórios executivos. Dashboard mostrava 'tudo normal' mas resultados estavam 15% abaixo do esperado.",
        "t": "Minha missão era descobrir a causa raiz real através de análise profunda dos dados e recuperar a conversão sem aumentar custo de aquisição, mesmo que isso significasse ir além dos relatórios superficiais.",
        "a": "Mergulhei nos dados brutos: eventos do frontend, logs de API, traces distribuídos e user journey completo. Descobri que 18% das tentativas falhavam silenciosamente por timeout em chamada de verificação externa não monitorada. Modelei correlação por horário/dispositivo, implementei retry exponencial, cache de respostas benignas e monitoramento granular de cada micro-step.",
        "r": "Conversão aumentou 9 pontos percentuais, tempo médio de resposta reduziu 32%, tickets de suporte diminuíram 25% e visibilidade completa do user journey implementada. ROI de R$ 300k/mês recuperado. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que 'Dive deep' é sair do slide e ir ao dado fonte real. Fluxo observado > narrativa reportada. Instrumentação correta ilumina problemas óbvios que dashboards superficiais não capturam. Em retrospectiva, eu poderia ter implementado observability deeper desde o início, e hoje sempre questiono métricas que 'parecem normais' quando outcomes não batem."
      },
      "en": {
        "s": "A digital tax collection project showed inexplicable conversion drop in specific step, without apparent cause in executive reports. Dashboard showed 'everything normal' but results were 15% below expected.",
        "t": "My mission was to discover real root cause through deep data analysis and recover conversion without increasing acquisition cost, even if it meant going beyond superficial reports.",
        "a": "I dove into raw data: frontend events, API logs, distributed traces and complete user journey. I discovered 18% of attempts failed silently due to timeout in unmonitored external verification call. I modeled correlation by time/device, implemented exponential retry, cache of benign responses and granular monitoring of each micro-step.",
        "r": "Conversion increased 9 percentage points, average response time reduced 32%, support tickets decreased 25% and complete user journey visibility implemented. ROI of R$ 300k/month recovered. (with baseline, target and period documented in executive report).",
        "l": "I learned that 'Dive deep' is leaving the slide and going to real source data. Observed flow > reported narrative. Correct instrumentation illuminates obvious problems that superficial dashboards don't capture. In retrospect, I could have implemented deeper observability from the start, and today I always question metrics that 'seem normal' when outcomes don't match."
      },
      "fups": [
        {
          "q": "Como você soube que precisava ir além dos relatórios executivos?",
          "q_en": "How did you know you needed to go beyond executive reports?",
          "a": "Red flag: métricas de sistema 'verdes' mas business outcome 'vermelho'. When dashboard says OK mas results say NOT OK, sempre dive deeper. Skepticism sobre superficial metrics.",
          "a_en": "Red flag: system metrics 'green' but business outcome 'red'. When dashboard says OK but results say NOT OK, always dive deeper. Skepticism about superficial metrics."
        },
        {
          "q": "Que ferramentas você usou para fazer essa análise profunda?",
          "q_en": "What tools did you use for this deep analysis?",
          "a": "ELK Stack para logs, Jaeger para distributed tracing, custom SQL queries no raw data e Python notebooks para correlation analysis. Multiple layers de observability.",
          "a_en": "ELK Stack for logs, Jaeger for distributed tracing, custom SQL queries on raw data and Python notebooks for correlation analysis. Multiple layers of observability."
        },
        {
          "q": "Como você descobriu que era um timeout específico causando o problema?",
          "q_en": "How did you discover it was a specific timeout causing the problem?",
          "a": "Pattern matching: failures correlacionavam com external API calls duration > 5s. User journey analysis mostrou drop-off exato no ponto de verificação. Data detective work.",
          "a_en": "Pattern matching: failures correlated with external API calls duration > 5s. User journey analysis showed exact drop-off at verification point. Data detective work."
        },
        {
          "q": "Por que esse timeout não aparecia nos dashboards normais?",
          "q_en": "Why didn't this timeout appear in normal dashboards?",
          "a": "Silent failure: aplicação não loggava timeout como erro, só como 'step skipped'. Dashboard tracking só success/error explícitos. Missing observability gap.",
          "a_en": "Silent failure: application didn't log timeout as error, just as 'step skipped'. Dashboard tracking only explicit success/error. Missing observability gap."
        },
        {
          "q": "Qual foi o processo para implementar retry exponencial sem afetar performance?",
          "q_en": "What was the process to implement exponential retry without affecting performance?",
          "a": "Async retry com circuit breaker: first attempt synchronous, retries em background com callback. User experience não degradada, reliability melhorada. Best of both worlds.",
          "a_en": "Async retry with circuit breaker: first attempt synchronous, retries in background with callback. User experience not degraded, reliability improved. Best of both worlds."
        },
        {
          "q": "Como você validou que o cache de respostas benignas era seguro?",
          "q_en": "How did you validate that caching benign responses was safe?",
          "a": "Security review + TTL curto (5min) + cache invalidation em caso de suspeita. Conservative approach: cache só positive results com low business risk. Safety first.",
          "a_en": "Security review + short TTL (5min) + cache invalidation on suspicion. Conservative approach: cache only positive results with low business risk. Safety first."
        },
        {
          "q": "Que métricas você adicionou para evitar problemas similares no futuro?",
          "q_en": "What metrics did you add to avoid similar problems in the future?",
          "a": "End-to-end success rate, step-by-step conversion funnel, API call duration percentiles e error type categorization. Observability como prevention, não só detection.",
          "a_en": "End-to-end success rate, step-by-step conversion funnel, API call duration percentiles and error type categorization. Observability as prevention, not just detection."
        },
        {
          "q": "Como você convenceu stakeholders a investir em melhor instrumentação?",
          "q_en": "How did you convince stakeholders to invest in better instrumentation?",
          "a": "ROI claro: 'Esse problema custou R$ 300k/mês e levou 2 semanas para achar. Better observability = faster detection = less money lost'. Cost of blindness.",
          "a_en": "Clear ROI: 'This problem cost R$ 300k/month and took 2 weeks to find. Better observability = faster detection = less money lost'. Cost of blindness."
        },
        {
          "q": "Qual foi o learning mais importante sobre 'dive deep' neste projeto?",
          "q_en": "What was the most important learning about 'dive deep' in this project?",
          "a": "Surface metrics mentem. Ground truth está nos raw events e user behavior real. Leadership é about questioning what 'looks normal' when results don't add up.",
          "a_en": "Surface metrics lie. Ground truth is in raw events and real user behavior. Leadership is about questioning what 'looks normal' when results don't add up."
        },
        {
          "q": "Se encontrasse um problema similar hoje, qual seria sua abordagem?",
          "q_en": "If you found a similar problem today, what would be your approach?",
          "a": "Start with user journey tracing, correlate com business metrics, implement comprehensive logging upfront e create automated anomaly detection. Proactive deep diving.",
          "a_en": "Start with user journey tracing, correlate with business metrics, implement comprehensive logging upfront and create automated anomaly detection. Proactive deep diving."
        }
      ]
    },
    {
      "title": "Root Cause Analysis: Falha de Pagamento Silenciosa – Woop Sicredi (06/2019–12/2021)",
      "title_pt": "Root Cause Analysis: Falha de Pagamento Silenciosa",
      "title_en": "Root Cause Analysis: Silent Payment Failure",
      "company": "Woop Sicredi",
      "period": "06/2019–12/2021",
      "pt": {
        "s": "Sistema de pagamentos da Woop Sicredi reportava 99.2% de success rate, mas revenue real estava 8% abaixo do esperado. Finance detectou discrepância mas engineering insistia que 'sistema estava funcionando perfeitamente'.",
        "t": "Minha missão era mergulhar fundo na arquitetura de pagamentos, questionar todas as métricas reportadas e descobrir onde estava o vazamento de revenue, mesmo que isso contradissesse relatórios técnicos oficiais.",
        "a": "Realizei auditoria completa end-to-end: rastreei cada transação desde user click até bank confirmation, mapeei todos os pontos de failure e reconciliação. Descobri que partial payments estavam sendo contados como 'success' mas não processados completamente. Implementei distributed tracing, correlation IDs únicos e reconciliação automática tripla (user/gateway/bank).",
        "r": "Descobriu R$ 2.1M anuais em revenue perdido, implementou fixes que recuperaram 95% do vazamento, reduziu disputed transactions em 60% e criou observability que detecta anomalias em 15min vs. 30 dias antes. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que dive deep significa questionar every single assumption, especialmente quando 'everything looks fine'. True leadership é about connecting technical details com business outcomes. Em retrospectiva, eu poderia ter implementado end-to-end transaction tracing desde o MVP, e hoje nunca aceito metrics sem business outcome validation."
      },
      "en": {
        "s": "Woop Sicredi payment system reported 99.2% success rate, but actual revenue was 8% below expected. Finance detected discrepancy but engineering insisted 'system was working perfectly'.",
        "t": "My mission was to dive deep into payment architecture, question all reported metrics and discover where revenue leakage was, even if it contradicted official technical reports.",
        "a": "I conducted complete end-to-end audit: traced each transaction from user click to bank confirmation, mapped all failure points and reconciliation. I discovered partial payments were being counted as 'success' but not fully processed. I implemented distributed tracing, unique correlation IDs and triple automatic reconciliation (user/gateway/bank).",
        "r": "Discovered R$ 2.1M annual lost revenue, implemented fixes that recovered 95% of leakage, reduced disputed transactions by 60% and created observability that detects anomalies in 15min vs. 30 days before. (with baseline, target and period documented in executive report).",
        "l": "I learned that dive deep means questioning every single assumption, especially when 'everything looks fine'. True leadership is about connecting technical details with business outcomes. In retrospect, I could have implemented end-to-end transaction tracing from MVP, and today I never accept metrics without business outcome validation."
      },
      "fups": [
        {
          "q": "Como você soube que havia discrepância quando métricas técnicas pareciam OK?",
          "q_en": "How did you know there was discrepancy when technical metrics seemed OK?",
          "a": "Finance data didn't lie: expected revenue baseado em user activity vs. actual bank deposits. Business outcome trumps technical metrics sempre. Follow the money.",
          "a_en": "Finance data didn't lie: expected revenue based on user activity vs. actual bank deposits. Business outcome trumps technical metrics always. Follow the money."
        },
        {
          "q": "Que resistência você enfrentou da equipe de engineering?",
          "q_en": "What resistance did you face from the engineering team?",
          "a": "'Our metrics are green, must be finance mistake'. Tive que provar with data que technical success ≠ business success. Ego é inimigo do dive deep.",
          "a_en": "'Our metrics are green, must be finance mistake'. Had to prove with data that technical success ≠ business success. Ego is enemy of dive deep."
        },
        {
          "q": "Como você mapeou o fluxo completo de uma transação?",
          "q_en": "How did you map the complete flow of a transaction?",
          "a": "Transaction forensics: seguir um payment ID específico através de todos systems (frontend, backend, gateway, bank, reconciliation). End-to-end journey mapping com timestamps.",
          "a_en": "Transaction forensics: follow specific payment ID through all systems (frontend, backend, gateway, bank, reconciliation). End-to-end journey mapping with timestamps."
        },
        {
          "q": "O que exatamente eram os 'partial payments' que causavam o problema?",
          "q_en": "What exactly were the 'partial payments' causing the problem?",
          "a": "Gateway confirmava 'processing' mas bank rejeitava silenciosamente por insufficient funds/limits. Sistema contava como success, mas money never moved. Silent failure mode.",
          "a_en": "Gateway confirmed 'processing' but bank silently rejected for insufficient funds/limits. System counted as success, but money never moved. Silent failure mode."
        },
        {
          "q": "Como você implementou reconciliação tripla sem afetar performance?",
          "q_en": "How did you implement triple reconciliation without affecting performance?",
          "a": "Async reconciliation: real-time user feedback, batched gateway checks (hourly), bank confirmation (daily). Different SLAs para different stakeholders. Performance + accuracy.",
          "a_en": "Async reconciliation: real-time user feedback, batched gateway checks (hourly), bank confirmation (daily). Different SLAs for different stakeholders. Performance + accuracy."
        },
        {
          "q": "Qual foi o momento 'eureka' quando você descobriu a causa raiz?",
          "q_en": "What was the 'eureka' moment when you discovered root cause?",
          "a": "Correlation analysis: 80% dos 'partial payments' aconteciam após 18h (bank batch processing window). Pattern que ninguém tinha conectado. Data reveals truth.",
          "a_en": "Correlation analysis: 80% of 'partial payments' happened after 6 PM (bank batch processing window). Pattern nobody had connected. Data reveals truth."
        },
        {
          "q": "Como você comunicou findings complexos para non-technical stakeholders?",
          "q_en": "How did you communicate complex findings to non-technical stakeholders?",
          "a": "Money talk: 'R$ 2.1M/ano está vazando aqui' com visual flow diagram. Business impact primeiro, technical details depois. CEO understands revenue leaks.",
          "a_en": "Money talk: 'R$ 2.1M/year is leaking here' with visual flow diagram. Business impact first, technical details after. CEO understands revenue leaks."
        },
        {
          "q": "Que ferramentas de observability você implementou para prevenir recorrência?",
          "q_en": "What observability tools did you implement to prevent recurrence?",
          "a": "Real-time revenue dashboard, transaction success rate por time window, automated alerts on revenue variance e weekly reconciliation reports. Prevention through visibility.",
          "a_en": "Real-time revenue dashboard, transaction success rate by time window, automated alerts on revenue variance and weekly reconciliation reports. Prevention through visibility."
        },
        {
          "q": "Qual foi o impacto organizacional além da recuperação de revenue?",
          "q_en": "What was organizational impact beyond revenue recovery?",
          "a": "Culture shift: engineering passou a validate business outcomes, não só technical metrics. Cross-functional collaboration melhorou. Trust através de transparency.",
          "a_en": "Culture shift: engineering started validating business outcomes, not just technical metrics. Cross-functional collaboration improved. Trust through transparency."
        },
        {
          "q": "Se tivesse que audit outro sistema crítico hoje, qual seria sua methodology?",
          "q_en": "If you had to audit another critical system today, what would be your methodology?",
          "a": "Business outcome first: start com discrepancy analysis, map complete user journey, question every assumption e implement observability gaps. Always follow the money trail.",
          "a_en": "Business outcome first: start with discrepancy analysis, map complete user journey, question every assumption and implement observability gaps. Always follow the money trail."
        }
      ]
    }
  ]
};

export default dive_deep;