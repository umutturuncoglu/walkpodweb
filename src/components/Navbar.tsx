
import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import logo from '../assets/logo.png';

interface NavbarProps {
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleDarkMode, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isHome = typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '/index.html');
  const sectionHref = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 px-6 py-3 rounded-full shadow-lg">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="WalkPod Logo" className="w-10 h-10 object-contain rounded-full shadow-lg shadow-brand-green/20" />
          <span className="text-xl font-extrabold tracking-tight">WalkPod</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <a href={sectionHref('#features')} className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-green transition-colors">Features</a>
          <a href={sectionHref('#accuracy')} className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-green transition-colors">Accuracy</a>
          <a href={sectionHref('#about')} className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-green transition-colors">About</a>
          <a href="/privacy-policy.html" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-green transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-green transition-colors">Terms And Conditions</a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={sectionHref('#download')}
            className="hidden md:block gradient-bg text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-brand-green/20 hover:opacity-90 transition-opacity"
          >
            Download
          </a>
          <button
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <a href={sectionHref('#features')} onClick={() => setIsOpen(false)} className="block text-lg font-bold">Features</a>
          <a href={sectionHref('#accuracy')} onClick={() => setIsOpen(false)} className="block text-lg font-bold">Accuracy</a>
          <a href={sectionHref('#about')} onClick={() => setIsOpen(false)} className="block text-lg font-bold">About</a>
          <a href="/privacy-policy.html" onClick={() => setIsOpen(false)} className="block text-lg font-bold">Privacy Policy</a>
          <a href="#" onClick={() => setIsOpen(false)} className="block text-lg font-bold">Terms And Conditions</a>
          <a href={sectionHref('#download')} onClick={() => setIsOpen(false)} className="block gradient-bg text-white text-center py-3 rounded-xl font-bold">Download App</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
