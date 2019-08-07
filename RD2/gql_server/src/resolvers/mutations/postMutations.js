// const Post = require("../../models/post.schema");

const postResolverMutations = {
  addPost: async (_, { data }, { dataSources }) => {

    const { post } = dataSources
    console.log(dataSources)
    return await new post().addPost(data)
  },

  // updatePost: async (_, { data }, { user }) => {
  //   const updatedPost = await Post.updateOne(
  //     { _id: data.id },
  //     {
  //       body: data.body
  //     }
  //   );

  //   return updatedPost;
  // }
}

module.exports = postResolverMutations