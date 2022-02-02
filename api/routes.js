const express = require('express');
const PostController = require('./app/controller/PostController');
const routes = express.Router();

//arrow function makes code fail (I don't know why)
routes.get('/posts', PostController.search);

routes.post('/posts', PostController.store);
routes.delete('/posts/delete/:id', PostController.delete);
routes.put('/posts/update/:id', PostController.update);

module.exports = routes;