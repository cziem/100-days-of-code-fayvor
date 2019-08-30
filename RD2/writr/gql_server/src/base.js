const EVS = require( './utils/emailVerificationService' )

class Base extends EVS {
  async createToken( user ) {
    return await jwt.sign( user, SECRETKEY, { expiresIn: "24hr" } )
  }
}

module.exports = Base