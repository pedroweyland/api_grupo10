const { Router } = require('express')
const { getPopularMoviesList, getMovieDetails } = require('../controllers/movie')
const { getUpcoming, getMovieCredits } = require('../controllers/upcoming')

const routes = Router()

// Integrante Galo Santopietro
routes.get('/popular', getPopularMoviesList)
routes.get('/:idMovie', getMovieDetails)

// Integrante Pedro Weyland
routes.get('/upcoming', getUpcoming)
routes.get('/credits/:idMovie', getMovieCredits)

module.exports = routes
