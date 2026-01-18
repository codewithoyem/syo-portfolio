import React from 'react';
import { Project } from '../types';
import { ExternalLink, FileText, View, Zap, BrainCircuit, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects: Project[] = [
  {
    id: 'crypto-asset-manager',
    number: '01',
    category: 'Fintech Dashboard',
    title: 'Crypto Asset Manager',
    description: 'Simplifying complex multi-chain crypto-transactions for non-technical users. The goal was to build a comprehensive dashboard providing real-time data visualization and secure asset management with zero latency.',
    challenge: 'Zero latency data visualization',
    tags: ['React', 'Node.js', 'D3.js', 'Socket.io'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAdGSqeoFPQb3g0rbJKISWD0fYLe3cV__eSXQ5NSe5kGiJEpJDw_fI0skKk0c3xUCDsKpqWc-SSAyTROuuByQM3fEvdBB1_cizhLywbFWWQXywNhCpGjAJWelUxJ34-wmaJyIZ1wZ9OKwbvWFg8Z1S_xlzi0ZJicaW-83MrRBVs1IIxwX7cOneEnQwsh9BX8UjoH3wBNP0nXAeQNqvlDkaYnFqzbhsZfFXq7xV1VirWYWLX4mkCOP7Nf9KHDd1_ytcVHF-HTBOURjd',
    bgDirection: 'left',
    hasGenAi: false
  },
  {
    id: 'velvet-checkout',
    number: '02',
    category: 'E-commerce Platform',
    title: 'Velvet Checkout',
    description: 'Reducing cart abandonment via micro-interactions. We engineered a streamlined checkout flow designed for high conversion, using predictive pre-fetching to make navigation feel instantaneous.',
    challenge: 'High performance flow',
    tags: ['Vue 3', 'Firebase', 'Stripe API', 'Tailwind'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA01iokxK8CVk6RJD1z8b-BRxqVzsqTBm1ftnr4M7F4hWJEDqA6JtnV_nTVu3gWutWVBt7FdUNvDVdLdNlEZG6AAef9gM6zK9zr0V9ToRFWalw7AUUSKMe8m9QXVRNB023zh__JjT8McNwfjrny6Oncbr5chAJqds8dviZ-xkeQYJto9XzsaFS2toe_mVz1Uc433QSyWSqIulhUhwKJB9vUAdEYP1ccbuo7Ehd4VMmNWRpr5cyAga_CEt9OueyVYolrZ_NHwlirMsE8',
    bgDirection: 'right',
    hasPerformance: true
  },
  {
    id: 'synapse-visualizer',
    number: '03',
    category: 'AI Analysis Tool',
    title: 'Synapse Visualizer',
    description: 'Visualizing large language model outputs in a human-readable format. This tool processes raw JSON outputs from GPT-4 and renders interactive node graphs to trace logic paths and hallucinations.',
    challenge: 'LLM Logic Tracing',
    tags: ['Python', 'FastAPI', 'Three.js', 'AWS Lambda'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWmO6QY7zsXQBaqapkT5kNhYhFQdjXysk1nI8jURUr6ayHZazmtnxMV1Thv6YRilV4q93pftov4tT1ssYJbm4oydp8-l7mnSi6yI4aZXhhs-2VJmiAKG5ipj8cCsb1P7vEeSe8VFKMoJprQ1vmVM-rmObyfM9zzl6YSbb9MhcN_cArSx3g-hB0wMuUq9BP4swydXRBqFlNBfQOi3vEzBttph0FLAb1pj3jewK-GmVomHy0Qo3DxHY20m6Gf1k4p-P0zZQGfvQ83uco',
    bgDirection: 'left',
    hasGenAi: true
  }
];

export const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-20 py-24 max-w-7xl">
      {/* Page Heading */}
      <div className="mb-20 md:mb-32 relative">
        <div className="absolute -top-10 -left-10 w-20 h-20 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl"></div>
        <div className="flex flex-col gap-6 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-[-0.03em] bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
            Selected Projects
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl border-l-2 border-primary pl-6">
            A curation of technical challenges and creative solutions. Exploring the intersection of design engineering and full-stack performance.
          </p>
        </div>
      </div>

      {/* Projects Loop */}
      <div className="flex flex-col gap-24 md:gap-32">
        {projects.map((project) => (
          <div key={project.id} className="group/card glass-panel border border-border-glass rounded-3xl p-1 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_-10px_rgba(0,204,255,0.1)]">
            <div className={`flex flex-col ${project.bgDirection === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-[#0f1115]/40 rounded-[20px] overflow-hidden`}>
              
              {/* Image Side */}
              <div className="lg:w-7/12 relative overflow-hidden h-[300px] lg:h-auto min-h-[400px] group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark/80 lg:bg-gradient-to-r"></div>
                
                {/* Badge */}
                {project.hasGenAi && (
                  <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md rounded-full px-4 py-1 border border-white/10 flex items-center gap-2">
                    <BrainCircuit size={14} className="text-emerald-400" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Gen AI</span>
                  </div>
                )}
                {project.hasPerformance && (
                   <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md rounded-full px-4 py-1 border border-white/10 flex items-center gap-2">
                    <Zap size={14} className="text-purple-400" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">High Performance</span>
                  </div>
                )}
                 {!project.hasPerformance && !project.hasGenAi && (
                   <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md rounded-full px-4 py-1 border border-white/10 flex items-center gap-2">
                    <View size={14} className="text-primary" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">WebGL Powered</span>
                  </div>
                 )}
              </div>

              {/* Content Side */}
              <div className="lg:w-5/12 p-8 md:p-12 flex flex-col justify-center relative">
                <div className={`absolute top-0 ${project.bgDirection === 'right' ? 'left-0' : 'right-0'} p-12 opacity-10 pointer-events-none`}>
                  <span className="text-9xl font-black text-white">{project.number}</span>
                </div>

                <h3 className={`text-sm font-bold tracking-widest uppercase mb-3 ${project.hasGenAi ? 'text-emerald-400' : project.hasPerformance ? 'text-purple-400' : 'text-primary'}`}>
                  {project.category}
                </h3>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{project.title}</h2>
                
                <div className="space-y-4 mb-8">
                  <h4 className="flex items-center gap-2 text-white font-medium">
                     <BrainCircuit size={18} className={project.hasGenAi ? 'text-emerald-400' : 'text-primary'} />
                     The Challenge
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-black/40 border border-white/10 px-3 py-1 rounded-lg text-xs font-medium text-gray-300 hover:border-primary hover:text-primary transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                   <Link to="/case-study" className="bg-primary hover:bg-primary/90 text-background-dark px-6 py-3 rounded-xl font-bold text-sm transition-all transform active:scale-95 shadow-[0_0_20px_-5px_rgba(0,204,255,0.3)] flex items-center gap-2">
                      Live Demo
                      <ExternalLink size={18} />
                   </Link>
                   <Link to="/case-study" className="bg-transparent border border-white/20 hover:border-white text-white px-6 py-3 rounded-xl font-bold text-sm transition-all hover:bg-white/5 flex items-center gap-2">
                      Case Study
                      <FileText size={18} />
                   </Link>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-32 border-t border-border-glass pt-16 flex flex-col items-center text-center">
        <p className="text-primary font-medium mb-4">Want to see more?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's build the future together.</h2>
        <a href="#" className="inline-flex items-center gap-3 text-white border-b border-primary pb-1 hover:text-primary transition-colors text-lg">
          <span>View GitHub Profile</span>
          <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
};