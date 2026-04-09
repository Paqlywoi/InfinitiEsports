import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Terminal, Cpu } from 'lucide-react';

const AIChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'SYSTEM_READY: I am INFINITI_AI v2.1. Initializing tactical database... Ask me about our Roster, History, or Map Strategy.' }
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate AI Processing
    setTimeout(() => {
      let aiResponse = "QUERY_NOT_FOUND: Please refine your command. Access the 'Directory' for valid protocols.";
      
      const query = input.toLowerCase();

      // LOGIC: SEJARAH / ZOO ESPORTS
      if (query.includes('sejarah') || query.includes('asal') || query.includes('zoo')) {
        aiResponse = "ARCHIVE_FOUND: Infiniti Esports evolved from the original 'Zoo Esports' unit. We rebranded to Infiniti to reflect our limitless progression in the competitive scene. Current era: INFINITI_REBORN.";
      }
      // LOGIC: LINEUP / ROSTER
      else if (query.includes('roster') || query.includes('lineup') || query.includes('pemain')) {
        aiResponse = "UNIT_DEPLOYMENT: Somali (EXP), Rulz (Jungler), Pakly (Mid), StarlightEx (Gold), and IKZN (Roam). Impololo serves as our Strategic Substitute.";
      }
      // LOGIC: SPECIFIC PLAYERS
      else if (query.includes('somali')) aiResponse = "FILE_ACCESS: SOMALI. Role: EXP Laner. Status: Unit Captain. Signature: Ruby. Quote: 'Discipline is the key to victory.'";
      else if (query.includes('pakly')) aiResponse = "FILE_ACCESS: PAKLY. Role: Mid Laner. Known as the Tactical Lead since the Zoo Esports era.";
      else if (query.includes('rulz')) aiResponse = "FILE_ACCESS: RULZ. Role: Jungler. High mechanics unit with a focus on Hayabusa/Ling protocols.";
      // LOGIC: MAP
      else if (query.includes('map') || query.includes('strat')) {
        aiResponse = "TACTICAL_ALERT: Map_Strat v2.0 is live. Features include Position_View and multi-unit Heat_Map signatures.";
      }
      // LOGIC: GREETINGS
      else if (query.includes('hi') || query.includes('hello') || query.includes('p')) {
        aiResponse = "CONNECTION_ESTABLISHED. I am the neural link for Infiniti. Ready for tactical inquiry.";
      }

      setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[10000] font-mono">
      {/* --- FLOATING BUTTON --- */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-sm shadow-2xl transition-all duration-500 border flex items-center gap-3 ${
          isOpen ? 'bg-white text-black border-black' : 'bg-black border-white/20 text-white hover:border-white'
        }`}
      >
        {isOpen ? <X size={20} /> : <Cpu size={20} className="animate-pulse" />}
        <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">
          {isOpen ? 'Close_Link' : 'Neural_Link'}
        </span>
      </motion.button>

      {/* --- CHAT WINDOW --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            // Responsive: Full width on mobile, 380px on desktop
            className="absolute bottom-20 right-0 w-[85vw] md:w-[400px] h-[70vh] md:h-[550px] bg-[#0A0A0A] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden rounded-sm origin-bottom-right"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-red-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Infiniti_AI_Terminal</span>
              </div>
              <div className="text-[8px] text-white/20 animate-pulse">ENCRYPTED_SESSION</div>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-hide bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-fixed"
            >
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 text-[11px] leading-relaxed relative ${
                    msg.role === 'user' 
                    ? 'bg-white text-black font-bold italic border-l-4 border-red-600' 
                    : 'bg-white/5 text-white/80 border border-white/10'
                  }`}>
                    {msg.role === 'ai' && (
                      <div className="text-[7px] font-black mb-2 opacity-50 uppercase tracking-widest text-red-500 flex items-center gap-1">
                        <Bot size={10}/> AI_LOG_OUTPUT:
                      </div>
                    )}
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-black border-t border-white/10">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="INPUT_COMMAND_..."
                  className="w-full bg-white/[0.03] border border-white/10 p-4 pr-12 text-[10px] text-white focus:outline-none focus:border-red-600 transition-all uppercase tracking-widest"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-4 text-white/40 hover:text-white transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="flex justify-between items-center mt-3 px-1">
                <p className="text-[7px] text-white/20 uppercase tracking-[0.1em]">Protocol: Neural_V2</p>
                <p className="text-[7px] text-white/20 uppercase tracking-[0.1em]">Status: Optimal</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatBox;