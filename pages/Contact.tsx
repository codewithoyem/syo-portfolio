import React, { useState } from 'react';
import { ArrowRight, Video, ChevronLeft, ChevronRight, Send, Github, Linkedin, Twitter, CheckCircle, Loader2, Youtube } from 'lucide-react';
import { Course } from '../types';

const socialLinks = [
  {
    icon: <Github size={20} />,
    href: "https://github.com/princecodex200",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://linkedin.com/in/princecodex200",
  },
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/princecodex200",
  },
  {
    icon: <Youtube size={20} />,
    href: "https://youtube.com/@princecodex200",
  },
];

const courses: Course[] = [
  {
    title: 'Building 3D Web Apps',
    description: 'Master the art of immersive web experiences. From basic scenes to complex physics simulations.',
    tags: ['Three.js', 'React Fiber'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSnC6zbKJZQLlivqzeK2N1LzvSN9CL-WF1dlF6imNvWGzYgf-QKun27cJhMpN1p2veo_mEAXiExwUK7xzZ3E9QZfc1u2DFRZTRv4tTg2oIGSRJPJdC4xvlkYaKtn195lctlNx8Dzsu_ZnQFzsbZf0jKkRs4ildDQVESDKvYYQpvCRWYTgH_JrY4ZZJiWS7dAYjOEqfh7PmEgVQvLLsH92K1Nbv-5_zpH0vSu-iWyZd9Cvq5syfqz3JFe5yaE48hW7xwbNXaGg7ulHj'
  },
  {
    title: 'Advanced React Patterns',
    description: 'Deep dive into custom Hooks, Context API optimization, and compound component patterns.',
    tags: ['React', 'Performance'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-EyJjPyX8hvwQeqvsRi3t36nOCj8UoOrcQMmYMIJlUe0nrZbbqbKn7vRyBrOopvAQv82PEd4sLaIoZArYPZUPe1BCgE0-WWIiaCSGO3urTYMkHbCyapXEzFvGxZ9MuQ706smieVlbttn5b50JJfceytXhL2ZOATdk2pel0QNsYcJMJxzTplTum1-n2l1KlQFL8EzpGgnqbj1rDo6SdHfSYNwAVkA9qJbDAY3ZKRdX7SsBEKtfG0C6WYgNSiekvTAq2GilBtCCno6T'
  },
  {
    title: 'System Design 101',
    description: 'Understand how to build scalable distributed systems. Load balancing, caching, and database sharding.',
    tags: ['Architecture', 'Scalability'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbP8QvTJ2FibsBRGTwYmZlvnMKJcGMIRKMKESx8Rj0kOpXY6j0u91u3M1PD6euuPbqYDiAJmLkThYuiGwivsL_6w47Q_qe00L-TBKoXsDCeZFdqakjavK1P3XQ3rqBE__s0irJyE6Ak2gJn5Y1pdGpOX_RfCXbtG-7Gi8w558kiGdMw8nfTAYo_n67VB8JWvLebi6cVfQlr0FP7wzBbJXG8dBis_iZHQeGo_Qe482ksaA8SPk7HlHR8ylpi5UQcqblCXYx4lfTv_92'
  }
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Select Project Type',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id || 'projectType']: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', projectType: 'Select Project Type', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center w-full">

      {/* Education Section */}
      <section className="w-full max-w-7xl px-6 py-16 md:py-24 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
              Knowledge <span className="text-primary">Share</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Demystifying complex tech stacks through open-source tutorials, deep-dive courses, and mentorship.
            </p>
          </div>
          <div className="flex gap-6 md:gap-12 border-l border-border-glass pl-6 md:pl-8">
            <div>
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Tutorials</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">10k+</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Views</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <div key={idx} className="glass-panel border border-border-glass rounded-xl overflow-hidden group flex flex-col h-full hover:border-primary/30 transition-all">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent z-10"></div>
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${course.image})` }}></div>
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  {course.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-black/60 backdrop-blur-sm border border-white/10 rounded text-xs font-medium text-primary first:text-primary last:text-white">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{course.description}</p>
                <button className="w-full py-2.5 rounded-lg border border-border-glass bg-transparent hover:bg-primary hover:text-background-dark hover:border-primary text-white text-sm font-medium transition-all flex items-center justify-center gap-2 group/btn">
                  Start Learning
                  <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full relative py-20 mt-10 overflow-hidden border-t border-border-glass bg-gradient-to-b from-background-dark to-[#080a0e]" id="contact">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
              Let's Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Future</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Ready to transform your idea into a digital reality? Whether it's a new product, a technical consultation, or a full-scale build—let's talk code, design, and strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Form */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {status === 'success' ? (
                <div className="bg-surface-dark border border-emerald-500/30 rounded-2xl p-8 flex flex-col items-center text-center animate-[fadeIn_0.5s_ease-out]">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-500">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                  <p className="text-gray-400">Thanks for reaching out, {formData.name || 'friend'}. I'll get back to you within 24 hours.</p>
                  <button onClick={() => setStatus('idle')} className="mt-6 text-sm text-primary hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative">
                  {status === 'loading' && (
                    <div className="absolute inset-0 bg-background-dark/50 backdrop-blur-sm z-10 rounded-lg flex items-center justify-center">
                      <Loader2 size={40} className="animate-spin text-primary" />
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full bg-transparent border-0 border-b-2 border-gray-700 py-2.5 px-0 text-white focus:ring-0 focus:border-primary transition-colors placeholder-transparent peer"
                        placeholder="Name"
                      />
                      <label htmlFor="name" className="text-sm text-gray-500 -mt-8 block transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:mt-0 peer-focus:-mt-6 peer-focus:text-xs peer-focus:text-primary">Your Name</label>
                    </div>
                    <div className="group">
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full bg-transparent border-0 border-b-2 border-gray-700 py-2.5 px-0 text-white focus:ring-0 focus:border-primary transition-colors placeholder-transparent peer"
                        placeholder="Email"
                      />
                      <label htmlFor="email" className="text-sm text-gray-500 -mt-8 block transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:mt-0 peer-focus:-mt-6 peer-focus:text-xs peer-focus:text-primary">Email Address</label>
                    </div>
                  </div>
                  <div className="group">
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="block w-full bg-transparent border-0 border-b-2 border-gray-700 py-2.5 px-0 text-gray-400 focus:text-white focus:ring-0 focus:border-primary transition-colors"
                    >
                      <option>Select Project Type</option>
                      <option>Web Application Development</option>
                      <option>Mobile App Development</option>
                      <option>Technical Consultation</option>
                    </select>
                  </div>
                  <div className="group">
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full bg-transparent border-0 border-b-2 border-gray-700 py-2.5 px-0 text-white focus:ring-0 focus:border-primary transition-colors resize-none placeholder-transparent peer"
                      placeholder="Message"
                    ></textarea>
                    <label htmlFor="message" className="text-sm text-gray-500 -mt-16 block transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:mt-0 peer-focus:-mt-6 peer-focus:text-xs peer-focus:text-primary">Tell me about your project</label>
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group relative px-8 py-3 bg-primary text-background-dark font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(0,204,255,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                      <Send size={18} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </form>
              )}

              <div className="mt-8 pt-8 border-t border-gray-800">
                <p className="text-sm text-gray-500 mb-4">Or connect via socials</p>
                <div className="flex items-center gap-4">
                  {socialLinks.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-surface-dark border border-gray-700 
               hover:border-primary hover:text-primary 
               hover:shadow-[0_0_15px_rgba(0,204,255,0.2)] 
               transition-all text-gray-400"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Calendar Widget */}
            <div className="lg:col-span-5">
              <div className="glass-panel p-6 rounded-2xl shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-white font-bold text-lg">Discovery Call</h3>
                    <p className="text-primary text-sm font-medium">30 Min • Video Meeting</p>
                  </div>
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Video className="text-primary" size={24} />
                  </div>
                </div>

                {/* Simulated Calendar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-white mb-4 px-2">
                    <button className="hover:text-primary"><ChevronLeft size={20} /></button>
                    <span className="font-bold">November 2023</span>
                    <button className="hover:text-primary"><ChevronRight size={20} /></button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center mb-2 text-xs text-gray-500 font-medium">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <span key={d}>{d}</span>)}
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-sm">
                    {[29, 30, 31].map(d => <span key={d} className="p-2 text-gray-600">{d}</span>)}
                    {[1, 2, 3, 4, 5, 6, 7].map(d => <button key={d} className="p-2 text-white hover:bg-white/10 rounded-full">{d}</button>)}
                    <button className="p-2 bg-primary text-background-dark font-bold rounded-full shadow-[0_0_10px_rgba(0,204,255,0.4)]">8</button>
                    {[9, 10, 11].map(d => <button key={d} className="p-2 text-white hover:bg-white/10 rounded-full">{d}</button>)}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-3">Available Times</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="py-2 px-3 rounded border border-gray-700 text-gray-300 text-sm hover:border-primary hover:text-primary">09:00 AM</button>
                    <button className="py-2 px-3 rounded bg-primary text-background-dark font-bold text-sm shadow-[0_0_10px_rgba(0,204,255,0.2)]">10:30 AM</button>
                    <button className="py-2 px-3 rounded border border-gray-700 text-gray-300 text-sm hover:border-primary hover:text-primary">02:00 PM</button>
                    <button className="py-2 px-3 rounded border border-gray-700 text-gray-300 text-sm hover:border-primary hover:text-primary">04:15 PM</button>
                  </div>
                </div>

                <button className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
                  Confirm Booking
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
