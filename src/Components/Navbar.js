import React from 'react';
import { useState, useEffect, useRef } from 'react';
import logo from '../images/logo.png';
import './Navbar.css';
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const menuRef = useRef(null);
  
    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };
  
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setSelectedItem(null);
      }
    };
  
    const handleItemClick = (item) => {
      setSelectedItem(item);
    };
  
    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);

  return (
    <nav className='nav'>
      <div className="logo">
        <Link to="/"><img id='logo' src={logo} alt="Logo" /></Link>
      </div>
      <ul className="nav-links">
        {/* <li><button id='menu' onClick= {toggleMenu}>Menu</button></li> */}
        <li><button id='menu' onClick={toggleMenu}><Hamburger /></button></li>
        {isOpen && (
        <div ref={menuRef} className='links'>
          <ul>
            <li className='sub-links' onClick={() => handleItemClick('Talk')}>Talk</li>
            <li className='sub-links' onClick={() => handleItemClick('About')}>About</li>
            <li className='sub-links' onClick={() => handleItemClick('Light')}>Light</li>
            <li className='sub-links' onClick={() => handleItemClick('Calculator')}>Calculator</li>
            <li className='sub-links' onClick={() => handleItemClick('Light Finder')}>Light Finder</li>
          </ul>
          {selectedItem && selectedItem === 'Talk' && (
            <ul className='sub-talk'>
              {/* <li><a href="../../pages/what we do.js">What we do?</a></li> */}
              <li><Link to="/whatWeDo">What we do?</Link></li> 
              
              {/* <li><a href="/">Our Projects</a></li> */}
              <li><Link to="/ourprojects">Our Projects</Link></li> 
              
            </ul>
          )}
          {selectedItem && selectedItem === 'About' && (
            <ul className='sub-about'>
              {/* <li><a href="/">Who are we?</a></li> */}
              <li><Link to="/whoarewe">Who are we?</Link></li>
              {/* <li><a href="/">What we believe?</a></li> */}
              <li><Link to="/whatwebelieve">What we believe?</Link></li>
            </ul>
          )}
          {selectedItem && selectedItem === 'Light' && (
            <ul className='sub-light'>
              {/* <li><a href="/">Light School</a></li> */}
              <li><Link to="/lightschool">Light School</Link></li>
              {/* <li><a href="/">Articles</a></li> */}
              <li><Link to="/articles">Articles</Link></li>
            </ul>
          )}
          {selectedItem && selectedItem === 'Calculator' && (
            <ul className='sub-calc'>
              {/* <li><a href="/">Calculate carbon emissions</a></li> */}
              <li><Link to="/carbonemission">Calculate Carbon Emission</Link></li>
            </ul>
          )}
          {selectedItem && selectedItem === 'Light Finder' && (
            <ul className='sub-finder'>
              {/* <li><a href="/">Find your perfect light</a></li> */}
              <li><Link to="/lightfinder">Find your perfect light</Link></li>
            </ul>
          )}
        </div>
      )}
      </ul>
    </nav>
  )
}

export default Navbar;