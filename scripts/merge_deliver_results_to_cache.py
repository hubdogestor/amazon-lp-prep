#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Mescla os resultados da análise semântica no cache do lp-harmony-ai
"""

import json
from datetime import datetime, timezone
import sys
import io
import os

# Fix Windows console encoding
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Carregar cache existente
with open('scripts/.lp-harmony-cache.json', 'r', encoding='utf-8') as f:
    cache = json.load(f)

total_count = 0

# Lista de arquivos JSON para mesclar
json_files = [
    'semantic_analysis_deliver_results.json',
    'semantic_analysis_stakeholder_management.json',
    'semantic_analysis_learn_and_be_curious.json',
    'semantic_analysis_bias_for_action.json',
    'semantic_analysis_prioritizing_and_influence.json'
]

# Converter e mesclar cada arquivo
for json_file in json_files:
    if not os.path.exists(json_file):
        print(f'⚠️  Arquivo não encontrado: {json_file}')
        continue

    with open(json_file, 'r', encoding='utf-8') as f:
        analyses = json.load(f)

    count = 0
    for item in analyses:
        cache_key = item['cacheKey']

        cache[cache_key] = {
            "relevance": item['relevance'],
            "depth": item['depth'],
            "evidence": item['evidence'],
            "scoreBase": item['scoreBase'],
            "reasoning": item['reasoning'],
            "analyzedAt": datetime.now(timezone.utc).isoformat().replace('+00:00', 'Z'),
            "version": "3.0"
        }
        count += 1

    lp_name = json_file.replace('semantic_analysis_', '').replace('.json', '')
    print(f'✅ {count} analises de {lp_name} adicionadas ao cache!')
    total_count += count

# Salvar cache atualizado
with open('scripts/.lp-harmony-cache.json', 'w', encoding='utf-8') as f:
    json.dump(cache, f, indent=2, ensure_ascii=False)

print(f'\n✅ Total: {total_count} analises mescladas!')
print(f'📊 Total de entradas no cache: {len(cache)}')
