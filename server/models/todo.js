var mongoose = require('mongoose')

var Schema = mongoose.Schema
var blogTodo = new Schema({
    task:  String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });

var todo = mongoose.model('task',blogTodo)

module.exports = todo