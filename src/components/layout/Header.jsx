Text file: Header.jsx
Latest content with line numbers:
1	import { Search, Home } from "lucide-react";
2	import clsx from "clsx";
3	import { useTranslation } from "react-i18next";
4	import CaseSearchResults from "../search/CaseSearchResults.jsx";
5	import FupSearchResults from "../search/FupSearchResults.jsx";
6	import TypicalQuestionSearchResults from "../search/TypicalQuestionSearchResults.jsx";
7	import HeaderTimer from "./HeaderTimer.jsx";
8	import { slugify } from "../../utils/textUtils.js";
9	
10	export default function Header({
11	  language,
12	  setLanguage,
13	  searchTerm,
14	  setSearchTerm,
15	  questionSearch,
16	  setQuestionSearch,
17	  typicalQuestionSearch,
18	  setTypicalQuestionSearch,
19	  showTopCases,
20	  setShowTopCases,
21	  setShowIcebreaker,
22	  setShowMyQuestions,
23	  selectedLooping,
24	  setSelectedLooping,
25	  caseSearchResults,
26	  fupSearchResults,
27	  typicalQuestionSearchResults,
28	  handleCaseSearchResultSelect,
29	  handleFupSearchResultSelect,
30	  handleTypicalSearchResultSelect,
31	  toggleUsedCase,
32	  usedCases,
33	  toggleUsedQuestion,
34	  usedQuestions,
35	  getDisplayCaseTitle,
36	  getDisplayName,
37	  clearExpanded,
38	  clearHighlights,
39	  setSelectedPrinciple,
40	  debouncedQuestionSearch,
41	  debouncedTypicalQuestionSearch,
42	  loopingGroups,
43	  onHomeClick,
44	}) {
45	  const { t } = useTranslation();
46	  return (
47	    <header
48	      id="stickyHeader"
49	      className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
50	      role="banner"
51	    >
52	      <div className="max-w-[1600px] mx-auto px-6 py-3">
53	        <div className="flex gap-3 items-center">
54	          {/* Home Button */}
55	          <button
56	            onClick={onHomeClick}
57	            className="p-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 transition-colors flex-shrink-0"
58	            aria-label="Home"
59	            title="Voltar ao início"
60	          >
61	            <Home className="w-5 h-5 text-slate-700" />
62	          </button>
63	
64	          {/* Busca por palavras */}
65	          <div className="flex-1 min-w-0">
66	            <div id="kSearch" className="relative">
67	              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 z-10" aria-hidden="true" />
68	              <input
69	                type="search"
70	                placeholder={t('kSearch')}
71	                value={searchTerm}
72	                onChange={(e) => {
73	                  setSearchTerm(e.target.value);
74	                  if (e.target.value) {
75	                    setShowTopCases(false);
76	                    clearExpanded();
77	                  }
78	                }}
79	                onFocus={() => {
80	                  setQuestionSearch("");
81	                  setTypicalQuestionSearch("");
82	                  clearHighlights();
83	                }}
84	                className="w-full pl-10 pr-4 py-3 text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white text-center"
85	                aria-label={t('kSearch')}
86	                aria-expanded={!!searchTerm && caseSearchResults.length > 0}
87	                aria-controls="case-dropdown"
88	              />
89	              {searchTerm && caseSearchResults.length > 0 && (
90	                <div
91	                  id="case-dropdown"
92	                  role="listbox"
93	                  aria-live="polite"
94	                  className="absolute z-20 mt-2 left-0 right-0 min-w-[800px] bg-white shadow-lg border border-slate-200 rounded-lg max-h-96 overflow-auto"
95	                >
96	                  <CaseSearchResults
97	                    results={caseSearchResults}
98	                    language={language}
99	                    onSelect={handleCaseSearchResultSelect}
100	                    onToggleUsed={(id) => toggleUsedCase(id)}
101	                    isCaseUsed={(id) => !!usedCases[id]}
102	                    getDisplayCaseTitle={getDisplayCaseTitle}
103	                    getDisplayName={getDisplayName}
104	                    getCaseStorageId={(caseItem) => caseItem.id || slugify(caseItem.title || "")}
105	                  />
106	                </div>
107	              )}
108	            </div>
109	          </div>
110	
111	          {/* Busca por FUPs */}
112	          <div className="flex-1 min-w-0">
113	            <div id="kFup" className="relative">
114	              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 z-10" aria-hidden="true" />
115	              <input
116	                type="search"
117	                placeholder={t('kFup')}
118	                value={questionSearch}
119	                onChange={(e) => setQuestionSearch(e.target.value)}
120	                onFocus={() => {
121	                  setSearchTerm("");
122	                  setTypicalQuestionSearch("");
123	                  clearHighlights();
124	                }}
125	                className="w-full pl-10 pr-3 py-3 text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white text-center"
126	                aria-label={t('kFup')}
127	                aria-expanded={!!questionSearch}
128	                aria-controls="fup-dropdown"
129	              />
130	              {questionSearch && (
131	                <div
132	                  id="fup-dropdown"
133	                  role="listbox"
134	                  aria-live="polite"
135	                  className="absolute z-20 mt-2 left-0 right-0 min-w-[800px] bg-white shadow-lg border border-slate-200 rounded-lg max-h-72 overflow-auto"
136	                >
137	                  {fupSearchResults.length > 0 ? (
138	                    <FupSearchResults
139	                      results={fupSearchResults}
140	                      language={language}
141	                      searchTerm={debouncedQuestionSearch}
142	                      onSelect={handleFupSearchResultSelect}
143	                      getDisplayName={getDisplayName}
144	                      getDisplayCaseTitle={getDisplayCaseTitle}
145	                    />
146	                  ) : (
147	                    <div className="px-3 py-2 text-slate-500 text-sm">{t('noResult')}</div>
148	                  )}
149	                </div>
150	              )}
151	            </div>
152	          </div>
153	
154	          {/* Busca por Perguntas Típicas + Looping Selector */}
155	          <div className="flex-1 min-w-0">
156	            <div className="flex gap-2">
157	              {/* Looping Selector */}
158	              <div className="relative">
159	                <select
160	                  value={selectedLooping || ""}
161	                  onChange={(e) => setSelectedLooping(e.target.value || null)}
162	                  className="h-full px-2 py-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white font-medium"
163	                  aria-label="Select looping group"
164	                  title={t('filterLoopingGroup')}
165	                >
166	                  <option value="">{t('all')}</option>
167	                  {loopingGroups.map((group) => (
168	                    <option key={group.id} value={group.id}>
169	                      {group.label}
170	                    </option>
171	                  ))}
172	                </select>
173	              </div>
174	
175	              {/* Search Box */}
176	              <div id="kTypical" className="relative flex-1">
177	                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 z-10" aria-hidden="true" />
178	                <input
179	                  type="search"
180	                  placeholder={t('kTypical')}
181	                  value={typicalQuestionSearch}
182	                  onChange={(e) => setTypicalQuestionSearch(e.target.value)}
183	                  onFocus={() => {
184	                    setSearchTerm("");
185	                    setQuestionSearch("");
186	                    clearHighlights();
187	                  }}
188	                  className="w-full pl-10 pr-3 py-3 text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white text-center"
189	                  aria-label={t('kTypical')}
190	                  aria-expanded={!!typicalQuestionSearch}
191	                  aria-controls="typical-dropdown"
192	                />
193	                {typicalQuestionSearch && (
194	                  <div
195	                    id="typical-dropdown"
196	                    role="listbox"
197	                    aria-live="polite"
198	                    className="absolute z-20 mt-2 left-0 right-0 min-w-[800px] bg-white shadow-lg border border-slate-200 rounded-lg max-h-72 overflow-auto"
199	                  >
200	                    {typicalQuestionSearchResults.length > 0 ? (
201	                      <TypicalQuestionSearchResults
202	                        results={typicalQuestionSearchResults}
203	                        language={language}
204	                        searchTerm={debouncedTypicalQuestionSearch}
205	                        onSelect={handleTypicalSearchResultSelect}
206	                        isQuestionUsed={(id) => !!usedQuestions[id]}
207	                        onToggleQuestion={toggleUsedQuestion}
208	                        getDisplayName={getDisplayName}
209	                      />
210	                    ) : (
211	                      <div className="px-3 py-2 text-slate-500 text-sm">{t('noResult')}</div>
212	                    )}
213	                  </div>
214	                )}
215	              </div>
216	            </div>
217	          </div>
218	
219	          {/* Top Cases */}
220	          <div className="flex-shrink-0">
221	            <button
222	              id="topCasesBtn"
223	              className={clsx(
224	                "w-full px-3 py-3 text-base rounded-lg border transition",
225	                {
226	                  "bg-yellow-100 border-yellow-300 text-yellow-800": showTopCases,
227	                  "bg-white border-slate-200 text-slate-700 hover:bg-slate-50": !showTopCases,
228	                }
229	              )}
230	              onClick={(e) => {
231	                e.stopPropagation();
232	                clearExpanded();
233	                clearHighlights();
234	                setSearchTerm("");
235	                setSelectedPrinciple("all");
236	                setShowTopCases((v) => !v);
237	              }}
238	              aria-label={showTopCases ? t('hideTopCases') : t('showTopCases')}
239	              aria-pressed={showTopCases}
240	              title={t('showOnlyTopCases')}
241	            >
242	              🎯 {t('topCases')}
243	            </button>
244	          </div>
245	
246	          {/* Icebreaker */}
247	          <div className="flex-shrink-0">
248	            <button
249	              id="icebreakerBtn"
250	              className="w-full px-3 py-3 text-base rounded-lg border transition bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
251	              onClick={(e) => {
252	                e.stopPropagation();
253	                setShowIcebreaker(true);
254	              }}
255	              aria-label={t('openIcebreakerQuestions')}
256	              title={t('icebreakerQuestionsTitle')}
257	            >
258	              💬 {t('icebreaker')}
259	            </button>
260	          </div>
261	
262	          {/* Minhas Perguntas */}
263	          <div className="flex-shrink-0">
264	            <button
265	              id="myQuestionsBtn"
266	              className="w-full px-3 py-3 text-base rounded-lg border transition bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
267	              onClick={(e) => {
268	                e.stopPropagation();
269	                setShowMyQuestions(true);
270	              }}
271	              aria-label={t('openMyQuestions')}
272	              title={t('myQuestionsTitle')}
273	            >
274	              🤔 {t('myQuestions')}
275	            </button>
276	          </div>
277	
278	          {/* Timer */}
279	          <div className="flex-shrink-0 min-w-[180px]">
280	            <HeaderTimer t={t} />
281	          </div>
282	
283	          {/* Idioma */}
284	          <div className="flex-shrink-0">
285	            <div id="langBox" className="w-full flex gap-2" role="group" aria-label="Language selection">
286	              <button
287	                className={clsx(
288	                  "flex-1 px-3 py-3 text-base rounded-lg border",
289	                  {
290	                    "bg-slate-900 text-white": language === "pt",
291	                    "bg-white text-slate-700": language !== "pt",
292	                  }
293	                )}
294	                onClick={(e) => {
295	                  e.stopPropagation();
296	                  setLanguage("pt");
297	                }}
298	                aria-label="Portuguese"
299	                aria-pressed={language === "pt"}
300	              >
301	                PT
302	              </button>
303	              <button
304	                className={clsx(
305	                  "flex-1 px-3 py-3 text-base rounded-lg border",
306	                  {
307	                    "bg-slate-900 text-white": language === "en",
308	                    "bg-white text-slate-700": language !== "en",
309	                  }
310	                )}
311	                onClick={(e) => {
312	                  e.stopPropagation();
313	                  setLanguage("en");
314	                }}
315	                aria-label="English"
316	                aria-pressed={language === "en"}
317	              >
318	                EN
319	              </button>
320	            </div>
321	          </div>
322	        </div>
323	      </div>
324	    </header>
325	  );
326	}
327	