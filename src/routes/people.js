import Router from 'express'
import { getPeopleDetails } from '../controllers/people_details.js'
import { getPeoplePopular } from '../controllers/popular_people.js'

const rutas = Router()

rutas.get('/:idPerson', getPeopleDetails)
rutas.get('/', getPeoplePopular)

export default rutas
