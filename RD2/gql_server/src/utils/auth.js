const SECRET = process.env.SECRET_KEY
const jwt = require("jsonwebtoken")

module.exports = {
  getUser: async (token) => {
    try {
      if (token) {
        const AuthUser = await jwt.verify(token, SECRET)
        return AuthUser
      }
      return null
    } catch (err) {
      return null
    }
  }
}