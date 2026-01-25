import React from 'react';
import { Github, Linkedin, Twitter, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto w-full border-t border-border-glass py-8 bg-background-dark relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
        <p>© 2024 Sunday Yemi Olanisimi (Prince Codex). Built with intention.</p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/princecodex200/" className="hover:text-primary transition-colors flex items-center gap-2">
            <Linkedin size={18} /> <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a href="https://github.com/princecodex200" className="hover:text-primary transition-colors flex items-center gap-2">
            <Github size={18} /> <span className="hidden sm:inline">GitHub</span>
          </a>
          <a href="https://x.com/princecodex200" className="hover:text-primary transition-colors flex items-center gap-2">
            <Twitter size={18} /> <span className="hidden sm:inline">Twitter</span>
          </a>
          <a href="https://youtube.com/@princecodex200" className="hover:text-primary transition-colors flex items-center gap-2">
            <Youtube size={18} /> <span className="hidden sm:inline">Youtube</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
