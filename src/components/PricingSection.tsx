import { Button } from "@/components/ui/button";
import { Check, Lock } from "lucide-react";

export const PricingSection = () => {
  const handleCheckout = () => {
    window.location.href = "https://pay.cakto.com.br/3a6yi3z_630084";
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-soft-blue/20 via-background to-pink-soft/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <div className="text-8xl">🎁</div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Pre-headline */}
          <div className="text-center mb-8">
            <p className="font-nunito text-lg md:text-xl text-muted-foreground">
              Oferta Especial de Lançamento
            </p>
          </div>

          {/* Main Title */}
          <h2 className="font-fredoka text-2xl md:text-4xl lg:text-5xl font-bold text-navy text-center mb-12 leading-tight px-4">
            Quanto vale ver seu filho lendo com confiança e alegria?
          </h2>

          {/* Pricing Card */}
          <div className="bg-card border-4 border-primary/30 rounded-3xl p-8 md:p-12 shadow-2xl relative">

            {/* Limited Time Badge */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-[90%] md:w-auto">
              <div className="bg-coral text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-nunito font-bold text-xs md:text-base shadow-xl text-center">
                🔥 Preço Promocional - Apenas Hoje!
              </div>
            </div>

            <div className="space-y-8 mt-4">

              {/* Value Stack */}
              <div className="space-y-3">
                <h3 className="font-nunito text-xl md:text-2xl font-bold text-navy text-center mb-6">
                  Você recebe TUDO isso:
                </h3>

                <p className="font-fredoka text-lg text-coral text-center font-bold mb-4">
                  📦 KIT PRINCIPAL:
                </p>

                {[
                  { item: "+ de 100 Atividades de Grafismo Fonético", value: "R$ 67,00" },
                  { item: "Atividades Nível 01 - Palavras com 02 Sílabas", value: "R$ 27,00" },
                  { item: "Atividades Nível 02 - Palavras com 03 Sílabas", value: "R$ 27,00" },
                  { item: "Atividades Nível 03 - Palavras com 04 Sílabas", value: "R$ 27,00" },
                  { item: "Atividades Grafismo - Cursiva e Bastão", value: "R$ 37,00" },
                  { item: "Guia Completo para Pais", value: "R$ 47,00" },
                  { item: "Método Visual Japonês Adaptado", value: "R$ 57,00" },
                ].map((line, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/30">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <span className="font-inter text-sm md:text-base text-foreground/90">
                        {line.item}
                      </span>
                    </div>
                    <span className="font-nunito font-semibold text-primary text-xs md:text-sm whitespace-nowrap ml-4">
                      {line.value}
                    </span>
                  </div>
                ))}

                <p className="font-fredoka text-lg text-mint text-center font-bold mb-4 mt-6">
                  🎁 6 SUPER BÔNUS:
                </p>

                {[
                  { item: "Caderno Alfabeto com Imagem", value: "R$ 37,00" },
                  { item: "Caderno Quebra Cabeça Alfabeto", value: "R$ 47,00" },
                  { item: "Caderno Formando Palavras", value: "R$ 57,00" },
                  { item: "Caderno Alfabeto com Relógio", value: "R$ 39,00" },
                  { item: "Caderno Alfabeto Traçado", value: "R$ 27,00" },
                  { item: "Caderno Alfabeto com Carinhas", value: "R$ 49,00" },
                ].map((line, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 bg-mint/5">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-mint mt-1 flex-shrink-0" />
                      <span className="font-inter text-sm md:text-base text-foreground/90">
                        {line.item}
                      </span>
                    </div>
                    <span className="font-nunito font-semibold text-mint text-xs md:text-sm whitespace-nowrap ml-4">
                      {line.value}
                    </span>
                  </div>
                ))}

                <p className="font-fredoka text-lg text-navy text-center font-bold mb-4 mt-6">
                  ✨ INCLUSO:
                </p>

                {[
                  { item: "Acesso Vitalício - Para Sempre", value: "Incluído" },
                  { item: "Suporte Contínuo", value: "Incluído" },
                  { item: "Garantia Incondicional de 7 dias", value: "Incluído" },
                ].map((line, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 bg-yellow-soft/5">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                      <span className="font-inter text-sm md:text-base text-foreground/90 font-semibold">
                        {line.item}
                      </span>
                    </div>
                    <span className="font-nunito font-bold text-coral text-xs md:text-sm whitespace-nowrap ml-4">
                      {line.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total Value */}
              <div className="bg-soft-blue/20 rounded-2xl p-6 text-center">
                <p className="font-nunito text-base md:text-lg text-foreground/70 mb-1">
                  Valor Total de Tudo:
                </p>
                <p className="font-fredoka text-3xl md:text-4xl font-bold text-muted-foreground line-through">
                  R$ 545,00
                </p>
                <p className="font-inter text-sm text-muted-foreground mt-2">
                  (Kit R$ 289 + Bônus R$ 256)
                </p>
              </div>

              {/* Discount Reveal */}
              <div className="text-center space-y-2 px-4">
                <p className="font-nunito text-lg md:text-xl lg:text-2xl text-foreground/80">
                  De <span className="line-through whitespace-nowrap">R$ 545,00</span> por apenas:
                </p>
                <div className="relative inline-block">
                  <div className="absolute -inset-4 bg-yellow-soft/30 rounded-full blur-xl"></div>
                  <p className="relative font-fredoka text-4xl md:text-6xl lg:text-7xl font-bold text-primary">
                    R$ 27,90
                  </p>
                </div>
                <p className="font-inter text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                  Pagamento único • Sem mensalidades • Acesso para sempre
                </p>
              </div>

              {/* Price Justification */}
              <div className="bg-mint/10 border-2 border-mint/30 rounded-2xl p-6 text-center">
                <p className="font-inter text-base md:text-lg text-foreground/90 leading-relaxed">
                  <span className="font-bold text-navy">Menos que uma pizza em família</span> para dar ao seu filho a
                  habilidade mais importante da vida: <span className="font-bold text-primary">ler com confiança</span>.
                </p>
                <p className="font-nunito text-sm text-coral mt-3 font-bold">
                  95% de desconto! Economize R$ 517,10 hoje!
                </p>
              </div>

              {/* CTA Button */}
              <div className="text-center pt-4 px-4">
                <Button
                  onClick={handleCheckout}
                  size="lg"
                  className="w-full md:w-auto font-nunito font-bold text-base md:text-lg lg:text-xl px-8 md:px-12 py-6 md:py-8 shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 bg-gradient-to-r from-coral to-primary hover:from-coral/95 hover:to-primary/95 animate-pulse-subtle"
                >
                  Quero o Kit por R$ 27,90!
                </Button>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-muted-foreground">
                    <Lock className="w-3 h-3 md:w-4 md:h-4" />
                    <span>Pagamento 100% Seguro</span>
                  </div>
                  <p className="font-inter text-xs md:text-sm text-muted-foreground">
                    Acesso imediato após confirmação do pagamento
                  </p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="text-center pt-4 space-y-3">
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

              {/* Final Trust Elements */}
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

          {/* Post-Price Social Proof */}
          <div className="text-center mt-12 space-y-4">
            <p className="font-inter text-base md:text-lg text-foreground/80 italic">
              "Vale cada centavo! Meu filho evoluiu mais em 1 mês com o método japonês
              do que em 6 meses com aulas particulares que custaram R$ 800."
            </p>
            <p className="font-nunito font-bold text-navy">
              — Renata M., São Paulo/SP
            </p>
          </div>

          {/* Urgency Element */}
          <div className="text-center mt-8 p-6 bg-coral/10 border-2 border-coral/30 rounded-2xl">
            <p className="font-nunito text-lg md:text-xl font-bold text-navy mb-2">
              ⏰ Atenção: Preço promocional válido apenas para hoje
            </p>
            <p className="font-inter text-sm md:text-base text-foreground/80">
              Após meia-noite, o valor volta para R$ 289,00.
              Não perca esta oportunidade de transformar a alfabetização do seu filho.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
