import Router from 'express'
import postRegister from '../controllers/register.js'
import postLogin from '../controllers/login.js'
import getUsers from '../controllers/list_users.js'
import putUpdateUser from '../controllers/update_user.js'
import apiKeyMiddleware from '../middleware/api_key_middleware.js'

const routes = Router()

routes.post('/register', apiKeyMiddleware, postRegister)
routes.post('/login', apiKeyMiddleware, postLogin)
routes.get('/users', apiKeyMiddleware, getUsers)
routes.put('/user/update', apiKeyMiddleware, putUpdateUser)

export default routes
