const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    body: {
      type: String,
      trim: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    image: String,
    category: {
      type: String,
      default: "Uncategorized"
    },
    tags: [
      {
        type: String,
        trim: true
      }
    ]
  },
  {
    timestamps: true
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
