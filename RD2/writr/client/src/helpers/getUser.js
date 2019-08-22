import jwt_decode from 'jwt-decode'

export default (token) => jwt_decode(token)
