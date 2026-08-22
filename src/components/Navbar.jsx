import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About & Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 100;
      
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`sticky top-0 z-50 w-full border-b transition-all duration-200 ${
      scrolled 
        ? 'border-slate-800 bg-[#0b0f19]/90 backdrop-blur-md py-3 shadow-md' 
        : 'border-transparent bg-transparent py-5'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2.5 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 group-hover:border-slate-700 transition-all duration-200">
              <Terminal className="h-4.5 w-4.5 text-cyan-400" />
            </div>
            <span className="font-mono text-base font-bold tracking-tight text-white">
              <span className="text-cyan-400">&lt;</span>
              <span>Dev.Port</span>
              <span className="text-purple-400"> /&gt;</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:text-cyan-400 cursor-pointer relative py-1 ${
                  activeSection === item.id ? 'text-cyan-400' : 'text-slate-400'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full rounded bg-cyan-400"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-slate-900 hover:text-white focus:outline-none border border-slate-800 transition-all duration-200"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0f172a] px-4 pt-2 pb-4 space-y-1 mt-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left rounded-lg px-3 py-2.5 font-mono text-sm font-semibold transition-all duration-250 ${
                activeSection === item.id
                  ? 'bg-slate-900 border border-slate-800 text-cyan-400'
                  : 'text-slate-400 hover:bg-slate-900/60 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}


