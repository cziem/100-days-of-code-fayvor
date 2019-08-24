import React from 'react';
import { Main, NavWrap, NavItemList, MenuIcon } from '../../styles/Navbar';
import {
	MdAddCircleOutline,
	MdExitToApp,
	MdPerson,
	MdMenu
} from 'react-icons/md';

const NavItems = [
	{
		icon: <MdAddCircleOutline />,
		name: 'Add Post'
	},
	{
		icon: <MdPerson />,
		name: 'Profile'
	},
	{
		icon: <MdExitToApp />,
		name: 'Logout'
	}
];

const renderNavItems = () =>
	NavItems.map((navItem, idx) => {
		return (
			<NavItemList key={idx}>
				<span>{navItem.icon}</span>
				<p>{navItem.name}</p>
			</NavItemList>
		);
	});

const Navbar = ({ title }) => {
	return (
		<Main>
			<header>
				<MenuIcon>
					<MdMenu />
				</MenuIcon>
				<h4>{title}</h4>
			</header>
			<NavWrap>{renderNavItems()}</NavWrap>
		</Main>
	);
};

export default Navbar;
