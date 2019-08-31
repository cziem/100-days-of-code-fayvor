const bcrypt = require( 'bcryptjs' )
const jwt = require( 'jsonwebtoken' )
const { SECRET_KEY } = process.env

class Utils {

  async createToken( payload ) {
    return await jwt.sign( payload, SECRET_KEY, { expiresIn: "24hr" } )
  }

  async hashPassword( password ) {
    return await bcrypt.hash( password, 10 )
  }

  async comparePassword( password, savedPassword ) {
    return await bcrypt.compare( password, savedPassword )
  }
}

module.exports = Utils