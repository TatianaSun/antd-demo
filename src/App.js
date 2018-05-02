import React, { Component } from 'react';

//加载layout
import { 
  Layout
} from 'antd';

import './App.css';
const { Header, Content, Sider } = Layout;
class App extends Component {
  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
