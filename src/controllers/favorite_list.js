import CustomError from '../exceptions/customError.js'
import { addToFavoriteList, getFavoriteListFromUser, removeFromFavoriteList } from '../service/favorite_list.js'

const postFavoriteList = async (request, response) => {
  try {
    const { userId, mediaApiId, mediaType } = request.body

    if (!userId) {
      throw new CustomError('User id is required', 400)
    }
    if (!mediaApiId) {
      throw new CustomError('Media api id is required', 400)
    }
    if (!mediaType) {
      throw new CustomError('Media type is required', 400)
    }

    const favoriteItem = await addToFavoriteList(userId, mediaApiId, mediaType)

    response.status(201).json({
      status: 201,
      message: favoriteItem
    })
  } catch (error) {
    response.status(error.status || 500).json({
      status: error.status || 500,
      message: error.message || 'Internal server error'
    })
  }
}

const getFavoriteList = async (request, response) => {
  try {
    const { userId } = request.params
    const favoriteList = await getFavoriteListFromUser(userId)

    response.status(200).json({
      status: 200,
      message: favoriteList
    })
  } catch (error) {
    response.status(error.status || 500).json({
      status: error.status || 500,
      message: error.message || 'Internal server error'
    })
  }
}

const deleteFavoriteList = async (request, response) => {
  try {
    const { userId, mediaApiId, mediaType } = request.body

    if (!userId) {
      throw new CustomError('Email is required', 400)
    }
    if (!mediaApiId) {
      throw new CustomError('Username is required', 400)
    }
    if (!mediaType) {
      throw new CustomError('Password is required', 400)
    }

    const result = await removeFromFavoriteList(userId, mediaApiId, mediaType)

    response.status(200).json({
      status: 200,
      message: result
    })
  } catch (error) {
    response.status(error.status || 500).json({
      status: error.status || 500,
      message: error.message || 'Internal server error'
    })
  }
}

export {
  postFavoriteList,
  getFavoriteList,
  deleteFavoriteList
}
