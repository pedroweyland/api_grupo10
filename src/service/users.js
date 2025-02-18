const { User } = require('../database/users')
const bcrypt = require('bcrypt')
const { CustomError } = require('../exceptions/customError').default

const createUser = async (data) => {
  try {
    validatePasswordLength(data.password)

    // Busqueda de toda la lista de usuarios para luego validar si el email ya existe
    await validateUserExist(data.email)

    const createdUser = await User.create({
      username: data.username,
      email: data.email,
      password: data.password
    })

    return createdUser
  } catch (error) {
    error.message = error.message || 'Error en la creación del usuario'
    error.status = 400
    throw error
  }
}

const validatePasswordLength = (password) => {
  if (password.length < 8) {
    throw new CustomError('La contraseña debe tener al menos 8 caracteres.', 400)
  }
}

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } })

  if (!user) {
    throw new CustomError('El usuario no existe.', 404)
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    throw new CustomError('La contraseña es incorrecta.', 400)
  }

  return user
}

const validateUserExist = async (email) => {
  const existingUser = await User.findOne({ where: { email } })

  if (existingUser) {
    throw new CustomError('El email ya se encuentra registrado.', 400)
  }
}

module.exports = {
  createUser,
  loginUser
}
