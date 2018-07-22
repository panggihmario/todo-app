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

    static allTask(req,res){
        todo.find({})
        .then(function(allData){
            res.json(allData)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    static deleteTask(req,res){
        todo.deleteOne({
            _id : req.params.id
        },function(err,data){
            res.json(data)
        })
    }
}

module.exports = Controller