import React, { useState } from 'react';
import { Mail, Send, MessageSquarePlus } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // ใส่ Access Key ของคุณที่นี่ (ขอฟรีได้ทันทีที่ https://web3forms.com/)
    // แค่กรอกอีเมลของคุณที่เว็บ แล้วระบบจะส่ง Key ให้ในอีเมล นำคีย์นั้นมาแปะลงตรงนี้ครับ
    const ACCESS_KEY = "c0283304-7c78-420b-9599-459a3b5e5495"; 

    const payload = {
      ...formData,
      access_key: ACCESS_KEY
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });
      
      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-slate-950">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full bg-slate-900 px-3 py-1 text-sm text-cyan-400 mb-3 border border-slate-800">
            <MessageSquarePlus className="h-4 w-4" />
            <span>Connect</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ติดต่อสอบถาม / ติดต่อฝึกงาน
          </h2>
          <div className="mt-2 h-1 w-12 rounded bg-gradient-to-r from-cyan-400 to-purple-500"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Quick Info & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white font-mono mb-4">
                <span className="text-cyan-400">&gt;</span> Let's Work Together
              </h3>
              <p className="text-slate-400 leading-relaxed">
                หากคุณประทับใจในผลงาน ทักษะ หรือต้องการพูดคุยแลกเปลี่ยนคำแนะนำเกี่ยวกับการฝึกงาน 
                สามารถส่งข้อความผ่านฟอร์ม หรือติดต่อผมโดยตรงผ่านช่องทางเหล่านี้ได้เลยครับ!
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="mailto:kittawitcup@gmail.com" 
                className="flex items-center space-x-4 rounded-xl border border-slate-800 bg-slate-900/10 p-4 hover:border-cyan-500/50 hover:bg-slate-900/35 transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950 text-cyan-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-500">// Email Address</span>
                  <span className="text-white text-sm font-semibold">kittawitcup@gmail.com</span>
                </div>
              </a>

              <a 
                href="https://github.com/TIM1Zk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 rounded-xl border border-slate-800 bg-slate-900/10 p-4 hover:border-purple-500/50 hover:bg-slate-900/35 transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-950 text-purple-400">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-500">// GitHub Profile</span>
                  <span className="text-white text-sm font-semibold">github.com/TIM1Zk</span>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/krittawit-bunsop-57a3133b6/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 rounded-xl border border-slate-800 bg-slate-900/10 p-4 hover:border-teal-500/50 hover:bg-slate-900/35 transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-950 text-teal-400">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-500">// LinkedIn Connection</span>
                  <span className="text-white text-sm font-semibold">linkedin.com/in/krittawit-bunsop</span>
                </div>
              </a>
            </div>
          </div>


          {/* Contact Form */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/15 p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-2">// Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="ชื่อของคุณ"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-2">// Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="example@mail.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-2">// Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="พิมพ์ข้อความของคุณที่นี่..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 font-semibold text-slate-950 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <span>{isSubmitting ? 'กำลังส่ง...' : 'ส่งข้อความ'}</span>
                {!isSubmitting && <Send className="h-4 w-4" />}
              </button>

              {submitStatus === 'success' && (
                <div className="rounded-lg border border-green-500/30 bg-green-950/20 p-4 text-center text-sm text-green-400 font-mono animate-fadeIn">
                  ส่งข้อความสำเร็จเรียบร้อย! ขอบคุณที่ติดต่อเข้ามาครับ
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="rounded-lg border border-red-500/30 bg-red-950/20 p-4 text-center text-sm text-red-400 font-mono animate-fadeIn">
                  เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง หรือส่งทางอีเมลโดยตรงครับ
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
