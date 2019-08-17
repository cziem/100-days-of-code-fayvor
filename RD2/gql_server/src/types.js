const { gql } = require('apollo-server')
// const GraphQLJSON = require('graphql-type-json')

// Get all defined types
const postDefs = require('./services/post/types/postDefs')
const userDefs = require('./services/user/types/userDefs')

const linkSchema = gql`
  # scalar JSON

  type Mutation {
    _: Boolean
  }

  type Query {
    _: Boolean
  }
`

module.exports = [
  linkSchema,
  postDefs,
  userDefs
]
