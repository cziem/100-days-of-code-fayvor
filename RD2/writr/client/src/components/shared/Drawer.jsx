import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Main, ProPic, Section, Divider } from '../../styles/Drawer';
import getUser from '../../helpers/getUser';
import {
	MdAddCircleOutline,
	MdLineWeight,
	MdList,
	MdLightbulbOutline,
	MdDeviceHub,
	MdPermIdentity,
	MdSettings,
	MdMultilineChart,
	MdExitToApp
} from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';

const token = localStorage.getItem('token');
const user = getUser(token);

const DrawerItemsPosts = [
	{
		icon: <MdAddCircleOutline />,
		name: 'Add Post',
		path: '/dashboard/add-post'
	},
	{
		icon: <MdLineWeight />,
		name: 'My Posts',
		path: '/dashboard/my-posts'
	},
	{
		icon: <MdList />,
		name: 'All Posts',
		path: '/dashboard/all-posts'
	},
	{
		icon: <MdLightbulbOutline />,
		name: 'Drafts',
		path: '/dashboard/drafts'
	}
];

const DrawerItemsUsers = [
	{
		icon: <FiUsers />,
		name: 'All Writrs',
		path: '/dashboard/all-writrs'
	},
	{
		icon: <MdDeviceHub />,
		name: 'Followers',
		path: '/dashboard/followers'
	},
	{
		icon: <MdPermIdentity />,
		name: 'Following',
		path: '/dashboard/following'
	}
];

const DrawerItemsMisc = [
	{
		icon: <MdSettings />,
		name: 'Settings',
		path: '/dashboard/settings'
	},
	{
		icon: <MdMultilineChart />,
		name: 'Metrics',
		path: '/dashboard/metrics'
	},
	{
		icon: <MdExitToApp />,
		name: 'Logout',
		path: '/dashboard/logout'
	}
];

const renderDrawerItemsPosts = () =>
	DrawerItemsPosts.map((post, idx) => (
		<NavLink key={idx} to={post.path} exact={post.exact}>
			<p>
				{post.icon}
				<span>{post.name}</span>
			</p>
		</NavLink>
	));

const renderDrawerItemsUsers = () =>
	DrawerItemsUsers.map((post, idx) => (
		<NavLink key={idx} to={post.path} exact={post.exact}>
			<p>
				{post.icon}
				<span>{post.name}</span>
			</p>
		</NavLink>
	));

const renderDrawerItemsMisc = () =>
	DrawerItemsMisc.map((post, idx) => (
		<NavLink key={idx} to={post.path} exact={post.exact}>
			<p>
				{post.icon}
				<span>{post.name}</span>
			</p>
		</NavLink>
	));

export default ({ width }) => {
	return (
		<Fragment>
			<Main width={width}>
				<div className="drawer__ppic-wrp">
					<ProPic pro_pic={require('../../assets/img/dp.jpg')}></ProPic>
					<p>{user.username}</p>
				</div>
				<Section>
					{renderDrawerItemsPosts()}
					<Divider />
					{renderDrawerItemsUsers()}
					<Divider />
					{renderDrawerItemsMisc()}
				</Section>
			</Main>
		</Fragment>
	);
};
