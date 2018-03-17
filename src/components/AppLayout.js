import React from 'react';
import Auth from '../modules/Auth';
import LoginContainer from '../containers/LoginContainer';
import SiderBarContainer from '../containers/SiderBarContainer';
import SearchBar  from './SearchBar';
import LoginModal from './LoginModal';
import ProfileMenu from './profile-menu';
import { Layout, Icon } from 'antd';
const { Header, Content, Footer } = Layout;

const AppLayout = (props) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderBarContainer />
      <Layout>
        <Header style={{ background: 'rgb(0, 33, 64)' }} >
          <div style={{display: 'inline-block', width: '40%'}}>
            <SearchBar/>
          </div>
          <div style={{ display: 'inline-block', width: '60%', textAlign: 'right' }}>
            { Auth.isUserAuthenticated() ? <ProfileMenu/> : <LoginModal/> }
          </div>
        </Header>
        <Content>
          {props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          NomNomNom productions ©2018 Created by NomNomNom
        </Footer>
      </Layout>
    </Layout>
  )
}

export default AppLayout;
