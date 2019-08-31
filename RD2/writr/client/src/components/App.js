import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Import Helpers
import PrivateRoute from './auth/PrivateRoute'

import Login from '../views/Login'
import Signup from '../views/Signup'
import Welcome from '../views/Welcome'
import Dashboard from '../views/Dashboard'
import NotFound from '../views/404'
import EmailVerification from '../views/EmailVerification'

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path="/verify-email" component={EmailVerification} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </Router>
)

export default App