import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Celebration() {
  const navigate = useNavigate();
  const [elements, setElements] = useState([]);
  const [bgFlash, setBgFlash] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * (window.innerHeight * 0.5);
      const hue = Math.random() * 360;

      // Create a mix of Sparkles (Firework) and Rectangles (Poppers)
      const particles = Array.from({ length: 40 }, () => ({
        dx: (Math.random() - 0.5) * 600,
        dy: (Math.random() - 0.5) * 600,
        size: Math.random() * 8 + 4,
        color: `hsl(${hue}, 100%, 65%)`,
        isPopper: Math.random() > 0.5,
        rotation: Math.random() * 360,
      }));

      setElements((prev) => [...prev, { id, x, y, particles }]);
      
      // Trigger sky flash
      setBgFlash(true);
      setTimeout(() => setBgFlash(false), 100);

      // Cleanup
      setTimeout(() => {
        setElements((prev) => prev.filter((el) => el.id !== id));
      }, 2000);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-screen h-screen transition-colors duration-200 relative overflow-hidden ${bgFlash ? 'bg-zinc-900' : 'bg-black'}`}>
      
      {/* Navigation */}
      <nav className="absolute top-0 w-full flex justify-between px-12 py-8 z-50">
        <div onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer group">
          <span className="material-symbols-outlined text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">favorite</span>
          <h2 className="text-white font-serif text-xl opacity-90 group-hover:opacity-100">Forever & Always</h2>
        </div>
      </nav>

      {/* Main Text with Neon Glow */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <h1 className="text-white text-6xl md:text-9xl font-black italic tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
          Congratulations!
        </h1>
      </div>

      {/* Particles Layer */}
      {elements.map((group) =>
        group.particles.map((p, j) => (
          <div
            key={`${group.id}-${j}`}
            className="absolute"
            style={{
              left: group.x,
              top: group.y,
              width: p.size,
              height: p.isPopper ? p.size * 1.5 : p.size,
              backgroundColor: p.color,
              borderRadius: p.isPopper ? "2px" : "50%",
              // THE HIGHLIGHT: Multiple layered shadows for intense glow
              boxShadow: `0 0 ${p.size}px ${p.color}, 0 0 ${p.size * 2}px ${p.color}, 0 0 ${p.size * 4}px white`,
              "--dx": `${p.dx}px`,
              "--dy": `${p.dy}px`,
              "--rot": `${p.rotation}deg`,
              animation: `pop 1.5s cubic-bezier(0.1, 1, 0.3, 1) forwards`,
            }}
          />
        ))
      )}

      <style>{`
        @keyframes pop {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(0);
            opacity: 1;
          }
          15% {
            transform: translate(calc(var(--dx) * 0.2), calc(var(--dy) * 0.2)) rotate(45deg) scale(1.5);
            opacity: 1;
          }
          100% {
            transform: translate(var(--dx), var(--dy)) rotate(var(--rot)) scale(0);
            opacity: 0;
            filter: blur(2px);
          }
        }
      `}</style>
    </div>
  );
}

export default Celebration;


