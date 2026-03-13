import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Infinity } from 'lucide-react';

const Values = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const coreValues = [
    {
      id: 1,
      title: "Integrity",
      desc: "We uphold the highest standards of sportsmanship and discipline. A victory without honor is not the Infiniti way.",
      icon: <Shield size={32} className="text-white" />,
      color: "from-blue-500/20"
    },
    {
      id: 2,
      title: "Innovation",
      desc: "Constantly seeking new metas and out-of-the-box strategies. We don't follow trends; we set them.",
      icon: <Zap size={32} className="text-white" />,
      color: "from-purple-500/20"
    },
    {
      id: 3,
      title: "Infinite Growth",
      desc: "#ZeroToInfiniti. There are no limits to our progress. Every setback is a stepping stone to the peak.",
      icon: <Infinity size={32} className="text-white" />,
      color: "from-red-500/20"
    }
  ];

  return (
    <div id="values" className="py-24 md:py-32 bg-[#121212] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/[0.02] blur-[100px] md:blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 md:mb-20 text-left">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.8em] text-white/20 uppercase font-black mb-4 font-rajdhani"
          >
            Our DNA
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-orbitron font-black text-white uppercase italic tracking-tighter"
          >
            Core <span className="text-white/20">Values</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {coreValues.map((v, index) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={!isMobile ? { y: -10 } : {}}
              className="relative p-8 md:p-10 bg-white/[0.03] border border-white/5 rounded-2xl group transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${v.color} to-transparent transition-opacity duration-500 ${isMobile ? 'opacity-40' : 'opacity-0 group-hover:opacity-100'}`}></div>

              <div className="relative z-10 text-left">
                <div className="mb-8 p-4 bg-white/5 w-fit rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  {v.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-orbitron font-bold text-white mb-4 uppercase tracking-wider italic">
                  {v.title}
                </h3>
                <p className={`font-rajdhani leading-relaxed transition-colors text-base ${isMobile ? 'text-white/60' : 'text-white/40 group-hover:text-white/70'}`}>
                  {v.desc}
                </p>
              </div>

              {/* Decorative Number */}
              <div className="absolute -bottom-4 -right-4 text-7xl md:text-8xl font-black text-white/[0.02] select-none group-hover:text-white/[0.05] transition-colors font-orbitron">
                0{v.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;