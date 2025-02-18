import Router from 'express'
import { getPeopleDetails, getPeoplePopular } from '../controllers/people.js'

const rutas = Router()

rutas.get('/:idPerson', getPeopleDetails)
rutas.get('/', getPeoplePopular)

export default rutas
