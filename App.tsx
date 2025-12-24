import React, { useState, useEffect } from 'react';
import {
  CodeIcon,
  BotIcon,
  LayoutIcon,
  TelegramIcon,
  ServerIcon,
  TerminalIcon,
  CpuIcon
} from './components/Icons';

const App: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const [terminalStatus, setTerminalStatus] = useState<string>('contact_me --now');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().split('T')[1].split('.')[0] + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTerminalClick = () => {
    const email = 'makkyxa404@mail.ru';

    if (!navigator.clipboard) {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      setTerminalStatus('executing...');
      setTimeout(() => {
        setTerminalStatus('>> EMAIL COPIED [OK]');
        setIsCopied(true);
      }, 600);
      setTimeout(() => {
        setTerminalStatus('contact_me --now');
        setIsCopied(false);
      }, 3000);
      return;
    }

    navigator.clipboard.writeText(email).catch(() => {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    });

    setTerminalStatus('executing...');
    setTimeout(() => {
      setTerminalStatus('>> EMAIL COPIED [OK]');
      setIsCopied(true);
    }, 600);
    setTimeout(() => {
      setTerminalStatus('contact_me --now');
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden font-sans text-slate-200">

      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl z-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-5 auto-rows-[minmax(140px,auto)]">

        <div className="md:col-span-2 lg:col-span-4 lg:row-span-3 glass-card rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden group border border-white/5 hover:border-primary/20 transition-all duration-500">
           <div className="absolute inset-0 bg-gradient-to-b from-surfaceHighlight/20 to-transparent pointer-events-none" />
           <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

           <div className="relative z-10 flex flex-col h-full">
             <div className="flex flex-col items-center text-center">
               <div className="w-28 h-28 rounded-full border border-white/10 mb-5 p-2 relative group-hover:scale-105 transition-transform duration-500 bg-surface/50 backdrop-blur-md">
                  <div className="absolute inset-0 rounded-full border border-primary/30 animate-spin-slow opacity-50"></div>
                  <div className="absolute inset-2 rounded-full border border-accent/20 animate-reverse-spin opacity-50"></div>
                  <img
                    src="https://i.yapx.ru/cZeQV.png"
                    alt="Makkyxa Profile"
                    className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10"
                  />
                  <div className="absolute bottom-1 right-1 w-3 h-3 bg-success border-2 border-surface rounded-full z-20 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
               </div>

               <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tighter font-mono bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">Makkyxa</h1>

               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surfaceHighlight/50 border border-white/5 mb-6 shadow-inner">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                  <span className="text-gray-300 font-mono text-xs tracking-widest uppercase">Full Stack Dev</span>
               </div>
             </div>

             <div className="flex gap-3 w-full justify-center mb-8">
               <a href="https://t.me/Makkyxa" target="_blank" rel="noopener noreferrer" className="w-full max-w-[200px] flex items-center justify-center gap-2 p-3 bg-[#229ED9]/5 hover:bg-[#229ED9]/10 hover:shadow-[0_0_20px_rgba(34,158,217,0.1)] rounded-xl transition-all duration-300 border border-[#229ED9]/10 group/btn">
                 <TelegramIcon className="w-4 h-4 text-[#229ED9]" />
                 <span className="text-sm font-medium text-[#229ED9]">Telegram</span>
               </a>
             </div>

             <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

             <div className="grid grid-cols-2 gap-4 mb-auto">
                <div className="bg-black/20 rounded-lg p-3 border border-white/5 flex flex-col items-center justify-center hover:bg-white/5 transition-colors">
                   <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mb-1">Experience</span>
                   <span className="text-white font-bold text-lg">4+ Years</span>
                </div>
                <div className="bg-black/20 rounded-lg p-3 border border-white/5 flex flex-col items-center justify-center hover:bg-white/5 transition-colors">
                   <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mb-1">Projects</span>
                   <span className="text-white font-bold text-lg">50+</span>
                </div>
                <div className="bg-black/20 rounded-lg p-3 border border-white/5 flex flex-col items-center justify-center hover:bg-white/5 transition-colors">
                   <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mb-1">Location</span>
                   <span className="text-white font-bold text-lg">Remote</span>
                </div>
                <div className="bg-black/20 rounded-lg p-3 border border-white/5 flex flex-col items-center justify-center hover:bg-white/5 transition-colors">
                   <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mb-1">Language</span>
                   <span className="text-white font-bold text-lg">EN / RU</span>
                </div>
             </div>

             <div className="bg-surfaceHighlight/30 rounded-xl p-4 border border-white/5 relative mt-6">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-50 rounded-xl pointer-events-none"></div>
                <p className="text-gray-300 text-sm leading-relaxed font-light text-center relative z-10 italic">
                  "Building digital products with a focus on aesthetics, scalability, and clean architecture."
                </p>
             </div>
           </div>
        </div>

        <div className="md:col-span-2 lg:col-span-8 glass-card rounded-3xl p-10 flex flex-col justify-center relative overflow-hidden min-h-[300px] border border-white/5 hover:border-accent/20 transition-colors duration-500">
          <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none transform translate-x-1/4 -translate-y-1/4">
             <CodeIcon className="w-80 h-80" />
          </div>

          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-none tracking-tight">
              Code with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-white animate-pulse-slow">Intelligence.</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg font-light leading-relaxed">
              I transform complex requirements into seamless, user-centric applications. Focusing on bot automation and reactive web interfaces.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mt-10">
             <div className="flex items-center gap-3 text-xs font-mono text-gray-500 uppercase tracking-widest">
               <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span> Modern Stack
             </div>
             <div className="flex items-center gap-3 text-xs font-mono text-gray-500 uppercase tracking-widest">
               <span className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span> Clean Code
             </div>
             <div className="flex items-center gap-3 text-xs font-mono text-gray-500 uppercase tracking-widest">
               <span className="w-1.5 h-1.5 bg-success rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span> 24/7 Uptime
             </div>
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-8 glass-card rounded-3xl p-8 relative group border border-white/5">
          <div className="absolute inset-0 bg-surfaceHighlight/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <CpuIcon className="w-6 h-6 text-accent" />
                Tech Stack
                </h3>
                <span className="text-[10px] font-mono text-gray-600 px-2 py-1 bg-black/40 rounded border border-white/5">FULL OVERVIEW</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2 w-fit">Frontend & Mini Apps</p>
                {['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand / Query'].map(tech => (
                    <div key={tech} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors cursor-default">
                    <div className="w-1 h-1 bg-primary rounded-full"></div> {tech}
                    </div>
                ))}
                </div>
                <div className="space-y-4">
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2 w-fit">Backend & Automation</p>
                {['Python (FastAPI)', 'Node.js', 'PostgreSQL / Redis', 'Aiogram / Telegraf'].map(tech => (
                    <div key={tech} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors cursor-default">
                    <div className="w-1 h-1 bg-accent rounded-full"></div> {tech}
                    </div>
                ))}
                </div>
                <div className="space-y-4">
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2 w-fit">Integrations & DevOps</p>
                {['WebSockets / REST', 'Docker / Compose', 'Nginx', 'Git / CI/CD'].map(tech => (
                    <div key={tech} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors cursor-default">
                    <div className="w-1 h-1 bg-success rounded-full"></div> {tech}
                    </div>
                ))}
                </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-1 lg:col-span-3 glass-card rounded-3xl p-8 hover:bg-surfaceHighlight/40 transition-all duration-300 group flex flex-col justify-between border border-white/5 hover:border-blue-500/30">
          <div>
            <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-500/20 group-hover:text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <BotIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Telegram Bots</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              High-load bots, shops, and moderation tools.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
            <span className="text-[10px] font-mono text-blue-400 bg-blue-500/5 px-2 py-1 rounded">AIOGRAM</span>
            <div className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>

        <div className="md:col-span-1 lg:col-span-3 glass-card rounded-3xl p-8 hover:bg-surfaceHighlight/40 transition-all duration-300 group flex flex-col justify-between border border-white/5 hover:border-purple-500/30">
          <div>
            <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-purple-500/20 group-hover:text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
              <LayoutIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Web Apps</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Landing pages and SPAs with modern UX/UI.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
            <span className="text-[10px] font-mono text-purple-400 bg-purple-500/5 px-2 py-1 rounded">REACT</span>
            <div className="w-2 h-2 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-2 glass-card rounded-3xl p-8 hover:bg-surfaceHighlight/40 transition-all duration-300 group flex flex-col justify-between border border-white/5 hover:border-green-500/30">
          <div>
            <div className="w-12 h-12 bg-green-500/10 text-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-green-500/20 group-hover:text-green-300 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
              <ServerIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Backend</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Secure & Scalable APIs.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
            <span className="text-[10px] font-mono text-green-400 bg-green-500/5 px-2 py-1 rounded">FASTAPI</span>
            <div className="w-2 h-2 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>

        <div className="md:col-span-4 lg:col-span-12 glass-card rounded-3xl p-5 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/5">
           <div className="flex items-center gap-4 w-full md:w-auto">
             <div className="w-10 h-10 bg-black/40 rounded-xl flex items-center justify-center border border-white/5">
               <TerminalIcon className="w-4 h-4 text-gray-400" />
             </div>
             <div className="flex flex-col font-mono">
               <span className="text-[10px] text-gray-500 uppercase tracking-wider">System Status</span>
               <div className="text-sm font-medium text-success flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></span>
                 <span>All Systems Operational</span>
               </div>
             </div>
           </div>

           <div
             onClick={handleTerminalClick}
             className="hidden md:flex items-center gap-2 font-mono text-xs text-gray-600 bg-black/20 px-4 py-2 rounded-lg border border-white/5 cursor-pointer hover:bg-black/40 hover:text-gray-300 transition-colors active:scale-95"
             title="Click to copy email"
           >
             <span className="text-accent">guest@makkyxa:~$</span>
             <span className={`overflow-hidden whitespace-nowrap ${isCopied ? 'text-success' : ''}`}>
               {terminalStatus}
               <span className="animate-pulse">_</span>
             </span>
           </div>

           <div className="flex items-center gap-6">
             <span className="text-xs text-gray-500 font-mono hidden lg:block">{time}</span>
             <span className="text-xs text-gray-700 font-mono font-semibold tracking-wider">© 2025 MAKKYXA DEV</span>
           </div>
        </div>

      </div>
    </div>
  );
};

export default App;
