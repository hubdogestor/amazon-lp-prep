import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Upload, FileText, CheckCircle, AlertCircle, RefreshCw, Download } from 'lucide-react';

const DataImportDialog = ({ 
  isOpen, 
  onOpenChange, 
  onImportData, 
  onResetData, 
  dataStatus, 
  language 
}) => {
  const [importResult, setImportResult] = useState(null);
  const [isImporting, setIsImporting] = useState(false);

  const handleFileImport = async (event, type) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsImporting(true);
    setImportResult(null);

    try {
      const result = await onImportData(file, type);
      setImportResult(result);
    } catch (error) {
      setImportResult({
        success: false,
        message: `Error importing file: ${error.message}`
      });
    } finally {
      setIsImporting(false);
      // Clear file input
      event.target.value = '';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'loaded':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Carregado</Badge>;
      case 'imported':
        return <Badge className="bg-blue-100 text-blue-800"><Upload className="h-3 w-3 mr-1" />Importado</Badge>;
      default:
        return <Badge variant="outline"><AlertCircle className="h-3 w-3 mr-1" />Padrão</Badge>;
    }
  };

  const downloadSampleFile = (type) => {
    let sampleData;
    let filename;

    if (type === 'icebreaker') {
      sampleData = {
        pt: "Olá! Sou [Seu Nome], um profissional com [X] anos de experiência em [sua área]. Minha trajetória inclui...",
        en: "Hello! I'm [Your Name], a professional with [X] years of experience in [your field]. My journey includes..."
      };
      filename = 'data_icebreaker_sample.json';
    } else {
      sampleData = [
        {
          id: "customer-obsession",
          title: {
            pt: "Obsessão pelo Cliente",
            en: "Customer Obsession"
          },
          description: {
            pt: "Líderes começam com o cliente e trabalham de trás para frente.",
            en: "Leaders start with the customer and work backwards."
          },
          cases: [
            {
              id: "case-1",
              title: {
                pt: "Exemplo de Caso",
                en: "Sample Case"
              },
              storytelling: {
                pt: {
                  situation: "Descreva a situação...",
                  task: "Qual era sua tarefa...",
                  action: "Que ações você tomou...",
                  result: "Quais foram os resultados...",
                  learning: "O que você aprendeu..."
                },
                en: {
                  situation: "Describe the situation...",
                  task: "What was your task...",
                  action: "What actions did you take...",
                  result: "What were the results...",
                  learning: "What did you learn..."
                }
              },
              fupQuestions: [
                {
                  id: "fup-1",
                  question: {
                    pt: "Como você mediria o sucesso nesta situação?",
                    en: "How would you measure success in this situation?"
                  },
                  answer: {
                    pt: "Resposta da pergunta de follow-up...",
                    en: "Follow-up question answer..."
                  }
                }
              ]
            }
          ]
        }
      ];
      filename = 'data_principles_sample.json';
    }

    const blob = new Blob([JSON.stringify(sampleData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            {language === 'pt' ? 'Importar Dados' : 'Import Data'}
          </DialogTitle>
          <DialogDescription>
            {language === 'pt' 
              ? 'Importe seus arquivos JSON personalizados ou baixe exemplos para começar.'
              : 'Import your custom JSON files or download samples to get started.'
            }
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Current Status */}
          <div className="space-y-3">
            <h4 className="font-medium text-slate-700">
              {language === 'pt' ? 'Status Atual' : 'Current Status'}
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-sm font-medium">Icebreaker:</span>
                {getStatusBadge(dataStatus.icebreaker)}
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-sm font-medium">
                  {language === 'pt' ? 'Princípios:' : 'Principles:'}
                </span>
                {getStatusBadge(dataStatus.principles)}
              </div>
            </div>
          </div>

          {/* Import Section */}
          <div className="space-y-4">
            <h4 className="font-medium text-slate-700">
              {language === 'pt' ? 'Importar Arquivos' : 'Import Files'}
            </h4>
            
            {/* Icebreaker Import */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="icebreaker-file" className="text-sm font-medium">
                  data_icebreaker.json
                </Label>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => downloadSampleFile('icebreaker')}
                  className="text-xs"
                >
                  <Download className="h-3 w-3 mr-1" />
                  {language === 'pt' ? 'Exemplo' : 'Sample'}
                </Button>
              </div>
              <Input
                id="icebreaker-file"
                type="file"
                accept=".json"
                onChange={(e) => handleFileImport(e, 'icebreaker')}
                disabled={isImporting}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
              />
            </div>

            {/* Principles Import */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="principles-file" className="text-sm font-medium">
                  data_principles.json
                </Label>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => downloadSampleFile('principles')}
                  className="text-xs"
                >
                  <Download className="h-3 w-3 mr-1" />
                  {language === 'pt' ? 'Exemplo' : 'Sample'}
                </Button>
              </div>
              <Input
                id="principles-file"
                type="file"
                accept=".json"
                onChange={(e) => handleFileImport(e, 'principles')}
                disabled={isImporting}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          </div>

          {/* Import Result */}
          {importResult && (
            <Alert className={importResult.success ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}>
              <div className="flex items-center gap-2">
                {importResult.success ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-600" />
                )}
                <AlertDescription className={importResult.success ? 'text-green-800' : 'text-red-800'}>
                  {importResult.message}
                </AlertDescription>
              </div>
            </Alert>
          )}

          {/* Reset Options */}
          <div className="space-y-3 pt-4 border-t">
            <h4 className="font-medium text-slate-700">
              {language === 'pt' ? 'Opções de Reset' : 'Reset Options'}
            </h4>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onResetData('icebreaker')}
                className="text-xs"
              >
                <RefreshCw className="h-3 w-3 mr-1" />
                Reset Icebreaker
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onResetData('principles')}
                className="text-xs"
              >
                <RefreshCw className="h-3 w-3 mr-1" />
                {language === 'pt' ? 'Reset Princípios' : 'Reset Principles'}
              </Button>
            </div>
          </div>

          {/* Loading State */}
          {isImporting && (
            <div className="flex items-center justify-center py-4">
              <div className="flex items-center gap-2 text-slate-600">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-orange-600"></div>
                {language === 'pt' ? 'Importando...' : 'Importing...'}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DataImportDialog;
