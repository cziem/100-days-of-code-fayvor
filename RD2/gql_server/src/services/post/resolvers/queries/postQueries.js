const postResolverQueries = {
  getAllPosts: async (parent, fields, { AuthUser, dataSources: { post } }) => {
    if (!AuthUser) throw new Error('You are not Authenticated...')
    return await new post().getAllPosts();
  },

  getPost: async (_, { id }, { AuthUser, dataSources: { post } }) => {
    if (!AuthUser) throw new Error('You are not Authenticated...')
    return await new post().getPost(id);
  }
};

module.exports = postResolverQueries;
