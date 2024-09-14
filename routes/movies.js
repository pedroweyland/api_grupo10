const { Router } = require('express')
const { getUpcoming, getMovieCredits } = require('../controllers/upcoming')
const routes = Router()

routes.get('/upcoming', getUpcoming)
routes.get('/credits/:idMovie', getMovieCredits)

module.exports = routes
