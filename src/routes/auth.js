const { Router } = require('express')
const { postRegisterUser, postLoginUser } = require('../controllers/auth')

const routes = Router()

routes.post('/user/register', postRegisterUser)
routes.post('/user/login', postLoginUser)
module.exports = routes
