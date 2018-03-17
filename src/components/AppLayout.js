import { notification, Popover, Layout, Icon, Input, Button, Avatar } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const Search = Input.Search;
import SearchBar  from './search-bar';
import React from 'react';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import ProfileMenu from './profile-menu';
import Auth from '../modules/Auth';
import uniqid  from 'uniqid';
import LoginContainer from '../containers/LoginContainer';
import SignupContainer from '../containers/SignupContainer';
import SiderBarContainer from '../containers/SiderBarContainer';

class AppLayout extends React.Component {
  state = {
    login: {
      visible: false,
    },
    signup: {
      visible: false,
    },
    alert: false
  };

  handleLoginVisibleChange = (visible) => {
    this.setState({login: { visible }} );
  }

  handleSignupVisibleChange = (visible) => {
    this.setState({ signup: { visible } });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SiderBarContainer />
        <Layout>
          <Header style={{ background: '#fff' }} >
            <div style={{ display: 'inline-block', width: '40%'}}>
              <SearchBar/>
            </div>
            <div style={{ display: 'inline-block', width: '60%', textAlign: 'right' }}>
              { Auth.isUserAuthenticated() ? <ProfileMenu/> : <Popover
                key={uniqid()}
                content={<LoginContainer  alert={() => {
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

export default AppLayout;
