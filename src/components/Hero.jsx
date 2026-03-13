import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, Zap } from 'lucide-react';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("imanvortex3@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* --- 1. THE DECORATIVE HUD (GEN-Z VIBE) --- */}
      {!isMobile && (
        <>
          {/* Top Left Corner */}
          <div className="absolute top-10 left-32 z-40 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white/20 text-[8px] font-black uppercase tracking-[0.3em] font-orbitron">Live_Status: Active</span>
            </div>
            <div className="h-[1px] w-24 bg-white/10"></div>
          </div>

          {/* Bottom Right Corner */}
          <div className="absolute bottom-10 right-10 z-40 text-right opacity-20">
            <p className="text-white text-[8px] font-black uppercase tracking-[0.5em] font-orbitron mb-2">Coordinates: 3.0738° N, 101.5183° E</p>
            <div className="flex justify-end gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 h-3 bg-white/40"></div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* --- 2. DYNAMIC BACKGROUND --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] brightness-50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* --- 3. TOP NAV BAR --- */}
      <div className="absolute top-10 right-8 md:right-16 flex justify-end items-center z-50">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-row items-center gap-1 p-1 bg-white/5 backdrop-blur-xl rounded-full border border-white/10"
        >
          <a href="https://instagram.com/infinitiesportsmy" target="_blank" className="p-3 text-white/40 hover:text-white transition-all group relative cursor-none">
            <Instagram size={16} />
          </a>
          <button onClick={copyEmail} className="p-3 text-white/40 hover:text-white transition-all group relative cursor-none">
            <Mail size={16} />
            <span className={`absolute top-14 right-0 text-[10px] font-black uppercase bg-white text-black px-3 py-1 rounded-sm transition-all ${copied ? 'opacity-100' : 'opacity-0'}`}>
              {copied ? 'COPIED!' : 'COPY'}
            </span>
          </button>
          <a href="tel:+60102141605" className="p-3 text-white/40 hover:text-white transition-all group relative cursor-none">
            <Phone size={16} />
          </a>
        </motion.div>
      </div>

      {/* --- 4. BIG BACKGROUND TEXT (STAY CENTER) --- */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[35vw] font-black uppercase tracking-tighter leading-none italic font-orbitron">
          INFINITI
        </h2>
      </div>

      {/* --- 5. MAIN HERO CONTENT --- */}
      <div className="z-10 flex flex-col items-center gap-12 md:gap-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 relative">
          
          {/* Decorative Zap Icon */}
          {!isMobile && (
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-10 -left-10 text-white/10"
            >
              <Zap size={40} strokeWidth={3} />
            </motion.div>
          )}

          {/* Logo */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-white/5 blur-[80px] rounded-full"></div>
            <img 
              src="InfinitiLogo.png" 
              alt="Infiniti Logo"
              className="h-32 md:h-52 w-auto relative z-10 brightness-110 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            />
          </motion.div>

          {/* Text Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left relative">
            <motion.h1 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-5xl md:text-[8rem] font-orbitron font-black leading-[0.8] text-white flex flex-col uppercase italic tracking-tighter"
            >
              <span>INFINITI</span>
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">ESPORTS</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 mt-8"
            >
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/20"></div>
              <p className="text-white/30 tracking-[0.8em] uppercase text-[9px] md:text-xs font-black font-rajdhani whitespace-nowrap">
                #ZeroToInfiniti // MLBB DIV
              </p>
            </motion.div>
          </div>
        </div>

        {/* Action Button */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <button 
            onClick={() => window.open("https://discord.gg/yduStkjB", '_blank')}
            className="group relative px-12 py-5 md:px-16 md:py-6 bg-white text-black font-orbitron font-black uppercase tracking-[0.3em] text-xs md:text-sm transition-all duration-300 active:scale-90 cursor-none"
          >
            <span className="relative z-10">Join Community</span>
            {/* Box effect */}
            <div className="absolute -inset-0 border border-white/20 group-hover:-inset-2 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black opacity-0 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black opacity-0 group-hover:opacity-100"></div>
          </button>
        </motion.div>
      </div>

      {/* --- 6. SCANLINE HUD EFFECT --- */}
      <div className="absolute inset-0 pointer-events-none z-[60] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.005),rgba(0,0,255,0.01))] bg-[length:100%_4px,4px_100%] opacity-20"></div>
    </div>
  );
};

export default Hero;