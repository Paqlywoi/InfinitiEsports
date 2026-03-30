import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const eras = [
  { 
    year: '2021', 
    logo: '/OldInfiniti1.png', 
    title: 'Zoo Esports', 
    version: 'V1.0_GENESIS',
    desc: 'The genesis. It all began with a tight-knit circle of friends fueled by a pure passion for MLBB.' 
  },
  { 
    year: '2022', 
    logo: '/OldInfiniti2.png', 
    title: 'Infiniti Esports', 
    version: 'V2.0_EVOLVE',
    desc: 'The evolution. Rebranded to Infiniti Esports, marking our transition into a structured competitive entity.' 
  },
  { 
    year: '2026', 
    logo: '/InfinitiLogo.png', 
    title: 'Infiniti Reborn', 
    version: 'V3.0_ELITE',
    desc: 'The peak. A complete identity overhaul, radiating a fiercer and more professional presence in the scene.' 
  },
];

const Timeline = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <section id="timeline" className="py-24 md:py-32 bg-[#080808] overflow-hidden border-t border-white/5 relative">
      
      {/* --- BACKGROUND HUD --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header HUD Style */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="relative">
            <div className="absolute -left-6 top-0 h-full w-[2px] bg-white opacity-20"></div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-orbitron font-black text-white uppercase italic tracking-tighter leading-none"
            >
              LEGACY <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>TIMELINE</span>
            </motion.h2>
            <p className="text-[10px] font-rajdhani font-black text-white/20 tracking-[0.5em] mt-4 uppercase italic">
              Chronological_Data // Unit_Progression
            </p>
          </div>
          
          <div className="hidden md:block text-[8px] font-orbitron text-white/10 tracking-[1em] uppercase">
            System_Scan: Verified_History
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {eras.map((era, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={!isMobile ? { y: -12 } : {}}
              className="group relative p-10 bg-white/[0.02] border border-white/5 rounded-sm transition-all duration-500 overflow-hidden"
            >
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none"></div>

              {/* Background Year HUD Style */}
              <div className={`font-orbitron font-black absolute -top-4 -right-2 transition-all duration-700 pointer-events-none select-none italic
                ${isMobile ? 'text-6xl text-white/[0.03]' : 'text-8xl text-white/[0.02] group-hover:text-white/[0.05] group-hover:-translate-x-4'}`}
              >
                {era.year}
              </div>

              {/* Vertical Label */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[7px] font-orbitron text-white/10 tracking-[1.5em] [writing-mode:vertical-lr] uppercase">
                {era.version}
              </div>
              
              <div className="relative z-10 text-left pl-4">
                <div className="relative w-20 h-20 mb-10">
                  <div className="absolute -inset-2 border border-white/5 rounded-full animate-[spin_10s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src={era.logo} 
                    alt={era.title}
                    className={`w-full h-full object-contain transition-all duration-500 relative z-10
                      ${isMobile ? 'grayscale-0' : 'grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]'}`}
                  />
                </div>

                <h3 className="text-2xl font-orbitron font-black text-white mb-4 uppercase tracking-tighter italic leading-none group-hover:text-white transition-colors">
                  {era.title}
                </h3>
                
                <p className={`font-rajdhani text-base leading-relaxed transition-all duration-500
                  ${isMobile ? 'text-white/60' : 'text-white/30 group-hover:text-white/70'}`}
                >
                  {era.desc}
                </p>
              </div>
              
              {/* Brutalist Corner Decor */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10 group-hover:border-white transition-colors duration-500"></div>
              
              {/* Animated Progress Bar */}
              <div className={`absolute bottom-0 left-0 h-[2px] bg-white transition-transform duration-700 w-full origin-left
                ${isMobile ? 'scale-x-100 opacity-20' : 'scale-x-0 group-hover:scale-x-100'}`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Bottom HUD Stream */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] py-4 pointer-events-none">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-20 text-white font-orbitron text-sm font-black italic tracking-[2em]"
        >
          <span>LEGACY_CORE_LOG</span>
          <span>UNIT_REBORN_2026</span>
          <span>SYSTEM_STABLE</span>
          <span>ESTABLISHED_2021</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;