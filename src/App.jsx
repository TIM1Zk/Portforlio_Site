import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0b1329] text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-900">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Contents */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About & Skills Section */}
        <About />

        {/* Featured Projects Section */}
        <Projects />

        {/* Experience & Activities Section */}
        <Experience />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
