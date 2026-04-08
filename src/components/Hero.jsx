import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Terminal, Smartphone, Code2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const titles = t('hero.titles');
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[index % titles.length];
      
      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setIndex(prev => prev + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, titles, typingSpeed]);

  return (
    <section id="home" className="relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden bg-dark">
      {/* Mesh Gradients for Premium Look */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full opacity-50"></div>
      
      {/* Decorative dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="min-h-[180px] md:min-h-[220px] flex flex-col items-center justify-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-500 mb-4 tracking-[0.3em] uppercase font-outfit">
              {t('hero.title1')}
            </h2>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight font-outfit h-full">
              <span className="text-gradient drop-shadow-[0_0_20px_rgba(0,242,255,0.3)]">
                {displayText}
              </span>
              <span className="inline-block w-1 h-10 md:h-16 bg-primary ml-2 align-middle opacity-50"></span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed px-4">
            {t('hero.subtitle').replace('{name}', 'Batuhan Kuloğlu')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#contact" 
              className="btn-shimmer"
            >
              <span className="flex items-center">
                {t('hero.cta')} <ArrowRight size={18} className="ml-2" />
              </span>
            </a>
            <a 
              href="/CV_BatuhanKuloglu_EN.pdf" 
              target="_blank"
              className="px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center group border border-white/10"
            >
              {t('hero.resume')} <Download size={18} className="ml-2 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Quick Tech Labels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        >
          <div className="flex items-center space-x-2"><Code2 size={20}/> <span className="font-outfit font-bold uppercase tracking-widest text-xs">React Engine</span></div>
          <div className="flex items-center space-x-2"><Terminal size={20}/> <span className="font-outfit font-bold uppercase tracking-widest text-xs">TypeScript</span></div>
          <div className="flex items-center space-x-2"><Smartphone size={20}/> <span className="font-outfit font-bold uppercase tracking-widest text-xs">Native App</span></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
