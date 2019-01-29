import React, { Component } from 'react';
import './App.css';

import MusicPage from './music-page/MusicPage';
import ArtPage from './art-page/ArtPage';
import ActingPage from './acting-page/ActingPage';
import Footer from './footer/footer';
import MobileNavMenu from './mobile-nav-menu/mobile-nav-menu';


class App extends Component {

  render() {
    return (
      <div>
        <MobileNavMenu/>
        <MusicPage/>
        {/* <ArtPage/> */}
        {/* <ActingPage/> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;