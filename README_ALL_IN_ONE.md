# ALL-IN-ONE — Amazon LP Prep
Gerado em: 2025-10-04 22:04

## Conteúdo
- `prompts/` (Prompt v3.2 + Start Command)
- `case-validation/analyzer3/` (Motor 3.0 — **fora do bundle**)
- `docs/` (GATE A/B templates, Checklist Visual v2, Review Tracker)
- `docs/inputs/` (originais para ingestão)

## Como usar
1. Descompacte este pacote na **raiz do repositório**.
2. Abra o VS Code + Claude Code.
3. Cole o **prompts/PROMPT_Claude_Code_v3.2.md** na conversa.
4. Envie o **prompts/CLAUDE_START_COMMAND.txt**.
5. Após a execução, verifique `case-validation/analyzer3/reports/` e atualize `docs/`.

## Observações
- O motor gera **previews** em `case-validation/analyzer3/preview/`. Só aplique definitivo após revisão.
- Mantenha o motor **fora do bundle** (não importar em `src/**`).

Bom trabalho!
