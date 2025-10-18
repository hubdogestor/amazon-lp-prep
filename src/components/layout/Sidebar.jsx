import clsx from "clsx";
import { useTranslation } from "react-i18next";

export default function Sidebar({
  language,
  selectedPrinciple,
  setSelectedPrinciple,
  setShowTopCases,
  setSearchTerm,
  setQuestionSearch,
  setTypicalQuestionSearch,
  clearHighlights,
  clearExpanded,
  principlesData,
  getDisplayName,
}) {
  const { t } = useTranslation();
  return (
    <aside id="sidebar" className="col-span-12 xl:col-span-2" role="navigation" aria-label="Principles filter">
      {/* Header "Leadership Principles" */}
      <div className="mb-3 pb-2 border-b-2 border-[#FF9900]">
        <h2 className="text-sm font-bold text-[#232F3E] uppercase tracking-wider">
          {t('leadershipPrinciplesTitle')}
        </h2>
      </div>

      {/* Botão "Todos os Princípios" - estilo título clicável */}
      <button
        className={clsx(
          "w-full mb-4 px-3 py-2.5 rounded text-base text-left font-bold uppercase tracking-wide transition-all flex items-center gap-2",
          {
            "bg-[#232F3E] text-white shadow-lg": selectedPrinciple === "all",
            "bg-slate-100 text-[#232F3E] hover:bg-slate-200": selectedPrinciple !== "all",
          }
        )}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedPrinciple("all");
          setShowTopCases(false);
          setSearchTerm("");
          setQuestionSearch("");
          setTypicalQuestionSearch("");
          clearHighlights();
          clearExpanded();
        }}
        aria-pressed={selectedPrinciple === "all"}
      >
        <span className="text-lg">🏠</span>
        {t('filterAll')}
      </button>

      {/* Botões dos 16 LPs - estilo Amazon com fundo */}
      {(principlesData || []).map((p) => (
        <button
          key={`side-${p.id}`}
          className={clsx(
            "w-full mb-2 px-4 py-2.5 rounded-md text-sm text-left font-medium transition-all shadow-sm",
            {
              "bg-[#FF9900] text-white shadow-md scale-[1.02]": selectedPrinciple === p.id,
              "bg-gradient-to-r from-white to-slate-50 border border-slate-200 text-[#232F3E] hover:border-[#FF9900] hover:shadow-md hover:scale-[1.01]": selectedPrinciple !== p.id,
            }
          )}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedPrinciple(p.id);
            setShowTopCases(false);
            setSearchTerm("");
            setQuestionSearch(""); // Clear FUP search
            setTypicalQuestionSearch(""); // Clear Typical Questions search
            clearHighlights();
            clearExpanded();
          }}
          aria-pressed={selectedPrinciple === p.id}
        >
          {getDisplayName(p, language)}
        </button>
      ))}
    </aside>
  );
}
