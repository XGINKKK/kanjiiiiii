import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Lock, Infinity } from "lucide-react";
import { useState } from "react";

const Upsell = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutos

  // Countdown timer
  useState(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  });

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleAcceptOffer = () => {
    window.location.href = "https://www.ggcheckout.com/checkout/v2/e0Cu3brM3kj47JA4s53T";
  };

  const handleDeclineOffer = () => {
    // Redireciona para área de membros
    window.location.href = "/membros";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-blue/20 via-background to-mint/10">
      {/* Header com Timer */}
      <div className="bg-coral text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="font-fredoka text-xl md:text-2xl font-bold">
            🎁 OFERTA EXCLUSIVA
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
            <Zap className="w-5 h-5" />
            <span className="font-nunito font-bold text-lg">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">

        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-yellow-soft/30 border-2 border-yellow-soft px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-coral" />
            <span className="font-nunito font-bold text-coral text-sm uppercase">
              Parabéns pela compra!
            </span>
          </div>

          <h1 className="font-fredoka text-3xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
            <span className="text-coral">ESPERA!</span> Antes de acessar seu kit...
          </h1>

          <p className="font-nunito text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Eu tenho uma <span className="font-bold text-primary">oferta especial única</span> que
            vai <span className="text-coral font-bold">MULTIPLICAR</span> os resultados do seu filho!
          </p>
        </div>

        {/* Main Offer Card */}
        <div className="bg-card border-4 border-primary/30 rounded-3xl p-8 md:p-12 shadow-2xl mb-12">

          {/* Problema */}
          <div className="text-center mb-8">
            <h2 className="font-fredoka text-2xl md:text-3xl font-bold text-navy mb-4">
              ❌ O Problema que Muitos Pais Enfrentam...
            </h2>
            <div className="bg-coral/10 border-2 border-coral/30 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="font-inter text-base md:text-lg text-foreground/90 leading-relaxed">
                "Meu filho terminou todas as atividades do kit em 2 semanas e agora
                <span className="font-bold text-coral"> NÃO TEM MAIS O QUE FAZER!</span>
                Preciso de mais conteúdo mas não sei criar atividades profissionais..."
              </p>
            </div>
          </div>

          {/* Solução */}
          <div className="text-center mb-8">
            <h2 className="font-fredoka text-3xl md:text-4xl font-bold text-primary mb-6">
              ✨ Apresentando: Gerador INFINITO de Atividades com IA
            </h2>
            <div className="bg-gradient-to-br from-mint/20 to-soft-blue/20 border-2 border-mint/30 rounded-2xl p-8">
              <p className="font-nunito text-lg md:text-xl text-navy leading-relaxed mb-4">
                Crie <span className="font-bold text-coral">atividades NOVAS e EXCLUSIVAS</span>
                {" "}quando quiser, com apenas 3 cliques!
              </p>
              <div className="flex items-center justify-center gap-2 text-mint">
                <Infinity className="w-8 h-8" />
                <span className="font-fredoka text-2xl font-bold">Atividades Ilimitadas</span>
              </div>
            </div>
          </div>

          {/* Como Funciona */}
          <div className="mb-8">
            <h3 className="font-fredoka text-2xl md:text-3xl font-bold text-navy text-center mb-6">
              🚀 Como Funciona?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Escolha a Sílaba",
                  desc: "BA, CA, TRA, ou qualquer outra que você quiser trabalhar",
                  icon: "🎯"
                },
                {
                  step: "2",
                  title: "Selecione o Tipo",
                  desc: "Tracejado, colorir, ligar, caça-palavras, e mais!",
                  icon: "🎨"
                },
                {
                  step: "3",
                  title: "IA Gera em Segundos",
                  desc: "Atividade profissional pronta para imprimir!",
                  icon: "⚡"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white border-2 border-soft-blue/30 rounded-2xl p-6 text-center hover:shadow-xl transition-all">
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                    {item.step}
                  </div>
                  <h4 className="font-nunito font-bold text-lg text-navy mb-2">{item.title}</h4>
                  <p className="font-inter text-sm text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefícios */}
          <div className="mb-8">
            <h3 className="font-fredoka text-2xl md:text-3xl font-bold text-navy text-center mb-6">
              ✅ O Que Você Recebe:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {[
                "Gerador ilimitado de atividades por 12 meses",
                "Todas as sílabas do alfabeto disponíveis",
                "15+ tipos diferentes de atividades",
                "Ilustrações únicas criadas por IA",
                "PDFs em alta qualidade para impressão",
                "Suporte técnico prioritário",
                "Acesso imediato após confirmação",
                "Novas funcionalidades adicionadas mensalmente"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-mint/10 rounded-xl">
                  <Check className="w-6 h-6 text-mint flex-shrink-0 mt-1" />
                  <span className="font-inter text-base text-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Comparação de Valor */}
          <div className="bg-yellow-soft/20 border-2 border-yellow-soft/50 rounded-2xl p-8 mb-8">
            <h3 className="font-fredoka text-2xl font-bold text-navy text-center mb-6">
              💰 Quanto Isso Vale Realmente?
            </h3>
            <div className="space-y-3 max-w-2xl mx-auto">
              <div className="flex justify-between items-center py-2 border-b border-border/30">
                <span className="font-inter text-foreground/80">Designer gráfico (1 atividade):</span>
                <span className="font-nunito font-bold text-primary">R$ 50,00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/30">
                <span className="font-inter text-foreground/80">Pedagoga (criação de conteúdo):</span>
                <span className="font-nunito font-bold text-primary">R$ 80,00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/30">
                <span className="font-inter text-foreground/80">Ilustrador profissional:</span>
                <span className="font-nunito font-bold text-primary">R$ 70,00</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-coral/10 rounded-lg px-4 mt-4">
                <span className="font-nunito font-bold text-lg text-navy">Custo por atividade:</span>
                <span className="font-fredoka font-bold text-2xl text-coral">R$ 200,00</span>
              </div>
              <p className="text-center font-inter text-sm text-foreground/70 pt-4">
                Com o gerador, você cria <span className="font-bold">50 atividades por mês</span> =
                Economia de <span className="font-bold text-coral">R$ 10.000,00</span>!
              </p>
            </div>
          </div>

          {/* Preço Especial */}
          <div className="text-center space-y-6">
            <div>
              <p className="font-nunito text-lg text-foreground/70 mb-2">Valor Normal:</p>
              <p className="font-fredoka text-4xl font-bold text-muted-foreground line-through">
                R$ 297,00
              </p>
            </div>

            <div className="bg-gradient-to-r from-coral/20 to-primary/20 border-2 border-coral/30 rounded-2xl p-6">
              <p className="font-nunito text-xl text-navy mb-2">
                🔥 Oferta EXCLUSIVA de Upsell:
              </p>
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-yellow-soft/30 rounded-full blur-xl"></div>
                <p className="relative font-fredoka text-5xl md:text-7xl font-bold text-primary">
                  R$ 87,00
                </p>
              </div>
              <p className="font-inter text-sm text-foreground/70 mt-3">
                Pagamento único • Acesso por 12 meses • 50 gerações/mês
              </p>
              <p className="font-nunito text-lg text-coral font-bold mt-2">
                70% DE DESCONTO - Economize R$ 210,00!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 pt-4">
              <Button
                onClick={handleAcceptOffer}
                size="lg"
                className="w-full md:w-auto font-nunito font-bold text-xl px-12 py-8 shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 bg-gradient-to-r from-coral to-primary hover:from-coral/95 hover:to-primary/95 animate-pulse-subtle"
              >
                🚀 SIM! Quero o Gerador por R$ 87,00
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Lock className="w-4 h-4" />
                <span>Pagamento 100% Seguro</span>
              </div>

              <button
                onClick={handleDeclineOffer}
                className="font-inter text-sm text-muted-foreground hover:text-foreground underline transition-colors"
              >
                Não, obrigado. Quero apenas o kit básico →
              </button>
            </div>
          </div>

          {/* Garantia */}
          <div className="mt-12 bg-soft-blue/10 border-2 border-soft-blue/30 rounded-2xl p-6 text-center">
            <h4 className="font-fredoka text-xl font-bold text-navy mb-3">
              🛡️ Garantia Incondicional de 7 Dias
            </h4>
            <p className="font-inter text-foreground/80 max-w-2xl mx-auto">
              Se você não criar pelo menos 10 atividades incríveis ou não economizar
              horas de trabalho, devolvemos 100% do seu dinheiro. Sem perguntas.
            </p>
          </div>

        </div>

        {/* Depoimentos */}
        <div className="bg-card border-2 border-mint/30 rounded-3xl p-8 mb-12">
          <h3 className="font-fredoka text-2xl md:text-3xl font-bold text-navy text-center mb-8">
            ⭐ O Que Outros Pais Dizem:
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Juliana R.",
                text: "Incrível! Meu filho nunca fica sem atividades novas. Já criei mais de 30 personalizadas!",
                rating: 5
              },
              {
                name: "Carlos M.",
                text: "Vale cada centavo. Economizei centenas de reais que gastaria comprindo novos cadernos.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-mint/5 border border-mint/20 rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">⭐</span>
                  ))}
                </div>
                <p className="font-inter text-foreground/80 italic mb-3">"{testimonial.text}"</p>
                <p className="font-nunito font-bold text-navy">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Urgência Final */}
        <div className="bg-coral/10 border-2 border-coral/30 rounded-2xl p-8 text-center">
          <p className="font-fredoka text-2xl md:text-3xl font-bold text-navy mb-4">
            ⏰ Esta oferta expira em {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </p>
          <p className="font-inter text-lg text-foreground/80 mb-6">
            Após este tempo, o gerador volta para <span className="font-bold text-coral">R$ 297,00</span> ou
            não estará mais disponível para compra. Esta é sua única chance!
          </p>
          <Button
            onClick={handleAcceptOffer}
            size="lg"
            className="font-nunito font-bold text-lg px-10 py-6 bg-coral hover:bg-coral/90 text-white"
          >
            Garantir Meu Acesso Agora →
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Upsell;
