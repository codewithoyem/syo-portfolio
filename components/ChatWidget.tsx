import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, User, Loader2 } from 'lucide-react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

const SYSTEM_INSTRUCTION = `You are SYO-Bot, the intelligent portfolio assistant for Sunday Yemi Olanisimi, a Creative Technologist and Full-Stack Developer.
Your goal is to help visitors understand Sunday's skills, projects, and experience.

Key Info about Sunday:
- Role: Creative Technologist & Full-Stack Dev.
- Focus: Bridging engineering and design, high-performance web apps, scalable digital products.
- Core Stack: React, Next.js, TypeScript, Node.js, WebGL (Three.js/React Fiber), AI Integration.
- Key Projects:
  1. Crypto Asset Manager (Fintech, D3.js, zero latency).
  2. Velvet Checkout (E-commerce, Vue 3, high conversion).
  3. Synapse Visualizer (AI Tool, Python/Three.js, LLM logic tracing).
  4. Neon Horizon (3D e-commerce case study).
- Location: Available for Remote & Global work.
- Contact: Encouraged to use the "Hire Me" button or contact form on the site.

Tone: Professional, enthusiastic, tech-savvy, slightly "cyberpunk" to match the site aesthetic. Keep answers concise and helpful.`;

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', text: "Hi! I'm SYO-Bot. Ask me anything about Sunday's projects, skills, or experience." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const getChatSession = () => {
    if (!chatSessionRef.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatSessionRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: { systemInstruction: SYSTEM_INSTRUCTION }
      });
    }
    return chatSessionRef.current;
  };

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: userText };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const chat = getChatSession();
      const result = await chat.sendMessage({ message: userText });
      const responseText = result.text;

      const botMessage: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: responseText 
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat Error:', error);
      const errorMessage: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: "I'm having trouble connecting to the neural network right now. Please try again later." 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      {isOpen && (
        <div className="pointer-events-auto mb-4 w-[350px] md:w-[400px] h-[500px] bg-[#13161c]/95 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden animate-[fadeIn_0.2s_ease-out]">
          {/* Header */}
          <div className="p-4 border-b border-white/10 bg-gradient-to-r from-primary/10 to-transparent flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                <Bot size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">SYO-Bot</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-white/10' : 'bg-primary/10'}`}>
                  {msg.role === 'user' ? <User size={14} className="text-white" /> : <Sparkles size={14} className="text-primary" />}
                </div>
                <div 
                  className={`p-3 rounded-2xl text-sm leading-relaxed max-w-[80%] ${
                    msg.role === 'user' 
                      ? 'bg-white text-background-dark rounded-tr-none font-medium' 
                      : 'bg-white/5 text-gray-200 border border-white/5 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Sparkles size={14} className="text-primary" />
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                   <Loader2 size={16} className="animate-spin text-primary" />
                   <span className="text-xs text-gray-500">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-[#0c0e12]/50">
            <form onSubmit={handleSend} className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Sunday's skills..."
                className="w-full bg-[#1e2329] border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-500"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-primary text-background-dark hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-background-dark shadow-lg shadow-primary/25 hover:scale-110 transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        
        {/* Notification Dot */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-background-dark"></span>
          </span>
        )}
      </button>
    </div>
  );
};
