var express = require('express')
var router = express.Router()
const todoCon = require('../controller/todoController.js')


router.post('/task',todoCon.addTask)



module.exports = router