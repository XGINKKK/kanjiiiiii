import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles, Target, Clock, Brain, Heart, ArrowRight } from "lucide-react";

export default function UpsellAnalisador() {
  // URL para o checkout do Analisador Pedagógico IA
  const CHECKOUT_URL = "https://www.ggcheckout.com/checkout/v2/QnUWMGO6JkHt6vJCX8sR";

  const handleBuyNow = () => {
    // Redireciona para o checkout externo
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-blue/20 via-background to-beige/20">
      {/* Offer Section */}
        <div className="container mx-auto px-4 py-12">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-fredoka font-bold text-sm">OFERTA EXCLUSIVA PÓS-COMPRA</span>
            </div>

            <h1 className="font-fredoka text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4">
              🎯 Parabéns por adquirir o Kit Kanji Kids!
            </h1>

            <p className="font-fredoka text-2xl md:text-3xl text-coral mb-6">
              Mas espere... você está prestes a cometer um erro comum!
            </p>

            <div className="bg-gradient-to-r from-coral/10 to-accent/10 border-2 border-coral/30 rounded-2xl p-6 md:p-8 mb-8">
              <p className="font-inter text-lg md:text-xl text-foreground/90 leading-relaxed">
                O Kit Kanji Kids é ideal para crianças de <strong>2 a 12 anos</strong>, incluindo crianças com <strong>TDAH e Autismo</strong>.
              </p>
              <p className="font-inter text-lg md:text-xl text-foreground/90 leading-relaxed mt-4">
                Mas a forma como um pai de uma criança de <strong className="text-coral">3 anos com TDAH</strong> deve usar é <strong className="text-navy">MUITO diferente</strong> de um pai de uma criança de <strong className="text-coral">8 anos com dificuldade de foco</strong>.
              </p>
            </div>

            <div className="bg-white border-2 border-navy rounded-2xl p-6 md:p-8 shadow-xl">
              <h2 className="font-fredoka text-2xl md:text-3xl font-bold text-navy mb-4">
                ⚠️ Não use o método "genérico"!
              </h2>
              <p className="font-inter text-lg text-foreground/80 leading-relaxed">
                Cada criança é <strong>única</strong>. Usar as atividades de forma aleatória pode <strong>desperdiçar o potencial</strong> do método e até <strong>desmotivar</strong> seu filho.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-mint to-soft-blue text-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <Brain className="w-16 h-16 mx-auto mb-4" />
                <h2 className="font-fredoka text-3xl md:text-4xl font-bold mb-3">
                  Apresentando: O Analisador Pedagógico IA
                </h2>
                <p className="font-fredoka text-xl md:text-2xl">
                  Um plano de 4 semanas feito <strong>sob medida</strong> para o seu filho!
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-6">
                <p className="font-inter text-lg leading-relaxed">
                  Responda a um questionário detalhado e deixe nossa <strong>Inteligência Artificial especializada</strong> criar um plano de ação de 4 semanas, passo a passo, dizendo <strong>exatamente</strong>:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Target, text: "Quais atividades usar em cada dia" },
                  { icon: ArrowRight, text: "Em que ordem progressiva trabalhar" },
                  { icon: Clock, text: "Por quanto tempo praticar cada atividade" },
                  { icon: Brain, text: "Estratégias adaptadas às necessidades do seu filho" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur rounded-xl p-4">
                    <item.icon className="w-6 h-6 flex-shrink-0 mt-1" />
                    <p className="font-inter text-base">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="font-fredoka text-3xl font-bold text-navy text-center mb-8">
              O que você vai receber:
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "📅 Plano de 4 Semanas Personalizado",
                  description: "Cronograma diário detalhado baseado na idade, condições e necessidades específicas do seu filho"
                },
                {
                  title: "🎯 Atividades Específicas",
                  description: "Não fique perdido! Saiba exatamente qual sílaba, tema e nível de dificuldade usar em cada dia"
                },
                {
                  title: "🧠 Estratégias para TDAH e Autismo",
                  description: "Técnicas comprovadas adaptadas para crianças com necessidades especiais"
                },
                {
                  title: "⏱️ Gestão de Tempo Realista",
                  description: "Plano adaptado ao tempo que você tem disponível por dia (mesmo que sejam apenas 15 minutos!)"
                },
                {
                  title: "📊 Indicadores de Progresso",
                  description: "Saiba quando avançar e quando reforçar cada fase do aprendizado"
                },
                {
                  title: "💡 Dicas de Especialistas",
                  description: "Orientações práticas de pedagogos para manter a motivação e engajamento"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-mint/20">
                  <h4 className="font-fredoka font-bold text-navy text-lg mb-2">
                    {benefit.title}
                  </h4>
                  <p className="font-inter text-foreground/70 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-beige/50 to-soft-blue/50 rounded-2xl p-6 md:p-8 border-2 border-mint/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-fredoka font-bold text-navy text-xl mb-2">
                    Por que pais que usam planos personalizados têm 3x mais sucesso?
                  </h4>
                  <p className="font-inter text-foreground/80 leading-relaxed">
                    Porque seguem um caminho claro, adequado à realidade deles. Sem tentativa e erro. Sem frustração. Apenas <strong>resultados consistentes</strong> em 4 semanas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border-4 border-coral p-8 md:p-12">
              <div className="text-center mb-6">
                <p className="font-fredoka text-lg text-foreground/60 mb-2">
                  Valor de uma consulta pedagógica personalizada:
                </p>
                <p className="font-fredoka text-3xl text-foreground/40 line-through mb-3">
                  R$ 297,00
                </p>
                <p className="font-fredoka text-sm text-coral font-bold mb-4">
                  OFERTA EXCLUSIVA PÓS-COMPRA
                </p>
                <p className="font-fredoka text-6xl md:text-7xl font-bold text-navy mb-2">
                  R$ 97
                </p>
                <p className="font-inter text-lg text-foreground/60">
                  pagamento único
                </p>
              </div>

              <div className="bg-mint/10 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-navy">
                  <CheckCircle2 className="w-5 h-5 text-mint" />
                  <p className="font-inter text-sm">
                    <strong>Garantia:</strong> Se você não ficar satisfeito, devolvemos 100% do seu dinheiro em até 7 dias
                  </p>
                </div>
              </div>

              <Button
                onClick={handleBuyNow}
                variant="hero"
                size="lg"
                className="w-full font-fredoka font-bold text-xl py-8"
              >
                Quero Meu Plano Personalizado Agora! 🚀
              </Button>

              <p className="text-center text-sm text-foreground/50 mt-4">
                💳 Você será redirecionado para finalizar o pagamento
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}
