const case_2 = {
  id: "bradesco-next-compliance-simplification",
  title: "Inventei trilha KYC one-click que reduziu onboarding Next de 32 para 6 horas",
  title_pt: "Inventei trilha KYC one-click que reduziu onboarding Next de 32 para 6 horas",
  title_en: "Invented one-click KYC stream that cut Next onboarding from 32 to 6 hours",
  company: "Bradesco",
  period: "08/2016-05/2017",
  keywords: "#simplificar-compliance | #automação | #kyc | #quebrar-dogmas | #onboarding",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: `Em 2016, eu atuava como Product Owner de Onboarding Digital no Bradesco Next, durante a fase beta do projeto. Havia um consenso incômodo: a experiência do cliente simplesmente não funcionava. Um e-mail que recebi de um usuário resumiu a situação - “mandei o mesmo documento cinco vezes e ainda não foi aprovado”.  
    O tempo médio de abertura de conta chegava a 32 horas, a taxa de abandono atingia 18% e o NPS despencava para 22. Cada novo cliente frustrado significava R$ 1.200 em CAC desperdiçado e cerca de 2.400 prospects perdidos por semana. O núcleo do problema estava nas 47 regras regulatórias do BACEN, interpretadas por 12 analistas diferentes, criando um labirinto burocrático que ninguém conseguia explicar direito.`,
    
    t: `A situação ameaçava o lançamento do Next - O maior projeto digital do banco. Eu fui encarregado de liderar a revisão do fluxo de compliance com um objetivo específico: tornar o processo compatível com as metas de crescimento.  
    Meu plano consistia em três frentes: reduzir o tempo de onboarding de 32 para menos de 6 horas, automatizar 90% das aprovações e redefinir compliance como parte da vantagem competitiva - não como barreira operacional. Sabia que mexeria em dogmas fortes do banco e em normas históricas.`,
    
    a: `Comecei pelo óbvio: entender, linha a linha, as 47 regras do BACEN. Descobri que 80% dos casos se encaixavam em padrões simples que poderiam ser automatizados. Montei uma matriz com essas regras e construí árvores de decisão em Python capazes de processar documentos em tempo real. O teste piloto mostrou que era possível eliminar 11 dos 14 passos manuais.  
    Para resolver a parte regulatória, propus a integração com APIs externas - Serasa, SPC e Receita Federal -, aceitando ser o responsável técnico e operacional pelas chamadas a essas fontes. Criei um canal de prestação de contas direto com compliance e registre log de toda transação com assinatura digital.  
    Quando o jurídico resistiu, mostrei dados duros: 63% das reprovações eram falsos positivos que custavam R$ 2,8 milhões por ano em retrabalho. Apresentei simulação de risco comparando cenários com e sem automação e demonstrei que a exposição real era 16 vezes menor do que se supunha. Com isso, o comitê de risco aprovou a mudança.  
    Em paralelo, liguei pessoalmente para clientes que haviam desistido do processo. As gravações dessas conversas mostraram claramente que ninguém entendia porque o sistema pedía o mesmo documento várias vezes. Usei essas falas para mapear a jornada e eliminei telas redundantes. Chamamos o novo fluxo de **“KYC One-Click”**, em referência à intenção de resolver tudo em um único envio.  
    Para viabilizar a governança, implantei um scorecard semanal que suspendia automáticamente novos cadastros caso o SLA passasse de 8 horas. Criei um treinamento trimestral baseado em casos reais de falsos positivos e instituí auditoria de logs assinados digitalmente.`,
    
    r: `O efeito foi visível em poucos meses. Em 90 dias, o tempo médio de abertura de conta caiu de 32 para 5h58 (-81%). A taxa de abandono caiu para 4%, o NPS saltou para 68 e o retrabaho no compliance baixou 74%. O Next voltou a crescer: atingiu 2,1 milhões de contas em 18 meses e gerou R$ 28 milhões de receita incremental.  
    A solução foi replicada para 450 mil vendedores na Elo e Cielo, mostrando que o conceito era escalável além do varejo bancário. O maior reconhecimento veio quando compliance passou a usar a trilha como referência positiva em outras áreas do banco.`,
    
    l: `Aprendi que simplificar regras não é violá-las, é entendê-las a ponto de traduzir em decisões objetivas. O framework “**Simplify Compliance**” que nasceu desse projeto foca em quatro pilares: medir a dor do usuário, usar dados para quebrar dogmas, assumir riscos calculados e transformar a solução em mecanismo escalável.  
    Hoje, em soluções de pagamento, uso o mesmo raciocínio para reduzir fricções de onboarding de lojistas, sem abrir mão da segurança.`
  },

  en: {
    s: `In 2016, I was Product Owner for Digital Onboarding at Bradesco Next during its beta phase. An email from a frustrated tester captured the problem: "I uploaded the same document five times and it was still rejected."  
    Average account opening took 32 hours, 18% of users abandoned the journey, and NPS fell to 22. Each lost customer cost BRL 1,200 in wasted CAC - about 2,400 prospects per week. Behind it was a maze of 47 Central Bank rules interpreted by 12 different analysts, creating confusion and rework across departments.`,
    
    t: `The crisis threatened Next’s public launch. I was asked to restructure the compliance onboarding stream so it could scale without breaking regulations. My objectives: cut time from 32 to under 6 hours, automate 90% of approvals, and shift compliance from barrier to advantage.  
    I knew success would depend on data-driven credibility more than bold technical claims.`,
    
    a: `I mapped all 47 rules line by line with internal specialists and discovered that 80 percent of client cases fit five repetitive validation patterns. I coded Python decision trees that could process documents in real time, removing 11 of 14 manual steps.  
    To accelerate background checks, I negotiated integration with external APIs - Serasa, SPC, and Federal Revenue - and personally took responsibility for the regulatory interfaces. I implemented digitally signed logs and auditable trails for every API call.  
    When the legal department objected, I presented hard numbers: 63% of account rejections were false positives costing BRL 2.8 million per year in rework. I simulated risk exposure with and without automation; the data showed the automated model was 16 times safer. Compliance authorized the pilot within a week.  
    I also called customers who had abandoned mid-process, recorded their feedback, and used those insights to streamline user flows and remove redundant screens. The new process became known as the **"KYC One-Click"**, reflecting its simplicity.  
    To maintain governance, I implemented a weekly scorecard that automatically paused intake if SLA exceeded 8 hours and introduced quarterly compliance training based on real audit logs.`,
    
    r: `Results were immediate. Within 90 days onboarding time fell from 32 hours to 5 hours 58 minutes (−81%). Abandonment dropped to 4%, NPS jumped to 68, and compliance rework was reduced by 74%. Next accelerated to 2.1 million accounts in 18 months, generating BRL 28 million in incremental revenue.  
    The mechanism was replicated for 450,000 merchants at Elo and Cielo, proving its scalability beyond retail banking. Perhaps most importantly, compliance teams themselves started to champion the model as best practice.`,
    
    l: `I learned that simplifying regulation is about understanding it deeply, not bypassing it. From that project I framed a method called **"Simplify Compliance"** anchored on four rules: measure user pain, break assumptions with data, take calculated risks, and turn solutions into scalable mechanisms.  
    I use the same method in payment ecosystems today, reducing merchant onboarding friction while maintaining audit-grade security.`
  },

  fups: [
    // 1. Erro / Failure
    {
      q: "Qual foi seu maior erro ou falha nesse caso?",
      a: "Demorei para envolver o jurídico nas primeiras simulações; apresentei o modelo já pronto e causei reação de ruptura. Aprendi que, em ambiente regulado, a co-criação previne resistência.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "I was late in engaging Legal for early simulations; presenting the final model created unnecessary shock. I learned that in regulated environments, co-creation prevents resistance."
    },
    // 2. O que faria diferente / What would you do differently
    {
      q: "O que você faria diferente hoje?",
      a: "Começaria com piloto menor, mostrando impacto real em dados de reanálise antes de propor alteração completa no fluxo. Pequenas comprovações abrem portas mais rápido.",
      q_en: "What would you do differently today?",
      a_en: "I would start with a smaller pilot, showing tangible drop in reanalysis before changing the entire flow. Small empirical proofs open doors faster."
    },
    // 3. Obstáculo / Obstacle
    {
      q: "Qual foi o obstáculo mais difícil de superar?",
      a: "Mudar a crença antiga de que mais etapas significam mais segurança. Usei dados dos falsos positivos (63%) para provar que excesso de checagem gerava ruído, não controle.",
      q_en: "What was the most difficult obstacle to overcome?",
      a_en: "Changing the belief that 'more steps mean more safety.' I used false-positive data (63%) to show that redundant checks created noise, not control."
    },
    // 4. Riscos / Risks
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "Três riscos: exposição regulatória (mitigada assumindo o SLA e criando logs digitais assinados), falha de integração com APIs externas (reserva técnica e redundância), e resistência política interna (dados e transparência semanal).",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "Three main risks: regulatory exposure (mitigated by owning SLAs and signed logs), API integration failures (technical fallback and redundancy), and political resistance (weekly transparent updates with evidence)."
    },
    // 5. Dados / Data rationale
    {
      q: "Que dados você usou e qual foi a racional de cálculo?",
      a: "Analisei logs de 47 regras do Bacen e 18 mil cadastros rejeitados. Calculei custo de retrabalho por bloqueio falso e demonstrei perda anual de R$ 2,8 mi. Esse número foi chave para convencer o board.",
      q_en: "What data did you use and what was the calculation rationale?",
      a_en: "I analyzed compliance logs covering 47 Central Bank rules and 18 k rejected applications. I calculated rework cost per false positive-about BRL 2.8 M yearly-key evidence for executive approval."
    },
    // 6. Uso posterior / Learning reuse
    {
      q: "Como você usou o aprendizado desse caso em outras frentes ou trabalhos?",
      a: "Apliquei o conceito One-Click em acquisição de sellers e billers em pagamentos, mantendo experiência simples e rastreabilidade total. O mesmo modelo depois serviu de base para onboarding antifraude em uma fintech parceira.",
      q_en: "How did you use the learnings from this case elsewhere?",
      a_en: "I applied the One-Click concept to seller and biller onboarding in payments, keeping simplicity and full traceability. The same model later became the foundation for an anti-fraud onboarding flow in a partner fintech."
    },

    // Complementares bilíngues
    {
      q: "Como construiu confiança com compliance?",
      a: "Compartilhei logs e métricas semanais, mostrando que o sistema auditava a si mesmo. Essa transparência virou argumento de segurança, não de risco.",
      q_en: "How did you build trust with compliance?",
      a_en: "By sharing weekly logs proving self-auditing capability. Transparency turned from a 'risk' argument into a 'safety' argument."
    },
    {
      q: "Que trade-off financeiro precisou assumir?",
      a: "Aceitei sobrepreço de 5 bps para clientes de onboarding imediato, cobrindo o custo de infraestrutura extra. Tornou o projeto financeiramente neutro.",
      q_en: "What financial trade-off did you take?",
      a_en: "I accepted a 5 bps surcharge for instant-onboarding clients to offset infra cost, keeping the project financially neutral."
    },
    {
      q: "Como garantiu perenidade após o go-live?",
      a: "Implantei scorecard com gatilho que pausa onboarding se o SLA médio passar de 8 h e treino trimestral baseado em casos reais.",
      q_en: "How did you ensure long-term sustainability after go-live?",
      a_en: "I built a scorecard triggering automatic pause if average SLA exceeded 8 h and established quarterly training based on real false-positive cases."
    },
    {
      q: "Que métrica melhor representa o sucesso?",
      a: "O onboarding caiu de 32 h para 5h58 sem aumento de fraude, e a taxa de abandono desceu para 4%, maior sinal de confiança do cliente.",
      q_en: "Which metric best summarizes success?",
      a_en: "Onboarding time dropped from 32 hours to 5 h 58 m with no fraud increase, and abandonment fell to 4% -the clearest proof of regained trust."
    },
    {
      q: "Como reagiu o jurídico após os resultados?",
      a: "O mesmo time que inicialmente bloqueava o piloto apresentou o KYC One-Click no comitê. A transparência inverteu a resistência.",
      q_en: "How did Legal react after results?",
      a_en: "The same team that initially opposed the pilot later presented One-Click to the executive committee - transparency flipped resistance into advocacy."
    },
    {
      q: "Qual impacto cultural o case causou no banco?",
      a: "Compliance passou a participar das squads de produto já no design, o que reduziu atritos internos e acelerou aprovações.",
      q_en: "What cultural impact did the case generate?",
      a_en: "Compliance began joining product squads from design phase onward, cutting internal friction and speeding approvals."
    },
    {
      q: "Que habilidade pessoal mais contribuiu para o resultado?",
      a: "Traduzir jargão regulatório em valor de negócio, mostrando que compliance pode ser diferencial de produto.",
      q_en: "Which personal skill most contributed?",
      a_en: "Translating regulatory language into business value, proving compliance itself can become a product differentiator."
    },
    {
      q: "Qual aprendizado humano mais claro você tirou?",
      a: "Percebi que burocracia nasce do medo de errar. Quando mostramos dados objetivos, o medo cede espaço à colaboração.",
      q_en: "What was your key human insight from this experience?",
      a_en: "Bureaucracy often stems from fear of error. When people see objective data, fear gives way to collaboration."
    }
  ]
};

export default case_2;
