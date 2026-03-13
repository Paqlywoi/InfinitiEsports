import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const players = [
  { id: 1, name: 'SOMALI', role: 'EXP LANER', signature: 'Ruby', topHeroes: ['Ruby', 'Terizla', 'Paquito'], quote: "Discipline is the key to victory.", img: '/SomaliRaw.png' },
  { id: 2, name: 'RULZ', role: 'JUNGLER', signature: 'Hayabusa', topHeroes: ['Hayabusa', 'Ling', 'Lancelot'], quote: "Speed is nothing without precision.", img: '/RulzRaw.png' },
  { id: 3, name: 'PAKLY', role: 'MID LANER', signature: 'Zuxhin', topHeroes: ['Zuxhin', 'Valentina', 'Vexana'], quote: "Control the mid, control the game.", img: '/PaklyRaw.png' },
  { id: 4, name: 'STARLIGHTEX', role: 'GOLD LANER', signature: 'Claude', topHeroes: ['Claude', 'Karrie', 'Moskov'], quote: "Scaling is a lifestyle.", img: '/StarRaw.png' },
  { id: 5, name: 'IKZN', role: 'ROAMER', signature: 'Grock', topHeroes: ['Grock', 'Tigreal', 'Atlas'], quote: "I am the shield of the team.", img: '/IkznRaw.png' },
];

const PlayerCard = ({ player }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <motion.div 
      className="relative h-[450px] w-full perspective-1000 md:cursor-none group"
      whileHover={!isMobile ? "flipped" : ""}
      onClick={() => isMobile && setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={isMobile ? (isFlipped ? "flipped" : "front") : undefined}
        variants={{
          front: { rotateY: 0 },
          flipped: { rotateY: 180 }
        }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 120, damping: 20 }}
      >
        {/* --- FRONT SIDE --- */}
        <div className="absolute inset-0 backface-hidden z-20">
          <div className="relative h-full bg-white/[0.03] border border-white/10 rounded-sm overflow-hidden group">
            {/* Grain & Scanline Effect */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-30"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20 z-30"></div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 z-10"></div>
            
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
              {player.img ? (
                <img src={player.img} alt={player.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
              ) : (
                <User size={60} className="text-white/5" />
              )}
            </div>

            <div className="absolute bottom-0 left-0 p-6 z-20 w-full text-left">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <p className="text-white/40 text-[8px] tracking-[0.4em] font-black font-rajdhani uppercase">{player.role}</p>
              </div>
              <h3 className="text-2xl font-orbitron font-black text-white leading-none uppercase italic tracking-tighter">{player.name}</h3>
              
              {isMobile && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-[8px] text-white/20 uppercase tracking-[0.3em] font-black italic">Tap to Inspect // 0{player.id}</span>
                </div>
              )}
            </div>
            
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/20 group-hover:border-white transition-colors"></div>
          </div>
        </div>

        {/* --- BACK SIDE (BRUTALIST WHITE) --- */}
        <div 
          className="absolute inset-0 backface-hidden z-10"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="h-full bg-white text-black rounded-sm p-6 md:p-8 flex flex-col justify-between border-2 border-white shadow-2xl text-left relative overflow-hidden">
            {/* Background ID Number */}
            <div className="absolute top-0 right-0 p-4 opacity-10 font-orbitron text-[40px] font-black select-none">0{player.id}</div>
            
            <div className="relative z-10 w-full">
              {/* FIXED NAME CONTAINER FOR LONG NAMES */}
              <div className="mb-6 border-b-4 border-black pb-2 w-full">
                <h3 className={`font-orbitron font-black leading-none uppercase italic tracking-tighter break-words
                  ${player.name.length > 10 ? 'text-lg md:text-xl' : 'text-2xl md:text-3xl'}
                `}>
                  {player.name}
                </h3>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div>
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/40 mb-3 font-rajdhani border-l-2 border-black pl-2 italic">Heroes</p>
                  <div className="flex flex-col gap-1.5 md:gap-2">
                    {player.topHeroes.map((hero, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-[10px] font-black font-orbitron text-black/30">0{i + 1}</span>
                        <span className="text-[10px] md:text-[11px] font-black font-sans uppercase tracking-wider">{hero}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/40 mb-3 font-rajdhani border-l-2 border-black pl-2 italic">Motto</p>
                  <p className="text-[10px] md:text-xs font-bold italic leading-tight font-sans uppercase max-w-[170px]">
                    "{player.quote}"
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-auto border-t border-black/10">
              <p className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.4em] text-center opacity-40 font-rajdhani">
                Infiniti_Unit // MLBB Division
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Roster = () => {
  return (
    <section id="lineup" className="py-24 md:py-32 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-left relative">
          <div className="absolute -left-10 top-0 h-full w-[2px] bg-white opacity-20 hidden md:block"></div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-orbitron font-black text-white tracking-tighter uppercase italic leading-none"
          >
            ACTIVE <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>LINEUP</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/20 mt-6 tracking-[0.8em] uppercase text-[10px] font-black font-rajdhani"
          >
            System // Selected_Personnel_2026
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roster;