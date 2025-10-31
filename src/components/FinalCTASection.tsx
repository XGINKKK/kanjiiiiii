import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const FinalCTASection = () => {
  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-[hsl(14,90%,65%)] to-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <div className="text-6xl">🌸</div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <div className="text-6xl">🌸</div>
      </div>
      <div className="absolute top-1/2 left-1/4 opacity-5">
        <div className="w-32 h-32 rounded-full bg-primary-foreground" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="text-7xl animate-float">🌸</div>

          {/* Title */}
          <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
            Transforme o futuro do seu filho hoje usando a sabedoria japonesa!
          </h2>

          {/* Description */}
          <p className="font-nunito text-lg md:text-xl text-primary-foreground/95 leading-relaxed max-w-2xl mx-auto">
            Junte-se a milhares de pais brasileiros que já estão vendo seus filhos lerem
            com confiança, alegria e naturalidade — sem traumas, sem pressão, sem
            frustração.
          </p>

          {/* CTA Button */}
          <div className="pt-6 px-4">
            <Button
              onClick={scrollToCheckout}
              size="xl"
              className="bg-primary-foreground text-primary font-bold hover:bg-primary-foreground/90 shadow-2xl hover:shadow-3xl hover:scale-105 font-nunito text-base md:text-lg px-8 md:px-12 py-5 md:py-6 w-full md:w-auto"
            >
              Quero o método japonês agora!
            </Button>
          </div>

          {/* Trust badges */}
          <div className="pt-8 flex flex-wrap justify-center gap-6 text-primary-foreground/95">
            {[
              "Acesso imediato",
              "Garantia incondicional de 7 dias",
              "Suporte pedagógico incluído",
              "Método comprovado há séculos",
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-yellow-soft" />
                <span className="font-inter text-sm md:text-base">{badge}</span>
              </div>
            ))}
          </div>

          {/* Final message */}
          <p className="font-inter text-base italic text-primary-foreground/90 pt-8 max-w-3xl mx-auto leading-relaxed">
            Seu filho merece aprender a ler da forma mais natural e eficaz possível. Dê a
            ele o mesmo método que transforma crianças japonesas em leitores confiantes
            desde os 3 anos de idade. 🇯🇵📚
          </p>
        </div>
      </div>
    </section>
  );
};
