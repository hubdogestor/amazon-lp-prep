import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import icebreakerData from "../../data/icebreaker.js";
import { HighlightableText } from "../HighlightableText.jsx";
import NarrativeModal from "./NarrativeModal.jsx";

export default function IcebreakerModal({ language: initialLanguage, onClose, usedIcebreakers = {}, onToggleUsed = () => {} }) {
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

  const sections = Object.keys(data)
    .filter((key) => !["title", "subtitle", "questions"].includes(key))
    .map((key) => ({
      id: key,
      data: data[key],
    }));

  const narrativeSuggestions = useMemo(() => {
    if (!normalizedSearch) return [];

    const results = [];

    sections.forEach((section) => {
      const versions = section.data?.versions || [];
      versions.forEach((version) => {
        const plainContent = version.content ? version.content.replace(/\*\*[^*]+\*\*/g, "") : "";

        const aggregated = [
          section.data?.question,
          section.data?.category,
          version.title,
          version.context,
          plainContent,
          version.hook,
          version.mic_drop,
          Array.isArray(version.tags) ? version.tags.join(" ") : null,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        if (!aggregated.includes(normalizedSearch)) return;

        let snippetSource = plainContent || version.context || version.hook || version.mic_drop || version.title || "";
        const lowerSource = snippetSource.toLowerCase();
        let matchIndex = lowerSource.indexOf(normalizedSearch);

        if (matchIndex === -1) {
          snippetSource = (version.context || version.hook || version.mic_drop || version.title || "").toString();
          matchIndex = snippetSource.toLowerCase().indexOf(normalizedSearch);
        }

        const start = matchIndex < 0 ? 0 : Math.max(0, matchIndex - 40);
        const end = matchIndex < 0 ? Math.min(snippetSource.length, 120) : Math.min(snippetSource.length, matchIndex + normalizedSearch.length + 60);
        let snippet = snippetSource.slice(start, end).trim();
        if (start > 0) snippet = `.${snippet}`;
        if (end < snippetSource.length) snippet = `${snippet}.`;

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
      if (!normalizedSearch) return section;

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
          Array.isArray(version.tags) ? version.tags.join(" ") : null,
        ]
          .filter(Boolean)
          .join(" ")
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
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
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
        if (event.key === "Escape") {
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
        onClick={(event) => event.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="icebreaker-title" className="text-2xl font-bold text-white flex items-center gap-2">
              🧊 {data.title}
            </h2>
            <p className="text-orange-100 text-sm mt-1">{data.subtitle}</p>
          </div>
          <div className="flex w-full flex-wrap items-center gap-3 md:flex-nowrap md:flex-1 md:justify-end">
            <div className="relative flex-1 basis-full md:basis-auto min-w-[260px] md:max-w-none">
              <input
                type="text"
                value={narrativeFilter}
                onChange={(event) => setNarrativeFilter(event.target.value)}
                placeholder={language === "pt" ? "Filtrar narrativas..." : "Filter narratives..."}
                className="bg-white/15 text-white/90 placeholder:text-white/60 w-full pl-4 pr-10 py-2 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/60 transition"
                onClick={(event) => event.stopPropagation()}
                aria-label={language === "pt" ? "Filtrar narrativas" : "Filter narratives"}
              />
              <span className="absolute inset-y-0 right-3 flex items-center text-white/70 pointer-events-none">
                🔍
              </span>
              {normalizedSearch && narrativeSuggestions.length > 0 && (
                <div className="absolute z-50 mt-2 left-0 right-0 min-w-full md:min-w-[520px] lg:min-w-[680px] max-h-80 overflow-auto rounded-xl border border-white/40 bg-white/95 shadow-xl text-slate-700">
                  {narrativeSuggestions.map((item, idx) => {
                    const narrativeId = `${language}-${item.sectionId}-${item.version.id}`;
                    const isNarrativeUsed = !!usedIcebreakers[narrativeId];
                    const snippetClass = isNarrativeUsed
                      ? "line-through decoration-slate-400 decoration-2 text-slate-500"
                      : "text-slate-800";
                    const subtitleClass = isNarrativeUsed
                      ? "line-through decoration-slate-300 text-slate-500"
                      : "text-slate-500";

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
                        className={`w-full text-left px-4 py-3 border-b border-white/60 last:border-b-0 hover:bg-white transition ${
                          isNarrativeUsed ? "bg-white/80" : ""
                        }`}
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
              🌐 {language === "pt" ? "EN" : "PT"}
            </button>

            <button
              onClick={handleClose}
              className="shrink-0 text-white hover:bg-orange-600 rounded-lg px-3 py-2 transition text-xl"
              aria-label="Close icebreaker modal"
            >
              ?
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredSections.length === 0 && (
              <div className="col-span-1 md:col-span-2 border border-dashed border-orange-300 rounded-xl p-6 text-center text-orange-700 bg-orange-50/60">
                {language === "pt" ? "Nenhuma narrativa encontrada para esse filtro." : "No narratives match this filter."}
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
                  <button
                    type="button"
                    className="w-full text-left bg-gradient-to-r from-gray-50 to-white px-5 py-4 cursor-pointer"
                    onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`section-content-${section.id}`}
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
                        <span className={`text-2xl transition-transform ${isExpanded ? "rotate-180" : ""}`}>
                          ▾
                        </span>
                      </div>
                    </div>
                  </button>

                  {isExpanded && (
                    <div id={`section-content-${section.id}`} className="p-5 bg-white border-t border-gray-200">
                      <div className="grid md:grid-cols-2 gap-4">
                        {sectionData.versions?.map((version) => {
                          const hookLabel = language === "pt" ? "Gancho" : "Hook";
                          const micDropLabel = language === "pt" ? "Fecho" : "Mic Drop";
                          const narrativeId = `${language}-${section.id}-${version.id}`;
                          const isNarrativeUsed = !!usedIcebreakers[narrativeId];
                          const toggleTooltip = isNarrativeUsed
                            ? (language === "pt" ? "Remover marca de narrativa usada" : "Unmark icebreaker as used")
                            : (language === "pt" ? "Marcar narrativa como usada" : "Mark icebreaker as used");

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
                                className={`w-full text-left border-2 border-gray-200 rounded-lg bg-white hover:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all ${
                                  isNarrativeUsed ? "opacity-80" : ""
                                }`}
                                title={language === "pt" ? "Abrir narrativa completa" : "Open full narrative"}
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
                                        <h4 className={`text-lg font-bold text-gray-900 ${
                                          isNarrativeUsed ? "line-through decoration-slate-500 text-slate-600" : ""
                                        }`}>
                                          {version.title}
                                        </h4>
                                      </div>
                                      {version.context && (
                                        <p className={`text-sm text-gray-600 italic ${
                                          isNarrativeUsed ? "line-through decoration-slate-400 text-gray-500" : ""
                                        }`}>
                                          {version.context}
                                        </p>
                                      )}
                                    </div>
                                    <span className="text-xl text-orange-500 pr-8" aria-hidden="true">?</span>
                                  </div>

                                  {(version.hook || version.mic_drop) && (
                                    <div className="grid md:grid-cols-2 gap-3">
                                      {version.hook && (
                                        <div className="bg-orange-50 rounded-lg p-3">
                                          <p className="font-bold text-orange-700 text-xs mb-1">{hookLabel}</p>
                                          <p className={`text-gray-700 text-xs ${
                                            isNarrativeUsed ? "line-through decoration-slate-400 text-gray-600" : ""
                                          }`}>
                                            {version.hook}
                                          </p>
                                        </div>
                                      )}
                                      {version.mic_drop && (
                                        <div className="bg-blue-50 rounded-lg p-3">
                                          <p className="font-bold text-blue-700 text-xs mb-1">{micDropLabel}</p>
                                          <p className={`text-gray-700 text-xs ${
                                            isNarrativeUsed ? "line-through decoration-slate-400 text-gray-600" : ""
                                          }`}>
                                            {version.mic_drop}
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  )}

                                  {version.tags && version.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                      {version.tags.map((tag) => (
                                        <span
                                          key={tag}
                                          className={`px-2 py-1 rounded text-xs ${
                                            isNarrativeUsed ? "bg-gray-200 text-gray-500 line-through decoration-slate-400" : "bg-gray-100 text-gray-600"
                                          }`}
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
            isUsed={!!usedIcebreakers[activeNarrative.narrativeId || `${language}-${activeNarrative.sectionId}-${activeNarrative.version.id}`]}
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

