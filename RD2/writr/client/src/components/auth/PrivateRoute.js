import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props => isAuth ?
      (<Component {...props} />) :
      (<Redirect
        to={{
          pathname: "/login",
          state: { from: props.location }
        }}
      />)
    }
  />
);

export default PrivateRoute