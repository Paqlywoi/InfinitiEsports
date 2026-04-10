import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Infinity, Terminal, Activity, Users, Target, Rocket, Crown, Crosshair } from 'lucide-react';

const coreValues = [
  { id: 1, title: "Integrity", label: "ETHICS_V1", desc: "Victory without honor is a system failure. No shortcuts, only pure discipline.", icon: <Shield size={32} />, color: "from-blue-600/20" },
  { id: 2, title: "Innovation", label: "META_STRAT", desc: "Decoding new metas. We don't follow the game; we rewrite the rules.", icon: <Zap size={32} />, color: "from-red-600/20" },
  { id: 3, title: "Growth", label: "LIMITLESS", desc: "#ZeroToInfiniti. Progress is a non-stop loop. Every defeat is a data point.", icon: <Infinity size={32} />, color: "from-zinc-600/20" },
  { id: 4, title: "Synergy", label: "COHESION", desc: "Synchronized operations. 5 players, 1 mind. Unit cohesion is our greatest weapon.", icon: <Users size={32} />, color: "from-purple-600/20" },
  { id: 5, title: "Resilience", label: "STABILITY", desc: "High-pressure stability. We don't tilt; we recalibrate and execute.", icon: <Target size={32} />, color: "from-green-600/20" },
  { id: 6, title: "Ambition", label: "OBJECTIVE", desc: "Dominating the digital frontier. Setting the standard for the next generation.", icon: <Rocket size={32} />, color: "from-orange-600/20" },
  { id: 7, title: "Legacy", label: "HERITAGE", desc: "Building a dynasty that transcends time. Our name will be etched in history.", icon: <Crown size={32} />, color: "from-yellow-600/20" },
  { id: 8, title: "Precision", label: "EXECUTION", desc: "Split-second decision making. Every move is calculated, every shot intentional.", icon: <Crosshair size={32} />, color: "from-cyan-600/20" }
];

// Duplicate data untuk loop tanpa putus
const duplicatedValues = [...coreValues, ...coreValues];

const Values = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="values" className="py-24 md:py-48 bg-[#020202] relative overflow-hidden border-y border-white/5 font-mono">
      
      {/* CSS Animation Injection */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
          .pause-scroll {
            animation-play-state: paused !important;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-20 text-left">
        <div className="flex items-center gap-3 mb-4">
          <Activity size={14} className="text-red-600 animate-pulse" />
          <span className="text-[10px] tracking-[0.6em] text-white/30 uppercase font-black italic">System_Core_DNA</span>
        </div>
        <h2 className="text-6xl md:text-9xl font-orbitron font-[1000] text-white uppercase italic tracking-tighter leading-none">
          CORE <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>VALUES</span>
        </h2>
        <p className="mt-6 text-[9px] text-white/20 tracking-[0.5em] uppercase italic"> [ Tap_Or_Hover_To_Lock_Data ] </p>
      </div>

      {/* --- CAROUSEL CONTAINER --- */}
      <div 
        className="relative w-full overflow-hidden group cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={() => setIsPaused(!isPaused)}
      >
        {/* Fade Gradient kiri kanan */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020202] to-transparent z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020202] to-transparent z-20" />

        <div 
          className={`flex gap-6 py-4 w-max animate-scroll ${isPaused ? 'pause-scroll' : ''}`}
        >
          {duplicatedValues.map((v, index) => (
            <div
              key={`${v.id}-${index}`}
              className="relative h-[480px] w-[280px] md:w-[350px] shrink-0 p-10 bg-white/[0.02] border border-white/10 group-hover:border-white/20 transition-all duration-700 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Label */}
              <div className="flex justify-between items-start opacity-40 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-2">
                  <Terminal size={12} />
                  <span className="text-[9px] font-black tracking-widest">{v.label}</span>
                </div>
                <span className="text-[9px] font-black italic">0{v.id}</span>
              </div>

              {/* Interaction Glow Layer */}
              <div className={`absolute inset-0 bg-gradient-to-b ${v.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>

              <div className="relative z-10 space-y-6">
                <div className="inline-block p-4 border border-white/10 bg-black group-hover:border-white group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500">
                  {v.icon}
                </div>
                
                <h3 className="text-4xl font-orbitron font-[900] text-white uppercase italic tracking-tighter leading-none">
                  {v.title}
                </h3>
                
                <div className="w-12 h-[2px] bg-red-600 group-hover:w-full transition-all duration-700"></div>

                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500 italic font-medium uppercase tracking-tight">
                  {v.desc}
                </p>
              </div>

              {/* Bottom Decorative Data */}
              <div className="relative z-10 pt-6 border-t border-white/5 flex justify-between items-end">
                <div className="text-left space-y-1">
                    <p className="text-[7px] text-white/20 uppercase tracking-widest">Status</p>
                    <p className="text-[9px] text-green-500 font-black uppercase">Active_Unit</p>
                </div>
                <div className="text-right space-y-1">
                    <p className="text-[7px] text-white/20 uppercase tracking-widest">Auth</p>
                    <p className="text-[9px] text-white/60 font-black uppercase">INF-00{v.id}</p>
                </div>
              </div>

              {/* Brutalist Borders */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/0 group-hover:border-white/20 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/0 group-hover:border-white/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 flex justify-between items-center opacity-10 font-orbitron text-[8px] tracking-[0.5em] uppercase">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping"></div>
            <span>System_Scanning_Live_Data</span>
        </div>
        <span>INFINITI_REBORN // 2026</span>
      </div>
    </section>
  );
};

export default Values;