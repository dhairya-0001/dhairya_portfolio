
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
