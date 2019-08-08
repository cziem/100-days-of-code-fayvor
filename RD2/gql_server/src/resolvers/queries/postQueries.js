const Post = require("../../models/post.schema");

const postResolverQueries = {
  getAllPosts: async (parent, fields, { dataSources: { post } }, info) => {
    return await new post().getAllPosts();
  },

  getPost: async (_, { id }, { dataSources: { post } }) => {
    return await new post().getPost(id);
  }
};

module.exports = postResolverQueries;
