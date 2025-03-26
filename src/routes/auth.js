import { Router } from 'express'
import postRegister from '../controllers/register.js'
import postLogin from '../controllers/login.js'
import getUsers from '../controllers/list_users.js'

const routes = Router()

routes.post('/register', postRegister)
routes.post('/login', postLogin)
routes.get('/users', getUsers)

export default routes
