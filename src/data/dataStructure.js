// Data structure definitions for Amazon Leadership Principles app
// This file defines the expected structure for external JSON imports

const dataStructure = {
  id: "structure",
  title: {
    pt: "Estrutura de Dados",
    en: "Data Structure"
  },
  description: {
    pt: "Define a estrutura de dados padrao para o aplicativo",
    en: "Defines the standard data structure for the application"
  },
  cases: []
};

export const defaultIcebreaker = {
  pt: "Dados do icebreaker serao carregados aqui...",
  en: "Icebreaker data will be loaded here..."
};

export const defaultPrinciples = [
  {
    id: "loading",
    title: {
      pt: "Carregando Principios de Lideranca...",
      en: "Loading Leadership Principles..."
    },
    description: {
      pt: "Os dados dos principios serao importados de arquivos externos.",
      en: "Principles data will be imported from external files."
    },
    cases: []
  }
];

export const validateIcebreakerData = (data) => {
  return data &&
         typeof data === 'object' &&
         typeof data.pt === 'string' &&
         typeof data.en === 'string';
};

export const validatePrinciplesData = (data) => {
  return Array.isArray(data) &&
         data.every(principle =>
           principle.id &&
           principle.title &&
           principle.title.pt &&
           principle.title.en &&
           principle.description &&
           principle.description.pt &&
           principle.description.en &&
           Array.isArray(principle.cases)
         );
};

module.exports = dataStructure;
