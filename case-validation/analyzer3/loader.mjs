import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';

export async function loadAllCases(rootDir) {
  const files = await listCaseFiles(rootDir);
  const cases = [];
  for (const fp of files) {
    const obj = await loadCaseFile(fp);
    const lp_id = deriveLpId(fp);
    if (obj) {
      cases.push({ ...obj, __file: fp, lp_id });
    } else {
      cases.push({ __file: fp, lp_id, id: path.basename(fp) });
    }
  }
  return cases;
}

function deriveLpId(fp) {
  const parts = fp.split(path.sep);
  const idx = parts.findIndex(p => p === 'data');
  if (idx >= 0 && parts[idx+1]) return parts[idx+1];
  const idx2 = parts.findIndex(p => p === 'src');
  if (idx2 >= 0 && parts[idx2+2]) return parts[idx2+2];
  return 'unknown_lp';
}

async function listCaseFiles(root) {
  const out = [];
  async function walk(dir) {
    let entries = [];
    try { entries = await fs.readdir(dir, { withFileTypes: true }); } catch {}
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) await walk(p);
      else if (e.isFile() && p.endsWith('.js') && !p.includes('consolidated')) out.push(p);
    }
  }
  await walk(root);
  return out;
}

export async function loadCaseFile(fp) {
  let raw = "";
  try { raw = await fs.readFile(fp, 'utf8'); } catch { return null; }
  const cleaned = raw.replace(/export\s+default\s+/, 'module.exports = ');
  const script = new vm.Script(cleaned, { filename: fp, displayErrors: true });
  const sandbox = { module: { exports: {} }, exports: {}, require: undefined, process: undefined, console: undefined };
  try {
    script.runInNewContext(sandbox, { timeout: 1000 });
    const obj = sandbox.module.exports;
    if (obj && typeof obj === 'object') {
      const id = obj.id || path.basename(fp, '.js');
      return { id, ...obj };
    }
  } catch (e) {
    const idMatch = raw.match(/\bid\s*:\s*['"]([^'"]+)['"]/);
    const titlePt = raw.match(/\btitle_pt\s*:\s*['"]([^'"]+)['"]/);
    const titleEn = raw.match(/\btitle_en\s*:\s*['"]([^'"]+)['"]/);
    return {
      id: idMatch?.[1] || path.basename(fp, '.js'),
      title_pt: titlePt?.[1] || '',
      title_en: titleEn?.[1] || '',
      __parse_error: true
    };
  }
}