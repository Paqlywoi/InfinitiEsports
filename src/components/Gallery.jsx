import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, Move, Layers } from 'lucide-react';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const galleryData = [
    { id: 1, type: 'memories', src: '/GeekSuhaz.jpg', title: 'Geek VS Suhaz Live' },
    { id: 2, type: 'memories', src: '/Cameron.jpg', title: 'Cameron Highland Trip' },
    { id: 3, type: 'memories', src: '/GamingHouse.jpg', title: 'Gaming House' },
    { id: 4, type: 'design', src: '/JerseyDesign.png', title: 'Kit 2022 Concept', isBlueprint: true },
    { id: 5, type: 'design', src: '/NewMatchday.png', title: 'Matchday Poster' },
    { id: 6, type: 'design', src: '/FullLineup2026.png', title: '2026 Roster Reveal' },
    { id: 7, type: 'memories', src: '/Genting2.jpg', title: 'Genting Trip' },
    { id: 8, type: 'memories', src: '/Aidilfitri2026.jpg', title: 'Sambutan Hari Raya Aidilfitri 2026' },
  ];

  const filteredImages = filter === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.type === filter);

  return (
    <div id="gallery" className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 relative font-mono">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10">
        <div className="relative">
          <div className="absolute -left-4 top-0 h-full w-[2px] bg-white opacity-20"></div>
          <h2 className="text-5xl md:text-7xl font-orbitron font-black uppercase tracking-tighter italic leading-none">
            THE <br /><span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>ARCHIVE</span>
          </h2>
          <p className="text-[10px] text-white/20 tracking-[0.5em] mt-4 uppercase italic">Visual_History // Log_Files</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {['all', 'design', 'memories'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all border
                ${filter === tab ? 'bg-white text-black border-white' : 'bg-transparent text-white/40 border-white/10'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Gallery */}
      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence mode='popLayout'>
          {filteredImages.map((img) => (
            <motion.div
              layout
              key={img.id}
              onClick={() => img.isBlueprint && setSelectedImage(img)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`relative break-inside-avoid group bg-zinc-900 border border-white/5 overflow-hidden ${img.isBlueprint ? 'cursor-zoom-in' : 'cursor-default'}`}
            >
              <img 
                src={img.src} 
                className={`w-full h-auto object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700`}
                alt={img.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[8px] text-white/40 uppercase tracking-widest">{img.type}</p>
                <h4 className="text-white font-orbitron font-black uppercase italic">{img.title}</h4>
                {img.isBlueprint && <span className="text-[8px] text-blue-400 mt-2 font-black tracking-widest animate-pulse">[ CLICK_FOR_BLUEPRINT ]</span>}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* --- BLUEPRINT MODAL --- */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.05)]"
            >
              {/* Technical Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />

              {/* Toolbar */}
              <div className="relative z-10 flex justify-between items-center p-4 border-b border-white/10 bg-black/50">
                <div className="flex items-center gap-4">
                  <Cpu size={14} className="text-blue-500 animate-pulse" />
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase">Tech_Specs // {selectedImage.title}</span>
                </div>
                <button onClick={() => setSelectedImage(null)} className="p-2 hover:bg-white/10 transition-colors">
                  <X size={18} />
                </button>
              </div>

              <div className="relative z-10 p-6 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Visual View */}
                <div className="relative group">
                  <div className="absolute -inset-4 border border-white/5 pointer-events-none" />
                  <img src={selectedImage.src} className="w-full h-auto opacity-20 blur-[2px] absolute scale-105" alt="underlay" />
                  <img src={selectedImage.src} className="w-full h-auto relative z-10 border border-blue-500/20" alt="blueprint" />
                  
                  {/* Floating Measurement Lines */}
                  <div className="absolute top-1/2 -left-8 w-16 h-[1px] bg-blue-500/50 z-20 hidden md:block" />
                  <div className="absolute top-1/2 -right-8 w-16 h-[1px] bg-blue-500/50 z-20 hidden md:block" />
                </div>

                {/* Data Panel */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-orbitron font-black italic mb-2">FABRIC_ANATOMY</h3>
                    <p className="text-xs text-white/40 tracking-widest uppercase">System_Version: 2.0.4 // Autumn_Kit</p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: 'MATERIAL', value: 'Hexa-Mesh Breathable Fiber', icon: <Layers size={14}/> },
                      { label: 'WEIGHT', value: '145 GSM Light-weight', icon: <Move size={14}/> },
                      { label: 'PRINTING', value: 'Full Sublimation (Neon Infused)', icon: <Cpu size={14}/> },
                      { label: 'LOGO_SPECS', value: '3D High-Density Silicone Patch', icon: <X size={14}/> }
                    ].map((spec, i) => (
                      <motion.div 
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all group"
                      >
                        <div className="text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity">{spec.icon}</div>
                        <div>
                          <p className="text-[8px] text-white/20 font-black tracking-widest">{spec.label}</p>
                          <p className="text-[10px] text-white font-bold uppercase">{spec.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-[9px] text-white/30 italic leading-relaxed uppercase">
                      "Designed for maximum performance and brand visibility. This kit utilizes neural-mesh technology to ensure athlete comfort during high-intensity matches."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="mt-16 flex justify-between items-center opacity-10 border-t border-white/10 pt-8 text-[8px] tracking-[0.5em] uppercase italic">
        <span>End_Of_Archive</span>
        <span>Designer: Haziq_Fakhri</span>
      </div>
    </div>
  );
};

export default Gallery;