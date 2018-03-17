import React from 'react';
import { Menu, Layout, Icon } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;

const SiderBar = ({ hide, onCollapse, collapsed }) => {
	return (
	  <Sider
			collapsible
			collapsed={collapsed}
			onCollapse={(collapse) => { onCollapse(collapse) }}
		>
			<Link to='/'>
				<div style={{ padding: '20px', color: 'white', fontWeight: 'bolder'}}>
					{collapsed ? 'M' : 'metaTomato'}
				</div>
			</Link>
			<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
				<Menu.Item key="1">
					<Icon type="heart-o" />
					<span>Favorites</span>
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
			</Menu>
    </Sider>
	)
}

export default SiderBar;
