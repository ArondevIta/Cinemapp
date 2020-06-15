const express = require('express')
const routes = express.Router()

const MovieController = require('./controllers/MovieController')
const MovieSearchController = require('./controllers/MovieSearchController')

routes.get('/movie', MovieController.index)
routes.post('/movie', MovieController.store)
routes.delete('/movie/:id', MovieController.drop)

routes.get('/search', MovieSearchController.index)

module.exports = routes
