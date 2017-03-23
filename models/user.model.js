var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

var User = mongoose.model('User', userSchema);
module.exports = User;
