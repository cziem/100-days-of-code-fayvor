const Many = require( 'extends-classes' )
const EVS = require( './utils/emailVerificationService' )
const Utils = require( './utils' )

class Base extends Many( EVS, Utils ) {

  async logger( message, type ) {
    await console.log( `
    ${type}: 
    ==========================================
    `, message )
  }

}

module.exports = Base