import { Gift } from "lucide-react";

export function BlackFridayBanner() {
  return (
    <div className="bg-coral text-white py-3 px-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-center gap-3 text-center">
        <Gift className="w-5 h-5 animate-bounce" />
        <p className="font-fredoka text-sm md:text-base font-bold drop-shadow-md">
          🎉 Mês de Novembro: Desconto de Black Friday! 🎉
        </p>
        <Gift className="w-5 h-5 animate-bounce" />
      </div>
    </div>
  );
}
