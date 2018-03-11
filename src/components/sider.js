import { notification, Popover, Layout, Menu, Breadcrumb, Icon, Input, Button, Avatar } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const Search = Input.Search;
import SearchBar  from './search-bar';
import SearchResults from './movie-list';
import LoginPage from './login-page';
import React from 'react';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

class SiderNav extends React.Component {
  state = {
    collapsed: false,
    visible: false,
    alert: false
  };

  hide = () => {
    this.setState({
      visble: false,
    });
  }

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Link to='/'>
            <div className="logo" style={{ textAlign: 'center', padding: '20px', color: 'white', fontWeight: 'bolder'}}>
              {this.state.collapsed ? 'M' : 'metaTomato'}
            </div>
          </Link>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="heart-o" />
              <span>Favorites</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff' }} >
            <div style={{ display: 'inline-block', width: '40%'}}>
              <SearchBar/>
            </div>
            <div style={{ display: 'inline-block', width: '60%', textAlign: 'right' }}>
              <Popover
                visible={this.state.visible}
                content={<LoginPage alert={() => {
                  {notification.success({
                     message: 'Login Success',
                  })}
                  this.setState({
                    visible: false
                  })
                }}/>}
                title='Log In'
                trigger='click'
                visible={this.state.visible}
                onVisibleChange={this.handleVisibleChange}
              >
                <Button type='primary' ghost>Login</Button>

              </Popover>

              <Button type='primary' ghost>Sign Up</Button>

            </div>
          </Header>
          <Content>

            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            NomNomNom productions ©2018 Created by NomNomNom
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderNav;
