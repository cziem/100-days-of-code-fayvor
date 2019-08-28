import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_POSTS /* GET_ALL_POSTS */ } from '../../helpers/queries';
import Loading from '../utils/Loading';
import Error from '../utils/Error';

const DashboardRoot = () => {
	const { loading, error, data } = useQuery(GET_USER_POSTS);

	if (loading) return <Loading />;
	if (error) return <Error ErrorText={error.message.split(':').slice(1)} />;

	const { getAllUserPosts: userPosts } = data;

	const renderUserPosts = () => {
		return userPosts.length > 0
			? userPosts.map((post, idx) => <h3 key={idx}>{post.title}</h3>)
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
	return (
		<div>
			<h1>Dashboard Root</h1>
			{renderUserPosts()}
		</div>
	);
};

export default DashboardRoot;
