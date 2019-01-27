import React from 'react';
import './NavMenu.css';
import { Col } from 'antd';

import { Menu, Icon } from 'antd';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faFacebook, faYoutube)

const NavMenu = () => (
  // <Col offset={1} span={7} id="nav-menu">
    <div id="nav-container">
      <p id="header">
        Petite<br/>
        Celine
      </p>

      <ul class="menu-buttons">
        <li class="music">
            <div class="nav-rectangle"></div>
            <a routerLink="/" routerLinkActive="active">Music</a>
        </li>
        <li class="art">
          <div class="nav-rectangle"></div>
          <a routerLink="/art" routerLinkActive="active">Art</a>
        </li>
        <li class="acting">
          <div class="nav-rectangle"></div>
          <a routerLink="/acting" routerLinkActive="active">Acting</a>
        </li>
      </ul>

      <div style={{ width: '120px' }}>
        <a href="https://www.instagram.com/petite_celine/" target="_blank">
          <FontAwesomeIcon className="instagram" icon={ faInstagram } />
        </a>

        <a href="https://www.facebook.com/cdutertre.nyc" target="_blank">
          <FontAwesomeIcon className="facebook" icon={ faFacebook}/>
        </a>

        <a href="https://www.youtube.com/user/celineNYCmusic" target="_blank">
          <FontAwesomeIcon className="youtube" icon={ faYoutube } />
        </a>
      </div>
    </div>
);

export default NavMenu;