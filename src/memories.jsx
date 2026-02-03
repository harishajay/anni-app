import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ourFam from './assets/images/ourfam.jpg';
import temIm from './assets/images/tempimg.jpg';
import handImg from './assets/images/holdimg.jpg';
import childImg from './assets/images/childhoodimg.png';
import vasImg from './assets/images/imgVas.jpg';
import funImg from './assets/images/funnyImg.png';

function Memories() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/'); 
  };

  // --- FREQUENT SPARKLE LOGIC ---
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // interval set to 200ms for high frequency
    const interval = setInterval(() => {
      const id = Date.now() + Math.random();
      const newSparkle = {
        id,
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        // Increased size: now between 30px and 60px
        size: Math.random() * 30 + 30 + 'px',
      };

      setSparkles((prev) => [...prev, newSparkle]);

      // Remove after 2 seconds to keep the screen from getting too cluttered
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id));
      }, 2000);
    }, 200); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body {
              background-color: #020617;
              color: #cbd5e1;
              position: relative;
              overflow-x: hidden;
              font-family: 'Plus Jakarta Sans', sans-serif;
            }

            /* HIGHLIGHTED EMOJI STYLE */
            .sparkle-emoji {
              position: fixed;
              pointer-events: none;
              z-index: 2; /* Sits just above the star field */
              animation: sparkleFade 2s ease-in-out forwards;
              user-select: none;
              /* Text shadow creates the "highlighted" glow effect */
              text-shadow: 0 0 15px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 255, 255, 0.5);
              filter: drop-shadow(0 0 5px gold);
            }

            @keyframes sparkleFade {
              0% { opacity: 0; transform: scale(0.3) rotate(-15deg); }
              30% { opacity: 1; transform: scale(1.1) rotate(0deg); }
              100% { opacity: 0; transform: scale(0.5) rotate(15deg); }
            }

            .star-field {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              pointer-events: none;
              z-index: 0;
              background: radial-gradient(circle at 50% 15%, #0f172a 0%, #020617 75%);
            }

            .star {
              position: absolute;
              border-radius: 50%;
              filter: blur(0.3px);
            }

            .star-glow {
              box-shadow: 0 0 3px 1px currentColor;
            }

            .moon-hero {
              background: transparent;
              min-height: 90vh;
              position: relative;
              overflow: hidden;
              z-index: 10;
            }

            .full-moon {
              width: 160px;
              height: 160px;
              background: radial-gradient(circle at 35% 35%, #ffffff 0%, #f8fafc 40%, #f1f5f9 100%);
              border-radius: 50%;
              position: absolute;
              top: 12%;
              left: 50%;
              transform: translateX(-50%);
              z-index: 20;
              box-shadow:
                0 0 50px 10px rgba(255, 255, 255, 0.4),
                0 0 100px 30px rgba(255, 255, 255, 0.1);
            }

            .moon-aura-glow {
              position: absolute;
              top: 12%;
              left: 50%;
              transform: translate(-50%, -5%) scale(1.5);
              width: 300px;
              height: 300px;
              background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
              border-radius: 50%;
              z-index: 15;
              pointer-events: none;
            }

            .ocean-surface {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 40%;
              background: linear-gradient(to bottom, #0f172a 0%, #020617 100%);
              z-index: 5;
            }

            .moon-bridge {
              position: absolute;
              top: 60%;
              left: 50%;
              transform: translateX(-50%);
              width: 240px;
              height: 40%;
              z-index: 10;
              background: radial-gradient(ellipse at top, rgba(255, 255, 255, 0.3) 0%, transparent 80%);
              filter: blur(15px);
            }

            .wave-path {
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              width: 350px;
              height: 40%;
              z-index: 12;
              pointer-events: none;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
            }

            .wave-highlight {
              height: 1px;
              background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%);
              box-shadow: 0 0 8px 1px rgba(255,255,255,0.3);
              border-radius: 50%;
              opacity: 0.8;
            }

            .floating-message {
              font-family: 'Dancing Script', cursive;
              position: absolute;
              color: #94a3b8;
              opacity: 0.5;
              pointer-events: none;
              text-shadow: 0 0 10px rgba(255,255,255,0.1);
              z-index: 15;
            }

            .card-dark {
              background: rgba(15, 23, 42, 0.7);
              backdrop-filter: blur(12px);
              border: 1px solid rgba(255, 255, 255, 0.05);
              border-radius: 1.5rem;
            }

            footer {
              background-color: #020617;
              color: #cbd5e1;
            }
          `,
        }}
      />

      {/* STAR FIELD */}
      <div className="star-field fixed inset-0 pointer-events-none z-0">
        {[
          { t: '5%', l: '12%', w: 2 },
          { t: '22%', l: '70%', w: 2 },
          { t: '12%', l: '55%', w: 3 },
          { t: '65%', l: '10%', w: 2 },
          { t: '45%', l: '60%', w: 2 },
          { t: '10%', l: '98%', w: 2 },
          { t: '8%', l: '85%', w: 2 },
          { t: '30%', l: '45%', w: 3 },
          { t: '55%', l: '88%', w: 2 },
          { t: '18%', l: '92%', w: 2 },
          { t: '15%', l: '25%', w: 2 },
          { t: '40%', l: '15%', w: 1 },
        ].map((star, i) => (
          <div
            key={i}
            className="star star-glow"
            style={{
              top: star.t,
              left: star.l,
              width: star.w,
              height: star.w,
              background: '#e0f2fe',
            }}
          />
        ))}
      </div>

      {/* ✨ FREQUENT HIGHLIGHTED SPARKLES ✨ */}
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="sparkle-emoji"
          style={{ left: s.left, top: s.top, fontSize: s.size }}
        >
          ✨
        </span>
      ))}

      <header className="moon-hero flex flex-col items-center relative min-h-[90vh] z-10">
        <div className="full-moon" />
        <div className="moon-aura-glow" />
        <div className="ocean-surface" />
        <div className="moon-bridge" />

        <div className="wave-path">
          <div className="wave-highlight w-12 -ml-5" />
          <div className="wave-highlight w-24 ml-2" />
          <div className="wave-highlight w-32 -ml-4" />
          <div className="wave-highlight w-48 ml-1" />
          <div className="wave-highlight w-40 -ml-8" />
          <div className="wave-highlight w-56 ml-4" />
          <div className="wave-highlight w-64 -ml-2" />
          <div className="wave-highlight w-72 ml-3" />
        </div>

        <nav className="absolute top-0 w-full flex justify-between px-12 py-8 z-50">
          <div onClick={goToHome} className="flex items-center gap-2 cursor-pointer">
            <span className="material-symbols-outlined text-red-600/60 text-sm">favorite</span>
            <h2 className="text-white font-serif text-xl ml-2 opacity-90">Forever & Always</h2>
          </div>
          <a className="text-starlight text-xs font-bold tracking-widest uppercase opacity-70 hover:opacity-100">Our Story</a>
        </nav>

        <div className="floating-message text-2xl top-[35%] right-[12%]">"I really controlled myself when the light fell on you</div>

        <div className="relative z-20 text-center mt-[45vh]">
          <h1 className="text-white text-6xl md:text-8xl font-serif italic mb-4 drop-shadow-2xl">Moonlight Ocean</h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-40" />
            <span className="material-symbols-outlined text-[10px] text-red-600/50">favorite</span>
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-40" />
          </div>
          <p className="text-starlight font-body italic text-lg max-w-xl mx-auto px-4 opacity-80">
            Where every reflection of light tells a story of the quiet love we share beneath the midnight sky.
          </p>
        </div>
      </header>

      <main className="relative z-30 max-w-7xl mx-auto px-8 -mt-24 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { img: ourFam, title: "Our Family" },
            { img: temIm, title: "Our Favorite" },
            { img: handImg, title: "Hand in Hand" },
            { img: childImg, title: "Cutest Memory" },
            { img: vasImg, title: "Vasantha bhavan", extra: "😂" },
            { img: funImg, title: "sorry 😂" },
          ].map((item, idx) => (
            <div key={idx} className="card-dark p-5 rounded-xl shadow-2xl hover:-translate-y-2 transition-transform duration-500">
              <div className="overflow-hidden rounded-lg mb-6 aspect-[4/5] border border-white/5">
                <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
              </div>
              <h3 className="text-white text-2xl font-serif italic text-center flex items-center justify-center gap-2">
                {item.title} {item.extra && <span className="inline-block hover:scale-125 transition-transform">{item.extra}</span>}
              </h3>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-midnight-black relative z-40 py-20 text-center border-t border-white/5">
        <p className="text-starlight font-serif italic text-xl mb-4 opacity-80">"Forever like the ocean, always returning to you."</p>
        <p className="text-slate-500 text-[10px] font-bold tracking-[0.6em] uppercase">Midnight Moonlight Gallery • Established 03/02/2024</p>
      </footer>
    </>
  );
}

export default Memories;