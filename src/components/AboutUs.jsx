import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check device size
  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 bg-[#080808] overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Text Section (Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left"
        >
          <h2 className="text-[10px] md:text-xs tracking-[0.8em] text-white/30 uppercase mb-4 font-black font-rajdhani">
            The Origin Story
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-8 text-white leading-[0.9] tracking-tighter uppercase">
            ESTABLISHED <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>SINCE 2021</span>
          </h1>

          <div className="w-20 h-1 bg-white/20 mb-10"></div>
          
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-rajdhani font-medium italic border-l-2 border-white/10 pl-6">
              "Born from a shared passion for competitive MLBB, Infiniti has evolved from a brotherhood into a dominant underground force in Malaysia."
            </p>
            
            <p className="text-sm md:text-base text-white/40 leading-relaxed font-rajdhani tracking-wide max-w-lg">
              We are more than just a team; we are an elite breeding ground for talent. 
              By instilling relentless discipline and tactical innovation, we transform 
              raw potential into championship-ready warriors. Our journey is defined by 
              one mindset: <span className="text-white font-bold">#ZeroToInfiniti</span>.
            </p>
          </div>
        </motion.div>
        
        {/* Image Section (Right) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative group"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-white/5 blur-[100px] md:blur-[150px] rounded-full group-hover:bg-white/10 transition-all duration-700"></div>
          
          <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.8)] bg-zinc-900">
            <img 
              src="/Founders.jpg" 
              alt="Infiniti Legacy" 
              // Mobile: Always Colored, PC: Grayscale hover
              className={`w-full h-auto object-cover transition-all duration-700 ease-in-out
                ${isMobile 
                  ? 'grayscale-0 brightness-100' 
                  : 'grayscale brightness-75 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105'
                }`} 
            />
            
            {/* Dark Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent transition-opacity
              ${isMobile ? 'opacity-80' : 'opacity-40 group-hover:opacity-60'}`}></div>
            
            {/* Badge */}
            <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-sm border border-white/20 shadow-2xl">
              <span className="text-[9px] text-white font-black tracking-[0.4em] uppercase font-rajdhani">Legacy Archive</span>
            </div>
          </div>

          {/* Decorative Corner Frames */}
          <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-32 h-32 border-r-2 border-b-2 border-white/10 rounded-br-3xl pointer-events-none group-hover:border-white/30 transition-colors"></div>
          <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-16 h-16 border-l-2 border-t-2 border-white/10 rounded-tl-3xl pointer-events-none group-hover:border-white/30 transition-colors"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;