import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, History, BarChart3, Activity, Target, ShieldAlert } from 'lucide-react';

const matchData = {
  upcoming: [],
  results: [
    { id: 13, vs: "Red Liquid", score: "0 - 2", status: "LOSS", event: "Friendly" },
    { id: 12, vs: "KRUK", score: "2 - 0", status: "WIN", event: "Friendly" },
    { id: 11, vs: "Jebat Boti", score: "2 - 1", status: "WIN", event: "Friendly" },
    { id: 10, vs: "Kroni K902", score: "2 - 0", status: "WIN", event: "Friendly" },
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
  const [activeTab, setActiveTab] = useState('history');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Calculate Win/Loss Stats
  const totalMatches = matchData.results.length;
  const wins = matchData.results.filter(m => m.status === 'WIN').length;
  const losses = matchData.results.filter(m => m.status === 'LOSS').length;
  const winRate = ((wins / totalMatches) * 100).toFixed(1);

  return (
    <div id="matches" className="w-full max-w-6xl mx-auto px-6 py-24 md:py-32 relative overflow-hidden font-mono">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none"></div>

      {/* Header Section */}
      <div className="mb-16 text-left relative z-10">  
        <div className="flex items-center gap-4 mb-4">
          <Activity size={14} className="text-red-600 animate-pulse" />
          <p className="text-[10px] tracking-[0.8em] text-white/20 uppercase font-black">Tactical_Archive</p>
        </div>
        <h2 className="text-5xl md:text-8xl font-orbitron font-black text-white uppercase italic tracking-tighter leading-none">
          MATCH <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>CENTER</span>
        </h2>
      </div>

      {/* --- TAB SWITCHER --- */}
      <div className="flex gap-2 mb-12 border-b border-white/5 pb-6">
        <button 
          onClick={() => setActiveTab('history')}
          className={`flex items-center gap-3 px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all border ${activeTab === 'history' ? 'bg-white text-black border-white' : 'bg-transparent text-white/40 border-white/10'}`}
        >
          <History size={14} /> [ 01. History ]
        </button>
        <button 
          onClick={() => setActiveTab('stats')}
          className={`flex items-center gap-3 px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all border ${activeTab === 'stats' ? 'bg-white text-black border-white shadow-lg shadow-white/5' : 'bg-transparent text-white/40 border-white/10'}`}
        >
          <BarChart3 size={14} /> [ 02. Analytics ]
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'history' ? (
          <motion.div 
            key="history"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {/* UPCOMING */}
            <div className="mb-16">
              <h3 className="text-white/40 text-[10px] tracking-[0.5em] uppercase font-black mb-8 italic text-left flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping" />
                Active_Operations
              </h3>
              {matchData.upcoming.length > 0 ? (
                matchData.upcoming.map(m => (
                  <div key={m.id} className="relative bg-white/[0.02] border border-white/10 p-6 md:p-10 flex flex-col lg:flex-row justify-between items-center group overflow-hidden rounded-sm gap-6">
                    <div className="text-center lg:text-left flex-1 w-full min-w-0">
                      <p className="text-[9px] font-black text-white/20 tracking-[0.4em] mb-3 uppercase italic">/// {m.tournament}</p>
                      <h4 className="font-orbitron font-black uppercase tracking-tighter text-white leading-none text-2xl md:text-4xl">
                        INFINITI VS {m.vs}
                      </h4>
                    </div>
                    <div className="bg-white text-black px-6 py-3 font-orbitron font-black uppercase text-[10px] whitespace-nowrap">
                      {m.date} // {m.time}
                    </div>
                  </div>
                ))
              ) : (
                <div className="border border-dashed border-white/10 p-10 text-center text-white/20 text-[9px] tracking-[0.8em] uppercase italic">
                  Standby Mode // No Live Ops
                </div>
              )}
            </div>

            {/* RESULTS */}
            <div className="grid gap-3">
              <h3 className="text-white/40 text-[10px] tracking-[0.5em] uppercase font-black mb-4 italic text-left">Previous_Logs</h3>
              {matchData.results.map((r, index) => (
                <motion.div 
                  key={r.id} 
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="bg-white/[0.01] border border-white/5 p-4 flex justify-between items-center group hover:border-white/20 transition-all rounded-sm"
                >
                  <div className="flex flex-col gap-1 text-left min-w-0 flex-1">
                    <span className="text-white/20 text-[8px] uppercase font-black truncate">[{r.event}]</span>
                    <span className="font-orbitron font-black text-sm md:text-lg uppercase text-white truncate group-hover:text-red-500 transition-colors">VS {r.vs}</span>
                  </div>
                  <div className="flex items-center gap-4 md:gap-8 flex-shrink-0">
                    <span className="text-lg md:text-2xl font-orbitron font-black text-white/80">{r.score}</span>
                    <div className={`text-[8px] px-3 py-1.5 font-black tracking-widest rounded-sm border ${r.status === 'WIN' ? 'bg-green-500 text-black border-green-500' : 'text-red-500 border-red-500/30'}`}>
                      {r.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="stats"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-12"
          >
            {/* BIG STAT BAR */}
            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-16 rounded-sm text-left">
              <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-4">
                <div>
                  <h4 className="text-white/30 text-[10px] font-black uppercase tracking-[0.5em] mb-2 font-orbitron">Overall_Combat_Winrate</h4>
                  <p className="text-6xl md:text-9xl font-orbitron font-[1000] text-white italic leading-none">{winRate}<span className="text-2xl md:text-4xl text-red-600">%</span></p>
                </div>
                <div className="flex gap-12 border-l border-white/10 pl-8">
                   <div className="text-center">
                     <p className="text-[8px] text-white/20 uppercase font-black mb-1">Victory</p>
                     <p className="text-3xl text-green-500 font-black">{wins}</p>
                   </div>
                   <div className="text-center">
                     <p className="text-[8px] text-white/20 uppercase font-black mb-1">Defeat</p>
                     <p className="text-3xl text-red-600 font-black">{losses}</p>
                   </div>
                </div>
              </div>

              {/* Progress Bar Container */}
              <div className="space-y-4">
                <div className="h-6 md:h-10 w-full bg-white/5 border border-white/5 relative overflow-hidden flex">
                  {/* Wins Bar */}
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(wins / totalMatches) * 100}%` }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="h-full bg-green-500 relative group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[size:20px_20px] animate-[pulse_3s_infinite]" />
                  </motion.div>
                  {/* Losses Bar */}
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(losses / totalMatches) * 100}%` }}
                    transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                    className="h-full bg-red-600"
                  />
                </div>
                <div className="flex justify-between text-[8px] font-black uppercase tracking-[0.4em] text-white/20 italic">
                  <span>Victory_Protocol_Active</span>
                  <span>System_Analysis_Complete</span>
                </div>
              </div>
            </div>

            {/* ADDITIONAL CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/[0.01] border border-white/5 p-8 text-left">
                 <Target size={24} className="text-red-600 mb-6" />
                 <h5 className="text-white font-orbitron font-black uppercase text-xl mb-2 italic">Strike_Accuracy</h5>
                 <p className="text-white/40 text-[10px] leading-relaxed uppercase tracking-widest">
                   Based on friendly and mal qualifier logs, the unit maintains high performance during the mid-season phase.
                 </p>
              </div>
              <div className="bg-white/[0.01] border border-white/5 p-8 text-left">
                 <ShieldAlert size={24} className="text-red-600 mb-6" />
                 <h5 className="text-white font-orbitron font-black uppercase text-xl mb-2 italic">Threat_Response</h5>
                 <p className="text-white/40 text-[10px] leading-relaxed uppercase tracking-widest">
                   Losses identified primarily in cross-region engagements. Tactical recalibration initialized for upcoming operations.
                 </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom HUD Decor */}
      <div className="absolute bottom-10 right-10 opacity-5 font-orbitron text-[8px] tracking-[2em] uppercase hidden lg:block select-none pointer-events-none">
        Combat_Stats // Unit_Ready
      </div>
    </div>
  );
};

export default Matches;