import { request, response } from 'express'
import updateUser from '../service/update_user.js'
import CustomError from '../exceptions/customError.js'

const putUpdateUser = async (req = request, res = response) => {
  try {
    const { id, username, firstName, lastName, phone, address } = req.body

    if (!id) {
      throw new CustomError('User ID is required', 400)
    }

    const user = await updateUser(id, username, firstName, lastName, phone, address)

    res.status(200).json({
      status: 200,
      message: user
    })
  } catch (error) {
    res.status(error.status || 500).json({
      status: error.status || 500,
      message: error.message || 'Internal server error'
    })
  }
}

export default putUpdateUser
