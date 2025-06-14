import React from 'react';
import { AiOutlineHome, AiOutlineProject, AiOutlineTool } from 'react-icons/ai';
import { BsPersonWorkspace } from 'react-icons/bs';
import { RiContactsLine } from 'react-icons/ri';
import { MdOutlineContactPhone } from 'react-icons/md';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-links">
          <a href="#home"><AiOutlineHome className="nav-icon" /> Home</a>
          <a href="#projects"><AiOutlineProject className="nav-icon" /> Projects</a>
          <a href="#skills"><BsPersonWorkspace className="nav-icon" /> Skills</a>
          <a href="#tools"><AiOutlineTool className="nav-icon" /> Tools</a>
          <a href="#contact"><RiContactsLine className="nav-icon" /> Contact</a>
          <a href="#phone" className="contact-btn">
            <MdOutlineContactPhone className="nav-icon" /> Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 