import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import profileAvatar from '../assets/profile-avatar.jpg';

export default function Hero() {
  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
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
    <section id="hero" className="relative flex min-h-[calc(100vh-4.5rem)] items-center justify-center py-16 px-4">
      <div className="mx-auto max-w-4xl text-center relative z-10">
        {/* Profile Avatar */}
        <div className="relative inline-block mb-8">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-60 blur-xl transition duration-500 group-hover:opacity-100 animate-pulse"></div>
          <div className="relative p-1 rounded-full bg-gradient-to-br from-cyan-400 via-slate-800 to-purple-500 shadow-2xl">
            <img
              src={profileAvatar}
              alt="กฤตวิทย์ บุญสพ (Krittawit Bunsop)"
              className="h-36 w-36 sm:h-44 sm:w-44 md:h-48 md:w-48 rounded-full object-cover shadow-inner ring-4 ring-slate-950/80"
            />
          </div>
        </div>

        {/* Availability Badge */}
        <div className="inline-flex items-center space-x-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-4 py-1.5 mb-6 shadow-sm backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-semibold text-emerald-300 tracking-wider">Available for Internship</span>
        </div>

        {/* Introduction */}
        <p className="font-mono text-xs tracking-[0.2em] text-slate-400 uppercase mb-4">
          สวัสดีครับ / Hello World
        </p>
        
        {/* Name */}
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8 leading-[1.15]">
          <span className="block text-slate-100">กฤตวิทย์ บุญสพ</span>
          <span className="mt-3 block text-cyan-400 font-mono text-lg sm:text-2xl font-medium">
            Full-Stack & Mobile Developer
          </span>
        </h1>

        {/* Slogan */}
        <div className="mx-auto max-w-2xl mb-10 px-6 py-5 rounded-xl border border-slate-800 bg-[#0f172a]/60">
          <p className="text-base text-slate-300 leading-relaxed font-normal">
            "มุ่งมั่นพัฒนาเว็บและโมบายแอปพลิเคชันที่มีประสิทธิภาพ ตอบโจทย์ผู้ใช้งานด้วย Code ที่สะอาดและสถาปัตยกรรมที่ยืดหยุ่น"
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={handleScrollToProjects}
            className="group flex w-full sm:w-auto items-center justify-center space-x-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-sm transition-colors duration-200 cursor-pointer"
          >
            <span>View Work</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <a
            href="#contact"
            className="flex w-full sm:w-auto items-center justify-center space-x-2 rounded-lg border border-slate-800 bg-slate-900/40 px-6 py-3 font-semibold text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-colors duration-200"
          >
            <Download className="h-4 w-4 text-cyan-500" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Quick Socials */}
        <div className="flex justify-center space-x-3">
          <a 
            href="https://github.com/TIM1Zk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/30 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-all duration-200" 
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/krittawit-bunsop-57a3133b6/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/30 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-all duration-200" 
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a 
            href="mailto:kittawitcup@gmail.com" 
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/30 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-all duration-200" 
            aria-label="Email"
          >
            <Mail className="h-4.5 w-4.5" />
          </a>
        </div>
      </div>
    </section>
  );
}



