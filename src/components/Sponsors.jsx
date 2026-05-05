import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Sponsors = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSponsor, setActiveSponsor] = useState(null);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const sponsors = [
    { id: 1, name: "MUHAIM", logo: "/Muhaim.png" },
    { id: 2, name: "NiceTry Store", logo: "/NiceTryLogo.png" },
  ];

  return (
    <div id="partners" className="relative w-full bg-[#050505] border-y border-white/5 py-24 md:py-40 overflow-hidden">
      
      {/* Background Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-left mb-16 md:mb-24">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[10px] tracking-[0.8em] text-white/20 uppercase font-black mb-4 font-rajdhani italic"
          >
            Network_Archives // 02_Units
          </motion.p>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-orbitron font-[900] text-white uppercase italic tracking-tighter leading-none"
          >
            OUR <br /> 
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>PARTNERS</span>
          </motion.h3>
        </div>

        {/* --- LOGO GRID --- */}
        <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-2'} gap-4 md:gap-12 mb-24`}>
          {sponsors.map((s, index) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveSponsor(activeSponsor === s.id ? null : s.id)}
              whileTap={{ scale: 0.98 }}
              className={`relative flex flex-col items-center justify-center p-8 md:p-16 border transition-all duration-500 cursor-pointer
                ${activeSponsor === s.id || (!isMobile) ? 'bg-white/[0.03] border-white/20' : 'bg-transparent border-white/5'}`}
            >
              {/* Decorative ID */}
              <span className="absolute top-4 left-4 text-[8px] font-orbitron text-white/10 font-black tracking-widest uppercase">
                Auth_P.{s.id}
              </span>

              {/* Logo */}
              <div className="relative h-16 md:h-24 w-full flex items-center justify-center mb-4">
                <img 
                  src={s.logo} 
                  alt={s.name} 
                  className={`max-h-full w-auto object-contain transition-all duration-700 
                    ${(isMobile && activeSponsor === s.id) || !isMobile ? 'grayscale-0 brightness-110 scale-110' : 'grayscale brightness-50 opacity-40'}`}
                />
              </div>

              {/* Label for Mobile & Desktop Hover */}
              <AnimatePresence>
                {((isMobile && activeSponsor === s.id) || !isMobile) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-center"
                  >
                    <p className="text-[11px] font-orbitron font-black text-white uppercase tracking-tighter italic">
                      {s.name}
                    </p>
                    <p className="text-[8px] font-mono text-white/30 uppercase mt-1 tracking-widest">
                      {s.role}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Corner Accents */}
              <div className={`absolute top-0 right-0 w-4 h-4 border-t border-r border-white/0 transition-all duration-500 
                ${activeSponsor === s.id ? 'border-white/40' : ''}`}></div>
            </motion.div>
          ))}
        </div>

        {/* --- CALL TO ACTION --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5">
          <div className="text-center md:text-left">
            <p className="text-[10px] text-white/20 font-black tracking-[0.4em] uppercase italic">
              Interested in Tactical Collaboration?
            </p>
          </div>

          <motion.a 
            href="https://wa.me/60102141605?text=Hi%20Infiniti%20Esports!%20Kami%20berminat%20untuk%20menjadi%20strategic%20partner%20korang." 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto px-10 py-5 bg-white text-black font-orbitron font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 transition-all hover:bg-zinc-200"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
            CONNECT_NOW
          </motion.a>
        </div>

      </div>

      {/* Side Decorative Text */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 rotate-90 hidden lg:block">
        <p className="text-[100px] font-black text-white/[0.01] select-none tracking-tighter italic font-orbitron">
          PARTNERSHIP
        </p>
      </div>
    </div>
  );
};

export default Sponsors;