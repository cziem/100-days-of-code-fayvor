const { gql } = require('apollo-server')
// const GraphQLJSON = require('graphql-type-json')

// Get all defined types
const postDefs = require('./types/postDefs')

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
  postDefs
]