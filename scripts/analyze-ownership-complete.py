# -*- coding: utf-8 -*-
import json
import sys
import io

# Set UTF-8 encoding for stdout
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Define all 13 questions for Ownership LP
QUESTIONS = {
    "Q1": "Nos conte uma situação onde você assumiu responsabilidade além do seu escopo de trabalho e área de conhecimento - como lidou com isso, equilibrando as tarefas atuais/normais com essas outras (novas)?",
    "Q2": "Me dê um exemplo de quando você foi além da sua função",
    "Q3": "Conte sobre uma decisão de longo prazo que você tomou",
    "Q4": "Como você age quando algo não é sua responsabilidade?",
    "Q5": "Me fale sobre um trade-off difícil que você fez pensando no longo prazo",
    "Q6": "Descreva uma situação onde você tomou uma decisão importante de negócio sem consultar seu gestor",
    "Q7": "Me fale sobre quando você identificou uma ineficiência e tomou ownership para melhorar",
    "Q8": "Como você lida com situações onde precisa assumir responsabilidade por erros?",
    "Q9": "Descreva um projeto que você liderou do início ao fim - como garantiu o sucesso?",
    "Q10": "Descreva quando você criou um mecanismo para prevenir problemas recorrentes em pagamentos",
    "Q11": "Como você lida com situações onde múltiplas pessoas poderiam assumir ownership?",
    "Q12": "Conte sobre quando você teve que assumir ownership de um problema criado por outro time",
    "Q13": "Como você gerencia dependências entre múltiplos times?"
}

# Define all 8 cases
CASES = [
    "hsbc-migration-leadership",
    "sefaz-pmo-creation",
    "bradesco-international-payments",
    "hsbc-payment-reconciliation",
    "payment-incidents-prevention-mechanism",
    "long-term-tradeoff",
    "sefaz-emergency-rollback-no-approval",
    "bradesco-next-delay"
]

def analyze_combination(question_id, case_id):
    """Analyze a specific Question x Case combination for Ownership LP"""

    relevance = 0
    depth = 0
    evidence = 0
    reasoning = ""

    # Q1 - "assumiu responsabilidade além do seu escopo"
    if question_id == "Q1":
        if case_id == "hsbc-migration-leadership":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: assumiu liderança completa de migração crítica além do escopo PMO, com STAR-L completo e métricas concretas (99.98% precisão, NPS 52→78, churn 0.3%)."
        elif case_id == "sefaz-pmo-creation":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: criou PMO institucional do zero além do contrato de consultoria, com STAR-L completo e métricas concretas (100% duplicidades eliminadas, desvio 23%→7.4%, R$2.3M recuperado)."
        elif case_id == "bradesco-international-payments":
            relevance, depth, evidence = 26, 30, 30
            reasoning = "Case MUITO BEM alinhado: liderou reversão completa integrando múltiplas áreas, com STAR-L completo e métricas concretas (custo -14%, SLA -38%, backlog -86%, NPS +26 pontos)."
        elif case_id == "hsbc-payment-reconciliation":
            relevance, depth, evidence = 26, 30, 30
            reasoning = "Case MUITO BEM alinhado: assumiu resolução completa de US$47M em pagamentos travados, com ação hands-on (scripts SQL próprios) e métricas concretas (100% backlog zerado, 40% acima do benchmark)."
        elif case_id == "payment-incidents-prevention-mechanism":
            relevance, depth, evidence = 30, 30, 26
            reasoning = "Case PERFEITAMENTE alinhado: transformou escopo de consultoria em mecanismo preventivo completo, com STAR-L detalhado e métricas sólidas (-58% incidentes, -34% MTTR, nenhum incidente classe A repetido)."
        elif case_id == "long-term-tradeoff":
            relevance, depth, evidence = 26, 26, 30
            reasoning = "Case MUITO BEM alinhado: assumiu decisão sobre core banking além do escopo de integrações, priorizando robustez, com métricas excelentes (99.97% disponibilidade, -53% latência, incidentes P1 27→4)."
        elif case_id == "sefaz-emergency-rollback-no-approval":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: autorizou rollback crítico sem consultar gestor, assumindo responsabilidade total com controles e métricas concretas (1h10 restauração, R$8.2M evitado, 23.4k empresas protegidas)."
        elif case_id == "bradesco-next-delay":
            relevance, depth, evidence = 22, 26, 26
            reasoning = "Case BEM alinhado: assumiu publicamente erro de estimativa e responsabilidade pela solução, com STAR-L bom e métricas sólidas (73k requisições/hora, 12.8k contas abertas, NPS 89)."

    # Q2 - "foi além da sua função"
    elif question_id == "Q2":
        if case_id == "hsbc-migration-leadership":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: foi além da função de Head PMO para assumir liderança completa de migração crítica, com STAR-L completo e métricas concretas (99.98% precisão, NPS 52→78, churn 0.3%)."
        elif case_id == "sefaz-pmo-creation":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: foi além do contrato de consultoria metodológica para criar PMO institucional completo, com STAR-L detalhado e métricas concretas (desvio 23%→7.4%, R$2.3M recuperado)."
        elif case_id == "bradesco-international-payments":
            relevance, depth, evidence = 26, 30, 30
            reasoning = "Case MUITO BEM alinhado: foi além da função para liderar reversão completa de crise operacional cross-funcional, com métricas excelentes (custo -14%, SLA -38%, NPS 48→74)."
        elif case_id == "hsbc-payment-reconciliation":
            relevance, depth, evidence = 26, 30, 30
            reasoning = "Case MUITO BEM alinhado: foi além da função para resolver pessoalmente crise de reconciliação, escrevendo scripts SQL e liderando tiger team, com métricas concretas (US$47M liberados, backlog zerado)."
        elif case_id == "payment-incidents-prevention-mechanism":
            relevance, depth, evidence = 30, 30, 26
            reasoning = "Case PERFEITAMENTE alinhado: foi além do escopo de advisor de estratégia para construir mecanismo preventivo completo, com métricas sólidas (-58% incidentes, -34% MTTR, classe A zerado)."
        elif case_id == "long-term-tradeoff":
            relevance, depth, evidence = 26, 26, 30
            reasoning = "Case MUITO BEM alinhado: foi além do escopo de integrações externas para tomar decisão sobre core banking, priorizando estabilidade, com métricas excelentes (99.97% disponibilidade, -53% latência)."
        elif case_id == "sefaz-emergency-rollback-no-approval":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: foi além do mandato de advisor para autorizar rollback crítico sem aprovação, com controles estritos e métricas concretas (1h10 restauração, R$8.2M evitado)."
        elif case_id == "bradesco-next-delay":
            relevance, depth, evidence = 26, 26, 26
            reasoning = "Case MUITO BEM alinhado: foi além da função de PM para assumir publicamente erro perante CEO/CTO e liderar solução completa, com boas métricas (73k req/h, NPS 89)."

    # Q3 - "decisão de longo prazo"
    elif question_id == "Q3":
        if case_id == "hsbc-migration-leadership":
            relevance, depth, evidence = 22, 30, 30
            reasoning = "Case BEM alinhado: decisão de investir R$9.5M em controles e automação foi escolha de longo prazo para qualidade sobre velocidade, com métricas excelentes (99.98% precisão, NPS 52→78)."
        elif case_id == "sefaz-pmo-creation":
            relevance, depth, evidence = 26, 30, 30
            reasoning = "Case MUITO BEM alinhado: decisão de criar PMO institucional permanente versus solução pontual é claramente de longo prazo, com métricas concretas (desvio 23%→7.4%, R$2.3M recuperado anualmente)."
        elif case_id == "bradesco-international-payments":
            relevance, depth, evidence = 22, 26, 30
            reasoning = "Case BEM alinhado: além de resolver crise, criou manual e template corporativo reutilizável de longo prazo, com métricas sólidas (custo -14%, R$4.8M/ano evitado)."
        elif case_id == "hsbc-payment-reconciliation":
            relevance, depth, evidence = 18, 30, 30
            reasoning = "Case PARCIALMENTE alinhado: focado em resolver crise imediata (38 dias), mas criou playbooks reutilizáveis, com métricas concretas (US$47M liberados, 40% melhor que benchmark)."
        elif case_id == "payment-incidents-prevention-mechanism":
            relevance, depth, evidence = 30, 30, 26
            reasoning = "Case PERFEITAMENTE alinhado: rejeitou soluções de curto prazo para construir capacidade interna permanente de prevenção, com métricas sólidas (-58% incidentes recorrentes, -34% MTTR)."
        elif case_id == "long-term-tradeoff":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: decisão explícita de reduzir escopo para priorizar robustez de longo prazo sobre volume de curto prazo, com métricas excelentes (99.97% disponibilidade, Black Friday sem incidentes)."
        elif case_id == "sefaz-emergency-rollback-no-approval":
            relevance, depth, evidence = 18, 26, 30
            reasoning = "Case PARCIALMENTE alinhado: decisão foi emergencial e imediata, mas criou protocolo e precedente de longo prazo, com métricas concretas (1h10 restauração, R$8.2M evitado)."
        elif case_id == "bradesco-next-delay":
            relevance, depth, evidence = 22, 26, 26
            reasoning = "Case BEM alinhado: decisão de assumir erro e refazer corretamente versus empurrar problema gerou credibilidade de longo prazo, com boas métricas (73k req/h, NPS 89)."

    # Q4 - "quando algo não é sua responsabilidade"
    elif question_id == "Q4":
        if case_id == "hsbc-migration-leadership":
            relevance, depth, evidence = 26, 30, 30
            reasoning = "Case MUITO BEM alinhado: migração crítica não era responsabilidade inicial do PMO de Operações, mas assumiu ownership completo, com métricas concretas (99.98% precisão, NPS 52→78, churn 0.3%)."
        elif case_id == "sefaz-pmo-creation":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: criar PMO institucional não estava no escopo do contrato de consultoria, mas assumiu responsabilidade integral, com métricas concretas (desvio 23%→7.4%, R$2.3M recuperado)."
        elif case_id == "bradesco-international-payments":
            relevance, depth, evidence = 22, 30, 30
            reasoning = "Case BEM alinhado: crise abrangia Operações, Compliance, TI e Procurement além da sua área, mas assumiu liderança completa, com métricas excelentes (custo -14%, SLA -38%, NPS 48→74)."
        elif case_id == "hsbc-payment-reconciliation":
            relevance, depth, evidence = 26, 30, 30
            reasoning = "Case MUITO BEM alinhado: reconciliação de pagamentos atravessava Operações, TI, Compliance e Correspondentes, mas assumiu resolução pessoal, com métricas concretas (US$47M liberados, backlog zerado)."
        elif case_id == "payment-incidents-prevention-mechanism":
            relevance, depth, evidence = 30, 30, 26
            reasoning = "Case PERFEITAMENTE alinhado: mecanismo de prevenção não estava no escopo de advisor de estratégia, mas assumiu construção completa, com métricas sólidas (-58% incidentes, -34% MTTR)."
        elif case_id == "long-term-tradeoff":
            relevance, depth, evidence = 30, 26, 30
            reasoning = "Case PERFEITAMENTE alinhado: performance do core banking não era responsabilidade de integrações externas, mas assumiu decisão crítica, com métricas excelentes (99.97% disponibilidade, -53% latência)."
        elif case_id == "sefaz-emergency-rollback-no-approval":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: autorização de rollback não estava no mandato de advisor, mas agiu sem aprovação com controles estritos, com métricas concretas (1h10 restauração, R$8.2M evitado, 23.4k empresas)."
        elif case_id == "bradesco-next-delay":
            relevance, depth, evidence = 18, 26, 26
            reasoning = "Case PARCIALMENTE alinhado: erro de estimativa foi na sua área de responsabilidade, mas assumiu publicamente perante CEO/CTO indo além, com boas métricas (73k req/h, NPS 89)."

    # Q5 - "trade-off difícil pensando no longo prazo"
    elif question_id == "Q5":
        if case_id == "hsbc-migration-leadership":
            relevance, depth, evidence = 26, 30, 30
            reasoning = "Case MUITO BEM alinhado: trade-off de investir R$9.5M e tempo extra para qualidade versus velocidade mínima, priorizando longo prazo, com métricas concretas (99.98% precisão, churn 0.3%)."
        elif case_id == "sefaz-pmo-creation":
            relevance, depth, evidence = 26, 30, 30
            reasoning = "Case MUITO BEM alinhado: trade-off de construir capacidade interna permanente versus soluções rápidas externas, priorizando autonomia de longo prazo, com métricas concretas (desvio 23%→7.4%)."
        elif case_id == "bradesco-international-payments":
            relevance, depth, evidence = 22, 26, 30
            reasoning = "Case BEM alinhado: trade-off de pausar features novas para corrigir estrutura operacional, priorizando sustentabilidade, com métricas excelentes (custo -14%, R$4.8M/ano evitado)."
        elif case_id == "hsbc-payment-reconciliation":
            relevance, depth, evidence = 18, 30, 30
            reasoning = "Case PARCIALMENTE alinhado: focado em resolver crise imediata versus trade-offs de longo prazo, mas criou playbooks reutilizáveis, com métricas concretas (US$47M liberados)."
        elif case_id == "payment-incidents-prevention-mechanism":
            relevance, depth, evidence = 30, 30, 26
            reasoning = "Case PERFEITAMENTE alinhado: trade-off explícito entre ampliar suporte (rápido), terceirizar (caro) ou construir interno (sustentável), escolhendo longo prazo, com métricas sólidas (-58% incidentes)."
        elif case_id == "long-term-tradeoff":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: trade-off EXPLÍCITO de reduzir escopo para priorizar robustez de longo prazo, com métricas excelentes (99.97% disponibilidade, -53% latência, Black Friday sucesso)."
        elif case_id == "sefaz-emergency-rollback-no-approval":
            relevance, depth, evidence = 18, 26, 30
            reasoning = "Case PARCIALMENTE alinhado: trade-off foi entre agir imediatamente vs esperar aprovação, criando precedente de longo prazo, com métricas concretas (1h10 restauração, R$8.2M evitado)."
        elif case_id == "bradesco-next-delay":
            relevance, depth, evidence = 26, 26, 26
            reasoning = "Case MUITO BEM alinhado: trade-off de assumir erro publicamente (credibilidade longo prazo) versus justificar/esconder (imagem curto prazo), com boas métricas (73k req/h, NPS 89)."

    # Q6 - "decisão importante sem consultar gestor"
    elif question_id == "Q6":
        if case_id == "hsbc-migration-leadership":
            relevance, depth, evidence = 18, 30, 30
            reasoning = "Case PARCIALMENTE alinhado: apesar de liderar migração crítica, menciona apoio do CFO para obter R$9.5M, não foi decisão completamente sem consultar, com métricas concretas (99.98% precisão)."
        elif case_id == "sefaz-pmo-creation":
            relevance, depth, evidence = 26, 30, 30
            reasoning = "Case MUITO BEM alinhado: trabalhou fim de semana inteiro extraindo dados e criando business case antes de apresentar, tomando iniciativa sem consulta prévia, com métricas concretas (desvio 23%→7.4%)."
        elif case_id == "bradesco-international-payments":
            relevance, depth, evidence = 18, 30, 30
            reasoning = "Case PARCIALMENTE alinhado: liderou força-tarefa e decisões, mas menciona apoio do CFO para orçamento R$120k, não totalmente independente, com métricas excelentes (custo -14%, SLA -38%)."
        elif case_id == "hsbc-payment-reconciliation":
            relevance, depth, evidence = 26, 30, 30
            reasoning = "Case MUITO BEM alinhado: montou tiger team em 36h e instituiu cadência de guerra com decisões autônomas, análise pessoal de 300 transações, com métricas concretas (US$47M liberados)."
        elif case_id == "payment-incidents-prevention-mechanism":
            relevance, depth, evidence = 26, 30, 26
            reasoning = "Case MUITO BEM alinhado: avaliou três opções e escolheu construir capacidade interna, mapeando 62 incidentes e definindo estrutura, com métricas sólidas (-58% incidentes, -34% MTTR)."
        elif case_id == "long-term-tradeoff":
            relevance, depth, evidence = 22, 26, 30
            reasoning = "Case BEM alinhado: em 48h organizou squad multifuncional e tomou decisão impopular de reduzir escopo, com métricas excelentes (99.97% disponibilidade, -53% latência)."
        elif case_id == "sefaz-emergency-rollback-no-approval":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: autorizou rollback crítico após 15min tentando contato, decidindo sozinho com controles estritos, com métricas concretas (1h10 restauração, R$8.2M evitado, 23.4k empresas)."
        elif case_id == "bradesco-next-delay":
            relevance, depth, evidence = 22, 26, 26
            reasoning = "Case BEM alinhado: comunicou erro diretamente ao CEO e CTO em 24h sem intermediários, assumindo responsabilidade total, com boas métricas (73k req/h, NPS 89)."

    # Q7 - "identificou ineficiência e tomou ownership"
    elif question_id == "Q7":
        if case_id == "hsbc-migration-leadership":
            relevance, depth, evidence = 22, 30, 30
            reasoning = "Case BEM alinhado: identificou risco crítico de migração mal planejada e assumiu ownership completo da solução, com métricas concretas (99.98% precisão, NPS 52→78, Process Cycle Time -94%)."
        elif case_id == "sefaz-pmo-creation":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: identificou ineficiência de 11 sistemas duplicados sem governança e assumiu criação de PMO unificado, com métricas concretas (100% duplicidades eliminadas, desvio 23%→7.4%)."
        elif case_id == "bradesco-international-payments":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: identificou ineficiência estrutural causando custo +15% e SLA +60% e assumiu correção completa, com métricas excelentes (custo -14%, SLA -38%, backlog -86%)."
        elif case_id == "hsbc-payment-reconciliation":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: identificou proativamente US$47M em pagamentos travados em auditoria paralela e assumiu resolução total, com métricas concretas (2847→0 backlog, 40% melhor que benchmark)."
        elif case_id == "payment-incidents-prevention-mechanism":
            relevance, depth, evidence = 30, 30, 26
            reasoning = "Case PERFEITAMENTE alinhado: identificou padrão de incidentes reincidentes (3x em 6 semanas) e transformou em mecanismo preventivo, com métricas sólidas (-58% incidentes, -34% MTTR, classe A zerado)."
        elif case_id == "long-term-tradeoff":
            relevance, depth, evidence = 26, 26, 30
            reasoning = "Case MUITO BEM alinhado: identificou gargalo crítico de performance no core (8k TPS limite) e assumiu decisão de redesenho, com métricas excelentes (99.97% disponibilidade, -53% latência)."
        elif case_id == "sefaz-emergency-rollback-no-approval":
            relevance, depth, evidence = 22, 30, 30
            reasoning = "Case BEM alinhado: identificou necessidade crítica de rollback e tomou ownership da decisão com controles, com métricas concretas (1h10 restauração, R$8.2M evitado, 23.4k empresas protegidas)."
        elif case_id == "bradesco-next-delay":
            relevance, depth, evidence = 18, 26, 26
            reasoning = "Case PARCIALMENTE alinhado: identificou erro de estimativa próprio e assumiu correção transparente, não ineficiência sistêmica de outros, com boas métricas (73k req/h, NPS 89)."

    # Q8 - "assume responsabilidade por erros"
    elif question_id == "Q8":
        if case_id == "bradesco-next-delay":
            relevance, depth, evidence = 30, 30, 26
            reasoning = "Case PERFEITAMENTE alinhado: falhou na estimativa de integração Serasa e assumiu publicamente ao CEO/CTO em 24h, com STAR-L completo e boas métricas (73k req/h, NPS 89, entregue no novo prazo)."
        elif case_id == "hsbc-migration-leadership":
            relevance, depth, evidence = 12, 30, 30
            reasoning = "Case TANGENCIALMENTE alinhado: focado em sucesso de migração, não em falha pessoal assumida, apesar de métricas excelentes (99.98% precisão, NPS 52→78)."
        elif case_id == "sefaz-pmo-creation":
            relevance, depth, evidence = 12, 30, 30
            reasoning = "Case TANGENCIALMENTE alinhado: focado em resolver problema institucional existente, não em assumir falha pessoal, apesar de métricas concretas (desvio 23%→7.4%)."
        elif case_id == "bradesco-international-payments":
            relevance, depth, evidence = 12, 30, 30
            reasoning = "Case TANGENCIALMENTE alinhado: herdou crise operacional e resolveu, não assumiu falha pessoal prévia, apesar de métricas excelentes (custo -14%, SLA -38%)."
        elif case_id == "hsbc-payment-reconciliation":
            relevance, depth, evidence = 12, 30, 30
            reasoning = "Case TANGENCIALMENTE alinhado: identificou problema sistêmico proativamente e resolveu, não assumiu falha pessoal, apesar de métricas concretas (US$47M liberados)."
        elif case_id == "payment-incidents-prevention-mechanism":
            relevance, depth, evidence = 12, 30, 26
            reasoning = "Case TANGENCIALMENTE alinhado: resolveu padrão de incidentes reincidentes, não assumiu falha pessoal específica, apesar de métricas sólidas (-58% incidentes)."
        elif case_id == "long-term-tradeoff":
            relevance, depth, evidence = 12, 26, 30
            reasoning = "Case TANGENCIALMENTE alinhado: tomou decisão preventiva para evitar falha futura, não assumiu falha passada, apesar de métricas excelentes (99.97% disponibilidade)."
        elif case_id == "sefaz-emergency-rollback-no-approval":
            relevance, depth, evidence = 12, 30, 30
            reasoning = "Case TANGENCIALMENTE alinhado: respondeu a incidente causado por deploy de outros, não assumiu falha pessoal, apesar de métricas concretas (1h10 restauração, R$8.2M evitado)."

    # Q9 - "projeto liderou do início ao fim"
    elif question_id == "Q9":
        if case_id == "hsbc-migration-leadership":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: liderou migração completa de US$5.2B do início ao fim em 6 meses, com STAR-L completo e métricas concretas (99.98% precisão, NPS 52→78, churn 0.3%, Process Cycle Time -94%)."
        elif case_id == "sefaz-pmo-creation":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: liderou criação de PMO institucional do zero ao fim em 90 dias, com STAR-L detalhado e métricas concretas (desvio 23%→7.4%, R$2.3M recuperado, tempo ICMS 28→9 dias)."
        elif case_id == "bradesco-international-payments":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: liderou reversão completa da crise do início ao fim em 74 dias, com STAR-L completo e métricas excelentes (custo -14%, SLA -38%, backlog -86%, NPS 48→74)."
        elif case_id == "hsbc-payment-reconciliation":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: liderou resolução de US$47M do início ao fim em 38 dias, com STAR-L completo e métricas concretas (2847→0 backlog, 40% melhor que benchmark, R$12M multa evitada)."
        elif case_id == "payment-incidents-prevention-mechanism":
            relevance, depth, evidence = 30, 30, 26
            reasoning = "Case PERFEITAMENTE alinhado: liderou transformação de incidentes em mecanismo do início ao fim em 4 meses, com STAR-L detalhado e métricas sólidas (-58% incidentes, -34% MTTR, classe A zerado)."
        elif case_id == "long-term-tradeoff":
            relevance, depth, evidence = 26, 26, 30
            reasoning = "Case MUITO BEM alinhado: liderou redesenho de arquitetura do início ao fim em 28 dias, com métricas excelentes (99.97% disponibilidade, -53% latência, incidentes P1 27→4, Black Friday sucesso)."
        elif case_id == "sefaz-emergency-rollback-no-approval":
            relevance, depth, evidence = 22, 30, 30
            reasoning = "Case BEM alinhado: liderou resposta emergencial completa do alerta ao pós-mortem em 1h10, com métricas concretas (R$8.2M evitado, 23.4k empresas protegidas, protocolo criado)."
        elif case_id == "bradesco-next-delay":
            relevance, depth, evidence = 26, 26, 26
            reasoning = "Case MUITO BEM alinhado: liderou correção de integração do erro ao lançamento em 8 semanas, com boas métricas (73k req/h, 12.8k contas, NPS 89, tempo aprovação 3min47s)."

    # Q10 - "mecanismo para prevenir problemas recorrentes em pagamentos"
    elif question_id == "Q10":
        if case_id == "payment-incidents-prevention-mechanism":
            relevance, depth, evidence = 30, 30, 26
            reasoning = "Case PERFEITAMENTE alinhado: criou mecanismo específico para prevenir incidentes recorrentes em pagamentos, com STAR-L completo e métricas sólidas (-58% incidentes, -34% MTTR, nenhum classe A repetido)."
        elif case_id == "hsbc-payment-reconciliation":
            relevance, depth, evidence = 26, 30, 30
            reasoning = "Case MUITO BEM alinhado: criou playbooks e automação para prevenir problemas de reconciliação de pagamentos, com métricas concretas (2847→0 backlog, 80% automatizado, 40% melhor que benchmark)."
        elif case_id == "bradesco-international-payments":
            relevance, depth, evidence = 26, 30, 30
            reasoning = "Case MUITO BEM alinhado: criou manual de 21 páginas e template corporativo para prevenir crises em pagamentos internacionais, com métricas excelentes (custo -14%, SLA -38%, R$4.8M/ano evitado)."
        elif case_id == "hsbc-migration-leadership":
            relevance, depth, evidence = 22, 30, 30
            reasoning = "Case BEM alinhado: implementou monitoramento em tempo real e validação automatizada para prevenir erros em migração de contas, com métricas concretas (99.98% precisão, Process Cycle Time 72→4h)."
        elif case_id == "sefaz-emergency-rollback-no-approval":
            relevance, depth, evidence = 22, 30, 30
            reasoning = "Case BEM alinhado: criou protocolo emergencial e documentação de rollback para prevenir indisponibilidade de sistemas fiscais, com métricas concretas (1h10 restauração, 4x mais rápido que 2015)."
        elif case_id == "long-term-tradeoff":
            relevance, depth, evidence = 22, 26, 30
            reasoning = "Case BEM alinhado: implementou arquitetura resiliente para prevenir problemas de performance em processamento de pagamentos, com métricas excelentes (99.97% disponibilidade, -53% latência, Black Friday sem incidentes)."
        elif case_id == "sefaz-pmo-creation":
            relevance, depth, evidence = 18, 30, 30
            reasoning = "Case PARCIALMENTE alinhado: criou governança para prevenir atrasos em projetos (não específico de pagamentos), com métricas concretas (desvio 23%→7.4%, tempo restituição ICMS 28→9 dias)."
        elif case_id == "bradesco-next-delay":
            relevance, depth, evidence = 18, 26, 26
            reasoning = "Case PARCIALMENTE alinhado: aprendizado sobre estimativas para prevenir atrasos futuros, mas não criou mecanismo sistêmico específico de pagamentos, com boas métricas (73k req/h, NPS 89)."

    # Q11 - "múltiplas pessoas poderiam assumir ownership"
    elif question_id == "Q11":
        if case_id == "hsbc-migration-leadership":
            relevance, depth, evidence = 26, 30, 30
            reasoning = "Case MUITO BEM alinhado: situação onde Compliance, TI ou Operações poderiam liderar, mas assumiu ownership como PMO, com métricas concretas (99.98% precisão, NPS 52→78, churn 0.3%)."
        elif case_id == "sefaz-pmo-creation":
            relevance, depth, evidence = 26, 30, 30
            reasoning = "Case MUITO BEM alinhado: situação onde múltiplas secretarias/diretorias poderiam criar PMO, mas assumiu como consultor, com métricas concretas (desvio 23%→7.4%, R$2.3M recuperado)."
        elif case_id == "bradesco-international-payments":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: crise envolvia 7 áreas (Operações, Compliance, TI, Comercial, Procurement), qualquer uma poderia liderar, mas assumiu ownership, com métricas excelentes (custo -14%, SLA -38%)."
        elif case_id == "hsbc-payment-reconciliation":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: problema atravessava Operações, TI, Compliance, Correspondentes e Controladoria, mas assumiu resolução pessoal, com métricas concretas (US$47M liberados, backlog zerado)."
        elif case_id == "payment-incidents-prevention-mechanism":
            relevance, depth, evidence = 26, 30, 26
            reasoning = "Case MUITO BEM alinhado: incidentes eram de infraestrutura, operações e desenvolvimento, mas assumiu construção de mecanismo preventivo, com métricas sólidas (-58% incidentes, -34% MTTR)."
        elif case_id == "long-term-tradeoff":
            relevance, depth, evidence = 22, 26, 30
            reasoning = "Case BEM alinhado: problema de core poderia ser de SRE, Arquitetura ou Produto, mas assumiu decisão de reduzir escopo, com métricas excelentes (99.97% disponibilidade, -53% latência)."
        elif case_id == "sefaz-emergency-rollback-no-approval":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: rollback poderia ser autorizado por diretor, NOC ou DBA, mas assumiu decisão como advisor, com métricas concretas (1h10 restauração, R$8.2M evitado, 23.4k empresas)."
        elif case_id == "bradesco-next-delay":
            relevance, depth, evidence = 18, 26, 26
            reasoning = "Case PARCIALMENTE alinhado: erro de integração poderia ser do time, Serasa ou arquitetura, mas assumiu publicamente como PM, com boas métricas (73k req/h, NPS 89)."

    # Q12 - "ownership de problema criado por outro time"
    elif question_id == "Q12":
        if case_id == "hsbc-payment-reconciliation":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: backlog de reconciliação foi criado por processos de Operações e TI anteriores, mas assumiu resolução completa, com métricas concretas (US$47M liberados, 2847→0 backlog)."
        elif case_id == "bradesco-international-payments":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: degradação operacional foi causada por múltiplos times nos 6 meses anteriores, mas assumiu reversão completa, com métricas excelentes (custo -14%, SLA -38%, NPS 48→74)."
        elif case_id == "payment-incidents-prevention-mechanism":
            relevance, depth, evidence = 30, 30, 26
            reasoning = "Case PERFEITAMENTE alinhado: incidentes recorrentes foram causados por times de infraestrutura e desenvolvimento, mas assumiu construção de mecanismo preventivo, com métricas sólidas (-58% incidentes)."
        elif case_id == "sefaz-emergency-rollback-no-approval":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: deploy problemático foi feito por outro time, mas assumiu ownership do rollback emergencial, com métricas concretas (1h10 restauração, R$8.2M evitado, 23.4k empresas)."
        elif case_id == "hsbc-migration-leadership":
            relevance, depth, evidence = 26, 30, 30
            reasoning = "Case MUITO BEM alinhado: migração mal planejada era problema de múltiplas áreas, mas assumiu liderança completa da solução, com métricas concretas (99.98% precisão, NPS 52→78, churn 0.3%)."
        elif case_id == "sefaz-pmo-creation":
            relevance, depth, evidence = 26, 30, 30
            reasoning = "Case MUITO BEM alinhado: caos de 11 sistemas foi criado por gestões anteriores e múltiplas diretorias, mas assumiu criação de PMO unificado, com métricas concretas (desvio 23%→7.4%)."
        elif case_id == "long-term-tradeoff":
            relevance, depth, evidence = 22, 26, 30
            reasoning = "Case BEM alinhado: limitação de core banking foi problema de arquitetura anterior, mas assumiu decisão de mitigação, com métricas excelentes (99.97% disponibilidade, -53% latência)."
        elif case_id == "bradesco-next-delay":
            relevance, depth, evidence = 12, 26, 26
            reasoning = "Case TANGENCIALMENTE alinhado: erro de estimativa foi próprio, não de outro time, apesar de assumir publicamente, com boas métricas (73k req/h, NPS 89)."

    # Q13 - "gerencia dependências entre múltiplos times"
    elif question_id == "Q13":
        if case_id == "hsbc-migration-leadership":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: gerenciou dependências entre Compliance, TI, Operações, Clientes e BACEN em migração crítica, com métricas concretas (99.98% precisão, NPS 52→78, Process Cycle Time -94%)."
        elif case_id == "bradesco-international-payments":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: gerenciou dependências entre 7 times (Operações, Compliance, TI, Comercial, Procurement, Correspondentes), com daily 30min e métricas excelentes (custo -14%, SLA -38%)."
        elif case_id == "hsbc-payment-reconciliation":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: gerenciou tiger team com Operações, TI, Compliance, Correspondentes e Controladoria, daily 8h e review 18h, com métricas concretas (US$47M liberados, backlog zerado)."
        elif case_id == "sefaz-pmo-creation":
            relevance, depth, evidence = 30, 30, 30
            reasoning = "Case PERFEITAMENTE alinhado: gerenciou dependências de 28 projetos através de 11 sistemas e múltiplas secretarias, com métricas concretas (100% duplicidades eliminadas, desvio 23%→7.4%)."
        elif case_id == "payment-incidents-prevention-mechanism":
            relevance, depth, evidence = 26, 30, 26
            reasoning = "Case MUITO BEM alinhado: gerenciou dependências entre Infraestrutura, Operações, Desenvolvimento e QA para mecanismo preventivo, com métricas sólidas (-58% incidentes, -34% MTTR)."
        elif case_id == "long-term-tradeoff":
            relevance, depth, evidence = 26, 26, 30
            reasoning = "Case MUITO BEM alinhado: organizou squad multifuncional com SRE, Risco e Produto em 48h, gerenciando dependências críticas, com métricas excelentes (99.97% disponibilidade, -53% latência)."
        elif case_id == "sefaz-emergency-rollback-no-approval":
            relevance, depth, evidence = 22, 30, 30
            reasoning = "Case BEM alinhado: coordenou call emergencial com NOC, DBA, Segurança, Rede e Compliance para rollback, com métricas concretas (1h10 restauração, R$8.2M evitado)."
        elif case_id == "bradesco-next-delay":
            relevance, depth, evidence = 22, 26, 26
            reasoning = "Case BEM alinhado: gerenciou dependências com Serasa, SPC, Times internos e Arquitetura para correção, com boas métricas (73k req/h, NPS 89, 3min47s aprovação)."

    score_base = relevance + depth + evidence

    return {
        "cacheKey": f"ownership__{question_id}__{case_id}",
        "relevance": relevance,
        "depth": depth,
        "evidence": evidence,
        "scoreBase": score_base,
        "reasoning": reasoning
    }

# Generate all 104 combinations (13 questions × 8 cases)
results = []
for q_id in QUESTIONS.keys():
    for case_id in CASES:
        result = analyze_combination(q_id, case_id)
        results.append(result)

# Output as JSON array
print(json.dumps(results, indent=2, ensure_ascii=False))
