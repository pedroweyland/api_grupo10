import CustomError from '../exceptions/customError.js'
import User from '../database/users.js'

const postUser = async (data) => {
  try {
    await validateEmailExist(data.email)
    await validateUsernamesExist(data.username)

    const user = await User.create({
      username: data.username,
      email: data.email,
      password: data.password
    })

    return user
  } catch (error) {
    error.message = error.message || 'Internal server error'
    error.status = error.status || 500
    throw error
  }
}

const validateEmailExist = async (email) => {
  const existingUser = await User.findOne({ where: { email } })

  if (existingUser) {
    throw new CustomError('Email already exists', 400)
  }
}

const validateUsernamesExist = async (username) => {
  const existingUser = await User.findOne({ where: { username } })

  if (existingUser) {
    throw new CustomError('Username already exists', 400)
  }
}

export default postUser
