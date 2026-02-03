import React from 'react';
import Memories from './memories';
import { useNavigate } from 'react-router-dom';
import Yes from './yes';
import myImg from './assets/images/myimg.png';
import nxtImg from './assets/images/imgextra.jpg';
import thirdImg from './assets/images/thirdimg.png';

function Body() {
    const navigate = useNavigate();

  const goToMemories = () => {
    navigate('/memories');
  };

  const goToYes = () => {
    navigate('/yes'); 
  };

  return (
    <>
      <div className="bg-background-light dark:bg-background-dark font-display min-h-screen sparkle-bg text-[#1c0d11]">
        <div className="layout-container flex h-full grow flex-col relative overflow-x-hidden">
          <div className="absolute top-[15%] left-[5%] kiss-mark rotate-12">
            <span className="material-symbols-outlined text-6xl text-primary">
              face
            </span>
          </div>
          <div className="absolute top-[45%] right-[8%] kiss-mark -rotate-12">
            <span className="material-symbols-outlined text-7xl text-primary">
              face
            </span>
          </div>
          <div className="absolute bottom-[20%] left-[10%] kiss-mark rotate-45">
            <span className="material-symbols-outlined text-5xl text-primary">
              face
            </span>
          </div>
          <div className="absolute top-[80%] right-[5%] kiss-mark -rotate-45">
            <span className="material-symbols-outlined text-6xl text-primary">
              face
            </span>
          </div>

          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-10 py-4 backdrop-blur-md bg-white/30 dark:bg-black/30 sticky top-0 z-50">
            <div className="flex items-center gap-4 text-primary">
              <div className="flex items-center">
                {/* Red Heart */}
                <span className="material-symbols-outlined text-red-600 text-3xl animate-heartbeat -mr-1">
                  favorite
                </span>

                {/* Black Heart */}
                <span className="material-symbols-outlined text-black text-3xl animate-heartbeat">
                  favorite
                </span>
              </div>

              <h2 className="dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                Forever &amp; Always
              </h2>
            </div>

            <div
              onClick={goToMemories}
              className="flex flex-1 justify-end gap-8 cursor-pointer"
            >
              <nav className="flex items-center gap-9">
                <span className="text-sm font-bold text-[#4a363b] dark:text-gray-200 hover:text-primary transition-colors">
                  Memories
                </span>
              </nav>
            </div>
          </header>

          <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative">
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-rosegold/10 rounded-full blur-3xl"></div>

            <div className="layout-content-container flex flex-col max-w-[960px] w-full z-10">
              <div className="@[480px]:p-8">
                <div
                  className="flex min-h-[520px] flex-col gap-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-2xl rounded-xl items-center justify-center p-8 text-center transition-all duration-500 hover:scale-[1.01]"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at center, transparent 0%, rgba(229, 179, 161, 0.05) 100%)',
                  }}
                >
                  <div className="flex flex-col items-center gap-6">
                    <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
                      <span className="material-symbols-outlined text-4xl">
                        celebration
                      </span>
                    </div>
                    <h4 className="text-primary text-sm font-bold uppercase tracking-[0.2em]">
                      The Most Special Day
                    </h4>
                    <h1 className="dark:text-white text-5xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl max-w-2xl">
                      Happy Anniversary, <br />
                      <span className="text-primary">My Love!</span>
                    </h1>
                    <h2 className="text-[#4a363b] dark:text-gray-300 text-lg font-normal leading-relaxed max-w-[600px] @[480px]:text-xl">
                      Every moment with you has been a dream come true. At last, I think I’ve found my girl.
                      I have something special to ask you…
                    </h2>
                  </div>

                  <div className="w-full flex justify-center mt-4">
                    <button onClick={goToYes}
                      className="flex min-w-[280px] max-w-[520px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-8 bg-primary text-white text-lg font-bold leading-normal tracking-[0.025em] shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 group">
                      <span className="material-symbols-outlined mr-2 group-hover:scale-125 transition-transform">
                        favorite
                      </span>
                      <span className="truncate">
                        Click YES if you want to see my proposal
                      </span>
                    </button>
                  </div>

                  <div className="mt-4 flex gap-2 items-center text-primary/60">
                    <span className="material-symbols-outlined text-xs">
                      auto_awesome
                    </span>
                    <span className="text-xs font-bold tracking-widest uppercase">
                      Forever Together
                    </span>
                    <span className="material-symbols-outlined text-xs">
                      auto_awesome
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <section
            className="px-4 py-24 flex justify-center overflow-hidden relative"
            id="memories"
          >
            <div className="intertwined-hearts absolute left-1/2 -translate-x-1/2 top-4 opacity-50 animate-heartbeat">
              <span className="material-symbols-outlined text-red-600 text-3xl animate-heartbeat -mr-1">
                favorite
              </span>

              {/* Black Heart */}
              <span className="material-symbols-outlined text-black text-3xl animate-heartbeat">
                favorite
              </span>
            </div>

            <div className="layout-content-container flex flex-col max-w-[1100px] flex-1 relative">
              <div className="flex items-center gap-4 px-4 mb-24 relative z-10">
                <div className="h-px grow bg-primary/20"></div>
                <h4 className="text-primary text-sm font-bold leading-normal tracking-[0.25em] uppercase text-center whitespace-nowrap">
                  Special Memories
                </h4>
                <div className="h-px grow bg-primary/20"></div>
              </div>

              <div className="relative w-full">
                <div className="absolute inset-0 flex justify-center pointer-events-none">
                  <svg
                    className="h-full w-full max-w-[800px]"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 800 1200"
                  >
                    <path
                      className="opacity-30 timeline-path"
                      d="M400,0 C600,200 600,400 400,600 C200,800 200,1000 400,1200"
                      stroke="#f20d46"
                      strokeWidth="2"
                    ></path>
                    <path
                      className="opacity-10 blur-[2px] timeline-path"
                      d="M400,0 C600,200 600,400 400,600 C200,800 200,1000 400,1200"
                      stroke="#f20d46"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>

                <div className="space-y-32 relative">
                  {/* Memory Cards */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-32">
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end order-2 md:order-1">
                      <div className="group relative w-80 h-[28rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-3 hover:rotate-0 transition-all duration-500">
                        <div
                          className="absolute inset-0 bg-center bg-cover"
                          style={{
                            backgroundImage: `url("${myImg}")`,
                          }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-40"></div>
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <p className="text-xs  tracking-widest uppercase mb-1">
                            Feb 2025
                          </p>
                          <h3 className="text-2xl font-bold">Our First Date</h3>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 size-12 bg-white border-2 border-primary rounded-full flex items-center justify-center text-primary shadow-lg order-1 md:order-2">
                      <span className="material-symbols-outlined text-2xl animate-heartbeat">
                        favorite
                      </span>
                    </div>
                    {/* <div className="relative z-10 size-12 bg-white border-2 border-primary rounded-full flex items-center justify-center text-primary shadow-lg animate-heartbeat">
                      <span className="material-symbols-outlined text-2xl">
                        favorite
                      </span>
                    </div> */}
                    <div className="w-full md:w-1/2 text-center md:text-left order-3">
                      <div className="max-w-xs mx-auto md:mx-0">
                        <span className="material-symbols-outlined text-primary/30 text-4xl mb-2 floral-accent">
                          local_florist
                        </span>
                        <h3 className="text-xl font-bold mb-2 dark:text-white">
                          Our First Date
                        </h3>
                        <p className="text-[#4a363b] dark:text-gray-400 leading-relaxed italic">
                          "The evening when my world changed forever over coffee
                          and endless conversation."
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Second Memory */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-32">
                    <div className="w-full md:w-1/2 text-center md:text-right order-3 md:order-1">
                      <div className="max-w-xs mx-auto md:ml-auto md:mr-0">
                        <span className="material-symbols-outlined text-primary/30 text-4xl mb-2 floral-accent">
                          psychiatry
                        </span>
                        <h3 className="text-xl font-bold mb-2 dark:text-white">
                          Her first proposal
                        </h3>
                        <p className="text-[#4a363b] dark:text-gray-400 leading-relaxed italic">
                          "Exploring new horizons and realizing that home isn't
                          a place, it's being with you."
                        </p>
                      </div>
                    </div>
                    <div className="relative z-10 size-12 bg-white border-2 border-primary rounded-full flex items-center justify-center text-primary shadow-lg order-1 md:order-2">
                      <span className="material-symbols-outlined text-2xl animate-heartbeat">
                        favorite
                      </span>
                    </div>
                    <div className="w-full md:w-[45%] flex justify-center md:justify-start order-2 md:order-3">
                      <div className="group relative w-full h-[32rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-500">
                        <div className="w-full h-full bg-cover bg-center"
                          style={{
                        backgroundImage:
                          `url("${nxtImg}")`,
                          }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                          <p className="text-xs font-bold tracking-widest uppercase mb-1">
                            March 16, 12:07 AM
                          </p>
                          <h3 className="text-xl font-bold leading-tight">
                            Her first proposal
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-all duration-500">
                    {/* Image */}
                    <div
                      className="absolute inset-0 bg-center bg-cover"
                      style={{
                        backgroundImage:
                          `url("${thirdImg}")`,
                      }}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-40"></div>

                    {/* Text overlay */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="text-xs font-bold tracking-widest uppercase mb-1">
                        jan 2026
                      </p>
                      <h3 className="text-2xl font-bold">Our first eye contact moments</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reasons Section */}
          <section className="px-4 py-20 flex justify-center" id="reasons">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div
                className="flex flex-col gap-12 px-8 py-16 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-2xl rounded-3xl relative overflow-hidden"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at top right, rgba(229, 179, 161, 0.1) 0%, transparent 70%)',
                }}
              >
                <div className="flex flex-col gap-4 text-center items-center relative z-10">
                  <h2 className="dark:text-white tracking-tight text-4xl font-black leading-tight @[480px]:text-5xl">
                    Why I Love You
                  </h2>
                  <div className="h-1 w-20 bg-primary/20 rounded-full"></div>
                  <p className="text-primary font-semibold text-xl leading-normal max-w-[720px]">
                    One year of laughter, growth, and endless love.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                  <div className="flex flex-col gap-6 rounded-2xl border border-primary/5 bg-white dark:bg-background-dark/50 p-8 items-center text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                    <div className="text-primary p-4 bg-primary/10 rounded-full animate-heartbeat">
                      <span className="material-symbols-outlined text-4xl">
                        favorite
                      </span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="dark:text-white text-xl font-bold leading-tight">
                        Your Selfless Heart
                      </h3>
                      <p className="text-[#4a363b] dark:text-gray-400 text-base font-normal leading-relaxed">
                        You always know how to make others feel special and
                        truly heard.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 rounded-2xl border border-primary/5 bg-white dark:bg-background-dark/50 p-8 items-center text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                    <div className="text-primary p-4 bg-primary/10 rounded-full">
                      <span className="material-symbols-outlined text-4xl">
                        cloud
                      </span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="dark:text-white text-xl font-bold leading-tight">
                        Taking care of me 
                      </h3>
                      <p className="text-[#4a363b] dark:text-gray-400 text-base font-normal leading-relaxed">
                        standing by me through every high and low,
                        and loving me without conditions.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 rounded-2xl border border-primary/5 bg-white dark:bg-background-dark/50 p-8 items-center text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                    <div className="text-primary p-4 bg-primary/10 rounded-full">
                      <span className="material-symbols-outlined text-4xl">
                        mood
                      </span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="dark:text-white text-xl font-bold leading-tight">
                        Your are my girl
                      </h3>
                      <p className="text-[#4a363b] dark:text-gray-400 text-base font-normal leading-relaxed">
                        I always feel that you are perfectly
                        meant for me in every way.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 kiss-mark rotate-12">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    face
                  </span>
                </div>
              </div>
            </div>
          </section>

          <footer className="py-12 text-center text-[#9c495e] dark:text-gray-500 text-sm border-t border-primary/5 relative">
            <div className="flex justify-center mb-6">
              <div className="intertwined-hearts opacity-70 animate-heartbeat">
                <span className="material-symbols-outlined text-red-600 text-3xl animate-heartbeat -mr-1">
                  favorite
                </span>

                {/* Black Heart */}
                <span className="material-symbols-outlined text-black text-3xl animate-heartbeat">
                  favorite
                </span>
              </div>
            </div>
            <div className="flex justify-center gap-4 mb-4">
              <span
                className="material-symbols-outlined text-primary/40 animate-heartbeat"
                style={{ animationDelay: '0.1s' }}
              >
                favorite
              </span>
              <span
                className="material-symbols-outlined text-primary/40 animate-heartbeat"
                style={{ animationDelay: '0.2s' }}
              >
                favorite
              </span>
              <span
                className="material-symbols-outlined text-primary/40 animate-heartbeat"
                style={{ animationDelay: '0.3s' }}
              >
                favorite
              </span>
            </div>
            <p className="font-medium tracking-wide">
              © 2024 • Our Forever Story • Built with love
            </p>
            <div className="absolute bottom-2 left-1/2 -translate-x-32 kiss-mark -rotate-12 opacity-10">
              <span className="material-symbols-outlined text-3xl text-primary">
                face
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
export default Body;
