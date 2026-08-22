import React from 'react';
import { Calendar, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Teaching Assistant (TA) - Programming Logic & Server-Side Programming',
      organization: 'มหาวิทยาลัยแม่โจ้',
      period: 'ภาคเรียนที่ 1 / 2569 (มิ.ย. 2569 - ปัจจุบัน)',
      type: 'education',
      details: [
        'ปฏิบัติหน้าที่ผู้ช่วยสอน (TA) ในรายวิชา Programming Logic and Techniques (ตรรกะและเทคนิคการเขียนโปรแกรม) และ Server-Side Programming (การโปรแกรมฝั่งเซิร์ฟเวอร์)',
        'ให้คำแนะนำ แก้อาการของบั๊ก และถ่ายทอดกระบวนการคิดเชิงตรรกะสำหรับการเริ่มต้นเขียนโปรแกรมระดับพื้นฐาน',
        'แนะแนวและดีบักโครงสร้างสถาปัตยกรรมของเซิร์ฟเวอร์, การเขียน API เชื่อมต่อฐานข้อมูล และการออกแบบระบบ Back-end ให้มีประสิทธิภาพ'
      ]
    },
    {
      role: 'Startup Thailand League 2026 (รอบภูมิภาค ภาคเหนือ)',
      organization: 'ทีม INNOVIX (ตัวแทนมหาวิทยาลัยแม่โจ้) / อุทยานวิทยาศาสตร์ภูมิภาค',
      period: '11 พฤษภาคม 2569',
      type: 'work',
      link: 'https://canva.link/qij0p2yln5k8iv0',
      linkLabel: 'ดูสไลด์ Pitch Deck บน Canva',
      details: [
        'ได้รับคัดเลือกเป็นตัวแทนมหาวิทยาลัยแม่โจ้ เข้าร่วมการแข่งขันพิชชิ่งระดับภูมิภาคภาคเหนือ ณ อาคารอำนวยการอุทยานวิทยาศาสตร์ภูมิภาค เชียงใหม่',
        'ร่วมกับทีมออกแบบและพัฒนาเว็บ/แอปพลิเคชันนวัตกรรม Safe Seat (แพลตฟอร์มป้องกันและลดปัญหาการเมาแล้วขับ)',
        'รับหน้าที่เป็นผู้พัฒนาแอปพลิเคชันมือถือหลักด้วยเทคโนโลยี Flutter และจัดการระบบฐานข้อมูลด้วย Supabase'
      ]
    },
    {
      role: 'เข้าร่วมโครงการอบรมเชิงปฏิบัติการเพื่อเพิ่มพูนทักษะด้านการเรียน',
      organization: 'มหาวิทยาลัยแม่โจ้',
      period: '7 - 8 มีนาคม 2569',
      type: 'activity',
      details: [
        'เข้าร่วมรับการอบรมเชิงปฏิบัติการทางวิชาการ เพื่อเสริมสร้างและเพิ่มพูนทักษะทางเทคโนโลยีสำหรับการเรียนและการทำงานสายคอมพิวเตอร์',
        'แลกเปลี่ยนความรู้ด้านการเขียนโปรแกรม การออกแบบโปรเจกต์ และเทคนิคพัฒนาตนเองเพื่อเพิ่มประสิทธิภาพในการเรียนรู้ซอฟต์แวร์ใหม่ ๆ'
      ]
    },
    {
      role: 'Teaching Assistant (TA) - IT Camp 2026: The Great Collision',
      organization: 'สาขาเทคโนโลยีสารสนเทศ คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้',
      period: '27 กุมภาพันธ์ - 1 มีนาคม 2569',
      type: 'activity',
      details: [
        'ทำหน้าที่ผู้ช่วยสอน (TA) ดูแลน้อง ๆ ม.ปลาย/ปวช. ที่ผ่านการคัดเลือกจำนวน 40 คนทั่วประเทศ ในกิจกรรมอบรมวิชาการ 3 วัน 2 คืน',
        'ให้คำปรึกษาและคำแนะนำการพัฒนาโครงงานในธีมการจำลองสถานการณ์ Software Development ของจริง ระหว่าง "Dev ตัวตึง" และ "Tester ตัวจี๊ด"',
        'ถ่ายทอดความรู้ แนะนำการแก้ปัญหาโค้ดทางเทคนิคในการเขียนเว็บและแอปพลิเคชัน เพื่อส่งต่อพลังบวกให้กับรุ่นน้องที่สนใจสายงานไอที'
      ]
    },
    {
      role: 'เข้าร่วมการอบรมเชิงปฏิบัติการ Mobile Development with Flutter',
      organization: 'สาขาวิชาเทคโนโลยีสารสนเทศ มหาวิทยาลัยแม่โจ้ (วิทยากรโดยศิษย์เก่า IT รุ่นที่ 18)',
      period: '14 กุมภาพันธ์ 2569 (อบรมเข้มข้น 3 สัปดาห์)',
      type: 'education',
      details: [
        'เข้ารับการอบรมเรียนรู้การพัฒนา Mobile Application ด้วย Flutter & Dart แบบเข้มข้นเพื่อพัฒนาทักษะระดับอุตสาหกรรม',
        'ลงมือปฏิบัติจริงตั้งแต่การปูพื้นฐานการเขียน Dart, สถาปัตยกรรมแอป ไปจนถึงการขึ้นโครงสร้างแอปพลิเคชันใช้งานจริง',
        'ศึกษาแนวคิด กระบวนการทำงาน และเทคนิคทางวิชาชีพในสายงาน Mobile Developer จากประสบการณ์ตรงของพี่ศิษย์เก่า'
      ]
    },
    {
      role: 'Teaching Assistant (TA) - OOP & Client-Side Programming',
      organization: 'มหาวิทยาลัยแม่โจ้',
      period: 'ภาคเรียนที่ 2 / 2568 (พ.ย. 2025 - มี.ค. 2026)',
      type: 'education',
      details: [
        'ปฏิบัติหน้าที่ผู้ช่วยสอน (TA) ในรายวิชา Object-Oriented Programming (Java) และ Client-Side Programming (Web Development) สำหรับนักศึกษาชั้นปีที่ 2',
        'ให้คำปรึกษา แนะนำแนวคิด และดีบักโค้ดทั้งโครงสร้าง OOP และโปรเจกต์เว็บแอปพลิเคชันฝั่ง Client',
        'ตรวจการบ้าน ประเมินคะแนนแล็บปฏิบัติการประจำสัปดาห์ และให้คำแนะนำแนะนำเพื่อช่วยพัฒนารุ่นน้องในชั้นเรียน'
      ]
    },
    {
      role: 'รางวัลชมเชย - การประกวดนำเสนอแผนธุรกิจ (Business Plan Pitching)',
      organization: 'โครงการพัฒนาศักยภาพนักศึกษา ด้านการเป็นผู้ประกอบการ มหาวิทยาลัยแม่โจ้',
      period: '15 สิงหาคม 2568',
      type: 'activity',
      link: 'https://canva.link/z1z5ymzsi1z0pao',
      linkLabel: 'ดูสไลด์แผนธุรกิจบน Canva',
      details: [
        'ร่วมก่อตั้งทีม "WIWO GROUP" พัฒนาแผนธุรกิจและสไลด์ Pitching โครงการสตาร์ทอัพด้านสุขภาพ (Health Tech Startup) ภายใต้ชื่อ "WIWO (ONE CLICK EMERGENCY)"',
        'ออกแบบโมเดลและโครงสร้างแพลตฟอร์มกลาง เชื่อมต่อประสานงานการเรียกรถฉุกเฉิน กู้ภัย โรงพยาบาล และระบบประกันภัยด้วยพิกัด GPS เรียลไทม์ และระบบ AI อัตโนมัติ เพื่อช่วยเหลือผู้ประสบภัยในวิกฤต Golden Hour',
        'นำเสนอแผนธุรกิจและสไลด์ประกอบภาพรวมโครงการ (Business Model Canvas) ต่อคณะกรรมการระดับมหาวิทยาลัยจนคว้ารางวัลชมเชยระดับสถาบันสำเร็จ'
      ]
    },
    {
      role: 'Teaching Assistant (TA) - IT Camp 2025: AI for Web Programming',
      organization: 'สาขาเทคโนโลยีสารสนเทศ คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้',
      period: '7 - 9 มีนาคม 2568',
      type: 'activity',
      details: [
        'เป็นผู้ช่วยสอนวิชาการจัดการและสร้างสรรค์โครงงานเว็บแอปพลิเคชันโดยนำเครื่องมือ AI เข้ามาประยุกต์ใช้งาน (AI for Web Programming) แก่นักเรียนที่เข้าร่วมค่ายจำนวน 50 คน',
        'แนะแนวการเขียนโปรแกรมและการใช้งานเทคโนโลยีใหม่ ๆ พร้อมนำกิจกรรมสันทนาการเพื่อสร้างบรรยากาศการเรียนรู้ที่สนุกสนานตลอดค่าย',
        'ดูแลตารางกิจกรรมและความเป็นอยู่ของผู้เข้าร่วมโครงการตลอดระยะเวลา 3 วัน'
      ]
    },
    {
      role: 'Teaching Assistant (TA) - IT Camp 2024: Create Your First Mobile App',
      organization: 'สาขาเทคโนโลยีสารสนเทศ คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้',
      period: '1 - 3 มีนาคม 2567',
      type: 'activity',
      details: [
        'ทำหน้าที่เป็นผู้ช่วยสอน (TA) ในการจัดทำแอปพลิเคชันมือถือเครื่องแรกของตนเอง (Create Your First Mobile App) สำหรับผู้ร่วมค่าย ม.ปลาย/ปวช. จำนวน 50 คน',
        'ให้คำแนะนำเกี่ยวกับแนวคิดและพื้นฐานการออกแบบระบบการทำแอป และกระบวนการคิดวิเคราะห์ในการออกแบบโปรแกรมสำหรับผู้เริ่มต้น',
        'จัดกิจกรรมสันทนาการ ค้นหาตัวตน และประสานงานความร่วมมือภายในโครงการ'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-[#0b0f19]/30">
      <div className="mx-auto max-w-4xl relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center space-x-2 rounded-full border border-slate-800 bg-slate-900/60 px-3.5 py-1 text-slate-300 mb-4">
            <Calendar className="h-3.5 w-3.5" />
            <span className="font-mono text-xs tracking-wider">Timeline</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ประสบการณ์และกิจกรรม
          </h2>
          <div className="mt-4 h-1 w-12 rounded bg-cyan-500"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-8 space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-12 group">
              {/* Timeline Indicator Node */}
              <span className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 border border-slate-800 text-slate-400 transition-all duration-200">
                {exp.type === 'work' && <Briefcase className="h-4 w-4 text-cyan-500" />}
                {exp.type === 'education' && <GraduationCap className="h-4 w-4 text-purple-400" />}
                {exp.type === 'activity' && <Award className="h-4 w-4 text-emerald-450" />}
              </span>

              {/* Box Content */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/10 p-6 hover:border-slate-700 transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-base font-bold text-white leading-snug group-hover:text-cyan-400 transition-colors duration-200">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-mono text-cyan-500 mt-1.5">
                      {exp.organization}
                    </p>
                  </div>
                  <span className="inline-block self-start rounded bg-slate-900/80 px-2.5 py-1 text-xs font-mono text-slate-400 border border-slate-800 whitespace-nowrap mt-1 sm:mt-0 shadow-inner">
                    {exp.period}
                  </span>
                </div>

                {/* Details list */}
                <ul className="space-y-3">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-xs text-slate-400 flex items-start space-x-2 leading-relaxed">
                      <span className="text-cyan-500 mt-1 select-none text-[6px]">■</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {exp.link && (
                  <div className="mt-5 border-t border-slate-800/80 pt-4">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
                    >
                      <span>{exp.linkLabel || 'View Link'}</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
