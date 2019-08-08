const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      // unique: true,
      trim: true
    },
    body: {
      type: String,
      trim: true
    },
    // author: Author,
    image: String,
    category: [String]
  },
  {
    timestamps: true
  }
);

const Post = mongoose.model("post", postSchema);

module.exports = Post;
