import React from 'react';
import '../styles/Projects.css';
// Import images correctly
import project1 from '../assets/project1.png';  // Make sure extension matches your file
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects = () => {
  const projects = [
    {
      title: "Firebase Authentication",
      name: "Firebase Authentication",
      description: "NEXT.JS, LOCOMOTIVE SCROLL, FRAMER MOTION",
      link: "https://nishmeet.github.io/Projectlogin/",
      image: project1
    },
    {
      title: "Triton",
      description: "Triton is a Spigot plugin for Minecraft that enables a Minecraft server to send messages in the player's language. This was my first premium plugin on Spigot and I've put a lot of work and effort into it!",
      color: "#0078E7", // Blue background
      icon: "🔤", // or your actual icon
      link: "https://demo.com",
      image: project2
    },
    {
      title: "Craftathon",
      description: "Craftathon is a weekend-long charity event that managed to raise $7,599 for Child's Play Charity in two events (2017 and 2018). I was mainly involved in creating and testing the donation and ticket system.",
      color: "#E31837", // Red background
      icon: "🎮", // or your actual icon
      link: "https://demo.com",
      image: project3
    },
    {
      title: "Livraria e Papelaria Espaço",
      description: "Livraria e Papelaria Espaço is a local bookstore in my area. I've helped build their internet presence by coding a webstore as well as providing hosting and email services. Furthermore, I've coded some tools that helped speed labour-intensive tasks in-store.",
      color: "#1E2761", // Navy background
      icon: "📚", // or your actual icon
      link: "https://demo.com",
      image: project1
    }
  ];

  const renderBubbles = () => {
    return [...Array(10)].map((_, i) => (
      <div
        key={i}
        className="bubble"
        style={{
          '--size': `${2 + Math.random() * 2}rem`,
          '--position': `${Math.random() * 100}%`,
          '--time': `${2 + Math.random() * 2}s`,
          '--delay': `-${Math.random() * 2}s`,
        }}
      />
    ));
  };

  // Add this new function to create ripples
  const handleCardClick = (e) => {
    const card = e.currentTarget;
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    card.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 1000);
  };

  return (
    <section className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img 
                src={project.image} 
                alt={project.title}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x400';
                }}
              />
            </div>
            <div className="project-content">
              <div>
                <h2 className="project-name">{project.title}</h2>
                <a href={project.link} className="visit-btn">
                  VISIT THE WEBSITE
                </a>
              </div>
              <p className="project-tech">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 