const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./src/types");
const resolvers = require("./src/resolvers");

const URI = "mongodb://localhost:27017/gql-server";

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(() => console.log("App connected to DB..."))
  .catch(err => {
    console.error(`Error: ${err}`)
    process.exit(1)
  });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,

  // For authentication
  // context: async ({ req }) => {
  //   const header = req.header["Authorization"];

  //   const token = header.split(" ")[1];

  //   const user = await getAuthUser(token);

  //   if (user) {
  //     // pass the token to the children
  //     return { user };
  //   } else {
  //     throw new Error("You are not authorized for this request");
  //   }
  // }
});

server.listen().then(({ url }) => console.log(`Server is running at ${url}`));
