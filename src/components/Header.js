import React, { useState } from 'react';
import mobileLogo from '../assets/mobile-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="nav-bar">
        <div className="nav-logo-mobile">
          <img src={mobileLogo} alt="Desktop Logo" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/indexpage">
                    NCERT Solutions
                </Link>
            </li>
            <li>
                <Link >
                    Contact
                </Link>
            </li>
            <li>
                <Link to="/">
                   About Us
                </Link>
            </li>
          </ul>
          <button className="login-btn">Login</button>
        </div>   
      </div>
    </header>
  )
}

export default Header;
