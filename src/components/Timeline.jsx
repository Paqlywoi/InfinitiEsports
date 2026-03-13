import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const eras = [
  { 
    year: '2021', 
    logo: '/OldInfiniti1.png', 
    title: 'Zoo Esports', 
    desc: 'The genesis. It all began with a tight-knit circle of friends fueled by a pure passion for MLBB.' 
  },
  { 
    year: '2023', 
    logo: '/OldInfiniti2.png', 
    title: 'Infiniti Esports', 
    desc: 'The evolution. Rebranded to Infiniti Esports, marking our transition into a structured competitive entity.' 
  },
  { 
    year: '2026', 
    logo: '/InfinitiLogo.png', 
    title: 'Infiniti Reborn', 
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
    <section id="timeline" className="py-24 md:py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-orbitron font-black mb-16 md:mb-20 text-white tracking-widest uppercase italic"
        >
          LEGACY <span className="text-white/20">TIMELINE</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {eras.map((era, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={!isMobile ? { y: -10 } : {}}
              className="group relative p-8 bg-zinc-900/50 border border-white/5 rounded-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Background Year */}
              <div className={`font-black absolute -top-10 -left-4 transition-colors pointer-events-none select-none font-orbitron
                ${isMobile ? 'text-5xl text-white/10' : 'text-8xl text-white/5 group-hover:text-white/10'}`}
              >
                {era.year}
              </div>
              
              <div className="relative z-10 text-left">
                <img 
                  src={era.logo} 
                  alt={era.title}
                  className={`w-16 h-16 md:w-20 md:h-20 object-contain mb-6 transition-all duration-500
                    ${isMobile ? 'grayscale-0 scale-100' : 'grayscale group-hover:grayscale-0 group-hover:scale-110'}`}
                />
                <h3 className="text-xl md:text-2xl font-orbitron font-black text-white mb-3 uppercase tracking-wider italic">
                  {era.title}
                </h3>
                <p className={`font-rajdhani text-base md:text-lg leading-relaxed transition-colors
                  ${isMobile ? 'text-zinc-400' : 'text-zinc-500 group-hover:text-zinc-300'}`}
                >
                  {era.desc}
                </p>
              </div>
              
              {/* Bottom Border Indicator */}
              <div className={`absolute bottom-0 left-0 h-1 bg-white transition-transform duration-500 w-full rounded-b-2xl
                ${isMobile ? 'scale-x-100 opacity-20' : 'scale-x-0 group-hover:scale-x-100'}`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;