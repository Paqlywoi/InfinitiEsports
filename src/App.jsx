import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sponsors from './components/Sponsors';
import Timeline from './components/Timeline';
import Roster from './components/Roster';
import Achievement from './components/Achievement';
import Matches from './components/Matches';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Values from './components/Values'; // Import Values baru

// --- CUSTOM CURSOR COMPONENT ---
const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
        transition={{ type: 'spring', damping: 10, stiffness: 500, mass: 0.1 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9998] hidden md:block"
        animate={{ x: mousePos.x - 20, y: mousePos.y - 20 }}
        transition={{ type: 'spring', damping: 20, stiffness: 150, mass: 0.5 }}
      />
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-[#121212] selection:bg-white selection:text-black md:cursor-none font-sans">
      
      <CustomCursor />
      <Navbar />
      
      <main className="flex-1">
        {/* Section Home */}
        <section id="home">
          <Hero />
        </section>

        <section id="aboutus">
          <AboutUs />
        </section>

        {/* Section Values - DNA Team Korang */}
        <section id="values">
          <Values />
        </section>

        <section id="lineup">
          <Roster />
        </section>

        <section id="matches">
          <Matches />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="timeline">
          <Timeline />
        </section>

        <section id="achievement">
          <Achievement />
        </section>

        {/* Section Partners */}
        <section id="partners">
          <Sponsors />
        </section>
      </main>

      {/* Footer Section */}
      <footer id="footer" className="bg-black py-20 text-center border-t border-white/5">
        <div className="text-white font-orbitron tracking-[1em] mb-4 text-xl">INFINITI</div>
        <div className="text-white/30 text-[10px] tracking-[0.5em] uppercase font-rajdhani">
          © 2026 INFINITI ESPORTS MY • ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
  );
}

export default App;