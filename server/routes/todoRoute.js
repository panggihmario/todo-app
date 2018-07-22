var express = require('express')
var router = express.Router()
const todoCon = require('../controller/todoController.js')


router.post('/task',todoCon.addTask)
router.get('/alltask',todoCon.allTask)
router.delete('/delete/:id',todoCon.deleteTask)



module.exports = router