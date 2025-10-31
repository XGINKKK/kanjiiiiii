import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export const VideoSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-navy/5 via-soft-blue/10 to-background">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral/10 border-2 border-coral/30 rounded-full mb-4">
            <PlayCircle className="w-5 h-5 text-coral" />
            <span className="font-nunito font-bold text-coral text-sm">
              VÍDEO DEMONSTRATIVO
            </span>
          </div>

          <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            Veja como funciona na prática
          </h2>

          <p className="font-nunito text-xl md:text-2xl text-foreground/80 leading-relaxed">
            Descubra o segredo que está transformando a alfabetização de milhares de crianças
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
            {/* Video Player com aspect ratio responsivo */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <div className="absolute top-0 left-0 w-full h-full">
                <YouTubeEmbed
                  videoId="Wfkpe_EfI4I"
                  title="Veja como funciona na prática"
                  autoplay={true}
                  privacy={true}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 bg-coral text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse-soft z-10">
              🔥 ASSISTA AGORA
            </div>
          </div>

          {/* Video Info */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card rounded-xl border border-border/50">
              <div className="text-3xl mb-2">👶</div>
              <h3 className="font-nunito font-bold text-navy mb-1">Para Crianças</h3>
              <p className="font-inter text-sm text-muted-foreground">
                De 2 a 12 anos
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-xl border border-border/50">
              <div className="text-3xl mb-2">⏱️</div>
              <h3 className="font-nunito font-bold text-navy mb-1">10 Minutos</h3>
              <p className="font-inter text-sm text-muted-foreground">
                Por dia é suficiente
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-xl border border-border/50">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-nunito font-bold text-navy mb-1">Resultados</h3>
              <p className="font-inter text-sm text-muted-foreground">
                Em 2-3 semanas
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center space-y-6">
            <p className="font-inter text-base text-muted-foreground italic">
              ⭐ Mais de <span className="font-bold text-primary">15.000 famílias</span> já
              usam este método com sucesso
            </p>
            <Button
              onClick={scrollToPricing}
              variant="hero"
              size="lg"
              className="font-nunito font-bold text-base md:text-lg px-8 md:px-12"
            >
              Quero aplicar este método agora!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
