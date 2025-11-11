import { useState, useRef } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoTestimonial {
  name: string;
  videoFile: string;
  thumbnail?: string;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    name: "Depoimento 1",
    videoFile: "/videos/depoimentos/1111(2).mp4"
  },
  {
    name: "Depoimento 2",
    videoFile: "/videos/depoimentos/40fb42ba-2991-4b9d-96f5-87b27f56e966.mp4"
  },
  {
    name: "Depoimento 3",
    videoFile: "/videos/depoimentos/MindVideo_20251111185443_944.mp4"
  },
  {
    name: "Depoimento 4",
    videoFile: "/videos/depoimentos/MindVideo_20251111190027_451.mp4"
  }
];

const VideoPlayer = ({ testimonial }: { testimonial: VideoTestimonial }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-lg border-2 border-navy/10 bg-black">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        controls
        playsInline
        preload="metadata"
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handlePause}
        poster={testimonial.thumbnail}
      >
        <source src={testimonial.videoFile} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>

      {!isPlaying && (
        <div
          onClick={handlePlayClick}
          className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer group hover:bg-black/50 transition-colors"
        >
          <div className="w-16 h-16 rounded-full bg-coral flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </div>
        </div>
      )}
    </div>
  );
};

export const VideoTestimonialsSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-beige/30 via-background to-soft-blue/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-3">
            Veja o que mães reais
          </h2>
          <h3 className="font-fredoka text-2xl md:text-3xl lg:text-4xl font-bold text-coral mb-4">
            estão dizendo sobre o Kit Kanji Kids!
          </h3>
          <p className="font-inter text-base text-foreground/70">
            📹 Assista aos depoimentos em vídeo abaixo
          </p>
        </div>

        {/* Video Players Grid */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTestimonials.map((testimonial, index) => (
              <VideoPlayer key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border-2 border-mint/20 p-6 mb-8">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-coral to-accent rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">📹</span>
            </div>
            <div>
              <h4 className="font-fredoka font-bold text-navy text-lg mb-2">
                Depoimentos 100% Reais
              </h4>
              <p className="font-inter text-sm text-foreground/80 leading-relaxed">
                Estes são vídeos de mães que estão usando o Kit Kanji Kids com seus filhos.
                Sem edição, sem roteiro - apenas experiências verdadeiras de transformação na alfabetização!
                Clique para assistir e se inspire com essas histórias reais.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center space-y-6">
          <p className="font-nunito text-lg text-muted-foreground">
            ⭐ Mais de <span className="font-bold text-navy">15.000 famílias</span> já confiaram no método
          </p>
          <Button
            onClick={scrollToPricing}
            variant="hero"
            size="lg"
            className="font-nunito font-bold text-base md:text-lg px-8 md:px-12"
          >
            Quero resultados como esses!
          </Button>
        </div>
      </div>
    </section>
  );
};
