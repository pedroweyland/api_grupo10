import { Router } from 'express'
import postRegister from '../controllers/register.js'

const routes = Router()

routes.post('/register', postRegister)

export default routes
