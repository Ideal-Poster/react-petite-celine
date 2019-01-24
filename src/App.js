import React, { Component } from 'react';
import './App.css';
import { Row } from 'antd';

import MusicPage from './music-page/MusicPage';
import NavMenu from './nav-menu/NavMenu';

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <NavMenu/>
          <MusicPage/>
        </Row>
      </div>
    );
  }
}

export default App;
