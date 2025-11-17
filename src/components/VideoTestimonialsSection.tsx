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
          <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 leading-tight">
            "Meu filho pede para fazer as atividades"
          </h2>
          <p className="font-nunito text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto">
            Ouça de mães que vivem isso todos os dias
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

        {/* Trust Badge */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <p className="font-nunito text-lg text-foreground/60">
            Mais de 15 mil famílias já vivem essa experiência
          </p>
          <Button
            onClick={scrollToPricing}
            variant="hero"
            size="lg"
            className="font-fredoka font-bold text-lg px-10 py-6"
          >
            Quero isso para o meu filho
          </Button>
        </div>
      </div>
    </section>
  );
};
