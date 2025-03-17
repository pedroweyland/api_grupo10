import { getSeriesDetails } from '../controllers/series_details.js'
import { getPopularSeries } from '../controllers/popular_series.js'
import { Router } from 'express'

const rutas = Router()
rutas.get('/popular', getPopularSeries)
rutas.get('/:seriesId', getSeriesDetails)

export default rutas
