import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import './mobileNavMenu.css';

import { Link } from 'react-router-dom'


const SubMenu = Menu.SubMenu;

class MobileNavMenu extends Component {
  display = 'none';
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
    return(
      <div style={{zIndex: 1000}}>
        <Menu
          className="mobile-nav-menu"
          mode="inline"
          onOpenChange={this.onOpenChange}
          style={{ zIndex: 1000 }}
          >
          <SubMenu className="mobile-nav-menu-sub" key="sub1" title={<span><Icon type="appstore" /><span>Petite Celine</span></span>}>
            <Menu.Item className="mobile-nav-menu" key="1">
              <Link to="/" className='nav-option' style={{ color: 'dimgrey' }}>Music</Link>
            </Menu.Item>
            <Menu.Item className="mobile-nav-menu" key="2">
              <Link to="/art" className='nav-option' style={{ color: 'dimgrey' }}>Art</Link>
            </Menu.Item>
            <Menu.Item className="mobile-nav-menu" key="3">
              <Link to="/acting"  className='nav-option' style={{ color: 'dimgrey' }}>Acting</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}


export default MobileNavMenu;