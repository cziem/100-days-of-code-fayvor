const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./src/types");
const resolvers = require("./src/resolvers");
const dataSources = require('./src/datasources')

const URI = "mongodb://localhost:27017/gql-server";

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
  context: () => ({
    // auth here
  }),
  dataSources: () => (
    dataSources
  )
});

server.listen().then(({ url }) => console.log(`Server is running at ${url}`));
