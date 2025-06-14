import React from 'react';
import '../styles/Hero.css';
import profilepic from '../assets/profilepic2.png';

const CurvedVector = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 194 100" className="curved-vector">
    <path 
      d="M 0 34.544 L 3.22 33.201 C 4.186 35.732 5.256 38.221 6.429 40.663 L 3.329 42.293 C 2.113 39.757 1.002 37.172 0 34.544 Z M 7.294 49.71 L 10.246 47.806 C 11.613 50.127 13.073 52.392 14.622 54.596 L 11.828 56.748 C 10.223 54.464 8.711 52.116 7.294 49.71 Z"
      fill="#FF7A00"
    />
  </svg>
);

const Hero = () => {
  return (
    <section className="hero">
      <div className="background-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>

      <div className="profile-card">
        <div className="vector-design">
          <CurvedVector />
        </div>
        <div className="profile-image">
          <img src={profilepic} alt="Profile" />
        </div>
        <h1 className="animate-slide-down">Nishmeet Kaur</h1>
        <div className="profile-tag">
          <p className="animate-slide-up">A Full Stack Developer who has developed innovative solutions.</p>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="animated-text-container">
          <h2 className="title">
            {'SOFTWARE'.split('').map((letter, index) => (
              <span 
                key={index} 
                style={{
                  display: 'inline-block',
                  animation: 'fadeInUp 0.5s forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                {letter}
              </span>
            ))}
          </h2>
          <h3 className="subtitle">
            {'ENGINEER'.split('').map((letter, index) => (
              <span 
                key={index} 
                style={{
                  display: 'inline-block',
                  animation: 'fadeInUp 0.5s forwards',
                  animationDelay: `${(index * 0.1) + 0.8}s`,
                  opacity: 0
                }}
              >
                {letter}
              </span>
            ))}
          </h3>
        </div>
        <p className="description">
          Passionate about creating intuitive and engaging user experiences. 
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>
    </section>
  );
};

export default Hero; 