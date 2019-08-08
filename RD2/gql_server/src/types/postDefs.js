const { gql } = require("apollo-server");

const postDefs = gql`
  type Post {
    id: ID
    title: String!
    body: String
    createdAt: String
    updatedAt: String
    category: [String]
  }

  extend type Query {
    getAllPosts: [Post]
    getPost(id: ID): Post
  }

  extend type Mutation {
    addPost(data: postInput): Post
    updatePost(data: updatePostInput): String
    deletePost(id: ID!): String
  }

  input postInput {
    title: String!
    body: String
    category: String
  }

  input updatePostInput {
    id: ID!
    title: String
    body: String
    category: String
  }
`;

module.exports = postDefs;
