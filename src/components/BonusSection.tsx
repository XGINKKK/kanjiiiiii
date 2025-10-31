import { Card, CardContent } from "@/components/ui/card";
import { Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const bonuses = [
  {
    title: "Caderno Alfabeto\ncom Imagem",
    description: "Apresenta cada letra do alfabeto com imagens associadas, ajudando na familiarização das crianças com as letras de forma visual e divertida.",
    oldPrice: "R$ 37",
    image: "/mockups/Generated Image October 30, 2025 - 6_57PM.png"
  },
  {
    title: "Caderno Quebra\nCabeça Alfabeto",
    description: "Atividades de quebra-cabeça com letras do alfabeto para fixação divertida e interativa.",
    oldPrice: "R$ 47",
    image: "/mockups/Generated Image October 30, 2025 - 6_57PM (1).png"
  },
  {
    title: "Caderno\nFormando Palavras",
    description: "Exercícios de formação de palavras que incentivam leitura e escrita, ajudando as crianças a construir vocabulário.",
    oldPrice: "R$ 57",
    image: "/mockups/Generated Image October 30, 2025 - 6_58PM.png"
  },
  {
    title: "Caderno Alfabeto\ncom Relógio",
    description: "Caderno interativo que ensina as letras do alfabeto junto a um relógio, promovendo a leitura e noções de tempo de forma lúdica.",
    oldPrice: "R$ 39",
    image: "/mockups/Generated Image October 30, 2025 - 6_59PM.png"
  },
  {
    title: "Caderno\nAlfabeto Traçado",
    description: "Caderno com letras do alfabeto traçadas, perfeito para que as crianças pratiquem a escrita e melhorem sua coordenação motora.",
    oldPrice: "R$ 27",
    image: "/mockups/Generated Image October 30, 2025 - 7_01PM.png"
  },
  {
    title: "Caderno Alfabeto\ncom Carinhas",
    description: "Caderno divertido que associa cada letra do alfabeto a carinhas expressivas, ajudando as crianças a aprender com alegria e criatividade.",
    oldPrice: "R$ 49",
    image: "/mockups/Generated Image October 30, 2025 - 7_03PM.png"
  }
];

export const BonusSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-coral/5 via-background to-mint/10 relative overflow-hidden">
      {/* Decorative elements - Hidden on mobile */}
      <div className="absolute top-10 left-10 opacity-10 hidden md:block">
        <Sparkles className="w-32 h-32 text-coral" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 hidden md:block">
        <Gift className="w-32 h-32 text-mint" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-coral/10 border-2 border-coral/30 rounded-full mb-6">
            <Gift className="w-5 h-5 md:w-6 md:h-6 text-coral" />
            <span className="font-nunito font-bold text-coral text-sm md:text-base uppercase tracking-wider">
              E ainda não acabou...
            </span>
          </div>

          <h2 className="font-fredoka text-2xl md:text-4xl lg:text-5xl font-bold text-navy mb-3 leading-tight px-4">
            Garantindo seu acesso <span className="text-coral">hoje</span>
          </h2>
          <h3 className="font-fredoka text-2xl md:text-4xl lg:text-5xl font-bold mb-6 px-4 flex items-center justify-center flex-wrap gap-2">
            <span>você leva <span className="text-coral whitespace-nowrap">6 SUPER BÔNUS</span></span>
            <Gift className="w-8 h-8 md:w-12 md:h-12 text-coral" />
          </h3>

          <p className="font-nunito text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
            Materiais complementares no valor de <span className="font-bold text-coral line-through whitespace-nowrap">R$ 256</span> que você recebe
            <span className="font-bold text-mint"> TOTALMENTE GRÁTIS</span> hoje!
          </p>
        </div>

        {/* Bonus Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
          {bonuses.map((bonus, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-2 border-transparent hover:border-coral/30 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative bg-gradient-to-br from-soft-blue/20 to-mint/20 p-6 h-64 flex items-center justify-center overflow-hidden">
                  <div className="absolute top-3 right-3 bg-coral text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg z-10">
                    Bônus #{index + 1}
                  </div>
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h4 className="font-fredoka text-xl font-bold text-navy leading-tight whitespace-pre-line">
                    {bonus.title}
                  </h4>

                  <p className="font-inter text-sm text-muted-foreground leading-relaxed min-h-[80px]">
                    {bonus.description}
                  </p>

                  {/* Pricing */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-nunito text-sm text-gray-500 line-through">
                          De {bonus.oldPrice}
                        </p>
                        <p className="font-fredoka text-2xl font-bold text-mint">
                          HOJE: GRÁTIS
                        </p>
                      </div>
                      <div className="bg-mint/10 p-3 rounded-full">
                        <Gift className="w-8 h-8 text-mint" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Total Value Banner */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-coral to-coral/90 rounded-2xl p-8 text-white text-center shadow-2xl border-4 border-white">
            <p className="font-nunito text-lg mb-2 opacity-90">
              Valor total dos bônus:
            </p>
            <p className="font-fredoka text-5xl md:text-6xl font-bold mb-4">
              R$ 256,00
            </p>
            <div className="inline-flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
              <Sparkles className="w-6 h-6" />
              <p className="font-nunito text-xl font-bold">
                TUDO GRÁTIS PARA VOCÊ HOJE!
              </p>
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Trust Element & CTA */}
        <div className="text-center mt-12 space-y-6">
          <p className="font-inter text-base text-muted-foreground italic">
            ⏰ <span className="font-bold">Oferta por tempo limitado!</span> Os bônus são exclusivos para quem garantir acesso hoje.
          </p>
          <Button
            onClick={scrollToPricing}
            variant="hero"
            size="lg"
            className="font-nunito font-bold text-base md:text-lg px-8 md:px-12"
          >
            Quero garantir meus bônus agora!
          </Button>
        </div>
      </div>
    </section>
  );
};
