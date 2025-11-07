import { MessageCircle } from "lucide-react";
import { memo } from "react";

export const WhatsAppButton = memo(() => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5547997682599"; // Formato internacional
    const message = encodeURIComponent("Olá! Preciso de suporte com o Kit Kanji Kids.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-bounce hover:animate-none"
      aria-label="WhatsApp Suporte"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />

      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-navy text-white px-4 py-2 rounded-lg text-sm font-nunito whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco no WhatsApp
        <div className="absolute -bottom-1 right-6 w-2 h-2 bg-navy rotate-45" />
      </div>
    </button>
  );
});

WhatsAppButton.displayName = "WhatsAppButton";
