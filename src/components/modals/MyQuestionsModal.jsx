import { useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import myQuestionsData from "../../data/myQuestions.js";
import { slugify } from "../../utils/textUtils.js";

export default function MyQuestionsModal({ language: initialLanguage, onClose, usedQuestions = {}, onToggleQuestion = () => {} }) {
  const [language, setLanguage] = useState(initialLanguage);
  const data = myQuestionsData[language];
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (idx) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
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
        onClick={(event) => event.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 flex items-center justify-between">
          <h2 id="myquestions-title" className="text-2xl font-bold text-white flex items-center gap-2">
            ?? {data.title}
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="text-white hover:bg-white/20 rounded-lg px-4 py-2 transition font-semibold flex items-center gap-2"
              aria-label="Toggle language"
            >
              ?? {language === "pt" ? "EN" : "PT"}
            </button>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-lg px-3 py-2 transition text-xl"
              aria-label="Close my questions modal"
            >
              ?
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
                      {isExpanded
                        ? language === "pt" ? "Fechar ?" : "Close ?"
                        : language === "pt" ? "Ver perguntas" : "View questions"}
                    </span>
                  </div>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 bg-white/40">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {category.questions.map((item, qIdx) => {
                          const questionStorageId = `my-${slugify(category.category)}-${qIdx}`;
                          const isQuestionUsed = !!usedQuestions[questionStorageId];
                          const toggleTooltip = isQuestionUsed
                            ? (language === "pt" ? "Remover marca de pergunta usada" : "Unmark question as used")
                            : (language === "pt" ? "Marcar pergunta como usada" : "Mark question as used");

                          return (
                            <div
                              key={qIdx}
                              className={`relative border-l-4 border-purple-400 pl-4 pr-2 py-3 rounded-lg bg-white/70 shadow-sm ${
                                isQuestionUsed ? "opacity-80" : ""
                              }`}
                            >
                              <button
                                type="button"
                                onClick={() => onToggleQuestion(questionStorageId)}
                                className={`absolute top-2 right-2 inline-flex h-8 w-8 items-center justify-center rounded-full border transition ${
                                  isQuestionUsed
                                    ? "border-green-300 bg-green-50 text-green-600"
                                    : "border-slate-200 bg-white text-slate-500 hover:bg-slate-100"
                                }`}
                                title={toggleTooltip}
                                aria-label={toggleTooltip}
                                aria-pressed={isQuestionUsed}
                              >
                                {isQuestionUsed ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                              </button>
                              <div className={`font-semibold text-slate-800 pr-10 ${isQuestionUsed ? "line-through decoration-slate-400" : ""}`}>
                                {item.q}
                              </div>
                              <div className={`mt-1 text-sm italic text-slate-600 pr-8 ${isQuestionUsed ? "line-through decoration-slate-300 text-slate-500" : ""}`}>
                                ?? {item.note}
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