## Program Management — Coverage & Remapping Report

Date: 2025-10-18

### Resumo executivo

- LP analisado: `program_management` (Gestão de Programas)
- Perguntas analisadas: 13
- Cases disponíveis no diretório `src/data/program_management/`: 6
- Gaps identificados: 0 (todas as 13 perguntas têm pelo menos um case com score >= 80)
- Alterações de código realizadas: 1 (descrita abaixo)

### Arquivos alterados

- `src/data/program_management/program_management_case2.js`
  - Alteração: `isTopCase` alterado de `false` para `true` (mantido `isGoodCase: true`).
  - Motivo: o mapeamento em `src/data/questionsToCasesMapping.js` demonstra scores >=95 em múltiplas perguntas para esse case; pela regra, cases com score >=95 devem ter `isTopCase: true`.

- `reports/program_management-coverage.md` (este arquivo) — adicionado para documentar a análise e decisões.

Observação: o arquivo `src/data/questionsToCasesMapping.js` foi revisado e não precisou de alterações — os mapeamentos já estavam ordenados e respeitavam o critério de corte (remoção de cases <80 não necessária).

### Matriz de Cobertura (Pergunta → Case(s) mapeado(s))

Formato: Pergunta (PT) — Case(s) mapeado(s) — Score(s) — Status — Observações

1) Conte sobre o programa mais complexo que você liderou - qual era o escopo, quantos times envolvidos e qual foi o resultado?
- `sefaz-profisco-ii-program` (98), `hsbc-migration-leadership` (95), `sefaz-pmo-creation` (92)
- Status: ✅ OK — Fit perfeito (case de programa em larga escala)

2) Como você gerencia múltiplos projetos interdependentes com recursos limitados?
- `sefaz-profisco-ii-program` (98), `hsbc-migration-leadership` (95), `sefaz-pmo-creation` (90)
- Status: ✅ OK — Fit perfeito (dependências, priorização, realocação)

3) Descreva uma situação onde você teve que ajustar o roadmap de um programa devido a mudanças externas
- `sefaz-roadmap-adjustment-reforma-tributária` (98), `sefaz-profisco-ii-program` (90)
- Status: ✅ OK — Fit perfeito (case específico de ajuste por reforma tributária)

4) Como você garante alinhamento entre múltiplos stakeholders com prioridades conflitantes?
- `sefaz-profisco-ii-program` (98), `sefaz-pmo-creation` (95), `hsbc-migration-leadership` (90)
- Status: ✅ OK — Fit excelente (governança multi-stakeholder)

5) Conte sobre quando você teve que escalar um problema crítico em um programa - como você decidiu quando e para quem escalar?
- `sefaz-profisco-ii-program` (95), `sefaz-pmo-creation` (92), `hsbc-migration-leadership` (88)
- Status: ✅ OK — Fit muito bom (exemplos claros de escalonamento)

6) Como você mede sucesso de um programa além de prazo e orçamento?
- `sefaz-profisco-ii-program` (98), `sefaz-pmo-creation` (95), `hsbc-migration-leadership` (85)
- Status: ✅ OK — Fit excelente (métricas de impacto: arrecadação, NPS, EVM, etc.)

7) Descreva uma situação onde você teve que cancelar ou pivotar um programa em andamento
- `unimed-cvc-cancellation` (98), `hsbc-migration-leadership` (95), `sefaz-profisco-ii-program` (92)
- Status: ✅ OK — Fit perfeito (case Unimed é exemplo direto de cancelamento/realocação)

8) Como você gerencia dependências críticas entre times que você não controla diretamente?
- `sefaz-profisco-ii-program` (98), `hsbc-migration-leadership` (95), `sefaz-pmo-creation` (90)
- Status: ✅ OK — Fit excelente (mapeamento de dependências, matrizes, realocação)

9) Conte sobre quando você teve que recuperar um programa que estava fora dos trilhos
- `sefaz-profisco-ii-program` (98), `hsbc-migration-leadership` (95), `sefaz-pmo-creation` (88)
- Status: ✅ OK — Fit excelente (recuperação disciplinada do programa)

10) Como você equilibra governança rigorosa com agilidade e velocidade de execução?
- `sefaz-profisco-ii-program` (98), `sefaz-pmo-creation` (95), `hsbc-migration-leadership` (90)
- Status: ✅ OK — Fit perfeito (Adaptive Program Governance é textbook)

11) Descreva uma situação onde você teve que comunicar más notícias sobre um programa para executivos seniores
- `sicredi-woop-delay-communication` (98), `sefaz-profisco-ii-program` (90), `hsbc-migration-leadership` (85)
- Status: ✅ OK — Fit perfeito (Sicredi — comunicar atraso ao board)

12) Como você identifica e mitiga riscos em programas de larga escala?
- `sefaz-profisco-ii-program` (98), `sefaz-pmo-creation` (95), `hsbc-migration-leadership` (92)
- Status: ✅ OK — Fit excelente (categorias de risco e mitigação documentadas)

13) Como você comunica progresso de programas complexos para diferentes audiências?
- `sefaz-profisco-ii-program` (98), `sefaz-pmo-creation` (95), `hsbc-migration-leadership` (90)
- Status: ✅ OK — Fit perfeito (dashboards e reporting para BID/TCE/Secretário/PMs)

### Métricas de qualidade (por pergunta — classificação primária)

- % perguntas com primary case score ≥95: 100% (13/13)
- % perguntas com primary case score 90–94: 0% (0/13)
- % perguntas com primary case score 80–89: 0% (0/13)
- % perguntas sem case adequado (<80): 0% (0/13)

### Recomendações de novos cases (opcionais)

1. Case sobre falha de fornecedor/contrato: ideal para perguntas sobre gestão de fornecedores e recuperação quando fornecedores externos quebram SLAs.
2. Case de programa internacional/multi-jurisdição: útil para desempates quando a entrevista pede experiência coordenando países/reguladores distintos.
3. Case de piloto ágil dentro de programa maior: ilustra capacidade de testar rápido e escalar aprendizados sem sacrificar governança.

### Checklist de alterações e validação

- Modificações: `src/data/program_management/program_management_case2.js` — `isTopCase: false` → `isTopCase: true` (commit: b4d0edeb)
- Adicionado: `reports/program_management-coverage.md` (este arquivo) — commit será criado agora.
- `src/data/questionsToCasesMapping.js` — sem alterações (mapeamento já estava correto)
- Build: `npm run build` — PASS (verificado previamente; será re-executado após commit final para garantir integridade)

---

Se quiser que eu faça squash do commit anterior e deixe apenas 1 commit final, posso reescrever o histórico local (squash) antes de você pushar. Caso contrário, vou criar um commit final com este relatório e as alterações adicionais (se houver) — por padrão criarei um commit final agora.
