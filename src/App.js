import React, { Component } from 'react';
import './App.css';
import { Row } from 'antd';

import MusicPage from './music-page/MusicPage';
import NavMenu from './nav-menu/NavMenu';
import ArtPage from './art-page/ArtPage';

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <NavMenu/>
          {/* <MusicPage/> */}
          <ArtPage/>
        </Row>
      </div>
    );
  }
}

export default App;
