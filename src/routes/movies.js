import { Router } from 'express'
import { getMovieDetails } from '../controllers/movie_details.js'
import { getPopularMovies } from '../controllers/popular_movies.js'
import { getUpcoming, getMovieCredits } from '../controllers/upcoming.js'
import apiKeyMiddleware from '../middleware/api_key_middleware.js'

const routes = Router()

// Integrante Galo Santopietro
routes.get('/popular', apiKeyMiddleware, getPopularMovies)
routes.get('/details/:idMovie', apiKeyMiddleware, getMovieDetails)

// Integrante Pedro Weyland
routes.get('/upcoming', apiKeyMiddleware, getUpcoming)
routes.get('/credits/:idMovie', apiKeyMiddleware, getMovieCredits)

export default routes
