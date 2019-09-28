require( './src/config/config' )
const { MONGODB_URI: URI, PORT } = process.env
const { ApolloServer } = require( "apollo-server" );
const mongoose = require( "mongoose" );

const typeDefs = require( "./src/types" );
const resolvers = require( "./src/resolvers" );
const dataSources = require( './src/datasources' )

const { getUser } = require( './src/utils/auth' )

mongoose
  .connect( URI, {
    useNewUrlParser: true,
    useCreateIndex: true
  } )
  .then( () => console.log( "App connected to DB..." ) )
  .catch( err => {
    console.error( `Error: ${err}` )
    process.exit( 1 )
  } );

const server = new ApolloServer( {
  typeDefs,
  resolvers,
  context: async ( { req } ) => {
    const token = req.headers.authorization || ''

    const AuthUser = await getUser( token )

    return { AuthUser }

    // We don't wanna do this because it stops evey other call to the datasources. This means once there is no token, users cannot do anything. You can't even login to get the token. So we use the above method and check the AuthUser at teh endpoint we want to consume...

    /* if (!AuthUser) {
      throw new Error('Not Authenticated')
    } else {
      return { AuthUser }
    } */
  },
  dataSources: () => (
    dataSources
  )
} );

server.listen( PORT ).then( ( { url } ) => console.log( `Server is running at ${url}` ) );
