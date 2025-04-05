import CustomError from '../exceptions/customError.js'
import Users from '../database/users.js'
import Lists from '../database/lists.js'
import Media from '../database/media.js'
import { fetchSeriesDetails } from './series_details.js'
import { fetchMovieDetails } from './movie_details.js'
import createMedia from '../service/media_list.js'

const addToFavoriteList = async (userId, mediaApiId, mediaType) => {
  try {
    const userExists = await Users.findOne({
      where: {
        id: userId
      }
    })
    if (!userExists) {
      throw new CustomError(`User with id ${userId} not found`, 404)
    }

    let mediaData
    try {
      if (mediaType === 'movie') {
        mediaData = await fetchMovieDetails(mediaApiId)
      } else {
        mediaData = await fetchSeriesDetails(mediaApiId)
      }
    } catch (error) {
      throw new CustomError(`Error fetching ${mediaType} details: ${error.message}`, 404)
    }

    await createMedia(mediaType, mediaData)

    const media = await Media.findOne({
      where: {
        id_media_api: mediaApiId,
        type: mediaType
      }
    })

    const favoriteItemExists = await Lists.findOne({
      where: {
        id_user: userId,
        id_media: media.id,
        type: 'favorite'
      }
    })

    if (favoriteItemExists) {
      throw new CustomError('Item already exists in the favorite list', 409)
    }

    const favoriteItem = await Lists.create({
      id_user: userId,
      id_media: media.id,
      type: 'favorite'
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

    let favoriteList = await Lists.findAll({
      where: {
        id_user: userId,
        type: 'favorite'
      }
    })

    favoriteList = await Promise.all(
      favoriteList.map(async (item) => {
        const media = await Media.findByPk(item.id_media)
        return {
          id: item.id,
          id_user: item.id_user,
          id_media: item.id_media,
          type: item.type,
          media_details: media
        }
      })
    )

    return favoriteList
  } catch (error) {
    error.message = error.message || 'Internal server error'
    error.status = error.status || 500
    throw error
  }
}

const removeFromFavoriteList = async (userId, mediaApiId, mediaType) => {
  try {
    const userExists = await Users.findByPk(userId)
    if (!userExists) {
      throw new CustomError(`User with id ${userId} not found`, 404)
    }

    const media = await Media.findOne({
      where: {
        id_media_api: mediaApiId,
        type: mediaType
      }
    })

    const favoriteItemExists = await Lists.findOne({
      where: {
        id_user: userId,
        id_media: media.id,
        type: 'favorite'
      }
    })

    if (!favoriteItemExists) {
      throw new CustomError('Item not found in the favorite list', 409)
    }

    await Lists.destroy({
      where: {
        id_user: userId,
        id_media: media.id,
        type: 'favorite'
      }
    })

    return 'Item removed from the favorite list'
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
