const postResolverQueries = {
  getAllPosts: async (parent, fields, { AuthUser, dataSources: { post } }) => {
    if (!AuthUser) throw new Error('You are not Authenticated...')
    return await new post().getAllPosts();
  },

  getAllUserPosts: async (parent, fields, { AuthUser, dataSources: { post } }) => {
    if (!AuthUser) throw new Error('You are not Authenticated...')
    return await new post().getAllUserPosts(AuthUser);
  },

  getPost: async (_, { id }, { AuthUser, dataSources: { post } }) => {
    if (!AuthUser) throw new Error('You are not Authenticated...')
    return await new post().getPost(id, AuthUser);
  }
};

module.exports = postResolverQueries;
