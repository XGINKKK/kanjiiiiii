import { AlertCircle, CheckCircle2, BookOpen, Brain, Smile, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { memo, useCallback } from "react";

export const MethodExplanationSection = memo(() => {
  const scrollToPricing = useCallback(() => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-beige/30 to-soft-blue/10">
      <div className="container mx-auto px-4">
        {/* Intro Statement */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-mint/10 border-2 border-mint/30 rounded-full mb-4">
            <Brain className="w-5 h-5 text-mint" />
            <span className="font-nunito font-bold text-mint text-sm uppercase tracking-wider">
              Como Funciona
            </span>
          </div>

          <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            Com o Kit de Grafismo Fonético, baseado no{" "}
            <span className="text-coral">método japonês</span> de alfabetização,
            seu filho aprende a ler até{" "}
            <span className="text-coral">5x mais rápido</span>
          </h2>

          <p className="font-nunito text-xl md:text-2xl text-foreground/80 leading-relaxed">
            De forma divertida, simples e eficaz, direto de casa!
          </p>
        </div>

        {/* Pain Points - O que acontece ANTES */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-coral/5 to-coral/10 border-2 border-coral/20 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="font-fredoka text-2xl md:text-3xl font-bold text-navy mb-4">
                Muitos pais acham que{" "}
                <span className="text-coral">"cada criança tem seu tempo pra ler"</span>.
                Até que...
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/80 backdrop-blur-sm border-2 border-coral/30 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-6 h-6 text-coral" />
                </div>
                <p className="font-nunito font-bold text-navy text-lg">
                  👎🏻 As tarefas de leitura viram um sofrimento
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border-2 border-coral/30 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-6 h-6 text-coral" />
                </div>
                <p className="font-nunito font-bold text-navy text-lg">
                  👎🏻 As notas baixas
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border-2 border-coral/30 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-6 h-6 text-coral" />
                </div>
                <p className="font-nunito font-bold text-navy text-lg">
                  👎🏻 Ela se sente "menos inteligente" do que os coleguinhas
                </p>
              </div>
            </div>

            <div className="bg-coral/20 border-2 border-coral rounded-2xl p-6 text-center">
              <p className="font-nunito text-lg md:text-xl font-bold text-navy">
                E o pior:{" "}
                <span className="text-coral">
                  Começa a achar que não é capaz, sem entender o porquê..
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Entenda o Problema */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-navy/5 to-navy/10 border-2 border-navy/20 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-coral/10 border-2 border-coral/30 rounded-full mb-6">
                <Brain className="w-5 h-5 text-coral" />
                <span className="font-nunito font-bold text-coral text-sm uppercase">
                  Entenda o Problema
                </span>
              </div>

              <h3 className="font-fredoka text-2xl md:text-3xl font-bold text-navy mb-6">
                O que realmente atrasa a leitura do seu filho...
              </h3>

              <div className="bg-white/80 backdrop-blur-sm border-2 border-navy/30 rounded-2xl p-8 mb-6">
                <p className="font-nunito text-lg md:text-xl text-navy leading-relaxed">
                  É a{" "}
                  <span className="font-bold text-coral">
                    falta de estímulo visual e fonético na fase certa
                  </span>
                  , o que pode tornar o processo de alfabetização mais lento, frustrante e
                  confuso — tanto para a criança quanto para você.
                </p>
              </div>

              <p className="font-nunito text-base md:text-lg text-foreground/80 italic mb-4">
                Mas calma, você não tem culpa disso...
              </p>

              <p className="font-nunito text-lg md:text-xl text-navy font-semibold">
                É que ninguém te ensinou como ajudar seu filho a despertar a leitura de forma
                leve, divertida e no tempo certo.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-mint/20 border-2 border-mint rounded-full px-8 py-4">
                <span className="text-3xl">👇</span>
                <span className="font-fredoka text-xl font-bold text-navy">
                  Por isso você precisa do Kit...
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Por que você precisa do Kit */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="font-fredoka text-3xl md:text-4xl font-bold text-navy mb-4">
              Por isso você precisa do Kit...
            </h3>
            <p className="font-nunito text-xl text-foreground/80">
              Cada atividade do Kit foi cuidadosamente criada para:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-coral/10 to-coral/5 border-2 border-coral/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-coral rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-nunito font-bold text-navy text-lg mb-2">
                    Desenvolver a coordenação motora fina
                  </h4>
                  <p className="font-inter text-sm text-foreground/70">
                    Com traçados e padrões que preparam a mão para a escrita
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-mint/10 to-mint/5 border-2 border-mint/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-mint rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-nunito font-bold text-navy text-lg mb-2">
                    Estimular a criatividade e a atenção da criança
                  </h4>
                  <p className="font-inter text-sm text-foreground/70">
                    Atividades visuais coloridas que prendem o interesse naturalmente
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-soft-blue/10 to-soft-blue/5 border-2 border-soft-blue/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-soft-blue rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-nunito font-bold text-navy text-lg mb-2">
                    Fortalecer as conexões cerebrais que facilitam a leitura
                  </h4>
                  <p className="font-inter text-sm text-foreground/70">
                    Reconhecimento visual de padrões acelera o aprendizado
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-navy/10 to-navy/5 border-2 border-navy/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-nunito font-bold text-navy text-lg mb-2">
                    Despertar o interesse pelas palavras e pelos sons
                  </h4>
                  <p className="font-inter text-sm text-foreground/70">
                    Consciência fonológica desenvolvida através de padrões visuais
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 - Full Width */}
            <div className="md:col-span-2 bg-gradient-to-br from-coral/10 to-mint/10 border-2 border-coral/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-coral rounded-full flex items-center justify-center">
                  <Smile className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-nunito font-bold text-navy text-xl mb-2">
                    Tornar o processo de alfabetização leve, divertido e eficaz!
                  </h4>
                  <p className="font-inter text-base text-foreground/70">
                    Tudo isso com apenas 10 minutos por dia — direto de casa, no ritmo natural
                    da criança.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Por que funciona - Ciência */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-soft-blue/10 to-mint/10 border-2 border-soft-blue/30 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-navy/10 border-2 border-navy/30 rounded-full mb-6">
                <Brain className="w-5 h-5 text-navy" />
                <span className="font-nunito font-bold text-navy text-sm uppercase">
                  A Ciência Por Trás
                </span>
              </div>

              <h3 className="font-fredoka text-3xl md:text-4xl font-bold text-navy mb-8">
                Por que as atividades de Grafismo Fonético funcionam?
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left - Explanation */}
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm border-2 border-navy/20 rounded-2xl p-6">
                  <h4 className="font-nunito font-bold text-navy text-lg mb-3">
                    Antes de aprender a ler, o cérebro da criança precisa reconhecer padrões,
                    sons e movimentos.
                  </h4>
                  <p className="font-inter text-foreground/80">
                    As atividades de grafismo fonético desenvolvem a{" "}
                    <span className="font-bold text-coral">
                      consciência fonológica e visual
                    </span>{" "}
                    — habilidades essenciais para que a criança reconheça sílabas, sons e
                    estruturas das palavras de forma natural.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-mint/20 to-mint/10 border-2 border-mint/30 rounded-2xl p-6">
                  <p className="font-inter text-navy">
                    Ao traçar linhas, curvas e padrões fonéticos, ela fortalece as{" "}
                    <span className="font-bold text-mint">
                      conexões cerebrais responsáveis pela leitura
                    </span>
                    , acelerando o processo de alfabetização de forma divertida e sem pressão.
                  </p>
                </div>
              </div>

              {/* Right - Visual Icon */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-coral/20 to-mint/20 rounded-full flex items-center justify-center border-4 border-coral/30">
                    <Brain className="w-32 h-32 text-coral" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-mint rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resultados Visíveis */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-mint/10 to-mint/5 border-2 border-mint/30 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="font-fredoka text-3xl md:text-4xl font-bold text-navy mb-6">
                E em poucos dias você vai notar a diferença na leitura do seu filho:
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: CheckCircle2,
                  text: "Vai reconhecer sílabas e sons com mais facilidade",
                  color: "coral"
                },
                {
                  icon: CheckCircle2,
                  text: "Vai se sentir mais confiante ao tentar ler palavras novas",
                  color: "mint"
                },
                {
                  icon: CheckCircle2,
                  text: "Vai mostrar mais interesse por livros e história",
                  color: "soft-blue"
                },
                {
                  icon: CheckCircle2,
                  text: "Vai aprender no ritmo dele, sem frustração ou comparação",
                  color: "navy"
                },
                {
                  icon: Smile,
                  text: "E o melhor: vai começar a gostar do momento de leitura em casa",
                  color: "coral",
                  highlight: true
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                    item.highlight
                      ? "md:col-span-2 bg-gradient-to-r from-coral/20 to-mint/20 border-coral/40"
                      : "bg-white/80 backdrop-blur-sm border-mint/30"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      item.color === "coral"
                        ? "bg-coral"
                        : item.color === "mint"
                        ? "bg-mint"
                        : item.color === "soft-blue"
                        ? "bg-soft-blue"
                        : "bg-navy"
                    }`}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <p
                    className={`font-nunito text-lg ${
                      item.highlight ? "font-bold text-navy" : "text-navy/90"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="bg-gradient-to-br from-navy/5 to-coral/5 border-2 border-navy/20 rounded-3xl p-8 md:p-12">
            <p className="font-fredoka text-2xl md:text-3xl font-bold text-navy mb-6 leading-tight">
              Com o <span className="text-coral">Kit de Grafismo Fonético</span>, seu filho
              desenvolve o cérebro para aprender a ler com leveza, no tempo dele — e com
              resultados visíveis em poucos dias.
            </p>

            <div className="inline-flex items-center gap-2 px-6 py-3 bg-mint/20 border-2 border-mint/30 rounded-full mb-6">
              <BookOpen className="w-5 h-5 text-mint" />
              <span className="font-nunito font-bold text-mint text-sm">
                Comece a jornada de aprendizado do seu filho hoje
              </span>
            </div>

            <Button
              onClick={scrollToPricing}
              variant="hero"
              size="lg"
              className="font-nunito font-bold text-lg md:text-xl px-12 py-8 shadow-2xl hover:shadow-3xl"
            >
              Quero meu filho(a) Lendo!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

MethodExplanationSection.displayName = "MethodExplanationSection";
