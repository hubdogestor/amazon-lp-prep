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
  onCloseMobileDrawer,
}) {
  const { t } = useTranslation();
  return (
    <aside id="sidebar" className="col-span-12 xl:col-span-2 sticky top-4 h-fit" role="complementary" aria-label="Principles filter">
      {/* Header "Leadership Principles" */}
      <div className="mb-3 pb-2 border-b-2 border-[#FF9900]">
        <h2 className="text-sm font-bold text-[#232F3E] uppercase tracking-wider">
          {t('leadershipPrinciplesTitle')}
        </h2>
      </div>

      {/* Botões dos 16 LPs - estilo Amazon com fundo */}
      {(principlesData || []).map((p) => (
        <button
          key={`side-${p.id}`}
          className={clsx(
            "w-full mb-2 px-4 py-2.5 rounded-md text-sm text-left font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800",
            {
              "bg-[#FF9900] text-white shadow-md scale-[1.02] dark:bg-orange-600": selectedPrinciple === p.id,
              "bg-gradient-to-r from-white to-slate-50 border border-slate-200 text-[#232F3E] hover:border-[#FF9900] hover:shadow-md dark:from-slate-800 dark:to-slate-700 dark:border-slate-600 dark:text-slate-100 dark:hover:border-orange-500": selectedPrinciple !== p.id,
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
            onCloseMobileDrawer?.();
          }}
          aria-pressed={selectedPrinciple === p.id}
        >
          <span className="relative z-10">{getDisplayName(p, language)}</span>
          <span className={clsx(
            "absolute inset-0 rounded-md opacity-0 transition-opacity duration-200",
            selectedPrinciple === p.id ? "bg-white/20" : "hover:bg-[#FF9900]/10 dark:hover:bg-orange-500/20"
          )}></span>
        </button>
      ))}
    </aside>
  );
}
