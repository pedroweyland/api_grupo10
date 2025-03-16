import axios from 'axios'

const fetchPopularSeries = async (queryParams) => {
    const filter = queryParams.length > 0 ? `?${queryParams.join('&')}` : ''
  
    try {
      const response = await axios.get(`${process.env.URL}tv/popular${filter}`, {
        params: {
          api_key: process.env.API_KEY
        }
      })
      if (response.data.results.length === 0) {
        const error = new Error('NOT FOUND - Serie not found')
        error.status = 404
        throw error
      }
      return response.data
    } catch (error) {
      error.status = error.response?.status || 400
      throw error
    }
  }
  
  export {
    fetchPopularSeries
  }
  