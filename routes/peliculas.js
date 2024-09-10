const { Router } = require('express')
const { getProximamente, getCreditosDePelicula } = require('../controllers/proximamente')
const rutas = Router()

rutas.get('/proximamente', getProximamente)
rutas.get('/creditos/:idPelicula', getCreditosDePelicula)

module.exports = rutas
