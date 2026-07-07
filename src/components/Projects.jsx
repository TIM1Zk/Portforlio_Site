import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Safe Seat (Safe-Seat-Project)',
      description: 'แอปพลิเคชันสำหรับป้องกันและลดปัญหาการเมาแล้วขับ ได้รับเลือกเป็นตัวแทนมหาวิทยาลัยแม่โจ้เข้าร่วมแข่งขัน Startup Thailand League รอบภูมิภาค ภาคเหนือ พัฒนาโมบายแอปด้วย Flutter และ Supabase',
      tech: ['Flutter', 'Dart', 'Supabase', 'Startup League'],
      github: 'https://github.com/TIM1Zk/Safe-Seat-Project',
      bgGradient: 'from-cyan-900 to-indigo-950'
    },
    {
      title: 'AimZone',
      description: 'ตลาดออนไลน์ (Marketplace) สำหรับเมาส์คอมพิวเตอร์ประสิทธิภาพสูง พัฒนาด้วยภาษา Go เน้นประสิทธิภาพการโหลดที่รวดเร็ว การทำธุรกรรมที่ปลอดภัย และใช้งานง่าย',
      tech: ['Go (Golang)', 'E-Commerce', 'PostgreSQL', 'Web API'],
      github: 'https://github.com/TIM1Zk/AimZone',
      bgGradient: 'from-purple-900 to-slate-950'
    },
    {
      title: 'Boonthing-Garage-Erp',
      description: 'ระบบ ERP สำหรับจัดการอู่ซ่อมรถยนต์ ช่วยจัดการคลังอะไหล่ ประวัติการซ่อม ออกบิล และบันทึกบัญชีของร้านค้าอย่างครบวงจร',
      tech: ['JavaScript', 'React.js', 'Tailwind CSS', 'ERP System'],
      github: 'https://github.com/TIM1Zk/Boonthing-Garage-Erp',
      demo: 'https://boonthing-garage-erp.vercel.app/',
      bgGradient: 'from-teal-900 to-emerald-950'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-slate-950">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full bg-slate-900 px-3 py-1 text-sm text-cyan-400 mb-3 border border-slate-800">
            <FolderGit2 className="h-4 w-4" />
            <span>Projects</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ผลงานโปรเจกต์ที่โดดเด่น
          </h2>
          <div className="mt-2 h-1 w-12 rounded bg-gradient-to-r from-cyan-400 to-purple-500"></div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              {/* Project Card Visual Header */}
              <div className={`relative h-48 w-full bg-gradient-to-br ${project.bgGradient} flex items-center justify-center p-6 transition-all duration-500 group-hover:scale-105`}>
                <div className="absolute inset-0 bg-slate-950/40"></div>
                <div className="relative text-center z-10">
                  <span className="font-mono text-xs text-cyan-300 font-semibold uppercase tracking-widest block mb-2">// Featured Project</span>
                  <span className="font-sans text-xl font-bold text-white tracking-wide">{project.title}</span>
                </div>
                {/* Tech Deco Grid inside card header */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]"></div>
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx}
                      className="rounded bg-slate-900 px-2 py-0.5 font-mono text-[11px] text-cyan-400 border border-cyan-950"
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
                    className="flex items-center space-x-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    <span>GitHub</span>
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
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

