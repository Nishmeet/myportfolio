import React from 'react';
import '../styles/Footer.css';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <span>© {new Date().getFullYear()} Nishmeet Kaur. All rights reserved.</span>
      <div className="footer-links">
        <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
          <FiMail size={22} />
        </a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={22} />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={22} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer; 