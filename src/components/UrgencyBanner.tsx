import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Define o fim da promoção para meia-noite de hoje
    const getEndTime = () => {
      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);
      return endOfDay;
    };

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const endTime = getEndTime().getTime();
      const difference = endTime - now;

      if (difference > 0) {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="bg-coral text-white py-3 px-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 animate-pulse" />
            <span className="font-nunito font-bold text-sm md:text-base">
              🔥 PROMOÇÃO DE LANÇAMENTO
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-inter text-xs md:text-sm">
              Termina em:
            </span>
            <div className="flex gap-1 font-fredoka font-bold text-base md:text-lg">
              <span className="bg-white/20 px-2 py-1 rounded">
                {formatTime(timeLeft.hours)}
              </span>
              <span>:</span>
              <span className="bg-white/20 px-2 py-1 rounded">
                {formatTime(timeLeft.minutes)}
              </span>
              <span>:</span>
              <span className="bg-white/20 px-2 py-1 rounded">
                {formatTime(timeLeft.seconds)}
              </span>
            </div>
          </div>

          <span className="font-nunito text-xs md:text-sm">
            Depois volta para <span className="font-bold line-through">R$ 97,00</span>
          </span>
        </div>
      </div>
    </div>
  );
};
