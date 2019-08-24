import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Import Helpers
import PrivateRoute from './auth/PrivateRoute'

import Login from '../views/Login'
import Signup from '../views/Signup'
import Welcome from '../views/Welcome'
import Dashboard from '../views/Dashboard'
import AddPost from '../views/AddPost'
import NotFound from '../views/404'

const token = localStorage.getItem( 'token' )
const isAuth = token ? token : false

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={Signup} />
        <PrivateRoute isAuth={isAuth} path="/dashboard" component={Dashboard} />
        <PrivateRoute isAuth={isAuth} path="/add-post" component={AddPost} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </Router>
)

export default App