// src/data/consolidatedPrinciples.js
// Sistema simplificado que importa dados das pastas organizadas via index.js

// Importar cada LP (já consolidado com config + cases)
import are_right_a_lot from './are_right_a_lot/index.js';
import best_employer from './best_employer/index.js';
import bias_for_action from './bias_for_action/index.js';
import broad_responsibility from './broad_responsibility/index.js';
import customer_obsession from './customer_obsession/index.js';
import deliver_results from './deliver_results/index.js';
import disagree_and_commit from './disagree_and_commit/index.js';
import dive_deep from './dive_deep/index.js';
import earn_trust from './earn_trust/index.js';
import frugality from './frugality/index.js';
import hire_and_develop_the_best from './hire_and_develop_the_best/index.js';
import insist_on_highest_standards from './insist_on_highest_standards/index.js';
import invent_and_simplify from './invent_and_simplify/index.js';
import learn_and_be_curious from './learn_and_be_curious/index.js';
import ownership from './ownership/index.js';
import think_big from './think_big/index.js';

// Importar LPs Extras
import program_management from './program_management/index.js';
import stakeholder_management from './stakeholder_management/index.js';
import prioritizing_and_influence from './prioritizing_and_influence/index.js';
import deal_with_ambiguity from './deal_with_ambiguity/index.js';

// Array consolidado na ordem desejada
const consolidatedPrinciples = [
  customer_obsession,
  ownership,
  program_management,
  // --- divider ---
  dive_deep,
  invent_and_simplify,
  // --- divider ---
  earn_trust,
  deliver_results,
  stakeholder_management,
  // --- divider ---
  learn_and_be_curious,
  bias_for_action,
  prioritizing_and_influence,
  // --- divider ---
  disagree_and_commit,
  insist_on_highest_standards,
  deal_with_ambiguity,
  // --- divider ---
  are_right_a_lot,
  think_big,
  hire_and_develop_the_best,
  frugality,
  broad_responsibility,
  best_employer
];

export default consolidatedPrinciples;
