const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
  }
}, {
  timestamps: true
})

const User = mongoose.model('user', userSchema)

module.exports = User
