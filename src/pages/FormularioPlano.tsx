import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function FormularioPlano() {
  const [stage, setStage] = useState<'form' | 'plan'>('form');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState('');
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    conditions: [] as string[],
    currentLevel: '',
    specificDifficulties: '',
    dailyTime: '',
    parentConcerns: '',
    learningStyle: ''
  });

  const handleConditionChange = (condition: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      conditions: checked
        ? [...prev.conditions, condition]
        : prev.conditions.filter(c => c !== condition)
    }));
  };

  const handleGeneratePlan = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      const response = await fetch('/api/generate-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Erro ao gerar plano');
      }

      setGeneratedPlan(data.plan);
      setStage('plan');

      // Scroll to plan
      setTimeout(() => {
        document.getElementById('plan-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

    } catch (error) {
      console.error('Error:', error);
      alert('Erro ao gerar o plano. Por favor, tente novamente.');
    } finally {
      setIsGenerating(false);
    }
  }, [formData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-blue/20 via-background to-beige/20">
      {/* Form Section */}
      {stage === 'form' && (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-mint/20 text-mint px-4 py-2 rounded-full mb-4">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-fredoka font-bold text-sm">PAGAMENTO CONFIRMADO!</span>
              </div>
              <h1 className="font-fredoka text-3xl md:text-4xl font-bold text-navy mb-3">
                🎯 Gere Seu Plano Personalizado
              </h1>
              <p className="font-inter text-lg text-foreground/70">
                Preencha o questionário abaixo para receber seu plano de 4 semanas feito sob medida!
              </p>
            </div>

            <form onSubmit={handleGeneratePlan} className="bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6">
              {/* Child Name */}
              <div>
                <Label htmlFor="childName" className="font-fredoka font-bold text-navy text-lg mb-2">
                  Nome da criança (opcional)
                </Label>
                <Input
                  id="childName"
                  value={formData.childName}
                  onChange={(e) => setFormData(prev => ({ ...prev, childName: e.target.value }))}
                  placeholder="Ex: Miguel"
                  className="font-inter text-base"
                />
              </div>

              {/* Child Age */}
              <div>
                <Label htmlFor="childAge" className="font-fredoka font-bold text-navy text-lg mb-2">
                  Idade da criança * <span className="text-coral">⭐</span>
                </Label>
                <Select
                  value={formData.childAge}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, childAge: value }))}
                  required
                >
                  <SelectTrigger className="font-inter text-base">
                    <SelectValue placeholder="Selecione a idade" />
                  </SelectTrigger>
                  <SelectContent>
                    {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(age => (
                      <SelectItem key={age} value={age.toString()}>
                        {age} anos
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Conditions */}
              <div>
                <Label className="font-fredoka font-bold text-navy text-lg mb-3 block">
                  Condições ou características (selecione todas que se aplicam)
                </Label>
                <div className="space-y-3">
                  {[
                    { id: 'tdah', label: 'TDAH (Déficit de Atenção e Hiperatividade)' },
                    { id: 'autismo', label: 'Autismo / TEA' },
                    { id: 'dificuldade-foco', label: 'Dificuldade de foco/concentração' },
                    { id: 'dificuldade-motora', label: 'Dificuldade motora fina' },
                    { id: 'dislexia', label: 'Dislexia ou suspeita de dislexia' },
                    { id: 'nenhuma', label: 'Nenhuma condição específica' }
                  ].map(condition => (
                    <div key={condition.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={condition.id}
                        checked={formData.conditions.includes(condition.label)}
                        onCheckedChange={(checked) => handleConditionChange(condition.label, checked as boolean)}
                      />
                      <label
                        htmlFor={condition.id}
                        className="font-inter text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {condition.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Level */}
              <div>
                <Label htmlFor="currentLevel" className="font-fredoka font-bold text-navy text-lg mb-2">
                  Nível atual de alfabetização * <span className="text-coral">⭐</span>
                </Label>
                <Select
                  value={formData.currentLevel}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, currentLevel: value }))}
                  required
                >
                  <SelectTrigger className="font-inter text-base">
                    <SelectValue placeholder="Selecione o nível atual" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pre-alfabetizacao">Pré-alfabetização (não reconhece letras)</SelectItem>
                    <SelectItem value="reconhece-letras">Reconhece algumas letras</SelectItem>
                    <SelectItem value="reconhece-silabas">Reconhece sílabas simples</SelectItem>
                    <SelectItem value="le-palavras-simples">Lê palavras simples</SelectItem>
                    <SelectItem value="le-frases-simples">Lê frases simples</SelectItem>
                    <SelectItem value="alfabetizado">Já alfabetizado (refinando habilidades)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Daily Time */}
              <div>
                <Label htmlFor="dailyTime" className="font-fredoka font-bold text-navy text-lg mb-2">
                  Tempo disponível por dia * <span className="text-coral">⭐</span>
                </Label>
                <Select
                  value={formData.dailyTime}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, dailyTime: value }))}
                  required
                >
                  <SelectTrigger className="font-inter text-base">
                    <SelectValue placeholder="Quanto tempo pode dedicar?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10-15">10-15 minutos</SelectItem>
                    <SelectItem value="15-20">15-20 minutos</SelectItem>
                    <SelectItem value="20-30">20-30 minutos</SelectItem>
                    <SelectItem value="30-45">30-45 minutos</SelectItem>
                    <SelectItem value="45-60">45-60 minutos</SelectItem>
                    <SelectItem value="60+">Mais de 60 minutos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Learning Style */}
              <div>
                <Label htmlFor="learningStyle" className="font-fredoka font-bold text-navy text-lg mb-2">
                  Estilo de aprendizagem preferido
                </Label>
                <Select
                  value={formData.learningStyle}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, learningStyle: value }))}
                >
                  <SelectTrigger className="font-inter text-base">
                    <SelectValue placeholder="Como seu filho aprende melhor?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visual">Visual (aprende vendo)</SelectItem>
                    <SelectItem value="cinestesico">Cinestésico (aprende fazendo/tocando)</SelectItem>
                    <SelectItem value="auditivo">Auditivo (aprende ouvindo)</SelectItem>
                    <SelectItem value="misto">Misto / Não sei</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Specific Difficulties */}
              <div>
                <Label htmlFor="specificDifficulties" className="font-fredoka font-bold text-navy text-lg mb-2">
                  Dificuldades específicas observadas
                </Label>
                <Textarea
                  id="specificDifficulties"
                  value={formData.specificDifficulties}
                  onChange={(e) => setFormData(prev => ({ ...prev, specificDifficulties: e.target.value }))}
                  placeholder="Ex: Tem dificuldade em segurar o lápis, se distrai facilmente, não gosta de atividades repetitivas, etc."
                  rows={4}
                  className="font-inter text-base"
                />
              </div>

              {/* Parent Concerns */}
              <div>
                <Label htmlFor="parentConcerns" className="font-fredoka font-bold text-navy text-lg mb-2">
                  Suas principais preocupações como pai/mãe
                </Label>
                <Textarea
                  id="parentConcerns"
                  value={formData.parentConcerns}
                  onChange={(e) => setFormData(prev => ({ ...prev, parentConcerns: e.target.value }))}
                  placeholder="Ex: Medo de que ele fique desmotivado, preocupação com o atraso em relação aos colegas, ansiedade sobre o futuro escolar, etc."
                  rows={4}
                  className="font-inter text-base"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isGenerating}
                  className="w-full font-fredoka font-bold text-xl py-8"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                      Gerando Seu Plano Personalizado...
                    </>
                  ) : (
                    <>
                      Gerar Meu Plano Personalizado 🎯
                    </>
                  )}
                </Button>
                <p className="text-center text-sm text-foreground/50 mt-3">
                  ⚡ Isso levará cerca de 30-60 segundos
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Plan Display Section */}
      {stage === 'plan' && (
        <div id="plan-section" className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-mint/20 text-mint px-4 py-2 rounded-full mb-4">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-fredoka font-bold text-sm">PLANO GERADO COM SUCESSO!</span>
              </div>
              <h2 className="font-fredoka text-3xl md:text-4xl font-bold text-navy mb-3">
                🎉 Seu Plano Personalizado Está Pronto!
              </h2>
              <p className="font-inter text-lg text-foreground/70">
                Salve esta página ou imprima para ter sempre à mão
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="font-fredoka text-3xl md:text-4xl font-bold text-navy mt-8 mb-4">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="font-fredoka text-2xl md:text-3xl font-bold text-navy mt-8 mb-4 pb-2 border-b-2 border-mint">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="font-fredoka text-xl md:text-2xl font-bold text-coral mt-6 mb-3">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="font-fredoka text-lg md:text-xl font-bold text-navy mt-4 mb-2">
                      {children}
                    </h4>
                  ),
                  p: ({ children }) => (
                    <p className="font-inter text-base text-foreground/80 leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="font-inter text-base text-foreground/80 space-y-2 mb-4 ml-6">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="flex items-start gap-2">
                      <span className="text-mint mt-1">•</span>
                      <span>{children}</span>
                    </li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-navy">{children}</strong>
                  ),
                  hr: () => (
                    <hr className="my-8 border-t-2 border-mint/30" />
                  )
                }}
              >
                {generatedPlan}
              </ReactMarkdown>
            </div>

            {/* Next Steps */}
            <div className="mt-8 bg-gradient-to-r from-mint/20 to-soft-blue/20 rounded-2xl p-6 md:p-8 border-2 border-mint/30">
              <h3 className="font-fredoka text-2xl font-bold text-navy mb-4 text-center">
                📌 Próximos Passos
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4">
                  <div className="text-3xl mb-2">📥</div>
                  <p className="font-fredoka font-bold text-navy mb-1">1. Salve esta página</p>
                  <p className="font-inter text-sm text-foreground/70">
                    Marque nos favoritos ou tire print
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-3xl mb-2">🎯</div>
                  <p className="font-fredoka font-bold text-navy mb-1">2. Comece amanhã</p>
                  <p className="font-inter text-sm text-foreground/70">
                    Siga o plano da Semana 1
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-3xl mb-2">📊</div>
                  <p className="font-fredoka font-bold text-navy mb-1">3. Acompanhe o progresso</p>
                  <p className="font-inter text-sm text-foreground/70">
                    Observe os sinais indicados
                  </p>
                </div>
              </div>
            </div>

            {/* Print Button */}
            <div className="text-center mt-8">
              <Button
                onClick={() => window.print()}
                variant="outline"
                size="lg"
                className="font-fredoka font-bold"
              >
                🖨️ Imprimir Plano
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
