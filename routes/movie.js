const { Router } = require('express')
const { getPopularMoviesList, getMovieDetails } = require('../controllers/movie')
const routes = Router()

routes.get('/popular', getPopularMoviesList)
routes.get('/:idMovie', getMovieDetails)

module.exports = routes