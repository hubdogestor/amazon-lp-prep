import React, { useMemo, useState, useEffect } from "react";
import { Search } from "lucide-react";
import principlesDataRaw from "./data_principles.js";
import metaOverrides from "./data/meta_overrides";
import "./App.css";

// ---------- Utils ----------
const slugify = (s) =>
  (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
const norm = (s) =>
  (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

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

const getDisplayName = (p, lang) => {
  const k = norm(p?.name);
  if (lang === "pt") return PT_LABELS[k] || p.name;
  return EN_LABELS_FROM_PT[k] || p.name;
};
const sortPrinciples = (arr, lang) => {
  const order = lang === "pt" ? ORDER_PT : ORDER_EN;
  return [...arr].sort((a, b) => {
    const ia = order.indexOf(norm(a.name));
    const ib = order.indexOf(norm(b.name));
    const va = ia === -1 ? 999 : ia;
    const vb = ib === -1 ? 999 : ib;
    return va - vb || (a.name || "").localeCompare(b.name || "");
  });
};

// ---------- Top cases ----------
const TOP_CASE_IDS = new Set([
  'migracao-critica-de-dados-e-compliance',
  'reducao-drastica-de-sla-com-novo-modelo-de-process', 
  'criacao-checklist-executivo-clientes-b2b',
  'estruturacao-pmo-zero-sefaz-rs',
  'reducao-churn-onboarding-banco-digital',
  'decisao-de-arquitetura-bancaria-next-vs-bra'
]);
const isTopCase = (c) => !!(c && (c.isTopCase || TOP_CASE_IDS.has(c.id || "")));

// ---------- i18n ----------
const TEXTS = {
  pt: {
    kSearch: "Buscar por palavras-chave nos cases...",
    kFup: "Buscar SOMENTE perguntas (FUPs)...",
    viewDetails: "Ver detalhes",
    close: "Fechar",
    filterAll: "Todos os princípios",
    topCases: "Top Cases",
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
  const [language, setLanguage] = useState("pt");

  const [highlightedFupId, setHighlightedFupId] = useState(null);
  const [highlightedCaseId, setHighlightedCaseId] = useState(null);
  const [highlightSearchTerm, setHighlightSearchTerm] = useState("");

  const t = TEXTS[language];
  const dataRaw = Array.isArray(principlesDataRaw) ? principlesDataRaw : [];
  const principlesData = sortPrinciples(dataRaw, language);

  const clearExpanded = () => setExpandedCases({});
  const clearHighlights = () => {
    if (highlightedFupId) {
      const el = document.getElementById(highlightedFupId);
      if (el) {
        el.classList.remove("ring-2", "ring-amber-300", "rounded-md", "bg-amber-50", "p-2");
        // Limpar highlight da pergunta específica
        const questionDiv = el.querySelector('.font-medium');
        if (questionDiv) {
          questionDiv.classList.remove("bg-amber-100", "px-2", "py-1", "rounded");
        }
      }
      setHighlightedFupId(null);
    }
    if (highlightedCaseId) {
      const el = document.getElementById(highlightedCaseId);
      if (el) el.classList.remove("ring-2", "ring-amber-300", "rounded-md", "bg-amber-50", "p-2");
      setHighlightedCaseId(null);
    }
  };
  const applyPermanentHighlight = (id) => {
    clearHighlights();
    const el = document.getElementById(id);
    if (el) {
      el.classList.add("ring-2", "ring-amber-300", "rounded-md", "bg-amber-50", "p-2");
      // Para FUPs, destacar especificamente a pergunta
      if (id.startsWith('fup-')) {
        const questionDiv = el.querySelector('.font-medium');
        if (questionDiv) {
          questionDiv.classList.add("bg-amber-100", "px-2", "py-1", "rounded");
        }
      }
    }
  };

  // Filtro principal
  const filteredPrinciples = useMemo(() => {
    let base = principlesData;

    if (searchTerm) {
      const term = norm(searchTerm);
      return base
        .map((p) => {
          const hits = (p.cases || []).filter((c) => {
            // Buscar apenas no idioma selecionado
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
  }, [principlesData, selectedPrinciple, showTopCases, searchTerm, language]);

  // Função para limpar filtros
  const clearFilters = () => {
    setSearchTerm("");
    setQuestionSearch("");
    setHighlightSearchTerm("");
    setShowTopCases(false);
    setSelectedPrinciple("all");
    clearHighlights();
    clearExpanded();
  };

  // Função para destacar termos de busca no conteúdo
  const highlightText = (text, searchTerm) => {
    if (!searchTerm || !text) return text;
    
    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => {
      if (part.toLowerCase() === searchTerm.toLowerCase()) {
        return <mark key={index} className="bg-yellow-200 px-1 rounded">{part}</mark>;
      }
      return part;
    });
  };

  const toggleCase = (caseTitle, principleId, preserveSearchTerm = false) => {
    // Salva o termo de busca atual se solicitado
    if (preserveSearchTerm && searchTerm) {
      setHighlightSearchTerm(searchTerm);
    }
    
    // Limpar busca quando clicar em qualquer case (exceto se preservando)
    if (!preserveSearchTerm) {
      setSearchTerm("");
      setHighlightSearchTerm("");
    } else {
      setSearchTerm(""); // Limpa a caixa mas mantém o highlight
    }
    setQuestionSearch("");
    
    setExpandedCases((prev) => {
      const next = {};
      next[caseTitle] = !prev[caseTitle];
      return next;
    });
    setSelectedPrinciple(principleId);
  };

  // ---------- Case Title (nova lógica simplificada) ----------
  function getCaseBaseTitle(c, lang) {
    // Primeiro tenta usar títulos específicos do caso
    if (lang === "en") {
      return c.title_en || c.title_pt || extractBaseTitle(c.title);
    }
    // PT
    return c.title_pt || extractBaseTitle(c.title);
  }
  
  function extractBaseTitle(originalTitle) {
    // Remove company e period do título original, mantendo só a parte principal
    return originalTitle
      .replace(/\s*-\s*[^(]+\s*\([^)]*\)\s*$/, '') // Remove " - Company (MM/AAAA-MM/AAAA)"
      .replace(/\s*\([^)]*\)\s*$/, '') // Remove qualquer "(...)" no final
      .trim();
  }

  const displayCaseTitle = (c) => {
    const base = getCaseBaseTitle(c, language);
    
    // Usar company e period do próprio caso ou fallback
    const company = c.company || extractCompany(c.title);
    const period = c.period || extractPeriod(c.title);

    const comp = company ? ` – ${company}` : "";
    const per = period ? ` (${period})` : "";
    
    // Adiciona ícone de alvo se for top case
    const target = c.isTopCase ? " 🎯" : "";
    
    return `${base}${comp}${per}${target}`;
  };
  
  function extractCompany(originalTitle) {
    // Extrai empresa do formato "... - Empresa (MM/AAAA...)"
    const match = originalTitle.match(/-\s*([^(]+)\s*\(/);
    return match ? match[1].trim() : "";
  }
  
  function extractPeriod(originalTitle) {
    // Se contém MM/AAAA, substitui por período genérico, senão extrai o período real
    if (originalTitle.includes("MM/AAAA")) {
      return "2019–2024"; // Período genérico para casos sem data específica
    }
    const match = originalTitle.match(/\(([^)]+)\)/);
    return match ? match[1].trim() : "";
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Cabeçalho Fixo */}
      <div
        id="stickyHeader"
        className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      >
        <div className="max-w-[1600px] mx-auto px-6 py-3">
          <div className="grid grid-cols-12 gap-3 items-center">
            {/* Busca por palavras (col-span-3) */}
            <div className="col-span-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  id="kSearch"
                  type="text"
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
                />
              </div>
            </div>

            {/* Busca por FUPs (col-span-3) */}
            <div className="col-span-3">
              <div id="kFup" className="relative">
                <input
                  type="text"
                  placeholder={t.kFup}
                  value={questionSearch}
                  onChange={(e) => setQuestionSearch(e.target.value)}
                  className="w-full pl-3 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white"
                />
                {questionSearch && (
                  <div className="absolute z-20 mt-2 w-full bg-white shadow-lg border border-slate-200 rounded-lg max-h-72 overflow-auto">
                    {(principlesData || [])
                      .flatMap((p) =>
                        (p.cases || []).flatMap((c) => {
                          const fups = c.fup || c.fups || [];
                          return fups
                            .map((f, originalIdx) => ({ p, c, f, originalIdx }))
                            .filter(({ f }) => {
                              const qTxt = language === "en" ? (f.q_en || f.q || "") : (f.q || "");
                              return norm(qTxt).includes(norm(questionSearch));
                            });
                        })
                      )
                      .map(({ p, c, f, originalIdx }, k) => (
                        <div
                          key={`${p.id}-${slugify(c.title)}-${originalIdx}-${k}`}
                          className="px-3 py-2 hover:bg-slate-50 cursor-pointer text-sm"
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
                              setHighlightedFupId(anchorId);
                              setTimeout(() => {
                                const el = document.getElementById(anchorId);
                                if (el) {
                                  el.scrollIntoView({ behavior: "smooth", block: "center" });
                                  applyPermanentHighlight(anchorId);
                                }
                              }, 120);
                            }, 0);
                          }}
                        >
                          <div className="font-medium text-slate-800">{language === "en" ? (f.q_en || f.q) : f.q}</div>
                          <div className="text-slate-500">
                            {getDisplayName(p, language)} • {displayCaseTitle(c)}
                          </div>
                        </div>
                      ))}
                    {(principlesData || [])
                      .flatMap((p) => (p.cases || []).flatMap((c) => c.fup || c.fups || []))
                      .filter((f) => {
                        const qTxt = language === "en" ? (f.q_en || f.q || "") : (f.q || "");
                        return norm(qTxt).includes(norm(questionSearch));
                      }).length === 0 && (
                      <div className="px-3 py-2 text-slate-500 text-sm">{t.noResult}</div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Top Cases (col-span-2) */}
            <div className="col-span-2">
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
                title="Mostrar apenas Top Cases"
              >
                🎯 {t.topCases}
              </button>
            </div>

            {/* Timer (col-span-2) */}
            <div className="col-span-2">
              <HeaderTimer t={t} />
            </div>

            {/* Idioma (col-span-2) */}
            <div className="col-span-2">
              <div id="langBox" className="w-full flex gap-2">
                <button
                  className={`flex-1 px-3 py-2 rounded-lg text-sm border ${
                    language === "pt" ? "bg-slate-900 text-white" : "bg-white text-slate-700"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLanguage("pt");
                    // Mantém os cases expandidos quando muda idioma
                  }}
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
                    // Mantém os cases expandidos quando muda idioma
                  }}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-[1600px] mx-auto px-6 pt-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside id="sidebar" className="col-span-12 xl:col-span-2">
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
              >
                {getDisplayName(p, language)}
              </div>
            ))}
          </aside>

          {/* Main */}
          <main className="col-span-12 xl:col-span-10 space-y-6">
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
                  const caseDomId = `case-${slugify(c.title)}`;
                  const open = !!expandedCases[c.title];

                  return (
                    <article
                      key={caseKey}
                      id={caseDomId}
                      className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-0 mb-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50 hover:border-blue-300"
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
                            setHighlightedCaseId(caseDomId);
                            setTimeout(() => {
                              const el = document.getElementById(caseDomId);
                              if (el) {
                                el.scrollIntoView({ behavior: "smooth", block: "start" });
                                applyPermanentHighlight(caseDomId);
                              }
                            }, 80);
                          }
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-slate-900">
                            {highlightSearchTerm ? 
                              highlightText(displayCaseTitle(c), highlightSearchTerm) :
                              displayCaseTitle(c)
                            }
                          </h3>
                        </div>
                        <span className="text-sm text-amber-600 select-none">
                          {open ? t.close : t.viewDetails} ▾
                        </span>
                      </header>

                      {open && (
                        <div className="px-6 pb-6 pt-2 grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm text-slate-700 bg-white/40 backdrop-blur-sm">
                          <div className="space-y-3">
                            <h4 className="text-base font-semibold text-slate-800 border-b border-slate-200 pb-1 mb-3">📋 STAR Case</h4>
                            <div className="space-y-2 leading-relaxed">
                            <p>
                              <strong>{t.situation}:</strong>{" "}
                              {highlightSearchTerm ? 
                                highlightText((c && c[language] && c[language].s) || "", highlightSearchTerm) :
                                (c && c[language] && c[language].s) || ""
                              }
                            </p>
                            <p>
                              <strong>{t.task}:</strong>{" "}
                              {highlightSearchTerm ? 
                                highlightText((c && c[language] && c[language].t) || "", highlightSearchTerm) :
                                (c && c[language] && c[language].t) || ""
                              }
                            </p>
                            <p>
                              <strong>{t.action}:</strong>{" "}
                              {highlightSearchTerm ? 
                                highlightText((c && c[language] && c[language].a) || "", highlightSearchTerm) :
                                (c && c[language] && c[language].a) || ""
                              }
                            </p>
                            <p>
                              <strong>{t.result}:</strong>{" "}
                              {highlightSearchTerm ? 
                                highlightText((c && c[language] && c[language].r) || "", highlightSearchTerm) :
                                (c && c[language] && c[language].r) || ""
                              }
                            </p>
                            <p>
                              <strong>{t.learning}:</strong>{" "}
                              {highlightSearchTerm ? 
                                highlightText((c && c[language] && c[language].l) || "", highlightSearchTerm) :
                                (c && c[language] && c[language].l) || ""
                              }
                            </p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <h4 className="text-base font-semibold text-slate-800 border-b border-slate-200 pb-1 mb-3">❓ Follow-up Questions</h4>
                            {(() => {
                              // Normalizar FUPs (suporta tanto 'fup' quanto 'fups')
                              const fups = c.fup || c.fups || [];
                              return fups.length > 0 ? (
                                <ul className="list-disc pl-5 space-y-2">
                                  {fups.map((f, fIdx) => {
                                    const fupId = `fup-${principle.id}-${slugify(c.id || c.title)}-${fIdx}`;
                                    const question = language === "en" ? (f.q_en || f.q) : f.q;
                                    const answer = language === "en" ? (f.a_en || f.a) : f.a;
                                    return (
                                      <li key={`${slugify(c.title)}-${fIdx}`} id={fupId} className="flex flex-col gap-1">
                                        <div className="font-medium">{question}</div>
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

// ---------- Subcomponent: Header Timer ----------
function HeaderTimer({ t }) {
  const [seconds, setSeconds] = useState(300);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let id;
    if (running) id = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => id && clearInterval(id);
  }, [running]);

  return (
    <div
      id="timerBox"
      className="w-full h-[40px] px-3 border border-slate-200 rounded-lg bg-white flex items-center justify-between"
    >
      <span className="text-sm text-slate-500">{t.timer}:</span>
      <span className="font-mono text-lg">
        {String(Math.floor(seconds / 60)).padStart(2, "0")}:
        {String(seconds % 60).padStart(2, "0")}
      </span>
      <div className="flex items-center gap-1">
        {!running ? (
          <button
            className="px-3 py-1 text-sm rounded-md border border-slate-300 hover:bg-slate-50"
            onClick={(e) => {
              e.stopPropagation();
              setRunning(true);
            }}
          >
            ▶
          </button>
        ) : (
          <button
            className="px-3 py-1 text-sm rounded-md border border-slate-300 hover:bg-slate-50"
            onClick={(e) => {
              e.stopPropagation();
              setRunning(false);
            }}
          >
            ⏸
          </button>
        )}
        <button
          className="px-2 py-1 text-sm rounded-md border border-slate-300 hover:bg-slate-50"
          onClick={(e) => {
            e.stopPropagation();
            setRunning(false);
            setSeconds(300);
          }}
        >
          ⟲
        </button>
      </div>
    </div>
  );
}
