import { Router } from 'express'
import { postRegisterUser, postLoginUser } from '../controllers/auth.js'

const routes = Router()

routes.post('/user/register', postRegisterUser)
routes.post('/user/login', postLoginUser)

export default routes
