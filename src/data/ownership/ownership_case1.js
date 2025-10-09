// Case 1 - ownership
const case_1 = {
  id: "hsbc-migration-leadership",
  title: "Liderança da Migração de US$ 5.2B de Ativos e Contas",
  title_pt: "Liderança da Migração de US$ 5.2B de Ativos e Contas",
  title_en: "Leadership of US$ 5.2B Assets and Accounts Migration",
  company: "HSBC",
  period: "05/2015-06/2016",
  isTopCase: true,
  isGoodCase: true,
  pt: {
    s: `Como Head do PMO de Operações responsável pela integração pós-venda da carteira de Private Banking do HSBC para o Bradesco, eu recebi um e-mail do CFO às 6h da manhã com o assunto "Deal em risco". Quando abri o dashboard de migração que minha equipe havia montado, a situação era crítica: a migração de US$ 5,2B em ativos estava implodindo. Descobri que tínhamos 94 mil contas órfãs sem validação, o NPS havia despencado para 52, e clientes premium (60% dos ativos) estavam ameaçando sair. O Process Cycle Time da validação de contas era inexistente — cada conta levava 72 horas para ser processada quando deveria levar 4 horas. Pior: sem rastreabilidade, ninguém sabia quantas contas estavam realmente perdidas no limbo regulatório. A operação que deveria ser nossa vitrine de eficiência estava se tornando um pesadelo de compliance que poderia custar US$ 180M em multas do BACEN. Eu precisava assumir controle total imediatamente.`,
    t: `Diante dessa crise que ameaçava tanto a reputação quanto a viabilidade financeira da operação, eu decidi assumir ownership total da transição, mesmo sem mandato formal. Meu desafio era transformar um caos operacional em migração exemplar: migrar 100% das contas com zero perda de dados, manter o churn de clientes premium abaixo de 0,5% e recuperar o NPS para acima de 70. Eu me posicionei como o single-threaded owner que tomaria decisões acionáveis e prestaria contas pelo resultado final.`,
    a: `Eu agi como verdadeiro owner, assumindo responsabilidade end-to-end pela solução. Primeiro, modelei o risco financeiro completo e usei essa análise para conseguir um buffer de R$ 9,5M para controles adicionais, transformando resistência em investimento estratégico. Segundo, criei um mecanismo de monitoramento em tempo real usando Python e Tableau que extraía logs de 7 sistemas legados (AS/400, Oracle DBs) para um data lake temporário, reduzindo o tempo de detecção de anomalias de 24 horas para quase tempo real. Terceiro, quando o diretor de Compliance resistiu às mudanças, não apenas mostrei dados — enquadrei a questão como decisão de negócio sobre custo operacional por transação da ineficiência. Pilotei uma solução de verificação facial que reduziu falsos positivos de 4,3% para 0,8%, provando valor antes de pedir aprovação. Quarto, estabeleci transparência radical com reguladores (BACEN/IRS) através de dashboards diários que transformaram nossas reuniões de "interrogatório" em "colaboração", obtendo carta de não objeção em tempo recorde.`,
    r: `Eu entreguei uma migração que se tornou benchmark do setor. Migramos 100% das contas no prazo com 99,98% de precisão, superando todas as expectativas. O NPS recuperou para 78 (+26 pontos) e o churn de clientes premium ficou em 0,3% (40% abaixo da meta). O Process Cycle Time despencou de 72 para 4 horas por conta (-94%), eliminando o gargalo operacional. Evitamos US$ 180M em multas potenciais do BACEN e antecipamos R$ 46M em sinergias através da eficiência operacional. O CIO do Bradesco me ligou pessoalmente para expressar surpresa com a "migração mais suave que ele já viu", destacando que sua equipe assumiu controle em 30 dias vs. previsão de 90. O mecanismo de governança que criei virou padrão para 3 integrações futuras, sustentando excelência operacional.`,
    l: `Aprendi que ownership verdadeiro é ser a ponte que transforma caos em decisões de negócio acionáveis, mesmo sem mandato formal. É sobre assumir responsabilidade end-to-end, criar mecanismos de transparência e enquadrar problemas como oportunidades de negócio. Meu playbook se cristalizou: assumir responsabilidade total, criar visibilidade em tempo real e transformar resistência em colaboração através de dados. Hoje, em operações de pagamento, aplico a mesma lógica para garantir alta disponibilidade: assumo ownership da cadeia de ponta a ponta, monitoro métricas críticas em tempo real e trato cada incidente como oportunidade de fortalecer o sistema. Ownership não é cargo — é mentalidade de responsabilidade total pelo resultado.`
  },
  en: {
    s: `As Director of Operations responsible for post-sale integration of HSBC's Private Banking portfolio to Bradesco, I received a 6am email from the CFO with subject "Deal at risk". When I opened the migration dashboard my team had built, the situation was critical: the US$5.2B asset migration was imploding. I discovered we had 94,000 orphaned accounts without validation, NPS had plummeted to 52, and premium clients (60% of assets) were threatening to leave. The account validation Process Cycle Time was nonexistent — each account took 72 hours to process when it should take 4 hours. Worse: without traceability, nobody knew how many accounts were actually lost in regulatory limbo. The operation that should be our efficiency showcase was becoming a compliance nightmare that could cost US$180M in BACEN fines. I needed to take total control immediately.`,
    t: `Faced with that crisis threatening both reputation and financial viability of the operation, I decided to take total ownership of the transition, even without formal mandate. My challenge was transforming operational chaos into exemplary migration: migrate 100% of accounts with zero data loss, keep premium client churn below 0.5%, and recover NPS above 70. I positioned myself as the single-threaded owner who would make actionable decisions and be accountable for the final result.`,
    a: `I acted as true owner, taking end-to-end responsibility for the solution. First, I modeled complete financial risk and used that analysis to secure a R$9.5M buffer for additional controls, transforming resistance into strategic investment. Second, I created real-time monitoring mechanism using Python and Tableau that extracted logs from 7 legacy systems (AS/400, Oracle DBs) to temporary data lake, reducing anomaly detection time from 24 hours to near real-time. Third, when the Compliance director resisted changes, I didn't just show data — I framed the issue as business decision about operational cost per transaction of inefficiency. I piloted facial verification solution that reduced false positives from 4.3% to 0.8%, proving value before asking for approval. Fourth, I established radical transparency with regulators (BACEN/IRS) through daily dashboards that transformed our meetings from "interrogation" to "collaboration", obtaining non-objection letter in record time.`,
    r: `I delivered a migration that became industry benchmark. We migrated 100% of accounts on schedule with 99.98% accuracy, exceeding all expectations. NPS recovered to 78 (+26 points) and premium client churn stayed at 0.3% (40% below target). Process Cycle Time plummeted from 72 to 4 hours per account (-94%), eliminating operational bottleneck. We avoided US$180M in potential BACEN fines and anticipated R$46M in synergies through operational efficiency. Bradesco's CIO called me personally to express surprise at the "smoothest migration he had ever seen", highlighting that his team took control in 30 days vs. 90-day forecast. The governance mechanism I created became standard for 3 future integrations, sustaining operational excellence.`,
    l: `I learned that true ownership is being the bridge that transforms chaos into actionable business decisions, even without formal mandate. It's about taking end-to-end responsibility, creating transparency mechanisms, and framing problems as business opportunities. My playbook crystallized: take total responsibility, create real-time visibility, and transform resistance into collaboration through data. Today, in payment operations, I apply the same logic to ensure high availability: I take ownership of the end-to-end chain, monitor critical metrics in real-time, and treat each incident as opportunity to strengthen the system. Ownership isn't a title — it's a mindset of total responsibility for the outcome.`
  },
  fups: [
    {
      "q": "Como você garantiu o alinhamento com stakeholders que inicialmente se opuseram ao seu plano?",
      "a": "Eu agendei sessões 1:1 com cada diretor resistente para ouvir suas preocupações. Com o Diretor de Compliance, trouxe dados mostrando que 98% das contas bloqueadas pertenciam a clientes com mais de 10 anos de relacionamento. Propus um 'piloto de conformidade' para subconjunto de contas com nova verificação facial. O sucesso do piloto (0,8% de falso positivo) deu confiança para aprovar a solução em escala.",
      "q_en": "How did you ensure alignment with stakeholders who initially opposed your plan?",
      "a_en": "I scheduled 1:1 sessions with each resistant director to listen to their concerns. With the Compliance Director, I brought data showing 98% of blocked accounts belonged to clients with over 10 years of relationship. I proposed a 'compliance pilot' for subset of accounts with new facial verification. The pilot's success (0.8% false positive) gave confidence to approve the solution at scale."
    },
    {
      "q": "Qual foi o feedback do Bradesco após a conclusão da migração?",
      "a": "O CIO do Bradesco me ligou pessoalmente para expressar surpresa com a 'migração mais suave que ele já viu'. Destacou três pontos: precisão dos dados (99,98%), retenção de clientes HNWI (churn de 0,3%) e maturidade da documentação, que permitiu à equipe interna assumir controle em 30 dias vs. previsão de 90. Estabeleceu novo padrão para futuras aquisições.",
      "q_en": "What was the feedback from Bradesco after the migration was completed?",
      "a_en": "Bradesco's CIO called me personally to express surprise at the 'smoothest migration he had ever seen.' He highlighted three points: data accuracy (99.98%), HNWI client retention (0.3% churn), and documentation maturity, which allowed their internal team to take control in 30 days vs. 90-day forecast. It set new standard for future acquisitions."
    },
    {
      "q": "Você mencionou um 'mecanismo de monitoramento'. Poderia detalhar a tecnologia e o impacto?",
      "a": "Pipeline de dados que desenhei: scripts Python com Pandas extraindo logs de 7 sistemas legados (AS/400, Oracle DBs) para data lake temporário em S3. Outro script normalizava e agregava dados para dashboard Tableau. Impacto duplo: (1) Reduziu detecção de anomalias de 24h para tempo real. (2) Deu transparência diária aos reguladores, transformando reuniões de 'interrogatório' em 'colaboração'.",
      "q_en": "You mentioned a 'monitoring mechanism'. Could you detail the technology and its impact?",
      "a_en": "Data pipeline I designed: Python scripts with Pandas extracting logs from 7 legacy systems (AS/400, Oracle DBs) to temporary S3 data lake. Another script normalized and aggregated data for Tableau dashboard. Dual impact: (1) Reduced anomaly detection from 24h to real-time. (2) Gave daily transparency to regulators, transforming meetings from 'interrogation' to 'collaboration'."
    },
    {
      "q": "Como você mediu o sucesso da migração além das métricas financeiras?",
      "a": "Trackeei NPS (52→78), Process Cycle Time por conta (72h→4h), taxa de falsos positivos (4,3%→0,8%), tempo de resolução de anomalias (24h→tempo real) e satisfação dos reguladores (carta de não objeção em tempo recorde). Também medi adoção do mecanismo de governança: virou padrão para 3 integrações futuras.",
      "q_en": "How did you measure migration success beyond financial metrics?",
      "a_en": "I tracked NPS (52→78), Process Cycle Time per account (72h→4h), false positive rate (4.3%→0.8%), anomaly resolution time (24h→real-time), and regulator satisfaction (non-objection letter in record time). I also measured governance mechanism adoption: became standard for 3 future integrations."
    },
    {
      "q": "Qual foi o maior desafio técnico da migração?",
      "a": "Sincronizar 7 sistemas legados (AS/400, Oracle DBs) sem downtime. Cada sistema tinha formato de dados diferente e não havia API padrão. Criei pipeline ETL em Python que extraía dados incrementalmente, normalizava formatos e validava integridade em tempo real. O desafio foi garantir consistência sem parar operações críticas.",
      "q_en": "What was the biggest technical challenge of the migration?",
      "a_en": "Synchronizing 7 legacy systems (AS/400, Oracle DBs) without downtime. Each system had different data format and no standard API. I created Python ETL pipeline that extracted data incrementally, normalized formats, and validated integrity in real-time. The challenge was ensuring consistency without stopping critical operations."
    },
    {
      "q": "Como você lidou com a resistência inicial da equipe de Compliance?",
      "a": "Em vez de confrontar, ouvi suas preocupações sobre risco regulatório. Enquadrei a questão como decisão de negócio: mostrei que ineficiência custava R$ 2,3M/mês em retrabalho. Propus piloto controlado com 1.000 contas, provei redução de falsos positivos de 4,3% para 0,8%, e só então pedi aprovação para escala total.",
      "q_en": "How did you handle initial resistance from the Compliance team?",
      "a_en": "Instead of confronting, I listened to their regulatory risk concerns. I framed it as business decision: showed inefficiency cost R$2.3M/month in rework. I proposed controlled pilot with 1,000 accounts, proved false positive reduction from 4.3% to 0.8%, and only then asked for full-scale approval."
    },
    {
      "q": "Que aprendizado dessa migração você aplicou em projetos posteriores?",
      "a": "O playbook de ownership: (1) Assumir responsabilidade total mesmo sem mandato formal, (2) Criar visibilidade em tempo real através de dados, (3) Transformar resistência em colaboração provando valor primeiro. Apliquei isso em operações de pagamento: assumo ownership da cadeia end-to-end, monitoro métricas críticas e trato incidentes como oportunidades de melhoria.",
      "q_en": "What learning from this migration did you apply to subsequent projects?",
      "a_en": "The ownership playbook: (1) Take total responsibility even without formal mandate, (2) Create real-time visibility through data, (3) Transform resistance into collaboration by proving value first. I applied this in payment operations: I take ownership of end-to-end chain, monitor critical metrics, and treat incidents as improvement opportunities."
    },
    {
      "q": "Como você garantiu que o conhecimento da migração fosse preservado?",
      "a": "Documentei todo o processo em playbook de 47 páginas com runbooks técnicos, decisões de arquitetura e lições aprendidas. Treinei 12 pessoas-chave em sessões hands-on. Mais importante: o mecanismo de governança que criei se tornou template reutilizável, sendo aplicado com sucesso em 3 integrações posteriores.",
      "q_en": "How did you ensure migration knowledge was preserved?",
      "a_en": "I documented the entire process in 47-page playbook with technical runbooks, architecture decisions, and lessons learned. I trained 12 key people in hands-on sessions. Most importantly: the governance mechanism I created became reusable template, successfully applied in 3 subsequent integrations."
    },
    {
      "q": "Qual foi o ROI real da migração para o HSBC?",
      "a": "ROI de 340% no primeiro ano: evitamos US$ 180M em multas potenciais, antecipamos R$ 46M em sinergias operacionais, reduzimos custo operacional por transação em 67% (de R$ 12 para R$ 4) e mantivemos 99,7% dos clientes premium (valor médio de US$ 2,8M por cliente). Investimento total: R$ 9,5M.",
      "q_en": "What was the real ROI of the migration for HSBC?",
      "a_en": "340% ROI in first year: avoided US$180M in potential fines, anticipated R$46M in operational synergies, reduced operational cost per transaction by 67% (from R$12 to R$4), and retained 99.7% of premium clients (average value US$2.8M per client). Total investment: R$9.5M."
    },
    {
      "q": "Como você mediu a satisfação dos reguladores durante o processo?",
      "a": "Criei dashboard específico para BACEN/IRS com métricas de transparência: tempo de resposta a solicitações (24h→2h), completude de documentação (87%→99%), e aderência a cronograma (94% vs. 67% histórico). O resultado: carta de não objeção em 45 dias vs. média histórica de 120 dias. Transparência proativa eliminou desconfiança.",
      "q_en": "How did you measure regulator satisfaction during the process?",
      "a_en": "I created specific dashboard for BACEN/IRS with transparency metrics: response time to requests (24h→2h), documentation completeness (87%→99%), and schedule adherence (94% vs. 67% historical). Result: non-objection letter in 45 days vs. 120-day historical average. Proactive transparency eliminated distrust."
    },
    {
      "q": "Qual foi seu maior erro ou falha nesse caso?",
      "a": "Eu subestimei a complexidade de sincronizar 7 sistemas legados no início e prometi prazo agressivo de 90 dias. Perdi 3 semanas debugando incompatibilidades de formato de dados que não havia mapeado. Aprendi a fazer discovery técnico mais profundo antes de comprometer timelines.",
      "q_en": "What was your biggest mistake or failure in this case?",
      "a_en": "I underestimated the complexity of synchronizing 7 legacy systems early on and promised aggressive 90-day timeline. I lost 3 weeks debugging data format incompatibilities I hadn't mapped. I learned to do deeper technical discovery before committing to timelines."
    },
    {
      "q": "O que você faria diferente hoje?",
      "a": "Eu começaria com auditoria técnica completa dos 7 sistemas legados antes de definir cronograma, envolveria o time de Compliance desde o dia zero no desenho da solução (não só na validação), e criaria ambiente de staging para testar integração completa antes do go-live.",
      "q_en": "What would you do differently today?",
      "a_en": "I would start with complete technical audit of the 7 legacy systems before setting timeline, involve Compliance team from day zero in solution design (not just validation), and create staging environment to test full integration before go-live."
    },
    {
      "q": "Qual foi o obstáculo mais difícil de superar que você enfrentou?",
      "a": "Eu enfrentei resistência do Diretor de Compliance que via qualquer automação como risco regulatório inaceitável. Superei isso enquadrando a questão como decisão de negócio (R$ 2,3M/mês em retrabalho), propondo piloto controlado e provando redução de falsos positivos de 4,3% para 0,8% antes de pedir aprovação total.",
      "q_en": "What was the most difficult obstacle you faced and overcame?",
      "a_en": "I faced resistance from the Compliance Director who saw any automation as unacceptable regulatory risk. I overcame it by framing the issue as business decision (R$2.3M/month in rework), proposing controlled pilot, and proving false positive reduction from 4.3% to 0.8% before asking for full approval."
    },
    {
      "q": "Quais foram os principais riscos e como você os mitigou?",
      "a": "Eu identifiquei quatro riscos críticos: (1) perda de dados durante migração (mitigado com validação em tempo real e rollback automático), (2) multas regulatórias (mitigado com dashboards diários para BACEN/IRS), (3) churn de clientes premium (mitigado com comunicação proativa e SLA de 4h), (4) downtime operacional (mitigado com migração incremental e testes em staging).",
      "q_en": "What were the main risks and how did you mitigate them?",
      "a_en": "I identified four critical risks: (1) data loss during migration (mitigated with real-time validation and automatic rollback), (2) regulatory fines (mitigated with daily dashboards for BACEN/IRS), (3) premium client churn (mitigated with proactive communication and 4h SLA), (4) operational downtime (mitigated with incremental migration and staging tests)."
    },
    {
      "q": "Que dados você usou e qual foi a racional de cálculo?",
      "a": "Eu usei histórico de 94 mil contas dos últimos 24 meses, cruzei com dados de sinistralidade e tempo de resolução de 7 sistemas legados (AS/400, Oracle DBs). Calculei o custo operacional por transação como (FTE cost + tech cost) / volume mensal, e priorizei contas por valor de ativo x risco de churn (score de 1 a 100).",
      "q_en": "What data did you use and what was the calculation rationale?",
      "a_en": "I used history of 94k accounts from past 24 months, cross-referenced with claims data and resolution time from 7 legacy systems (AS/400, Oracle DBs). I calculated operational cost per transaction as (FTE cost + tech cost) / monthly volume, and prioritized accounts by asset value x churn risk (score 1-100)."
    },
    {
      "q": "Como você usou o aprendizado desse caso em outras frentes ou trabalhos?",
      "a": "Eu repliquei o playbook de ownership em 3 integrações futuras no HSBC (virando template padrão), apliquei o mecanismo de monitoramento em tempo real em operações de pagamento na fintech (reduzindo tempo de detecção de incidentes de 15min para 30s), e treinei 5 líderes em outras empresas usando o framework de transparência radical com reguladores.",
      "q_en": "How did you use the learning from this case in other fronts or work?",
      "a_en": "I replicated the ownership playbook in 3 future HSBC integrations (becoming standard template), applied real-time monitoring mechanism in fintech payment operations (reducing incident detection time from 15min to 30s), and trained 5 leaders at other companies using the radical transparency framework with regulators."
    }
  ]
};

export default case_1;

