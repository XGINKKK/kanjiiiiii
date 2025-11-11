import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppCTASection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5547997682599?text=Olá!%20Tenho%20dúvidas%20sobre%20o%20Kit%20Kanji%20Kids", "_blank");
  };

  return (
    <section className="py-12 bg-gradient-to-br from-mint/10 to-soft-blue/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-fredoka text-2xl md:text-3xl font-bold text-navy mb-4">
            Ficou com alguma dúvida?
          </h3>
          <p className="font-nunito text-lg text-foreground/80 mb-6">
            Me chame no WhatsApp
          </p>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="font-nunito font-bold text-base md:text-lg px-8 py-6 bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chamar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};
