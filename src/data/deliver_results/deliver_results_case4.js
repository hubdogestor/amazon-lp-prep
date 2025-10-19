// deliver_results_case4.js
const case_4 = {
  id: "sefaz-ecage-portal",
  title: "Transformei o e-CAGE em Portal com 94% de SLA e 100% de Adoção",
  title_pt: "Transformei o e-CAGE em Portal com 94% de SLA e 100% de Adoção",
  title_en: "Turned e-CAGE into a Portal with 94% SLA Compliance and 100% Adoption",
  company: "SEFAZ/RS",
  period: "08/2024-11/2024",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: "Agosto de 2024. Como Advisor da transformação digital na SEFAZ/RS, assumi um sistema colapsado: R$ 4,6 milhões em repasses retidos, 47 mil crianças sem merenda e a CAGE operando por e-mail e planilha. Eram 500 gestores, 1.200 demandas mensais e 34 % fora do SLA regulatório de 15 dias. NPS das secretarias caíra para 30, e a opinião pública pressionava por transparência. Precisávamos recuperar governança sem interromper o serviço público.",
    t: "Diante desse cenário crítico, decidi unificar tecnologia, processo e política pública em um único mecanismo que garantisse eficiência e impacto real. Minha missão era transformar o e-CAGE em portal digital unificado, com adoção integral, SLA médio inferior a nove dias e NPS acima de 60. Para isso, ampliei o escopo de liderança: dirigi diretamente 42 profissionais de TI, auditoria e finanças, alinhando-os diariamente com oito secretarias de Estado com prioridades distintas e ciclos regulatórios diferentes. Essa governança multilateral exigia habilidade política e comunicação constante para equilibrar compliance e agilidade.",
    a: "A estratégia teve três frentes principais. **Primeira**, conduzi 25 entrevistas com gestores das oito secretarias e descobri que 78 % desconheciam o status de suas demandas, o que gerava retrabalho e ansiedade. Em duas semanas, desenhei um Product Canvas centrado na jornada do gestor e protótipos no Figma com painéis de rastreabilidade. **Segunda**, avaliei três soluções: Salesforce (12 meses, R$ 180 mil/ano), Dynamics (14 meses, R$ 220 mil/ano) e SharePoint + Power Platform (6 meses, licença pré-paga, integração nativa com SAP/AS400). A escolha foi orientada por três critérios: (1) tempo ≤ 6 meses; (2) custo zero incremental; (3) aderência a normas do Tribunal de Contas. O trade-off era abrir mão de recursos sofisticados para ganhar velocidade e governança. Mitiguei limitações de SharePoint criando workflows extras em Power Automate e camadas de segurança via Azure AD. Passei 48 h com João, único especialista AS400, reestruturando 12 tabelas otimizadas (vs. 47 no legado). **Terceira**, três secretarias resistiam à transparência. Construi MVP em 14 dias, processei 10 demandas reais ao vivo e mostrei que rastreabilidade os protegía de sanções. Negociei decreto obrigatório e atuei pessoalmente como suporte nas primeiras quatro semanas para assegurar confiança.",
    r: "Resultado: em seis meses o Portal e-CAGE entrou no ar sem custo adicional e com 95 % de estabilidade. Em 60 dias, os 15 órgãos migraram 100 % das 1.200 demandas mensais. Tempo médio de aprovação -47 % (15 → 8 dias). SLA saltou de 66 % para 94 % -- a média histórica da SEFAZ era 71 % e o benchmark nacional 82 %. Retrabalho caiu de 25 % para 4 %, economizando 120 h mensais. NPS subiu de 30 para 72 (+42 pontos), recorde na história da SEFAZ. O caso da merenda, antes 6 semanas, passou a 8 dias. Para sustentação, instituí comitê de governança com 12 super-usuários, documentação no Confluence e painéis Power BI com alertas automáticos. Isso permitiu suporte autônomo -- todos os cenários críticos podem ser resolvidos sem intervenção minha. A ENAP 2024 premiou o portal como melhor iniciativa digital de gestão pública e 4 secretarias adotaram o modelo em menos de 5 meses.",
    l: "Aprendi que liderar soluções no setor público exige moderar interesses divergentes com dados concretos e política ativa. O tripé escuta profunda, decisões pragmáticas e demonstração pública de valor garante impacto tangível. Transformação real ocorre quando governança e transparência convivem com velocidade."
  },
  en: {
    s: "August 2024. As a Advisor for Digital Transformation at SEFAZ/RS, I faced a broken system: R$4.6 M frozen, 47 K children without school meals, and CAGE running on emails and spreadsheets. 500 managers, 1,200 monthly requests, 34 % SLA breach, NPS 30. The public demanded accountability while operations couldn’t stop.",
    t: "I chose to unify technology and governance into a citizen-impact solution. Goal: turn e-CAGE into a portal with 100 % adoption, SLA < 9 days and NPS > 60. I led 42 professionals from IT, Audit and Finance, coordinating daily with eight state agencies -- each with distinct regulatory cycles and political priorities -- balancing speed and compliance every step.",
    a: "The strategy had three pillars. (1) Interviews with 25 managers from 8 agencies revealed 78 % lost visibility on cases. Designed Canvas and Figma prototypes for traceability. (2) Benchmarked Salesforce (12 mo / R$ 180 K), Dynamics (14 mo / R$ 220 K) and SharePoint + Power Platform (6 mo / prepaid). Selection criteria: a) ≤ 6 mo delivery, b) zero extra funds, c) Court Compliant. Choosing SharePoint meant trading advanced features for speed and risk control. Mitigated limitations via Power Automate flows and extra Azure security layers. I spent 48 hours with João in mainframe room redesigning 12 tables vs 47 legacy. (3) To address political resistance, built 14-day MVP, processed 10 real cases live, proving traceability protected them. Negotiated state decree mandating portal use and personally supported 4 weeks post-launch.",
    r: "Six months later Portal e-CAGE went live with no new budget. Within 60 days all 15 agencies migrated 1,200 requests. Average approval -47 % (15→8 days), SLA 94 % vs 66 % -- past SEFAZ avg 71 %, national 82 %. Rework 25 → 4 %, NPS 30 → 72 (+42). Meal repairs now take 8 days, not 6 weeks. Formed 12-member governance committee with Confluence processes and Power BI alerts ensuring portal autonomy. ENAP 2024 awarded best digital initiative and 4 agencies replicated it in five months.",
    l: "I learned that public leadership means balancing competing interests through data and trust. Deep listening, pragmatic tech choices and public accountability create lasting impact -- transparency and speed can coexist."
  },
  fups: [
    // 6 principais obrigatórias
    { q: "Qual foi seu maior erro ou falha nesse caso?", a: "Demorei a envolver stakeholders políticos logo no início. Foquei na arquitetura técnica antes de consolidar patrocínio entre secretarias. Corrigi isso promovendo workshops semanais de coautoria com secretários e subsecretários, o que reduziu resistência e agilizou decisões.", q_en: "What was your biggest mistake or failure in this case?", a_en: "I was late engaging political stakeholders. I focused on system design before securing sponsorship. Fixed by launching weekly co-creation sessions with top officials, reducing friction and speeding decisions." },
    { q: "O que você faria diferente hoje?", a: "Estabeleceria desde o início um plano formal de gestão de mudança multidisciplinar, prevendo comunicação de risco e patrocínio cruzado. Teríamos antecipado consenso e economizado cerca de três semanas de negociação.", q_en: "What would you do differently today?", a_en: "I'd set a formal change-management plan at day one, embedding risk communication and cross-sponsorship -- would have saved about three weeks of alignment." },
    { q: "Qual foi o obstáculo mais difícil que você enfrentou?", a: "Coordenar oito secretarias com agendas conflitantes e ciclos orçamentários diferentes. Gerenciei isso criando cadência semanal de priorização baseada em impacto fiscal e social, o que harmonizou os cronogramas.", q_en: "What was the hardest obstacle you faced?", a_en: "Coordinating eight agencies with conflicting agendas; I solved it through weekly prioritization cadence ranked by fiscal and citizen impact, aligning timelines." },
    { q: "Quais foram os principais riscos e como você os mitigou?", a: "Os maiores riscos eram falhas na integração SAP/AS400 e desconfiança política. Mitiguei aumentando logs diários, backup em nuvem e comunicação proativa via dashboards públicos.", q_en: "What were the main risks and how did you mitigate them?", a_en: "Top risks: SAP/AS400 failure and political distrust. Mitigated with daily logs, cloud backup, and proactive public dashboards for full transparency." },
    { q: "Que dados você usou e qual foi a racional de cálculo?", a: "Analisei 18 meses de logs e métricas de resposta para definir baseline realista. Usei mediana em vez de média para evitar distorsões de outliers e calcular redução de 47 % no tempo médio de aprovação.", q_en: "What data did you use and what was the calculation rationale?", a_en: "Reviewed 18 months of response logs; used median over mean to avoid outlier bias and set realistic 47 % cycle-time reduction target." },
    { q: "Como você usou o aprendizado desse caso em outras frentes?", a: "A estrutura de governança e rastreabilidade foi replicada no Orçamento Participativo, elevando SLA em 32 % sem investimento extra. Virou modelo oficial de transformação digital da SEFAZ.", q_en: "How did you use the learning from this case in other areas?", a_en: "Governance and traceability model reapplied to Participatory Budget, raising SLA 32 % with no extra budget; it became SEFAZ's official digital framework." },

    // existentes revisadas
    {
      q: "Por que escolheu SharePoint em vez de Salesforce ou Dynamics?",
      a: "A decisão uniu pragmatismo e controle fiscal. Comparei ROI, segurança e tempo. SharePoint entregou em 6 meses com custo zero e compliance nativo, mitigando risco jurídico e de contrato internacional.",
      q_en: "Why did you choose SharePoint instead of Salesforce or Dynamics?",
      a_en: "Decision blended pragmatism and fiscal control. Benchmarked ROI, security and time -- SharePoint delivered 6-month zero-cost solution with native compliance and no contract risk."
    },
    {
      q: "Como voce conseguiu 100% de adocao em apenas 60 dias?",
      a: "A combinação de decreto obrigatório e valor percebido: ofereci suporte direto nas primeiras 4 semanas, publiquei indicadores públicos de uso e criei ranking de desempenho. Virou competição saudável entre secretarias.",
      q_en: "How did you achieve 100% adoption in just 60 days?",
      a_en: "Mix of mandatory decree and visible value; I offered hands-on support 4 weeks, published usage metrics, and ranked agency performance creating healthy competition."
    },
    {
      q: "Qual foi o maior desafio politico que voce enfrentou?",
      a: "Superar o medo da exposição. Demonstrei com MVP ao vivo que a transparência oferecia proteção. A partir daí, passei de obstáculo a aliado dos secretários.",
      q_en: "What was the biggest political challenge you faced?",
      a_en: "Overcoming exposure fear; during live MVP demo proved transparency is protection - turned skeptics into allies."
    },
    {
      q: "Como voce garantiu sustentabilidade apos sua saida?",
      a: "Instituí comitê de governança autônomo com 12 super-usuários e rotina mensal de review. Automatizações Power BI e checklists de compliance garantem continuidade sem minha presença.",
      q_en: "How did you ensure sustainability after your exit?",
      a_en: "Set self-running governance committee (12 super-users) with monthly review; Power BI and compliance checklists sustain continuity after my exit."
    },
    {
      q: "Como voce lidou com a pressao do Tribunal de Contas?",
      a: "Adotei transparência radical: dashboard público com SLA e backlog. Com dados em tempo real, a cobrança virou colaboração.",
      q_en: "How did you handle the Court of Accounts pressure?",
      a_en: "Used radical transparency: public SLA/backlog dashboard; once they saw data live, pressure turned into collaboration."
    },
    {
      q: "Como voce mediu o impacto real no cidadao final?",
      a: "Tempo de repasses de merenda -6 semanas → 8 dias e redução de consultas ao SAC em -38 %. Acompanhamos pesquisa de diretores escolares (+37 p.p. em satisfação).",
      q_en: "How did you measure real impact on the end citizen?",
      a_en: "Meal transfer time cut 6 weeks → 8 days, citizen calls -38 %, school head satisfaction +37 pts."
    },
    {
      q: "Que resistencia voce enfrentou da equipe de TI?",
      a: "TI preferia solução custom de 18 meses. Mostrei que cada mês de atraso representava R$ 400 mil em repasses bloqueados, o que fez a velocidade prevalecer.",
      q_en: "What resistance did you face from the IT team?",
      a_en: "IT wanted an 18-month custom build; I proved each month delay froze R$ 400 K in transfers -- speed prevailed."
    },
    {
      q: "Qual foi o ROI do investimento no portal?",
      a: "Economia de 120h mensais (≈ R$ 60k/ano) + eliminação do legado + zero multas do Tribunal. Licenças já pagas → ROI efetivo em 30 dias.",
      q_en: "What was the ROI of the portal investment?",
      a_en: "Saved 120 h/month (~R$ 60K/yr), ended legacy and zero audit fines; licenses prepaid → ROI 30 days."
    },

    // novas complementares
    {
      q: "Quais critérios específicos você usou para priorizar SharePoint e como mitigou eventuais limitações da solução?",
      a: "Priorizei tempo, compliance e custo. Mitiguei limitações com camadas de Power Automate e governança via Azure AD. Resultado: atingimos 94 % de SLA sem infra nova.",
      q_en: "What specific criteria did you use to prioritize SharePoint and how did you mitigate potential limitations?",
      a_en: "Priority criteria: time, compliance, zero cost. Mitigated limits using Power Automate extensions and Azure AD governance -- reached 94 % SLA no new infra."
    },
    {
      q: "Como você engajou stakeholders e superou resistências políticas antes de implementar o novo sistema?",
      a: "Criei comitê pré-projeto com secretários, auditor geral e TI; as principais decisões foram cocriação desde o início. Essa inclusão gerou patrocínio e reduziu resistência.",
      q_en: "How did you engage stakeholders and overcome political resistance before implementing the new system?",
      a_en: "Formed pre-project board with secretaries, chief auditor and IT heads; co-creating key decisions built sponsorship and neutralized resistance."
    },
    {
      q: "Após o sucesso do Portal e-CAGE, que desafios surgiram ao replicar o modelo em outras secretarias?",
      a: "As novas secretarias tinham infraestruturas heterogêneas. Criei checklist de maturidade e modelos de dados padronizados para garantir copiabilidade rápida sem regras novas.",
      q_en: "After the Portal e-CAGE success, what challenges emerged when replicating the model to other agencies?",
      a_en: "Other agencies had uneven infra; I built maturity checklists and standard data models to ensure fast replication without reinventing rules."
    },
    {
      q: "Como você garantiu que os mecanismos criados (comitê, templates, dashboards) fossem sustentáveis a longo prazo?",
      a: "Automatizei 40 rotinas de auditoria em Power Automate e liguei OKRs do comitê ao plano de gestão da SEFAZ. Assim, a manutenção virou meta oficial de carreira para super-usuários.",
      q_en: "How did you ensure the created mechanisms (committee, templates, dashboards) were sustainable long-term?",
      a_en: "Automated 40 audit routines via Power Automate and linked committee OKRs to SEFAZ management plan, making maintenance a career goal for super-users."
    },
    {
      q: "Se pudesse refazer o projeto, qual aspecto você faria diferente e por quê?",
      a: "Agendaria fase piloto com grupos menores para testar integração AS400 e ciclo de aprovação antes do go-live. Teria ganhado cerca de 10 dias no cronograma total.",
      q_en: "If you could redo the project, what aspect would you do differently and why?",
      a_en: "Would start pilot phase with smaller units to test AS400 integration and workflow approval before go-live -- could save ~10 days on timeline."
    }
  ]
};

export default case_4;