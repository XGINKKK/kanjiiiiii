import { Button } from "@/components/ui/button";
import { Check, Clock, Sparkles, X } from "lucide-react";
import { memo, useEffect, useState } from "react";

const UltimaChance = memo(() => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutos em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleCheckout = () => {
    window.location.href = "https://www.ggcheckout.com/checkout/v2/mZ4tAdEPoqODH2pv5E41";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral/10 via-background to-mint/10">

      {/* URGENCY BANNER */}
      <div className="bg-coral text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center">
            <Clock className="w-6 h-6 animate-pulse" />
            <p className="font-fredoka font-bold text-lg md:text-xl">
              Oferta expira em: {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </p>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block bg-coral/20 border-2 border-coral/40 px-6 py-3 rounded-full animate-pulse">
            <p className="font-fredoka font-bold text-coral text-lg">
              ⚠️ ÚLTIMA CHANCE - OFERTA ÚNICA
            </p>
          </div>

          <h1 className="font-fredoka text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            Espera! Tenho uma Oferta Especial Pra Você 🎁
          </h1>

          <p className="font-nunito text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Antes de você ir... que tal levar o <span className="font-bold text-coral">Kit COMPLETO</span> com um desconto exclusivo que só aparece uma vez?
          </p>
        </div>
      </section>

      {/* OFERTA PRINCIPAL */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-coral rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 opacity-5">
              <Sparkles className="w-64 h-64 text-coral" />
            </div>

            <div className="relative z-10 space-y-8">
              {/* Badge */}
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-coral to-primary text-white px-8 py-4 rounded-full shadow-xl animate-pulse mb-4">
                  <p className="font-fredoka text-xl md:text-2xl font-bold">
                    🔥 Desconto de R$ 5 AGORA!
                  </p>
                </div>
              </div>

              {/* Comparação de Preços */}
              <div className="text-center space-y-4">
                <div className="space-y-2">
                  <p className="font-nunito text-lg text-foreground/70">
                    <span className="line-through">De R$ 289,00</span> por:
                  </p>
                  <div className="relative inline-block">
                    <div className="absolute -top-2 -right-2 bg-coral text-white px-3 py-1 rounded-full text-xs font-bold rotate-12">
                      ECONOMIZE R$ 274
                    </div>
                    <div className="flex items-baseline justify-center gap-2 bg-gradient-to-r from-coral/10 to-mint/10 px-8 py-4 rounded-2xl border-2 border-coral/30">
                      <span className="text-3xl md:text-4xl font-bold text-coral">R$</span>
                      <span className="text-6xl md:text-7xl font-bold text-coral">14</span>
                      <span className="text-4xl md:text-5xl font-bold text-coral">,90</span>
                    </div>
                  </div>
                  <p className="font-nunito text-lg text-navy">
                    ou <span className="font-bold text-coral">3x de R$ 4,97</span> sem juros
                  </p>
                </div>

                <div className="inline-block bg-mint/20 text-mint px-6 py-3 rounded-full border-2 border-mint/40">
                  <p className="font-fredoka text-lg font-bold">
                    ✨ Ao invés de R$ 19,90 - Economize R$ 5!
                  </p>
                </div>
              </div>

              {/* O que está incluído */}
              <div className="bg-gradient-to-br from-coral/5 to-mint/5 rounded-2xl p-6 md:p-8 border-2 border-coral/20">
                <h2 className="font-fredoka text-2xl md:text-3xl font-bold text-navy text-center mb-6">
                  Tudo que você leva por R$ 14,90:
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <p className="font-fredoka font-bold text-coral mb-3">📦 KIT PRINCIPAL:</p>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                      <span className="font-nunito text-sm">400+ Atividades de Grafismo Fonético</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                      <span className="font-nunito text-sm">3 Níveis Progressivos (2, 3 e 4 sílabas)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                      <span className="font-nunito text-sm">Grafismo Cursiva + Bastão</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                      <span className="font-nunito text-sm">Método Visual Japonês Adaptado</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="font-fredoka font-bold text-mint mb-3">🎁 6 SUPER BÔNUS:</p>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                      <span className="font-nunito text-sm">Caderno Alfabeto com Imagem</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                      <span className="font-nunito text-sm">Caderno Quebra Cabeça</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                      <span className="font-nunito text-sm">Alfabeto Ilustrado</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                      <span className="font-nunito text-sm">+ 3 Bônus Extras (R$ 256 de valor)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t-2 border-coral/20">
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-6 h-6 text-navy" />
                    <span className="font-fredoka text-lg font-bold text-navy">
                      Acesso Vitalício + Atualizações Grátis
                    </span>
                  </div>
                </div>
              </div>

              {/* Comparação: O que você PERDE */}
              <div className="bg-coral/5 border-2 border-coral/20 rounded-2xl p-6">
                <h3 className="font-fredoka text-xl font-bold text-navy text-center mb-4">
                  ⚠️ Se você recusar esta oferta, vai perder:
                </h3>
                <div className="space-y-2 max-w-md mx-auto">
                  <div className="flex items-start gap-2">
                    <X className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                    <span className="font-nunito text-sm">Níveis 02 e 03 (palavras com 3 e 4 sílabas)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                    <span className="font-nunito text-sm">6 Super Bônus no valor de R$ 256</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                    <span className="font-nunito text-sm">R$ 5 de desconto (oferta única)</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <Button
                  onClick={handleCheckout}
                  size="lg"
                  className="w-full font-fredoka font-bold text-base md:text-xl lg:text-2xl px-6 md:px-10 lg:px-12 py-6 md:py-8 lg:py-10 bg-gradient-to-r from-coral via-primary to-mint hover:from-coral/90 hover:via-primary/90 hover:to-mint/90 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
                >
                  🎉 SIM! Quero o Kit Completo
                </Button>
                <p className="text-center text-sm text-foreground/60">
                  ⚡ Acesso imediato • Garantia de 7 dias • Pagamento 100% seguro
                </p>
              </div>
            </div>
          </div>

          {/* Garantia */}
          <div className="mt-8 text-center bg-mint/10 border-2 border-mint/30 rounded-2xl p-6">
            <p className="font-fredoka text-lg font-bold text-navy mb-2">
              🛡️ Garantia Incondicional de 7 Dias
            </p>
            <p className="font-nunito text-foreground/70">
              Se não funcionar, devolvemos cada centavo. Sem perguntas.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER SIMPLES */}
      <footer className="py-8 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="font-nunito text-sm">
            © 2024 Kanji Kids. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
});

UltimaChance.displayName = "UltimaChance";

export default UltimaChance;
