import CustomError from '../exceptions/customError.js'
import Users from '../database/users.js'
import Lists from '../database/lists.js'
import { fetchSeriesDetails } from './series_details.js'
import { fetchMovieDetails } from './movie_details.js'
import createMedia from '../service/media_list.js'

const addToFavoriteList = async (userId, mediaId, mediaType) => {
  try {
    const userExists = await Users.findByPk(userId)
    if (!userExists) {
      throw new CustomError(`User with id ${userId} not found`, 404)
    }

    const favoriteItemExists = await Lists.findOne({ where: { mediaId, userId, mediaType } })
    if (favoriteItemExists) {
      throw new CustomError('Item already exists in the watchlist', 409)
    }

    let mediaData
    try {
      if (mediaType === 'movie') {
        mediaData = await fetchMovieDetails(mediaId)
      } else {
        mediaData = await fetchSeriesDetails(mediaId)
      }
    } catch (error) {
      throw new CustomError(`Error fetching ${mediaType} details: ${error.message}`, 404)
    }

    await createMedia(mediaType, mediaData)

    const favoriteItem = await Lists.create({
      mediaId,
      userId,
      listType: 'favorite'
    })

    return favoriteItem
  } catch (error) {
    error.message = error.message || 'Internal server error'
    error.status = error.status || 500
    throw error
  }
}

const getFavoriteListFromUser = async (userId) => {
  try {
    const userExists = await Users.findByPk(userId)
    if (!userExists) {
      throw new CustomError(`User with id ${userId} not found`, 404)
    }

    const favoriteList = await Lists.findAll({
      where: {
        userId,
        listType: 'favorite'
      }
    })

    return favoriteList
  } catch (error) {
    error.message = error.message || 'Internal server error'
    error.status = error.status || 500
    throw error
  }
}

const removeFromFavoriteList = async (userId, mediaId, mediaType) => {
  try {
    const userExists = await Users.findByPk(userId)
    if (!userExists) {
      throw new CustomError(`User with id ${userId} not found`, 404)
    }

    const favoriteItemExists = await Lists.findOne({ where: { mediaId, userId, mediaType } })
    if (!favoriteItemExists) {
      throw new CustomError('Item not found in the favorite list', 404)
    }

    await Lists.destroy({
      where: {
        mediaId,
        userId,
        listType: 'favorite'
      }
    })

    return { message: 'Item removed from the favorite list' }
  } catch (error) {
    error.message = error.message || 'Internal server error'
    error.status = error.status || 500
    throw error
  }
}

export {
  addToFavoriteList,
  getFavoriteListFromUser,
  removeFromFavoriteList
}
