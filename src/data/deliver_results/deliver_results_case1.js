// Case 1 - deliver_results
const case_1 = {
  id: "huawei-world-cup-4g",
  title: "Liderei o Upgrade 4G/5G da Copa do Mundo 2014 Entregando 99,8% de Disponibilidade",
  title_pt: "Liderei o Upgrade 4G/5G da Copa do Mundo 2014 Entregando 99,8% de Disponibilidade",
  title_en: "Led the 4G/5G Upgrade for 2014 FIFA World Cup with 99.8% Availability",
  company: "Huawei",
  period: "08/2013-07/2014",
  isTopCase: true,
  isGoodCase: false,
  pt: {
    s: `A ligação de emergência dos quatro CTOs às 2h da manhã tinha um tom de pânico: "É tecnicamente impossível." Eles acabavam de herdar um projeto que ninguém acreditava ser viável — entregar upgrade 4G de 86 sites em 12 cidades-sede para processar 8,6 milhões de transações contactless durante a Copa do Mundo FIFA 2014, enfrentando seis obstáculos críticos simultâneos. Obstáculo 1: licenças da ANATEL travadas em 168 dias (meta 70), com processo burocrático emperrado em 19 municípios. Obstáculo 2: dois integradores incompetentes entregando apenas 61% dos sites no prazo, gerando atraso em cascata. Obstáculo 3: 280 toneladas de equipamentos 4G retidos em portos e alfândegas há meses. Obstáculo 4: orçamento rígido de US$ 140M sem margem para contingências. Obstáculo 5: quatro operadoras (Vivo, Claro, TIM, Oi) desalinhadas com prioridades conflitantes. Obstáculo 6: risco iminente de protestos comunitários bloqueando torres. O custo do fracasso para 3,4 milhões de torcedores nos estádios: R$ 28M/dia em transações perdidas + US$ 10M de multa por estádio da FIFA = US$ 38M totais em penalidades. Ninguém acreditava que fosse possível — eu tinha 11 meses para provar que sim.`,
    t: `O desafio crítico que enfrentei foi transformar seis bloqueadores técnicos simultâneos em um projeto executável em apenas 11 meses — algo que toda a indústria considerava impossível. Eu fui nomeado PMO, mas eu me declarei owner end-to-end. Eu prometi aos CTOs das operadoras e ao presidente da Huawei Latam que eu entregaria os 86 sites de upgrade ate 10 dias antes do primeiro jogo, eu garantiria disponibilidade inicial de 99,5%, throughput de 110 Mbps e eu manteria o CAPEX em US$ 140M.`,
    a: `Minha abordagem foi atacar os seis obstáculos em paralelo com urgência de guerra, transformando cada bloqueador em mecanismo replicável.

Eu me declarei owner end-to-end e prometi entregar o impossivel. Eu ataquei os seis obstaculos em paralelo com urgencia de guerra. SUPERANDO OBSTACULO 1 (Licencas travadas 168 dias): eu formei task force de emergencia com juridico/regulatorio/engenharia, eu redesenhei completamente o dossie tecnico com checklist digital automatizado para 19 municipios e eu negociei pessoalmente janela semanal fixa com a superintendencia da ANATEL. Resultado: lead time despencou de 168 para 49 dias (-71%), desbloqueando pipeline inteiro. SUPERANDO OBSTACULO 2 (Integradores ruins 61%): eu criei Vendor Performance Index com scoring 0-100 em cinco eixos (prazo, qualidade, seguranca, cooperacao, rework). Quem caia abaixo de 85 recebia recovery squad meu onsite por 14 dias. Quando dois integradores resistiram, eu mostrei risco de multa US$ 6M, eu acionei clausulas contratuais e eu os substitui em 96 horas mesmo com diretor comercial bloqueando. Aderencia explodiu de 61% para 97% com zero acidentes. SUPERANDO OBSTACULO 3 (280 toneladas presas): eu construi torre de controle em tempo real integrando SAP, Receita Federal, porto e aeroporto; eu renegociei DHL com SLA blindado de 72h e seguro anti-retencao; eu amarrei pagamentos a QR code de check-in no site. Eu eliminei 11 dias de estoque parado e desbloqueei cadeia logistica. SUPERANDO OBSTACULO 4 (Budget apertado US$ 140M): eu substitui sites indoor caros por small cells modulares (cortei CAPEX em US$ 3,2M) e eu reinvesti em redundancia de energia para 18 sites criticos, mantendo orcamento rigido. SUPERANDO OBSTACULO 5 (4 operadoras desalinhadas): eu organizei comite semanal executivo, eu compartilhei dashboard unico de transparencia total e eu priorizei sites por numero de assinantes + risco de pagamento contactless, alinhando todos os stakeholders. SUPERANDO OBSTACULO 6 (Protestos Goiania): quando manifestantes tentaram embargar torre, eu voei para la, eu negociei pessoalmente com prefeito, eu apresentei estudo de impacto socioeconomico (2.100 empregos temporarios + R$ 12M em compras locais) e eu garanti contrapartida ambiental com reflorestamento de 1,5 hectare. Torre liberada em 72h.`,
    r: `O impacto mensurável para os 3,4 milhões de torcedores superou todas as expectativas — provamos que o "impossível" era possível com mecanismos corretos.

Eu entreguei os 86 sites 10 dias antes do kickoff, assegurando experiencia impecavel para 3,4 milhoes de torcedores: disponibilidade inaugural de 99,8%, throughput medio 124 Mbps (13% acima da meta) e 8,6 milhoes de transacoes sem contato sem incidentes. Os fas puderam comprar ingressos, comida e souvenirs sem filas, com tempo medio de transacao de 2,8 segundos. Eu medi NPS das operadoras subindo de 46 para 71 (+25), satisfacao dos torcedores em 94% (pesquisa FIFA) e call center reduzir 42% das reclamacoes de cobertura nas cidades-sede. Eu garanti licencas emitidas em 49 dias (-71%), negociei reducao de 18% no custo logistico (US$ 4,9M) e evitei US$ 38M em penalidades contratuais. Impacto para clientes finais: zero blackouts durante jogos, latencia media 15ms permitindo chamadas de video em tempo real, e 95% de cobertura 4G nas fan zones (vs. meta 90%). O VPI e a torre que criei viraram mecanismos padrao da Huawei Latam replicados em 11 paises.`,
    l: `A lição principal desse caso transformou minha abordagem de gestão de crises: projetos considerados impossíveis exigem transformar cada obstáculo em mecanismo replicável.

Aprendi que projetos considerados impossiveis exigem transformar cada obstaculo em mecanismo replicavel: licencas travadas viraram checklist digital automatizado; integradores ruins viraram VPI com recovery squads; logistica caótica virou torre de controle em tempo real; stakeholders desalinhados viraram comite semanal de transparencia; protestos viraram playbook de impacto socioeconomico. Os seis bloqueadores que herdei se tornaram tres mechanisms (pipeline digital, VPI, torre) hoje replicados em 11 paises da Huawei Latam e ativos nos rollouts que lidero em 2024. Obstaculo superado e mecanismo criado.`
  },
  en: {
    s: `The emergency call from four CTOs at 2am had a panicked tone: "It's technically impossible." They had just inherited a project no one believed viable—deliver an 86-site 4G upgrade across 12 host cities to process 8.6 million contactless transactions during the 2014 FIFA World Cup, while facing six critical obstacles simultaneously. Obstacle 1: ANATEL licenses stuck at 168 days (target 70), with bureaucratic processes gridlocked across 19 municipalities. Obstacle 2: two incompetent integrators delivering only 61% of sites on time, creating cascading delays. Obstacle 3: 280 tons of 4G equipment trapped in ports and customs for months. Obstacle 4: rigid US$140M budget with zero contingency margin. Obstacle 5: four carriers (Vivo, Claro, TIM, Oi) misaligned with conflicting priorities. Obstacle 6: imminent risk of community protests blocking towers. The cost of failure for 3.4 million fans in stadiums: R$28M/day in lost transactions + US$10M fine per stadium from FIFA = US$38M total in penalties. Nobody believed it was possible—I had 11 months to prove them wrong.`,
    t: `The critical challenge I faced was transforming six simultaneous technical blockers into an executable project in just 11 months — something the entire industry considered impossible.

I was appointed PMO but declared myself the single-threaded owner. I committed to the carrier CTOs and Huawei Latam president that I would deliver all 86 upgrade sites ten days before kickoff, guarantee 99.5% availability at launch, 110 Mbps throughput, and stay within the US$140M CAPEX.`,
    a: `My approach was to attack all six obstacles in parallel with wartime urgency, transforming each blocker into a replicable mechanism.

I declared myself single-threaded owner and committed to deliver the impossible. I attacked all six obstacles in parallel with wartime urgency. OVERCOMING OBSTACLE 1 (Licenses stuck 168 days): I formed an emergency task force with legal, regulatory, and engineering, completely redesigned the technical dossier with automated digital checklist for 19 municipalities, and personally negotiated a fixed weekly slot with ANATEL's superintendent. Result: lead time plummeted from 168 to 49 days (-71%), unblocking entire pipeline. OVERCOMING OBSTACLE 2 (Bad integrators 61%): I created Vendor Performance Index with 0-100 scoring across five axes (schedule, quality, safety, cooperation, rework). Scores below 85 triggered my onsite recovery squad for 14 days. When two integrators resisted, I showed US$6M penalty risk, invoked contract clauses, and replaced them in 96 hours despite commercial director blocking. On-time delivery exploded from 61% to 97% with zero accidents. OVERCOMING OBSTACLE 3 (280 tons trapped): I built real-time control tower integrating SAP, Federal Revenue, ports, and airports; renegotiated DHL with hardened 72h SLA and anti-seizure insurance; tied payments to on-site QR check-in. Eliminated 11 days of idle inventory and unblocked supply chain. OVERCOMING OBSTACLE 4 (Tight US$140M budget): I replaced expensive indoor sites with modular small cells (cut CAPEX by US$3.2M) and reinvested in power redundancy for 18 critical sites, maintaining rigid budget. OVERCOMING OBSTACLE 5 (4 misaligned carriers): I organized weekly executive committee, shared single transparency dashboard, and prioritized sites by subscriber count + contactless payment risk, aligning all stakeholders. OVERCOMING OBSTACLE 6 (Goiania protests): when protesters tried to block tower, I flew there, personally negotiated with mayor, presented socioeconomic impact study (2,100 temporary jobs + R$12M local spending), and guaranteed environmental offset with 1.5-hectare reforestation. Tower cleared in 72h.`,
    r: `The measurable impact for the 3.4 million fans exceeded all expectations — we proved the "impossible" was possible with the right mechanisms.

I finished all 86 sites ten days early, ensuring flawless experience for 3.4 million fans: 99.8% launch availability, 124 Mbps average throughput (13% above target), and 8.6 million contactless transactions processed incident-free. Fans could buy tickets, food, and souvenirs without queues, with 2.8-second average transaction time. I measured carrier NPS jumping from 46 to 71 (+25), fan satisfaction hitting 94% (FIFA survey), and network complaints in host cities dropping 42%. I secured licensing in 49 days (-71%), negotiated 18% logistics cost reduction (US$4.9M), and avoided US$38M in penalties. Impact for end customers: zero blackouts during games, 15ms average latency enabling real-time video calls, and 95% 4G coverage in fan zones (vs. 90% target). The VPI and control tower I created became standard mechanisms across 11 Huawei Latam countries.`,
    l: `The main lesson from this case transformed my approach to crisis management: projects deemed impossible require transforming each obstacle into a replicable mechanism.

I learned that projects deemed impossible require transforming each obstacle into replicable mechanism: stuck licenses became automated digital checklist; bad integrators became VPI with recovery squads; chaotic logistics became real-time control tower; misaligned stakeholders became weekly transparency committee; protests became socioeconomic impact playbook. The six blockers I inherited became three mechanisms (digital pipeline, VPI, control tower) now replicated across 11 Huawei Latam countries and active in rollouts I lead in 2024. Obstacle overcome is mechanism created.`
  },
  fups: [
    {
      "q": "Qual foi o obstaculo mais dificil de superar dos seis que voce enfrentou?",
      "a": "O Obstaculo 2 (integradores ruins com 61% de aderencia). Eu precisei substituir dois fornecedores em 96 horas mesmo com o diretor comercial bloqueando, mostrar risco de multa US$ 6M e implantar VPI com recovery squads onsite. Foi critico porque o atraso em cascata ameacava todo o cronograma da Copa." ,
      "q_en": "Which was the toughest obstacle to overcome among the six you faced?",
      "a_en": "Obstacle 2 (bad integrators with 61% adherence). I had to replace two vendors in 96 hours despite commercial director blocking, show US$6M penalty risk, and deploy VPI with onsite recovery squads. It was critical because cascading delays threatened the entire World Cup schedule." 
    },
    {
      "q": "Como voce atacou seis obstaculos em paralelo sem perder foco?",
      "a": "Eu criei torre de controle unificada rastreando os seis em tempo real com dashboard unico para CTOs das quatro operadoras. Cada obstaculo tinha owner dedicado (task force licencas, squad vendors, time logistica) reportando para mim diariamente. Eu priorizava por impacto no caminho critico: licencas e vendors primeiro (bloqueadores), depois logistica e budget (otimizadores)." ,
      "q_en": "How did you attack six obstacles in parallel without losing focus?",
      "a_en": "I created unified control tower tracking all six real-time with single dashboard for CTOs of four carriers. Each obstacle had dedicated owner (licensing task force, vendor squad, logistics team) reporting to me daily. I prioritized by critical path impact: licenses and vendors first (blockers), then logistics and budget (optimizers)." 
    },
    {
      "q": "Como voce derrubou o lead time de licenca de 168 para 49 dias (Obstaculo 1)?",
      "a": "Eu formei task force de emergencia com juridico/regulatorio/engenharia, redesenhei completamente o dossie tecnico com checklist digital automatizado para 19 municipios e negociei pessoalmente janela semanal fixa com a superintendencia da ANATEL. A digitalizacao eliminou retrabalho e a janela fixa criou previsibilidade." ,
      "q_en": "How did you cut license lead time from 168 to 49 days (Obstacle 1)?",
      "a_en": "I formed emergency task force with legal/regulatory/engineering, completely redesigned technical dossier with automated digital checklist for 19 municipalities, and personally negotiated fixed weekly slot with ANATEL's superintendent. Digitization eliminated rework and fixed slot created predictability." 
    },
    {
      "q": "Como funcionava o Vendor Performance Index que voce criou (Obstaculo 2)?",
      "a": "Score de 0 a 100 com cinco eixos (prazo, qualidade, seguranca, cooperacao, retrabalho). Eu calculava semanalmente e quem ficava abaixo de 85 recebia recovery squad meu onsite por 14 dias com plano de acao obrigatorio. Score abaixo de 70 por duas semanas consecutivas ativava clausula de substituicao. Isso fez a aderencia explodir de 61% para 97%." ,
      "q_en": "How did the Vendor Performance Index you created work (Obstacle 2)?",
      "a_en": "A 0-100 score on five axes (schedule, quality, safety, collaboration, rework). I calculated weekly and scores below 85 triggered my onsite recovery squad for 14 days with mandatory action plan. Score below 70 for two consecutive weeks activated replacement clause. This made adherence explode from 61% to 97%." 
    },
    {
      "q": "Qual foi o maior conflito com fornecedores e como voce venceu?",
      "a": "Integrador incumbente se recusou a liberar equipe alegando clausulas contratuais. Eu reuni o presidente da Huawei Latam, mostrei risco de multa de US$ 6M da FIFA, acionei clausula de performance insuficiente e migrei todo o time em 96 horas. Foi brutal mas necessario - estava comprometendo os 86 sites." ,
      "q_en": "What was the toughest supplier conflict and how did you win it?",
      "a_en": "Incumbent integrator refused to release crews citing contractual clauses. I gathered Huawei Latam president, showed US$6M FIFA penalty risk, invoked insufficient performance clause, and migrated entire team in 96 hours. It was brutal but necessary - it was compromising all 86 sites." 
    },
    {
      "q": "Como voce desbloqueou as 280 toneladas presas em portos (Obstaculo 3)?",
      "a": "Eu construi torre de controle em tempo real integrando SAP, Receita Federal, porto e aeroporto via APIs. Renegociei DHL com SLA blindado de 72h port-to-site e seguro anti-retencao. Amarrei pagamentos a QR code de check-in no site, eliminando 11 dias de estoque parado. A visibilidade end-to-end foi o game changer." ,
      "q_en": "How did you unblock the 280 tons trapped in ports (Obstacle 3)?",
      "a_en": "I built real-time control tower integrating SAP, Federal Revenue, ports, and airports via APIs. Renegotiated DHL with hardened 72h port-to-site SLA and anti-seizure insurance. Tied payments to on-site QR check-in, eliminating 11 days of idle inventory. End-to-end visibility was the game changer." 
    },
    {
      "q": "Como voce garantiu experiencia impecavel para os 3,4 milhoes de torcedores?",
      "a": "Eu priorizei sites por densidade de torcedores e volume de transacoes projetado. Monitorei tickets por estadio em tempo real, acionei tuning de radio em 48h quando detectava degradacao e ampliei capacidade RAN em 15 setores prioritarios antes da fase de grupos. Resultado: zero blackouts, 2,8s por transacao, 94% de satisfacao FIFA." ,
      "q_en": "How did you ensure flawless experience for 3.4 million fans?",
      "a_en": "I prioritized sites by fan density and projected transaction volume. I monitored tickets per stadium real-time, triggered RF tuning within 48h when detecting degradation, and expanded RAN capacity in 15 priority sectors before group stage. Result: zero blackouts, 2.8s per transaction, 94% FIFA satisfaction." 
    },
    {
      "q": "Que metricas voce acompanhou no comite semanal com as quatro operadoras?",
      "a": "Eu apresentava dashboard com disponibilidade por site, backlog de licenca ANATEL, status de vendor com VPI score, risco de protesto comunitario, projecao de transacoes contactless por estadio, NPS semanal das operadoras e progress dos seis obstaculos. Transparencia total gerou alinhamento executivo." ,
      "q_en": "Which metrics did you track in weekly committee with four carriers?",
      "a_en": "I presented dashboard with site availability, ANATEL license backlog, vendor status with VPI score, community protest risk, contactless transaction forecast per stadium, weekly carrier NPS, and progress on six obstacles. Total transparency generated executive alignment." 
    },
    {
      "q": "Como voce calculou o impacto de 8,6M transacoes sem incidente?",
      "a": "Cruzei dados das operadoras com adquirentes parceiros, medi pico de transacoes por minuto e confirmei zero rollback financeiro." ,
      "q_en": "How did you measure the 8.6M incident-free transactions?",
      "a_en": "I cross-referenced carrier data with acquiring partners, tracked peak transactions per minute, and validated zero financial rollbacks." 
    },
    {
      "q": "Qual foi a maior decisao de trade-off orcamentario?",
      "a": "Substitui site indoor caro por small cells modulares (reduzi CAPEX em US$ 3,2M) e reinvesti em redundancia de energia para 18 sites criticos." ,
      "q_en": "What was the toughest budget trade-off?",
      "a_en": "I swapped expensive indoor sites for modular small cells (cut CAPEX by US$3.2M) and reinvested in power redundancy for 18 critical sites." 
    },
    {
      "q": "Como voce negociou a resolucao dos protestos em Goiania (Obstaculo 6)?",
      "a": "Quando manifestantes tentaram embargar a torre, eu voei para Goiania no dia seguinte, negociei pessoalmente com o prefeito e lider comunitario por 8 horas. Apresentei estudo de impacto socioeconomico mostrando 2.100 empregos temporarios + R$ 12M em compras locais. Garanti contrapartida ambiental com reflorestamento de 1,5 hectare. Torre liberada em 72h." ,
      "q_en": "How did you negotiate resolution of Goiania protests (Obstacle 6)?",
      "a_en": "When protesters tried to block tower, I flew to Goiania next day, personally negotiated with mayor and community leader for 8 hours. I presented socioeconomic impact study showing 2,100 temporary jobs + R$12M local spending. I guaranteed environmental offset with 1.5-hectare reforestation. Tower cleared in 72h." 
    },
    {
      "q": "Como voce transformou os seis obstaculos em mecanismos replicaveis?",
      "a": "Eu documentei cada solucao como playbook: (1) Checklist digital ANATEL virou template para outros rollouts; (2) VPI com recovery squads virou governanca padrao de vendors; (3) Torre de controle logistica virou central de operacoes permanente; (4) Comite semanal multi-operadora virou ritual de alinhamento; (5) Playbook de impacto socioeconomico virou ferramenta de stakeholder management. Hoje estao ativos em 11 paises." ,
      "q_en": "How did you transform six obstacles into replicable mechanisms?",
      "a_en": "I documented each solution as playbook: (1) ANATEL digital checklist became template for other rollouts; (2) VPI with recovery squads became standard vendor governance; (3) Logistics control tower became permanent operations center; (4) Weekly multi-carrier committee became alignment ritual; (5) Socioeconomic impact playbook became stakeholder management tool. Today active in 11 countries." 
    }
  ]
};

export default case_1;
