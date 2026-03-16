import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const players = [
  { id: 1, name: 'SOMALI', role: 'EXP LANER', signature: 'Ruby', topHeroes: ['Ruby', 'Terizla', 'Paquito'], quote: "Discipline is the key to victory.", img: '/SomaliRaw.png', stats: { mechanics: 85, mapSense: 90, aggression: 95, teamwork: 80, pool: 88 } },
  { id: 2, name: 'RULZ', role: 'JUNGLER', signature: 'Hayabusa', topHeroes: ['Hayabusa', 'Ling', 'Lancelot'], quote: "Speed is nothing without precision.", img: '/RulzRaw.png', stats: { mechanics: 98, mapSense: 85, aggression: 92, teamwork: 75, pool: 80 } },
  { id: 3, name: 'PAKLY', role: 'MID LANER', signature: 'Zuxhin', topHeroes: ['Zuxhin', 'Valentina', 'Vexana'], quote: "Control the mid, control the game.", img: '/PaklyRaw.png', stats: { mechanics: 88, mapSense: 95, aggression: 70, teamwork: 98, pool: 90 } },
  { id: 4, name: 'STARLIGHTEX', role: 'GOLD LANER', signature: 'Claude', topHeroes: ['Claude', 'Karrie', 'Moskov'], quote: "Scaling is a lifestyle.", img: '/StarRaw.png', stats: { mechanics: 92, mapSense: 80, aggression: 85, teamwork: 82, pool: 78 } },
  { id: 5, name: 'IKZN', role: 'ROAMER', signature: 'Grock', topHeroes: ['Grock', 'Tigreal', 'Atlas'], quote: "I am the shield of the team.", img: '/IkznRaw.png', stats: { mechanics: 80, mapSense: 98, aggression: 88, teamwork: 95, pool: 85 } },
];

// --- COMPONENT RADAR CHART (SVG) ---
const StatRadar = ({ stats }) => {
  const points = [
    { label: 'MECH', val: stats.mechanics },
    { label: 'MAP', val: stats.mapSense },
    { label: 'AGR', val: stats.aggression },
    { label: 'TEAM', val: stats.teamwork },
    { label: 'POOL', val: stats.pool },
  ];

  const size = 100;
  const center = size / 2;
  const radius = size * 0.4;

  const getCoordinates = (index, value) => {
    const angle = (Math.PI * 2) / points.length * index - Math.PI / 2;
    const x = center + (radius * value / 100) * Math.cos(angle);
    const y = center + (radius * value / 100) * Math.sin(angle);
    return `${x},${y}`;
  };

  const polygonPoints = points.map((p, i) => getCoordinates(i, p.val)).join(' ');

  return (
    <div className="relative w-full flex justify-center py-2">
      <svg width="140" height="140" viewBox="0 0 100 100" className="drop-shadow-[0_0_8px_rgba(0,0,0,0.1)]">
        {/* Background Hexagon */}
        {[20, 40, 60, 80, 100].map((level) => (
          <polygon
            key={level}
            points={points.map((_, i) => getCoordinates(i, level)).join(' ')}
            fill="none"
            stroke="black"
            strokeWidth="0.2"
            strokeDasharray="1,1"
            opacity="0.2"
          />
        ))}
        {/* Data Shape */}
        <motion.polygon
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          points={polygonPoints}
          fill="black"
          className="transition-all duration-1000"
        />
        {/* Labels */}
        {points.map((p, i) => {
          const coords = getCoordinates(i, 115);
          const [x, y] = coords.split(',');
          return (
            <text key={i} x={x} y={y} fontSize="5" fontWeight="900" textAnchor="middle" className="font-orbitron fill-black/40">
              {p.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

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
      className="relative h-[500px] w-full perspective-1000 group"
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
          <div className="relative h-full bg-white/[0.03] border border-white/10 rounded-sm overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-30 pointer-events-none"></div>
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
                <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_#fff]"></div>
                <p className="text-white/40 text-[8px] tracking-[0.4em] font-black font-rajdhani uppercase">{player.role}</p>
              </div>
              <h3 className="text-2xl font-orbitron font-black text-white leading-none uppercase italic tracking-tighter">{player.name}</h3>
            </div>
          </div>
        </div>

        {/* --- BACK SIDE (WITH RADAR CHART) --- */}
        <div className="absolute inset-0 backface-hidden z-10" style={{ transform: 'rotateY(180deg)' }}>
          <div className="h-full bg-white text-black rounded-sm p-6 flex flex-col justify-between border-2 border-white shadow-2xl text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 font-orbitron text-[50px] font-black select-none">0{player.id}</div>
            
            <div className="relative z-10 w-full">
              <div className="mb-4 border-b-4 border-black pb-2">
                <h3 className="text-2xl font-orbitron font-black leading-none uppercase italic tracking-tighter text-black">
                  {player.name}
                </h3>
              </div>

              {/* STATS RADAR SECTION */}
              <div className="bg-zinc-100/50 rounded-sm mb-4">
                <p className="text-[8px] font-black uppercase tracking-widest text-black/40 pt-3 pl-3 font-rajdhani italic">Performance_Analysis</p>
                <StatRadar stats={player.stats} />
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-black/40 mb-2 font-rajdhani border-l-2 border-black pl-2 italic">Signature</p>
                  <p className="text-xs font-black font-orbitron uppercase tracking-wider">{player.signature}</p>
                </div>

                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-black/40 mb-2 font-rajdhani border-l-2 border-black pl-2 italic">Tactical Quote</p>
                  <p className="text-[10px] font-bold italic leading-tight font-sans uppercase">"{player.quote}"</p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-auto border-t border-black/10">
              <p className="text-[7px] font-black uppercase tracking-[0.4em] text-center opacity-40 font-rajdhani">
                Unit_Verified // DNA_Match_Found
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
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-orbitron font-black text-white tracking-tighter uppercase italic leading-none"
          >
            THE <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>PERSONNEL</span>
          </motion.h2>
          <p className="text-white/20 mt-4 tracking-[1em] uppercase text-[9px] font-black font-rajdhani">Classified // Elite_Division</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roster;