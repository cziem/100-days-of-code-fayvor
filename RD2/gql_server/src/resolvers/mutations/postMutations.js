const postResolverMutations = {
  // Add new post
  addPost: async (_, { data }, { AuthUser, dataSources }) => {
    if (!AuthUser) throw new Error('You are not Authenticated...')
    const { post } = dataSources
    return await new post().addPost(data)
  },

  // Update post
  updatePost: async (_, { data }, { AuthUser, dataSources: { post } }) => {
    if (!AuthUser) throw new Error('You are not Authenticated...')
    return await new post().updatePost(data)
  },

  // Delete Post by ID
  deletePost: async (_, { id }, { AuthUser, dataSources }) => {
    if (!AuthUser) throw new Error('You are not Authenticated...')
    const { post } = dataSources
    return await new post().deletePost(id)
  }
}

module.exports = postResolverMutations
