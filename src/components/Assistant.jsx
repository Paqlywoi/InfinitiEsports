import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Assistant = () => {
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null);

  // --- Check Device ---
  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // --- 3D TILT LOGIC (Macam kat Roster) ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    // Container Floating (Melekat kat Kanan Bawah)
    <div className="fixed bottom-16 md:bottom-20 right-6 z-[80] font-mono">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative cursor-pointer group"
        onClick={() => window.open('https://discord.gg/yduStkjB', '_blank')} // Buka Discord
      >
        {/* Bulatan Hologram Utama (Pulsing) */}
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center overflow-hidden">
          
          {/* Inner Neon Glow (Pulsing) */}
          <div className="absolute inset-2 rounded-full border-2 border-white/20 animate-pulse shadow-[0_0_20px_#fff]"></div>
          
          {/* Scanline Effect inside bot */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(255,255,255,0.05)_50%)] bg-[length:100%_4px] opacity-20 z-10 pointer-events-none"></div>

          {/* Assistant Core (3 circles) */}
          <div className="relative flex gap-1 z-20">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -5, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full shadow-[0_0_10px_#fff]"
              />
            ))}
          </div>
        </div>

        {/* --- TEXT LABEL (Floating Text kat bawah bot) --- */}
        {!isMobile && (
          <motion.div
            className="absolute -bottom-10 right-0 text-right opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 pointer-events-none"
            style={{ transform: "translateZ(50px)" }} // Layering
          >
            <p className="text-[9px] font-orbitron font-black text-white italic tracking-widest uppercase">
              I.N.A_Neural_Link
            </p>
            <p className="text-[7px] font-rajdhani font-black text-white/40 uppercase tracking-[0.3em]">
              System_Online // Standby
            </p>
          </motion.div>
        )}
        
        {/* Glow behind bot (Mobile Only) */}
        {isMobile && (
             <div className="absolute inset-0 rounded-full bg-white/10 blur-[30px] -z-10 animate-pulse"></div>
        )}
      </motion.div>
    </div>
  );
};

export default Assistant;