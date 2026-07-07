# 💻 Krittawit Boonsop - Personal Portfolio Website

นี่คือโปรเจกต์เว็บไซต์แนะนำตัวและรวบรวมผลงาน (Personal Portfolio) ของ **กฤตวิทย์ บุญสพ (Krittawit Boonsop)** นักศึกษาสาขาเทคโนโลยีสารสนเทศ คณะวิทยาศาสตร์ **มหาวิทยาลัยแม่โจ้** พัฒนาขึ้นด้วยเทคโนโลยีโมเดิร์นเว็บ เช่น **React.js**, **Vite** และ **Tailwind CSS v4** 

ออกแบบภายใต้คอนเซปต์ **Tech Minimalist / Dark Mode** ที่ให้ความรู้สึกพรีเมียม สไตล์กึ่งโปร่งแสง (Glassmorphism) และเอฟเฟกต์แสงเรืองรอบ ๆ (Glow Effect) เพื่อนำเสนอผลงานด้าน Web & Mobile Development ได้อย่างมีประสิทธิภาพที่สุด

---

## ✨ คุณสมบัติของเว็บไซต์ (Key Features)

* **Responsive Design**: แสดงผลได้อย่างสวยงามบนทุกหน้าจอ ตั้งแต่สมาร์ทโฟน แท็บเล็ต ไปจนถึงเดสก์ท็อปขนาดใหญ่
* **Smooth Scrolling & Active Section Tracking**: การเลื่อนหน้าจอที่นุ่มนวล พร้อมแถบ Navbar ด้านบนที่ตรวจจับตำแหน่งหน้าปัจจุบันโดยอัตโนมัติ
* **Featured Projects**: การแสดงผลงานเด่นที่เชื่อมโยงตรงไปยัง GitHub และเว็บไซต์ที่ใช้งานจริง:
  * **Safe Seat (Safe-Seat-Project)**: แอปพลิเคชันลดปัญหาการเมาแล้วขับ ตัวแทนแข่งขัน Startup Thailand League 2026 รอบภาคเหนือ (Flutter & Supabase)
  * **AimZone**: เว็บไซต์ Marketplace สำหรับซื้อขายเมาส์ประสิทธิภาพสูง (Go & PostgreSQL)
  * **Boonthing-Garage-Erp**: ระบบ ERP จัดการคลังและบันทึกบัญชีของอู่ซ่อมรถยนต์ (React & Tailwind)
* **Chronological Timeline**: ประสบการณ์การเป็นผู้ช่วยสอน (TA) และกิจกรรมวิชาการที่มหาวิทยาลัยแม่โจ้ ตั้งแต่ปี 2024 - 2026:
  * ผู้ช่วยสอน (TA) รายวิชา Programming Logic และ Server-Side Programming (เทอม 1/2569)
  * ผู้ช่วยสอน (TA) รายวิชา OOP และ Client-Side Programming (เทอม 2/2568)
  * รางวัลชมเชย การประกวดแผนธุรกิจโครงการสตาร์ทอัพ Health Tech ในชื่อ "WIWO (ONE CLICK EMERGENCY)"
  * ทีมงานและผู้ช่วยสอน (TA) ค่ายไอทีแนะแนวพัฒนาทักษะ (IT Camp Maejo) ต่อเนื่อง 3 ปีซ้อน (2024 - 2026)
* **Contact Form**: ฟอร์มติดต่อกลับและลิงก์เชื่อมต่อไปยังอีเมลผู้พัฒนา, บัญชี GitHub และโปรไฟล์ LinkedIn ได้อย่างรวดเร็ว

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

* **Core**: HTML5, JavaScript (ES6+), React.js (v18+)
* **Styling**: Tailwind CSS v4, Vanilla CSS
* **Build Tool**: Vite
* **Icons**: Lucide React
* **Hosting**: Vercel

---

## 🚀 วิธีการติดตั้งและรันโปรเจกต์ในเครื่อง (Getting Started)

ทำตามขั้นตอนด้านล่างเพื่อดาวน์โหลดและรันโปรเจกต์ในเครื่องโลคอลของคุณ:

### 1. โคลนคลังเก็บโค้ด (Clone Repository)
```bash
git clone https://github.com/TIM1Zk/Portforlio_site.git
cd Portforlio_site
```

### 2. ติดตั้ง Dependencies
```bash
npm install
```

### 3. รันโปรเจกต์ในโหมดนักพัฒนา (Run Dev Server)
```bash
npm run dev
```
หลังจากรันเสร็จเรียบร้อย ให้เปิดเว็บเบราว์เซอร์ไปที่ `http://localhost:5173` เพื่อเข้าชมเว็บไซต์

### 4. บิลด์ไฟล์สำหรับพร้อมอัปโหลดขึ้นโปรดักชัน (Build for Production)
```bash
npm run build
```
ไฟล์สำหรับขึ้นโปรดักชันจะอยู่ในโฟลเดอร์ `/dist` ที่สามารถนำไปโฮสต์ใช้งานบนระบบต่าง ๆ เช่น Vercel หรือ Netlify ได้ทันที

---

## 📂 โครงสร้างของโปรเจกต์ (Project Structure)

```text
Portforlio_site/
├── public/               # ไฟล์สแตติก (รูปภาพ, PDF Resume)
├── src/
│   ├── components/       # ส่วนประกอบของแต่ละหน้าจอ
│   │   ├── About.jsx     # หมวดทักษะและความสามารถ
│   │   ├── Contact.jsx   # ฟอร์มและข้อมูลติดต่อ
│   │   ├── Experience.jsx# ประวัติและ Timeline กิจกรรม
│   │   ├── Footer.jsx    # ลิขสิทธิ์ท้ายหน้าจอ
│   │   ├── Hero.jsx      # ส่วนต้อนรับและช่องทางติดต่อหลัก
│   │   ├── Navbar.jsx    # แถบเมนูนำทางด้านบน
│   │   └── Projects.jsx  # แสดงรายชื่อการ์ดโปรเจกต์
│   ├── App.jsx           # จุดรวมส่วนประกอบหลักของเว็บ
│   ├── main.jsx          # จุดเริ่มต้นการประมวลผล React
│   └── index.css         # ไฟล์สไตล์หลักและการตั้งธีม Tailwind v4
├── index.html            # โครงสร้าง HTML หลักและ SEO Meta tags
├── vite.config.js        # ไฟล์ตั้งค่าและติดตั้งปลั๊กอินสำหรับ Vite
└── package.json          # ไฟล์รายการ Dependencies และคำสั่งสคริปต์
```

---

## 📄 ลิขสิทธิ์และการอนุญาต (License)

สงวนลิขสิทธิ์ © 2026 พัฒนาโดย **กฤตวิทย์ บุญสพ**.
อนุญาตให้ใช้โปรเจกต์นี้เพื่อการศึกษาหรือการสมัครงานส่วนบุคคลเท่านั้น
