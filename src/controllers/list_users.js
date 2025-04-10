import User from '../database/users.js'

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll()

    res.status(200).json({
      status: 200,
      message: users
    })
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Internal server error'
    })
  }
}

export default getUsers
