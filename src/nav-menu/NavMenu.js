import React, { Component } from 'react';
import './NavMenu.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faFacebook, faYoutube)


class NavMenu extends Component  {


  render() {
    return(
      <div className="nav-container">
        <p id="header">
          Petite<br/>
          {this.props.title}
        </p>

        <ul className="menu-buttons">
          <li className="music">
            <div className="nav-rectangle"></div>
            <Link to="/">Music</Link>
          </li>
          <li className="art">
            <div className="nav-rectangle"></div>
            <Link to="/art">Art</Link>
          </li>
          <li className="acting">
            <div className="nav-rectangle"></div>
            <Link to="/acting">Acting</Link>
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
  }
  // <Col offset={1} span={7} id="nav-menu">

};

export default NavMenu;