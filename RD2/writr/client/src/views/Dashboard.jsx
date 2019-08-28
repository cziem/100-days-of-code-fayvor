import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardContent from '../components/DashboardContent';
import DashboardRoot from '../components/dashboard/DashboardRoot';
import AddPost from '../components/dashboard/posts/AddPost';
// import SinglePost from '../components/dashboard/posts/SinglePost';
// import EditPost from '../components/dashboard/posts/EditPost';
import AllPosts from '../components/dashboard/posts/AllPosts';
import AllUserPosts from '../components/dashboard/posts/AllUserPosts';
import Draft from '../components/dashboard/posts/Draft';
import AllUsers from '../components/dashboard/users/AllUser';
import Followers from '../components/dashboard/users/Followers';
import Following from '../components/dashboard/users/Following';
import Settings from '../components/dashboard/misc/Settings';
import Metrics from '../components/dashboard/misc/Metrics';

const Dashboard = () => {
	const DashboardRoutes = () => {
		return (
			<Switch>
				<Route exact path="/dashboard" component={DashboardRoot} />
				<Route exact path="/dashboard/add-post" component={AddPost} />
				{/* <Route exact path="/dashboard/:post" component={SinglePost} /> */}
				{/* <Route exact path="/dashboard/edit-post/:post" component={EditPost} /> */}
				<Route exact path="/dashboard/my-posts" component={AllUserPosts} />
				<Route exact path="/dashboard/all-posts" component={AllPosts} />
				<Route exact path="/dashboard/drafts" component={Draft} />
				<Route exact path="/dashboard/all-writrs" component={AllUsers} />
				<Route exact path="/dashboard/followers" component={Followers} />
				<Route exact path="/dashboard/following" component={Following} />
				<Route exact path="/dashboard/settings" component={Settings} />
				<Route exact path="/dashboard/metrics" component={Metrics} />
			</Switch>
		);
	};
	return (
		<Router>
			<DashboardContent>
				<DashboardRoutes />
			</DashboardContent>
		</Router>
	);
};

export default Dashboard;
