import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* 1. TITIK TENGAH (Sharp Square) */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '4px',
          height: '4px',
          backgroundColor: 'white',
          borderRadius: '0px', // PAKSA TAJAM
          zIndex: 100,
          mixBlendMode: 'difference'
        }}
        animate={{ x: mousePos.x - 2, y: mousePos.y - 2 }}
        transition={{ type: 'spring', damping: 30, stiffness: 1000, mass: 0.1 }}
      />

      {/* 2. OUTER TACTICAL FRAME (The L-Corners) */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isPointer ? '50px' : '30px',
          height: isPointer ? '50px' : '30px',
          borderRadius: '0px', // PAKSA TAJAM
          zIndex: 99,
          mixBlendMode: 'difference',
          border: '1px solid rgba(255,255,255,0.1)' // Garisan halus nipis
        }}
        animate={{ 
          x: mousePos.x - (isPointer ? 25 : 15), 
          y: mousePos.y - (isPointer ? 25 : 15),
          rotate: isPointer ? 180 : 0
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }}
      >
        {/* L-CORNER TOP LEFT */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '8px', height: '8px', borderTop: '2px solid white', borderLeft: '2px solid white', borderRadius: '0px' }} />
        {/* L-CORNER TOP RIGHT */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '8px', height: '8px', borderTop: '2px solid white', borderRight: '2px solid white', borderRadius: '0px' }} />
        {/* L-CORNER BOTTOM LEFT */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '8px', height: '8px', borderBottom: '2px solid white', borderLeft: '2px solid white', borderRadius: '0px' }} />
        {/* L-CORNER BOTTOM RIGHT */}
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '8px', height: '8px', borderBottom: '2px solid white', borderRight: '2px solid white', borderRadius: '0px' }} />
        
        {/* Scanning Line (Hanya keluar bila hover) */}
        {isPointer && (
          <motion.div 
            style={{ position: 'absolute', left: 0, right: 0, height: '1px', backgroundColor: 'rgba(255,0,0,0.5)', borderRadius: '0px' }}
            animate={{ top: ['10%', '90%', '10%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        )}
      </motion.div>

      {/* 3. COORDS DATA (Vibe Cyber) */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          color: 'rgba(255,255,255,0.3)',
          fontSize: '6px',
          fontFamily: 'monospace',
          zIndex: 98,
          mixBlendMode: 'difference'
        }}
        animate={{ x: mousePos.x + 20, y: mousePos.y + 20 }}
      >
        {`[ ${mousePos.x} , ${mousePos.y} ]`}
      </motion.div>
    </div>
  );
};

export default CustomCursor;