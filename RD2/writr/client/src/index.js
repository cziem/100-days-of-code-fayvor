import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

// import components from route
import AppRoute from "./helpers/routes";

import './styles/index.css'

// Setup the apollo client
const client = new ApolloClient({
  uri: 'http://localhost:6301/graphql'
})

const AppService = () => (
  <ApolloProvider client={client}>
    <AppRoute />
  </ApolloProvider>
)

render(<AppService />, document.getElementById('root'));
