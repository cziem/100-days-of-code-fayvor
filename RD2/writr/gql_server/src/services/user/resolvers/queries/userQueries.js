const { AuthenticationError } = require( 'apollo-server' )

const userResolverQueries = {
  getAllUsers: async ( _, args, { AuthUser, dataSources: { user } } ) => {
    if ( !AuthUser ) throw new AuthenticationError( 'You are not Authenticated...' )
    return await new user().getAllUsers()
  },

  getUser: async ( _, { id }, { AuthUser, dataSources: { user } } ) => {
    if ( !AuthUser ) throw new AuthenticationError( 'You are not Authenticated...' )
    return await new user().getUser( id )
  },

  resendEmailVerification: async ( _, { id }, { dataSources: { user } } ) => {
    return await new user().resendEmailVerification( id )
  },

  sendEmailVerification: async ( _, { id }, { AuthUser, dataSources: { user } } ) => {
    if ( !AuthUser ) throw new AuthenticationError( 'You are not Authenticated...' )
    return await new user().sendEmailVerification( id )
  }
};

module.exports = userResolverQueries;
