const case_1 = {
  id: "sicredi-post-mortem-transparency",
  title: "Reconstruí confiança após bug Pix com ritual de transparências diárias",
  title_pt: "Reconstruí confiança após bug Pix com ritual de transparências diárias",
  title_en: "Rebuilt trust after Pix outage through daily transparency rituals",
  company: "Sicredi Woop",
  period: "02/2020-06/2020",
  isTopCase: true,
  isGoodCase: false,

  pt: {
    s: `Em fevereiro de 2023, como gerente de produtos no Sicredi Woop, liberei uma nova chave de rate limiting no core Pix antes de concluir o teste de carga trifásico. Em 12 horas, 62.400 transferências ficaram travadas, R$ 14,8 milhões retidos e o NPS despencou de 62 para 21. O Banco Central recebeu 312 reclamações formais e solicitou esclarecimentos sobre resiliência técnica. Um diretor me confrontou em reunião executiva: "Você quebrou nossa palavra." A frase não atingiu apenas minha imagem profissional - ela expôs a perda de credibilidade institucional diante dos clientes e do regulador. Nosso histórico de confiabilidade Pix construído em três anos ficou sob ameaça e a relação com o Banco Central passou a ser de suspeita em vez de cooperação.`,

    t: `Declarei-me responsável único pela recuperação da confiança, tanto interna quanto externa. Estabeleci metas claras: zerar pendências em 72 horas, elevar o NPS acima de 55 em 30 dias e publicar diariamente uma carta de status com dados validados e decisões técnicas sob minha assinatura, visíveis ao diretor, aos clientes e ao Banco Central.`,

    a: `Implementei cinco ações principais.  
    **(1)** Criei um war room 24/7 com acesso aberto ao time e painel atualizado de hora em hora com backlog, valor médio (R$ 237) e fila restante - gerando 48 comunicações transparentes em três dias. As primeiras 12 horas tiveram instabilidades; resolvi adicionando cache local na coleta para garantir disponibilidade contínua.  
    **(2)** Compareci ao Banco Central com a superintendência apresentando logs, carimbos de tempo e tabelas de latência por janela de 10 minutos. Demonstrei que nenhum cliente sofreu perda financeira e que as transações permaneceram em fila controlada; o órgão suspendeu a abertura do RDR.  
    **(3)** O diretor comercial queria minimizar o incidente. Mostrei o risco jurídico de omissão, trouxe precedentes de multas semelhantes e consegui aprovação do CFO e do Jurídico para enviar um e-mail transparente aos clientes afetados, detalhando causa raiz, SLA de 12 horas para ressarcimento e canal exclusivo.  
    **(4)** Incluí o diretor comercial no meu planning diário com poder de veto sobre releases. O gesto derrubou a barreira política entre engenharia e negócio e criou o indicador "horas de silêncio", que reduzimos de 11 para 45 minutos na primeira semana.  
    **(5)** Documentei 20 lições no post-mortem e migrei o pipeline de testes de manual para automatizado, com gatilho de rollback se a latência passasse de 280 ms. Acrescentei alertas visuais e travas no Jenkins. Em duas semanas de simulação, a adoção chegou a 100% e evitou seis reversões em produção nos três meses seguintes.`,

    r: `Em 36 horas liquidez total foi restabelecida, R$ 14,8 milhões devolvidos e os tickets caíram de 5.940 para 182. O NPS voltou a 58 em 28 dias, o diretor comercial passou a me copiar em toda comunicação crítica e o conselho institucionalizou a carta diária como mecanismo de governança. Clientes relataram sensação de "estar dentro da sala de controle" e o Banco Central elogiou formalmente o nível de transparência.`,

    l: `Earn Trust é construir credibilidade antes que a desconfiança apareça. Aprendi que expor o erro com ritmo e dados gera respeito maior do que qualquer pedido de desculpas. O pipeline automatizado virou padrão em três áreas e reduziu incidentes críticos em 70%. Hoje sigo o mesmo playbook: comunicação imediata, dados auditáveis e rituais consistentes.`
  },

  en: {
    s: `In February 2023, as Product Strategist at Sicredi Woop, I deployed a new rate-limiting key to the Pix core before finishing the tri-phase load test. Within 12 hours, 62,400 payments froze, BRL 14.8M stayed pending, and NPS dropped from 62 to 21. The Central Bank received 312 formal complaints and demanded evidence of technical resilience. A commercial director told me, "You broke our word." It wasn’t only personal credibility at stake--it signaled institutional mistrust from clients and regulator after three years of reliable Pix operations.`,

    t: `I assumed single-threaded ownership of the recovery. Targets: clear the backlog within 72 hours, raise NPS above 55 in 30 days, and publish a daily status letter with validated data and technical decisions signed by me, shared with executives, clients, and the Central Bank.`,

    a: `I executed five moves.  
    **(1)** Opened a 24/7 war room with hourly transparent dashboards on backlog, average value (BRL 237), and remaining queue--48 updates over three days. First-12-hour glitches were solved with a local cache ensuring continuous availability.  
    **(2)** Visited the Central Bank with the superintendent, showing logs, timestamps, and 10-minute latency tables. Proved all transactions were queued under control and no client lost money; they halted the RDR process.  
    **(3)** Faced pushback from the sales director who wanted to downplay the issue. I explained legal risk, cited case precedents, and secured CFO and Legal approval to email every affected client detailing root cause, 12-hour refund SLA, and a dedicated support channel.  
    **(4)** Brought the sales director into my daily planning with veto power. That eliminated political friction and created the “hours of silence” metric, cut from 11 hours to 45 minutes in a week.  
    **(5)** Captured 20 lessons in the post-mortem and migrated from manual to automated stress testing with rollback triggers over 280 ms. Added Jenkins alerts and locks, trained the team with simulations, and reached full adoption in two weeks--preventing six production rollbacks in the next quarter.`,

    r: `Within 36 hours we settled every transaction and refunded BRL 14.8M. Tickets dropped from 5,940 to 182, NPS rebounded to 58 in 28 days, and the commercial director began looping me into every critical communication. The board institutionalized the daily letter and regulators referenced it as best practice for transparency.`,

    l: `I learned that trust compounds when facts arrive faster than rumors. Immediate disclosure backed by instrumentation beats polished apologies. The automated pipeline became a template for three other programs and reduced critical incidents by 70%. I now replicate the same mechanism--early warning, data clarity, and consistent rituals--whenever credibility is on the line.`
  },

  fups: [
    {
      q: "Qual foi seu maior erro ou falha neste caso?",
      a: "Executei deploy sem validar o teste trifásico; priorizei velocidade à confiança. Aprendi que visibilidade sem validação é ilusão.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "Deployed without finishing the tri-phase test; prioritized speed over trust. Learned that visibility without validation is an illusion."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Criaria camada de aprovação cruzada com compliance e monitor de rollback automatizado antes do go-live.",
      q_en: "What would you do differently today?",
      a_en: "Would add cross-approval with compliance and an automated rollback monitor before go-live."
    },
    {
      q: "Qual foi o obstáculo mais difícil de superar?",
      a: "Resistência política do diretor comercial; precisei negociar transparência controlada e transformar medo em colaboração.",
      q_en: "What was the hardest obstacle to overcome?",
      a_en: "Political resistance from the commercial director; I negotiated controlled transparency to turn fear into collaboration."
    },
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "Risco reputacional e regulatório; mantive comunicação contínua com clientes e disponibilizei logs auditáveis para o Banco Central.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "Reputational and regulatory risks; maintained continuous client communication and shared auditable logs with the Central Bank."
    },
    {
      q: "Que dados você usou e qual foi a racional de cálculo?",
      a: "Tempo médio de liberação, volume travado e latência por lote; priorizei clientes de maior valor e impacto regulatório.",
      q_en: "What data did you use and what was your calculation rationale?",
      a_en: "Average release time, frozen volume, and latency per batch; prioritized high-value clients and regulatory exposure."
    },
    {
      q: "Como você usou o aprendizado deste caso em outros contextos?",
      a: "Criei um playbook de transparência adotado por três áreas, elevando previsibilidade e reduzindo incidentes críticos em 70%.",
      q_en: "How did you apply this learning elsewhere?",
      a_en: "Built a transparency playbook adopted by three areas, increasing predictability and cutting critical incidents by 70%."
    },
    {
      q: "Durante a implementação do war room, houve desafios técnicos ou operacionais? Como você os superou?",
      a: "Sim; o primeiro painel caiu duas vezes. Adicionei cache local e camada de failover, garantindo disponibilidade contínua.",
      q_en: "During war room implementation, did you face technical or operational issues? How did you solve them?",
      a_en: "Yes; the initial dashboard failed twice. Added local cache and failover to ensure 24/7 availability."
    },
    {
      q: "Como você garantiu a adesão da equipe e dos stakeholders ao novo pipeline de testes automatizados?",
      a: "Realizei quatro workshops de simulação, medi desempenho individual e associei incentivos à ausência de rollback.",
      q_en: "How did you ensure team and stakeholder adoption of the automated testing pipeline?",
      a_en: "Held four simulation workshops, tracked individual performance, and tied incentives to zero rollbacks."
    },
    {
      q: "Quais dados específicos você utilizou para demonstrar ao Banco Central que o RDR não era necessário?",
      a: "Logs validados por amostragem, curva de latência e evidência de ausência de perdas financeiras em 100% das transações analisadas.",
      q_en: "Which specific data proved to the Central Bank that RDR was unnecessary?",
      a_en: "Sampled logs, latency curves, and evidence of zero financial loss across 100% of analyzed transactions."
    },
    {
      q: "Quais métricas você utilizou para medir o sucesso do ritual de carta diária, além do NPS?",
      a: "Redução das horas de silêncio, aumento de respostas positivas e queda de tickets em 97%.",
      q_en: "Which metrics measured the success of the daily letter beyond NPS?",
      a_en: "Reduction in hours of silence, growth of positive client responses, and a 97% drop in tickets."
    },
    {
      q: "Com base nas 20 lições aprendidas, qual considera mais relevante e como reaplicou?",
      a: "‘Erro oculto se multiplica.’ Instituí regra de exposição imediata em todos os incidentes críticos.",
      q_en: "From the 20 lessons, which was most relevant and how was it reused?",
      a_en: "‘Hidden errors multiply.’ Instituted an immediate exposure rule for every critical incident."
    },
    {
      q: "Como o ritual diário impactou a percepção dos clientes estratégicos?",
      a: "Feedback direto indicou sensação de participação em tempo real; três clientes replicaram o modelo internamente.",
      q_en: "How did the daily ritual impact strategic clients' perception?",
      a_en: "Direct feedback showed they felt part of the control room; three clients replicated the model internally."
    },
    {
      q: "Como você manteve transparência sem comprometer a posição competitiva do Sicredi?",
      a: "Compartilhei dados de performance sem expor arquitetura técnica; defini limites claros entre transparência e sigilo estratégico.",
      q_en: "How did you maintain transparency without compromising Sicredi's competitive position?",
      a_en: "Shared performance data without exposing technical architecture; set clear boundaries between transparency and strategic secrecy."
    },
    {
      q: "Como o caso mudou a cultura de gestão de incidentes no Sicredi?",
      a: "Instituiu regra de comunicação imediata e pública de erros críticos; silêncio deixou de ser visto como proteção.",
      q_en: "How did this case change Sicredi's incident management culture?",
      a_en: "Established immediate public disclosure of critical errors; silence stopped being seen as protection."
    },
    {
      q: "Quais sinais indicaram que a confiança estava sendo restaurada durante o processo?",
      a: "Queda de 97% nos tickets de suporte, retorno de clientes ao canal digital e elogios diretos do Banco Central.",
      q_en: "Which signals showed trust was being restored during the process?",
      a_en: "97% drop in support tickets, customers returning to digital channels, and direct praise from Central Bank."
    }
  ]
};

export default case_1;
