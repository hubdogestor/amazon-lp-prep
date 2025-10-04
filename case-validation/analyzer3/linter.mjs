export function lintCase(c) {
  const issues = [];
  const starl = ["s","t","a","r","l"];
  if (!c.pt) issues.push("pt ausente");
  if (!c.en) issues.push("en ausente");
  for (const k of starl) {
    if (!c.pt?.[k]) issues.push(`pt.${k} ausente`);
    if (!c.en?.[k]) issues.push(`en.${k} ausente`);
  }
  const fups = Array.isArray(c.fups) ? c.fups : [];
  if (fups.length < 10) issues.push(`FUPs insuficientes: ${fups.length}`);
  return { ok: issues.length === 0, issues };
}