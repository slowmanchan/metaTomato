import React, { Component } from 'react';
import { Avatar, Menu, Dropdown, Icon } from 'antd';
import Auth from '../modules/Auth';
import { withRouter } from 'react-router';

class ProfileMenu extends  Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this);
  }

  logout() {
    Auth.deauthenticateUser()
  }

  render() {
    console.log(this.props)
    const onClick = ({key}) => {
      if (key === '0') { console.log(key) }
      else if (key === '1') { console.log(key) }
      else if (key === '2') {
        this.logout()
        this.props.history.push('/')
      }
    }

    const menu = (
      <Menu onClick={onClick}>
        <Menu.Item key="0">
          <Icon type='user'/>Profile
        </Menu.Item>
        <Menu.Item key="1">
          <Icon type='setting'/>Settings
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2"><Icon type='logout'/>Log Out</Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu} trigger={['click']}>
        <Avatar >

        </Avatar>
      </Dropdown>
    )
  }
}

export default withRouter(ProfileMenu)
