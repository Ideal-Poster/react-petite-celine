import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import './mobileNavMenu.css';

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
      <div className="mobile-nav-menu">
        <Menu
          className="mobile-nav-menu"
          mode="inline"
          onOpenChange={this.onOpenChange}
          // style={{  display: 'block' }}
          >
          <SubMenu className="mobile-nav-menu" key="sub1" title={<span><Icon type="down-circle" /><span>Petite Celine</span></span>}>
            <Menu.Item className="mobile-nav-menu" key="1">Option 1</Menu.Item>
            <Menu.Item className="mobile-nav-menu" key="2">Option 2</Menu.Item>
            <Menu.Item className="mobile-nav-menu" key="3">Option 3</Menu.Item>
            <Menu.Item className="mobile-nav-menu" key="4">Option 4</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}


export default MobileNavMenu;