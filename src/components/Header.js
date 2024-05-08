import React, { useState } from 'react';
import logo from '../assets/desktop-logo.png';
import mobileLogo from '../assets/mobile-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="nav-bar">
        <div className="nav-logo-desktop">
          <img src={logo} alt="Desktop Logo" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>Home</li>
            <li>NCERT Solutions</li>
            <li>Contact</li>
            <li>About Us</li>
          </ul>
          <button className="login-btn">Login</button>
        </div>   
      </div>
    </header>
  )
}

export default Header;
