import React from 'react';
import { withRouter } from 'react-router'
import { Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Login from '../login';
import RegisterAsTrabaHero from '../register-as-trabahero';
import PreRegistrationThankYou from '../../components/Trabahero/PreRegistrationSuccess/ThankYouPage';
import HubPanel from '../../components/Hub/AdminPanel/components/index';

import './index.css'

const { Header, Footer, Content, Sider } = Layout;

const App = () => (
  <div>
    <HubPanel />
  { /** 
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
          <Menu.Item key="2"><Link to="/pre-registration/trabahero">Be a TrabaHero</Link></Menu.Item>
        </Menu>
      </Header>

      <Content>
        <Route exact path="/" component={Login} />
        <Route exact path="/pre-registration/trabahero" component={withRouter(RegisterAsTrabaHero)} />
        <Route exact path="/pre-registration/thank-you" component={withRouter(PreRegistrationThankYou)} />
      </Content>

    <Footer>Footer</Footer>
    </Layout>
  */ }
  </div>
)

export default App;