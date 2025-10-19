import json
from datetime import datetime

# Load existing cache
with open('.lp-harmony-cache.json', 'r', encoding='utf-8') as f:
    cache = json.load(f)

# Correct analysis for disagree_and_commit LP with proper case IDs
# Cases: unimed-retention-strategy, huawei-world-cup-timeline,
#        bradesco-mvp-feature-prioritization, commit-on-disagreement-product-strategy
analyses = {
    # Q1: Quando você teve que defender uma posição com a qual não concordava pessoalmente?
    "disagree_and_commit__Q1__unimed-retention-strategy": {
        "relevance": 24,
        "depth": 22,
        "evidence": 22,
        "scoreBase": 68,
        "reasoning": "O case mostra defesa de posição (retenção vs aquisição), mas não exemplifica defender posição com a qual não concorda pessoalmente - defendeu sua própria posição.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q1__huawei-world-cup-timeline": {
        "relevance": 22,
        "depth": 20,
        "evidence": 20,
        "scoreBase": 62,
        "reasoning": "Defendeu sua posição técnica sobre riscos, mas não há exemplo de defender posição contrária à própria opinião. Mais sobre discordar que defender algo com que não concorda.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q1__bradesco-mvp-feature-prioritization": {
        "relevance": 30,
        "depth": 28,
        "evidence": 28,
        "scoreBase": 86,
        "reasoning": "EXCELENTE: Precisou defender o feed social (decisão do CEO) com a qual discordava pessoalmente (preferia motor de recomendação). Liderou execução do feed com total comprometimento.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q1__commit-on-disagreement-product-strategy": {
        "relevance": 20,
        "depth": 18,
        "evidence": 18,
        "scoreBase": 56,
        "reasoning": "Defendeu própria posição (pricing seletivo vs linear), não posição contrária. Questão pede defender o que não concorda, não defender o que concorda.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },

    # Q2: Como você lidou com uma decisão de equipe com a qual discordava?
    "disagree_and_commit__Q2__unimed-retention-strategy": {
        "relevance": 30,
        "depth": 28,
        "evidence": 30,
        "scoreBase": 88,
        "reasoning": "EXCELENTE: CEO decidiu plano híbrido 60/40 (retenção/aquisição) vs 100% retenção preferida. Aceitou, liderou execução. 'Entendido. A partir de agora, lidero execução e sou totalmente responsável'.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q2__huawei-world-cup-timeline": {
        "relevance": 30,
        "depth": 28,
        "evidence": 28,
        "scoreBase": 86,
        "reasoning": "EXCELENTE: VP decidiu corte de 15 dias (meio-termo vs 0 preferido). 'Registrado meu desacordo com os dados, mas a partir de agora, sou 100% responsável'. War room 24/7, execução exemplar.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q2__bradesco-mvp-feature-prioritization": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Comitê votou feed vs motor recomendação. Teste A/B mostrou motor superior, mas aceitou decisão. 'Estou 100% comprometido'. 78 páginas specs, 300 pull requests. Exemplo perfeito.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q2__commit-on-disagreement-product-strategy": {
        "relevance": 28,
        "depth": 26,
        "evidence": 28,
        "scoreBase": 82,
        "reasoning": "EXCELENTE: CEO escolheu piloto seletivo (não 100% sua proposta, mas melhor que corte linear). 'Estou pronto para executar qualquer decisão'. Dashboard real-time, disciplina de execução.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },

    # Q3: Descreva uma situação onde você implementou uma estratégia com a qual inicialmente discordava
    "disagree_and_commit__Q3__unimed-retention-strategy": {
        "relevance": 28,
        "depth": 26,
        "evidence": 28,
        "scoreBase": 82,
        "reasoning": "EXCELENTE: Discordava do plano híbrido (queria 100% retenção). Implementou 60/40 com excelência. Squad multifuncional, alertas para 520k pacientes, cashback escalonado. Resultados superaram expectativas.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q3__huawei-world-cup-timeline": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Discordava do corte de 15 dias (preferia cronograma original). Implementou com war room 24/7, playbook decisão rápida, viajou com VP à FIFA. Entrega 12 dias antecipada. Exemplar.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q3__bradesco-mvp-feature-prioritization": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Discordava do feed social (queria motor recomendação). Implementou feed: 78 páginas specs, 300 PRs revisados, entrega 8 dias antecipada. Motor lite em paralelo. Caso exemplar.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q3__commit-on-disagreement-product-strategy": {
        "relevance": 26,
        "depth": 24,
        "evidence": 26,
        "scoreBase": 76,
        "reasoning": "BOM: Proposta foi aceita (piloto seletivo), então não implementou estratégia com que discordava inicialmente. Implementou sua própria proposta aprovada pelo CEO.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },

    # Q4: Conte sobre uma vez que você apoiou publicamente uma decisão mesmo discordando dela
    "disagree_and_commit__Q4__unimed-retention-strategy": {
        "relevance": 28,
        "depth": 26,
        "evidence": 26,
        "scoreBase": 80,
        "reasoning": "EXCELENTE: Apoiou publicamente plano híbrido perante equipe (squad multifuncional) apesar de preferir 100% retenção. Reuniões semanais com diretor comercial reafirmando compromisso.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q4__huawei-world-cup-timeline": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Apoiou publicamente cronograma revisado perante FIFA, operadora, equipes. Viajou com VP para apresentar plano de mitigação aos executivos da FIFA. Apoio público exemplar.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q4__bradesco-mvp-feature-prioritization": {
        "relevance": 30,
        "depth": 28,
        "evidence": 28,
        "scoreBase": 86,
        "reasoning": "EXCELENTE: Apoiou publicamente feed perante squad, marketing (negociou criativos), time técnico. Liderou execução mesmo tendo defendido motor de recomendação no comitê.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q4__commit-on-disagreement-product-strategy": {
        "relevance": 24,
        "depth": 22,
        "evidence": 22,
        "scoreBase": 68,
        "reasoning": "Proposta foi aceita pelo CEO, então não há exemplo de apoiar publicamente decisão com a qual discordava. Apoiou própria proposta aprovada.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },

    # Q5: Como você garantiu alinhamento da equipe após uma decisão controversa?
    "disagree_and_commit__Q5__unimed-retention-strategy": {
        "relevance": 28,
        "depth": 28,
        "evidence": 30,
        "scoreBase": 86,
        "reasoning": "EXCELENTE: Squad multifuncional para ambas frentes, negociação com TI (APIs 4 semanas), reuniões semanais com diretor comercial. Alinhamento através de governança e entregas rápidas.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q5__huawei-world-cup-timeline": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: War room 24/7, dashboard 48 indicadores, playbook decisão rápida, força-tarefa multifuncional. Alinhamento exemplar em decisão controversa (corte de cronograma).",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q5__bradesco-mvp-feature-prioritization": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Liderou squad, negociou cronograma marketing, treinou equipe, 78 páginas specs, 300 PRs revisados. Alinhamento total em decisão controversa (feed vs motor).",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q5__commit-on-disagreement-product-strategy": {
        "relevance": 28,
        "depth": 28,
        "evidence": 28,
        "scoreBase": 84,
        "reasoning": "EXCELENTE: Negociou scorecards com Risco, treinou 120 vendedores, coordenou TI (motor pricing 10 dias), dashboard real-time. Alinhamento estruturado e executado.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },

    # Q6: Qual foi o impacto de você seguir uma direção com a qual discordava?
    "disagree_and_commit__Q6__unimed-retention-strategy": {
        "relevance": 30,
        "depth": 28,
        "evidence": 30,
        "scoreBase": 88,
        "reasoning": "EXCELENTE: Seguir plano híbrido (vs 100% retenção) gerou R$ 96M economia + 18k novos clientes. CFO validou, CEO reconheceu, diretor comercial o convidou para liderar fidelidade 2024.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q6__huawei-world-cup-timeline": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Seguir corte de 15 dias evitou US$ 11.3M multas, entrega 12 dias antecipada, 99.94% disponibilidade. VP reconheceu 'discordou com dados, executou com rigor'. Indicado para próximo evento global.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q6__bradesco-mvp-feature-prioritization": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Seguir feed (vs motor) gerou +27% engajamento, NPS 72, motor lite reduziu churn 2.4pp. CEO aprovou R$ 8M para motor completo. Caso exemplar de aprendizado.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q6__commit-on-disagreement-product-strategy": {
        "relevance": 26,
        "depth": 24,
        "evidence": 24,
        "scoreBase": 74,
        "reasoning": "Impacto positivo (17% volume, ROI 340%), mas seguiu sua própria proposta aprovada, não direção com que discordava. Questão não perfeitamente alinhada.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },

    # Q7: Como você comunicou sua perspectiva antes de aceitar uma decisão?
    "disagree_and_commit__Q7__unimed-retention-strategy": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Monte Carlo ROI negativo, apresentou CFO e comitê executivo. 'Discordo de desviar orçamento para aquisição e tenho os dados'. Comunicação exemplar antes de aceitar.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q7__huawei-world-cup-timeline": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Monte Carlo 67% risco, apresentou VP e CEO operadora. 'Eu discordo do corte, mas seguirei a decisão final que tomarmos aqui'. Comunicação clara e baseada em dados.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q7__bradesco-mvp-feature-prioritization": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Teste A/B 40k clientes, apresentou comitê executivo. 'Com base nestes dados, recomendo motor, mas estou preparado para liderar feed se for a decisão'. Comunicação exemplar.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q7__commit-on-disagreement-product-strategy": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Regressão logística 120k contratos, ECL 6.3% vs 4.1%. Apresentou CEO e CRO. 'Discordo do corte linear, mas estou pronto para executar qualquer decisão'. Comunicação exemplar.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },

    # Q8: Descreva quando você teve que executar algo que ia contra sua intuição
    "disagree_and_commit__Q8__unimed-retention-strategy": {
        "relevance": 26,
        "depth": 24,
        "evidence": 24,
        "scoreBase": 74,
        "reasoning": "Plano híbrido com aquisição ia contra intuição de 100% retenção. Executou com cashback (R$ 20/45/80) e campanha jovem 18-25. Mas não é foco central do case.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q8__huawei-world-cup-timeline": {
        "relevance": 28,
        "depth": 26,
        "evidence": 28,
        "scoreBase": 82,
        "reasoning": "EXCELENTE: Corte de 15 dias ia contra intuição de cronograma original seguro. Executou com war room 24/7, playbook decisão 8h. Intuição vs execução disciplinada.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q8__bradesco-mvp-feature-prioritization": {
        "relevance": 30,
        "depth": 28,
        "evidence": 28,
        "scoreBase": 86,
        "reasoning": "EXCELENTE: Feed social ia contra intuição técnica de motor recomendação (dados A/B provavam motor superior). Executou feed com excelência, motor lite em paralelo mostrou intuição correta.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q8__commit-on-disagreement-product-strategy": {
        "relevance": 22,
        "depth": 20,
        "evidence": 20,
        "scoreBase": 62,
        "reasoning": "Proposta aprovada foi sua própria (pricing seletivo), então não executou contra intuição. Executou o que intuição e dados indicavam.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },

    # Q9: Como você manteve o compromisso com uma decisão mesmo quando surgiram dificuldades?
    "disagree_and_commit__Q9__unimed-retention-strategy": {
        "relevance": 28,
        "depth": 28,
        "evidence": 28,
        "scoreBase": 84,
        "reasoning": "EXCELENTE: APIs prontuário em 4 semanas exigiu negociação intensa com TI. Reuniões semanais com diretor comercial (antes opunha) reafirmando compromisso. Manteve disciplina apesar de dificuldades.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q9__huawei-world-cup-timeline": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Licenças 9 cidades, backlog 18 dias fornecedores. War room 24/7, playbook decisão rápida (autorização horas extras/realocação se > 8h atraso). Viajou com VP à FIFA. Compromisso exemplar.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q9__bradesco-mvp-feature-prioritization": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Dúvidas do time técnico sobre prazo. Assumiu responsabilidade direta, revisou 300 PRs pessoalmente. Entrega 8 dias antecipada (82 dias vs 90). Compromisso exemplar sob pressão.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q9__commit-on-disagreement-product-strategy": {
        "relevance": 28,
        "depth": 28,
        "evidence": 28,
        "scoreBase": 84,
        "reasoning": "EXCELENTE: CRO sugeriu expandir antes de 45 dias. Manteve disciplina do plano, reforçou compromisso com gatilhos pré-estabelecidos. Dashboard real-time para monitorar KPIs. Disciplina sob pressão.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },

    # Q10: Qual foi uma situação onde você teve que convencer outros a seguir uma decisão tomada?
    "disagree_and_commit__Q10__unimed-retention-strategy": {
        "relevance": 28,
        "depth": 26,
        "evidence": 28,
        "scoreBase": 82,
        "reasoning": "EXCELENTE: Convenceu squad multifuncional e diretor comercial (antes opunha) a seguir plano híbrido. Reuniões semanais reafirmando compromisso com metas combinadas. Convencimento sustentado.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q10__huawei-world-cup-timeline": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Convenceu força-tarefa, prefeituras, fornecedores, FIFA a seguir cronograma revisado. War room, playbook, viagem com VP. Convencimento em múltiplas frentes. Exemplar.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q10__bradesco-mvp-feature-prioritization": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Convenceu squad, marketing, time técnico a seguir decisão do feed (apesar do teste A/B mostrar motor superior). 78 páginas specs, 300 PRs. Convencimento exemplar.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q10__commit-on-disagreement-product-strategy": {
        "relevance": 28,
        "depth": 28,
        "evidence": 28,
        "scoreBase": 84,
        "reasoning": "EXCELENTE: Convenceu Risco (scorecards), 120 vendedores (treinamento), TI (motor pricing 10 dias) a seguir piloto seletivo. Dashboard real-time para alinhamento. Convencimento multi-stakeholder.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },

    # Q11: Como você equilibrou expressar sua opinião e aceitar a decisão final?
    "disagree_and_commit__Q11__unimed-retention-strategy": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Expressou opinião (Monte Carlo, CFO, comitê 'discordo de desviar orçamento'). Aceitou híbrido: 'Entendido. A partir de agora, lidero execução'. Equilíbrio exemplar.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q11__huawei-world-cup-timeline": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Expressou opinião (Monte Carlo 67% risco, 'discordo do corte'). Aceitou meio-termo: 'Registrado desacordo, mas 100% responsável'. Equilíbrio exemplar.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q11__bradesco-mvp-feature-prioritization": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Expressou opinião (A/B test, 'recomendo motor'). Aceitou decisão: 'estou 100% comprometido'. 78 páginas specs, 300 PRs. Equilíbrio perfeito entre voz e compromisso.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q11__commit-on-disagreement-product-strategy": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Expressou opinião (regressão 120k contratos, 'discordo do corte linear'). Aceitou decisão: 'pronto para executar qualquer decisão'. Equilíbrio exemplar.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },

    # Q12: Descreva quando você aprendeu algo valioso ao seguir uma decisão com a qual não concordava
    "disagree_and_commit__Q12__unimed-retention-strategy": {
        "relevance": 30,
        "depth": 28,
        "evidence": 28,
        "scoreBase": 86,
        "reasoning": "EXCELENTE: Aprendizado explícito: 'objetivo não é vencer debate, mas melhor decisão baseada em dados'. Plano híbrido trouxe R$ 96M + 18k clientes. Aprendizado articulado.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q12__huawei-world-cup-timeline": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Aprendizado explícito: 'execução impecável de decisão com a qual discordou é forma mais poderosa de ganhar influência'. Meio-termo funcionou. Aprendizado rico.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q12__bradesco-mvp-feature-prioritization": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Aprendizado explícito: 'compromisso inabalável mesmo quando decisão não é sua. Execução exemplar abre portas que discordância não consegue'. Feed + motor lite. Aprendizado profundo.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q12__commit-on-disagreement-product-strategy": {
        "relevance": 30,
        "depth": 28,
        "evidence": 28,
        "scoreBase": 86,
        "reasoning": "EXCELENTE: Aprendizado explícito: 'demonstrar compromisso inabalável com execução. Objetivo final é sucesso da empresa, não estar certo'. ROI 340%, promoção para internacional. Aprendizado claro.",
        "analyzedAt": "2025-10-18T21:30:00Z",
        "version": "3.0"
    }
}

# Add all analyses to cache
cache.update(analyses)

# Save updated cache
with open('.lp-harmony-cache.json', 'w', encoding='utf-8') as f:
    json.dump(cache, f, indent=2, ensure_ascii=False)

print(f"Added {len(analyses)} analysis entries for disagree_and_commit")
print(f"Cache now contains {len(cache)} total entries")

# Summary statistics
scores = [a['scoreBase'] for a in analyses.values()]
top_cases = sum(1 for s in scores if s >= 95)
good_cases = sum(1 for s in scores if 90 <= s < 95)
acceptable = sum(1 for s in scores if 80 <= s < 90)
weak = sum(1 for s in scores if s < 80)

print(f"\ndisagree_and_commit Coverage Analysis:")
print(f"   TopCase (95-100): {top_cases} combinations")
print(f"   GoodCase (90-94): {good_cases} combinations")
print(f"   Acceptable (80-89): {acceptable} combinations")
print(f"   Weak (<80): {weak} combinations")
print(f"\nCoverage: {((top_cases + good_cases + acceptable) / len(analyses) * 100):.1f}%")

# Identify best cases per question
print(f"\nBest cases for disagree_and_commit:")
best_cases = {}
for key, analysis in analyses.items():
    if analysis['scoreBase'] >= 90:
        parts = key.split('__')
        q_num = parts[1]
        case_id = parts[2]
        if q_num not in best_cases:
            best_cases[q_num] = []
        best_cases[q_num].append(f"{case_id} ({analysis['scoreBase']})")

for q in sorted(best_cases.keys()):
    print(f"   {q}: {', '.join(best_cases[q])}")
