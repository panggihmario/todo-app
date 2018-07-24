var mongoose = require('mongoose')

var Schema = mongoose.Schema
var blogTodo = new Schema({
    user :{
      type : Schema.Types.ObjectId,
      ref :  'user'
    },
    task:  String,
    duedate : String,
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