import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Login from '../login';
import RegisterAsTrabaHero from '../register-as-trabahero';

import './index.css'

const { Header, Footer, Content } = Layout;

const App = () => (
  <div>
    <Layout>
      <Header>
        <div className="trabaheroLogo"></div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link to="/">Login</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/register/trabahero">Be a TrabaHero</Link></Menu.Item>
        </Menu>
      </Header>

      <Content>
        <Route exact path="/" component={Login} />
        <Route exact path="/register/trabahero" component={RegisterAsTrabaHero} />
      </Content>

      <Footer>Footer</Footer>
    </Layout>
  </div>
)

export default App;