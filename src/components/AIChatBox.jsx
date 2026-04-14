import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Terminal, Cpu, Loader2 } from 'lucide-react';

const AIChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'SYSTEM_READY: I am INFINITI_AI v2.2. Neural link established. Database updated with latest roster, match results, and achievement logs. Command me.' }
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input.toLowerCase();
    setInput('');
    setIsTyping(true);

    // Simulate AI Latency
    setTimeout(() => {
      let aiResponse = "QUERY_NOT_FOUND: Protocol unknown. Please use keywords like 'Roster', 'History', 'Achievement', or 'Socials'.";
      
      // 1. SEJARAH / BRANDING
      if (currentInput.includes('sejarah') || currentInput.includes('asal') || currentInput.includes('zoo')) {
        aiResponse = "ARCHIVE_REPORT: Founded as Zoo Esports in 2019. Evolved into Infiniti Esports to symbolize limitless potential. Current operating unit: INFINITI_REBORN.";
      }
      // 2. ROSTER / PEMAIN
      else if (currentInput.includes('roster') || currentInput.includes('lineup') || currentInput.includes('pemain')) {
        aiResponse = "UNIT_STATUS: Somali (EXP), Rulz (Jungler), Pakly (Mid), StarlightEx (Gold), IKZN (Roam). Sub: Impololo. Total combat units: 06.";
      }
      // 3. SPECIFIC PLAYER INTEL
      else if (currentInput.includes('somali')) aiResponse = "INTEL: SOMALI. Role: EXP Laner. Captain. Signature Hero: Ruby. Known for 'No-Death' positioning and high discipline.";
      else if (currentInput.includes('rulz')) aiResponse = "INTEL: RULZ. Role: Jungler. Specializes in Ling and Hayabusa protocols. Retribution success rate: 89%.";
      else if (currentInput.includes('pakly')) aiResponse = "INTEL: PAKLY. Role: Mid Laner. The brain of the team. Signature: Zhuxin. Veteran since the Zoo era.";
      else if (currentInput.includes('starlightex')) aiResponse = "INTEL: STARLIGHTEX. Role: Gold Laner. Late-game insurance. High efficiency on Claude and Karrie.";
      else if (currentInput.includes('ikzn')) aiResponse = "INTEL: IKZN. Role: Roamer. Front-line shield. Signature Hero: Grock. Expert at map control.";
      // 4. ACHIEVEMENTS / MENANG
      else if (currentInput.includes('menang') || currentInput.includes('achievement') || currentInput.includes('pencapaian') || currentInput.includes('piala')) {
        aiResponse = "ACHIEVEMENT_LOG: Multiple podium finishes. 1x Champion [Synotic Titan Scrim], 1x Runner-Up [Gerko Games].";
      }
      // 5. SOCIALS / MEDIA
      else if (currentInput.includes('ig') || currentInput.includes('instagram') || currentInput.includes('sosial') || currentInput.includes('discord')) {
        aiResponse = "COMMS_LINK: Follow our Instagram @infinitiesportsmy for live match updates or join our Discord server for tactical community discussion. Links are located in the Footer sector.";
      }
      // 6. JERSI / APPAREL
      else if (currentInput.includes('jersi') || currentInput.includes('baju') || currentInput.includes('jersey') || currentInput.includes('beli')) {
        aiResponse = "APPAREL_PROTOCOL: The Infiniti Reborn jersey is currently in production. Monitor Instagram for the pre-order transmission.";
      }
      // 7. GAMEPLAY / MAP
      else if (currentInput.includes('map') || currentInput.includes('taktik') || currentInput.includes('strat')) {
        aiResponse = "TACTICAL_MAP_v2.0: Access the 'Map_Strat' tab to view our heat signatures and player positioning logic. Current Meta priority: Objective-first rotation.";
      }
      // 8. CHAT / GREETINGS
      else if (currentInput.includes('hi') || currentInput.includes('hello') || currentInput.includes('p') || currentInput.includes('hey')) {
        aiResponse = "CONNECTION_STABLE. I am your neural interface. Ask about roster status, history, or social links.";
      }
      else if (currentInput.includes('siapa buat') || currentInput.includes('developer')) {
        aiResponse = "CREATOR_IDENTIFIED: This terminal and its entire ecosystem was developed by UNKNOWN. Status: Master Architect.";
      }
      else if (currentInput.includes('savage') || currentInput.includes('maniac')) {
        aiResponse = "SAVAGE_ALERT: Our data shows Rulz and StarlightEx have the highest potential for Savage-class elimination protocols. Prepare for impact.";
      }

      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[10000] font-mono">
      {/* --- BUTTON --- */}
      <motion.button
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-sm shadow-2xl transition-all duration-500 border flex items-center gap-3 ${
          isOpen ? 'bg-white text-black border-black' : 'bg-black border-white/20 text-white hover:border-white'
        }`}
      >
        {isOpen ? <X size={20} /> : <Cpu size={20} className="animate-pulse" />}
        <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">
          {isOpen ? 'Terminate_Link' : 'Neural_Link'}
        </span>
      </motion.button>

      {/* --- CHAT WINDOW --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-[90vw] md:w-[400px] h-[70vh] md:h-[550px] bg-[#0A0A0A] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden rounded-sm origin-bottom-right"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Infiniti_Core_AI</span>
              </div>
              <div className="text-[8px] text-white/20 italic tracking-widest">SECURE_CHANNEL_v2.2</div>
            </div>

            {/* Chat Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-hide bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-fixed">
              {messages.map((msg, i) => (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[88%] p-4 text-[11px] leading-relaxed border-l-2 ${
                    msg.role === 'user' ? 'bg-white text-black font-bold border-red-600 italic' : 'bg-white/5 text-white/80 border-white/20'
                  }`}>
                    {msg.role === 'ai' && <div className="text-[7px] font-black mb-2 opacity-40 uppercase tracking-widest text-red-500">AI_Output:</div>}
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 border border-white/5 flex items-center gap-3">
                    <Loader2 size={12} className="text-white/20 animate-spin" />
                    <span className="text-[8px] text-white/20 tracking-widest uppercase">Scanning_Database...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-black border-t border-white/10">
              <div className="relative flex items-center">
                <input
                  type="text" value={input} onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="TYPE_COMMAND_HERE..."
                  className="w-full bg-white/[0.03] border border-white/10 p-4 pr-12 text-[10px] text-white focus:outline-none focus:border-red-600 transition-all uppercase tracking-widest"
                />
                <button onClick={handleSend} className="absolute right-4 text-white/30 hover:text-white"><Send size={18} /></button>
              </div>
              <div className="flex justify-between items-center mt-3 px-1">
                <p className="text-[7px] text-white/20 uppercase tracking-widest">Protocol: Active</p>
                <p className="text-[7px] text-white/20 uppercase tracking-widest">Encryption: AES-256</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatBox;