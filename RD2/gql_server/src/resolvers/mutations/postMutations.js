const postResolverMutations = {
  // Add new post
  addPost: async (_, { data }, { dataSources }) => {
    const { post } = dataSources
    return await new post().addPost(data)
  },

  // Update post
  updatePost: async (_, { data }, { dataSources: { post } }) => {
    return await new post().updatePost(data)
  },

  // Delete Post by ID
  deletePost: async (_, { id }, { dataSources }) => {
    const { post } = dataSources
    return await new post().deletePost(id)
  }
}

module.exports = postResolverMutations
