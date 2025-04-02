import { Router } from 'express'
import postRegister from '../controllers/register.js'
import postLogin from '../controllers/login.js'
import getUsers from '../controllers/list_users.js'
import putUpdateUser from '../controllers/update_user.js'

const routes = Router()

routes.post('/register', postRegister)
routes.post('/login', postLogin)
routes.get('/users', getUsers)
routes.put('/user/update', putUpdateUser)

export default routes
