const Base = require('../../../base')
const Post = require('../../../models/post.schema')
const User = require('../../../models/user.schema')

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
    let { tags } = data
    tags = tags ? (tags.length > 1 ? tags.split(',') : tags) : ''

    try {
      const author = await User.findOne({ _id: user.id })
      const post = await Post.create({
        title: data.title,
        body: data.body,
        category: data.category,
        tags,
        author: author._id
      })

      author.posts.push(post._id)
      await author.save()

      return post
    } catch (e) {
      throw new Error(e.message)
    }
  }

  /*
  * updatePost in DB
  * @params: data
  * returns: string
  */
  async updatePost({ id, title, body, category, tags }) {
    tags = tags ? (tags.length > 1 ? tags.split(',') : tags) : ''
    try {
      const updatedPost = await Post.updateOne(
        { _id: id },
        {
          $set: { title, body, category },
          $addToSet: { tags }
        },
        { new: true }
      );

      if (updatedPost.ok === 1) return 'update successful'
    } catch (e) {
      throw new Error(e)
    }
  }

  /*
  * removeTags in DB
  * @params: data
  * returns: string
  */
  async removeTags({ id, tags }) {
    tags = tags ? (tags.length > 1 ? tags.split(',') : tags) : ''
    try {
      const updatedPost = await Post.updateOne(
        { _id: id },
        { $pull: { tags: tags } }
      );

      console.log(updatedPost)
      // if (updatedPost.ok === 1) return 'update successful'
    } catch (e) {
      throw new Error(e)
    }
  }

  /*
  * deletePost from DB
  * @params: id
  * returns: String
  */
  async deletePost(id, AuthUser) {
    try {
      const author = await User.findOne({ _id: AuthUser.id })
      const post = await Post.findOne({ _id: id })

      author.posts.pop(post._id)
      await author.save()

      const deleted = await Post.findByIdAndDelete(id)
      if (deleted) return 'post deleted'
    } catch (e) {
      throw new Error('Invalid Post ID')
    }
  }

  // Queries

  /*
  * getAllPosts
  * returns: an array of all posts
  */
  async getAllPosts(user) {
    const posts = await Post.find({}).
      where({ author: user.id }).
      populate({
        path: 'author',
        model: 'User'
      })

    return posts
  }

  /*
  * getPost
  * @params: ID
  * returns: an array of all posts
  */
  async getPost(id, user) {
    try {
      // return await Post.findById(id).populate('user')
      const post = await Post.findById(id).where({ author: user.id }).populate({
        path: 'author',
        model: 'User'
      })

      return post
    } catch (e) {
      throw new Error('Ivalid post ID')
    }
  }
}

module.exports = post
