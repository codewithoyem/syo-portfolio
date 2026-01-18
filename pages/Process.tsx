import React from 'react';
import { Layers, Server, PenTool, Cloud, Terminal, CheckCircle } from 'lucide-react';
import { Skill } from '../types';

const skills: Skill[] = [
  {
    category: 'Interface & Experience',
    number: '01',
    description: 'Pixel-perfect implementation focusing on performance and accessibility.',
    tools: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
    icon: 'layers'
  },
  {
    category: 'Server & Scale',
    number: '02',
    description: 'Secure, scalable backends built for high availability and data integrity.',
    tools: ['Node.js', 'PostgreSQL', 'Docker', 'Redis'],
    icon: 'server'
  },
  {
    category: 'Design & Strategy',
    number: '03',
    description: 'Translating ambiguous requirements into clear, actionable UI systems.',
    tools: ['Figma', 'Tokens', 'Storybook'],
    icon: 'design'
  },
  {
    category: 'DevOps & Cloud',
    number: '04',
    description: 'Automated pipelines and infrastructure as code for reliable shipping.',
    tools: ['AWS', 'GitHub Actions', 'Vercel'],
    icon: 'cloud'
  }
];

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'layers': return <Layers size={24} />;
    case 'server': return <Server size={24} />;
    case 'design': return <PenTool size={24} />;
    case 'cloud': return <Cloud size={24} />;
    default: return <Terminal size={24} />;
  }
};

export const Process: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 gap-10">
      
      {/* Hero */}
      <div className="flex flex-col items-start max-w-[960px] gap-2">
        <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider">
          <Terminal size={18} />
          <span>Engineering Architecture</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.02em] text-white">
          The Toolkit <span className="text-slate-500">&</span> The Method
        </h1>
        <p className="text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mt-2">
           Bridging creative vision with robust engineering standards. A deep dive into my architectural approach and the technologies that power it.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-6">
        
        {/* Left Column: Skills Matrix */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            <button className="flex h-8 items-center gap-2 rounded-lg bg-primary text-background-dark px-4 text-sm font-bold transition-transform active:scale-95">All</button>
            <button className="flex h-8 items-center gap-2 rounded-lg bg-surface-dark border border-border-glass hover:border-primary/50 text-white px-4 text-sm font-medium transition-all active:scale-95">Frontend</button>
            <button className="flex h-8 items-center gap-2 rounded-lg bg-surface-dark border border-border-glass hover:border-primary/50 text-white px-4 text-sm font-medium transition-all active:scale-95">Backend</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {skills.map((skill) => (
               <div key={skill.number} className="group relative flex flex-col gap-4 rounded-xl border border-border-glass bg-surface-dark p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-start justify-between">
                    <div className="rounded-lg bg-[#20424b] p-2 text-primary">
                      {renderIcon(skill.icon)}
                    </div>
                    <span className="text-xs font-mono text-slate-400 opacity-50">{skill.number}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{skill.category}</h3>
                    <p className="text-[#8dc1ce] text-sm leading-relaxed mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.tools.map(tool => (
                        <span key={tool} className="px-2 py-1 rounded bg-background-dark border border-white/10 text-[11px] text-white font-mono">{tool}</span>
                      ))}
                    </div>
                  </div>
               </div>
             ))}
          </div>
        </div>

        {/* Right Column: Process Pipeline */}
        <div className="lg:col-span-5 h-full">
           <div className="sticky top-24 h-full">
             <div className="glass-panel rounded-2xl p-8 relative overflow-hidden h-full flex flex-col min-h-[500px]">
                {/* Background Decor */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background-dark to-transparent opacity-50 pointer-events-none"></div>

                <div className="flex items-center justify-between mb-8 z-10">
                   <h3 className="text-xl font-bold text-white flex items-center gap-2">
                     <Terminal size={20} className="text-primary" />
                     Engineering Pipeline
                   </h3>
                   <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                </div>

                {/* Pipeline Steps */}
                <div className="relative pl-4 flex-grow z-10">
                   {/* The Line */}
                   <div className="absolute left-[11px] top-4 bottom-8 w-[2px] bg-[#2e5f6b]/30">
                     <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-primary to-transparent animate-flow-down"></div>
                   </div>

                   <div className="space-y-8">
                     {[
                       { title: 'Discovery', desc: 'Defining the problem space, user needs, and technical constraints.', active: true },
                       { title: 'Architecture', desc: 'Planning stack, schema design, data flow, and security protocols.', active: false },
                       { title: 'Build', desc: 'Iterative, component-driven development with frequent commits.', active: false },
                       { title: 'Ship', desc: 'Automated testing, CI/CD pipelines, and zero-downtime deployment.', active: false },
                       { title: 'Improve', desc: 'Analytics integration, user feedback loops, and performance optimization.', active: false },
                     ].map((step, idx) => (
                       <div key={step.title} className="group flex gap-6 relative">
                          <div className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${step.active ? 'bg-[#0f2024] border-2 border-primary shadow-[0_0_10px_rgba(0,204,255,0.4)]' : 'bg-[#0f2024] border border-[#2e5f6b] group-hover:border-primary'} mt-1 transition-colors`}>
                             {step.active && <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>}
                          </div>
                          <div className="flex flex-col pb-2">
                            <h4 className={`text-base font-bold uppercase tracking-wide ${step.active ? 'text-white' : 'text-gray-400 group-hover:text-primary transition-colors'}`}>{step.title}</h4>
                            <p className="text-slate-400 text-sm mt-1">{step.desc}</p>
                          </div>
                       </div>
                     ))}
                   </div>
                </div>

                {/* Status */}
                <div className="mt-8 ml-10 p-3 rounded-lg bg-background-dark border border-dashed border-border-glass flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-slate-500" />
                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">System Status</span>
                  </div>
                  <span className="text-xs text-primary font-mono">ALL SYSTEMS OPERATIONAL</span>
                </div>

             </div>
           </div>
        </div>

      </div>
    </div>
  );
};
