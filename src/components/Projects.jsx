import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Safe Seat (Driver App)',
      description: 'แอปพลิเคชันสำหรับป้องกันและลดปัญหาการเมาแล้วขับ ร่วมแข่งขัน Startup Thailand League 2026 รอบภูมิภาค ภาคเหนือ พัฒนาแอปมือถือระบบความปลอดภัยและกระเป๋าเงินดิจิทัลเชื่อมต่อ Supabase',
      tech: ['Flutter', 'Dart', 'Supabase', 'Startup League'],
      github: 'https://github.com/TIM1Zk/Safe-Seat-Project-Driver'
    },
    {
      title: 'AimZone',
      description: 'ตลาดออนไลน์ (Marketplace) สำหรับซื้อขายเมาส์คอมพิวเตอร์ประสิทธิภาพสูง พัฒนาด้วย Go เน้นการโหลดที่รวดเร็ว การทำธุรกรรมที่ปลอดภัย และโครงสร้างฐานข้อมูลที่มีประสิทธิภาพ',
      tech: ['Go (Golang)', 'E-Commerce', 'PostgreSQL', 'Web API'],
      github: 'https://github.com/TIM1Zk/AimZone'
    },
    {
      title: 'Boonthing-Garage-Erp',
      description: 'ระบบ ERP สำหรับจัดการอู่ซ่อมรถยนต์ ช่วยจัดการคลังอะไหล่ ประวัติการเข้าซ่อม ออกบิลใบเสร็จ และบันทึกประวัติบัญชีรายรับ-รายจ่ายของร้านค้าอย่างครบวงจร',
      tech: ['JavaScript', 'React.js', 'Tailwind CSS', 'ERP System'],
      github: 'https://github.com/TIM1Zk/Boonthing-Garage-Erp',
      demo: 'https://boonthing-garage-erp.vercel.app/'
    },
    {
      title: 'Lector Exam Line Bot',
      description: 'ระบบบันทึกตารางสอบผ่าน LINE LIFF เชื่อมต่อฐานข้อมูล Firebase Firestore ช่วยในการบันทึก ติดตาม และแจ้งเตือนตารางการสอบได้อย่างสะดวกและมีประสิทธิภาพ',
      tech: ['LINE LIFF', 'Firebase Firestore', 'HTML5', 'API Integration'],
      github: 'https://github.com/TIM1Zk/Lector-Line-bot'
    },
    {
      title: 'Discord Todo Bot',
      description: 'บอทสำหรับจัดการตารางงานประจำวัน (Task Management) บนเซิร์ฟเวอร์ Discord พัฒนาด้วย Python และ SQLite นำเสนอฟังก์ชันการใช้งานผ่าน Slash Commands และ UI Buttons',
      tech: ['Python', 'SQLite', 'discord.py', 'Slash Commands'],
      github: 'https://github.com/TIM1Zk/Discord-Bot-todo-List'
    },
    {
      title: 'Conduit Automate Testing',
      description: 'โปรเจกต์ทำระบบทดสอบอัตโนมัติ (Automated E2E Testing) สำหรับแอปพลิเคชัน Conduit (RealWorld) โดยใช้ Robot Framework และไลบรารี Browser (Playwright)',
      tech: ['Robot Framework', 'Playwright', 'E2E Testing', 'QA Automation'],
      github: 'https://github.com/TIM1Zk/Conduit-Automate-Testing'
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-[#0b0f19]/40">
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center space-x-2 rounded-full border border-slate-800 bg-slate-900/60 px-3.5 py-1 text-slate-300 mb-4">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span className="font-mono text-xs tracking-wider">Projects</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ผลงานโปรเจกต์ที่โดดเด่น
          </h2>
          <div className="mt-4 h-1 w-12 rounded bg-cyan-500"></div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/20 transition-all duration-300 hover:border-slate-700 hover:-translate-y-1 shadow-sm"
            >
              {/* Project Card Visual Header */}
              <div className="relative h-40 w-full bg-slate-950/80 flex items-center justify-center p-6 border-b border-slate-800/80">
                <div className="text-center">
                  <span className="font-mono text-[9px] text-slate-500 font-bold uppercase tracking-[0.25em] block mb-1.5">// Project #{index + 1}</span>
                  <span className="font-sans text-lg font-bold text-white tracking-wide">{project.title}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs text-slate-400 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx}
                      className="rounded bg-slate-900 px-2 py-0.5 font-mono text-[10px] text-slate-400 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center space-x-4 border-t border-slate-800/80 pt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    <span>GitHub</span>
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-1.5 text-xs font-semibold text-cyan-550 hover:text-cyan-400 transition-colors duration-150"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



