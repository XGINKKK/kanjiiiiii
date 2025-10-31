import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Download,
  CheckCircle,
  Sparkles,
  Star,
  Trophy,
  Gift,
  FileText,
  PlayCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AreaMembros = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDownloadPDF = (pdfPath: string, fileName: string) => {
    window.open(pdfPath, '_blank');
    toast({
      title: "Abrindo PDF!",
      description: fileName,
      duration: 3000,
    });
  };

  const handleAcessarMetodo = () => {
    navigate("/japones");
  };

  const handleAcessarGuiaPais = () => {
    navigate("/pais");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-soft-blue to-beige">
      {/* Header */}
      <header className="bg-navy text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold font-fredoka">Área de Membros</h1>
                <p className="text-sm text-soft-blue">Bem-vindo ao Kit Kanji Kids!</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-coral to-coral/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-fredoka">
            Kit Completo Kanji Kids™
          </h2>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
            Tudo que você precisa para alfabetizar seu filho em casa usando o método japonês
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>6 Cadernos de Atividades</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>10 Materiais Bônus</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Suporte Vitalício</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Atualizações Grátis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos Principais */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-fredoka text-navy">
            Seus Recursos Exclusivos
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            <Card className="hover:shadow-xl transition-all cursor-pointer group" onClick={handleAcessarGuiaPais}>
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 bg-soft-blue/20 rounded-lg group-hover:scale-110 transition-transform">
                    <BookOpen className="w-8 h-8 text-coral" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-mint/20 text-mint rounded-full">
                    Interativo
                  </span>
                </div>
                <CardTitle className="text-xl font-fredoka">Guia Completo para Pais</CardTitle>
                <CardDescription>Passo a passo detalhado de como aplicar o método com seu filho</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-coral hover:bg-coral/90">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Acessar Conteúdo
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all cursor-pointer group" onClick={handleAcessarMetodo}>
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 bg-soft-blue/20 rounded-lg group-hover:scale-110 transition-transform">
                    <Sparkles className="w-8 h-8 text-mint" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-mint/20 text-mint rounded-full">
                    Exclusivo
                  </span>
                </div>
                <CardTitle className="text-xl font-fredoka">Método Visual Japonês Adaptado</CardTitle>
                <CardDescription>Técnica milenar comprovada, traduzida para o português brasileiro</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-coral hover:bg-coral/90">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Acessar Conteúdo
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Vídeo Tutorial */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-navy to-navy/90 text-white">
                <div className="flex items-center gap-3">
                  <PlayCircle className="w-8 h-8" />
                  <div>
                    <CardTitle className="text-2xl font-fredoka">Vídeo Tutorial</CardTitle>
                    <CardDescription className="text-white/90">
                      Aprenda a usar o método Kanji Kids com este guia em vídeo
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/uB71ly9qCXQ"
                    title="Vídeo Tutorial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Nível 1 */}
          <div className="space-y-12">
            <Card className="overflow-hidden border-2 border-navy/10">
              <CardHeader className="bg-gradient-to-r from-navy to-navy/90 text-white">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Star className="w-8 h-8 text-mint" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-fredoka">Nível 1 - Iniciante</CardTitle>
                    <CardDescription className="text-white/90 text-base">
                      Atividades básicas para começar a jornada de alfabetização
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-mint flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <CardTitle className="text-lg font-fredoka mb-1">Caderno de Atividades - Bastão</CardTitle>
                          <CardDescription className="text-sm">Atividades com letra bastão (caixa alta)</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button
                        onClick={() => handleDownloadPDF("/pdfs/Atividades/Nivel 1/nivel-1-bastao.pdf", "Nível 1 Bastão")}
                        className="w-full bg-mint hover:bg-mint/90"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Baixar PDF
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-mint flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <CardTitle className="text-lg font-fredoka mb-1">Caderno de Atividades - Letra Cursiva</CardTitle>
                          <CardDescription className="text-sm">Atividades com letra cursiva</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button
                        onClick={() => handleDownloadPDF("/pdfs/Atividades/Nivel 1/nivel-1-cursiva.pdf", "Nível 1 Cursiva")}
                        className="w-full bg-mint hover:bg-mint/90"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Baixar PDF
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Nível 2 */}
            <Card className="overflow-hidden border-2 border-navy/10">
              <CardHeader className="bg-gradient-to-r from-navy to-navy/90 text-white">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Trophy className="w-8 h-8 text-soft-blue" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-fredoka">Nível 2 - Intermediário</CardTitle>
                    <CardDescription className="text-white/90 text-base">
                      Avançando no desenvolvimento da escrita e leitura
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-soft-blue flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <CardTitle className="text-lg font-fredoka mb-1">Caderno de Atividades - Bastão</CardTitle>
                          <CardDescription className="text-sm">Atividades intermediárias com letra bastão</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button
                        onClick={() => handleDownloadPDF("/pdfs/Atividades/Nivel 2/nivel-2-bastao.pdf", "Nível 2 Bastão")}
                        className="w-full bg-soft-blue hover:bg-soft-blue/90"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Baixar PDF
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-soft-blue flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <CardTitle className="text-lg font-fredoka mb-1">Caderno de Atividades - Letra Cursiva</CardTitle>
                          <CardDescription className="text-sm">Atividades intermediárias com letra cursiva</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button
                        onClick={() => handleDownloadPDF("/pdfs/Atividades/Nivel 2/nivel-2-cursiva.pdf", "Nível 2 Cursiva")}
                        className="w-full bg-soft-blue hover:bg-soft-blue/90"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Baixar PDF
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Nível 3 */}
            <Card className="overflow-hidden border-2 border-navy/10">
              <CardHeader className="bg-gradient-to-r from-navy to-navy/90 text-white">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Sparkles className="w-8 h-8 text-coral" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-fredoka">Nível 3 - Avançado</CardTitle>
                    <CardDescription className="text-white/90 text-base">
                      Consolidação completa da alfabetização
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-coral flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <CardTitle className="text-lg font-fredoka mb-1">Caderno de Atividades - Bastão</CardTitle>
                          <CardDescription className="text-sm">Atividades avançadas com letra bastão</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button
                        onClick={() => handleDownloadPDF("/pdfs/Atividades/Nivel 3/nivel-3-bastao.pdf", "Nível 3 Bastão")}
                        className="w-full bg-coral hover:bg-coral/90"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Baixar PDF
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-coral flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <CardTitle className="text-lg font-fredoka mb-1">Caderno de Atividades - Letra Cursiva</CardTitle>
                          <CardDescription className="text-sm">Atividades avançadas com letra cursiva</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button
                        onClick={() => handleDownloadPDF("/pdfs/Atividades/Nivel 3/nivel-3-cursiva.pdf", "Nível 3 Cursiva")}
                        className="w-full bg-coral hover:bg-coral/90"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Baixar PDF
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção Bônus */}
      <section className="py-16 bg-gradient-to-r from-mint/10 to-soft-blue/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Gift className="w-12 h-12 text-coral" />
              <h2 className="text-4xl font-bold font-fredoka text-navy">
                Materiais Bônus
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              10 atividades extras para complementar o aprendizado do seu filho
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { nome: "Alfabeto com Carinhas", arquivo: "alfabeto-com-carinhas.pdf" },
              { nome: "Alfabeto com Imagem", arquivo: "alfabeto_com_imagem.pdf" },
              { nome: "Alfabeto com Pintura", arquivo: "alfabeto_com_pintura.pdf" },
              { nome: "Alfabeto com Relógio", arquivo: "alfabeto_com_relogio.pdf" },
              { nome: "Alfabeto Ilustrado", arquivo: "alfabeto_ilustrado.pdf" },
              { nome: "Caderno Alfabeto Traçado", arquivo: "caderno_alfabeto_tracado.pdf" },
              { nome: "Caderno Sílabas Simples", arquivo: "caderno_silabas_simples.pdf" },
              { nome: "Descobrindo o Alfabeto", arquivo: "descobrindo_o_alfabeto.pdf" },
              { nome: "Formando Palavras", arquivo: "formando_palavras.pdf" },
              { nome: "Atividades para Colorir", arquivo: "atividades-para-colorir.pdf" }
            ].map((bonus, index) => (
              <Card key={index} className="hover:shadow-xl transition-all group">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-coral/10 rounded-lg group-hover:bg-coral/20 transition-colors">
                      <Gift className="w-5 h-5 text-coral" />
                    </div>
                    <CardTitle className="text-base font-fredoka flex-1">
                      {bonus.nome}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => handleDownloadPDF(`/pdfs/Bonus/${bonus.arquivo}`, bonus.nome)}
                    variant="outline"
                    className="w-full border-coral text-coral hover:bg-coral hover:text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Baixar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-soft-blue">
            © 2025 Kanji Kids - Área de Membros Exclusiva
          </p>
          <p className="text-sm text-soft-blue mt-2">
            Dúvidas? Entre em contato: suportekanjakids@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AreaMembros;
