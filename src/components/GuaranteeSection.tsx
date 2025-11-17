import { Shield, Mail } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-mint/20 via-background to-soft-blue/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Guarantee Card */}
          <div className="bg-white rounded-3xl shadow-2xl border-4 border-mint/30 p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 opacity-5">
              <Shield className="w-64 h-64 text-mint" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-6">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-mint to-mint/70 rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Title */}
              <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
                Experimente por 7 dias. Se não funcionar, devolvemos seu dinheiro.
              </h2>

              {/* Description */}
              <div className="max-w-2xl mx-auto space-y-4">
                <p className="font-nunito text-lg md:text-xl text-foreground/70 leading-relaxed">
                  Use o kit com seu filho por uma semana inteira. Se você não ver o brilho nos olhos dele,
                  se não perceber a vontade de aprender crescendo... basta nos avisar:
                </p>

                {/* Email Badge */}
                <div className="inline-flex items-center gap-3 bg-mint/10 border-2 border-mint/30 rounded-full px-6 py-3">
                  <Mail className="w-5 h-5 text-mint" />
                  <a
                    href="mailto:suportekanjakids@gmail.com"
                    className="font-nunito font-bold text-navy hover:text-mint transition-colors"
                  >
                    suportekanjakids@gmail.com
                  </a>
                </div>

                <p className="font-nunito text-lg md:text-xl text-foreground/70 leading-relaxed">
                  E pronto. Devolvemos cada centavo. Sem burocracia, sem perguntas difíceis.
                </p>

                {/* Risk Badge */}
                <div className="pt-6">
                  <div className="inline-block bg-gradient-to-r from-mint to-mint/80 text-white px-8 py-5 rounded-2xl shadow-lg">
                    <p className="font-fredoka text-2xl md:text-3xl font-bold">
                      Zero risco para você
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges - mais clean */}
              <div className="flex flex-wrap justify-center gap-4 pt-8">
                {[
                  "Sem perguntas difíceis",
                  "Reembolso em 24h",
                  "Você decide"
                ].map((text, index) => (
                  <div key={index} className="bg-white px-5 py-2 rounded-full border border-mint/20 shadow-sm">
                    <span className="font-nunito text-sm font-medium text-navy">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
