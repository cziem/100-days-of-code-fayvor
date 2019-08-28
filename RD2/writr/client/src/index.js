import React from 'react';
import { render } from 'react-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

// import components from route
import App from "./components/App";

import './styles/index.css'

// Get token from localStorage
const token = localStorage.getItem( 'writr_token' ) || ''

// Setup the apollo client
const cache = new InMemoryCache()

const client = new ApolloClient( {
  uri: 'http://localhost:6301/graphql',
  cache,
  headers: {
    authorization: token
  }
} )

const AppService = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

render( <AppService />, document.getElementById( 'root' ) );
