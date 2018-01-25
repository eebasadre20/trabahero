import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Sidebar from '../../libs/components/Sidebar/index';
import NewTrabahero from './NewTrabahero/index';
import PersonalDetailsForm from './NewTrabahero/Forms/PersonalDetailsForm';
import SkillsDetailsForm from './NewTrabahero/Forms/SkillsDetailsForm';
import CertificatesAndClearancesForm from './NewTrabahero/Forms/CertificatesAndClearancesForm';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Switch>
            <NewTrabahero>
                <Route exact path="/" component={PersonalDetailsForm} />
                <Route path="/hub/new/trabahero/:trabaheroId/skill" component={SkillsDetailsForm} />
                <Route path="/hub/new/trabahero/:trabaheroId/certificates-clearances" component={CertificatesAndClearancesForm} />
            </NewTrabahero>
          </Switch>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
