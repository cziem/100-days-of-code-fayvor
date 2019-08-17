const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Base = require('../../../base')
const User = require('../../../models/user.schema')

class user extends Base {
  // constructor () {
  //   super()
  // }

  // Mutations

  /*
  * addUser to DB
  * @params: data
  * returns: new user
  */
  async addUser(data) {
    const foundUser = await User.findOne({ email: data.email })

    if (foundUser) {
      throw new Error(`A user with ${data.email} already exists, do you want to login?`)
    }

    data.password = await bcrypt.hash(data.password, 10)

    return await User.create(data)
  }

  /*
  * loginUser
  * @params: data
  * returns: loggedin user
  */
  async loginUser(data) {
    try {
      const foundUser = await User.findOne({ email: data.email })

      if (!foundUser) {
        throw new Error('No user found')
      }

      const isValid = await bcrypt.compare(data.password, foundUser.password)

      if (isValid) {
        const payload = {
          id: foundUser._id,
          username: foundUser.username,
          email: foundUser.email,
          name: foundUser.name
        }
        const token = await jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "2d" })
        return {
          code: 200,
          token
        }
      } else {
        throw new Error('Invalid Password')
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  /*
  * updateUser in DB
  * @params: data
  * returns: updated user
  */
  async updateUser(data) {
    try {
      const updatedUser = await User.updateOne(
        { _id: id },
        { $set: { data } },
        { new: true }
      );

      if (updatedUser.ok === 1) return 'update successful'
    } catch (e) {
      throw new Error(e)
    }
  }

  /*
  * deleteUser from DB
  * @params: id
  * returns: String
  */
  async deleteUser(id) {
    try {
      const deleted = await User.findByIdAndDelete(id)
      if (deleted) return 'user deleted'
    } catch (e) {
      throw new Error('Invalid Post ID')
    }
  }

  // Queries

  /*
  * getAllUsers
  * returns: an array of all users
  */
  async getAllUsers() {
    return await User.find({})
  }

  /*
  * getUser
  * @params: ID or username
  * returns: a single user
  */
  async getUser(id) {
    try {
      return await User.findById(id)
    } catch (e) {
      throw new Error('Ivalid post ID')
    }
  }
}

module.exports = user
