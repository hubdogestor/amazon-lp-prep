import { useMemo, useState, useEffect, useCallback } from "react";
import { Search } from "lucide-react";
import principlesDataRaw from "./data_principles.js";
import icebreakerData from "./data/icebreaker.js";
import myQuestionsData from "./data/myQuestions.js";
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
const TEXTS = {
  pt: {
    kSearch: "Buscar por palavras-chave nos cases...",
    kFup: "Buscar SOMENTE perguntas (FUPs)...",
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
    kSearch: "Search for keywords in cases...",
    kFup: "Search QUESTIONS only (FUPs)...",
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
  const [showTopCases, setShowTopCases] = useState(false);
  const [showIcebreaker, setShowIcebreaker] = useState(false);
  const [showMyQuestions, setShowMyQuestions] = useState(false);
  const [language, setLanguage] = useState("pt");
  const [isSearching, setIsSearching] = useState(false);

  // Use debounced search for better performance
  const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_SEARCH_DELAY);
  const debouncedQuestionSearch = useDebounce(questionSearch, DEBOUNCE_SEARCH_DELAY);

  // Use highlight hook instead of DOM manipulation
  const {
    highlightedFupId,
    highlightedCaseId,
    highlightSearchTerm,
    setHighlightSearchTerm,
    clearHighlights,
    setHighlightedFup,
    setHighlightedCase,
  } = useHighlight();

  const t = TEXTS[language];
  const principlesData = useMemo(() => {
    const dataRaw = Array.isArray(principlesDataRaw) ? principlesDataRaw : [];
    return sortPrinciples(dataRaw, language);
  }, [language]);

  const clearExpanded = useCallback(() => setExpandedCases({}), []);

  // Memoize case title functions
  const getCaseBaseTitle = useCallback((c, lang) => {
    return getCaseBaseTitleUtil(c, lang);
  }, []);

  const getDisplayCaseTitle = useCallback((c, lang) => {
    return getDisplayCaseTitleUtil(c, lang);
  }, []);

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

  const toggleCase = useCallback((caseTitle, principleId, preserveSearchTerm = false) => {
    if (preserveSearchTerm && searchTerm) {
      setHighlightSearchTerm(searchTerm);
    }

    if (!preserveSearchTerm) {
      setSearchTerm("");
      setHighlightSearchTerm("");
    } else {
      setSearchTerm("");
    }
    setQuestionSearch("");

    setExpandedCases((prev) => {
      const next = {};
      next[caseTitle] = !prev[caseTitle];
      return next;
    });
    setSelectedPrinciple(principleId);
  }, [searchTerm, setHighlightSearchTerm]);

  // FUP search results - memoized
  const fupSearchResults = useMemo(() => {
    if (!debouncedQuestionSearch) return [];

    return (principlesData || [])
      .flatMap((p) =>
        (p.cases || []).flatMap((c) => {
          const fups = getCaseFups(c);
          return fups
            .map((f, originalIdx) => ({ p, c, f, originalIdx }))
            .filter(({ f }) => {
              const qTxt = language === "en" ? (f.q_en || f.q || "") : (f.q || "");
              return norm(qTxt).includes(norm(debouncedQuestionSearch));
            });
        })
      );
  }, [principlesData, debouncedQuestionSearch, language]);

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
            {/* Busca por palavras (col-span-3) */}
            <div className="col-span-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" aria-hidden="true" />
                <input
                  id="kSearch"
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
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white"
                  aria-label={t.kSearch}
                />
              </div>
            </div>

            {/* Busca por FUPs (col-span-3) */}
            <div className="col-span-3">
              <div id="kFup" className="relative">
                <input
                  type="search"
                  placeholder={t.kFup}
                  value={questionSearch}
                  onChange={(e) => setQuestionSearch(e.target.value)}
                  className="w-full pl-3 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white"
                  aria-label={t.kFup}
                  aria-expanded={!!questionSearch}
                  aria-controls="fup-dropdown"
                />
                {questionSearch && (
                  <div
                    id="fup-dropdown"
                    role="listbox"
                    className="absolute z-20 mt-2 w-full bg-white shadow-lg border border-slate-200 rounded-lg max-h-72 overflow-auto"
                  >
                    {fupSearchResults.map(({ p, c, f, originalIdx }, k) => (
                      <div
                        key={`${p.id}-${slugify(c.id || c.title)}-${originalIdx}-${k}`}
                        role="option"
                        tabIndex={0}
                        className="px-3 py-2 hover:bg-slate-50 cursor-pointer text-sm focus:bg-slate-100 focus:outline-none"
                        onClick={() => {
                          setSelectedPrinciple(p.id);
                          setShowTopCases(false);
                          setSearchTerm("");
                          clearExpanded();
                          clearHighlights();

                          setTimeout(() => {
                            setExpandedCases({ [c.title]: true });
                            setQuestionSearch("");

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
                        <div className="font-medium text-slate-800">{language === "en" ? (f.q_en || f.q) : f.q}</div>
                        <div className="text-slate-500">
                          {getDisplayName(p, language)} • {getDisplayCaseTitle(c, language)}
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

            {/* Top Cases (col-span-1) */}
            <div className="col-span-1">
              <button
                id="topCasesBtn"
                className={`w-full px-3 py-2 rounded-lg text-sm border transition ${
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
                className="w-full px-3 py-2 rounded-lg text-sm border transition bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
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
                className="w-full px-3 py-2 rounded-lg text-sm border transition bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
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
                  className={`flex-1 px-3 py-2 rounded-lg text-sm border ${
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
                  className={`flex-1 px-3 py-2 rounded-lg text-sm border ${
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
        />
      )}

      {/* Modal Minhas Perguntas */}
      {showMyQuestions && (
        <MyQuestionsModal
          language={language}
          onClose={() => setShowMyQuestions(false)}
        />
      )}

      {/* Conteúdo */}
      <div className="max-w-[1600px] mx-auto px-6 pt-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside id="sidebar" className="col-span-12 xl:col-span-2" role="navigation" aria-label="Principles filter">
            <div
              className={`cursor-pointer p-2 rounded-lg transition ${
                selectedPrinciple === "all" ? "bg-amber-100 font-semibold text-amber-900" : "hover:bg-slate-50"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPrinciple("all");
                setShowTopCases(false);
                setSearchTerm("");
                clearHighlights();
                clearExpanded();
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  e.currentTarget.click();
                }
              }}
              aria-pressed={selectedPrinciple === "all"}
            >
              {t.filterAll}
            </div>
            {(principlesData || []).map((p) => (
              <div
                key={`side-${p.id}`}
                className={`cursor-pointer p-2 rounded-lg transition ${
                  selectedPrinciple === p.id ? "bg-amber-100 font-semibold text-amber-900" : "hover:bg-slate-50"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPrinciple(p.id);
                  setShowTopCases(false);
                  setSearchTerm("");
                  clearHighlights();
                  clearExpanded();
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.currentTarget.click();
                  }
                }}
                aria-pressed={selectedPrinciple === p.id}
              >
                {getDisplayName(p, language)}
              </div>
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
                </div>

                {((principle && principle.cases) || []).map((c, idx) => {
                  const caseKey = `${principle.id}-${idx}`;
                  const caseDomId = `case-${slugify(c.id || c.title)}`;
                  const open = !!expandedCases[c.title];
                  const isHighlighted = highlightedCaseId === caseDomId;

                  return (
                    <article
                      key={caseKey}
                      id={caseDomId}
                      className={`bg-gradient-to-br from-blue-50 to-indigo-50 border rounded-xl p-0 mb-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50 hover:border-blue-300 ${
                        isHighlighted ? 'ring-2 ring-amber-300 bg-amber-50' : 'border-blue-200'
                      }`}
                    >
                      {/* Header clicável (área ampla) */}
                      <header
                        className={`flex items-center justify-between px-5 py-4 cursor-pointer ${
                          open ? "bg-white/80" : "bg-white/60"
                        } hover:bg-white/90 backdrop-blur-sm`}
                        onClick={(e) => {
                          e.stopPropagation();
                          const hasSearchTerm = !!searchTerm;
                          toggleCase(c.title, principle.id, hasSearchTerm);
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
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-slate-900">
                            <HighlightableText
                              text={getDisplayCaseTitle(c, language)}
                              searchTerm={highlightSearchTerm}
                            />
                          </h3>
                        </div>
                        <span className="text-sm text-amber-600 select-none">
                          {open ? t.close : t.viewDetails} ▾
                        </span>
                      </header>

                      {open && (
                        <div
                          id={`case-content-${caseKey}`}
                          className="px-6 pb-6 pt-2 grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm text-slate-700 bg-white/40 backdrop-blur-sm"
                        >
                          <div className="space-y-3">
                            <h4 className="text-base font-semibold text-slate-800 border-b border-slate-200 pb-1 mb-3">📋 STAR Case</h4>
                            <div className="space-y-2 leading-relaxed">
                              <p>
                                <strong>{t.situation}:</strong>{" "}
                                <HighlightableText
                                  text={(c && c[language] && c[language].s) || ""}
                                  searchTerm={highlightSearchTerm}
                                />
                              </p>
                              <p>
                                <strong>{t.task}:</strong>{" "}
                                <HighlightableText
                                  text={(c && c[language] && c[language].t) || ""}
                                  searchTerm={highlightSearchTerm}
                                />
                              </p>
                              <p>
                                <strong>{t.action}:</strong>{" "}
                                <HighlightableText
                                  text={(c && c[language] && c[language].a) || ""}
                                  searchTerm={highlightSearchTerm}
                                />
                              </p>
                              <p>
                                <strong>{t.result}:</strong>{" "}
                                <HighlightableText
                                  text={(c && c[language] && c[language].r) || ""}
                                  searchTerm={highlightSearchTerm}
                                />
                              </p>
                              <p>
                                <strong>{t.learning}:</strong>{" "}
                                <HighlightableText
                                  text={(c && c[language] && c[language].l) || ""}
                                  searchTerm={highlightSearchTerm}
                                />
                              </p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <h4 className="text-base font-semibold text-slate-800 border-b border-slate-200 pb-1 mb-3">❓ Follow-up Questions</h4>
                            {(() => {
                              const fups = getCaseFups(c);
                              return fups.length > 0 ? (
                                <ul className="list-disc pl-5 space-y-2">
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
                                          {question}
                                        </div>
                                        {answer && <div className="text-slate-600 whitespace-pre-line">{answer}</div>}
                                      </li>
                                    );
                                  })}
                                </ul>
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
function IcebreakerModal({ language, onClose }) {
  const data = icebreakerData[language];
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const toggleQuestion = (idx) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="icebreaker-title"
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 flex items-center justify-between">
          <h2 id="icebreaker-title" className="text-2xl font-bold text-white flex items-center gap-2">
            💬 {data.title}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-lg px-3 py-1 transition"
            aria-label="Close icebreaker modal"
          >
            ✕
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(85vh-80px)]">
          <div className="space-y-4">
            {data.questions.map((item, idx) => {
              const isExpanded = expandedQuestions[idx];
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200 overflow-hidden"
                >
                  <div
                    className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-white/60 transition"
                    onClick={() => toggleQuestion(idx)}
                  >
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span className="text-blue-600 font-mono text-sm">Q{idx + 1}</span>
                      <span>{item.q}</span>
                    </h3>
                    <span className="text-sm text-blue-600 select-none">
                      {isExpanded ? (language === "pt" ? "Fechar ▾" : "Close ▾") : (language === "pt" ? "Ver resposta" : "View answer")}
                    </span>
                  </div>
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 bg-white/40">
                      <div className="pl-7 text-slate-700 leading-relaxed whitespace-pre-line">
                        {item.a}
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
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            {language === "pt" ? "Fechar" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------- Subcomponent: My Questions Modal ----------
function MyQuestionsModal({ language, onClose }) {
  const data = myQuestionsData[language];
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (idx) => {
    setExpandedCategories(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
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
        className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 flex items-center justify-between">
          <h2 id="myquestions-title" className="text-2xl font-bold text-white flex items-center gap-2">
            🤔 {data.title}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-lg px-3 py-1 transition"
            aria-label="Close my questions modal"
          >
            ✕
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(85vh-80px)]">
          <div className="space-y-4">
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
                      <div className="space-y-4">
                        {category.questions.map((item, qIdx) => (
                          <div key={qIdx} className="border-l-4 border-purple-400 pl-4 py-2">
                            <div className="font-semibold text-slate-800 mb-1">{item.q}</div>
                            <div className="text-sm text-slate-600 italic">💡 {item.note}</div>
                          </div>
                        ))}
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
function HeaderTimer({ t }) {
  const [seconds, setSeconds] = useState(TIMER_DEFAULT_SECONDS);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let id;
    if (running) id = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => id && clearInterval(id);
  }, [running]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const timeDisplay = `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  return (
    <div
      id="timerBox"
      className="w-full h-full px-4 border border-slate-200 rounded-lg bg-white flex items-center justify-between gap-3"
      role="timer"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="font-mono text-2xl font-bold text-slate-800" aria-label={`${minutes} minutes ${secs} seconds`}>
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
