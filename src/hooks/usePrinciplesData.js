// src/hooks/usePrinciplesData.js
import { useMemo } from 'react';
import principlesDataRaw from '../data_principles.js';

/**
 * Hook otimizado para processar dados dos princípios
 * Usa memoização para evitar reprocessamento desnecessário
 */
export function usePrinciplesData() {
  return useMemo(() => {
    // Verificar se os dados são válidos
    if (!Array.isArray(principlesDataRaw)) {
      console.warn('Principles data is not an array, returning empty array');
      return [];
    }

    // Filtrar dados inválidos e garantir estrutura correta
    return principlesDataRaw.filter(principle => 
      principle && 
      principle.id && 
      principle.principle && 
      Array.isArray(principle.cases)
    ).map(principle => ({
      ...principle,
      // Garantir que cases têm IDs únicos
      cases: principle.cases.filter(case_ => case_ && case_.id).map(case_ => ({
        ...case_,
        // Adicionar fallbacks para campos obrigatórios
        title: case_.title || case_.title_pt || 'Untitled Case',
        company: case_.company || 'Unknown Company',
        period: case_.period || 'Unknown Period',
        isTopCase: Boolean(case_.isTopCase),
        pt: case_.pt || {},
        en: case_.en || {},
        fups: Array.isArray(case_.fups) ? case_.fups : []
      }))
    }));
  }, []); // Empty dependency array since principlesDataRaw is static
}

export default usePrinciplesData;