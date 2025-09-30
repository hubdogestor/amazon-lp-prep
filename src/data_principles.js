// src/data_principles.js
// Consolidates leadership principles data from individual modules

import are_right_a_lot_data from "./data/are_right_a_lot_CURATED.js";
import best_employer from './data/best_employer_CURATED.js';
import bias_for_action from "./data/bias_for_action_CURATED.js";
import broad_responsibility from "./data/broad_responsibility_CURATED.js";
import customer_obsession from "./data/customer_obsession_CURATED.js";
import deliver_results from "./data/deliver_results_CURATED.js";
import disagree_and_commit from "./data/disagree_and_commit_CURATED.js";
import dive_deep from "./data/dive_deep_CURATED.js";
import earn_trust from "./data/earn_trust_CURATED.js";
import frugality from "./data/frugality_CURATED.js";
import hire_and_develop_the_best from "./data/hire_and_develop_the_best_CURATED.js";
import insist_on_highest_standards from "./data/insist_on_highest_standards_CURATED.js";
import invent_and_simplify_data from './data/invent_and_simplify_CURATED.js';
import learn_and_be_curious from "./data/learn_and_be_curious_CURATED.js";
import ownership_data from './data/ownership_CURATED.js';
import think_big from './data/think_big_CURATED.js';

const principlesData = [
  invent_and_simplify_data,       // 1. Inventar e simplificar
    ownership_data,                 // 2. Mentalidade de dono
  dive_deep,                      // 3. Mergulhar fundo  
  deliver_results,                // 4. Entregar resultados
  earn_trust,                     // 5. Ganhar a confiança
  customer_obsession,             // 6. Obsessão pelo cliente
  learn_and_be_curious,      // 7. Aprender e ser curioso
  insist_on_highest_standards,    // 8. Insistir nos mais altos padrões
  are_right_a_lot_data,           // 9. Estar certo, e muito
  bias_for_action,                // 10. Ter iniciativa
  think_big,                 // 11. Pensar grande
  disagree_and_commit,            // 12. Ser firme, discordar e se comprometer
  hire_and_develop_the_best,      // 13. Contratar e desenvolver os melhores
  frugality,                      // 14. Frugalidade
  broad_responsibility,           // 15. Sucesso e crescimento trazem maior responsabilidade
  best_employer,             // 16. Empenhar-se para ser a melhor empregadora do mundo
];

export default principlesData;
