// src/hooks/usePrinciplesData.js
import { useMemo } from 'react';
import principlesDataRaw from '../data_principles.js';
import { PT_LABELS, EN_LABELS_FROM_PT } from '../utils/principleLabels.js';

/**
 * Hook otimizado para processar dados dos princípios
 * Usa memoização para evitar reprocessamento desnecessário
 */
/**
 * @param {Array|undefined} overrideData - (opcional) dados injetados para testes
 */
export function usePrinciplesData(overrideData) {
  return useMemo(() => {
    const source = overrideData !== undefined ? overrideData : principlesDataRaw;

    if (!Array.isArray(source)) {
      console.warn('Principles data is not an array, returning empty array');
      return [];
    }

    return source
      .filter(principle => (
        principle &&
        principle.id &&
        principle.principle &&
        Array.isArray(principle.cases)
      ))
      .map(principle => {
        const ptName = PT_LABELS[principle.id] || principle.name;
        const enName = EN_LABELS_FROM_PT[principle.id] || principle.name;

        return {
          ...principle,
          name: ptName, // Default to PT name
          principle: {
            ...principle.principle,
            name: ptName,
            name_en: enName,
          },
          cases: principle.cases
            .filter(case_ => case_ && case_.id)
            .map(case_ => ({
              ...case_,
              title: case_.title || case_.title_pt || 'Untitled Case',
              company: case_.company || 'Unknown Company',
              period: case_.period || 'Unknown Period',
              isTopCase: Boolean(case_.isTopCase),
              pt: case_.pt || {},
              en: case_.en || {},
              fups: Array.isArray(case_.fups) ? case_.fups : []
            }))
        };
      });
  // Memo invalidated somente se overrideData mudar (para testes). Dados base são estáticos.
  }, [overrideData]);
}

export default usePrinciplesData;