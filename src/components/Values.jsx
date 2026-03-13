import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Infinity } from 'lucide-react';

const Values = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const coreValues = [
    {
      id: 1,
      title: "Integrity",
      label: "ETHICS_V1",
      desc: "We uphold the highest standards of sportsmanship and discipline. A victory without honor is not the Infiniti way.",
      icon: <Shield size={32} />,
      color: "from-blue-500/20"
    },
    {
      id: 2,
      title: "Innovation",
      label: "STRAT_V2",
      desc: "Constantly seeking new metas and out-of-the-box strategies. We don't follow trends; we set them.",
      icon: <Zap size={32} />,
      color: "from-purple-500/20"
    },
    {
      id: 3,
      title: "Growth",
      label: "LIMITLESS",
      desc: "#ZeroToInfiniti. There are no limits to our progress. Every setback is a stepping stone to the peak.",
      icon: <Infinity size={32} />,
      color: "from-red-500/20"
    }
  ];

  return (
    <div id="values" className="py-24 md:py-32 bg-[#080808] relative overflow-hidden border-y border-white/5">
      {/* --- BACKGROUND TEXTURES --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] brightness-50 pointer-events-none"></div>
      
      {/* Floating HUD Background */}
      <div className="absolute top-20 left-10 opacity-5 font-orbitron text-[8px] tracking-[2em] uppercase hidden md:block">
        DNA_MAPPING // CORE_PRINCIPLES
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 md:mb-24 text-left relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            className="h-[2px] bg-white mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.8em] text-white/20 uppercase font-black mb-4 font-rajdhani"
          >
            Our DNA
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-orbitron font-black text-white uppercase italic tracking-tighter"
          >
            CORE <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>VALUES</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {coreValues.map((v, index) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={!isMobile ? { y: -12, scale: 1.02 } : {}}
              className="relative p-10 bg-white/[0.02] border border-white/5 rounded-sm group transition-all duration-500 overflow-hidden"
            >
              {/* Scanline Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-10 pointer-events-none"></div>

              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${v.color} to-transparent transition-opacity duration-700 ${isMobile ? 'opacity-30' : 'opacity-0 group-hover:opacity-100'}`}></div>

              <div className="relative z-10 text-left">
                {/* HUD Sticker Label */}
                <div className="mb-8 flex justify-between items-start">
                  <div className="p-4 bg-white text-black group-hover:bg-transparent group-hover:text-white border border-white transition-all duration-500">
                    {v.icon}
                  </div>
                  <span className="text-[8px] font-orbitron text-white/20 font-black tracking-widest">{v.label}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-orbitron font-black text-white mb-6 uppercase italic tracking-wider leading-none">
                  {v.title}
                </h3>
                
                <p className={`font-rajdhani leading-relaxed transition-colors text-base font-medium
                  ${isMobile ? 'text-white/60' : 'text-white/30 group-hover:text-white/80'}`}>
                  {v.desc}
                </p>
              </div>

              {/* Decorative Corner Borders */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-white transition-colors duration-500"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10 group-hover:border-white transition-colors duration-500"></div>

              {/* Large Outline Number */}
              <div 
                className="absolute -bottom-6 -right-6 text-9xl font-black text-transparent select-none opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 font-orbitron"
                style={{ WebkitTextStroke: '2px white' }}
              >
                {v.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;