module.exports = {
  development: {
    port: process.env.PORT || 5000,
    DB: process.env.MONGODB_URI,
    saltingRounds: 100
  }
}