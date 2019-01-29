import React from 'react';
import './NavMenu.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faFacebook, faYoutube)

const NavMenu = () => (
  // <Col offset={1} span={7} id="nav-menu">
    <div className="nav-container">
      <p id="header">
        Petite<br/>
        Celine
      </p>

      <ul className="menu-buttons">
        <li className="music">
            <div className="nav-rectangle"></div>
            <a routerLink="/" routerLinkActive="active">Music</a>
        </li>
        <li className="art">
          <div className="nav-rectangle"></div>
          <a routerLink="/art" routerLinkActive="active">Art</a>
        </li>
        <li className="acting">
          <div className="nav-rectangle"></div>
          <a routerLink="/acting" routerLinkActive="active">Acting</a>
        </li>
      </ul>

      <div style={{ width: '120px' }}>
        <a href="https://www.instagram.com/petite_celine/" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon className="instagram" icon={ faInstagram } />
        </a>

        <a href="https://www.facebook.com/cdutertre.nyc" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon className="facebook" icon={ faFacebook}/>
        </a>

        <a href="https://www.youtube.com/user/celineNYCmusic" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon className="youtube" icon={ faYoutube } />
        </a>
      </div>

      <a href="mailto:petitecelineworld@gmail.com" className="email">
        <p>petitecelineworld@gmail.com</p>
      </a>
    </div>
);

export default NavMenu;