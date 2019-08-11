const SECRET = process.env.APP_SECRET
const jwt = require("jsonwebtoken")

module.exports = {
  getUser: async (token) => {
    console.log('got called');

    try {
      if (token) {
        const AuthUser = await jwt.verify(token, SECRET)
        console.log(AuthUser);
        return AuthUser
      }
      return null
    } catch (err) {
      return null
    }

  }
}