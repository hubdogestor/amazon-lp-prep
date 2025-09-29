// Data structure definitions for Amazon Leadership Principles app
// This file defines the expected structure for external JSON imports

/**
 * Expected structure for data_icebreaker.json
 */
export const icebreakerStructure = {
  pt: "String - Icebreaker content in Portuguese",
  en: "String - Icebreaker content in English"
};

/**
 * Expected structure for data_principles.json
 */
export const principlesStructure = [
  {
    id: "String - Unique identifier (e.g., 'customer-obsession')",
    title: {
      pt: "String - Title in Portuguese",
      en: "String - Title in English"
    },
    description: {
      pt: "String - Description in Portuguese", 
      en: "String - Description in English"
    },
    cases: [
      {
        id: "String - Unique case identifier",
        title: {
          pt: "String - Case title in Portuguese",
          en: "String - Case title in English"
        },
        storytelling: {
          pt: {
            situation: "String - Situation description",
            task: "String - Task description", 
            action: "String - Action taken",
            result: "String - Result achieved",
            learning: "String - Learning/reflection"
          },
          en: {
            situation: "String - Situation description",
            task: "String - Task description",
            action: "String - Action taken", 
            result: "String - Result achieved",
            learning: "String - Learning/reflection"
          }
        },
        fupQuestions: [
          {
            id: "String - Unique question identifier",
            question: {
              pt: "String - Follow-up question in Portuguese",
              en: "String - Follow-up question in English"
            },
            answer: {
              pt: "String - Answer in Portuguese",
              en: "String - Answer in English"
            }
          }
        ]
      }
    ]
  }
];

/**
 * Default/fallback data when external files are not loaded
 */
export const defaultIcebreaker = {
  pt: "Dados do icebreaker serão carregados aqui...",
  en: "Icebreaker data will be loaded here..."
};

export const defaultPrinciples = [
  {
    id: "loading",
    title: {
      pt: "Carregando Princípios de Liderança...",
      en: "Loading Leadership Principles..."
    },
    description: {
      pt: "Os dados dos princípios serão importados de arquivos externos.",
      en: "Principles data will be imported from external files."
    },
    cases: []
  }
];

/**
 * Validation functions for imported data
 */
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
