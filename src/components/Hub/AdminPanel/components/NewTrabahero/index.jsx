import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;

class NewTrabahero extends Component {
  render() {
    return (
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>New Trabahero</Breadcrumb.Item>
          <Breadcrumb.Item>Personal Details</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          { this.props.children }
        </div>
      </Content>
    );
  }
}

export default NewTrabahero;