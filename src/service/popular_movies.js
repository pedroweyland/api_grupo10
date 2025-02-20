import axios from 'axios'

const fetchPopularMovies = async (queryParams) => {
  const filter = queryParams.length > 0 ? `?${queryParams.join('&')}` : ''

  try {
    const response = await axios.get(`${process.env.url}movie/popular${filter}`, {
      params: {
        api_key: process.env.API_KEY
      }
    })

    if (response.data.results.length === 0) {
      const error = new Error('NOT FOUND - Page not found')
      error.status = 404
      throw error
    }
  
    return response.data
  } catch (error) {
    error.status = error.status || 400
    throw error
  }
}

export{
  fetchPopularMovies
}