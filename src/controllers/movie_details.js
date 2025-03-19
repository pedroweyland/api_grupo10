import { request, response } from 'express'
import { fetchMovieDetails } from '../service/movie_details.js'

// Integrante Galo Santopietro
const getMovieDetails = async (req = request, res = response) => {
  const { idMovie = '' } = req.params

  try {
    const data = await fetchMovieDetails(idMovie)
    res.status(200).json({
      status: 200,
      data
    })
  } catch (error) {
    res.status(error.status || 500).json({
      status: error.status,
      message: error.message
    })
  }
}

export {
  getMovieDetails
}
