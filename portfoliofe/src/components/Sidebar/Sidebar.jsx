import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';
import React from 'react';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faSuitcase, faUser, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='navbar'>
      <Link 
        className='logo'
        to='/' 
      >
        <img src={LogoS} alt="logo" />
        <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
        onClick={() => setShowNav(false)}
        exact="true"
        activeclassname="active"
        to="/"
        >
          <FontAwesomeIcon 
          icon={faHome}
          color='#4d4d4e'
          />
        </NavLink>
        
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          className='about-link'
          activeclassname="active"
          to="/about"
        >
          <FontAwesomeIcon 
          icon={faUser}
          color='#4d4d4e'
          />
        </NavLink>
        
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          className='contact-link'
          activeclassname="active"
          to="/contact"
        >
          <FontAwesomeIcon 
            icon={faEnvelope}
            color='#4d4d4e'
          />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)} 
          exact="true"
          className='portfolio-link'
          activeclassname="active"
          to="/portfolio"
        >
          <FontAwesomeIcon 
            icon={faSuitcase}
            color='#4d4d4e'
          />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color='#ffd700'
          size='3x'
          className='close-icon'
        />
      </nav>

      <ul>
        <li>
          <a 
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jlh90"
          >
            <FontAwesomeIcon 
              icon={faLinkedin}
              color="#4d4d4e"
            />
          </a>
        </li>
        <li>
          <a 
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/jayhubb4"
          >
            <FontAwesomeIcon 
              icon={faGithub}
              color="#4d4d4e"
            />
          </a>
        </li>
        <li>
          <a 
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/dotcomdv/"
          >
            <FontAwesomeIcon 
              icon={faInstagram}
              color="#4d4d4e"
            />
          </a>
        </li>
        <li>
          <a 
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/dotcomdv/"
          >
            <FontAwesomeIcon 
              icon={faFacebook}
              color="#4d4d4e"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color='#ffd700'
        size='3x'
        className='hamburger-icon'
      />
    </div>
  )
}

export default Sidebar;
