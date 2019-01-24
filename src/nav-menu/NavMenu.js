import React from 'react';
import './NavMenu.css';
import { Col } from 'antd';

const NavMenu = () => (
  <Col span={8}>
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
  </Col>
);

export default NavMenu;