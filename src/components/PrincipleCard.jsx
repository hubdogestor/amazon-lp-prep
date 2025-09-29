import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, MessageSquare, BookOpen } from 'lucide-react';

const PrincipleCard = ({ principle, language }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const title = principle.title?.[language] || principle.title?.pt || 'Título não disponível';
  const description = principle.description?.[language] || principle.description?.pt || 'Descrição não disponível';
  const cases = principle.cases || [];

  return (
    <Card className="w-full transition-all duration-300 hover:shadow-lg border-l-4 border-l-orange-500">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-slate-800 mb-2">
              {title}
            </CardTitle>
            <CardDescription className="text-slate-600 italic">
              {description}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="ml-4 bg-orange-100 text-orange-800">
            {cases.length} {language === 'pt' ? 'casos' : 'cases'}
          </Badge>
        </div>
      </CardHeader>

      {cases.length > 0 && (
        <CardContent className="pt-0">
          <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
            <CollapsibleTrigger asChild>
              <Button 
                variant="ghost" 
                className="w-full justify-between p-2 h-auto text-left hover:bg-slate-50"
              >
                <span className="flex items-center gap-2 text-slate-700">
                  <BookOpen className="h-4 w-4" />
                  {language === 'pt' ? 'Ver casos STARL' : 'View STARL cases'}
                </span>
                {isExpanded ? (
                  <ChevronUp className="h-4 w-4 text-slate-500" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-slate-500" />
                )}
              </Button>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="space-y-4 mt-4">
              {cases.map((caseItem, index) => (
                <CaseItem 
                  key={caseItem.id || index}
                  caseItem={caseItem}
                  language={language}
                  isSelected={selectedCase === index}
                  onSelect={() => setSelectedCase(selectedCase === index ? null : index)}
                />
              ))}
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      )}
    </Card>
  );
};

const CaseItem = ({ caseItem, language, isSelected, onSelect }) => {
  const title = caseItem.title?.[language] || caseItem.title?.pt || 'Caso sem título';
  const storytelling = caseItem.storytelling?.[language] || caseItem.storytelling?.pt || {};
  const fupQuestions = caseItem.fupQuestions || [];

  return (
    <div className="border rounded-lg p-4 bg-slate-50">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-slate-800">{title}</h4>
        <div className="flex items-center gap-2">
          {fupQuestions.length > 0 && (
            <Badge variant="outline" className="text-xs">
              <MessageSquare className="h-3 w-3 mr-1" />
              {fupQuestions.length} FUP-Q
            </Badge>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={onSelect}
            className="text-xs"
          >
            {isSelected ? 
              (language === 'pt' ? 'Ocultar' : 'Hide') : 
              (language === 'pt' ? 'Ver detalhes' : 'View details')
            }
          </Button>
        </div>
      </div>

      {isSelected && (
        <div className="space-y-4 mt-4 border-t pt-4">
          {/* STARL Storytelling */}
          {storytelling && Object.keys(storytelling).length > 0 && (
            <div className="space-y-3">
              <h5 className="font-medium text-slate-700 flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                {language === 'pt' ? 'Storytelling (STARL)' : 'STARL Storytelling'}
              </h5>
              
              {storytelling.situation && (
                <div className="bg-white p-3 rounded border-l-4 border-l-blue-400">
                  <strong className="text-blue-700">
                    {language === 'pt' ? 'Situação:' : 'Situation:'}
                  </strong>
                  <p className="mt-1 text-slate-700">{storytelling.situation}</p>
                </div>
              )}
              
              {storytelling.task && (
                <div className="bg-white p-3 rounded border-l-4 border-l-green-400">
                  <strong className="text-green-700">
                    {language === 'pt' ? 'Tarefa:' : 'Task:'}
                  </strong>
                  <p className="mt-1 text-slate-700">{storytelling.task}</p>
                </div>
              )}
              
              {storytelling.action && (
                <div className="bg-white p-3 rounded border-l-4 border-l-orange-400">
                  <strong className="text-orange-700">
                    {language === 'pt' ? 'Ação:' : 'Action:'}
                  </strong>
                  <p className="mt-1 text-slate-700">{storytelling.action}</p>
                </div>
              )}
              
              {storytelling.result && (
                <div className="bg-white p-3 rounded border-l-4 border-l-purple-400">
                  <strong className="text-purple-700">
                    {language === 'pt' ? 'Resultado:' : 'Result:'}
                  </strong>
                  <p className="mt-1 text-slate-700">{storytelling.result}</p>
                </div>
              )}
              
              {storytelling.learning && (
                <div className="bg-white p-3 rounded border-l-4 border-l-indigo-400">
                  <strong className="text-indigo-700">
                    {language === 'pt' ? 'Aprendizado:' : 'Learning:'}
                  </strong>
                  <p className="mt-1 text-slate-700">{storytelling.learning}</p>
                </div>
              )}
            </div>
          )}

          {/* Follow-up Questions */}
          {fupQuestions.length > 0 && (
            <div className="space-y-3">
              <h5 className="font-medium text-slate-700 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                {language === 'pt' ? 'Perguntas de Follow-up' : 'Follow-up Questions'}
              </h5>
              
              {fupQuestions.map((fup, fupIndex) => (
                <div key={fup.id || fupIndex} className="bg-white p-3 rounded border">
                  <div className="font-medium text-slate-800 mb-2">
                    {fupIndex + 1}. {fup.question?.[language] || fup.question?.pt || 'Pergunta não disponível'}
                  </div>
                  <div className="text-slate-600 text-sm pl-4 border-l-2 border-slate-200">
                    {fup.answer?.[language] || fup.answer?.pt || 'Resposta não disponível'}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PrincipleCard;
