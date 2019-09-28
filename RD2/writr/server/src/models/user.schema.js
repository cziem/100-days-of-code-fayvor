const mongoose = require( "mongoose" );
const Schema = mongoose.Schema;

const userSchema = new Schema( {
  username: {
    type: String,
    minLength: 3,
    unique: true,
    required: true,
    trim: true
  },
  name: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  emailVerificationToken: {
    type: String
  },
  roles: {
    type: String,
    enum: ['AMDIN', 'EDITOR', 'WRITER', 'MEMBER', 'VISITOR']
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
}, {
    timestamps: true
  } )

const User = mongoose.model( 'User', userSchema )

module.exports = User
