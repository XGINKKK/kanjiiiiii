import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppCTASection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5547997682599?text=Olá!%20Tenho%20dúvidas%20sobre%20o%20Kit%20Kanji%20Kids", "_blank");
  };

  return (
    <section className="py-16 bg-gradient-to-br from-mint/5 to-soft-blue/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-fredoka text-2xl md:text-3xl font-bold text-navy mb-3 leading-tight">
            Quer conversar antes de decidir?
          </h3>
          <p className="font-nunito text-lg text-foreground/60 mb-8">
            Estou aqui para tirar suas dúvidas
          </p>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="font-fredoka font-bold text-lg px-10 py-7 bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chamar no WhatsApp
          </Button>
          <p className="text-sm text-foreground/50 mt-4">
            Geralmente respondo em alguns minutos
          </p>
        </div>
      </div>
    </section>
  );
};
