import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Rocket, Code, Database, Cloud } from 'lucide-react';
import sundayOlanisimi from "../assets/images/sunday_olanisimi_2.png";

export const Home: React.FC = () => {
  return (
    <div className={`relative z-10 flex-grow flex flex-col justify-center pt-24 pb-12 px-4 md:px-8  bg-[url(${sundayOlanisimi})] bg-no-repeat bg-top bg-size-[80%_auto] md:bg-contain`}>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content (Left) */}
        <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8 pt-10 lg:pt-0">
          {/* Tag */}
          <div className="flex items-center gap-3 animate-[fadeIn_1s_ease-out]">
            <span className="h-[1px] w-8 bg-primary/50"></span>
            <h2 className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Creative Technologist & Full-Stack Dev</h2>
          </div>
          
          {/* Headline */}
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
              I design and build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-blue-500">scalable digital products</span> <br/>
              that solve real problems.
            </h1>
            <div className="text-xl md:text-2xl text-gray-400 font-light mt-2 overflow-hidden">
              <span className="block">Hi, I'm <strong className="text-white font-semibold">Sunday Yemi Olanisimi</strong>.</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed">
            Bridging the gap between engineering and design. I craft high-performance web applications with a focus on user experience and architectural scalability.
          </p>
          
          {/* Actions */}
          <div className="flex flex-wrap gap-4 mt-4">
            <Link to="/projects" className="flex items-center gap-2 bg-primary hover:bg-cyan-300 text-background-dark px-8 py-3.5 rounded-lg font-bold transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(0,204,255,0.3)]">
              <span>View Work</span>
              <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="flex items-center gap-2 border border-gray-700 hover:border-primary/50 bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-lg font-bold transition-all duration-300">
              <span>Contact Me</span>
              <Mail size={20} />
            </Link>
          </div>

          {/* Mobile Stack Pills */}
          <div className="lg:hidden mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Building with</p>
            <div className="flex gap-4 text-gray-400">
              <Code size={24} />
              <div className="font-mono font-bold text-lg">JS</div>
              <Database size={24} />
              <Cloud size={24} />
            </div>
          </div>
        </div>

        {/* Visual/Graphic Area (Right) */}
        <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] flex items-center justify-center perspective-[1000px]">
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Main Floating Card */}
            <div className="absolute z-20 w-64 h-80 bg-surface-dark/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl animate-float flex flex-col gap-4 transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-32 rounded-lg bg-gradient-to-br from-gray-800 to-black relative overflow-hidden group">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
                <div className="p-3 text-[10px] font-mono text-gray-500 leading-relaxed opacity-60">
                   {`const render = () => {`} <br/>
                   &nbsp;&nbsp;{`return (`} <br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;{`<Hero />`} <br/>
                   &nbsp;&nbsp;{`)`} <br/>
                   {`}`}
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-end gap-2">
                <div className="h-2 w-16 bg-primary/40 rounded-full"></div>
                <div className="h-2 w-24 bg-gray-700 rounded-full"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-background-dark border border-gray-700 rounded-full p-3 shadow-lg flex items-center justify-center">
                <Rocket className="text-primary" size={24} />
              </div>
            </div>

            {/* Secondary Floating Element (Profile Image) */}
            <div className="absolute z-10 w-60 h-60 bg-gradient-to-tr from-primary/10 to-purple-500/10 rounded-full blur-xl animate-pulse-glow"></div>
            <div className="absolute z-10 w-56 h-64 bg-surface-dark/30 backdrop-blur-sm border border-white/5 rounded-2xl p-2 shadow-xl animate-float-delayed transform translate-x-24 translate-y-12 rotate-[12deg] overflow-hidden group">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
                {/* Replace src with your actual image URL */}
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent z-20">
                  <p className="text-xs font-bold text-white">Sunday Yemi O.</p>
                  <p className="text-[10px] text-primary">Status: Online</p>
                </div>
              </div>
            </div>

            {/* Background Grid Lines decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
               <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#smallGrid)" />
               </svg>
            </div>

          </div>
        </div>
      </div>
      
      {/* Floating Dock (Desktop Only) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden lg:block">
        <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-8 shadow-2xl shadow-black/50">
          <div className="flex items-center gap-4 pr-6 border-r border-white/10">
            <a href="#" className="text-gray-400 hover:text-white p-2 hover:bg-white/5 rounded-full transition-colors"><Code size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white p-2 hover:bg-white/5 rounded-full transition-colors"><Rocket size={20} /></a>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-primary font-mono font-bold" title="React">React</span>
            <span className="text-blue-500 font-mono font-bold" title="TS">TS</span>
            <span className="text-white font-mono font-bold" title="Next">Next</span>
            <span className="text-green-500 font-mono font-bold" title="Node">Node</span>
          </div>
        </div>
      </div>
    </div>
  );
};
