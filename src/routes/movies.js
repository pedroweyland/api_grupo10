import { Router } from 'express'
import { getMovieDetails } from '../controllers/movie_details.js'
import { getPopularMovies } from '../controllers/popular_movies.js'
import { getUpcoming, getMovieCredits } from '../controllers/upcoming.js'

const routes = Router()

// Integrante Galo Santopietro
routes.get('/popular', getPopularMovies)
routes.get('/details/:idMovie', getMovieDetails)

// Integrante Pedro Weyland
routes.get('/upcoming', getUpcoming)
routes.get('/credits/:idMovie', getMovieCredits)

export default routes
