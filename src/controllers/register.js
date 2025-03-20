import { request, response } from 'express'
import CustomError from '../exceptions/customError.js'
import postUser from '../service/register.js'

const postRegister = async (req = request, res = response) => {
  try {
    const { email, username, password } = req.body

    // Validamos que los campos no esten vacios y que la contraseña sea mayor a 8 caracteres
    validateInfo(email, username, password)

    validatePassword(password)

    // Creamos un nuevo usuario
    const newUser = await postUser({ email, username, password })

    res.status(201).json({
      status: 201,
      message: newUser
    })
  } catch (error) {
    res.status(error.status || 500).json({
      status: error.status || 500,
      message: error.message || 'Internal server error'
    })
  }
}

const validateInfo = (email, username, password) => {
  if (!email) {
    throw new CustomError('Email is required', 400)
  }

  if (!username) {
    throw new CustomError('Username is required', 400)
  }

  if (!password) {
    throw new CustomError('Password is required', 400)
  }
}

const validatePassword = (password) => {
  if (password.length < 8) {
    throw new CustomError('Password must be at least 8 characters long', 400)
  }
}

export default postRegister
