# analyzer3 – Pipeline de validação/refino (Amazon LP Prep)
Gerado em: 2025-10-04 22:04

Uso:
- node case-validation/analyzer3/index.mjs --validate --data=src/data
- node case-validation/analyzer3/index.mjs --refine --lp=<lp_id> --data=src/data
- node case-validation/analyzer3/index.mjs --refine --lp=<lp_id> --case=<case_id> --data=src/data

Saídas:
- case-validation/analyzer3/reports/review-status.json|csv
- case-validation/analyzer3/preview/*.preview.json
