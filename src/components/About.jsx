import React from 'react';
import { User, Layout, Settings, Database, Smartphone } from 'lucide-react';

export default function About() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="h-4.5 w-4.5 text-cyan-400" />,
      skills: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5/CSS3']
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="h-4.5 w-4.5 text-purple-400" />,
      skills: ['Flutter', 'Dart', 'LINE LIFF', 'Supabase Integration']
    },
    {
      title: 'Backend & Database',
      icon: <Database className="h-4.5 w-4.5 text-emerald-400" />,
      skills: ['Go (Golang)', 'Python', 'Node.js', 'SQLite', 'PostgreSQL', 'Firebase Firestore']
    },
    {
      title: 'Tools & Platforms',
      icon: <Settings className="h-4.5 w-4.5 text-amber-400" />,
      skills: ['Git & GitHub', 'Docker', 'Postman', 'Vercel', 'Figma']
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-[#0b0f19]">
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center space-x-2 rounded-full border border-slate-800 bg-slate-900/60 px-3.5 py-1 text-slate-300 mb-4">
            <User className="h-3.5 w-3.5" />
            <span className="font-mono text-xs tracking-wider">About Me</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ประวัติส่วนตัวและทักษะความสามารถ
          </h2>
          <div className="mt-4 h-1 w-12 rounded bg-cyan-500"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Bio Column */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/20 p-8 shadow-sm">
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-white font-mono flex items-center space-x-2">
                <span className="text-cyan-400">&gt;</span>
                <span>Who am I?</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                สวัสดีครับ! ผมเป็นนักพัฒนา Full-Stack และ Mobile Developer ที่มีความมุ่งมั่นในการออกแบบและสร้างสรรค์แอปพลิเคชันบนเว็บและมือถือ เพื่อส่งมอบประสบการณ์การใช้งานที่ราบรื่นและดีที่สุดให้แก่ผู้ใช้
              </p>
              <p className="text-slate-400 leading-relaxed text-xs">
                ผมชื่นชอบการเขียนโค้ดด้วยโครงสร้างสถาปัตยกรรมที่คลีน มีความเชี่ยวชาญทั้งการสร้างฝั่งหน้าบ้านด้วย **React** และแอปมือถือด้วย **Flutter** ร่วมกับจัดการระบบหลังบ้านให้ทำงานได้รวดเร็วด้วย **Go (Golang)** และ **Python**
              </p>
            </div>
            
            <div className="mt-8 rounded-lg border border-slate-800 bg-slate-900/40 p-5">
              <span className="text-xs font-mono text-cyan-400 block mb-2">// Internship Goal</span>
              <p className="text-slate-350 text-xs leading-relaxed">
                พร้อมเรียนรู้เทคโนโลยีใหม่ ๆ เสมอ มีทัศนคติเชิงบวก และมุ่งมั่นที่จะนำความรู้ที่มีมาร่วมพัฒนาผลิตภัณฑ์จริงร่วมกับทีมผู้เชี่ยวชาญ
              </p>
            </div>
          </div>

          {/* Skills Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="rounded-xl border border-slate-800 bg-slate-900/20 p-6 group hover:border-slate-700 transition-all duration-200"
              >
                <div className="flex items-center space-x-3 mb-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 transition-all duration-200">
                    {category.icon}
                  </div>
                  <h4 className="font-bold text-slate-200 group-hover:text-cyan-400 transition-colors duration-200">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="rounded bg-slate-900/50 px-2.5 py-1.5 text-xs font-mono text-slate-300 border border-slate-800/80 hover:border-cyan-500/20 hover:text-cyan-400 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


