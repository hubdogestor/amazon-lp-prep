Orientações para Claude Code (Amazon LP Prep)

Este documento fornece contexto sobre a aplicação case‑validation, o motor de análise 3.0 e as heurísticas utilizadas para avaliar e refinar casos STAR(L) para entrevistas na Amazon. Utilize estas diretrizes antes de executar qualquer comando de validação ou refinamento.

Visão geral do sistema

A aplicação case‑validation analisa narrativas STAR(L) alinhadas aos Leadership Principles da Amazon. Para cada case, calcula métricas, identifica problemas (dealbreakers) e gera sugestões de melhoria.

O motor CLI (case-validation/analyzer3/index.mjs) possui etapas de loader, linter, heurísticas, writer, fups e reporter. Elas garantem que cada case tenha formato STAR(L) válido em PT e EN, 10 perguntas de follow‑up, métricas e sinais de Customer Obsession e conflito/repetição. O reporter grava os relatórios review-status.* e scan_summary.md sem modificar os dados originais
raw.githubusercontent.com
.

O arquivo scan_summary.md resume quantos casos estão Ready, Needs‑Polish, Needs‑Rewrite ou KO, média de métricas e razão EU:NÓS
raw.githubusercontent.com
. Já o review-status.csv mostra, linha a linha, o status de cada case, score e motivos dos problemas encontrados
raw.githubusercontent.com
.

Regras gerais de refinamento

Estrutura STAR(L): mantenha as seções Situação, Tarefa, Ação, Resultado, Learning em ambos os idiomas. Ações devem cobrir ~60–70 % da narrativa, resultados quantificar o impacto e o aprendizado finalizar com mic‑drop acionável.

Métras: inclua pelo menos 8 métricas distintas (financeiras, operacionais e de cliente) distribuídas nas seções; compare antes/depois.

Customer Obsession: explique quem é o cliente, qual problema foi resolvido e como as ações melhoraram a vida do cliente. A heurística penaliza ausência dessa perspectiva.

Ownership e ratio EU:NÓS: destaque sua responsabilidade individual (“eu”) e mencione a equipe (“nós”) quando apropriado, mantendo a razão EU:NÓS ≥ 2:1.

Conflito e mecanismos: descreva obstáculos ou resistências e como foram superados. Mencione mecanismos repetíveis (processos, ferramentas) criados para escalar a solução.

Follow‑up questions: cada case precisa de 10 perguntas bilíngues que explorem riscos, trade‑offs, escalabilidade, velocidade de execução e aprendizados.

Paridade PT/EN: as versões em português e inglês devem conter informações equivalentes; o linter verifica tamanho e estrutura de cada idioma.

Como executar o motor

Validar todos os casos: node case-validation/analyzer3/index.mjs --validate --data=src/data. Isto gera/atualiza case-validation/analyzer3/reports/review-status.* e scan_summary.md.

Refinar um LP inteiro: node case-validation/analyzer3/index.mjs --refine --lp=<lp_id> --data=src/data. Isso varrerá todos os casos do LP selecionado, lerá o scorecard e perguntará ao modelo para reescrever.

Refinar um case específico: node case-validation/analyzer3/index.mjs --refine --lp=<lp_id> --case=<case_id> --data=src/data.

Revisar o arquivo de preview gerado em case-validation/analyzer3/preview/<lp>/<case>.preview.json para ver as sugestões. Ajuste manualmente se necessário.

Executar novamente a validação para conferir se o case evoluiu para Ready ou Needs‑Polish. Itere até que não haja dealbreakers.

Exemplos de dealbreakers comuns

Falta de métricas (menos de 8) ou ausência de métricas de cliente ou operacionais.

Customer Obsession implícita – o cliente não é mencionado claramente em situação, ação ou resultado.

Recência – caso muito antigo (> 9 anos) sem demonstração de relevância atual.

Ausência de conflito – narrativa linear sem obstáculos; incorpore adversidades reais.

Rácio EU:NÓS baixo – conte histórias onde você esteve no centro das decisões; se a proporção EU:NÓS for < 2:1, aumente sua visibilidade individual.

Para mais detalhes, consulte o guia completo disponível em guides/guia_continuar_lp_prep.md.