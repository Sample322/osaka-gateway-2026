import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Plane } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      
      {/* Investor Side */}
      <div className="flex-1 relative group h-[50vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0 bg-invest-navy transition-transform duration-700 group-hover:scale-105">
           <img 
            src="https://picsum.photos/1000/1000?grayscale" 
            alt="Osaka Architecture" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
           />
        </div>
        <div className="absolute inset-0 bg-invest-navy/80 flex flex-col items-center justify-center text-center p-8 transition-colors duration-500 group-hover:bg-invest-navy/70">
          <Briefcase className="w-16 h-16 text-invest-gold mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Invest</h2>
          <p className="text-gray-300 max-w-md mb-8">
            High-yield real estate strategies in Osaka. Akiya renovation & Minpaku licensing.
          </p>
          <Link to="/investor" className="inline-flex items-center px-8 py-3 border-2 border-invest-gold text-invest-gold font-bold uppercase tracking-widest hover:bg-invest-gold hover:text-white transition-all">
            View Portfolio <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Tourist Side */}
      <div className="flex-1 relative group h-[50vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black transition-transform duration-700 group-hover:scale-105">
           {/* Visual Prompt: Neon signs of Dotonbori */}
           <img 
            src="https://picsum.photos/1000/1000" 
            alt="Neon Osaka Lights" 
            className="w-full h-full object-cover opacity-40"
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-black/80 flex flex-col items-center justify-center text-center p-8 transition-colors duration-500 group-hover:bg-black/60">
          <Plane className="w-16 h-16 text-cyber-neon mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-white mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon to-cyber-pink">Travel</h2>
          <p className="text-gray-300 max-w-md mb-8">
            Cyber-Osaka experience. Authentic living, nightlife guides, and USJ adventures.
          </p>
          <Link to="/tourist" className="inline-flex items-center px-8 py-3 border-2 border-cyber-neon text-cyber-neon font-cyber font-bold uppercase tracking-widest hover:bg-cyber-neon hover:text-black transition-all shadow-[0_0_15px_rgba(15,240,252,0.4)]">
            Enter Osaka <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Center Absolute Logo (Desktop only) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
        <div className="bg-white p-6 rounded-full shadow-2xl">
          <span className="font-bold text-xl tracking-tighter">OG'26</span>
        </div>
      </div>
    </div>
  );
};