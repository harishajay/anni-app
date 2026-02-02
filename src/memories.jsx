import React from "react";
import { useNavigate } from "react-router-dom";

function Memories() {

    const navigate = useNavigate();
    const goToHome = () => {
    navigate("/"); // redirect to home page
  };
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

            /* STAR FIELD */
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

            /* MOON HERO */
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

            /* WAVES */
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

            /* MASONRY GRID */
            .masonry-grid {
              column-count: 1;
              column-gap: 2rem;
            }

            @media (min-width: 768px) {
              .masonry-grid { column-count: 2; }
            }

            @media (min-width: 1024px) {
              .masonry-grid { column-count: 3; }
            }

            .masonry-item {
              break-inside: avoid;
              margin-bottom: 2rem;
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
        <div className="star star-glow" style={{ top: '5%', left: '12%', width: 2, height: 2, background: '#e0f2fe' }} />
        <div className="star star-glow" style={{ top: '22%', left: '70%', width: 2, height: 2, background: '#e0f2fe' }} />
        <div className="star star-glow" style={{ top: '12%', left: '55%', width: 3, height: 3, background: '#e0f2fe' }} />
        {/* Add all other stars here */}
        <div className="star star-glow" style={{ top: '5%', left: '12%', width: '2px', height: '2px', background: '#e0f2fe' }} />
        <div className="star star-glow" style={{ top: '22%', left: '70%', width: '2px', height: '2px', background: '#e0f2fe' }} />
        <div className="star star-glow" style={{ top: '12%', left: '55%', width: '3px', height: '3px', background: '#e0f2fe' }} />
        <div className="star star-glow" style={{ top: '65%', left: '10%', width: '2px', height: '2px', background: '#e0f2fe' }} />
        <div className="star star-glow" style={{ top: '45%', left: '60%', width: '2px', height: '2px', background: '#e0f2fe' }} />
        <div className="star star-glow" style={{ top: '10%', left: '98%', width: '2px', height: '2px', background: '#e0f2fe' }} />
        <div className="star star-glow" style={{ top: '8%', left: '85%', width: '2px', height: '2px', background: '#f5f3ff' }} />
        <div className="star star-glow" style={{ top: '30%', left: '45%', width: '3px', height: '3px', background: '#f5f3ff' }} />
        <div className="star star-glow" style={{ top: '55%', left: '88%', width: '2px', height: '2px', background: '#f5f3ff' }} />
        <div className="star star-glow" style={{ top: '18%', left: '92%', width: '2px', height: '2px', background: '#f5f3ff' }} />
        <div className="star star-glow" style={{ top: '15%', left: '25%', width: '2px', height: '2px', background: '#ffffff' }} />
        <div className="star star-glow" style={{ top: '40%', left: '15%', width: '1px', height: '1px', background: '#ffffff' }} />
      </div>

      {/* HERO */}
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
          <div  onClick={goToHome} className="flex items-center gap-2 cursor-pointer">
            <span className="material-symbols-outlined text-red-600/60 text-sm">favorite</span>
            < h2 className="text-white font-serif text-xl ml-2 opacity-90">Forever &amp; Always</h2>
          </div>
          <a className="text-starlight text-xs font-bold tracking-widest uppercase opacity-70 hover:opacity-100">
            Our Story
          </a>
        </nav>

        <div className="floating-message text-2xl top-[25%] left-[12%]">"You are my calm in every storm"</div>
        <div className="floating-message text-2xl top-[35%] right-[12%]">"Under the same moon, always"</div>

        <div className="relative z-20 text-center mt-[45vh]">
          <h1 className="text-white text-6xl md:text-8xl font-serif italic mb-4 drop-shadow-2xl">
            Moonlight Ocean
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-40" />
            <div className="flex gap-1">
              <span className="material-symbols-outlined text-[10px] text-red-600/50">favorite</span>
            </div>
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-40" />
          </div>
          <p className="text-starlight font-body italic text-lg max-w-xl mx-auto px-4 opacity-80">
            Where every reflection of light tells a story of the quiet love we share beneath the midnight sky.
          </p>
        </div>
      </header>

      {/* GALLERY */}
   <main className="relative z-30 max-w-7xl mx-auto px-8 -mt-24 pb-32">
  <div className="masonry-grid">
    {/* Item 1 */}
    <div className="masonry-item">
      <div className="card-dark p-5 rounded-xl shadow-2xl hover:-translate-y-2 transition-transform duration-500">
        <div className="overflow-hidden rounded-lg mb-6 aspect-[4/5] border border-white/5">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuChtpZCrQFsQihCWQtsK8BbELhkyUMCYpm4p5MleKF5UrVHZPys7msNsALwYeHr2z87Al5mXzzc8ZTumfeXEWjOZ_aNKiLk5VSMLQtlHdYgamvgKgWvaO6fs3GKmJCssSnHVdHXGFEvm1aY3nZaKSbu1l6SAMQ-1if--ytpNcFlsNutYaGdYUEhMZm4d9QPvhhsNeytlEcQtblR_nqqO_qyy0Mp8go8McWkx_D19g_ebKHErBZo3rRSS_Uafa6bzM5tbo4XfWh5VmKz"
            alt="Reflection"
            className="w-full h-full object-cover grayscale-[30%] brightness-[80%] hover:brightness-100 transition-all"
          />
        </div>
        <h3 className="text-white text-2xl font-serif italic text-center">Midnight Gaze</h3>
      </div>
    </div>

    {/* Item 2 */}
    <div className="masonry-item">
      <div className="card-dark p-5 rounded-xl shadow-2xl hover:-translate-y-2 transition-transform duration-500">
        <div className="overflow-hidden rounded-lg mb-6 aspect-[4/5] border border-white/5">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuChtpZCrQFsQihCWQtsK8BbELhkyUMCYpm4p5MleKF5UrVHZPys7msNsALwYeHr2z87Al5mXzzc8ZTumfeXEWjOZ_aNKiLk5VSMLQtlHdYgamvgKgWvaO6fs3GKmJCssSnHVdHXGFEvm1aY3nZaKSbu1l6SAMQ-1if--ytpNcFlsNutYaGdYUEhMZm4d9QPvhhsNeytlEcQtblR_nqqO_qyy0Mp8go8McWkx_D19g_ebKHErBZo3rRSS_Uafa6bzM5tbo4XfWh5VmKz"
            alt="Reflection"
            className="w-full h-full object-cover grayscale-[30%] brightness-[80%] hover:brightness-100 transition-all"
          />
        </div>
        <h3 className="text-white text-2xl font-serif italic text-center">Midnight Gaze</h3>
      </div>
    </div>

    {/* Item 3 */}
    <div className="masonry-item">
      <div className="card-dark p-5 rounded-xl shadow-2xl hover:-translate-y-2 transition-transform duration-500">
        <div className="overflow-hidden rounded-lg mb-6 aspect-[4/5] border border-white/5">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuChtpZCrQFsQihCWQtsK8BbELhkyUMCYpm4p5MleKF5UrVHZPys7msNsALwYeHr2z87Al5mXzzc8ZTumfeXEWjOZ_aNKiLk5VSMLQtlHdYgamvgKgWvaO6fs3GKmJCssSnHVdHXGFEvm1aY3nZaKSbu1l6SAMQ-1if--ytpNcFlsNutYaGdYUEhMZm4d9QPvhhsNeytlEcQtblR_nqqO_qyy0Mp8go8McWkx_D19g_ebKHErBZo3rRSS_Uafa6bzM5tbo4XfWh5VmKz"
            alt="Reflection"
            className="w-full h-full object-cover grayscale-[30%] brightness-[80%] hover:brightness-100 transition-all"
          />
        </div>
        <h3 className="text-white text-2xl font-serif italic text-center">Midnight Gaze</h3>
      </div>
    </div>
  </div>
</main>


      {/* FOOTER */}
      <footer className="bg-midnight-black relative z-40 py-20 text-center border-t border-white/5">
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="h-[1px] w-24 bg-gold-accent/10" />
          <div className="flex gap-2">
            <span className="material-symbols-outlined text-red-600/30">favorite</span>
          </div>
          <div className="h-[1px] w-24 bg-gold-accent/10" />
        </div>
        <p className="text-starlight font-serif italic text-xl mb-4 opacity-80">
          "Forever like the ocean, always returning to you."
        </p>
        <p className="text-slate-500 text-[10px] font-bold tracking-[0.6em] uppercase">
          Midnight Moonlight Gallery • Established MMXXIV
        </p>
      </footer>
    </>
  );
}

export default Memories;
