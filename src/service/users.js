import CustomError from '../exceptions/customError.js'
import User from '../database/users.js'
import bcrypt from 'bcrypt'

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
    error.status = error.status || 500
    throw error
  }
}

const loginUser = async (body) => {
  const { email, password } = body

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

const updateUser = async (body) => {
  const { id, username, firstName, lastName, phone, address } = body

  // actualizo los datos del usuario
  const affectedUser = await User.update({
    username,
    firstName,
    lastName,
    phone,
    address
  }, {
    where: {
      id
    }
  })

  if (affectedUser[0] === 0) {
    throw new CustomError('El usuario a modificar no existe.', 404)
  }

  return await User.findByPk(id)
}

const listUsers = async () => {
  return await User.findAll()
}

const validatePasswordLength = (password) => {
  if (password.length < 8) {
    throw new CustomError('La contraseña debe tener al menos 8 caracteres.', 400)
  }
}

const validateUserExist = async (email) => {
  const existingUser = await User.findOne({ where: { email } })

  if (existingUser) {
    throw new CustomError('El email ya se encuentra registrado.', 400)
  }
}

export {
  createUser,
  loginUser,
  updateUser,
  listUsers
}
