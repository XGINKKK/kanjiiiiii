import { Button } from "@/components/ui/button";
import { Check, Lock } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

export const HeroSection = () => {
  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-soft-blue/10 py-20">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <div className="w-16 h-16 rounded-full bg-pink-soft animate-float" />
      </div>
      <div className="absolute bottom-32 right-20 opacity-20">
        <div className="w-24 h-24 rounded-full bg-yellow-soft animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto text-center space-y-12 animate-fade-in-up px-4">
          {/* Hero Image Mockup */}
          <div className="relative w-full max-w-3xl mx-auto">
            <img
              src={heroMockup}
              alt="Kit de Grafismo Fonético - Mockup"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Main Headline */}
          <h1 className="font-fredoka text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.2] max-w-5xl mx-auto px-2">
            Descubra a{" "}
            <span className="text-soft-blue">técnica japonesa que ensina as crianças a ler e escrever</span>{" "}
            até <span className="text-coral">5 vezes mais rápido</span>
            <span className="text-navy">, brincando!</span>
          </h1>

          {/* Subtitle */}
          <p className="font-nunito text-xl md:text-2xl text-foreground/80">
            Seu filho aprende <span className="font-bold text-coral">lendo, escrevendo e se divertindo</span> com apenas <span className="font-bold text-navy">10 minutos</span> por dia.
          </p>

          {/* Benefits List */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              "✏️ Desenvolve a leitura, escrita e coordenação motora ao mesmo tempo",
              "🎯 Melhora a concentração e a letra da criança enquanto aprende",
              "🎮 Aprende brincando: atividades lúdicas que as crianças pedem para fazer",
              "🌈 Ideal para crianças de 2 a 12 anos, funciona até com TDAH e Autismo",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 justify-center text-left">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-mint flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="font-inter text-base md:text-lg text-foreground/90">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-mint/20 border-2 border-mint/40 rounded-full">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-coral to-primary border-2 border-white" />
              ))}
            </div>
            <p className="font-nunito text-sm md:text-base font-semibold text-navy">
              +15.000 famílias já garantiram acesso
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center space-y-4 pt-6">
            <Button
              onClick={scrollToCheckout}
              variant="hero"
              size="xl"
              className="font-nunito font-bold text-base md:text-lg px-8 md:px-12 w-full max-w-md md:w-auto hover:scale-[1.02] transition-all duration-300 animate-pulse-subtle"
            >
              Quero meu filho lendo e escrevendo!
            </Button>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span>🔒 Compra 100% Segura + Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
