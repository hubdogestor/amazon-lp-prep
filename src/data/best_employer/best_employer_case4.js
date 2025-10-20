// best_employer_case4.js - HSBC Zero Defects como exemplo de estabelecer novos padrões
const case_4 = {
  id: "hsbc-zero-defects-best-employer",
  title_en: "I created the 'Zero Data Loss' standard that others thought impossible, building team capability",
  title_pt: "Criei o padrão 'Zero Data Loss' que outros achavam impossível, desenvolvendo capacidades da equipe",
  company: "HSBC",
  period: "05/2015 - 06/2016",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: "Em maio de 2015, como PMO Manager no HSBC Brasil, enfrentei um desafio crítico: liderar a migração de R$ 3 bilhões em ativos para o Bradesco. A expectativa da indústria era aceitar até 0,05% de erros (1.350 clientes afetados), mas eu sabia que isso destruiria a confiança dos clientes e da equipe. Minha equipe de 40 profissionais globais (Índia, Polônia, China) estava desmotivada, vendo o padrão 'zero defects' como impossível. Como líder, eu precisava não apenas entregar o resultado técnico, mas transformar essa crença limitante em capacidade real da equipe.",
    t: "Minha missão foi estabelecer um novo padrão de excelência que outros achavam impossível, enquanto desenvolvia as capacidades da minha equipe para sustentá-lo. Eu me comprometi a migrar 100% dos dados sem perdas, desafiando benchmarks da indústria, e simultaneamente transformar minha equipe de céticos em defensores do padrão. O desafio era equilibrar pressão por velocidade com investimento em qualidade, criando mecanismos que tornassem o 'impossível' rotina.",
    a: "Implementei três pilares para desenvolver capacidades: (1) Liderança pelo exemplo - auditei pessoalmente 500 contas por ciclo, ensinando minha equipe os padrões através de demonstração prática; (2) Mecanismos replicáveis - criei o 'Zero Data Loss Playbook' com checklists e 'stop the line' rules, capacitando qualquer membro da equipe a pausar processos; (3) Engajamento emocional - compartilhei histórias reais de clientes afetados por perdas de dados, transformando métricas abstratas em impacto humano. Realizei workshops semanais onde a equipe debatia 'o que faríamos se fôssemos o cliente?', desenvolvendo empatia e ownership.",
    r: "O resultado foi transformador: migramos R$ 3 bilhões sem uma única perda de dados, superando expectativas em 2.000%. Mais importante, desenvolvemos capacidades sustentáveis - o playbook foi adotado globalmente, reduzindo tempo de detecção de anomalias de 72h para 12h. A equipe evoluiu de cética para confiante, com engajamento crescendo 40% e zero turnover durante o projeto. NPS pós-migração ficou 15% acima do projetado, provando que padrões altos geram lealdade do cliente.",
    l: "Aprendi que ser melhor empregador significa desafiar crenças limitantes e investir no desenvolvimento de capacidades. Padrões altos não são impostos, são cultivados através de liderança exemplar, ferramentas replicáveis e conexão emocional com o propósito. Hoje aplico isso em todas as equipes: primeiro humanizo o desafio, depois capacito com ferramentas, finalmente celebro vitórias compartilhadas."
  },
  en: {
    s: "In May 2015, as PMO Manager at HSBC Brazil, I faced a critical challenge: leading the migration of BRL 3 billion in assets to Bradesco. Industry expectation was to accept up to 0.05% errors (1,350 customers affected), but I knew this would destroy customer and team trust. My 40-person global team (India, Poland, China) was demotivated, seeing the 'zero defects' standard as impossible. As a leader, I needed not just technical delivery, but to transform this limiting belief into real team capability.",
    t: "My mission was to establish a new standard of excellence that others thought impossible, while developing my team's capabilities to sustain it. I committed to migrating 100% of data without losses, challenging industry benchmarks, and simultaneously transforming my team from skeptics to standard advocates. The challenge was balancing pressure for speed with investment in quality, creating mechanisms that made the 'impossible' routine.",
    a: "I implemented three pillars for capability development: (1) Leadership by example - I personally audited 500 accounts per cycle, teaching my team standards through practical demonstration; (2) Replicable mechanisms - I created the 'Zero Data Loss Playbook' with checklists and 'stop the line' rules, empowering any team member to pause processes; (3) Emotional engagement - I shared real stories of customers affected by data losses, transforming abstract metrics into human impact. I conducted weekly workshops where the team debated 'what would we do if we were the customer?', developing empathy and ownership.",
    r: "The result was transformative: we migrated BRL 3 billion without a single data loss, exceeding expectations by 2,000%. More importantly, we developed sustainable capabilities - the playbook was adopted globally, reducing anomaly detection time from 72h to 12h. The team evolved from skeptical to confident, with engagement growing 40% and zero turnover during the project. Post-migration NPS was 15% above projected, proving that high standards generate customer loyalty.",
    l: "I learned that being a better employer means challenging limiting beliefs and investing in capability development. High standards aren't imposed, they're cultivated through exemplary leadership, replicable tools, and emotional connection to purpose. Today I apply this to all teams: first humanize the challenge, then equip with tools, finally celebrate shared victories."
  },
  fups: [
    {
      q: "Qual foi seu maior erro nesse caso?",
      a: "Subestimei resistência cultural inicial, atrasando alinhamento em duas semanas. Hoje começaria com workshops de engajamento para mapear crenças limitantes.",
      q_en: "What was your biggest mistake in this case?",
      a_en: "I underestimated initial cultural resistance, delaying alignment by two weeks. Today I would start with engagement workshops to map limiting beliefs."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Integraria histórias de clientes reais nos workshops iniciais para humanizar o padrão desde o primeiro dia, acelerando buy-in cultural.",
      q_en: "What would you do differently today?",
      a_en: "I would integrate real customer stories into initial workshops to humanize the standard from day one, accelerating cultural buy-in."
    },
    {
      q: "Qual foi o obstáculo mais difícil de superar?",
      a: "Pressão para aceitar erros 'aceitáveis' da indústria. Superei defendendo com dados o custo 10x maior de remediação.",
      q_en: "What was the most difficult obstacle you faced?",
      a_en: "Pressure to accept 'acceptable' industry errors. I overcame it by defending with data the 10x higher remediation cost."
    },
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "Riscos: atrasos no cronograma e resistência cultural. Mitiguei com 'stop the line' calibrado e engajamento global via histórias reais.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "Risks: schedule delays and cultural resistance. I mitigated with calibrated 'stop the line' and global engagement via real stories."
    },
    {
      q: "Que dados você usou?",
      a: "Usei dados de custo de remediação (R$ 15 milhões estimados), tempo de detecção de anomalias (72h→12h), e métricas de engajamento da equipe.",
      q_en: "What data did you use?",
      a_en: "I used remediation cost data (estimated BRL 15 million), anomaly detection time (72h→12h), and team engagement metrics."
    },
    {
      q: "Como você usou o aprendizado?",
      a: "Apliquei o playbook em projetos da Huawei, reduzindo erros em 40%. Hoje uso em todas as equipes para desenvolver capacidades.",
      q_en: "How did you use the learning?",
      a_en: "I applied the playbook in Huawei projects, reducing errors by 40%. Today I use it in all teams to develop capabilities."
    }
  ]
};

export default case_4;