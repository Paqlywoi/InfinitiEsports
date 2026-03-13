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
    <div id="partners" className="w-full bg-white/[0.02] border-y border-white/5 py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] tracking-[0.8em] text-white/20 uppercase font-bold mb-3 font-rajdhani"
          >
            Backed By
          </motion.p>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-orbitron font-black text-white/40 uppercase tracking-tighter"
          >
            Our Strategic <span className="text-white">Partners</span>
          </motion.h3>
          <div className="w-12 h-1 bg-white/10 mx-auto mt-6"></div>
        </div>

        {/* --- CONTAINER UTAMA (FLEX COL) --- */}
        <div className={`flex flex-col items-center ${isMobile ? 'gap-12' : 'gap-20'}`}>
          
          {/* 1. Logos Row */}
          <div className={`flex flex-wrap justify-center items-center ${isMobile ? 'gap-10' : 'gap-16 md:gap-28'}`}>
            {sponsors.map((s, index) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <img 
                  src={s.logo} 
                  alt={s.name} 
                  className={`${isMobile ? 'h-8' : 'h-10 md:h-14'} w-auto object-contain transition-all duration-500 ease-out group-hover:scale-110 cursor-none`}
                />
                {/* Tooltip cuma function kat PC */}
                {!isMobile && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[8px] font-black px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest whitespace-nowrap z-10 shadow-xl font-rajdhani">
                    {s.name}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* 2. Button Row (Duduk Bawah) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a 
              href="https://wa.me/60102141605?text=Hi%20Infiniti%20Esports!%20Kami%20berminat%20untuk%20menjadi%20strategic%20partner%20korang." 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={!isMobile ? { scale: 1.05, borderColor: "rgba(255,255,255,0.5)" } : {}}
              className={`${isMobile ? 'px-6 py-4' : 'px-10 py-5'} border border-dashed border-white/20 rounded-xl transition-all cursor-none group flex items-center gap-4 bg-white/[0.01] hover:bg-white/[0.03]`}
            >
              {/* Dot Hijau - On terus kalau kat mobile */}
              <div className={`w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]`}></div>
              
              <span className={`text-[10px] uppercase tracking-[0.4em] font-rajdhani transition-colors ${isMobile ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>
                Become a Partner
              </span>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Sponsors;