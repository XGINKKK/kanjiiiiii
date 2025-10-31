import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, BookOpen, Target, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const items = [
  {
    title: "+ de 100 Atividades de Grafismo Fonético",
    subtitle: "Traduzido do japonês pro português do Brasil",
    icon: BookOpen,
    color: "coral",
    image: "/carrossel/5.jpg"
  },
  {
    title: "Atividades Nível 01",
    subtitle: "Palavras com 02 Sílabas",
    icon: Target,
    color: "mint",
    image: "/carrossel/6.jpg"
  },
  {
    title: "Atividades Nível 02",
    subtitle: "Palavras com 03 Sílabas",
    icon: Target,
    color: "soft-blue",
    image: "/carrossel/12.jpg"
  },
  {
    title: "Atividades Nível 03",
    subtitle: "Palavras com 04 Sílabas",
    icon: Target,
    color: "navy",
    image: "/carrossel/13.jpg"
  },
  {
    title: "Atividades Grafismo",
    subtitle: "na letra Cursiva e Bastão",
    icon: Sparkles,
    color: "coral",
    image: "/carrossel/16.jpg"
  },
  {
    title: "Guia Completo para Pais",
    subtitle: "Passo a passo de como aplicar o método em casa com seu filho",
    icon: BookOpen,
    color: "mint",
    image: "/carrossel/5.jpg"
  },
  {
    title: "Método Visual Japonês Adaptado",
    subtitle: "Técnica milenar comprovada, traduzida para o português brasileiro",
    icon: Sparkles,
    color: "soft-blue",
    image: "/carrossel/6.jpg"
  }
];

export const WhatIsIncludedSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-soft-blue/5 to-beige/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
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
            Material completo + método comprovado + suporte especializado
          </p>
        </div>

        {/* Carousel - Com Setas de Navegação */}
        <div className="max-w-6xl mx-auto">
          {/* Main Carousel Display */}
          <div className="relative mb-8 rounded-3xl overflow-hidden shadow-2xl">
            {/* Floating Badge */}
            <div className="absolute top-6 right-6 bg-coral text-white px-6 py-3 rounded-full shadow-xl animate-bounce z-10">
              <p className="font-fredoka font-bold text-lg">Tudo Digital!</p>
            </div>

            {/* Seta Esquerda */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-navy rounded-full p-3 shadow-lg transition-all hover:scale-110"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Seta Direita */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-navy rounded-full p-3 shadow-lg transition-all hover:scale-110"
              aria-label="Próximo"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image Display */}
            <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-soft-blue/20 to-mint/20">
              <img
                src={items[currentIndex].image}
                alt={items[currentIndex].title}
                className="w-full h-full object-contain transition-opacity duration-500"
                style={{ opacity: 1 }}
              />
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mb-8">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-12 h-3 bg-coral"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir para item ${index + 1}`}
              />
            ))}
          </div>

          {/* Lista de itens abaixo - Clicáveis */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {items.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === currentIndex;

              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`text-left transition-all duration-300 ${
                    isActive ? "scale-105" : "hover:scale-102"
                  }`}
                >
                  <Card className={`h-full border-2 ${
                    isActive
                      ? "border-coral bg-coral/5 shadow-lg"
                      : "border-gray-200 bg-white hover:border-coral/30 hover:shadow-md"
                  }`}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                          isActive ? "bg-coral/20" : "bg-gray-100"
                        }`}>
                          <Icon className={`w-5 h-5 ${isActive ? "text-coral" : "text-gray-600"}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-nunito font-bold text-sm mb-1 ${
                            isActive ? "text-navy" : "text-gray-700"
                          }`}>
                            {item.title}
                          </h4>
                          <p className="font-inter text-xs text-gray-600 line-clamp-2">
                            {item.subtitle}
                          </p>
                        </div>
                        {isActive && (
                          <CheckCircle className="w-5 h-5 text-coral flex-shrink-0" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </button>
              );
            })}
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
