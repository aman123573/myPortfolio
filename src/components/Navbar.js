// import React, { useContext, useState } from 'react'
import { useEffect, useState } from 'react';
import './Navbar.css';
import '../index.css'

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { useTheme } from '../ThemeContext';
import { Link } from 'react-scroll';


const Navbar = () => {

  const { darkMode, toggleMode } = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const [themeToggleActive, setThemeToggleActive] = useState(false);


  const menuToggleHandler = () => {
    setShowMenu(prevMode => !prevMode);
  };

  const themeToggleClickHandler = () => {
    toggleMode();
    setThemeToggleActive(true); // Set theme toggle as active

    setThemeToggleActive(false); // Reset theme toggle after a delay
    // Adjust the delay as needed
  };

  const handleMenuContent = () => {
    setShowMenu(false);
  }


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        let navbar = document.getElementById('navbar');
        navbar.classList.add('sticky');
        navbar.style.borderBottom = `${darkMode ? '1px solid #cecece' : 'none'}`
      } else {
        let navbar = document.getElementById('navbar');
        navbar.classList.remove('sticky');
        navbar.style.borderBottom = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    const handleMenu = () => {
      if (window.scrollX > 60) {
        let menuContent = document.getElementById('menuContent');
        menuContent.classList.add('hide');
      }
    };

    window.addEventListener('scroll', handleMenu);

    return () => {
      window.removeEventListener('scroll', handleMenu);
    };
  });



  return (
    <>
      <div className={`navbar-section ${darkMode ? 'light-mode' : 'dark-mode'}`} id='navbar'>
        <div className="left">
          <h2>Aman</h2>
        </div>
        <div className="right">
          <ul>
            <li ><Link to="frontpage" smooth={true} duration={800} offset={-70}>Home</Link></li>
            <li ><Link to="aboutpage" smooth={true} duration={800} offset={-70}>About</Link></li>
            <li ><Link to="skillpage" smooth={true} duration={800} offset={-70}>Skills</Link></li>
            <li ><Link to="qualificationpage" smooth={true} duration={800} offset={-90}>Services</Link></li>
            <li ><Link to="workpage" smooth={true} duration={800} offset={-70}>Portfolio</Link></li>
            <li ><Link to="contactpage" smooth={true} duration={800} offset={-90}>Contact</Link></li>
            <div onClick={themeToggleClickHandler}>
              {darkMode ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
            </div>
            <div className='hamburger' onClick={menuToggleHandler}>{<MenuOutlinedIcon />}</div>
          </ul>
        </div>

      </div >
      {(themeToggleActive || showMenu) &&
        (<div className={`small-device-content ${showMenu ? 'slide-in' : 'slide-out'}`} id='menuContent'>
          <div className="menu-container">
            <ul>
              <li onClick={handleMenuContent}><Link to="frontpage" smooth={true} duration={800} offset={-70}>Home</Link></li>
              <li onClick={handleMenuContent}><Link to="aboutpage" smooth={true} duration={800} offset={-70}>About</Link></li>
              <li onClick={handleMenuContent}><Link to="skillpage" smooth={true} duration={800} offset={-70}>Skills</Link></li>
              <li onClick={handleMenuContent}><Link to="qualificationpage" smooth={true} duration={800} offset={-90}>Services</Link></li>
              <li onClick={handleMenuContent}><Link to="workpage" smooth={true} duration={800} offset={-70}>Portfolio</Link></li>
              <li onClick={handleMenuContent}><Link to="contactpage" smooth={true} duration={800} offset={-90}>Contact</Link></li>
            </ul>
          </div>
        </div>
        )
      }

    </>
  )
}

export default Navbar
