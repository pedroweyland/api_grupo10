const { Router } = require('express')
const { getPopularSeries } = require('../controllers/series')
const { getSeriesDetails } = require('../controllers/series')

const rutas = Router()
rutas.get('/popular', getPopularSeries)
rutas.get('/:seriesId', getSeriesDetails)

module.exports = rutas
