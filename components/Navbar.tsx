import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Work', path: '/projects' },
    { name: 'Process', path: '/process' },
    { name: 'Case Study', path: '/case-study' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <div className="glass-panel mx-auto max-w-7xl rounded-xl h-16 px-6 flex items-center justify-between shadow-lg shadow-black/20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-background-dark font-bold leading-none group-hover:scale-105 transition-transform duration-300">
            <Terminal size={18} />
          </div>
          <span className="font-bold text-lg tracking-tight text-white hidden sm:block">Prince<span className="text-primary">Codex</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path ? 'text-primary' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden md:block relative overflow-hidden group rounded-lg bg-primary px-5 py-2 text-sm font-bold text-background-dark hover:bg-white transition-colors duration-300">
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
          
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-4 right-4 glass-panel rounded-xl p-6 flex flex-col gap-4 animate-[fadeIn_0.2s_ease-out]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg font-medium text-gray-300 hover:text-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            className="mt-4 text-center rounded-lg bg-primary px-5 py-3 text-sm font-bold text-background-dark"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </Link>
        </div>
      )}
    </header>
  );
};
