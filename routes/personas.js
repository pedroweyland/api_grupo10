const { Router } = require('express')
const { getPersonasDetalles, getPersonasPopulares } = require('../Controllers/personas')

const rutas = Router()

rutas.get('/:person_id', getPersonasDetalles)
rutas.get('/', getPersonasPopulares)

module.exports = rutas
