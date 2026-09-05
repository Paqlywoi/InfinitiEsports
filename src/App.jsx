import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldAlert } from 'lucide-react';

export default function App() {
  return (
    // INI PEMBUNGKUS UTAMA YANG TERTINGGAL (Wajib ada 1 pembalut untuk semua elemen)
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden font-mono px-6">

      {/* Background Noise & Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05)_0%,transparent_60%)] z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl text-center">

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-sm mb-8"
        >
          <div className="w-2 h-2 bg-red-600 rounded-full animate-ping shadow-[0_0_10px_#ff0000]"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-red-500">System_Offline</span>
        </motion.div>

        {/* Glitch Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-white/20"
        >
          <ShieldAlert size={64} strokeWidth={1} />
        </motion.div>

        {/* Big Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-orbitron font-[1000] text-white uppercase italic tracking-tighter mb-4"
        >
          OPERATIONS <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>HALTED</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/40 text-xs md:text-sm tracking-widest uppercase mb-12 max-w-md"
        >
          Tactical recalibration in progress. We are temporarily offline to upgrade our matrices. We will return shortly.
        </motion.p>

        {/* Terminal Log */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full bg-white/[0.02] border border-white/5 p-4 md:p-6 rounded-sm text-left"
        >
          <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
            <Terminal size={14} className="text-red-500" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">Terminal_Log</span>
          </div>
          <div className="space-y-2 text-[10px] md:text-xs text-white/30 uppercase tracking-wider flex flex-col gap-1">
            <p className="flex justify-between"><span>[14:02:00] Disconnecting nodes...</span><span className="text-green-500">OK</span></p>
            <p className="flex justify-between"><span>[14:02:05] Archiving combat logs...</span><span className="text-green-500">OK</span></p>
            <p className="flex justify-between"><span>[14:02:10] Initiating hypersleep...</span><span className="text-green-500">OK</span></p>
            <motion.p
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-red-500 font-bold mt-2 pt-2 border-t border-white/5"
            >
              _ AWAITING_REBOOT_SIGNAL
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[8px] tracking-[0.5em] text-white/10 uppercase whitespace-nowrap">
        Infiniti Reborn // End of Transmission
      </div>

    </div>
  );
}
