import React from "react";
import { useNavigate } from "react-router-dom";

function Yes() {

    const navigate = useNavigate();
    const goToHome = () => {
    navigate("/"); // redirect to home page
  };
  return (
    <>
      {/* Tailwind CDN */}
      <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>

      {/* Tailwind Config */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          tailwind.config = {
            darkMode: "class",
            theme: {
              extend: {
                colors: {
                  primary: "#ec1337",
                  "background-light": "#f8f6f6",
                  "background-dark": "#221013",
                },
                fontFamily: {
                  display: ["Noto Serif", "serif"]
                },
                borderRadius: {
                  DEFAULT: "1rem",
                  lg: "2rem",
                  xl: "3rem",
                  full: "9999px"
                },
              },
            },
          }
        `,
        }}
      />

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      {/* Styles */}
      <style>{`
        .glass-panel {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .petal {
          position: fixed;
          top: -10%;
          z-index: 10;
          user-select: none;
          pointer-events: none;
          color: #ec1337;
          opacity: 0.6;
        }

        @keyframes fall {
          0% { transform: translateY(-10vh) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.4; }
          100% { transform: translateY(110vh) translateX(100px) rotate(360deg); opacity: 0; }
        }
      `}</style>

      <div className="bg-background-light dark:bg-background-dark font-display overflow-hidden">
        <div
          className="relative min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBo99B0DNtvvhCSIcqKdhaK1svLCRxdj4e2l19mrFtZtoIPOScUyvztbnzbvuqJpKQ8wxvvrxROM_dyVMNaiQ8NIQMj0CRnB5ezUb_Cc1ldT5xZqPRp52XV0hkN6X21obdvHxP916fTtR2oEAHO029BVXeJ_oZidPpnREFtbpyyqcJYQkAaZKEMIbP1VxOV3ZOx3_NOh6xZwasfjj0oR-1ReZXjuRsQ54T-exF7PC6asvq4sIuMfW-RjYZDzl5vhUb44cTQr4y7PJOy')",
          }}
        >
          {/* Header */}
          <header className="fixed top-0 left-0 w-full flex items-center justify-between px-10 py-6 z-50">
            <div className="flex items-center gap-3 text-white">
              <div className="size-6">
                <svg fill="currentColor" viewBox="0 0 48 48">
                  <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" />
                </svg>
              </div>
                          <h2 onClick={goToHome} className="text-xl font-bold tracking-tight italic cursor-pointer hover:text-primary">
                Forever &amp; Always
              </h2>
            </div>
            <div className="flex items-center gap-6">
              <span className="material-symbols-outlined text-white cursor-pointer hover:text-primary">
                favorite
              </span>
              <span className="material-symbols-outlined text-white cursor-pointer hover:text-primary">
                music_note
              </span>
            </div>
          </header>

          {/* Main */}
          <main className="relative z-20 flex flex-col items-center justify-center px-4 w-full max-w-4xl">
            <div className="glass-panel rounded-xl p-12 md:p-20 text-center shadow-2xl flex flex-col items-center gap-8 border-2 border-white/40">
              <div className="text-primary animate-pulse">
                <span
                  className="material-symbols-outlined text-6xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  favorite
                </span>
              </div>

              <h1 className="text-primary tracking-tight text-4xl md:text-6xl font-bold leading-tight px-4">
                Will you continue this beautiful journey with me forever?
              </h1>

              <p className="text-background-dark/80 text-lg md:text-xl font-medium leading-relaxed max-w-2xl italic">
                "Every moment with you has been a dream come true. Today, I want
                to make that dream our forever. From our first date to this very
                second, my heart has known only you."
              </p>

              <button className="group relative flex min-w-[240px] items-center justify-center overflow-hidden rounded-full h-16 px-8 bg-primary text-white text-xl font-bold tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/40">
                <span className="material-symbols-outlined mr-2">diamond</span>
                YES, FOREVER!
              </button>

              <div className="text-background-dark/40 text-sm font-medium tracking-widest uppercase mt-4">
                The Beginning of Us • Est. 2024
              </div>
            </div>
          </main>

          {/* Petals */}
          {[
            { left: "10%", dur: "12s" },
            { left: "25%", dur: "15s", delay: "2s" },
            { left: "45%", dur: "18s", delay: "5s" },
            { left: "65%", dur: "14s", delay: "1s" },
            { left: "85%", dur: "20s", delay: "3s" },
          ].map((p, i) => (
            <div
              key={i}
              className="petal material-symbols-outlined"
              style={{
                left: p.left,
                animation: `fall ${p.dur} linear infinite`,
                animationDelay: p.delay || "0s",
              }}
            >
              favorite
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Yes;