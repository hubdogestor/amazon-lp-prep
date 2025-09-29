// src/data_principles.js
// Consolidates leadership principles data from individual modules

import are_right_a_lot from "./data/are_right_a_lot";
import best_employer_data from "./data/best_employer";
import bias_for_action from "./data/bias_for_action";
import broad_responsibility from "./data/broad_responsibility";
import customer_obsession from "./data/customer_obsession";
import dataStructure from "./data/dataStructure";
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
  are_right_a_lot,
  best_employer_data,
  bias_for_action,
  broad_responsibility,
  customer_obsession,
  dataStructure, // ← normalizado
  deliver_results,
  disagree_and_commit,
  dive_deep,
  earn_trust,
  frugality,
  hire_and_develop_the_best,
  insist_on_highest_standards,
  invent_and_simplify_data,
  learn_and_be_curious_data,
  ownership_data,
  think_big_data,
];

export default principlesData;
