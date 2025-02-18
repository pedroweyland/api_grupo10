import CustomError from '../exceptions/customError.js'
import { request, response } from 'express'
import { createUser, loginUser, updateUser, listUsers } from '../service/users.js'

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
      status: error.status || 500,
      message: error.message || 'Error interno del servidor'
    })
  }
}

const postLoginUser = async (req = request, res = response) => {
  try {
    validateLoginUser(req.body)

    const user = await loginUser(req.body)

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

const postUpdateUser = async (req = request, res = response) => {
  try {
    validateUpdateUser(req.body)

    const user = await updateUser(req.body)

    res.status(200).json({
      status: 200,
      message: user
    })
  } catch (error) {
    res.status(error.status || 500).json({
      status: error.status || 500,
      message: error.message || 'Error interno del servidor'
    })
  }
}

const getListUsers = async (req = request, res = response) => {
  try {
    const users = await listUsers()

    res.status(200).json({
      status: 200,
      data: users
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
    throw new CustomError("El campo 'username' es requerido.", 400)
  }

  if (!email) {
    throw new CustomError("El campo 'email' es requerido.", 400)
  }

  if (!password) {
    throw new CustomError("El campo 'password es requerido.", 400)
  }
}

const validateLoginUser = (body) => {
  const { email, password } = body

  if (!email) {
    throw new CustomError("El campo 'email' es requerido.", 400)
  }

  if (!password) {
    throw new CustomError("El campo 'password es requerido.", 400)
  }
}

const validateUpdateUser = (body) => {
  const { id, username, firstName, lastName, phone, address } = body

  if (!id) {
    throw new CustomError("El campo 'id' es requerido.", 400)
  }

  if (!username && !firstName && !lastName && !phone && !address) {
    throw new CustomError('Al menos un campo es requerido para actualizar.', 400)
  }
}

export {
  postRegisterUser,
  postLoginUser,
  postUpdateUser,
  getListUsers
}
