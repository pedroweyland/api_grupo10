import CustomError from '../exceptions/customError.js'
import { addToFavoriteList, getFavoriteListFromUser, removeFromFavoriteList } from '../service/favorite_list.js'

const postFavoriteList = async (request, response) => {
  /* eslint-disable camelcase */
  try {
    const { id_user, id_media_api, media_type } = request.body

    if (!id_user) {
      throw new CustomError('User id is required', 400)
    }
    if (!id_media_api) {
      throw new CustomError('Media api id is required', 400)
    }
    if (!media_type) {
      throw new CustomError('Media type is required', 400)
    }

    const favoriteItem = await addToFavoriteList(id_user, id_media_api, media_type)

    response.status(201).json({
      status: 201,
      data: favoriteItem
    })
  } catch (error) {
    response.status(error.status || 500).json({
      status: error.status || 500,
      message: error.message || 'Internal server error'
    })
  }
  /* eslint-enable camelcase */
}

const getFavoriteList = async (request, response) => {
  /* eslint-disable camelcase */
  try {
    const { userId } = request.params
    const favoriteList = await getFavoriteListFromUser(userId)

    response.status(200).json({
      status: 200,
      data: favoriteList
    })
  } catch (error) {
    response.status(error.status || 500).json({
      status: error.status || 500,
      message: error.message || 'Internal server error'
    })
  }
  /* eslint-enable camelcase */
}

const deleteFavoriteList = async (request, response) => {
  /* eslint-disable camelcase */
  try {
    const { id_user, id_media_api, media_type } = request.body

    if (!id_user) {
      throw new CustomError('Email is required', 400)
    }
    if (!id_media_api) {
      throw new CustomError('Username is required', 400)
    }
    if (!media_type) {
      throw new CustomError('Password is required', 400)
    }

    const result = await removeFromFavoriteList(id_user, id_media_api, media_type)

    response.status(200).json({
      status: 200,
      data: result
    })
  } catch (error) {
    response.status(error.status || 500).json({
      status: error.status || 500,
      message: error.message || 'Internal server error'
    })
  }
  /* eslint-enable camelcase */
}

export {
  postFavoriteList,
  getFavoriteList,
  deleteFavoriteList
}
