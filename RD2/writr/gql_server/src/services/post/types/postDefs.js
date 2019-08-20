const { gql } = require("apollo-server");

const postDefs = gql`
  type Post {
    id: ID
    title: String!
    body: String
    createdAt: String
    updatedAt: String
    category: String
    tags: [String]
    author: User
  }

  extend type Query {
    getAllPosts: [Post]
    getAllUserPosts: [Post]
    getPost(id: ID!): Post
  }

  extend type Mutation {
    addPost(data: postInput): Post
    updatePost(data: updatePostInput): String
    removeTags(data: removeTags): String
    deletePost(id: ID!): String
  }

  input postInput {
    title: String!
    body: String
    category: String
    tags: String
  }

  input updatePostInput {
    id: ID!
    title: String
    body: String
    category: String
    tags: String
  }

  input removeTags {
    id: ID!
    tags: String
  }
`;

module.exports = postDefs;
