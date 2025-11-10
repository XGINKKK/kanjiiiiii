export const RealResultsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-soft-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            Famílias reais usando o método Kanji Kids
          </h2>
          <p className="font-nunito text-lg md:text-xl text-muted-foreground">
            Veja momentos reais de aprendizado e transformação
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Foto 1: Criança fazendo atividade */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img
              src="/imagens-melhorias/background-porque-precisa-kit.jpg"
              alt="Criança concentrada fazendo atividade de grafismo"
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-nunito text-sm md:text-base font-semibold text-center">
                💡 Foco e concentração natural
              </p>
            </div>
          </div>

          {/* Foto 2: Mãe e filho */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img
              src="/imagens-melhorias/hero-mae-e-filho-juntos.jpg"
              alt="Mãe e filho aprendendo juntos com o método Kanji Kids"
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-nunito text-sm md:text-base font-semibold text-center">
                ❤️ Momentos de conexão e aprendizado
              </p>
            </div>
          </div>

          {/* Foto 3: Criança feliz lendo */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img
              src="/imagens-melhorias/depois-crianca-feliz-lendo.png"
              alt="Criança feliz e confiante lendo"
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-nunito text-sm md:text-base font-semibold text-center">
                🌟 Resultado: confiança e alegria
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="font-inter text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            ⭐ Isso é o que espera seu filho em 8 semanas com apenas 10 minutos por dia
          </p>
        </div>
      </div>
    </section>
  );
};
