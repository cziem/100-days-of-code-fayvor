const Base = require('../../base')
const Post = require('../../models/post.schema')

class post extends Base {
  // constructor () {
  //   super() 
  // }

  // Mutations
  async addPost(data) {
    const newPost = await Post.create({
      title: data.title,
      body: data.body
    })

    console.log(newPost)
    return newPost
  }
}

module.exports = post