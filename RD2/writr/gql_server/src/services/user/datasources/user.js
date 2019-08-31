const jwt = require( 'jsonwebtoken' )

const Base = require( '../../../base' )
const User = require( '../../../models/user.schema' )

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
  async addUser( data ) {
    const foundUser = await User.findOne( { email: data.email } )

    if ( foundUser ) {
      throw new Error( `A user with ${data.email} already exists, do you want to login?` )
    }

    data.password = await this.hashPassword( data.password )

    // const user = await User.create( data )
    const message = 'Registration was successful'
    const subject = 'Account Verification'

    // this.sendMail( data.email, message, subject )
    this.logger( data, 'Success' );

    return 'Registration Successful'

    // if ( user ) {
    //   const message = 'Registration was successful'
    //   const subject = 'Account Verification'

    //   this.sendMail( data.email, message, subject )

    //   return 'Registration Successful'
    // }
  }

  /*
  * loginUser
  * @params: data
  * returns: loggedin user
  */
  async loginUser( data ) {
    try {
      const foundUser = await User.findOne( { email: data.email } )

      if ( !foundUser ) {
        throw new Error( 'No user found' )
      }

      const isValid = await this.comparePassword( data.password, foundUser.password )

      if ( isValid ) {
        const payload = {
          id: foundUser._id,
          username: foundUser.username,
          email: foundUser.email,
          name: foundUser.name
        }
        const token = await this.createToken( payload )
        return {
          code: 200,
          token
        }
      } else {
        throw new Error( 'Invalid Password' )
      }
    } catch ( e ) {
      throw new Error( e )
    }
  }

  /*
  * updateUser in DB
  * @params: data
  * returns: updated user
  */
  async updateUser( data ) {
    try {
      const updatedUser = await User.updateOne(
        { _id: id },
        { $set: { data } },
        { new: true }
      );

      if ( updatedUser.ok === 1 ) return 'update successful'
    } catch ( e ) {
      throw new Error( e )
    }
  }

  /*
  * deleteUser from DB
  * @params: id
  * returns: String
  */
  async deleteUser( id ) {
    try {
      const deleted = await User.findByIdAndDelete( id )
      if ( deleted ) return 'user deleted'
    } catch ( e ) {
      throw new Error( 'Invalid Post ID' )
    }
  }

  // Queries

  /*
  * getAllUsers
  * returns: an array of all users
  */
  async getAllUsers() {
    return await User.find( {} ).populate( 'posts' )
  }

  /*
  * getUser
  * @params: ID or username
  * returns: a single user
  */
  async getUser( id ) {
    try {
      return await User.findById( id ).populate( 'posts' )
    } catch ( e ) {
      throw new Error( 'Ivalid post ID' )
    }
  }
}

module.exports = user
