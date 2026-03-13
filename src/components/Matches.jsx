import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const matchData = {
  upcoming: [
    { id: 1, vs: "Madfox Chaos", tournament: "MAL Qualifier S5", date: "14 MAR", time: "8:00 PM" }
  ],
  results: [
    { id: 2, vs: "Volt Esport", score: "0 - 2", status: "LOSS", event: "Friendly" },
    { id: 4, vs: "Red Liquid", score: "0 - 2", status: "LOSS", event: "Friendly" },
    { id: 5, vs: "RRQ Kaishi", score: "2 - 0", status: "WIN", event: "Friendly" },
    { id: 6, vs: "UiTM Pulau Pinang", score: "1 - 0", status: "WIN", event: "Friendly" },
    { id: 7, vs: "Estupido Familia", score: "2 - 0", status: "WIN", event: "Friendly" },
    { id: 8, vs: "Hydra Mystic", score: "2 - 0", status: "WIN", event: "Friendly" },
    { id: 9, vs: "Volt Esport", score: "2 - 1", status: "WIN", event: "Friendly" }
  ]
};

const Matches = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <div id="matches" className="w-full max-w-6xl mx-auto px-6 py-24 md:py-32 relative">
      {/* Background Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none"></div>

      {/* Header Section */}
      <div className="mb-20 text-left">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-10 w-[2px] bg-white"></div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] tracking-[0.8em] text-white/20 uppercase font-black font-rajdhani"
          >
            Combat Log
          </motion.p>
        </div>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-orbitron font-black text-white uppercase italic tracking-tighter leading-none"
        >
          MATCH <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>CENTER</span>
        </motion.h2>
      </div>

      {/* UPCOMING MATCHES */}
      <div className="mb-24 relative">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
          <h3 className="text-white/40 text-[10px] tracking-[0.5em] uppercase font-black font-rajdhani">Next Operations</h3>
        </div>

        {matchData.upcoming.map(m => (
          <motion.div 
            key={m.id} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white/[0.02] border border-white/10 p-8 md:p-12 flex flex-col md:flex-row justify-between items-center group overflow-hidden rounded-sm"
          >
            {/* Shimmer Effect */}
            <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none"
            />

            <div className="relative z-10 text-center md:text-left mb-8 md:mb-0">
              <p className="text-[10px] font-black text-white/20 tracking-[0.4em] font-rajdhani mb-4 uppercase">/// {m.tournament}</p>
              <h4 className="text-4xl md:text-6xl font-orbitron font-black uppercase tracking-tighter text-white">
                INFINITI <span className="text-white/20 italic text-2xl md:text-3xl mx-2">VS</span> {m.vs}
              </h4>
            </div>

            <div className="relative z-10">
              <div className="bg-white text-black px-10 py-5 font-orbitron font-black uppercase tracking-widest text-sm shadow-[8px_8px_0px_rgba(255,255,255,0.1)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300">
                {m.date} // {m.time}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PREVIOUS RESULTS */}
      <div className="relative">
        <h3 className="text-white/40 text-[10px] tracking-[0.5em] uppercase mb-10 font-black font-rajdhani text-left">Recent Mission Logs</h3>
        
        <div className="grid gap-3">
          {matchData.results.map((r, index) => (
            <motion.div 
              key={r.id} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/[0.01] border border-white/5 p-6 flex justify-between items-center group hover:bg-white/[0.03] hover:border-white/20 transition-all rounded-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12">
                <span className="text-white/20 text-[9px] uppercase font-black tracking-widest font-orbitron w-20">[{r.event}]</span>
                <span className="font-orbitron font-black text-lg md:text-xl tracking-tight uppercase text-white group-hover:italic transition-all">
                  VS {r.vs}
                </span>
              </div>
              
              <div className="flex items-center gap-4 md:gap-8">
                <span className="text-2xl md:text-3xl font-orbitron font-black tracking-tighter text-white/80">{r.score}</span>
                <div className={`text-[9px] px-5 py-2 font-black tracking-[0.2em] rounded-sm border uppercase
                  ${r.status === 'WIN' 
                    ? 'bg-green-500 text-black border-green-500' 
                    : 'bg-transparent text-red-500 border-red-500/50'
                  }`}>
                  {r.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative HUD */}
      <div className="absolute top-1/2 -right-20 opacity-5 font-orbitron text-[8px] tracking-[2em] uppercase [writing-mode:vertical-lr] hidden md:block">
        Combat_History_Protocol // Verified
      </div>
    </div>
  );
};

export default Matches;