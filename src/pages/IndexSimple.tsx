import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { memo, useEffect } from "react";
import { VideoTestimonialsSection } from "@/components/VideoTestimonialsSection";
import { BonusSection } from "@/components/BonusSection";
import { WhatIsIncludedSection } from "@/components/WhatIsIncludedSection";
import { PricingSection } from "@/components/PricingSection";
import { QuemSouEuSection } from "@/components/QuemSouEuSection";
import { WhatsAppCTASection } from "@/components/WhatsAppCTASection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FakeSalesNotifications } from "@/components/FakeSalesNotifications";
import { UrgencyBanner } from "@/components/UrgencyBanner";

const IndexSimple = memo(() => {
  const scrollToCheckout = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  // Carregar script do Paradise Player
  useEffect(() => {
    const video = document.getElementById('paradisePlayer_1762653567282') as HTMLVideoElement;
    const container = document.getElementById('paradisePlayer_1762653567282Container');
    const playerWrapper = document.getElementById('paradisePlayer_1762653567282Wrapper');
    const muteOverlay = document.getElementById('paradisePlayer_1762653567282MuteOverlay');
    const ctaButton = document.getElementById('paradisePlayer_1762653567282CTA');
    const ctaLink = document.getElementById('paradisePlayer_1762653567282CTALink') as HTMLAnchorElement;
    const fakeProgressBar = document.getElementById('paradisePlayer_1762653567282FakeProgressBar') as HTMLElement;

    if (!video) {
      console.error('Paradise Player: Video element #paradisePlayer_1762653567282 not found.');
      return;
    }

    console.log('Paradise Player: Video element found, initializing...');
    console.log('Paradise Player: Video src:', video.querySelector('source')?.src || 'NO SOURCE');
    console.log('Paradise Player: Video currentSrc:', video.currentSrc || 'NO CURRENT SRC');

    // Adicionar listener de erro no source
    const source = video.querySelector('source');
    if (source) {
      source.addEventListener('error', (e) => {
        console.error('Paradise Player: Source error -', e);
        console.error('Paradise Player: Failed to load:', source.src);
      });
    }

    // Adicionar listener de erro no vídeo
    video.addEventListener('error', (e) => {
      console.error('Paradise Player: Video error -', e);
      if (video.error) {
        console.error('Paradise Player: Error code:', video.error.code);
        console.error('Paradise Player: Error message:', video.error.message);
      }
    });

    // --- Play/Pause on video click ---
    video.addEventListener('click', () => {
      if (video.paused) video.play();
      else video.pause();
    });

    // --- Configuração Inicial ---
    video.playbackRate = 1.2;

    // --- Lógica de Autoplay Inteligente ---
    video.muted = true;

    console.log('Paradise Player: Video readyState:', video.readyState);
    console.log('Paradise Player: Video networkState:', video.networkState);

    // Função para tentar dar play
    let autoplayAttempted = false;
    const tryAutoplay = () => {
      if (autoplayAttempted) {
        console.log('Paradise Player: Autoplay already attempted, skipping');
        return;
      }
      autoplayAttempted = true;

      console.log('Paradise Player: Attempting autoplay... readyState:', video.readyState);
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log('Paradise Player: ✓ Autoplay successful!');
        }).catch(error => {
          console.warn('Paradise Player: ✗ Autoplay was prevented:', error.name, error.message);
        });
      }
    };

    // Múltiplas estratégias para garantir o play
    // 1. Tentar imediatamente se já estiver pronto
    if (video.readyState >= 2) {
      console.log('Paradise Player: Video already has enough data (readyState >= 2)');
      setTimeout(tryAutoplay, 100);
    }

    // 2. Aguardar canplay - mais confiável que loadeddata
    video.addEventListener('canplay', () => {
      console.log('Paradise Player: canplay event fired');
      tryAutoplay();
    }, { once: true });

    // 3. Fallback com timeout
    setTimeout(() => {
      if (!autoplayAttempted) {
        console.log('Paradise Player: Timeout fallback - forcing autoplay attempt');
        tryAutoplay();
      }
    }, 1000);

    if (muteOverlay) {
      const unmuteHandler = () => {
        video.muted = false;
        video.currentTime = 0;
        video.play();
        muteOverlay.style.opacity = '0';
        setTimeout(() => { muteOverlay.style.display = 'none'; }, 300);
        if ((window as any).paradiseTracker && (window as any).paradiseTracker.send) {
          (window as any).paradiseTracker.send('unmute');
          (window as any).paradiseTracker.send('play');
        }
      };
      muteOverlay.addEventListener('click', unmuteHandler, { once: true });
      muteOverlay.addEventListener('touchend', unmuteHandler, { once: true });
    }

    // Setup CTA to scroll to pricing section
    if (ctaLink) {
      ctaLink.href = '#pricing';
      ctaLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
      });
    }

    video.addEventListener('timeupdate', function() {
      if (!video.duration || !fakeProgressBar) return;
      let fakeProgressValue;

      const realProgress = video.currentTime / video.duration;
      const phase1Threshold = 15 / 100;
      const targetProgress = 50 / 100;
      if (realProgress <= phase1Threshold) {
        fakeProgressValue = (realProgress / phase1Threshold) * targetProgress;
      } else {
        const remainingRealProgress = (realProgress - phase1Threshold) / (1 - phase1Threshold);
        const remainingFakeProgress = (1 - targetProgress) * remainingRealProgress;
        fakeProgressValue = targetProgress + remainingFakeProgress;
      }

      fakeProgressBar.style.width = (Math.min(fakeProgressValue, 1) * 100) + '%';

      // CTA aparece após 20 segundos
      if (ctaButton && video.currentTime >= 20 && ctaButton.style.display === 'none') {
        ctaButton.style.display = 'block';
        ctaButton.style.animation = 'paradise-fadeInUp 0.5s ease-out forwards';
      }
    });

    const storageKey = 'paradise_time_paradisePlayer_1762653567282';
    video.addEventListener('loadedmetadata', () => {
      const savedTime = localStorage.getItem(storageKey);
      if (savedTime) video.currentTime = parseFloat(savedTime);
    });
    video.addEventListener('timeupdate', () => {
      if (video.currentTime > 1 && video.currentTime < video.duration - 5) {
        localStorage.setItem(storageKey, video.currentTime.toString());
      }
    });
    video.addEventListener('ended', () => { localStorage.removeItem(storageKey); });
  }, []);

  return (
    <div className="min-h-screen font-inter bg-gradient-to-b from-soft-blue/20 via-white to-mint/10">
      {/* Urgency Banner */}
      <UrgencyBanner />

      {/* Paradise Player Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        #paradisePlayer_1762653567282::-webkit-media-controls,
        #paradisePlayer_1762653567282::-webkit-media-controls-enclosure {
          display: none !important;
        }

        @keyframes paradise-fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes paradise-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes paradise-glow {
          0%, 100% { box-shadow: 0 0 10px #F0716750; }
          50% { box-shadow: 0 0 20px #F0716780, 0 0 30px #F0716760; }
        }
        @keyframes paradise-shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-3px); }
          75% { transform: translateX(3px); }
        }
        @keyframes paradise-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes paradise-mute-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(calc(-10px * var(--animation-intensity))); }
        }
        @keyframes paradise-mute-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(calc(1 + 0.05 * var(--animation-intensity))); }
        }
        @keyframes paradise-mute-shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(calc(-5px * var(--animation-intensity))); }
          75% { transform: translateX(calc(5px * var(--animation-intensity))); }
        }
        @keyframes paradise-mute-glow {
          0%, 100% { box-shadow: 0 0 calc(10px * var(--animation-intensity)) #F0716750; }
          50% { box-shadow: 0 0 calc(20px * var(--animation-intensity)) #F0716780, 0 0 calc(30px * var(--animation-intensity)) #F0716760; }
        }
        @keyframes paradise-mute-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(calc(1 + 0.1 * var(--animation-intensity))); }
        }
        @keyframes paradise-mute-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .paradise-player-container * {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}} />

      {/* HERO SECTION - Simples e direto */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Logo discreta do produto com animação pulse suave */}
          <div className="flex justify-center mb-4">
            <img
              src="/logo-produto.png"
              alt="Kit Kanji Kids"
              className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-lg animate-pulse"
              style={{ animation: 'pulse 3s ease-in-out infinite' }}
            />
          </div>

          {/* Logo/Badge */}
          <div className="inline-block bg-white border border-coral/20 px-6 py-2 rounded-full shadow-sm">
            <p className="font-nunito font-semibold text-coral text-sm md:text-base">Método Japonês Adaptado</p>
          </div>

          {/* Headline Principal - COPY ÚNICA */}
          <h1 className="font-fredoka text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-navy max-w-4xl mx-auto">
            E se aprender a ler e escrever fosse a parte favorita do dia do seu filho?
          </h1>

          {/* Subheadline */}
          <p className="font-nunito text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Descubra como crianças de 2 a 12 anos estão desenvolvendo amor pela leitura
            em apenas 10 minutos diários - sem pressão, sem tédio, só descoberta.
          </p>

          {/* Benefícios rápidos - mais clean */}
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto pt-4">
            {[
              "Resultados em semanas",
              "Funciona até com TDAH",
              "Seu para sempre",
            ].map((benefit, index) => (
              <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <p className="font-nunito text-sm text-navy font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VSL SECTION - Paradise Player 9:16 */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-soft-blue/10">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-fredoka text-3xl md:text-4xl font-bold text-navy leading-tight">
            Veja uma mãe mostrando como funciona (e por que as crianças pedem para fazer)
          </h2>
          <p className="font-nunito text-lg md:text-xl text-foreground/60 max-w-xl mx-auto">
            Em 3 minutos você vai entender por que mais de 15 mil famílias escolheram este caminho
          </p>

          {/* Paradise Player 9:16 */}
          <div className="max-w-sm mx-auto">
            <div
              id="paradisePlayer_1762653567282Container"
              className="paradise-player-container"
              style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '20px auto' }}
            >
              <div
                id="paradisePlayer_1762653567282Wrapper"
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '177.78%',
                  background: '#000',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}
              >
                <video
                  id="paradisePlayer_1762653567282"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    cursor: 'pointer'
                  }}
                  playsInline
                  muted
                  preload="metadata"
                  onContextMenu={(e) => e.preventDefault()}
                  onError={(e) => console.error('Video error:', e)}
                  onLoadStart={() => console.log('Video: loadstart event')}
                  onLoadedMetadata={() => console.log('Video: loadedmetadata event')}
                  onLoadedData={() => console.log('Video: loadeddata event')}
                  onCanPlay={() => console.log('Video: canplay event')}
                  onCanPlayThrough={() => console.log('Video: canplaythrough event')}
                >
                  <source src="/vsl-nova.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>

                <div
                  id="paradisePlayer_1762653567282MuteOverlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#00000080',
                    cursor: 'pointer',
                    zIndex: 20,
                    backdropFilter: 'blur(2px)'
                  }}
                >
                  <div
                    id="paradisePlayer_1762653567282MuteButton"
                    className="paradise-mute-bounce"
                    style={{
                      background: '#F07167',
                      padding: 'clamp(1.2rem, 5vw, 2rem) clamp(1.5rem, 7vw, 3rem)',
                      borderRadius: '12px',
                      textAlign: 'center',
                      color: 'white',
                      transition: 'transform 0.3s ease',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                      maxWidth: '90vw',
                      boxSizing: 'border-box'
                    }}
                  >
                    <div style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', fontWeight: 700, marginBottom: '0.5rem' }}>
                      Seu vídeo já começou!
                    </div>
                    <div style={{ marginBottom: '0.6rem' }}>
                      <img
                        src="https://i.postimg.cc/2j9d2jbv/R.png"
                        alt="Unmute"
                        style={{
                          width: 'clamp(2.5rem, 8vw, 3.5rem)',
                          height: 'clamp(2.5rem, 8vw, 3.5rem)',
                          filter: 'brightness(0) invert(1)',
                          display: 'inline-block'
                        }}
                      />
                    </div>
                    <div style={{ fontSize: 'clamp(0.8rem, 2.2vw, 1rem)', fontWeight: 500, opacity: 0.95 }}>
                      Clique para ativar o som
                    </div>
                  </div>
                </div>

                <div
                  id="paradisePlayer_1762653567282FakeProgressContainer"
                  style={{
                    position: 'absolute',
                    bottom: '5px',
                    left: '10px',
                    right: '10px',
                    height: '4px',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '2px',
                    zIndex: 20,
                    pointerEvents: 'none',
                    transition: 'bottom 0.3s ease'
                  }}
                >
                  <div
                    id="paradisePlayer_1762653567282FakeProgressBar"
                    style={{
                      height: '100%',
                      background: 'linear-gradient(90deg, #F07167, #152D4A)',
                      borderRadius: '2px',
                      width: '0%',
                      boxShadow: '0 0 8px #F0716780'
                    }}
                  />
                </div>
              </div>

              {/* CTA Button - Aparece imediatamente */}
              <div
                id="paradisePlayer_1762653567282CTA"
                style={{ display: 'none', textAlign: 'center', marginTop: '20px' }}
              >
                <a
                  href="#"
                  id="paradisePlayer_1762653567282CTALink"
                  target="_blank"
                  style={{
                    background: '#F07167',
                    color: 'white',
                    padding: '15px 30px',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                    animation: 'paradise-pulse 2s infinite',
                    display: 'inline-block'
                  }}
                >
                  QUERO MEU FILHO LENDO
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORQUE ESCOLHER - Seção com imagem de background estratégica */}
      <section
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "url('/imagens-melhorias/background-porque-precisa-kit.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(255, 255, 255, 0.96)"
        }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            PORQUE ESCOLHER O<br />
            <span className="text-coral">KIT KANJI KIDS?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "🎯", text: "Estimule o desenvolvimento integral de forma envolvente" },
              { icon: "🧠", text: "Enriqueça o aprendizado com atividades que despertam curiosidade" },
              { icon: "🎨", text: "Divirta-se enquanto aprende com exercícios cativantes" },
              { icon: "💰", text: "Aproveite o melhor do ensino, com preço acessível" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border-2 border-mint/20">
                <div className="text-4xl flex-shrink-0">{item.icon}</div>
                <p className="font-nunito text-base md:text-lg text-navy text-left">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-coral/10 to-mint/10 rounded-2xl p-6 md:p-8 border-2 border-coral/30">
            <p className="font-fredoka text-xl md:text-2xl font-bold text-coral mb-3">PARA QUALQUER CRIANÇA!</p>
            <p className="font-nunito text-lg md:text-xl text-navy">
              VOCÊ SABIA QUE A DIVERSÃO PODE SER A CHAVE<br className="hidden md:block" />
              PARA O APRENDIZADO SIGNIFICATIVO?
            </p>
          </div>
        </div>
      </section>

      {/* CARROSSEL DE ATIVIDADES - Componente completo importado */}
      <WhatIsIncludedSection />

      {/* DEPOIMENTOS EM VÍDEO - Componente completo importado */}
      <VideoTestimonialsSection />

      {/* BÔNUS - Componente completo com mockups importado */}
      <BonusSection />

      {/* PRICING SECTION - Componente original importado */}
      <PricingSection />

      {/* QUEM SOU EU - Apresentação da Larissa Roepke */}
      <QuemSouEuSection />

      {/* WHATSAPP CTA - Componente de dúvidas */}
      <WhatsAppCTASection />

      {/* GARANTIA - Componente de garantia incondicional */}
      <GuaranteeSection />

      {/* FAQ - Componente importado */}
      <FAQSection />

      {/* FOOTER - Componente importado */}
      <Footer />

      {/* WhatsApp Button - Componente importado */}
      <WhatsAppButton />

      {/* Fake Sales Notifications */}
      <FakeSalesNotifications />
    </div>
  );
});

IndexSimple.displayName = "IndexSimple";

export default IndexSimple;
