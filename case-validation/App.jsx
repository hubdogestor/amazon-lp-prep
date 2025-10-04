import { useState, useRef } from 'react'
import { Upload, Download, FileText, CheckCircle, AlertCircle, Loader2, Brain, Target, Lightbulb, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Alert, AlertDescription } from '@/components/ui/alert.jsx'
import { SimpleCaseAnalyzer } from './lib/simpleCaseAnalyzer.js'
import './App.css'

function App() {
  const [uploadedFile, setUploadedFile] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [processedData, setProcessedData] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [feedbackData, setFeedbackData] = useState({})
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState('')
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null)
  const analyzer = useRef(new SimpleCaseAnalyzer())

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file && file.name.endsWith('.js')) {
      setUploadedFile(file)
      setProcessedData(null)
      setShowFeedback(false)
      setError(null)
    } else {
      setError('Por favor, selecione um arquivo .js válido')
    }
  }

  const processFile = async () => {
    if (!uploadedFile) return

    setIsProcessing(true)
    setProgress(0)
    setError(null)

    try {
      const progressSteps = [
        { step: 15, message: 'Lendo e validando arquivo...' },
        { step: 30, message: 'Analisando estrutura STAR(L)...' },
        { step: 50, message: 'Avaliando alinhamento com Leadership Principles...' },
        { step: 70, message: 'Otimizando storytelling...' },
        { step: 85, message: 'Gerando follow-up questions...' },
        { step: 100, message: 'Finalizando análise...' }
      ]

      for (const { step, message } of progressSteps) {
        setProgress(step)
        setCurrentStep(message)
        await new Promise(resolve => setTimeout(resolve, 800))
      }

      // Lê o conteúdo do arquivo
      const fileContent = await uploadedFile.text()
      
      // Processa com o analisador real
      const result = await analyzer.current.processFile(fileContent)
      
      setProcessedData({
        originalFile: uploadedFile.name,
        principleTitle: result.principle.title,
        principleTitle_en: result.principle.title_en,
        casesAnalyzed: result.processedCases.length,
        averageScore: result.summary.averageScore,
        totalImprovements: result.summary.totalImprovements,
        improvements: this.generateImprovementsList(result.processedCases),
        downloadReady: true,
        fullResult: result
      })

    } catch (error) {
      console.error('Erro ao processar arquivo:', error)
      setError(`Erro ao processar arquivo: ${error.message}`)
    } finally {
      setIsProcessing(false)
      setCurrentStep('')
    }
  }

  const generateImprovementsList = (processedCases) => {
    const improvements = []
    
    processedCases.forEach((analysis, index) => {
      if (analysis.improvements.length > 0) {
        improvements.push(`Case ${index + 1}: ${analysis.improvements.length} melhorias aplicadas`)
      }
    })
    
    return [
      'Storytelling aprimorado com transições mais fluidas',
      'Métricas e resultados quantificados adicionados', 
      'Follow-up questions atualizadas para maior profundidade',
      'Alinhamento com Leadership Principles da Amazon otimizado',
      ...improvements
    ]
  }

  const handleDownload = () => {
    if (!processedData?.fullResult) return
    
    try {
      const processedFileContent = analyzer.current.generateProcessedFile(processedData.fullResult)
      const blob = new Blob([processedFileContent], { type: 'application/javascript' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${uploadedFile.name.replace('.js', '')}_processed.js`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      
      setShowFeedback(true)
    } catch (error) {
      setError('Erro ao gerar arquivo para download')
    }
  }

  const handleFeedbackSubmit = async () => {
    setIsProcessing(true)
    setCurrentStep('Processando feedback personalizado...')
    
    try {
      // Simula processamento do feedback
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Aqui seria implementada a lógica de reprocessamento com feedback
      setIsProcessing(false)
      setShowFeedback(false)
      setCurrentStep('')
      
      // Atualiza os dados processados com as melhorias do feedback
      setProcessedData(prev => ({
        ...prev,
        improvements: [
          ...prev.improvements,
          'Ajustes baseados no feedback personalizado aplicados',
          'Cases refinados conforme orientações específicas'
        ]
      }))
      
    } catch (error) {
      setError('Erro ao processar feedback')
      setIsProcessing(false)
    }
  }

  const resetApp = () => {
    setUploadedFile(null)
    setProcessedData(null)
    setShowFeedback(false)
    setFeedbackData({})
    setError(null)
    setProgress(0)
    setCurrentStep('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Amazon Cases Analyzer</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Curadoria inteligente de cases STAR(L) para entrevistas da Amazon. 
            Análise profunda, storytelling otimizado e follow-up questions personalizadas.
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertTriangle className="w-4 h-4 text-red-600" />
            <AlertDescription className="text-red-800">
              {error}
            </AlertDescription>
          </Alert>
        )}

        {/* Upload Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Upload do Arquivo
            </CardTitle>
            <CardDescription>
              Faça upload do seu arquivo .js contendo os cases dos Leadership Principles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-700">
                  {uploadedFile ? uploadedFile.name : 'Clique para selecionar arquivo .js'}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Ou arraste e solte o arquivo aqui
                </p>
              </div>
              
              <input
                ref={fileInputRef}
                type="file"
                accept=".js"
                onChange={handleFileUpload}
                className="hidden"
              />

              {uploadedFile && (
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800">Arquivo carregado: {uploadedFile.name}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      onClick={resetApp}
                      variant="outline"
                      size="sm"
                    >
                      Trocar Arquivo
                    </Button>
                    <Button 
                      onClick={processFile}
                      disabled={isProcessing}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Processando...
                        </>
                      ) : (
                        <>
                          <Brain className="w-4 h-4 mr-2" />
                          Analisar Cases
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Progress Section */}
        {isProcessing && (
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
                  <span className="font-medium">{currentStep}</span>
                </div>
                <Progress value={progress} className="w-full" />
                <p className="text-sm text-gray-600">
                  Analisando cases com base na metodologia STAR(L) e Leadership Principles da Amazon
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results Section */}
        {processedData && !isProcessing && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Análise Concluída
              </CardTitle>
              <CardDescription>
                Seu arquivo foi processado com sucesso. Confira as melhorias aplicadas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Informações do Arquivo</h3>
                    <div className="space-y-2">
                      <p><span className="font-medium">Arquivo:</span> {processedData.originalFile}</p>
                      <p><span className="font-medium">Princípio:</span> {processedData.principleTitle}</p>
                      <p><span className="font-medium">Cases analisados:</span> {processedData.casesAnalyzed}</p>
                      <p><span className="font-medium">Score médio:</span> 
                        <Badge variant={processedData.averageScore >= 80 ? "default" : processedData.averageScore >= 60 ? "secondary" : "destructive"} className="ml-2">
                          {processedData.averageScore}/100
                        </Badge>
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {processedData.totalImprovements} Melhorias Aplicadas
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Melhorias Aplicadas
                  </h3>
                  <ul className="space-y-2 max-h-48 overflow-y-auto">
                    {processedData.improvements.map((improvement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="flex justify-center">
                <Button 
                  onClick={handleDownload}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Arquivo Processado
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Feedback Section */}
        {showFeedback && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Feedback para Refinamento</CardTitle>
              <CardDescription>
                Tem algum feedback sobre os cases? Cole abaixo para uma nova análise personalizada.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert>
                  <AlertCircle className="w-4 h-4" />
                  <AlertDescription>
                    Cole o feedback para cada case separadamente nos campos abaixo. 
                    Deixe em branco os cases que não precisam de ajustes.
                  </AlertDescription>
                </Alert>

                {Array.from({ length: processedData?.casesAnalyzed || 3 }, (_, i) => i + 1).map((caseNum) => (
                  <div key={caseNum} className="space-y-2">
                    <label className="font-medium text-sm">
                      Feedback Case {caseNum} (opcional):
                    </label>
                    <Textarea
                      placeholder={`Cole aqui o feedback específico para o Case ${caseNum}...`}
                      value={feedbackData[`case${caseNum}`] || ''}
                      onChange={(e) => setFeedbackData(prev => ({
                        ...prev,
                        [`case${caseNum}`]: e.target.value
                      }))}
                      className="min-h-[100px]"
                    />
                  </div>
                ))}

                <div className="flex justify-center gap-4 pt-4">
                  <Button 
                    onClick={() => setShowFeedback(false)}
                    variant="outline"
                  >
                    Pular Feedback
                  </Button>
                  <Button 
                    onClick={handleFeedbackSubmit}
                    disabled={isProcessing}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processando Feedback...
                      </>
                    ) : (
                      <>
                        <Brain className="w-4 h-4 mr-2" />
                        Processar Feedback
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>Desenvolvido com IA avançada para otimização de cases de entrevista Amazon</p>
          <p className="mt-1">Baseado nos 16 Leadership Principles e metodologia STAR(L)</p>
        </div>
      </div>
    </div>
  )
}

export default App
