import { STARL_KEYS } from './utils/schema.mjs';

const REQUIRED_FIELDS = ['id', 'title_pt', 'title_en', 'company', 'period'];
const FUP_REQUIRED_KEYS = ['q', 'a', 'q_en', 'a_en'];

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function checkPeriodFormat(period) {
  if (!isNonEmptyString(period)) return false;
  const match = period.match(/(\d{4})/g);
  return Array.isArray(match);
}

export function lintCase(c = {}) {
  const issues = [];
  const warnings = [];

  if (c.__load_error) {
    issues.push(`falha ao carregar arquivo: ${c.__load_error}`);
    return { ok: false, issues, warnings };
  }

  for (const field of REQUIRED_FIELDS) {
    if (!isNonEmptyString(c[field])) {
      issues.push(`campo '${field}' ausente ou vazio`);
    }
  }

  if (!checkPeriodFormat(c.period)) {
    warnings.push('periodo sem ano reconhecível (esperado MM/YYYY-... ou YYYY)');
  }

  if (!c.pt || typeof c.pt !== 'object') {
    issues.push('objeto pt ausente');
  }
  if (!c.en || typeof c.en !== 'object') {
    issues.push('objeto en ausente');
  }

  for (const key of STARL_KEYS) {
    const ptValue = c.pt?.[key];
    const enValue = c.en?.[key];

    if (!isNonEmptyString(ptValue)) issues.push(`pt.${key} ausente ou vazio`);
    if (!isNonEmptyString(enValue)) issues.push(`en.${key} ausente ou vazio`);

    if (isNonEmptyString(ptValue) && isNonEmptyString(enValue)) {
      const ptLen = ptValue.trim().length;
      const enLen = enValue.trim().length;
      const longer = Math.max(ptLen, enLen) || 1;
      if (Math.abs(ptLen - enLen) / longer > 0.25) {
        warnings.push(`desequilíbrio PT/EN em '${key}' (diferença >25%)`);
      }
    }
  }

  const fups = Array.isArray(c.fups) ? c.fups : [];
  if (fups.length < 10) {
    issues.push(`FUPs insuficientes: ${fups.length} (necessário 10)`);
  } else if (fups.length > 10) {
    warnings.push(`FUPs excedentes: ${fups.length} (ideal 10)`);
  }

  fups.slice(0, 10).forEach((fup, idx) => {
    for (const key of FUP_REQUIRED_KEYS) {
      if (!isNonEmptyString(fup?.[key])) {
        issues.push(`fup[${idx}].${key} ausente ou vazio`);
      }
    }
  });

  return {
    ok: issues.length === 0,
    issues,
    warnings
  };
}
