// src/contexts/AppContext.js
import { createContext, useContext, useReducer, useMemo } from 'react';

// Actions para o reducer
const APP_ACTIONS = {
  SET_SELECTED_PRINCIPLE: 'SET_SELECTED_PRINCIPLE',
  SET_EXPANDED_CASES: 'SET_EXPANDED_CASES',
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
  SET_QUESTION_SEARCH: 'SET_QUESTION_SEARCH',
  SET_TYPICAL_QUESTION_SEARCH: 'SET_TYPICAL_QUESTION_SEARCH',
  SET_SHOW_TOP_CASES: 'SET_SHOW_TOP_CASES',
  SET_SHOW_ICEBREAKER: 'SET_SHOW_ICEBREAKER',
  SET_SHOW_MY_QUESTIONS: 'SET_SHOW_MY_QUESTIONS',
  SET_LANGUAGE: 'SET_LANGUAGE',
  SET_IS_SEARCHING: 'SET_IS_SEARCHING',
  CLEAR_EXPANDED: 'CLEAR_EXPANDED',
  TOGGLE_CASE_EXPANSION: 'TOGGLE_CASE_EXPANSION'
};

// Estado inicial
const initialState = {
  selectedPrinciple: 'all',
  expandedCases: {},
  searchTerm: '',
  questionSearch: '',
  typicalQuestionSearch: '',
  showTopCases: false,
  showIcebreaker: false,
  showMyQuestions: false,
  language: 'pt',
  isSearching: false
};

// Reducer para gerenciar o estado
function appReducer(state, action) {
  switch (action.type) {
    case APP_ACTIONS.SET_SELECTED_PRINCIPLE:
      return { ...state, selectedPrinciple: action.payload };
      
    case APP_ACTIONS.SET_EXPANDED_CASES:
      return { ...state, expandedCases: action.payload };
      
    case APP_ACTIONS.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
      
    case APP_ACTIONS.SET_QUESTION_SEARCH:
      return { ...state, questionSearch: action.payload };
      
    case APP_ACTIONS.SET_TYPICAL_QUESTION_SEARCH:
      return { ...state, typicalQuestionSearch: action.payload };
      
    case APP_ACTIONS.SET_SHOW_TOP_CASES:
      return { ...state, showTopCases: action.payload };
      
    case APP_ACTIONS.SET_SHOW_ICEBREAKER:
      return { ...state, showIcebreaker: action.payload };
      
    case APP_ACTIONS.SET_SHOW_MY_QUESTIONS:
      return { ...state, showMyQuestions: action.payload };
      
    case APP_ACTIONS.SET_LANGUAGE:
      return { ...state, language: action.payload };
      
    case APP_ACTIONS.SET_IS_SEARCHING:
      return { ...state, isSearching: action.payload };
      
    case APP_ACTIONS.CLEAR_EXPANDED:
      return { ...state, expandedCases: {} };
      
    case APP_ACTIONS.TOGGLE_CASE_EXPANSION:
      return {
        ...state,
        expandedCases: {
          ...state.expandedCases,
          [action.payload]: !state.expandedCases[action.payload]
        }
      };
      
    default:
      return state;
  }
}

// Contexto
const AppContext = createContext();

// Provider component
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Memoized actions para evitar re-renders desnecessários
  const actions = useMemo(() => ({
    setSelectedPrinciple: (principle) => 
      dispatch({ type: APP_ACTIONS.SET_SELECTED_PRINCIPLE, payload: principle }),
    
    setExpandedCases: (cases) => 
      dispatch({ type: APP_ACTIONS.SET_EXPANDED_CASES, payload: cases }),
    
    setSearchTerm: (term) => 
      dispatch({ type: APP_ACTIONS.SET_SEARCH_TERM, payload: term }),
    
    setQuestionSearch: (term) => 
      dispatch({ type: APP_ACTIONS.SET_QUESTION_SEARCH, payload: term }),
    
    setTypicalQuestionSearch: (term) => 
      dispatch({ type: APP_ACTIONS.SET_TYPICAL_QUESTION_SEARCH, payload: term }),
    
    setShowTopCases: (show) => 
      dispatch({ type: APP_ACTIONS.SET_SHOW_TOP_CASES, payload: show }),
    
    setShowIcebreaker: (show) => 
      dispatch({ type: APP_ACTIONS.SET_SHOW_ICEBREAKER, payload: show }),
    
    setShowMyQuestions: (show) => 
      dispatch({ type: APP_ACTIONS.SET_SHOW_MY_QUESTIONS, payload: show }),
    
    setLanguage: (language) => 
      dispatch({ type: APP_ACTIONS.SET_LANGUAGE, payload: language }),
    
    setIsSearching: (searching) => 
      dispatch({ type: APP_ACTIONS.SET_IS_SEARCHING, payload: searching }),
    
    clearExpanded: () => 
      dispatch({ type: APP_ACTIONS.CLEAR_EXPANDED }),
    
    toggleCaseExpansion: (caseId) => 
      dispatch({ type: APP_ACTIONS.TOGGLE_CASE_EXPANSION, payload: caseId })
  }), []);

  const value = useMemo(() => ({
    ...state,
    ...actions
  }), [state, actions]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// Hook personalizado para usar o contexto
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}

export { APP_ACTIONS };
export default AppContext;