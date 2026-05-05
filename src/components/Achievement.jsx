import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, LayoutGrid, Terminal } from 'lucide-react';

const achievements = [
  { 
    id: 1, 
    title: 'Champion', 
    tournament: 'Synotic Titan Scrim', 
    year: '2021', 
    icon: <Trophy />, 
    code: 'RE-01', 
    color: 'text-yellow-500' 
  },
  { 
    id: 2, 
    title: 'Runner Up', 
    tournament: 'Gerko Games', 
    year: '2022', 
    icon: <Award />, 
    code: 'RE-02', 
    color: 'text-zinc-300' 
  },
  { 
    id: 3, 
    title: 'Top 4', 
    tournament: 'Fast Tournament By Cosmo', 
    year: '2025', 
    icon: <LayoutGrid />, 
    code: 'RE-03', 
    color: 'text-blue-400' 
  },
];

const Achievement = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <section id="achievement" className="py-24 md:py-32 bg-[#080808] relative overflow-hidden">
      {/* --- BACKGROUND HUD --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header HUD Style */}
        <div className="mb-20 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-5xl md:text-8xl font-orbitron font-black text-white uppercase italic tracking-tighter leading-none relative">
              VICTORY <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>VAULT</span>
              <span className="absolute -right-12 top-0 text-[10px] font-orbitron text-white/20 tracking-widest hidden md:block uppercase italic">
                /// Archive_A1
              </span>
            </h2>
          </motion.div>
          <p className="text-white/20 mt-6 tracking-[0.8em] uppercase text-[10px] font-black font-mono">
            Records // Competitive_Integrity_Check: PASS
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={!isMobile ? { y: -12, backgroundColor: 'rgba(255,255,255,0.04)' } : {}}
              className="relative group p-10 bg-white/[0.02] border border-white/5 rounded-sm flex flex-col items-center text-center overflow-hidden transition-all duration-500 shadow-2xl"
            >
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none"></div>

              {/* Unique ID Tag */}
              <div className="absolute top-4 left-4 text-[8px] font-mono text-white/10 font-black tracking-widest uppercase flex items-center gap-2">
                <Terminal size={10} /> {item.code}
              </div>

              {/* Icon Container */}
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative p-6 rounded-sm bg-white/[0.03] border border-white/10 group-hover:border-white/40 transition-all duration-500 backdrop-blur-sm shadow-2xl">
                  {React.cloneElement(item.icon, { 
                    size: isMobile ? 32 : 44,
                    className: `${item.color} group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]` 
                  })}
                </div>
              </div>

              {/* Year Badge */}
              <span className="px-3 py-1 bg-white/5 text-white/30 text-[9px] font-black tracking-[0.4em] uppercase mb-4 font-mono border border-white/5 italic">
                {item.year}
              </span>

              {/* Title & Tournament */}
              <h3 className="text-3xl font-orbitron font-black text-white mb-3 uppercase italic tracking-tighter leading-none group-hover:text-yellow-500 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-white/40 font-mono text-xs md:text-sm tracking-wide max-w-[220px] leading-tight group-hover:text-white/60 transition-colors uppercase">
                {item.tournament}
              </p>

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-white transition-colors duration-500"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10 group-hover:border-white transition-colors duration-500"></div>

              {/* Bottom Animated Bar */}
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-20"
                initial={{ x: '-100%' }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3, 
                  ease: "linear",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Text */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-5 font-orbitron text-[8px] tracking-[2em] uppercase whitespace-nowrap hidden md:block select-none">
        End_Of_Transmission // Infiniti_Archives
      </div>
    </section>
  );
};

export default Achievement;