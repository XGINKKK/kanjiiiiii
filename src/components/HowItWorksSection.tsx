import { Button } from "@/components/ui/button";

export const HowItWorksSection = () => {
  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-beige/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Title */}
          <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-bold text-navy text-center leading-tight">
            O segredo milenar que está revolucionando a alfabetização de milhares de crianças brasileiras
          </h2>

          {/* Content */}
          <div className="space-y-6 font-inter text-base md:text-lg text-foreground/90 leading-relaxed text-center md:text-left">
            <p>
              Você sabia que o{" "}
              <span className="font-bold text-primary">Japão possui uma taxa de alfabetização de 99,9%</span>? E que
              crianças japonesas aprendem a ler <span className="font-bold">mais de 2.000 caracteres complexos</span>{" "}
              antes mesmo dos 6 anos de idade?
            </p>

            <p>
              O segredo não está em decorar o alfabeto ou repetir sílabas até cansar. O método japonês ensina o cérebro
              infantil a <span className="font-bold text-primary">reconhecer padrões visuais</span>, tornando a leitura
              algo natural e intuitivo — como aprender a andar.
            </p>

            <p>
              Enquanto no Brasil muitas crianças sofrem com métodos tradicionais que não respeitam seu ritmo, no Japão
              elas aprendem de forma lúdica, sem pressão, transformando a alfabetização em uma{" "}
              <span className="font-bold">descoberta alegre</span> ao invés de uma obrigação cansativa.
            </p>

            <div className="bg-card border-2 border-primary/30 rounded-2xl p-6 md:p-8 text-center">
              <p className="font-nunito text-xl md:text-2xl font-bold text-navy mb-2">🇯🇵 Comparação Brasil vs Japão</p>
              <p className="text-muted-foreground">
                Taxa de alfabetização: <span className="text-primary font-bold">Brasil 60%</span> |
                <span className="text-success font-bold"> Japão 99,9%</span>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-6">
            <Button onClick={scrollToCheckout} variant="hero" size="xl" className="font-nunito">
              Quero o método japonês agora!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
