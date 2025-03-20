import { request, response } from 'express'
import { fetchUpcoming, fetchMovieCredits } from '../service/upcoming.js'

// Integrante Pedro Weyland

const getUpcoming = async (req = request, res = response) => {
  const { page = '', language = '' } = req.query
  const queryParams = []

  if (page) queryParams.push(`page=${page}`)
  if (language) queryParams.push(`language=${language}`)

  try {
    const movies = await fetchUpcoming(queryParams)
    res.status(200).json({
      status: 200,
      data: movies
    })
  } catch (error) {
    res.status(error.status || 500).json({
      status: error.status,
      message: error.message
    })
  }
}

const getMovieCredits = async (req = request, res = response) => {
  const { idMovie = '' } = req.params

  try {
    const credits = await fetchMovieCredits(idMovie)
    res.status(200).json({
      status: 200,
      data: credits
    })
  } catch (error) {
    res.status(error.status || 500).json({
      status: error.status,
      message: error.message
    })
  }
}

export {
  getUpcoming,
  getMovieCredits
}
