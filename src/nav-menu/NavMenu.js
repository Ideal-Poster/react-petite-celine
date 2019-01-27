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

      {/* <FontAwesomeIcon className="back__arrow" icon={ faCoffee } /> */}
      <FontAwesomeIcon className="instagram" icon={ faInstagram } />
      <FontAwesomeIcon className="facebook" icon={ faFacebook}/>
      <FontAwesomeIcon className="youtube" icon={ faYoutube } />

    </div>
  // </Col>``
);

export default NavMenu;