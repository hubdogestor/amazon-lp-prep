import { getDisplayName as getDisplayNameUtil, sortPrinciples as sortPrinciplesUtil } from "./caseUtils.js";

export const PT_KEYS = [
  "inventar e simplificar",
  "mentalidade de dono",
  "mergulhar fundo",
  "entregar resultados",
  "ganhar a confianca",
  "obsessao pelo cliente",
  "aprender e ser curioso",
  "insistir nos mais altos padroes",
  "estar certo, e muito",
  "ter iniciativa",
  "pensar grande",
  "ser firme, discordar e se comprometer",
  "contratar e desenvolver os melhores",
  "frugalidade",
  "sucesso e crescimento trazem maior responsabilidade",
  "empenhar-se para ser a melhor empregadora do mundo",
];

export const PT_LABELS = {
  "inventar e simplificar": "Inventar e simplificar",
  "mentalidade de dono": "Mentalidade de dono",
  "mergulhar fundo": "Mergulhar fundo",
  "entregar resultados": "Entregar resultados",
  "ganhar a confianca": "Ganhar a confidência",
  "obsessao pelo cliente": "Obsessão pelo cliente",
  "aprender e ser curioso": "Aprender e ser curioso",
  "insistir nos mais altos padroes": "Insistir nos mais altos padrões",
  "estar certo, e muito": "Estar certo, e muito",
  "ter iniciativa": "Ter iniciativa",
  "pensar grande": "Pensar grande",
  "ser firme, discordar e se comprometer": "Ser firme, discordar e se comprometer",
  "contratar e desenvolver os melhores": "Contratar e desenvolver os melhores",
  frugalidade: "Frugalidade",
  "sucesso e crescimento trazem maior responsabilidade":
    "Sucesso e crescimento trazem maior responsabilidade",
  "empenhar-se para ser a melhor empregadora do mundo":
    "Empenhar-se para ser a melhor empregadora do mundo",
};

export const EN_LABELS_FROM_PT = {
  [PT_KEYS[0]]: "Invent and Simplify",
  [PT_KEYS[1]]: "Ownership",
  [PT_KEYS[2]]: "Dive Deep",
  [PT_KEYS[3]]: "Deliver Results",
  [PT_KEYS[4]]: "Earn Trust",
  [PT_KEYS[5]]: "Customer Obsession",
  [PT_KEYS[6]]: "Learn and Be Curious",
  [PT_KEYS[7]]: "Insist on the Highest Standards",
  [PT_KEYS[8]]: "Are Right, A Lot",
  [PT_KEYS[9]]: "Bias for Action",
  [PT_KEYS[10]]: "Think Big",
  [PT_KEYS[11]]: "Have Backbone; Disagree and Commit",
  [PT_KEYS[12]]: "Hire and Develop the Best",
  [PT_KEYS[13]]: "Frugality",
  [PT_KEYS[14]]: "Success and Scale Bring Broad Responsibility",
  [PT_KEYS[15]]: "Strive to be Earth's Best Employer",
};

export const ORDER_PT = PT_KEYS;
export const ORDER_EN = PT_KEYS.map((key) => key);

export const getDisplayName = (principle, lang) =>
  getDisplayNameUtil(principle, lang, PT_LABELS, EN_LABELS_FROM_PT);

export const sortPrinciples = (principles, lang) =>
  sortPrinciplesUtil(principles, lang, ORDER_PT, ORDER_EN);