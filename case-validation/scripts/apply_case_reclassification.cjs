#!/usr/bin/env node

/**
 * Script de Atualização de Cases
 * Aplica classificação: isTopCase e isGoodCase
 */

const fs = require("fs");
const path = require("path");

const updates = [
  { lpId: "customer_obsession", file: "customer_obsession_case2.js", isTopCase: true, isGoodCase: false },
  { lpId: "ownership", file: "ownership_case1.js", isTopCase: true, isGoodCase: false },
  { lpId: "are_right_a_lot", file: "are_right_a_lot_case1.js", isTopCase: true, isGoodCase: false },
  { lpId: "learn_and_be_curious", file: "learn_and_be_curious_case4.js", isTopCase: true, isGoodCase: false },
  { lpId: "hire_and_develop_the_best", file: "hire_and_develop_the_best_case3.js", isTopCase: true, isGoodCase: false },
  { lpId: "insist_on_highest_standards", file: "insist_on_highest_standards_case2.js", isTopCase: true, isGoodCase: false },
  { lpId: "bias_for_action", file: "bias_for_action_case4.js", isTopCase: true, isGoodCase: false },
  { lpId: "frugality", file: "frugality_case2.js", isTopCase: true, isGoodCase: false },
  { lpId: "earn_trust", file: "earn_trust_case4.js", isTopCase: true, isGoodCase: false },
  { lpId: "dive_deep", file: "dive_deep_case1.js", isTopCase: true, isGoodCase: false },
  { lpId: "broad_responsibility", file: "broad_responsibility_case3.js", isTopCase: true, isGoodCase: false },
  { lpId: "think_big", file: "think_big_case2.js", isTopCase: true, isGoodCase: false },
  { lpId: "best_employer", file: "best_employer_case3.js", isTopCase: true, isGoodCase: false },
  { lpId: "disagree_and_commit", file: "disagree_and_commit_case3.js", isTopCase: true, isGoodCase: false },
  { lpId: "ownership", file: "ownership_case4.js", isTopCase: false, isGoodCase: true },
  { lpId: "ownership", file: "ownership_case5.js", isTopCase: false, isGoodCase: true },
  { lpId: "are_right_a_lot", file: "are_right_a_lot_case3.js", isTopCase: false, isGoodCase: true },
  { lpId: "learn_and_be_curious", file: "learn_and_be_curious_case3.js", isTopCase: false, isGoodCase: true },
  { lpId: "hire_and_develop_the_best", file: "hire_and_develop_the_best_case2.js", isTopCase: false, isGoodCase: true },
  { lpId: "insist_on_highest_standards", file: "insist_on_highest_standards_case1.js", isTopCase: false, isGoodCase: true },
  { lpId: "bias_for_action", file: "bias_for_action_case1.js", isTopCase: false, isGoodCase: true },
  { lpId: "frugality", file: "frugality_case1.js", isTopCase: false, isGoodCase: true },
  { lpId: "earn_trust", file: "earn_trust_case1.js", isTopCase: false, isGoodCase: true },
  { lpId: "dive_deep", file: "dive_deep_case2.js", isTopCase: false, isGoodCase: true },
  { lpId: "dive_deep", file: "dive_deep_case3.js", isTopCase: false, isGoodCase: true },
  { lpId: "think_big", file: "think_big_case3.js", isTopCase: false, isGoodCase: true },
  { lpId: "best_employer", file: "best_employer_case1.js", isTopCase: false, isGoodCase: true },
  { lpId: "disagree_and_commit", file: "disagree_and_commit_case1.js", isTopCase: false, isGoodCase: true },
  { lpId: "disagree_and_commit", file: "disagree_and_commit_case4.js", isTopCase: false, isGoodCase: true },
  { lpId: "customer_obsession", file: "customer_obsession_case1.js", isTopCase: false, isGoodCase: false },
  { lpId: "customer_obsession", file: "customer_obsession_case3.js", isTopCase: false, isGoodCase: false },
  { lpId: "ownership", file: "ownership_case2.js", isTopCase: false, isGoodCase: false },
  { lpId: "ownership", file: "ownership_case3.js", isTopCase: false, isGoodCase: false },
  { lpId: "ownership", file: "ownership_case6.js", isTopCase: false, isGoodCase: false },
  { lpId: "are_right_a_lot", file: "are_right_a_lot_case2.js", isTopCase: false, isGoodCase: false },
  { lpId: "learn_and_be_curious", file: "learn_and_be_curious_case1.js", isTopCase: false, isGoodCase: false },
  { lpId: "learn_and_be_curious", file: "learn_and_be_curious_case2.js", isTopCase: false, isGoodCase: false },
  { lpId: "learn_and_be_curious", file: "learn_and_be_curious_case5.js", isTopCase: false, isGoodCase: false },
  { lpId: "hire_and_develop_the_best", file: "hire_and_develop_the_best_case1.js", isTopCase: false, isGoodCase: false },
  { lpId: "insist_on_highest_standards", file: "insist_on_highest_standards_case3.js", isTopCase: false, isGoodCase: false },
  { lpId: "insist_on_highest_standards", file: "insist_on_highest_standards_case4.js", isTopCase: false, isGoodCase: false },
  { lpId: "bias_for_action", file: "bias_for_action_case2.js", isTopCase: false, isGoodCase: false },
  { lpId: "bias_for_action", file: "bias_for_action_case3.js", isTopCase: false, isGoodCase: false },
  { lpId: "frugality", file: "frugality_case3.js", isTopCase: false, isGoodCase: false },
  { lpId: "earn_trust", file: "earn_trust_case2.js", isTopCase: false, isGoodCase: false },
  { lpId: "earn_trust", file: "earn_trust_case3.js", isTopCase: false, isGoodCase: false },
  { lpId: "earn_trust", file: "earn_trust_case5.js", isTopCase: false, isGoodCase: false },
  { lpId: "dive_deep", file: "dive_deep_case4.js", isTopCase: false, isGoodCase: false },
  { lpId: "broad_responsibility", file: "broad_responsibility_case1.js", isTopCase: false, isGoodCase: false },
  { lpId: "broad_responsibility", file: "broad_responsibility_case2.js", isTopCase: false, isGoodCase: false },
  { lpId: "think_big", file: "think_big_case1.js", isTopCase: false, isGoodCase: false },
  { lpId: "think_big", file: "think_big_case4.js", isTopCase: false, isGoodCase: false },
  { lpId: "best_employer", file: "best_employer_case2.js", isTopCase: false, isGoodCase: false },
  { lpId: "disagree_and_commit", file: "disagree_and_commit_case2.js", isTopCase: false, isGoodCase: false },
];

console.log("🔄 Atualizando cases...");

for (const update of updates) {
  const filePath = path.join(__dirname, `../../src/data/${update.lpId}/${update.file}`);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, "utf-8");

  // Atualizar isTopCase
  content = content.replace(/isTopCase:\s*(true|false)/g, `isTopCase: ${update.isTopCase}`);

  // Adicionar ou atualizar isGoodCase
  if (/isGoodCase:\s*(true|false)/.test(content)) {
    content = content.replace(/isGoodCase:\s*(true|false)/g, `isGoodCase: ${update.isGoodCase}`);
  } else {
    content = content.replace(/isTopCase:\s*(true|false)/g, `isTopCase: ${update.isTopCase},\n  isGoodCase: ${update.isGoodCase}`);
  }

  fs.writeFileSync(filePath, content);
  console.log(`✅ ${update.lpId}/${update.file}`);
}

console.log("\n✅ Atualização concluída!");
