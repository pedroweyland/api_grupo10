const { Router } = require('express')
const { getPopularSeries } = require ('../controllers/series')
const { getSeries } = require('../controllers/series')


const rutas = Router()
rutas.get('/popular', getPopularSeries)
rutas.get('/:series_id', getSeries)


module.exports = rutas
