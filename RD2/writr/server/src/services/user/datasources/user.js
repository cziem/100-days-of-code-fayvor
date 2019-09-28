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

    const user = await User.create( data )

    if ( user ) {
      user.emailVerificationToken = await this.getEmailVerifierToken( user.username )
      await user.save()

      const message = await this.getEVTTemplate( 'Registration was successful', user.emailVerificationToken )
      const subject = 'Account Verification'

      this.sendMail( user.email, message, subject )

      return 'Registration Successful'
    }
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
  * emailVerificationrue
  * @query: token
  * returns: string
  */
  async verifyEmail( data ) {
    try {
      const isValid = await this.verifyEmailToken( data )

      if ( isValid ) {
        const user = await User.findOne( { emailVerificationToken: data } )

        if ( user.isVerified ) return 'User is already verified, please continue to login...'

        if ( user ) {
          user.emailVerificationToken = null
          user.isVerified = true

          await user.save()

          return '🚀 Verification Successful'
        }
      }
    } catch ( error ) {
      if ( error.message.includes( 'expired' ) ) {
        return 'Your email verification token has expired.'
      } else {
        return error.message
      }
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

  /*
  * resendEmailVerification
  * @params: ID
  * returns: a string
  */
  async resendEmailVerification( id ) {
    try {
      const foundUser = await User.findById( id )

      if ( !foundUser ) throw new Error( 'User not found' )

      if ( foundUser.isVerified ) return "You have already been verified. Please continue to login..."

      foundUser.emailVerificationToken = await this.getEmailVerifierToken( id )

      await foundUser.save()

      const message = await this.getEVTTemplate( 'Email Verification', foundUser.emailVerificationToken, 'resend' )
      const subject = 'Account Verification'

      this.sendMail( foundUser.email, message, subject )

      return "Your verification token has been sent successfully, Check your email to continue"
    } catch ( e ) {
      throw new Error( 'Ivalid post ID' )
    }
  }

  /*
  * sendEmailVerification
  * @params: ID
  * returns: a string
  */
  async sendEmailVerification( id ) {
    try {
      const foundUser = await User.findById( id )

      if ( !foundUser ) throw new Error( 'User not found' )

      if ( foundUser.isVerified ) return 'Already verified'

      foundUser.emailVerificationToken = await this.getEmailVerifierToken( id )

      await foundUser.save()

      const message = await this.getEVTTemplate( 'Email Verification', foundUser.emailVerificationToken, 'resend' )
      const subject = 'Account Verification'

      this.sendMail( foundUser.email, message, subject )

      return "Your verification token has been sent successfully, Check your email to continue"
    } catch ( e ) {
      throw new Error( 'Ivalid post ID' )
    }
  }
}

module.exports = user
