const { Router } = require('express')
const { getPeopleDetails, getPeoplePopular } = require('../Controllers/people')

const rutas = Router()

rutas.get('/:idPerson', getPeopleDetails)
rutas.get('/', getPeoplePopular)

module.exports = rutas
