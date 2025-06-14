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
          <a href="#home" data-tooltip="Home"><AiOutlineHome className="nav-icon" /></a>
          <a href="#projects" data-tooltip="Projects"><AiOutlineProject className="nav-icon" /></a>
        
          <a href="#stats" data-tooltip="Tools"><AiOutlineTool className="nav-icon" /></a>
          <a href="#about" data-tooltip="Contact" ><MdOutlineContactPhone className="nav-icon" /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;