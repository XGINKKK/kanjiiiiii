import { Button } from "@/components/ui/button";
import { Check, Lock, X, Sparkles } from "lucide-react";
import { useState } from "react";

export const PricingSection = () => {
  const [showUpsellPopup, setShowUpsellPopup] = useState(false);

  const handleCheckoutBasic = () => {
    // Mostrar popup de upsell antes de ir para checkout básico
    setShowUpsellPopup(true);
  };

  const handleCheckoutComplete = () => {
    window.location.href = "https://www.ggcheckout.com/checkout/v2/50wDz3HYenjVvuvmY2Zv";
  };

  const handleCheckoutUpsell = () => {
    // Link para checkout do plano completo com desconto (R$ 14,90)
    window.location.href = "https://www.ggcheckout.com/checkout/v2/50wDz3HYenjVvuvmY2Zv";
  };

  const handleDeclineUpsell = () => {
    setShowUpsellPopup(false);
    // Link para checkout do plano básico (R$ 10,00)
    window.location.href = "https://www.ggcheckout.com/checkout/v2/LINK_BASICO_AQUI";
  };

  return (
    <>
      <section id="pricing" className="py-20 bg-gradient-to-br from-soft-blue/20 via-background to-pink-soft/10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 opacity-10">
          <div className="text-8xl">🎁</div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Pre-headline */}
            <div className="text-center mb-8">
              <p className="font-nunito text-lg md:text-xl text-muted-foreground">
                Escolha o plano ideal para seu filho
              </p>
            </div>

            {/* Main Title */}
            <h2 className="font-fredoka text-2xl md:text-4xl lg:text-5xl font-bold text-navy text-center mb-12 leading-tight px-4">
              Quanto vale ver seu filho lendo, escrevendo e se desenvolvendo com confiança?
            </h2>

            {/* Two Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">

              {/* PLANO BÁSICO - R$ 10,00 */}
              <div className="bg-card border-2 border-gray-300 rounded-3xl p-6 md:p-8 shadow-lg relative">
                <div className="space-y-6">

                  {/* Badge */}
                  <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-center">
                    <p className="font-fredoka text-lg font-bold">
                      Plano Básico
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center space-y-2">
                    <p className="text-sm text-gray-500 line-through">R$ 47,00</p>
                    <p className="text-5xl font-bold text-gray-700">R$ 10</p>
                    <p className="text-sm text-gray-600">pagamento único</p>
                  </div>

                  {/* What's Included */}
                  <div className="space-y-3">
                    <p className="font-nunito font-bold text-navy text-center">
                      Você recebe:
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                        <span className="font-inter text-sm text-foreground/90">
                          Atividades Nível 01 - Palavras com 2 Sílabas
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                        <span className="font-inter text-sm text-foreground/90">
                          Guia Rápido para Iniciar
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                        <span className="font-inter text-sm text-foreground/90">
                          Acesso Vitalício
                        </span>
                      </div>
                    </div>

                    {/* What's NOT included */}
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500 mb-2">Não inclui:</p>
                      <div className="space-y-1">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span className="font-inter text-xs text-gray-500">
                            Níveis 02 e 03 (palavras com 3 e 4 sílabas)
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span className="font-inter text-xs text-gray-500">
                            6 Super Bônus (R$ 256 de valor)
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span className="font-inter text-xs text-gray-500">
                            Método Visual Japonês Completo
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    onClick={handleCheckoutBasic}
                    variant="outline"
                    size="lg"
                    className="w-full font-nunito font-bold text-base py-6 border-2 border-gray-400 hover:bg-gray-50"
                  >
                    Começar por R$ 10,00
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                    <Lock className="w-3 h-3" />
                    <span>Pagamento 100% Seguro</span>
                  </div>
                </div>
              </div>

              {/* PLANO COMPLETO - R$ 19,90 */}
              <div className="bg-card border-4 border-coral rounded-3xl p-6 md:p-8 shadow-2xl relative">
                {/* Most Popular Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-coral text-white px-6 py-2 rounded-full shadow-lg">
                    <p className="font-fredoka text-sm font-bold">
                      ⭐ MAIS ESCOLHIDO
                    </p>
                  </div>
                </div>

                <div className="space-y-6 mt-4">

                  {/* Badge */}
                  <div className="bg-gradient-to-r from-coral to-primary text-white px-4 py-2 rounded-xl text-center">
                    <p className="font-fredoka text-lg font-bold">
                      Kit Completo
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center space-y-2">
                    <p className="text-sm text-gray-500 line-through">R$ 289,00</p>
                    <p className="text-5xl font-bold text-coral">R$ 19<span className="text-3xl">,90</span></p>
                    <p className="text-sm text-navy font-semibold">ou 3x de R$ 6,63 sem juros</p>
                    <div className="inline-block bg-mint/20 text-mint px-3 py-1 rounded-full">
                      <p className="text-xs font-bold">💰 ECONOMIZE R$ 269</p>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="space-y-3">
                    <p className="font-nunito font-bold text-navy text-center">
                      Você recebe TUDO:
                    </p>

                    <div className="bg-coral/5 rounded-xl p-4 space-y-2">
                      <p className="font-fredoka text-sm text-coral font-bold mb-2">
                        📦 KIT PRINCIPAL:
                      </p>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                        <span className="font-inter text-sm text-foreground/90">
                          400+ Atividades de Grafismo Fonético
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                        <span className="font-inter text-sm text-foreground/90">
                          3 Níveis Progressivos (2, 3 e 4 sílabas)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                        <span className="font-inter text-sm text-foreground/90">
                          Grafismo Cursiva + Bastão
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                        <span className="font-inter text-sm text-foreground/90">
                          Guia Completo para Pais
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                        <span className="font-inter text-sm text-foreground/90">
                          Método Visual Japonês Adaptado
                        </span>
                      </div>
                    </div>

                    <div className="bg-mint/5 rounded-xl p-4 space-y-2">
                      <p className="font-fredoka text-sm text-mint font-bold mb-2">
                        🎁 6 SUPER BÔNUS (R$ 256):
                      </p>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                        <span className="font-inter text-sm text-foreground/90">
                          Caderno Alfabeto com Imagem
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                        <span className="font-inter text-sm text-foreground/90">
                          Caderno Quebra Cabeça + 4 bônus extras
                        </span>
                      </div>
                    </div>

                    <div className="bg-navy/5 rounded-xl p-3">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-navy mt-1 flex-shrink-0" />
                        <span className="font-inter text-sm font-semibold text-navy">
                          Acesso Vitalício + Atualizações Grátis
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    onClick={handleCheckoutComplete}
                    size="lg"
                    className="w-full font-nunito font-bold text-base md:text-lg py-7 shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 bg-gradient-to-r from-coral to-primary hover:from-coral/95 hover:to-primary/95"
                  >
                    Quero o Kit Completo por R$ 19,90!
                  </Button>

                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <Lock className="w-3 h-3" />
                      <span>Pagamento 100% Seguro</span>
                    </div>
                    <p className="text-xs text-center text-muted-foreground">
                      Acesso imediato após confirmação
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Payment Methods */}
            <div className="text-center pt-4 space-y-3 mb-8">
              <p className="font-nunito text-sm text-muted-foreground">
                Formas de pagamento:
              </p>
              <div className="flex flex-wrap justify-center gap-4 items-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-card border rounded-lg">
                  <span className="text-2xl">💳</span>
                  <span className="font-inter text-xs md:text-sm">Cartão de Crédito</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card border rounded-lg">
                  <span className="text-2xl">⚡</span>
                  <span className="font-inter text-xs md:text-sm">PIX (Aprovação Imediata)</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              {[
                { icon: "⚡", text: "Acesso em 5 minutos" },
                { icon: "🛡️", text: "Garantia de 7 dias" },
                { icon: "👥", text: "+15.000 famílias" }
              ].map((badge, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 bg-soft-blue/10 rounded-xl">
                  <span className="text-3xl">{badge.icon}</span>
                  <span className="font-nunito text-sm text-center font-semibold">{badge.text}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* UPSELL POPUP */}
      {showUpsellPopup && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            {/* Close button */}
            <button
              onClick={handleDeclineUpsell}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Popup Content */}
            <div className="p-8 md:p-12 space-y-6">

              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-coral to-primary rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Headline */}
              <div className="text-center space-y-3">
                <h3 className="font-fredoka text-3xl md:text-4xl font-bold text-navy">
                  ⚠️ ESPERE!
                </h3>
                <p className="font-fredoka text-xl md:text-2xl text-coral font-bold">
                  Oferta Especial Só Para Você
                </p>
              </div>

              {/* Offer */}
              <div className="bg-gradient-to-br from-coral/10 to-mint/10 rounded-2xl p-6 border-2 border-coral/30">
                <p className="font-nunito text-lg text-center mb-4">
                  Que tal levar o <span className="font-bold text-coral">Kit COMPLETO</span> com tudo que seu filho precisa?
                </p>

                <div className="text-center space-y-2 mb-4">
                  <p className="text-sm text-gray-500 line-through">De R$ 19,90</p>
                  <p className="text-5xl font-bold text-coral">
                    R$ 14<span className="text-3xl">,90</span>
                  </p>
                  <div className="inline-block bg-mint text-white px-4 py-2 rounded-full">
                    <p className="text-sm font-bold">ECONOMIZE R$ 5 AGORA</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 space-y-2">
                  <p className="font-fredoka text-sm text-navy font-bold mb-2">
                    Por apenas R$ 4,90 a mais você ganha:
                  </p>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                    <span className="font-inter text-sm">
                      <strong>Níveis 02 e 03</strong> (palavras com 3 e 4 sílabas)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                    <span className="font-inter text-sm">
                      <strong>6 Super Bônus</strong> no valor de R$ 256
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                    <span className="font-inter text-sm">
                      <strong>Método Visual Japonês</strong> adaptado completo
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                    <span className="font-inter text-sm">
                      <strong>Grafismo Cursiva + Bastão</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Value comparison */}
              <div className="bg-navy/5 rounded-xl p-4 text-center">
                <p className="font-nunito text-sm text-navy">
                  Você estava levando só 1 nível por <span className="font-bold">R$ 10</span>
                </p>
                <p className="font-fredoka text-lg text-coral font-bold mt-2">
                  Agora leva TUDO por apenas R$ 14,90!
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  (Economia de R$ 274 vs. preço original de R$ 289)
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={handleCheckoutUpsell}
                  size="lg"
                  className="w-full font-nunito font-bold text-lg py-7 shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 bg-gradient-to-r from-coral to-primary"
                >
                  🎉 SIM! Quero o Kit Completo por R$ 14,90
                </Button>

                <button
                  onClick={handleDeclineUpsell}
                  className="w-full text-sm text-gray-500 hover:text-gray-700 underline py-2"
                >
                  Não, quero continuar apenas com o plano básico de R$ 10
                </button>
              </div>

              {/* Urgency */}
              <div className="text-center pt-4 border-t">
                <p className="text-xs text-gray-500">
                  ⚠️ Esta oferta de R$ 14,90 só aparece uma vez
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};
