var mongoose = require('mongoose')

var Schema = mongoose.Schema
var blogUser = new Schema({
    name:  {
      type : String,
      required : true
    },
    email : {
      type : String,
      required : true
    },
    password : {
      type : String,
      required : true
    },
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