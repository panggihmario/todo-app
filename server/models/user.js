var mongoose = require('mongoose')

var Schema = mongoose.Schema
var blogUser = new Schema({
    name:  String,
    email :String,
    password : String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });

var user = mongoose.model('user',blogUser)

module.exports = user