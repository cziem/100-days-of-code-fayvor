const User = require("../../models/user.schema");

const userResolverMutations = {
  addUser: async (_, { data }, { dataSources: { user } }) => {
    return await new user().addUser(data)
  },

  loginUser: async (_, { data }, { dataSources: { user } }) => {
    return await new user().loginUser(data)
  },

  updateUser: async (_, { data }, { dataSources: { user } }) => {
    return await new user().updateUser(data)
  },

  deleteUser: async (_, { data }, { dataSources: { user } }) => {
    return await new user().deleteUser(data)
  }
}

module.exports = userResolverMutations
