import React from 'react';
import { Menu, Layout, Icon } from 'antd';
import { Link } from 'react-router-dom';
import ProfileMenu from './profile-menu';

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
			<ProfileMenu
				style={{ margin: '23px'}}
			/>
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
					<Menu.Item key="3"><Link to='/login'>Login</Link></Menu.Item>

					<Menu.Item key="4"><Link to='/sign-up'>Sign Up</Link></Menu.Item>


				</SubMenu>

				<Menu.Item key="5">
					<Link to='/search-results-v2'>
						<Icon type="search" />
						<span>Search</span>
					</Link>
				</Menu.Item>
			</Menu>

    </Sider>
	)
}

export default SiderBar;
