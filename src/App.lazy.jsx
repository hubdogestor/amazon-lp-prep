Text file: App.lazy.jsx
Latest content with line numbers:
502	                aria-label={`${showTopCases ? 'Hide' : 'Show'} top cases`}
503	                aria-pressed={showTopCases}
504	                title="Mostrar apenas Top Cases"
505	              >
506	                🎯 {t.topCases}
507	              </button>
508	            </div>
509	
510	            <div className="col-span-2">
511	              <HeaderTimer t={t} />
512	            </div>
513	
514	            <div className="col-span-2">
515	              <div id="langBox" className="w-full flex gap-2" role="group" aria-label="Language selection">
516	                <button
517	                  className={`flex-1 px-3 py-2 rounded-lg text-sm border ${
518	                    language === "pt" ? "bg-slate-900 text-white" : "bg-white text-slate-700"
519	                  }`}
520	                  onClick={(e) => {
521	                    e.stopPropagation();
522	                    setLanguage("pt");
523	                  }}
524	                  aria-label="Portuguese"
525	                  aria-pressed={language === "pt"}
526	                >
527	                  PT
528	                </button>
529	                <button
530	                  className={`flex-1 px-3 py-2 rounded-lg text-sm border ${
531	                    language === "en" ? "bg-slate-900 text-white" : "bg-white text-slate-700"
532	                  }`}
533	                  onClick={(e) => {
534	                    e.stopPropagation();
535	                    setLanguage("en");
536	                  }}
537	                  aria-label="English"
538	                  aria-pressed={language === "en"}
539	                >
540	                  EN
541	                </button>
542	              </div>
543	            </div>
544	          </div>
545	        </div>
546	      </header>
547	
548	      <div className="max-w-[1600px] mx-auto px-6 pt-6">
549	        <div className="grid grid-cols-12 gap-8">
550	          <aside id="sidebar" className="col-span-12 xl:col-span-2" role="navigation" aria-label="Principles filter">
551	            <div
552	              className={`cursor-pointer p-2 rounded-lg transition ${
553	                selectedPrinciple === "all" ? "bg-amber-100 font-semibold text-amber-900" : "hover:bg-slate-50"
554	              }`}
555	              onClick={(e) => {
556	                e.stopPropagation();
557	                setSelectedPrinciple("all");
558	                setShowTopCases(false);
559	                setSearchTerm("");
560	                clearHighlights();
561	                clearExpanded();
562	              }}
563	              role="button"
564	              tabIndex={0}
565	              onKeyDown={(e) => {
566	                if (e.key === 'Enter' || e.key === ' ') {
567	                  e.preventDefault();
568	                  e.currentTarget.click();
569	                }
570	              }}
571	              aria-pressed={selectedPrinciple === "all"}
572	            >
573	              {t.filterAll}
574	            </div>
575	            {(principlesData || []).map((p) => (
576	              <div
577	                key={`side-${p.id}`}
578	                className={`cursor-pointer p-2 rounded-lg transition ${
579	                  selectedPrinciple === p.id ? "bg-amber-100 font-semibold text-amber-900" : "hover:bg-slate-50"
580	                }`}
581	                onClick={(e) => {
582	                  e.stopPropagation();
583	                  setSelectedPrinciple(p.id);
584	                  setShowTopCases(false);
585	                  setSearchTerm("");
586	                  clearHighlights();
587	                  clearExpanded();
588	                }}
589	                role="button"
590	                tabIndex={0}
591	                onKeyDown={(e) => {
592	                  if (e.key === 'Enter' || e.key === ' ') {
593	                    e.preventDefault();
594	                    e.currentTarget.click();
595	                  }
596	                }}
597	                aria-pressed={selectedPrinciple === p.id}
598	              >
599	                {getDisplayName(p, language)}
600	              </div>
601	            ))}
602	          </aside>
603	
604	          <main className="col-span-12 xl:col-span-10 space-y-6" role="main">
605	            {isSearching && (
606	              <div className="text-center py-4 text-slate-500 flex items-center justify-center gap-2" role="status" aria-live="polite">
607	                <LoadingSpinner /> Buscando...
608	              </div>
609	            )}
610	            {(filteredPrinciples || []).map((principle) => (
611	              <section key={principle.id} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
612	                <div className="mb-6">
613	                  <h2 className="text-2xl font-bold mb-3 text-slate-900">{getDisplayName(principle, language)}</h2>
614	                  {principle.principle && (
615	                    <p className="text-slate-600 italic leading-relaxed">
616	                      {language === "en" ? (principle.principle.description_en || principle.principle.description) : principle.principle.description}
617	                    </p>
618	                  )}
619	                </div>
620	
621	                {((principle && principle.cases) || []).map((c, idx) => {
622	                  const caseKey = `${principle.id}-${idx}`;
623	                  const caseDomId = `case-${slugify(c.id || c.title)}`;
624	                  const open = !!expandedCases[c.title];
625	                  const isHighlighted = highlightedCaseId === caseDomId;
626	
627	                  return (
628	                    <article
629	                      key={caseKey}
630	                      id={caseDomId}
631	                      className={`bg-gradient-to-br from-blue-50 to-indigo-50 border rounded-xl p-0 mb-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50 hover:border-blue-300 ${
632	                        isHighlighted ? 'ring-2 ring-amber-300 bg-amber-50' : 'border-blue-200'
633	                      }`}
634	                    >
635	                      <header
636	                        className={`flex items-center justify-between px-5 py-4 ${
637	                          open ? "bg-white/80" : "bg-white/60"
638	                        } hover:bg-white/90 backdrop-blur-sm`}
639	                      >
640	                        <div
641	                          className="flex items-center gap-2 flex-1 cursor-pointer"
642	                          onClick={(e) => {
643	                            e.stopPropagation();
644	                            const hasSearchTerm = !!searchTerm;
645	                            toggleCase(c.title, principle.id, hasSearchTerm);
646	                            if (hasSearchTerm) {
647	                              setHighlightedCase(caseDomId, CASE_EXPAND_DELAY);
648	                            }
649	                          }}
650	                          role="button"
651	                          tabIndex={0}
652	                          aria-expanded={open}
653	                          aria-controls={`case-content-${caseKey}`}
654	                          onKeyDown={(e) => {
655	                            if (e.key === 'Enter' || e.key === ' ') {
656	                              e.preventDefault();
657	                              e.currentTarget.click();
658	                            }
659	                          }}
660	                        >
661	                          <h3 className="text-lg font-bold text-slate-900">
662	                            <HighlightedText
663	                              text={getDisplayCaseTitle(c, language)}
664	                              searchTerm={highlightSearchTerm}
665	                            />
666	                          </h3>
667	                        </div>
668	                        <div className="flex items-center gap-3">
669	                          {open && (
670	                            <button
671	                              onClick={(e) => {
672	                                e.stopPropagation();
673	                                copyPromptToClipboard(c, principle, caseKey);
674	                              }}
675	                              className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border transition-all ${
676	                                copiedCaseId === caseKey
677	                                  ? 'bg-green-50 border-green-300 text-green-700'
678	                                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
679	                              }`}
680	                              title={language === 'pt' ? 'Copiar prompt para IA' : 'Copy prompt for AI'}
681	                              aria-label={language === 'pt' ? 'Gerar e copiar prompt' : 'Generate and copy prompt'}
682	                            >
683	                              {copiedCaseId === caseKey ? (
684	                                <>
685	                                  <Check className="w-4 h-4" />
686	                                  <span>{language === 'pt' ? 'Copiado!' : 'Copied!'}</span>
687	                                </>
688	                              ) : (
689	                                <>
690	                                  <Copy className="w-4 h-4" />
691	                                  <span>{language === 'pt' ? 'Gerar Prompt' : 'Generate Prompt'}</span>
692	                                </>
693	                              )}
694	                            </button>
695	                          )}
696	                          <span
697	                            className="text-sm text-amber-600 select-none cursor-pointer"
698	                            onClick={(e) => {
699	                              e.stopPropagation();
700	                              const hasSearchTerm = !!searchTerm;
701	                              toggleCase(c.title, principle.id, hasSearchTerm);
702	                              if (hasSearchTerm) {
703	                                setHighlightedCase(caseDomId, CASE_EXPAND_DELAY);
704	                              }
705	                            }}
706	                          >
707	                            {open ? t.close : t.viewDetails} ▾
708	                          </span>
709	                        </div>
710	                      </header>
711	
712	                      {open && (
713	                        <div
714	                          id={`case-content-${caseKey}`}
715	                          className="px-6 pb-6 pt-2 grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm text-slate-700 bg-white/40 backdrop-blur-sm"
716	                        >
717	                          <div className="space-y-3">
718	                            <h4 className="text-base font-semibold text-slate-800 border-b border-slate-200 pb-1 mb-3">📋 STAR Case</h4>
719	                            <div className="space-y-2 leading-relaxed">
720	                              <p>
721	                                <strong>{t.situation}:</strong>{" "}
722	                                <HighlightedText
723	                                  text={(c && c[language] && c[language].s) || ""}
724	                                  searchTerm={highlightSearchTerm}
725	                                />
726	                              </p>
727	                              <p>
728	                                <strong>{t.task}:</strong>{" "}
729	                                <HighlightedText
730	                                  text={(c && c[language] && c[language].t) || ""}
731	                                  searchTerm={highlightSearchTerm}
732	                                />
733	                              </p>
734	                              <p>
735	                                <strong>{t.action}:</strong>{" "}
736	                                <HighlightedText
737	                                  text={(c && c[language] && c[language].a) || ""}
738	                                  searchTerm={highlightSearchTerm}
739	                                />
740	                              </p>
741	                              <p>
742	                                <strong>{t.result}:</strong>{" "}
743	                                <HighlightedText
744	                                  text={(c && c[language] && c[language].r) || ""}
745	(Content truncated due to size limit. Use page ranges or line ranges to read remaining content)