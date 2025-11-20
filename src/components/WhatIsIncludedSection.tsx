import { CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export const WhatIsIncludedSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    "/carousel/AnyConv.com__Caderno-de-Atividades-Grafismos-Foneticos-Nivel-l.webp",
    "/carousel/AnyConv.com__Caderno-de-Atividades-Grafismos-Foneticos-Nivel-l-1.webp",
    "/carousel/AnyConv.com__Caderno-de-Atividades-Grafismos-Foneticos-Nivel-l-2.webp",
    "/carousel/AnyConv.com__Caderno-de-Atividades-Grafismos-Foneticos-Nivel-l-3.webp",
    "/carousel/AnyConv.com__Caderno-de-Atividades-Grafismos-Foneticos-Nivel-2.webp",
    "/carousel/AnyConv.com__Caderno-de-Atividades-Grafismos-Foneticos-Nivel-2-1.webp",
    "/carousel/AnyConv.com__Caderno-de-Atividades-Grafismos-Foneticos-Nivel-3-m.webp",
    "/carousel/AnyConv.com__Caderno-de-Atividades-Grafismos-Foneticos-Nivel-3-m-1.webp",
    "/carousel/AnyConv.com__Copia-de-Caderno-de-Atividades-Grafismos-Foneticos-Nivel-2.webp",
    "/carousel/AnyConv.com__Copia-de-Caderno-de-Atividades-Grafismos-Foneticos-Nivel-2-1.webp",
  ];

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1.5; // pixels per frame - velocidade rápida
    let animationFrameId: number;

    const scroll = () => {
      scrollAmount += scrollSpeed;

      // Reset scroll when reaching the end of first set
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }

      scrollContainer.scrollLeft = scrollAmount;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-soft-blue/5 to-beige/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-mint/10 border-2 border-mint/30 rounded-full mb-4">
            <CheckCircle className="w-5 h-5 text-mint" />
            <span className="font-nunito font-bold text-mint text-sm uppercase tracking-wider">
              O QUE VOCÊ VAI RECEBER
            </span>
          </div>

          <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            Veja tudo que vem no seu
            <span className="block text-coral mt-2">Kit Kanji Kids™</span>
          </h2>

          <p className="font-nunito text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Centenas de atividades divertidas que seu filho vai adorar fazer!
          </p>
        </div>

        {/* Carousel Container - Auto Scroll */}
        <div className="relative mb-12">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-hidden py-4"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Duplicate images for seamless loop */}
            {[...images, ...images].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 md:w-80 lg:w-96 h-80 md:h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border-4 border-white"
              >
                <img
                  src={image}
                  alt={`Atividade do Kit Kanji Kids ${(index % images.length) + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Gradient Overlays para efeito de fade nas bordas */}
          <div className="absolute left-0 top-0 w-20 md:w-32 h-full bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 md:w-32 h-full bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none"></div>
        </div>

        {/* Destacados - Você Imprime & Os Pequenos Amam */}
        <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
          {/* Card: VOCÊ IMPRIME */}
          <div className="bg-gradient-to-br from-coral/10 to-coral/5 border-2 border-coral/30 rounded-3xl p-8 text-center shadow-lg">
            <div className="text-6xl mb-4">🖨️</div>
            <h3 className="font-fredoka text-2xl md:text-3xl font-bold text-coral mb-4">
              VOCÊ IMPRIME
            </h3>
            <p className="font-nunito text-base md:text-lg text-navy leading-relaxed">
              Você pode imprimir quando quiser, pois o acesso é <span className="font-bold text-coral">VITALÍCIO</span> e quantas vezes desejar.
            </p>
          </div>

          {/* Card: OS PEQUENOS AMAM */}
          <div className="bg-gradient-to-br from-mint/10 to-mint/5 border-2 border-mint/30 rounded-3xl p-8 text-center shadow-lg">
            <div className="text-6xl mb-4">❤️</div>
            <h3 className="font-fredoka text-2xl md:text-3xl font-bold text-mint mb-4">
              OS PEQUENOS<br />AMAM
            </h3>
            <p className="font-nunito text-base md:text-lg text-navy leading-relaxed">
              Temos uma ótima notícia pra você, <span className="font-bold text-mint">MÃOS À OBRA!</span> Importante que sempre auxilie seu pequeno nas atividades.
            </p>
          </div>
        </div>

        {/* Trust Element & CTA */}
        <div className="text-center mt-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-mint/10 px-6 py-3 rounded-full">
            <Sparkles className="w-5 h-5 text-mint" />
            <p className="font-nunito font-bold text-navy">
              Acesso imediato após a confirmação do pagamento
            </p>
          </div>
          <Button
            onClick={scrollToPricing}
            variant="hero"
            size="lg"
            className="font-nunito font-bold text-base md:text-lg px-8 md:px-12"
          >
            Quero ter acesso ao kit completo!
          </Button>
        </div>
      </div>
    </section>
  );
};
