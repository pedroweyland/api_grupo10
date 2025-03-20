import { Router } from 'express'
import postRegister from '../controllers/register.js'
import postLogin from '../controllers/login.js'

const routes = Router()

routes.post('/register', postRegister)
routes.post('/login', postLogin)

export default routes
