import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, History, Info } from 'lucide-react';

const players = [
  { id: 1, name: 'SOMALI', role: 'EXP LANER', img: '/SomaliRaw.png', bio: "Initiated into Infiniti Esports in 2022 under the O2 division. After demonstrating elite resilience, he was drafted into the main lineup for the Synotic Titan Scrim victory. As of 2026, he officially commands the EXP Lane for the Primary Roster.", angle: 0 },
  { id: 2, name: 'RULZ', role: 'JUNGLER', img: '/RulzRaw.png', bio: "Launched his career with 9Kage Esports before a brief hiatus. Re-emerged in 2022 to join Infiniti. Following stints with Destined Revo and Synotic Titan, he made a high-profile return to Infiniti in 2025, solidifying his role as the team's core engine.", angle: 72 },
  { id: 3, name: 'PAKLY', role: 'MID LANER', img: '/PaklyRaw.png', bio: "A veteran who debuted with Frostz before joining Zoo Esports (Infiniti's legacy name) in 2021. After rotations through Infiniti O2, Destined Revo, Synotic Titan and Skibidi Academy, he returned to the fold in 2025 to reclaim the Mid Lane throne.", angle: 144 },
  { id: 4, name: 'STARLIGHTEX', role: 'GOLD LANER', img: '/StarRaw.png', bio: "Hailing from 9Kage Esports, he joined Zoo Esports in 2021. A pillar of loyalty, he survived every era of transformation within the organization. In 2026, his long-standing dedication finally secured him the starting slot in the Elite Roster.", angle: 216 },
  { id: 5, name: 'IKZN', role: 'ROAMER', img: '/IkznRaw.png', bio: "An original founder of the Infiniti lineup since the Zoo Esports era. He holds the record for the most appearances in the main roster. After brief tactical deployments to Destined Revo and Synotic Titan, he returned home to lead the defensive front.", angle: 288 },
];

const VinylRoster = () => {
  const [activeId, setActiveId] = useState(1); // Default Somali

  return (
    <section className="min-h-screen bg-[#020202] text-white font-mono py-20 overflow-hidden relative flex items-center">
      
      {/* Background Decor */}
      <div className="absolute top-10 left-10 opacity-10 hidden md:block">
        <p className="text-[10px] tracking-[1em]">PERSONNEL_DECODING_SYSTEM_v5.0</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT: DYNAMIC BIO REVEAL */}
        <div className="order-2 lg:order-1 min-h-[450px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <History size={16} className="text-white/30 animate-pulse" />
                <span className="text-[10px] tracking-[0.5em] text-white/40 uppercase font-black">Archive_Retrieval</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-orbitron font-black italic tracking-tighter leading-none mb-2">
                {players.find(p => p.id === activeId).name}
              </h2>
              <p className="text-sm tracking-[1em] text-white/20 mb-8 uppercase italic font-bold">
                {players.find(p => p.id === activeId).role}
              </p>
              
              <div className="relative group max-w-xl">
                <div className="absolute -inset-1 bg-white/10 rounded-sm blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                <div className="relative bg-white/[0.03] border border-white/10 p-6 md:p-10 backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-4 opacity-30">
                    <Terminal size={12} />
                    <span className="text-[9px] tracking-widest uppercase">Personnel_Log // ACCESS_GRANTED</span>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-white/80 font-sans italic font-medium uppercase tracking-tight">
                    {players.find(p => p.id === activeId).bio}
                  </p>
                </div>
              </div>

              {/* Mobile Hint */}
              <div className="lg:hidden mt-8 flex items-center gap-2 text-white/20 animate-bounce">
                <Info size={14} />
                <span className="text-[9px] tracking-widest uppercase italic">Tap disc pieces to switch</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT: THE MULTI-PIECE VINYL */}
        <div className="order-1 lg:order-2 relative flex justify-center items-center h-[400px] md:h-auto">
          <div className="relative w-[320px] h-[320px] md:w-[550px] md:h-[550px]">
            
            {/* Base Vinyl Grooves */}
            <div className="absolute inset-0 rounded-full bg-[#080808] border-[10px] border-[#111] shadow-[0_0_80px_rgba(0,0,0,0.8)]">
                <div className="absolute inset-0 rounded-full opacity-30 bg-[repeating-radial-gradient(circle,transparent,transparent_2px,#222_3px,transparent_4px)]"></div>
            </div>

            {/* THE PIECES (WEDGES) */}
            {players.map((player) => {
              const isActive = activeId === player.id;
              return (
                <motion.div
                  key={player.id}
                  onMouseEnter={() => setActiveId(player.id)}
                  onClick={() => setActiveId(player.id)}
                  className="absolute inset-0 cursor-pointer"
                  initial={false}
                  animate={{ 
                    scale: isActive ? 1.08 : 1,
                    zIndex: isActive ? 50 : 10
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos((player.angle - 36) * Math.PI / 180)}% ${50 + 50 * Math.sin((player.angle - 36) * Math.PI / 180)}%, ${50 + 50 * Math.cos((player.angle + 36) * Math.PI / 180)}% ${50 + 50 * Math.sin((player.angle + 36) * Math.PI / 180)}%)`
                  }}
                >
                  {/* Image within the wedge */}
                  <div className="w-full h-full relative group">
                    <img 
                      src={player.img} 
                      className={`w-full h-full object-cover grayscale transition-all duration-500 ${isActive ? 'grayscale-0 brightness-110' : 'opacity-40 hover:opacity-100'}`}
                      alt={player.name}
                    />
                    {/* Hover Glow Effect */}
                    {isActive && (
                      <div className="absolute inset-0 bg-white/10 pointer-events-none shadow-[inset_0_0_50px_rgba(255,255,255,0.2)]" />
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Center Label (Branding) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-32 md:h-32 bg-black border-4 border-[#151515] rounded-full z-[60] flex items-center justify-center shadow-2xl">
              <span className="text-[10px] font-orbitron font-black text-white/40 tracking-widest text-center leading-none">
                INF <br/> CORE
              </span>
              <div className="absolute w-4 h-4 bg-[#020202] rounded-full"></div>
            </div>

            {/* Orbiting Names (Dynamic) */}
            {players.map((p, i) => (
              <div 
                key={p.id}
                className={`absolute text-[8px] font-black tracking-[0.5em] uppercase transition-all duration-500 ${activeId === p.id ? 'text-white opacity-100' : 'text-white/10'}`}
                style={{ transform: `rotate(${p.angle}deg) translateY(-220px) rotate(-${p.angle}deg)` }}
              >
                {p.name}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Decorative Tone Arm */}
      <div className="hidden lg:block absolute top-1/2 right-10 -translate-y-1/2 w-40 h-[2px] bg-white/10 origin-right rotate-[15deg]">
         <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-10 bg-zinc-800 border border-white/20"></div>
      </div>
    </section>
  );
};

export default VinylRoster;