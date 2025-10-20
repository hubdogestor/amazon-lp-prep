import { norm } from "./textUtils.js";

export const PT_KEYS = [
  "customer_obsession",
  "ownership",
  "program_management",
  // --- divider ---
  "dive_deep",
  "invent_and_simplify",
  // --- divider ---
  "earn_trust",
  "deliver_results",
  "stakeholder_management",
  // --- divider ---
  "learn_and_be_curious",
  "bias_for_action",
  "prioritizing_and_influence",
  // --- divider ---
  "disagree_and_commit",
  "insist_on_highest_standards",
  "deal_with_ambiguity",
  // --- divider ---
  "are_right_a_lot",
  "think_big",
  "hire_and_develop_the_best",
  "frugality",
  "broad_responsibility",
  "best_employer",
];

export const PT_LABELS = {
  "customer_obsession": "Obsessão pelo Cliente",
  "program_management": "Gestão de Programas",
  "ownership": "Mentalidade de Dono",
  "dive_deep": "Mergulhar Fundo",
  "invent_and_simplify": "Inventar e Simplificar",
  "earn_trust": "Ganhar Confiança",
  "deliver_results": "Entregar Resultados",
  "stakeholder_management": "Gestão de Stakeholders",
  "learn_and_be_curious": "Aprender e Ser Curioso",
  "bias_for_action": "Ter Iniciativa",
  "prioritizing_and_influence": "Priorizar e Influenciar Decisões",
  "deal_with_ambiguity": "Lidar com Ambiguidade",
  "disagree_and_commit": "Ser firme, discordar e se comprometer",
  "insist_on_highest_standards": "Insistir nos Mais Altos Padrões",
  "are_right_a_lot": "Estar certo, e muito",
  "think_big": "Pensar Grande",
  "hire_and_develop_the_best": "Contratar e Desenvolver os Melhores",
  "frugality": "Frugalidade",
  "broad_responsibility": "Sucesso e crescimento trazem maior responsabilidade",
  "best_employer": "Empenhar-se para ser a melhor empregadora do mundo",
};

export const EN_LABELS_FROM_PT = {
  "customer_obsession": "Customer Obsession",
  "program_management": "Program Management",
  "ownership": "Ownership",
  "dive_deep": "Dive Deep",
  "invent_and_simplify": "Invent and Simplify",
  "earn_trust": "Earn Trust",
  "deliver_results": "Deliver Results",
  "stakeholder_management": "Stakeholder Management",
  "learn_and_be_curious": "Learn and Be Curious",
  "bias_for_action": "Bias for Action",
  "prioritizing_and_influence": "Prioritizing and Influence Decisions",
  "deal_with_ambiguity": "Deal with Ambiguity",
  "disagree_and_commit": "Have Backbone; Disagree and Commit",
  "insist_on_highest_standards": "Insist on the Highest Standards",
  "are_right_a_lot": "Are Right, A Lot",
  "think_big": "Think Big",
  "hire_and_develop_the_best": "Hire and Develop the Best",
  "frugality": "Frugality",
  "broad_responsibility": "Success and Scale Bring Broad Responsibility",
  "best_employer": "Strive to be Earth's Best Employer",
};

export const ORDER_PT = PT_KEYS;
export const ORDER_EN = PT_KEYS.map((key) => key);

export const getDisplayName = (p, lang) => {
  const k = p?.id;
  if (lang === "pt") {
    return PT_LABELS[k] || p.name;
  }
  // Para 'en', a nova lógica em usePrinciplesData já define 'name' e 'name_en'
  return p?.principle?.name_en || EN_LABELS_FROM_PT[k] || p.name;
};

export const sortPrinciples = (arr, lang) => {
  const order = lang === "pt" ? ORDER_PT : ORDER_EN;
  return [...arr].sort((a, b) => {
    const ia = order.indexOf(a.id);
    const ib = order.indexOf(b.id);
    const va = ia === -1 ? 999 : ia;
    const vb = ib === -1 ? 999 : ib;
    return va - vb || (a.id || "").localeCompare(b.id || "");
  });
};