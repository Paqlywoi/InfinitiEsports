import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const matchData = {
  // Pindahkan data dari sini ke 'results' bila match dah habis 
   // if have match [{id: 1, vs: "Madfox Chaos", tournament: "MAL QUalifier S2" , date: '14 MAR', time: "8:PM" }]
   // if not have match upcoming: [],
upcoming: [],

  results: [
    { id: 9, vs: "Mega Autotech", score: "1 - 2", status: "LOSS", event: "Friendly" },
    { id: 8, vs: "Madfox Chaos", score: "0 - 1", status: "LOSS", event: "MAL Qualifier S5" },
    { id: 7, vs: "Volt Esport", score: "0 - 2", status: "LOSS", event: "Friendly" },
    { id: 6, vs: "Red Liquid", score: "0 - 2", status: "LOSS", event: "Friendly" },
    { id: 5, vs: "RRQ Kaishi", score: "2 - 0", status: "WIN", event: "Friendly" },
    { id: 4, vs: "Wakil UiTM Pulau Pinang", score: "1 - 0", status: "WIN", event: "Friendly" },
    { id: 3, vs: "Estupido Familia", score: "2 - 0", status: "WIN", event: "Friendly" },
    { id: 2, vs: "Hydra Mystic", score: "2 - 0", status: "WIN", event: "Friendly" },
    { id: 1, vs: "Volt Esport", score: "2 - 1", status: "WIN", event: "Friendly" }
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
    <div id="matches" className="w-full max-w-6xl mx-auto px-6 py-24 md:py-32 relative overflow-hidden">
      
      {/* Background HUD Decor */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none"></div>

      {/* Header Section */}
      <div className="mb-16 md:mb-24 text-left relative z-10">  
        <div className="flex items-center gap-4 mb-4">
          <div className="h-10 w-[2px] bg-white opacity-40"></div>
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
          className="text-5xl md:text-8xl font-orbitron font-black text-white uppercase italic tracking-tighter leading-none"
        >
          MATCH <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>CENTER</span>
        </motion.h2>
      </div>

      {/* --- UPCOMING MATCHES --- */}
      <div className="mb-20 md:mb-24 relative z-10">
        <div className="flex items-center gap-3 mb-8 text-left">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-ping shadow-[0_0_10px_#ff0000]"></div>
          <h3 className="text-white/40 text-[10px] tracking-[0.5em] uppercase font-black font-rajdhani italic">Next Operations</h3>
        </div>

        {matchData.upcoming.length > 0 ? (
          matchData.upcoming.map(m => (
            <motion.div 
              key={m.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-white/[0.02] border border-white/10 p-6 md:p-10 flex flex-col lg:flex-row justify-between items-center group overflow-hidden rounded-sm gap-6 md:gap-8"
            >
              <motion.div 
                animate={{ x: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none"
              />

              <div className="relative z-10 text-center lg:text-left min-w-0 flex-1 w-full">
                <p className="text-[9px] md:text-[10px] font-black text-white/20 tracking-[0.4em] font-rajdhani mb-3 uppercase italic">/// {m.tournament}</p>
                
                {/* REPAIRED: Font scaling & layout fix */}
                <h4 className="font-orbitron font-black uppercase tracking-tighter text-white leading-none flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[6vw] sm:text-[4vw] lg:text-4xl xl:text-5xl">
                  <span className="whitespace-nowrap font-black">INFINITI <span className="text-white/80">ESPORTS</span></span>
                  <span className="text-white/80 italic text-[3vw] sm:text-[2vw] lg:text-xl uppercase">VS</span> 
                  <span className="whitespace-nowrap">{m.vs}</span>
                </h4>
              </div>

              {/* DATE BOX - FIXED POSITION */}
              <div className="relative z-10 w-full lg:w-auto flex-shrink-0 flex justify-center lg:justify-end">
                <div className="bg-white text-black px-6 py-4 md:px-8 md:py-4 font-orbitron font-black uppercase tracking-widest text-[10px] md:text-xs shadow-[4px_4px_0px_rgba(255,255,255,0.1)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300 whitespace-nowrap">
                  {m.date} // {m.time}
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="border border-white/5 bg-white/[0.01] p-12 text-center rounded-sm"
          >
            <p className="text-white/20 font-orbitron text-[10px] tracking-[1em] uppercase italic">
              No Active Operations // Standby Mode
            </p>
          </motion.div>
        )}
      </div>

      {/* --- PREVIOUS RESULTS --- */}
      <div className="relative z-10">
        <h3 className="text-white/40 text-[10px] tracking-[0.5em] uppercase mb-10 font-black font-rajdhani text-left italic">Recent Mission Logs</h3>
        
        <div className="grid gap-4">
          {matchData.results.map((r, index) => (
            <motion.div 
              key={r.id} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/[0.01] border border-white/5 p-4 md:p-6 flex justify-between items-center group hover:bg-white/[0.03] hover:border-white/20 transition-all rounded-sm gap-4"
            >
              <div className="flex flex-col gap-1 min-w-0 flex-1 text-left">
                <span className="text-white/20 text-[7px] md:text-[9px] uppercase font-black tracking-widest font-orbitron truncate">
                  [{r.event}]
                </span>
                <span className="font-orbitron font-black text-sm md:text-xl tracking-tight uppercase text-white group-hover:italic transition-all truncate">
                  VS {r.vs}
                </span>
              </div>
              
              <div className="flex items-center gap-3 md:gap-8 flex-shrink-0">
                <span className="text-lg md:text-3xl font-orbitron font-black tracking-tighter text-white/80 whitespace-nowrap">
                  {r.score}
                </span>
                <div className={`text-[8px] md:text-[9px] px-3 md:px-5 py-1.5 md:py-2 font-black tracking-[0.1em] md:tracking-[0.2em] rounded-sm border uppercase transition-colors
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
      <div className="absolute top-1/2 -right-16 opacity-5 font-orbitron text-[8px] tracking-[2em] uppercase [writing-mode:vertical-lr] hidden lg:block">
        Combat_History_Protocol // Verified
      </div>
    </div>
  );
};

export default Matches;