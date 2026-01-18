import React from 'react';
import { ArrowRight, Download, Terminal, Database, Layers, Code, User, Calendar, Briefcase, Zap, ExternalLink, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CaseStudy: React.FC = () => {
  return (
    <div className="relative pt-28 pb-20">
      {/* Background Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[800px] bg-radial-glow pointer-events-none z-0 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Hero */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32 items-center">
          <div className="lg:col-span-7 flex flex-col gap-8">
             <div className="flex items-center gap-3">
               <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
               <span className="text-primary font-mono text-xs uppercase tracking-[0.2em]">Case Study 01</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
               Neon<br/>Horizon
             </h1>
             <p className="text-xl text-gray-400 max-w-xl leading-relaxed border-l-2 border-primary/30 pl-6">
                A high-fidelity 3D e-commerce experience redefining digital storefronts with WebGL and React-Three-Fiber.
             </p>
             <div className="mt-4 flex flex-wrap gap-4">
                <button className="bg-primary text-background-dark h-12 px-8 rounded-lg font-bold text-sm hover:brightness-110 transition-all flex items-center gap-2">
                   <span>View Live Site</span>
                   <ExternalLink size={18} />
                </button>
             </div>
          </div>
          
          <div className="lg:col-span-5 relative group perspective-[1000px]">
             <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
             <div className="relative bg-surface-dark border border-white/10 rounded-2xl aspect-[4/5] overflow-hidden shadow-2xl transform transition-transform duration-700 hover:rotate-y-12 hover:rotate-x-6 rotate-y-6">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBYz4SBRfqxteiCdmCK3bD4BBjrU5nTugK598b3jqVBJNKT3az3_x3JX_YQMtD1Bdca_L91pC9joyHx7FkT6N9LF_EuBXsNiMPQtAFojrNSX-aHhsJUWa8XmDuEKfeh_VWyzEKYJHEE0gK0Nk9UO58aclJoiI-9OMq_D2K3uLFg0oqSKrscx9ohDNlDbJUqvHC9PsHE82wk5-aZ_0saPybTZ5RSxI-sP2gCdEt0AKOu9UQ30lr6ynKhcezkt9KzY-QJIaahM2ckXhuN)' }}
                ></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-xl">
                   <div className="flex justify-between items-end">
                      <div>
                         <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Rendering</p>
                         <p className="text-white font-bold text-lg">60 FPS</p>
                      </div>
                      <div className="h-8 w-24 flex items-end gap-1">
                        {[40, 70, 50, 90, 60].map((h, i) => (
                          <div key={i} className="w-1/5 bg-primary rounded-sm" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </header>

        {/* Metadata */}
        <section className="mb-32">
           <div className="glass-panel rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Role', value: 'Lead Developer', icon: User },
                { label: 'Timeline', value: 'Aug - Dec 2023', icon: Calendar },
                { label: 'Client', value: 'Future Corp', icon: Briefcase },
              ].map(item => (
                <div key={item.label} className="flex flex-col gap-2">
                   <span className="text-gray-500 text-xs uppercase tracking-widest font-bold">{item.label}</span>
                   <span className="text-white font-medium">{item.value}</span>
                </div>
              ))}
              <div className="flex flex-col gap-2">
                 <span className="text-gray-500 text-xs uppercase tracking-widest font-bold">Core Stack</span>
                 <div className="flex gap-2">
                    <Code className="text-primary" size={20} />
                    <Layers className="text-primary" size={20} />
                    <Cloud className="text-primary" size={20} />
                 </div>
              </div>
           </div>
        </section>

        {/* Challenge */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 items-start">
           <div className="md:col-span-4 sticky top-24">
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-4 flex items-center gap-3">
                 <Zap className="text-primary" size={32} />
                 The Challenge
              </h2>
              <p className="text-gray-400">Balancing visual fidelity with performance constraints on the open web.</p>
           </div>
           <div className="md:col-span-8">
              <div className="bg-surface-dark border border-white/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                 <h3 className="text-2xl font-bold text-white mb-6">Heavy Assets vs. Load Time</h3>
                 <p className="text-gray-300 leading-relaxed mb-8">
                    The client required a fully immersive 3D environment for their product showcase. However, standard GLTF models were totaling over 40MB, causing unacceptable load times on mobile networks. The challenge was to implement a compression pipeline and level-of-detail (LOD) system that maintained the artistic vision without the performance penalty.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-black/20 p-4 rounded-lg border-l-2 border-red-500">
                       <span className="block text-red-400 text-xs font-bold uppercase mb-1">Constraint</span>
                       <span className="text-sm text-gray-300">Total bundle size under 2MB</span>
                    </div>
                    <div className="bg-black/20 p-4 rounded-lg border-l-2 border-primary">
                       <span className="block text-primary text-xs font-bold uppercase mb-1">Goal</span>
                       <span className="text-sm text-gray-300">60FPS on mid-range mobile devices</span>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* System Architecture Visualization */}
        <section className="mb-32">
           <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-4 text-white">System Architecture</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
           </div>
           <div className="glass-panel p-8 md:p-16 rounded-2xl overflow-x-auto">
              <div className="min-w-[800px] flex justify-between items-center relative">
                 <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0"></div>
                 
                 {[
                   { title: 'Client', icon: User, type: 'start' },
                   { title: 'CDN', icon: Database, tag: 'Edge Cache' },
                   { title: 'Frontend', icon: Layers, tag: 'Next.js' },
                   { title: '3D Pipeline', icon: Terminal, tag: 'Draco' }
                 ].map((node, i) => (
                   <div key={i} className="relative z-10 flex flex-col items-center gap-4 group">
                      {node.tag && <div className="bg-surface-dark px-3 py-1 rounded-full text-xs text-primary mb-2 border border-primary/20">{node.tag}</div>}
                      <div className="w-16 h-16 rounded-xl bg-surface-card border border-white/10 flex items-center justify-center shadow-lg group-hover:border-primary transition-colors">
                         <node.icon className="text-gray-400 group-hover:text-primary" size={24} />
                      </div>
                      <span className="text-sm font-mono text-gray-400">{node.title}</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Code Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-32 items-center">
           <div className="order-2 md:order-1">
              <div className="rounded-xl overflow-hidden bg-[#1e2329] border border-white/10 shadow-2xl font-mono text-sm leading-relaxed">
                 <div className="bg-[#16181d] px-4 py-3 border-b border-white/5 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    <span className="ml-2 text-xs text-gray-500">ModelLoader.tsx</span>
                 </div>
                 <div className="p-6 overflow-x-auto text-gray-300">
<pre><code><span className="text-[#ff79c6]">import</span> {'{ useGLTF }'} <span className="text-[#ff79c6]">from</span> <span className="text-[#f1fa8c]">'@react-three/drei'</span>;

<span className="text-[#ff79c6]">export const</span> <span className="text-[#50fa7b]">Scene</span> = () =&gt; {'{'}
  <span className="text-[#6272a4]">// Draco compression enabled</span>
  <span className="text-[#ff79c6]">const</span> {'{ nodes, materials }'} = <span className="text-[#8be9fd]">useGLTF</span>(
    <span className="text-[#f1fa8c]">'/assets/horizon-compressed.glb'</span>
  );

  <span className="text-[#ff79c6]">return</span> (
    &lt;<span className="text-[#50fa7b]">group</span> dispose={`{null}`}&gt;
       &lt;<span className="text-[#50fa7b]">mesh</span>
         geometry={`{nodes.Terrain.geometry}`}
         material={`{materials.NeonGrid}`}
       /&gt;
    &lt;/<span className="text-[#50fa7b]">group</span>&gt;
  );
{'}'}</code></pre>
                 </div>
              </div>
           </div>
           <div className="order-1 md:order-2 flex flex-col gap-6">
              <h2 className="text-3xl font-bold uppercase tracking-tight flex items-center gap-3 text-white">
                 <Code className="text-primary" size={32} />
                 The Build
              </h2>
              <p className="text-gray-400 leading-relaxed">
                 We utilized <strong>React Three Fiber</strong> to bridge the gap between the DOM and the WebGL canvas. The code snippet highlights our implementation of Draco compression, reducing asset size by 85%.
              </p>
           </div>
        </section>

        {/* Next Project Footer */}
        <footer className="border-t border-white/10 pt-20 pb-10">
           <Link to="/projects" className="group block relative overflow-hidden rounded-2xl bg-surface-dark py-20 px-8 md:px-20 text-center transition-all hover:bg-surface-card">
              <span className="relative z-10 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Next Case Study</span>
              <h2 className="relative z-10 text-4xl md:text-6xl font-bold text-white uppercase group-hover:scale-105 transition-transform duration-500">
                 Quantum <span className="text-gray-600 group-hover:text-white transition-colors">Finance</span>
              </h2>
              <div className="relative z-10 mt-8 inline-flex items-center gap-2 text-gray-400 group-hover:text-primary transition-colors">
                 <span>View Project</span>
                 <ArrowRight size={20} />
              </div>
           </Link>
        </footer>

      </div>
    </div>
  );
};