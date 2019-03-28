import React, { Component } from 'react';
import './NavMenu.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {  TweenMax, Power4 } from 'gsap';

library.add(faInstagram, faFacebook, faYoutube)

class NavMenu extends Component  {
  constructor() {
    super();
    this.DOM = {
      title: React.createRef()
    }
  }

  componentDidMount() {
    console.log(this.DOM.title);
    this.titleIntro();
  }

  titleIntro() {
    TweenMax.fromTo(this.DOM.title.current, 1,
      {
      ease: Power4.easeInOut,
      opacity: 0,
      top: -90
      },
      {
        opacity: 1,
        top:-110
      }
    )
  }

  render() {
    return(
      <div className="nav-container">
      <div id="header">
        <p id="static">Petite</p>
        <p id= "intro" ref={this.DOM.title}>
          { this.props.title }
        </p>

      </div>

        <ul className="menu-buttons">
          <li className="music">
            {
              this.props.pathname === "/" &&
              <div className="nav-rectangle"/>
            }
            <Link to="/">Music</Link>
          </li>
          <li className="art">
            {
              this.props.pathname === "/art" &&
              <div className="nav-rectangle"/>
            }
            <Link to="/art">Art</Link>
          </li>
          <li className="acting">
            {
              this.props.pathname === "/acting" &&
              <div className="nav-rectangle"/>
            }
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

};

export default NavMenu;