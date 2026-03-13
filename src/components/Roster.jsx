import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const players = [
  { id: 1, name: 'SOMALI', role: 'EXP LANER', signature: 'Ruby', topHeroes: ['Ruby', 'Terizla', 'Paquito'], quote: "Disiplin adalah kunci kemenangan.", img: '/SomaliRaw.png' },
  { id: 2, name: 'RULZ', role: 'JUNGLER', signature: 'Hayabusa', topHeroes: ['Hayabusa', 'Ling', 'Lancelot'], quote: "Laju bukan segalanya, ketepatan yang utama.", img: '/RulzRaw.png' },
  { id: 3, name: 'PAKLY', role: 'MID LANER', signature: 'Zuxhin', topHeroes: ['Zuxhin', 'Valentina', 'Vexana'], quote: "Control the mid, control the game.", img: '/PaklyRaw.png' },
  { id: 4, name: 'STARLIGHTEX', role: 'GOLD LANER', signature: 'Claude', topHeroes: ['Claude', 'Karrie', 'Moskov'], quote: "Scaling is a lifestyle.", img: '/StarRaw.png' },
  { id: 5, name: 'IKZN', role: 'ROAMER', signature: 'Grock', topHeroes: ['Grock', 'Tigreal', 'Atlas'], quote: "I am the shield of the team.", img: '/IkznRaw.png' },
];

const PlayerCard = ({ player }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Logic check device size
  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <motion.div 
      className="relative h-[420px] w-full perspective-1000 md:cursor-none"
      // PC: Auto-flip on hover | Mobile: Manual tap
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
        transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* --- FRONT SIDE --- */}
        <div className="absolute inset-0 backface-hidden z-20">
          <div className="relative h-full bg-zinc-900/40 border border-white/10 rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 z-10"></div>
            
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-800">
              {player.img ? (
                <img src={player.img} alt={player.name} className="w-full h-full object-cover" />
              ) : (
                <User size={60} className="text-white/10" />
              )}
            </div>

            <div className="absolute bottom-0 left-0 p-5 z-20 w-full text-left">
              <p className="text-white/40 text-[9px] tracking-[0.4em] mb-1 font-bold font-rajdhani">{player.role}</p>
              <h3 className="text-xl md:text-2xl font-orbitron font-black text-white leading-tight uppercase italic">{player.name}</h3>
              
              {/* Tap Indicator khusus Mobile - Berkelip halus */}
              {isMobile && (
                <motion.p 
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-[8px] text-white/20 mt-2 uppercase tracking-[0.2em] italic font-rajdhani"
                >
                  Tap to see stats
                </motion.p>
              )}
            </div>
            
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-30 bg-[length:100%_2px,3px_100%] opacity-30"></div>
          </div>
        </div>

        {/* --- BACK SIDE --- */}
        <div 
          className="absolute inset-0 backface-hidden z-10"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="h-full bg-white text-black rounded-2xl p-6 flex flex-col justify-between border-2 border-white shadow-2xl text-left">
            <div>
              <div className="mb-6 border-b-2 border-black pb-2">
                <h3 className="text-xl font-orbitron font-black leading-none uppercase tracking-tighter truncate italic">
                  {player.name}
                </h3>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-black/40 mb-2 font-rajdhani">Top 3 Heroes</p>
                  <div className="flex flex-col gap-1.5">
                    {player.topHeroes.map((hero, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-[11px] font-bold font-sans uppercase">{i + 1}. {hero}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-black/40 mb-2 font-rajdhani">Signature Quote</p>
                  <p className="text-xs font-medium italic leading-relaxed font-sans">"{player.quote}"</p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-auto">
              <p className="text-[7px] font-black uppercase tracking-[0.4em] text-center opacity-30 font-rajdhani">Infiniti Esports MY • 2026</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Roster = () => {
  return (
    <section id="lineup" className="py-24 md:py-32 bg-[#121212] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-orbitron font-black text-white tracking-tighter uppercase italic text-left"
          >
            OFFICIAL <span className="text-white/10">LINEUP</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/20 mt-4 tracking-[0.5em] uppercase text-[10px] font-rajdhani text-left"
          >
            #ZeroToInfiniti • MLBB Division
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