import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItemList } from '../../styles/Navbar';

export const NavbarItem = ({ path, icon, name, handleClick }) => {
	return (
		<NavLink to={path} onClick={handleClick}>
			<NavItemList>
				<span>{icon}</span>
				<p>{name}</p>
			</NavItemList>
		</NavLink>
	);
};

export const DrawerItem = ({ path, icon, name, exact, handleClick }) => {
	return (
		<NavLink to={path} onClick={handleClick} exact={exact}>
			<p>
				{icon}
				<span>{name}</span>
			</p>
		</NavLink>
	);
};
