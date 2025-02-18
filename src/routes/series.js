import { getPopularSeries, getSeriesDetails } from '../controllers/series.js'
import { Router } from 'express'

const rutas = Router()
rutas.get('/popular', getPopularSeries)
rutas.get('/:seriesId', getSeriesDetails)

export default rutas
