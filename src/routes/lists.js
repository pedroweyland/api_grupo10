import { Router } from 'express'
import { postWatchlist, getUserWatchlist, deleteWatchlistItem } from '../controllers/watchlist.js'
import { postFavoriteList, getFavoriteList, deleteFavoriteList } from '../controllers/favorite_list.js'
import apiKeyMiddleware from '../middleware/api_key_middleware.js'

const routes = Router()

routes.post('/watchlist', apiKeyMiddleware, postWatchlist) // Añadir a la watchlist
routes.get('/watchlist/:userId', apiKeyMiddleware, getUserWatchlist) // Obtener la watchlist de un usuario
routes.delete('/watchlist', apiKeyMiddleware, deleteWatchlistItem) // Eliminar de la watchlist

routes.post('/favorite', apiKeyMiddleware, postFavoriteList) // Añadir a la watchlist
routes.get('/favorite/:userId', apiKeyMiddleware, getFavoriteList) // Obtener la watchlist de un usuario
routes.delete('/favorite', apiKeyMiddleware, deleteFavoriteList) // Eliminar de la watchlist

export default routes
