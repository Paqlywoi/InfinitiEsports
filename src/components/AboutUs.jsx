import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 bg-[#080808] relative overflow-hidden">
      
      {/* --- GEN-Z BACKGROUND TEXTURES --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] brightness-50 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10">
        
        {/* Text Section (Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left relative"
        >
          {/* Decorative HUD Tag */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-white"></div>
            <h2 className="text-[10px] tracking-[0.6em] text-white/40 uppercase font-black font-rajdhani">
              Sector // Origin_Story
            </h2>
          </div>
          
          <h1 className="text-5xl md:text-[5.5rem] font-orbitron font-black mb-8 text-white leading-[0.85] tracking-tighter uppercase italic">
            ESTABLISHED <br />
            <span 
              className="text-transparent" 
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
            >
              SINCE 2021
            </span>
          </h1>

          {/* Glitchy Divider */}
          <div className="relative w-32 h-[2px] bg-white/10 mb-10 overflow-hidden">
            <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute inset-0 w-1/2 bg-white/40"
            />
          </div>
          
          <div className="space-y-8">
            <div className="relative">
              <p className="text-lg md:text-2xl text-white font-rajdhani font-bold leading-tight uppercase tracking-tight italic">
                "Evolution from brotherhood to a dominant underground force."
              </p>
              <div className="absolute -left-4 top-0 h-full w-[1px] bg-white/20"></div>
            </div>
            
            <p className="text-sm md:text-base text-white/40 leading-relaxed font-rajdhani tracking-wide max-w-lg">
              We are an elite breeding ground for talent. 
              By instilling relentless discipline and tactical innovation, we transform 
              raw potential into warriors. Our journey is 
              defined by one mindset: <span className="text-white font-bold underline decoration-white/20 underline-offset-4">#ZeroToInfiniti</span>.
            </p>
          </div>

          {/* Bottom Data Label */}
          <div className="mt-12 opacity-10 font-orbitron text-[8px] tracking-[1em] uppercase">
            Data_Stream // Verified_Legacy
          </div>
        </motion.div>
        
        {/* Image Section (Right) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          {/* Floating Cyber Frames */}
          <div className="absolute -inset-4 border border-white/5 rounded-3xl pointer-events-none"></div>
          
          <div className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.02)] bg-zinc-900">
            {/* Grain Overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            
            <img 
              src="/Founders.jpg" 
              alt="Infiniti Legacy" 
              className={`w-full h-auto object-cover transition-all duration-1000 ease-out
                ${isMobile 
                  ? 'grayscale-0 brightness-110' 
                  : 'grayscale brightness-75 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105'
                }`} 
            />
            
            {/* Scanline Effect on Image */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20"></div>

            {/* Brutalist Label */}
            <div className="absolute bottom-6 left-6 z-30 flex items-center gap-3">
              <div className="bg-white text-black px-3 py-1 text-[10px] font-black uppercase font-orbitron italic">
                Legacy_Archive
              </div>
              <div className="bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] text-white/60 font-black uppercase font-rajdhani border border-white/10">
                Ver. 2.6
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-20 h-20 border-t-2 border-r-2 border-white/20 rounded-tr-3xl"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/5 blur-3xl rounded-full animate-pulse"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;