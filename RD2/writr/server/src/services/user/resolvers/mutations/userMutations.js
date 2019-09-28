const userResolverMutations = {
  addUser: async ( _, { data }, { dataSources: { user } } ) => {
    return await new user().addUser( data )
  },

  verifyEmail: async ( _, { emailToken }, { dataSources: { user } } ) => {
    return await new user().verifyEmail( emailToken )
  },

  loginUser: async ( _, { data }, { dataSources: { user } } ) => {
    return await new user().loginUser( data )
  },

  updateUser: async ( _, { data }, { AuthUser, dataSources: { user } } ) => {
    if ( !AuthUser ) throw new Error( 'You are not Authenticated...' )
    return await new user().updateUser( data )
  },

  deleteUser: async ( _, { id }, { AuthUser, dataSources: { user } } ) => {
    if ( !AuthUser ) throw new Error( 'You are not Authenticated...' )
    return await new user().deleteUser( id )
  }
}

module.exports = userResolverMutations
