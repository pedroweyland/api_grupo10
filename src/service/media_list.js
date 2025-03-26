import Media from '../database/media.js'

const createMedia = async (mediaType, mediaData) => {
  // Verificar si el contenido existe en la tabla `media`
  const mediaExists = await Media.findOne({
    where: {
      id_media_api: mediaData.id,
      type: mediaType
    }
  })
  if (!mediaExists) {
    // Convertir la fecha a formato válido (YYYY-MM-DD)
    let releaseDate = mediaData.release_date || mediaData.first_air_date || null
    if (releaseDate) {
      const parsedDate = new Date(releaseDate)
      if (!isNaN(parsedDate.getTime())) {
        releaseDate = parsedDate.toISOString().split('T')[0] // Formato YYYY-MM-DD
      } else {
        releaseDate = null // Si la fecha es inválida, la guardamos como null
      }
    }
    // Si no existe, agregarlo
    await Media.create({
      id_media_api: mediaData.id,
      type: mediaType,
      title: mediaData.title || mediaData.name,
      original_title: mediaData.original_title || mediaData.original_name,
      release_date: releaseDate,
      overview: mediaData.overview,
      poster_path: mediaData.poster_path,
      vote_average: mediaData.vote_average
    })
  }
}

export default createMedia
