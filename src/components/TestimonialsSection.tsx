import { Heart, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Larissa Mendes",
    text: "meus pequenos estão conseguindo ter uma evolução sigunificativa graças ao Grafismo Fonético. Quem comprar outro produto, é porque não gosta de dinheiro.",
    reactions: "😍❤️",
    time: "391 likes em 28 min",
    avatar: "/avatars/avatar-gen17031bc98f4f6fcf99b157c7ef4d4407.jpg"
  },
  {
    name: "Ana Oliveira",
    text: "Minha filha começou a formar palavras com apenas duas semanas usando o kit. É incrível como ela evoluiu em tão pouco tempo!",
    reactions: "🔥❤️",
    time: "798 likes em 1 hora",
    avatar: "/avatars/avatar-gen458f209e95874138b60dda87500fc67c.jpg"
  },
  {
    name: "Marisa Correia",
    text: "Acreditem em mim, essa é a melhor compra que vocês vão fazer este ano. Não percam a chance!",
    reactions: "😍",
    time: "131 likes em 45 min",
    avatar: "/avatars/avatar-gen6d6b41cacb74b811db046c0a6e286e42.jpg"
  },
  {
    name: "Camila Silva",
    text: "É incrível como algo tão simples pode fazer tanta diferença! Estou muito satisfeita com a minha compra. 👍",
    reactions: "👍",
    time: "1023 likes em 2 horas",
    avatar: "/avatars/avatar-gene3d99a090940ff2f92c3cd980b5e61d3.jpg"
  },
  {
    name: "Bruna Souza",
    text: "O método é simples de seguir, mesmo para nós que somos pais sem experiência em ensino. É muito gratificante ver nosso filho lendo suas primeiras palavras!",
    reactions: "❤️😍",
    time: "94 likes em 25 min",
    avatar: "/avatars/avatar-gen17031bc98f4f6fcf99b157c7ef4d4407.jpg"
  }
];

export const TestimonialsSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-beige/30 via-background to-soft-blue/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-3">
            Veja o que Pais e educadores
          </h2>
          <h3 className="font-fredoka text-2xl md:text-3xl lg:text-4xl font-bold text-coral">
            dizem sobre o Kit Kanja Kids !
          </h3>
        </div>

        {/* Comments Container - Estilo Facebook */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Header do card */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <p className="font-nunito font-semibold text-gray-700">
                {testimonials.length} Comentários
              </p>
            </div>

            {/* Comments */}
            <div className="divide-y divide-gray-100">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 hover:bg-gray-50/50 transition-colors">
                  <div className="flex gap-4">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Name and Comment */}
                      <div className="bg-gray-50 rounded-2xl px-4 py-3 mb-2">
                        <p className="font-nunito font-bold text-navy text-sm mb-1">
                          {testimonial.name}
                        </p>
                        <p className="font-inter text-gray-700 text-sm leading-relaxed">
                          {testimonial.text}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-4 px-2">
                        <button className="font-nunito text-sm font-bold text-gray-600 hover:text-coral transition-colors flex items-center gap-1 min-h-[44px] py-2">
                          Curtir Responder {testimonial.reactions}
                        </button>
                        <span className="font-inter text-sm text-gray-500">
                          {testimonial.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer - Plugin Social */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4 text-[#1877f2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="font-inter text-xs">Plug-in social do Facebook</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12 space-y-6">
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
