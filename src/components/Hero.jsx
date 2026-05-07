import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Mail, Phone, MessageSquare, Zap, Shield, Target, Activity, MapPin, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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

  const formatTime = (date) => date.toLocaleTimeString('en-GB', { hour12: false });
  const formatDate = (date) => date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase();

  const tickerText = "/// [MATCH_REPORT]: The comeback is real: After breaking the spell against Kroni K902, Infiniti Esports keeps the streak alive by defeating Jebat Boti 2-1 /// [MANAGEMENT_LOG]: UNIT v2.0.26 DEPLOYMENT ACTIVE /// [TRANSFER_RUMORS]: SPECULATION AROUND BABYNEEZY (KRONI K902) /// ";

  return (
    <div id="home" className="relative h-screen w-full flex items-center overflow-hidden bg-[#050505] font-mono selection:bg-white selection:text-black">
      
      {/* --- 1. VIDEO BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30 grayscale contrast-125">
          <source src="/videos/InfinitiVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />
      </div>

      {/* --- 2. SYSTEM HUD --- */}
      <div className="absolute top-10 left-0 w-full z-40 flex justify-center px-6">
        <div className="flex items-center gap-6 md:gap-10 px-6 py-2 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
            <div className="text-white font-orbitron text-xs md:text-sm font-black tracking-widest tabular-nums italic">
              {formatTime(time)}
            </div>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="text-white/60 font-orbitron text-[8px] md:text-[10px] font-black tracking-widest uppercase italic">
            {formatDate(time)}
          </div>
        </div>
      </div>

      {/* --- 3. HIGH-VISIBILITY SOCIAL DOCK --- */}
      <div className={`absolute z-50 transition-all duration-700
        ${isMobile ? 'bottom-24 right-6' : 'top-1/2 right-10 -translate-y-1/2'}`}>
        <div className={`flex ${isMobile ? 'flex-row' : 'flex-col'} items-center gap-2 bg-black/60 border border-white/20 p-2 rounded-xl backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>
          
          {/* Instagram */}
          <a href="https://instagram.com/infinitiesportsmy" target="_blank" rel="noreferrer" 
             className="p-4 bg-white/5 hover:bg-white hover:text-black text-white rounded-lg transition-all duration-300 group">
            <Instagram size={20} className="group-hover:scale-110" />
          </a>

          {/* Discord */}
          <a href="https://discord.gg/yduStkjB" target="_blank" rel="noreferrer" 
             className="p-4 bg-white/5 hover:bg-[#5865F2] hover:text-white text-white rounded-lg transition-all duration-300 group">
            <MessageSquare size={20} className="group-hover:scale-110" />
          </a>

          {/* Email */}
          <button onClick={copyEmail} className="p-4 bg-white/5 hover:bg-white hover:text-black text-white rounded-lg transition-all duration-300 relative group">
            <Mail size={20} className="group-hover:scale-110" />
            <AnimatePresence>
              {copied && (
                <motion.span initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} 
                  className={`absolute ${isMobile ? '-top-12 right-0' : 'right-16 top-4'} whitespace-nowrap text-[10px] font-black bg-white text-black px-3 py-1 rounded-sm shadow-xl`}>
                  COPIED!
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Phone */}
          <a href="tel:+60102141605" className="p-4 bg-white/5 hover:bg-white hover:text-black text-white rounded-lg transition-all duration-300 group">
            <Phone size={20} className="group-hover:scale-110" />
          </a>
          
        </div>
      </div>

      {/* --- 4. MAIN BRAND AREA --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 z-30 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-12 md:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative shrink-0"
          >
            <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full" />
            <img src="/InfinitiLogo.png" className="h-32 md:h-72 w-auto relative z-10 brightness-110 drop-shadow-[0_0_60px_rgba(255,255,255,0.1)]" alt="Logo" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -m-10 border border-dashed border-white/10 rounded-full"
            />
          </motion.div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6 bg-white/5 px-4 py-1 rounded-full border border-white/10">
               <Activity size={12} className="text-red-600 animate-pulse" />
               <span className="text-[10px] font-black tracking-[0.4em] text-white/50 uppercase">Operational_Status: Stable</span>
            </div>
            
            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
              <h1 className="text-[15vw] md:text-[11rem] font-orbitron font-[1000] text-white leading-[0.8] tracking-tighter uppercase italic">
                INFINITI
              </h1>
              <div className="flex items-center gap-6 mt-4 w-full">
                <span className="text-3xl md:text-6xl font-orbitron font-black text-transparent uppercase italic tracking-[0.2em]" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.5)' }}>
                  ESPORTS
                </span>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-white/30 to-transparent" />
              </div>
            </motion.div>

            <div className="mt-12 grid grid-cols-3 gap-8 md:gap-16 opacity-40">
               <div className="space-y-1">
                  <p className="text-[10px] font-black text-red-600">UNIT_01</p>
                  <p className="text-[10px] font-black tracking-widest uppercase">Precision</p>
               </div>
               <div className="space-y-1">
                  <p className="text-[10px] font-black text-red-600">UNIT_02</p>
                  <p className="text-[10px] font-black tracking-widest uppercase">Velocity</p>
               </div>
               <div className="space-y-1">
                  <p className="text-[10px] font-black text-red-600">UNIT_03</p>
                  <p className="text-[10px] font-black tracking-widest uppercase">Cohesion</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- 5. NEWS TICKER --- */}
      <div className="absolute bottom-0 left-0 w-full h-14 bg-black/80 backdrop-blur-xl border-t border-white/10 z-[70] flex items-center overflow-hidden">
        <motion.div initial={{ x: "0%" }} animate={{ x: "-50%" }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="flex whitespace-nowrap gap-20 items-center">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="text-[10px] md:text-xs font-black font-orbitron tracking-[0.3em] text-white/40 uppercase">{tickerText}</span>
          ))}
        </motion.div>
        <div className="absolute left-0 top-0 h-full bg-white text-black flex items-center px-6 z-10 font-bold italic">
          <span className="text-[10px] font-orbitron uppercase tracking-widest">Live_Intel</span>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-[60] bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
      <div className="absolute inset-0 pointer-events-none z-[20] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default Hero;