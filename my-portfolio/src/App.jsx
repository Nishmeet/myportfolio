import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <ParticleBackground />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <About />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App; 