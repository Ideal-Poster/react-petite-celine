import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

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
          mode="inline"
          onOpenChange={this.onOpenChange}
          // style={{  display: 'block' }}
          >
          <SubMenu key="sub1" title={<span><Icon type="down-circle" /><span>Navigation One</span></span>}>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}


export default MobileNavMenu;