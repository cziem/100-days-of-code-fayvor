// Import mutations
const postMutations = require('./resolvers/mutations/postMutations')
const userMutations = require('./resolvers/mutations/userMutations')

// Import queries
const postQueries = require('./resolvers/queries/postQueries')
const userQueries = require('./resolvers/queries/userQueries')

module.exports = {
  Query: {
    ...postQueries,
    // ...userQueries
  },

  Mutation: {
    ...postMutations,
    // ...userMutations
  }
}
