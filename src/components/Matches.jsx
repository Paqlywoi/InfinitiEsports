import React from 'react';
import { motion } from 'framer-motion';

const matchData = {
  upcoming: [
    { id: 1, vs: "Madfox Chaos", tournament: "MAL Qualifier S5", date: "14 MAR", time: "8:00 PM" }
  ],
  results: [
    { id: 2, vs: "Volt Esport", score: "0 - 2", status: "LOSS", event: "Friendly" },
    { id: 4, vs: "Red Liquid", score: "0 - 2", status: "LOSS", event: "Friendly" },
    { id: 5, vs: "RRQ Kaishi", score: "2 - 0", status: "WIN", event: "Friendly" },
    { id: 6, vs: "Wakil UiTM Pulau Pinang", score: "1 - 0", status: "WIN", event: "Friendly" },
    { id: 7, vs: "Estupido Familia", score: "2 - 0", status: "WIN", event: "Friendly" },
    { id: 8, vs: "Hydra Mystic", score: "2 - 0", status: "WIN", event: "Friendly" },
    { id: 9, vs: "Volt Esport", score: "2 - 1", status: "WIN", event: "Friendly" }
  ]
};

const Matches = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-32">
      {/* Tajuk Section - Pakai Orbitron */}
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl md:text-5xl font-orbitron font-black mb-16 border-l-8 border-white pl-6 uppercase tracking-tighter"
      >
        Match <span className="text-white/20">Center</span>
      </motion.h2>

      {/* UPCOMING MATCHES */}
      <div className="mb-20">
        <h3 className="text-white/30 text-[10px] tracking-[0.5em] uppercase mb-8 font-bold font-rajdhani">Next Battle</h3>
        {matchData.upcoming.map(m => (
          <motion.div 
            key={m.id} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative bg-white/5 border border-white/10 p-10 flex flex-col md:flex-row justify-between items-center group overflow-hidden"
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

            <div className="relative z-10 text-center md:text-left">
              <p className="text-xs font-bold text-white/40 tracking-widest font-rajdhani mb-2">{m.tournament}</p>
              <h4 className="text-3xl md:text-5xl font-orbitron font-black uppercase tracking-tight">
                Infiniti <span className="text-white/20 italic font-sans text-2xl md:text-3xl">vs</span> {m.vs}
              </h4>
            </div>
            <div className="relative z-10 mt-8 md:mt-0 px-10 py-4 bg-white text-black font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform cursor-default shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              {m.date} | {m.time}
            </div>
          </motion.div>
        ))}
      </div>

      {/* PREVIOUS RESULTS */}
      <div>
        <h3 className="text-white/30 text-[10px] tracking-[0.5em] uppercase mb-8 font-bold font-rajdhani">Recent History</h3>
        <div className="grid gap-4">
          {matchData.results.map((r, index) => (
            <motion.div 
              key={r.id} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-zinc-900/40 border border-white/5 p-5 flex justify-between items-center group hover:border-white/20 transition-all rounded-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                <span className="text-white/20 text-[10px] uppercase font-bold tracking-widest w-20">{r.event}</span>
                <span className="font-orbitron font-bold text-lg tracking-wide uppercase group-hover:text-white transition-colors">VS {r.vs}</span>
              </div>
              
              <div className="flex items-center gap-6">
                <span className="text-xl font-black font-mono tracking-tighter">{r.score}</span>
                <span className={`text-[10px] px-4 py-1.5 font-black tracking-widest rounded-full ${
                  r.status === 'WIN' 
                    ? 'bg-green-500/10 text-green-500 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]' 
                    : 'bg-red-500/10 text-red-500 border border-red-500/20'
                }`}>
                  {r.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Matches;