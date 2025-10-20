import { useState, useEffect } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import { useTranslation } from "react-i18next";
import myQuestionsData from "../../data/myQuestions.js";
import { slugify } from "../../utils/textUtils.js";

const BrazilFlagIcon = () => (
  <svg width="24" height="17" viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="1000" height="700" fill="#009246" />
    <polygon points="500,119 830,350 500,581 170,350" fill="#FEE100" />
    <circle cx="500" cy="350" r="175" fill="#012169" />
  </svg>
);

const UsaFlagIcon = () => (
  <svg width="24" height="17" viewBox="0 0 1235 650" xmlns="http://www.w3.org/2000/svg">
    <path fill="#FFF" d="M0 0h1235v650H0"/>
    <path stroke="#B22234" strokeDasharray="50" strokeWidth="2470" d="M0 0v651"/>
    <path fill="#3C3B6E" d="M0 0h494v350H0"/>
    <g fill="#FFF">
      <g id="e">
        <g id="d">
          <g id="f">
            <g id="c">
              <g id="b">
                <path id="a" d="m30 50.6 12-36 12 36-30.8-22H61"/>
                <use href="#a" x="82"/>
              </g>
              <use href="#b" x="164"/>
              <use href="#a" x="328"/>
            </g>
            <use href="#a" x="410"/>
          </g>
          <use href="#c" x="41" y="35"/>
        </g>
        <use href="#d" y="70"/>
      </g>
      <use href="#e" y="140"/>
      <use href="#f" y="280"/>
    </g>
  </svg>
);

export default function MyQuestionsModal({ language: initialLanguage, onClose, usedQuestions = {}, onToggleQuestion = () => {} }) {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(initialLanguage);
  const data = myQuestionsData[language];
  const [expandedCategories, setExpandedCategories] = useState({});

  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

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
            🧠 {data.title}
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="bg-white/20 text-white hover:bg-white/30 rounded-lg px-4 py-2 transition font-semibold flex items-center gap-2"
              aria-label="Toggle language"
            >
              {language === 'pt' ? (
                <>PT <BrazilFlagIcon /></>
              ) : (
                <>EN <UsaFlagIcon /></>
              )}
            </button>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-lg px-3 py-2 transition text-xl font-bold"
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
                  <button
                    type="button"
                    className="w-full text-left flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-white/60 transition"
                    onClick={() => toggleCategory(catIdx)}
                    aria-expanded={isExpanded}
                    aria-controls={`category-content-${catIdx}`}
                  >
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span className="text-2xl">{category.icon}</span>
                      <span>{category.category}</span>
                      <span className="text-sm font-normal text-slate-500">({category.questions.length} perguntas)</span>
                    </h3>
                    <span className="text-sm text-purple-600 select-none">
                      {isExpanded
                        ? t('closeCategory')
                        : t('viewQuestions')}
                    </span>
                  </button>

                  {isExpanded && (
                    <div id={`category-content-${catIdx}`} className="px-5 pb-5 pt-2 bg-white/40">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {category.questions.map((item, qIdx) => {
                          const questionStorageId = `my-${slugify(category.category)}-${qIdx}`;
                          const isQuestionUsed = !!usedQuestions[questionStorageId];
                          const toggleTooltip = isQuestionUsed
                            ? t('unmarkUsedQuestion')
                            : t('markUsedQuestion');

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
            {t('close')}
          </button>
        </div>
      </div>
    </div>
  );
}