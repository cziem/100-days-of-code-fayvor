import React, { Fragment } from 'react';
import Link from 'next/link';

const linkStyle = {
	main: {
		display: 'flex',
		alignItems: 'center',
		background: '#151515',
		padding: '0 1rem'
	},
	page_title: {
		marginRight: '2rem',
		color: '#f9f9f9'
	},
	links: {
		marginRight: 15,
		color: '#f9f9f9'
	}
};

const Header = ({ title }) => (
	<div style={linkStyle.main}>
		<div style={linkStyle.page_title}>
			<h3>{title || 'Next App'}</h3>
		</div>
		<div>
			<Link href="/">
				<a style={linkStyle.links}>Home</a>
			</Link>
			<Link href="/about">
				<a style={linkStyle.links}>About</a>
			</Link>
		</div>
	</div>
);

export default Header;
