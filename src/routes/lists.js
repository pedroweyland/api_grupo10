import { Router } from 'express'
import { postWatchlist, getUserWatchlist, deleteWatchlistItem } from '../controllers/watchlist.js'
import { postFavoritelist, getUserFavoritelist, deleteFavoritelistItem } from '../controllers/favoritelist.js'

const routes = Router()

routes.post('/watchlist', postWatchlist) // Añadir a la watchlist
routes.get('/watchlist/:userId', getUserWatchlist) // Obtener la watchlist de un usuario
routes.delete('/watchlist', deleteWatchlistItem) // Eliminar de la watchlist

routes.post('/favoritelist', postFavoritelist) // Añadir a la watchlist
routes.get('/favoritelist/:userId', getUserFavoritelist) // Obtener la watchlist de un usuario
routes.delete('/favoritelist', deleteFavoritelistItem) // Eliminar de la watchlist

export default routes
