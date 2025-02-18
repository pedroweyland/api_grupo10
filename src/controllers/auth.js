const { request, response } = require('express')
const { createUser, loginUser } = require('../service/users')
const { CustomError } = require('../exceptions/customError').default

const postRegisterUser = async (req = request, res = response) => {
  try {
    validateCreateUser(req.body)

    const newUser = await createUser(req.body)

    res.status(201).json({
      status: 201,
      data: newUser
    })
  } catch (error) {
    res.status(error.status).json({
      status: error.status,
      message: error.message
    })
  }
}

const postLoginUser = async (req = request, res = response) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      throw new CustomError('Los campos "email" y "password" son requeridos.', 400)
    }

    const user = await loginUser(email, password)

    res.status(200).json({
      status: 200,
      data: user
    })
  } catch (error) {
    res.status(error.status || 500).json({
      status: error.status || 500,
      message: error.message || 'Error interno del servidor'
    })
  }
}

const validateCreateUser = (body) => {
  const { username, email, password } = body

  if (!username) {
    throw new CustomError('El campo "username" es requerido.', 400)
  }

  if (!email) {
    throw new CustomError('El campo "email" es requerido.', 400)
  }

  if (!password) {
    throw new CustomError('El campo "password" es requerido.', 400)
  }
}

module.exports = {
  postRegisterUser,
  postLoginUser
}
