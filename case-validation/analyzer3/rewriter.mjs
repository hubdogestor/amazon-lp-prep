export function ensureParityPTEN(c) {
  let changed = false;
  const changes = [];
  const starl = ["s","t","a","r","l"];
  if (!c.pt) { c.pt = {}; changed = true; changes.push("criando c.pt"); }
  if (!c.en) { c.en = {}; changed = true; changes.push("criando c.en"); }
  for (const k of starl) {
    if (!c.pt[k]) { c.pt[k] = ""; changed = true; changes.push(`pt.${k} preenchido`); }
    if (!c.en[k]) { c.en[k] = ""; changed = true; changes.push(`en.${k} preenchido`); }
  }
  return { changed, changes, case: c };
}

export function rewriteCase(c, heur) {
  let changed = false;
  const changes = [];
  if (!heur.hasHook && c.pt.s) {
    c.pt.s = `[Hook] ` + c.pt.s;
    c.en.s = `[Hook] ` + c.en.s;
    changed = true; changes.push("inject hook");
  }
  if (!heur.hasTransitions) {
    c.pt.t = (c.pt.t || "") + "\n[Transição S→T]";
    c.en.t = (c.en.t || "") + "\n[Transition S→T]";
    changed = true; changes.push("inject transitions");
  }
  if (!heur.hasMicDrop && c.pt.l) {
    c.pt.l = c.pt.l + "\n[Mic-drop]";
    c.en.l = c.en.l + "\n[Mic-drop]";
    changed = true; changes.push("inject mic-drop");
  }
  return { changed, changes, case: c };
}