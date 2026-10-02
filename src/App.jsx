import React from 'react';
import { motion } from 'framer-motion';
import { Server, BrainCircuit, ExternalLink, Code2, Network, MessageSquare, ChevronRight } from 'lucide-react';
import Logo from './components/Logo';

export default function App() {
  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden text-gray-200">
      
      {/* Background Orbs */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 glass-panel border-b border-white/5 bg-[#030014]/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="w-10 h-10 drop-shadow-[0_0_10px_rgba(129,140,248,0.5)]" />
            <span className="text-xl font-bold tracking-wide text-white">InkMind</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#products" className="hover:text-white transition-colors">Products</a>
            <a href="#services" className="hover:text-white transition-colors">Enterprise Services</a>
            <a href="#leadership" className="hover:text-white transition-colors">Leadership</a>
          </div>
          <a href="mailto:contact@inkmind.tech" className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-full text-sm font-medium transition-colors border border-white/10 text-white">
            Get in Touch
          </a>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-indigo-300 text-sm font-medium mb-8 border-indigo-500/20"
          >
            <BrainCircuit size={16} /> Innovating Web & AI Architectures
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-tight mb-6"
          >
            Architecting the Future of <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Intelligent Digital Systems
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12"
          >
            InkMind is a premier software agency specializing in AI integration, enterprise web architecture, and automated infrastructure solutions.
          </motion.p>
        </section>

        {/* Flagship Product: LoreWeaver */}
        <section id="products" className="max-w-7xl mx-auto px-6 py-20">
          <div className="glass-panel rounded-3xl p-8 md:p-12 border-indigo-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 opacity-50"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-md text-xs font-bold tracking-wider uppercase mb-4">Flagship Product</div>
                <h2 className="text-4xl font-bold text-white mb-4">LoreWeaver</h2>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  Our state-of-the-art AI Narrative Engine. LoreWeaver bridges the gap between generative AI and rigid game logic, offering dynamic prompt-assembly via Google Gemini LLMs and offline-sync social queues for seamless world-building.
                </p>
                <div className="flex gap-4">
                  <a href="https://loreweaver.inkmind.tech" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-all">
                    Launch LoreWeaver <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <div className="flex-1 w-full h-[300px] glass-panel rounded-2xl border-white/10 flex items-center justify-center bg-black/40 shadow-2xl">
                {/* Abstract UI representation */}
                <div className="text-center text-indigo-500/50">
                   <BrainCircuit size={80} className="mx-auto mb-4 opacity-50" />
                   <p className="font-mono text-sm">loreweaver.inkmind.tech</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Services */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Enterprise Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">We engineer complex backend infrastructure and scalable SaaS solutions for modern businesses.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-8 rounded-2xl hover:border-indigo-500/50 transition-colors">
              <Network className="text-indigo-400 mb-6" size={40} />
              <h3 className="text-2xl font-bold text-white mb-3">ISP Billing & Infrastructure</h3>
              <p className="text-gray-400">Full-stack automated billing systems with direct MikroTik RouterOS API integration for live network control and invoice cycles.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl hover:border-purple-500/50 transition-colors">
              <Server className="text-purple-400 mb-6" size={40} />
              <h3 className="text-2xl font-bold text-white mb-3">Custom ERP Solutions</h3>
              <p className="text-gray-400">Lightweight, highly scalable Enterprise Resource Planning (ERP) tools handling POS, dynamic inventory, and real-time ledgers.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl hover:border-blue-500/50 transition-colors">
              <MessageSquare className="text-blue-400 mb-6" size={40} />
              <h3 className="text-2xl font-bold text-white mb-3">AI Community Automation</h3>
              <p className="text-gray-400">Enterprise-grade moderation bots integrating generative AI to manage massive community ecosystems with intelligent filtering.</p>
            </div>
          </div>
        </section>

        {/* Leadership & Portfolio */}
        <section id="leadership" className="max-w-7xl mx-auto px-6 py-20">
          <div className="glass-panel rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Led by Engineering Excellence</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
              InkMind was founded and is led by **Rasel Ahmmed**, a Full-Stack Software Engineer and AI Integration Specialist. With deep expertise across the MERN stack, Python/FastAPI, and Generative AI, Rasel architects the resilient systems powering InkMind's flagship products.
            </p>
            <a href="https://portfolio.inkmind.tech" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              View Rasel's Developer Portfolio <ChevronRight size={20} />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Logo className="w-8 h-8 opacity-50" />
            <span className="text-gray-500 font-semibold">InkMind.tech</span>
          </div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} InkMind Technologies. All rights reserved.
          </div>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="https://portfolio.inkmind.tech" className="hover:text-white transition-colors">Portfolio</a>
            <a href="https://loreweaver.inkmind.tech" className="hover:text-white transition-colors">LoreWeaver</a>
            <a href="mailto:contact@inkmind.tech" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
