const User = require("../../models/user.schema");

const userResolverQueries = {
  getAllPosts: async (parent, fields, context, info) => {
    // if (context.user) return Post.find({})
    return await User.find({});
  },

  getPost: async (_, { _id }, context) => {
    return await User.findById(_id);
  }
};

module.exports = userResolverQueries;
