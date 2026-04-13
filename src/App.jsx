import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Mail, Phone, FileText, ChevronRight } from 'lucide-react';

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
import AIChatBox from './components/AIChatBox';

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
        <section id="Hero"><Hero /></section>
        <section id="aboutus"><AboutUs /></section>
        <section id="values"><Values /></section>
        <section id="lineup"><Roster /></section>
        <section id="matches"><Matches /></section>
        <section id="gallery"><Gallery /></section>
        <section id="timeline"><Timeline /></section>
        <section id="achievement"><Achievement /></section>
        <section id="partners"><Sponsors /></section>
      </main>

      {/* --- PRO TACTICAL FOOTER (UPGRADED) --- */}
      <footer id="footer" className="relative bg-[#080808] pt-24 pb-10 px-6 border-t border-red-600/20 overflow-hidden text-left font-mono">
        
        {/* 1. BACKGROUND GRAPHICS */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          {/* Tactical Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          {/* Blueprint Circles */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 border border-white rounded-full opacity-20"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 border border-white rounded-full opacity-10"></div>
        </div>
        
        {/* Giant Watermark Background */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[18vw] font-[1000] text-white/[0.01] select-none pointer-events-none font-orbitron italic tracking-tighter leading-none">
          LIMITLESS
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            
            {/* --- SECTION 1: BRANDING --- */}
            <div className="md:col-span-5 space-y-8 text-left">
              <div className="flex items-center gap-6">
                <img 
                  src="/InfinitiLogo.png"
                  alt="Logo" 
                  className="w-16 h-16 object-contain brightness-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                />
                <div className="h-12 w-[1px] bg-red-600/30" />
                <div>
                   <h2 className="text-3xl font-orbitron font-[1000] text-white italic tracking-tighter uppercase leading-none">
                    INFINITI.
                  </h2>
                  <p className="text-[8px] text-red-600 font-black tracking-[0.5em] mt-2">TACTICAL_UNIT_026</p>
                </div>
              </div>

              <p className="text-white/30 text-[10px] md:text-[11px] font-rajdhani tracking-[0.2em] leading-relaxed max-w-sm uppercase italic">
                Operating at the intersection of high-stakes gaming and digital excellence. 
                Based in Shah Alam, Selangor. Powered by precision, defined by honor.
              </p>

              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[7px] text-white/40 font-black uppercase tracking-widest">Region_MY</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[7px] text-white/40 font-black uppercase tracking-widest">Tier_Elite</span>
              </div>
            </div>

            {/* --- SECTION 2: DIRECTORY --- */}
            <div className="md:col-span-3 space-y-6">
              <h4 className="text-[10px] font-black text-white/60 uppercase tracking-[0.5em] flex items-center gap-2">
                <div className="w-1 h-1 bg-red-600 animate-pulse"></div>
                Navigation
              </h4>
              <ul className="space-y-3">
                {['AboutUs', 'Lineup', 'Matches', 'Gallery', 'Partners'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-[10px] text-white/30 hover:text-red-600 transition-all font-black uppercase tracking-widest flex items-center gap-3 group">
                      <span className="text-red-600/0 group-hover:text-red-600 transition-all font-sans text-xs">//</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- SECTION 3: SOCIAL CARDS --- */}
            <div className="md:col-span-4 space-y-6">
              <h4 className="text-[10px] font-black text-white/60 uppercase tracking-[0.5em] flex items-center gap-2 text-left">
                <div className="w-1 h-1 bg-red-600 animate-pulse"></div>
                Social_Link
              </h4>
              <div className="grid grid-cols-1 gap-4">
                <a href="https://instagram.com/infinitiesportsmy" target="_blank" rel="noreferrer" 
                   className="group flex items-center justify-between p-4 border border-white/5 bg-white/[0.02] hover:bg-white hover:text-black transition-all duration-300">
                  <span className="text-[10px] font-black tracking-widest uppercase">Instagram_Feed</span>
                  <Instagram size={14} className="opacity-40 group-hover:opacity-100" />
                </a>
                <a href="https://discord.gg/yduStkjB" target="_blank" rel="noreferrer" 
                   className="group flex items-center justify-between p-4 border border-white/5 bg-white/[0.02] hover:bg-white hover:text-black transition-all duration-300">
                  <span className="text-[10px] font-black tracking-widest uppercase">Tactical_Discord</span>
                  <div className="text-[10px] font-sans opacity-40 group-hover:opacity-100 italic">Join_Server</div>
                </a>
              </div>
            </div>
          </div>

          {/* --- BOTTOM BAR --- */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
               <span className="text-[8px] text-white/20 tracking-[0.4em] uppercase font-black font-rajdhani">
                 System_Stable // All_Units_Deployed
               </span>
            </div>
            
            <div className="text-[8px] text-white/10 tracking-[0.2em] uppercase font-bold">
              © 2026 INFINITI ESPORTS • ALL RIGHT RESERVED
            </div>

            <div className="flex gap-4">
              <span className="text-[7px] text-white/20 font-orbitron uppercase tracking-[0.3em] bg-white/5 px-2 py-1 border border-white/10">v2.0.26_SECURE</span>
            </div>
          </div>
        </div>

        {/* Subtle Decorative Glow */}
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-red-600/5 blur-[100px]"></div>
      </footer>

      {/* --- AI CHATBOX OVERLAY --- */}
      <AIChatBox />

    </div>
  );
}

export default App;