const express = require('express')
const routes = express.Router()

const PostController = require('./app/controller/PostController')
const UserController = require('./app/controller/UserController')

// arrow function makes code fail (I don't know why)
routes.get('/posts', PostController.search)
routes.post('/posts', PostController.store)
routes.delete('/posts/delete/:id', PostController.delete)
routes.put('/posts/update/:id', PostController.update)

routes.post('/user', UserController.store);

module.exports = routes