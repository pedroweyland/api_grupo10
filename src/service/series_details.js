import axios from 'axios'

const fetchSeriesDetails = async (seriesId) => {
  try {
    const response = await axios.get(`${process.env.URL}tv/${seriesId}`, {
      params: {
        api_key: process.env.API_KEY
      }
    })
    return response.data
  } catch (error) {
    error.status = error.status || 400

    if (error.status === 404) error.message = 'NOT FOUND - Serie not found'
    throw error
  }
}

export {
  fetchSeriesDetails
}
