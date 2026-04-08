import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: 'kuloglu07.gs@gmail.com', href: 'mailto:kuloglu07.gs@gmail.com' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', value: 'bthnkuloglu', href: 'https://linkedin.com/in/bthnkuloglu' },
    { icon: <Github size={20} />, label: 'GitHub', value: 'bthnkuloglu', href: 'https://github.com/bthnkuloglu' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+90 533 947 03 08', href: 'tel:+905339470308' },
  ];

  return (
    <section id="contact" className="py-32 relative bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - RED AREA: Spreading text above */}
        <div className="mb-20">
           <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 border-white/10">
              <MessageSquare size={14} className="text-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">{t('contact.badge')}</span>
           </div>
           
           <div className="grid lg:grid-cols-2 gap-12 items-end">
              <div>
                <h2 className="text-5xl md:text-8xl font-black font-outfit tracking-tighter text-white italic leading-[1.3] mb-8 overflow-visible">
                  {t('contact.title1')} <br /> 
                  <span className="text-gradient drop-shadow-[0_0_20px_rgba(0,242,255,0.2)]">{t('contact.title2')}</span>
                </h2>
              </div>
              <div className="pb-2">
                <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                  {t('contact.description')}
                </p>
              </div>
           </div>
        </div>

        {/* ORANGE AREA: Equal height columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-4"
          >
            {contactInfo.map((info, idx) => (
              <a 
                key={idx} 
                href={info.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-5 glass-card rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] group transition-all duration-500 h-full"
              >
                <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-dark transition-all duration-500 shadow-lg shadow-primary/10 flex-shrink-0">
                  {info.icon}
                </div>
                <div className="ml-5 uppercase tracking-[0.2em] font-outfit overflow-hidden">
                  <p className="text-[10px] text-gray-500 font-black mb-1">{info.label}</p>
                  <p className="text-sm font-bold text-white/80 group-hover:text-white transition-colors normal-case tracking-normal truncate">{info.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative w-full flex flex-col justify-center"
          >
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">{t('contact.formName')}</label>
                  <input type="text" className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-3 focus:border-primary/50 focus:bg-white/[0.05] outline-none transition-all font-medium text-white/90 placeholder:text-gray-700" placeholder={t('contact.placeholderName')} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">{t('contact.formEmail')}</label>
                  <input type="email" className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-3 focus:border-primary/50 focus:bg-white/[0.05] outline-none transition-all font-medium text-white/90 placeholder:text-gray-700" placeholder={t('contact.placeholderEmail')} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">{t('contact.formSubject')}</label>
                <input type="text" className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-3 focus:border-primary/50 focus:bg-white/[0.05] outline-none transition-all font-medium text-white/90 placeholder:text-gray-700" placeholder={t('contact.placeholderSubject')} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">{t('contact.formMessage')}</label>
                <textarea rows="4" className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-3 focus:border-primary/50 focus:bg-white/[0.05] outline-none transition-all resize-none font-medium text-white/90 placeholder:text-gray-700" placeholder={t('contact.placeholderMessage')}></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-shimmer w-full mt-4"
                onClick={(e) => e.preventDefault()}
              >
                <span className="flex items-center justify-center">
                  {t('contact.formSubmit')} <Send size={18} className="ml-3" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
