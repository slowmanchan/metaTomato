import React from 'react';
import SiderBarContainer from '../containers/SiderBarContainer';
import { Layout, Icon} from 'antd';
const { Header, Content, Footer } = Layout;

const AppLayout = (props) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderBarContainer />
      <Layout>

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
