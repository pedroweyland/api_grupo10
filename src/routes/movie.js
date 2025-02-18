import { Router } from 'express'
import { getPopularMoviesList, getMovieDetails } from '../controllers/movie.js'
import { getUpcoming, getMovieCredits } from '../controllers/upcoming.js'

const routes = Router()

// Integrante Galo Santopietro
routes.get('/popular', getPopularMoviesList)
routes.get('/details/:idMovie', getMovieDetails)

// Integrante Pedro Weyland
routes.get('/upcoming', getUpcoming)
routes.get('/credits/:idMovie', getMovieCredits)

export default routes
