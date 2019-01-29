import React, { Component } from 'react';
import './App.css';
import { Row } from 'antd';

import MusicPage from './music-page/MusicPage';
import ArtPage from './art-page/ArtPage';
import ActingPage from './acting-page/ActingPage';
import Footer from './footer/footer';

class App extends Component {
  render() {
    return (
      <div>

        <MusicPage/>
        {/* <ArtPage/> */}
        {/* <ActingPage/> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;