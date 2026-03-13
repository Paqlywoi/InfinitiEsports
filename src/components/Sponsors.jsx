import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check device size
  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const sponsors = [
    { id: 1, name: "MUHAIM", logo: "/MuhaimLogo.png" },
    { id: 2, name: "NiceTry Store", logo: "/NiceTryLogo.png" },
  ];

  return (
    <div id="partners" className="relative w-full bg-[#080808] border-y border-white/5 py-24 md:py-32 overflow-hidden">
      
      {/* --- GEN-Z BACKGROUND TEXTURES --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section HUD Style */}
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '40px' }}
            className="h-[2px] bg-white mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.8em] text-white/20 uppercase font-black mb-4 font-rajdhani"
          >
            Backed_By // Trusted_Systems
          </motion.p>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-orbitron font-black text-white uppercase italic tracking-tighter leading-none"
          >
            STRATEGIC <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>PARTNERS</span>
          </motion.h3>
        </div>

        {/* --- CONTAINER UTAMA --- */}
        <div className={`flex flex-col items-center ${isMobile ? 'gap-16' : 'gap-24'}`}>
          
          {/* 1. Logos Row (Cyber Glass Style) */}
          <div className={`flex flex-wrap justify-center items-center ${isMobile ? 'gap-12' : 'gap-24 md:gap-32'}`}>
            {sponsors.map((s, index) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex items-center justify-center p-6 md:p-10 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/20 transition-all duration-500 rounded-sm"
              >
                {/* HUD Serial kat bucu logo */}
                <span className="absolute top-2 left-2 text-[6px] font-orbitron text-white/10 font-black">SPNSR_V{s.id}</span>
                
                <img 
                  src={s.logo} 
                  alt={s.name} 
                  className={`${isMobile ? 'h-10' : 'h-14 md:h-16'} w-auto object-contain transition-all duration-700 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-none grayscale brightness-125 group-hover:grayscale-0`}
                />

                {/* Tooltip Gen-Z Style */}
                {!isMobile && (
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-black px-4 py-1.5 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 pointer-events-none uppercase tracking-widest italic z-10 shadow-2xl font-orbitron">
                    {s.name}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* 2. Button Row (Brutalist CTA) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <motion.a 
              href="https://wa.me/60102141605?text=Hi%20Infiniti%20Esports!%20Kami%20berminat%20untuk%20menjadi%20strategic%20partner%20korang." 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={!isMobile ? { scale: 1.02 } : {}}
              className={`${isMobile ? 'px-8 py-5' : 'px-14 py-6'} bg-white text-black font-orbitron font-black uppercase tracking-[0.4em] text-xs transition-all cursor-none group flex items-center gap-4 relative overflow-hidden`}
            >
              {/* Shimmer Effect kat button */}
              <motion.div 
                animate={{ x: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.05] to-transparent pointer-events-none"
              />

              {/* Dot Hijau */}
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
              
              <span className="relative z-10 group-hover:tracking-[0.6em] transition-all duration-300">
                Become_A_Partner
              </span>

              {/* Corner Borders */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black opacity-20 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black opacity-20 group-hover:opacity-100 transition-opacity"></div>
            </motion.a>
            
            {/* Shadow Box Offset */}
            <div className="absolute top-2 left-2 w-full h-full border border-white/20 -z-10 group-hover:top-0 group-hover:left-0 transition-all"></div>
          </motion.div>

        </div>
      </div>

      {/* Footer HUD Stream */}
      <div className="absolute bottom-4 left-10 opacity-5 font-orbitron text-[8px] tracking-[1.5em] uppercase hidden md:block">
        LOG: Strategic_Collaboration // Initialized
      </div>
    </div>
  );
};

export default Sponsors;