import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, X, BarChart3, Target, Map as MapIcon, Flame, Users, History, FileText, ChevronRight } from 'lucide-react';

const players = [
  { id: 1, name: 'SOMALI', role: 'EXP LANER', signature: 'Ruby', topHeroes: ['Ruby', 'Alice', 'Gloo'], quote: "Discipline is the key to victory.", img: '/SomaliRaw.png', stats: { mechanics: 85, mapSense: 90, aggression: 95, teamwork: 80, pool: 88 }, lanePos: { top: '25%', left: '15%' }, heroStats: [{ name: 'Ruby', wr: '78%' }, { name: 'Alice', wr: '72%' }, { name: 'Gloo', wr: '65%' }], 
    heatPath: "M 10 10 L 40 10 L 40 40 L 10 40 Z M 25 25 L 35 35 L 50 50", heatColor: "#fbbf24", // Yellow
    careerHistory: [{ year: '2021', team: 'infiniti Esports o2' }, { year: '2026', team: 'Infiniti Reborn' }]
  },
  { id: 2, name: 'RULZ', role: 'JUNGLER', signature: 'Hayabusa', topHeroes: ['Hayabusa', 'Ling', 'Yi Sun Shin'], quote: "Speed is nothing without precision.", img: '/RulzRaw.png', stats: { mechanics: 98, mapSense: 85, aggression: 92, teamwork: 75, pool: 80 }, lanePos: { top: '55%', left: '32%' }, heroStats: [{ name: 'Hayabusa', wr: '85%' }, { name: 'Ling', wr: '79%' }, { name: 'Yi Sun Shin', wr: '74%' }], 
    heatPath: "M 30 30 L 70 30 L 70 70 L 30 70 Z M 40 40 L 60 60 M 35 35 L 65 65", heatColor: "#3b82f6", // Blue
    careerHistory: [{ year: '2018/19', team: '9Kage Esports' }, { year: '2021', team: 'Infiniti Esports' }, { year: '2022', team: 'Akatsuki' }, { year: '2023', team: 'Dest Revo' }, { year: '2023', team: 'Synotic Titan' }, { year: '2024', team: 'Unknown' }, { year: '2025', team: 'Infiniti Esports' }, { year: '2023', team: 'Infiniti Reborn' }]
  },
  { id: 3, name: 'PAKLY', role: 'MID LANER', signature: 'Zuxhin', topHeroes: ['Zuxhin', 'Zetian', 'Lunox'], quote: "Control the mid, control the game.", img: '/PaklyRaw.png', stats: { mechanics: 88, mapSense: 95, aggression: 70, teamwork: 98, pool: 90 }, lanePos: { top: '50%', left: '50%' }, heroStats: [{ name: 'Zuxhin', wr: '75%' }, { name: 'Zetian', wr: '82%' }, { name: 'Lunox', wr: '70%' }], 
    heatPath: "M 10 10 L 90 90 M 20 80 L 80 20 M 40 40 L 60 40 L 60 60 L 40 60 Z", heatColor: "#ef4444", // Red
    careerHistory: [{ year: '2018/19', team: 'Frostz' }, { year: '2019', team: 'Zoo Esports' }, { year: '2021', team: 'Infiniti Esports' }, { year: '2023', team: 'Dest Revo' }, { year: '2023', team: 'Synotic Titan' }, { year: '2024', team: 'Skibidi Academy' }, { year: '2025', team: 'Infiniti Esports' }, { year: '2026', team: 'Infiniti Reborn' } ]
  },
  { id: 4, name: 'STARLIGHTEX', role: 'GOLD LANER', signature: 'Claude', topHeroes: ['Claude', 'Karrie', 'Moskov'], quote: "Scaling is a lifestyle.", img: '/StarRaw.png', stats: { mechanics: 92, mapSense: 80, aggression: 85, teamwork: 82, pool: 78 }, lanePos: { top: '82%', left: '82%' }, heroStats: [{ name: 'Claude', wr: '80%' }, { name: 'Karrie', wr: '76%' }, { name: 'Moskov', wr: '73%' }], 
    heatPath: "M 60 60 L 90 60 L 90 90 L 60 90 Z M 75 75 L 50 50", heatColor: "#a855f7", // Purple
    careerHistory: [{ year: '2018/19', team: '9Kage Esports' }, { year: '2021', team: 'Infiniti Esports' }, { year: '2026', team: 'Infiniti Reborn' }]
  },
  { id: 5, name: 'IKZN', role: 'ROAMER', signature: 'Grock', topHeroes: ['Grock', 'Chou', 'Guin'], quote: "I am the shield of the team.", img: '/IkznRaw.png', stats: { mechanics: 80, mapSense: 98, aggression: 88, teamwork: 95, pool: 85 }, lanePos: { top: '65%', left: '60%' }, heroStats: [{ name: 'Grock', wr: '80%' }, { name: 'Chou', wr: '81%' }, { name: 'Guin', wr: '68%' }], 
    heatPath: "M 60 10 L 90 10 L 90 40 L 60 40 Z M 75 25 L 35 35 L 65 65", heatColor: "#22c55e", // Green
    careerHistory: [{ year: '2018/19', team: '9Kage Esports' }, { year: '2019', team: 'Zoo Esports' }, { year: '2021', team: 'Infiniti Esports' }, { year: '2023', team: 'Dest Revo' }, { year: '2023', team: 'Synotic Titan' }, { year: '2024', team: 'Unknown' }, { year: '2025', team: 'Infiniti Esports' }, { year: '2026', team: 'Infiniti Reborn' }]
  },
  { id: 6, name: 'IMPOLOLO', role: 'GOLD LANER (SUB)', signature: 'Granger', topHeroes: ['Granger', 'Moskov', 'Claude'], quote: "Done is better than perfect.", img: '/ImpololoRaw.png', stats: { mechanics: 87, mapSense: 77, aggression: 81, teamwork: 83, pool: 75 }, isSub: true, heroStats: [{ name: 'Granger', wr: '70%' }, { name: 'Moskov', wr: '68%' }, { name: 'Claude', wr: '65%' }],
    careerHistory: [{ year: '2018/19', team: 'Frostz' }, { year: '2021', team: 'Infiniti Esports' }, { year: '2026', team: 'Infiniti Reborn' }]
  },
];

// --- STAT RADAR CHART (UNTOUCHED) ---
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
  const polygonPoints = points.map((p, i) => getCoordinates(i, p.val)).join(' ');
  return (
    <div className="relative w-full flex justify-center py-2">
      <svg width="140" height="140" viewBox="0 0 100 100" className="drop-shadow-[0_0_8px_rgba(0,0,0,0.1)]">
        {[20, 40, 60, 80, 100].map((level) => (
          <polygon key={level} points={points.map((_, i) => getCoordinates(i, level)).join(' ')} fill="none" stroke="black" strokeWidth="0.2" strokeDasharray="1,1" opacity="0.2" />
        ))}
        <motion.polygon initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.8 }} points={polygonPoints} fill="black" className="transition-all duration-1000" />
        {points.map((p, i) => {
          const [x, y] = getCoordinates(i, 115).split(',');
          return <text key={i} x={x} y={y} fontSize="5" fontWeight="900" textAnchor="middle" className="font-orbitron fill-black/40">{p.label}</text>
        })}
      </svg>
    </div>
  );
};

// --- PLAYER CARD (UNTOUCHED) ---
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

// --- TACTICAL MAP ---
const TacticalMap = () => {
  const mainPlayers = players.filter(p => !p.isSub);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [activeHeroIdx, setActiveHeroIdx] = useState(0);
  const [viewMode, setViewMode] = useState('position'); 
  const [activeHeatPlayer, setActiveHeatPlayer] = useState(null);

  useEffect(() => {
    if (selectedPlayer && viewMode === 'position') document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedPlayer, viewMode]);

  useEffect(() => { setActiveHeroIdx(0); }, [selectedPlayer]);

  const handlePlayerClick = (p) => {
    if (viewMode === 'position') setSelectedPlayer(p);
    else setActiveHeatPlayer(activeHeatPlayer?.id === p.id ? null : p);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 font-mono text-white">
          <div className="flex gap-2">
            <button onClick={() => { setViewMode('position'); setActiveHeatPlayer(null); }}
              className={`flex items-center gap-2 px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all border ${viewMode === 'position' ? 'bg-white text-black border-white' : 'bg-transparent text-white/40 border-white/10'}`}>
              <MapIcon size={14} /> Position_View
            </button>
            <button onClick={() => { setViewMode('heatmap'); setSelectedPlayer(null); }}
              className={`flex items-center gap-2 px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all border ${viewMode === 'heatmap' ? 'bg-white text-black border-white' : 'bg-transparent text-white/40 border-white/10'}`}>
              <Flame size={14} /> Heat_Map
            </button>
          </div>
        </div>

        <div className="relative aspect-square md:aspect-video w-full bg-zinc-900 border border-white/10 rounded-sm overflow-hidden shadow-2xl transition-all duration-700">
          <img src="/MapML.jpg" className={`w-full h-full object-cover transition-all duration-1000 ${viewMode === 'heatmap' ? 'brightness-[0.4] contrast-125 saturate-150' : 'opacity-40 grayscale'}`} alt="map" />
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
             <AnimatePresence>
                {viewMode === 'heatmap' && mainPlayers.map((p) => {
                  // Logic: Tunjukkan semua kalau tak pilih, tunjukkan satu kalau dah pilih
                  const isVisible = !activeHeatPlayer || activeHeatPlayer.id === p.id;
                  const opacityVal = activeHeatPlayer ? (activeHeatPlayer.id === p.id ? 0.8 : 0) : 0.3;

                  return (isVisible && (
                    <motion.path
                        key={`heat-${p.id}`}
                        d={p.heatPath}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: opacityVal }}
                        exit={{ opacity: 0 }}
                        stroke={p.heatColor} 
                        strokeWidth="12" 
                        strokeLinecap="round" 
                        fill="none"
                        style={{ filter: `blur(8px) drop-shadow(0 0 15px ${p.heatColor})` }}
                        transition={{ duration: 1 }}
                    />
                  ));
                })}
             </AnimatePresence>
          </svg>

          {mainPlayers.map((p) => (
            <button key={p.id} onClick={() => handlePlayerClick(p)} className="absolute z-30 -translate-x-1/2 -translate-y-1/2 group" style={{ top: p.lanePos.top, left: p.lanePos.left }}>
              <motion.div layout className={`p-1 rounded-full border-2 transition-all duration-500 ${(viewMode === 'position' ? selectedPlayer?.id : activeHeatPlayer?.id) === p.id ? 'border-white bg-white/20 shadow-[0_0_25px_white] scale-110' : 'border-white/50 bg-black hover:border-white'}`}>
                <img src={p.img} className={`w-10 h-10 md:w-16 md:h-16 rounded-full object-cover transition-all duration-300 ${viewMode === 'heatmap' ? 'grayscale-0 brightness-110' : 'grayscale group-hover:grayscale-0'}`} alt="pin" />
              </motion.div>
            </button>
          ))}
        </div>
      <AnimatePresence>
        {viewMode === 'position' && selectedPlayer && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedPlayer(null)} className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-pointer" />
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="relative w-full max-w-[380px] bg-[#0c0c0c] border border-white/10 rounded-sm overflow-hidden shadow-2xl">
              <button onClick={() => setSelectedPlayer(null)} className="absolute top-4 right-4 z-50 p-2 bg-white/5 hover:bg-white hover:text-black rounded-full transition-colors"><X size={18} /></button>
              <div className="relative h-80 bg-zinc-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent z-10" />
                <img src={selectedPlayer.img} className="w-full h-full object-cover object-top grayscale opacity-60" alt="p" />
                <div className="absolute bottom-4 left-6 z-20 text-left">
                  <span className="text-white/40 text-[9px] font-black uppercase tracking-widest block mb-1 font-rajdhani">{selectedPlayer.role}</span>
                  <h4 className="text-4xl font-orbitron font-black text-white italic uppercase tracking-tighter leading-none">{selectedPlayer.name}</h4>
                </div>
              </div>
              <div className="p-8 space-y-8 text-left font-mono text-white">
                <div className="flex flex-col items-center justify-center py-6 bg-white/[0.02] border border-white/5 relative rounded-sm font-rajdhani">
                  <div className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-2 font-rajdhani">{selectedPlayer.heroStats[activeHeroIdx].name}_Win_Rate</div>
                  <motion.p key={activeHeroIdx} initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-7xl font-orbitron font-[900]">{selectedPlayer.heroStats[activeHeroIdx].wr}</motion.p>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {selectedPlayer.heroStats.map((hero, idx) => (
                    <button key={hero.name} onClick={() => setActiveHeroIdx(idx)} className={`flex items-center justify-between px-4 py-3 border rounded-sm transition-all duration-300 ${activeHeroIdx === idx ? 'bg-white text-black font-black border-white' : 'bg-white/5 border-white/10 text-white/40 hover:text-white'}`}>
                      <span className="font-orbitron text-xs uppercase tracking-widest">{hero.name}</span>
                      <Target size={14} className={activeHeroIdx === idx ? 'opacity-100' : 'opacity-20'} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- PLAYER JOURNEY ---
const PlayerJourney = () => {
  const [activeFile, setActiveFile] = useState(null);

  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-10 min-h-[500px] text-white">
      <div className="md:col-span-4 space-y-2">
        <p className="text-[10px] font-orbitron font-black text-white/20 uppercase tracking-[0.5em] mb-4 font-rajdhani">Unit_Archive_Files //</p>
        {players.map((p) => (
          <button key={p.id} onClick={() => setActiveFile(p)}
            className={`w-full flex items-center justify-between p-4 border transition-all font-mono text-xs uppercase tracking-widest
              ${activeFile?.id === p.id ? 'bg-white text-black border-white' : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30'}`}>
            <div className="flex items-center gap-3"><FileText size={16} /> {p.name}.ARC</div>
            <ChevronRight size={14} className={activeFile?.id === p.id ? 'opacity-100' : 'opacity-0'} />
          </button>
        ))}
      </div>
      <div className="md:col-span-8 border border-white/10 bg-white/[0.01] p-8 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {activeFile ? (
            <motion.div key={activeFile.id} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-8">
              <div className="border-b border-white/10 pb-4">
                <h4 className="text-4xl font-orbitron font-[900] text-white italic uppercase tracking-tighter">{activeFile.name}</h4>
                <p className="text-white/30 text-[10px] font-mono mt-2 uppercase tracking-[0.2em]">Deployment_History_Log</p>
              </div>
              <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                {activeFile.careerHistory.map((history, i) => (
                  <div key={i} className="flex gap-6 relative z-10 group">
                    <div className="w-[23px] h-[23px] rounded-full bg-[#080808] border-2 border-white flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    </div>
                    <div className="text-left font-mono">
                      <p className="text-[10px] text-white/20 font-black">{history.year}</p>
                      <p className="text-white font-orbitron font-black uppercase text-sm tracking-widest">{history.team}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-white/10 font-mono text-[10px] uppercase tracking-[0.5em]">
              <FileText size={48} className="mb-4 opacity-5" /> Select_A_File_To_Load_Archive
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Roster = () => {
  const [activeTab, setActiveTab] = useState('roster');

  return (
    <div className="bg-[#080808] min-h-screen">
      <section id="lineup" className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
          <div className="mb-16">
            <h2 className="text-7xl md:text-[120px] font-orbitron font-[900] text-white tracking-tighter uppercase italic leading-none">
              THE <br /> <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>PERSONNEL</span>
            </h2>
            <div className="flex flex-wrap gap-4 mt-12 border-b border-white/5 pb-8 font-mono">
              <button onClick={() => setActiveTab('roster')} className={`flex items-center gap-2 px-8 py-4 font-orbitron font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'roster' ? 'bg-white text-black' : 'text-white/30 hover:text-white'}`}>
                <Users size={16} /> [ 01. Roster ]
              </button>
              <button onClick={() => setActiveTab('strat')} className={`flex items-center gap-2 px-8 py-4 font-orbitron font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'strat' ? 'bg-white text-black shadow-lg shadow-white/5' : 'text-white/30 hover:text-white'}`}>
                <MapIcon size={16} /> [ 02. Map_Strat ]
              </button>
              <button onClick={() => setActiveTab('journey')} className={`flex items-center gap-2 px-8 py-4 font-orbitron font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'journey' ? 'bg-white text-black' : 'text-white/30 hover:text-white'}`}>
                <History size={16} /> [ 03. Player_Journey ]
              </button>
            </div>
          </div>
          <AnimatePresence mode="wait">
            {activeTab === 'roster' && (
              <motion.div key="roster" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {players.map((player) => <PlayerCard key={player.id} player={player} />)}
              </motion.div>
            )}
            {activeTab === 'strat' && <TacticalMap key="strat" />}
            {activeTab === 'journey' && <PlayerJourney key="journey" />}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Roster;