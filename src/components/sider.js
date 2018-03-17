import { notification, Popover, Layout, Menu, Breadcrumb, Icon, Input, Button, Avatar } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const Search = Input.Search;
import SearchBar  from './search-bar';
import LoginPage from './login-page';
import SignUpPage from './sign-up-page';
import React from 'react';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import ProfileMenu from './profile-menu';
import Auth from '../modules/Auth';
import uniqid  from 'uniqid';

class SiderNav extends React.Component {
  state = {
    collapsed: false,
    login: {
      visible: false,
    },
    signup: {
      visible: false,
    },
    alert: false
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  }

  handleLoginVisibleChange = (visible) => {
    this.setState({login: { visible }} );
  }

  handleSignupVisibleChange = (visible) => {
    this.setState({ signup: { visible } });
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    console.log(this.props)
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
              <Link to='/favorites'>
                <Icon type="heart-o" />
                <span>Favorites</span>
              </Link>

            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Watch List</span>
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
              { Auth.isUserAuthenticated() ? <ProfileMenu/> : <Popover
                key={uniqid()}
                content={<LoginPage  alert={() => {
                  {notification.success({
                      message: 'Login Success',
                  })}
                  this.setState({
                    login: {
                        visible: false
                    }
                  })
                }}/>}
                title='Log In'
                trigger='click'
                visible={this.state.login.visible}
                onVisibleChange={this.handleLoginVisibleChange}
                                                              >
                <Button type='primary' ghost>Login</Button>

              </Popover>

              }

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
