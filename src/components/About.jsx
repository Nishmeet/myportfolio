import React from 'react';
import '../styles/About.css';
import pic4 from '../assets/pic4.jpg'; // Adjust path/extension as needed

const About = () => {
  const handleDownload = () => {
    console.log('Download button clicked');
    
    try {
      window.open('/resume.pdf', '_blank'); // Simpler approach using window.open
    } catch (error) {
      console.error('Download error:', error);
    }
  };

  return (
    <section className="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-container">
        <div className="about-image">
          <img src={pic4} alt="About" />
        </div>
        <div className="about-content">
          <h3>Hi, I'm Chris Chin</h3>
          <h4>Software Engineer based in South Delhi</h4>
          <p>
            I am a passionate software engineer with expertise in full-stack development.
            With a strong foundation in both frontend and backend technologies,
            I specialize in creating efficient, scalable, and user-friendly applications.
          </p>
          
          <div className="about-info">
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">Chris Chin</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">chris@example.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location:</span>
              <span className="info-value">South Delhi, India</span>
            </div>
            <div className="info-item">
              <span className="info-label">Availability:</span>
              <span className="info-value">Open for opportunities</span>
            </div>
          </div>

          <div className="about-buttons">
            <button 
              onClick={handleDownload}
              className="btn btn-primary"
              type="button"
              style={{ cursor: 'pointer' }}
            >
              Download CV
            </button>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 