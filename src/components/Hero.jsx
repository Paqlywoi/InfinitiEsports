import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, Zap } from 'lucide-react';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // --- REAL-TIME CLOCK STATE ---
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    const timer = setInterval(() => setTime(new Date()), 1000);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(timer);
    };
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("imanvortex3@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Format Jam & Tarikh
  const formatTime = (date) => date.toLocaleTimeString('en-GB', { hour12: false });
  const formatDate = (date) => date.toLocaleDateString('en-GB', { 
    day: '2-digit', 
    month: 'short', 
    year: 'numeric' 
  }).toUpperCase();

  // --- GLITCH ANIMATION VARIANTS ---
  const glitchTextVariants = {
    animate: {
      x: [0, -2, 2, -1, 3, -2, 0],
      y: [0, 1, -1, 0, -1, 1, 0],
      filter: [
        'none',
        'drop-shadow(-2px 0 #ff0000) drop-shadow(2px 0 #00ffff)',
        'none',
        'drop-shadow(2px 0 #ff0000) drop-shadow(-2px 0 #00ffff)',
        'none'
      ],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: 3
      }
    }
  };

  const tickerText = " /// [MATCH_REPORT]: INFINITI ESPORTS FALL TO MADFOX CHAOS 0-1 IN MAL QUALIFIER S5 /// [PLAYER_STATUS]: PAKLY'S FUTURE WITH THE SQUAD REMAINS UNCERTAIN FOLLOWING THREE CONSECUTIVE LOSSES /// [MANAGEMENT_LOG]: INFINITI PLOTS RESURGENCE AFTER SETBACK IN MAL QUALIFIER S5 /// [APPAREL_DROPS]: NEW INFINITI OFFICIAL JERSEY TO BE UNVEILED BY 2028 AT THE LATEST /// [TRANSFER_RUMORS]: SPECULATION GROWS AROUND BABYNEEZY (KRONI K902) JOINING THE INFINITI 2026 ROSTER /// ";

  return (
    <div id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* --- 1. THE VIDEO BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30 grayscale contrast-125">
          <source src="/videos/InfinitiVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#050505] z-10"></div>
      </div>

      {/* --- 2. ADAPTIVE SYSTEM HUD (TIME & DATE) --- */}
      <div className={`absolute z-40 flex justify-center pointer-events-none transition-all duration-500
        ${isMobile 
          ? 'bottom-16 left-0 w-full px-4' // Mobile: Above Live Feed
          : 'top-10 left-1/2 -translate-x-1/2 w-auto' // Desktop: Top Center
        }`}
      >
        <div className={`flex items-center backdrop-blur-md border border-white/5 rounded-full shadow-2xl
          ${isMobile 
            ? 'gap-4 px-5 py-2 bg-black/60 border-white/10' 
            : 'gap-8 px-8 py-2 bg-white/[0.02]' 
          }`}
        >
          {/* Time Section */}
          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-white/20 text-[6px] md:text-[7px] font-black uppercase tracking-[0.3em] font-orbitron">Time</span>
            <div className="text-white font-orbitron text-xs md:text-lg font-black tracking-widest tabular-nums leading-none">
              {formatTime(time)}
            </div>
          </div>

          <div className="h-3 md:h-4 w-[1px] bg-white/20"></div>

          {/* Date Section */}
          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-white/20 text-[6px] md:text-[7px] font-black uppercase tracking-[0.3em] font-orbitron">Date</span>
            <div className="text-white/70 font-orbitron text-[9px] md:text-[11px] font-black tracking-[0.1em] md:tracking-[0.2em] leading-none whitespace-nowrap uppercase italic">
              {formatDate(time)}
            </div>
          </div>
        </div>
      </div>

      {/* LEFT HUD: STATUS (Desktop Only) */}
      {!isMobile && (
        <div className="absolute top-10 left-32 z-40 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_#fff]"></div>
            <span className="text-white/20 text-[8px] font-black uppercase tracking-[0.3em] font-orbitron">Live_Status: Active</span>
          </div>
          <div className="h-[1px] w-24 bg-white/10"></div>
        </div>
      )}

      {/* BOTTOM RIGHT: COORDINATES (Desktop Only) */}
      {!isMobile && (
        <div className="absolute bottom-24 right-10 z-40 text-right opacity-20">
          <p className="text-white text-[8px] font-black uppercase tracking-[0.5em] font-orbitron mb-2">Coordinates: 3.0738° N, 101.5183° E</p>
          <div className="flex justify-end gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1 h-3 bg-white/40"></div>
            ))}
          </div>
        </div>
      )}

      {/* --- 3. DYNAMIC TEXTURES --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] brightness-50 pointer-events-none z-20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] z-10"></div>

      {/* --- 4. TOP NAV BAR --- */}
      <div className="absolute top-10 right-8 md:right-16 flex justify-end items-center z-50">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex flex-row items-center gap-1 p-1 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
          <a href="https://instagram.com/infinitiesportsmy" target="_blank" rel="noreferrer" className="p-3 text-white/40 hover:text-white transition-all"><Instagram size={16} /></a>
          <button onClick={copyEmail} className="p-3 text-white/40 hover:text-white transition-all relative">
            <Mail size={16} />
            <span className={`absolute top-14 right-0 text-[10px] font-black uppercase bg-white text-black px-3 py-1 rounded-sm transition-all ${copied ? 'opacity-100' : 'opacity-0'}`}>{copied ? 'COPIED!' : 'COPY'}</span>
          </button>
          <a href="tel:+60102141605" className="p-3 text-white/40 hover:text-white transition-all"><Phone size={16} /></a>
        </motion.div>
      </div>

      {/* --- 5. MAIN HERO CONTENT --- */}
      <div className="z-30 flex flex-col items-center gap-12 md:gap-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 relative">
          {!isMobile && (
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -top-10 -left-10 text-white/10">
              <Zap size={40} strokeWidth={3} />
            </motion.div>
          )}

          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="relative">
            <div className="absolute inset-0 bg-white/5 blur-[80px] rounded-full animate-pulse"></div>
            <img src="/InfinitiLogo.png" alt="Infiniti Logo" className="h-32 md:h-52 w-auto relative z-10 brightness-110 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" />
          </motion.div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left relative">
            <motion.h1 variants={glitchTextVariants} animate="animate" className="text-5xl md:text-[8rem] font-orbitron font-black leading-[0.8] text-white flex flex-col uppercase italic tracking-tighter">
              <span className="relative">INFINITI</span>
              <span className="text-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>ESPORTS</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex items-center gap-4 mt-8">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/20"></div>
              <p className="text-white/30 tracking-[0.8em] uppercase text-[9px] md:text-xs font-black font-rajdhani whitespace-nowrap italic">#ZeroToInfiniti // MLBB</p>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }}>
          <button onClick={() => window.open("https://discord.gg/yduStkjB", '_blank')} className="group relative px-12 py-5 md:px-16 md:py-6 bg-white text-black font-orbitron font-black uppercase tracking-[0.3em] text-xs md:text-sm transition-all duration-300 active:scale-90">
            <span className="relative z-10">Join Community</span>
            <div className="absolute -inset-0 border border-white/20 group-hover:-inset-2 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
          </button>
        </motion.div>
      </div>

      {/* --- 6. NEWS TICKER --- */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-white/5 backdrop-blur-md border-t border-white/10 z-[70] flex items-center overflow-hidden">
        <motion.div initial={{ x: "0%" }} animate={{ x: "-50%" }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex whitespace-nowrap gap-10 items-center">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="text-[10px] md:text-xs font-black font-orbitron tracking-[0.2em] text-white/80 uppercase italic">{tickerText}</span>
          ))}
        </motion.div>
        <div className="absolute left-0 top-0 h-full bg-white text-black flex items-center px-4 z-10">
          <span className="text-[9px] font-black font-rajdhani uppercase tracking-widest">Live_Feed</span>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-[60] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] opacity-20"></div>
    </div>
  );
};

export default Hero;