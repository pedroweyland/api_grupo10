const { Router } = require('express')
const { getSeries } = require('../controllers/series')

const rutas = Router()
rutas.get('/:series_id', getSeries)

module.exports = rutas
