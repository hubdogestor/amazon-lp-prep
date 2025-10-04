import fs from 'node:fs/promises';
import path from 'node:path';

export async function writeReports(report, outDir) {
  await fs.mkdir(outDir, { recursive: true });
  const jsonPath = path.join(outDir, "review-status.json");
  const csvPath = path.join(outDir, "review-status.csv");

  await fs.writeFile(jsonPath, JSON.stringify(report, null, 2), "utf8");

  const lines = [
    ["lp_id","case_id","title_pt","title_en","status","issues","score","metrics","eu_nos_ratio"].join(",")
  ];
  for (const r of report.results) {
    lines.push([
      r.lp_id, r.case_id,
      JSON.stringify(r.title_pt||""),
      JSON.stringify(r.title_en||""),
      r.status,
      JSON.stringify(r.lint.issues||[]),
      r.heur.score?.toFixed?.(2) ?? "",
      r.heur.metricsCount ?? "",
      r.heur.eu_nos_ratio ?? ""
    ].join(","));
  }
  await fs.writeFile(csvPath, lines.join("\n"), "utf8");
}

export async function writePreviewChanges(original, mutated) {
  const outBase = "case-validation/analyzer3/preview";
  await fs.mkdir(outBase, { recursive: true });
  const safeId = String(mutated.id || "case").replace(/[^a-z0-9_\-]/gi, "_");
  const fp = path.join(outBase, `${safeId}.preview.json`);
  await fs.writeFile(fp, JSON.stringify({ original, mutated }, null, 2), "utf8");
}