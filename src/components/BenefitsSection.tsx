import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import iconBrainLearning from "@/assets/icon-brain-learning.jpg";
import icon10Minutes from "@/assets/icon-10-minutes.jpg";
import iconJapaneseMethod from "@/assets/icon-japanese-method.jpg";
import iconSpecialNeeds from "@/assets/icon-special-needs.jpg";
import iconBrazilianPortuguese from "@/assets/icon-brazilian-portuguese.jpg";

const benefits = [
  {
    icon: iconJapaneseMethod,
    title: "✏️ Leitura + Escrita juntas",
    description:
      "Técnica japonesa que desenvolve leitura e escrita simultaneamente, através do grafismo fonético. Seu filho aprende a ler enquanto melhora a coordenação motora e a letra.",
  },
  {
    icon: iconBrainLearning,
    title: "🎮 Aprende brincando",
    description:
      "Atividades lúdicas e divertidas que as crianças ADORAM fazer! Não parece estudo chato — parece jogo. Muitas crianças pedem para fazer as atividades.",
  },
  {
    icon: icon10Minutes,
    title: "🎯 Melhora concentração e letra",
    description:
      "Apenas 10 minutos por dia desenvolvem foco, atenção e coordenação motora fina. Resultado: criança mais concentrada e letra mais bonita.",
  },
  {
    icon: iconSpecialNeeds,
    title: "🌈 Funciona com todo tipo de criança",
    description:
      "Eficaz até com TDAH, Autismo, dislexia ou dificuldades de foco. O método visual se adapta ao jeito único de cada criança aprender.",
  },
  {
    icon: iconBrazilianPortuguese,
    title: "📚 Método completo e progressivo",
    description:
      "Todo o poder do método japonês adaptado ao português brasileiro, com níveis progressivos que respeitam o ritmo natural de cada criança.",
  },
];

export const BenefitsSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="py-20 bg-card relative overflow-hidden"
      style={{
        backgroundImage: "url('/imagens-melhorias/background-porque-precisa-kit.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(255, 255, 255, 0.95)"
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            Seu filho aprende lendo, escrevendo e brincando!
          </h2>
          <p className="font-nunito text-lg md:text-xl text-muted-foreground">
            O Kit Kanji Kids™ desenvolve leitura, escrita, coordenação e concentração — tudo ao mesmo tempo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-2 border-soft-blue hover:border-primary hover:-translate-y-2 transition-all duration-300 hover:shadow-xl bg-card"
            >
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-yellow-soft/20 flex items-center justify-center mx-auto">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </div>
                <CardTitle className="font-nunito text-xl text-center text-navy">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-inter text-center text-base leading-relaxed">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 px-4">
          <Button
            onClick={scrollToPricing}
            variant="hero"
            size="lg"
            className="font-nunito font-bold text-base md:text-lg px-8 md:px-12 w-full md:w-auto"
          >
            Quero meu filho lendo e escrevendo!
          </Button>
        </div>
      </div>
    </section>
  );
};
