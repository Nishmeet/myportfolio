import React from 'react';
import '../styles/Projects.css';
// Import images correctly
import project1 from '../assets/project1.png';  // Make sure extension matches your file
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects = () => {
  const projects = [
    {
      title: "Real Estate Investment Calculator",
      description: "The Real Estate Investment Calculator is a smart tool designed to help investors make data-driven property decisions. It analyzes key financial metrics such as ROI, cash flow, cap rate, and break-even points—giving users a clear picture of a property’s investment potential.",
      tech: ["JavaScript", "React", "Node.js", "Express", "Firebase"],
      demoLink: "https://nishmeet.github.io/Projectlogin/",
      codeLink: "https://github.com/nishmeet/Projectlogin",
      image: project1  // Use the imported image directly
    },
    {
      title: "User Authentication",
      description: "This is a simple authentication system using Firebase. It allows users to sign up and sign in to the application nad if tss your birth.",
      tech: ["JavaScript", "Node.js", "Express", "Firebase"],
 
      demoLink: "https://nishmeet.github.io/Projectlogin/",
      codeLink: "https://github.com/nishmeet/Projectlogin",
      image: project2  // Use the imported image directly
    },
    {
      title: "Portfolio App",
      description: "A sleek, responsive web portfolio designed to showcase my professional skills, projects, and accomplishments.",
      tech: ["JavaScript", "React", "Node.js", "Express", "PostgreSQL"],
      demoLink: " https://nishmeet.github.io/myportfolio/",
      codeLink: "https://github.com/Nishmeet/myportfolio.git",
      image: project3  // Use the imported image directly
    }
  ];

//   return (
//     <section className="projects">
//       <div className="bubbles">
//         {[...Array(20)].map((_, i) => (
//           <div key={i} className="bubble" style={{
//             '--size': `${2 + Math.random() * 4}rem`,
//             '--distance': `${6 + Math.random() * 4}rem`,
//             '--position': `${-5 + Math.random() * 110}%`,
//             '--time': `${2 + Math.random() * 2}s`,
//             '--delay': `${-1 * (2 + Math.random() * 2)}s`,
//           }}/>
//         ))}
//       </div>

//       <h2 className="projects-title">My Projects</h2>
//       <div className="projects-container">
//         {projects.map((project, index) => (
//           <div className="project-card" key={index}>
//             <div className="project-image">
//               <img 
//                 src={project.image} 
//                 alt={project.title}
//                 onError={(e) => {
//                   e.target.src = 'https://via.placeholder.com/400x250';
//                   console.log('Image failed to load, using placeholder');
//                 }}
//               />
//             </div>
//             <div className="project-content">
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
//               <div className="tech-stack">
//                 {project.tech.map((tech, i) => (
//                   <span key={i} className="tech-tag">{tech}</span>
//                 ))}
//               </div>
//               <div className="project-links">
//                 <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-btn demo-btn">
//                   Live Demo
//                 </a>
//                 <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-btn code-btn">
//                   View Code
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
return (
  <section className="projects">
    <h2 className="projects-title">My Projects</h2>
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
         \
          <div className="project-image">
            
            <img 
              src={project.image} 
              alt={project.title}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300';
              }}
            />
          </div>
          <div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-tech">{project.description}</p>
          
          <div className="project-links">
    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link demo">Demo</a>
    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link code">Code</a>
  </div>
            </div>
          </div>
      
      ))}
    </div>
  </section>
);
}
export default Projects;