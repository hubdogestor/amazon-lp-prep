#!/usr/bin/env node
import { loadAllCases } from './loader.mjs';
import { lintCase } from './linter.mjs';
import { analyzeHeuristics } from './heuristics.mjs';
import { rewriteCase, ensureParityPTEN } from './rewriter.mjs';
import { optimizeFUPs } from './fups.mjs';
import { writeReports, writePreviewChanges } from './reporter.mjs';

const args = Object.fromEntries(process.argv.slice(2).map(a => {
  const [k, v] = a.startsWith('--') ? a.replace(/^--/, '').split('=') : [a, true];
  return [k, v === undefined ? true : v];
}));

const MODE_VALIDATE = !!args.validate;
const MODE_REFINE = !!args.refine;
const LP_FILTER = args.lp || null;
const CASE_FILTER = args.case || null;
const DATA_DIR = args.data || 'src/data';
const OUT_DIR = args.out || 'case-validation/analyzer3/reports';

function matchesFilters(c) {
  if (LP_FILTER && c.lp_id !== LP_FILTER) return false;
  if (CASE_FILTER && c.id !== CASE_FILTER) return false;
  return true;
}

const RUN_TS = new Date().toISOString();

(async function main() {
  const all = await loadAllCases(DATA_DIR);
  const targets = all.filter(matchesFilters);
  const report = {
    run_at: RUN_TS,
    data_dir: DATA_DIR,
    total_cases: all.length,
    filtered_cases: targets.length,
    lp: LP_FILTER,
    case: CASE_FILTER,
    results: []
  };

  if (!targets.length) {
    console.warn('[analyzer3] Nenhum case encontrado com os filtros informados.');
  }

  for (const c of targets) {
    const lint = lintCase(c);
    const heur = analyzeHeuristics(c);
    const finalStatus = lint.ok ? heur.status : 'Lint-Blocker';

    let mutated = cloneCase(c);
    const changeLog = [];

    if (MODE_REFINE) {
      const parity = ensureParityPTEN(mutated);
      mutated = parity.case;
      if (parity.changed) changeLog.push(...parity.changes);

      const rew = rewriteCase(mutated, heur);
      mutated = rew.case;
      if (rew.changed) changeLog.push(...rew.changes);

      const fups = optimizeFUPs(mutated, heur, c.lp_id);
      mutated = fups.case;
      if (fups.changed) changeLog.push(...fups.changes);

      mutated.__scorecard = {
        ...(mutated.__scorecard || {}),
        lint,
        heur
      };

      await writePreviewChanges(c, mutated);
    }

    report.results.push({
      lp_id: c.lp_id,
      case_id: c.id,
      title_pt: c.pt?.title || c.title_pt || c.title || '',
      title_en: c.en?.title || c.title_en || c.title || '',
      status: finalStatus,
      lint,
      heur,
      changes: MODE_REFINE ? changeLog : []
    });

    logConsoleLine({ c, lint, heur, finalStatus });
  }

  await writeReports(report, OUT_DIR);

  if (MODE_REFINE) {
    console.log("[analyzer3] Previews prontos em 'case-validation/analyzer3/preview/'.");
  }
  console.log(`[analyzer3] Relatórios em ${OUT_DIR}`);
})().catch(e => {
  console.error('[analyzer3] ERROR', e);
  process.exit(1);
});

function cloneCase(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function logConsoleLine({ c, lint, heur, finalStatus }) {
  let badge = 'INFO';
  if (finalStatus === 'Ready') badge = 'READY';
  else if (finalStatus === 'Needs-Polish') badge = 'POLISH';
  else if (finalStatus === 'Needs-Rewrite') badge = 'REWRITE';
  else if (finalStatus === 'KO') badge = 'KO';
  else if (finalStatus === 'Lint-Blocker') badge = 'LINT';
  const lintInfo = lint.ok ? '' : ` | lint issues: ${lint.issues.length}`;
  console.log(`[${c.lp_id}] ${badge} ${c.id} -> ${finalStatus} (score ${heur.score ?? 'N/D'})${lintInfo}`);
}
