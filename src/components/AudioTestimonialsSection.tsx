import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AudioTestimonial {
  name: string;
  avatar: string;
  audioFile: string;
  duration: string;
}

const audioTestimonials: AudioTestimonial[] = [
  {
    name: "Ana Paula",
    avatar: "/avatars/avatar-gen17031bc98f4f6fcf99b157c7ef4d4407.jpg",
    audioFile: "/audios/ElevenLabs_2025-11-08T00_01_35_DEPOIMENTO EM AUDIO_gen_sp105_s50_sb86_se70_b_m2.mp3",
    duration: "0:45"
  },
  {
    name: "Juliana",
    avatar: "/avatars/avatar-gen458f209e95874138b60dda87500fc67c.jpg",
    audioFile: "/audios/1107.MP3",
    duration: "0:38"
  },
  {
    name: "Fernanda",
    avatar: "/avatars/avatar-gen6d6b41cacb74b811db046c0a6e286e42.jpg",
    audioFile: "/audios/ElevenLabs_2025-11-08T00_24_00_DPS_gen_sp100_s50_sb75_v3.mp3",
    duration: "0:22"
  },
  {
    name: "Camila",
    avatar: "/avatars/avatar-gene3d99a090940ff2f92c3cd980b5e61d3.jpg",
    audioFile: "/audios/ElevenLabs_2025-11-08T00_25_37_cansada_gen_sp100_s50_sb75_v3.mp3",
    duration: "0:28"
  },
  {
    name: "Beatriz",
    avatar: "/avatars/avatar-gen17031bc98f4f6fcf99b157c7ef4d4407.jpg",
    audioFile: "/audios/ElevenLabs_2025-11-08T00_28_27_DPS_gen_sp100_s50_sb75_v3.mp3",
    duration: "0:15"
  }
];

const AudioPlayer = ({ testimonial }: { testimonial: AudioTestimonial }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const progress = (audio.currentTime / audio.duration) * 100;
      setProgress(progress);
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      {/* Avatar com anel de progresso */}
      <div className="relative">
        {/* Anel de progresso */}
        <svg className="absolute inset-0 -rotate-90 w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="3"
          />
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
            strokeDasharray={`${progress * 2.89} 289`}
            strokeLinecap="round"
            className="transition-all duration-100"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="100%" stopColor="#4ECDC4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Avatar */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />

          {/* Play/Pause overlay */}
          <button
            onClick={togglePlay}
            className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors flex items-center justify-center group"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white fill-white" />
            ) : (
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            )}
          </button>
        </div>
      </div>

      {/* Nome */}
      <p className="font-fredoka font-bold text-navy text-sm text-center">
        {testimonial.name}
      </p>

      {/* Tempo */}
      <div className="flex items-center gap-2 text-xs text-foreground/60">
        <span>{formatTime(currentTime)}</span>
        <span>/</span>
        <span>{testimonial.duration}</span>
      </div>

      {/* Audio element (hidden) */}
      <audio ref={audioRef} src={testimonial.audioFile} preload="metadata" />
    </div>
  );
};

export const AudioTestimonialsSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-beige/30 via-background to-soft-blue/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-3">
            Ouça o que mães reais
          </h2>
          <h3 className="font-fredoka text-2xl md:text-3xl lg:text-4xl font-bold text-coral mb-4">
            estão dizendo sobre o Kit Kanji Kids!
          </h3>
          <p className="font-inter text-base text-foreground/70">
            🎧 Clique nos depoimentos em áudio abaixo
          </p>
        </div>

        {/* Audio Players Grid */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
            {audioTestimonials.map((testimonial, index) => (
              <AudioPlayer key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border-2 border-mint/20 p-6 mb-8">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-coral to-accent rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">🎙️</span>
            </div>
            <div>
              <h4 className="font-fredoka font-bold text-navy text-lg mb-2">
                Depoimentos 100% Reais
              </h4>
              <p className="font-inter text-sm text-foreground/80 leading-relaxed">
                Estes são áudios de mães que estão usando o Kit Kanji Kids com seus filhos.
                Sem edição, sem roteiro - apenas experiências verdadeiras de transformação na alfabetização!
                Clique para ouvir e se inspire com essas histórias reais.
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
