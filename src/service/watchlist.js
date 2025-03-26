import Users from '../database/users.js'
import Lists from '../database/lists.js'
import Media from '../database/media.js'
import { fetchSeriesDetails } from './series_details.js'
import { fetchMovieDetails } from './movie_details.js'
import CustomError from '../exceptions/customError.js'
import createMedia from '../service/media_list.js'

export const addToWatchlist = async ({ userId, mediaApiId, mediaType }) => {
  if (!userId || !mediaApiId || !mediaType) {
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
      mediaData = await fetchMovieDetails(mediaApiId)
    } else {
      // Obtener detalles de serie
      mediaData = await fetchSeriesDetails(mediaApiId)
    }
  } catch (error) {
    throw new CustomError(`Error fetching ${mediaType} details: ${error.message}`, 404)
  }

  // Insertar en la tabla `media` si no existe
  await createMedia(mediaType, mediaData)

  // Buscar el ID del elemento en la tabla `media`
  const media = await Media.findOne({
    where: {
      id_media_api: mediaApiId,
      type: mediaType
    }
  })

  // Comprobar si ya existe el elemento en la lista
  const existingItem = await Lists.findOne({
    where: {
      id_user: userId,
      id_media: media.id,
      type: 'watchlist'
    }
  })

  if (existingItem) {
    // Si ya existe, devolver un mensaje indicando que el elemento está en la watchlist
    throw new CustomError('Item already exists in the watchlist', 409)
  }

  // Si no existe, agregar el elemento a la watchlist
  const item = await Lists.create({
    id_user: userId,
    id_media: media.id,
    type: 'watchlist'
  })

  return item
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

export const removeFromWatchlist = async ({ userId, mediaApiId, mediaType }) => {
  if (!userId || !mediaApiId || !mediaType) {
    throw new CustomError('Missing required fields', 400)
  }

  // Buscar el ID del elemento en la tabla `media`
  const media = await Media.findOne({
    where: {
      id_media_api: mediaApiId,
      type: mediaType
    }
  })

  // Comprobar si ya existe el elemento en la lista
  const existingItem = await Lists.findOne({
    where: {
      id_user: userId,
      id_media: media.id,
      type: 'watchlist'
    }
  })

  if (existingItem) {
    // Si ya existe, devolver un mensaje indicando que el elemento está en la watchlist
    throw new CustomError('Item already exists in the watchlist', 409)
  }

  // Crea la condición para eliminar
  const condition = {
    id_user: userId,
    id_media: media.id,
    type: 'watchlist'
  }

  const deleted = await Lists.destroy({ where: condition })

  if (!deleted) {
    throw new CustomError('Item not found in watchlist', 404)
  }

  return { message: 'Item removed successfully' }
}
