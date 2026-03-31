import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Sponsors = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSponsor, setActiveSponsor] = useState(null); // State untuk mobile tap

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const sponsors = [
    { id: 1, name: "MUHAIM", logo: "/Muhaim.png" },
    { id: 2, name: "NiceTry Store", logo: "/NiceTryLogo.png" },
  ];

  return (
    <div id="partners" className="relative w-full bg-[#050505] border-y border-white/5 py-24 md:py-32 overflow-hidden">
      
      {/* --- BACKGROUND TEXTURES --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 relative">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] tracking-[0.8em] text-white/20 uppercase font-black mb-4 font-rajdhani"
          >
            Backed_By // Trusted_Systems
          </motion.p>
          <motion.h3 
            className="text-4xl md:text-6xl font-orbitron font-black text-white uppercase italic tracking-tighter leading-none"
          >
            STRATEGIC <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>PARTNERS</span>
          </motion.h3>
        </div>

        {/* --- LOGO GRID --- */}
        <div className={`flex flex-wrap justify-center items-center ${isMobile ? 'gap-10' : 'gap-24 md:gap-32'} mb-24`}>
          {sponsors.map((s, index) => (
            <div key={s.id} className="flex flex-col items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                // --- FIX UNTUK MOBILE TAP ---
                onClick={() => {
                  if (isMobile) {
                    setActiveSponsor(activeSponsor === s.id ? null : s.id);
                  }
                }}
                className={`group relative flex items-center justify-center p-6 md:p-10 border bg-white/[0.01] transition-all duration-500 rounded-sm
                  ${activeSponsor === s.id ? 'border-white/40 bg-white/[0.05]' : 'border-white/5'}`}
              >
                <span className="absolute top-2 left-2 text-[6px] font-orbitron text-white/10 font-black tracking-widest">
                  SPNSR_V{s.id}
                </span>
                
                <img 
                  src={s.logo} 
                  alt={s.name} 
                  className={`${isMobile ? 'h-10' : 'h-14 md:h-16'} w-auto object-contain transition-all duration-700 ease-out 
                    ${isMobile && activeSponsor === s.id ? 'grayscale-0 scale-110' : 'grayscale group-hover:grayscale-0 group-hover:scale-110'} 
                    brightness-125`}
                />

                {/* Desktop Tooltip (Tetap guna Hover) */}
                {!isMobile && (
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-black px-4 py-1.5 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 pointer-events-none uppercase tracking-widest italic z-10 shadow-2xl font-orbitron">
                    {s.name}
                  </div>
                )}
              </motion.div>

              {/* Mobile Label (Keluar bila kena Tap) */}
              <AnimatePresence>
                {isMobile && activeSponsor === s.id && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-[10px] font-orbitron font-black text-white italic tracking-widest uppercase"
                  >
                    {s.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* --- BUTTON PARTNER --- */}
        <div className="flex justify-center">
          <motion.a 
            href="https://wa.me/60102141605?text=Hi%20Infiniti%20Esports!%20Kami%20berminat%20untuk%20menjadi%20strategic%20partner%20korang." 
            target="_blank"
            rel="noopener noreferrer"
            className={`${isMobile ? 'px-8 py-5' : 'px-14 py-6'} bg-white text-black font-orbitron font-black uppercase tracking-[0.4em] text-xs transition-all group flex items-center gap-4 relative overflow-hidden`}
          >
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
            <span className="relative z-10">Become_A_Partner</span>
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black opacity-20 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black opacity-20 group-hover:opacity-100"></div>
          </motion.a>
        </div>

      </div>
    </div>
  );
};

export default Sponsors;