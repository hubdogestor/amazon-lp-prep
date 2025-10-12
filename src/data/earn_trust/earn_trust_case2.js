const case_2 = {
  id: "hsbc-bacen-communication",
  title: "Transformei relacionamento com Bacen com briefings executivos em 48h",
  title_pt: "Transformei relacionamento com Bacen com briefings executivos em 48h",
  title_en: "Transformed Central Bank relationship with 48-hour executive briefings",
  company: "HSBC Brasil",
  period: "07/2015-03/2016",
  isTopCase: true,
  isGoodCase: true,

  pt: {
    s: "Em julho de 2022, atuando como Program Manager responsável pelas entregas regulatórias e pelo relacionamento institucional com o Banco Central no HSBC Brasil, enfrentei uma das maiores crises de conformidade do banco. O Bacen apontou falhas repetidas em reportes de PLD: inconsistências entre módulos de liquidez, projeção e risco operacional. Dois ofícios destacaram discrepâncias de R$ 1,1 bilhão na posição diária, geradas por integrações parciais entre cinco sistemas corporativos. O problema mobilizava 12 áreas — risco, tecnologia, contabilidade, tesouraria, operações, compliance e times de produto — sob intensa pressão do regulador. O score de relacionamento com o Bacen caiu para 43/100, e recebemos 18 perguntas formais em um único mês. O CFO foi categórico: 'Você já reconstruiu pontes antes, mas desta vez não há espaço para erro.' Eu precisava equilibrar precisão técnica, coordenação entre áreas e transparência imediata com clientes e reguladores.",

    t: "Assumi responsabilidade integral pelo dossiê regulatório, com foco em restaurar credibilidade interna e institucional. Defini quatro metas: responder a qualquer solicitação do Bacen em até 48 horas, eliminar completamente as discrepâncias em 60 dias, elevar o score de relacionamento acima de 80 até março de 2023 e impedir qualquer interrupção de câmbio para os 4.300 clientes corporativos durante o processo.",

    a: "Mapeei a origem das divergências e identifiquei que 219 dos 1.276 campos enviados ao Bacen vinham de planilhas manuais fragmentadas. Confrontei o diretor de risco, que insistia em manter o processo legado por receio de auditorias regressas. Para superar a resistência, associei meu nome aos resultados do novo pipeline e garanti visibilidade direta ao CFO sobre cada sprint. Criei o squad supervisionado por ele, com metas de conciliação diária e relatórios consolidados em tempo real. Em paralelo, desenvolvi os 'Bacen Briefings': toda solicitação gerava um resumo executivo de duas páginas contendo origem do dado, área responsável, impacto no cliente e prazo de entrega. Cada briefing era assinado por mim e enviado em até 6 horas ao CFO e ao Bacen. Para restaurar confiança, estendi o conceito aos clientes corporativos — cada discrepância era explicada em até 24h com cronograma e previsão de normalização. Internamente, implantei a 'Regra das 3 Transparências': (1) admitir o erro com número, (2) detalhar a correção e (3) informar data de revalidação. Essa prática criou segurança psicológica para que outras áreas expusessem falhas sem medo de retaliação, fortalecendo cultura de transparência em cadeia.",
    
    a2: "Por fim, conduzi a automação da reconciliação: integrei um serviço de API ao core financeiro e ao sistema de risco, com logs validados e gatilhos automáticos de alerta quando qualquer campo divergisse acima de 0,1%. Essa estrutura substituiu planilhas humanas por execução programática rastreável, permitindo auditoria reversa em segundos. Incluí redundância em ambiente espelhado e acesso ao histórico de 18 meses, criando base confiável para compliance e Bacen. O tempo médio de conciliação caiu de 12 horas para 2, e o erro residual ficou abaixo de 0,02%. A automação não apenas corrigiu a falha técnica — ela provou que transparência em tempo real podia ser pilar de confiança sustentável.",

    r: "Em 54 dias eliminamos todas as discrepâncias e respondemos 47 solicitações do Bacen em média 12 horas antes do prazo-alvo. Mantivemos operação de câmbio intacta e o score de relacionamento subiu de 43 para 86. O Bacen encerrou o processo sem multa e enviou parecer elogiando a qualidade e previsibilidade dos briefings. O CFO expandiu o formato para outras áreas regulatórias e quatro departamentos passaram a adotar o modelo como padrão. Entre os clientes corporativos, o índice de 'confiança total' saltou de 72% para 98%. No longo prazo, o Bacen passou a nos consultar proativamente sobre aperfeiçoamento de processos digitais e três anos depois o banco foi convidado a integrar grupo técnico de inovação em regtech. Transformamos uma crise reputacional em vantagem competitiva e referência de transparência institucional.",

    l: "Aprendi que Earn Trust começa pela exposição consistente de fatos, não por discursos. A confiança é construída quando cada erro gera aprendizado compartilhado e quando a transparência se torna rotina — tanto para o regulador quanto para o time interno e os clientes. Desde então, replico a metodologia de briefings e automação em todos os processos críticos: comunicar cedo, provar com dados e deixar o resultado auditável."
  },

  en: {
    s: "In July 2022, as Program Manager responsible for regulatory deliveries and institutional liaison with the Central Bank at HSBC Brazil, I faced one of the bank's most complex compliance crises. The regulator identified recurring AML reporting failures caused by misaligned integrations across five corporate systems. Two official letters cited BRL 1.1B daily position mismatches, triggering a potential sanction process involving 4,300 corporate clients. The issue required coordination among twelve departments – risk, technology, finance, treasury, operations, compliance, and product – under intense regulatory scrutiny. The relationship score with the Central Bank dropped to 43/100, and 18 formal inquiries arrived in one month. The CFO stated, 'You’ve rebuilt bridges before, but now there’s no room for error.' Balancing technical accuracy, cross-functional alignment, and trust rebuilding became my responsibility.",

    t: "I took full ownership of the regulatory remediation, focusing entirely on rebuilding institutional credibility. My goals were to respond to any regulator request within 48 hours, remove all mismatches within 60 days, raise the relationship score above 80 by March 2023, and maintain uninterrupted FX operations for 4,300 corporate clients.",

    a: "I traced discrepancies to 219 of 1,276 reported fields that came from manual spreadsheets. The risk director resisted changing the legacy process, fearing exposure of prior audit records. To overcome this, I formally offered to be accountable for the new automated pipeline and secured CFO sponsorship for a dedicated cross-functional squad. We worked in daily sprints with live dashboards. I also launched the 'Central Bank Briefings': every request became a two-page executive summary listing data source, owner, client impact, and delivery date, signed by me and sent within 6 hours to both CFO and regulator. To extend transparency, I used the same mechanism with 4,300 clients — each received a 24-hour discrepancy explanation with recovery plan. Internally, I introduced the 'Three Transparencies Rule': (1) show the error with numbers, (2) describe the corrective action, and (3) communicate the revalidation date. The framework encouraged open reporting of issues without blame and consistently rebuilt trust across teams.",
    
    a2: "Finally, I led automation of reconciliation through an API connecting financial core and risk systems, adding validation logs and automated triggers for variances above 0.1%. The API replaced human spreadsheets with programmatic traceability, enabling reverse audit in seconds. I added mirrored redundancy and 18 months of historical data. Average reconciliation time dropped from 12 hours to 2, and residual variance to 0.02%. The automation addressed root causes while proving that real-time transparency could sustain long-term regulatory trust.",

    r: "Within 54 days, all data mismatches were corrected, and 47 regulator requests were delivered 12 hours ahead of SLA. FX operations continued with zero downtime and the score rose from 43 to 86. The Central Bank closed the case with no fines and issued an official commendation on briefing quality. The CFO extended the practice bank-wide and four departments replicated it for other regulators. Client trust confidence increased from 72% to 98%. Strategically, the Central Bank began consulting us on systemic improvements, and three years later the bank joined its regtech innovation committee, turning regulatory transparency into a competitive advantage.",

    l: "I learned that Earn Trust begins with disciplined transparency and equal access to facts. Trust grows when every error results in measurable repair and visible accountability. Since then, I have applied the same automation and briefing system across risk and compliance programs — disclose early, prove with data, and make results auditable."
  },

  fups: [
    // --- Seis FUPs centrais obrigatórias ---
    {
      q: "Qual foi seu maior erro ou falha neste caso?",
      a: "Demorei duas semanas para envolver o diretor de risco no desenho da solução. Aprendi que confiança se constrói incluindo as partes logo no início.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "I took two extra weeks to engage the risk director. Learned that trust is built by early inclusion of affected stakeholders."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Iniciaria a migração da automação junto ao time de tecnologia sem depender do ciclo trimestral da tesouraria, acelerando a redução de risco.",
      q_en: "What would you do differently today?",
      a_en: "I would start automation migration with the tech team without waiting for treasury’s quarterly cycle, accelerating risk reduction."
    },
    {
      q: "Qual foi o obstáculo mais difícil de superar?",
      a: "Resistência política e medo de exposição interna. Resolvi criando rituais de demonstração pública de progresso e compartilhando dados brutos em reuniões abertas.",
      q_en: "What was the hardest obstacle to overcome?",
      a_en: "Political resistance and fear of internal exposure. Overcame it through public progress sessions and transparent data sharing."
    },
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "Risco de sanção e perda de licença de PLD; implantei logs rastreáveis com gatilhos automáticos e agenda semanal de validação com o Bacen.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "Sanction and AML license risk; deployed automated traceable logs and weekly joint validations with the regulator."
    },
    {
      q: "Que dados você usou e qual foi a racional de cálculo?",
      a: "Analisei 18 meses de discrepâncias e 1.276 campos reportados, mapeando taxa de erro por origem. A automação focou nos 71% de incidência em planilhas.",
      q_en: "What data did you use and what was the calculation rationale?",
      a_en: "Reviewed 18 months of discrepancies across 1,276 fields, mapping error rates per source; 71% on spreadsheets guided automation focus."
    },
    {
      q: "Como você usou o aprendizado deste caso em outras frentes?",
      a: "Padronizei o formato de briefings em auditorias e comunicações fiscais, elevando taxa de resposta dentro do SLA de 48h para 98%.",
      q_en: "How did you apply this learning elsewhere?",
      a_en: "Standardized the briefing template for audits and tax communications, increasing on-time 48h responses to 98%."
    },

    // --- FUPs originais e novas complementares ---
    {
      q: "Como você superou resistências internas ao propor mudanças no processo legado e o squad supervisionado pelo CFO?",
      a: "Combinei exposição de dados e alinhamento político: mostrei impacto financeiro das multas e associei entregas ao reconhecimento direto do CFO.",
      q_en: "How did you overcome internal resistance to your changes and CFO-supervised squad?",
      a_en: "Blended data exposure with political alignment: showed financial impact of fines and tied deliveries to CFO acknowledgment."
    },
    {
      q: "Quais foram os maiores desafios técnicos ao implementar a API de reconciliação, e como você os resolveu?",
      a: "Gerenciamento de autenticação entre sistemas legados; resolvi criando middleware de segurança e testando fluxos simulados antes da produção.",
      q_en: "What were the biggest technical challenges in implementing the reconciliation API, and how did you solve them?",
      a_en: "Authentication across legacy systems; solved by adding a secure middleware layer and running simulated data flows pre-launch."
    },
    {
      q: "Que métricas adicionais você usou para monitorar o progresso durante os 60 dias e garantir entregas no prazo?",
      a: "Acompanhei SLA médio, taxa de erros recorrentes e nível de resposta das áreas envolvidas; monitorava tudo em dashboard compartilhado.",
      q_en: "What metrics did you track throughout the 60-day remediation to ensure delivery?",
      a_en: "Tracked average SLA, recurring error rate, and team responsiveness; all visualized on a shared dashboard."
    },
    {
      q: "Após eliminar as discrepâncias, que ações você tomou para prevenir problemas semelhantes no futuro?",
      a: "Implementei alerta automatizado para qualquer divergência >0,05% e cadência mensal de auditoria cruzada entre dados contábeis e operacionais.",
      q_en: "After resolving discrepancies, what preventive steps did you take?",
      a_en: "Added automated alerts for >0.05% variance and monthly cross-audits between accounting and operations data."
    },
    {
      q: "Como o modelo de 'Bacen Briefings' foi adaptado para outras áreas regulatórias e quais resultados adicionais ele trouxe?",
      a: "Adaptei o modelo para CVM e SUSEP; reduziu reincidência regulatória em 63% e aumentou satisfação interna em 24 pontos.",
      q_en: "How was the 'Central Bank Briefing' model adapted to other regulators, and what results did it bring?",
      a_en: "Adapted to CVM and insurance authority SUSEP; reduced regulatory recurrence by 63% and boosted internal satisfaction by 24 points."
    }
  ]
};

export default case_2;