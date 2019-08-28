import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItemList } from '../../styles/Navbar';

const NavbarItem = ({ path, icon, name, handleClick }) => {
	return (
		<NavLink to={path} onClick={handleClick}>
			<NavItemList>
				<span>{icon}</span>
				<p>{name}</p>
			</NavItemList>
		</NavLink>
	);
};

export default NavbarItem;
