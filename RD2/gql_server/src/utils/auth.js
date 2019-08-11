const SECRET = process.env.APP_SECRET
console.log(SECRET)
const jwt = require("jsonwebtoken")

module.exports = {
  getUser: async (token) => {
    try {
      if (token) {
        const user = await jwt.verify(token, SECRET)
        console.log(user);
        return AuthUser
      }
      return null
    } catch (err) {
      return null
    }

  }
}