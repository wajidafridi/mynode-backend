const express=require('express')
const route = express.Router();

const controller = require('../controller/controller')

route.get('/api/feedbacks', controller.getData)
route.post('/api/feedbacks', controller.create)
route.delete('/api/feedbacks/:id', controller.delete)
// router.put('/api/feedbacks', controller.update)

module.exports=route;