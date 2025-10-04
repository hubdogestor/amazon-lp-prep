// src/data/consolidatedPrinciples.js
// Novo sistema que importa dados das pastas organizadas

// Importar configurações dos LPs
import are_right_a_lot_config from './are_right_a_lot/are_right_a_lot_config.js';
import best_employer_config from './best_employer/best_employer_config.js';
import bias_for_action_config from './bias_for_action/bias_for_action_config.js';
import broad_responsibility_config from './broad_responsibility/broad_responsibility_config.js';
import customer_obsession_config from './customer_obsession/customer_obsession_config.js';
import deliver_results_config from './deliver_results/deliver_results_config.js';
import disagree_and_commit_config from './disagree_and_commit/disagree_and_commit_config.js';
import dive_deep_config from './dive_deep/dive_deep_config.js';
import earn_trust_config from './earn_trust/earn_trust_config.js';
import frugality_config from './frugality/frugality_config.js';
import hire_and_develop_the_best_config from './hire_and_develop_the_best/hire_and_develop_the_best_config.js';
import insist_on_highest_standards_config from './insist_on_highest_standards/insist_on_highest_standards_config.js';
import invent_and_simplify_config from './invent_and_simplify/invent_and_simplify_config.js';
import learn_and_be_curious_config from './learn_and_be_curious/learn_and_be_curious_config.js';
import ownership_config from './ownership/ownership_config.js';
import think_big_config from './think_big/think_big_config.js';

// Importar cases individuais
// Are Right A Lot
import are_right_a_lot_case1 from './are_right_a_lot/are_right_a_lot_case1.js';
import are_right_a_lot_case2 from './are_right_a_lot/are_right_a_lot_case2.js';
import are_right_a_lot_case3 from './are_right_a_lot/are_right_a_lot_case3.js';

// Best Employer
import best_employer_case1 from './best_employer/best_employer_case1.js';
import best_employer_case2 from './best_employer/best_employer_case2.js';
import best_employer_case3 from './best_employer/best_employer_case3.js';

// Bias For Action
import bias_for_action_case1 from './bias_for_action/bias_for_action_case1.js';
import bias_for_action_case2 from './bias_for_action/bias_for_action_case2.js';
import bias_for_action_case3 from './bias_for_action/bias_for_action_case3.js';
import bias_for_action_case4 from './bias_for_action/bias_for_action_case4.js';

// Broad Responsibility
import broad_responsibility_case1 from './broad_responsibility/broad_responsibility_case1.js';
import broad_responsibility_case2 from './broad_responsibility/broad_responsibility_case2.js';
import broad_responsibility_case3 from './broad_responsibility/broad_responsibility_case3.js';

// Customer Obsession
import customer_obsession_case1 from './customer_obsession/customer_obsession_case1.js';
import customer_obsession_case2 from './customer_obsession/customer_obsession_case2.js';
import customer_obsession_case3 from './customer_obsession/customer_obsession_case3.js';

// Deliver Results
import deliver_results_case1 from './deliver_results/deliver_results_case1.js';
import deliver_results_case2 from './deliver_results/deliver_results_case2.js';
import deliver_results_case3 from './deliver_results/deliver_results_case3.js';
import deliver_results_case4 from './deliver_results/deliver_results_case4.js';

// Disagree And Commit
import disagree_and_commit_case1 from './disagree_and_commit/disagree_and_commit_case1.js';
import disagree_and_commit_case2 from './disagree_and_commit/disagree_and_commit_case2.js';
import disagree_and_commit_case3 from './disagree_and_commit/disagree_and_commit_case3.js';
import disagree_and_commit_case4 from './disagree_and_commit/disagree_and_commit_case4.js';

// Dive Deep
import dive_deep_case1 from './dive_deep/dive_deep_case1.js';
import dive_deep_case2 from './dive_deep/dive_deep_case2.js';
import dive_deep_case3 from './dive_deep/dive_deep_case3.js';
import dive_deep_case4 from './dive_deep/dive_deep_case4.js';

// Earn Trust
import earn_trust_case1 from './earn_trust/earn_trust_case1.js';
import earn_trust_case2 from './earn_trust/earn_trust_case2.js';
import earn_trust_case3 from './earn_trust/earn_trust_case3.js';
import earn_trust_case4 from './earn_trust/earn_trust_case4.js';
import earn_trust_case5 from './earn_trust/earn_trust_case5.js';

// Frugality
import frugality_case1 from './frugality/frugality_case1.js';
import frugality_case2 from './frugality/frugality_case2.js';
import frugality_case3 from './frugality/frugality_case3.js';

// Hire And Develop The Best
import hire_and_develop_the_best_case1 from './hire_and_develop_the_best/hire_and_develop_the_best_case1.js';
import hire_and_develop_the_best_case2 from './hire_and_develop_the_best/hire_and_develop_the_best_case2.js';
import hire_and_develop_the_best_case3 from './hire_and_develop_the_best/hire_and_develop_the_best_case3.js';

// Insist On Highest Standards
import insist_on_highest_standards_case1 from './insist_on_highest_standards/insist_on_highest_standards_case1.js';
import insist_on_highest_standards_case2 from './insist_on_highest_standards/insist_on_highest_standards_case2.js';
import insist_on_highest_standards_case3 from './insist_on_highest_standards/insist_on_highest_standards_case3.js';
import insist_on_highest_standards_case4 from './insist_on_highest_standards/insist_on_highest_standards_case4.js';

// Invent And Simplify
import invent_and_simplify_case1 from './invent_and_simplify/invent_and_simplify_case1.js';
import invent_and_simplify_case2 from './invent_and_simplify/invent_and_simplify_case2.js';
import invent_and_simplify_case3 from './invent_and_simplify/invent_and_simplify_case3.js';
import invent_and_simplify_case4 from './invent_and_simplify/invent_and_simplify_case4.js';
import invent_and_simplify_case5 from './invent_and_simplify/invent_and_simplify_case5.js';
import invent_and_simplify_case6 from './invent_and_simplify/invent_and_simplify_case6.js';

// Learn And Be Curious
import learn_and_be_curious_case1 from './learn_and_be_curious/learn_and_be_curious_case1.js';
import learn_and_be_curious_case2 from './learn_and_be_curious/learn_and_be_curious_case2.js';
import learn_and_be_curious_case3 from './learn_and_be_curious/learn_and_be_curious_case3.js';
import learn_and_be_curious_case4 from './learn_and_be_curious/learn_and_be_curious_case4.js';
import learn_and_be_curious_case5 from './learn_and_be_curious/learn_and_be_curious_case5.js';

// Ownership
import ownership_case1 from './ownership/ownership_case1.js';
import ownership_case2 from './ownership/ownership_case2.js';
import ownership_case3 from './ownership/ownership_case3.js';
import ownership_case4 from './ownership/ownership_case4.js';
import ownership_case5 from './ownership/ownership_case5.js';
import ownership_case6 from './ownership/ownership_case6.js';

// Think Big
import think_big_case1 from './think_big/think_big_case1.js';
import think_big_case2 from './think_big/think_big_case2.js';
import think_big_case3 from './think_big/think_big_case3.js';
import think_big_case4 from './think_big/think_big_case4.js';

// Função para consolidar um LP com seus cases
function consolidateLP(config, cases) {
  return {
    principle: config.principle,
    id: config.id,
    name: config.name,
    cases: cases
  };
}

// Consolidar todos os LPs
const consolidatedPrinciples = [
  consolidateLP(invent_and_simplify_config, [
    invent_and_simplify_case1,
    invent_and_simplify_case2,
    invent_and_simplify_case3,
    invent_and_simplify_case4,
    invent_and_simplify_case5,
    invent_and_simplify_case6
  ]),
  
  consolidateLP(ownership_config, [
    ownership_case1,
    ownership_case2,
    ownership_case3,
    ownership_case4,
    ownership_case5,
    ownership_case6
  ]),
  
  consolidateLP(dive_deep_config, [
    dive_deep_case1,
    dive_deep_case2,
    dive_deep_case3,
    dive_deep_case4
  ]),
  
  consolidateLP(deliver_results_config, [
    deliver_results_case1,
    deliver_results_case2,
    deliver_results_case3,
    deliver_results_case4
  ]),
  
  consolidateLP(earn_trust_config, [
    earn_trust_case1,
    earn_trust_case2,
    earn_trust_case3,
    earn_trust_case4,
    earn_trust_case5
  ]),
  
  consolidateLP(customer_obsession_config, [
    customer_obsession_case1,
    customer_obsession_case2,
    customer_obsession_case3
  ]),
  
  consolidateLP(learn_and_be_curious_config, [
    learn_and_be_curious_case1,
    learn_and_be_curious_case2,
    learn_and_be_curious_case3,
    learn_and_be_curious_case4,
    learn_and_be_curious_case5
  ]),
  
  consolidateLP(insist_on_highest_standards_config, [
    insist_on_highest_standards_case1,
    insist_on_highest_standards_case2,
    insist_on_highest_standards_case3,
    insist_on_highest_standards_case4
  ]),
  
  consolidateLP(are_right_a_lot_config, [
    are_right_a_lot_case1,
    are_right_a_lot_case2,
    are_right_a_lot_case3
  ]),
  
  consolidateLP(bias_for_action_config, [
    bias_for_action_case1,
    bias_for_action_case2,
    bias_for_action_case3,
    bias_for_action_case4
  ]),
  
  consolidateLP(think_big_config, [
    think_big_case1,
    think_big_case2,
    think_big_case3,
    think_big_case4
  ]),
  
  consolidateLP(disagree_and_commit_config, [
    disagree_and_commit_case1,
    disagree_and_commit_case2,
    disagree_and_commit_case3,
    disagree_and_commit_case4
  ]),
  
  consolidateLP(hire_and_develop_the_best_config, [
    hire_and_develop_the_best_case1,
    hire_and_develop_the_best_case2,
    hire_and_develop_the_best_case3
  ]),
  
  consolidateLP(frugality_config, [
    frugality_case1,
    frugality_case2,
    frugality_case3
  ]),
  
  consolidateLP(broad_responsibility_config, [
    broad_responsibility_case1,
    broad_responsibility_case2,
    broad_responsibility_case3
  ]),
  
  consolidateLP(best_employer_config, [
    best_employer_case1,
    best_employer_case2,
    best_employer_case3
  ])
];

export default consolidatedPrinciples;