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
    })
  }
`

export const ADD_NEW_POST = gql`
  mutation (
    $title: String!
    $body: String
    $category: String
    $tags: String
  ) {
    addPost (data: {
      title: $title
      body: $body
      category: $category
      tags: $tags
    }) {
      id
      title
      body 
      category
      tags 
      createdAt
      updatedAt
    }
  }
`

export const GET_USER_POSTS = gql`
  query {
    getAllUserPosts {
      id
      title
      author {
        name
        roles
      }    
    }
  }
`

export const GET_ALL_POSTS = gql`
  query {
    getAllPosts {
      id
      title
      author {
        name
        roles
      }    
    }
  }
`

export const VERIFY_EMAIL = gql`
  mutation ($emailToken: String!) {
    verifyEmail (emailToken: $emailToken)
  }
`