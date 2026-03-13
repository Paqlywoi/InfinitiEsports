import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Aku dah tambah 'Values' lepas 'About Us'
  const menuItems = ['About Us', 'Values', 'Lineup', 'Matches', 'Gallery', 'Timeline', 'Achievement', 'Partners'];

  const handleClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Icon Hamburger */}
      <div className="fixed top-8 left-8 z-[9999]">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`flex flex-col gap-1.5 p-3 rounded-xl transition-all duration-300 ${isOpen ? 'bg-transparent' : 'bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10'}`}
        >
          <div className={`h-0.5 w-6 transition-all ${isOpen ? 'rotate-45 translate-y-2 bg-black' : 'bg-white'}`}></div>
          <div className={`h-0.5 w-6 transition-all ${isOpen ? 'opacity-0' : 'bg-white'}`}></div>
          <div className={`h-0.5 w-6 transition-all ${isOpen ? '-rotate-45 -translate-y-2 bg-black' : 'bg-white'}`}></div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
            />

            <motion.div
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[300px] md:w-[400px] z-[95] bg-[#F5F5F5] shadow-2xl flex flex-col justify-between p-12"
            >
              {/* --- ICON HOME KAT KANAN ATAS SIDEBAR --- */}
              <button 
                onClick={() => handleClick('home')}
                className="absolute top-8 right-8 text-black/40 hover:text-black transition-all flex flex-col items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span className="text-[8px] font-bold tracking-widest uppercase font-rajdhani">Home</span>
              </button>

              <div className="flex flex-col gap-5 mt-20">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = item.toLowerCase().replace(' ', '');
                      handleClick(targetId);
                    }}
                    className="text-xl md:text-2xl font-sans font-bold text-black uppercase tracking-[0.2em] hover:text-black/40 transition-all cursor-none"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>

              <div className="border-t border-black/10 pt-8">
                <div className="text-black font-black text-lg tracking-widest mb-2 font-orbitron">INFINITI</div>
                <div className="text-black/40 text-[10px] tracking-[0.3em] uppercase font-rajdhani">#ZeroToInfiniti • 2026</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;