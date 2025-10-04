import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { STARL_KEYS } from './utils/schema.mjs';

const CASE_FILE_IGNORE = [/index\.js$/i, /config\.js$/i, /consolidated/];

export async function loadAllCases(rootDir) {
  const files = await listCaseFiles(rootDir);
  const cases = [];

  for (const filePath of files) {
    const lp_id = deriveLpId(filePath);
    const { obj, error, warnings } = await loadCaseFile(filePath);

    if (obj) {
      cases.push({
        ...obj,
        __file: filePath,
        lp_id,
        __load_warnings: warnings
      });
    } else {
      cases.push({
        id: path.basename(filePath, '.js'),
        __file: filePath,
        lp_id,
        __load_error: error || 'unknown load error'
      });
    }
  }

  return cases;
}

function deriveLpId(fp) {
  const parts = fp.split(path.sep);
  const idx = parts.findIndex(p => p === 'data');
  if (idx >= 0 && parts[idx + 1]) return parts[idx + 1];
  const idx2 = parts.findIndex(p => p === 'src');
  if (idx2 >= 0 && parts[idx2 + 2]) return parts[idx2 + 2];
  return 'unknown_lp';
}

async function listCaseFiles(root) {
  const out = [];

  async function walk(dir) {
    let entries = [];
    try {
      entries = await fs.readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
        continue;
      }
      if (!entry.isFile()) continue;
      if (!full.endsWith('.js')) continue;
      if (CASE_FILE_IGNORE.some(pattern => pattern.test(entry.name))) continue;
      out.push(full);
    }
  }

  await walk(root);
  return out.sort();
}

async function loadCaseFile(fp) {
  let raw;
  try {
    raw = await fs.readFile(fp, 'utf8');
  } catch (error) {
    return { obj: null, error: `read error: ${error.message}`, warnings: [] };
  }

  const transformed = raw.replace(/\bexport\s+default\b/, 'module.exports =');
  const sandbox = {
    module: { exports: {} },
    exports: {},
    require: undefined,
    process: undefined,
    console: undefined,
    global: undefined
  };

  try {
    const script = new vm.Script(transformed, { filename: fp, displayErrors: true });
    script.runInNewContext(sandbox, { timeout: 1000 });
    const obj = sandbox.module.exports;

    if (!obj || typeof obj !== 'object') {
      return { obj: null, error: 'exported value is not an object', warnings: [] };
    }

    const warnings = shallowSchemaWarnings(obj);
    return { obj, error: null, warnings };
  } catch (error) {
    return { obj: null, error: `parse error: ${error.message}`, warnings: [] };
  }
}

function shallowSchemaWarnings(obj) {
  const warnings = [];
  if (!obj.id) warnings.push('id ausente');
  if (!obj.title_pt) warnings.push('title_pt ausente');
  if (!obj.title_en) warnings.push('title_en ausente');
  if (!obj.company) warnings.push('company ausente');
  if (!obj.period) warnings.push('period ausente');
  if (!obj.pt || typeof obj.pt !== 'object') warnings.push('estrutura pt ausente');
  if (!obj.en || typeof obj.en !== 'object') warnings.push('estrutura en ausente');

  for (const key of STARL_KEYS) {
    if (obj.pt && typeof obj.pt[key] !== 'string') warnings.push(`pt.${key} ausente ou não string`);
    if (obj.en && typeof obj.en[key] !== 'string') warnings.push(`en.${key} ausente ou não string`);
  }

  if (!Array.isArray(obj.fups)) warnings.push('fups ausentes ou não array');
  return warnings;
}
