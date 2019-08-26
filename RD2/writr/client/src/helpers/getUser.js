import jwt_decode from 'jwt-decode'

export default ( token ) =>
  token ? jwt_decode( token ) : 'Invalid token';
