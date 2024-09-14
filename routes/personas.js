const { Router } = require('express')
const { getPersonasDetalles, getPersonasPopulares } = require('../Controllers/personas')

const rutas = Router()

rutas.get('/:id_person', getPersonasDetalles)
rutas.get('/', getPersonasPopulares)

module.exports = rutas
