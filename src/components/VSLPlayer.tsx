import { useEffect } from "react";

export const VSLPlayer = () => {
  useEffect(() => {
    const video = document.getElementById('paradisePlayer_1762204154729') as HTMLVideoElement;
    const muteOverlay = document.getElementById('paradisePlayer_1762204154729MuteOverlay');
    const fakeProgressBar = document.getElementById('paradisePlayer_1762204154729FakeProgressBar');

    if (!video) {
      console.error('Paradise Player: Video element not found.');
      return;
    }

    // Configuração Inicial
    video.playbackRate = 1;

    // Lógica de Autoplay Inteligente
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay was prevented. User interaction needed.
      });
    }

    if (muteOverlay) {
      const unmuteHandler = () => {
        video.muted = false;
        video.currentTime = 0;
        video.play();
        muteOverlay.style.opacity = '0';
        setTimeout(() => {
          muteOverlay.style.display = 'none';
        }, 300);
      };

      muteOverlay.addEventListener('click', unmuteHandler, { once: true });
      muteOverlay.addEventListener('touchend', unmuteHandler, { once: true });
    }

    // Lógica de Progresso Inteligente
    const handleTimeUpdate = () => {
      if (!video.duration || !fakeProgressBar) return;

      const realProgress = video.currentTime / video.duration;
      const phase1Threshold = 15 / 100;
      const targetProgress = 50 / 100;

      let fakeProgressValue;
      if (realProgress <= phase1Threshold) {
        fakeProgressValue = (realProgress / phase1Threshold) * targetProgress;
      } else {
        const remainingRealProgress = (realProgress - phase1Threshold) / (1 - phase1Threshold);
        const remainingFakeProgress = (1 - targetProgress) * remainingRealProgress;
        fakeProgressValue = targetProgress + remainingFakeProgress;
      }

      fakeProgressBar.style.width = (Math.min(fakeProgressValue, 1) * 100) + '%';
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    // Play/Pause on video click
    const handleVideoClick = () => {
      if (video.paused) video.play();
      else video.pause();
    };
    video.addEventListener('click', handleVideoClick);

    // Cleanup
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('click', handleVideoClick);
    };
  }, []);

  return (
    <>
      <div
        id="paradisePlayer_1762204154729Container"
        className="paradise-player-container"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '800px',
          margin: '20px auto'
        }}
      >
        <div
          id="paradisePlayer_1762204154729Wrapper"
          style={{
            position: 'relative',
            width: '100%',
            paddingBottom: '56.25%',
            background: '#000',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}
        >
          <video
            id="paradisePlayer_1762204154729"
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
            preload="auto"
            poster="https://t3.ftcdn.net/jpg/05/25/58/46/360_F_525584616_lKJ9605fRFWk8wxJRLZfU9lonvJzV3fa.jpg"
            onContextMenu={(e) => e.preventDefault()}
          >
            <source src="/videos/vsl-kanji-kids.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>

          <div
            id="paradisePlayer_1762204154729MuteOverlay"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#00000099',
              cursor: 'pointer',
              zIndex: 20,
              backdropFilter: 'blur(2px)'
            }}
          >
            <div
              id="paradisePlayer_1762204154729MuteButton"
              className="paradise-mute-bounce"
              style={{
                background: '#f07167',
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
            id="paradisePlayer_1762204154729FakeProgressContainer"
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
              id="paradisePlayer_1762204154729FakeProgressBar"
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #f07167, #21bfeb)',
                borderRadius: '2px',
                width: '0%',
                boxShadow: '0 0 8px #f0716780'
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        #paradisePlayer_1762204154729::-webkit-media-controls,
        #paradisePlayer_1762204154729::-webkit-media-controls-enclosure {
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
          0%, 100% { box-shadow: 0 0 10px #8b5cf650; }
          50% { box-shadow: 0 0 20px #8b5cf680, 0 0 30px #8b5cf660; }
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
          0%, 100% { box-shadow: 0 0 calc(10px * var(--animation-intensity)) #f0716750; }
          50% { box-shadow: 0 0 calc(20px * var(--animation-intensity)) #f0716780, 0 0 calc(30px * var(--animation-intensity)) #f0716760; }
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

        .paradise-mute-bounce {
          animation: paradise-mute-bounce 2s ease-in-out infinite;
          --animation-intensity: 1;
        }
      `}</style>
    </>
  );
};
