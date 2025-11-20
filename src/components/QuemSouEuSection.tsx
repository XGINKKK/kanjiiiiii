export const QuemSouEuSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-coral/10 via-background to-mint/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="order-1 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/larissa-roepke.jpg"
                alt="Larissa Roepke - Pedagoga e criadora do Kit Kanji Kids"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="order-2 md:order-2 space-y-6">
            <div>
              <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-coral mb-4">
                Quem Sou Eu?
              </h2>
              <div className="h-1 w-20 bg-coral rounded-full mb-6"></div>
            </div>

            <div className="space-y-4 font-nunito text-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-bold text-coral">
                Olá! Eu sou a Larissa Roepke 👋
              </p>

              <p>
                Sou <span className="font-bold text-coral">pedagoga, mãe de 2 filhos</span>, carioca, casada e tenho 33 anos.
              </p>

              <p>
                Sempre fui <span className="font-bold">muito focada no meu trabalho</span>, mas foi ao me tornar mãe que descobri minha verdadeira paixão: <span className="font-bold text-coral">pedagogia e educação infantil</span>.
              </p>

              <p>
                Foi nessa jornada que <span className="font-bold text-coral">descobri o método do Kanji Kids</span> — uma forma de ensinar as crianças a lerem e escreverem de maneira natural, leve e respeitando o tempo de cada uma.
              </p>

              <p className="text-lg font-bold text-gray-800 bg-coral/10 p-4 rounded-lg border-l-4 border-coral">
                Hoje, minha missão é compartilhar esse método com famílias que, assim como eu, querem ver seus filhos se desenvolverem com confiança, alegria e sem pressão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
