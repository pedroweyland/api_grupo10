import CustomError from '../exceptions/customError.js'
import User from '../database/users.js'

const updateUser = async (id, username, firstName, lastName, phone, address) => {
  try {
    const user = await findUserById(id)

    const dataUpdated = validateUpdateUser(username, firstName, lastName, phone, address)

    if (dataUpdated.username) await validateUsernamesExist(id, dataUpdated.username)

    // Si dataUpdated no es vacio significa que el usuario quiere actualizar algo
    if (Object.keys(dataUpdated).length > 0) {
      await User.update(dataUpdated, { where: { id } })

      return await findUserById(id)
    }

    // Retorno el usuario sin cambios
    return user
  } catch (error) {
    error.message = error.message || 'Internal server error'
    error.status = error.status || 500
    throw error
  }
}

const findUserById = async (id) => {
  const user = await User.findByPk(id)

  if (!user) {
    throw new CustomError('User not found', 404)
  }

  return user
}

const validateUpdateUser = (username, firstName, lastName, phone, address) => {
  const dataUpdated = {}
  // Agrego todo campo que no sea vacio a mi objeto dataUpdated - asi actualizo que el usuario quiere
  if (username !== '') {
    dataUpdated.username = username
  }
  if (firstName !== '') {
    dataUpdated.firstName = firstName
  }
  if (lastName !== '') {
    dataUpdated.lastName = lastName
  }
  if (phone !== '') {
    dataUpdated.phone = phone
  }
  if (address !== '') {
    dataUpdated.address = address
  }

  return dataUpdated
}

const validateUsernamesExist = async (id, username) => {
  const existingUser = await User.findOne({ where: { username } })

  // Si existe un usuario con ese username, valido que no sea el mismo usuario
  if (existingUser) {
    if (existingUser.id !== id) {
      throw new CustomError('Username already exists', 400)
    }
  }
}

export default updateUser
