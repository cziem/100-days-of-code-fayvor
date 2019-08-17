const userResolverQueries = {
  getAllUsers: async (_, args, { AuthUser, dataSources: { user } }) => {
    if (!AuthUser) throw new Error('You are not Authenticated...')
    return await new user().getAllUsers()
  },

  getUser: async (_, { id }, { AuthUser, dataSources: { user } }) => {
    if (!AuthUser) throw new Error('You are not Authenticated...')
    return await new user().getUser(id)
  }
};

module.exports = userResolverQueries;
