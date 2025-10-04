# GATE A � Sintese Base + App + Modelo

## Da Base (Knowledge Base + vaga)
- LPs como mecanismos: customer obsession em primeiro plano, ownership, dive deep, invent and simplify, insist on highest standards, deliver results; cada hist�ria precisa mostrar conflito real, decis�es dif�ceis e impacto replic�vel.
- Requisitos duros: >=8 m�tricas confi�veis por case (finan�as, cliente, opera��o), ratio EU:N�S >=3:1 (falha autom�tica <2:1), conflito expl�cito com resolu��o, rec�ncia (�ltimos 5 anos preferencial), aprendizagem/mic-drop obrigat�rio.
- Amazon prioriza mecanismos acima de inten��es: processos sustent�veis, dashboards, automa��es e cad�ncia de auditoria s�o provas fortes.
- Tom duplamente executivo PT/EN espelhado, sem �false friends�; customer obsession obrigat�ria mesmo em casos t�cnicos; dados devem amarrar cliente ? neg�cio.
- Vaga Payments/Oakberry: �nfase em AI/ML aplicada a opera��es, Lean/Six Sigma, eventos cr�ticos, governan�a e integra��o parceiros � precisa destacar impactos em pagamentos, automa��o, risco/reg compliance.

## Da App Anterior (bundle `case-validation/`)
- Analyzer 2.0 (front) possui heur�sticas ricas: dealbreakers, timing, mecanismos, ownership ratio; bom repert�rio conceitual mas roda no browser e injeta placeholders.
- Motor 3.0 atual (node) � minimalista: garante apenas campos STARL e FUPs gen�ricas, insere marcadores `[Hook]`, `[Transition]`, `[Mic-drop]` sem conte�do real, n�o valida m�tricas, conflito ou customer obsession ? risco de reprova��o.
- Loader aceita JS com `eval`/`vm` sem validar esquema completo ? precisamos endurecer parsing e reportar erros por case.
- Reporter gera `review-status.json|csv`, mas heur�sticas usam regex simples (quantidade de `%`, `eu`/`nos`), resultando em falsos positivos; n�o h� scoring objetivo nem checagem de rec�ncia/conflito.
- FUPs padronizadas quebram paridade PT/EN e n�o consideram bucket (t�cnico, conflito, mecanismo). Nenhum mecanismo para conservar texto existente.

## Do Modelo (Motor 3.0 desejado)
- Pipeline fora do bundle (somente `case-validation/analyzer3/**`): Loader r�gido (schema STARL + FUPs=10), valida��es contextuais (rec�ncia <=60 meses salvo exce��o, conflito detectado por palavras-chave e follow-ups existentes), customer obsession com heur�sticas multi-l�ngua.
- Scoring objetivo: peso para Dealbreakers (KO), red flags (penalidade), m�tricas (contagem, diversidade), ratio EU:N�S (0-1), mecanismos, hooks/transi��es/mic-drop reais, alinhamento LP (palavras-chave e entidades). Sa�da por case: status, score 0-100, motivos.
- Rewriter deve apenas sugerir (pr�-visualiza��o) sem placeholders: produzir `preview/<id>.preview.json` com diffs textuais e recomenda��es estruradas (sem alterar arquivo original). Fornecer upgrades Paridade PT/EN via heur�stica que compara comprimento, senten�as e termos.
- FUPs: manter existentes; completar faltantes com biblioteca curada por LP/bucket; validar PT/EN 1:1, sem texto �? revisar�.
- Reporter: atualizar `review-status.json|csv` e `scan_summary.md` com m�tricas agregadas (quantidade de dealbreakers, m�dia ratio, m�dia m�tricas, lista de KOs). Preparar dados para checklist.
- CLI: suportar `--validate`, `--refine --lp=... [--case=...]`, flags de modo seco vs aplicar preview; logs humanos com contadores finais.
- Integra��o p�s-Gate B: manter writer off; outputs alimentam revis�o humana ? a��o posterior ser� manual.
