const Post = require("../../models/post.schema");

const postResolverQueries = {
  getAllPosts: async (parent, fields, context, info) => {
    // if (context.user) return Post.find({})
    return await Post.find({});
  },

  getPost: async (_, { _id }, context) => {
    return await Post.findById(_id);
  }
};

module.exports = postResolverQueries;
