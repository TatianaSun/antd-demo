import React, { Component } from 'react';

//加载layout
import { 
  Layout,
  Menu, 
  Icon
} from 'antd';

import './App.css';
const { Header, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;
class App extends Component {
   handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>
            <Menu
              onClick={this.handleClick}
              // style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>用户管理</span></span>}>               
                  <Menu.Item key="1">用户列表</Menu.Item>
                  <Menu.Item key="2">英雄管理</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>权限管理</span></span>}>
                <Menu.Item key="3">角色列表</Menu.Item>
                <Menu.Item key="4">权限列表</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>商品管理</span></span>}>
                  <Menu.Item key="5">商品列表</Menu.Item>
                  <Menu.Item key="6">分类参数</Menu.Item>
                  <Menu.Item key="7">商品分类</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="appstore" /><span>订单管理</span></span>}>
                <Menu.Item key="8">订单列表</Menu.Item>
              </SubMenu>
              <SubMenu key="sub5" title={<span><Icon type="appstore" /><span>数据统计</span></span>}>
                <Menu.Item key="9">数据报表</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content>Content</Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
