const { gql } = require("apollo-server");

const userDefs = gql`
  interface UserBase {
    name: String
    roles: String
    posts: [Post]
    username: String!
    email: String!
    isActive: Boolean
  }

  interface MutationResponse {
    code: String
    success: Boolean
    message: String
  }

  type User implements UserBase {
    name: String
    roles: String
    id: ID
    posts: [Post]
    username: String!
    email: String!
    isActive: Boolean
  }

  type UserResponse implements UserBase {
    name: String
    id: ID
    roles: String
    posts: [Post]
    username: String!
    email: String!
    isActive: Boolean
    token: String
  }

  type LoggedInUser {
    code: String
    token: String
  }

  enum Roles {
    AMDIN,
    EDITOR,
    MARKETER,
    MEMBER,
    VISIOR
  }

  extend type Query {
    getAllUsers: [User]
    getUser(id: ID): User
  }

  extend type Mutation {
    addUser(data: createUser): User
    loginUser(data: loginUser): LoggedInUser
    updateUser(data: updateUser): String
    deleteUser(id: ID!): String
  }

  input createUser {
    name: String
    username: String!
    password: String!
    email: String!
    roles: String
  }

  input loginUser {
    email: String!
    password: String!
  }

  input updateUser {
    name: String
    username: String
    password: String
    email: String
    roles: String
    isActive: Boolean
  }
`;

module.exports = userDefs;
