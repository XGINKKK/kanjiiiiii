import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Sparkles, Download, Loader2, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Gerador = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedActivity, setGeneratedActivity] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    syllable: "",
    activityType: "tracing",
    theme: "animals",
    difficulty: "easy"
  });
  const [generationsLeft, setGenerationsLeft] = useState(50); // Limite mensal

  const syllables = [
    "BA", "BE", "BI", "BO", "BU",
    "CA", "CE", "CI", "CO", "CU",
    "DA", "DE", "DI", "DO", "DU",
    "FA", "FE", "FI", "FO", "FU",
    "GA", "GE", "GI", "GO", "GU",
    "JA", "JE", "JI", "JO", "JU",
    "LA", "LE", "LI", "LO", "LU",
    "MA", "ME", "MI", "MO", "MU",
    "NA", "NE", "NI", "NO", "NU",
    "PA", "PE", "PI", "PO", "PU",
    "RA", "RE", "RI", "RO", "RU",
    "SA", "SE", "SI", "SO", "SU",
    "TA", "TE", "TI", "TO", "TU",
    "VA", "VE", "VI", "VO", "VU",
    "XA", "XE", "XI", "XO", "XU",
    "ZA", "ZE", "ZI", "ZO", "ZU",
    "BRA", "BRE", "BRI", "BRO", "BRU",
    "CRA", "CRE", "CRI", "CRO", "CRU",
    "DRA", "DRE", "DRI", "DRO", "DRU",
    "FRA", "FRE", "FRI", "FRO", "FRU",
    "GRA", "GRE", "GRI", "GRO", "GRU",
    "PRA", "PRE", "PRI", "PRO", "PRU",
    "TRA", "TRE", "TRI", "TRO", "TRU"
  ];

  const activityTypes = [
    { value: "tracing", label: "Tracejado", icon: "✏️" },
    { value: "coloring", label: "Colorir", icon: "🎨" },
    { value: "matching", label: "Ligar Pontos", icon: "🔗" },
    { value: "wordsearch", label: "Caça-Palavras", icon: "🔍" },
    { value: "complete", label: "Completar Palavra", icon: "📝" },
    { value: "syllable-game", label: "Jogo de Sílabas", icon: "🎯" }
  ];

  const themes = [
    { value: "animals", label: "Animais", icon: "🦁" },
    { value: "vehicles", label: "Veículos", icon: "🚗" },
    { value: "nature", label: "Natureza", icon: "🌳" },
    { value: "food", label: "Alimentos", icon: "🍎" },
    { value: "toys", label: "Brinquedos", icon: "🧸" },
    { value: "space", label: "Espaço", icon: "🚀" },
    { value: "ocean", label: "Oceano", icon: "🐠" },
    { value: "fantasy", label: "Fantasia", icon: "🦄" }
  ];

  const difficulties = [
    { value: "easy", label: "Fácil (3-5 anos)", color: "bg-mint" },
    { value: "medium", label: "Médio (6-8 anos)", color: "bg-soft-blue" },
    { value: "hard", label: "Difícil (9-12 anos)", color: "bg-coral" }
  ];

  const handleGenerate = async () => {
    if (!formData.syllable) {
      toast({
        title: "Atenção!",
        description: "Por favor, selecione uma sílaba.",
        variant: "destructive"
      });
      return;
    }

    if (generationsLeft <= 0) {
      toast({
        title: "Limite Atingido",
        description: "Você atingiu o limite de 50 gerações deste mês. Renove sua assinatura para continuar!",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    setGeneratedActivity(null);

    try {
      // Chamar API serverless ao invés de chamar OpenAI diretamente
      const response = await fetch("/api/generate-activity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        throw new Error(errorData.error || "Erro ao gerar atividade");
      }

      const data = await response.json();

      if (!data.success || !data.content) {
        throw new Error("Resposta inválida da API");
      }

      setGeneratedActivity(data.content);
      setGenerationsLeft(prev => prev - 1);

      toast({
        title: "🎉 Atividade Gerada!",
        description: "Sua atividade está pronta para download.",
      });

    } catch (error) {
      console.error("Erro:", error);
      toast({
        title: "Erro",
        description: error instanceof Error ? error.message : "Não foi possível gerar a atividade. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (generatedActivity) {
      // Criar um arquivo de texto para download
      const blob = new Blob([generatedActivity], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `atividade-${formData.syllable}-${Date.now()}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        title: "Download Iniciado!",
        description: "Sua atividade foi baixada com sucesso.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-blue/20 via-background to-mint/10">

      {/* Header */}
      <div className="bg-gradient-to-r from-coral to-primary text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="font-fredoka text-2xl md:text-3xl font-bold flex items-center gap-2">
                <Sparkles className="w-8 h-8" />
                Gerador de Atividades com IA
              </h1>
              <p className="font-nunito text-sm md:text-base opacity-90 mt-1">
                Crie atividades únicas em segundos!
              </p>
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
              <p className="font-nunito font-bold text-sm">
                Gerações Restantes: <span className="text-yellow-300 text-xl">{generationsLeft}</span>/50
              </p>
              <p className="text-xs opacity-75">Renovam todo mês</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Formulário de Geração */}
          <div className="space-y-6">

            <Card className="p-6 border-2 border-primary/20">
              <h2 className="font-fredoka text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                <span className="text-2xl">1️⃣</span>
                Escolha a Sílaba
              </h2>

              <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-2">
                {syllables.map((syl) => (
                  <button
                    key={syl}
                    onClick={() => setFormData({ ...formData, syllable: syl })}
                    className={`
                      p-3 rounded-xl font-bold transition-all duration-200 border-2
                      ${formData.syllable === syl
                        ? 'bg-coral text-white border-coral scale-110 shadow-lg'
                        : 'bg-white hover:bg-soft-blue/20 border-soft-blue/30 hover:border-soft-blue'
                      }
                    `}
                  >
                    {syl}
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-2 border-primary/20">
              <h2 className="font-fredoka text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                <span className="text-2xl">2️⃣</span>
                Tipo de Atividade
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {activityTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setFormData({ ...formData, activityType: type.value })}
                    className={`
                      p-4 rounded-xl transition-all duration-200 border-2 text-center
                      ${formData.activityType === type.value
                        ? 'bg-mint text-white border-mint scale-105 shadow-lg'
                        : 'bg-white hover:bg-mint/10 border-mint/30 hover:border-mint'
                      }
                    `}
                  >
                    <div className="text-3xl mb-2">{type.icon}</div>
                    <div className="font-nunito font-semibold text-sm">{type.label}</div>
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-2 border-primary/20">
              <h2 className="font-fredoka text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                <span className="text-2xl">3️⃣</span>
                Tema Visual
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {themes.map((theme) => (
                  <button
                    key={theme.value}
                    onClick={() => setFormData({ ...formData, theme: theme.value })}
                    className={`
                      p-4 rounded-xl transition-all duration-200 border-2 text-center
                      ${formData.theme === theme.value
                        ? 'bg-soft-blue text-white border-soft-blue scale-105 shadow-lg'
                        : 'bg-white hover:bg-soft-blue/10 border-soft-blue/30 hover:border-soft-blue'
                      }
                    `}
                  >
                    <div className="text-3xl mb-2">{theme.icon}</div>
                    <div className="font-nunito font-semibold text-xs">{theme.label}</div>
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-2 border-primary/20">
              <h2 className="font-fredoka text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                <span className="text-2xl">4️⃣</span>
                Dificuldade
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {difficulties.map((diff) => (
                  <button
                    key={diff.value}
                    onClick={() => setFormData({ ...formData, difficulty: diff.value })}
                    className={`
                      p-4 rounded-xl transition-all duration-200 border-2
                      ${formData.difficulty === diff.value
                        ? `${diff.color} text-white border-transparent scale-105 shadow-lg`
                        : 'bg-white hover:bg-gray-50 border-gray-200'
                      }
                    `}
                  >
                    <div className="font-nunito font-bold text-sm">{diff.label}</div>
                  </button>
                ))}
              </div>
            </Card>

            <Button
              onClick={handleGenerate}
              disabled={isGenerating || generationsLeft <= 0}
              size="lg"
              className="w-full font-nunito font-bold text-xl py-8 bg-gradient-to-r from-coral to-primary hover:from-coral/90 hover:to-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                  Gerando Atividade Mágica...
                </>
              ) : (
                <>
                  <Sparkles className="w-6 h-6 mr-2" />
                  Gerar Atividade Agora!
                </>
              )}
            </Button>

          </div>

          {/* Preview/Resultado */}
          <div className="lg:sticky lg:top-24 h-fit">
            <Card className="p-8 border-2 border-primary/20 min-h-[600px] flex flex-col items-center justify-center">
              {isGenerating ? (
                <div className="text-center space-y-6 animate-fade-in">
                  <div className="relative">
                    <div className="w-32 h-32 border-8 border-soft-blue/30 border-t-coral rounded-full animate-spin mx-auto"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles className="w-12 h-12 text-coral animate-pulse" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-fredoka text-2xl font-bold text-navy">
                      🎨 IA Criando Sua Atividade...
                    </h3>
                    <p className="font-nunito text-foreground/70">
                      Gerando ilustrações únicas e formatando PDF profissional
                    </p>
                  </div>
                  <div className="flex gap-2 justify-center">
                    <div className="w-3 h-3 bg-coral rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-3 h-3 bg-mint rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-3 h-3 bg-soft-blue rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              ) : generatedActivity ? (
                <div className="space-y-6 w-full animate-fade-in">
                  <div className="space-y-3 text-center">
                    <h3 className="font-fredoka text-2xl font-bold text-primary">
                      ✨ Atividade Pronta!
                    </h3>
                    <p className="font-nunito text-foreground/70">
                      Sua atividade personalizada foi gerada com sucesso
                    </p>
                  </div>

                  <div className="w-full bg-white rounded-lg border-2 border-primary/20 p-6 max-h-[500px] overflow-y-auto">
                    <div className="font-inter text-sm text-foreground/90 whitespace-pre-wrap text-left">
                      {generatedActivity}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={handleDownload}
                      size="lg"
                      className="w-full font-nunito font-bold text-lg py-6 bg-mint hover:bg-mint/90"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Baixar PDF em Alta Qualidade
                    </Button>
                    <Button
                      onClick={() => setGeneratedActivity(null)}
                      variant="outline"
                      className="w-full"
                    >
                      Gerar Nova Atividade
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <div className="text-8xl mb-4">📄</div>
                  <h3 className="font-fredoka text-2xl font-bold text-navy">
                    Sua Atividade Aparecerá Aqui
                  </h3>
                  <p className="font-nunito text-foreground/70 max-w-md">
                    Selecione as opções ao lado e clique em "Gerar Atividade" para criar
                    seu material personalizado!
                  </p>
                  <div className="pt-6 space-y-2">
                    <p className="font-inter text-sm text-foreground/50">💡 Dica:</p>
                    <p className="font-inter text-sm text-foreground/70 max-w-sm mx-auto">
                      Experimente diferentes combinações! Cada geração cria uma atividade
                      completamente única.
                    </p>
                  </div>
                </div>
              )}
            </Card>

            {/* Galeria de Atividades Recentes */}
            <Card className="p-6 border-2 border-mint/20 mt-6">
              <h3 className="font-fredoka text-lg font-bold text-navy mb-4">
                📚 Atividades Recentes
              </h3>
              <div className="space-y-2 text-sm text-foreground/70 font-inter">
                <p className="text-center py-4">
                  Suas últimas atividades geradas aparecerão aqui
                </p>
              </div>
            </Card>
          </div>

        </div>

        {/* FAQ Rápido */}
        <Card className="p-8 mt-12 border-2 border-soft-blue/20">
          <h2 className="font-fredoka text-2xl font-bold text-navy mb-6 text-center">
            ❓ Perguntas Frequentes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Quantas atividades posso gerar?",
                a: "Você pode gerar até 50 atividades por mês. O limite renova automaticamente todo dia 1º."
              },
              {
                q: "As atividades são sempre diferentes?",
                a: "Sim! A IA cria ilustrações e layouts únicos para cada geração, mesmo com os mesmos parâmetros."
              },
              {
                q: "Posso imprimir as atividades?",
                a: "Absolutamente! Os PDFs são gerados em alta qualidade (300 DPI) prontos para impressão."
              },
              {
                q: "Preciso de internet para usar?",
                a: "Sim, para gerar novas atividades. Mas após baixar o PDF, você pode usar offline."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-soft-blue/5 p-4 rounded-xl">
                <h4 className="font-nunito font-bold text-navy mb-2">{faq.q}</h4>
                <p className="font-inter text-sm text-foreground/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </Card>

      </div>
    </div>
  );
};

export default Gerador;
