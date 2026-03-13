import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target } from 'lucide-react';

const achievements = [
  { id: 1, title: 'Champion', tournament: 'Synotic Titan Scrim', year: '2021', icon: <Trophy className="text-yellow-500" /> },
  { id: 2, title: 'Runner Up', tournament: 'Gerko Games', year: '2022', icon: <Target className="text-zinc-400" /> },
  { id: 3, title: 'Top 4', tournament: 'Fast Tournament By Cosmo', year: '2025', icon: <Star className="text-blue-400" /> },
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
    <section id="achievement" className="py-24 md:py-32 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-16 text-white text-center italic uppercase tracking-tighter">
          OUR <span className="text-white/10">ACHIEVEMENT</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={!isMobile ? { y: -10 } : {}}
              transition={{ delay: index * 0.1 }}
              className="relative group p-8 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Glow Effect */}
              <div className={`absolute -top-10 -left-10 w-32 h-32 blur-3xl transition-colors duration-500 ${isMobile ? 'bg-white/10' : 'bg-white/5 group-hover:bg-white/10'}`}></div>
              
              <div className="mb-6 p-5 rounded-full bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 z-10">
                {React.cloneElement(item.icon, { size: isMobile ? 28 : 32 })}
              </div>

              <span className="text-white/30 text-[10px] font-bold tracking-[0.5em] uppercase mb-3 font-rajdhani z-10">
                {item.year}
              </span>
              <h3 className="text-2xl font-orbitron font-black text-white mb-2 uppercase italic tracking-wider z-10">
                {item.title}
              </h3>
              <p className="text-white/50 font-rajdhani text-base md:text-lg z-10">
                {item.tournament}
              </p>

              {/* Shimmer Line (The Fixed Part) */}
              <motion.div 
                // Kita gabungkan semua class dalam satu template literal sahaja
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-20 ${!isMobile ? 'group-hover:translate-x-[100%] transition-transform duration-1000' : ''}`}
                animate={isMobile ? { x: ['-100%', '100%'] } : {}}
                transition={isMobile ? { repeat: Infinity, duration: 3, ease: "linear" } : {}}
                style={!isMobile ? { transform: 'translateX(-100%)' } : {}}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;