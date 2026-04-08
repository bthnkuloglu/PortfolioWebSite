import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { LanguageProvider, useLanguage } from './LanguageContext';

const AppContent = () => {
  const { t } = useLanguage();
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (blobRef.current) {
        blobRef.current.style.left = `${clientX}px`;
        blobRef.current.style.top = `${clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020617] selection:bg-primary/30 selection:text-white overflow-x-hidden">
      
      {/* Interactive Mouse Spotlight */}
      <div 
        ref={blobRef}
        className="fixed pointer-events-none w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px] -translate-x-1/2 -translate-y-1/2 z-[1] transition-opacity duration-500"
      ></div>

      {/* Static Ambient Auras */}
      <div className="fixed inset-0 -z-[100] overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/15 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[45%] h-[45%] bg-indigo-900/10 blur-[160px] rounded-full"></div>
        <div className="absolute top-[40%] left-[20%] w-[35%] h-[35%] bg-primary/5 blur-[160px] rounded-full"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <footer className="py-20 bg-dark/80 backdrop-blur-xl border-t border-white/5 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-3xl font-black font-outfit text-gradient">BK</h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-12">
               {[
                 { name: 'Github', href: 'https://github.com/bthnkuloglu' },
                 { name: 'Linkedin', href: 'https://linkedin.com/in/bthnkuloglu' },
               ].map(link => (
                 <a 
                   key={link.name} 
                   href={link.href} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-primary transition-all duration-300"
                 >
                   {link.name}
                 </a>
               ))}
            </div>

            <div className="text-[10px] font-outfit font-bold uppercase tracking-[0.2em] text-gray-700 text-center md:text-right">
              <p>© 2026 Batuhan Kuloğlu</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Global CSS for H2 Padding Fix (Prevent Descender Truncation) */}
      <style>{`
        h2, .text-gradient {
          line-height: 1.3 !important; 
          padding-bottom: 0.15em !important;
          overflow: visible !important;
          vertical-align: middle;
        }
      `}</style>
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
