import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems = ['About Us', 'Values', 'Lineup', 'Matches', 'Gallery', 'Timeline', 'Achievement', 'Partners'];

  const handleClick = (item) => {
    setIsOpen(false);
    const targetId = item.toLowerCase().replace(/\s+/g, '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* --- HAMBURGER BUTTON --- */}
      <div className="fixed top-8 left-8 z-[9999]">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`flex flex-col gap-1.5 p-4 transition-all duration-500 rounded-sm border ${
            isOpen 
            ? 'bg-white border-white scale-90' 
            : 'bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/40'
          }`}
        >
          <div className={`h-[2px] w-6 transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-2 bg-black' : 'bg-white'}`}></div>
          <div className={`h-[2px] w-4 transition-all duration-500 ${isOpen ? 'opacity-0' : 'bg-white'}`}></div>
          <div className={`h-[2px] w-6 transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-2 bg-black' : 'bg-white'}`}></div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[90] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"
            />

            <motion.div
              initial={{ x: '-100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-full md:w-[420px] z-[95] bg-[#0A0A0A] border-r border-white/10 flex flex-col justify-between p-10 md:p-12 overflow-hidden"
            >
              {/* Home Icon */}
              <button 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsOpen(false);
                }}
                className="absolute top-10 right-10 flex flex-col items-center group"
              >
                <div className="p-2.5 border border-white/10 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
              </button>

              {/* --- MENU LINKS (Fixed Size, No Scroll) --- */}
              <div className="flex flex-col gap-2 md:gap-3 mt-20 relative z-10">
                <div className="text-[9px] font-orbitron text-white/20 tracking-[0.8em] mb-2 uppercase italic">Directory //</div>
                
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + (index * 0.03) }}
                    onClick={() => handleClick(item)}
                    className="group flex items-center gap-5 text-left py-1"
                  >
                    <span className="text-[9px] font-orbitron text-white/10 group-hover:text-white transition-colors">0{index + 1}</span>
                    
                    {/* Font saiz dikecilkan sikit (text-2xl md:text-4xl) supaya muat */}
                    <span className="text-2xl md:text-4xl font-orbitron font-black text-white/40 uppercase italic tracking-tighter transition-all duration-300 group-hover:text-white group-hover:pl-4 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                      {item}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* --- FOOTER SIDEBAR --- */}
              <div className="relative pt-6 border-t border-white/10">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-white font-orbitron font-black text-xl tracking-tighter italic leading-none">INFINITI</div>
                    <div className="text-white/20 text-[8px] tracking-[0.4em] uppercase font-rajdhani mt-1 italic">Unit // Selected Personnel</div>
                  </div>
                  <div className="text-white/5 font-orbitron text-[9px] font-black tracking-widest uppercase">
                    V2.0.26
                  </div>
                </div>
                <motion.div 
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute top-0 left-0 w-1/2 h-[1px] bg-white/30"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;