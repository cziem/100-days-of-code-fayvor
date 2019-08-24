import React from 'react';
import { Main } from '../../styles/Navbar';

const Navbar = ({ title }) => {
	return (
		<Main>
			<header>
				<h4>{title}</h4>
			</header>
			<nav>links</nav>
		</Main>
	);
};

export default Navbar;
