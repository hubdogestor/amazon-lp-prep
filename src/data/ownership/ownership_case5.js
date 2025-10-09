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
    s: `"De novo não!" O grito do diretor de Arrecadação ecoou no corredor quando o sistema de pagamentos travou pela terceira vez em seis semanas. Era agosto de 2024, eu atuava como advisor sênior da SEFAZ/RS, e acabara de detectar um padrão perigoso: os mesmos incidentes (timeouts de gateway, divergência de status, falhas de liquidação) reapareciam ciclicamente. R$ 18M de arrecadação diária congelados, 4.500 chamados de contribuintes em 24h, NPS despencando de 63 para 41. Comunicação, TI, Arrecadação e bancos parceiros trabalhavam em silos, cada um apagando seu pedaço do incêndio. Ninguém assumia responsabilidade pelo ciclo completo — e eu decidi que seria eu.`,
    t: `Meu escopo formal como advisor cobria apenas consultoria estratégica e análise de processos. Mas diante dessa crise recorrente que ameaçava a confiabilidade do sistema de arrecadação estadual, eu decidi assumir responsabilidade total da prevenção de incidentes. Sabia que, sem um mecanismo estruturado, continuaríamos eternamente apagando incêndios. Assumi responsabilidade pessoal de reduzir recorrência em 50%, MTTR em 30% em quatro meses, criar um responsável único para cada incidente classe A e devolver o NPS para acima de 60.`,
    a: `Eu tinha três hipóteses para resolver o problema: (1) Criar processo reativo melhor — mais gente no suporte, (2) Terceirizar para consultoria especializada — R$ 800k, ou (3) Construir capacidade interna de prevenção sistemática. Escolhi a terceira por ser sustentável. Primeiro, mapeei 62 incidentes dos últimos 12 meses, calculei custo total de R$ 7,2M (horas extras, multas, atrasos de repasse) e usei esse número em reunião com o Secretário da Fazenda para garantir sponsorship executivo. Segundo, criei o papel de "Incident Captain": toda falha classe A passou a ter um dono único até a prevenção ficar ativa, eliminando o jogo de empurra entre áreas. Terceiro, normalizei postmortems sem culpa com template estruturado e defini critérios técnicos obrigatórios: retry idempotente em três camadas, rollback seguro, canário e verificação de mensagens duplicadas. Quarto, publiquei catálogo de SLO por serviço (PIX 5 minutos, débito automático 15 minutos) e dashboard no Datadog com métricas em tempo real. Quinto, quando o diretor de TI reclamou do tempo adicional, provei que cada incidente repetido consumia 140 horas versus 4 horas para prevenção; ele autorizou tornar a prática mandatória. Sexto, envolvi bancos Banrisul e Banco do Brasil com runbook conjunto e canal direto de escalonamento.`,
    r: `Em quatro meses transformei um ciclo vicioso de incidentes em mecanismo virtuoso de confiabilidade. Reduzi incidentes recorrentes de 12 para 5 (-58%) e baixei o MTTR médio de 3h40 para 2h25 (-34%). Nenhum incidente classe A se repetiu, reclamações na ouvidoria caíram 45%, o NPS voltou para 64 e a arrecadação deixou de atrasar. As horas extras despencaram 25% e o Secretário passou a usar meu dashboard em comitês semanais com o governador. O mecanismo virou política oficial da SEFAZ e a Procergs replicou o modelo em sistemas críticos estaduais. Mais importante: criei uma cultura preventiva que sobreviveu à minha saída, com 8 Incident Captains treinados e operando autonomamente.`,
    l: `Nunca encerro uma crise sem três elementos: um responsável nomeado até a prevenção estar ativa, critérios técnicos que eliminam remendos e métricas visíveis para toda a liderança. Isso evita heroísmo e protege a confiança no sistema. Transformei esse aprendizado em template que apliquei em operações de PIX no Sicredi (reduziu incidentes em 67%) e em pagamentos internacionais no Bradesco (MTTR caiu 73%). A lição mais valiosa: mecanismos preventivos sempre superam heróis corretivos.`
  },
  en: {
    s: `"Not again!" The Treasury director's shout echoed down the hallway when the payment system crashed for the third time in six weeks. It was August 2024, I was working as senior advisor at SEFAZ/RS, and I had just detected a dangerous pattern: the same incidents (gateway timeouts, status mismatches, settlement failures) kept resurfacing cyclically. R$18M in daily revenue frozen, 4,500 taxpayer calls within 24 hours, NPS plummeting from 63 to 41. Communications, IT, Treasury, and partner banks worked in silos, each fighting their piece of the fire. No one took responsibility for the complete cycle — and I decided it would be me.`,
    t: `My formal scope as advisor covered only strategic consulting and process analysis. But faced with that recurring crisis threatening state revenue system reliability, I decided to take total responsibility for incident prevention. I knew that without a structured mechanism, we would keep firefighting forever. I took personal responsibility to cut recurrence by 50%, MTTR by 30% in four months, create single owner for each class-A incident, and restore NPS above 60.`,
    a: `I had three hypotheses to solve the problem: (1) Create better reactive process — more support people, (2) Outsource to specialized consulting — R$800K, or (3) Build internal systematic prevention capability. I chose the third for sustainability. First, I mapped 62 incidents from last 12 months, calculated total cost of R$7.2M (overtime, fines, delayed settlements), and used that number in meeting with Finance Secretary to secure executive sponsorship. Second, I created "Incident Captain" role: every class-A failure got single owner until prevention was live, eliminating blame-shifting between areas. Third, I normalized blameless postmortems with structured template and codified mandatory technical guardrails: three-layer idempotent retries, safe rollback, canary releases, and duplicate message checks. Fourth, I published SLO catalog per service (PIX 5 minutes, auto-debit 15 minutes) and Datadog dashboard with real-time metrics. Fifth, when IT director complained about extra time, I proved each repeated incident consumed 140 hours versus 4 hours for prevention; he authorized making practice mandatory. Sixth, I aligned Banrisul and Banco do Brasil through joint runbook and direct escalation channel.`,
    r: `In four months I transformed a vicious cycle of incidents into virtuous mechanism of reliability. I reduced recurring incidents from 12 to 5 (-58%) and lowered average MTTR from 3h40 to 2h25 (-34%). No class-A incident repeated, ombudsman complaints fell 45%, NPS climbed back to 64, and revenue stayed on schedule. Overtime dropped 25% and Secretary used my dashboard in weekly committees with governor. The mechanism became official SEFAZ policy and Procergs replicated the model across critical state systems. Most importantly: I created preventive culture that survived my departure, with 8 trained Incident Captains operating autonomously.`,
    l: `I never close a crisis without three elements: named owner until prevention is live, technical guardrails that eliminate patches, and visible metrics across leadership. This prevents heroics and protects system trust. I turned this learning into template that I applied to PIX operations at Sicredi (reduced incidents 67%) and international payments at Bradesco (MTTR dropped 73%). The most valuable lesson: preventive mechanisms always outperform corrective heroes.`
  },
  fups: [
    {
      "q": "Como você mensurou o custo total dos incidentes para convencer a liderança?",
      "a": "Calculei horas extras (R$ 2,1M), multas contratuais (R$ 1,8M), atrasos de repasse (R$ 2,7M) e impacto de imagem (R$ 600k). Total anualizado de R$ 7,2M que apresentei no comitê executivo com breakdown detalhado por categoria de incidente.",
      "q_en": "How did you quantify total incident cost to convince leadership?",
      "a_en": "I calculated overtime (R$2.1M), contractual fines (R$1.8M), delayed settlements (R$2.7M), and reputation impact (R$600K). Annualized total of R$7.2M that I presented to executive committee with detailed breakdown by incident category."
    },
    {
      "q": "Quais métricas você acompanhou semanalmente para garantir queda de recorrência?",
      "a": "Monitorei reincidência por categoria, MTTR por severidade, backlog de CAPA (ações preventivas), percentual de postmortems concluídos em 72h, SLO versus realizado por serviço, e volume de chamados por tipo de falha. Dashboard atualizado em tempo real.",
      "q_en": "Which metrics did you track weekly to ensure recurrence dropped?",
      "a_en": "I monitored recurrence by category, MTTR by severity, CAPA backlog (preventive actions), percentage of postmortems completed within 72h, SLO versus actual per service, and call volume by failure type. Real-time updated dashboard."
    },
    {
      "q": "Como você assegurou que os bancos parceiros adotassem o runbook?",
      "a": "Assinei SLA conjunto com Banrisul e Banco do Brasil, estabeleci testes trimestrais de failover obrigatórios, criei canal de escalonamento direto (WhatsApp + telefone) e inseri penalidades contratuais caso não respondessem em 15 minutos. Resultado: tempo de resposta caiu de 45min para 8min.",
      "q_en": "How did you ensure partner banks adopted the runbook?",
      "a_en": "I signed joint SLA with Banrisul and Banco do Brasil, established mandatory quarterly failover tests, created direct escalation channel (WhatsApp + phone), and inserted contractual penalties for not responding within 15 minutes. Result: response time dropped from 45min to 8min."
    },
    {
      "q": "Qual foi o maior desafio na implementação dos Incident Captains?",
      "a": "Quebrar a cultura de 'não foi minha área'. Criei incentivos: Incident Captain que prevenisse reincidência ganhava reconhecimento público e bônus trimestral. Mais importante: mostrei que prevenção reduzia stress e horas extras da própria equipe.",
      "q_en": "What was the biggest challenge in implementing Incident Captains?",
      "a_en": "Breaking the 'not my area' culture. I created incentives: Incident Captain who prevented recurrence got public recognition and quarterly bonus. Most importantly: I showed prevention reduced stress and overtime for their own team."
    },
    {
      "q": "Como você mediu o impacto real nos contribuintes?",
      "a": "NPS de pagamentos (41→64), tempo médio de resolução de problemas (3h40→2h25), chamados na ouvidoria (-45%), taxa de sucesso de transações (94,2%→98,7%), e satisfação com comunicação durante incidentes (criamos canal de status em tempo real).",
      "q_en": "How did you measure real impact on taxpayers?",
      "a_en": "Payment NPS (41→64), average problem resolution time (3h40→2h25), ombudsman calls (-45%), transaction success rate (94.2%→98.7%), and satisfaction with incident communication (we created real-time status channel)."
    },
    {
      "q": "Que resistência você enfrentou da equipe de TI?",
      "a": "TI via postmortems como 'perda de tempo' e 'cultura de culpa'. Mostrei dados: cada incidente repetido custava 140h vs. 4h de postmortem. Criei template de 30min máximo, foco em prevenção (não culpa), e celebrei sucessos. Resultado: TI passou a pedir postmortem proativamente.",
      "q_en": "What resistance did you face from the IT team?",
      "a_en": "IT saw postmortems as 'time waste' and 'blame culture'. I showed data: each repeated incident cost 140h vs. 4h postmortem. I created 30-min max template, prevention focus (not blame), and celebrated successes. Result: IT started requesting postmortems proactively."
    },
    {
      "q": "Como você garantiu sustentabilidade do mecanismo após sua saída?",
      "a": "Treinei 8 Incident Captains, documentei playbook de 34 páginas, automatizei 78% dos reports, criei ritual de review mensal e institucionalizei métricas no comitê executivo. Mais importante: provei ROI (R$ 7,2M evitados) que tornou o mecanismo indispensável.",
      "q_en": "How did you ensure mechanism sustainability after your departure?",
      "a_en": "I trained 8 Incident Captains, documented 34-page playbook, automated 78% of reports, created monthly review ritual, and institutionalized metrics in executive committee. Most importantly: I proved ROI (R$7.2M avoided) that made mechanism indispensable."
    },
    {
      "q": "Qual foi o ROI real do mecanismo de prevenção?",
      "a": "ROI de 1.800% no primeiro ano: evitei R$ 7,2M em custos de incidentes, economizei 1.680 horas de overtime (R$ 420k), reduzi chamados de suporte em 45% (R$ 180k em produtividade) e melhorei arrecadação (zero atrasos = R$ 2,1M). Investimento: R$ 40k (treinamentos + ferramentas).",
      "q_en": "What was the real ROI of the prevention mechanism?",
      "a_en": "1,800% ROI in first year: avoided R$7.2M in incident costs, saved 1,680 overtime hours (R$420K), reduced support calls by 45% (R$180K in productivity), and improved revenue collection (zero delays = R$2.1M). Investment: R$40K (training + tools)."
    },
    {
      "q": "Como você lidou com a pressão durante incidentes críticos?",
      "a": "Transparência radical: status updates a cada 15min, comunicação direta com contribuintes via portal, escalação automática baseada em SLA, e war room com todas as partes. Mais importante: foco em resolver + prevenir, não em culpar. Isso reduziu stress e acelerou resolução.",
      "q_en": "How did you handle pressure during critical incidents?",
      "a_en": "Radical transparency: status updates every 15min, direct communication with taxpayers via portal, automatic escalation based on SLA, and war room with all parties. Most importantly: focus on resolve + prevent, not blame. This reduced stress and accelerated resolution."
    },
    {
      "q": "Que aprendizado dessa experiência você aplicou em outros contextos?",
      "a": "O template preventivo: (1) Mapear padrões de dor recorrente, (2) Criar responsável único por incidente, (3) Postmortem sem culpa com foco em prevenção, (4) Métricas visíveis para liderança. Apliquei em PIX (Sicredi) e pagamentos internacionais (Bradesco) com sucesso similar.",
      "q_en": "What learning from this experience did you apply in other contexts?",
      "a_en": "The preventive template: (1) Map recurring pain patterns, (2) Create single owner per incident, (3) Blameless postmortem focused on prevention, (4) Visible metrics for leadership. I applied to PIX (Sicredi) and international payments (Bradesco) with similar success."
    }
  ]
};

export default case_5;
