import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative px-6 py-20 font-sans selection:bg-white/20">
      
      {/* Subtle background gradient to make it not completely flat black */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl text-center">
        
        {/* Simple, elegant header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-2xl md:text-4xl font-light text-white tracking-[0.3em] uppercase">
            Infiniti Esports
          </h1>
          <div className="w-12 h-[1px] bg-white/20 mx-auto mt-8"></div>
        </motion.div>

        {/* Emotional Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="space-y-6 text-white/60 text-sm md:text-base leading-loose font-light"
        >
          <p>
            To our fans, families, and the community,
          </p>
          <p>
            From the early days of Zoo Esports to the ambitious vision of Infiniti Reborn, you have been our greatest strength. Today, with heavy hearts, we announce the indefinite suspension of all Infiniti Esports operations.
          </p>
          <p>
            While we leave a very small door open for the future, the reality is that this is most likely our final goodbye. The competitive journey is beautiful but demanding, and sometimes, the hardest decision is knowing when to step away from the game.
          </p>
          <p>
            Thank you for cheering for us in our victories and standing by our side through every defeat. Thank you for your energy, your belief, and the memories we built together. We will cherish this journey forever.
          </p>
        </motion.div>

        {/* Roster Sign-off */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="mt-16 text-[10px] md:text-xs text-white/30 tracking-[0.2em] uppercase"
        >
          <p className="mb-6">
            Somali <span className="mx-2 text-white/10">|</span> 
            Rulz <span className="mx-2 text-white/10">|</span> 
            Pakly <span className="mx-2 text-white/10">|</span> 
            StarlightEx <span className="mx-2 text-white/10">|</span> 
            IKZN <span className="mx-2 text-white/10">|</span> 
            Impololo
          </p>
          <div className="inline-block pt-6 border-t border-white/10">
            <p className="italic lowercase tracking-widest text-white/20">Signing off.</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
