import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, BookOpen, Star, CheckCircle, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Criancas = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [status, setStatus] = useState<any>(null);
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const { toast } = useToast();

  // Verificar status da geração a cada 1 segundo
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isGenerating) {
      interval = setInterval(async () => {
        try {
          const response = await fetch('http://localhost:5000/api/status');
          const data = await response.json();

          if (data.success) {
            setStatus(data.status);

            // Se concluiu, parar de verificar
            if (data.status.concluido) {
              setIsGenerating(false);
              clearInterval(interval);

              toast({
                title: "Geração Concluída! 🎉",
                description: "Todas as 300+ atividades foram geradas com sucesso! Iniciando download...",
                duration: 5000,
              });

              // Mostrar botão de download
              setShowDownloadButton(true);

              // Baixar automaticamente usando elemento <a>
              setTimeout(() => {
                const link = document.createElement('a');
                link.href = 'http://localhost:5000/api/download-exemplos';
                link.download = 'Kanji_Kids_300_Atividades_Completo.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }, 500);
            }

            // Se deu erro, parar
            if (data.status.erro) {
              setIsGenerating(false);
              clearInterval(interval);

              toast({
                title: "Erro na Geração",
                description: data.status.mensagem,
                variant: "destructive",
                duration: 5000,
              });
            }
          }
        } catch (error) {
          console.error('Erro ao verificar status:', error);
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isGenerating, toast]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'http://localhost:5000/api/download-exemplos';
    link.download = 'Kanji_Kids_300_Atividades_Completo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download Iniciado! 📥",
      description: "Baixando PDF único com 300 páginas...",
      duration: 3000,
    });
  };

  const handleGenerate = async () => {
    try {
      setIsGenerating(true);
      setShowDownloadButton(false);

      // Verificar se a API está online
      const healthCheck = await fetch('http://localhost:5000/api/health');

      if (!healthCheck.ok) {
        throw new Error('API não está respondendo. Certifique-se de que o servidor Python está rodando.');
      }

      // Iniciar geração COMPLETA de 300+ atividades
      const response = await fetch('http://localhost:5000/api/gerar-completas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Geração Iniciada! 🚀",
          description: "Gerando todas as 300+ atividades... Isso pode levar alguns minutos.",
          duration: 5000,
        });
      } else {
        throw new Error(data.message || 'Erro ao iniciar geração');
      }
    } catch (error: any) {
      setIsGenerating(false);

      toast({
        title: "Erro ao Conectar com o Servidor",
        description: error.message || "Certifique-se de que o servidor Python está rodando em http://localhost:5000",
        variant: "destructive",
        duration: 7000,
      });

      console.error('Erro:', error);
    }
  };

  const categories = [
    {
      title: "Linhas e Traçados Básicos",
      description: "60 atividades de linhas horizontais, verticais, diagonais, zigue-zague, ondas e espirais",
      icon: <FileText className="w-8 h-8 text-coral-500" />,
      count: 60
    },
    {
      title: "Formas Geométricas",
      description: "60 atividades com círculos, quadrados, triângulos e formas compostas",
      icon: <BookOpen className="w-8 h-8 text-mint-500" />,
      count: 60
    },
    {
      title: "Pré-Escrita",
      description: "90 atividades de arcos, loops, movimentos cursivos e traçados em formato de letras",
      icon: <Star className="w-8 h-8 text-soft-blue-500" />,
      count: 90
    },
    {
      title: "Alfabeto Completo",
      description: "52 atividades com letras maiúsculas e minúsculas",
      icon: <CheckCircle className="w-8 h-8 text-navy-500" />,
      count: 52
    },
    {
      title: "Números",
      description: "30 atividades com números de 0 a 9 com 3 variações cada",
      icon: <FileText className="w-8 h-8 text-coral-400" />,
      count: 30
    },
    {
      title: "Atividades Temáticas",
      description: "20 atividades com animais, caminhos, labirintos e conectar pontos",
      icon: <BookOpen className="w-8 h-8 text-mint-400" />,
      count: 20
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-soft-blue to-beige">
      {/* Header */}
      <header className="bg-navy text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center font-fredoka mb-4">
            300 Atividades de Grafismo em UM ÚNICO PDF
          </h1>
          <p className="text-xl text-center text-soft-blue max-w-3xl mx-auto">
            PDF único com 300 páginas de atividades imprimíveis para desenvolvimento motor e alfabetização
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <FileText className="w-12 h-12 text-coral mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">PDF Único</h3>
                <p className="text-sm text-muted-foreground">300 páginas em um arquivo</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Download className="w-12 h-12 text-mint mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Formato A4</h3>
                <p className="text-sm text-muted-foreground">300 DPI para impressão profissional</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Star className="w-12 h-12 text-soft-blue mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">3 Níveis</h3>
                <p className="text-sm text-muted-foreground">Progressão de dificuldade gradual</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <CheckCircle className="w-12 h-12 text-navy mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Pronto para Usar</h3>
                <p className="text-sm text-gray-600">Imprima e use imediatamente</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-soft-blue/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 font-fredoka text-navy">
            Categorias de Atividades
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {category.icon}
                    <span className="text-sm font-bold text-coral">{category.count} atividades</span>
                  </div>
                  <CardTitle className="text-xl font-fredoka">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 font-fredoka text-navy-600">
            O Que Está Incluído
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-mint-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>1 PDF Único:</strong> 300 páginas em um único arquivo fácil de distribuir
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-mint-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Tamanho Otimizado:</strong> Aproximadamente 15-25 MB
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-mint-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Índice Completo:</strong> Preview visual de cada atividade
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-mint-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Progressão de Dificuldade:</strong> 3 níveis (fácil ★, médio ★★, difícil ★★★)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-mint-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Instruções de Uso:</strong> README com dicas de impressão e aplicação
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-soft-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 font-fredoka text-navy-600">
            Como Funcionam as Atividades
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="text-4xl font-bold text-coral-500 mb-2">1</div>
                <CardTitle>Tracejados Pontilhados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Cada atividade contém 3-5 exemplos tracejados em formato de pontos ou traços para a criança seguir
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="text-4xl font-bold text-mint-500 mb-2">2</div>
                <CardTitle>Linhas Guia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Linhas guia sutis em cinza claro ajudam a criança a manter o traçado alinhado e proporcionado
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="text-4xl font-bold text-soft-blue-500 mb-2">3</div>
                <CardTitle>Espaço Livre</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  2-3 linhas em branco para prática livre, permitindo que a criança desenvolva autonomia
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-coral to-coral/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 font-fredoka">
            Pronto para Gerar seu PDF Único?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Clique no botão abaixo para gerar um PDF único com 300 páginas de atividades (leva cerca de 1 minuto)
          </p>
          <Button
            size="lg"
            onClick={handleGenerate}
            disabled={isGenerating}
            className="bg-white text-coral hover:bg-gray-100 text-lg px-8 py-6 font-bold"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                {status?.mensagem || "Gerando Atividades..."}
              </>
            ) : (
              <>
                <Download className="mr-2 h-5 w-5" />
                Gerar PDF Único (300 páginas)
              </>
            )}
          </Button>

          {/* Barra de Progresso */}
          {isGenerating && status && (
            <div className="mt-6 max-w-md mx-auto">
              <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-white h-full transition-all duration-300"
                  style={{ width: `${(status.atual / status.total) * 100}%` }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-white">
                {status.atual} de {status.total} atividades geradas
              </p>
            </div>
          )}

          {/* Botão de Download Manual */}
          {showDownloadButton && (
            <div className="mt-6">
              <Button
                size="lg"
                onClick={handleDownload}
                className="bg-mint text-white hover:bg-mint/90 text-lg px-8 py-6 font-bold animate-pulse"
              >
                <Download className="mr-2 h-5 w-5" />
                Baixar PDF Único (300 páginas)
              </Button>
              <p className="mt-3 text-sm text-white">
                Clique acima se o download não iniciou automaticamente
              </p>
            </div>
          )}

          <p className="mt-4 text-sm text-white/80">
            Sistema de geração automática • Qualidade profissional • Pronto para impressão
          </p>
          <p className="mt-2 text-xs text-white/60">
            ⚠️ Certifique-se de que o servidor Python está rodando em http://localhost:5000
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-soft-blue">
            © 2024 Kanji Kids. Sistema de Atividades de Grafismo para Alfabetização.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Criancas;
