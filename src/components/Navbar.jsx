import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-[100] transition-all duration-500 pt-6 px-4 pointer-events-none">
      <div 
        className={`max-w-5xl mx-auto rounded-full transition-all duration-500 pointer-events-auto ${
          scrolled ? 'glass py-3 px-8 shadow-2xl shadow-primary/10' : 'bg-transparent py-4 px-6'
        } flex items-center justify-between overflow-hidden`}
      >
        <div className="flex-shrink-0">
          <a href="#home" className="text-2xl font-black text-gradient font-outfit drop-shadow-sm">BK</a>
        </div>
        
        <div className="hidden md:block">
          <div className="ml-10 flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 hover:text-primary transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="https://github.com/bthnkuloglu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-all">
            <Github size={18} strokeWidth={1.5} />
          </a>
          <a href="https://linkedin.com/in/bthnkuloglu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-all">
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
          
          {/* Language Toggle Pill - Corrected to TR/EN sequence */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 hover:border-primary/50 transition-all group scale-90"
          >
            <div className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${language === 'tr' ? 'bg-primary text-dark' : 'text-gray-500'}`}>TR</div>
            <div className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${language === 'en' ? 'bg-primary text-dark' : 'text-gray-500'}`}>EN</div>
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleLanguage} className="text-primary text-[10px] font-bold bg-white/5 px-2 py-1 rounded-lg border border-white/10 italic">
            {language.toUpperCase()}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass mt-4 mx-4 rounded-[2rem] overflow-hidden pointer-events-auto shadow-2xl">
          <div className="px-4 py-8 space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-lg font-outfit font-bold text-gray-300 hover:text-primary transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
