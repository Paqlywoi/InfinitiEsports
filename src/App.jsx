import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sponsors from './components/Sponsors';
import Timeline from './components/Timeline';
import Roster from './components/Roster';
import Achievement from './components/Achievement';
import Matches from './components/Matches';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Values from './components/Values';

// --- CUSTOM CURSOR COMPONENT ---
const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
        transition={{ type: 'spring', damping: 10, stiffness: 500, mass: 0.1 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9998] hidden md:block"
        animate={{ x: mousePos.x - 20, y: mousePos.y - 20 }}
        transition={{ type: 'spring', damping: 20, stiffness: 150, mass: 0.5 }}
      />
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-white selection:text-black md:cursor-none font-sans overflow-x-hidden">
      
      <CustomCursor />
      <Navbar />

      <main className="flex-1">
        <section id="home"><Hero /></section>
        <section id="aboutus"><AboutUs /></section>
        <section id="values"><Values /></section>
        <section id="lineup"><Roster /></section>
        <section id="matches"><Matches /></section>
        <section id="gallery"><Gallery /></section>
        <section id="timeline"><Timeline /></section>
        <section id="achievement"><Achievement /></section>
        <section id="partners"><Sponsors /></section>
      </main>

      {/* --- PRO BRUTALIST FOOTER --- */}
      <footer id="footer" className="bg-black pt-32 pb-10 px-6 border-t border-white/5 relative overflow-hidden text-left">
        
        {/* Giant Watermark Background */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[18vw] font-black text-white/[0.02] select-none pointer-events-none font-orbitron italic tracking-tighter">
          INFINITI
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
            
            {/* 1. Brand Section */}
            <div className="col-span-1 md:col-span-2 space-y-8">
              {/* --- LOGO SECTION --- */}
              <div className="flex items-center gap-4">
                <img 
                  src="/InfinitiLogo.png"
                  alt="Infiniti Logo" 
                  className="w-12 h-12 md:w-16 md:h-16 object-contain brightness-125"
                />
                <div className="h-10 w-[1px] bg-white/10 hidden md:block" />
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl font-orbitron font-black text-white italic tracking-tighter uppercase leading-tight">
                  INFINITI<span className="text-white/20 ml-2 font-light">ESPORTS</span>
                </h2>
                <p className="text-white/40 text-[10px] font-rajdhani tracking-[0.4em] leading-relaxed max-w-sm uppercase italic">
                  The ultimate digital frontier for competitive gaming. Based in Malaysia. Driven by data, secured by skill. 
                </p>
              </div>

              <div className="flex gap-4">
                <div className="px-3 py-1 border border-white/10 rounded-full text-[8px] text-white/30 font-orbitron uppercase tracking-widest">
                  EST. 2019
                </div>
                <div className="px-3 py-1 border border-white/10 rounded-full text-[8px] text-white/30 font-orbitron uppercase tracking-widest">
                  MLBB_UNIT
                </div>
              </div>
            </div>

            {/* 2. Navigation */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.5em] font-rajdhani">Directory_Link</h4>
              <ul className="space-y-3">
                {['AboutUs', 'Lineup', 'Matches', 'Gallery', 'Partners'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-[10px] text-white/40 hover:text-white transition-all font-orbitron uppercase tracking-widest flex items-center gap-2 group">
                      <span className="w-0 h-[1px] bg-white group-hover:w-3 transition-all"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Connect */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.5em] font-rajdhani">Social_Network</h4>
              <div className="flex flex-col gap-4 text-left">
                <a href="https://instagram.com/infinitiesportsmy" target="_blank" rel="noreferrer" className="text-[10px] text-white/40 hover:text-white font-orbitron tracking-widest">
                  // INSTAGRAM
                </a>
                <a href="https://discord.gg/yduStkjB" target="_blank" rel="noreferrer" className="text-[10px] text-white/40 hover:text-white font-orbitron tracking-widest">
                  // DISCORD
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[8px] text-white/20 tracking-[0.8em] uppercase font-black font-rajdhani">
              © 2026 INFINITI ESPORTS MY • ALL RIGHTS RESERVED
            </div>
            <div className="flex gap-8">
              <span className="text-[7px] text-white/10 font-orbitron uppercase tracking-[0.4em]">v2.0.4_STABLE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;