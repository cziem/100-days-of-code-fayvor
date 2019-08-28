import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ( { component: Component, ...rest } ) => {
  const token = localStorage.getItem( 'writr_token' )
  const isAuth = token ? token : false

  return <Route
    {...rest}
    render={props => isAuth ?
      ( <Component {...props} /> ) :
      ( <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location }
        }}
      /> )
    }
  />
}



export default PrivateRoute