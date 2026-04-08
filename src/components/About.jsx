import { motion } from 'framer-motion';
import { User, GraduationCap, Zap, Smartphone, Layout } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const cards = [
    { title: t('about.card1'), description: t('about.desc1'), icon: <GraduationCap size={20} /> },
    { title: t('about.card2'), description: t('about.desc2'), icon: <Layout size={20} /> },
    { title: t('about.card3'), description: t('about.desc3'), icon: <Smartphone size={20} /> },
  ];

  return (
    <section id="about" className="py-32 relative bg-dark overflow-hidden">
      {/* Mesh Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30%] h-[30%] bg-primary/5 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-6 ml-2">
              <Zap size={16} className="text-primary fill-primary" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/80">{t('about.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 font-outfit italic tracking-tighter ml-2">
              {t('about.title1')} <br/> <span className="text-gradient">{t('about.title2')}</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent rounded-full mb-12 ml-2"></div>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-6 font-medium">
              {t('about.p1')}
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-12 font-medium">
              {t('about.p2')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {cards.map((card, index) => (
                <div key={index} className="glass-card p-6 rounded-[2rem] border border-white/5 bg-white/[0.01] flex flex-col min-h-[165px] transition-all duration-300 hover:bg-white/[0.03] group">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform origin-left">{card.icon}</div>
                  <h3 className="font-bold text-xs uppercase tracking-widest mb-3 text-white/90 group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-medium">{card.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[550px] flex items-center justify-center lg:justify-end"
          >
             {/* BACKGROUND LAYER 1 - Architecture Code */}
             <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-10 w-[85%] h-[70%] glass rounded-3xl opacity-20 -rotate-6 border-white/5 p-6 font-mono text-[8px] text-primary/40 hidden md:block"
             >
                <div className="mb-4 text-primary/50 uppercase tracking-widest border-b border-primary/20 pb-2">~/core/engine.sys</div>
                <div className="space-y-1">
                   <div className="text-purple-400/40">import</div> <div className="text-gray-400/40">neural_lib</div>
                   <div className="mt-2">class CoreEngine:</div>
                   <div className="pl-4">def __init__(self):</div>
                   <div className="pl-8 text-emerald-400/40">self.status = "OPTIMAL"</div>
                   <div className="pl-8 text-accent/40">self.load = "DYNAMIC_READY"</div>
                   <div className="mt-4 text-gray-500/30"># Logic Gate Initialization</div>
                   <div>gate = SyncProcessor(threads=32)</div>
                </div>
             </motion.div>

             {/* MAIN TERMINAL LAYER (FRONT) */}
             <div className="w-full md:w-[90%] aspect-[4/5] glass rounded-[3rem] overflow-hidden p-8 relative group border-white/10 shadow-3xl bg-[#020617]/90 backdrop-blur-3xl z-10">
                {/* Terminal Header */}
                <div className="flex items-center justify-between mb-8">
                   <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_8px_rgba(255,95,86,0.6)]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_8px_rgba(255,189,46,0.6)]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_8px_rgba(39,201,63,0.6)]"></div>
                   </div>
                   <div className="text-[10px] font-mono text-gray-500 tracking-widest uppercase opacity-70">workspace/manifest.json</div>
                </div>

                {/* Enriched JSON Content */}
                <div className="font-mono text-[12px] md:text-sm leading-relaxed overflow-hidden">
                   <div className="text-gray-600">{"{"}</div>
                   <div className="pl-4 flex items-start">
                      <span className="text-purple-400">"dev_identity"</span>
                      <span className="text-gray-400 mx-2">:</span>
                      <span className="text-emerald-400">"batuhan_kuloglu"</span>
                      <span className="text-gray-600">,</span>
                   </div>
                   <div className="pl-4 flex items-start">
                      <span className="text-purple-400">"dev_alias"</span>
                      <span className="text-gray-400 mx-2">:</span>
                      <span className="text-emerald-400">"Founder @ RUVORI"</span>
                      <span className="text-gray-600">,</span>
                   </div>
                   <div className="pl-4 flex items-start">
                      <span className="text-purple-400">"core_architecture"</span>
                      <span className="text-gray-400 mx-2">:</span>
                      <span className="text-gray-500">{"{"}</span>
                   </div>
                   <div className="pl-10 text-blue-400">"frontend" <span className="text-gray-500">:</span> <span className="text-amber-400">"react_p_tier"</span><span className="text-gray-600">,</span></div>
                   <div className="pl-10 text-blue-400">"processing" <span className="text-gray-500">:</span> <span className="text-amber-400">"ai_deep_learning"</span><span className="text-gray-600">,</span></div>
                   <div className="pl-10 text-blue-400">"scaling" <span className="text-gray-500">:</span> <span className="text-amber-400">"distributed_systems"</span></div>
                   <div className="pl-4 text-gray-500">{"}"}<span className="text-gray-600">,</span></div>
                   
                   <div className="pl-4 mt-2 flex items-start">
                      <span className="text-purple-400">"operation_status"</span>
                      <span className="text-gray-400 mx-2">:</span>
                      <span className="text-gray-500">{"["}</span>
                   </div>
                   <div className="pl-10 text-emerald-500 italic font-bold tracking-tight">"SYSTEM_ACTIVE_READY" <span className="text-gray-500">,</span></div>
                   <div className="pl-10 text-emerald-500 italic font-bold tracking-tight">"PRODUCTION_LIVE"</div>
                   <div className="pl-4 text-gray-500">{"]"}</div>
                   <div className="text-gray-600">{"}"}</div>

                   {/* Live Pulse Cursor */}
                   <div className="flex items-center mt-8 space-x-3 pb-8">
                      <motion.div 
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-3 h-5 bg-primary shadow-[0_0_10px_rgba(0,242,255,0.8)]"
                      />
                      <span className="text-[10px] text-gray-600 uppercase tracking-widest animate-pulse font-bold">Awaiting Input...</span>
                   </div>
                </div>

                {/* Floating Success Indicator Card - FIXED POSITION TO PREVENT CLIPPING */}
                <div className="absolute bottom-12 right-6 glass rounded-2xl p-4 border-primary/30 bg-primary/20 backdrop-blur-xl shadow-2xl z-20 hidden lg:block border transition-transform hover:scale-105 duration-500">
                   <div className="flex items-center space-x-4">
                      <div className="p-2 bg-dark/50 rounded-lg">
                         <div className="w-3 h-3 rounded-full bg-primary animate-ping"></div>
                      </div>
                      <div className="font-outfit">
                         <p className="text-[9px] font-black uppercase tracking-tighter text-primary">System Integrity</p>
                         <p className="text-[11px] font-bold text-white">100% Verified</p>
                      </div>
                   </div>
                </div>
             </div>

             {/* DECORATIVE GLOWS */}
             <div className="absolute -z-10 top-[-10%] right-[-10%] w-80 h-80 bg-accent/20 blur-[120px] rounded-full animate-pulse"></div>
             <div className="absolute -z-10 bottom-[-5%] left-[-5%] w-80 h-80 bg-primary/20 blur-[120px] rounded-full animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
