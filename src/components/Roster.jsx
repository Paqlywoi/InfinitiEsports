import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, X, BarChart3, Target, Map as MapIcon, Flame, Users, History, FileText, ChevronRight } from 'lucide-react';

const players = [
  { id: 1, name: 'SOMALI', role: 'EXP LANER', signature: 'Ruby', topHeroes: ['Ruby', 'Alice', 'Gloo'], quote: "Discipline is the key to victory.", img: '/SomaliRaw.png', stats: { mechanics: 85, mapSense: 90, aggression: 95, teamwork: 80, pool: 88 }, lanePos: { top: '25%', left: '15%' }, heroStats: [{ name: 'Ruby', wr: '78%' }, { name: 'Alice', wr: '72%' }, { name: 'Gloo', wr: '65%' }], 
    heatPath: "M 10 10 L 40 10 L 40 40 L 10 40 Z M 25 25 L 35 35 L 50 50", heatColor: "#fbbf24",
    careerHistory: [{ year: '2021', team: 'infiniti Esports o2' }, { year: '2026', team: 'Infiniti Reborn' }]
  },
  { id: 2, name: 'RULZ', role: 'JUNGLER', signature: 'Hayabusa', topHeroes: ['Hayabusa', 'Ling', 'Yi Sun Shin'], quote: "Speed is nothing without precision.", img: '/RulzRaw.png', stats: { mechanics: 98, mapSense: 85, aggression: 92, teamwork: 75, pool: 80 }, lanePos: { top: '55%', left: '32%' }, heroStats: [{ name: 'Hayabusa', wr: '85%' }, { name: 'Ling', wr: '79%' }, { name: 'Yi Sun Shin', wr: '74%' }], 
    heatPath: "M 30 30 L 70 30 L 70 70 L 30 70 Z M 40 40 L 60 60 M 35 35 L 65 65", heatColor: "#3b82f6",
    careerHistory: [{ year: '2018/19', team: '9Kage Esports' }, { year: '2021', team: 'Infiniti Esports' }, { year: '2022', team: 'Akatsuki' }, { year: '2023', team: 'Dest Revo' }, { year: '2023', team: 'Synotic Titan' }, { year: '2024', team: 'Unknown' }, { year: '2025', team: 'Infiniti Esports' }, { year: '2023', team: 'Infiniti Reborn' }]
  },
  { id: 3, name: 'PAKLY', role: 'MID LANER', signature: 'Zuxhin', topHeroes: ['Zuxhin', 'Zetian', 'Lunox'], quote: "Control the mid, control the game.", img: '/PaklyRaw.png', stats: { mechanics: 88, mapSense: 95, aggression: 70, teamwork: 98, pool: 90 }, lanePos: { top: '50%', left: '50%' }, heroStats: [{ name: 'Zuxhin', wr: '75%' }, { name: 'Zetian', wr: '82%' }, { name: 'Lunox', wr: '70%' }], 
    heatPath: "M 10 10 L 90 90 M 20 80 L 80 20 M 40 40 L 60 40 L 60 60 L 40 60 Z", heatColor: "#ef4444",
    careerHistory: [{ year: '2018/19', team: 'Frostz' }, { year: '2019', team: 'Zoo Esports' }, { year: '2021', team: 'Infiniti Esports' }, { year: '2023', team: 'Dest Revo' }, { year: '2023', team: 'Synotic Titan' }, { year: '2024', team: 'Skibidi Academy' }, { year: '2025', team: 'Infiniti Esports' }, { year: '2026', team: 'Infiniti Reborn' } ]
  },
  { id: 4, name: 'STARLIGHTEX', role: 'GOLD LANER', signature: 'Claude', topHeroes: ['Claude', 'Karrie', 'Moskov'], quote: "Scaling is a lifestyle.", img: '/StarRaw.png', stats: { mechanics: 92, mapSense: 80, aggression: 85, teamwork: 82, pool: 78 }, lanePos: { top: '82%', left: '82%' }, heroStats: [{ name: 'Claude', wr: '80%' }, { name: 'Karrie', wr: '76%' }, { name: 'Moskov', wr: '73%' }], 
    heatPath: "M 60 60 L 90 60 L 90 90 L 60 90 Z M 75 75 L 50 50", heatColor: "#a855f7",
    careerHistory: [{ year: '2018/19', team: '9Kage Esports' }, { year: '2021', team: 'Infiniti Esports' }, { year: '2026', team: 'Infiniti Reborn' }]
  },
  { id: 5, name: 'IKZN', role: 'ROAMER', signature: 'Grock', topHeroes: ['Grock', 'Chou', 'Guin'], quote: "I am the shield of the team.", img: '/IkznRaw.png', stats: { mechanics: 80, mapSense: 98, aggression: 88, teamwork: 95, pool: 85 }, lanePos: { top: '65%', left: '75%' }, heroStats: [{ name: 'Grock', wr: '80%' }, { name: 'Chou', wr: '81%' }, { name: 'Guin', wr: '68%' }], 
    heatPath: "M 60 10 L 90 10 L 90 40 L 60 40 Z M 75 25 L 35 35 L 65 65", heatColor: "#22c55e",
    careerHistory: [{ year: '2018/19', team: '9Kage Esports' }, { year: '2019', team: 'Zoo Esports' }, { year: '2021', team: 'Infiniti Esports' }, { year: '2023', team: 'Dest Revo' }, { year: '2023', team: 'Synotic Titan' }, { year: '2024', team: 'Unknown' }, { year: '2025', team: 'Infiniti Esports' }, { year: '2026', team: 'Infiniti Reborn' }]
  },
  { id: 6, name: 'IMPOLOLO', role: 'GOLD LANER (SUB)', signature: 'Granger', topHeroes: ['Granger', 'Moskov', 'Claude'], quote: "Done is better than perfect.", img: '/ImpololoRaw.png', stats: { mechanics: 87, mapSense: 77, aggression: 81, teamwork: 83, pool: 75 }, isSub: true, heroStats: [{ name: 'Granger', wr: '70%' }, { name: 'Moskov', wr: '68%' }, { name: 'Claude', wr: '65%' }],
    careerHistory: [{ year: '2018/19', team: 'Frostz' }, { year: '2021', team: 'Infiniti Esports' }, { year: '2026', team: 'Infiniti Reborn' }]
  },
];

const StatRadar = ({ stats }) => {
  if (!stats) return null;
  const points = [{ label: 'MECH', val: stats.mechanics }, { label: 'MAP', val: stats.mapSense }, { label: 'AGR', val: stats.aggression }, { label: 'TEAM', val: stats.teamwork }, { label: 'POOL', val: stats.pool }];
  const size = 100; const center = size / 2; const radius = size * 0.4;
  const getCoordinates = (index, value) => {
    const angle = (Math.PI * 2) / points.length * index - Math.PI / 2;
    const x = center + (radius * value / 100) * Math.cos(angle);
    const y = center + (radius * value / 100) * Math.sin(angle);
    return `${x},${y}`;
  };
  return (
    <div className="relative w-full flex justify-center py-2 text-black">
      <svg width="140" height="140" viewBox="0 0 100 100">
        {[20, 40, 60, 80, 100].map((level) => (
          <polygon key={level} points={points.map((_, i) => getCoordinates(i, level)).join(' ')} fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1,1" opacity="0.2" />
        ))}
        <motion.polygon initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.8 }} points={points.map((p, i) => getCoordinates(i, p.val)).join(' ')} fill="currentColor" />
        {points.map((p, i) => {
          const [x, y] = getCoordinates(i, 115).split(',');
          return <text key={i} x={x} y={y} fontSize="5" fontWeight="900" textAnchor="middle" className="font-orbitron fill-current opacity-40">{p.label}</text>
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
    checkDevice(); window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative h-[500px] w-full perspective-1000 group" whileHover={!isMobile ? "flipped" : ""} onClick={() => isMobile && setIsFlipped(!isFlipped)}>
      <motion.div className="w-full h-full relative preserve-3d" animate={isMobile ? (isFlipped ? "flipped" : "front") : undefined} variants={{ front: { rotateY: 0 }, flipped: { rotateY: 180 } }} transition={{ duration: 0.7, type: 'spring', stiffness: 120, damping: 20 }}>
        <div className="absolute inset-0 backface-hidden z-20">
          <div className="relative h-full bg-white/[0.03] border border-white/10 rounded-sm overflow-hidden bg-[#111]">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              {player.img ? <img src={player.img} alt={player.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" /> : <User size={60} className="text-white/5" />}
            </div>
            <div className="absolute bottom-0 left-0 p-6 z-20 w-full text-left">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_#fff]"></div>
                <p className="text-white/40 text-[8px] tracking-[0.4em] font-black uppercase font-rajdhani">{player.role}</p>
              </div>
              <h3 className="text-2xl font-orbitron font-black text-white leading-none uppercase italic tracking-tighter">{player.name}</h3>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 backface-hidden z-10" style={{ transform: 'rotateY(180deg)' }}>
          <div className="h-full bg-white text-black rounded-sm p-6 flex flex-col justify-between border-2 border-white shadow-2xl text-left relative overflow-hidden">
            <h3 className="text-2xl font-orbitron font-black uppercase italic border-b-4 border-black pb-2 mb-4">{player.name}</h3>
            <div className="bg-zinc-100/50 rounded-sm mb-4"><StatRadar stats={player.stats} /></div>
            <div className="space-y-4">
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-black/40 mb-2 border-l-2 border-black pl-2 italic font-rajdhani">Signature</p>
                <p className="text-xs font-black font-orbitron uppercase">{player.heroStats ? player.heroStats[0].name : player.signature}</p>
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-black/40 mb-2 border-l-2 border-black pl-2 italic font-rajdhani">Tactical Quote</p>
                <p className="text-[10px] font-bold italic uppercase leading-tight font-sans">"{player.quote}"</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- FIX: NO-STRETCH INTEL CARD ---
const MiniIntelCard = ({ player, isMobile, onClose }) => {
  const [activeHero, setActiveHero] = useState(0);

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 touch-none">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/95 backdrop-blur-sm" />
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-[320px] h-fit max-h-[85vh] bg-[#0c0c0c] border border-white/20 p-6 rounded-sm shadow-2xl font-mono flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-red-600" />
          <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/5 rounded-full text-white/50"><X size={20}/></button>
          
          <div className="mb-4 text-left">
            <p className="text-red-500 text-[9px] font-black uppercase tracking-[0.3em] mb-1 font-orbitron">Intel_Recovered</p>
            <h5 className="text-white font-orbitron font-black text-2xl uppercase italic leading-none">{player.name}</h5>
          </div>

          <div className="space-y-6 overflow-y-auto pr-1">
            <div className="bg-white/[0.03] p-4 border border-white/5">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-white/30 text-[9px] font-black uppercase tracking-widest">Efficiency</span>
                <motion.span key={activeHero} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white font-orbitron font-black text-3xl">{player.heroStats[activeHero].wr}</motion.span>
              </div>
              <div className="h-1 bg-white/10 w-full rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: player.heroStats[activeHero].wr }} className="h-full bg-red-600 shadow-[0_0_10px_red]" />
              </div>
            </div>

            <div className="space-y-1.5 text-left">
              <p className="text-[8px] text-white/20 uppercase tracking-widest mb-2 font-black italic">// SELECT_UNIT</p>
              {player.heroStats.map((hero, idx) => (
                <button key={hero.name} onClick={() => setActiveHero(idx)} className={`w-full flex items-center justify-between px-4 py-3 border text-[10px] font-black transition-all ${activeHero === idx ? 'bg-white text-black border-white' : 'bg-white/5 border-white/5 text-white/40'}`}>
                  <span className="uppercase">{hero.name}</span>
                  {activeHero === idx && <Target size={14} />}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 text-center"><p className="text-[7px] text-white/10 uppercase tracking-[0.3em]">Unit_Data_Stream_v2.0</p></div>
        </motion.div>
      </div>
    );
  }

  // PC VERSION (UNCHANGED)
  const topVal = parseInt(player.lanePos?.top || 0);
  const leftVal = parseInt(player.lanePos?.left || 0);
  const verticalPos = topVal > 60 ? 'bottom-0' : 'top-0'; 
  const horizontalPos = leftVal > 50 ? 'right-full mr-4' : 'left-full ml-4';
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className={`absolute ${verticalPos} ${horizontalPos} w-56 bg-black/95 backdrop-blur-xl border border-white/20 p-4 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.8)] z-[100] text-left font-mono pointer-events-auto`} onClick={(e) => e.stopPropagation()}>
      <div className="mb-3 border-b border-white/10 pb-2 text-left">
        <span className="text-red-500 text-[8px] font-black uppercase tracking-widest block mb-1">Target_Acquired</span>
        <h5 className="text-white font-orbitron font-black text-base md:text-lg leading-none uppercase italic">{player.name}</h5>
      </div>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-end mb-1 text-left"><span className="text-white/30 text-[8px] font-black uppercase">Win_Rate</span><motion.span key={activeHero} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white font-orbitron font-black text-lg md:text-xl">{player.heroStats[activeHero].wr}</motion.span></div>
          <div className="h-1 bg-white/5 w-full"><motion.div initial={{ width: 0 }} animate={{ width: player.heroStats[activeHero].wr }} className="h-full bg-red-600 shadow-[0_0_8px_red]" /></div>
        </div>
        <div className="grid grid-cols-1 gap-1">
          {player.heroStats.map((hero, idx) => (
            <button key={hero.name} onMouseEnter={() => setActiveHero(idx)} className={`flex items-center justify-between px-2 py-1.5 border text-[8px] md:text-[9px] font-black transition-all ${activeHero === idx ? 'bg-white text-black border-white' : 'bg-white/5 border-white/5 text-white/40'}`}><span className="uppercase">{hero.name}</span>{activeHero === idx && <Target size={10} />}</button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TacticalMap = () => {
  const mainPlayers = players.filter(p => !p.isSub);
  const [activePlayer, setActivePlayer] = useState(null);
  const [viewMode, setViewMode] = useState('position'); 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice(); window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 font-mono text-white text-left">
          <div className="flex gap-2">
            <button onClick={() => { setViewMode('position'); setActivePlayer(null); }} className={`flex items-center gap-2 px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all border ${viewMode === 'position' ? 'bg-white text-black border-white' : 'bg-transparent text-white/40 border-white/10'}`}><MapIcon size={14} /> Position_View</button>
            <button onClick={() => { setViewMode('heatmap'); setActivePlayer(null); }} className={`flex items-center gap-2 px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all border ${viewMode === 'heatmap' ? 'bg-white text-black border-white shadow-lg shadow-white/5' : 'bg-transparent text-white/40 border-white/10'}`}><Flame size={14} /> Heat_Map</button>
          </div>
          <p className="text-[9px] text-white/20 font-black tracking-[0.4em] uppercase italic">{isMobile ? '[ TAP_UNIT_FOR_INTEL ]' : '[ HOVER_UNIT_FOR_INTEL ]'}</p>
        </div>

        <div className="relative aspect-square md:aspect-video w-full bg-black border border-white/10 rounded-sm shadow-2xl overflow-visible px-4">
          <div className="relative w-full h-full overflow-hidden rounded-sm">
             <img src="/MapML.jpg" className={`w-full h-full object-cover transition-all duration-1000 ${viewMode === 'heatmap' ? 'brightness-[0.4] contrast-125 saturate-150' : 'opacity-40 grayscale'}`} alt="map" />
             <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                <AnimatePresence>
                   {viewMode === 'heatmap' && mainPlayers.map((p) => {
                     const isHighlighted = activePlayer?.id === p.id;
                     const showPath = !activePlayer || isHighlighted;
                     const opacityVal = activePlayer ? (isHighlighted ? 0.8 : 0) : 0.2;
                     return (showPath && (
                       <motion.path key={`heat-${p.id}`} d={p.heatPath} initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: opacityVal }} exit={{ opacity: 0 }} stroke={p.heatColor} strokeWidth={isMobile ? "6" : "12"} strokeLinecap="round" fill="none" style={{ filter: isHighlighted ? `blur(8px) drop-shadow(0 0 15px ${p.heatColor})` : `blur(10px)` }} transition={{ duration: 0.5 }} />
                     ));
                   })}
                </AnimatePresence>
             </svg>
          </div>
          {mainPlayers.map((p) => (
            <div key={p.id} onMouseEnter={() => !isMobile && setActivePlayer(p)} onMouseLeave={() => !isMobile && setActivePlayer(null)} onClick={() => isMobile && setActivePlayer(activePlayer?.id === p.id ? null : p)} className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-crosshair transition-all duration-300 ${activePlayer?.id === p.id ? 'z-[100]' : 'z-30'}`} style={{ top: p.lanePos.top, left: p.lanePos.left }}>
              <motion.div layout className={`p-1 rounded-full border-2 transition-all duration-500 ${activePlayer?.id === p.id ? 'border-white bg-white/20 shadow-[0_0_25px_white] scale-110' : 'border-white/50 bg-black'}`}>
                <img src={p.img} className={`w-10 h-10 md:w-14 md:h-14 rounded-full object-cover transition-all duration-300 ${viewMode === 'heatmap' ? 'grayscale-0 brightness-110' : 'grayscale group-hover:grayscale-0'}`} alt="pin" />
              </motion.div>
              <AnimatePresence>{viewMode === 'position' && activePlayer?.id === p.id && <MiniIntelCard player={p} isMobile={isMobile} onClose={() => setActivePlayer(null)} />}</AnimatePresence>
            </div>
          ))}
        </div>
    </motion.div>
  );
};

const PlayerJourney = () => {
  const [openFileId, setOpenFileId] = useState(null);
  const toggleFile = (id) => setOpenFileId(openFileId === id ? null : id);
  return (
    <div className="py-10 max-w-4xl mx-auto space-y-4 text-white text-left">
      <p className="text-[10px] font-orbitron font-black text-white/20 uppercase tracking-[0.5em] mb-8 font-rajdhani">Unit_Archive_Logs //</p>
      {players.map((p) => (
        <div key={p.id} className="border border-white/10 overflow-hidden bg-white/[0.01]">
          <button onClick={() => toggleFile(p.id)} className={`w-full flex items-center justify-between p-5 transition-all duration-500 font-mono text-xs md:text-sm uppercase tracking-widest ${openFileId === p.id ? 'bg-white text-black font-black' : 'hover:bg-white/5 text-white/60'}`}>
            <div className="flex items-center gap-4"><FileText size={18} className={openFileId === p.id ? 'text-black' : 'text-white/20'} /><span>{p.name}.ARC {p.isSub && '(SUB)'}</span></div>
            <motion.div animate={{ rotate: openFileId === p.id ? 90 : 0 }} transition={{ duration: 0.3 }}><ChevronRight size={16}/></motion.div>
          </button>
          <AnimatePresence>
            {openFileId === p.id && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: "circOut" }} className="overflow-hidden">
                <div className="p-8 md:p-12 bg-black/40 border-t border-white/5 text-left">
                  <div className="space-y-10 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                    {p.careerHistory.map((history, i) => (
                      <motion.div key={i} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1 }} className="flex gap-8 relative z-10 group">
                        <div className="w-[23px] h-[23px] rounded-full bg-black border-2 border-white flex items-center justify-center shrink-0"><div className="w-1.5 h-1.5 bg-white rounded-full" /></div>
                        <div className="font-mono pt-1 text-left"><p className="text-[10px] text-white/30 font-black mb-1">[{history.year}]</p><h4 className="text-white font-orbitron font-black uppercase text-base md:text-xl tracking-widest">{history.team}</h4><div className="w-8 h-[1px] bg-red-600 mt-2 group-hover:w-full transition-all duration-700 opacity-50" /></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

const Roster = () => {
  const [activeTab, setActiveTab] = useState('roster');
  return (
    <div className="bg-[#080808] min-h-screen">
      <section id="lineup" className="py-24 md:py-32 relative overflow-hidden text-left text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16">
            <h2 className="text-7xl md:text-[120px] font-orbitron font-[900] text-white tracking-tighter uppercase italic leading-none">THE <br /> <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>PERSONNEL</span></h2>
            <div className="flex flex-wrap gap-4 mt-12 border-b border-white/5 pb-8 font-mono">
              <button onClick={() => setActiveTab('roster')} className={`flex items-center gap-2 px-8 py-4 font-orbitron font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'roster' ? 'bg-white text-black' : 'text-white/30 hover:text-white'}`}><Users size={16}/> [ 01. Roster ]</button>
              <button onClick={() => setActiveTab('strat')} className={`flex items-center gap-2 px-8 py-4 font-orbitron font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'strat' ? 'bg-white text-black shadow-lg shadow-white/5' : 'text-white/30 hover:text-white'}`}><MapIcon size={16}/> [ 02. Map_Strat ]</button>
              <button onClick={() => setActiveTab('journey')} className={`flex items-center gap-2 px-8 py-4 font-orbitron font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'journey' ? 'bg-white text-black' : 'text-white/30 hover:text-white'}`}><History size={16}/> [ 03. Player_Journey ]</button>
            </div>
          </div>
          <AnimatePresence mode="wait">
            {activeTab === 'roster' && (<motion.div key="roster" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{players.map((player) => <PlayerCard key={player.id} player={player} />)}</motion.div>)}
            {activeTab === 'strat' && <TacticalMap key="strat" />}
            {activeTab === 'journey' && <PlayerJourney key="journey" />}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Roster;