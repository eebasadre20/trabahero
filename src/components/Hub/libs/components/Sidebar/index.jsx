import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Sidebar extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return(
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu
            key="sub1"
            title={<span><Icon type="user" /><span>Edsil R. Basadre</span></span>}
          >
            <Menu.Item key="3">Profile</Menu.Item>
            <Menu.Item key="4">Settings</Menu.Item>
            <Menu.Item key="5">Logout</Menu.Item>
          </SubMenu>
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="user-add" />
              <span>New Trabahero</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="team" />
            <span>Trabaheroes</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default Sidebar;

