import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [isMobile, setIsMobile] = useState(false);

  // Check device size
  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const galleryData = [
    { id: 1, type: 'memories', src: '/GeekSuhaz.jpg', title: 'Watching Geek VS Suhaz' },
    { id: 2, type: 'memories', src: '/Cameron.jpg', title: 'Trip To Cameron' },
    { id: 3, type: 'memories', src: '/GamingHouse.jpg', title: 'Gaming House' },
    { id: 4, type: 'design', src: '/JerseyDesign.png', title: 'Jersey 2022' },
    { id: 5, type: 'design', src: '/NewMatchday.png', title: 'Matchday Poster' },
    { id: 6, type: 'design', src: '/FullLineup2026.png', title: 'Lineup Poster' },
  ];

  const filteredImages = filter === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.type === filter);

  return (
    <div id="gallery" className="w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-black uppercase tracking-tighter mb-4 italic">
            The <span className="text-white/20">Archive</span>
          </h2>
          <div className="w-20 h-1 bg-white/20"></div>
        </div>

        {/* Filter Buttons - Optimized for touch */}
        <div className="flex flex-wrap gap-2 md:gap-4 font-rajdhani">
          {['all', 'design', 'memories'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 md:px-6 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all border ${
                filter === tab 
                ? 'bg-white text-black border-white' 
                : 'text-white/40 border-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Gallery */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode='popLayout'>
          {filteredImages.map((img) => (
            <motion.div
              layout
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-square overflow-hidden group rounded-xl bg-zinc-900 border border-white/5"
            >
              {/* Image Logic */}
              <img 
                src={img.src} 
                alt={img.title}
                // Kat Mobile: Sentiasa berwarna & tak zoom | Kat PC: Grayscale & zoom on hover
                className={`w-full h-full object-cover transition-all duration-700 ease-in-out 
                  ${isMobile 
                    ? 'grayscale-0 opacity-100 scale-100' 
                    : 'grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 group-hover:scale-110'
                  }`}
              />

              {/* Overlay Content */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6 transition-opacity duration-300
                ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
              >
                <p className="text-[9px] text-white/50 uppercase tracking-[0.3em] font-bold mb-1 font-rajdhani">
                  {img.type}
                </p>
                <h4 className="text-white font-orbitron font-bold uppercase text-sm md:text-lg leading-tight">
                  {img.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Gallery;