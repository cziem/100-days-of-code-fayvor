const User = require("../../models/user.schema");

const userResolverQueries = {
  getAllUsers: async (parent, fields, { dataSources: { user } }, info) => {
    // if (context.user) return Post.find({})
    return await new user().getAllUsers()
  },

  getUser: async (_, { data }, { dataSources: { user } }) => {
    return await new user().getUser(data)
  }
};

module.exports = userResolverQueries;
