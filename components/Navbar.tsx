import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isTourist = location.pathname.includes('tourist');
  
  // Dynamic styles based on current page theme
  // Investor: Corporate Navy/White
  // Tourist: Zen Paper/Matcha
  const navClass = isTourist 
    ? "bg-zen-paper/90 border-b border-zen-matcha/20 text-zen-ink backdrop-blur-md shadow-sm" 
    : "bg-white/90 border-b border-gray-200 text-invest-navy backdrop-blur-md shadow-sm";

  const linkClass = (path: string) => {
    const active = location.pathname === path;
    if (isTourist) {
      return `block px-3 py-2 rounded-md text-base font-medium transition-colors ${active ? 'text-zen-matcha font-bold' : 'text-zen-ink/70 hover:text-zen-matcha'}`;
    }
    return `block px-3 py-2 rounded-md text-base font-medium transition-colors ${active ? 'text-invest-gold font-bold' : 'text-gray-600 hover:text-invest-navy'}`;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className={`text-xl font-bold font-serif tracking-widest ${isTourist ? 'text-zen-ink' : 'text-invest-navy'}`}>
                OSAKA GATEWAY <span className="text-xs align-top opacity-60">2026</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={linkClass('/')}>Business</Link>
              <Link to="/tourist" className={linkClass('/tourist')}>Travel</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-opacity-95 bg-white">
             <Link to="/" onClick={() => setIsOpen(false)} className={linkClass('/')}>Business</Link>
             <Link to="/tourist" onClick={() => setIsOpen(false)} className={linkClass('/tourist')}>Travel</Link>
          </div>
        </div>
      )}
    </nav>
  );
};