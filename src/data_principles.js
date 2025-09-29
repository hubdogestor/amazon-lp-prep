// src/data_principles.js
// Consolidates leadership principles data from individual modules

import are_right_a_lot_data from "./data/are_right_a_lot";
import best_employer_data from "./data/best_employer";
import bias_for_action from "./data/bias_for_action";
import broad_responsibility from "./data/broad_responsibility";
import customer_obsession from "./data/customer_obsession";
import deliver_results from "./data/deliver_results";
import disagree_and_commit from "./data/disagree_and_commit";
import dive_deep from "./data/dive_deep";
import earn_trust from "./data/earn_trust";
import frugality from "./data/frugality";
import hire_and_develop_the_best from "./data/hire_and_develop_the_best";
import insist_on_highest_standards from "./data/insist_on_highest_standards";
import invent_and_simplify_data from "./data/invent_and_simplify";
import learn_and_be_curious_data from "./data/learn_and_be_curious";
import ownership_data from "./data/ownership";
import think_big_data from "./data/think_big";

const principlesData = [
  customer_obsession,              // 1. Obsessão pelo cliente
  ownership_data,                  // 2. Mentalidade de dono  
  invent_and_simplify_data,       // 3. Inventar e simplificar
  are_right_a_lot_data,           // 4. Estar certo, e muito
  learn_and_be_curious_data,      // 5. Aprender e ser curioso
  hire_and_develop_the_best,      // 6. Contratar e desenvolver os melhores
  insist_on_highest_standards,    // 7. Insistir nos mais altos padrões
  think_big_data,                 // 8. Pensar grande
  bias_for_action,                // 9. Ter iniciativa
  frugality,                      // 10. Frugalidade
  earn_trust,                     // 11. Ganhar a confiança
  dive_deep,                      // 12. Mergulhar fundo
  disagree_and_commit,            // 13. Ser firme, discordar e se comprometer
  deliver_results,                // 14. Entregar resultados
  best_employer_data,             // 15. Empenhar-se para ser a melhor empregadora do mundo
  broad_responsibility,           // 16. Sucesso e crescimento trazem maior responsabilidade
];

export default principlesData;
