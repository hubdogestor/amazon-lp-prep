import { norm } from "./textUtils.js";

export const PT_KEYS = [
  "obsessao pelo cliente",
  "program_management",
  "mentalidade de dono",
  "mergulhar fundo",
  "inventar e simplificar",
  "ganhar a confianca",
  "entregar resultados",
  "stakeholder_management",
  "aprender e ser curioso",
  "ter iniciativa",
  "prioritizing_and_influence",
  "deal_with_ambiguity",
  "ser firme, discordar e se comprometer",
  "insistir nos mais altos padroes",
  "estar certo, e muito",
  "pensar grande",
  "contratar e desenvolver os melhores",
  "frugalidade",
  "sucesso e crescimento trazem maior responsabilidade",
  "empenhar-se para ser a melhor empregadora do mundo",
];

export const PT_LABELS = {
  "obsessao pelo cliente": "Obsessão pelo cliente",
  "program_management": "Gestão de Programas",
  "mentalidade de dono": "Mentalidade de dono",
  "mergulhar fundo": "Mergulhar fundo",
  "inventar e simplificar": "Inventar e simplificar",
  "ganhar a confianca": "Ganhar a confiança",
  "entregar resultados": "Entregar resultados",
  "stakeholder_management": "Gestão de Stakeholders",
  "aprender e ser curioso": "Aprender e ser curioso",
  "ter iniciativa": "Ter iniciativa",
  "prioritizing_and_influence": "Priorizar e Influenciar",
  "deal_with_ambiguity": "Lidar com Ambiguidade",
  "ser firme, discordar e se comprometer": "Ser firme, discordar e se comprometer",
  "insistir nos mais altos padroes": "Insistir nos mais altos padrões",
  "estar certo, e muito": "Estar certo, e muito",
  "pensar grande": "Pensar grande",
  "contratar e desenvolver os melhores": "Contratar e desenvolver os melhores",
  frugalidade: "Frugalidade",
  "sucesso e crescimento trazem maior responsabilidade":
    "Sucesso e crescimento trazem maior responsabilidade",
  "empenhar-se para ser a melhor empregadora do mundo":
    "Empenhar-se para ser a melhor empregadora do mundo",
};

export const EN_LABELS_FROM_PT = {
  [PT_KEYS[0]]: "Customer Obsession",
  [PT_KEYS[1]]: "Program Management",
  [PT_KEYS[2]]: "Ownership",
  [PT_KEYS[3]]: "Dive Deep",
  [PT_KEYS[4]]: "Invent and Simplify",
  [PT_KEYS[5]]: "Earn Trust",
  [PT_KEYS[6]]: "Deliver Results",
  [PT_KEYS[7]]: "Stakeholder Management",
  [PT_KEYS[8]]: "Learn and Be Curious",
  [PT_KEYS[9]]: "Bias for Action",
  [PT_KEYS[10]]: "Prioritizing and Influence",
  [PT_KEYS[11]]: "Deal with Ambiguity",
  [PT_KEYS[12]]: "Have Backbone; Disagree and Commit",
  [PT_KEYS[13]]: "Insist on the Highest Standards",
  [PT_KEYS[14]]: "Are Right, A Lot",
  [PT_KEYS[15]]: "Think Big",
  [PT_KEYS[16]]: "Hire and Develop the Best",
  [PT_KEYS[17]]: "Frugality",
  [PT_KEYS[18]]: "Success and Scale Bring Broad Responsibility",
  [PT_KEYS[19]]: "Strive to be Earth's Best Employer",
};

export const ORDER_PT = PT_KEYS;
export const ORDER_EN = PT_KEYS.map((key) => key);

export const getDisplayName = (p, lang) => {
  const k = norm(p?.name);
  if (lang === "pt") return PT_LABELS[k] || p.name;
  return EN_LABELS_FROM_PT[k] || p.name;
};

export const sortPrinciples = (arr, lang) => {
  const order = lang === "pt" ? ORDER_PT : ORDER_EN;
  return [...arr].sort((a, b) => {
    const ia = order.indexOf(norm(a.name));
    const ib = order.indexOf(norm(b.name));
    const va = ia === -1 ? 999 : ia;
    const vb = ib === -1 ? 999 : ib;
    return va - vb || (a.name || "").localeCompare(b.name || "");
  });
};