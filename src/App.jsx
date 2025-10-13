import { useMemo, useState, useEffect, useCallback, useRef } from "react";
import { Search, Copy, Check, Circle, CheckCircle2 } from "lucide-react";
import icebreakerData from "./data/icebreaker.js";
import myQuestionsData from "./data/myQuestions.js";
import typicalQuestions from "./data/typicalQuestions.js";
import { questionsToCasesMapping } from "./data/questionsToCasesMapping.js";
import { usePrinciplesData } from "./hooks/usePrinciplesData.js";
import { HighlightableText } from "./components/HighlightableText.jsx";
import { useDebounce } from "./hooks/useDebounce.js";
import { useHighlight } from "./hooks/useHighlight.js";
import {
  slugify,
  norm
} from "./utils/textUtils.js";
import {
  isTopCase,
  getCaseBaseTitle as getCaseBaseTitleUtil,
  getDisplayCaseTitle as getDisplayCaseTitleUtil,
  getCaseFups,
  getDisplayName as getDisplayNameUtil,
  sortPrinciples as sortPrinciplesUtil,
} from "./utils/caseUtils.js";
import {
  TIMER_DEFAULT_SECONDS,
  FUP_SCROLL_DELAY,
  CASE_EXPAND_DELAY,
  DEBOUNCE_SEARCH_DELAY,
} from "./constants.js";
import "./App.css";

// ---------- Labels & Ordem ----------
const PT_KEYS = [
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

const PT_LABELS = {
  "inventar e simplificar": "Inventar e simplificar",
  "mentalidade de dono": "Mentalidade de dono",
  "mergulhar fundo": "Mergulhar fundo",
  "entregar resultados": "Entregar resultados",
  "ganhar a confianca": "Ganhar a confiança",
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

const EN_LABELS_FROM_PT = {
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

const ORDER_PT = PT_KEYS;
const ORDER_EN = PT_KEYS.map((k) => k);

// Wrapper functions that use imported utilities
const getDisplayName = (p, lang) => getDisplayNameUtil(p, lang, PT_LABELS, EN_LABELS_FROM_PT);
const sortPrinciples = (arr, lang) => sortPrinciplesUtil(arr, lang, ORDER_PT, ORDER_EN);

// ---------- i18n ----------
const STORAGE_KEYS = {
  usedCases: "alp-used-cases",
  usedQuestions: "alp-used-questions",
  usedIcebreakers: "alp-used-icebreakers",
};

const loadUsedItems = (key) => {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    console.warn("[used-items] Failed to load", key, error);
    return {};
  }
};

const persistUsedItems = (key, value) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("[used-items] Failed to persist", key, error);
  }
};

const TEXTS = {
  pt: {
    kSearch: "CASES 🗂️",
    kFup: "FUP 🔎",
    kTypical: "PERGUNTAS ❓",
    viewDetails: "Ver detalhes",
    close: "Fechar",
    filterAll: "Todos os princípios",
    topCases: "Top Cases",
    icebreaker: "Icebreaker",
    myQuestions: "Minhas Perguntas",
    noResult: "Sem resultados",
    situation: "Situação",
    task: "Tarefa",
    action: "Ação",
    result: "Resultado",
    learning: "Aprendizado",
    timer: "Timer",
  },
  en: {
    kSearch: "CASES 🗂️",
    kFup: "FUP 🔎",
    kTypical: "PERGUNTAS ❓",
    viewDetails: "View details",
    close: "Close",
    filterAll: "All principles",
    topCases: "Top Cases",
    icebreaker: "Icebreaker",
    myQuestions: "My Questions",
    noResult: "No results",
    situation: "Situation",
    task: "Task",
    action: "Action",
    result: "Result",
    learning: "Learning",
    timer: "Timer",
  },
};

// ---------- App ----------
export default function App() {
  const [selectedPrinciple, setSelectedPrinciple] = useState("all");
  const [expandedCases, setExpandedCases] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [questionSearch, setQuestionSearch] = useState("");
  const [typicalQuestionSearch, setTypicalQuestionSearch] = useState("");
  const [showTopCases, setShowTopCases] = useState(false);
  const [showIcebreaker, setShowIcebreaker] = useState(false);
  const [showMyQuestions, setShowMyQuestions] = useState(false);
  const [language, setLanguage] = useState("pt");
  const [isSearching, setIsSearching] = useState(false);
  const [copiedCaseId, setCopiedCaseId] = useState(null);

  // Use debounced search for better performance
  const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_SEARCH_DELAY);
  const debouncedQuestionSearch = useDebounce(questionSearch, DEBOUNCE_SEARCH_DELAY);
  const debouncedTypicalQuestionSearch = useDebounce(typicalQuestionSearch, DEBOUNCE_SEARCH_DELAY);

  // Use highlight hook instead of DOM manipulation
  const {
    highlightedFupId,
    highlightedCaseId,
    highlightedTypicalQuestionId,
    clearHighlights,
    setHighlightedFup,
    setHighlightedCase,
    setHighlightedTypicalQuestion,
  } = useHighlight();

  // Separate highlight terms for each search context
  const [highlightCaseTerm, setHighlightCaseTerm] = useState("");
  const [highlightFupTerm, setHighlightFupTerm] = useState("");
  const [highlightTypicalTerm, setHighlightTypicalTerm] = useState("");

  // Local FUP search per case (formato: { "caseId": "searchTerm" })
  const [caseFupSearchTerms, setCaseFupSearchTerms] = useState({});
  const [caseFupSearchOpen, setCaseFupSearchOpen] = useState({}); // controla visibilidade da busca

  // Local STAR search per case (formato: { "caseId": "searchTerm" })
  const [caseStarSearchTerms, setCaseStarSearchTerms] = useState({});
  const [caseStarSearchOpen, setCaseStarSearchOpen] = useState({}); // controla visibilidade da busca
  const [usedCases, setUsedCases] = useState(() => loadUsedItems(STORAGE_KEYS.usedCases));
  const [usedQuestions, setUsedQuestions] = useState(() => loadUsedItems(STORAGE_KEYS.usedQuestions));
  const [usedIcebreakers, setUsedIcebreakers] = useState(() => loadUsedItems(STORAGE_KEYS.usedIcebreakers));

  useEffect(() => {
    persistUsedItems(STORAGE_KEYS.usedCases, usedCases);
  }, [usedCases]);

  useEffect(() => {
    persistUsedItems(STORAGE_KEYS.usedQuestions, usedQuestions);
  }, [usedQuestions]);

  useEffect(() => {
    persistUsedItems(STORAGE_KEYS.usedIcebreakers, usedIcebreakers);
  }, [usedIcebreakers]);

  const toggleUsedCase = useCallback((caseId) => {
    if (!caseId) return;
    setUsedCases((prev) => {
      const next = { ...prev };
      if (next[caseId]) {
        delete next[caseId];
      } else {
        next[caseId] = true;
      }
      return next;
    });
  }, []);

  const toggleUsedQuestion = useCallback((questionId) => {
    if (!questionId) return;
    setUsedQuestions((prev) => {
      const next = { ...prev };
      if (next[questionId]) {
        delete next[questionId];
      } else {
        next[questionId] = true;
      }
      return next;
    });
  }, []);

  const toggleUsedIcebreaker = useCallback((narrativeId) => {
    if (!narrativeId) return;
    setUsedIcebreakers((prev) => {
      const next = { ...prev };
      if (next[narrativeId]) {
        delete next[narrativeId];
      } else {
        next[narrativeId] = true;
      }
      return next;
    });
  }, []);

  const t = TEXTS[language];
  const rawPrinciplesData = usePrinciplesData();
  const principlesData = useMemo(() => {
    return sortPrinciples(rawPrinciplesData, language);
  }, [rawPrinciplesData, language]);

  const casesByPrinciple = useMemo(() => {
    const map = new Map();
    (principlesData || []).forEach((principle) => {
      const list = Array.isArray(principle.cases) ? principle.cases : [];
      const index = new Map(list.map((item) => [item.id, item]));
      map.set(principle.id, { list, index });
    });
    return map;
  }, [principlesData]);

  const clearExpanded = useCallback(() => setExpandedCases({}), []);

  // Memoize case title functions
  const getCaseBaseTitle = useCallback((c, lang) => {
    return getCaseBaseTitleUtil(c, lang);
  }, []);

  const getDisplayCaseTitle = useCallback((c, lang) => {
    return getDisplayCaseTitleUtil(c, lang);
  }, []);

  const getBestCaseOption = useCallback((principleId, questionIndex) => {
    const principleMapping = questionsToCasesMapping[principleId];
    if (!principleMapping) return null;

    const entry = principleMapping[String(questionIndex)];
    if (!entry || !Array.isArray(entry.options) || entry.options.length === 0) {
      return null;
    }

    const principleCases = casesByPrinciple.get(principleId);
    if (!principleCases) return null;

    const sortedOptions = [...entry.options].sort((a, b) => (b.score ?? 0) - (a.score ?? 0));

    for (const option of sortedOptions) {
      const caseData = principleCases.index.get(option.caseId);
      if (caseData) {
        return { ...option, caseData };
      }
    }

    return null;
  }, [casesByPrinciple]);

  // Get questions that this case answers for a given principle
  const getCaseQuestions = useCallback((caseId, principleId) => {
    const principleMapping = questionsToCasesMapping[principleId];
    if (!principleMapping) return [];

    const questions = typicalQuestions[principleId];
    if (!questions) return [];

    const localizedQuestions = language === "pt" ? questions.pt : questions.en;
    if (!Array.isArray(localizedQuestions)) return [];

    const results = [];

    localizedQuestions.forEach((questionText, index) => {
      const entry = principleMapping[String(index)];
      if (!entry || !Array.isArray(entry.options)) {
        return;
      }

      const match = entry.options.find((option) => option.caseId === caseId);
      if (match) {
        results.push({
          number: index,
          text: questionText || `Question ${index}`,
          score: match.score ?? null,
        });
      }
    });

    return results
      .filter((item) => Boolean(item.text))
      .sort((a, b) => a.number - b.number);
  }, [language]);

  // Show loading state when searching
  useEffect(() => {
    if (searchTerm || questionSearch) {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), DEBOUNCE_SEARCH_DELAY);
      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
    }
  }, [searchTerm, questionSearch]);

  // Filtro principal - now properly memoized
  const filteredPrinciples = useMemo(() => {
    let base = principlesData;

    if (debouncedSearchTerm) {
      const term = norm(debouncedSearchTerm);
      return base
        .map((p) => {
          const hits = (p.cases || []).filter((c) => {
            if (language === "pt") {
              const titleHitPT = norm(getCaseBaseTitle(c, "pt")).includes(term);
              const starlPT = (c && c.pt) || {};
              const starlHitPT = norm(Object.values(starlPT).join(" ")).includes(term);
              return titleHitPT || starlHitPT;
            } else {
              const titleHitEN = norm(getCaseBaseTitle(c, "en")).includes(term);
              const starlEN = (c && c.en) || {};
              const starlHitEN = norm(Object.values(starlEN).join(" ")).includes(term);
              return titleHitEN || starlHitEN;
            }
          });
          if (hits.length > 0 || norm(p.name).includes(term)) {
            return { ...p, cases: hits.length ? hits : p.cases || [] };
          }
          return null;
        })
        .filter(Boolean);
    }

    if (showTopCases) {
      return base
        .map((p) => ({ ...p, cases: (p.cases || []).filter(isTopCase) }))
        .filter((p) => (p.cases || []).length > 0);
    }

    if (selectedPrinciple !== "all") {
      return base.filter((p) => p?.id === selectedPrinciple);
    }

    return base;
  }, [principlesData, selectedPrinciple, showTopCases, debouncedSearchTerm, language, getCaseBaseTitle]);

  const toggleCase = useCallback((caseId, principleId, preserveSearchTerm = false) => {
    if (preserveSearchTerm && searchTerm) {
      setHighlightCaseTerm(searchTerm);
    }

    if (!preserveSearchTerm) {
      setSearchTerm("");
      setHighlightCaseTerm("");
    } else {
      setSearchTerm("");
    }
    setQuestionSearch("");

    setExpandedCases((prev) => {
      const next = {};
      next[caseId] = !prev[caseId];
      return next;
    });
    setSelectedPrinciple(principleId);
  }, [searchTerm]);

  const generatePrompt = useCallback((caseData, principleData, lang) => {
    const isPortuguese = lang === 'pt';
    const caseContent = caseData[lang] || {};
    const fups = getCaseFups(caseData);

    let prompt = '';

    if (isPortuguese) {
      prompt = `# CONTEXTO DE ENTREVISTA - LEADERSHIP PRINCIPLES AMAZON

## Princípio: ${getDisplayName(principleData, lang)}

${principleData.principle ? `**Descrição do Princípio:** ${principleData.principle.description}\n` : ''}

## Case: ${getDisplayCaseTitle(caseData, lang)}

### STAR Framework:

**Situação (Situation):**
${caseContent.s || ''}

**Tarefa (Task):**
${caseContent.t || ''}

**Ação (Action):**
${caseContent.a || ''}

**Resultado (Result):**
${caseContent.r || ''}

**Aprendizado (Learning):**
${caseContent.l || ''}
`;

      if (fups.length > 0) {
        prompt += `\n### Follow-up Questions (FUPs):\n\n`;
        fups.forEach((fup, idx) => {
          const question = fup.q || '';
          const answer = fup.a || '';
          prompt += `**${idx + 1}. ${question}**\n`;
          if (answer) {
            prompt += `${answer}\n\n`;
          } else {
            prompt += '\n';
          }
        });
      }

      prompt += `\n---

**INSTRUÇÕES:**
Estou em uma entrevista para a Amazon e acabei de compartilhar o case acima. Na próxima mensagem, vou enviar a pergunta que o entrevistador me fez. Por favor, me ajude a elaborar uma resposta natural, autêntica e que demonstre os Leadership Principles da Amazon, especialmente "${getDisplayName(principleData, lang)}".

Responda como se você fosse eu, mantendo consistência com os detalhes do case compartilhado acima. Seja específico, use exemplos concretos e demonstre aprendizado.`;

    } else {
      prompt = `# INTERVIEW CONTEXT - AMAZON LEADERSHIP PRINCIPLES

## Principle: ${getDisplayName(principleData, lang)}

${principleData.principle ? `**Principle Description:** ${principleData.principle.description_en || principleData.principle.description}\n` : ''}

## Case: ${getDisplayCaseTitle(caseData, lang)}

### STAR Framework:

**Situation:**
${caseContent.s || ''}

**Task:**
${caseContent.t || ''}

**Action:**
${caseContent.a || ''}

**Result:**
${caseContent.r || ''}

**Learning:**
${caseContent.l || ''}
`;

      if (fups.length > 0) {
        prompt += `\n### Follow-up Questions (FUPs):\n\n`;
        fups.forEach((fup, idx) => {
          const question = fup.q_en || fup.q || '';
          const answer = fup.a_en || fup.a || '';
          prompt += `**${idx + 1}. ${question}**\n`;
          if (answer) {
            prompt += `${answer}\n\n`;
          } else {
            prompt += '\n';
          }
        });
      }

      prompt += `\n---

**INSTRUCTIONS:**
I'm in an interview for Amazon and I've just shared the case above. In my next message, I'll send the question the interviewer asked me. Please help me craft a natural, authentic response that demonstrates Amazon's Leadership Principles, especially "${getDisplayName(principleData, lang)}".

Respond as if you were me, maintaining consistency with the details from the case shared above. Be specific, use concrete examples, and demonstrate learning.`;
    }

    return prompt;
  }, [getDisplayCaseTitle]);

  const copyPromptToClipboard = useCallback(async (caseData, principleData, caseKey) => {
    const prompt = generatePrompt(caseData, principleData, language);

    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedCaseId(caseKey);
      setTimeout(() => setCopiedCaseId(null), 2000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
      alert('Não foi possível copiar para a área de transferência.');
    }
  }, [generatePrompt, language]);

  // Navegar para o case mapeado a partir de uma pergunta típica
  const navigateToMappedCase = useCallback((lpId, questionIndex) => {
    const option = getBestCaseOption(lpId, questionIndex);
    if (!option || !option.caseData) {
      return;
    }

    const caseId = option.caseData.id;

    setExpandedCases({ [caseId]: true });
    setSelectedPrinciple(lpId);

    setTimeout(() => {
      const caseDomId = `case-${slugify(caseId)}`;
      const elem = document.getElementById(caseDomId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setHighlightedCase(caseDomId, 2000);
      }
    }, 100);
  }, [getBestCaseOption, setHighlightedCase]);

  // Toggle busca local de FUPs para um case específico
  const toggleCaseFupSearch = useCallback((caseId) => {
    setCaseFupSearchOpen(prev => ({
      ...prev,
      [caseId]: !prev[caseId]
    }));
    // Limpa o termo de busca ao fechar
    if (caseFupSearchOpen[caseId]) {
      setCaseFupSearchTerms(prev => {
        const newTerms = { ...prev };
        delete newTerms[caseId];
        return newTerms;
      });
    }
  }, [caseFupSearchOpen]);

  // Atualiza termo de busca para um case específico
  const updateCaseFupSearchTerm = useCallback((caseId, term) => {
    setCaseFupSearchTerms(prev => ({
      ...prev,
      [caseId]: term
    }));
  }, []);

  // Filtra FUPs de um case específico baseado no termo de busca local
  const filterCaseFups = useCallback((fups, caseId, lang) => {
    const searchTerm = caseFupSearchTerms[caseId];
    if (!searchTerm || searchTerm.trim() === '') return fups;

    const term = searchTerm.toLowerCase().trim();
    return fups.filter(f => {
      const question = lang === "en" ? (f.q_en || f.q) : f.q;
      const answer = lang === "en" ? (f.a_en || f.a) : f.a;
      return (
        question?.toLowerCase().includes(term) ||
        answer?.toLowerCase().includes(term)
      );
    });
  }, [caseFupSearchTerms]);

  // Toggle busca local no STAR Case para um case específico
  const toggleCaseStarSearch = useCallback((caseId) => {
    setCaseStarSearchOpen(prev => ({
      ...prev,
      [caseId]: !prev[caseId]
    }));
    // Limpa o termo de busca ao fechar
    if (caseStarSearchOpen[caseId]) {
      setCaseStarSearchTerms(prev => {
        const newTerms = { ...prev };
        delete newTerms[caseId];
        return newTerms;
      });
    }
  }, [caseStarSearchOpen]);

  // Atualiza termo de busca STAR para um case específico
  const updateCaseStarSearchTerm = useCallback((caseId, term) => {
    setCaseStarSearchTerms(prev => ({
      ...prev,
      [caseId]: term
    }));
  }, []);

  // Verifica se termo de busca STAR existe em alguma seção do STAR(L)
  const starSectionMatchesTerm = useCallback((caseObj, lang, term) => {
    if (!term || !caseObj || !caseObj[lang]) return true;
    
    const termLower = term.toLowerCase().trim();
    const starData = caseObj[lang];
    
    return (
      starData.s?.toLowerCase().includes(termLower) ||
      starData.t?.toLowerCase().includes(termLower) ||
      starData.a?.toLowerCase().includes(termLower) ||
      starData.r?.toLowerCase().includes(termLower) ||
      starData.l?.toLowerCase().includes(termLower)
    );
  }, []);

  // FUP search results - memoized (multi-word support)
  const fupSearchResults = useMemo(() => {
    if (!debouncedQuestionSearch) return [];

    // Split search into multiple words
    const searchWords = debouncedQuestionSearch.trim().split(/\s+/).filter(w => w.length > 0);
    const searchWordsNorm = searchWords.map(w => norm(w));

    return (principlesData || [])
      .flatMap((p) =>
        (p.cases || []).flatMap((c) => {
          const fups = getCaseFups(c);
          return fups
            .map((f, originalIdx) => ({ p, c, f, originalIdx }))
            .filter(({ f }) => {
              const qTxt = language === "en" ? (f.q_en || f.q || "") : (f.q || "");
              const qTxtNorm = norm(qTxt);
              // Check if ALL words are present
              return searchWordsNorm.every(word => qTxtNorm.includes(word));
            });
        })
      );
  }, [principlesData, debouncedQuestionSearch, language]);

  // Typical question search results - memoized
  const typicalQuestionSearchResults = useMemo(() => {
    if (!debouncedTypicalQuestionSearch) return [];

    // Split search into multiple words
    const searchWords = debouncedTypicalQuestionSearch.trim().split(/\s+/).filter(w => w.length > 0);
    const searchWordsNorm = searchWords.map(w => norm(w));

    return (principlesData || [])
      .flatMap((p) => {
        const questions = typicalQuestions[p.id];
        if (!questions) return [];

        const questionsList = language === "en" ? questions.en : questions.pt;
        return questionsList
          .map((q, idx) => ({ p, q, idx }))
          .filter(({ q }) => {
            const qNorm = norm(q);
            return searchWordsNorm.every(word => qNorm.includes(word));
          });
      });
  }, [principlesData, debouncedTypicalQuestionSearch, language]);

  // Case search results with context - memoized (multi-word support)
  const caseSearchResults = useMemo(() => {
    if (!debouncedSearchTerm || debouncedSearchTerm.length < 2) return [];

    const results = [];
    // Split search into multiple words
    const searchWords = debouncedSearchTerm.trim().split(/\s+/).filter(w => w.length > 0);
    const searchWordsNorm = searchWords.map(w => norm(w));

    (principlesData || []).forEach((p) => {
      (p.cases || []).forEach((c) => {
        const caseContent = language === "en" ? c.en : c.pt;
        if (!caseContent) return;

        // Search in all STAR fields
        const fields = ['s', 't', 'a', 'r', 'l'];
        fields.forEach(field => {
          const text = caseContent[field] || '';
          const textNorm = norm(text);

          // Check if ALL words are present
          const allWordsPresent = searchWordsNorm.every(word => textNorm.includes(word));
          if (!allWordsPresent) return;

          // Find positions of all words
          const wordPositions = searchWordsNorm.map(word => ({
            word,
            index: textNorm.indexOf(word)
          })).filter(wp => wp.index !== -1);

          if (wordPositions.length === 0) return;

          // Find first match position for snippet context
          const firstMatch = Math.min(...wordPositions.map(wp => wp.index));

          // Extract snippet with context (80 chars before/after first match)
          const start = Math.max(0, firstMatch - 80);
          const end = Math.min(text.length, firstMatch + 150);
          let snippet = text.substring(start, end);

          // Add ellipsis
          if (start > 0) snippet = '...' + snippet;
          if (end < text.length) snippet = snippet + '...';

          // Calculate match positions in snippet
          const snippetOffset = start > 0 ? 3 : 0; // Ellipsis offset
          const matches = wordPositions.map(wp => ({
            start: wp.index - start + snippetOffset,
            length: wp.word.length,
            word: wp.word
          }));

          results.push({
            p,
            c,
            snippet,
            field,
            matches,
            searchWords
          });
        });
      });
    });

    return results; // No limit - show all results
  }, [principlesData, debouncedSearchTerm, language]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Cabeçalho Fixo */}
      <header
        id="stickyHeader"
        className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
        role="banner"
      >
        <div className="max-w-[1600px] mx-auto px-6 py-3">
          <div className="grid grid-cols-12 gap-3 items-center">
            {/* Busca por palavras (col-span-2) */}
            <div className="col-span-2">
              <div id="kSearch" className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 z-10" aria-hidden="true" />
                <input
                  type="search"
                  placeholder={t.kSearch}
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    if (e.target.value) {
                      setShowTopCases(false);
                      clearExpanded();
                    }
                  }}
                  onFocus={() => {
                    setQuestionSearch("");
                    setTypicalQuestionSearch("");
                    setHighlightCaseTerm("");
                    setHighlightFupTerm("");
                    setHighlightTypicalTerm("");
                    clearHighlights();
                  }}
                  className="w-full pl-10 pr-4 py-3 text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white text-center"
                  aria-label={t.kSearch}
                  aria-expanded={!!searchTerm && caseSearchResults.length > 0}
                  aria-controls="case-dropdown"
                />
                {searchTerm && caseSearchResults.length > 0 && (
                  <div
                    id="case-dropdown"
                    role="listbox"
                    className="absolute z-20 mt-2 left-0 right-0 min-w-[800px] bg-white shadow-lg border border-slate-200 rounded-lg max-h-96 overflow-auto"
                  >
                    {caseSearchResults.map((result, idx) => {
                      const { p, c, snippet, matches, searchWords } = result;
                      const caseStorageId = c.id || slugify(c.title);
                      const isCaseUsed = !!usedCases[caseStorageId];
                      const toggleTooltip = isCaseUsed
                        ? (language === 'pt' ? 'Remover marca de case usado' : 'Unmark case as used')
                        : (language === 'pt' ? 'Marcar case como usado' : 'Mark case as used');

                      // Build snippet with multiple highlights
                      const renderSnippet = () => {
                        // Sort matches by position
                        const sortedMatches = [...matches].sort((a, b) => a.start - b.start);
                        const parts = [];
                        let lastEnd = 0;

                        sortedMatches.forEach((match, i) => {
                          // Add text before this match
                          if (match.start > lastEnd) {
                            parts.push(
                              <span key={`text-${i}`} className="text-slate-600">
                                {snippet.substring(lastEnd, match.start)}
                              </span>
                            );
                          }
                          // Add highlighted match
                          parts.push(
                            <span key={`match-${i}`} className="bg-amber-200 font-semibold">
                              {snippet.substring(match.start, match.start + match.length)}
                            </span>
                          );
                          lastEnd = match.start + match.length;
                        });

                        // Add remaining text
                        if (lastEnd < snippet.length) {
                          parts.push(
                            <span key="text-end" className="text-slate-600">
                              {snippet.substring(lastEnd)}
                            </span>
                          );
                        }

                        return parts;
                      };

                      return (
                        <div
                          key={`case-result-${idx}`}
                          role="option"
                          tabIndex={0}
                          className="px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-100 last:border-0 focus:bg-slate-100 focus:outline-none"
                          onClick={() => {
                            // Save search words BEFORE clearing (filter words with 3+ chars)
                            const savedSearchWords = searchWords.filter(w => w.length >= 3);

                            setSelectedPrinciple(p.id);
                            setShowTopCases(false);
                            setSearchTerm("");
                            clearExpanded();
                            clearHighlights();

                            setTimeout(() => {
                              setExpandedCases({ [c.id || c.title]: true });
                              setHighlightCaseTerm(savedSearchWords.join(' '));
                              setHighlightFupTerm("");
                              setHighlightTypicalTerm("");

                              const caseDomId = `case-${slugify(c.id || c.title)}`;
                              setHighlightedCase(caseDomId, CASE_EXPAND_DELAY);
                            }, 0);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              e.currentTarget.click();
                            }
                          }}
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-1">
                              <div className="text-sm mb-1 text-slate-600">
                                {renderSnippet()}
                              </div>
                              <div className="text-xs text-slate-500 mt-1">
                                <span className={isCaseUsed ? 'line-through decoration-slate-400 decoration-2 text-slate-500' : 'font-medium text-slate-700'}>
                                  {getDisplayCaseTitle(c, language)}
                                </span>
                                <span className="text-slate-400"> - </span>
                                {getDisplayName(p, language)}
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={(event) => {
                                event.stopPropagation();
                                toggleUsedCase(caseStorageId);
                              }}
                              className={`mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full border text-slate-500 transition ${
                                isCaseUsed
                                  ? 'border-green-300 bg-green-50 text-green-600'
                                  : 'border-slate-200 bg-white hover:bg-slate-50'
                              }`}
                              title={toggleTooltip}
                              aria-label={toggleTooltip}
                              aria-pressed={isCaseUsed}
                            >
                              {isCaseUsed ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Busca por FUPs (col-span-2) */}
            <div className="col-span-2">
              <div id="kFup" className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 z-10" aria-hidden="true" />
                <input
                  type="search"
                  placeholder={t.kFup}
                  value={questionSearch}
                  onChange={(e) => setQuestionSearch(e.target.value)}
                  onFocus={() => {
                    setSearchTerm("");
                    setTypicalQuestionSearch("");
                    setHighlightCaseTerm("");
                    setHighlightFupTerm("");
                    setHighlightTypicalTerm("");
                    clearHighlights();
                  }}
                  className="w-full pl-10 pr-3 py-3 text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white text-center"
                  aria-label={t.kFup}
                  aria-expanded={!!questionSearch}
                  aria-controls="fup-dropdown"
                />
                {questionSearch && (
                  <div
                    id="fup-dropdown"
                    role="listbox"
                    className="absolute z-20 mt-2 left-0 right-0 min-w-[800px] bg-white shadow-lg border border-slate-200 rounded-lg max-h-72 overflow-auto"
                  >
                    {fupSearchResults.map(({ p, c, f, originalIdx }, k) => (
                      <div
                        key={`${p.id}-${slugify(c.id || c.title)}-${originalIdx}-${k}`}
                        role="option"
                        tabIndex={0}
                        className="px-3 py-2 hover:bg-slate-50 cursor-pointer text-sm focus:bg-slate-100 focus:outline-none"
                        onClick={() => {
                          // Save search words BEFORE clearing (filter words with 3+ chars)
                          const searchWords = debouncedQuestionSearch.trim().split(/\s+/).filter(w => w.length >= 3);

                          setSelectedPrinciple(p.id);
                          setShowTopCases(false);
                          setSearchTerm("");
                          clearExpanded();
                          clearHighlights();

                          setTimeout(() => {
                            setExpandedCases({ [c.id || c.title]: true });
                            setQuestionSearch("");
                            setHighlightCaseTerm("");
                            setHighlightFupTerm(searchWords.join(' '));
                            setHighlightTypicalTerm("");

                            const anchorId = `fup-${p.id}-${slugify(c.id || c.title)}-${originalIdx}`;
                            setHighlightedFup(anchorId, FUP_SCROLL_DELAY);
                          }, 0);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            e.currentTarget.click();
                          }
                        }}
                      >
                        <div className="font-medium text-slate-800">
                          <HighlightableText
                            text={language === "en" ? (f.q_en || f.q) : f.q}
                            searchTerm={debouncedQuestionSearch}
                          />
                        </div>
                        <div className="text-slate-500">
                          {getDisplayName(p, language)} - {getDisplayCaseTitle(c, language)}
                        </div>
                      </div>
                    ))}
                    {fupSearchResults.length === 0 && (
                      <div className="px-3 py-2 text-slate-500 text-sm">{t.noResult}</div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Busca por Perguntas Típicas (col-span-2) */}
            <div className="col-span-2">
              <div id="kTypical" className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 z-10" aria-hidden="true" />
                <input
                  type="search"
                  placeholder={t.kTypical}
                  value={typicalQuestionSearch}
                  onChange={(e) => setTypicalQuestionSearch(e.target.value)}
                  onFocus={() => {
                    setSearchTerm("");
                    setQuestionSearch("");
                    setHighlightCaseTerm("");
                    setHighlightFupTerm("");
                    setHighlightTypicalTerm("");
                    clearHighlights();
                  }}
                  className="w-full pl-10 pr-3 py-3 text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white text-center"
                  aria-label={t.kTypical}
                  aria-expanded={!!typicalQuestionSearch}
                  aria-controls="typical-dropdown"
                />
                {typicalQuestionSearch && (
                  <div
                    id="typical-dropdown"
                    role="listbox"
                    className="absolute z-20 mt-2 left-0 right-0 min-w-[800px] bg-white shadow-lg border border-slate-200 rounded-lg max-h-72 overflow-auto"
                  >
                    {typicalQuestionSearchResults.map(({ p, q, idx }, k) => {
                      const questionStorageId = `${p.id}-${idx}`;
                      const isQuestionUsed = !!usedQuestions[questionStorageId];
                      const toggleTooltip = isQuestionUsed
                        ? (language === 'pt' ? 'Remover marca de pergunta usada' : 'Unmark question as used')
                        : (language === 'pt' ? 'Marcar pergunta como usada' : 'Mark question as used');

                      return (
                        <div
                          key={`${p.id}-typical-${idx}-${k}`}
                          role="option"
                          tabIndex={0}
                          className="px-3 py-2 hover:bg-slate-50 cursor-pointer text-sm focus:bg-slate-100 focus:outline-none"
                          onClick={() => {
                            // Save search words BEFORE clearing (filter words with 3+ chars)
                            const searchWords = debouncedTypicalQuestionSearch.trim().split(/\s+/).filter(w => w.length >= 3);

                            setSelectedPrinciple(p.id);
                            setShowTopCases(false);
                            setSearchTerm("");
                            clearExpanded();
                            clearHighlights();

                            setTimeout(() => {
                              setTypicalQuestionSearch("");
                              setHighlightCaseTerm("");
                              setHighlightFupTerm("");
                              setHighlightTypicalTerm(searchWords.join(' '));
                              const anchorId = `typical-q-${p.id}-${idx}`;
                              setHighlightedTypicalQuestion(anchorId, 120);
                            }, 0);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              e.currentTarget.click();
                            }
                          }}
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-1">
                              <div className="font-medium text-slate-800">
                                <HighlightableText
                                  text={q}
                                  searchTerm={debouncedTypicalQuestionSearch}
                                  className={isQuestionUsed ? 'line-through decoration-slate-400 decoration-2 text-slate-500' : ''}
                                />
                              </div>
                              <div className="text-slate-500">{getDisplayName(p, language)}</div>
                            </div>
                            <button
                              type="button"
                              onClick={(event) => {
                                event.stopPropagation();
                                toggleUsedQuestion(questionStorageId);
                              }}
                              className={`mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full border text-slate-500 transition ${
                                isQuestionUsed
                                  ? 'border-green-300 bg-green-50 text-green-600'
                                  : 'border-slate-200 bg-white hover:bg-slate-50'
                              }`}
                              title={toggleTooltip}
                              aria-label={toggleTooltip}
                              aria-pressed={isQuestionUsed}
                            >
                              {isQuestionUsed ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    {typicalQuestionSearchResults.length === 0 && (
                      <div className="px-3 py-2 text-slate-500 text-sm">{t.noResult}</div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Top Cases (col-span-1) */}
            <div className="col-span-1">
              <button
                id="topCasesBtn"
                className={`w-full px-3 py-3 text-base rounded-lg border transition ${
                  showTopCases
                    ? "bg-yellow-100 border-yellow-300 text-yellow-800"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  clearExpanded();
                  clearHighlights();
                  setSearchTerm("");
                  setSelectedPrinciple("all");
                  setShowTopCases((v) => !v);
                }}
                aria-label={`${showTopCases ? 'Hide' : 'Show'} top cases`}
                aria-pressed={showTopCases}
                title="Mostrar apenas Top Cases"
              >
                🎯 {t.topCases}
              </button>
            </div>

            {/* Icebreaker (col-span-1) */}
            <div className="col-span-1">
              <button
                id="icebreakerBtn"
                className="w-full px-3 py-3 text-base rounded-lg border transition bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowIcebreaker(true);
                }}
                aria-label="Open Icebreaker questions"
                title="Perguntas iniciais de rapport"
              >
                💬 {t.icebreaker}
              </button>
            </div>

            {/* Minhas Perguntas (col-span-1) */}
            <div className="col-span-1">
              <button
                id="myQuestionsBtn"
                className="w-full px-3 py-3 text-base rounded-lg border transition bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMyQuestions(true);
                }}
                aria-label="Open my questions for interviewer"
                title="Perguntas para fazer ao entrevistador"
              >
                🤔 {t.myQuestions}
              </button>
            </div>

            {/* Timer (col-span-2) */}
            <div className="col-span-2">
              <HeaderTimer t={t} />
            </div>

            {/* Idioma (col-span-1) */}
            <div className="col-span-1">
              <div id="langBox" className="w-full flex gap-2" role="group" aria-label="Language selection">
                <button
                  className={`flex-1 px-3 py-3 text-base rounded-lg border ${
                    language === "pt" ? "bg-slate-900 text-white" : "bg-white text-slate-700"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLanguage("pt");
                  }}
                  aria-label="Portuguese"
                  aria-pressed={language === "pt"}
                >
                  PT
                </button>
                <button
                  className={`flex-1 px-3 py-3 text-base rounded-lg border ${
                    language === "en" ? "bg-slate-900 text-white" : "bg-white text-slate-700"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLanguage("en");
                  }}
                  aria-label="English"
                  aria-pressed={language === "en"}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Modal Icebreaker */}
      {showIcebreaker && (
        <IcebreakerModal
          language={language}
          onClose={() => setShowIcebreaker(false)}
          usedIcebreakers={usedIcebreakers}
          onToggleUsed={toggleUsedIcebreaker}
        />
      )}

      {/* Modal Minhas Perguntas */}
      {showMyQuestions && (
        <MyQuestionsModal
          language={language}
          onClose={() => setShowMyQuestions(false)}
          usedQuestions={usedQuestions}
          onToggleQuestion={toggleUsedQuestion}
        />
      )}

      {/* Conteúdo - Otimizado para widescreen */}
      <div className="max-w-[2400px] mx-auto px-8 pt-6">
        <div className="grid grid-cols-12 gap-10">
          {/* Sidebar */}
          <aside id="sidebar" className="col-span-12 xl:col-span-2" role="navigation" aria-label="Principles filter">
            {/* Header "Leadership Principles" */}
            <div className="mb-3 pb-2 border-b-2 border-[#FF9900]">
              <h2 className="text-sm font-bold text-[#232F3E] uppercase tracking-wider">
                {language === "pt" ? "Leadership Principles" : "Leadership Principles"}
              </h2>
            </div>

            {/* Botão "Todos os Princípios" - estilo título clicável */}
            <button
              className={`w-full mb-4 px-3 py-2.5 rounded text-base text-left font-bold uppercase tracking-wide transition-all flex items-center gap-2 ${
                selectedPrinciple === "all"
                  ? "bg-[#232F3E] text-white shadow-lg"
                  : "bg-slate-100 text-[#232F3E] hover:bg-slate-200"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPrinciple("all");
                setShowTopCases(false);
                setSearchTerm("");
                setQuestionSearch("");
                setTypicalQuestionSearch("");
                setHighlightCaseTerm("");
                setHighlightFupTerm("");
                setHighlightTypicalTerm("");
                clearHighlights();
                clearExpanded();
              }}
              aria-pressed={selectedPrinciple === "all"}
            >
              <span className="text-lg">🏠</span>
              {t.filterAll}
            </button>

            {/* Botões dos 16 LPs - estilo Amazon com fundo */}
            {(principlesData || []).map((p) => (
              <button
                key={`side-${p.id}`}
                className={`w-full mb-2 px-4 py-2.5 rounded-md text-sm text-left font-medium transition-all shadow-sm ${
                  selectedPrinciple === p.id
                    ? "bg-[#FF9900] text-white shadow-md scale-[1.02]"
                    : "bg-gradient-to-r from-white to-slate-50 border border-slate-200 text-[#232F3E] hover:border-[#FF9900] hover:shadow-md hover:scale-[1.01]"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPrinciple(p.id);
                  setShowTopCases(false);
                  setSearchTerm("");
                  setQuestionSearch(""); // Clear FUP search
                  setTypicalQuestionSearch(""); // Clear Typical Questions search
                  setHighlightCaseTerm("");
                  setHighlightFupTerm("");
                  setHighlightTypicalTerm("");
                  clearHighlights();
                  clearExpanded();
                }}
                aria-pressed={selectedPrinciple === p.id}
              >
                {getDisplayName(p, language)}
              </button>
            ))}
          </aside>

          {/* Main */}
          <main className="col-span-12 xl:col-span-10 space-y-6" role="main">
            {isSearching && (
              <div className="text-center py-4 text-slate-500" role="status" aria-live="polite">
                Buscando...
              </div>
            )}
            {(filteredPrinciples || []).map((principle) => (
              <section key={principle.id} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-3 text-slate-900">{getDisplayName(principle, language)}</h2>
                  {principle.principle && (
                    <p className="text-slate-600 italic leading-relaxed">
                      {language === "en" ? (principle.principle.description_en || principle.principle.description) : principle.principle.description}
                    </p>
                  )}

                  {/* Perguntas Típicas - Amazon Style (azul) - Layout tipo tabela */}
                  {typicalQuestions[principle.id] && (
                    <div className="mt-4 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-lg p-4 shadow-sm">
                      <h3 className="text-sm font-bold text-[#232F3E] mb-3 uppercase tracking-wide flex items-center gap-2">
                        💭 {language === "pt" ? "Perguntas Típicas do Entrevistador" : "Typical Interviewer Questions"}
                        <span className="text-xs font-normal text-gray-500 ml-2">
                          ({language === "pt" ? "Clique para ver o case que responde" : "Click to see the case that answers"})
                        </span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {(language === "en" ? typicalQuestions[principle.id].en : typicalQuestions[principle.id].pt).map((q, qIdx) => {
                          const questionId = `typical-q-${principle.id}-${qIdx}`;
                          const questionStorageId = `${principle.id}-${qIdx}`;
                          const isQuestionUsed = !!usedQuestions[questionStorageId];
                          const isHighlighted = highlightedTypicalQuestionId === questionId;
                          const bestOption = getBestCaseOption(principle.id, qIdx);
                          const hasCase = Boolean(bestOption);
                          const caseScore = bestOption?.score ?? 0;
                          const mappedCaseTitle = bestOption?.caseData
                            ? getDisplayCaseTitle(bestOption.caseData, language)
                            : "";
                          const tooltip = (() => {
                            if (!hasCase) {
                              return language === "pt" ? "Sem case mapeado" : "No case mapped";
                            }
                            const actionLabel = language === "pt" ? "Clique para ver o case" : "Click to see case";
                            if (mappedCaseTitle) {
                              return `${actionLabel} (${mappedCaseTitle} - score: ${caseScore})`;
                            }
                            return `${actionLabel} (score: ${caseScore})`;
                          })();
                          const toggleTooltip = isQuestionUsed
                            ? (language === 'pt' ? 'Remover marca de pergunta usada' : 'Unmark question as used')
                            : (language === 'pt' ? 'Marcar pergunta como usada' : 'Mark question as used');

                          return (
                            <div key={qIdx} className="relative">
                              <button
                                id={questionId}
                                onClick={() => {
                                  if (hasCase) {
                                    navigateToMappedCase(principle.id, qIdx);
                                  }
                                }}
                                disabled={!hasCase}
                                className={`w-full px-3 py-2 border rounded text-xs transition-all duration-300 flex items-center justify-center text-center min-h-[60px] ${
                                  hasCase
                                    ? 'bg-white/80 border-blue-200 text-[#232F3E] hover:bg-blue-50 hover:shadow-md hover:scale-105 cursor-pointer'
                                    : 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
                                } ${
                                  isHighlighted ? 'bg-yellow-200 font-bold shadow-md ring-2 ring-yellow-400' : ''
                                } ${isQuestionUsed ? 'opacity-80' : ''}`}
                                title={tooltip}
                              >
                                <span className="flex items-center gap-1">
                                  {hasCase && <span className="text-green-600 font-bold">V</span>}
                                  <HighlightableText
                                    text={q}
                                    searchTerm={highlightTypicalTerm}
                                    className={isQuestionUsed ? 'line-through decoration-slate-400 decoration-2 text-slate-500' : ''}
                                  />
                                </span>
                              </button>
                              <button
                                type="button"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  toggleUsedQuestion(questionStorageId);
                                }}
                                className={`absolute -top-2 -right-2 inline-flex h-7 w-7 items-center justify-center rounded-full border text-slate-500 shadow-sm transition ${
                                  isQuestionUsed
                                    ? 'border-green-300 bg-green-50 text-green-600'
                                    : 'border-slate-200 bg-white hover:bg-slate-50'
                                }`}
                                title={toggleTooltip}
                                aria-label={toggleTooltip}
                                aria-pressed={isQuestionUsed}
                              >
                                {isQuestionUsed ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {((principle && principle.cases) || []).map((c, idx) => {
                  const caseKey = `${principle.id}-${idx}`;
                  const caseDomId = `case-${slugify(c.id || c.title)}`;
                  const open = !!expandedCases[c.id || c.title];
                  const isHighlighted = highlightedCaseId === caseDomId;
                  const isTop = isTopCase(c);
                  const caseStorageId = c.id || slugify(c.title);
                  const isCaseUsed = !!usedCases[caseStorageId];
                  const caseQuestions = getCaseQuestions(c.id, principle.id);
                  const questionSummaryLabel = language === 'pt' ? 'Responde' : 'Answers';
                  const questionCountLabel = language === 'pt' ? 'pergunta(s)' : 'question(s)';
                  const questionIdList = caseQuestions.map((q) => `Q${q.number}`).join(', ');
                  const questionDetails = caseQuestions.slice(0, 3).map((q) => {
                    const preview = (q.text || '').substring(0, 80);
                    const scoreLabel = q.score != null ? ` (score: ${q.score})` : '';
                    return `Q${q.number}${scoreLabel}: ${preview}...`;
                  }).join('\n');
                  const questionsTooltip = caseQuestions.length > 0
                    ? `${questionSummaryLabel} ${caseQuestions.length} ${questionCountLabel}: ${questionIdList}\n\n${questionDetails}`
                    : language === 'pt' ? 'Nenhuma pergunta mapeada' : 'No questions mapped';
                  const toggleCaseTooltip = isCaseUsed
                    ? (language === 'pt' ? 'Remover marca de case usado' : 'Unmark case as used')
                    : (language === 'pt' ? 'Marcar case como usado' : 'Mark case as used');
                  const usedStarTextClass = isCaseUsed ? 'line-through decoration-slate-400 decoration-2 text-slate-500' : '';
                  const usedFupQuestionClass = isCaseUsed ? 'line-through decoration-slate-400 decoration-2 text-slate-500' : 'text-slate-800';
                  const usedFupAnswerClass = isCaseUsed ? 'line-through decoration-slate-300 decoration-2 text-slate-500' : 'text-slate-600';

                  return (
                    <article
                      key={caseKey}
                      id={caseDomId}
                      className={`bg-gradient-to-br rounded-xl p-0 mb-6 overflow-hidden transition-all duration-300 ${
                        isTop
                          ? 'from-orange-50 to-amber-50 border-4 border-[#FF9900] shadow-lg shadow-orange-200/50 hover:shadow-xl hover:shadow-orange-300/50'
                          : 'from-blue-50 to-sky-50 border-2 border-blue-300 hover:shadow-lg hover:shadow-blue-200/50 hover:border-blue-400'
                      } ${isHighlighted ? 'ring-2 ring-amber-400' : ''} ${isCaseUsed ? 'opacity-80' : ''}`}
                      title={questionsTooltip}
                    >
                      {/* Header clicável (área ampla) */}
                      <header
                        className={`flex items-center justify-between px-5 py-4 cursor-pointer ${
                          open ? "bg-white/80" : "bg-white/60"
                        } hover:bg-white/90 backdrop-blur-sm`}
                        onClick={(e) => {
                          e.stopPropagation();
                          const hasSearchTerm = !!searchTerm;
                          toggleCase(c.id || c.title, principle.id, hasSearchTerm);
                          if (hasSearchTerm) {
                            setHighlightedCase(caseDomId, CASE_EXPAND_DELAY);
                          }
                        }}
                        role="button"
                        tabIndex={0}
                        aria-expanded={open}
                        aria-controls={`case-content-${caseKey}`}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            e.currentTarget.click();
                          }
                        }}
                      >
                        <div className="flex items-center gap-3">
                          {isTop && (
                            <span className="px-3 py-1 bg-[#FF9900] text-white text-[10px] font-bold rounded-full shadow-md animate-pulse">
                              ⭐ TOP CASE
                            </span>
                          )}
                          {!isTop && c.isGoodCase && (
                            <span className="px-2.5 py-0.5 bg-blue-500 text-white text-[10px] font-semibold rounded-full shadow-sm">
                              👍 GOOD CASE
                            </span>
                          )}
                          {caseQuestions.length > 0 && (
                            <span 
                              className="px-2.5 py-0.5 bg-purple-500 text-white text-[10px] font-semibold rounded-full shadow-sm cursor-help"
                              title={questionsTooltip}
                            >
                              💬 {caseQuestions.length} {language === 'pt' ? 'Q' : 'Q'}
                            </span>
                          )}
                          <h3 className={`text-lg font-bold ${isTop ? 'text-[#232F3E]' : 'text-slate-900'} ${isCaseUsed ? 'text-slate-500' : ''}`}>
                            <HighlightableText
                              text={getDisplayCaseTitle(c, language)}
                              searchTerm={highlightCaseTerm}
                              className={isCaseUsed ? 'line-through decoration-2 decoration-slate-500' : ''}
                            />
                          </h3>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleUsedCase(caseStorageId);
                            }}
                            className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-all ${
                              isCaseUsed
                                ? 'bg-green-50 border-green-300 text-green-700'
                                : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'
                            }`}
                            title={toggleCaseTooltip}
                            aria-label={toggleCaseTooltip}
                            aria-pressed={isCaseUsed}
                          >
                            {isCaseUsed ? (<CheckCircle2 className="w-5 h-5" />) : (<Circle className="w-5 h-5" />)}
                          </button>
                          {open && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                copyPromptToClipboard(c, principle, caseKey);
                              }}
                              className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border transition-all ${
                                copiedCaseId === caseKey
                                  ? 'bg-green-50 border-green-300 text-green-700'
                                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                              }`}
                              title={language === 'pt' ? 'Copiar prompt para IA' : 'Copy prompt for AI'}
                              aria-label={language === 'pt' ? 'Gerar e copiar prompt' : 'Generate and copy prompt'}
                            >
                              {copiedCaseId === caseKey ? (
                                <>
                                  <Check className="w-4 h-4" />
                                  <span>{language === 'pt' ? 'Copiado!' : 'Copied!'}</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-4 h-4" />
                                  <span>{language === 'pt' ? 'Gerar Prompt' : 'Generate Prompt'}</span>
                                </>
                              )}                            </button>
                          )}
                          <span className="text-sm text-amber-600 select-none">
                            {open ? t.close : t.viewDetails} ▾
                          </span>
                        </div>

                      </header>

                      {open && (
                        <div
                          id={`case-content-${caseKey}`}
                          className="px-6 pb-6 pt-2 grid grid-cols-1 lg:grid-cols-2 gap-8 text-slate-700 bg-white/40 backdrop-blur-sm"
                        >
                          <div className="space-y-3">
                            {/* Header com botão para abrir busca local no STAR */}
                            <div className="flex flex-col gap-2">
                              <button
                                onClick={() => toggleCaseStarSearch(c.id || slugify(c.title))}
                                className="text-left flex items-center justify-between text-base font-semibold text-slate-800 border-b border-slate-200 pb-1 hover:text-blue-600 transition-colors group"
                              >
                                <span className="flex items-center gap-2">
                                  📋 STAR Case
                                  <span className="text-xs text-slate-500 group-hover:text-blue-500">
                                    {caseStarSearchOpen[c.id || slugify(c.title)] ? '🔍 (busca ativa)' : '(clique para buscar)'}
                                  </span>
                                </span>
                                <span className="text-slate-400 text-sm">
                                  {caseStarSearchOpen[c.id || slugify(c.title)] ? '✕' : '🔎'}
                                </span>
                              </button>

                              {/* Caixa de busca local - aparece ao clicar */}
                              {caseStarSearchOpen[c.id || slugify(c.title)] && (
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 animate-fadeIn">
                                  <input
                                    type="text"
                                    placeholder="Buscar em S.T.A.R.L deste case..."
                                    value={caseStarSearchTerms[c.id || slugify(c.title)] || ''}
                                    onChange={(e) => updateCaseStarSearchTerm(c.id || slugify(c.title), e.target.value)}
                                    className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    autoFocus
                                  />
                                  {caseStarSearchTerms[c.id || slugify(c.title)] && (
                                    <div className="mt-2">
                                      <p className="text-xs text-slate-600">
                                        🔎 Buscando por: <strong>{caseStarSearchTerms[c.id || slugify(c.title)]}</strong>
                                      </p>
                                      {starSectionMatchesTerm(c, language, caseStarSearchTerms[c.id || slugify(c.title)]) ? (
                                        <p className="text-xs text-green-600 font-medium mt-1 bg-green-50 px-2 py-1 rounded">
                                          ✓ Termo encontrado no STAR(L)
                                        </p>
                                      ) : (
                                        <p className="text-xs text-yellow-600 font-medium mt-1 bg-yellow-50 px-2 py-1 rounded">
                                          ⚠️ Termo não encontrado
                                        </p>
                                      )}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>

                            <div className="space-y-3 leading-relaxed text-base">
                              <p>
                                <strong>{t.situation}:</strong>{" "}
                                <HighlightableText
                                  text={(c && c[language] && c[language].s) || ""}
                                  searchTerm={caseStarSearchTerms[c.id || slugify(c.title)] || highlightCaseTerm}
                                  className={usedStarTextClass}
                                />
                              </p>
                              <p>
                                <strong>{t.task}:</strong>{" "}
                                <HighlightableText
                                  text={(c && c[language] && c[language].t) || ""}
                                  searchTerm={caseStarSearchTerms[c.id || slugify(c.title)] || highlightCaseTerm}
                                  className={usedStarTextClass}
                                />
                              </p>
                              <p>
                                <strong>{t.action}:</strong>{" "}
                                <HighlightableText
                                  text={(c && c[language] && c[language].a) || ""}
                                  searchTerm={caseStarSearchTerms[c.id || slugify(c.title)] || highlightCaseTerm}
                                  className={usedStarTextClass}
                                />
                              </p>
                              <p>
                                <strong>{t.result}:</strong>{" "}
                                <HighlightableText
                                  text={(c && c[language] && c[language].r) || ""}
                                  searchTerm={caseStarSearchTerms[c.id || slugify(c.title)] || highlightCaseTerm}
                                  className={usedStarTextClass}
                                />
                              </p>
                              <p>
                                <strong>{t.learning}:</strong>{" "}
                                <HighlightableText
                                  text={(c && c[language] && c[language].l) || ""}
                                  searchTerm={caseStarSearchTerms[c.id || slugify(c.title)] || highlightCaseTerm}
                                  className={usedStarTextClass}
                                />
                              </p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            {/* Header com botão para abrir busca local */}
                            <div className="flex flex-col gap-2">
                              <button
                                onClick={() => toggleCaseFupSearch(c.id || slugify(c.title))}
                                className="text-left flex items-center justify-between text-base font-semibold text-slate-800 border-b border-slate-200 pb-1 hover:text-blue-600 transition-colors group"
                              >
                                <span className="flex items-center gap-2">
                                  ❓ Follow-up Questions
                                  <span className="text-xs text-slate-500 group-hover:text-blue-500">
                                    {caseFupSearchOpen[c.id || slugify(c.title)] ? '🔍 (busca ativa)' : '(clique para buscar)'}
                                  </span>
                                </span>
                                <span className="text-slate-400 text-sm">
                                  {caseFupSearchOpen[c.id || slugify(c.title)] ? '✕' : '🔎'}
                                </span>
                              </button>

                              {/* Caixa de busca local - aparece ao clicar */}
                              {caseFupSearchOpen[c.id || slugify(c.title)] && (
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 animate-fadeIn">
                                  <input
                                    type="text"
                                    placeholder="Buscar nas 10 perguntas deste case..."
                                    value={caseFupSearchTerms[c.id || slugify(c.title)] || ''}
                                    onChange={(e) => updateCaseFupSearchTerm(c.id || slugify(c.title), e.target.value)}
                                    className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    autoFocus
                                  />
                                  {caseFupSearchTerms[c.id || slugify(c.title)] && (
                                    <p className="text-xs text-slate-600 mt-2">
                                      🔎 Buscando por: <strong>{caseFupSearchTerms[c.id || slugify(c.title)]}</strong>
                                    </p>
                                  )}
                                </div>
                              )}
                            </div>

                            {(() => {
                              const allFups = getCaseFups(c);
                              const fups = filterCaseFups(allFups, c.id || slugify(c.title), language);
                              const hasLocalSearch = caseFupSearchTerms[c.id || slugify(c.title)]?.trim();
                              
                              return fups.length > 0 ? (
                                <div>
                                  {hasLocalSearch && (
                                    <p className="text-xs text-green-600 font-medium mb-2 bg-green-50 px-2 py-1 rounded">
                                      ✓ {fups.length} de {allFups.length} pergunta(s) encontrada(s)
                                    </p>
                                  )}
                                  <ul className="list-disc pl-5 space-y-2 text-sm">
                                    {fups.map((f, fIdx) => {
                                    const fupId = `fup-${principle.id}-${slugify(c.id || c.title)}-${fIdx}`;
                                    const question = language === "en" ? (f.q_en || f.q) : f.q;
                                    const answer = language === "en" ? (f.a_en || f.a) : f.a;
                                    const isFupHighlighted = highlightedFupId === fupId;

                                    return (
                                      <li
                                        key={`${slugify(c.id || c.title)}-${fIdx}`}
                                        id={fupId}
                                        className={`flex flex-col gap-1 transition-all ${
                                          isFupHighlighted ? 'ring-2 ring-amber-300 rounded-md bg-amber-50 p-2' : ''
                                        }`}
                                      >
                                        <div className={`font-medium ${
                                          isFupHighlighted ? 'bg-amber-100 px-2 py-1 rounded' : ''
                                        }`}>
                                          <HighlightableText
                                            text={question}
                                            searchTerm={caseFupSearchTerms[c.id || slugify(c.title)] || highlightFupTerm}
                                            className={usedFupQuestionClass}
                                          />
                                        </div>
                                        {answer && (
                                          <div className={`${usedFupAnswerClass} whitespace-pre-line`}>
                                            <HighlightableText
                                              text={answer}
                                              searchTerm={caseFupSearchTerms[c.id || slugify(c.title)] || highlightFupTerm}
                                              className={usedFupAnswerClass}
                                            />
                                          </div>
                                        )}
                                      </li>
                                    );
                                  })}
                                  </ul>
                                </div>
                              ) : hasLocalSearch ? (
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                                  <p className="text-sm text-yellow-800">
                                    ⚠️ Nenhuma pergunta encontrada com o termo: <strong>{caseFupSearchTerms[c.id || slugify(c.title)]}</strong>
                                  </p>
                                  <p className="text-xs text-yellow-700 mt-1">
                                    Tente outro termo ou limpe a busca.
                                  </p>
                                </div>
                              ) : (
                                <div className="text-slate-500 italic">Nenhuma pergunta disponível.</div>
                              );
                            })()}
                          </div>
                        </div>
                      )}
                    </article>
                  );
                })}
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}

// ---------- Subcomponent: Icebreaker Modal ----------
function IcebreakerModal({ language: initialLanguage, onClose, usedIcebreakers = {}, onToggleUsed = () => {} }) {
  const [language, setLanguage] = useState(initialLanguage);
  const data = icebreakerData[language];
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeNarrative, setActiveNarrative] = useState(null);
  const [narrativeFilter, setNarrativeFilter] = useState("");
  const normalizedSearch = narrativeFilter.trim().toLowerCase();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!activeNarrative) {
      containerRef?.current?.focus();
    }
  }, [activeNarrative]);

  useEffect(() => {
    containerRef?.current?.focus();
  }, []);

  // Pega todas as seções (exceto title, subtitle e questions)
  const sections = Object.keys(data)
    .filter(key => !['title', 'subtitle', 'questions'].includes(key))
    .map(key => ({
      id: key,
      data: data[key]
    }));

  const narrativeSuggestions = useMemo(() => {
    if (!normalizedSearch) return [];

    const results = [];

    sections.forEach((section) => {
      const versions = section.data?.versions || [];
      versions.forEach((version) => {
        const plainContent = version.content
          ? version.content.replace(/\*\*[^*]+\*\*/g, '')
          : '';

        const aggregated = [
          section.data?.question,
          section.data?.category,
          version.title,
          version.context,
          plainContent,
          version.hook,
          version.mic_drop,
          Array.isArray(version.tags) ? version.tags.join(' ') : null,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();

        if (!aggregated.includes(normalizedSearch)) {
          return;
        }

        let snippetSource = plainContent || version.context || version.hook || version.mic_drop || version.title || '';
        const lowerSource = snippetSource.toLowerCase();
        let matchIndex = lowerSource.indexOf(normalizedSearch);

        if (matchIndex === -1) {
          snippetSource = (version.context || version.hook || version.mic_drop || version.title || '').toString();
          matchIndex = snippetSource.toLowerCase().indexOf(normalizedSearch);
        }

        const start = matchIndex < 0 ? 0 : Math.max(0, matchIndex - 40);
        const end = matchIndex < 0 ? Math.min(snippetSource.length, 120) : Math.min(snippetSource.length, matchIndex + normalizedSearch.length + 60);
        let snippet = snippetSource.slice(start, end).trim();
        if (start > 0) snippet = `…${snippet}`;
        if (end < snippetSource.length) snippet = `${snippet}…`;

        results.push({
          sectionId: section.id,
          sectionTitle: section.data?.question,
          sectionCategory: section.data?.category,
          version,
          snippet,
        });
      });
    });

    return results.slice(0, 12);
  }, [normalizedSearch, sections]);

  const filteredSections = sections
    .map((section) => {
      if (!normalizedSearch) {
        return section;
      }

      const versions = section.data.versions || [];
      const filteredVersions = versions.filter((version) => {
        const haystack = [
          section.data.question,
          section.data.category,
          version.title,
          version.context,
          version.content,
          version.hook,
          version.mic_drop,
          Array.isArray(version.tags) ? version.tags.join(' ') : null,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();

        return haystack.includes(normalizedSearch);
      });

      if (filteredVersions.length > 0) {
        return {
          ...section,
          data: {
            ...section.data,
            versions: filteredVersions,
          },
        };
      }

      return null;
    })
    .filter(Boolean);

  useEffect(() => {
    if (expandedSection && !filteredSections.find((section) => section.id === expandedSection)) {
      setExpandedSection(null);
    }
  }, [expandedSection, filteredSections]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const handleClose = useCallback(() => {
    setActiveNarrative(null);
    setNarrativeFilter("");
    setExpandedSection(null);
    onClose();
  }, [onClose]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="icebreaker-title"
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.stopPropagation();
          if (activeNarrative) {
            setActiveNarrative(null);
          } else {
            handleClose();
          }
        }
      }}
      tabIndex={-1}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-[95vw] w-full max-h-[90vh] overflow-hidden mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="icebreaker-title" className="text-2xl font-bold text-white flex items-center gap-2">
              💬 {data.title}
            </h2>
            <p className="text-orange-100 text-sm mt-1">{data.subtitle}</p>
          </div>
          <div className="flex w-full flex-wrap items-center gap-3 md:flex-nowrap md:flex-1 md:justify-end">
            <div className="relative flex-1 basis-full md:basis-auto min-w-[260px] md:max-w-none">
              <input
                type="text"
                value={narrativeFilter}
                onChange={(event) => setNarrativeFilter(event.target.value)}
                placeholder={language === 'pt' ? 'Filtrar narrativas...' : 'Filter narratives...'}
                className="bg-white/15 text-white/90 placeholder:text-white/60 w-full pl-4 pr-10 py-2 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/60 transition"
                onClick={(event) => event.stopPropagation()}
              />
              <span className="absolute inset-y-0 right-3 flex items-center text-white/70 pointer-events-none">
                🔍
              </span>
              {normalizedSearch && narrativeSuggestions.length > 0 && (
                <div className="absolute z-50 mt-2 left-0 right-0 min-w-full md:min-w-[520px] lg:min-w-[680px] max-h-80 overflow-auto rounded-xl border border-white/40 bg-white/95 shadow-xl text-slate-700">
                  {narrativeSuggestions.map((item, idx) => {
                    const narrativeId = `${language}-${item.sectionId}-${item.version.id}`;
                    const isNarrativeUsed = !!usedIcebreakers[narrativeId];
                    const snippetClass = isNarrativeUsed ? 'line-through decoration-slate-400 decoration-2 text-slate-500' : 'text-slate-800';
                    const subtitleClass = isNarrativeUsed ? 'line-through decoration-slate-300 text-slate-500' : 'text-slate-500';

                    return (
                      <button
                        key={`${item.sectionId}-${item.version.id}-${idx}`}
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          setExpandedSection(item.sectionId);
                          setActiveNarrative({
                            sectionId: item.sectionId,
                            sectionTitle: item.sectionTitle,
                            sectionCategory: item.sectionCategory,
                            version: item.version,
                            narrativeId,
                          });
                        }}
                        className={`w-full text-left px-4 py-3 border-b border-white/60 last:border-b-0 hover:bg-white transition ${isNarrativeUsed ? 'bg-white/80' : ''}`}
                      >
                        <p className={`text-sm mb-1 leading-snug ${snippetClass}`}>
                          <HighlightableText text={item.snippet} searchTerm={narrativeFilter} className={snippetClass} />
                        </p>
                        <p className={`text-xs ${subtitleClass}`}>
                          {item.sectionTitle} - {item.version.title}
                        </p>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            <button
              onClick={toggleLanguage}
              className="shrink-0 text-white hover:bg-orange-600 rounded-lg px-4 py-2 transition font-semibold flex items-center gap-2"
              aria-label="Toggle language"
            >
              🌐 {language === 'pt' ? 'EN' : 'PT'}
            </button>

            <button
              onClick={handleClose}
              className="shrink-0 text-white hover:bg-orange-600 rounded-lg px-3 py-2 transition text-xl"
              aria-label="Close icebreaker modal"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredSections.length === 0 && (
              <div className="col-span-1 md:col-span-2 border border-dashed border-orange-300 rounded-xl p-6 text-center text-orange-700 bg-orange-50/60">
                {language === 'pt' ? 'Nenhuma narrativa encontrada para esse filtro.' : 'No narratives match this filter.'}
              </div>
            )}
            {filteredSections.map((section) => {
              const sectionData = section.data;
              const isExpanded = expandedSection === section.id;
              
              return (
                <div
                  key={section.id}
                  className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 transition-all"
                >
                  <div
                    className="bg-gradient-to-r from-gray-50 to-white px-5 py-4 cursor-pointer"
                    onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{sectionData.question}</h3>
                        <p className="text-sm text-gray-600 mt-1">{sectionData.category}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                          {sectionData.versions?.length || 0} versões
                        </span>
                        <span className={`text-2xl transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </div>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="p-5 bg-white border-t border-gray-200">
                      <div className="grid md:grid-cols-2 gap-4">
                                                
                        {sectionData.versions?.map((version) => {
                          const hookLabel = language === 'pt' ? 'Gancho' : 'Hook';
                          const micDropLabel = language === 'pt' ? 'Fecho' : 'Mic Drop';
                          const narrativeId = `${language}-${section.id}-${version.id}`;
                          const isNarrativeUsed = !!usedIcebreakers[narrativeId];
                          const toggleTooltip = isNarrativeUsed
                            ? (language === 'pt' ? 'Remover marca de narrativa usada' : 'Unmark icebreaker as used')
                            : (language === 'pt' ? 'Marcar narrativa como usada' : 'Mark icebreaker as used');

                          return (
                            <div key={version.id} className="relative">
                              <button
                                type="button"
                                onClick={() => setActiveNarrative({
                                  sectionId: section.id,
                                  sectionTitle: sectionData.question,
                                  sectionCategory: sectionData.category,
                                  version,
                                  narrativeId,
                                })}
                                className={`w-full text-left border-2 border-gray-200 rounded-lg bg-white hover:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all ${isNarrativeUsed ? 'opacity-80' : ''}`}
                                title={language === 'pt' ? 'Abrir narrativa completa' : 'Open full narrative'}
                              >
                                <div className="p-4 flex flex-col gap-3">
                                  <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-3 mb-2">
                                        {version.badge && (
                                          <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${version.badgeColor}`}>
                                            {version.badge}
                                          </span>
                                        )}
                                        <h4 className={`text-lg font-bold text-gray-900 ${isNarrativeUsed ? 'line-through decoration-slate-500 text-slate-600' : ''}`}>{version.title}</h4>
                                      </div>
                                      {version.context && (
                                        <p className={`text-sm text-gray-600 italic ${isNarrativeUsed ? 'line-through decoration-slate-400 text-gray-500' : ''}`}>
                                          {version.context}
                                        </p>
                                      )}
                                    </div>
                                    <span className="text-xl text-orange-500 pr-8" aria-hidden="true">↗</span>
                                  </div>

                                  {(version.hook || version.mic_drop) && (
                                    <div className="grid md:grid-cols-2 gap-3">
                                      {version.hook && (
                                        <div className="bg-orange-50 rounded-lg p-3">
                                          <p className="font-bold text-orange-700 text-xs mb-1">{hookLabel}</p>
                                          <p className={`text-gray-700 text-xs ${isNarrativeUsed ? 'line-through decoration-slate-400 text-gray-600' : ''}`}>{version.hook}</p>
                                        </div>
                                      )}
                                      {version.mic_drop && (
                                        <div className="bg-blue-50 rounded-lg p-3">
                                          <p className="font-bold text-blue-700 text-xs mb-1">{micDropLabel}</p>
                                          <p className={`text-gray-700 text-xs ${isNarrativeUsed ? 'line-through decoration-slate-400 text-gray-600' : ''}`}>{version.mic_drop}</p>
                                        </div>
                                      )}
                                    </div>
                                  )}

                                  {version.tags && version.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                      {version.tags.map((tag) => (
                                        <span
                                          key={tag}
                                          className={`px-2 py-1 rounded text-xs ${isNarrativeUsed ? 'bg-gray-200 text-gray-500 line-through decoration-slate-400' : 'bg-gray-100 text-gray-600'}`}
                                        >
                                          #{tag}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </button>
                              <button
                                type="button"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  onToggleUsed(narrativeId);
                                }}
                                className="absolute top-3 right-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-slate-500 shadow-sm transition hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-orange-200"
                                title={toggleTooltip}
                                aria-label={toggleTooltip}
                                aria-pressed={isNarrativeUsed}
                              >
                                {isNarrativeUsed ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                              </button>
                            </div>
                          );
                        })}

                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
          <button
            onClick={handleClose}
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-semibold"
          >
            {language === "pt" ? "Fechar" : "Close"}
          </button>
        </div>
        {activeNarrative && (
          <NarrativeModal
            language={language}
            narrative={activeNarrative}
            isUsed={(() => {
              const narrativeId = activeNarrative.narrativeId || `${language}-${activeNarrative.sectionId}-${activeNarrative.version.id}`;
              return !!usedIcebreakers[narrativeId];
            })()}
            onToggleUsed={() => {
              const narrativeId = activeNarrative.narrativeId || `${language}-${activeNarrative.sectionId}-${activeNarrative.version.id}`;
              if (narrativeId) {
                onToggleUsed(narrativeId);
              }
            }}
            onClose={() => setActiveNarrative(null)}
          />
        )}
      </div>
    </div>
  );
}



function NarrativeModal({ narrative, language, onClose, isUsed = false, onToggleUsed }) {
  const modalRef = useRef(null);

  useEffect(() => {
    modalRef.current?.focus();
  }, [narrative]);

  if (!narrative || !narrative.version) return null;

  const { sectionTitle, sectionCategory, version } = narrative;

  const renderRichContent = (value) => {
    if (!value) return null;
    return value.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="text-gray-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const contextLabel = language === 'pt' ? 'Contexto sugerido' : 'Suggested context';
  const hookLabel = language === 'pt' ? 'Gancho' : 'Hook';
  const micDropLabel = language === 'pt' ? 'Fecho' : 'Mic Drop';
  const tagsLabel = language === 'pt' ? 'Temas' : 'Tags';
  const closeLabel = language === 'pt' ? 'Fechar' : 'Close';
  const toggleTooltip = isUsed
    ? (language === 'pt' ? 'Remover marca de narrativa usada' : 'Unmark icebreaker as used')
    : (language === 'pt' ? 'Marcar narrativa como usada' : 'Mark icebreaker as used');
  const contextTextClass = isUsed ? 'line-through decoration-slate-300 text-gray-500' : 'text-gray-700';
  const bodyTextClass = isUsed ? 'line-through decoration-slate-400 decoration-2 text-slate-600' : 'text-gray-700';
  const contentBodyClass = `leading-relaxed whitespace-pre-line space-y-2 ${bodyTextClass}`;
  const hookBodyClass = `text-xs ${bodyTextClass}`;
  const tagClass = isUsed ? 'bg-gray-200 text-gray-500 line-through decoration-slate-400' : 'bg-gray-100 text-gray-600';

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={(event) => {
        event.stopPropagation();
        onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={sectionTitle}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.stopPropagation();
          onClose();
        }
      }}
      tabIndex={-1}
    >
      <div
        className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-5 text-white flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-orange-100">{sectionCategory}</p>
            <h3 className="text-2xl font-bold mt-1">{sectionTitle}</h3>
            <div className="flex items-center gap-3 mt-3">
              {version.badge && (
                <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${version.badgeColor}`}>
                  {version.badge}
                </span>
              )}
              <p className="text-sm text-orange-100">{version.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {onToggleUsed && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onToggleUsed();
                }}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full border shadow-sm transition ${
                  isUsed
                    ? 'border-green-300 bg-white/90 text-green-600'
                    : 'border-white/60 bg-white/20 text-white/80 hover:bg-white/30'
                }`}
                title={toggleTooltip}
                aria-label={toggleTooltip}
                aria-pressed={isUsed}
              >
                {isUsed ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="text-white/80 hover:text-white text-2xl leading-none"
              aria-label={closeLabel}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>

        <div className="px-6 py-6 space-y-5">
          {version.context && (
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">{contextLabel}</p>
              <p className={`text-sm ${contextTextClass}`}>{version.context}</p>
            </div>
          )}

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className={contentBodyClass}>
              {renderRichContent(version.content)}
            </div>
          </div>

          {(version.hook || version.mic_drop) && (
            <div className="grid md:grid-cols-2 gap-4">
              {version.hook && (
                <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                  <p className="text-xs font-semibold uppercase tracking-wide text-orange-700 mb-1">{hookLabel}</p>
                  <p className={hookBodyClass}>{version.hook}</p>
                </div>
              )}
              {version.mic_drop && (
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 mb-1">{micDropLabel}</p>
                  <p className={hookBodyClass}>{version.mic_drop}</p>
                </div>
              )}
            </div>
          )}

          {version.tags && version.tags.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">{tagsLabel}</p>
              <div className="flex flex-wrap gap-2">
                {version.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-1 rounded text-xs ${tagClass}`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------- Subcomponent: My Questions Modal ----------
function MyQuestionsModal({ language: initialLanguage, onClose, usedQuestions = {}, onToggleQuestion = () => {} }) {
  const [language, setLanguage] = useState(initialLanguage);
  const data = myQuestionsData[language];
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (idx) => {
    setExpandedCategories(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="myquestions-title"
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-[95vw] w-full max-h-[90vh] overflow-hidden mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 flex items-center justify-between">
          <h2 id="myquestions-title" className="text-2xl font-bold text-white flex items-center gap-2">
            🤔 {data.title}
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="text-white hover:bg-white/20 rounded-lg px-4 py-2 transition font-semibold flex items-center gap-2"
              aria-label="Toggle language"
            >
              🌐 {language === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-lg px-3 py-2 transition text-xl"
              aria-label="Close my questions modal"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(85vh-80px)]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {data.categories.map((category, catIdx) => {
              const isExpanded = expandedCategories[catIdx];
              return (
                <div
                  key={catIdx}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200 overflow-hidden"
                >
                  <div
                    className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-white/60 transition"
                    onClick={() => toggleCategory(catIdx)}
                  >
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span className="text-2xl">{category.icon}</span>
                      <span>{category.category}</span>
                      <span className="text-sm font-normal text-slate-500">({category.questions.length} perguntas)</span>
                    </h3>
                    <span className="text-sm text-purple-600 select-none">
                      {isExpanded ? (language === "pt" ? "Fechar ▾" : "Close ▾") : (language === "pt" ? "Ver perguntas" : "View questions")}
                    </span>
                  </div>
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 bg-white/40">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {category.questions.map((item, qIdx) => {
                          const questionStorageId = `my-${slugify(category.category)}-${qIdx}`;
                          const isQuestionUsed = !!usedQuestions[questionStorageId];
                          const toggleTooltip = isQuestionUsed
                            ? (language === 'pt' ? 'Remover marca de pergunta usada' : 'Unmark question as used')
                            : (language === 'pt' ? 'Marcar pergunta como usada' : 'Mark question as used');

                          return (
                            <div
                              key={qIdx}
                              className={`relative border-l-4 border-purple-400 pl-4 pr-2 py-3 rounded-lg bg-white/70 shadow-sm ${
                                isQuestionUsed ? 'opacity-80' : ''
                              }`}
                            >
                              <button
                                type="button"
                                onClick={() => onToggleQuestion(questionStorageId)}
                                className={`absolute top-2 right-2 inline-flex h-8 w-8 items-center justify-center rounded-full border transition ${
                                  isQuestionUsed
                                    ? 'border-green-300 bg-green-50 text-green-600'
                                    : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-100'
                                }`}
                                title={toggleTooltip}
                                aria-label={toggleTooltip}
                                aria-pressed={isQuestionUsed}
                              >
                                {isQuestionUsed ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                              </button>
                              <div className={`font-semibold text-slate-800 pr-10 ${isQuestionUsed ? 'line-through decoration-slate-400' : ''}`}>
                                {item.q}
                              </div>
                              <div className={`mt-1 text-sm italic text-slate-600 pr-8 ${isQuestionUsed ? 'line-through decoration-slate-300 text-slate-500' : ''}`}>
                                💡 {item.note}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium"
          >
            {language === "pt" ? "Fechar" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------- Subcomponent: Header Timer ----------
function HeaderTimer() {
  const [seconds, setSeconds] = useState(TIMER_DEFAULT_SECONDS);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let id;
    if (running) id = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => id && clearInterval(id);
  }, [running]);

  const isNegative = seconds < 0;
  const absSeconds = Math.abs(seconds);
  const minutes = Math.floor(absSeconds / 60);
  const secs = absSeconds % 60;
  const timeDisplay = `${isNegative ? '-' : ''}${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  // Alert state: last minute (0-59 seconds)
  const isLastMinute = seconds > 0 && seconds <= 60;
  const isTimeUp = seconds <= 0;

  return (
    <div
      id="timerBox"
      className={`w-full h-full px-4 border-2 rounded-lg flex items-center justify-between gap-3 transition-all ${
        isTimeUp
          ? 'border-red-500 bg-red-50 animate-pulse'
          : isLastMinute
          ? 'border-amber-500 bg-amber-50 shadow-lg shadow-amber-200'
          : 'border-slate-200 bg-white'
      }`}
      role="timer"
      aria-live="polite"
      aria-atomic="true"
    >
      <span
        className={`font-mono text-2xl font-bold transition-colors ${
          isTimeUp
            ? 'text-red-600'
            : isLastMinute
            ? 'text-amber-700'
            : 'text-slate-800'
        }`}
        aria-label={`${minutes} minutes ${secs} seconds`}
      >
        {timeDisplay}
      </span>
      <div className="flex items-center gap-2">
        {!running ? (
          <button
            className="px-4 py-2 text-xl rounded-lg border-2 border-green-500 bg-green-50 hover:bg-green-100 text-green-700 transition"
            onClick={(e) => {
              e.stopPropagation();
              setRunning(true);
            }}
            aria-label="Start timer"
            title="Iniciar timer"
          >
            ▶
          </button>
        ) : (
          <button
            className="px-4 py-2 text-xl rounded-lg border-2 border-amber-500 bg-amber-50 hover:bg-amber-100 text-amber-700 transition"
            onClick={(e) => {
              e.stopPropagation();
              setRunning(false);
            }}
            aria-label="Pause timer"
            title="Pausar timer"
          >
            ⏸
          </button>
        )}
        <button
          className="px-3 py-2 text-lg rounded-lg border-2 border-slate-300 bg-slate-50 hover:bg-slate-100 transition"
          onClick={(e) => {
            e.stopPropagation();
            setRunning(false);
            setSeconds(TIMER_DEFAULT_SECONDS);
          }}
          aria-label="Reset timer"
          title="Resetar timer"
        >
          ⟲
        </button>
      </div>
    </div>
  );
}
