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
  "obsessao pelo cliente",
  "mentalidade de dono",
  "inventar e simplificar",
  "estar certo, e muito",
  "aprender e ser curioso",
  "contratar e desenvolver os melhores",
  "insistir nos mais altos padroes",
  "pensar grande",
  "ter iniciativa",
  "frugalidade",
  "ganhar a confianca",
  "mergulhar fundo",
  "ser firme, discordar e se comprometer",
  "entregar resultados",
  "empenhar-se para ser a melhor empregadora do mundo",
  "sucesso e crescimento trazem maior responsabilidade",
];

const PT_LABELS = {
  "obsessao pelo cliente": "Obsessão pelo Cliente",
  "mentalidade de dono": "Mentalidade de Dono",
  "inventar e simplificar": "Inventar e Simplificar",
  "estar certo, e muito": "Estar certo, e muito",
  "aprender e ser curioso": "Aprender e Ser Curioso",
  "contratar e desenvolver os melhores": "Contratar e Desenvolver os Melhores",
  "insistir nos mais altos padroes": "Insistir nos Mais Altos Padrões",
  "pensar grande": "Pensar Grande",
  "ter iniciativa": "Ter Iniciativa",
  frugalidade: "Frugalidade",
  "ganhar a confianca": "Ganhar a Confiança",
  "mergulhar fundo": "Mergulhar Fundo",
  "ser firme, discordar e se comprometer": "Ser firme, discordar e se comprometer",
  "entregar resultados": "Entregar Resultados",
  "empenhar-se para ser a melhor empregadora do mundo":
    "Empenhar-se para ser a melhor empregadora do mundo",
  "sucesso e crescimento trazem maior responsabilidade":
    "Sucesso e crescimento trazem maior responsabilidade",
};

const EN_LABELS_FROM_PT = {
  [PT_KEYS[0]]: "Customer Obsession",
  [PT_KEYS[1]]: "Ownership",
  [PT_KEYS[2]]: "Invent and Simplify",
  [PT_KEYS[3]]: "Are Right, A Lot",
  [PT_KEYS[4]]: "Learn and Be Curious",
  [PT_KEYS[5]]: "Hire and Develop the Best",
  [PT_KEYS[6]]: "Insist on the Highest Standards",
  [PT_KEYS[7]]: "Think Big",
  [PT_KEYS[8]]: "Bias for Action",
  [PT_KEYS[9]]: "Frugality",
  [PT_KEYS[10]]: "Earn Trust",
  [PT_KEYS[11]]: "Dive Deep",
  [PT_KEYS[12]]: "Have Backbone; Disagree and Commit",
  [PT_KEYS[13]]: "Deliver Results",
  [PT_KEYS[14]]: "Strive to be Earth's Best Employer",
  [PT_KEYS[15]]: "Success and Scale Bring Broad Responsibility",
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
const TOP_CASES = new Set([
  "Migração Crítica de Dados e Compliance (HSBC → Bradesco)",
  "Redução Drástica de SLA com Novo Modelo de Processo (Huawei)",
  "Criação do 'Checklist Executivo' para Clientes B2B (Unimed)",
  "Estruturação do PMO do Zero na Secretaria da Fazenda (SEFAZ-RS)",
  "Redução do Churn no Onboarding do Banco Digital (Woop Sicredi)",
  "Decisão de Arquitetura Cloud Híbrida para o Banco Digital Next",
]);
const isTopCase = (c) => !!(c && (c.isTop || TOP_CASES.has(c.title || "")));

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

  const t = TEXTS[language];
  const dataRaw = Array.isArray(principlesDataRaw) ? principlesDataRaw : [];
  const principlesData = sortPrinciples(dataRaw, language);

  const clearExpanded = () => setExpandedCases({});
  const clearHighlights = () => {
    if (highlightedFupId) {
      const el = document.getElementById(highlightedFupId);
      if (el) el.classList.remove("ring-2", "ring-amber-300", "rounded-md");
      setHighlightedFupId(null);
    }
    if (highlightedCaseId) {
      const el = document.getElementById(highlightedCaseId);
      if (el) el.classList.remove("ring-2", "ring-amber-300", "rounded-md");
      setHighlightedCaseId(null);
    }
  };
  const applyPermanentHighlight = (id) => {
    clearHighlights();
    const el = document.getElementById(id);
    if (el) el.classList.add("ring-2", "ring-amber-300", "rounded-md");
  };

  // Filtro principal
  const filteredPrinciples = useMemo(() => {
    let base = principlesData;

    if (searchTerm) {
      const term = norm(searchTerm);
      return base
        .map((p) => {
          const hits = (p.cases || []).filter((c) => {
            // Buscar em ambos idiomas para manter cases visíveis ao trocar idioma
            const titleHitPT = norm(getCaseBaseTitle(c, "pt")).includes(term);
            const titleHitEN = norm(getCaseBaseTitle(c, "en")).includes(term);
            const starlPT = (c && c.pt) || {};
            const starlEN = (c && c.en) || {};
            const starlHitPT = norm(Object.values(starlPT).join(" ")).includes(term);
            const starlHitEN = norm(Object.values(starlEN).join(" ")).includes(term);
            return titleHitPT || titleHitEN || starlHitPT || starlHitEN;
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
    setShowTopCases(false);
    setSelectedPrinciple("all");
    clearHighlights();
    clearExpanded();
  };

  const toggleCase = (caseTitle, principleId) => {
    setExpandedCases((prev) => {
      const next = {};
      next[caseTitle] = !prev[caseTitle];
      return next;
    });
    setSelectedPrinciple(principleId);
  };

  // ---------- Case Title (com tradução + company + period via meta_overrides) ----------
  function getCaseBaseTitle(c, lang) {
    const slug = slugify(c.title);
    const ov = metaOverrides[slug] || {};

    if (lang === "en") {
      return (
        ov.title_en ||
        c.title_en ||
        (c.en && c.en.title) ||
        ov.title_pt ||
        c.title_pt ||
        c.title
      );
    }
    // PT
    return ov.title_pt || c.title_pt || (c.pt && c.pt.title) || c.title;
  }
  const displayCaseTitle = (c) => {
    const slug = slugify(c.title);
    const ov = metaOverrides[slug] || {};
    const base = getCaseBaseTitle(c, language) || "";

    const company = ov.company ?? c.company;
    const period = ov.period ?? c.period;

    const comp = company ? ` – ${company}` : "";
    const per = period ? ` (${period})` : "";
    return `${base}${comp}${per}`;
  };

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
                        (p.cases || []).flatMap((c) =>
                          (c.fup || [])
                            .filter((f) => {
                              const qTxt = language === "en" ? (f.q_en || f.q || "") : (f.q || "");
                              return norm(qTxt).includes(norm(questionSearch));
                            })
                            .map((f, idx) => ({ p, c, f, idx }))
                        )
                      )
                      .map(({ p, c, f, idx }, k) => (
                        <div
                          key={`${p.id}-${slugify(c.title)}-${idx}-${k}`}
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

                              const anchorId = `fup-${slugify(c.title)}-${idx}`;
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
                      .flatMap((p) => (p.cases || []).flatMap((c) => c.fup || []))
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
                ⭐ {t.topCases}
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
                <h2 className="text-xl font-bold mb-3">{getDisplayName(principle, language)}</h2>

                {((principle && principle.cases) || []).map((c, idx) => {
                  const caseKey = `${principle.id}-${idx}`;
                  const caseDomId = `case-${slugify(c.title)}`;
                  const open = !!expandedCases[c.title];

                  return (
                    <article
                      key={caseKey}
                      id={caseDomId}
                      className="bg-white border border-slate-200 rounded-xl p-0 mb-4 overflow-hidden transition hover:shadow-sm"
                    >
                      {/* Header clicável (área ampla) */}
                      <header
                        className={`flex items-center justify-between px-4 py-3 cursor-pointer ${
                          open ? "bg-slate-50" : "bg-white"
                        } hover:bg-slate-50`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCase(c.title, principle.id);
                          if (searchTerm) {
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
                          <h3 className="text-[1.05rem] font-semibold text-slate-900">
                            {displayCaseTitle(c)}
                          </h3>
                          {isTopCase(c) && <span title="Top case">⭐</span>}
                        </div>
                        <span className="text-sm text-amber-600 select-none">
                          {open ? t.close : t.viewDetails} ▾
                        </span>
                      </header>

                      {open && (
                        <div className="px-4 pb-4 pt-2 grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm text-slate-700">
                          <div className="space-y-2 leading-relaxed">
                            <p>
                              <strong>{t.situation}:</strong>{" "}
                              {(c && c[language] && c[language].s) || ""}
                            </p>
                            <p>
                              <strong>{t.task}:</strong>{" "}
                              {(c && c[language] && c[language].t) || ""}
                            </p>
                            <p>
                              <strong>{t.action}:</strong>{" "}
                              {(c && c[language] && c[language].a) || ""}
                            </p>
                            <p>
                              <strong>{t.result}:</strong>{" "}
                              {(c && c[language] && c[language].r) || ""}
                            </p>
                            <p>
                              <strong>{t.learning}:</strong>{" "}
                              {(c && c[language] && c[language].l) || ""}
                            </p>
                          </div>

                          <div className="space-y-2">
                            {c.fup && c.fup.length > 0 && (
                              <ul className="list-disc pl-5 space-y-2">
                                {c.fup.map((f, fIdx) => {
                                  const fupId = `fup-${slugify(c.title)}-${fIdx}`;
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
                            )}
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
