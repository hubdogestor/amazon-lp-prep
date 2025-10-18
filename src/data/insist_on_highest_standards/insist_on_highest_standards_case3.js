// insist_on_highest_standards_case3.js
const case_3 = {
  id: "sicredi-payment-sla",
  title_pt: "Redesenhei o Gateway de Pagamentos do Sicredi para 99.99% de Disponibilidade apos falha critica",
  title_en: "I Redesigned the Sicredi Payment Gateway for 99.99% Availability After a Critical Failure",
  company: "Sicredi",
  period: "02/2019 - 11/2019",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: "Em fevereiro de 2019, atuando como Product Strategist no Sicredi, uma instituicao financeira cooperativa com 6,4 milhoes de associados é R$ 263 bilhoes em ativos, uma falha de 14 minutos no gateway de pagamentos causou o cancelamento de 23 cirurgias em um hospital parceiro. Pacientes estavam anestesiados, equipes medicas posicionadas, é nenhuma autorizacao de pagamento passava devido a uma instabilidade no sistema legado. O SLA vigente era de 99,5%, o que permitia ate 43 horas de indisponibilidade anual, padrao aceitavel no mercado mas insuficiente para servicos criticos como saude, onde segundos importam. Como responsável pela experiencia de pagamentos, assumi que o padrao da industria não bastava; precisava elevar para 99,99% para proteger vidas é negocios dependentes de transacoes em tempo real.",
    t: "Minha tarefa, que propus é negociei diretamente com o diretor executivo, era elevar o padrao de disponibilidade do gateway de 99,5% para 99,99%, os 'quatro noves', reduzindo indisponibilidade anual de 43 horas para menos de 52 minutos. Isso exigia repensar arquitetura, processos é cultura de confiabilidade, equilibrando opcoes como patches rapidos no sistema legado ou investimento em redesign total, optando pela segunda para sustentabilidade, mesmo com aumento de 40% nos custos iniciais, priorizando valor de longo prazo para clientes é instituicao.",
    a: "Comecei elaborando o business case: auditei 18 meses de incidentes, cruzando volume de transacoes por minuto com ticket medio de servicos criticos, provando que cada hora de indisponibilidade custava R$ 187 mil em perdas é risco de churn. Quando o diretor de engenharia questionou o aumento de 40% nos custos, apresentei no comite executivo, mostrando payback em 9 meses baseado em dados historicos. Com aprovacao, lancei o programa 'Reliability 4x9': estabeleci 28 SLOs claros, um error budget mensal que congelava features se excedido, é testes de resiliencia automatizados no CI/CD bloqueando deploys falhos em 1.240 cenários. Liderei a migração de ativo-passivo para ativo-ativo distribuida entre dois datacenters é AWS, implementando circuit breakers em APIs criticas é health checks a cada 15 segundos. Para cultura, criei Game Days mensais é post-mortems sem culpa em 24 horas, envolvendo equipes cross-funcionais. Negociei SLAs mais rigorosos com Visa é Cielo, é para restaurar confianca, contatei diretores de cinco hospitais, oferecendo suporte prioritario no piloto, ajustando baseado em seu feedback.",
    r: "Em novembro de 2019, alcancamos 99,992% de disponibilidade, com apenas 4,2 minutos de downtime em nove meses, evitando perdas estimadas em R$ 1,8 milhao é churn de 3%. O investimento de R$ 1,2 milhao gerou R$ 3,8 milhoes em novas receitas de transacoes hospitalares, com payback em 7 meses. O 'Reliability 4x9 Playbook' foi adotado como padrao para todos gateways, é testes automatizados reduziram incidentes em 62%. Trade-offs como custo inicial valeram, elevando NPS de parceiros de 72 para 91, é criando sustentabilidade, com o sistema operando sem falhas criticas apos minha saida.",
    l: "Aprendi que padroes altos exigem mecanismos que tornem excelencia inevitavel, como error budgets. Meu erro foi não alinhar OKRs entre SRE é Produto desde o início, prolongando debates; hoje, faria diferente criando metas compartilhadas para velocidade é estabilidade. Apliquei isso na Unimed para sistemas de pagamentos, reduzindo downtime em 50%. Em Payments Ops, usaria SLOs rigorosos é Game Days para garantir resiliencia em escala."
  },
  en: {
    s: "In February 2019, as Product Strategist at Sicredi, a cooperative financial institution with 6.4 million members and R$ 263 billion in assets, a 14-minute failure in the payment gateway caused the cancellation of 23 surgeries at a partner hospital. Patients were anesthetized, medical teams positioned, and no payment authorizations went through due to instability in the legacy system. The current SLA was 99.5%, allowing up to 43 hours of annual downtime, an acceptable industry standard but insufficient for critical services like healthcare, where seconds matter. As responsible for the payments experience, I assumed the industry standard wasn't enough; I needed to elevate it to 99.99% to protect lives and businesses dependent on real-time transactions.",
    t: "My task, which I proposed and negotiated directly with the executive director, was to elevate the gateway's availability standard from 99.5% to 99.99%, the 'four nines', reducing annual downtime from 43 hours to under 52 minutes. This required rethinking architecture, processes, and reliability culture, balancing options like quick patches on the legacy system or full redesign investment, opting for the latter for sustainability, even with a 40% initial cost increase, prioritizing long-term value for customers and the institution.",
    a: "I started by elaborating the business case: audited 18 months of incidents, crossing transactions per minute volume with critical services' average ticket, proving each downtime hour cost R$ 187 thousand in losses and churn risk. When the engineering director questioned the 40% cost increase, I presented to the executive committee, showing 9-month payback based on historical data. With approval, I launched the 'Reliability 4x9' program: established 28 clear SLOs, a monthly error budget that froze features if exceeded, and automated resilience tests in CI/CD blocking faulty deploys in 1,240 scenarios. I led the migration from active-passive to active-active distributed between two datacenters and AWS, implementing circuit breakers in critical APIs and health checks every 15 seconds. For culture, I created monthly Game Days and blame-free post-mortems in 24 hours, involving cross-functional teams. I negotiated stricter SLAs with Visa and Cielo, and to restore trust, contacted directors of five hospitals, offering priority support in the pilot, adjusting based on their feedback.",
    r: "In November 2019, we achieved 99.992% availability, with only 4.2 minutes of downtime in nine months, avoiding estimated R$ 1.8 million losses and 3% churn. The R$ 1.2 million investment generated R$ 3.8 million in new hospital transaction revenues, with 7-month payback. The 'Reliability 4x9 Playbook' was adopted as standard for all gateways, and automated tests reduced incidents by 62%. Trade-offs like initial cost were worth it, elevating partner NPS from 72 to 91, and creating sustainability, with the system operating without critical failures after my departure.",
    l: "I learned high standards require mechanisms making excellence inevitable, like error budgets. My error was not aligning OKRs between SRE and Product from the start, prolonging debates; today, I would create shared goals for speed and stability. I applied this at Unimed for payment systems, reducing downtime by 50%. In Payments Ops, I would use strict SLOs and Game Days to ensure resilience at scale."
  },
  fups: [
    {
      q: "Qual foi seu maior erro nesse caso?",
      a: "Meu maior erro foi não alinhar OKRs entre SRE é Produto desde o início, o que prolongou debates sobre velocidade vs. estabilidade. Assumi que SLOs bastariam, mas isso gerou atrito desnecessario. Poderia ter evitado criando metas compartilhadas logo no lançamento do programa.",
      q_en: "What was your biggest mistake in this case?",
      a_en: "My biggest mistake was not aligning OKRs between SRE and Product from the start, prolonging debates on speed vs. stability. I assumed SLOs would suffice, but it created unnecessary friction. I could have avoided it by creating shared goals right at program launch."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Hoje, criaria um OKR compartilhado entre SRE é Produto desde o dia um, combinando metas de confiabilidade é entrega. Isso alinharia incentivos é mudaria o debate de 'velocidade vs. estabilidade' para 'como entregar rapido é confiavel'.",
      q_en: "What would you do differently today?",
      a_en: "Today, I would create a shared OKR between SRE and Product from day one, combining reliability and delivery goals. That would align incentives and shift the debate from 'speed vs. stability' to 'how to deliver quickly and reliably'."
    },
    {
      q: "Qual foi o obstáculo mais dificil de superar?",
      a: "Convencer a diretoria a aprovar aumento de 40% nos custos durante cortes. Superei mudando narrativa: não gasto, investimento com retorno em 9 meses. Perda de R$ 187 mil por hora de downtime provou que adiar custaria mais.",
      q_en: "What was the most difficult obstacle to overcome?",
      a_en: "Convincing the board to approve a 40% cost increase amid cuts. I reframed it as investment with 9-month payback. BRL 187 thousand loss per downtime hour proved delay would cost more."
    },
    {
      q: "Quais foram os principais riscos é como você os mitigou?",
      a: "Principais riscos eram split-brain em ativo-ativo, com datacenters dessincronizados. Mitigamos com quorum é timestamp distribuido, testados em tres Game Days. Outro risco era resistencia cultural, superada com post-mortems sem culpa.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "Main risks were split-brain in active-active, with desynced datacenters. Mitigated with quorum and distributed timestamps, tested in three Game Days. Another was cultural resistance, overcome with blame-free post-mortems."
    },
    {
      q: "Que dados você usou, qual foi a racional de calculo?",
      a: "Usei 18 meses de incidentes: volume por minuto x ticket medio x margem. Para R$ 187 mil/hora, foquei em picos é autorizacoes hospitalares, estimativa conservadora baseada em dados reais para defender business case.",
      q_en: "What data did you use, what was the calculation rationale?",
      a_en: "Used 18 months of incidents: volume per minute x average ticket x margin. For BRL 187 thousand/hour, focused on peaks and hospital authorizations, conservative estimate based on real data to defend business case."
    },
    {
      q: "Como você usou o aprendizado desse caso em outras frentes ou trabalhos?",
      a: "Transformei o 'Reliability 4x9 Playbook' em padrao para servicos criticos como PIX, reduzindo incidentes em 50%. A licao de confiabilidade como feature virou pilar, com SLOs definidos em todo projeto critico.",
      q_en: "How did you use the learning from this case in other fronts or jobs?",
      a_en: "Turned 'Reliability 4x9 Playbook' into standard for critical services like PIX, reducing incidents by 50%. Lesson of reliability as feature became core, with SLOs defined in every critical project."
    },
    {
      q: "Qual impacto humano da falha inicial é como o redesign resolveu?",
      a: "A falha cancelou 23 cirurgias, causando estresse a pacientes é equipes. O redesign com 99,992% disponibilidade evitou recorrencias, elevando NPS de hospitais de 72 para 91, protegendo vidas dependentes de autorizacoes rapidas.",
      q_en: "What was the human impact of the initial failure and how did the redesign resolve it?",
      a_en: "The failure canceled 23 surgeries, causing stress to patients and teams. Redesign with 99.992% availability avoided recurrences, elevating hospital NPS from 72 to 91, protecting lives dependent on quick authorizations."
    },
    {
      q: "Como os Game Days contribuiram para a cultura de confiabilidade?",
      a: "Game Days simularam falhas reais, treinando equipes para respostas rapidas. Reduziram tempo de recuperacao em 40%, transformando cultura de reativa para proativa, com times propondo melhorias pos-sessoes.",
      q_en: "How did Game Days contribute to the reliability culture?",
      a_en: "Game Days simulated real failures, training teams for quick responses. Reduced recovery time by 40%, shifting culture from reactive to proactive, with teams proposing improvements post-sessions."
    },
    {
      q: "Qual trade-off você enfrentou no aumento de custos?",
      a: "Trade-off foi 40% mais custos vs. reducao de downtime. Mitiguei com business case mostrando payback em 7 meses via receitas novas, convencendo diretoria que investimento evitaria perdas maiores.",
      q_en: "What trade-off did you face in the cost increase?",
      a_en: "Trade-off was 40% higher costs vs. downtime reduction. Mitigated with business case showing 7-month payback via new revenues, convincing board investment avoided greater losses."
    },
    {
      q: "Como negociou SLAs mais rigorosos com Visa é Cielo?",
      a: "Usei dados de incidentes para mostrar impacto mutuo, propondo SLAs alinhados aos nossos 99,99%. Ofereci dados compartilhados de performance, resultando em contratos com penalidades escalonadas é monitoramento conjunto.",
      q_en: "How did you negotiate stricter SLAs with Visa and Cielo?",
      a_en: "Used incident data to show mutual impact, proposing SLAs aligned to our 99.99%. Offered shared performance data, resulting in contracts with scaled penalties and joint monitoring."
    },
    {
      q: "Qual sustentabilidade do 'Reliability 4x9 Playbook'?",
      a: "O playbook é sustentavel por ser integrado ao CI/CD é SLOs, independente de pessoas. Foi replicado em PIX sem minha intervencao, mantendo 99,99% disponibilidade apos um ano.",
      q_en: "What is the sustainability of the 'Reliability 4x9 Playbook'?",
      a_en: "The playbook is sustainable as integrated into CI/CD and SLOs, independent of people. Replicated in PIX without my intervention, maintaining 99.99% availability after a year."
    },
    {
      q: "Como contatou hospitais restaurou confianca?",
      a: "Contatei diretores de cinco hospitais, pedindo desculpas pela falha é oferecendo suporte prioritario no piloto. Seu feedback ajustou health checks, elevando NPS de 72 para 91.",
      q_en: "How did contacting hospitals restore trust?",
      a_en: "Contacted directors of five hospitals, apologizing for the failure and offering priority pilot support. Their feedback adjusted health checks, elevating NPS from 72 to 91."
    },
    {
      q: "Qual papel dos post-mortems sem culpa?",
      a: "Post-mortems em 24 horas focavam em causas raiz, não culpados, gerando 62% menos incidentes. Criaram cultura de aprendizado, com times compartilhando licoes abertamente.",
      q_en: "What was the role of blame-free post-mortems?",
      a_en: "24-hour post-mortems focused on root causes, not blame, generating 62% fewer incidents. Created learning culture, with teams openly sharing lessons."
    },
    {
      q: "Como error budget influenciou decisoes?",
      a: "Error budget mensal congelava features se excedido, forçando priorizacao de estabilidade. Isso equilibrou inovacao é confiabilidade, evitando lancamentos arriscados.",
      q_en: "How did error budget influence decisions?",
      a_en: "Monthly error budget froze features if exceeded, forcing stability prioritization. Balanced innovation and reliability, avoiding risky launches."
    },
    {
      q: "Qual impacto financeiro do redesign alem do payback?",
      a: "Alem de R$ 3,8 milhoes em receitas novas, evitou R$ 1,8 milhao em perdas é reduziu churn em 3%, adicionando R$ 2,5 milhoes em retencao anual de clientes.",
      q_en: "What was the financial impact of the redesign beyond payback?",
      a_en: "Beyond R$ 3.8 million in new revenues, avoided R$ 1.8 million losses and reduced churn by 3%, adding R$ 2.5 million in annual client retention."
    }
  ]
};

export default case_3;