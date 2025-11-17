import { Download, CheckCircle, Mail, Heart } from "lucide-react";
import { memo } from "react";
import { Button } from "@/components/ui/button";

const Simples = memo(() => {
  const handleDownload = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/pdfs/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige/20 via-background to-soft-blue/10">

      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/logo-produto.png"
                alt="Kit Kanji Kids"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="font-fredoka text-2xl font-bold text-navy">
                  Kit Primeiros Passos
                </h1>
                <p className="font-nunito text-sm text-foreground/60">
                  Área do Aluno
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO - BEM-VINDO */}
      <section className="py-12 px-4 bg-gradient-to-br from-mint/10 to-soft-blue/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white border border-mint/30 px-6 py-3 rounded-full shadow-sm">
            <CheckCircle className="w-5 h-5 text-mint" />
            <p className="font-nunito font-semibold text-navy">Pagamento Confirmado</p>
          </div>

          <h1 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            Bem-vindo ao Kit Kanji Kids! 🎉
          </h1>

          <p className="font-nunito text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Parabéns por dar esse passo importante na educação do seu filho!
            Abaixo você encontra todo o material que acabou de adquirir.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <CheckCircle className="w-4 h-4 text-coral" />
              <span className="font-nunito text-sm text-navy font-medium">Acesso Vitalício</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <CheckCircle className="w-4 h-4 text-coral" />
              <span className="font-nunito text-sm text-navy font-medium">Imprima Quantas Vezes Quiser</span>
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUÇÕES */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-coral/5 border-2 border-coral/20 rounded-2xl p-8 mb-8">
            <h2 className="font-fredoka text-2xl font-bold text-navy mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-coral" />
              Como começar?
            </h2>
            <div className="space-y-3 font-nunito text-foreground/80">
              <p className="flex items-start gap-3">
                <span className="font-bold text-coral min-w-[24px]">1.</span>
                <span>Baixe o caderno de atividades clicando no botão abaixo</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="font-bold text-coral min-w-[24px]">2.</span>
                <span>Imprima em casa ou leve em uma copiadora (recomendamos papel sulfite A4)</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="font-bold text-coral min-w-[24px]">3.</span>
                <span>Separe 10 minutos por dia para fazer as atividades com seu filho</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="font-bold text-coral min-w-[24px]">4.</span>
                <span>Acompanhe a evolução dele e celebre cada conquista! 🎉</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIAIS PARA DOWNLOAD */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-fredoka text-3xl md:text-4xl font-bold text-navy mb-3">
              Seus Materiais
            </h2>
            <p className="font-nunito text-lg text-foreground/60">
              Clique para baixar os PDFs
            </p>
          </div>

          <div className="grid gap-6">
            {/* Caderno Principal */}
            <div className="bg-gradient-to-br from-coral/5 to-mint/5 border-2 border-coral/30 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="inline-block bg-coral/20 text-coral px-3 py-1 rounded-full text-xs font-bold mb-3">
                    PRINCIPAL
                  </div>
                  <h3 className="font-fredoka text-2xl font-bold text-navy mb-2">
                    Caderno Nível 01 - Palavras com 2 Sílabas
                  </h3>
                  <p className="font-nunito text-foreground/70 mb-4">
                    +100 atividades de grafismo fonético para ensinar seu filho a ler palavras simples
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-coral" />
                      <span className="font-nunito text-navy">108 páginas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-coral" />
                      <span className="font-nunito text-navy">Pronto para impressão</span>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => handleDownload('Atividades/Nivel 1/nivel-1-bastao.pdf')}
                  size="lg"
                  className="font-fredoka font-bold text-lg px-8 py-6 bg-gradient-to-r from-coral to-primary hover:from-coral/90 hover:to-primary/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Baixar Caderno
                </Button>
              </div>
            </div>

            {/* Alfabeto com Imagens */}
            <div className="bg-card border-2 border-gray-200 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="inline-block bg-mint/20 text-mint px-3 py-1 rounded-full text-xs font-bold mb-3">
                    BÔNUS
                  </div>
                  <h3 className="font-fredoka text-xl font-bold text-navy mb-2">
                    Alfabeto com Imagens
                  </h3>
                  <p className="font-nunito text-foreground/70">
                    Material extra para reforçar o aprendizado visual
                  </p>
                </div>
                <Button
                  onClick={() => handleDownload('Bonus/alfabeto_com_imagem.pdf')}
                  variant="outline"
                  size="lg"
                  className="font-fredoka font-bold px-8 py-6 border-2 border-mint hover:bg-mint/10"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Baixar Alfabeto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUER MAIS? UPGRADE */}
      <section className="py-16 px-4 bg-gradient-to-br from-soft-blue/20 to-pink-soft/10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-4 border-coral/30 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <div className="inline-block bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-bold mb-4">
              ✨ OFERTA ESPECIAL PARA VOCÊ
            </div>

            <h2 className="font-fredoka text-3xl md:text-4xl font-bold text-navy mb-4">
              Quer a Experiência Completa?
            </h2>

            <p className="font-nunito text-lg text-foreground/70 mb-6">
              Você começou bem! Agora que viu a qualidade do nosso material,
              que tal dar ao seu filho o kit COMPLETO com tudo que ele precisa?
            </p>

            <div className="bg-gradient-to-br from-coral/5 to-mint/5 rounded-2xl p-6 mb-6">
              <p className="font-nunito text-base mb-4">
                <span className="font-bold text-coral">Por apenas mais R$ 9,90</span> você desbloqueia:
              </p>
              <div className="space-y-2 text-left max-w-md mx-auto">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
                  <span className="font-nunito text-sm">Níveis 02 e 03 (palavras com 3 e 4 sílabas)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
                  <span className="font-nunito text-sm">6 Super Bônus (R$ 256 de valor)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
                  <span className="font-nunito text-sm">Método Visual Japonês Completo</span>
                </div>
              </div>
            </div>

            <Button
              onClick={() => window.location.href = 'https://www.ggcheckout.com/checkout/v2/mZ4tAdEPoqODH2pv5E41'}
              size="lg"
              className="font-fredoka font-bold text-base md:text-xl px-8 md:px-12 py-6 md:py-8 bg-gradient-to-r from-coral via-primary to-mint hover:from-coral/95 hover:via-primary/95 hover:to-mint/95 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              ✨ Upgrade por R$ 9,90
            </Button>

            <p className="text-xs text-foreground/50 mt-4">
              Oferta exclusiva para alunos do Kit Primeiros Passos
            </p>
          </div>
        </div>
      </section>

      {/* SUPORTE */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border-2 border-mint/30 rounded-2xl p-8 text-center">
            <Mail className="w-12 h-12 text-mint mx-auto mb-4" />
            <h3 className="font-fredoka text-2xl font-bold text-navy mb-2">
              Precisa de Ajuda?
            </h3>
            <p className="font-nunito text-foreground/70 mb-6">
              Estamos aqui para você! Qualquer dúvida, é só enviar um email:
            </p>
            <a
              href="mailto:suportekanjakids@gmail.com"
              className="inline-flex items-center gap-2 bg-mint/10 border-2 border-mint/30 rounded-full px-6 py-3 font-nunito font-bold text-navy hover:bg-mint/20 transition-colors"
            >
              <Mail className="w-5 h-5 text-mint" />
              suportekanjakids@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER SIMPLES */}
      <footer className="py-8 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="font-nunito text-sm">
            © 2024 Kanji Kids. Todos os direitos reservados.
          </p>
          <p className="font-nunito text-xs text-white/60 mt-2">
            Dúvidas? Entre em contato: suportekanjakids@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
});

Simples.displayName = "Simples";

export default Simples;
