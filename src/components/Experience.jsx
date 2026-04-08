import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Rocket, Terminal } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  // Icon mapping for Experience items
  const getExpIcon = (index) => {
    switch (index) {
      case 0: return <Rocket />;
      case 1: return <Briefcase />;
      case 2: return <Terminal />;
      default: return <Briefcase />;
    }
  };

  const expItems = t('experience.expItems') || [];
  const eduItems = t('experience.eduItems') || [];

  return (
    <section id="experience" className="py-32 relative bg-[#020617] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-[-10%] w-[30%] h-[30%] bg-accent/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 relative">
          
          {/* EXPERIENCE TIMELINE */}
          <div className="relative">
            <div className="flex items-center space-x-6 mb-16 ml-4">
               <div className="p-4 bg-primary/20 rounded-3xl text-primary ring-1 ring-primary/50 relative group">
                  <Briefcase size={32} />
               </div>
               <h2 className="text-4xl md:text-6xl font-black font-outfit italic tracking-tighter text-white overflow-visible leading-[1.3]">{t('experience.title')}</h2>
            </div>
            
            {/* The Vertical Line (Laser Style) */}
            <div className="absolute left-[34px] top-[140px] bottom-10 w-[2px] bg-gradient-to-b from-primary via-primary/20 to-transparent shadow-[0_0_15px_rgba(0,242,255,0.2)]"></div>

            <div className="space-y-12 pl-12">
              {expItems.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline Node */}
                  <div className="absolute -left-[54px] top-6 z-10">
                     <div className="w-4 h-4 rounded-full bg-[#020617] border-2 border-primary shadow-[0_0_10px_rgba(0,242,255,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
                  </div>

                  <div className="glass-card p-10 hover:bg-white/[0.02] transition-colors border-white/5 relative">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] font-outfit px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary">
                        {exp.period}
                      </span>
                      <div className="text-gray-600 group-hover:text-primary transition-colors">{getExpIcon(idx)}</div>
                    </div>
                    <h3 className="text-2xl font-black mb-1 font-outfit text-white/90 group-hover:text-primary transition-all">{exp.title}</h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 font-bold">{exp.company}</p>
                    <p className="text-sm text-gray-400 leading-relaxed font-medium">{exp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* EDUCATION TIMELINE */}
          <div className="relative lg:mt-24">
            <div className="flex items-center space-x-6 mb-16 ml-4">
               <div className="p-4 bg-[#00f2ff]/20 rounded-3xl text-[#00f2ff] ring-1 ring-[#00f2ff]/50 relative group">
                  <GraduationCap size={32} />
               </div>
               <h2 className="text-4xl md:text-6xl font-black font-outfit italic tracking-tighter text-white overflow-visible leading-[1.3]">{t('experience.eduTitle')}</h2>
            </div>
            
            {/* The Vertical Line (Cyber Blue Style) */}
            <div className="absolute left-[34px] top-[140px] bottom-10 w-[2px] bg-gradient-to-b from-[#00f2ff] via-[#00f2ff]/20 to-transparent shadow-[0_0_15px_rgba(0,242,255,0.2)]"></div>

            <div className="space-y-12 pl-12">
              {eduItems.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline Node */}
                  <div className="absolute -left-[54px] top-6 z-10">
                     <div className="w-4 h-4 rounded-full bg-[#020617] border-2 border-[#00f2ff] shadow-[0_0_10px_rgba(0,242,255,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
                  </div>

                  <div className="glass-card p-10 hover:bg-white/[0.02] transition-colors border-white/5 relative">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] font-outfit px-4 py-2 bg-[#00f2ff]/10 border border-[#00f2ff]/30 rounded-full text-[#00f2ff] drop-shadow-sm">
                        {edu.period}
                      </span>
                      <div className="text-gray-600 group-hover:text-[#00f2ff] transition-colors"><GraduationCap size={20}/></div>
                    </div>
                    <h3 className="text-2xl font-black mb-1 font-outfit text-white group-hover:text-[#00f2ff] transition-all">{edu.degree}</h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 font-bold">{edu.institution}</p>
                    {edu.desc && (
                      <p className="text-sm text-gray-400 leading-relaxed font-medium pt-6 border-t border-white/5">{edu.desc}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
