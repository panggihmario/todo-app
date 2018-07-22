const user = require('../models/user.js')
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const saltRounds = 10;

class Controller{

    static register(req,res){
        var salt = bcrypt.genSaltSync(saltRounds);
        var hash = bcrypt.hashSync(req.body.password, salt);
        user.findOne({
            email:req.body.email
        })
        .then(function(mail){
            if(!mail){
                user.create({
                    name : req.body.name,
                    email : req.body.email,
                    password : hash
                })
                .then(function(dataUser){
                    var token = jwt.sign({id:dataUser._id,name:dataUser.name,email:dataUser.email},"hard")
                    res.status(200).json({
                        dataUser,token
                    })
                })
                .catch((err)=>{
                    res.json(err)
                    console.log(err)
                })
            }else{
                res.json("account sudah ada")
            }
        })  
     
    }

    static authentication(req,res,next){
        var decoded = jwt.verify(req.headers.token, 'easy')
        // console.log("===============",decoded)
        if(decoded){
            next()
        }else{
            res.status(400).json('error')
        }
    }

    static login(req,res){
        user.findOne({
            email : req.body.email
        })
        .then(function(dataUser){
            if(dataUser){
                let checkPassword = bcrypt.compareSync(req.body.password, dataUser.password)
                var token = jwt.sign({id:dataUser._id,name:dataUser.name,email:dataUser.email},"easy")
                if(checkPassword){
                    // res.json(dataUser)
                    res.json(token)
                }else{
                    res.json('wrong password')
                }
            }
        })
    }
}

module.exports = Controller