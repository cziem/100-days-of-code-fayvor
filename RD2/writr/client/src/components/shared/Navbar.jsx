import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	MdAddCircleOutline,
	MdExitToApp,
	MdPerson,
	MdMenu
} from 'react-icons/md';
import { NavbarItem } from './Navigations';
import { Main, NavWrap, MenuIcon } from '../../styles/Navbar';

const NavItems = {
	addPost: {
		icon: <MdAddCircleOutline />,
		name: 'Add Post',
		path: '/dashboard/add-post'
	},
	profile: {
		icon: <MdPerson />,
		name: 'Profile',
		path: '/dashboard/me'
	},
	logout: {
		icon: <MdExitToApp />,
		name: 'Logout',
		path: '#'
	}
};

const Navbar = ({ title, toggleDrawer }) => {
	const [navState] = useState(NavItems);

	const handleClick = () => {
		localStorage.removeItem('writr_token');
		window.location.href = '/';
	};

	return (
		<Main>
			<header>
				<MenuIcon onClick={toggleDrawer}>
					<MdMenu />
				</MenuIcon>
				<Link to="/dashboard">
					<h4>{title}</h4>
				</Link>
			</header>
			<NavWrap>
				<NavbarItem
					path={navState.addPost.path}
					icon={navState.addPost.icon}
					name={navState.addPost.name}
				/>
				<NavbarItem
					path={navState.profile.path}
					icon={navState.profile.icon}
					name={navState.profile.name}
				/>
				<NavbarItem
					path={navState.logout.path}
					icon={navState.logout.icon}
					name={navState.logout.name}
					handleClick={handleClick}
				/>
			</NavWrap>
		</Main>
	);
};

export default Navbar;
