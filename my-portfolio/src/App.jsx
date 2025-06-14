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
  <section id="home"><Hero /></section>
  <section id="stats"><Stats /></section>
  <section id="skills"><Skills /></section>
  <section id="about"><About /></section>
  <section id="projects"><Projects /></section>
  <section id="phone"><Footer /></section>
</main>
    </div>
  );
}

export default App; 