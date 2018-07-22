const todo = require('../models/todo.js')

class Controller{
    static addTask(req,res){
        todo.create({
            task : req.body.task
        })
        .then(function(data){
            console.log(data)
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
       
    }
}

module.exports = Controller