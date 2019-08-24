import React from 'react';
import { Main, ProPic } from '../../styles/Drawer';
import getUser from '../../helpers/getUser';

const token = localStorage.getItem('token');
const user = getUser(token);

export default ({ width }) => {
	return (
		<>
			<Main width={width}>
				<div className="drawer__ppic-wrp">
					<ProPic pro_pic={require('../../assets/img/dp.jpg')}></ProPic>
					<p>{user.username}</p>
				</div>
			</Main>
		</>
	);
};
