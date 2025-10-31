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

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center space-y-12 animate-fade-in-up">
          {/* Hero Image Mockup */}
          <div className="relative w-full max-w-4xl mx-auto">
            <img
              src={heroMockup}
              alt="Kit de Grafismo Fonético - Mockup"
              className="w-full h-auto"
            />
          </div>

          {/* Main Headline */}
          <h1 className="font-fredoka text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight max-w-5xl mx-auto">
            Descubra a{" "}
            <span className="text-soft-blue">técnica japonesa</span> que
            ensina as crianças a ler{" "}
            <span className="text-navy">até</span>{" "}
            <span className="text-coral">5 vezes mais rápido</span>
            <span className="text-navy">, sem pressão!</span>
          </h1>

          {/* Subtitle */}
          <p className="font-nunito text-xl md:text-2xl text-foreground/80">
            Com apenas <span className="font-bold text-navy">10 minutos</span> por dia.
          </p>

          {/* Benefits List */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              "Ideal para crianças de 2 a 12 anos, no ritmo natural de cada uma",
              "Mesmo que ainda não reconheça letras ou sons",
              "Funciona também com crianças com TDAH, Autismo ou dificuldades de foco",
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
          <div className="space-y-4 pt-6 px-4">
            <Button
              onClick={scrollToCheckout}
              variant="hero"
              size="xl"
              className="font-nunito font-bold text-base md:text-lg px-8 md:px-12 w-full md:w-auto hover:scale-[1.02] transition-all duration-300 animate-pulse-subtle"
            >
              Quero meu pequeno lendo rápido!
            </Button>

            <div className="flex items-center justify-center gap-2 text-sm md:text-sm text-muted-foreground">
              <Lock className="w-4 h-4 md:w-4 md:h-4" />
              <span>🔒 Compra 100% Segura + Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
