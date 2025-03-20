import CustomError from '../exceptions/customError.js'
import User from '../database/users.js'
import bcrypt from 'bcrypt'

const login = async (email, password) => {
  try {
    // validar si el email existe
    const existingUser = await validateEmailExist(email)

    // validar si la contraseña es correcta
    await validatePassword(password, existingUser)

    return existingUser
  } catch (error) {
    error.message = error.message || 'Internal server error'
    error.status = error.status || 500
    throw error
  }
}

const validateEmailExist = async (email) => {
  const existingUser = await User.findOne({ where: { email } })

  if (!existingUser) {
    throw new CustomError('Email does not exist', 404)
  }

  return existingUser
}

const validatePassword = async (password, existingUser) => {
  const isPasswordValid = await bcrypt.compare(password, existingUser.password)

  if (!isPasswordValid) {
    throw new CustomError('Invalid password', 400)
  }
}

export default login
