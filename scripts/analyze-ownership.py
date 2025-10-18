import json
import re

# Read the prompt file
with open(r"d:\github2\amazon-lp-prep\scripts\.prompt-ownership.txt", "r", encoding="utf-8") as f:
    content = f.read()

# Extract all combinations
combinations = []
pattern = r"### COMBINAÇÃO (\d+)/104\n\n\*\*CacheKey\*\*: `(.+?)`\n\n\*\*Pergunta (.+?)\*\*: \"(.+?)\"\n\n\*\*Case\*\*: (.+?)\n\*\*Título\*\*: (.+?)\n\n\*\*STAR-L Resumido\*\*:\n- \*\*S\*\*: (.+?)\n- \*\*T\*\*: (.+?)\n- \*\*A\*\*: (.+?)\n- \*\*R\*\*: (.+?)\n- \*\*L\*\*: (.+?)\n"

matches = re.findall(pattern, content, re.DOTALL)

print(f"Found {len(matches)} combinations")

results = []

for match in matches:
    combo_num = match[0]
    cache_key = match[1]
    question_id = match[2]
    question_text = match[3]
    case_id = match[4]
    case_title = match[5]
    s = match[6].strip()
    t = match[7].strip()
    a = match[8].strip()
    r = match[9].strip()
    l = match[10].strip()

    # Perform semantic analysis based on the prompt criteria
    # Extract question concepts and case concepts

    # Q1: "assumiu responsabilidade além do seu escopo de trabalho"
    # Q2: "foi além da sua função"
    # Q3: "decisão de longo prazo"
    # Q4: "algo não é sua responsabilidade"
    # Q5: "trade-off difícil pensando no longo prazo"
    # Q6: "decisão importante de negócio sem consultar seu gestor"
    # Q7: "identificou uma ineficiência e tomou ownership"
    # Q8: "falhou em algo e como assumiu responsabilidade"
    # Q9: "projeto/decisão que não deu certo e como você lidou"
    # Q10: "quando você teve que fazer algo desconfortável pelo bem do time/empresa"
    # Q11: "situação onde você discordou do seu gestor e como agiu"
    # Q12: "momento onde você teve que tomar uma decisão difícil rapidamente"
    # Q13: "quando você priorizou o cliente/empresa sobre facilidade pessoal"

    # Analyze each combination
    relevance = 0
    depth = 0
    evidence = 0
    reasoning = ""

    # Q1 - "assumiu responsabilidade além do seu escopo"
    if question_id == "Q1":
        if "hsbc-migration-leadership" in cache_key:
            relevance = 30  # Perfeitamente aligned - assumiu liderança completa além do PMO
            depth = 30  # STAR-L completo com métricas concretas
            evidence = 30  # Métricas específicas: 99.98%, NPS 52→78, churn 0.3%, -94% cycle time
            reasoning = "Case PERFEITAMENTE alinhado: assumiu liderança completa de migração crítica além do escopo PMO, com STAR-L completo e métricas concretas (99.98% precisão, NPS+26, churn 0.3%)."

        elif "sefaz-pmo-creation" in cache_key:
            relevance = 30  # Perfeitamente aligned - criou PMO completo além do contrato
            depth = 30  # STAR-L completo com detalhes técnicos
            evidence = 30  # Métricas: 100% duplicidades, 23%→7.4% desvio, R$2.3M recuperado
            reasoning = "Case PERFEITAMENTE alinhado: criou PMO institucional do zero além do contrato de consultoria, com STAR-L completo e métricas concretas (100% duplicidades eliminadas, desvio 23%→7.4%, R$2.3M recuperado)."

        elif "bradesco-international-payments" in cache_key:
            relevance = 26  # Muito bem aligned - liderou reversão completa cross-funcional
            depth = 30  # STAR-L completo com análise detalhada
            evidence = 30  # Métricas: custo -14%, SLA -38%, backlog -86%, NPS 48→74
            reasoning = "Case MUITO BEM alinhado: liderou reversão completa integrando múltiplas áreas, com STAR-L completo e métricas concretas (custo -14%, SLA -38%, backlog -86%, NPS +26 pontos)."

        elif "hsbc-payment-reconciliation" in cache_key:
            relevance = 26  # Muito bem - assumiu resolução completa de crise
            depth = 30  # STAR-L completo com ação hands-on
            evidence = 30  # Métricas: US$47M liberados, 2847→0 backlog, 40% melhor que média
            reasoning = "Case MUITO BEM alinhado: assumiu resolução completa de US$47M em pagamentos travados, com ação hands-on (scripts SQL próprios) e métricas concretas (100% backlog zerado, 40% acima do benchmark)."

        elif "payment-incidents-prevention-mechanism" in cache_key:
            relevance = 30  # Perfeitamente aligned - transformou consultoria em mecanismo preventivo
            depth = 30  # STAR-L completo com estrutura sustentável
            evidence = 26  # Boas métricas: -58% incidentes, -34% MTTR, classe A zerado
            reasoning = "Case PERFEITAMENTE alinhado: transformou escopo de consultoria em mecanismo preventivo completo, com STAR-L detalhado e métricas sólidas (-58% incidentes, -34% MTTR, nenhum incidente classe A repetido)."

        elif "long-term-tradeoff" in cache_key:
            relevance = 26  # Muito bem - assumiu decisão sobre core além do escopo
            depth = 26  # STAR-L completo mas Learning poderia ser mais profundo
            evidence = 30  # Métricas excelentes: 99.97% disponibilidade, -53% latência, 27→4 P1
            reasoning = "Case MUITO BEM alinhado: assumiu decisão sobre core banking além do escopo de integrações, priorizando robustez, com métricas excelentes (99.97% disponibilidade, -53% latência, incidentes P1 27→4)."

        elif "sefaz-emergency-rollback-no-approval" in cache_key:
            relevance = 30  # Perfeitamente aligned - autorizou rollback crítico sem gestor
            depth = 30  # STAR-L completo com controles detalhados
            evidence = 30  # Métricas: 1h10min restauração, R$8.2M evitado, 23.4k empresas
            reasoning = "Case PERFEITAMENTE alinhado: autorizou rollback crítico sem consultar gestor, assumindo responsabilidade total com controles e métricas concretas (1h10 restauração, R$8.2M evitado, 23.4k empresas protegidas)."

        elif "bradesco-next-delay" in cache_key:
            relevance = 22  # Bem aligned - assumiu responsabilidade por erro e solução
            depth = 26  # STAR-L bom com transparência
            evidence = 26  # Boas métricas: 73k req/h, 12.8k contas, NPS 89
            reasoning = "Case BEM alinhado: assumiu publicamente erro de estimativa e responsabilidade pela solução, com STAR-L bom e métricas sólidas (73k requisições/hora, 12.8k contas abertas, NPS 89)."

    # Q2 - "foi além da sua função"
    elif question_id == "Q2":
        if "hsbc-migration-leadership" in cache_key:
            relevance = 30  # Perfeitamente aligned
            depth = 30
            evidence = 30
            reasoning = "Case PERFEITAMENTE alinhado: foi além da função de Head PMO para assumir liderança completa de migração crítica, com STAR-L completo e métricas concretas (99.98% precisão, NPS 52→78, churn 0.3%)."

        elif "sefaz-pmo-creation" in cache_key:
            relevance = 30
            depth = 30
            evidence = 30
            reasoning = "Case PERFEITAMENTE alinhado: foi além do contrato de consultoria metodológica para criar PMO institucional completo, com STAR-L detalhado e métricas concretas (desvio 23%→7.4%, R$2.3M recuperado)."

        elif "bradesco-international-payments" in cache_key:
            relevance = 26
            depth = 30
            evidence = 30
            reasoning = "Case MUITO BEM alinhado: foi além da função para liderar reversão completa de crise operacional cross-funcional, com métricas excelentes (custo -14%, SLA -38%, NPS 48→74)."

        elif "hsbc-payment-reconciliation" in cache_key:
            relevance = 26
            depth = 30
            evidence = 30
            reasoning = "Case MUITO BEM alinhado: foi além da função para resolver pessoalmente crise de reconciliação, escrevendo scripts SQL e liderando tiger team, com métricas concretas (US$47M liberados, backlog zerado)."

        elif "payment-incidents-prevention-mechanism" in cache_key:
            relevance = 30
            depth = 30
            evidence = 26
            reasoning = "Case PERFEITAMENTE alinhado: foi além do escopo de advisor de estratégia para construir mecanismo preventivo completo, com métricas sólidas (-58% incidentes, -34% MTTR, classe A zerado)."

        elif "long-term-tradeoff" in cache_key:
            relevance = 26
            depth = 26
            evidence = 30
            reasoning = "Case MUITO BEM alinhado: foi além do escopo de integrações externas para tomar decisão sobre core banking, priorizando estabilidade, com métricas excelentes (99.97% disponibilidade, -53% latência)."

        elif "sefaz-emergency-rollback-no-approval" in cache_key:
            relevance = 30
            depth = 30
            evidence = 30
            reasoning = "Case PERFEITAMENTE alinhado: foi além do mandato de advisor para autorizar rollback crítico sem aprovação, com controles estritos e métricas concretas (1h10 restauração, R$8.2M evitado)."

        elif "bradesco-next-delay" in cache_key:
            relevance = 26
            depth = 26
            evidence = 26
            reasoning = "Case MUITO BEM alinhado: foi além da função de PM para assumir publicamente erro perante CEO/CTO e liderar solução completa, com boas métricas (73k req/h, NPS 89)."

    # Q3 - "decisão de longo prazo"
    elif question_id == "Q3":
        if "hsbc-migration-leadership" in cache_key:
            relevance = 22  # Bem - investimento R$9.5M foi decisão de longo prazo
            depth = 30
            evidence = 30
            reasoning = "Case BEM alinhado: decisão de investir R$9.5M em controles e automação foi escolha de longo prazo para qualidade sobre velocidade, com métricas excelentes (99.98% precisão, NPS 52→78)."

        elif "sefaz-pmo-creation" in cache_key:
            relevance = 26  # Muito bem - criar PMO institucional é decisão de longo prazo
            depth = 30
            evidence = 30
            reasoning = "Case MUITO BEM alinhado: decisão de criar PMO institucional permanente versus solução pontual é claramente de longo prazo, com métricas concretas (desvio 23%→7.4%, R$2.3M recuperado anualmente)."

        elif "bradesco-international-payments" in cache_key:
            relevance = 22  # Bem - criou template corporativo e manual permanente
            depth = 26
            evidence = 30
            reasoning = "Case BEM alinhado: além de resolver crise, criou manual e template corporativo reutilizável de longo prazo, com métricas sólidas (custo -14%, R$4.8M/ano evitado)."

        elif "hsbc-payment-reconciliation" in cache_key:
            relevance = 18  # Parcialmente - focado em crise imediata, mas criou playbook
            depth = 30
            evidence = 30
            reasoning = "Case PARCIALMENTE alinhado: focado em resolver crise imediata (38 dias), mas criou playbooks reutilizáveis, com métricas concretas (US$47M liberados, 40% melhor que benchmark)."

        elif "payment-incidents-prevention-mechanism" in cache_key:
            relevance = 30  # Perfeitamente - construiu mecanismo sustentável
            depth = 30
            evidence = 26
            reasoning = "Case PERFEITAMENTE alinhado: rejeitou soluções de curto prazo para construir capacidade interna permanente de prevenção, com métricas sólidas (-58% incidentes recorrentes, -34% MTTR)."

        elif "long-term-tradeoff" in cache_key:
            relevance = 30  # Perfeitamente - essência do case é trade-off de longo prazo
            depth = 30
            evidence = 30
            reasoning = "Case PERFEITAMENTE alinhado: decisão explícita de reduzir escopo para priorizar robustez de longo prazo sobre volume de curto prazo, com métricas excelentes (99.97% disponibilidade, Black Friday sem incidentes)."

        elif "sefaz-emergency-rollback-no-approval" in cache_key:
            relevance = 18  # Parcialmente - decisão imediata, mas criou protocolo
            depth = 26
            evidence = 30
            reasoning = "Case PARCIALMENTE alinhado: decisão foi emergencial e imediata, mas criou protocolo e precedente de longo prazo, com métricas concretas (1h10 restauração, R$8.2M evitado)."

        elif "bradesco-next-delay" in cache_key:
            relevance = 22  # Bem - assumir erro e refazer criou cultura de transparência
            depth = 26
            evidence = 26
            reasoning = "Case BEM alinhado: decisão de assumir erro e refazer corretamente versus empurrar problema gerou credibilidade de longo prazo, com boas métricas (73k req/h, NPS 89)."

    # Q4 - "quando algo não é sua responsabilidade"
    elif question_id == "Q4":
        if "hsbc-migration-leadership" in cache_key:
            relevance = 26  # Muito bem - migração não era responsabilidade inicial do PMO
            depth = 30
            evidence = 30
            reasoning = "Case MUITO BEM alinhado: migração crítica não era responsabilidade inicial do PMO de Operações, mas assumiu ownership completo, com métricas concretas (99.98% precisão, NPS 52→78, churn 0.3%)."

        elif "sefaz-pmo-creation" in cache_key:
            relevance = 30  # Perfeitamente - PMO não estava no contrato
            depth = 30
            evidence = 30
            reasoning = "Case PERFEITAMENTE alinhado: criar PMO institucional não estava no escopo do contrato de consultoria, mas assumiu responsabilidade integral, com métricas concretas (desvio 23%→7.4%, R$2.3M recuperado)."

        elif "bradesco-international-payments" in cache_key:
            relevance = 22  # Bem - crise envolveu múltiplas áreas além da sua
            depth = 30
            evidence = 30
            reasoning = "Case BEM alinhado: crise abrangia Operações, Compliance, TI e Procurement além da sua área, mas assumiu liderança completa, com métricas excelentes (custo -14%, SLA -38%, NPS 48→74)."

        elif "hsbc-payment-reconciliation" in cache_key:
            relevance = 26  # Muito bem - reconciliação atravessava múltiplas áreas
            depth = 30
            evidence = 30
            reasoning = "Case MUITO BEM alinhado: reconciliação de pagamentos atravessava Operações, TI, Compliance e Correspondentes, mas assumiu resolução pessoal, com métricas concretas (US$47M liberados, backlog zerado)."

        elif "payment-incidents-prevention-mechanism" in cache_key:
            relevance = 30  # Perfeitamente - prevenção de incidentes não era escopo
            depth = 30
            evidence = 26
            reasoning = "Case PERFEITAMENTE alinhado: mecanismo de prevenção não estava no escopo de advisor de estratégia, mas assumiu construção completa, com métricas sólidas (-58% incidentes, -34% MTTR)."

        elif "long-term-tradeoff" in cache_key:
            relevance = 30  # Perfeitamente - core banking não era sua responsabilidade
            depth = 26
            evidence = 30
            reasoning = "Case PERFEITAMENTE alinhado: performance do core banking não era responsabilidade de integrações externas, mas assumiu decisão crítica, com métricas excelentes (99.97% disponibilidade, -53% latência)."

        elif "sefaz-emergency-rollback-no-approval" in cache_key:
            relevance = 30  # Perfeitamente - autorização de rollback não era mandato
            depth = 30
            evidence = 30
            reasoning = "Case PERFEITAMENTE alinhado: autorização de rollback não estava no mandato de advisor, mas agiu sem aprovação com controles estritos, com métricas concretas (1h10 restauração, R$8.2M evitado, 23.4k empresas)."

        elif "bradesco-next-delay" in cache_key:
            relevance = 18  # Parcialmente - erro foi na sua área, mas assumiu totalmente
            depth = 26
            evidence = 26
            reasoning = "Case PARCIALMENTE alinhado: erro de estimativa foi na sua área de responsabilidade, mas assumiu publicamente perante CEO/CTO indo além, com boas métricas (73k req/h, NPS 89)."

    # Q5 - "trade-off difícil pensando no longo prazo"
    elif question_id == "Q5":
        if "hsbc-migration-leadership" in cache_key:
            relevance = 26  # Muito bem - trade-off velocidade vs qualidade
            depth = 30
            evidence = 30
            reasoning = "Case MUITO BEM alinhado: trade-off de investir R$9.5M e tempo extra para qualidade versus velocidade mínima, priorizando longo prazo, com métricas concretas (99.98% precisão, churn 0.3%)."

        elif "sefaz-pmo-creation" in cache_key:
            relevance = 26  # Muito bem - trade-off solução interna vs rápida
            depth = 30
            evidence = 30
            reasoning = "Case MUITO BEM alinhado: trade-off de construir capacidade interna permanente versus soluções rápidas externas, priorizando autonomia de longo prazo, com métricas concretas (desvio 23%→7.4%)."

        elif "bradesco-international-payments" in cache_key:
            relevance = 22  # Bem - trade-off pausar features para corrigir estrutura
            depth = 26
            evidence = 30
            reasoning = "Case BEM alinhado: trade-off de pausar features novas para corrigir estrutura operacional, priorizando sustentabilidade, com métricas excelentes (custo -14%, R$4.8M/ano evitado)."

        elif "hsbc-payment-reconciliation" in cache_key:
            relevance = 18  # Parcialmente - focado em resolver crise imediata
            depth = 30
            evidence = 30
            reasoning = "Case PARCIALMENTE alinhado: focado em resolver crise imediata versus trade-offs de longo prazo, mas criou playbooks reutilizáveis, com métricas concretas (US$47M liberados)."

        elif "payment-incidents-prevention-mechanism" in cache_key:
            relevance = 30  # Perfeitamente - trade-off explícito de 3 opções
            depth = 30
            evidence = 26
            reasoning = "Case PERFEITAMENTE alinhado: trade-off explícito entre ampliar suporte (rápido), terceirizar (caro) ou construir interno (sustentável), escolhendo longo prazo, com métricas sólidas (-58% incidentes)."

        elif "long-term-tradeoff" in cache_key:
            relevance = 30  # Perfeitamente - essência do case
            depth = 30
            evidence = 30
            reasoning = "Case PERFEITAMENTE alinhado: trade-off EXPLÍCITO de reduzir escopo para priorizar robustez de longo prazo, com métricas excelentes (99.97% disponibilidade, -53% latência, Black Friday sucesso)."

        elif "sefaz-emergency-rollback-no-approval" in cache_key:
            relevance = 18  # Parcialmente - trade-off imediato vs protocolo futuro
            depth = 26
            evidence = 30
            reasoning = "Case PARCIALMENTE alinhado: trade-off foi entre agir imediatamente vs esperar aprovação, criando precedente de longo prazo, com métricas concretas (1h10 restauração, R$8.2M evitado)."

        elif "bradesco-next-delay" in cache_key:
            relevance = 26  # Muito bem - trade-off transparência vs proteção de imagem
            depth = 26
            evidence = 26
            reasoning = "Case MUITO BEM alinhado: trade-off de assumir erro publicamente (credibilidade longo prazo) versus justificar/esconder (imagem curto prazo), com boas métricas (73k req/h, NPS 89)."

    # Q6 - "decisão importante sem consultar gestor"
    elif question_id == "Q6":
        if "hsbc-migration-leadership" in cache_key:
            relevance = 18  # Parcialmente - teve apoio do CFO
            depth = 30
            evidence = 30
            reasoning = "Case PARCIALMENTE alinhado: apesar de liderar migração crítica, menciona apoio do CFO para obter R$9.5M, não foi decisão completamente sem consultar, com métricas concretas (99.98% precisão)."

        elif "sefaz-pmo-creation" in cache_key:
            relevance = 26  # Muito bem - trabalhou fim de semana e apresentou pronto
            depth = 30
            evidence = 30
            reasoning = "Case MUITO BEM alinhado: trabalhou fim de semana inteiro extraindo dados e criando business case antes de apresentar, tomando iniciativa sem consulta prévia, com métricas concretas (desvio 23%→7.4%)."

        elif "bradesco-international-payments" in cache_key:
            relevance = 18  # Parcialmente - formou força-tarefa com apoio do CFO
            depth = 30
            evidence = 30
            reasoning = "Case PARCIALMENTE alinhado: liderou força-tarefa e decisões, mas menciona apoio do CFO para orçamento R$120k, não totalmente independente, com métricas excelentes (custo -14%, SLA -38%)."

        elif "hsbc-payment-reconciliation" in cache_key:
            relevance = 26  # Muito bem - montou tiger team e instituiu cadência
            depth = 30
            evidence = 30
            reasoning = "Case MUITO BEM alinhado: montou tiger team em 36h e instituiu cadência de guerra com decisões autônomas, análise pessoal de 300 transações, com métricas concretas (US$47M liberados)."

        elif "payment-incidents-prevention-mechanism" in cache_key:
            relevance = 26  # Muito bem - avaliou opções e escolheu caminho
            depth = 30
            evidence = 26
            reasoning = "Case MUITO BEM alinhado: avaliou três opções e escolheu construir capacidade interna, mapeando 62 incidentes e definindo estrutura, com métricas sólidas (-58% incidentes, -34% MTTR)."

        elif "long-term-tradeoff" in cache_key:
            relevance = 22  # Bem - organizou squad e tomou decisão impopular
            depth = 26
            evidence = 30
            reasoning = "Case BEM alinhado: em 48h organizou squad multifuncional e tomou decisão impopular de reduzir escopo, com métricas excelentes (99.97% disponibilidade, -53% latência)."

        elif "sefaz-emergency-rollback-no-approval" in cache_key:
            relevance = 30  # Perfeitamente - essência do case
            depth = 30
            evidence = 30
            reasoning = "Case PERFEITAMENTE alinhado: autorizou rollback crítico após 15min tentando contato, decidindo sozinho com controles estritos, com métricas concretas (1h10 restauração, R$8.2M evitado, 23.4k empresas)."

        elif "bradesco-next-delay" in cache_key:
            relevance = 22  # Bem - comunicou CEO/CTO diretamente assumindo erro
            depth = 26
            evidence = 26
            reasoning = "Case BEM alinhado: comunicou erro diretamente ao CEO e CTO em 24h sem intermediários, assumindo responsabilidade total, com boas métricas (73k req/h, NPS 89)."

    # Q7 - "identificou ineficiência e tomou ownership"
    elif question_id == "Q7":
        if "hsbc-migration-leadership" in cache_key:
            relevance = 22  # Bem - identificou risco de migração e assumiu
            depth = 30
            evidence = 30
            reasoning = "Case BEM alinhado: identificou risco crítico de migração mal planejada e assumiu ownership completo da solução, com métricas concretas (99.98% precisão, NPS 52→78, Process Cycle Time -94%)."

        elif "sefaz-pmo-creation" in cache_key:
            relevance = 30  # Perfeitamente - identificou caos de 11 sistemas
            depth = 30
            evidence = 30
            reasoning = "Case PERFEITAMENTE alinhado: identificou ineficiência de 11 sistemas duplicados sem governança e assumiu criação de PMO unificado, com métricas concretas (100% duplicidades eliminadas, desvio 23%→7.4%)."

        elif "bradesco-international-payments" in cache_key:
            relevance = 30  # Perfeitamente - identificou causa raiz de custo +15%
            depth = 30
            evidence = 30
            reasoning = "Case PERFEITAMENTE alinhado: identificou ineficiência estrutural causando custo +15% e SLA +60% e assumiu correção completa, com métricas excelentes (custo -14%, SLA -38%, backlog -86%)."

        elif "hsbc-payment-reconciliation" in cache_key:
            relevance = 30  # Perfeitamente - identificou US$47M travados
            depth = 30
            evidence = 30
            reasoning = "Case PERFEITAMENTE alinhado: identificou proativamente US$47M em pagamentos travados em auditoria paralela e assumiu resolução total, com métricas concretas (2847→0 backlog, 40% melhor que benchmark)."

        elif "payment-incidents-prevention-mechanism" in cache_key:
            relevance = 30  # Perfeitamente - identificou padrão de reincidência
            depth = 30
            evidence = 26
            reasoning = "Case PERFEITAMENTE alinhado: identificou padrão de incidentes reincidentes (3x em 6 semanas) e transformou em mecanismo preventivo, com métricas sólidas (-58% incidentes, -34% MTTR, classe A zerado)."

        elif "long-term-tradeoff" in cache_key:
            relevance = 26  # Muito bem - identificou gargalo de core
            depth = 26
            evidence = 30
            reasoning = "Case MUITO BEM alinhado: identificou gargalo crítico de performance no core (8k TPS limite) e assumiu decisão de redesenho, com métricas excelentes (99.97% disponibilidade, -53% latência)."

        elif "sefaz-emergency-rollback-no-approval" in cache_key:
            relevance = 22  # Bem - identificou necessidade de rollback imediato
            depth = 30
            evidence = 30
            reasoning = "Case BEM alinhado: identificou necessidade crítica de rollback e tomou ownership da decisão com controles, com métricas concretas (1h10 restauração, R$8.2M evitado, 23.4k empresas protegidas)."

        elif "bradesco-next-delay" in cache_key:
            relevance = 18  # Parcialmente - identificou erro próprio
            depth = 26
            evidence = 26
            reasoning = "Case PARCIALMENTE alinhado: identificou erro de estimativa próprio e assumiu correção transparente, não ineficiência sistêmica de outros, com boas métricas (73k req/h, NPS 89)."

    # Q8 - "falhou em algo e como assumiu responsabilidade"
    elif question_id == "Q8":
        if "bradesco-next-delay" in cache_key:
            relevance = 30  # Perfeitamente - erro de estimativa assumido
            depth = 30
            evidence = 26
            reasoning = "Case PERFEITAMENTE alinhado: falhou na estimativa de integração Serasa e assumiu publicamente ao CEO/CTO em 24h, com STAR-L completo e boas métricas (73k req/h, NPS 89, entregue no novo prazo)."

        elif "hsbc-migration-leadership" in cache_key:
            relevance = 12  # Tangencialmente - não é sobre falha pessoal
            depth = 30
            evidence = 30
            reasoning = "Case TANGENCIALMENTE alinhado: focado em sucesso de migração, não em falha pessoal assumida, apesar de métricas excelentes (99.98% precisão, NPS 52→78)."

        elif "sefaz-pmo-creation" in cache_key:
            relevance = 12  # Tangencialmente - não é sobre falha
            depth = 30
            evidence = 30
            reasoning = "Case TANGENCIALMENTE alinhado: focado em resolver problema institucional existente, não em assumir falha pessoal, apesar de métricas concretas (desvio 23%→7.4%)."

        elif "bradesco-international-payments" in cache_key:
            relevance = 12  # Tangencialmente - herdou problema, não causou
            depth = 30
            evidence = 30
            reasoning = "Case TANGENCIALMENTE alinhado: herdou crise operacional e resolveu, não assumiu falha pessoal prévia, apesar de métricas excelentes (custo -14%, SLA -38%)."

        elif "hsbc-payment-reconciliation" in cache_key:
            relevance = 12  # Tangencialmente - identificou problema de outros
            depth = 30
            evidence = 30
            reasoning = "Case TANGENCIALMENTE alinhado: identificou problema sistêmico proativamente e resolveu, não assumiu falha pessoal, apesar de métricas concretas (US$47M liberados)."

        elif "payment-incidents-prevention-mechanism" in cache_key:
            relevance = 12  # Tangencialmente - resolveu problema sistêmico
            depth = 30
            evidence = 26
            reasoning = "Case TANGENCIALMENTE alinhado: resolveu padrão de incidentes reincidentes, não assumiu falha pessoal específica, apesar de métricas sólidas (-58% incidentes)."

        elif "long-term-tradeoff" in cache_key:
            relevance = 12  # Tangencialmente - preveniu falha futura
            depth = 26
            evidence = 30
            reasoning = "Case TANGENCIALMENTE alinhado: tomou decisão preventiva para evitar falha futura, não assumiu falha passada, apesar de métricas excelentes (99.97% disponibilidade)."

        elif "sefaz-emergency-rollback-no-approval" in cache_key:
            relevance = 12  # Tangencialmente - respondeu a incidente de outros
            depth = 30
            evidence = 30
            reasoning = "Case TANGENCIALMENTE alinhado: respondeu a incidente causado por deploy de outros, não assumiu falha pessoal, apesar de métricas concretas (1h10 restauração, R$8.2M evitado)."

    # Q9 - "projeto/decisão que não deu certo e como lidou"
    elif question_id == "Q9":
        if "bradesco-next-delay" in cache_key:
            relevance = 30  # Perfeitamente - projeto atrasou, assumiu e corrigiu
            depth = 30
            evidence = 26
            reasoning = "Case PERFEITAMENTE alinhado: lançamento não ocorreu na data planejada, assumiu erro publicamente e liderou correção, com STAR-L completo e boas métricas (entregue no novo prazo, NPS 89)."

        elif "hsbc-migration-leadership" in cache_key:
            relevance = 12  # Tangencialmente - projeto ameaçado, mas salvou
            depth = 30
            evidence = 30
            reasoning = "Case TANGENCIALMENTE alinhado: migração estava em risco crítico mas foi salva antes de falhar, não é caso de projeto que não deu certo, apesar de métricas excelentes (99.98% precisão)."

        elif "sefaz-pmo-creation" in cache_key:
            relevance = 12  # Tangencialmente - governança falhou, mas antes dele
            depth = 30
            evidence = 30
            reasoning = "Case TANGENCIALMENTE alinhado: governança anterior falhou, mas não foi projeto dele que não deu certo, ele resolveu falha sistêmica, apesar de métricas concretas (desvio 23%→7.4%)."

        elif "bradesco-international-payments" in cache_key:
            relevance = 12  # Tangencialmente - operação degradou, mas herdada
            depth = 30
            evidence = 30
            reasoning = "Case TANGENCIALMENTE alinhado: operação internacional degradou por 6 meses, mas não foi decisão/projeto dele que falhou, herdou e corrigiu, apesar de métricas excelentes (custo -14%)."

        elif "hsbc-payment-reconciliation" in cache_key:
            relevance = 12  # Tangencialmente - reconciliação falhou, mas de outros
            depth = 30
            evidence = 30
            reasoning = "Case TANGENCIALMENTE alinhado: processo de reconciliação falhou gerando backlog, mas não foi projeto dele que não deu certo, identificou e resolveu, apesar de métricas concretas (US$47M liberados)."

        elif "payment-incidents-prevention-mechanism" in cache_key:
            relevance = 12  # Tangencialmente - incidentes recorreram, mas de outros
            depth = 30
            evidence = 26
            reasoning = "Case TANGENCIALMENTE alinhado: sistema teve incidentes recorrentes, mas não foi projeto dele que falhou, transformou padrão em mecanismo, apesar de métricas sólidas (-58% incidentes)."

        elif "long-term-tradeoff" in cache_key:
            relevance = 18  # Parcialmente - escopo inicial não viável, ajustou
            depth = 26
            evidence = 30
            reasoning = "Case PARCIALMENTE alinhado: plano de lançamento completo não era viável, tomou decisão impopular de reduzir escopo, mas não foi falha completa, com métricas excelentes (99.97% disponibilidade)."

        elif "sefaz-emergency-rollback-no-approval" in cache_key:
            relevance = 12  # Tangencialmente - deploy de outros falhou
            depth = 30
            evidence = 30
            reasoning = "Case TANGENCIALMENTE alinhado: deploy novo falhou causando indisponibilidade, mas não foi projeto dele que não deu certo, respondeu a incidente, apesar de métricas concretas (1h10 restauração)."

    # Q10 - "algo desconfortável pelo bem do time/empresa"
    elif question_id == "Q10":
        if "bradesco-next-delay" in cache_key:
            relevance = 30  # Perfeitamente - assumir erro ao CEO é desconfortável
            depth = 30
            evidence = 26
            reasoning = "Case PERFEITAMENTE alinhado: assumir erro publicamente ao CEO, CTO e conselho é extremamente desconfortável, mas necessário para credibilidade da empresa, com STAR-L completo e boas métricas (NPS 89)."

        elif "sefaz-emergency-rollback-no-approval" in cache_key:
            relevance = 30  # Perfeitamente - autorizar sem gestor é desconfortável
            depth = 30
            evidence = 30
            reasoning = "Case PERFEITAMENTE alinhado: autorizar rollback crítico sem conseguir contato com gestor é desconfortável e arriscado, mas necessário para proteger 23.4k empresas, com métricas concretas (R$8.2M evitado)."

        elif "long-term-tradeoff" in cache_key:
            relevance = 26  # Muito bem - decisão impopular de reduzir escopo
            depth = 26
            evidence = 30
            reasoning = "Case MUITO BEM alinhado: tomar decisão impopular de reduzir escopo quando todos queriam lançamento completo foi desconfortável, mas protegeu clientes, com métricas excelentes (99.97% disponibilidade)."

        elif "hsbc-migration-leadership" in cache_key:
            relevance = 22  # Bem - assumir migração crítica sob pressão
            depth = 30
            evidence = 30
            reasoning = "Case BEM alinhado: assumir liderança de migração US$5.2B sob pressão do BACEN foi desconfortável, mas necessário para banco, com métricas concretas (99.98% precisão, NPS 52→78)."

        elif "sefaz-pmo-creation" in cache_key:
            relevance = 22  # Bem - trabalhar fim de semana para crise BID
            depth = 30
            evidence = 30
            reasoning = "Case BEM alinhado: trabalhar fim de semana inteiro extraindo dados manualmente foi desconfortável, mas necessário para salvar US$12M do BID, com métricas concretas (desvio 23%→7.4%)."

        elif "bradesco-international-payments" in cache_key:
            relevance = 22  # Bem - pausar features para corrigir estrutura
            depth = 30
            evidence = 30
            reasoning = "Case BEM alinhado: pausar features novas para corrigir problemas estruturais foi desconfortável com pressão comercial, mas necessário, com métricas excelentes (custo -14%, SLA -38%)."

        elif "hsbc-payment-reconciliation" in cache_key:
            relevance = 22  # Bem - trabalhar 38 dias em ritmo de guerra
            depth = 30
            evidence = 30
            reasoning = "Case BEM alinhado: instituir cadência de guerra (daily 8h, review 18h) por 38 dias foi desconfortável, mas necessário para zerar US$47M travados, com métricas concretas (backlog zerado)."

        elif "payment-incidents-prevention-mechanism" in cache_key:
            relevance = 18  # Parcialmente - assumir escopo além do contrato
            depth = 30
            evidence = 26
            reasoning = "Case PARCIALMENTE alinhado: assumir construção de mecanismo preventivo além do escopo de consultoria foi desconfortável, com métricas sólidas (-58% incidentes, -34% MTTR)."

    # Q11 - "discordou do gestor e como agiu"
    elif question_id == "Q11":
        if "sefaz-emergency-rollback-no-approval" in cache_key:
            relevance = 26  # Muito bem - agiu sem conseguir contato
            depth = 30
            evidence = 30
            reasoning = "Case MUITO BEM alinhado: agiu sem conseguir aprovação do diretor (15min tentando), tomando decisão que poderia ser questionada depois, com métricas concretas (1h10 restauração, R$8.2M evitado)."

        elif "long-term-tradeoff" in cache_key:
            relevance = 26  # Muito bem - decisão impopular contrariando consenso
            depth = 26
            evidence = 30
            reasoning = "Case MUITO BEM alinhado: tomou decisão impopular de reduzir escopo contrariando consenso geral de lançamento completo, com métricas excelentes (99.97% disponibilidade, -53% latência)."

        elif "hsbc-migration-leadership" in cache_key:
            relevance = 18  # Parcialmente - liderou com apoio do CFO
            depth = 30
            evidence = 30
            reasoning = "Case PARCIALMENTE alinhado: liderou migração de forma assertiva com apoio do CFO, não está claro se houve discordância explícita, com métricas concretas (99.98% precisão, NPS 52→78)."

        elif "sefaz-pmo-creation" in cache_key:
            relevance = 18  # Parcialmente - assumiu iniciativa além do contrato
            depth = 30
            evidence = 30
            reasoning = "Case PARCIALMENTE alinhado: assumiu criação de PMO além do contrato sem consulta prévia, mas não menciona discordância explícita com gestor, com métricas concretas (desvio 23%→7.4%)."

        elif "bradesco-international-payments" in cache_key:
            relevance = 18  # Parcialmente - pausou features com apoio CFO
            depth = 30
            evidence = 30
            reasoning = "Case PARCIALMENTE alinhado: tomou decisão de pausar features com apoio do CFO, não está claro se houve discordância com gestor direto, com métricas excelentes (custo -14%, SLA -38%)."

        elif "hsbc-payment-reconciliation" in cache_key:
            relevance = 18  # Parcialmente - instituiu cadência sem mencionar gestor
            depth = 30
            evidence = 30
            reasoning = "Case PARCIALMENTE alinhado: instituiu cadência de guerra e tomou decisões autônomas, mas não menciona discordância explícita, com métricas concretas (US$47M liberados, backlog zerado)."

        elif "payment-incidents-prevention-mechanism" in cache_key:
            relevance = 18  # Parcialmente - escolheu caminho além do escopo
            depth = 30
            evidence = 26
            reasoning = "Case PARCIALMENTE alinhado: escolheu construir mecanismo interno versus terceirizar, mas não menciona discordância explícita com gestor, com métricas sólidas (-58% incidentes)."

        elif "bradesco-next-delay" in cache_key:
            relevance = 12  # Tangencialmente - assumiu erro, não discordou
            depth = 26
            evidence = 26
            reasoning = "Case TANGENCIALMENTE alinhado: assumiu erro e propôs nova data, mas não foi discordância sobre decisão técnica, foi assumir falha, com boas métricas (73k req/h, NPS 89)."

    # Q12 - "decisão difícil rapidamente"
    elif question_id == "Q12":
        if "sefaz-emergency-rollback-no-approval" in cache_key:
            relevance = 30  # Perfeitamente - decisão em 15 minutos
            depth = 30
            evidence = 30
            reasoning = "Case PERFEITAMENTE alinhado: decisão de autorizar rollback tomada em 15 minutos após falhar contato com gestor, sob pressão de 23.4k empresas paradas, com métricas concretas (1h10 restauração, R$8.2M evitado)."

        elif "hsbc-payment-reconciliation" in cache_key:
            relevance = 26  # Muito bem - montou tiger team em 36 horas
            depth = 30
            evidence = 30
            reasoning = "Case MUITO BEM alinhado: decisão de montar tiger team multifuncional e instituir cadência de guerra tomada em 36 horas, com US$47M em risco, com métricas concretas (2847→0 backlog em 38 dias)."

        elif "long-term-tradeoff" in cache_key:
            relevance = 26  # Muito bem - organizou squad em 48 horas
            depth = 26
            evidence = 30
            reasoning = "Case MUITO BEM alinhado: decisão de dividir lançamento em fases e organizar squad multifuncional tomada em 48 horas sob pressão de mercado, com métricas excelentes (99.97% disponibilidade, -53% latência)."

        elif "bradesco-next-delay" in cache_key:
            relevance = 26  # Muito bem - comunicou CEO em 24 horas
            depth = 26
            evidence = 26
            reasoning = "Case MUITO BEM alinhado: decisão de assumir erro publicamente e comunicar CEO, CTO e conselho tomada em 24 horas, com boas métricas (73k req/h, NPS 89, entregue no novo prazo)."

        elif "hsbc-migration-leadership" in cache_key:
            relevance = 22  # Bem - assumiu liderança no dia (email 6h da manhã)
            depth = 30
            evidence = 30
            reasoning = "Case BEM alinhado: decisão de assumir liderança completa tomada no dia do email crítico às 6h da manhã, com BACEN pressionando, com métricas concretas (99.98% precisão, NPS 52→78)."

        elif "sefaz-pmo-creation" in cache_key:
            relevance = 22  # Bem - trabalhou fim de semana após ofício sexta
            depth = 30
            evidence = 30
            reasoning = "Case BEM alinhado: decisão de assumir criação de PMO tomada no fim de semana após ofício do BID sexta 17h30, com 45 dias de prazo, com métricas concretas (desvio 23%→7.4%)."

        elif "bradesco-international-payments" in cache_key:
            relevance = 18  # Parcialmente - formou força-tarefa, mas prazo 90 dias
            depth = 30
            evidence = 30
            reasoning = "Case PARCIALMENTE alinhado: formou força-tarefa e instituiu rituais de decisão rápida (daily 30min), mas contexto era 90 dias não emergencial, com métricas excelentes (custo -14%, SLA -38%)."

        elif "payment-incidents-prevention-mechanism" in cache_key:
            relevance = 18  # Parcialmente - avaliou opções e escolheu, mas não urgente
            depth = 30
            evidence = 26
            reasoning = "Case PARCIALMENTE alinhado: avaliou três opções e tomou decisão estrutural, mas não foi contexto de decisão sob pressão imediata, com métricas sólidas (-58% incidentes, -34% MTTR)."

    # Q13 - "priorizou cliente/empresa sobre facilidade pessoal"
    elif question_id == "Q13":
        if "sefaz-emergency-rollback-no-approval" in cache_key:
            relevance = 30  # Perfeitamente - arriscou posição para proteger empresas
            depth = 30
            evidence = 30
            reasoning = "Case PERFEITAMENTE alinhado: arriscou posição política autorizando rollback sem aprovação para proteger 23.4k empresas, priorizando cidadãos sobre segurança pessoal, com métricas concretas (R$8.2M evitado)."

        elif "long-term-tradeoff" in cache_key:
            relevance = 30  # Perfeitamente - tomou decisão impopular para proteger cliente
            depth = 26
            evidence = 30
            reasoning = "Case PERFEITAMENTE alinhado: tomou decisão impopular de reduzir escopo para proteger estabilidade do cliente, contrariando pressão interna, com métricas excelentes (99.97% disponibilidade, -53% latência)."

        elif "bradesco-next-delay" in cache_key:
            relevance = 30  # Perfeitamente - assumiu erro publicamente por qualidade
            depth = 26
            evidence = 26
            reasoning = "Case PERFEITAMENTE alinhado: assumiu erro publicamente ao CEO arriscando carreira para garantir qualidade do produto ao cliente, com boas métricas (73k req/h, NPS 89, 3 min 47s aprovação)."

        elif "hsbc-migration-leadership" in cache_key:
            relevance = 26  # Muito bem - assumiu pressão crítica de US$5.2B
            depth = 30
            evidence = 30
            reasoning = "Case MUITO BEM alinhado: assumiu pressão de migração US$5.2B sob ameaça BACEN para proteger clientes premium, com métricas concretas (99.98% precisão, churn 0.3%, NPS 52→78)."

        elif "hsbc-payment-reconciliation" in cache_key:
            relevance = 26  # Muito bem - trabalhou 38 dias em cadência guerra
            depth = 30
            evidence = 30
            reasoning = "Case MUITO BEM alinhado: trabalhou 38 dias em cadência de guerra (daily 8h, review 18h) para proteger clientes e evitar multa BACEN, com métricas concretas (US$47M liberados, R$12M multa evitada)."

        elif "sefaz-pmo-creation" in cache_key:
            relevance = 26  # Muito bem - trabalhou fim de semana para BID
            depth = 30
            evidence = 30
            reasoning = "Case MUITO BEM alinhado: trabalhou fim de semana inteiro extraindo dados manualmente para salvar US$12M do BID e proteger programas sociais, com métricas concretas (desvio 23%→7.4%, tempo ICMS 28→9 dias)."

        elif "bradesco-international-payments" in cache_key:
            relevance = 22  # Bem - pausou features para corrigir estrutura
            depth = 30
            evidence = 30
            reasoning = "Case BEM alinhado: pausou features novas para corrigir estrutura e proteger experiência cliente premium, com métricas excelentes (NPS 48→74, custo -14%, SLA -38%, R$4.8M/ano evitado)."

        elif "payment-incidents-prevention-mechanism" in cache_key:
            relevance = 22  # Bem - construiu mecanismo além do escopo
            depth = 30
            evidence = 26
            reasoning = "Case BEM alinhado: assumiu construção de mecanismo preventivo além do escopo de consultoria para proteger arrecadação estadual, com métricas sólidas (-58% incidentes, -34% MTTR, classe A zerado)."

    score_base = relevance + depth + evidence

    result = {
        "cacheKey": cache_key,
        "relevance": relevance,
        "depth": depth,
        "evidence": evidence,
        "scoreBase": score_base,
        "reasoning": reasoning
    }

    results.append(result)

# Output as JSON array
print(json.dumps(results, indent=2, ensure_ascii=False))
