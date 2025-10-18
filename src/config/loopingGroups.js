/**
 * Configuração dos grupos de looping para busca de perguntas típicas
 *
 * Cada grupo define quais Leadership Principles fazem parte de um looping específico.
 *
 * Para atualizar os grupos:
 * 1. Modifique o array 'principles' de cada looping com os IDs dos LPs desejados
 * 2. Os IDs disponíveis são os mesmos usados no sistema:
 *    - customer_obsession
 *    - program_management
 *    - ownership
 *    - dive_deep
 *    - invent_and_simplify
 *    - earn_trust
 *    - deliver_results
 *    - stakeholder_management
 *    - learn_and_be_curious
 *    - bias_for_action
 *    - prioritizing_and_influence
 *    - deal_with_ambiguity
 *    - have_backbone
 *    - insist_on_the_highest_standards
 */

export const loopingGroups = [
  {
    id: 'L1',
    label: 'L1',
    principles: [
      'customer_obsession',
      'program_management',
      'ownership'
    ]
  },
  {
    id: 'L2',
    label: 'L2',
    principles: [
      'dive_deep',
      'invent_and_simplify'
    ]
  },
  {
    id: 'L3',
    label: 'L3',
    principles: [
      'earn_trust',
      'deliver_results',
      'stakeholder_management'
    ]
  },
  {
    id: 'L4',
    label: 'L4',
    principles: [
      'learn_and_be_curious',
      'bias_for_action',
      'prioritizing_and_influence'
    ]
  },
  {
    id: 'L5',
    label: 'L5',
    principles: [
      'deal_with_ambiguity',
      'have_backbone',
      'insist_on_the_highest_standards'
    ]
  }
];

/**
 * Retorna todos os IDs de looping disponíveis
 */
export function getAllLoopingIds() {
  return loopingGroups.map(group => group.id);
}

/**
 * Retorna os princípios de um grupo de looping específico
 * @param {string} loopingId - ID do looping (ex: 'L1', 'L2', etc.)
 * @returns {string[]} Array com os IDs dos princípios
 */
export function getPrinciplesForLooping(loopingId) {
  const group = loopingGroups.find(g => g.id === loopingId);
  return group ? group.principles : [];
}

/**
 * Verifica se um princípio pertence a um grupo de looping
 * @param {string} principleId - ID do princípio
 * @param {string} loopingId - ID do looping
 * @returns {boolean}
 */
export function isPrincipleInLooping(principleId, loopingId) {
  const principles = getPrinciplesForLooping(loopingId);
  return principles.includes(principleId);
}
