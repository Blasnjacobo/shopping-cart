const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id : String,
  name: String,
  username: String,
  photos: [{
    value: String
  }],
  provider: String
  },
  {
    timestamps: true
  });

module.exports.User = mongoose.model('User', userSchema, 'users')