import axios from 'axios'

const fetchMovieDetails = async (idMovie) => {
  try {
    const response = await axios.get(`${process.env.URL}movie/${idMovie}`, {
      params: {
        api_key: process.env.API_KEY_TMDB
      }
    })

    return response.data
  } catch (error) {
    error.status = error.status || 400

    if (error.status === 404) error.message = 'NOT FOUND - Movie not found'

    throw error
  }
}

export {
  fetchMovieDetails
}
