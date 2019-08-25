import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
	MdAddCircleOutline,
	MdExitToApp,
	MdPerson,
	MdMenu
} from 'react-icons/md';
import { Main, NavWrap, NavItemList, MenuIcon } from '../../styles/Navbar';

const NavItems = [
	{
		icon: <MdAddCircleOutline />,
		name: 'Add Post',
		path: '/dashboard/add-post'
	},
	{
		icon: <MdPerson />,
		name: 'Profile',
		path: '/dashboard/me'
	},
	{
		icon: <MdExitToApp />,
		name: 'Logout',
		path: '#'
	}
];

const renderNavItems = () =>
	NavItems.map((navItem, idx) => {
		return (
			<NavLink key={idx} to={navItem.path}>
				<NavItemList>
					<span>{navItem.icon}</span>
					<p>{navItem.name}</p>
				</NavItemList>
			</NavLink>
		);
	});

const Navbar = ({ title, toggleDrawer }) => {
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
			<NavWrap>{renderNavItems()}</NavWrap>
		</Main>
	);
};

export default Navbar;
