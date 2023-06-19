import React from 'react';
import './Footer.css';
import FooterLogo from '../images/footer-logo.png';
import linkedIn from '../images/linkedIn.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import luxembourg from '../images/lux.png';
import EU from '../images/EU.png';
import federation from '../images/federation.png';
import vector from '../images/Vector.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
        {/* <a href="/"><img id='footer-logo' src={FooterLogo} alt="logo" /></a> */}
        <Link to="/"><img id='footer-logo' src={FooterLogo} alt="logo" /></Link>
        <div className='social-container'> 
          <a href="https://www.facebook.com/profile.php?id=100081159132820"><img id='facebook' src={facebook} alt="facebook" /></a>
          <a href="https://www.linkedin.com/company/kaash/"><img id='linkedIn' src={linkedIn} alt="linkedIn" /></a>
          <a href="https://www.instagram.com/kaash.eu/"><img id='instagram' src={instagram} alt="instagram" /></a>
        </div>
        <p id='copyright'>Copyright © 2023 Kaash® | Luxembourg</p>

        <div className='link-container'>
          <h2>Quick Links</h2>
          <p className='quick-links'>Services</p>
          <p className='quick-links'>Company</p>
          <p className='quick-links'>Our Works</p>
          <p className='quick-links'>Light Calculator</p>
        </div>

        <div className='img-container'>
          <img id='lux' src={luxembourg} alt="luxembourg" />
          <img id='eu' src={EU} alt="eu" />
          <img id='fed' src={federation} alt="federation" />
        </div>

        <div className='subscribe-container'>
          <p id='subscribe'>Subscribe</p>
          <input type="email" name="email" id="email" placeholder='Your mail'/>
          <img id='arrow' src={vector} alt="arrow" />
          <p id='privacy'>By signing up to receive emails from Motto, you agree to our Privacy Policy. We treat your info responsibly. Unsubscribe anytime.</p>
        </div>
    </div>
  )
}

export default Footer;