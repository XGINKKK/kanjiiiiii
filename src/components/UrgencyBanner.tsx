import { Zap } from "lucide-react";

export const UrgencyBanner = () => {
  return (
    <div className="bg-coral text-white py-3 px-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-center">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 animate-pulse" />
            <span className="font-nunito font-bold text-sm md:text-base">
              🔥 Mês de Novembro: Desconto de Black Friday!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
