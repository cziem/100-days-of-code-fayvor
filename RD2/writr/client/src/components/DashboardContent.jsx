import React from 'react';
import Navbar from './shared/Navbar';
import Drawer from './shared/Drawer';
import { Main, DashboardWrap } from '../styles/Dashboard';

const DrawerWidth = 240;

const DashboardContent = ({ children }) => (
	<Main>
		<Navbar title="writr" />
		<Drawer width={DrawerWidth} />
		<DashboardWrap>{children}</DashboardWrap>
	</Main>
);

export default DashboardContent;
