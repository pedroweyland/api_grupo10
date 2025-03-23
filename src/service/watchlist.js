import Users from '../database/users.js'
import Lists from '../database/lists.js'

import { fetchSeriesDetails } from './series_details.js'
import { fetchMovieDetails } from './movie_details.js'
import CustomError from '../exceptions/customError.js'
import createMedia from '../service/media_list.js'

export const addToWatchlist = async ({ userId, mediaId, mediaType }) => {
  if (!userId || !mediaId || !mediaType) {
    throw new CustomError('Missing required fields', 400)
  }

  // Validar que el usuario existe
  const userExists = await Users.findByPk(userId)
  if (!userExists) {
    throw new CustomError(`User with id ${userId} not found`, 404)
  }

  // Consultar la API externa
  let mediaData

  try {
    if (mediaType === 'movie') {
      // Obtener detalles de película
      mediaData = await fetchMovieDetails(mediaId)
    } else {
      // Obtener detalles de serie
      mediaData = await fetchSeriesDetails(mediaId)
    }
  } catch (error) {
    throw new CustomError(`Error fetching ${mediaType} details: ${error.message}`, 404)
  }

  // Insertar en la tabla `media`
  await createMedia(mediaType, mediaData)

  // Insertar en la tabla `lists`
  const item = await Lists.create({
    id_user: userId,
    id_media: mediaId,
    type: 'watchlist'
  })

  return {
    item,
    mediaDetails: {
      id: mediaId,
      title: mediaData.title || mediaData.name,
      original_title: mediaData.original_title || mediaData.original_name,
      overview: mediaData.overview,
      release_date: mediaData.release_date || mediaData.first_air_date,
      poster_path: mediaData.poster_path,
      vote_average: mediaData.vote_average
    }
  }
}

export const getWatchlist = async (userId) => {
  if (!userId) {
    throw new CustomError('User ID is required', 400)
  }

  // Encuentra todos los elementos de la watchlist del usuario
  const items = await Lists.findAll({
    where: { id_user: userId, type: 'watchlist' }
  })

  return items
}

export const removeFromWatchlist = async ({ userId, movieId, seriesId }) => {
  if (!userId || (!movieId && !seriesId)) {
    throw new CustomError('Missing required fields', 400)
  }

  // Crea la condición para eliminar
  const condition = {
    id_user: userId,
    id_media: movieId || seriesId, // Usa el id_media para identificar el contenido
    type: 'watchlist'
  }

  const deleted = await Lists.destroy({ where: condition })

  if (!deleted) {
    throw new CustomError('Item not found in watchlist', 404)
  }

  return { message: 'Item removed successfully' }
}
