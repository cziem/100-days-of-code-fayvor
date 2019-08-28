import React, { Fragment } from 'react';
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
import { DrawerItem } from './Navigations';

const token = localStorage.getItem('writr_token');
const user = getUser(token);

const DrawerItems = {
	addPost: {
		icon: <MdAddCircleOutline />,
		name: 'Add Post',
		path: '/dashboard/add-post',
		exact: true
	},
	myPosts: {
		icon: <MdLineWeight />,
		name: 'My Posts',
		path: '/dashboard/my-posts',
		exact: true
	},
	allPosts: {
		icon: <MdList />,
		name: 'All Posts',
		path: '/dashboard/all-posts',
		exact: true
	},
	drafts: {
		icon: <MdLightbulbOutline />,
		name: 'Drafts',
		path: '/dashboard/drafts',
		exact: true
	},
	allWritrs: {
		icon: <FiUsers />,
		name: 'All Writrs',
		path: '/dashboard/all-writrs',
		exact: true
	},
	followers: {
		icon: <MdDeviceHub />,
		name: 'Followers',
		path: '/dashboard/followers',
		exact: true
	},
	following: {
		icon: <MdPermIdentity />,
		name: 'Following',
		path: '/dashboard/following',
		exact: true
	},
	settings: {
		icon: <MdSettings />,
		name: 'Settings',
		path: '/dashboard/settings',
		exact: true
	},
	metrics: {
		icon: <MdMultilineChart />,
		name: 'Metrics',
		path: '/dashboard/metrics',
		exact: true
	},
	logout: {
		icon: <MdExitToApp />,
		name: 'Logout',
		path: '#'
	}
};

export default ({ width }) => {
	const handleClick = () => {
		localStorage.removeItem('writr_token');
		window.location.href = '/';
	};
	return (
		<Fragment>
			<Main width={width}>
				<div className="drawer__ppic-wrp">
					<ProPic pro_pic={require('../../assets/img/dp.jpg')}></ProPic>
					<p>{user.username}</p>
				</div>
				<Section>
					<DrawerItem
						path={DrawerItems.addPost.path}
						icon={DrawerItems.addPost.icon}
						name={DrawerItems.addPost.name}
						exact={DrawerItems.addPost.exact}
					/>
					<DrawerItem
						path={DrawerItems.myPosts.path}
						icon={DrawerItems.myPosts.icon}
						name={DrawerItems.myPosts.name}
					/>
					<DrawerItem
						path={DrawerItems.allPosts.path}
						icon={DrawerItems.allPosts.icon}
						name={DrawerItems.allPosts.name}
					/>
					<DrawerItem
						path={DrawerItems.drafts.path}
						icon={DrawerItems.drafts.icon}
						name={DrawerItems.drafts.name}
					/>
					<Divider />
					<DrawerItem
						path={DrawerItems.allWritrs.path}
						icon={DrawerItems.allWritrs.icon}
						name={DrawerItems.allWritrs.name}
					/>
					<DrawerItem
						path={DrawerItems.followers.path}
						icon={DrawerItems.followers.icon}
						name={DrawerItems.followers.name}
					/>
					<DrawerItem
						path={DrawerItems.following.path}
						icon={DrawerItems.following.icon}
						name={DrawerItems.following.name}
					/>
					<Divider />
					<DrawerItem
						path={DrawerItems.settings.path}
						icon={DrawerItems.settings.icon}
						name={DrawerItems.settings.name}
					/>
					<DrawerItem
						path={DrawerItems.metrics.path}
						icon={DrawerItems.metrics.icon}
						name={DrawerItems.metrics.name}
					/>
					<DrawerItem
						path={DrawerItems.logout.path}
						icon={DrawerItems.logout.icon}
						name={DrawerItems.logout.name}
						handleClick={handleClick}
					/>
				</Section>
			</Main>
		</Fragment>
	);
};
