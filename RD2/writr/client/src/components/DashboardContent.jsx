import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import Drawer from './shared/Drawer';
import { Main, DashboardWrap } from '../styles/Dashboard';

const DrawerWidth = 240;

const DashboardContent = ({ children }) => {
	const [drawerMode, setDrawerMode] = useState(true);

	const handleToggle = () => setDrawerMode(!drawerMode);

	return (
		<Main>
			<Navbar title="writr" toggleDrawer={handleToggle} />
			{drawerMode && <Drawer width={DrawerWidth} />}
			<DashboardWrap mode={drawerMode.toString()} width={DrawerWidth}>
				{children}
			</DashboardWrap>
		</Main>
	);
};

export default DashboardContent;
