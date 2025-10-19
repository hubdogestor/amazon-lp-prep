import json
from datetime import datetime

# Load existing cache
with open('.lp-harmony-cache.json', 'r', encoding='utf-8') as f:
    cache = json.load(f)

# Analysis for disagree_and_commit LP
# Based on the prompt, we have 12 questions and 4 cases
analyses = {
    # Q1: Quando você teve que defender uma posição com a qual não concordava pessoalmente?
    "disagree_and_commit__Q1__sefaz-pmo-creation": {
        "relevance": 18,
        "depth": 16,
        "evidence": 16,
        "scoreBase": 50,
        "reasoning": "O case menciona resistência da diretoria ao modelo PMO, mas não desenvolve se houve momento de defender posição contrária à própria. Foco maior em convencimento.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q1__unimed-innovation-ambiguity": {
        "relevance": 22,
        "depth": 20,
        "evidence": 20,
        "scoreBase": 62,
        "reasoning": "Presidência decidiu Stage-Gate apesar de preferência pessoal por Lean. Há elemento de comprometimento com decisão não alinhada, mas não é o foco narrativo.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q1__sefaz-digital-transformation-ambiguity": {
        "relevance": 20,
        "depth": 18,
        "evidence": 18,
        "scoreBase": 56,
        "reasoning": "Alinhamento com stakeholders e pilotos sugerem negociação, mas não há exemplo claro de defender posição com a qual não concordava pessoalmente.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q1__hsbc-bradesco-cultural-migration": {
        "relevance": 26,
        "depth": 24,
        "evidence": 24,
        "scoreBase": 74,
        "reasoning": "Precisou defender metodologias Agile para liderança resistente, mas não explicita discordância pessoal. Mais sobre gestão de resistência externa que compromisso interno.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },

    # Q2: Como você lidou com uma decisão de equipe com a qual discordava?
    "disagree_and_commit__Q2__sefaz-pmo-creation": {
        "relevance": 20,
        "depth": 18,
        "evidence": 18,
        "scoreBase": 56,
        "reasoning": "Diretoria impôs restrições orçamentárias. Caso mostra adaptação mas não desenvolve processo de discordância e compromisso explícito.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q2__unimed-innovation-ambiguity": {
        "relevance": 28,
        "depth": 26,
        "evidence": 26,
        "scoreBase": 80,
        "reasoning": "EXCELENTE: Presidência decidiu Stage-Gate vs preferência Lean. Acatou decisão, implementou híbrido. Questão bem atendida.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q2__sefaz-digital-transformation-ambiguity": {
        "relevance": 24,
        "depth": 22,
        "evidence": 22,
        "scoreBase": 68,
        "reasoning": "Balanced Scorecard e pilotos sugerem consenso colaborativo. Não há discordância específica destacada.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q2__hsbc-bradesco-cultural-migration": {
        "relevance": 24,
        "depth": 22,
        "evidence": 22,
        "scoreBase": 68,
        "reasoning": "Liderança resistente a Agile. Caso mostra persuasão mas não processo de discordar e comprometer-se com decisão contrária.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },

    # Q3: Descreva uma situação onde você implementou uma estratégia com a qual inicialmente discordava
    "disagree_and_commit__Q3__sefaz-pmo-creation": {
        "relevance": 22,
        "depth": 20,
        "evidence": 20,
        "scoreBase": 62,
        "reasoning": "Modelo PMO leve imposto por restrições. Implementou apesar de preferir estrutura mais robusta. Conceito presente mas não central.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q3__unimed-innovation-ambiguity": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Presidência decidiu Stage-Gate, preferência era Lean. Implementou híbrido com excelência (20 projetos, +25% aprovação). Caso exemplar para esta questão.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q3__sefaz-digital-transformation-ambiguity": {
        "relevance": 24,
        "depth": 22,
        "evidence": 22,
        "scoreBase": 68,
        "reasoning": "Pilotos de 90 dias podem indicar compromisso com abordagem incremental vs big-bang, mas discordância não é explícita.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q3__hsbc-bradesco-cultural-migration": {
        "relevance": 26,
        "depth": 24,
        "evidence": 24,
        "scoreBase": 74,
        "reasoning": "Implementou fusão cultural complexa. Não explicita discordância inicial com estratégia adotada.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },

    # Q4: Conte sobre uma vez que você apoiou publicamente uma decisão mesmo discordando dela
    "disagree_and_commit__Q4__sefaz-pmo-creation": {
        "relevance": 18,
        "depth": 16,
        "evidence": 16,
        "scoreBase": 50,
        "reasoning": "Não há exemplo claro de apoio público a decisão com discordância interna. Foco em construir consenso.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q4__unimed-innovation-ambiguity": {
        "relevance": 28,
        "depth": 26,
        "evidence": 26,
        "scoreBase": 80,
        "reasoning": "Apoiou Stage-Gate perante equipe apesar de preferência por Lean. Alinhamento público com decisão da Presidência. Questão bem atendida.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q4__sefaz-digital-transformation-ambiguity": {
        "relevance": 20,
        "depth": 18,
        "evidence": 18,
        "scoreBase": 56,
        "reasoning": "Não desenvolve momento de apoio público a decisão controversa.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q4__hsbc-bradesco-cultural-migration": {
        "relevance": 22,
        "depth": 20,
        "evidence": 20,
        "scoreBase": 62,
        "reasoning": "Liderou mudança cultural mas não explicita apoio a decisão com a qual discordava.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },

    # Q5: Como você garantiu alinhamento da equipe após uma decisão controversa?
    "disagree_and_commit__Q5__sefaz-pmo-creation": {
        "relevance": 26,
        "depth": 24,
        "evidence": 26,
        "scoreBase": 76,
        "reasoning": "Quick wins (3 projetos piloto, 15% economia) mostraram valor do PMO, reduzindo resistência. Alinhamento gradual através de resultados.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q5__unimed-innovation-ambiguity": {
        "relevance": 28,
        "depth": 28,
        "evidence": 28,
        "scoreBase": 84,
        "reasoning": "EXCELENTE: Implementou híbrido Stage-Gate + Lean. Comitê multidisciplinar (90 dias). Alinhamento através de framework transparente e participativo.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q5__sefaz-digital-transformation-ambiguity": {
        "relevance": 28,
        "depth": 26,
        "evidence": 28,
        "scoreBase": 82,
        "reasoning": "Balanced Scorecard com 4 perspectivas, pilotos de 90 dias, comitê multidisciplinar. Abordagem estruturada para alinhamento em transformação complexa.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q5__hsbc-bradesco-cultural-migration": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: 15 squads, cultural champions, RAID logs, heatmaps. Gestão exemplar de alinhamento em fusão cultural controversa (HSBC vs Bradesco).",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },

    # Q6: Qual foi o impacto de você seguir uma direção com a qual discordava?
    "disagree_and_commit__Q6__sefaz-pmo-creation": {
        "relevance": 20,
        "depth": 18,
        "evidence": 18,
        "scoreBase": 56,
        "reasoning": "Resultados (15% economia, 18% ROI) mostram sucesso, mas não explicita impacto de seguir direção com discordância inicial.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q6__unimed-innovation-ambiguity": {
        "relevance": 30,
        "depth": 28,
        "evidence": 28,
        "scoreBase": 86,
        "reasoning": "EXCELENTE: Seguir Stage-Gate (vs Lean) gerou +25% aprovação, 20 projetos, framework reconhecido. Aprendizado: disciplina formal trouxe confiança regulatória.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q6__sefaz-digital-transformation-ambiguity": {
        "relevance": 22,
        "depth": 20,
        "evidence": 20,
        "scoreBase": 62,
        "reasoning": "Pilotos bem-sucedidos, mas não desenvolve impacto de seguir direção específica com discordância.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q6__hsbc-bradesco-cultural-migration": {
        "relevance": 26,
        "depth": 24,
        "evidence": 24,
        "scoreBase": 74,
        "reasoning": "Fusão bem-sucedida (31 produtos, 97% satisfação), mas não explicita discordância inicial que foi superada.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },

    # Q7: Como você comunicou sua perspectiva antes de aceitar uma decisão?
    "disagree_and_commit__Q7__sefaz-pmo-creation": {
        "relevance": 24,
        "depth": 22,
        "evidence": 22,
        "scoreBase": 68,
        "reasoning": "Business case apresentado à diretoria mostra comunicação de perspectiva, mas não desenvolve processo de discordância e aceitação.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q7__unimed-innovation-ambiguity": {
        "relevance": 28,
        "depth": 26,
        "evidence": 26,
        "scoreBase": 80,
        "reasoning": "EXCELENTE: Apresentou benchmarks Lean, argumentou agilidade. Presidência decidiu Stage-Gate. Comunicação clara antes de aceitar. Questão bem atendida.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q7__sefaz-digital-transformation-ambiguity": {
        "relevance": 26,
        "depth": 24,
        "evidence": 24,
        "scoreBase": 74,
        "reasoning": "Comitê multidisciplinar e pilotos sugerem comunicação estruturada, mas não exemplo específico de perspectiva divergente comunicada.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q7__hsbc-bradesco-cultural-migration": {
        "relevance": 24,
        "depth": 22,
        "evidence": 22,
        "scoreBase": 68,
        "reasoning": "Workshops e cultural champions indicam comunicação, mas não desenvolve processo de expressar perspectiva divergente.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },

    # Q8: Descreva quando você teve que executar algo que ia contra sua intuição
    "disagree_and_commit__Q8__sefaz-pmo-creation": {
        "relevance": 22,
        "depth": 20,
        "evidence": 20,
        "scoreBase": 62,
        "reasoning": "PMO leve vs estrutura robusta pode ter ido contra intuição, mas não é desenvolvido explicitamente.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q8__unimed-innovation-ambiguity": {
        "relevance": 30,
        "depth": 28,
        "evidence": 28,
        "scoreBase": 86,
        "reasoning": "PERFEITAMENTE alinhado: Intuição era Lean (agilidade), executou Stage-Gate (burocracia). Resultado positivo validou decisão contrária à intuição inicial.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q8__sefaz-digital-transformation-ambiguity": {
        "relevance": 20,
        "depth": 18,
        "evidence": 18,
        "scoreBase": 56,
        "reasoning": "Pilotos incrementais vs transformação big-bang, mas não explicita conflito com intuição.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q8__hsbc-bradesco-cultural-migration": {
        "relevance": 22,
        "depth": 20,
        "evidence": 20,
        "scoreBase": 62,
        "reasoning": "Fusão cultural complexa pode ter desafiado intuições, mas não é foco narrativo.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },

    # Q9: Como você manteve o compromisso com uma decisão mesmo quando surgiram dificuldades?
    "disagree_and_commit__Q9__sefaz-pmo-creation": {
        "relevance": 28,
        "depth": 26,
        "evidence": 28,
        "scoreBase": 82,
        "reasoning": "EXCELENTE: Resistência da diretoria, orçamento limitado. Manteve compromisso com quick wins (3 pilotos), demonstrou valor. Persistência até reconhecimento.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q9__unimed-innovation-ambiguity": {
        "relevance": 28,
        "depth": 28,
        "evidence": 28,
        "scoreBase": 84,
        "reasoning": "EXCELENTE: Comprometeu-se com Stage-Gate apesar de preferência Lean. Implementou híbrido, manteve disciplina. 20 projetos, framework sustentado.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q9__sefaz-digital-transformation-ambiguity": {
        "relevance": 26,
        "depth": 24,
        "evidence": 26,
        "scoreBase": 76,
        "reasoning": "Pilotos de 90 dias, Balanced Scorecard indicam compromisso sustentado com transformação incremental apesar de resistências.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q9__hsbc-bradesco-cultural-migration": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: 18 meses de fusão cultural, resistências de ambos os lados. RAID logs, heatmaps, ajustes contínuos. Compromisso exemplar até entrega (31 produtos, 97% satisfação).",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },

    # Q10: Qual foi uma situação onde você teve que convencer outros a seguir uma decisão tomada?
    "disagree_and_commit__Q10__sefaz-pmo-creation": {
        "relevance": 28,
        "depth": 26,
        "evidence": 28,
        "scoreBase": 82,
        "reasoning": "EXCELENTE: Convenceu diretoria resistente ao PMO. Business case, quick wins (3 pilotos, 15% economia). Convencimento baseado em dados e resultados.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q10__unimed-innovation-ambiguity": {
        "relevance": 26,
        "depth": 24,
        "evidence": 26,
        "scoreBase": 76,
        "reasoning": "Convenceu equipe a seguir Stage-Gate (decisão da Presidência). Comitê multidisciplinar, framework híbrido. Alinhamento através de governança.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q10__sefaz-digital-transformation-ambiguity": {
        "relevance": 28,
        "depth": 26,
        "evidence": 28,
        "scoreBase": 82,
        "reasoning": "EXCELENTE: Convenceu stakeholders sobre transformação digital. Pilotos de 90 dias, Balanced Scorecard. Convencimento através de resultados incrementais.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q10__hsbc-bradesco-cultural-migration": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Convenceu 15 squads (500+ pessoas) a seguir nova cultura Agile. Cultural champions, workshops, RAID logs. Convencimento exemplar em fusão complexa.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },

    # Q11: Como você equilibrou expressar sua opinião e aceitar a decisão final?
    "disagree_and_commit__Q11__sefaz-pmo-creation": {
        "relevance": 22,
        "depth": 20,
        "evidence": 20,
        "scoreBase": 62,
        "reasoning": "Business case mostra expressão de opinião. Adaptação a restrições mostra aceitação. Equilíbrio presente mas não central.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q11__unimed-innovation-ambiguity": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Expressou preferência por Lean (benchmarks, agilidade). Aceitou decisão Stage-Gate. Implementou híbrido que honrava ambas perspectivas. Equilíbrio exemplar.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q11__sefaz-digital-transformation-ambiguity": {
        "relevance": 24,
        "depth": 22,
        "evidence": 22,
        "scoreBase": 68,
        "reasoning": "Comitê multidisciplinar sugere espaço para opinião. Pilotos mostram aceitação de abordagem incremental. Equilíbrio presente.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q11__hsbc-bradesco-cultural-migration": {
        "relevance": 26,
        "depth": 24,
        "evidence": 24,
        "scoreBase": 74,
        "reasoning": "Cultural champions permitiram expressão. RAID logs capturaram resistências. Aceitação da fusão como decisão estratégica. Equilíbrio presente.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },

    # Q12: Descreva quando você aprendeu algo valioso ao seguir uma decisão com a qual não concordava
    "disagree_and_commit__Q12__sefaz-pmo-creation": {
        "relevance": 24,
        "depth": 22,
        "evidence": 22,
        "scoreBase": 68,
        "reasoning": "Aprendizado: PMO leve foi suficiente para contexto. Não explicita discordância inicial explícita, mas resultado validou abordagem.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q12__unimed-innovation-ambiguity": {
        "relevance": 30,
        "depth": 30,
        "evidence": 30,
        "scoreBase": 90,
        "reasoning": "PERFEITAMENTE alinhado: Aprendizado explícito: Stage-Gate trouxe disciplina necessária para ambiente regulatório. Validou decisão da Presidência. Aprendizado rico e articulado.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q12__sefaz-digital-transformation-ambiguity": {
        "relevance": 24,
        "depth": 22,
        "evidence": 22,
        "scoreBase": 68,
        "reasoning": "Aprendizado: abordagem incremental (pilotos 90 dias) foi eficaz. Mas não explicita discordância inicial.",
        "analyzedAt": "2025-10-18T21:15:00Z",
        "version": "3.0"
    },
    "disagree_and_commit__Q12__hsbc-bradesco-cultural-migration": {
        "relevance": 26,
        "depth": 24,
        "evidence": 24,
        "scoreBase": 74,
        "reasoning": "Aprendizado sobre fusão cultural e Agile em larga escala. Não explicita discordância inicial superada.",
        "analyzedAt": "2025-10-18T21:15:00Z",
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
