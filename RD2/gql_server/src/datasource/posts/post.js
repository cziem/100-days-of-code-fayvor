const Base = require('../../base')
const Post = require('../../models/post.schema')

class post extends Base {
  // constructor () {
  //   super()
  // }

  // Mutations

  /*
  * addPost to DB
  * @params: data, current user
  * returns: new post
  */
  async addPost(data, user) {
    const author = {
      id: user._id
    }

    return await Post.create({
      title: data.title,
      body: data.body,
      author
    })
  }

  /*
  * updatePost in DB
  * @params: data
  * returns: updated post
  */
  async updatePost({ id, title,  body, category }, { _id }) {
    const author = {
      id: _id
    }

    try {
      const updatedPost = await Post.updateOne(
        { _id: id },
        { $set: { title, body, author } },
        // { $push: { category } },
        { new: true }
      );

      if (updatedPost.ok === 1) return 'update successful'
    } catch (e) {
      throw new Error(e)
    }
  }

  /*
  * deletePost from DB
  * @params: id
  * returns: String
  */
  async deletePost(id) {
    try {
      const deleted = await Post.findByIdAndDelete(id)
      if(deleted) return 'post deleted'
    } catch (e) {
      throw new Error('Invalid Post ID')
    }
  }

  // Queries

  /*
  * getAllPosts
  * returns: an array of all posts
  */
  async getAllPosts() {
    const posts = await Post.find({}).populate('user').exec()

    // console.log(posts);
    return posts
  }

  /*
  * getPost
  * @params: ID
  * returns: an array of all posts
  */
  async getPost(id) {
    try {
      return await Post.findById(id).populate('user')
    } catch (e) {
      throw new Error('Ivalid post ID')
    }
  }
}

module.exports = post
