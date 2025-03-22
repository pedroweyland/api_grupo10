import Users from '../database/users.js'
import Lists from '../database/lists.js'
import Media from '../database/media.js'
import { fetchSeriesDetails } from './series_details.js'
import { fetchMovieDetails } from './movie_details.js'
import CustomError from '../exceptions/customError.js'

export const addToWatchlist = async ({ userId, movieId, seriesId }) => {
  if (!userId || (!movieId && !seriesId)) {
    throw new CustomError('Missing required fields', 400)
  }

  // Validar que el usuario existe
  const userExists = await Users.findByPk(userId)
  if (!userExists) {
    throw new CustomError(`User with id ${userId} not found`, 404)
  }

  // Consultar la API externa
  const mediaId = movieId || seriesId
  const mediaType = movieId ? 'movie' : 'serie' // Determina si es película o serie
  let mediaData

  try {
    if (movieId) {
      // Obtener detalles de película
      mediaData = await fetchMovieDetails(movieId)
    } else {
      // Obtener detalles de serie
      mediaData = await fetchSeriesDetails(seriesId)
    }
  } catch (error) {
    throw new CustomError(`Error fetching ${mediaType} details: ${error.message}`, 404)
  }

  // Verificar si el contenido existe en la tabla `media`
  const mediaExists = await Media.findByPk(mediaId)
  if (!mediaExists) {
    // Si no existe, agregarlo
    await Media.create({
      id: mediaId,
      type: mediaType,
      title: mediaData.title || mediaData.name,
      release_date: mediaData.release_date || mediaData.first_air_date,
      overview: mediaData.overview,
      poster_path: mediaData.poster_path
    })
  }

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
      overview: mediaData.overview,
      release_date: mediaData.release_date || mediaData.first_air_date,
      poster_path: mediaData.poster_path
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
