import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const galleryData = [
    { id: 1, type: 'memories', src: '/GeekSuhaz.jpg', title: 'Geek VS Suhaz Live', size: 'large' },
    { id: 2, type: 'memories', src: '/Cameron.jpg', title: 'Cameron Highland Trip', size: 'small' },
    { id: 3, type: 'memories', src: '/GamingHouse.jpg', title: 'Gaming House', size: 'small' },
    { id: 4, type: 'design', src: '/JerseyDesign.png', title: 'Kit 2022 Concept', size: 'small' },
    { id: 5, type: 'design', src: '/NewMatchday.png', title: 'Matchday Poster', size: 'large' },
    { id: 6, type: 'design', src: '/FullLineup2026.png', title: '2026 Roster Reveal', size: 'small' },
    { id: 7, type: 'memories', src: '/Genting2.jpg', title: 'Genting Trip', size: 'small' },
    { id: 8, type: 'memories', src: '/Aidilfitri2026.jpg', title: 'Sambutan Hari Raya Aidilfitri 2026', size: 'small' },
  ];

  const filteredImages = filter === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.type === filter);

  return (
    <div id="gallery" className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
      
      {/* --- BACKGROUND HUD DECOR --- */}
      <div className="absolute top-40 right-10 opacity-5 font-orbitron text-[8px] tracking-[2em] uppercase hidden md:block [writing-mode:vertical-lr]">
        Visual_Database // Unit_Archive
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10">
        <div className="relative">
          <div className="absolute -left-4 top-0 h-full w-[2px] bg-white opacity-20"></div>
          <h2 className="text-5xl md:text-7xl font-orbitron font-black uppercase tracking-tighter italic leading-none">
            THE <br /><span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>ARCHIVE</span>
          </h2>
          <p className="text-[10px] font-rajdhani font-black text-white/20 tracking-[0.5em] mt-4 uppercase italic">
            Visual_History // Log_Files
          </p>
        </div>

        {/* Gen-Z Brutalist Filter Buttons */}
        <div className="flex flex-wrap gap-2 font-orbitron">
          {['all', 'design', 'memories'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all relative overflow-hidden border
                ${filter === tab 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-white/40 border-white/10 hover:border-white/40'
                }`}
            >
              <span className="relative z-10">{tab}</span>
              {filter === tab && (
                <motion.div layoutId="tab-bg" className="absolute inset-0 bg-white" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetric Grid Gallery */}
      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence mode='popLayout'>
          {filteredImages.map((img) => (
            <motion.div
              layout
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative break-inside-avoid group bg-zinc-900 border border-white/5 overflow-hidden"
            >
              {/* Image Frame HUD */}
              <div className="absolute top-2 right-2 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-[8px] font-orbitron bg-white text-black px-2 py-0.5 font-black uppercase tracking-tighter">
                  IMG_V{img.id}
                </div>
              </div>

              <img 
                src={img.src} 
                alt={img.title}
                className={`w-full h-auto object-cover transition-all duration-700 ease-out 
                  ${isMobile 
                    ? 'grayscale-0 opacity-100' 
                    : 'grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105'
                  }`}
              />

              {/* Brutalist Content Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6 transition-all duration-500
                ${isMobile ? 'opacity-100' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}
              >
                {/* HUD Label */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-4 h-[1px] bg-white"></div>
                  <p className="text-[8px] text-white/50 uppercase tracking-[0.4em] font-black font-rajdhani italic">
                    {img.type}
                  </p>
                </div>
                
                <h4 className="text-white font-orbitron font-black uppercase text-lg italic tracking-tighter leading-none">
                  {img.title}
                </h4>

                {/* Corner Frame Decoration */}
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-white/20"></div>
              </div>

              {/* Scanline Effect on Hover */}
              {!isMobile && (
                <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-10 transition-opacity"></div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Bottom Footer Data */}
      <div className="mt-16 flex justify-between items-center opacity-10 border-t border-white/10 pt-8 font-orbitron text-[8px] tracking-[0.5em] uppercase italic">
        <span>End_Of_Archive</span>
        <span>Storage_Used: 84%</span>
      </div>
    </div>
  );
};

export default Gallery;