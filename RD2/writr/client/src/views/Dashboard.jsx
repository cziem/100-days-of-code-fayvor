import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import DashboardContent from '../components/DashboardContent';
import { GET_USER_POSTS, GET_ALL_POSTS } from '../helpers/queries';
import Loading from '../components/utils/Loading';
import Error from '../components/utils/Error';

const Dashboard = () => {
	const { loading, error, data } = useQuery(GET_USER_POSTS);

	if (loading) return <Loading />;
	if (error) return <Error ErrorText={error.message.split(':').slice(1)} />;

	const { getAllUserPosts: userPosts } = data;

	const renderUserPosts = () => {
		return userPosts.length > 0
			? userPosts.map(post => <h3>{post.title}</h3>)
			: NoPosts;
	};

	const NoPosts = (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%'
			}}
		>
			<p>You have no posts yet... start writing now</p>
		</div>
	);

	console.log('data', userPosts);
	return <DashboardContent>{renderUserPosts()}</DashboardContent>;
};

export default Dashboard;
