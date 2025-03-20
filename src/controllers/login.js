import login from '../service/login.js'
import { request, response } from 'express'
import CustomError from '../exceptions/customError.js'

const postLogin = async (req = request, res = response) => {
  try {
    const { email, password } = req.body

    validarInfo(email, password)

    const loginUser = await login(email, password)

    res.status(200).json({
      status: 200,
      message: 'Login successful',
      user: loginUser
    })
  } catch (error) {
    res.status(error.status || 500).json({
      status: error.status || 500,
      message: error.message || 'Internal server error'
    })
  }
}

const validarInfo = (email, password) => {
  if (!email) {
    throw new CustomError('Email is required', 400)
  }
  if (!password) {
    throw new CustomError('Password is required', 400)
  }
}

export default postLogin
