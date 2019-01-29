import React, { Component } from 'react';
import './App.css';
import { Row } from 'antd';

import MusicPage from './music-page/MusicPage';
import ArtPage from './art-page/ArtPage';
import ActingPage from './acting-page/ActingPage';
import Footer from './footer/footer';

import { Menu, Icon } from 'antd';
import MobileNavMenu from './mobile-nav-menu/mobile-nav-menu';
const SubMenu = Menu.SubMenu;


class App extends Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: [],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

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