import axios from 'axios'

const fetchUpcoming = async (queryParams) => {
  const filter = queryParams.length > 0 ? `?${queryParams.join('&')}` : ''

  try {
    const response = await axios.get(`${process.env.url}movie/upcoming${filter}`, {
      params: {
        api_key: process.env.API_KEY
      }
    })

    if (response.data.results.length === 0) {
      const error = new Error('NOT FOUND - Page not found')
      error.status = 404
      throw error
    }

    return response.data.results
  } catch (error) {
    error.status = error.status || 400
    throw error
  }
}

const fetchMovieCredits = async (idMovie) => {
  try {
    const response = await axios.get(`${process.env.url}movie/${idMovie}/credits`, {
      params: {
        api_key: process.env.API_KEY
      }
    })

    return response.data.cast
  } catch (error) {
    error.status = error.status || 400

    if (error.status === 404) error.message = 'NOT FOUND - Movie not found'

    throw error
  }
}

export {
  fetchUpcoming,
  fetchMovieCredits
}
