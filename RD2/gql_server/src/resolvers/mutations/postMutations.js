const postResolverMutations = {
  // Add new post
  addPost: async (_, { data }, { AuthUser, dataSources }) => {
    if (!AuthUser) throw new Error('You are not Authenticated...')
    const { post } = dataSources
    return await new post().addPost(data, AuthUser._doc)
  },

  // Update post
  updatePost: async (_, { data }, { AuthUser, dataSources: { post } }) => {
    if (!AuthUser) throw new Error('You are not Authenticated...')
    return await new post().updatePost(data, AuthUser._doc)
  },

  // Delete Post by ID
  deletePost: async (_, { id }, { AuthUser, dataSources }) => {
    if (!AuthUser) throw new Error('You are not Authenticated...')
    const { post } = dataSources
    return await new post().deletePost(id, AuthUser._doc)
  }
}

module.exports = postResolverMutations
