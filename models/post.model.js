var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;
