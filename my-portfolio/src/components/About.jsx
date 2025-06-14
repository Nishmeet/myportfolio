import React, { useState } from 'react';
import '../styles/About.css';
import pic4 from '../assets/pic4.png'; // or .png, .jpeg, etc.


const About = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const handleDownload = () => {

  console.log('Download button clicked');
    
  try {
    // Create a direct link to the PDF
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/resume.pdf';
    link.download = 'Resume.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    console.log('Link created:', link.href);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Download error:', error);
  }
}
  ;
  

  return (
    <section className="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-container">
        <div className="about-image">
          <img src={pic4} alt="Profile" />
        </div>
        <div className="about-content">
          <h3>Hi, I'm Nishmeet Kaur</h3>
          <h4>Software Engineer based in Calgary, AB, Canada</h4>
          <p>
          
          My journey into software engineering has been driven by a deep passion for technology and
          problem-solving. Whether building dynamic web applications or exploring new frameworks, 
          I thrive on the creative and technical challenges that come with coding.
          </p>
          
          <div className="about-info">
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">Nishmeet Kaur</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">nishmeetkaur@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location:</span>
              <span className="info-value">Calgary, Canada</span>
            </div>
            <div className="info-item">
              <span className="info-label">Availability:</span>
              <span className="info-value">Open for opportunities</span>
            </div>
          </div>

          <div className="about-buttons">
            <button 
              onClick={handleDownload} 
              type="button"
              style={{cursor: 'pointer'}}
              className="btn btn-primary"
              disabled={isDownloading}
            >
              {isDownloading ? 'Downloading...' : 'Download CV'}
            </button>
           
            <a href="mailto:nishmeetkaur@gmail.com" className="contact-btn">
  Contact Me
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 