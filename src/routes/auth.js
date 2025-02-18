import { Router } from 'express'
import { postRegisterUser, postLoginUser, postUpdateUser, getListUsers } from '../controllers/auth.js'

const routes = Router()

routes.post('/user/register', postRegisterUser)
routes.post('/user/login', postLoginUser)
routes.put('/user/update', postUpdateUser)
routes.get('/user/list', getListUsers)

export default routes
