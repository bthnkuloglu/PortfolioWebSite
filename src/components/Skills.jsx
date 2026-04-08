import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Cpu, Layout, Smartphone, Database, Box, 
  Terminal, Layers, Binary, Zap, Code2, Search,
  Briefcase, Rocket, BrainCircuit, Bot, 
  DatabaseZap, GitBranch, Monitor, Server, 
  Settings, Shapes, Printer, Activity, ScanFace,
  PieChart, Users, TrendingUp, Lightbulb
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import VerticesBg from './VerticesBg';

// --- Shared 3D Tile Component ---
const SkillTile = ({ name, icon, color, shadowColor }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const borderClasses = {
     red: 'border-[#ff3333]/50 group-hover:border-[#ff0000] group-hover:shadow-[0_0_25px_-5px_#ff0000]',
     green: 'border-[#33ff33]/50 group-hover:border-[#00ff00] group-hover:shadow-[0_0_25px_-5px_#00ff00]',
     yellow: 'border-[#ffcc00]/50 group-hover:border-[#ffcc00] group-hover:shadow-[0_0_25px_-5px_#ffcc00]',
     cyan: 'border-[#00f2ff]/50 group-hover:border-[#00f2ff] group-hover:shadow-[0_0_25px_-5px_#00f2ff]'
  };

  const iconColorClasses = {
     red: 'text-[#ff3333] group-hover:text-[#ff0000]',
     green: 'text-[#33ff33] group-hover:text-[#00ff00]',
     yellow: 'text-[#ffcc00] group-hover:text-[#ffcc00]',
     cyan: 'text-[#00f2ff] group-hover:text-[#00f2ff]'
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group w-full h-full"
    >
      <div 
        className={`p-5 h-full flex flex-col items-center justify-center text-center transition-all duration-500 border-2 bg-[#020617] relative overflow-hidden rounded-2xl ${borderClasses[color]}`}
        style={{ transform: "translateZ(20px)" }}
      >
        <div className={`p-3 bg-white/[0.03] rounded-2xl mb-4 group-hover:scale-110 transition-all duration-500 relative z-10 ${iconColorClasses[color]} group-hover:brightness-125`}>
           {icon}
        </div>
        <span className="text-[11px] font-black font-outfit uppercase tracking-wider text-white transition-all relative z-10 leading-tight">
          {name}
        </span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { t } = useLanguage();

  const softwareSkills = [
    { name: 'HTML5', icon: <Layers size={22}/>, color: 'red' },
    { name: 'CSS3', icon: <Monitor size={22}/>, color: 'red' },
    { name: 'JavaScript', icon: <Code2 size={22}/>, color: 'red' },
    { name: 'React', icon: <Box size={22}/>, color: 'red' },
    { name: 'Next.js', icon: <Zap size={22}/>, color: 'red' },
    { name: 'TypeScript', icon: <Code2 size={22}/>, color: 'cyan' },
    { name: 'React Native', icon: <Smartphone size={22}/>, color: 'cyan' },
    { name: 'Node.js', icon: <Terminal size={22}/>, color: 'cyan' },
    { name: 'C# / .NET', icon: <Binary size={22}/>, color: 'cyan' },
    { name: 'Git / GitHub', icon: <GitBranch size={22}/>, color: 'cyan' },
  ];

  const dataAiSkills = [
    { name: 'Python', icon: <Binary size={22}/>, color: 'green' },
    { name: 'Deep Learning', icon: <BrainCircuit size={22}/>, color: 'green' },
    { name: 'Machine Learning', icon: <Cpu size={22}/>, color: 'green' },
    { name: 'CNN Architectures', icon: <Shapes size={22}/>, color: 'green' },
    { name: 'MRI Processing', icon: <ScanFace size={22}/>, color: 'green' },
    { name: 'MSSQL / SQL', icon: <DatabaseZap size={22}/>, color: 'green' },
  ];

  const businessSkills = [
    { name: 'MVP Development', icon: <Rocket size={22}/>, color: 'yellow' },
    { name: 'Team Leadership', icon: <Users size={22}/>, color: 'yellow' },
    { name: 'Product Dev', icon: <Lightbulb size={22}/>, color: 'yellow' },
    { name: 'Startup Strategy', icon: <TrendingUp size={22}/>, color: 'yellow' },
    { name: '3D Production', icon: <Printer size={22}/>, color: 'yellow' },
    { name: 'Cost Optimization', icon: <PieChart size={22}/>, color: 'yellow' },
  ];

  return (
    <section id="skills" className="relative bg-[#020617] overflow-hidden">
      <VerticesBg />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-40">
        
        {/* Main Section Header */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-6 ml-2">
            <div className="w-10 h-px bg-primary/40"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">{t('skills.badge')}</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black font-outfit tracking-tighter text-white italic ml-2 leading-[0.9] mb-8">
            {t('skills.title1')} <br /> 
            <span className="text-gradient drop-shadow-[0_0_20px_rgba(0,242,255,0.2)]">{t('skills.title2')}</span>
          </h2>
          <p className="text-gray-500 max-w-xl text-lg font-medium leading-relaxed font-outfit ml-3">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* --- GRID ARCHITECTURE --- */}
        <div className="space-y-20">
          
          {/* Row 1: Software Mastery */}
          <div className="relative">
             <div className="flex items-center gap-6 mb-10 ml-2">
                <h3 className="text-xl font-black font-outfit uppercase tracking-widest text-[#00f2ff] italic shrink-0">Software Engineering</h3>
                <div className="h-[2px] bg-gradient-to-r from-[#00f2ff]/40 to-transparent flex-grow"></div>
             </div>
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 auto-rows-fr">
               {softwareSkills.map((skill, i) => (
                 <SkillTile key={i} {...skill} />
               ))}
             </div>
          </div>

          {/* Row 2: Side-by-Side EQUAL BLOCKS */}
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Left */}
            <div className="flex flex-col h-full">
               <div className="flex items-center gap-6 mb-10 ml-2">
                  <h3 className="text-lg font-black font-outfit uppercase tracking-widest text-[#00f2ff] italic shrink-0">Data & AI Research</h3>
                  <div className="h-[2px] bg-gradient-to-r from-[#00f2ff]/40 to-transparent flex-grow"></div>
               </div>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 auto-rows-fr h-full">
                 {dataAiSkills.map((skill, i) => (
                   <SkillTile key={i} {...skill} />
                 ))}
               </div>
            </div>

            {/* Right */}
            <div className="flex flex-col h-full">
               <div className="flex items-center gap-6 mb-10 ml-2">
                  <h3 className="text-lg font-black font-outfit uppercase tracking-widest text-[#00f2ff] italic shrink-0">Business & Execution</h3>
                  <div className="h-[2px] bg-gradient-to-r from-[#00f2ff]/40 to-transparent flex-grow"></div>
               </div>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 auto-rows-fr h-full">
                 {businessSkills.map((skill, i) => (
                   <SkillTile key={i} {...skill} />
                 ))}
               </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
