// Case 4 - deliver_results
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
    s: `"Professor, cadê o dinheiro da merenda?" A pergunta de uma mãe durante reunião de pais na Escola Estadual São José resumia o caos que descobri na CAGE: R$ 4,6M em repasses bloqueados por falta de rastreabilidade burocrática, afetando 47 mil alunos em 312 escolas. O problema era sistêmico: a Contadoria e Auditoria-Geral do Estado operava demandas via e-mail e planilha atendendo 8 secretarias estaduais críticas, onde 500 gestores submetiam 1.200 demandas mensais. 34% dos pedidos estouravam o SLA regulatório de 15 dias, frustrando gestores que precisavam fechar orçamento e gerar transparência obrigatória ao cidadão. NPS das secretarias despencara para 30, e o caso mais emblemático: a Secretaria de Educação reenviou a mesma solicitação de R$ 4,6M para três analistas diferentes sem rastreabilidade, atrasando repasse que alimentaria 47 mil crianças por 6 semanas.`,
    t: `Diante desse caos que prejudicava diretamente 47 mil crianças e comprometia a prestação de contas do Estado, eu decidi assumir ownership de uma solução que unificasse tecnologia, política e impacto cidadão. Meu desafio era transformar um processo burocrático fragmentado em portal digital que garantisse transparência, eficiência e que o dinheiro público chegasse aos cidadãos no prazo correto. Prometi publicamente ao Secretário da Fazenda que em seis meses lançaria um portal único com 100% de adoção pelos 15 órgãos estaduais, reduziria o tempo médio de aprovação para menos de 9 dias e elevaria o NPS das secretarias acima de 60.`,
    a: `Eu executei uma abordagem de três frentes coordenadas para transformar caos burocrático em fluxo transparente centrado no cidadão. Primeiro, conduzi 25 entrevistas com gestores das 8 secretarias e descobri que 78% reclamavam de não saber onde suas demandas estavam, gerando ansiedade e retrabalho. Em duas semanas desenhei o Product Canvas priorizando rastreabilidade em tempo real e mockups no Figma focados na jornada do gestor. Segundo, avaliei Salesforce (R$ 180k/ano), Dynamics (R$ 220k/ano) e solução custom (18 meses), escolhendo SharePoint + Power Platform porque já tínhamos licença, integrava nativamente com SAP/AS400 e entregaria em 6 meses com custo zero. Passei dois dias na sala gelada do mainframe com João, o único especialista AS400 da SEFAZ, e desenhei pessoalmente o modelo de dados otimizado (12 tabelas no portal vs. 47 no legado). Criei oito templates reutilizáveis de workflow em Power Automate e interface drag-and-drop para gestores parametrizarem regras sem depender de TI. Terceiro, três secretarias temiam que transparência expusesse ineficiências internas. Construí MVP em 14 dias, processei 10 demandas reais deles ao vivo durante demonstração e provei que rastreabilidade os protegia gerando evidência irrefutável de cumprimento de SLA para o Tribunal de Contas. Negociei decreto estadual obrigando uso do portal e me comprometi pessoalmente como canal direto de suporte nas primeiras quatro semanas.`,
    r: `Eu entreguei transformação digital que salvou literalmente a alimentação de 47 mil crianças. O portal e-CAGE entrou no ar exatamente seis meses depois, sem custo adicional de licença. Em 60 dias, os 15 órgãos estaduais migraram 100% das 1.200 demandas mensais para o portal, zerando o sistema legado. O tempo médio de aprovação despencou de 15 para 8 dias (-47%), SLA compliance saltou de 66% para 94% e retrabalho caiu de 25% para 4%, economizando 120 horas por mês. NPS das secretarias explodiu de 30 para 72 (+42 pontos), o maior salto registrado na história da SEFAZ. O caso emblemático da merenda escolar que levava 6 semanas passou a ser resolvido em 8 dias, garantindo alimentação contínua para 47 mil crianças. O case foi premiado pela ENAP 2024 como melhor iniciativa de gestão pública digital e já foi replicado em mais quatro secretarias estaduais.`,
    l: `Aprendi que entregar resultado sustentável no setor público exige integração total de três elementos críticos: escuta profunda (25 entrevistas mapearam impacto cascata no cidadão), escolha pragmática de tecnologia (SharePoint venceu soluções caras priorizando time-to-market e custo zero) e demonstração pública de valor (dashboards transparentes neutralizaram resistência política). Essa tríade virou playbook replicável que apliquei no projeto de orçamento participativo. No setor público, deliver results não é apenas eficiência burocrática — é garantir que recursos públicos cheguem aos cidadãos no prazo correto, com transparência total. Transformação digital no governo só é verdadeira quando o último cidadão na ponta sente o resultado.`
  },
  en: {
    s: `"Teacher, where's our lunch money?" A mother's question during a parent meeting at São José State School captured the chaos I discovered at CAGE: R$4.6M in transfers blocked by bureaucratic traceability failures, affecting 47,000 students across 312 schools. The problem was systemic: the State General Accounting Office operated requests through email and spreadsheets serving 8 critical state secretariats, where 500 managers submitted 1,200 monthly requests. 34% of cases blew through the regulatory 15-day SLA, frustrating managers who needed to close budgets and provide mandatory transparency to citizens. Agency NPS had crashed to 30, and the most emblematic case: the Education Secretariat re-sent the same R$4.6M request to three different analysts without traceability, delaying transfers that would feed 47,000 children for 6 weeks.`,
    t: `Faced with that chaos directly harming 47,000 children and compromising state accountability, I decided to own a solution that unified technology, politics, and citizen impact. My challenge was transforming a fragmented bureaucratic process into a digital portal that guaranteed transparency, efficiency, and ensured public money reached citizens on time. I publicly promised the Finance Secretary that within six months I would launch a single portal with 100% adoption across 15 state agencies, cut average approval time below 9 days, and push agency NPS above 60.`,
    a: `I executed a coordinated three-front approach to transform bureaucratic chaos into transparent flow centered on citizens. First, I ran 25 interviews with managers from 8 secretariats and discovered 78% complained about not knowing where their requests were, generating anxiety and rework. In two weeks I designed the Product Canvas prioritizing real-time traceability and Figma mockups focused on the manager journey. Second, I benchmarked Salesforce (R$180K/year), Dynamics (R$220K/year), and custom solution (18 months), choosing SharePoint + Power Platform because licenses were prepaid, it integrated natively with SAP/AS400, and delivered in 6 months with zero cost. I spent two days in the freezing mainframe room with João, SEFAZ's only AS400 expert, and personally designed the optimized data model (12 portal tables vs. 47 legacy). I created eight reusable workflow templates in Power Automate and drag-and-drop interface for managers to configure rules without depending on IT. Third, three secretariats feared transparency would expose internal inefficiencies. I built MVP in 14 days, processed 10 of their real requests live during demo, and proved traceability protected them by generating irrefutable evidence of SLA compliance for the Court of Auditors. I negotiated a state decree mandating portal use and personally committed as direct support channel for the first four weeks.`,
    r: `I delivered digital transformation that literally saved meals for 47,000 children. The e-CAGE portal went live exactly six months later with zero additional licensing cost. Within 60 days, all 15 state agencies migrated 100% of the 1,200 monthly requests to the portal, zeroing the legacy system. Average approval time plummeted from 15 to 8 days (-47%), SLA compliance jumped from 66% to 94%, and rework crashed from 25% to 4%, saving 120 hours/month. Agency NPS exploded from 30 to 72 (+42 points), the largest jump recorded in SEFAZ history. The emblematic school lunch case that took 6 weeks was resolved in 8 days, ensuring continuous feeding for 47,000 children. The case was awarded by ENAP 2024 as best digital public management initiative and has been replicated across four additional state secretariats.`,
    l: `I learned that delivering sustainable results in the public sector requires total integration of three critical elements: deep listening (25 interviews mapped cascading citizen impact), pragmatic technology choice (SharePoint beat expensive solutions by prioritizing time-to-market and zero cost), and public value demonstration (transparent dashboards neutralized political resistance). This triad became a replicable playbook I applied to the participatory budget project. In the public sector, delivering results isn't just bureaucratic efficiency — it's ensuring public resources reach citizens on time with total transparency. Digital transformation in government is only real when the last citizen at the end feels the result.`
  },
  fups: [
    {
      "q": "Como voce conseguiu 100% de adocao em apenas 60 dias?",
      "a": "Combinacao de decreto obrigatorio + demonstracao de valor real. Eu mostrei que o portal protegia os gestores gerando evidencia de SLA para o Tribunal de Contas. Mais importante: ofereci suporte pessoal nas primeiras 4 semanas, respondendo 186 chamados em <25 minutos. Quando gestores viram que funcionava, adocao virou viral.",
      "q_en": "How did you achieve 100% adoption in just 60 days?",
      "a_en": "Combination of mandatory decree + real value demonstration. I showed the portal protected managers by generating SLA evidence for Court of Auditors. Most importantly: I offered personal support for first 4 weeks, answering 186 tickets in <25 minutes. When managers saw it worked, adoption went viral."
    },
    {
      "q": "Por que escolheu SharePoint em vez de Salesforce ou Dynamics?",
      "a": "Pragmatismo sobre sofisticacao. SharePoint + Power Platform: licenca ja paga, integracao nativa com SAP/AS400, entrega em 6 meses, custo zero. Salesforce seria R$ 180k/ano e 12 meses. Em governo, time-to-market e orcamento sao mais criticos que features avancadas.",
      "q_en": "Why did you choose SharePoint over Salesforce or Dynamics?",
      "a_en": "Pragmatism over sophistication. SharePoint + Power Platform: license already paid, native SAP/AS400 integration, 6-month delivery, zero cost. Salesforce would be R$180K/year and 12 months. In government, time-to-market and budget are more critical than advanced features."
    },
    {
      "q": "Qual foi o maior desafio politico que voce enfrentou?",
      "a": "Tres secretarias temiam que transparencia expusesse ineficiencias internas. Eu construi MVP em 14 dias, processei 10 demandas reais deles ao vivo e provei que rastreabilidade os protegia. Transformei medo em beneficio: agora tinham evidencia irrefutavel de performance para o Tribunal de Contas.",
      "q_en": "What was the biggest political challenge you faced?",
      "a_en": "Three secretariats feared transparency would expose internal inefficiencies. I built MVP in 14 days, processed 10 of their real requests live, and proved traceability protected them. I turned fear into benefit: now they had irrefutable performance evidence for Court of Auditors."
    },
    {
      "q": "Como voce mediu o impacto real no cidadao final?",
      "a": "Caso emblematico: merenda escolar que levava 6 semanas passou para 8 dias, garantindo alimentacao continua para 47 mil criancas. Tambem trackeei tempo de resposta a cidadaos via Lei de Acesso a Informacao (15→8 dias) e satisfacao de diretores escolares via pesquisa trimestral.",
      "q_en": "How did you measure real impact on end citizens?",
      "a_en": "Emblematic case: school lunch that took 6 weeks dropped to 8 days, ensuring continuous feeding for 47,000 children. I also tracked response time to citizens via Freedom of Information Law (15→8 days) and school principal satisfaction via quarterly survey."
    },
    {
      "q": "Qual foi o momento mais critico do projeto?",
      "a": "Semana 16, quando descobri que integracao SAP/AS400 estava quebrada e 200 demandas ficaram presas. Passei 48h na sala do mainframe com Joao, reescrevi queries SQL e criei workaround manual. Portal voltou a funcionar em 72h sem perder nenhuma demanda.",
      "q_en": "What was the most critical moment of the project?",
      "a_en": "Week 16, when I discovered SAP/AS400 integration was broken and 200 requests got stuck. I spent 48h in mainframe room with João, rewrote SQL queries, and created manual workaround. Portal was back in 72h without losing any requests."
    },
    {
      "q": "Como voce garantiu sustentabilidade apos sua saida?",
      "a": "Treinei 12 super-usuarios (2 por secretaria), documentei todos os workflows, criei videos de onboarding e estabeleci ritual mensal de review com dashboards automatizados. Mais importante: decreto estadual garantiu continuidade institucional independente de mudancas politicas.",
      "q_en": "How did you ensure sustainability after your departure?",
      "a_en": "I trained 12 super-users (2 per secretariat), documented all workflows, created onboarding videos, and established monthly review ritual with automated dashboards. Most importantly: state decree ensured institutional continuity independent of political changes."
    },
    {
      "q": "Que resistencia voce enfrentou da equipe de TI?",
      "a": "TI queria solucao custom de 18 meses. Eu mostrei que SharePoint + Power Platform entregaria 80% do resultado em 6 meses vs 100% em 18 meses. Convenci mostrando que velocidade valia mais que perfeicao quando criancas estavam sem merenda.",
      "q_en": "What resistance did you face from the IT team?",
      "a_en": "IT wanted 18-month custom solution. I showed SharePoint + Power Platform would deliver 80% of results in 6 months vs 100% in 18 months. I convinced them showing speed was worth more than perfection when children were without lunch."
    },
    {
      "q": "Qual aprendizado voce aplicou em outros projetos de governo?",
      "a": "A triada: escuta profunda + pragmatismo tecnologico + transparencia publica. Repliquei no orcamento participativo: 25 entrevistas com cidadaos, plataforma low-code, dashboards publicos. Mesmo framework, contexto diferente. SLA 32% menor em 4 meses.",
      "q_en": "What learning did you apply to other government projects?",
      "a_en": "The triad: deep listening + technological pragmatism + public transparency. I replicated in participatory budget: 25 citizen interviews, low-code platform, public dashboards. Same framework, different context. 32% lower SLA in 4 months."
    },
    {
      "q": "Como voce lidou com a pressao do Tribunal de Contas?",
      "a": "Transparencia proativa: criei dashboards publicos mostrando SLA compliance, backlog e produtividade por orgao. Tribunal parou de pressionar quando viu que tinham visibilidade total em tempo real. Transparencia elimina desconfianca.",
      "q_en": "How did you handle pressure from the Court of Auditors?",
      "a_en": "Proactive transparency: I created public dashboards showing SLA compliance, backlog, and productivity by agency. Court stopped pressuring when they saw they had total real-time visibility. Transparency eliminates distrust."
    },
    {
      "q": "Qual foi o ROI do investimento no portal?",
      "a": "Economia de 120 horas/mes em retrabalho (R$ 60k/ano), reducao de 47% no tempo de aprovacao (liberou analistas para auditoria estrategica), e eliminacao de risco de multas do Tribunal. Investimento: apenas minha dedicacao + licencas ja pagas. ROI infinito no primeiro ano.",
      "q_en": "What was the ROI of the portal investment?",
      "a_en": "120 hours/month savings in rework (R$60K/year), 47% reduction in approval time (freed analysts for strategic audit), and elimination of Court fine risk. Investment: only my dedication + already-paid licenses. Infinite ROI in first year."
    }
  ]
};

export default case_4;
