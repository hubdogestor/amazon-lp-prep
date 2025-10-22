import { extractBaseTitle } from './textUtils.js';

/**
 * Check if a case is marked as top case
 * Uses the isTopCase flag on the case object
 * @param {Object} c - Case object
 * @returns {boolean} True if case is a top case
 */
export const isTopCase = (c) => !!(c && c.isTopCase);

/**
 * Get case base title based on language
 * @param {Object} c - Case object
 * @param {string} lang - Language ('pt' or 'en')
 * @returns {string} Base title
 */
export const getCaseBaseTitle = (c, lang) => {
  if (lang === "en") {
    return c.title_en || c.title_pt || extractBaseTitle(c.title);
  }
  return c.title_pt || extractBaseTitle(c.title);
};

/**
 * Get display title for a case with company, period and top case indicator
 * @param {Object} c - Case object
 * @param {string} language - Language ('pt' or 'en')
 * @returns {string} Display title
 */
export const getDisplayCaseTitle = (c, language) => {
  const base = getCaseBaseTitle(c, language);
  return base;
};

/**
 * Get FUPs from case (normalized - supports both 'fup' and 'fups')
 * @param {Object} c - Case object
 * @returns {Array} Array of FUP objects
 */
export const getCaseFups = (c) => {
  return c.fups || c.fup || [];
};
