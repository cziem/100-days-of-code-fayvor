const User = require("../../models/user.schema");

const userResolverMutations = {
  addUser: async (_, { data }, { user }) => {
    return 'add user'
    // const newPost = await Post.create({
    //   title: data.title,
    //   body: data.body
    // });

    // console.log(newPost);

    // return newPost;
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

module.exports = userResolverMutations