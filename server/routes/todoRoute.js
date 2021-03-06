var express = require('express')
var router = express.Router()
const todoCon = require('../controller/todoController.js')
var userCon = require("../controller/userController.js")


router.post('/task',userCon.authentication,todoCon.addTask)
router.get('/alltask',userCon.authentication,todoCon.allTask)
router.delete('/delete/:id',todoCon.deleteTask)
router.put('/edit/:id',todoCon.updateTask)




module.exports = router