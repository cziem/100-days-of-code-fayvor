import { gql } from 'apollo-boost'

export const LOGIN_USER = gql`
  mutation (
    $email: String!
    $password: String!
  ) {
    loginUser (data: {
      email: $email
      password: $password
    }) {
      code
      token
    }
  }
`

export const ADD_NEW_USER = gql`
  mutation (
    $name: String
    $username: String!
    $password: String!
    $email: String!
    $roles: String
  ) {
    addUser (data: {
      name: $name
      username: $username
      password: $password
      email: $email
      roles: $roles
    }) {
      id
      username
      email
      name
      roles
      isActive
    }
  }
`