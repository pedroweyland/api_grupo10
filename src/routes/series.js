import { getSeriesDetails } from '../controllers/series_details.js'
import { getPopularSeries } from '../controllers/popular_series.js'
import apiKeyMiddleware from '../middleware/api_key_middleware.js'
import { Router } from 'express'

const rutas = Router()
rutas.get('/popular', apiKeyMiddleware, getPopularSeries)
rutas.get('/:seriesId', apiKeyMiddleware, getSeriesDetails)

export default rutas
