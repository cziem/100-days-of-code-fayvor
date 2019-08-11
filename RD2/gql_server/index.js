require('./src/config/config')
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./src/types");
const resolvers = require("./src/resolvers");
const dataSources = require('./src/datasources')

const { getUser } = require('./src/utils/auth')

const URI = process.env.MONGODB_URI;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("App connected to DB..."))
  .catch(err => {
    console.error(`Error: ${err}`)
    process.exit(1)
  });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || ''

    const AuthUser = getUser(token)

    // console.log(AuthUser)

    if (!AuthUser) {
      throw new Error('Not Authenticated')
    } else {
      return { AuthUser }
    }
  },
  dataSources: () => (
    dataSources
  )
});

server.listen().then(({ url }) => console.log(`Server is running at ${url}`));
