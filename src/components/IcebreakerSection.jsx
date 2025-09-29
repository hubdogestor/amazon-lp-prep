import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, Coffee, User } from 'lucide-react';

const IcebreakerSection = ({ icebreakerData, language }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const content = icebreakerData?.[language] || icebreakerData?.pt || 'Conteúdo do icebreaker não disponível';
  const isDefaultContent = content.includes('carregados aqui') || content.includes('loaded here');

  return (
    <Card className="w-full mb-6 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-orange-100/50 transition-colors rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-xl font-bold text-orange-800">
                <div className="p-2 bg-orange-200 rounded-full">
                  <Coffee className="h-5 w-5 text-orange-700" />
                </div>
                {language === 'pt' ? 'Quebra-gelo' : 'Icebreaker'}
              </CardTitle>
              <div className="flex items-center gap-2">
                {!isDefaultContent && (
                  <div className="flex items-center gap-1 text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    <User className="h-3 w-3" />
                    {language === 'pt' ? 'Personalizado' : 'Personalized'}
                  </div>
                )}
                <Button variant="ghost" size="sm" className="p-2">
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 text-orange-600" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-orange-600" />
                  )}
                </Button>
              </div>
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <CardContent className="pt-0">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-orange-100">
              {isDefaultContent ? (
                <div className="text-center py-8">
                  <div className="text-slate-400 mb-4">
                    <User className="h-12 w-12 mx-auto mb-3" />
                  </div>
                  <p className="text-slate-600 mb-4">
                    {language === 'pt' 
                      ? 'Conteúdo do icebreaker será carregado quando você importar o arquivo data_icebreaker.json'
                      : 'Icebreaker content will be loaded when you import the data_icebreaker.json file'
                    }
                  </p>
                  <div className="text-sm text-slate-500 bg-slate-50 p-3 rounded border">
                    {language === 'pt' 
                      ? 'Use o botão "Importar Dados" no cabeçalho para carregar seu conteúdo personalizado.'
                      : 'Use the "Import Data" button in the header to load your personalized content.'
                    }
                  </div>
                </div>
              ) : (
                <div className="prose prose-slate max-w-none">
                  <div className="whitespace-pre-wrap text-slate-700 leading-relaxed">
                    {content}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default IcebreakerSection;
