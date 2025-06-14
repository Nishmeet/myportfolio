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
          <a href="#home"><AiOutlineHome className="nav-icon" /></a>
          <a href="#projects"><AiOutlineProject className="nav-icon" /> </a>
          <a href="#skills"><BsPersonWorkspace className="nav-icon" /></a>
          <a href="#tools"><AiOutlineTool className="nav-icon" /> </a>
          {/* <a href="#contact" className="contact-btn"><RiContactsLine className="nav-icon" /></a> */}
          <a href="#phone" className="contact-btn"><MdOutlineContactPhone className="nav-icon" /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;