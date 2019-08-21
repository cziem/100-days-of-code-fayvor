import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/index.css'

// import App from './components/App';
import Login from './views/Login'
import Signup from './views/Signup'
import Welcome from './views/Welcome'
import Dashboard from './views/Dashboard'
import AddPost from './views/AddPost'
import NotFound from './views/404'

const AppRoute = (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/add-post" component={AddPost} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </Router>
)

render(AppRoute, document.getElementById('root'));
