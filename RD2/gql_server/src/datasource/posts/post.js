const Base = require('../../base')
const Post = require('../../models/post.schema')

class post extends Base {
  // constructor () {
  //   super()
  // }

  // Mutations

  /*
  * addPost to DB
  * @params: data
  * returns: new post
  */
  async addPost(data) {
    const newPost = await Post.create({
      title: data.title,
      body: data.body
    })

    return newPost
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
    return await Post.find({})
  }

  /*
  * getPost
  * @params: ID
  * returns: an array of all posts
  */
  async getPost(id) {
    try {
      return await Post.findById(id)
    } catch (e) {
      throw new Error('Ivalid post ID')
    }
  }
}

module.exports = post
