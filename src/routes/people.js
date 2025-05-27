import Router from 'express'
import { getPeopleDetails } from '../controllers/people_details.js'
import { getPeoplePopular } from '../controllers/popular_people.js'
import apiKeyMiddleware from '../middleware/api_key_middleware.js'

const rutas = Router()

rutas.get('/:idPerson', apiKeyMiddleware, getPeopleDetails)
rutas.get('/', apiKeyMiddleware, getPeoplePopular)

export default rutas
