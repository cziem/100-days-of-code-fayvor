// Import mutations
const postMutations = require('./services/post/resolvers/mutations/postMutations')
const userMutations = require('./services/user/resolvers/mutations/userMutations')

// Import queries
const postQueries = require('./services/post/resolvers/queries/postQueries')
const userQueries = require('./services/user/resolvers/queries/userQueries')

module.exports = {
  Query: {
    ...postQueries,
    ...userQueries
  },

  Mutation: {
    ...postMutations,
    ...userMutations
  }
}
