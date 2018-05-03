import React, { Component } from 'react';

//加载layout
import { 
  Layout,
  Menu, 
  Icon
} from 'antd';

//加载路由相关模块
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Hero from './components/heros.js';
import User from './components/users.js';
import './App.css';
const { Header, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;
class App extends Component {
   handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (
      <Router>
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
                    <Menu.Item key="1">
                      <Link to="users">用户列表</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to="heros">英雄列表</Link>
                    </Menu.Item>
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
            <Content>
              <Route path="/users" component={User}/>
              <Route path="/heros" component={Hero}/>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
