import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Infinity, Terminal, Activity } from 'lucide-react';

const coreValues = [
  {
    id: 1,
    title: "Integrity",
    label: "ETHICS_V1.0",
    desc: "We uphold the highest standards of sportsmanship. A victory without honor is a system failure. No shortcuts, only discipline.",
    icon: <Shield size={28} />,
    color: "from-blue-600/30",
    glitch: "blue"
  },
  {
    id: 2,
    title: "Innovation",
    label: "META_STRAT_V2",
    desc: "Constantly decoding new metas and out-of-the-box strategies. We don't just follow the game; we rewrite the rules.",
    icon: <Zap size={28} />,
    color: "from-red-600/30",
    glitch: "red"
  },
  {
    id: 3,
    title: "Growth",
    label: "LIMITLESS_X",
    desc: "#ZeroToInfiniti. Progress is a non-stop loop. Every defeat is just a data point for a stronger version of us.",
    icon: <Infinity size={28} />,
    color: "from-zinc-600/30",
    glitch: "white"
  }
];

const Values = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <section id="values" className="py-24 md:py-40 bg-[#020202] relative overflow-hidden border-y border-white/5 font-mono">
      {/* --- ADVANCED BACKGROUND DECOR --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none"></div>
      
      {/* Neural Lines (Static UI Decor) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none hidden md:block">
        <svg width="100%" height="100%">
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <Activity size={14} className="text-red-600 animate-pulse" />
              <span className="text-[10px] tracking-[0.6em] text-white/30 uppercase font-black italic">System_Core_DNA</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-9xl font-orbitron font-black text-white uppercase italic tracking-tighter leading-none"
            >
              CORE <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>VALUES</span>
            </motion.h2>
          </div>
          <div className="max-w-xs text-right hidden md:block">
            <p className="text-[9px] text-white/20 uppercase tracking-[0.3em] leading-relaxed">
              Establishing principles for the next generation of competitive excellence. Status: [STABLE]
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4">
          {coreValues.map((v, index) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={!isMobile ? { scale: 1.02, rotateY: 5, rotateX: -5 } : {}}
              className="relative p-12 bg-white/[0.01] border border-white/5 hover:border-white/20 group transition-all duration-700 overflow-hidden"
            >
              {/* Animated HUD Corner Labels */}
              <div className="absolute top-4 left-4 flex gap-2 opacity-20 group-hover:opacity-100 transition-opacity">
                <Terminal size={10} />
                <span className="text-[8px] font-black tracking-widest">{v.label}</span>
              </div>

              {/* Interaction Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${v.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>

              <div className="relative z-10 pt-6">
                {/* ICON BOX - Glitch Effect on Hover */}
                <div className="mb-10 relative inline-block">
                  <div className="absolute -inset-2 bg-white/5 blur-xl group-hover:bg-white/10 transition-all rounded-full"></div>
                  <motion.div 
                    whileHover={{ x: [-1, 2, -1], y: [1, -1, 1] }}
                    transition={{ repeat: Infinity, duration: 0.1 }}
                    className="relative p-5 border border-white/10 bg-black group-hover:border-white transition-all duration-500"
                  >
                    {v.icon}
                  </motion.div>
                </div>
                
                <h3 className="text-4xl font-orbitron font-black text-white mb-6 uppercase italic tracking-tighter leading-none flex items-end gap-2">
                  {v.title}
                  <span className="w-2 h-2 bg-red-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </h3>
                
                <p className="text-white/40 text-sm md:text-base leading-relaxed group-hover:text-white/80 transition-colors duration-500 font-sans italic font-medium uppercase tracking-tight">
                  {v.desc}
                </p>
              </div>

              {/* Bottom Right ID Decor */}
              <div className="absolute bottom-4 right-4 opacity-5 group-hover:opacity-20 transition-opacity flex items-baseline gap-1">
                <span className="text-[10px]">VER:</span>
                <span className="text-2xl font-black italic">{v.id}</span>
              </div>

              {/* Brutalist Corner Border Fix */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/0 group-hover:border-white transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/0 group-hover:border-white transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER DECOR */}
      <div className="absolute bottom-10 right-10 opacity-5 font-orbitron text-[8px] tracking-[1em] uppercase select-none pointer-events-none">
        Authentic_Identity_Confirmed // 2026
      </div>
    </section>
  );
};

export default Values;