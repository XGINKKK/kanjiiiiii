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
    title: "Método de reconhecimento visual japonês",
    description:
      "Técnica milenar comprovada que ensina o cérebro infantil a reconhecer padrões de leitura de forma intuitiva e natural, sem decoreba forçada.",
  },
  {
    icon: icon10Minutes,
    title: "Apenas 10 minutos por dia",
    description:
      "Sessões curtas e poderosas que mantêm a criança engajada e motivada, sem cansaço ou resistência.",
  },
  {
    icon: iconBrainLearning,
    title: "No ritmo da criança",
    description:
      "Respeita o tempo de desenvolvimento único de cada pequeno, sem pressão, comparações ou frustração — apenas descoberta natural.",
  },
  {
    icon: iconSpecialNeeds,
    title: "Para necessidades especiais",
    description:
      "Funciona perfeitamente com crianças com TDAH, Autismo, dislexia ou dificuldades de foco, adaptando-se ao jeito de cada uma aprender.",
  },
  {
    icon: iconBrazilianPortuguese,
    title: "100% adaptado ao português",
    description:
      "Todo o poder do método japonês, mas desenvolvido especificamente para a língua portuguesa e a realidade brasileira.",
  },
];

export const BenefitsSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            Por que o método japonês funciona tão bem?
          </h2>
          <p className="font-nunito text-lg md:text-xl text-muted-foreground">
            O Kit Kanji Kids™ combina sabedoria oriental, neurociência e diversão
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
            Quero o método japonês!
          </Button>
        </div>
      </div>
    </section>
  );
};
